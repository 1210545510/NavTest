/**
 * Created by shipeng on 5/14/2017.
 */
/* 2017-04-07 17:42:18 */
!function e(t,n,o){function r(a,s){if(!n[a]){if(!t[a]){var d="function"==typeof require&&require;if(!s&&d)return d(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return r(n?n:e)},c,c.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,t,n){!function(e,t){"use strict";function n(){for(var e=M.split("&"),t={},n=0;n<e.length;n++){var o=e[n],r=o.split("=");t[r[0]]=r[1]}return t}function o(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""}function r(){return m=m||t.getElementsByTagName("head")[0],l||(m?l=m.getElementsByTagName("meta"):[])}function i(e){var t,n,i,a=r(),s=a.length;for(t=0;s>t;t++)if(n=a[t],o(n,"name")==e){i=o(n,"content");break}return i}function a(){return i("ahot-aplus")}function s(){var e=i("aplus-rate-ahot-res");return parseFloat(e||"")}function d(){return i("microscope-data")}function c(e,n){var o=e,r=t.getElementById(o);return r||(r=t.createElement("iframe"),r.setAttribute("frameborder","0"),r.style.cssText="width:0;height:0;border:0;display:none;",r.setAttribute("id",o),r.setAttribute("name",o)),n&&r.setAttribute("src",n),r.parentNode||t.body.appendChild(r),r}var u=6;if(!(e._ap_xwj_heat&&u<=e._ap_xwj_heat.version)){var m,l,f=e.performance||e.mozPerformance||e.msPerformance||e.webkitPerformance||{_na:1},h=location,p=location.href,v=h.hostname,g=e.navigator,E=g.appVersion,T=g&&g.userAgent||"",b=a(),y=s(),w=d(),S=t.getElementById("tb-beacon-aplus"),M=o(S,"exparams"),R={layout:0,shouldBindMonitor:!1},x={RATE:{RESOURCE_TIMING:isNaN(y)?.001:y},THRESHOLD:{RESOURCE_TIMING:50},DEBUG:{RESOURCE_TIMING:location.search.indexOf("ap-debug-resource")>-1},ID:{IFRAME:"aplus_iframe_resource_timing",FORM:"aplus_form_resource_timing"}},N=function(e){return"number"==typeof e},I=function(e,t){return e.indexOf(t)>-1},C=function(){return I(M,"atp_isdpp")},O=function(){if(b)return!0;var e,t,n=["item.taobao.com","detail.tmall.com","s.taobao.com"];for(t=n.length,e=0;t>e;e++)if(I(v,n[e]))return!1;return I(p,"/go/act/")?!1:!C()},P=e.attachEvent?function(t){e.attachEvent("onload",t)}:e.addEventListener?function(t){e.addEventListener("load",t,!1)}:function(){},_=function(){for(var e="",t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";e.length<16;)e+=t.substr(Math.floor(62*Math.random()),1);return e},B=function(e){var n,o,r,i,a,s,d=t.getElementsByTagName("*");for(n=[];e&&1==e.nodeType;e=e.parentNode)if(e.id){for(s=e.id,i=0,o=0;o<d.length;o++)if(a=d[o],a.id&&a.id==s){i++;break}if(n.unshift(e.tagName.toLowerCase()+'[@id="'+s+'"]'),1==i)return n.unshift("/"),n.join("/")}else{for(o=1,r=e.previousSibling;r;r=r.previousSibling)r.tagName==e.tagName&&o++;n.unshift(e.tagName.toLowerCase()+"["+o+"]")}return n.length?"/"+n.join("/"):null},L=function(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t+"="+encodeURIComponent(e[t]));return n.join("&")},A=function(e,t,n){var o=Math.max(G.scrollWidth,G.clientWidth),r=G.scrollTop,i=G.scrollLeft,a=t.pageX,s=t.pageY;N(a)||(a=t.clientX+i,s=t.clientY+r);var d,c,u=-1;if(e&&e.getBoundingClientRect&&(c=e.getBoundingClientRect(),u=c.left+i,d=c.top+r),0===n||"0"===n){var m=o>>1;a-=m,u-=m}else 2==n&&(a-=o,u-=o);return{x:a,y:s,ex:u,ey:d}},k=function(e){var t=0;return parseFloat(e.replace(/\./g,function(){return 0===t++?".":""}))},j=function(e,t){var n,o;t[n="trident"]=.1,(o=e.match(/Trident\/([\d.]*)/))&&o[1]&&(t[n]=k(o[1])),t.core=n},D=function(e){var t,n;return(t=e.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/))&&(n=t[1]||t[2])?k(n):0},W=function(e){return e||"other"},U=function(n){function o(){for(var e=[["Windows NT 5.1","winXP"],["Windows NT 6.1","win7"],["Windows NT 6.0","winVista"],["Windows NT 6.2","win8"],["iPad","ios"],["iPhone;","ios"],["iPod","ios"],["Macintosh","mac"],["Android","android"],["Ubuntu","ubuntu"],["Linux","linux"],["Windows NT 5.2","win2003"],["Windows NT 5.0","win2000"],["Windows","winOther"],["rhino","rhino"]],t=0,o=e.length;o>t;++t)if(-1!=n.indexOf(e[t][0]))return e[t][1];return"other"}function r(t,n,o,r){var i,a=e.navigator.mimeTypes;try{for(i in a)if(a.hasOwnProperty(i)&&a[i][t]==n){if(void 0!==o&&r.test(a[i][o]))return!0;if(void 0===o)return!0}return!1}catch(s){return!1}}var i,a,s,d,c,u,m,l,f="",h=f,p=f,v=[6,9],g="{{version}}",T="<!--[if IE "+g+"]><s></s><![endif]-->",b=t&&t.createElement("div"),y=[],w={webkit:void 0,trident:void 0,gecko:void 0,presto:void 0,chrome:void 0,safari:void 0,firefox:void 0,ie:void 0,ieMode:void 0,opera:void 0,mobile:void 0,core:void 0,shell:void 0,phantomjs:void 0,os:void 0,ipad:void 0,iphone:void 0,ipod:void 0,ios:void 0,android:void 0,nodejs:void 0,extraName:void 0,extraVersion:void 0};if(b&&b.getElementsByTagName&&(b.innerHTML=T.replace(g,""),y=b.getElementsByTagName("s")),y.length>0){for(j(n,w),d=v[0],c=v[1];c>=d;d++)if(b.innerHTML=T.replace(g,d),y.length>0){w[p="ie"]=d;break}!w.ie&&(s=D(n))&&(w[p="ie"]=s)}else(a=n.match(/AppleWebKit\/([\d.]*)/))&&a[1]?(w[h="webkit"]=k(a[1]),(a=n.match(/OPR\/(\d+\.\d+)/))&&a[1]?w[p="opera"]=k(a[1]):(a=n.match(/Chrome\/([\d.]*)/))&&a[1]?w[p="chrome"]=k(a[1]):(a=n.match(/\/([\d.]*) Safari/))&&a[1]&&(w[p="safari"]=k(a[1])),/ Mobile\//.test(n)&&n.match(/iPad|iPod|iPhone/)?(w.mobile="apple",a=n.match(/OS ([^\s]*)/),a&&a[1]&&(w.ios=k(a[1].replace("_","."))),i="ios",a=n.match(/iPad|iPod|iPhone/),a&&a[0]&&(w[a[0].toLowerCase()]=w.ios)):/ Android/i.test(n)?(/Mobile/.test(n)&&(i=w.mobile="android"),a=n.match(/Android ([^\s]*);/),a&&a[1]&&(w.android=k(a[1]))):(a=n.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))&&(w.mobile=a[0].toLowerCase()),(a=n.match(/PhantomJS\/([^\s]*)/))&&a[1]&&(w.phantomjs=k(a[1]))):(a=n.match(/Presto\/([\d.]*)/))&&a[1]?(w[h="presto"]=k(a[1]),(a=n.match(/Opera\/([\d.]*)/))&&a[1]&&(w[p="opera"]=k(a[1]),(a=n.match(/Opera\/.* Version\/([\d.]*)/))&&a[1]&&(w[p]=k(a[1])),(a=n.match(/Opera Mini[^;]*/))&&a?w.mobile=a[0].toLowerCase():(a=n.match(/Opera Mobi[^;]*/))&&a&&(w.mobile=a[0]))):(s=D(n))?(w[p="ie"]=s,j(n,w)):(a=n.match(/Gecko/))&&(w[h="gecko"]=.1,(a=n.match(/rv:([\d.]*)/))&&a[1]&&(w[h]=k(a[1]),/Mobile|Tablet/.test(n)&&(w.mobile="firefox")),(a=n.match(/Firefox\/([\d.]*)/))&&a[1]&&(w[p="firefox"]=k(a[1])));i||(i=o());var S,M;if(!r("type","application/vnd.chromium.remoting-viewer")){S="scoped"in t.createElement("style"),M="v8Locale"in e;try{l=e.external||void 0}catch(R){}if(a=n.match(/360SE/))u="360";else if((a=n.match(/SE\s([\d.]*)/))||l&&"SEVersion"in l)u="sougou",m=k(a[1])||.1;else if((a=n.match(/Maxthon(?:\/)+([\d.]*)/))&&l){u="maxthon";try{m=k(l.max_version||a[1])}catch(x){m=.1}}else S&&M?u="360se":S||M||!/Gecko\)\s+Chrome/.test(E)||w.opera||w.trident||(u="360ee")}return(a=n.match(/TencentTraveler\s([\d.]*)|QQBrowser\/([\d.]*)/))?(u="tt",m=k(a[2])||.1):(a=n.match(/LBBROWSER/))||l&&"LiebaoGetVersion"in l?u="liebao":(a=n.match(/TheWorld/))?(u="theworld",m=3):(a=n.match(/TaoBrowser\/([\d.]*)/))&&(u="taobao",m=k(a[1])||.1),w.os=i,w.core=w.core||h,w.shell=p,w.ieMode=w.ie&&t.documentMode||w.ie,w.extraName=u,w.extraVersion=m,w.resolution=e.screen.width+"x"+e.screen.height,w},F=_(),G="BackCompat"==t.compatMode?t.body:t.documentElement,V=h.protocol,q="https:"==V,H=(new Date).getTime(),z=0,X=b?"/ahot.1.2":"/ahot.1.1",Q=V+"//gm.mmstat.com"+X+"?logtype=2&cache=",Y=function(e){this.config=e};Y.prototype={startup:function(){var t=this;this["spm-cnt"]=e.goldlog&&e.goldlog.spm_ab?e.goldlog.spm_ab:null,"complete"===document.readyState?(t.sendPV(),t.sendResourceTiming(),R.shouldBindMonitor&&t.bindMonitor()):P(function(){t.sendPV(),t.sendResourceTiming(),R.shouldBindMonitor&&t.bindMonitor()})},collectPerformanceTiming:function(){var t=f.timing,n={};if(!t)return n;var o,r,i,a={navigationStart:"ns",unloadEventStart:"ues",unloadEventEnd:"uee",redirectStart:"rds",redirectEnd:"rde",fetchStart:"fs",domainLookupStart:"dls",domainLookupEnd:"dle",connectStart:"cs",connectEnd:"ce",secureConnectionStart:"scs",requestStart:"rqs",responseStart:"rps",responseEnd:"rpe",domLoading:"dl",domInteractive:"di",domContentLoadedEventStart:"dcles",domContentLoadedEventEnd:"dclee",domComplete:"dc",loadEventStart:"les",loadEventEnd:"lee"},s=t.navigationStart;for(o in t)r=t[o],i=a[o],i&&(0===r||void 0===r?n[i]="na":"number"==typeof r&&(n[i]=r-s));var d,c;return"number"==typeof t.msFirstPaint?d=t.msFirstPaint:e.chrome&&e.chrome.loadTimes&&(c=e.chrome.loadTimes().firstPaintTime)&&(d=Math.ceil(1e3*c)),"number"==typeof d?d-=s:d="na",n.fp=d,n},collectResourceTiming:function(){if("performance"in e&&"getEntriesByType"in f&&f.getEntriesByType("resource")instanceof Array){var t=[],n=f.getEntriesByType("resource"),o=function(e){return void 0===e||0===e?0:Math.floor(e)};for(var r in n)if(n.hasOwnProperty(r)){var i=n[r];i.initiatorType&&t.push({rs:o(i.redirectStart),re:o(i.redirectEnd),fs:o(i.fetchStart),st:o(i.startTime),dls:o(i.domainLookupStart),dle:o(i.domainLookupEnd),cs:o(i.connectStart),ce:o(i.connectEnd),scs:o(i.secureConnectionStart),resqs:o(i.requestStart),resps:o(i.responseStart),respe:o(i.responseEnd),restype:i.initiatorType,n:i.name})}return t}},sendPV:function(){var e=this;if(!this.initialized){var t,o,r,i,a,s,d,c,u,m,l,f,h,p=1;try{t=U(T),o=t.os,r=t.shell,i=t.core,a=t.resolution,s=t.extraName,d=t.extraVersion,c=o?o+(t[o]?t[o]:""):"",u=r?r+parseInt(t[r]):"",m=i,l=a,f=s?s+(d?parseInt(d):""):""}catch(v){}var g={p:p,o:W(c),b:W(u),w:W(m),s:l,mx:f};this["spm-cnt"]&&(g["spm-cnt"]=this["spm-cnt"].join(".")),goldlog&&goldlog.pvid&&(g["spm-cnt"]+="."+goldlog.pvid),q&&(g.isps=1),(h=n().trid)&&(g.trid=h),setTimeout(function(){var t,n,o=e.collectPerformanceTiming();for(t in o)o.hasOwnProperty(t)&&(n=o[t],g[t]||(g[t]=n));e.initialized=!0,e.sendData(Q+Math.random(),g)},0)}},sendResourceTiming:function(){var t=this;if((Math.random()<x.RATE.RESOURCE_TIMING||x.DEBUG.RESOURCE_TIMING)&&"performance"in e)for(var n="|--|",o=this.collectResourceTiming(),r=this.groupResourceTimingData(o),i=0;i<r.length;i++)!function(e){setTimeout(function(){var o=[goldlog?goldlog.pvid:"","total="+r.length,"index="+(e+1),"rescnt="+r[e].groupItem.length,r[e].groupItemString].join(n);t.setResourceTimingForm("content",o)},500*(e+1))}(i)},groupResourceTimingData:function(e){for(var t=this,n=[];e.length;)n.push(e.splice(0,x.THRESHOLD.RESOURCE_TIMING));for(var o=0;o<n.length;o++){for(var r=n[o],i="",a="|--|",s="resinfo=",d=0;d<r.length;d++){var c=r[d];i+=s+t.serializeResourceObj(c)+a}n[o]={groupItem:r,groupItemString:i}}return n},serializeResourceObj:function(e){var t,n=[],o="|-|";for(t in e)e.hasOwnProperty(t)&&n.push(t+"="+encodeURIComponent(e[t]));return n.join(o)},setResourceTimingForm:function(e,n){var o,r,i=x.ID.IFRAME+"_"+Math.floor(1e6*Math.random()),a=c(i);o=t.createElement("form"),o.style.display="none",o.target=a.id,o.method="POST",o.action="//res.mmstat.com/1.gif",o.setAttribute("id",x.ID.FORM),r=t.createElement("input"),r.type="hidden",o.appendChild(r);var s=t.createElement("input");s.type="submit",s.value="",o.appendChild(s),t.body.appendChild(o),r=o.getElementsByTagName("input")[0],r.name=e,r.value=n,o.submit(),a.onload=function(){o.parentNode.removeChild(o),a.parentNode.removeChild(a)}},bindMonitor:function(){var n=this,o=!!t.attachEvent,r=o?"attachEvent":"addEventListener";t[r]((o?"on":"")+"mousedown",function(t){t=t||e.event;var o=t.target||t.srcElement;o&&n.mousedown(o,t)},!1)},mousedown:function(e,t){var n,o=e.tagName,r={type:1,pvid:F};if(!o||"HTML"!=o){("A"==o||"AREA"==o)&&(n=e.getAttribute("href",2)||"",r.href=n);var i=A(e,t,this.config.layout);r.xpath=B(e),r.x=i.x,r.y=i.y,r.ex=i.ex,r.ey=i.ey,r.ew=e.offsetWidth,r.eh=e.offsetHeight,r.t=(new Date).getTime()-H,r.n=++z,this["spm-cnt"]&&(r["spm-cnt"]=this["spm-cnt"].join(".")),b&&w&&(r.so=encodeURIComponent(w)),this.sendData(Q+Math.random(),r)}},sendData:function(t,n){var o=new Image,r="_img_"+Math.random(),i=-1==t.indexOf("?")?"?":"&";e[r]=o,o.onload=o.onerror=function(){e[r]=null},o.src=t+i+L(n),o=null}},O()&&(R.shouldBindMonitor=!0);var J=f.setResourceTimingBufferSize||f.webkitSetResourceTimingBufferSize;J&&J.call(f,200),e._ap_xwj_heat={version:u};var K=new Y(R);K.startup()}}(window,document)},{}]},{},[1]);