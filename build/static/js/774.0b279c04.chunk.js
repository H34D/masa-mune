"use strict";(self.webpackChunk_masa_finance_masa_example=self.webpackChunk_masa_finance_masa_example||[]).push([[774],{7171:function(e,t,n){n.d(t,{t0:function(){return O},zv:function(){return v},uA:function(){return I},uc:function(){return _},jb:function(){return R},zb:function(){return W},AV:function(){return w},Ic:function(){return K},Vs:function(){return q}});Symbol();const s=Symbol();const o=Object.getPrototypeOf,r=new WeakMap,a=e=>e&&(r.has(e)?r.get(e):o(e)===Object.prototype||o(e)===Array.prototype),i=e=>a(e)&&e[s]||null,l=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];r.set(e,t)},c=e=>"object"===typeof e&&null!==e,d=new WeakMap,u=new WeakSet,p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e,t)=>new Proxy(e,t),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>c(e)&&!u.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;const a=o.get(e);if((null==a?void 0:a[0])===t)return a[1];const i=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return l(i,!0),o.set(e,[t,i]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(i,t))return;const s=Reflect.get(e,t),o={value:s,enumerable:!0,configurable:!0};if(u.has(s))l(s,!1);else if(s instanceof Promise)delete o.value,o.get=()=>n(s);else if(d.has(s)){const[e,t]=d.get(s);o.value=r(e,t(),n)}Object.defineProperty(i,t,o)})),i},a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,p=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],g=arguments.length>8&&void 0!==arguments[8]?arguments[8]:s=>{if(!c(s))throw new Error("object required");const o=a.get(s);if(o)return o;let l=p[0];const h=new Set,f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++p[0];l!==t&&(l=t,h.forEach((n=>n(e,t))))};let m=p[1];const b=e=>(t,n)=>{const s=[...t];s[1]=[e,...s[1]],f(s,n)},w=new Map,v=e=>{var t;const n=w.get(e);n&&(w.delete(e),null==(t=n[1])||t.call(n))},y=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s)),I={deleteProperty(e,t){const n=Reflect.get(e,t);v(t);const s=Reflect.deleteProperty(e,t);return s&&f(["delete",[t],n]),s},set(t,s,o,r){const l=Reflect.has(t,s),p=Reflect.get(t,s,r);if(l&&(e(p,o)||a.has(o)&&e(p,a.get(o))))return!0;v(s),c(o)&&(o=i(o)||o);let m=o;if(o instanceof Promise)o.then((e=>{o.status="fulfilled",o.value=e,f(["resolve",[s],e])})).catch((e=>{o.status="rejected",o.reason=e,f(["reject",[s],e])}));else{!d.has(o)&&n(o)&&(m=g(o));const e=!u.has(m)&&d.get(m);e&&((e,t)=>{if(w.has(e))throw new Error("prop listener already exists");if(h.size){const n=t[3](b(e));w.set(e,[t,n])}else w.set(e,[t])})(s,e)}return Reflect.set(t,s,m,r),f(["set",[s],o,p]),!0}},C=t(y,I);a.set(s,C);const W=[y,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++p[1];return m===e||h.size||(m=e,w.forEach((t=>{let[n]=t;const s=n[1](e);s>l&&(l=s)}))),l},r,e=>{h.add(e),1===h.size&&w.forEach(((e,t)=>{let[n,s]=e;if(s)throw new Error("remove already exists");const o=n[3](b(t));w.set(t,[n,o])}));return()=>{h.delete(e),0===h.size&&w.forEach(((e,t)=>{let[n,s]=e;s&&(s(),w.set(t,[n]))}))}}];return d.set(C,W),Reflect.ownKeys(s).forEach((e=>{const t=Object.getOwnPropertyDescriptor(s,e);"value"in t&&(C[e]=s[e],delete t.value,delete t.writable),Object.defineProperty(y,e,t)})),C};return[g,d,u,e,t,n,s,o,r,a,p]},[g]=p();function h(){return g(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function f(e,t,n){const s=d.get(e);let o;s||console.warn("Please use proxy object");const r=[],a=s[3];let i=!1;const l=a((e=>{r.push(e),n?t(r.splice(0)):o||(o=Promise.resolve().then((()=>{o=void 0,i&&t(r.splice(0))})))}));return i=!0,()=>{i=!1,l()}}var m=n(9778);const b=h({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),w={state:b,subscribe(e){return f(b,(()=>e(b)))},push(e,t){e!==b.view&&(b.view=e,t&&(b.data=t),b.history.push(e))},reset(e){b.view=e,b.history=[e]},replace(e){b.history.length>1&&(b.history[b.history.length-1]=e,b.view=e)},goBack(){if(b.history.length>1){b.history.pop();const[e]=b.history.slice(-1);b.view=e}},setData(e){b.data=e}},v={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))},isAndroid(){return v.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return v.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,n){if(v.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);let s=e;s.includes("://")||(s=e.replaceAll("/","").replaceAll(":",""),s=`${s}://`),s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,n);return`${s}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,n){if(!v.isHttpUrl(e))return this.formatNativeUrl(e,t,n);let s=e;s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,n);return`${s}wc?uri=${encodeURIComponent(t)}`},async wait(e){return new Promise((t=>{setTimeout(t,e)}))},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(v.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(v.WCM_VERSION,"2.5.9")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=w.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},y=h({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),I={state:y,subscribe(e){return f(y.events,(()=>e(function(e,t){const n=d.get(e);n||console.warn("Please use proxy object");const[s,o,r]=n;return r(s,o(),t)}(y.events[y.events.length-1]))))},initialize(){y.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(y.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){y.connectedWalletId=e},click(e){if(y.enabled){const t={type:"CLICK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},track(e){if(y.enabled){const t={type:"TRACK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},view(e){if(y.enabled){const t={type:"VIEW",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}}},C=h({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),W={state:C,subscribe(e){return f(C,(()=>e(C)))},setChains(e){C.chains=e},setWalletConnectUri(e){C.walletConnectUri=e},setIsCustomDesktop(e){C.isCustomDesktop=e},setIsCustomMobile(e){C.isCustomMobile=e},setIsDataLoaded(e){C.isDataLoaded=e},setIsUiLoaded(e){C.isUiLoaded=e},setIsAuth(e){C.isAuth=e}},E=h({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),O={state:E,subscribe(e){return f(E,(()=>e(E)))},setConfig(e){var t,n;I.initialize(),W.setChains(e.chains),W.setIsAuth(Boolean(e.enableAuthMode)),W.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),W.setIsCustomDesktop(Boolean(null==(n=e.desktopWallets)?void 0:n.length)),v.setModalVersionInStorage(),Object.assign(E,e)}},L="https://explorer-api.walletconnect.com";async function A(e,t){const n=new URL(e,L);return n.searchParams.append("projectId",O.state.projectId),Object.entries(t).forEach((e=>{let[t,s]=e;s&&n.searchParams.append(t,String(s))})),(await fetch(n)).json()}const j={async getDesktopListings(e){return A("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return A("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return A("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return A("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${L}/w3m/v1/getWalletImage/${e}?projectId=${O.state.projectId}`},getAssetImageUrl(e){return`${L}/w3m/v1/getAssetImage/${e}?projectId=${O.state.projectId}`}};var M=Object.defineProperty,U=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const S=v.isMobile(),N=h({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),_={state:N,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=O.state;if("NONE"===e||"ALL"===t&&!e)return N.recomendedWallets;if(v.isArray(e)){const t={recommendedIds:e.join(",")},{listings:n}=await j.getAllListings(t),s=Object.values(n);s.sort(((t,n)=>e.indexOf(t.id)-e.indexOf(n.id))),N.recomendedWallets=s}else{const{chains:e,isAuth:n}=W.state,s=e?.join(","),o=v.isArray(t),r={page:1,sdks:n?"auth_v1":void 0,entries:v.RECOMMENDED_WALLET_AMOUNT,chains:s,version:2,excludedIds:o?t.join(","):void 0},{listings:a}=S?await j.getMobileListings(r):await j.getDesktopListings(r);N.recomendedWallets=Object.values(a)}return N.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var n in t||(t={}))k.call(t,n)&&P(e,n,t[n]);if(U)for(var n of U(t))D.call(t,n)&&P(e,n,t[n]);return e})({},e),{explorerRecommendedWalletIds:n,explorerExcludedWalletIds:s}=O.state,{recomendedWallets:o}=N;if("ALL"===s)return N.wallets;o.length?t.excludedIds=o.map((e=>e.id)).join(","):v.isArray(n)&&(t.excludedIds=n.join(",")),v.isArray(s)&&(t.excludedIds=[t.excludedIds,s].filter(Boolean).join(",")),W.state.isAuth&&(t.sdks="auth_v1");const{page:r,search:a}=e,{listings:i,total:l}=S?await j.getMobileListings(t):await j.getDesktopListings(t),c=Object.values(i),d=a?"search":"wallets";return N[d]={listings:[...N[d].listings,...c],total:l,page:r??1},{listings:c,total:l}},getWalletImageUrl(e){return j.getWalletImageUrl(e)},getAssetImageUrl(e){return j.getAssetImageUrl(e)},resetSearch(){N.search={listings:[],total:0,page:1}}},x=h({open:!1}),R={state:x,subscribe(e){return f(x,(()=>e(x)))},async open(e){return new Promise((t=>{const{isUiLoaded:n,isDataLoaded:s}=W.state;if(W.setWalletConnectUri(e?.uri),W.setChains(e?.chains),w.reset("ConnectWallet"),n&&s)x.open=!0,t();else{const e=setInterval((()=>{const n=W.state;n.isUiLoaded&&n.isDataLoaded&&(clearInterval(e),x.open=!0,t())}),200)}}))},close(){x.open=!1}};var T=Object.defineProperty,$=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,z=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const H=h({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),K={state:H,subscribe(e){return f(H,(()=>e(H)))},setThemeConfig(e){const{themeMode:t,themeVariables:n}=e;t&&(H.themeMode=t),n&&(H.themeVariables=((e,t)=>{for(var n in t||(t={}))B.call(t,n)&&z(e,n,t[n]);if($)for(var n of $(t))V.call(t,n)&&z(e,n,t[n]);return e})({},n))}},J=h({open:!1,message:"",variant:"success"}),q={state:J,subscribe(e){return f(J,(()=>e(J)))},openToast(e,t){J.open=!0,J.message=e,J.variant=t},closeToast(){J.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=m.lW),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window))},774:function(e,t,n){n.r(t),n.d(t,{WalletConnectModal:function(){return o}});var s=n(7171);class o{constructor(e){this.openModal=s.jb.open,this.closeModal=s.jb.close,this.subscribeModal=s.jb.subscribe,this.setTheme=s.Ic.setThemeConfig,s.Ic.setThemeConfig(e),s.t0.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await Promise.all([n.e(741),n.e(459)]).then(n.bind(n,3459));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),s.zb.setIsUiLoaded(!0)}}}}}]);
//# sourceMappingURL=774.0b279c04.chunk.js.map