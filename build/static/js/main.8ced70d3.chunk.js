(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{348:function(e,t,a){e.exports=a(753)},353:function(e,t,a){},753:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),o=(a(353),a(37)),s=a.n(o),m=a(65),u=a(20),i=a(15),p=a.n(i),g=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],g=o[1],f=Object(n.useState)(0),h=Object(u.a)(f,2),d=h[0],E=h[1],b=Object(n.useState)(""),v=Object(u.a)(b,2),S=v[0],w=v[1];function N(){return(N=Object(m.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n={"project-ID":"752ebb48-8f33-4e0d-9069-68579c1bfa6a","user-Name":a,"user-Secret":i},e.prev=2,0!==d){e.next=8;break}return e.next=6,p.a.get("https://api.chatengine.io/chats",{headers:n});case 6:r=e.sent,console.log("axios result :: ",r);case 8:1===d&&console.log("axios result :: ",d),2===d&&console.log("axios result :: ",d),3===d&&console.log("axios result :: ",d),localStorage.setItem("username",a),localStorage.setItem("password",i),localStorage.setItem("component",d),window.location.reload(),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),localStorage.removeItem("username"),w("Invalid Credentials"),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){c(""),g(""),w("")}),[d]),r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("button",{type:"button",className:"component",onClick:function(e){e.preventDefault(),E(0)}},"rect-chat-engine"),r.a.createElement("button",{type:"button",className:"component",onClick:function(e){e.preventDefault(),E(1)}},"stream-chat"),r.a.createElement("button",{type:"button",className:"component",onClick:function(e){e.preventDefault(),E(2)}},"react-chat-elements"),r.a.createElement("button",{type:"button",className:"component",onClick:function(e){e.preventDefault(),E(3)}},"@chatscope/chat-ui-kit-react")),r.a.createElement("div",{className:"loginForm"},r.a.createElement("form",{onSubmit:function(e){return N.apply(this,arguments)}},r.a.createElement("h3",{className:"formElement"},["Chat-Engine","Stream-Chat","React-chat-elements","@chatscope/chat-ui-kit-react"][d]," Login"),r.a.createElement("h5",{className:"error"},S),r.a.createElement("div",{className:"formElement"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Username",value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"formElement"},r.a.createElement("input",{className:"input",type:"password",placeholder:"Password",value:i,onChange:function(e){return g(e.target.value)}})),r.a.createElement("div",{className:"formElement loginButton"},r.a.createElement("button",{className:"btn",type:"submit"},"Log In")))))},f=a(329),h=function(){return r.a.createElement(f.d,{height:"100vh",projectID:"752ebb48-8f33-4e0d-9069-68579c1bfa6a",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password")})},d=a(72),E=a(781),b=a(780),v=a(776),S=a(777),w=a(332),N=a(330),I=a(782),k=(a(533),d.a.getInstance("ajsqerfrf2rc")),j={id:"Aravindh",name:"Aravindh",image:"https://getstream.io/random_png/?id=bitter-pond-3&name=bitter-pond-3"};k.connectUser(j,k.devToken(j.id));var C=k.channel("messaging","custom_channel_id",{image:"https://www.drupal.org/files/project-images/react.png",name:"Talk about React",members:["rough-shadow-6"]}),O=function(){return r.a.createElement(E.a,{client:k,theme:"messaging light"},r.a.createElement(b.a,{channel:C},r.a.createElement(v.a,null,r.a.createElement(S.a,null),r.a.createElement(w.a,null),r.a.createElement(N.a,null)),r.a.createElement(I.a,null)))},x=function(){if(!localStorage.getItem("username"))return r.a.createElement(g,null);var e=function(e){localStorage.removeItem("username"),localStorage.removeItem("password"),window.location.href="/"},t=JSON.parse(localStorage.getItem("component"));if(console.log(t),0===t)return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e},"Logout"),r.a.createElement(h,null));if(1===t)return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e},"Logout"),r.a.createElement(O,null));if(2===t);else if(3!==t)return r.a.createElement("h3",null,"Page not found!")};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[348,1,2]]]);
//# sourceMappingURL=main.8ced70d3.chunk.js.map