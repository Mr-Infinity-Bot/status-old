(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},5075:function(e,t,n){"use strict";n.r(t),n.d(t,{shardStatus:function(){return l},shardColors:function(){return u},shardNames:function(){return m}});var o=n(4051),a=n.n(o),r=n(5893),d=n(9008),c=n(214),s=n.n(c);function i(e,t,n,o,a,r,d){try{var c=e[r](d),s=c.value}catch(i){return void n(i)}c.done?t(s):Promise.resolve(s).then(o,a)}var l={0:"Ready",1:"Connecting",2:"Reconnecting",3:"Idle",4:"Nearly",5:"Disconnected",6:"Waiting for guilds",7:"Identifying",8:"Resuming"},u={0:"green",1:"yellow",2:"yellow",3:"yellow",4:"yellow",5:"red",6:"grey",7:"grey",8:"grey"},m={0:"Wacapev",1:"Atlas",2:"Metis",3:"Tethys"};t.default=function(){var e=function(){var t;(t=a().mark((function e(){var t,n,o,r,d,c,i,p,_,h,f,v,g,x,y,w,C,N,E,b,k;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api-infinity.hyrousek.tk/shards/list");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o=!0,r=!1,d=void 0,e.prev=7,c=n[Symbol.iterator]();case 9:if(o=(i=c.next()).done){e.next=52;break}if(p=i.value,document.getElementById("shardPing-".concat(p.id))){e.next=45;break}return console.log("jos"),g=document.getElementsByTagName("section")[0],(x=document.createElement("div")).className=s().dropdown,(y=document.createElement("div")).className=s()["shard-info"],(w=document.createElement("h3")).textContent="Shard ".concat(p.id),(C=document.createElement("p")).id="shardStatus-".concat(p.id),C.className=s()[u[p.status]],C.textContent=l[p.status],(N=document.createElement("div")).className=s()["dropdown-content"],E=document.createElement("a"),b=document.createElement("a"),k=document.createElement("a"),E.id="shardName-".concat(p.id),b.id="shardPing-".concat(p.id),k.id="shardGuilds-".concat(p.id),E.textContent="Name: ".concat(m[p.id]),b.textContent="Ping: ".concat(p.ping,"ms"),k.textContent="Guilds: ".concat(p.guilds),y.appendChild(w),y.appendChild(C),x.appendChild(y),N.appendChild(E),N.appendChild(b),N.appendChild(k),x.appendChild(N),g.appendChild(x),e.abrupt("continue",49);case 45:null===(_=document.getElementById("shardPing-".concat(p.id)))||void 0===_||(_.textContent="Ping: ".concat(p.ping,"ms")),null===(h=document.getElementById("shardGuilds-".concat(p.id)))||void 0===h||(h.textContent="Guilds: ".concat(p.guilds)),null===(f=document.getElementById("shardStatus-".concat(p.id)))||void 0===f||(f.className=s()[u[p.status]]),null===(v=document.getElementById("shardStatus-".concat(p.id)))||void 0===v||(v.textContent=l[p.status]);case 49:o=!0,e.next=9;break;case 52:e.next=58;break;case 54:e.prev=54,e.t0=e.catch(7),r=!0,d=e.t0;case 58:e.prev=58,e.prev=59,o||null==c.return||c.return();case 61:if(e.prev=61,!r){e.next=64;break}throw d;case 64:return e.finish(61);case 65:return e.finish(58);case 66:case"end":return e.stop()}}),e,null,[[7,54,58,66],[59,,61,65]])})),function(){var e=this,n=arguments;return new Promise((function(o,a){var r=t.apply(e,n);function d(e){i(r,o,a,d,c,"next",e)}function c(e){i(r,o,a,d,c,"throw",e)}d(void 0)}))})(),setTimeout((function(){e()}),1e4)};return(0,r.jsxs)("div",{children:[(0,r.jsxs)(d.default,{children:[(0,r.jsx)("title",{children:"Mr. Infinity - Status"}),(0,r.jsx)("link",{rel:"icon",href:"https://cdn.discordapp.com/avatars/720321585625694239/a58c1c3f00ae92070ecb4d8045476d02.png"}),e()]}),(0,r.jsx)("div",{className:s()["yellow-line"],children:(0,r.jsx)("p",{children:"Yellow Line"})}),(0,r.jsxs)("div",{className:"center",children:[(0,r.jsxs)("div",{className:s()["top-text"],children:[(0,r.jsx)("h1",{children:"Mr. Infinity's Status"}),(0,r.jsx)("p",{children:"Check bot status."})]}),(0,r.jsx)("section",{})]})]})}},214:function(e){e.exports={"discord-status":"Home_discord-status__5_Gd0",underlineanimation:"Home_underlineanimation__6QcNy","top-text":"Home_top-text__bvyKe","yellow-line":"Home_yellow-line__yN0qn","shard-info":"Home_shard-info__fGZ9x",dropdown:"Home_dropdown__q4Jzb","dropdown-content":"Home_dropdown-content__lhLtR",dropbtn:"Home_dropbtn__b1vkC",green:"Home_green__g8l_e",red:"Home_red__H_jTz",orange:"Home_orange__CeNmC",purple:"Home_purple__zOX0E",yellow:"Home_yellow__xo63V",grey:"Home_grey__kIg8y","dsc-status":"Home_dsc-status__5l17V"}},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);