import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as a}from"./index.CdJzaNS0.js";/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(...o)=>o.filter((t,s,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,s,r)=>r?r.toUpperCase():s.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=o=>{const t=C(o);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},E=a.createContext({}),$=()=>a.useContext(E),z=a.forwardRef(({color:o,size:t,strokeWidth:s,absoluteStrokeWidth:r,className:c="",children:n,iconNode:l,...h},p)=>{const{size:i=24,strokeWidth:m=2,absoluteStrokeWidth:b=!1,color:v="currentColor",className:y=""}=$()??{},w=r??b?Number(s??m)*24/Number(t??i):s??m;return a.createElement("svg",{ref:p,...d,width:t??i??d.width,height:t??i??d.height,stroke:o??v,strokeWidth:w,className:f("lucide",y,c),...!n&&!R(h)&&{"aria-hidden":"true"},...h},[...l.map(([j,k])=>a.createElement(j,k)),...Array.isArray(n)?n:[n]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(o,t)=>{const s=a.forwardRef(({className:r,...c},n)=>a.createElement(z,{ref:n,iconNode:t,className:f(`lucide-${N(u(o))}`,`lucide-${o}`,r),...c}));return s.displayName=u(o),s};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],I=x("chevron-right",A);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],M=x("menu",L);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],g=x("x",S);function W({currentPage:o,onOpenRubriche:t}){const[s,r]=a.useState(!1),c=a.useRef(null);return a.useEffect(()=>{function n(l){c.current&&!c.current.contains(l.target)&&r(!1)}return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[]),e.jsx("header",{className:"bg-white border-b border-gray-200 sticky top-0 z-40 relative",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-6 flex justify-between items-center",children:[e.jsx("a",{href:"/",className:"text-2xl font-serif font-bold text-gray-900 hover:text-accent transition-colors",children:"AI di Provincia"}),e.jsxs("div",{className:"flex items-center gap-8 relative",ref:c,children:[e.jsxs("nav",{className:"hidden md:flex gap-8 items-center",children:[e.jsx("a",{href:"/",className:`text-sm font-medium transition-colors ${o==="home"?"text-accent":"text-gray-600 hover:text-gray-900"}`,children:"Home"}),e.jsx("a",{href:"/chi-sono",className:`text-sm font-medium transition-colors ${o==="about"?"text-accent":"text-gray-600 hover:text-gray-900"}`,children:"Chi sono"}),e.jsx("button",{onClick:t,className:"text-sm font-medium text-gray-600 hover:text-accent transition-colors",children:"Rubriche"}),e.jsx("a",{href:"#newsletter",onClick:n=>{n.preventDefault(),document.getElementById("newsletter")?.scrollIntoView({behavior:"smooth"})},className:"text-sm font-bold text-accent hover:underline transition-colors",children:"Newsletter ↓"})]}),e.jsx("button",{onClick:()=>r(!s),className:"text-gray-900 hover:text-accent transition-colors p-1","aria-label":"Menu principale",children:s?e.jsx(g,{size:24}):e.jsx(M,{size:24})}),s&&e.jsxs("div",{className:"absolute top-full right-0 mt-4 w-48 bg-white border border-gray-100 rounded-xl shadow-2xl py-2 z-50 flex flex-col overflow-hidden",children:[e.jsx("a",{href:"/",onClick:()=>r(!1),className:"text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors block",children:"Home"}),e.jsx("a",{href:"/chi-sono",onClick:()=>r(!1),className:"text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors block",children:"Chi sono"}),e.jsx("button",{onClick:()=>{t(),r(!1)},className:"text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors border-t border-gray-100",children:"Rubriche"}),e.jsx("a",{href:"#newsletter",onClick:n=>{n.preventDefault(),r(!1),document.getElementById("newsletter")?.scrollIntoView({behavior:"smooth"})},className:"text-left px-5 py-3 text-sm font-bold text-accent hover:bg-gray-50 transition-colors border-t border-gray-100 block",children:"Newsletter ↓"})]})]})]})})}function _({isOpen:o,onClose:t,rubriche:s}){return e.jsxs(e.Fragment,{children:[o&&e.jsx("div",{className:"fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity",onClick:t}),e.jsxs("div",{className:`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${o?"translate-x-0":"translate-x-full"}`,children:[e.jsxs("div",{className:"p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50",children:[e.jsx("h2",{className:"text-xl font-serif font-bold text-gray-900",children:"Tutte le Rubriche"}),e.jsx("button",{onClick:t,className:"text-gray-400 hover:text-accent transition-colors bg-white p-1 rounded-full shadow-sm",children:e.jsx(g,{size:20})})]}),e.jsx("div",{className:"p-6 overflow-y-auto flex-grow space-y-8",children:s.map(r=>e.jsxs("div",{className:"group",children:[e.jsx("h3",{className:"text-xs font-mono font-bold text-accent uppercase tracking-widest mb-3 border-l-2 border-accent pl-3",children:r.category}),e.jsxs("a",{href:`/post/${r.slug}`,onClick:t,className:"text-left w-full hover:bg-gray-50 p-3 -mx-3 rounded-lg transition-colors flex items-start gap-3 group/link",children:[r.cover?e.jsx("div",{className:"shrink-0 w-12 h-12 overflow-hidden rounded shadow-sm border border-gray-100 mt-1",children:e.jsx("img",{src:r.cover,alt:r.title,className:"w-full h-full object-cover group-hover/link:scale-105 transition-transform duration-300"})}):e.jsx(I,{size:16,className:"text-gray-300 mt-1 flex-shrink-0 group-hover/link:text-accent transition-colors"}),e.jsx("p",{className:"text-sm font-serif font-medium text-gray-800 leading-snug group-hover/link:text-accent transition-colors m-0",children:r.title})]})]},r.category))})]})]})}function H({currentPage:o,rubriche:t}){const[s,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(W,{currentPage:o,onOpenRubriche:()=>r(!0)}),e.jsx(_,{isOpen:s,onClose:()=>r(!1),rubriche:t})]})}export{H as default};
