import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';

const scriptGen = document.createElement('script');
const cloudinarySrcScript = `!function(){"use strict";var e=self.console,n=Object.freeze({NONE:0,ERROR:1,WARN:2,INFO:3,LOG:4}),t=["error","warn","info","log"],r=void 0!==e&&void 0!==e.log&&void 0!==e.error&&void 0!==e.debug&&void 0!==e.warn&&"function"==typeof Function.prototype.apply,o=void 0,i=void 0,a=function(n,t,r,o){return e[t]?r?e[t](r):e[t]():n.log("----------- "+(r||o)+" ----------- ")},l=function(n){var i=n.level,l={setLevel:function(e){return i=e,l},getLevel:function(){return i||o}};return t.forEach(function(n){l[n]=function(){for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return function(n,o,i){if(r){var a=t.indexOf(o),l=n.getLevel();return~a&&l>=a+1&&e[o].apply(e,i),n}}(l,n,i)}}),l.groupCollapsed=function(e){return a(l,"groupCollapsed",e,"GROUP START")},l.group=function(e){return a(l,"group",e,"GROUP START")},l.groupEnd=function(){return a(l,"groupEnd",null,"GROUP END")},l.debug=l.log,l},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.level=e.level||n.NONE;var t=e.newInstance||!i?l(e):i;return i||e.newInstance||(i=t),t},c="ML_WIDGET_INIT",u="ML_WIDGET_SHOW",d="ML_WIDGET_HIDE",f="ML_WIDGET_INSERT_DATA",g="ML_WIDGET_EXPOSE_IDENTITY",p=["cloud_name","api_key","username","timestamp","signature","integration"],m=["access_token","redirect_url"],v=["integration","inline_container","z_index","multiple","max_files","default_transformations","insert_caption","remove_header","folder","search","collection","asset","transformation"],y=s(),h=function(e,n){var t=void 0,r=Array.isArray(n.allowedOrigin)?n.allowedOrigin:[n.allowedOrigin],o=n.types,i=function(e){if(!e||!e.length)throw"PostMessage - target not set!"},a=function(e){if(~r.indexOf(e.origin)){t=e.origin;var i=function(e,n){var t=null;try{t="string"==typeof e?JSON.parse(e):e}catch(e){y.error("[postmessage]: failed to parse data from "+n,e)}return t}(e.data,e.origin);i&&(n.validator&&!n.validator(i.data)||i.type&&o[i.type]&&(y.log("[postmessage]: found matching handler for '"+i.type+"' event from: "+e.origin,i.data),o[i.type](i.data,i.type,e,n)))}};return i(r),self.addEventListener("message",a,!1),{send:function(n,r){var o=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).target||t;i(o);try{y.log("[postmessage]: posting message to: "+o),e instanceof HTMLIFrameElement&&(e=e.contentWindow),e.postMessage(JSON.stringify({type:n,data:r}),o)}catch(e){y.error("[postmessage]: failed to post message to target: "+o,e)}},close:function(){return self.removeEventListener("message",a)}}},b=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},_=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};s();!function(e){var t,r=0;e.location.search.indexOf("debug=true")>-1&&(t=n.LOG,o=t);var i=function(n,t,o){var i=void 0,a=void 0,l=null,s=!1,y=!1,w=!!n.inline_container,E="",O=!!n.access_token,L="ml_"+r;r+=1;var I,A,M,T,k,x,N,H,S=function(e){27===e.keyCode&&F.hide()},D="https://"+(!0===n.dev?"dev.cloudinary.com":!0===n.nightly?"nightly.cloudinary.com":!0===n.staging?"staging.cloudinary.com":"cloudinary.com"),R=function(e,n,t){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=(r=[],Object.keys(o).forEach(function(e){return r.push(e+"="+o[e])}),t.filter(function(e){return Boolean(n[e])}).forEach(function(e){return r.push(e+"="+encodeURIComponent(n[e]))}),r),a=D+e+"?"+i.join("&");return{origin:D,href:a}},G=function(e){window.requestAnimationFrame(function(){a.style.padding=e.matches?"25px":"25px 0"})},P=function(e){var n=w?i:a;(function(e){var n=document.body;if(w&&"string"==typeof(n=e.inline_container)&&(n=document.querySelector(n)),!n)throw"Element Not Found ("+e.inline_container+")";return n})(e).appendChild(n),i.focus()},U=function(){var n=w?i:a;y&&s?(n.style.visibility="visible",n.focus(),!w&&e.document.addEventListener("keyup",S)):(n.style.visibility="hidden",e.document.removeEventListener("keyup",S))},W=function(){y=!0,U()},C=function(){!w&&document.body&&(E=document.body.style.overflow,document.body.style.overflow="hidden"),s=!0,U()},j=function(){!w&&document.body&&(document.body.style.overflow=E),s=!1,U()},z=w?t.insertHandler:function(e){t.insertHandler(e),j()};x=_({},n),N=R("/console/media_library/cms",x,p,{pmHost:self.location.protocol+"//"+self.location.host,new_cms:!0,ml_id:L}),H=O?R("/console/api/v1/auth/login_with_oauth_token",_({},n,{redirect_url:N.href}),m).href:N.href,x.mlUrl=N,x.callbacks=t,o&&(I="string"==typeof(M=o)?document.querySelector(M):M,A=e.document.createElement("button"),I.style.display="none",A.setAttribute("class",n.button_class||"cloudinary-button"),A.innerHTML=n.button_caption||"Open Media Library",I.parentNode.insertBefore(A,I.previousSibling),A.addEventListener("click",function(e){return C(),e&&e.preventDefault&&e.preventDefault(),e&&e.stopPropagation&&e.stopPropagation(),!1},!1)),function(t){if((i=e.document.createElement("iframe")).setAttribute("src",t),i.setAttribute("frameborder","no"),i.setAttribute("allow","camera"),w?(i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.style.border="none"):(i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.style.boxShadow="0 0 50px rgba(0, 0, 0, 0.8)"),!w){if((a=e.document.createElement("div")).style.position="fixed",a.style.top="0",a.style.left="0",a.style.height="100%",a.style.width="100%",a.style.boxSizing="border-box",a.style.backgroundColor="rgba(0,0,0,0.5)",a.style.zIndex=n.z_index||99999,matchMedia){var r=window.matchMedia("(min-width: 700px)");r.addListener(G),G(r)}a.style.visibility="hidden",a.appendChild(i)}}(H),l=function(e){return new Promise(function(n,t){var r,o=h(e.ifr,{validator:function(n){return n&&n.mlId&&n.mlId===e.mlId},allowedOrigin:e.mlUrl.origin,types:(r={},b(r,f,function(n){e.callbacks.insertHandler(n)}),b(r,g,function(n){e.callbacks.authenticationHandler(n)}),b(r,d,function(){e.callbacks.hideHandler()}),r)}),i=function(n,t){o.send(n,t,{target:e.mlUrl.origin})};e.ifr.addEventListener("load",function(){i(c,e),e.iframeLoaded(),n({sendMessage:i})}),e.ifr.addEventListener("error",function(){})})}({ifr:i,mlId:L,mlUrl:N,callbacks:_({},t,{insertHandler:z,hideHandler:j}),iframeLoaded:W,config:(T=x,k=v,k.reduce(function(e,n){return void 0!==T[n]?_({},e,b({},n,T[n])):e},{}))}),P(x);var F={show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l.then(function(n){n.sendMessage(u,{mlId:L,options:_({},e,{config:e}),config:e}),C()}),this},hide:function(){return l.then(function(e){e.sendMessage(d,{mlId:L}),j()}),this}};return F};e.cloudinary=e.cloudinary||{},e.cloudinary.openMediaLibrary=function(e,n,t){return i(e,n,t).show(e)},e.cloudinary.createMediaLibrary=function(e,n,t){return i(e,n,t)}}(self)}();`;
scriptGen.innerText = cloudinarySrcScript;

const cloudinary = window.cloudinary;

window.ml = cloudinary.createMediaLibrary({
  cloud_name: 'my_company',
  api_key: '1234567890',
  username: 'john_doe@mycompany.com',
  button_class: 'myBtn',
  button_caption: 'Select Image or Video'
}, {
  insertHandler: function (data) {
    data.assets.forEach(asset => console.log('Inserted asset:', JSON.stringify(asset, null, 2)));
  }
}, document.getElementById('open-btn')
);

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

window.onload = addElement;

addElement();

function addElement () {
  // make widget with launch button
  var widg = document.createElement('div');
  widg.innerHTML = `<div>
                      <button id="cl-button"
                              class="myBtn"
                              onclick="launchCML()">
                        UPPLADDA
                      </button>
                    </div>`;
  widg.style.position = 'fixed';
  widg.style.background = 'green';
  widg.style.top = '60px';
  document.body.appendChild(widg);

  var goToSite = document.createElement('div');
  goToSite.innerHTML = `<div>
                         <a href='tylsyl.com' />
                           <button>
                              Gå TillSi
                            </button>
                          </a>
                        </div>`;
  goToSite.style.position = 'fixed';
  goToSite.style.width = '80px';
  goToSite.style.height = '50px';
  goToSite.style.top = '250px';
  document.body.appendChild(goToSite);

  // replace new blog button w/ nya
  // var newBlogButton = document.getElementsByClassName('nc-collectionPage-topNewButton');
  // newBlogButton[0].innerHTML = '<h1>NYA</h1>';

  // document.body.getElementsByClassName('nc-appHeader-content')[0].style.visibility = 'hidden';
}

// function launchCML () {
//   cloudinary.applyUploadWidget('#upload_widget_opener', {
//     cloud_name: 'cloudimgts',
//     upload_preset: 'aqga34kp',
//     api_key: '739913194731388',
//     button_class: 'myBtn'
//   },
//   (error, result) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log(result)
//     }
//   })
// }

/*!
 * Run event after the DOM is ready
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn Callback function
 */
// var ready = function (fn) {
//   // Sanity check
//   if (typeof fn !== 'function') return

//   // If document is already loaded, run method
//   if (document.readyState === 'interactive' || document.readyState === 'complete') {
//     return fn()
//   }

//   // Otherwise, wait until document is loaded
//   document.addEventListener('DOMContentLoaded', fn, false)
// }

// ready(function () {
//   // hide shit
//   document.body.getElementsByClassName('nc-collectionPage-topHeading')[0].style.visibility = 'hidden'
//   document.body.getElementsByClassName('nc-collectionPage-sidebarHeading')[0].style.visibility = 'hidden'

//   // highlight search as a reminder that u can search all posts
//   document.body.getElementsByClassName('nc-collectionPage-sidebarSearch')[0].style.width = '300px'
// })

// window.ml = cloudinary.openMediaLibrary({
//   cloud_name: 'cloudimgts',
//   upload_preset: 'aqga34kp',
//   api_key: '739913194731388',
//   button_class: 'myBtn',
//   default_transformations: [{ quality: 'auto' }, { format: 'auto' }],
//   insert_transformation: true
// }, {
//   insertHandler: function (data) {
//     data.assets.forEach(asset => {
//       console.log('Inserted asset:',
//         JSON.stringify(asset, null, 2));
//     });
//   }
// }, document.getElementById('open-btn'));
