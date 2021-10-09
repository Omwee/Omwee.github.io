var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function c(t){t.forEach(e)}function r(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function s(t,n,e,o){if(t){const c=l(t,n,e,o);return t[0](c)}}function l(t,e,o,c){return t[1]&&c?n(o.ctx.slice(),t[1](c(e))):o.ctx}function f(t,n,e,o){if(t[2]&&o){const c=t[2](o(e));if(void 0===n.dirty)return c;if("object"==typeof c){const t=[],e=Math.max(n.dirty.length,c.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|c[o];return t}return n.dirty|c}return n.dirty}function a(t,n,e,o,c,r){if(c){const u=l(n,e,o,r);t.p(u,c)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function d(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function p(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function m(n){return n&&r(n.destroy)?n.destroy:t}function h(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function v(t){t.parentNode.removeChild(t)}function B(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function x(){return E(" ")}function b(){return E("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set?t[o]=n[o]:_(t,o,n[o])}function A(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function k(t,n){t.value=null==n?"":n}function M(t,n){for(let e=0;e<t.options.length;e+=1){const o=t.options[e];if(o.__value===n)return void(o.selected=!0)}t.selectedIndex=-1}function N(t,n,e){t.classList[e?"add":"remove"](n)}let C;function T(t){C=t}function L(){if(!C)throw new Error("Function called outside component initialization");return C}function j(t,n){L().$$.context.set(t,n)}function H(t){return L().$$.context.get(t)}const O=[],S=[],P=[],z=[],I=Promise.resolve();let q=!1;function D(t){P.push(t)}function F(t){z.push(t)}let R=!1;const G=new Set;function J(){if(!R){R=!0;do{for(let t=0;t<O.length;t+=1){const n=O[t];T(n),K(n.$$)}for(T(null),O.length=0;S.length;)S.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];G.has(n)||(G.add(n),n())}P.length=0}while(O.length);for(;z.length;)z.pop()();q=!1,R=!1,G.clear()}}function K(t){if(null!==t.fragment){t.update(),c(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(D)}}const Q=new Set;let U;function V(){U={r:0,c:[],p:U}}function W(){U.r||c(U.c),U=U.p}function X(t,n){t&&t.i&&(Q.delete(t),t.i(n))}function Y(t,n,e,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),U.c.push((()=>{Q.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Z(t,n){const e={},o={},c={$$scope:1};let r=t.length;for(;r--;){const u=t[r],i=n[r];if(i){for(const t in u)t in i||(o[t]=1);for(const t in i)c[t]||(e[t]=i[t],c[t]=1);t[r]=i}else for(const t in u)c[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function tt(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function nt(t){t&&t.c()}function et(t,n,o,u){const{fragment:i,on_mount:s,on_destroy:l,after_update:f}=t.$$;i&&i.m(n,o),u||D((()=>{const n=s.map(e).filter(r);l?l.push(...n):c(n),t.$$.on_mount=[]})),f.forEach(D)}function ot(t,n){const e=t.$$;null!==e.fragment&&(c(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){-1===t.$$.dirty[0]&&(O.push(t),q||(q=!0,I.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function rt(n,e,r,u,i,s,l,f=[-1]){const a=C;T(n);const $=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||a.$$.root};l&&l($.root);let d=!1;if($.ctx=r?r(n,e.props||{},((t,e,...o)=>{const c=o.length?o[0]:e;return $.ctx&&i($.ctx[t],$.ctx[t]=c)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](c),d&&ct(n,t)),e})):[],$.update(),d=!0,c($.before_update),$.fragment=!!u&&u($.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);$.fragment&&$.fragment.l(t),t.forEach(v)}else $.fragment&&$.fragment.c();e.intro&&X(n.$$.fragment),et(n,e.target,e.anchor,e.customElement),J()}T(a)}class ut{$destroy(){ot(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function it(){const t=L();return n=>{const e=Object.keys(t.$$.callbacks),o=[];return e.forEach((e=>o.push(y(n,e,(n=>function(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}(t,n)))))),{destroy:()=>{o.forEach((t=>t()))}}}}const st=[];function lt(t){let e,o,c,r;const u=t[7].default,i=s(u,t,t[6],null);let l=[t[3]],d={};for(let t=0;t<l.length;t+=1)d=n(d,l[t]);return{c(){e=B("nav"),i&&i.c(),w(e,d),N(e,"tabs",1),N(e,"is-full",t[0])},m(n,u){g(n,e,u),i&&i.m(e,null),o=!0,c||(r=m(t[1].call(null,e)),c=!0)},p(t,[n]){i&&i.p&&(!o||64&n)&&a(i,u,t,t[6],o?f(u,t[6],n,null):$(t[6]),null),w(e,d=Z(l,[8&n&&t[3]])),N(e,"tabs",1),N(e,"is-full",t[0])},i(t){o||(X(i,t),o=!0)},o(t){Y(i,t),o=!1},d(t){t&&v(e),i&&i.d(t),c=!1,r()}}}function ft(e,o,c){const r=["active","full"];let s,l=p(o,r),{$$slots:f={},$$scope:a}=o,{active:$=0}=o,{full:m=!1}=o;const h=it(),g=function(n,e=t){let o;const c=new Set;function r(t){if(u(n,t)&&(n=t,o)){const t=!st.length;for(const t of c)t[1](),st.push(t,n);if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:r,update:function(t){r(t(n))},subscribe:function(u,i=t){const s=[u,i];return c.add(s),1===c.size&&(o=e(r)||t),u(n),()=>{c.delete(s),0===c.size&&(o(),o=null)}}}}($);i(e,g,(t=>c(5,s=t)));let v=0;return j("tabs:getid",(()=>v++)),j("tabs:active",g),e.$$set=t=>{o=n(n({},o),d(t)),c(3,l=p(o,r)),"active"in t&&c(4,$=t.active),"full"in t&&c(0,m=t.full),"$$scope"in t&&c(6,a=t.$$scope)},e.$$.update=()=>{32&e.$$.dirty&&c(4,$=s)},[m,h,g,l,$,s,a,f]}class at extends ut{constructor(t){super(),rt(this,t,ft,lt,u,{active:4,full:0})}}function $t(t){let e,o,r,u;const i=t[8].default,l=s(i,t,t[7],null);let d=[t[5]],p={};for(let t=0;t<d.length;t+=1)p=n(p,d[t]);return{c(){e=B("span"),l&&l.c(),w(e,p),N(e,"active",t[1]),N(e,"svelte-3bldsl",!0)},m(n,c){var i;g(n,e,c),l&&l.m(e,null),o=!0,r||(u=[m(t[2].call(null,e)),y(e,"click",(i=t[9],function(t){return t.preventDefault(),i.call(this,t)}))],r=!0)},p(t,[n]){l&&l.p&&(!o||128&n)&&a(l,i,t,t[7],o?f(i,t[7],n,null):$(t[7]),null),w(e,p=Z(d,[32&n&&t[5]])),N(e,"active",t[1]),N(e,"svelte-3bldsl",!0)},i(t){o||(X(l,t),o=!0)},o(t){Y(l,t),o=!1},d(t){t&&v(e),l&&l.d(t),r=!1,c(u)}}}function dt(t,e,o){let c;const r=["tabid"];let u,s=p(e,r),{$$slots:l={},$$scope:f}=e,{tabid:a=!1}=e;const $=it(),m=H("tabs:active");i(t,m,(t=>o(6,u=t)));const h=H("tabs:getid")();return t.$$set=t=>{e=n(n({},e),d(t)),o(5,s=p(e,r)),"tabid"in t&&o(0,a=t.tabid),"$$scope"in t&&o(7,f=t.$$scope)},t.$$.update=()=>{65&t.$$.dirty&&o(1,c=u===a||u===h)},[a,c,$,m,h,s,u,f,l,()=>m.set(!1===a?h:a)]}class pt extends ut{constructor(t){super(),rt(this,t,dt,$t,u,{tabid:0})}}function mt(t){let n;return{c(){n=E("ป้อนค่า")},m(t,e){g(t,n,e)},d(t){t&&v(n)}}}function ht(t){let n;return{c(){n=E("สูตร")},m(t,e){g(t,n,e)},d(t){t&&v(n)}}}function gt(t){let n,e,o,c;return n=new pt({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),o=new pt({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){nt(n.$$.fragment),e=x(),nt(o.$$.fragment)},m(t,r){et(n,t,r),g(t,e,r),et(o,t,r),c=!0},p(t,e){const c={};64&e&&(c.$$scope={dirty:e,ctx:t}),n.$set(c);const r={};64&e&&(r.$$scope={dirty:e,ctx:t}),o.$set(r)},i(t){c||(X(n.$$.fragment,t),X(o.$$.fragment,t),c=!0)},o(t){Y(n.$$.fragment,t),Y(o.$$.fragment,t),c=!1},d(t){ot(n,t),t&&v(e),ot(o,t)}}}function vt(t){let n,e,o,r,u,i,s,l,f,a,$,d,p,m,b,w,M,N,C=Math.round(Math.PI*t[1]*t[1]*100)/100+"";return{c(){n=B("input"),e=x(),o=B("div"),r=B("h2"),u=E("รัศมีวงกลม "),i=E(t[1]),s=E(" หน่วย"),l=x(),f=B("h2"),a=E("พื้นที่วงกลม "),$=E(C),d=E(" ตารางหน่วย"),p=x(),m=B("button"),m.textContent="เพิ่ม",b=x(),w=B("button"),w.textContent="ลด",_(n,"placeholder","ป้อนค่ารัศมีวงกลมเพื่อคำนวณพื้นที่")},m(c,v){g(c,n,v),k(n,t[1]),g(c,e,v),g(c,o,v),h(o,r),h(r,u),h(r,i),h(r,s),h(o,l),h(o,f),h(f,a),h(f,$),h(f,d),h(o,p),h(o,m),h(o,b),h(o,w),M||(N=[y(n,"input",t[5]),y(m,"click",t[2]),y(w,"click",t[3])],M=!0)},p(t,e){2&e&&n.value!==t[1]&&k(n,t[1]),2&e&&A(i,t[1]),2&e&&C!==(C=Math.round(Math.PI*t[1]*t[1]*100)/100+"")&&A($,C)},d(t){t&&v(n),t&&v(e),t&&v(o),M=!1,c(N)}}}function Bt(t){let n,e,o;return{c(){n=B("h2"),n.innerHTML="สูตร :  πr<sup>2</sup>",e=x(),o=B("div"),o.innerHTML='<img src="https://static.trueplookpanya.com/tppy/member/m_567500_570000/569760/cms/images/01%20%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%81%E0%B8%A5%E0%B8%A1.jpg" width="350" alt="circle"/>'},m(t,c){g(t,n,c),g(t,e,c),g(t,o,c)},d(t){t&&v(n),t&&v(e),t&&v(o)}}}function Et(t){let n,e,o,c,r,u,i,s;function l(n){t[4](n)}let f={$$slots:{default:[gt]},$$scope:{ctx:t}};void 0!==t[0]&&(f.active=t[0]),o=new at({props:f}),S.push((()=>tt(o,"active",l)));let a=0==t[0]&&vt(t),$=1==t[0]&&Bt();return{c(){n=B("div"),n.innerHTML="<h1>วงกลม</h1>",e=x(),nt(o.$$.fragment),r=x(),a&&a.c(),u=x(),$&&$.c(),i=b()},m(t,c){g(t,n,c),g(t,e,c),et(o,t,c),g(t,r,c),a&&a.m(t,c),g(t,u,c),$&&$.m(t,c),g(t,i,c),s=!0},p(t,[n]){const e={};64&n&&(e.$$scope={dirty:n,ctx:t}),!c&&1&n&&(c=!0,e.active=t[0],F((()=>c=!1))),o.$set(e),0==t[0]?a?a.p(t,n):(a=vt(t),a.c(),a.m(u.parentNode,u)):a&&(a.d(1),a=null),1==t[0]?$||($=Bt(),$.c(),$.m(i.parentNode,i)):$&&($.d(1),$=null)},i(t){s||(X(o.$$.fragment,t),s=!0)},o(t){Y(o.$$.fragment,t),s=!1},d(t){t&&v(n),t&&v(e),ot(o,t),t&&v(r),a&&a.d(t),t&&v(u),$&&$.d(t),t&&v(i)}}}function xt(t,n,e){let o=0,c=2;return[o,c,function(){e(1,c+=1)},function(){c>0&&e(1,c--,c)},function(t){o=t,e(0,o)},function(){c=this.value,e(1,c)}]}class bt extends ut{constructor(t){super(),rt(this,t,xt,Et,u,{})}}function yt(t){let n;return{c(){n=E("ป้อนค่า")},m(t,e){g(t,n,e)},d(t){t&&v(n)}}}function _t(t){let n;return{c(){n=E("สูตร")},m(t,e){g(t,n,e)},d(t){t&&v(n)}}}function wt(t){let n,e,o,c;return n=new pt({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),o=new pt({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),{c(){nt(n.$$.fragment),e=x(),nt(o.$$.fragment)},m(t,r){et(n,t,r),g(t,e,r),et(o,t,r),c=!0},p(t,e){const c={};64&e&&(c.$$scope={dirty:e,ctx:t}),n.$set(c);const r={};64&e&&(r.$$scope={dirty:e,ctx:t}),o.$set(r)},i(t){c||(X(n.$$.fragment,t),X(o.$$.fragment,t),c=!0)},o(t){Y(n.$$.fragment,t),Y(o.$$.fragment,t),c=!1},d(t){ot(n,t),t&&v(e),ot(o,t)}}}function At(t){let n,e,o,r,u,i,s,l,f,a,$,d,p,m,b,w,M,N,C,T,L,j,H=t[1]*t[2]+"";return{c(){n=B("input"),e=x(),o=B("div"),r=B("input"),u=x(),i=B("div"),s=B("h2"),l=E("ความกว้าง "),f=E(t[1]),a=E(" หน่วย"),$=x(),d=B("h2"),p=E("ความยาว "),m=E(t[2]),b=E(" หน่วย"),w=x(),M=B("h2"),N=E("พื้นที่สี่เหลี่ยมผืนผ้า "),C=E(H),T=E(" ตารางหน่วย"),_(n,"placeholder","ป้อนความกว้างเพื่อคำนวณพื้นที่"),_(r,"placeholder","ป้อนความยาวเพื่อคำนวณพื้นที่")},m(c,v){g(c,n,v),k(n,t[1]),g(c,e,v),g(c,o,v),h(o,r),k(r,t[2]),g(c,u,v),g(c,i,v),h(i,s),h(s,l),h(s,f),h(s,a),h(i,$),h(i,d),h(d,p),h(d,m),h(d,b),h(i,w),h(i,M),h(M,N),h(M,C),h(M,T),L||(j=[y(n,"input",t[4]),y(r,"input",t[5])],L=!0)},p(t,e){2&e&&n.value!==t[1]&&k(n,t[1]),4&e&&r.value!==t[2]&&k(r,t[2]),2&e&&A(f,t[1]),4&e&&A(m,t[2]),6&e&&H!==(H=t[1]*t[2]+"")&&A(C,H)},d(t){t&&v(n),t&&v(e),t&&v(o),t&&v(u),t&&v(i),L=!1,c(j)}}}function kt(t){let n,e,o;return{c(){n=B("h2"),n.textContent="สูตร : กว้าง x ยาว",e=x(),o=B("div"),o.innerHTML='<img src="https://static.trueplookpanya.com/tppy/member/m_557500_560000/559384/cms/images/05%20%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1%E0%B8%9C%E0%B8%B7%E0%B8%99%E0%B8%9C%E0%B9%89%E0%B8%B2.jpg" width="350" alt="Rectangle"/>'},m(t,c){g(t,n,c),g(t,e,c),g(t,o,c)},d(t){t&&v(n),t&&v(e),t&&v(o)}}}function Mt(t){let n,e,o,c,r,u,i,s;function l(n){t[3](n)}let f={$$slots:{default:[wt]},$$scope:{ctx:t}};void 0!==t[0]&&(f.active=t[0]),o=new at({props:f}),S.push((()=>tt(o,"active",l)));let a=0==t[0]&&At(t),$=1==t[0]&&kt();return{c(){n=B("div"),n.innerHTML="<h1>สี่เหลี่ยมผืนผ้า</h1>",e=x(),nt(o.$$.fragment),r=x(),a&&a.c(),u=x(),$&&$.c(),i=b()},m(t,c){g(t,n,c),g(t,e,c),et(o,t,c),g(t,r,c),a&&a.m(t,c),g(t,u,c),$&&$.m(t,c),g(t,i,c),s=!0},p(t,[n]){const e={};64&n&&(e.$$scope={dirty:n,ctx:t}),!c&&1&n&&(c=!0,e.active=t[0],F((()=>c=!1))),o.$set(e),0==t[0]?a?a.p(t,n):(a=At(t),a.c(),a.m(u.parentNode,u)):a&&(a.d(1),a=null),1==t[0]?$||($=kt(),$.c(),$.m(i.parentNode,i)):$&&($.d(1),$=null)},i(t){s||(X(o.$$.fragment,t),s=!0)},o(t){Y(o.$$.fragment,t),s=!1},d(t){t&&v(n),t&&v(e),ot(o,t),t&&v(r),a&&a.d(t),t&&v(u),$&&$.d(t),t&&v(i)}}}function Nt(t,n,e){let o=0,c="",r="";return[o,c,r,function(t){o=t,e(0,o)},function(){c=this.value,e(1,c)},function(){r=this.value,e(2,r)}]}class Ct extends ut{constructor(t){super(),rt(this,t,Nt,Mt,u,{})}}function Tt(t){let n;return{c(){n=E("ป้อนค่า")},m(t,e){g(t,n,e)},d(t){t&&v(n)}}}function Lt(t){let n;return{c(){n=E("สูตร")},m(t,e){g(t,n,e)},d(t){t&&v(n)}}}function jt(t){let n,e,o,c;return n=new pt({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),o=new pt({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){nt(n.$$.fragment),e=x(),nt(o.$$.fragment)},m(t,r){et(n,t,r),g(t,e,r),et(o,t,r),c=!0},p(t,e){const c={};64&e&&(c.$$scope={dirty:e,ctx:t}),n.$set(c);const r={};64&e&&(r.$$scope={dirty:e,ctx:t}),o.$set(r)},i(t){c||(X(n.$$.fragment,t),X(o.$$.fragment,t),c=!0)},o(t){Y(n.$$.fragment,t),Y(o.$$.fragment,t),c=!1},d(t){ot(n,t),t&&v(e),ot(o,t)}}}function Ht(t){let n,e,o,r,u,i,s,l,f,a,$,d,p,m,b,w,M,N,C,T,L,j=.5*t[1]*t[2]+"";return{c(){n=B("input"),e=x(),o=B("input"),r=x(),u=B("div"),i=B("h2"),s=E("ความยาวฐาน "),l=E(t[1]),f=E(" หน่วย"),a=x(),$=B("h2"),d=E("ความสูง "),p=E(t[2]),m=E(" หน่วย"),b=x(),w=B("h2"),M=E("พื้นที่สามเหลี่ยม "),N=E(j),C=E(" ตารางหน่วย"),_(n,"placeholder","ป้อนค่าความยาวฐานเพื่อคำนวณพื้นที่"),_(o,"placeholder","ป้อนค่าความสูงเพื่อคำนวณพื้นที่")},m(c,v){g(c,n,v),k(n,t[1]),g(c,e,v),g(c,o,v),k(o,t[2]),g(c,r,v),g(c,u,v),h(u,i),h(i,s),h(i,l),h(i,f),h(u,a),h(u,$),h($,d),h($,p),h($,m),h(u,b),h(u,w),h(w,M),h(w,N),h(w,C),T||(L=[y(n,"input",t[4]),y(o,"input",t[5])],T=!0)},p(t,e){2&e&&n.value!==t[1]&&k(n,t[1]),4&e&&o.value!==t[2]&&k(o,t[2]),2&e&&A(l,t[1]),4&e&&A(p,t[2]),6&e&&j!==(j=.5*t[1]*t[2]+"")&&A(N,j)},d(t){t&&v(n),t&&v(e),t&&v(o),t&&v(r),t&&v(u),T=!1,c(L)}}}function Ot(t){let n,e,o;return{c(){n=B("h2"),n.textContent="สูตร : 1/2 x ฐาน x สูง",e=x(),o=B("div"),o.innerHTML='<img src="https://static.trueplookpanya.com/tppy/member/m_557500_560000/559384/cms/images/02%20%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%9B.jpg" width="350" alt="Triangle"/>'},m(t,c){g(t,n,c),g(t,e,c),g(t,o,c)},d(t){t&&v(n),t&&v(e),t&&v(o)}}}function St(t){let n,e,o,c,r,u,i,s;function l(n){t[3](n)}let f={$$slots:{default:[jt]},$$scope:{ctx:t}};void 0!==t[0]&&(f.active=t[0]),o=new at({props:f}),S.push((()=>tt(o,"active",l)));let a=0==t[0]&&Ht(t),$=1==t[0]&&Ot();return{c(){n=B("div"),n.innerHTML="<h1>สามเหลี่ยม</h1>",e=x(),nt(o.$$.fragment),r=x(),a&&a.c(),u=x(),$&&$.c(),i=b()},m(t,c){g(t,n,c),g(t,e,c),et(o,t,c),g(t,r,c),a&&a.m(t,c),g(t,u,c),$&&$.m(t,c),g(t,i,c),s=!0},p(t,[n]){const e={};64&n&&(e.$$scope={dirty:n,ctx:t}),!c&&1&n&&(c=!0,e.active=t[0],F((()=>c=!1))),o.$set(e),0==t[0]?a?a.p(t,n):(a=Ht(t),a.c(),a.m(u.parentNode,u)):a&&(a.d(1),a=null),1==t[0]?$||($=Ot(),$.c(),$.m(i.parentNode,i)):$&&($.d(1),$=null)},i(t){s||(X(o.$$.fragment,t),s=!0)},o(t){Y(o.$$.fragment,t),s=!1},d(t){t&&v(n),t&&v(e),ot(o,t),t&&v(r),a&&a.d(t),t&&v(u),$&&$.d(t),t&&v(i)}}}function Pt(t,n,e){let o=0,c="",r="";return[o,c,r,function(t){o=t,e(0,o)},function(){c=this.value,e(1,c)},function(){r=this.value,e(2,r)}]}class zt extends ut{constructor(t){super(),rt(this,t,Pt,St,u,{})}}function It(t){let n,e;return n=new bt({}),{c(){nt(n.$$.fragment)},m(t,o){et(n,t,o),e=!0},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){ot(n,t)}}}function qt(t){let n,e;return n=new Ct({}),{c(){nt(n.$$.fragment)},m(t,o){et(n,t,o),e=!0},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){ot(n,t)}}}function Dt(t){let n,e;return n=new zt({}),{c(){nt(n.$$.fragment)},m(t,o){et(n,t,o),e=!0},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){ot(n,t)}}}function Ft(t){let n,e,o,c,r,u,i,s,l,f,a,$="1"==t[0]&&It(),d="2"==t[0]&&qt(),p="3"==t[0]&&Dt();return{c(){n=B("select"),e=B("option"),e.textContent="วงกลม",o=B("option"),o.textContent="สี่เหลี่ยมผืนผ้า",c=B("option"),c.textContent="สามเหลี่ยม",r=x(),$&&$.c(),u=x(),d&&d.c(),i=x(),p&&p.c(),s=b(),e.__value="1",e.value=e.__value,o.__value="2",o.value=o.__value,c.__value="3",c.value=c.__value,void 0===t[0]&&D((()=>t[1].call(n)))},m(m,v){g(m,n,v),h(n,e),h(n,o),h(n,c),M(n,t[0]),g(m,r,v),$&&$.m(m,v),g(m,u,v),d&&d.m(m,v),g(m,i,v),p&&p.m(m,v),g(m,s,v),l=!0,f||(a=y(n,"change",t[1]),f=!0)},p(t,[e]){1&e&&M(n,t[0]),"1"==t[0]?$?1&e&&X($,1):($=It(),$.c(),X($,1),$.m(u.parentNode,u)):$&&(V(),Y($,1,1,(()=>{$=null})),W()),"2"==t[0]?d?1&e&&X(d,1):(d=qt(),d.c(),X(d,1),d.m(i.parentNode,i)):d&&(V(),Y(d,1,1,(()=>{d=null})),W()),"3"==t[0]?p?1&e&&X(p,1):(p=Dt(),p.c(),X(p,1),p.m(s.parentNode,s)):p&&(V(),Y(p,1,1,(()=>{p=null})),W())},i(t){l||(X($),X(d),X(p),l=!0)},o(t){Y($),Y(d),Y(p),l=!1},d(t){t&&v(n),t&&v(r),$&&$.d(t),t&&v(u),d&&d.d(t),t&&v(i),p&&p.d(t),t&&v(s),f=!1,a()}}}function Rt(t,n,e){let o=1;return[o,function(){o=function(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}(this),e(0,o)}]}return new class extends ut{constructor(t){super(),rt(this,t,Rt,Ft,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
