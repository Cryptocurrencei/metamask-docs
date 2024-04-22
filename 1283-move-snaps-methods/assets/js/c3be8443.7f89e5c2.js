"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3557],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={description:"Learn about convenience libraries.",sidebar_position:4},s="Convenience libraries",i={unversionedId:"concepts/convenience-libraries",id:"concepts/convenience-libraries",title:"Convenience libraries",description:"Learn about convenience libraries.",source:"@site/wallet/concepts/convenience-libraries.md",sourceDirName:"concepts",slug:"/concepts/convenience-libraries",permalink:"/1283-move-snaps-methods/wallet/concepts/convenience-libraries",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/convenience-libraries.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Learn about convenience libraries.",sidebar_position:4},sidebar:"walletSidebar",previous:{title:"Android SDK architecture",permalink:"/1283-move-snaps-methods/wallet/concepts/sdk/android"},next:{title:"Signing methods",permalink:"/1283-move-snaps-methods/wallet/concepts/signing-methods"}},c={},p=[],l={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"convenience-libraries"},"Convenience libraries"),(0,a.yg)("p",null,"Various convenience libraries exist for dapp developers.\nSome of them simplify the creation of specific user interface elements, some entirely manage the\nuser account onboarding, and others give you a variety of methods for interacting with smart\ncontracts, for a variety of API preferences (for example, promises, callbacks, and strong types)."),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/wallet/concepts/wallet-api#ethereum-provider-api"},"MetaMask Ethereum provider API")," is very simple, and wraps\n",(0,a.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/wallet/concepts/wallet-api#json-rpc-api"},"Ethereum JSON-RPC")," formatted messages, which is why\nsome developers use a convenience library for interacting with the provider, such as\n",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/ethers"},"Ethers"),", ",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/web3"},"web3.js"),", and\n",(0,a.yg)("a",{parentName:"p",href:"https://framework.embarklabs.io/"},"Embark"),".\nYou can refer to those tools' documentation to use them."),(0,a.yg)("p",null,"You can ",(0,a.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/wallet/how-to/use-sdk/"},"use MetaMask SDK"),", which provides a reliable, secure, and\nseamless connection from your dapp to MetaMask.\nIt onboards users smoothly from multiple dapp platforms using the MetaMask browser extension or\nMetaMask Mobile, and your dapp can call any ",(0,a.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/wallet/concepts/wallet-api"},"Wallet API")," methods with the SDK installed."),(0,a.yg)("p",null,"You can also ",(0,a.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/wallet/how-to/use-sdk/3rd-party-libraries/web3-onboard"},"use Web3-Onboard with MetaMask SDK"),"\nin your JavaScript dapp."))}u.isMDXComponent=!0}}]);