import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

var cloudinary = window.cloudinary

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

window.onload = addElement

addElement()

function addElement () {
  var script = document.createElement('script')
  script.innerHTML = `!function(){"use strict";var e=self.console,n=Object.freeze({NONE:0,ERROR:1,WARN:2,INFO:3,LOG:4}),t=["error","warn","info","log"],i=window.Rollbar&&window.Rollbar.options.enabled,o=["error","warn","log"],r=void 0!==e&&void 0!==e.log&&void 0!==e.error&&void 0!==e.debug&&void 0!==e.warn&&"function"==typeof Function.prototype.apply,a=void 0,l=void 0,u=function(n,t,i,o){return e[t]?i?e[t](i):e[t]():n.log("----------- "+(i||o)+" ----------- ")},d=function(n){var l=n.level,d={setLevel:function(e){return l=e,d},getLevel:function(){return l||a}};return t.forEach(function(n){d[n]=function(){for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return function(n,a,l){if(r){var u,d=t.indexOf(a),c=n.getLevel();return~d&&c>=d+1&&e[a].apply(e,l),i&&~o.indexOf(a)&&(u=window.Rollbar)[a].apply(u,l),n}}(d,n,l)}}),d.groupCollapsed=function(e){return u(d,"groupCollapsed",e,"GROUP START")},d.group=function(e){return u(d,"group",e,"GROUP START")},d.groupEnd=function(){return u(d,"groupEnd",null,"GROUP END")},d.devError=function(){"production"!==process.env.NODE_ENV&&d.error.apply(d,arguments)},d.debug=d.log,d},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.level=e.level||n.NONE;var t=e.newInstance||!l?d(e):l;return l||e.newInstance||(l=t),t},s={LOCAL:"local",URL:"url",CAMERA:"camera",IMAGE_SEARCH:"image_search",DROPBOX:"dropbox",FACEBOOK:"facebook",INSTAGRAM:"instagram"},f="upload-finish",p="widget-view-change",g="uw_init",v="uw_mini",h="uw_config",m="uw_prepare",y="uw_prebatch",w="uw_event",b="uw_show",x="uw_hide",E="uw_tags",C="uw_file",O=["buttonCaption","buttonClass","queueViewPosition","controlVpMeta","fieldName","frameZIndex","widgetHost"],k=function(e,n,t,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,r=(o=o||self).document.createElement(e);if(n=n||{},t&&(n.class=t),n){var a=n;Object.keys(a).forEach(function(e){return r.setAttribute(e,a[e])})}if(i){var l=i;Object.keys(l).forEach(function(e){return r.dataset[e]=l[e]})}return r},N=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n=n||self,"string"==typeof e?n.document.querySelector(e):e},R=function(e){e.parentNode&&e.parentNode.removeChild(e)},S=function(e,n){Object.keys(n).forEach(function(t){e.style[t]=n[t]})},_=function(e){S(e,{display:"none"})},L="FileReader"in self&&"FileList"in self&&"Blob"in self,M=function(e){return"string"==typeof e},W=function(e){return"function"==typeof e},I=function(e,n){var t=null;if(e.closest)t=e.closest(n);else{var i=self.document.querySelectorAll(n);i&&i.length&&(t=Array.prototype.find.call(i,function(n){return t=e,!!(n.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY);var t}))}return t},P=c(),T=function(e,n,t){var i,o,r=/cloudinary\.com/;P.log("[all.comms]: using pm domain regex =  "+r.toString());var a=function(e,n){t.widgetCallback&&t.widgetCallback(n,e)},l=function(e){var n=void 0;try{M(e)&&(n=JSON.parse(e))}catch(n){P.log("[all.comms]: failed to deserialize message: ",e)}return n},u=function(e,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?{type:e,data:n}:function(e,n){return JSON.stringify({type:e,data:n})}(e,n);t.postMessage(i)},d=((i={})[p]=function(e){t.handleWidgetViewTypeChange(e.info)},i[f]=function(e,n){if(P.log("[all.comms]: received uploaded file data - ",e),e.info.failed)n.inlineMode&&a(null,e.info),t.triggerEvent("cloudinarywidgetfileuploadfail",[e.info]);else{var i=e.info.uploadInfo,o={event:"success",info:i};t.processUploadResult(i),a(o),t.triggerEvent("cloudinarywidgetfileuploadsuccess",o)}},i),c=((o={})[w]=function(e,n){e.event&&d[e.event]?d[e.event](e,n):a({info:e.info,event:e.event,uw_event:!0,data:e})},o[x]=function(){t.hideWidget();var e={event:"close",info:{message:"user closed the widget"}};a(e),t.triggerEvent("cloudinarywidgetclosed",e)},o[m]=function(e,n){var t=function(e){return u(m,e)},i=n.prepareUploadParams||n.uploadSignature;"function"==typeof i?i(function(e){P.log("[all.comms]: received prepared data from client: ",e);var n=[].concat(e).map(function(e){return"string"==typeof e?{signature:e}:e});t(n)},e.request):"string"==typeof n.uploadSignature&&t([{signature:n.uploadSignature}])},o[y]=function(e,n){if("function"!=typeof n.preBatch)throw new Error("UploadWidget - preBatch handler not found!");n.preBatch(function(e){P.log("[all.comms]: received pre-batch data from client: ",e),u(y,e)},e.request)},o[E]=function(e,n){n.getTags(function(e){P.log("[all.comms]: received tags from client: ",e),u(E,{tags:e})},e.prefix)},o);return window.addEventListener("message",function(n){var t=e();if(n.origin.match(r)){var i=l(n.data),o=!1;i&&i.widgetId&&i.widgetId===t.widgetId&&(P.log("[all.comms]: received message from widget: "+t.widgetId,i),c[i.type]&&(o=!0,c[i.type](i,t))),o||P.log("[all.comms]: received invalid message, invalid widget ID or invalid type! ",n.data)}}),{sendMessage:u}},U=1,j=2,A=8,F=500,H=55,z="right:35px",q="(min-width: 767px)",D=610,V=/(left|right)(?::([0-9a-z]*))?$/,B=function(e,n,t){var i=e(),o={raw:z,side:null,offset:null},r=k("iframe",{frameborder:"no",allow:"camera",width:"100%",height:"100%"},null,{test:"uw-iframe"});S(r,{border:"none",background:"transparent"});var a=window.matchMedia(q),l=i.inlineContainer&&N(i.inlineContainer),u=i.frameContainer&&N(i.frameContainer);l&&S(l,{minHeight:D+"px",overflowX:"hidden"}),u&&S(u,{position:"relative"});var d=null,c=!1,s="",f=!1,p=!1,g=!1,v=!1,h=void 0,m=function(e){e.preventDefault()},y=function(){if(!l&&!u){var n=g&&v;h.body&&(d=null===d?h.body.style.overflow:d,h.body.style.overflow=n?"hidden":d),function(e){e?h.addEventListener("touchmove",m):h.removeEventListener("touchmove",m)}(n),function(n){if(!0===e().controlVpMeta)if(n){var t=N('head meta[name="viewport"]',self.top);t||(t=k("meta",{name:"viewport"},null,null,self.top),h.head.appendChild(t)),t.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}else{var i=N('head meta[name="viewport"]',self.top);c&&i?i.content=s:i&&h.head.removeChild(i)}}(n)}},w=function(){f&&p&&(_(r),g=!1,y())},b=function(){f&&p&&(S(r,{display:"block"}),g=!0,y(),r.focus())},x=function(){var e;e=r,(l||(u||void 0)||document.body).appendChild(e),l||h.addEventListener("keyup",function(e){27===e.keyCode&&w()})},E=function(n){var t=Math.min(F,window.innerWidth)+"px";S(r,{width:n?"100%":t,bottom:n?"0px":"5px",height:H+"px",top:""}),function(n){var t=e();if(t.queueViewPosition&&t.queueViewPosition!==o.raw||!o.side||!o.offset){o.raw=t.queueViewPosition||o.raw;var i=V.exec(o.raw);if(!i)throw new Error("queueViewPosition param ("+(t.queueViewPosition||"")+') is invalid. (valid ex: "right:35px")');o.side=i[1],o.offset=i[2]||"0"}var a=void 0;a=n?{left:"0px",right:"0px"}:"left"===o.side?{left:o.offset||"",right:""}:{right:o.offset||"",left:""},S(r,a)}(n),v=!1,y()},C=function(){S(r,l?{height:D+"px",width:"100%"}:{width:"100%",height:"100%",top:"0px",left:"0px",bottom:""}),v=f,y()},O=function(){b(),C()},R=function(e){E(!e.matches)},L=function(e){switch(a.removeListener(R),e.type){case U:case j:C();break;case A:E(!a.matches),a.addListener(R)}},M=function(e){return r.contentWindow.postMessage(e,n)},W=function(){return p},I=function(){return f},P=function(){w(),f=!1},T=function(e){f=!0,p&&(O(),e&&e.files&&_(r))},B=function(){f&&p&&!v&&E(!a.matches)},G=function e(){r.removeEventListener("load",e),p=!0,t({open:T,close:P,showWidget:b,hideWidget:w,isFrameReady:W,isWidgetOpen:I,postMessage:M,handleWidgetViewTypeChange:L,optionsUpdated:B}),O()};!function(t){h=function(){var e=self.document;try{e=self.top.document}catch(e){}return e}();var i=function(e){var n=[];return e.debug&&n.push("debug=true"),e.dev&&n.push("dev=true"),e.cloudName&&n.push("cloudName="+e.cloudName),n.push("pmHost="+self.location.protocol+"//"+self.location.host),n}(t),o=n+"?"+i.join("&");r.setAttribute("src",o),_(r),S(r,{position:l?null:u?"absolute":"fixed",zIndex:l?null:t.frameZIndex||"1000000"}),r.addEventListener("load",G),function(){if(!0===e().controlVpMeta){var n=N('head meta[name="viewport"]',self.top);n&&(s=n.content,c=!0)}}(),x()}(i)},G="fetch"in self,$="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},K=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments[2],i=arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=t&&"object"===(void 0===t?"undefined":$(t))?JSON.stringify(t):t,a=G;return(a?self.fetch(e,J({method:n,body:r,headers:i?new Headers(i):void 0},o.fetchOptions)):new Promise(function(t,a){var l=new XMLHttpRequest;l.open(n,e),o.responseType&&(l.responseType=o.responseType),l.onerror=function(){return a(l)},l.ontimeout=function(){return a(l)},l.onload=function(){return t(l)},function(e,n){if(n){var t=n;Object.keys(t).forEach(function(n){return e.setRequestHeader(n,t[n])})}}(l,i),l.send(r)})).then(function(e,n,t){var i=n.responseType,o=function(e){return t.response=e,t};return!n.dontRead&&e&&t.ok?i&&t[i]?t[i]().then(o):t.json().then(o):t}.bind(null,a,o))},X=c(),Q="cloudinary-button",Z="cloudinary-thumbnails",Y="cloudinary-thumbnail",ee="cloudinary-delete",ne=function(e){return e.fieldName||"image"},te=function(e,n){var t=n.form;return!t&&e&&(t=I(e,"form")),t},ie=function(e,n,t){var i=te(n,t);i&&(i=N(i))&&function(e,n,t){var i=k("input",{type:"hidden",name:ne(t)},null,{cloudinaryPublicId:e.public_id});i.value=[e.resource_type,e.type,e.path].join("/")+"#"+e.signature;try{i.dataset.cloudinary=JSON.stringify(e)}catch(e){X.error("[all.pageIntegrations]: failed to add info as serialized data attribute")}n.appendChild(i)}(e,i,t)},oe=function(e,n,t,i,o,r){e.addEventListener("click",function a(l){var u=function(e){return e.deleteHost?e.deleteHost:"https://api"+(e.dev?"-dev":e.staging?"-staging":"")+".cloudinary.com"}(o)+"/v1_1/"+o.cloudName+"/delete_by_token";return X.log("[all.pageIntegrations]: \n        about to send delete request with token: "+i.delete_token+" to : "+u),l.preventDefault(),K(u,"POST",{token:i.delete_token},{"Content-Type":"application/json"},{dontRead:!0}).then(function(l){200===l.status&&(X.log("[all.pageIntegrations]: successfully deleted file"),e.removeEventListener("click",a),function(e,n,t,i){R(e);var o=te(n,i);if(o){var r=o.querySelector('input[name="'+ne(i)+'"][data-cloudinary-public-id="'+t.public_id+'"]');r&&R(r)}}(n,t,i,o),r.triggerEvent("cloudinarywidgetdeleted",i))}).catch(function(e){X.warn("[all.pageIntegrations]: failed to delete file with status: "+e.status)})})},re=function(e,n,t,i){if(!1!==t.thumbnails&&(t.thumbnails||n)){var o=!0,r=N("."+Z);if(r||(o=!1,r=k("ul",null,Z)),r.appendChild(function(e,n,t,i){var o=k("li",null,Y,{cloudinary:JSON.stringify(e)}),r=void 0;e.thumbnail_url?(r=k("img",{src:e.thumbnail_url})).addEventListener("load",function e(){o.classList.add("active"),r.removeEventListener("load",e)}):(r=k("span")).textContent=e.public_id;if(o.appendChild(r),e.delete_token){var a=k("a",{href:"#"},ee);a.textContent="x",o.appendChild(a),oe(a,o,n,e,t,i)}return o}(e,n,t,i)),!o){X.log("[all.pageIntegrations]: adding thumbnails list to dom");var a=t.thumbnails&&N(t.thumbnails);a?a.appendChild(r):n&&n.insertAdjacentElement("afterend",r)}}},ae=function(e,n){return 0===n?e:e.substr(0,1).toUpperCase()+e.substr(1)},le=function(e){return Object.keys(e).reduce(function(n,t){return n[t.indexOf("_")>0?function(e){return e.split("_").map(ae).join("")}(t):t]=e[t],n},{})},ue=["keepWidgetOpen","stylesheet"],de=Object.prototype.toString,ce=function(e){return ue.forEach(function(n){void 0!==e[n]&&function(){var e;(e=console).warn.apply(e,arguments)}("Cloudinary.UploadWidget - '"+n+"' is no longer used in this version.")})},se=function(e){return e?le(e):{}},fe=c(),pe=c(),ge=function(e){var n=null,t=function(n){var t=n.file,i=n.result,o=n.index,r=n.count;e.sendMessage(C,{lastModified:t.lastModified,lastModifiedDate:t.lastModifiedDate,name:t.name,size:t.size,type:t.type,file:i,index:o,count:r},!0)},i=function(e,i,o,r){var a,l,u,d,c,s,f,p=void 0;return!r.maxFileSize||r.maxFileSize>0&&e.size<=r.maxFileSize?(n||(a=[],l=new FileReader,u=null,d=function(){u&&u.readResolve({file:u.file,index:u.index,count:u.count,result:l.result}),c()},c=function(){u=null,l.removeEventListener("load",d,!1),l.removeEventListener("error",s,!1),a.length&&f(a.shift())},s=function(){fe.log("[utils.fileReader]: failed to read file",l.error),u&&u.readReject(l.error),c()},f=function(e){u=e,l.addEventListener("load",d,!1),l.addEventListener("error",s,!1),l.readAsDataURL(e.file)},n={read:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise(function(i,o){var r={file:e,index:n,count:t,readResolve:i,readReject:o};1!==l.readyState?f(r):a.push(r)})}}),p=n.read(e,i,o).then(t).catch(function(n){pe.error("[global.all.uploadsHandler]: failed to send file data to widget for upload",n,e)})):pe.log("[global.all.uploadsHandler]: provided file is larger than max file size configured",e),p},o=function(n,t){return Promise.race(Array.prototype.map.call(n,function(o,r){var a,l=null;return a=o,L&&(a instanceof File||"[object File]"===a.toString())?l=i(o,r,n.length,t):M(o)?e.sendMessage(C,{file:o,index:r,count:n.length}):pe.warn("[global.all.uploadsHandler]: unknown type of object sent to upload",o),l}))};return{handleFiles:function(e,n){return e&&e.files?o(e.files,n):Promise.resolve()}}},ve=c(),he=0,me=function(e,n){var t=function(e,n){if(e=e||{},"[object Object]"!==de.call(e))throw new Error("[Cloudinary.UploadWidget]: widget options must be a valid Object");var t=se(e);return t.secure=!1!==t.secure,t.requirePrepareParams=!!t.prepareUploadParams||!!t.uploadSignature,t.useTagsCallback=W(t.getTags),t.usePreBatchCallback=W(t.preBatch),t.inlineMode=!!t.inlineContainer,t.fieldName=e.fieldName||n&&n.getAttribute("name")||null,ce(t),t}(e,n);return he+=1,t.widgetId="widget_"+he,t},ye=function(e,n,t){t=function(e,n){var t=e||n&&n.element;if(t){try{t=N(t)}catch(e){throw new Error("[Cloudinary.UploadWidget]: 'element' param must either be a valid HTMLElement or a selector string")}if(!t||!t.nodeType)throw new Error("[Cloudinary.UploadWidget]: 'element' param must resolve to a valid HTMLElement")}return t}(t,e);var i=me(e,t);if(i.inlineContainer&&!N(i.inlineContainer))throw new Error("[Cloudinary.UploadWidget]: 'inlineContainer' param must either be a valid HTMLElement or a selector string");delete i.element;var o,r=void 0,a=void 0,l=void 0,u=function(e,n){i.$&&i.$(t||i.form||document).trigger(e,n)},d=function(e){return r?r.then(e).catch(function(e){return ve.error("Cloudinary.UploadWidget - encountered error ! ",e)}):ve.error("Cloudinary.UploadWidget - Widget frame API not ready yet!")},c=function(e,n){return d(function(t){t.open(n),t.isFrameReady()&&(a.sendMessage(b,{source:e,options:n},!0),l.handleFiles(n,f()).then(function(){setTimeout(function(){t.showWidget()},150)}))})},s=function(e){return d(function(n){var t,o,r=se(e);a.sendMessage(h,r),t=r,o=J({},i),O.forEach(function(e){void 0!==t[e]&&(o[e]=t[e])}),i=o,n.optionsUpdated()})},f=function(){return i};return o=function(){var e=i.secure?"https:":"http:",n=void 0;if(!0===i.dev)n="//widget-dev.cloudinary.com/index.html";else{var t="//widget"+(!0===i.staging?"-staging":"")+".cloudinary.com/v2.0/n/";n=i.widgetHost||t+i.cloudName+"/"+i.widgetVersion+"/index.html"}return n=0!==n.indexOf("http")?e+n:n}(),(r=function(e,n){return new Promise(B.bind(null,e,n))}(f,o)).then(function(e){a=T(f,0,J({triggerEvent:u,processUploadResult:function(e){return function(e,n,t,i){ie(e,n,t),re(e,n,t,i)}(e,t,f(),{triggerEvent:u})},widgetCallback:n},e));var i=f();a.sendMessage(g,J({},i,{showOnStart:e.isWidgetOpen()})),l=ge(a),t&&function(e,n,t){var i=k("a",{href:"#"},t.buttonClass||Q);i.innerHTML=t.buttonCaption||"Upload image",e.style.display="none",e.parentNode&&e.parentNode.insertBefore(i,e.previousSibling),i.addEventListener("click",function(e){return n(),e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),!1})}(t,c,i)}),{open:function(e,n){return c(e,n),this},update:function(e){var n=this;return s(e).then(function(){return n})},close:function(e){return function(e){d(function(n){n.close(),a.sendMessage(x,e)})}(e),this},hide:function(){return d(function(e){return e.hideWidget()}),this},show:function(){return d(function(e){return e.showWidget()}),this},minimize:function(){return d(function(){a.sendMessage(v)}),this}}},we=c();!function(e){var t,i={cloudName:null,apiKey:null},o=e.jQuery?e.jQuery:e.$&&e.$.fn&&e.$.fn.jquery?e.$:null,r=e.location.search.indexOf("debug=true")>-1,l=e.location.search.indexOf("dev=true")>-1;t=r?n.LOG:n.WARN,a=t,function(){try{var e=k("style",{id:"cloudinary-uw-page-styles",type:"text/css"});e.innerHTML=".cloudinary-thumbnails { list-style: none; margin: 10px 0; padding: 0 }\n        .cloudinary-thumbnails:after { clear: both; display: block; content: '' }\n        .cloudinary-thumbnail { float: left; padding: 0; margin: 0 15px 5px 0; display: none } \n        .cloudinary-thumbnail.active { display: block } \n        .cloudinary-thumbnail img { border: 1px solid #01304d; border-radius: 2px; -moz-border-radius: 2px; -webkit-border-radius: 2px } \n        .cloudinary-thumbnail span { font-size: 11px; font-family: Arial, sans-serif; line-height: 14px; border: 1px solid #aaa; max-width: 150px; word-wrap: break-word; word-break: break-all; display: inline-block; padding: 3px; max-height: 60px; overflow: hidden; color: #999; } \n        .cloudinary-delete { vertical-align: top; font-size: 13px; text-decoration: none; padding-left: 2px; line-height: 8px; font-family: Arial, sans-serif; color: #01304d }\n        .cloudinary-button { background-color: #0078FF; color: #FFFFFF; text-decoration: none; font-size: 14px; line-height: 28px; height: 28x; cursor: pointer; font-weight: normal; display: inline-block; border-radius: 4px; padding: 10px 14px;}\n        .cloudinary-button:hover {-webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .5); box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .5); } ";var n=N("head");n&&n.appendChild(e)}catch(e){we.error("[all.pageStyles]: failed to apply styles")}}();var u=e.cloudinary=e.cloudinary||{};u.applyUploadWidget=function(e,n,t){return ye(function(e){return J({},i,{dev:l,debug:r},e,{widgetVersion:"142",$:o})}(n),t,e)},u.createUploadWidget=function(e,n){return u.applyUploadWidget(null,e,n)},u.openUploadWidget=function(e,n){return u.createUploadWidget(e,n).open()},u.setCloudName=function(e){i.cloudName=e},u.setAPIKey=function(e){i.apiKey=e},u.WIDGET_SOURCES=J({},s),u.WIDGET_VERSION="142",o&&(o.fn.cloudinary_upload_widget=function(e,n){u.applyUploadWidget(o(this)[0],e,n)})}(self)}();`
  document.head.appendChild(script)

  // make widget with launch button
  var widg = document.createElement('div')
  widg.innerHTML = `<div>
                      <button id="cl-button"
                              class="myBtn"
                              onclick="launchCML()">
                        UPPLADDA
                      </button>
                    </div>`
  widg.style.position = 'fixed'
  widg.style.background = 'green'
  widg.style.top = '60px'
  document.body.appendChild(widg)

  var goToSite = document.createElement('div')
  goToSite.innerHTML = `<div>
                         <a href='tylsyl.com' />
                           <button>
                              Gå TillSi
                            </button>
                          </a>
                        </div>`
  goToSite.style.position = 'fixed'
  goToSite.style.width = '80px'
  goToSite.style.height = '50px'
  goToSite.style.top = '250px'
  document.body.appendChild(goToSite)

  // unnecessary since in template?
  // addEventListener, w/ callback launchCML
  widg.addEventListener('click', launchCML)

  // replace new blog button w/ nya
  var newBlogButton = document.getElementsByClassName('nc-collectionPage-topNewButton')
  newBlogButton[0].innerHTML = '<h1>NYA</h1>'

  document.body.getElementsByClassName('nc-appHeader-content')[0].style.visibility = 'hidden'
}

function launchCML () {
  cloudinary.applyUploadWidget('#upload_widget_opener', {
    cloud_name: 'cloudimgts',
    upload_preset: 'aqga34kp',
    api_key: '739913194731388',
    button_class: 'myBtn'
  },
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log(result)
    }
  })
}
// window.ml = cloudinary.openMediaLibrary({
// cloud_name: 'cloudimgts',
// upload_preset: 'aqga34kp',
// api_key: '739913194731388',
// button_class: 'myBtn',
// default_transformations: [{ quality: 'auto' }, { format: 'auto' }],
// insert_transformation: true
// }, {
// insertHandler: function (data) {
// data.assets.forEach(asset => {
// console.log('Inserted asset:',
// JSON.stringify(asset, null, 2))
// })
// }
// }, document.getElementById('open-btn'))
// }

/*!
 * Run event after the DOM is ready
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn Callback function
 */
var ready = function (fn) {
  // Sanity check
  if (typeof fn !== 'function') return

  // If document is already loaded, run method
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    return fn()
  }

  // Otherwise, wait until document is loaded
  document.addEventListener('DOMContentLoaded', fn, false)
}

ready(function () {
  // hide shit
  document.body.getElementsByClassName('nc-collectionPage-topHeading')[0].style.visibility = 'hidden'
  document.body.getElementsByClassName('nc-collectionPage-sidebarHeading')[0].style.visibility = 'hidden'

  // highlight search as a reminder that u can search all posts
  document.body.getElementsByClassName('nc-collectionPage-sidebarSearch')[0].style.width = '300px'
})
