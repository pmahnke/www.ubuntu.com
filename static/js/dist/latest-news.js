var canonicalLatestNews=function(e){"use strict";function i(){var e=document.querySelector("[data-js='latest-news']");e&&e.classList.remove("u-hide")}function m(e){var t=new Date(e);return t.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+" "+t.getFullYear()}function n(e,t,a){var r,i,d,n=h(t),l=n.querySelector(".article-time"),o=n.querySelector(".article-link"),c=n.querySelector(".article-title"),u=n.querySelector(".article-image"),s="";return a.hostname&&(s="https://"+a.hostname),e._embedded&&e._embedded["wp:featuredmedia"]&&e._embedded["wp:featuredmedia"][0]&&e._embedded["wp:featuredmedia"][0].media_details&&e._embedded["wp:featuredmedia"][0].media_details.width&&e._embedded["wp:featuredmedia"][0].media_details.height&&(i={url:(r=e._embedded["wp:featuredmedia"][0]).source_url,alt:r.alt_text,width:r.media_details.width,height:r.media_details.height}),l&&(l.setAttribute("datetime",e.date),l.innerText=m(e.date)),o&&(o.href=s+"/blog/"+e.slug,a.gtmEventLabel&&(o.onclick=function(){dataLayer.push({event:"GAEvent",eventCategory:"blog",eventAction:a.gtmEventLabel+" news link",eventLabel:e.slug})})),c&&(c.innerHTML=e.title.rendered),u&&i&&((d=document.createElement("img")).setAttribute("src",i.url),d.setAttribute("alt",i.alt),d.setAttribute("width",i.width),d.setAttribute("height",i.height),u.appendChild(d)),n}function h(e){var t,a=document.querySelector(e);if("content"in a)t=document.importNode(a.content,!0);else{t=document.createDocumentFragment();for(var r=0;r<a.childNodes.length;r++)t.appendChild(a.childNodes[r].cloneNode(!0))}return t}function d(d){return function(e){for(var t=document.querySelector(d.articlesContainerSelector);t.hasChildNodes();)t.removeChild(t.lastChild);var a,r,i=JSON.parse(e.target.responseText);"spotlightContainerSelector"in d&&(a=document.querySelector(d.spotlightContainerSelector),(r=i.latest_pinned_articles[0])&&a.appendChild(n(r,d.spotlightTemplateSelector,d))),i.latest_articles&&i.latest_articles.forEach(function(e){t.appendChild(n(e,d.articleTemplateSelector,d))})}}function t(e){var t="https://ubuntu.com/blog/latest-news",a=[];i(),e.limit&&a.push("limit="+e.limit),e.tagId&&a.push("tag-id="+e.tagId),e.groupId&&a.push("group-id="+e.groupId),a.length&&(t+="?"+a.join("&"));var r=new XMLHttpRequest;r.addEventListener("load",d(e)),r.open("GET",t),r.send()}return void 0===window.fetchLatestNews&&(window.fetchLatestNews=t),e.articleDiv=n,e.fetchLatestNews=t,e.formatDate=m,e.getTemplate=h,e.latestArticlesCallback=d,e.revealSection=i,e}({});
//# sourceMappingURL=latest-news.js.map
