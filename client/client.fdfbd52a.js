function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function v(){return m("")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function E(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?d(e):h(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function x(t){return w(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e){(null!=e||t.value)&&(t.value=e)}function k(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function A(t,e,n){t.classList[n?"add":"remove"](e)}function j(t,e=document.body){return Array.from(e.querySelectorAll(t))}let P;function D(t){P=t}function L(){if(!P)throw new Error("Function called outside component initialization");return P}function R(t){L().$$.on_mount.push(t)}function C(t){L().$$.on_destroy.push(t)}const I=[],N=[],q=[],O=[],U=Promise.resolve();let V=!1;function M(t){q.push(t)}let T=!1;const H=new Set;function B(){if(!T){T=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];D(e),J(e.$$)}for(I.length=0;N.length;)N.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];H.has(e)||(H.add(e),e())}q.length=0}while(I.length);for(;O.length;)O.pop()();V=!1,T=!1,H.clear()}}function J(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const F=new Set;let G;function K(){G={r:0,c:[],p:G}}function z(){G.r||s(G.c),G=G.p}function Y(t,e){t&&t.i&&(F.delete(t),t.i(e))}function W(t,e,n,r){if(t&&t.o){if(F.has(t))return;F.add(t),G.c.push(()=>{F.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function X(t,e){const n={},r={},s={$$scope:1};let a=t.length;for(;a--;){const o=t[a],c=e[a];if(c){for(const t in o)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[a]=c}else for(const t in o)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Q(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,e){t&&t.l(e)}function et(t,e,r){const{fragment:o,on_mount:c,on_destroy:l,after_update:i}=t.$$;o&&o.m(e,r),M(()=>{const e=c.map(n).filter(a);l?l.push(...e):s(e),t.$$.on_mount=[]}),i.forEach(M)}function nt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){-1===t.$$.dirty[0]&&(I.push(t),V||(V=!0,U.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(e,n,a,o,c,l,i=[-1]){const u=P;D(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i};let d=!1;if(h.ctx=a?a(e,p,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(h.bound[t]&&h.bound[t](s),d&&rt(e,t)),n}):[],h.update(),d=!0,s(h.before_update),h.fragment=!!o&&o(h.ctx),n.target){if(n.hydrate){const t=y(n.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();n.intro&&Y(e.$$.fragment),et(e,n.target,n.anchor),B()}D(u)}class at{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const ot=[];function ct(e,n=t){let r;const s=[];function a(t){if(o(e,t)&&(e=t,r)){const t=!ot.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),ot.push(n,e)}if(t){for(let t=0;t<ot.length;t+=2)ot[t][0](ot[t+1]);ot.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(o,c=t){const l=[o,c];return s.push(l),1===s.length&&(r=n(a)||t),o(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const lt={},it=()=>({}),ut=ct(null);var ft=[{link:"home",text:"Home"},{link:"projects",text:"Projects"},{link:"contact",text:"Contact"}];function pt(t,e,n){const r=t.slice();return r[8]=e[n],r}function ht(t){let e,n,r,s,a,o=t[8].text+"";function c(...e){return t[7](t[8],...e)}return{c(){e=h("a"),n=m(o),r=g(),this.h()},l(t){var s=y(e=E(t,"A",{href:!0,class:!0}));n=w(s,o),r=x(s),s.forEach(f),this.h()},h(){b(e,"href",s=`/${t[8].link}`),b(e,"class","navbar-item is-secondary svelte-16awptu"),A(e,"active",t[1]===t[8].link&&"home"!=t[8].link)},m(t,s,o){u(t,e,s),i(e,n),i(e,r),o&&a(),a=$(e,"click",c)},p(n,r){t=n,2&r&&A(e,"active",t[1]===t[8].link&&"home"!=t[8].link)},d(t){t&&f(e),a()}}}function dt(e){let n,r,s,a,o,c,l,v,_,S,j,P,D,L,R,C,I,N,q,O,U,V,M,T=ft,H=[];for(let t=0;t<T.length;t+=1)H[t]=ht(pt(e,T,t));return{c(){n=h("section"),r=h("div"),s=h("nav"),a=h("div"),o=h("a"),c=h("img"),v=g(),_=h("p"),S=m("Daniel Dias"),j=g(),P=h("a"),D=h("div"),L=m("Menu"),R=g(),C=h("div"),I=d("svg"),N=d("path"),q=d("path"),O=d("path"),U=g(),V=h("div");for(let t=0;t<H.length;t+=1)H[t].c();this.h()},l(t){var e=y(n=E(t,"SECTION",{id:!0,class:!0})),l=y(r=E(e,"DIV",{class:!0})),i=y(s=E(l,"NAV",{class:!0})),u=y(a=E(i,"DIV",{class:!0})),p=y(o=E(u,"A",{href:!0,class:!0}));c=E(p,"IMG",{id:!0,src:!0,alt:!0,class:!0}),v=x(p);var h=y(_=E(p,"P",{class:!0}));S=w(h,"Daniel Dias"),h.forEach(f),p.forEach(f),j=x(u);var d=y(P=E(u,"A",{href:!0,class:!0})),m=y(D=E(d,"DIV",{"data-target":!0,class:!0}));L=w(m,"Menu"),m.forEach(f),R=x(d);var g=y(C=E(d,"DIV",{"data-target":!0,class:!0,style:!0})),$=y(I=E(g,"svg",{width:!0,height:!0,class:!0},1));y(N=E($,"path",{class:!0,d:!0},1)).forEach(f),y(q=E($,"path",{class:!0,d:!0},1)).forEach(f),y(O=E($,"path",{class:!0,d:!0},1)).forEach(f),$.forEach(f),g.forEach(f),d.forEach(f),u.forEach(f),U=x(i);var b=y(V=E(i,"DIV",{id:!0,class:!0}));for(let t=0;t<H.length;t+=1)H[t].l(b);b.forEach(f),i.forEach(f),l.forEach(f),e.forEach(f),this.h()},h(){b(c,"id","developer-head"),c.src!==(l="images/developer-head.svg")&&b(c,"src","images/developer-head.svg"),b(c,"alt",""),b(c,"class","svelte-16awptu"),b(_,"class","svelte-16awptu"),b(o,"href","/"),b(o,"class","navbar-logo is-bold svelte-16awptu"),b(D,"data-target","navbar-menu"),b(D,"class","navbar-item is-hidden-desktop svelte-16awptu"),b(N,"class","path1 svelte-16awptu"),b(N,"d","M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1\n                200 200 L 800 800"),b(q,"class","path2 svelte-16awptu"),b(q,"d","M 300 500 L 700 500"),b(O,"class","path3 svelte-16awptu"),b(O,"d","M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1\n                200 800 L 800 200"),b(I,"width","1000px"),b(I,"height","1000px"),b(I,"class","svelte-16awptu"),b(C,"data-target","navbar-menu"),b(C,"class","menu-icon-wrapper svelte-16awptu"),k(C,"visibility","visible"),A(C,"open",e[0]),b(P,"href","/"),b(P,"class","navbar-item is-hidden-desktop svelte-16awptu"),b(a,"class","navbar-brand svelte-16awptu"),b(V,"id","navbar-menu"),b(V,"class","navbar-menu is-static svelte-16awptu"),A(V,"is-active",e[0]),b(s,"class","navbar svelte-16awptu"),b(r,"class","nav-container svelte-16awptu"),b(n,"id","nav-bar"),b(n,"class","svelte-16awptu")},m(t,l,f){u(t,n,l),i(n,r),i(r,s),i(s,a),i(a,o),i(o,c),i(o,v),i(o,_),i(_,S),i(a,j),i(a,P),i(P,D),i(D,L),i(P,R),i(P,C),i(C,I),i(I,N),i(I,q),i(I,O),i(s,U),i(s,V);for(let t=0;t<H.length;t+=1)H[t].m(V,null);f&&M(),M=$(P,"click",e[6])},p(t,[e]){if(1&e&&A(C,"open",t[0]),6&e){let n;for(T=ft,n=0;n<T.length;n+=1){const r=pt(t,T,n);H[n]?H[n].p(r,e):(H[n]=ht(r),H[n].c(),H[n].m(V,null))}for(;n<H.length;n+=1)H[n].d(1);H.length=T.length}1&e&&A(V,"is-active",t[0])},i:t,o:t,d(t){t&&f(n),p(H,t),M()}}}function mt(t,e,n){let r,s;c(t,ut,t=>n(1,s=t));let a=!1;const o=(t,e)=>{e.preventDefault(),ut.set(t),n(0,a=!1),Nt("/"+("home"!==t?t:""))};let l=ft.map(t=>t.link);const{page:i}=he();c(t,i,t=>n(4,r=t)),"/"!==r.path&&l.includes(r.path.substr(1))?ut.set(r.path.substr(1)):ut.set("home");return[a,s,o,i,r,l,t=>{t.preventDefault(),n(0,a=!a)},(t,e)=>o(t.link,e)]}class gt extends at{constructor(t){super(),st(this,t,mt,dt,o,{})}}function vt(e){let n,r,s,a,o,c,l,p,d,v,$,_,S,k,A,j,P,D,L=(new Date).getFullYear()+"";return{c(){n=h("footer"),r=h("div"),s=m("© "),a=m(L),o=m(", Daniel Dias"),c=g(),l=h("div"),p=h("a"),d=h("i"),v=g(),$=h("a"),_=h("i"),S=g(),k=h("a"),A=h("i"),j=g(),P=h("a"),D=h("i"),this.h()},l(t){var e=y(n=E(t,"FOOTER",{class:!0})),i=y(r=E(e,"DIV",{class:!0}));s=w(i,"© "),a=w(i,L),o=w(i,", Daniel Dias"),i.forEach(f),c=x(e);var u=y(l=E(e,"DIV",{class:!0})),h=y(p=E(u,"A",{class:!0,target:!0,href:!0}));y(d=E(h,"I",{class:!0,title:!0})).forEach(f),h.forEach(f),v=x(u);var m=y($=E(u,"A",{class:!0,target:!0,href:!0}));y(_=E(m,"I",{class:!0,title:!0})).forEach(f),m.forEach(f),S=x(u);var g=y(k=E(u,"A",{class:!0,target:!0,href:!0}));y(A=E(g,"I",{class:!0,title:!0})).forEach(f),g.forEach(f),j=x(u);var b=y(P=E(u,"A",{href:!0,target:!0,class:!0}));y(D=E(b,"I",{class:!0,title:!0})).forEach(f),b.forEach(f),u.forEach(f),e.forEach(f),this.h()},h(){b(r,"class","svelte-1yrex6j"),b(d,"class","fab fa-github"),b(d,"title","GitHub"),b(p,"class","no-link svelte-1yrex6j"),b(p,"target","_blank"),b(p,"href","https://github.com/1140251"),b(_,"class","fab fa-linkedin"),b(_,"title","LinkedIn"),b($,"class","no-link svelte-1yrex6j"),b($,"target","_blank"),b($,"href","https://www.linkedin.com/in/daniel-maia-dias/"),b(A,"class","fas fa-envelope-square"),b(A,"title","Email"),b(k,"class","no-link svelte-1yrex6j"),b(k,"target","_blank"),b(k,"href","mailto:1140251@isep.ipp.pt"),b(D,"class","fab fa-dev"),b(D,"title","DEV Profile"),b(P,"href","https://dev.to/1140251"),b(P,"target","_blank"),b(P,"class","svelte-1yrex6j"),b(l,"class","links svelte-1yrex6j"),b(n,"class","sticky-footer svelte-1yrex6j")},m(t,e){u(t,n,e),i(n,r),i(r,s),i(r,a),i(r,o),i(n,c),i(n,l),i(l,p),i(p,d),i(l,v),i(l,$),i($,_),i(l,S),i(l,k),i(k,A),i(l,j),i(l,P),i(P,D)},p:t,i:t,o:t,d(t){t&&f(n)}}}class $t extends at{constructor(t){super(),st(this,t,null,vt,o,{})}}function bt(t){let e,n,r,s;const a=new gt({}),o=t[1].default,c=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(o,t,t[0],null),p=new $t({});return{c(){Z(a.$$.fragment),e=g(),n=h("main"),c&&c.c(),r=g(),Z(p.$$.fragment)},l(t){tt(a.$$.fragment,t),e=x(t);var s=y(n=E(t,"MAIN",{}));c&&c.l(s),r=x(s),tt(p.$$.fragment,s),s.forEach(f)},m(t,o){et(a,t,o),u(t,e,o),u(t,n,o),c&&c.m(n,null),i(n,r),et(p,n,null),s=!0},p(t,[e]){c&&c.p&&1&e&&c.p(l(o,t,t[0],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(o,t[0],e,null))},i(t){s||(Y(a.$$.fragment,t),Y(c,t),Y(p.$$.fragment,t),s=!0)},o(t){W(a.$$.fragment,t),W(c,t),W(p.$$.fragment,t),s=!1},d(t){nt(a,t),t&&f(e),t&&f(n),c&&c.d(t),nt(p)}}}function yt(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$set=(t=>{"$$scope"in t&&n(0,s=t.$$scope)}),[s,r]}class Et extends at{constructor(t){super(),st(this,t,yt,bt,o,{})}}function wt(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=m(r)},l(t){var s=y(e=E(t,"PRE",{}));n=w(s,r),s.forEach(f)},m(t,r){u(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&f(e)}}}function xt(e){let n,r,s,a,o,c,l,p,d,$=e[1].message+"";document.title=n=e[0];let S=e[2]&&e[1].stack&&wt(e);return{c(){r=g(),s=h("h1"),a=m(e[0]),o=g(),c=h("p"),l=m($),p=g(),S&&S.c(),d=v(),this.h()},l(t){j('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=x(t);var n=y(s=E(t,"H1",{class:!0}));a=w(n,e[0]),n.forEach(f),o=x(t);var i=y(c=E(t,"P",{class:!0}));l=w(i,$),i.forEach(f),p=x(t),S&&S.l(t),d=v(),this.h()},h(){b(s,"class","svelte-8od9u6"),b(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,s,e),i(s,a),u(t,o,e),u(t,c,e),i(c,l),u(t,p,e),S&&S.m(t,e),u(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(a,t[0]),2&e&&$!==($=t[1].message+"")&&_(l,$),t[2]&&t[1].stack?S?S.p(t,e):((S=wt(t)).c(),S.m(d.parentNode,d)):S&&(S.d(1),S=null)},i:t,o:t,d(t){t&&f(r),t&&f(s),t&&f(o),t&&f(c),t&&f(p),S&&S.d(t),t&&f(d)}}}function _t(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)}),[r,s,!1]}class St extends at{constructor(t){super(),st(this,t,_t,xt,o,{status:0,error:1})}}function kt(t){let n,r;const s=[t[4].props];var a=t[4].component;function o(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(a)var c=new a(o());return{c(){c&&Z(c.$$.fragment),n=v()},l(t){c&&tt(c.$$.fragment,t),n=v()},m(t,e){c&&et(c,t,e),u(t,n,e),r=!0},p(t,e){const r=16&e?X(s,[Q(t[4].props)]):{};if(a!==(a=t[4].component)){if(c){K();const t=c;W(t.$$.fragment,1,0,()=>{nt(t,1)}),z()}a?(Z((c=new a(o())).$$.fragment),Y(c.$$.fragment,1),et(c,n.parentNode,n)):c=null}else a&&c.$set(r)},i(t){r||(c&&Y(c.$$.fragment,t),r=!0)},o(t){c&&W(c.$$.fragment,t),r=!1},d(t){t&&f(n),c&&nt(c,t)}}}function At(t){let e;const n=new St({props:{error:t[0],status:t[1]}});return{c(){Z(n.$$.fragment)},l(t){tt(n.$$.fragment,t)},m(t,r){et(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(Y(n.$$.fragment,t),e=!0)},o(t){W(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function jt(t){let e,n,r,s;const a=[At,kt],o=[];function c(t,e){return t[0]?0:1}return e=c(t),n=o[e]=a[e](t),{c(){n.c(),r=v()},l(t){n.l(t),r=v()},m(t,n){o[e].m(t,n),u(t,r,n),s=!0},p(t,s){let l=e;(e=c(t))===l?o[e].p(t,s):(K(),W(o[l],1,1,()=>{o[l]=null}),z(),(n=o[e])||(n=o[e]=a[e](t)).c(),Y(n,1),n.m(r.parentNode,r))},i(t){s||(Y(n),s=!0)},o(t){W(n),s=!1},d(t){o[e].d(t),t&&f(r)}}}function Pt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[jt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const a=new Et({props:s});return{c(){Z(a.$$.fragment)},l(t){tt(a.$$.fragment,t)},m(t,e){et(a,t,e),n=!0},p(t,[e]){const n=12&e?X(r,[4&e&&{segment:t[2][0]},8&e&&Q(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){n||(Y(a.$$.fragment,t),n=!0)},o(t){W(a.$$.fragment,t),n=!1},d(t){nt(a,t)}}}function Dt(t,e,n){let{stores:r}=e,{error:s}=e,{status:a}=e,{segments:o}=e,{level0:c}=e,{level1:l=null}=e;var i,u;return i=lt,u=r,L().$$.context.set(i,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,a=t.status),"segments"in t&&n(2,o=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1)}),[s,a,o,c,l,r]}class Lt extends at{constructor(t){super(),st(this,t,Dt,Pt,o,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Rt=[],Ct=[{js:()=>import("./index.e5fbd345.js"),css:["index.e5fbd345.css","client.fdfbd52a.css"]},{js:()=>import("./projects.49761039.js"),css:["projects.49761039.css","client.fdfbd52a.css"]},{js:()=>import("./contact.9d3244d5.js"),css:["contact.9d3244d5.css","client.fdfbd52a.css"]}],It=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/projects\/?$/,parts:[{i:1}]},{pattern:/^\/contact\/?$/,parts:[{i:2}]}];function Nt(t,e={replaceState:!1}){const n=Zt(new URL(t,document.baseURI));return n?(Wt[e.replaceState?"replaceState":"pushState"]({id:zt},"",t),ee(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}const qt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ot,Ut,Vt,Mt=!1,Tt=[],Ht="{}";const Bt={page:ct({}),preloading:ct(null),session:ct(qt&&qt.session)};let Jt,Ft;Bt.session.subscribe(async t=>{if(Jt=t,!Mt)return;Ft=!0;const e=Zt(new URL(location.href)),n=Ut={},{redirect:r,props:s,branch:a}=await re(e);n===Ut&&await ne(r,a,s,e.page)});let Gt,Kt=null;let zt,Yt=1;const Wt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Xt={};function Qt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Zt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(qt.baseUrl))return null;let e=t.pathname.slice(qt.baseUrl.length);if(""===e&&(e="/"),!Rt.some(t=>t.test(e)))for(let n=0;n<It.length;n+=1){const r=It[n],s=r.pattern.exec(e);if(s){const n=Qt(t.search),a=r.parts[r.parts.length-1],o=a.params?a.params(s):{},c={host:location.host,path:e,query:n,params:o};return{href:t.href,route:r,match:s,page:c}}}}function te(){return{x:pageXOffset,y:pageYOffset}}async function ee(t,e,n,r){if(e)zt=e;else{const t=te();Xt[zt]=t,e=zt=++Yt,Xt[zt]=n?t:{x:0,y:0}}zt=e,Ot&&Bt.preloading.set(!0);const s=Kt&&Kt.href===t.href?Kt.promise:re(t);Kt=null;const a=Ut={},{redirect:o,props:c,branch:l}=await s;if(a===Ut&&(await ne(o,l,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Xt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Xt[zt]=t,t&&scrollTo(t.x,t.y)}}async function ne(t,e,n,r){if(t)return Nt(t.location,{replaceState:!0});if(Bt.page.set(r),Bt.preloading.set(!1),Ot)Ot.$set(n);else{n.stores={page:{subscribe:Bt.page.subscribe},preloading:{subscribe:Bt.preloading.subscribe},session:Bt.session},n.level0={props:await Vt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ae(t.nextSibling);ae(t),ae(e)}Ot=new Lt({target:Gt,props:n,hydrate:!0})}Tt=e,Ht=JSON.stringify(r.query),Mt=!0,Ft=!1}async function re(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{a.error="string"==typeof e?new Error(e):e,a.status=t}};let c;Vt||(Vt=qt.preloaded[0]||it.call(o,{host:n.host,path:n.path,query:n.query,params:{}},Jt));let l=1;try{const s=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ht)return!0;const s=Tt[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,i,s)&&(u=!0),a.segments[l]=r[c+1],!e)return{segment:f};const p=l++;if(!Ft&&!u&&Tt[c]&&Tt[c].part===e.i)return Tt[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(se);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Ct[e.i]);let m;return m=Mt||!qt.preloaded[c+1]?d?await d.call(o,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Jt):{}:qt.preloaded[c+1],a[`level${p}`]={component:h,props:m,segment:f,match:i,part:e.i}}))}catch(t){a.error=t,a.status=500,c=[]}return{redirect:s,props:a,branch:c}}function se(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function ae(t){t.parentNode.removeChild(t)}function oe(t){const e=Zt(new URL(t,document.baseURI));if(e)return Kt&&t===Kt.href||function(t,e){Kt={href:t,promise:e}}(t,re(e)),Kt.promise}let ce;function le(t){clearTimeout(ce),ce=setTimeout(()=>{ie(t)},20)}function ie(t){const e=fe(t.target);e&&"prefetch"===e.rel&&oe(e.href)}function ue(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=fe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const a=Zt(s);if(a){ee(a,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Wt.pushState({id:zt},"",s.href)}}function fe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function pe(t){if(Xt[zt]=te(),t.state){const e=Zt(new URL(location.href));e?ee(e,t.state.id):location.href=location.href}else(function(t){zt=t})(Yt=Yt+1),Wt.replaceState({id:zt},"",location.href)}const he=()=>(function(t){return L().$$.context.get(t)})(lt);!function(t){var e;"scrollRestoration"in Wt&&(Wt.scrollRestoration="manual"),e=t.target,Gt=e,addEventListener("click",ue),addEventListener("popstate",pe),addEventListener("touchstart",ie),addEventListener("mousemove",le),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Wt.replaceState({id:Yt},"",e);const n=new URL(location.href);if(qt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:a,status:o,error:c}=qt;Vt||(Vt=a&&a[0]),ne(null,[],{error:c,status:o,session:s,level0:{props:Vt},level1:{props:{status:o,error:c},component:St},segments:a},{host:e,path:n,query:Qt(r),params:{}})}();const r=Zt(n);return r?ee(r,Yt,!0,t):void 0})}({target:document.querySelector("#sapper")});export{S as A,s as B,R as C,C as D,N as E,at as S,y as a,w as b,E as c,f as d,h as e,b as f,u as g,i as h,st as i,g as j,x as k,p as l,$ as m,t as n,_ as o,v as p,j as q,k as r,o as s,m as t,Z as u,tt as v,et as w,Y as x,W as y,nt as z};
