(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{42:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(49);t.a=function(e){return c.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},49:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(47),c=a.n(n),r=a(48),s=a(10),l=a(0),i=a.n(l),u=(a(60),a(8)),m=(a(61),function(e){return i.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},i.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),o=a(42),p=(a(62),function(e){return i.a.createElement("li",{className:"user-item"},i.a.createElement(o.a,{className:"user-item__content"},i.a.createElement(u.b,{to:"/".concat(e.id,"/places")},i.a.createElement("div",{className:"user-item__image"},i.a.createElement(m,{image:"".concat("https://placeshareapp.herokuapp.com","/").concat(e.image),alt:e.name})),i.a.createElement("div",{className:"user-item__info"},i.a.createElement("h2",null,e.name),i.a.createElement("h3",null,e.placeCount," ",1===e.placeCount?"Place":"Places"," ")))))}),f=function(e){return 0===e.items.length?i.a.createElement("div",{className:"center"},i.a.createElement(o.a,null,i.a.createElement("h2",null,"No users found."))):i.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return i.a.createElement(p,{key:e.id,id:e.id,image:e.image,name:e.name,placeCount:e.places.length})})))},h=a(50),E=a(15),d=a(51);t.default=function(){var e=Object(d.a)(),t=e.isLoading,a=e.error,n=e.sendRequest,u=e.clearError,m=Object(l.useState)(),o=Object(s.a)(m,2),p=o[0],v=o[1];return Object(l.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("https://placeshareapp.herokuapp.com/api/users");case 3:t=e.sent,v(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{error:a,onClear:u}),t&&i.a.createElement("div",{className:"center"},i.a.createElement(E.a,null)),!t&&p&&i.a.createElement(f,{items:p}))}}}]);
//# sourceMappingURL=8.a1d285f3.chunk.js.map