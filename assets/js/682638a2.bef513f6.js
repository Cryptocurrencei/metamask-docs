"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1511],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},79910:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_label:"Pure JavaScript",sidebar_position:2,description:"Set up the SDK in your Pure JavaScript dapp.",tags:["JavaScript SDK"]},i="Use MetaMask SDK with pure JavaScript",s={unversionedId:"how-to/use-sdk/javascript/pure-js",id:"how-to/use-sdk/javascript/pure-js",title:"Use MetaMask SDK with pure JavaScript",description:"Set up the SDK in your Pure JavaScript dapp.",source:"@site/wallet/how-to/use-sdk/javascript/pure-js.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/pure-js",permalink:"/wallet/how-to/use-sdk/javascript/pure-js",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/pure-js.md",tags:[{label:"JavaScript SDK",permalink:"/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Pure JavaScript",sidebar_position:2,description:"Set up the SDK in your Pure JavaScript dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"React UI",permalink:"/wallet/how-to/use-sdk/javascript/react/react-ui"},next:{title:"Other web frameworks",permalink:"/wallet/how-to/use-sdk/javascript/other-web-frameworks"}},p={},l=[{value:"Example",id:"example",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-metamask-sdk-with-pure-javascript"},"Use MetaMask SDK with pure JavaScript"),(0,n.kt)("p",null,"Import ",(0,n.kt)("a",{parentName:"p",href:"/wallet/concepts/sdk/"},"MetaMask SDK")," into your pure JavaScript dapp to enable\nyour users to easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for pure JavaScript has the ",(0,n.kt)("a",{parentName:"p",href:"/wallet/how-to/use-sdk/javascript/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,n.kt)("p",null,"To import, instantiate, and use the SDK, you can insert a script in the head section of your website:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<head>\n    ...\n    <script src="https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/cdn/metamask-sdk.js"><\/script>\n    <script>\n        const MMSDK = new MetaMaskSDK.MetaMaskSDK(\n            dappMetadata: {\n                name: "Example Pure JS Dapp",\n                url: window.location.href,\n            },\n            // Other options\n        )\n        // Because the init process of MetaMask SDK is async.\n        setTimeout(() => {\n            // You can also access via window.ethereum\n            const ethereum = MMSDK.getProvider();\n\n            ethereum.request({ method: \'eth_requestAccounts\' });\n        }, 0)\n    <\/script>\n    ...\n</head>\n')),(0,n.kt)("p",null,"You can configure the SDK using any ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/sdk-js-options"},"options")," and call any\n",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/provider-api#windowethereumrequestargs"},(0,n.kt)("inlineCode",{parentName:"a"},"ethereum.request(args)"))," first,\nsince it prompts the installation or connection popup to appear."),(0,n.kt)("admonition",{title:"Important SDK options",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/wallet/reference/sdk-js-options#dappmetadata"},(0,n.kt)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/wallet/reference/sdk-js-options#modals"},(0,n.kt)("inlineCode",{parentName:"a"},"modals"))," to ",(0,n.kt)("a",{parentName:"li",href:"/wallet/how-to/display/custom-modals"},"customize the logic and UI of\nthe displayed modals"),"."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/wallet/reference/sdk-js-options#infuraapikey"},(0,n.kt)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,n.kt)("a",{parentName:"li",href:"/wallet/how-to/make-read-only-requests"},"make read-only RPC requests")," from your dapp."))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/pure-javascript"},"example pure JavaScript dapp"),"\nin the JavaScript SDK GitHub repository for more information."))}m.isMDXComponent=!0}}]);