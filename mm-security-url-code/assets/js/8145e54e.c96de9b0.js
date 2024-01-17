"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[40],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),h=c,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:c,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},84987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),c=(r(67294),r(3905));const a={sidebar_position:1,description:"See the high-level web3 architecture."},o="Architecture",i={unversionedId:"concepts/architecture",id:"concepts/architecture",title:"Architecture",description:"See the high-level web3 architecture.",source:"@site/wallet/concepts/architecture.md",sourceDirName:"concepts",slug:"/concepts/architecture",permalink:"/mm-security-url-code/wallet/concepts/architecture",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"See the high-level web3 architecture."},sidebar:"walletSidebar",previous:{title:"Concepts",permalink:"/mm-security-url-code/wallet/concepts"},next:{title:"About MetaMask SDK",permalink:"/mm-security-url-code/wallet/concepts/sdk/"}},s={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...a}=e;return(0,c.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"architecture"},"Architecture"),(0,c.kt)("p",null,"The following diagram outlines the high-level architecture of the MetaMask web3 stack."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Architecture diagram",src:r(60694).Z,width:"1512",height:"926"})),(0,c.kt)("p",null,"Using ",(0,c.kt)("a",{parentName:"p",href:"/mm-security-url-code/wallet/concepts/sdk/"},"MetaMask SDK"),", dapps built on multiple platforms can connect to their users' Ethereum\naccounts through the MetaMask browser extension and MetaMask Mobile.\nDapps can send ",(0,c.kt)("a",{parentName:"p",href:"/mm-security-url-code/wallet/concepts/apis#json-rpc-api"},"JSON-RPC API")," calls to the users' MetaMask wallet clients.\nMetaMask then responds to these requests directly or uses ",(0,c.kt)("a",{parentName:"p",href:"https://www.infura.io/"},"Infura")," (or\nanother user-configured node provider) when the call requires access to information on a blockchain network."))}m.isMDXComponent=!0},60694:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/web3-architecture-692705a57011e90a523806281fdf2219.png"}}]);