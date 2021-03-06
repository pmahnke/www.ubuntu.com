# Standard library
from urllib.parse import quote, unquote

# Packages
import flask
import flask_openid
import talisker.requests
from pymacaroons import Macaroon

# Local
from webapp.macaroons import (
    binary_serialize_macaroons,
    MacaroonRequest,
    MacaroonResponse,
)


open_id = flask_openid.OpenID(
    stateless=True, safe_roots=[], extension_responses=[MacaroonResponse]
)
session = talisker.requests.get_session()


def user_info(user_session):
    """
    Checks if the user is authenticated from the session
    Returns True if the user is authenticated
    """

    if "openid" in user_session and "authentication_token" in user_session:
        return {
            "fullname": user_session["openid"]["fullname"],
            "email": user_session["openid"]["email"],
            "authentication_token": user_session["authentication_token"],
        }
    else:
        return None


def empty_session(user_session):
    """
    Remove items from session
    """

    user_session.pop("macaroon_root", None)
    user_session.pop("authentication_token", None)
    user_session.pop("openid", None)


@open_id.loginhandler
def login_handler():
    is_test_backend = flask.request.args.get("test_backend", False)

    api_url = flask.current_app.config["CONTRACTS_LIVE_API_URL"]

    if is_test_backend:
        api_url = flask.current_app.config["CONTRACTS_TEST_API_URL"]

    if user_info(flask.session):
        return flask.redirect(open_id.get_next_url())

    response = session.request(
        method="get", url=f"{api_url}/v1/canonical-sso-macaroon"
    )
    flask.session["macaroon_root"] = response.json()["macaroon"]

    for caveat in Macaroon.deserialize(
        flask.session["macaroon_root"]
    ).third_party_caveats():
        if caveat.location == "login.ubuntu.com":
            openid_macaroon = MacaroonRequest(caveat_id=caveat.caveat_id)
            break

    return open_id.try_login(
        flask.current_app.config["CANONICAL_LOGIN_URL"],
        ask_for=["email", "nickname", "image"],
        ask_for_optional=["fullname"],
        extensions=[openid_macaroon],
    )


@open_id.after_login
def after_login(resp):
    root = Macaroon.deserialize(flask.session.pop("macaroon_root"))
    bound = root.prepare_for_request(
        Macaroon.deserialize(resp.extensions["macaroon"].discharge)
    )
    flask.session["authentication_token"] = binary_serialize_macaroons(
        [root, bound]
    ).decode("utf-8")

    if not resp.nickname:
        return flask.redirect(flask.current_app.config["CANONICAL_LOGIN_URL"])

    flask.session["openid"] = {
        "identity_url": resp.identity_url,
        "nickname": resp.nickname,
        "fullname": resp.fullname,
        "image": resp.image,
        "email": resp.email,
    }

    return flask.redirect(open_id.get_next_url())


def logout():
    return_to = flask.request.args.get("return_to") or flask.request.url_root

    # Make sure return_to is URL encoded
    if return_to == unquote(return_to):
        return_to = quote(return_to, safe="")

    empty_session(flask.session)

    login_url = flask.current_app.config["CANONICAL_LOGIN_URL"]

    return flask.redirect(
        f"{login_url}/+logout?return_to={return_to}&return_now=True"
    )
