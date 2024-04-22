"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9329],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,g=d["".concat(l,".").concat(c)]||d[c]||u[c]||s;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},87866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=t(58168),r=(t(96540),t(15680)),s=t(4865),i=t(19365);const o={description:"See the Snaps entry points reference.",sidebar_position:4},l="Snaps entry points",p={unversionedId:"reference/entry-points",id:"reference/entry-points",title:"Snaps entry points",description:"See the Snaps entry points reference.",source:"@site/snaps/reference/entry-points.md",sourceDirName:"reference",slug:"/reference/entry-points",permalink:"/1283-move-snaps-methods/snaps/reference/entry-points",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/entry-points.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"See the Snaps entry points reference.",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Subcommands",permalink:"/1283-move-snaps-methods/snaps/reference/cli/subcommands"},next:{title:"Snaps permissions",permalink:"/1283-move-snaps-methods/snaps/reference/permissions"}},m={},d=[{value:"<code>onCronjob</code>",id:"oncronjob",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Example",id:"example",level:4},{value:"<code>onHomePage</code>",id:"onhomepage",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>onInstall</code>",id:"oninstall",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>onNameLookup</code>",id:"onnamelookup",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>onRpcRequest</code>",id:"onrpcrequest",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>onSignature</code>",id:"onsignature",level:2},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-5",level:4},{value:"<code>onTransaction</code>",id:"ontransaction",level:2},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-6",level:4},{value:"Transaction severity level",id:"transaction-severity-level",level:3},{value:"<code>onUpdate</code>",id:"onupdate",level:2},{value:"Parameters",id:"parameters-7",level:4},{value:"Example",id:"example-7",level:4},{value:"<code>onUserInput</code>",id:"onuserinput",level:2},{value:"Parameters",id:"parameters-8",level:4},{value:"Example",id:"example-8",level:4}],u={toc:d},c="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"snaps-entry-points"},"Snaps entry points"),(0,r.yg)("p",null,"Snaps can expose the following entry points."),(0,r.yg)("h2",{id:"oncronjob"},(0,r.yg)("inlineCode",{parentName:"h2"},"onCronjob")),(0,r.yg)("p",null,"To run ",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/features/cron-jobs"},"cron jobs")," for the user, a Snap must expose the ",(0,r.yg)("inlineCode",{parentName:"p"},"onCronjob")," entry point.\nMetaMask calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"onCronjob")," handler method at the specified schedule with the requests defined in\nthe ",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/reference/permissions#endowmentcronjob"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:cronjob"))," permission."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.yg)("inlineCode",{parentName:"p"},"onCronjob")," method, you must request the\n",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/reference/permissions#endowmentcronjob"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:cronjob"))," permission.")),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,"An object containing an RPC request specified in the ",(0,r.yg)("inlineCode",{parentName:"p"},"endowment:cronjob")," permission."),(0,r.yg)("h4",{id:"example"},"Example"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"TypeScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnCronjobHandler } from "@metamask/snaps-sdk";\n\nexport const onCronjob: OnCronjobHandler = async ({ request }) => {\n  switch (request.method) {\n    case "exampleMethodOne":\n      return snap.request({\n        method: "snap_notify",\n        params: {\n          type: "inApp",\n          message: "Hello, world!",\n        },\n      });\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n'))),(0,r.yg)(i.A,{value:"JavaScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'module.exports.onCronjob = async ({ request }) => {\n  switch (request.method) {\n    case "exampleMethodOne":\n      return snap.request({\n        method: "snap_notify",\n        params: {\n          type: "inApp",\n          message: "Hello, world!",\n        },\n      });\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n')))),(0,r.yg)("h2",{id:"onhomepage"},(0,r.yg)("inlineCode",{parentName:"h2"},"onHomePage")),(0,r.yg)("p",null,"To build an embedded UI in MetaMask that any user can access through the Snaps menu, a Snap must\nexpose the ",(0,r.yg)("inlineCode",{parentName:"p"},"onHomePage")," entry point.\nMetaMask calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"onHomePage")," handler method when the user selects the Snap name in the Snaps menu."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.yg)("inlineCode",{parentName:"p"},"onHomePage")," method, you must request the\n",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/reference/permissions#endowmentpage-home"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:page-home"))," permission.")),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("p",null,"None."),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,"One of the following:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A ",(0,r.yg)("inlineCode",{parentName:"li"},"content")," object displayed using ",(0,r.yg)("a",{parentName:"li",href:"/1283-move-snaps-methods/snaps/features/custom-ui/"},"custom UI"),"."),(0,r.yg)("li",{parentName:"ul"},"An ",(0,r.yg)("inlineCode",{parentName:"li"},"id")," returned by ",(0,r.yg)("a",{parentName:"li",href:"/1283-move-snaps-methods/snaps/reference/snaps-api#snap_createinterface"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_createInterface"))," for\n",(0,r.yg)("a",{parentName:"li",href:"/1283-move-snaps-methods/snaps/features/custom-ui/interactive-ui"},"interactive UI"),".")),(0,r.yg)("h4",{id:"example-1"},"Example"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"TypeScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnHomePageHandler } from "@metamask/snaps-sdk";\nimport { panel, text, heading } from "@metamask/snaps-sdk";\n\nexport const onHomePage: OnHomePageHandler = async () => {\n  return {\n    content: panel([\n      heading("Hello world!"),\n      text("Welcome to my Snap home page!"),\n    ]),\n  };\n};\n'))),(0,r.yg)(i.A,{value:"JavaScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'import { panel, text, heading } from "@metamask/snaps-sdk";\n\nmodule.exports.onHomePage = async () => {\n  return {\n    content: panel([\n      heading("Hello world!"),\n      text("Welcome to my Snap home page!"),\n    ]),\n  };\n};\n')))),(0,r.yg)("h2",{id:"oninstall"},(0,r.yg)("inlineCode",{parentName:"h2"},"onInstall")),(0,r.yg)("p",null,"To implement a ",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/features/lifecycle-hooks"},"lifecycle hook")," that runs an action upon\ninstallation, a Snap must expose the ",(0,r.yg)("inlineCode",{parentName:"p"},"onInstall")," entry point.\nMetaMask calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"onInstall")," handler method after the Snap is installed successfully."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.yg)("inlineCode",{parentName:"p"},"onInstall")," method, you must request the\n",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/reference/permissions#endowmentlifecycle-hooks"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:lifecycle-hooks"))," permission.")),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("p",null,"None."),(0,r.yg)("h4",{id:"example-2"},"Example"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"TypeScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnInstallHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\nexport const onInstall: OnInstallHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Thank you for installing my Snap"),\n        text(\n          "To use this Snap, visit the companion dapp at [metamask.io](https://metamask.io).",\n        ),\n      ]),\n    },\n  });\n};\n'))),(0,r.yg)(i.A,{value:"JavaScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'import { heading, panel, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onInstall = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Thank you for installing my Snap"),\n        text(\n          "To use this Snap, visit the companion dapp at [metamask.io](https://metamask.io).",\n        ),\n      ]),\n    },\n  });\n};\n')))),(0,r.yg)("h2",{id:"onnamelookup"},(0,r.yg)("inlineCode",{parentName:"h2"},"onNameLookup")),(0,r.yg)("admonition",{type:"flaskOnly"}),(0,r.yg)("p",null,"To provide ",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/features/custom-name-resolution"},"custom name resolution"),", a Snap must export ",(0,r.yg)("inlineCode",{parentName:"p"},"onNameLookup"),".\nWhenever a user types in the send field, MetaMask calls this method.\nMetaMask passes the user input to the ",(0,r.yg)("inlineCode",{parentName:"p"},"onNameLookup")," handler method."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.yg)("inlineCode",{parentName:"p"},"onNameLookup")," method, you must request the\n",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/reference/permissions#endowmentname-lookup"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:name-lookup"))," permission.")),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"chainId")," - The ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md"},"CAIP-2"),"\nchain ID."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"address")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"domain")," - One of these parameters is defined, and the other is undefined.")),(0,r.yg)("h4",{id:"example-3"},"Example"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"TypeScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnNameLookupHandler } from "@metamask/snaps-sdk";\n\nexport const onNameLookup: OnNameLookupHandler = async (request) => {\n  const { chainId, address, domain } = request;\n\n  if (address) {\n    const shortAddress = address.substring(2, 5);\n    const chainIdDecimal = parseInt(chainId.split(":")[1], 10);\n    const resolvedDomain = `${shortAddress}.${chainIdDecimal}.test.domain`;\n    return { resolvedDomains: [{ resolvedDomain, protocol: "test protocol" }] };\n  }\n\n  if (domain) {\n    const resolvedAddress = "0xc0ffee254729296a45a3885639AC7E10F9d54979";\n    return {\n      resolvedAddresses: [{ resolvedAddress, protocol: "test protocol" }],\n    };\n  }\n\n  return null;\n};\n'))),(0,r.yg)(i.A,{value:"JavaScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'module.exports.onNameLookup = async ({ request }) => {\n  const { chainId, address, domain } = request;\n\n  if (address) {\n    const shortAddress = address.substring(2, 5);\n    const chainIdDecimal = parseInt(chainId.split(":")[1], 10);\n    const resolvedDomain = `${shortAddress}.${chainIdDecimal}.test.domain`;\n    return { resolvedDomains: [{ resolvedDomain, protocol: "test protocol" }] };\n  }\n\n  if (domain) {\n    const resolvedAddress = "0xc0ffee254729296a45a3885639AC7E10F9d54979";\n    return {\n      resolvedAddresses: [{ resolvedAddress, protocol: "test protocol" }],\n    };\n  }\n\n  return null;\n};\n')))),(0,r.yg)("h2",{id:"onrpcrequest"},(0,r.yg)("inlineCode",{parentName:"h2"},"onRpcRequest")),(0,r.yg)("p",null,"To implement a ",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/learn/about-snaps/apis#custom-json-rpc-apis"},"custom JSON-RPC API")," to communicate with\ndapps and other Snaps, a Snap must expose the ",(0,r.yg)("inlineCode",{parentName:"p"},"onRpcRequest")," entry point.\nWhenever the Snap receives a JSON-RPC request, MetaMask calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"onRpcRequest")," handler method."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.yg)("inlineCode",{parentName:"p"},"onRpcRequest")," method, you must request the\n",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/reference/permissions#endowmentrpc"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:rpc"))," permission.")),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"origin")," - The origin as a string."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"request")," - The JSON-RPC request.")),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,"A promise containing the return of the implemented method."),(0,r.yg)("h4",{id:"example-4"},"Example"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"TypeScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"import type { OnRpcRequestHandler } from '@metamask/snaps-sdk';\n\nexport const onRpcRequest: OnRpcRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  switch (request.method) {\n    case 'hello':\n      return 'world!';\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n"))),(0,r.yg)(i.A,{value:"JavaScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"module.exports.onRpcRequest = async ({ origin, request }) => {\n  switch (request.method) {\n    case 'hello':\n      return 'world!';\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")))),(0,r.yg)("h2",{id:"onsignature"},(0,r.yg)("inlineCode",{parentName:"h2"},"onSignature")),(0,r.yg)("admonition",{type:"flaskOnly"}),(0,r.yg)("p",null,"To provide ",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/features/signature-insights"},"signature insights")," before a user signs a message, a\nSnap must expose the ",(0,r.yg)("inlineCode",{parentName:"p"},"onSignature")," entry point.\nWhenever a ",(0,r.yg)("a",{parentName:"p",href:"/wallet/concepts/signing-methods"},"signing method")," is called, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"personal_sign")," or\n",(0,r.yg)("inlineCode",{parentName:"p"},"eth_signTypedData_v4"),", MetaMask passes the raw unsigned signature payload to the ",(0,r.yg)("inlineCode",{parentName:"p"},"onSignature"),"\nhandler method."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.yg)("inlineCode",{parentName:"p"},"onSignature")," method, you must request the\n",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/reference/permissions#endowmentsignature-insight"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:signature-insight"))," permission.")),(0,r.yg)("h4",{id:"parameters-5"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"signature")," - The raw signature payload."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"signatureOrigin")," - The signature origin if\n",(0,r.yg)("a",{parentName:"li",href:"/1283-move-snaps-methods/snaps/reference/permissions#endowmentsignature-insight"},(0,r.yg)("inlineCode",{parentName:"a"},"allowSignatureOrigin"))," is set to ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),".")),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"An optional ",(0,r.yg)("inlineCode",{parentName:"li"},"severity")," property that, if present, must be set to ",(0,r.yg)("inlineCode",{parentName:"li"},"SeverityLevel.Critical"),"."),(0,r.yg)("li",{parentName:"ul"},"A content object displayed using ",(0,r.yg)("a",{parentName:"li",href:"/1283-move-snaps-methods/snaps/features/custom-ui/"},"custom UI")," after the user\nselects the ",(0,r.yg)("strong",{parentName:"li"},"Sign")," button.\nDue to current limitations of MetaMask's signature confirmation UI, the content will only be displayed if\nthe ",(0,r.yg)("inlineCode",{parentName:"li"},"severity")," property is present and set to ",(0,r.yg)("inlineCode",{parentName:"li"},"SeverityLevel.Critical"),".")),(0,r.yg)("h4",{id:"example-5"},"Example"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"TypeScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnSignatureHandler, SeverityLevel } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nexport const onSignature: OnSignatureHandler = async ({\n  signature,\n  signatureOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Signature Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n    severity: SeverityLevel.Critical,\n  };\n};\n'))),(0,r.yg)(i.A,{value:"JavaScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'import { SeverityLevel } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onSignature = async ({\n  signature,\n  signatureOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Signature Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n    severity: SeverityLevel.Critical,\n  };\n};\n')))),(0,r.yg)("h2",{id:"ontransaction"},(0,r.yg)("inlineCode",{parentName:"h2"},"onTransaction")),(0,r.yg)("p",null,"To provide transaction insights before a user signs a transaction, a Snap must expose the\n",(0,r.yg)("inlineCode",{parentName:"p"},"onTransaction")," entry point.\nWhenever there's a contract interaction, and a transaction is submitted using the MetaMask\nextension, MetaMask calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"onTransaction")," handler method.\nMetaMask passes the raw unsigned transaction payload to ",(0,r.yg)("inlineCode",{parentName:"p"},"onTransaction"),"."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.yg)("inlineCode",{parentName:"p"},"onTransaction")," method, you must request the\n",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/reference/permissions#endowmenttransaction-insight"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:transaction-insight"))," permission.")),(0,r.yg)("h4",{id:"parameters-6"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"transaction")," - The raw transaction payload."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"chainId")," - The ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md"},"CAIP-2"),"\nchain ID."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"transactionOrigin")," - The transaction origin if\n",(0,r.yg)("a",{parentName:"li",href:"/1283-move-snaps-methods/snaps/reference/permissions#endowmenttransaction-insight"},(0,r.yg)("inlineCode",{parentName:"a"},"allowTransactionOrigin"))," is set to ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),".")),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,"One of the following:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A ",(0,r.yg)("inlineCode",{parentName:"li"},"content")," object displayed using ",(0,r.yg)("a",{parentName:"li",href:"/1283-move-snaps-methods/snaps/features/custom-ui/"},"custom UI"),", alongside the confirmation\nfor the transaction that ",(0,r.yg)("inlineCode",{parentName:"li"},"onTransaction")," was called with."),(0,r.yg)("li",{parentName:"ul"},"An ",(0,r.yg)("inlineCode",{parentName:"li"},"id")," returned by ",(0,r.yg)("a",{parentName:"li",href:"/1283-move-snaps-methods/snaps/reference/snaps-api#snap_createinterface"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_createInterface"))," for\n",(0,r.yg)("a",{parentName:"li",href:"/1283-move-snaps-methods/snaps/features/custom-ui/interactive-ui"},"interactive UI"),".")),(0,r.yg)("h4",{id:"example-6"},"Example"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"TypeScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnTransactionHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nexport const onTransaction: OnTransactionHandler = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Transaction Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n  };\n};\n'))),(0,r.yg)(i.A,{value:"JavaScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'import { panel, heading, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onTransaction = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Transaction Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n  };\n};\n')))),(0,r.yg)("h3",{id:"transaction-severity-level"},"Transaction severity level"),(0,r.yg)("admonition",{type:"flaskOnly"}),(0,r.yg)("p",null,"This feature enables transaction insight Snaps to return an optional severity level of ",(0,r.yg)("inlineCode",{parentName:"p"},"critical"),".\nMetaMask shows a modal with the warning before the user can confirm the transaction.\nUsing the previous example for ",(0,r.yg)("inlineCode",{parentName:"p"},"onTransaction"),", the following code adds a single line to return an\ninsight with the severity level ",(0,r.yg)("inlineCode",{parentName:"p"},"critical"),": "),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"TypeScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnTransactionHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nexport const onTransaction: OnTransactionHandler = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Transaction Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n    // highlight-next-line\n    severity: "critical",\n  };\n};\n'))),(0,r.yg)(i.A,{value:"JavaScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'import { panel, heading, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onTransaction = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Transaction Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n    // highlight-next-line\n    severity: "critical",\n  };\n};\n')))),(0,r.yg)("h2",{id:"onupdate"},(0,r.yg)("inlineCode",{parentName:"h2"},"onUpdate")),(0,r.yg)("p",null,"To implement a ",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/features/lifecycle-hooks"},"lifecycle hook")," that runs an action upon update, a\nSnap must expose the ",(0,r.yg)("inlineCode",{parentName:"p"},"onUpdate")," entry point.\nMetaMask calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"onUpdate")," handler method after the Snap is updated successfully. "),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For MetaMask to call the Snap's ",(0,r.yg)("inlineCode",{parentName:"p"},"onUpdate")," method, you must request the\n",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/reference/permissions#endowmentlifecycle-hooks"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:lifecycle-hooks"))," permission.")),(0,r.yg)("h4",{id:"parameters-7"},"Parameters"),(0,r.yg)("p",null,"None."),(0,r.yg)("h4",{id:"example-7"},"Example"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"TypeScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnUpdateHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\nexport const onUpdate: OnUpdateHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Thank you for updating my Snap"),\n        text(\n          "New features added in this version:",\n        ),\n        text(\n          "Added a dialog that appears when updating."\n        ), \n      ]),\n    },\n  });\n};\n'))),(0,r.yg)(i.A,{value:"JavaScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'import { heading, panel, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onUpdate = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Thank you for updating my Snap"),\n        text(\n          "New features added in this version:",\n        ),\n        text(\n          "Added a dialog that appears when updating."\n        ), \n      ]),\n    },\n  });\n};\n')))),(0,r.yg)("h2",{id:"onuserinput"},(0,r.yg)("inlineCode",{parentName:"h2"},"onUserInput")),(0,r.yg)("admonition",{type:"flaskOnly"}),(0,r.yg)("p",null,"To respond to ",(0,r.yg)("a",{parentName:"p",href:"/1283-move-snaps-methods/snaps/features/custom-ui/interactive-ui"},"interactive UI")," events, a Snap must export ",(0,r.yg)("inlineCode",{parentName:"p"},"onUserInput"),"."),(0,r.yg)("h4",{id:"parameters-8"},"Parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id")," - The ID of the interface being acted on."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"event")," - An event object containing:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"type")," - The type of the event.\nPossible values are ",(0,r.yg)("inlineCode",{parentName:"li"},"ButtonClickEvent"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"FormSubmitEvent"),", or ",(0,r.yg)("inlineCode",{parentName:"li"},"InputChangeEvent"),".\nThese enums are exported from the ",(0,r.yg)("inlineCode",{parentName:"li"},"@metamask/snaps-sdk")," module."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"name")," - The name of the component that fired the event.\nOptional when the event type is ",(0,r.yg)("inlineCode",{parentName:"li"},"ButtonClickEvent"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"value")," - When the event type is ",(0,r.yg)("inlineCode",{parentName:"li"},"FormSubmitEvent"),", the values in the form as an object.")))),(0,r.yg)("h4",{id:"example-8"},"Example"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"TypeScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnUserInputHandler } from "@metamask/snaps-sdk";\nimport { UserInputEventType } from "@metamask/snaps-sdk";\n\nexport const onUserInput: OnUserInputHandler = async ({ id, event }) => {\n  if (event.type === UserInputEventType.FormSubmitEvent) {\n    console.log("The submitted form values are", event.value);\n  }\n};\n'))),(0,r.yg)(i.A,{value:"JavaScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'const { UserInputEventType } = require("@metamask/snaps-sdk");\n\nmodule.exports.onUserInput = async ({ id, event }) => {\n  if (event.type === UserInputEventType.FormSubmitEvent) {\n    console.log("The submitted form values are", event.value);\n  }\n};\n')))))}g.isMDXComponent=!0},19365:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(96540),r=t(20053);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t},n)}},4865:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(58168),r=t(96540),s=t(20053),i=t(23104),o=t(47751),l=t(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(e){let{className:n,block:t,selectedValue:o,selectValue:l,tabValues:m}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),a=m[t].value;a!==o&&(u(n),l(a))},g=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n)},m.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>d.push(e),onKeyDown:g,onClick:c},i,{className:(0,s.A)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":o===n})}),t??n)})))}function d(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function u(e){const n=(0,o.u)(e);return r.createElement("div",{className:(0,s.A)("tabs-container",p.tabList)},r.createElement(m,(0,a.A)({},e,n)),r.createElement(d,(0,a.A)({},e,n)))}function c(e){const n=(0,l.A)();return r.createElement(u,(0,a.A)({key:String(n)},e))}},47751:(e,n,t)=>{t.d(n,{u:()=>u});var a=t(96540),r=t(56347),s=t(57485),i=t(31682),o=t(89466);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??l(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function u(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[u,c]=d({queryString:t,groupId:r}),[g,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,o.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),h=(()=>{const e=u??g;return m({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),y(e)}),[c,y,s]),tabValues:s}}}}]);