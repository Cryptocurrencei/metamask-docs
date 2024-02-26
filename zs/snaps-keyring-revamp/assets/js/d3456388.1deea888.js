"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1085],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),m=a,y=l["".concat(o,".").concat(m)]||l[m]||f[m]||s;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,c=new Array(s);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[l]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<s;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={},c="Variable: ListAccountsRequestStruct",i={unversionedId:"reference/keyring-api/variables/ListAccountsRequestStruct",id:"reference/keyring-api/variables/ListAccountsRequestStruct",title:"Variable: ListAccountsRequestStruct",description:"Source",source:"@site/snaps/reference/keyring-api/variables/ListAccountsRequestStruct.md",sourceDirName:"reference/keyring-api/variables",slug:"/reference/keyring-api/variables/ListAccountsRequestStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/ListAccountsRequestStruct",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/variables/ListAccountsRequestStruct.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Variable: KeyringResponseStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/KeyringResponseStruct"},next:{title:"Variable: ListAccountsResponseStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/ListAccountsResponseStruct"}},o={},u=[{value:"Source",id:"source",level:2}],p={toc:u},l="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"variable-listaccountsrequeststruct"},"Variable: ListAccountsRequestStruct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const ListAccountsRequestStruct: Struct<{\n  id: null | string | number;\n  jsonrpc: "2.0";\n  method: "keyring_listAccounts";\n  }, {\n  id: Struct<null | string | number, null>;\n  jsonrpc: Struct<"2.0", "2.0">;\n  method: Struct<"keyring_listAccounts", "keyring_listAccounts">;\n  }>;\n')),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/a868ea2/src/internal/api.ts#L29"},"external/keyring-api/src/internal/api.ts:29")))}f.isMDXComponent=!0}}]);