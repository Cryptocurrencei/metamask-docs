"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2894],{15680:(e,r,t)=>{t.d(r,{xA:()=>f,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=a,y=l["".concat(c,".").concat(m)]||l[m]||u[m]||o;return t?n.createElement(y,i(i({ref:r},f),{},{components:t})):n.createElement(y,i({ref:r},f))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73818:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(58168),a=(t(96540),t(15680));const o={description:"Reference content for the Gas API."},i="API reference",s={unversionedId:"gas-api/api-reference/index",id:"gas-api/api-reference/index",title:"API reference",description:"Reference content for the Gas API.",source:"@site/services/gas-api/api-reference/index.md",sourceDirName:"gas-api/api-reference",slug:"/gas-api/api-reference/",permalink:"/1283-move-snaps-methods/services/gas-api/api-reference/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/api-reference/index.md",tags:[],version:"current",frontMatter:{description:"Reference content for the Gas API."},sidebar:"servicesSidebar",previous:{title:"Supported networks",permalink:"/1283-move-snaps-methods/services/gas-api/supported-networks"},next:{title:"Get the base fee history",permalink:"/1283-move-snaps-methods/services/gas-api/api-reference/basefeehistory"}},c={},p=[],f={toc:p},l="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(l,(0,n.A)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"api-reference"},"API reference"),(0,a.yg)("p",null,"This section provides reference information for the various Gas REST APIs.\nUse the APIs to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/1283-move-snaps-methods/services/gas-api/api-reference/gasprices-type2"},"Get EIP-1559 gas prices.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/1283-move-snaps-methods/services/gas-api/api-reference/basefeehistory"},"Get the base fee history (in Gwei).")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/1283-move-snaps-methods/services/gas-api/api-reference/basefeepercentile"},"Get the base fee percentile (in Gwei).")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/1283-move-snaps-methods/services/gas-api/api-reference/busythreshold"},"Get the busy threshold for a network."))),(0,a.yg)("admonition",{title:"note",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"You need your ",(0,a.yg)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id"},"API key"),"\nand ",(0,a.yg)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret"},"API key secret"),"\nto authorize your account to use the interactive APIs.")))}u.isMDXComponent=!0}}]);