function p(){}function A(t){return t()}function E(){return Object.create(null)}function h(t){t.forEach(A)}function N(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function C(t){return Object.keys(t).length===0}function L(t,e){t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function B(t){t.parentNode&&t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function U(){return M(" ")}function V(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t){return Array.from(t.childNodes)}let y;function l(t){y=t}const u=[],v=[];let a=[];const j=[],T=Promise.resolve();let m=!1;function q(){m||(m=!0,T.then(O))}function $(t){a.push(t)}const g=new Set;let s=0;function O(){if(s!==0)return;const t=y;do{try{for(;s<u.length;){const e=u[s];s++,l(e),z(e.$$)}}catch(e){throw u.length=0,s=0,e}for(l(null),u.length=0,s=0;v.length;)v.pop()();for(let e=0;e<a.length;e+=1){const n=a[e];g.has(n)||(g.add(n),n())}a.length=0}while(u.length);for(;j.length;)j.pop()();m=!1,g.clear(),l(t)}function z(t){if(t.fragment!==null){t.update(),h(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}function D(t){const e=[],n=[];a.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),a=e}const F=new Set;function G(t,e){t&&t.i&&(F.delete(t),t.i(e))}function H(t,e,n,o){const{fragment:c,after_update:_}=t.$$;c&&c.m(e,n),o||$(()=>{const i=t.$$.on_mount.map(A).filter(N);t.$$.on_destroy?t.$$.on_destroy.push(...i):h(i),t.$$.on_mount=[]}),_.forEach($)}function I(t,e){const n=t.$$;n.fragment!==null&&(D(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){t.$$.dirty[0]===-1&&(u.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,o,c,_,i,S=[-1]){const d=y;l(t);const r=t.$$={fragment:null,ctx:[],props:_,update:p,not_equal:c,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:E(),dirty:S,skip_bound:!1,root:e.target||d.$$.root};i&&i(r.root);let b=!1;if(r.ctx=n?n(t,e.props||{},(f,x,...k)=>{const w=k.length?k[0]:x;return r.ctx&&c(r.ctx[f],r.ctx[f]=w)&&(!r.skip_bound&&r.bound[f]&&r.bound[f](w),b&&J(t,f)),x}):[],r.update(),b=!0,h(r.before_update),r.fragment=o?o(r.ctx):!1,e.target){if(e.hydrate){const f=P(e.target);r.fragment&&r.fragment.l(f),f.forEach(B)}else r.fragment&&r.fragment.c();e.intro&&G(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),O()}l(d)}class X{$destroy(){I(this,1),this.$destroy=p}$on(e,n){if(!N(n))return p;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}$set(e){this.$$set&&!C(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{X as S,U as a,V as b,Q as c,L as d,R as e,B as f,W as i,p as n,K as s};