!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=32)}([,function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},,function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t,n){var r=n(3),o=n(33);function a(t,n,c){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}e.exports=a},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(38);function o(t,n,a){return"undefined"!=typeof Reflect&&Reflect.get?e.exports=o=Reflect.get:e.exports=o=function(e,t,n){var o=r(e,t);if(o){var a=Object.getOwnPropertyDescriptor(o,t);return a.get?a.get.call(n):a.value}},o(t,n,a||t)}e.exports=o},,function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){var r=n(34),o=n(35),a=n(36),c=n(37);e.exports=function(e){return r(e)||o(e)||a(e)||c()}},function(e,t,n){var r=n(3);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(39),o=n(40);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t,n){var r=n(1),o=n(3),a=n(41),c=n(4);function s(t){var n="function"==typeof Map?new Map:void 0;return e.exports=s=function(e){if(null===e||!a(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return c(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},s(t)}e.exports=s},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),a=n(10),c=n.n(a),s=n(5),i=n.n(s),u=n(6),l=n.n(u),p=n(7),f=n.n(p),d=n(11),v=n.n(d),y=n(12),b=n.n(y),m=n(1),h=n.n(m),g=n(13),j=n.n(g);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b()(this,n)}}window.renderImageBuilder=function(){var e,t=function(e){v()(n,e);var t=x(n);function n(){return i()(this,n),t.apply(this,arguments)}return l()(n,[{key:"push",value:function(e){var t=f()(h()(n.prototype),"push",this).call(this,e);return R(),t}},{key:"pop",value:function(){var e=f()(h()(n.prototype),"pop",this).call(this);return R(),e}},{key:"remove",value:function(e){var t=this.splice(e,1);return R(),t}},{key:"reset",value:function(){for(;this.length>0;)this.pop();R()}}]),n}(j()(Array)),n=new(function(){function e(){i()(this,e),this.states={board:new t,os:new t,snaps:new t}}return l()(e,[{key:"set",value:function(e,n){this.states[e]=o()(t,c()(n)),R()}},{key:"get",value:function(e){return this.states[e]}}]),e}()),r=document.querySelectorAll(".js-boards .js-selection"),a=document.querySelectorAll(".js-os .js-selection"),s=document.querySelector(".js-snap-search"),u=document.querySelector(".js-snap-results"),p=document.querySelector(".js-architecture"),d=document.querySelector(".js-preinstalled-snaps-list"),y=document.querySelector(".js-build-button"),b=document.querySelector(".js-step-2"),m=document.querySelector(".js-step-3"),g=document.getElementById("build-form");E(r,"board"),E(a,"os"),s&&(s.addEventListener("keyup",(function(e){(e.which>=46&&e.which<=90||8==e.which)&&(e.preventDefault(),O())})),s.addEventListener("submit",(function(e){e.preventDefault(),O()})),s.addEventListener("reset",(function(){q()}))),b.classList.add("u-disable"),m.classList.add("u-disable");var _,S,L,w,O=(_=function(){var t=n.get("board")[0],r=n.get("os")[0];u.innerHTML='<p><i class="p-icon--spinner u-animation--spin"></i></p>';var o=s.querySelector(".p-search-box__input");if(o){var a=encodeURI(o.value);fetch("/snaps?q=".concat(a,"&size=12&board=").concat(t,"&system=").concat(r)).then((function(e){return e.json()})).then((function(t){A(e=t.results,u,"Add"),u.querySelectorAll(".js-add-snap").forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var r=t.target.classList.contains("js-add-snap")?t.target:t.target.closest(".js-add-snap");if(!1===T(e[r.dataset.index].package_name,"package_name",n.get("snaps"))){var o=r.closest(".js-snap-search-container");o&&o.classList.add("u-disable"),n.get("snaps").push(e[r.dataset.index]),A(n.get("snaps"),d,"Remove"),k()}}))})),p.querySelector(".js-architecture-detail").innerText=t.architecture,p.classList.remove("u-hide")}))}},S=250,function(){var e=this,t=arguments,n=function(){w=null,L||_.apply(e,t)},r=L&&!w;clearTimeout(w),w=setTimeout(n,S),r&&_.apply(e,t)});function q(){s.querySelector(".p-search-box__input").value="",u.innerHTML=""}function k(){d.querySelectorAll(".js-remove-snap").forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var r=t.target.classList.contains("js-remove-snap")?t.target:t.target.closest(".js-remove-snap");if(n.get("snaps")[r.dataset.index]){var o=T(n.get("snaps")[r.dataset.index].package_name,"package_name",e),a=u.querySelector('[data-container-index="'.concat(o,'"]'));a&&a.classList.remove("u-disable")}n.get("snaps").remove(r.dataset.index),A(n.get("snaps"),d,"Remove"),k()}))}))}function A(e,t,r){t&&(t.innerHTML="",0!==Object.entries(e).length?(e.forEach((function(e,o){var a="";!1!==T(e.package_name,"package_name",n.get("snaps"))&&"Add"===r&&(a="u-disable");var c="Add"===r?"plus":"minus";e.icon_url=e.icon_url?e.icon_url:"https://assets.ubuntu.com/v1/be6eb412-snapcraft-missing-icon.svg",e.validation_icon="verified"===e.developer_validation?'<span class="p-tooltip p-tooltip--top-center" aria-describedby="'.concat(e.package_name,'-tooltip">\n          <img src="https://assets.ubuntu.com/v1/75654c90-rosette.svg">\n          <span class="p-tooltip__message u-align--center" role="tooltip" id="').concat(e.package_name,'-tooltip">Verified account</span>\n        </span>'):"",t.insertAdjacentHTML("beforeend",'<div class="row js-snap-search-container '.concat(a,'" data-container-index="').concat(o,'">\n              <div class="col-5 col-medium-5 col-small-3">\n                <div class="p-media-object u-no-margin--bottom" data-index="').concat(o,'">\n                  <img src="').concat(e.icon_url,'" alt="" class="p-media-object__image">\n                  <div class="p-media-object__details">\n                    <h1 class="p-media-object__title" style="line-height: 1.4rem">').concat(e.title,'</h1>\n                    <p class="p-media-object__content">\n                      ').concat(e.publisher," ").concat(e.validation_icon,'\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class="col-1 col-medium-1 col-small-1">\n                <button class="p-button--neutral js-').concat(r.toLowerCase(),'-snap" data-index="').concat(o,'"><i class="p-icon--').concat(c,'">').concat(r,"</i></button>\n              </div>\n            </div>\n            <hr />"))})),R()):t.innerHTML="Add"==r?"<p>No matching snaps</p>":"<p>None yet</p>")}function E(e,t){e.forEach((function(r){r.addEventListener("click",(function(){!function(e,t){e.forEach((function(e){e.classList.remove("is-selected")})),t.classList.add("is-selected")}(e,r);var o=this.querySelector(".js-name").dataset.value;"board"==t&&(n.set("os",[""]),n.get("snaps").reset(),A(n.get("snaps"),d,"Remove"),k()),n.set(t,[o]),a.forEach((function(e){var t=e.dataset.supports,r=n.get("os")[0],o=n.get("board")[0];r==e.querySelector(".js-name").dataset.value?e.classList.add("is-selected"):e.classList.remove("is-selected"),t.includes(o)?e.closest(".js-selection-container").classList.remove("u-hide"):e.closest(".js-selection-container").classList.add("u-hide")}))}))}))}function R(){n.get("board")&&n.get("board")[0]&&n.get("os")&&n.get("os")[0]?(y.setAttribute("aria-disabled","false"),y.disabled=!1):(y.setAttribute("aria-disabled","true"),y.disabled=!0),function(){var e=g.querySelector('[name="board"]'),t=g.querySelector('[name="system"]'),r=g.querySelector('[name="snaps"]');n.get("board").length>=1&&(e.value=n.get("board")[0]);n.get("os").length>=1&&(t.value=n.get("os")[0]);var o="",a="";n.get("snaps").forEach((function(e){o+="".concat(a).concat(e.package_name),a=","})),r.value=o}(),function(){b.classList.add("u-disable"),m.classList.add("u-disable"),p.classList.add("u-hide"),n.get("board")&&n.get("board")[0]&&b.classList.remove("u-disable");n.get("os")&&n.get("os")[0]&&(m.classList.remove("u-disable"),u.hasChildNodes()&&p.querySelector(".js-architecture-detail").innerHTML.trim()&&p.classList.remove("u-hide"));n.get("os")[0]||q()}()}function T(e,t,n){for(var r=0,o=n.length;r<o;r++)if(n[r][t]===e)return r;return!1}R()}},function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},function(e,t,n){var r=n(9);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t,n){var r=n(9);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){var r=n(1);e.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}}]);
//# sourceMappingURL=imageBuilder.js.map