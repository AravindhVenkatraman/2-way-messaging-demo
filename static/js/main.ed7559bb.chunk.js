(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(5),c=n.n(o),i=(n(10),n(4)),u=n(2),s=n.n(u),v=(n(12),n(13),n(0)),l=function(){var e=document.querySelector(".video-options>select"),t=document.querySelector("video");document.getElementById("camera-select").addEventListener("change",(function(e){if(console.log(e),"mediaDevices"in navigator&&navigator.mediaDevices.getUserMedia){var t={video:{deviceId:{exact:e&&e.target?e.target.value:""}}};navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)&&(t={video:{groupId:{exact:e&&e.target?e.target.value:""}}}),console.log(t),a(t)}}));var n=function(){var t=Object(i.a)(s.a.mark((function t(){var n,a,r,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.enumerateDevices();case 2:n=t.sent,a=n.filter((function(e){return"videoinput"===e.kind})),console.log(a),r=["<option value=''>Select camera</option>"],o=a.map((function(e,t){var n="Camera-"+t+1;0!==e.label.length&&(n=e.label);var a=e.deviceId;return navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)&&(a=e.groupId),'<option value="'.concat(a,'">').concat(n,"</option>")})),r=r.concat(o),console.log(r),e.innerHTML=r.join("");case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia(t);case 2:n=e.sent,console.log(n),r(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(e){t.srcObject=e};return n(),Object(v.jsx)(v.Fragment,{})};n(15);c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(l,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ed7559bb.chunk.js.map