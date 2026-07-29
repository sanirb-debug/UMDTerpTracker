const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-ilRXxnqf.js","assets/degree-DNLa0NZK.js","assets/CourseLink-C6VLCCds.js","assets/Planner-CuXGN46r.js","assets/TopRated-CRRu9KDa.js","assets/Schedule-DvvaqKX5.js","assets/Requirements-BaWaHQLa.js"])))=>i.map(i=>d[i]);
var uA=Object.defineProperty;var SA=(u,d,s)=>d in u?uA(u,d,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[d]=s;var Hl=(u,d,s)=>SA(u,typeof d!="symbol"?d+"":d,s);(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))P(N);new MutationObserver(N=>{for(const G of N)if(G.type==="childList")for(const L of G.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&P(L)}).observe(document,{childList:!0,subtree:!0});function s(N){const G={};return N.integrity&&(G.integrity=N.integrity),N.referrerPolicy&&(G.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?G.credentials="include":N.crossOrigin==="anonymous"?G.credentials="omit":G.credentials="same-origin",G}function P(N){if(N.ep)return;N.ep=!0;const G=s(N);fetch(N.href,G)}})();var yl={exports:{}},mt={},Fl={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vs;function AA(){if(Vs)return z;Vs=1;var u=Symbol.for("react.element"),d=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),L=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),F=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),V=Symbol.iterator;function j(C){return C===null||typeof C!="object"?null:(C=V&&C[V]||C["@@iterator"],typeof C=="function"?C:null)}var de={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ue=Object.assign,D={};function g(C,f,W){this.props=C,this.context=f,this.refs=D,this.updater=W||de}g.prototype.isReactComponent={},g.prototype.setState=function(C,f){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,f,"setState")},g.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function $(){}$.prototype=g.prototype;function Ne(C,f,W){this.props=C,this.context=f,this.refs=D,this.updater=W||de}var Fe=Ne.prototype=new $;Fe.constructor=Ne,ue(Fe,g.prototype),Fe.isPureReactComponent=!0;var re=Array.isArray,ve=Object.prototype.hasOwnProperty,ie={current:null},Be={key:!0,ref:!0,__self:!0,__source:!0};function qe(C,f,W){var K,X={},Z=null,le=null;if(f!=null)for(K in f.ref!==void 0&&(le=f.ref),f.key!==void 0&&(Z=""+f.key),f)ve.call(f,K)&&!Be.hasOwnProperty(K)&&(X[K]=f[K]);var ne=arguments.length-2;if(ne===1)X.children=W;else if(1<ne){for(var Se=Array(ne),Je=0;Je<ne;Je++)Se[Je]=arguments[Je+2];X.children=Se}if(C&&C.defaultProps)for(K in ne=C.defaultProps,ne)X[K]===void 0&&(X[K]=ne[K]);return{$$typeof:u,type:C,key:Z,ref:le,props:X,_owner:ie.current}}function Un(C,f){return{$$typeof:u,type:C.type,key:f,ref:C.ref,props:C.props,_owner:C._owner}}function mn(C){return typeof C=="object"&&C!==null&&C.$$typeof===u}function $n(C){var f={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(W){return f[W]})}var dn=/\/+/g;function je(C,f){return typeof C=="object"&&C!==null&&C.key!=null?$n(""+C.key):f.toString(36)}function rn(C,f,W,K,X){var Z=typeof C;(Z==="undefined"||Z==="boolean")&&(C=null);var le=!1;if(C===null)le=!0;else switch(Z){case"string":case"number":le=!0;break;case"object":switch(C.$$typeof){case u:case d:le=!0}}if(le)return le=C,X=X(le),C=K===""?"."+je(le,0):K,re(X)?(W="",C!=null&&(W=C.replace(dn,"$&/")+"/"),rn(X,f,W,"",function(Je){return Je})):X!=null&&(mn(X)&&(X=Un(X,W+(!X.key||le&&le.key===X.key?"":(""+X.key).replace(dn,"$&/")+"/")+C)),f.push(X)),1;if(le=0,K=K===""?".":K+":",re(C))for(var ne=0;ne<C.length;ne++){Z=C[ne];var Se=K+je(Z,ne);le+=rn(Z,f,W,Se,X)}else if(Se=j(C),typeof Se=="function")for(C=Se.call(C),ne=0;!(Z=C.next()).done;)Z=Z.value,Se=K+je(Z,ne++),le+=rn(Z,f,W,Se,X);else if(Z==="object")throw f=String(C),Error("Objects are not valid as a React child (found: "+(f==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":f)+"). If you meant to render a collection of children, use an array instead.");return le}function Cn(C,f,W){if(C==null)return C;var K=[],X=0;return rn(C,K,"","",function(Z){return f.call(W,Z,X++)}),K}function Ye(C){if(C._status===-1){var f=C._result;f=f(),f.then(function(W){(C._status===0||C._status===-1)&&(C._status=1,C._result=W)},function(W){(C._status===0||C._status===-1)&&(C._status=2,C._result=W)}),C._status===-1&&(C._status=0,C._result=f)}if(C._status===1)return C._result.default;throw C._result}var Ie={current:null},U={transition:null},Q={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:U,ReactCurrentOwner:ie};function H(){throw Error("act(...) is not supported in production builds of React.")}return z.Children={map:Cn,forEach:function(C,f,W){Cn(C,function(){f.apply(this,arguments)},W)},count:function(C){var f=0;return Cn(C,function(){f++}),f},toArray:function(C){return Cn(C,function(f){return f})||[]},only:function(C){if(!mn(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},z.Component=g,z.Fragment=s,z.Profiler=N,z.PureComponent=Ne,z.StrictMode=P,z.Suspense=Y,z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,z.act=H,z.cloneElement=function(C,f,W){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var K=ue({},C.props),X=C.key,Z=C.ref,le=C._owner;if(f!=null){if(f.ref!==void 0&&(Z=f.ref,le=ie.current),f.key!==void 0&&(X=""+f.key),C.type&&C.type.defaultProps)var ne=C.type.defaultProps;for(Se in f)ve.call(f,Se)&&!Be.hasOwnProperty(Se)&&(K[Se]=f[Se]===void 0&&ne!==void 0?ne[Se]:f[Se])}var Se=arguments.length-2;if(Se===1)K.children=W;else if(1<Se){ne=Array(Se);for(var Je=0;Je<Se;Je++)ne[Je]=arguments[Je+2];K.children=ne}return{$$typeof:u,type:C.type,key:X,ref:Z,props:K,_owner:le}},z.createContext=function(C){return C={$$typeof:L,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:G,_context:C},C.Consumer=C},z.createElement=qe,z.createFactory=function(C){var f=qe.bind(null,C);return f.type=C,f},z.createRef=function(){return{current:null}},z.forwardRef=function(C){return{$$typeof:T,render:C}},z.isValidElement=mn,z.lazy=function(C){return{$$typeof:J,_payload:{_status:-1,_result:C},_init:Ye}},z.memo=function(C,f){return{$$typeof:F,type:C,compare:f===void 0?null:f}},z.startTransition=function(C){var f=U.transition;U.transition={};try{C()}finally{U.transition=f}},z.unstable_act=H,z.useCallback=function(C,f){return Ie.current.useCallback(C,f)},z.useContext=function(C){return Ie.current.useContext(C)},z.useDebugValue=function(){},z.useDeferredValue=function(C){return Ie.current.useDeferredValue(C)},z.useEffect=function(C,f){return Ie.current.useEffect(C,f)},z.useId=function(){return Ie.current.useId()},z.useImperativeHandle=function(C,f,W){return Ie.current.useImperativeHandle(C,f,W)},z.useInsertionEffect=function(C,f){return Ie.current.useInsertionEffect(C,f)},z.useLayoutEffect=function(C,f){return Ie.current.useLayoutEffect(C,f)},z.useMemo=function(C,f){return Ie.current.useMemo(C,f)},z.useReducer=function(C,f,W){return Ie.current.useReducer(C,f,W)},z.useRef=function(C){return Ie.current.useRef(C)},z.useState=function(C){return Ie.current.useState(C)},z.useSyncExternalStore=function(C,f,W){return Ie.current.useSyncExternalStore(C,f,W)},z.useTransition=function(){return Ie.current.useTransition()},z.version="18.3.1",z}var Qs;function wl(){return Qs||(Qs=1,Fl.exports=AA()),Fl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s;function dA(){if(_s)return mt;_s=1;var u=wl(),d=Symbol.for("react.element"),s=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,N=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function L(T,Y,F){var J,V={},j=null,de=null;F!==void 0&&(j=""+F),Y.key!==void 0&&(j=""+Y.key),Y.ref!==void 0&&(de=Y.ref);for(J in Y)P.call(Y,J)&&!G.hasOwnProperty(J)&&(V[J]=Y[J]);if(T&&T.defaultProps)for(J in Y=T.defaultProps,Y)V[J]===void 0&&(V[J]=Y[J]);return{$$typeof:d,type:T,key:j,ref:de,props:V,_owner:N.current}}return mt.Fragment=s,mt.jsx=L,mt.jsxs=L,mt}var js;function CA(){return js||(js=1,yl.exports=dA()),yl.exports}var O=CA(),ee=wl(),Hr={},Bl={exports:{}},_e={},Yl={exports:{}},xl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Js;function EA(){return Js||(Js=1,(function(u){function d(U,Q){var H=U.length;U.push(Q);e:for(;0<H;){var C=H-1>>>1,f=U[C];if(0<N(f,Q))U[C]=Q,U[H]=f,H=C;else break e}}function s(U){return U.length===0?null:U[0]}function P(U){if(U.length===0)return null;var Q=U[0],H=U.pop();if(H!==Q){U[0]=H;e:for(var C=0,f=U.length,W=f>>>1;C<W;){var K=2*(C+1)-1,X=U[K],Z=K+1,le=U[Z];if(0>N(X,H))Z<f&&0>N(le,X)?(U[C]=le,U[Z]=H,C=Z):(U[C]=X,U[K]=H,C=K);else if(Z<f&&0>N(le,H))U[C]=le,U[Z]=H,C=Z;else break e}}return Q}function N(U,Q){var H=U.sortIndex-Q.sortIndex;return H!==0?H:U.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var G=performance;u.unstable_now=function(){return G.now()}}else{var L=Date,T=L.now();u.unstable_now=function(){return L.now()-T}}var Y=[],F=[],J=1,V=null,j=3,de=!1,ue=!1,D=!1,g=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,Ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Fe(U){for(var Q=s(F);Q!==null;){if(Q.callback===null)P(F);else if(Q.startTime<=U)P(F),Q.sortIndex=Q.expirationTime,d(Y,Q);else break;Q=s(F)}}function re(U){if(D=!1,Fe(U),!ue)if(s(Y)!==null)ue=!0,Ye(ve);else{var Q=s(F);Q!==null&&Ie(re,Q.startTime-U)}}function ve(U,Q){ue=!1,D&&(D=!1,$(qe),qe=-1),de=!0;var H=j;try{for(Fe(Q),V=s(Y);V!==null&&(!(V.expirationTime>Q)||U&&!$n());){var C=V.callback;if(typeof C=="function"){V.callback=null,j=V.priorityLevel;var f=C(V.expirationTime<=Q);Q=u.unstable_now(),typeof f=="function"?V.callback=f:V===s(Y)&&P(Y),Fe(Q)}else P(Y);V=s(Y)}if(V!==null)var W=!0;else{var K=s(F);K!==null&&Ie(re,K.startTime-Q),W=!1}return W}finally{V=null,j=H,de=!1}}var ie=!1,Be=null,qe=-1,Un=5,mn=-1;function $n(){return!(u.unstable_now()-mn<Un)}function dn(){if(Be!==null){var U=u.unstable_now();mn=U;var Q=!0;try{Q=Be(!0,U)}finally{Q?je():(ie=!1,Be=null)}}else ie=!1}var je;if(typeof Ne=="function")je=function(){Ne(dn)};else if(typeof MessageChannel<"u"){var rn=new MessageChannel,Cn=rn.port2;rn.port1.onmessage=dn,je=function(){Cn.postMessage(null)}}else je=function(){g(dn,0)};function Ye(U){Be=U,ie||(ie=!0,je())}function Ie(U,Q){qe=g(function(){U(u.unstable_now())},Q)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(U){U.callback=null},u.unstable_continueExecution=function(){ue||de||(ue=!0,Ye(ve))},u.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Un=0<U?Math.floor(1e3/U):5},u.unstable_getCurrentPriorityLevel=function(){return j},u.unstable_getFirstCallbackNode=function(){return s(Y)},u.unstable_next=function(U){switch(j){case 1:case 2:case 3:var Q=3;break;default:Q=j}var H=j;j=Q;try{return U()}finally{j=H}},u.unstable_pauseExecution=function(){},u.unstable_requestPaint=function(){},u.unstable_runWithPriority=function(U,Q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var H=j;j=U;try{return Q()}finally{j=H}},u.unstable_scheduleCallback=function(U,Q,H){var C=u.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?C+H:C):H=C,U){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break;default:f=5e3}return f=H+f,U={id:J++,callback:Q,priorityLevel:U,startTime:H,expirationTime:f,sortIndex:-1},H>C?(U.sortIndex=H,d(F,U),s(Y)===null&&U===s(F)&&(D?($(qe),qe=-1):D=!0,Ie(re,H-C))):(U.sortIndex=f,d(Y,U),ue||de||(ue=!0,Ye(ve))),U},u.unstable_shouldYield=$n,u.unstable_wrapCallback=function(U){var Q=j;return function(){var H=j;j=Q;try{return U.apply(this,arguments)}finally{j=H}}}})(xl)),xl}var Ws;function IA(){return Ws||(Ws=1,Yl.exports=EA()),Yl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs;function cA(){if(zs)return _e;zs=1;var u=wl(),d=IA();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P=new Set,N={};function G(e,n){L(e,n),L(e+"Capture",n)}function L(e,n){for(N[e]=n,e=0;e<n.length;e++)P.add(n[e])}var T=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Y=Object.prototype.hasOwnProperty,F=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,J={},V={};function j(e){return Y.call(V,e)?!0:Y.call(J,e)?!1:F.test(e)?V[e]=!0:(J[e]=!0,!1)}function de(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ue(e,n,t,r){if(n===null||typeof n>"u"||de(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function D(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new D(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];g[n]=new D(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new D(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new D(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new D(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new D(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new D(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new D(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new D(e,5,!1,e.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function Ne(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace($,Ne);g[n]=new D(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace($,Ne);g[n]=new D(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace($,Ne);g[n]=new D(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new D(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new D(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fe(e,n,t,r){var i=g.hasOwnProperty(n)?g[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ue(n,t,i,r)&&(t=null),r||i===null?j(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var re=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ve=Symbol.for("react.element"),ie=Symbol.for("react.portal"),Be=Symbol.for("react.fragment"),qe=Symbol.for("react.strict_mode"),Un=Symbol.for("react.profiler"),mn=Symbol.for("react.provider"),$n=Symbol.for("react.context"),dn=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),rn=Symbol.for("react.suspense_list"),Cn=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Ie=Symbol.for("react.offscreen"),U=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,C;function f(e){if(C===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);C=n&&n[1]||""}return`
`+C+e}var W=!1;function K(e,n){if(!e||W)return"";W=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var S=`
`+i[o].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=o&&0<=a);break}}}finally{W=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?f(e):""}function X(e){switch(e.tag){case 5:return f(e.type);case 16:return f("Lazy");case 13:return f("Suspense");case 19:return f("SuspenseList");case 0:case 2:case 15:return e=K(e.type,!1),e;case 11:return e=K(e.type.render,!1),e;case 1:return e=K(e.type,!0),e;default:return""}}function Z(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Be:return"Fragment";case ie:return"Portal";case Un:return"Profiler";case qe:return"StrictMode";case je:return"Suspense";case rn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $n:return(e.displayName||"Context")+".Consumer";case mn:return(e._context.displayName||"Context")+".Provider";case dn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cn:return n=e.displayName||null,n!==null?n:Z(e.type)||"Memo";case Ye:n=e._payload,e=e._init;try{return Z(e(n))}catch{}}return null}function le(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(n);case 8:return n===qe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ne(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e){var n=Se(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pt(e){e._valueTracker||(e._valueTracker=Je(e))}function Wl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Se(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Pt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kr(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function zl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ne(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Kl(e,n){n=n.checked,n!=null&&Fe(e,"checked",n,!1)}function Vr(e,n){Kl(e,n);var t=ne(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Qr(e,n.type,t):n.hasOwnProperty("defaultValue")&&Qr(e,n.type,ne(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $l(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Qr(e,n,t){(n!=="number"||Pt(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var y0=Array.isArray;function u0(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ne(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function _r(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ql(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(s(92));if(y0(t)){if(1<t.length)throw Error(s(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ne(t)}}function Xl(e,n){var t=ne(n.value),r=ne(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Zl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function bl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?bl(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mt,eo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Mt=Mt||document.createElement("div"),Mt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Mt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function F0(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var B0={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cu=["Webkit","ms","Moz","O"];Object.keys(B0).forEach(function(e){Cu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),B0[n]=B0[e]})});function no(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||B0.hasOwnProperty(e)&&B0[e]?(""+n).trim():n+"px"}function to(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=no(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Eu=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jr(e,n){if(n){if(Eu[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function Wr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zr=null;function Kr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $r=null,S0=null,A0=null;function ro(e){if(e=it(e)){if(typeof $r!="function")throw Error(s(280));var n=e.stateNode;n&&(n=Kt(n),$r(e.stateNode,e.type,n))}}function io(e){S0?A0?A0.push(e):A0=[e]:S0=e}function lo(){if(S0){var e=S0,n=A0;if(A0=S0=null,ro(e),n)for(e=0;e<n.length;e++)ro(n[e])}}function oo(e,n){return e(n)}function ao(){}var qr=!1;function so(e,n,t){if(qr)return e(n,t);qr=!0;try{return oo(e,n,t)}finally{qr=!1,(S0!==null||A0!==null)&&(ao(),lo())}}function Y0(e,n){var t=e.stateNode;if(t===null)return null;var r=Kt(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var Xr=!1;if(T)try{var x0={};Object.defineProperty(x0,"passive",{get:function(){Xr=!0}}),window.addEventListener("test",x0,x0),window.removeEventListener("test",x0,x0)}catch{Xr=!1}function Iu(e,n,t,r,i,l,o,a,S){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(R){this.onError(R)}}var w0=!1,Gt=null,Lt=!1,Zr=null,cu={onError:function(e){w0=!0,Gt=e}};function Nu(e,n,t,r,i,l,o,a,S){w0=!1,Gt=null,Iu.apply(cu,arguments)}function Ou(e,n,t,r,i,l,o,a,S){if(Nu.apply(this,arguments),w0){if(w0){var c=Gt;w0=!1,Gt=null}else throw Error(s(198));Lt||(Lt=!0,Zr=c)}}function qn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function uo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function So(e){if(qn(e)!==e)throw Error(s(188))}function mu(e){var n=e.alternate;if(!n){if(n=qn(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return So(i),e;if(l===r)return So(i),n;l=l.sibling}throw Error(s(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o)throw Error(s(189))}}if(t.alternate!==r)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function Ao(e){return e=mu(e),e!==null?Co(e):null}function Co(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Co(e);if(n!==null)return n;e=e.sibling}return null}var Eo=d.unstable_scheduleCallback,Io=d.unstable_cancelCallback,fu=d.unstable_shouldYield,Ru=d.unstable_requestPaint,Oe=d.unstable_now,Tu=d.unstable_getCurrentPriorityLevel,br=d.unstable_ImmediatePriority,co=d.unstable_UserBlockingPriority,Ut=d.unstable_NormalPriority,pu=d.unstable_LowPriority,No=d.unstable_IdlePriority,Dt=null,En=null;function Pu(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(Dt,e,void 0,(e.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:Lu,Mu=Math.log,Gu=Math.LN2;function Lu(e){return e>>>=0,e===0?32:31-(Mu(e)/Gu|0)|0}var ht=64,gt=4194304;function k0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vt(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=k0(a):(l&=o,l!==0&&(r=k0(l)))}else o=t&~i,o!==0?r=k0(o):l!==0&&(r=k0(l));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-ln(n),i=1<<t,r|=e[t],n&=~i;return r}function Uu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Du(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-ln(l),a=1<<o,S=i[o];S===-1?((a&t)===0||(a&r)!==0)&&(i[o]=Uu(a,n)):S<=n&&(e.expiredLanes|=a),l&=~a}}function ei(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oo(){var e=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),e}function ni(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function V0(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-ln(n),e[n]=t}function hu(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-ln(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function ti(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-ln(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var te=0;function mo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var fo,ri,Ro,To,po,ii=!1,Ht=[],Dn=null,hn=null,gn=null,Q0=new Map,_0=new Map,vn=[],gu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Po(e,n){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":Q0.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_0.delete(n.pointerId)}}function j0(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=it(n),n!==null&&ri(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function vu(e,n,t,r,i){switch(n){case"focusin":return Dn=j0(Dn,e,n,t,r,i),!0;case"dragenter":return hn=j0(hn,e,n,t,r,i),!0;case"mouseover":return gn=j0(gn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Q0.set(l,j0(Q0.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,_0.set(l,j0(_0.get(l)||null,e,n,t,r,i)),!0}return!1}function Mo(e){var n=Xn(e.target);if(n!==null){var t=qn(n);if(t!==null){if(n=t.tag,n===13){if(n=uo(t),n!==null){e.blockedOn=n,po(e.priority,function(){Ro(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yt(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=oi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);zr=r,t.target.dispatchEvent(r),zr=null}else return n=it(t),n!==null&&ri(n),e.blockedOn=t,!1;n.shift()}return!0}function Go(e,n,t){yt(e)&&t.delete(n)}function Hu(){ii=!1,Dn!==null&&yt(Dn)&&(Dn=null),hn!==null&&yt(hn)&&(hn=null),gn!==null&&yt(gn)&&(gn=null),Q0.forEach(Go),_0.forEach(Go)}function J0(e,n){e.blockedOn===n&&(e.blockedOn=null,ii||(ii=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Hu)))}function W0(e){function n(i){return J0(i,e)}if(0<Ht.length){J0(Ht[0],e);for(var t=1;t<Ht.length;t++){var r=Ht[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Dn!==null&&J0(Dn,e),hn!==null&&J0(hn,e),gn!==null&&J0(gn,e),Q0.forEach(n),_0.forEach(n),t=0;t<vn.length;t++)r=vn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(t=vn[0],t.blockedOn===null);)Mo(t),t.blockedOn===null&&vn.shift()}var d0=re.ReactCurrentBatchConfig,Ft=!0;function yu(e,n,t,r){var i=te,l=d0.transition;d0.transition=null;try{te=1,li(e,n,t,r)}finally{te=i,d0.transition=l}}function Fu(e,n,t,r){var i=te,l=d0.transition;d0.transition=null;try{te=4,li(e,n,t,r)}finally{te=i,d0.transition=l}}function li(e,n,t,r){if(Ft){var i=oi(e,n,t,r);if(i===null)pi(e,n,r,Bt,t),Po(e,r);else if(vu(i,e,n,t,r))r.stopPropagation();else if(Po(e,r),n&4&&-1<gu.indexOf(e)){for(;i!==null;){var l=it(i);if(l!==null&&fo(l),l=oi(e,n,t,r),l===null&&pi(e,n,r,Bt,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else pi(e,n,r,null,t)}}var Bt=null;function oi(e,n,t,r){if(Bt=null,e=Kr(r),e=Xn(e),e!==null)if(n=qn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=uo(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Bt=e,null}function Lo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tu()){case br:return 1;case co:return 4;case Ut:case pu:return 16;case No:return 536870912;default:return 16}default:return 16}}var Hn=null,ai=null,Yt=null;function Uo(){if(Yt)return Yt;var e,n=ai,t=n.length,r,i="value"in Hn?Hn.value:Hn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Yt=i.slice(e,1<r?1-r:void 0)}function xt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wt(){return!0}function Do(){return!1}function We(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?wt:Do,this.isPropagationStopped=Do,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wt)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wt)},persist:function(){},isPersistent:wt}),n}var C0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},si=We(C0),z0=H({},C0,{view:0,detail:0}),Bu=We(z0),ui,Si,K0,kt=H({},z0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:di,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==K0&&(K0&&e.type==="mousemove"?(ui=e.screenX-K0.screenX,Si=e.screenY-K0.screenY):Si=ui=0,K0=e),ui)},movementY:function(e){return"movementY"in e?e.movementY:Si}}),ho=We(kt),Yu=H({},kt,{dataTransfer:0}),xu=We(Yu),wu=H({},z0,{relatedTarget:0}),Ai=We(wu),ku=H({},C0,{animationName:0,elapsedTime:0,pseudoElement:0}),Vu=We(ku),Qu=H({},C0,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_u=We(Qu),ju=H({},C0,{data:0}),go=We(ju),Ju={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ku(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zu[e])?!!n[e]:!1}function di(){return Ku}var $u=H({},z0,{key:function(e){if(e.key){var n=Ju[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:di,charCode:function(e){return e.type==="keypress"?xt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qu=We($u),Xu=H({},kt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vo=We(Xu),Zu=H({},z0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:di}),bu=We(Zu),eS=H({},C0,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=We(eS),tS=H({},kt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=We(tS),iS=[9,13,27,32],Ci=T&&"CompositionEvent"in window,$0=null;T&&"documentMode"in document&&($0=document.documentMode);var lS=T&&"TextEvent"in window&&!$0,Ho=T&&(!Ci||$0&&8<$0&&11>=$0),yo=" ",Fo=!1;function Bo(e,n){switch(e){case"keyup":return iS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var E0=!1;function oS(e,n){switch(e){case"compositionend":return Yo(n);case"keypress":return n.which!==32?null:(Fo=!0,yo);case"textInput":return e=n.data,e===yo&&Fo?null:e;default:return null}}function aS(e,n){if(E0)return e==="compositionend"||!Ci&&Bo(e,n)?(e=Uo(),Yt=ai=Hn=null,E0=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ho&&n.locale!=="ko"?null:n.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sS[e.type]:n==="textarea"}function wo(e,n,t,r){io(r),n=Jt(n,"onChange"),0<n.length&&(t=new si("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var q0=null,X0=null;function uS(e){ra(e,0)}function Vt(e){var n=m0(e);if(Wl(n))return e}function SS(e,n){if(e==="change")return n}var ko=!1;if(T){var Ei;if(T){var Ii="oninput"in document;if(!Ii){var Vo=document.createElement("div");Vo.setAttribute("oninput","return;"),Ii=typeof Vo.oninput=="function"}Ei=Ii}else Ei=!1;ko=Ei&&(!document.documentMode||9<document.documentMode)}function Qo(){q0&&(q0.detachEvent("onpropertychange",_o),X0=q0=null)}function _o(e){if(e.propertyName==="value"&&Vt(X0)){var n=[];wo(n,X0,e,Kr(e)),so(uS,n)}}function AS(e,n,t){e==="focusin"?(Qo(),q0=n,X0=t,q0.attachEvent("onpropertychange",_o)):e==="focusout"&&Qo()}function dS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vt(X0)}function CS(e,n){if(e==="click")return Vt(n)}function ES(e,n){if(e==="input"||e==="change")return Vt(n)}function IS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var on=typeof Object.is=="function"?Object.is:IS;function Z0(e,n){if(on(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Y.call(n,i)||!on(e[i],n[i]))return!1}return!0}function jo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jo(e,n){var t=jo(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=jo(t)}}function Wo(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wo(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function zo(){for(var e=window,n=Pt();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Pt(e.document)}return n}function ci(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function cS(e){var n=zo(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wo(t.ownerDocument.documentElement,t)){if(r!==null&&ci(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Jo(t,l);var o=Jo(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var NS=T&&"documentMode"in document&&11>=document.documentMode,I0=null,Ni=null,b0=null,Oi=!1;function Ko(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Oi||I0==null||I0!==Pt(r)||(r=I0,"selectionStart"in r&&ci(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),b0&&Z0(b0,r)||(b0=r,r=Jt(Ni,"onSelect"),0<r.length&&(n=new si("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=I0)))}function Qt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var c0={animationend:Qt("Animation","AnimationEnd"),animationiteration:Qt("Animation","AnimationIteration"),animationstart:Qt("Animation","AnimationStart"),transitionend:Qt("Transition","TransitionEnd")},mi={},$o={};T&&($o=document.createElement("div").style,"AnimationEvent"in window||(delete c0.animationend.animation,delete c0.animationiteration.animation,delete c0.animationstart.animation),"TransitionEvent"in window||delete c0.transitionend.transition);function _t(e){if(mi[e])return mi[e];if(!c0[e])return e;var n=c0[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in $o)return mi[e]=n[t];return e}var qo=_t("animationend"),Xo=_t("animationiteration"),Zo=_t("animationstart"),bo=_t("transitionend"),ea=new Map,na="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,n){ea.set(e,n),G(n,[e])}for(var fi=0;fi<na.length;fi++){var Ri=na[fi],OS=Ri.toLowerCase(),mS=Ri[0].toUpperCase()+Ri.slice(1);yn(OS,"on"+mS)}yn(qo,"onAnimationEnd"),yn(Xo,"onAnimationIteration"),yn(Zo,"onAnimationStart"),yn("dblclick","onDoubleClick"),yn("focusin","onFocus"),yn("focusout","onBlur"),yn(bo,"onTransitionEnd"),L("onMouseEnter",["mouseout","mouseover"]),L("onMouseLeave",["mouseout","mouseover"]),L("onPointerEnter",["pointerout","pointerover"]),L("onPointerLeave",["pointerout","pointerover"]),G("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),G("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),G("onBeforeInput",["compositionend","keypress","textInput","paste"]),G("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),G("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),G("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var et="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("cancel close invalid load scroll toggle".split(" ").concat(et));function ta(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Ou(r,n,void 0,e),e.currentTarget=null}function ra(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],S=a.instance,c=a.currentTarget;if(a=a.listener,S!==l&&i.isPropagationStopped())break e;ta(i,a,c),l=S}else for(o=0;o<r.length;o++){if(a=r[o],S=a.instance,c=a.currentTarget,a=a.listener,S!==l&&i.isPropagationStopped())break e;ta(i,a,c),l=S}}}if(Lt)throw e=Zr,Lt=!1,Zr=null,e}function ae(e,n){var t=n[Di];t===void 0&&(t=n[Di]=new Set);var r=e+"__bubble";t.has(r)||(ia(n,e,2,!1),t.add(r))}function Ti(e,n,t){var r=0;n&&(r|=4),ia(t,e,r,n)}var jt="_reactListening"+Math.random().toString(36).slice(2);function nt(e){if(!e[jt]){e[jt]=!0,P.forEach(function(t){t!=="selectionchange"&&(fS.has(t)||Ti(t,!1,e),Ti(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jt]||(n[jt]=!0,Ti("selectionchange",!1,n))}}function ia(e,n,t,r){switch(Lo(n)){case 1:var i=yu;break;case 4:i=Fu;break;default:i=li}t=i.bind(null,n,t,e),i=void 0,!Xr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function pi(e,n,t,r,i){var l=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var S=o.tag;if((S===3||S===4)&&(S=o.stateNode.containerInfo,S===i||S.nodeType===8&&S.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xn(a),o===null)return;if(S=o.tag,S===5||S===6){r=l=o;continue e}a=a.parentNode}}r=r.return}so(function(){var c=l,R=Kr(t),p=[];e:{var m=ea.get(e);if(m!==void 0){var h=si,y=e;switch(e){case"keypress":if(xt(t)===0)break e;case"keydown":case"keyup":h=qu;break;case"focusin":y="focus",h=Ai;break;case"focusout":y="blur",h=Ai;break;case"beforeblur":case"afterblur":h=Ai;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=ho;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=xu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=bu;break;case qo:case Xo:case Zo:h=Vu;break;case bo:h=nS;break;case"scroll":h=Bu;break;case"wheel":h=rS;break;case"copy":case"cut":case"paste":h=_u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=vo}var B=(n&4)!==0,me=!B&&e==="scroll",E=B?m!==null?m+"Capture":null:m;B=[];for(var A=c,I;A!==null;){I=A;var M=I.stateNode;if(I.tag===5&&M!==null&&(I=M,E!==null&&(M=Y0(A,E),M!=null&&B.push(tt(A,M,I)))),me)break;A=A.return}0<B.length&&(m=new h(m,y,null,t,R),p.push({event:m,listeners:B}))}}if((n&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",m&&t!==zr&&(y=t.relatedTarget||t.fromElement)&&(Xn(y)||y[fn]))break e;if((h||m)&&(m=R.window===R?R:(m=R.ownerDocument)?m.defaultView||m.parentWindow:window,h?(y=t.relatedTarget||t.toElement,h=c,y=y?Xn(y):null,y!==null&&(me=qn(y),y!==me||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=c),h!==y)){if(B=ho,M="onMouseLeave",E="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(B=vo,M="onPointerLeave",E="onPointerEnter",A="pointer"),me=h==null?m:m0(h),I=y==null?m:m0(y),m=new B(M,A+"leave",h,t,R),m.target=me,m.relatedTarget=I,M=null,Xn(R)===c&&(B=new B(E,A+"enter",y,t,R),B.target=I,B.relatedTarget=me,M=B),me=M,h&&y)n:{for(B=h,E=y,A=0,I=B;I;I=N0(I))A++;for(I=0,M=E;M;M=N0(M))I++;for(;0<A-I;)B=N0(B),A--;for(;0<I-A;)E=N0(E),I--;for(;A--;){if(B===E||E!==null&&B===E.alternate)break n;B=N0(B),E=N0(E)}B=null}else B=null;h!==null&&la(p,m,h,B,!1),y!==null&&me!==null&&la(p,me,y,B,!0)}}e:{if(m=c?m0(c):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var x=SS;else if(xo(m))if(ko)x=ES;else{x=dS;var w=AS}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=CS);if(x&&(x=x(e,c))){wo(p,x,t,R);break e}w&&w(e,m,c),e==="focusout"&&(w=m._wrapperState)&&w.controlled&&m.type==="number"&&Qr(m,"number",m.value)}switch(w=c?m0(c):window,e){case"focusin":(xo(w)||w.contentEditable==="true")&&(I0=w,Ni=c,b0=null);break;case"focusout":b0=Ni=I0=null;break;case"mousedown":Oi=!0;break;case"contextmenu":case"mouseup":case"dragend":Oi=!1,Ko(p,t,R);break;case"selectionchange":if(NS)break;case"keydown":case"keyup":Ko(p,t,R)}var k;if(Ci)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else E0?Bo(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Ho&&t.locale!=="ko"&&(E0||_!=="onCompositionStart"?_==="onCompositionEnd"&&E0&&(k=Uo()):(Hn=R,ai="value"in Hn?Hn.value:Hn.textContent,E0=!0)),w=Jt(c,_),0<w.length&&(_=new go(_,e,null,t,R),p.push({event:_,listeners:w}),k?_.data=k:(k=Yo(t),k!==null&&(_.data=k)))),(k=lS?oS(e,t):aS(e,t))&&(c=Jt(c,"onBeforeInput"),0<c.length&&(R=new go("onBeforeInput","beforeinput",null,t,R),p.push({event:R,listeners:c}),R.data=k))}ra(p,n)})}function tt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Jt(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Y0(e,t),l!=null&&r.unshift(tt(e,l,i)),l=Y0(e,n),l!=null&&r.push(tt(e,l,i))),e=e.return}return r}function N0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function la(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var a=t,S=a.alternate,c=a.stateNode;if(S!==null&&S===r)break;a.tag===5&&c!==null&&(a=c,i?(S=Y0(t,l),S!=null&&o.unshift(tt(t,S,a))):i||(S=Y0(t,l),S!=null&&o.push(tt(t,S,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var RS=/\r\n?/g,TS=/\u0000|\uFFFD/g;function oa(e){return(typeof e=="string"?e:""+e).replace(RS,`
`).replace(TS,"")}function Wt(e,n,t){if(n=oa(n),oa(e)!==n&&t)throw Error(s(425))}function zt(){}var Pi=null,Mi=null;function Gi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Li=typeof setTimeout=="function"?setTimeout:void 0,pS=typeof clearTimeout=="function"?clearTimeout:void 0,aa=typeof Promise=="function"?Promise:void 0,PS=typeof queueMicrotask=="function"?queueMicrotask:typeof aa<"u"?function(e){return aa.resolve(null).then(e).catch(MS)}:Li;function MS(e){setTimeout(function(){throw e})}function Ui(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),W0(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);W0(n)}function Fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function sa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var O0=Math.random().toString(36).slice(2),In="__reactFiber$"+O0,rt="__reactProps$"+O0,fn="__reactContainer$"+O0,Di="__reactEvents$"+O0,GS="__reactListeners$"+O0,LS="__reactHandles$"+O0;function Xn(e){var n=e[In];if(n)return n;for(var t=e.parentNode;t;){if(n=t[fn]||t[In]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=sa(e);e!==null;){if(t=e[In])return t;e=sa(e)}return n}e=t,t=e.parentNode}return null}function it(e){return e=e[In]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function m0(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Kt(e){return e[rt]||null}var hi=[],f0=-1;function Bn(e){return{current:e}}function se(e){0>f0||(e.current=hi[f0],hi[f0]=null,f0--)}function oe(e,n){f0++,hi[f0]=e.current,e.current=n}var Yn={},Ue=Bn(Yn),xe=Bn(!1),Zn=Yn;function R0(e,n){var t=e.type.contextTypes;if(!t)return Yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function $t(){se(xe),se(Ue)}function ua(e,n,t){if(Ue.current!==Yn)throw Error(s(168));oe(Ue,n),oe(xe,t)}function Sa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(s(108,le(e)||"Unknown",i));return H({},t,r)}function qt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,Zn=Ue.current,oe(Ue,e),oe(xe,xe.current),!0}function Aa(e,n,t){var r=e.stateNode;if(!r)throw Error(s(169));t?(e=Sa(e,n,Zn),r.__reactInternalMemoizedMergedChildContext=e,se(xe),se(Ue),oe(Ue,e)):se(xe),oe(xe,t)}var Rn=null,Xt=!1,gi=!1;function da(e){Rn===null?Rn=[e]:Rn.push(e)}function US(e){Xt=!0,da(e)}function xn(){if(!gi&&Rn!==null){gi=!0;var e=0,n=te;try{var t=Rn;for(te=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Rn=null,Xt=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(e+1)),Eo(br,xn),i}finally{te=n,gi=!1}}return null}var T0=[],p0=0,Zt=null,bt=0,Xe=[],Ze=0,bn=null,Tn=1,pn="";function e0(e,n){T0[p0++]=bt,T0[p0++]=Zt,Zt=e,bt=n}function Ca(e,n,t){Xe[Ze++]=Tn,Xe[Ze++]=pn,Xe[Ze++]=bn,bn=e;var r=Tn;e=pn;var i=32-ln(r)-1;r&=~(1<<i),t+=1;var l=32-ln(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-ln(n)+i|t<<i|r,pn=l+e}else Tn=1<<l|t<<i|r,pn=e}function vi(e){e.return!==null&&(e0(e,1),Ca(e,1,0))}function Hi(e){for(;e===Zt;)Zt=T0[--p0],T0[p0]=null,bt=T0[--p0],T0[p0]=null;for(;e===bn;)bn=Xe[--Ze],Xe[Ze]=null,pn=Xe[--Ze],Xe[Ze]=null,Tn=Xe[--Ze],Xe[Ze]=null}var ze=null,Ke=null,Ae=!1,an=null;function Ea(e,n){var t=tn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ia(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ze=e,Ke=Fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ze=e,Ke=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=bn!==null?{id:Tn,overflow:pn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=tn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ze=e,Ke=null,!0):!1;default:return!1}}function yi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fi(e){if(Ae){var n=Ke;if(n){var t=n;if(!Ia(e,n)){if(yi(e))throw Error(s(418));n=Fn(t.nextSibling);var r=ze;n&&Ia(e,n)?Ea(r,t):(e.flags=e.flags&-4097|2,Ae=!1,ze=e)}}else{if(yi(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ae=!1,ze=e}}}function ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function er(e){if(e!==ze)return!1;if(!Ae)return ca(e),Ae=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Gi(e.type,e.memoizedProps)),n&&(n=Ke)){if(yi(e))throw Na(),Error(s(418));for(;n;)Ea(e,n),n=Fn(n.nextSibling)}if(ca(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ke=Fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ke=null}}else Ke=ze?Fn(e.stateNode.nextSibling):null;return!0}function Na(){for(var e=Ke;e;)e=Fn(e.nextSibling)}function P0(){Ke=ze=null,Ae=!1}function Bi(e){an===null?an=[e]:an.push(e)}var DS=re.ReactCurrentBatchConfig;function lt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(s(309));var r=t.stateNode}if(!r)throw Error(s(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(s(284));if(!t._owner)throw Error(s(290,e))}return e}function nr(e,n){throw e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Oa(e){var n=e._init;return n(e._payload)}function ma(e){function n(E,A){if(e){var I=E.deletions;I===null?(E.deletions=[A],E.flags|=16):I.push(A)}}function t(E,A){if(!e)return null;for(;A!==null;)n(E,A),A=A.sibling;return null}function r(E,A){for(E=new Map;A!==null;)A.key!==null?E.set(A.key,A):E.set(A.index,A),A=A.sibling;return E}function i(E,A){return E=Wn(E,A),E.index=0,E.sibling=null,E}function l(E,A,I){return E.index=I,e?(I=E.alternate,I!==null?(I=I.index,I<A?(E.flags|=2,A):I):(E.flags|=2,A)):(E.flags|=1048576,A)}function o(E){return e&&E.alternate===null&&(E.flags|=2),E}function a(E,A,I,M){return A===null||A.tag!==6?(A=Ll(I,E.mode,M),A.return=E,A):(A=i(A,I),A.return=E,A)}function S(E,A,I,M){var x=I.type;return x===Be?R(E,A,I.props.children,M,I.key):A!==null&&(A.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ye&&Oa(x)===A.type)?(M=i(A,I.props),M.ref=lt(E,A,I),M.return=E,M):(M=Mr(I.type,I.key,I.props,null,E.mode,M),M.ref=lt(E,A,I),M.return=E,M)}function c(E,A,I,M){return A===null||A.tag!==4||A.stateNode.containerInfo!==I.containerInfo||A.stateNode.implementation!==I.implementation?(A=Ul(I,E.mode,M),A.return=E,A):(A=i(A,I.children||[]),A.return=E,A)}function R(E,A,I,M,x){return A===null||A.tag!==7?(A=s0(I,E.mode,M,x),A.return=E,A):(A=i(A,I),A.return=E,A)}function p(E,A,I){if(typeof A=="string"&&A!==""||typeof A=="number")return A=Ll(""+A,E.mode,I),A.return=E,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ve:return I=Mr(A.type,A.key,A.props,null,E.mode,I),I.ref=lt(E,null,A),I.return=E,I;case ie:return A=Ul(A,E.mode,I),A.return=E,A;case Ye:var M=A._init;return p(E,M(A._payload),I)}if(y0(A)||Q(A))return A=s0(A,E.mode,I,null),A.return=E,A;nr(E,A)}return null}function m(E,A,I,M){var x=A!==null?A.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return x!==null?null:a(E,A,""+I,M);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ve:return I.key===x?S(E,A,I,M):null;case ie:return I.key===x?c(E,A,I,M):null;case Ye:return x=I._init,m(E,A,x(I._payload),M)}if(y0(I)||Q(I))return x!==null?null:R(E,A,I,M,null);nr(E,I)}return null}function h(E,A,I,M,x){if(typeof M=="string"&&M!==""||typeof M=="number")return E=E.get(I)||null,a(A,E,""+M,x);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ve:return E=E.get(M.key===null?I:M.key)||null,S(A,E,M,x);case ie:return E=E.get(M.key===null?I:M.key)||null,c(A,E,M,x);case Ye:var w=M._init;return h(E,A,I,w(M._payload),x)}if(y0(M)||Q(M))return E=E.get(I)||null,R(A,E,M,x,null);nr(A,M)}return null}function y(E,A,I,M){for(var x=null,w=null,k=A,_=A=0,Me=null;k!==null&&_<I.length;_++){k.index>_?(Me=k,k=null):Me=k.sibling;var b=m(E,k,I[_],M);if(b===null){k===null&&(k=Me);break}e&&k&&b.alternate===null&&n(E,k),A=l(b,A,_),w===null?x=b:w.sibling=b,w=b,k=Me}if(_===I.length)return t(E,k),Ae&&e0(E,_),x;if(k===null){for(;_<I.length;_++)k=p(E,I[_],M),k!==null&&(A=l(k,A,_),w===null?x=k:w.sibling=k,w=k);return Ae&&e0(E,_),x}for(k=r(E,k);_<I.length;_++)Me=h(k,E,_,I[_],M),Me!==null&&(e&&Me.alternate!==null&&k.delete(Me.key===null?_:Me.key),A=l(Me,A,_),w===null?x=Me:w.sibling=Me,w=Me);return e&&k.forEach(function(zn){return n(E,zn)}),Ae&&e0(E,_),x}function B(E,A,I,M){var x=Q(I);if(typeof x!="function")throw Error(s(150));if(I=x.call(I),I==null)throw Error(s(151));for(var w=x=null,k=A,_=A=0,Me=null,b=I.next();k!==null&&!b.done;_++,b=I.next()){k.index>_?(Me=k,k=null):Me=k.sibling;var zn=m(E,k,b.value,M);if(zn===null){k===null&&(k=Me);break}e&&k&&zn.alternate===null&&n(E,k),A=l(zn,A,_),w===null?x=zn:w.sibling=zn,w=zn,k=Me}if(b.done)return t(E,k),Ae&&e0(E,_),x;if(k===null){for(;!b.done;_++,b=I.next())b=p(E,b.value,M),b!==null&&(A=l(b,A,_),w===null?x=b:w.sibling=b,w=b);return Ae&&e0(E,_),x}for(k=r(E,k);!b.done;_++,b=I.next())b=h(k,E,_,b.value,M),b!==null&&(e&&b.alternate!==null&&k.delete(b.key===null?_:b.key),A=l(b,A,_),w===null?x=b:w.sibling=b,w=b);return e&&k.forEach(function(sA){return n(E,sA)}),Ae&&e0(E,_),x}function me(E,A,I,M){if(typeof I=="object"&&I!==null&&I.type===Be&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ve:e:{for(var x=I.key,w=A;w!==null;){if(w.key===x){if(x=I.type,x===Be){if(w.tag===7){t(E,w.sibling),A=i(w,I.props.children),A.return=E,E=A;break e}}else if(w.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ye&&Oa(x)===w.type){t(E,w.sibling),A=i(w,I.props),A.ref=lt(E,w,I),A.return=E,E=A;break e}t(E,w);break}else n(E,w);w=w.sibling}I.type===Be?(A=s0(I.props.children,E.mode,M,I.key),A.return=E,E=A):(M=Mr(I.type,I.key,I.props,null,E.mode,M),M.ref=lt(E,A,I),M.return=E,E=M)}return o(E);case ie:e:{for(w=I.key;A!==null;){if(A.key===w)if(A.tag===4&&A.stateNode.containerInfo===I.containerInfo&&A.stateNode.implementation===I.implementation){t(E,A.sibling),A=i(A,I.children||[]),A.return=E,E=A;break e}else{t(E,A);break}else n(E,A);A=A.sibling}A=Ul(I,E.mode,M),A.return=E,E=A}return o(E);case Ye:return w=I._init,me(E,A,w(I._payload),M)}if(y0(I))return y(E,A,I,M);if(Q(I))return B(E,A,I,M);nr(E,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,A!==null&&A.tag===6?(t(E,A.sibling),A=i(A,I),A.return=E,E=A):(t(E,A),A=Ll(I,E.mode,M),A.return=E,E=A),o(E)):t(E,A)}return me}var M0=ma(!0),fa=ma(!1),tr=Bn(null),rr=null,G0=null,Yi=null;function xi(){Yi=G0=rr=null}function wi(e){var n=tr.current;se(tr),e._currentValue=n}function ki(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function L0(e,n){rr=e,Yi=G0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(ke=!0),e.firstContext=null)}function be(e){var n=e._currentValue;if(Yi!==e)if(e={context:e,memoizedValue:n,next:null},G0===null){if(rr===null)throw Error(s(308));G0=e,rr.dependencies={lanes:0,firstContext:e}}else G0=G0.next=e;return n}var n0=null;function Vi(e){n0===null?n0=[e]:n0.push(e)}function Ra(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Vi(n)):(t.next=i.next,i.next=t),n.interleaved=t,Pn(e,r)}function Pn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var wn=!1;function Qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ta(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(q&2)!==0){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Pn(e,t)}return i=r.interleaved,i===null?(n.next=n,Vi(r)):(n.next=i.next,i.next=n),r.interleaved=n,Pn(e,t)}function ir(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ti(e,t)}}function pa(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function lr(e,n,t,r){var i=e.updateQueue;wn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var S=a,c=S.next;S.next=null,o===null?l=c:o.next=c,o=S;var R=e.alternate;R!==null&&(R=R.updateQueue,a=R.lastBaseUpdate,a!==o&&(a===null?R.firstBaseUpdate=c:a.next=c,R.lastBaseUpdate=S))}if(l!==null){var p=i.baseState;o=0,R=c=S=null,a=l;do{var m=a.lane,h=a.eventTime;if((r&m)===m){R!==null&&(R=R.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,B=a;switch(m=n,h=t,B.tag){case 1:if(y=B.payload,typeof y=="function"){p=y.call(h,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=B.payload,m=typeof y=="function"?y.call(h,p,m):y,m==null)break e;p=H({},p,m);break e;case 2:wn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else h={eventTime:h,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},R===null?(c=R=h,S=p):R=R.next=h,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(R===null&&(S=p),i.baseState=S,i.firstBaseUpdate=c,i.lastBaseUpdate=R,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);i0|=o,e.lanes=o,e.memoizedState=p}}function Pa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(s(191,i));i.call(r)}}}var ot={},cn=Bn(ot),at=Bn(ot),st=Bn(ot);function t0(e){if(e===ot)throw Error(s(174));return e}function _i(e,n){switch(oe(st,n),oe(at,e),oe(cn,ot),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:jr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=jr(n,e)}se(cn),oe(cn,n)}function U0(){se(cn),se(at),se(st)}function Ma(e){t0(st.current);var n=t0(cn.current),t=jr(n,e.type);n!==t&&(oe(at,e),oe(cn,t))}function ji(e){at.current===e&&(se(cn),se(at))}var Ce=Bn(0);function or(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=[];function Wi(){for(var e=0;e<Ji.length;e++)Ji[e]._workInProgressVersionPrimary=null;Ji.length=0}var ar=re.ReactCurrentDispatcher,zi=re.ReactCurrentBatchConfig,r0=0,Ee=null,Re=null,pe=null,sr=!1,ut=!1,St=0,hS=0;function De(){throw Error(s(321))}function Ki(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!on(e[t],n[t]))return!1;return!0}function $i(e,n,t,r,i,l){if(r0=l,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ar.current=e===null||e.memoizedState===null?yS:FS,e=t(r,i),ut){l=0;do{if(ut=!1,St=0,25<=l)throw Error(s(301));l+=1,pe=Re=null,n.updateQueue=null,ar.current=BS,e=t(r,i)}while(ut)}if(ar.current=Ar,n=Re!==null&&Re.next!==null,r0=0,pe=Re=Ee=null,sr=!1,n)throw Error(s(300));return e}function qi(){var e=St!==0;return St=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?Ee.memoizedState=pe=e:pe=pe.next=e,pe}function en(){if(Re===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var n=pe===null?Ee.memoizedState:pe.next;if(n!==null)pe=n,Re=e;else{if(e===null)throw Error(s(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},pe===null?Ee.memoizedState=pe=e:pe=pe.next=e}return pe}function At(e,n){return typeof n=="function"?n(e):n}function Xi(e){var n=en(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var r=Re,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,S=null,c=l;do{var R=c.lane;if((r0&R)===R)S!==null&&(S=S.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:R,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};S===null?(a=S=p,o=r):S=S.next=p,Ee.lanes|=R,i0|=R}c=c.next}while(c!==null&&c!==l);S===null?o=r:S.next=a,on(r,n.memoizedState)||(ke=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=S,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,Ee.lanes|=l,i0|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Zi(e){var n=en(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);on(l,n.memoizedState)||(ke=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Ga(){}function La(e,n){var t=Ee,r=en(),i=n(),l=!on(r.memoizedState,i);if(l&&(r.memoizedState=i,ke=!0),r=r.queue,bi(ha.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||pe!==null&&pe.memoizedState.tag&1){if(t.flags|=2048,dt(9,Da.bind(null,t,r,i,n),void 0,null),Pe===null)throw Error(s(349));(r0&30)!==0||Ua(t,n,i)}return i}function Ua(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ee.updateQueue,n===null?(n={lastEffect:null,stores:null},Ee.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Da(e,n,t,r){n.value=t,n.getSnapshot=r,ga(n)&&va(e)}function ha(e,n,t){return t(function(){ga(n)&&va(e)})}function ga(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!on(e,t)}catch{return!0}}function va(e){var n=Pn(e,1);n!==null&&An(n,e,1,-1)}function Ha(e){var n=Nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:At,lastRenderedState:e},n.queue=e,e=e.dispatch=HS.bind(null,Ee,e),[n.memoizedState,e]}function dt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Ee.updateQueue,n===null?(n={lastEffect:null,stores:null},Ee.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ya(){return en().memoizedState}function ur(e,n,t,r){var i=Nn();Ee.flags|=e,i.memoizedState=dt(1|n,t,void 0,r===void 0?null:r)}function Sr(e,n,t,r){var i=en();r=r===void 0?null:r;var l=void 0;if(Re!==null){var o=Re.memoizedState;if(l=o.destroy,r!==null&&Ki(r,o.deps)){i.memoizedState=dt(n,t,l,r);return}}Ee.flags|=e,i.memoizedState=dt(1|n,t,l,r)}function Fa(e,n){return ur(8390656,8,e,n)}function bi(e,n){return Sr(2048,8,e,n)}function Ba(e,n){return Sr(4,2,e,n)}function Ya(e,n){return Sr(4,4,e,n)}function xa(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wa(e,n,t){return t=t!=null?t.concat([e]):null,Sr(4,4,xa.bind(null,n,e),t)}function el(){}function ka(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ki(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Va(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ki(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Qa(e,n,t){return(r0&21)===0?(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=t):(on(t,n)||(t=Oo(),Ee.lanes|=t,i0|=t,e.baseState=!0),n)}function gS(e,n){var t=te;te=t!==0&&4>t?t:4,e(!0);var r=zi.transition;zi.transition={};try{e(!1),n()}finally{te=t,zi.transition=r}}function _a(){return en().memoizedState}function vS(e,n,t){var r=jn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ja(e))Ja(n,t);else if(t=Ra(e,n,t,r),t!==null){var i=ye();An(t,e,r,i),Wa(t,n,r)}}function HS(e,n,t){var r=jn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ja(e))Ja(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,a=l(o,t);if(i.hasEagerState=!0,i.eagerState=a,on(a,o)){var S=n.interleaved;S===null?(i.next=i,Vi(n)):(i.next=S.next,S.next=i),n.interleaved=i;return}}catch{}finally{}t=Ra(e,n,i,r),t!==null&&(i=ye(),An(t,e,r,i),Wa(t,n,r))}}function ja(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function Ja(e,n){ut=sr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Wa(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ti(e,t)}}var Ar={readContext:be,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},yS={readContext:be,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:be,useEffect:Fa,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ur(4194308,4,xa.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ur(4194308,4,e,n)},useInsertionEffect:function(e,n){return ur(4,2,e,n)},useMemo:function(e,n){var t=Nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Nn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=vS.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:Ha,useDebugValue:el,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=Ha(!1),n=e[0];return e=gS.bind(null,e[1]),Nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Ee,i=Nn();if(Ae){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Pe===null)throw Error(s(349));(r0&30)!==0||Ua(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Fa(ha.bind(null,r,l,e),[e]),r.flags|=2048,dt(9,Da.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Nn(),n=Pe.identifierPrefix;if(Ae){var t=pn,r=Tn;t=(r&~(1<<32-ln(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=St++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=hS++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},FS={readContext:be,useCallback:ka,useContext:be,useEffect:bi,useImperativeHandle:wa,useInsertionEffect:Ba,useLayoutEffect:Ya,useMemo:Va,useReducer:Xi,useRef:ya,useState:function(){return Xi(At)},useDebugValue:el,useDeferredValue:function(e){var n=en();return Qa(n,Re.memoizedState,e)},useTransition:function(){var e=Xi(At)[0],n=en().memoizedState;return[e,n]},useMutableSource:Ga,useSyncExternalStore:La,useId:_a,unstable_isNewReconciler:!1},BS={readContext:be,useCallback:ka,useContext:be,useEffect:bi,useImperativeHandle:wa,useInsertionEffect:Ba,useLayoutEffect:Ya,useMemo:Va,useReducer:Zi,useRef:ya,useState:function(){return Zi(At)},useDebugValue:el,useDeferredValue:function(e){var n=en();return Re===null?n.memoizedState=e:Qa(n,Re.memoizedState,e)},useTransition:function(){var e=Zi(At)[0],n=en().memoizedState;return[e,n]},useMutableSource:Ga,useSyncExternalStore:La,useId:_a,unstable_isNewReconciler:!1};function sn(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function nl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var dr={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ye(),i=jn(e),l=Mn(r,i);l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,i),n!==null&&(An(n,e,i,r),ir(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ye(),i=jn(e),l=Mn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,i),n!==null&&(An(n,e,i,r),ir(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ye(),r=jn(e),i=Mn(t,r);i.tag=2,n!=null&&(i.callback=n),n=kn(e,i,r),n!==null&&(An(n,e,r,t),ir(n,e,r))}};function za(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Z0(t,r)||!Z0(i,l):!0}function Ka(e,n,t){var r=!1,i=Yn,l=n.contextType;return typeof l=="object"&&l!==null?l=be(l):(i=we(n)?Zn:Ue.current,r=n.contextTypes,l=(r=r!=null)?R0(e,i):Yn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=dr,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function $a(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&dr.enqueueReplaceState(n,n.state,null)}function tl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Qi(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=be(l):(l=we(n)?Zn:Ue.current,i.context=R0(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(nl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&dr.enqueueReplaceState(i,i.state,null),lr(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function D0(e,n){try{var t="",r=n;do t+=X(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function rl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function il(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var YS=typeof WeakMap=="function"?WeakMap:Map;function qa(e,n,t){t=Mn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){mr||(mr=!0,ml=r),il(e,n)},t}function Xa(e,n,t){t=Mn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){il(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){il(e,n),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Za(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new YS;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=XS.bind(null,e,n,t),n.then(e,e))}function ba(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function es(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Mn(-1,1),n.tag=2,kn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var xS=re.ReactCurrentOwner,ke=!1;function He(e,n,t,r){n.child=e===null?fa(n,null,t,r):M0(n,e.child,t,r)}function ns(e,n,t,r,i){t=t.render;var l=n.ref;return L0(n,i),r=$i(e,n,t,r,l,i),t=qi(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Gn(e,n,i)):(Ae&&t&&vi(n),n.flags|=1,He(e,n,r,i),n.child)}function ts(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Gl(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,rs(e,n,l,r,i)):(e=Mr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Z0,t(o,r)&&e.ref===n.ref)return Gn(e,n,i)}return n.flags|=1,e=Wn(l,r),e.ref=n.ref,e.return=n,n.child=e}function rs(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Z0(l,r)&&e.ref===n.ref)if(ke=!1,n.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ke=!0);else return n.lanes=e.lanes,Gn(e,n,i)}return ll(e,n,t,r,i)}function is(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(g0,$e),$e|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,oe(g0,$e),$e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,oe(g0,$e),$e|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,oe(g0,$e),$e|=r;return He(e,n,i,t),n.child}function ls(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ll(e,n,t,r,i){var l=we(t)?Zn:Ue.current;return l=R0(n,l),L0(n,i),t=$i(e,n,t,r,l,i),r=qi(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Gn(e,n,i)):(Ae&&r&&vi(n),n.flags|=1,He(e,n,t,i),n.child)}function os(e,n,t,r,i){if(we(t)){var l=!0;qt(n)}else l=!1;if(L0(n,i),n.stateNode===null)Er(e,n),Ka(n,t,r),tl(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var S=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=be(c):(c=we(t)?Zn:Ue.current,c=R0(n,c));var R=t.getDerivedStateFromProps,p=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||S!==c)&&$a(n,o,r,c),wn=!1;var m=n.memoizedState;o.state=m,lr(n,r,o,i),S=n.memoizedState,a!==r||m!==S||xe.current||wn?(typeof R=="function"&&(nl(n,t,R,r),S=n.memoizedState),(a=wn||za(n,t,a,r,m,S,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=S),o.props=r,o.state=S,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Ta(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:sn(n.type,a),o.props=c,p=n.pendingProps,m=o.context,S=t.contextType,typeof S=="object"&&S!==null?S=be(S):(S=we(t)?Zn:Ue.current,S=R0(n,S));var h=t.getDerivedStateFromProps;(R=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==S)&&$a(n,o,r,S),wn=!1,m=n.memoizedState,o.state=m,lr(n,r,o,i);var y=n.memoizedState;a!==p||m!==y||xe.current||wn?(typeof h=="function"&&(nl(n,t,h,r),y=n.memoizedState),(c=wn||za(n,t,c,r,m,y,S)||!1)?(R||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,S),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,S)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=S,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return ol(e,n,t,r,l,i)}function ol(e,n,t,r,i,l){ls(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Aa(n,t,!1),Gn(e,n,l);r=n.stateNode,xS.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=M0(n,e.child,null,l),n.child=M0(n,null,a,l)):He(e,n,a,l),n.memoizedState=r.state,i&&Aa(n,t,!0),n.child}function as(e){var n=e.stateNode;n.pendingContext?ua(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ua(e,n.context,!1),_i(e,n.containerInfo)}function ss(e,n,t,r,i){return P0(),Bi(i),n.flags|=256,He(e,n,t,r),n.child}var al={dehydrated:null,treeContext:null,retryLane:0};function sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function us(e,n,t){var r=n.pendingProps,i=Ce.current,l=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),oe(Ce,i&1),e===null)return Fi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Gr(o,r,0,null),e=s0(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=sl(t),n.memoizedState=al,e):ul(n,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wS(e,n,o,r,a,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,a=i.sibling;var S={mode:"hidden",children:r.children};return(o&1)===0&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=S,n.deletions=null):(r=Wn(i,S),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Wn(a,l):(l=s0(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?sl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=al,r}return l=e.child,e=l.sibling,r=Wn(l,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ul(e,n){return n=Gr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Cr(e,n,t,r){return r!==null&&Bi(r),M0(n,e.child,null,t),e=ul(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wS(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=rl(Error(s(422))),Cr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Gr({mode:"visible",children:r.children},i,0,null),l=s0(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,(n.mode&1)!==0&&M0(n,e.child,null,o),n.child.memoizedState=sl(o),n.memoizedState=al,l);if((n.mode&1)===0)return Cr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(s(419)),r=rl(l,r,void 0),Cr(e,n,o,r)}if(a=(o&e.childLanes)!==0,ke||a){if(r=Pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Pn(e,i),An(r,e,i,-1))}return Ml(),r=rl(Error(s(421))),Cr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=ZS.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,Ke=Fn(i.nextSibling),ze=n,Ae=!0,an=null,e!==null&&(Xe[Ze++]=Tn,Xe[Ze++]=pn,Xe[Ze++]=bn,Tn=e.id,pn=e.overflow,bn=n),n=ul(n,r.children),n.flags|=4096,n)}function Ss(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ki(e.return,n,t)}function Sl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function As(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(He(e,n,r.children,t),r=Ce.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ss(e,t,n);else if(e.tag===19)Ss(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(Ce,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&or(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Sl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&or(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Sl(n,!0,t,null,l);break;case"together":Sl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Er(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),i0|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=Wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function kS(e,n,t){switch(n.tag){case 3:as(n),P0();break;case 5:Ma(n);break;case 1:we(n.type)&&qt(n);break;case 4:_i(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;oe(tr,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(oe(Ce,Ce.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?us(e,n,t):(oe(Ce,Ce.current&1),e=Gn(e,n,t),e!==null?e.sibling:null);oe(Ce,Ce.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return As(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(Ce,Ce.current),r)break;return null;case 22:case 23:return n.lanes=0,is(e,n,t)}return Gn(e,n,t)}var ds,Al,Cs,Es;ds=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Al=function(){},Cs=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,t0(cn.current);var l=null;switch(t){case"input":i=kr(e,i),r=kr(e,r),l=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),l=[];break;case"textarea":i=_r(e,i),r=_r(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zt)}Jr(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(N.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var S=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&S!==a&&(S!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||S&&S.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in S)S.hasOwnProperty(o)&&a[o]!==S[o]&&(t||(t={}),t[o]=S[o])}else t||(l||(l=[]),l.push(c,t)),t=S;else c==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,a=a?a.__html:void 0,S!=null&&a!==S&&(l=l||[]).push(c,S)):c==="children"?typeof S!="string"&&typeof S!="number"||(l=l||[]).push(c,""+S):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(N.hasOwnProperty(c)?(S!=null&&c==="onScroll"&&ae("scroll",e),l||a===S||(l=[])):(l=l||[]).push(c,S))}t&&(l=l||[]).push("style",t);var c=l;(n.updateQueue=c)&&(n.flags|=4)}},Es=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ct(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function VS(e,n,t){var r=n.pendingProps;switch(Hi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(n),null;case 1:return we(n.type)&&$t(),he(n),null;case 3:return r=n.stateNode,U0(),se(xe),se(Ue),Wi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(er(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,an!==null&&(Tl(an),an=null))),Al(e,n),he(n),null;case 5:ji(n);var i=t0(st.current);if(t=n.type,e!==null&&n.stateNode!=null)Cs(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(s(166));return he(n),null}if(e=t0(cn.current),er(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[In]=n,r[rt]=l,e=(n.mode&1)!==0,t){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<et.length;i++)ae(et[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":zl(r,l),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ae("invalid",r);break;case"textarea":ql(r,l),ae("invalid",r)}Jr(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Wt(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Wt(r.textContent,a,e),i=["children",""+a]):N.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ae("scroll",r)}switch(t){case"input":pt(r),$l(r,l,!0);break;case"textarea":pt(r),Zl(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=zt)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[In]=n,e[rt]=r,ds(e,n,!1,!1),n.stateNode=e;e:{switch(o=Wr(t,r),t){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<et.length;i++)ae(et[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":zl(e,r),i=kr(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),ae("invalid",e);break;case"textarea":ql(e,r),i=_r(e,r),ae("invalid",e);break;default:i=r}Jr(t,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var S=a[l];l==="style"?to(e,S):l==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&eo(e,S)):l==="children"?typeof S=="string"?(t!=="textarea"||S!=="")&&F0(e,S):typeof S=="number"&&F0(e,""+S):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(N.hasOwnProperty(l)?S!=null&&l==="onScroll"&&ae("scroll",e):S!=null&&Fe(e,l,S,o))}switch(t){case"input":pt(e),$l(e,r,!1);break;case"textarea":pt(e),Zl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ne(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?u0(e,!!r.multiple,l,!1):r.defaultValue!=null&&u0(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zt)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return he(n),null;case 6:if(e&&n.stateNode!=null)Es(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=t0(st.current),t0(cn.current),er(n)){if(r=n.stateNode,t=n.memoizedProps,r[In]=n,(l=r.nodeValue!==t)&&(e=ze,e!==null))switch(e.tag){case 3:Wt(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wt(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[In]=n,n.stateNode=r}return he(n),null;case 13:if(se(Ce),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&Ke!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Na(),P0(),n.flags|=98560,l=!1;else if(l=er(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[In]=n}else P0(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;he(n),l=!1}else an!==null&&(Tl(an),an=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Te===0&&(Te=3):Ml())),n.updateQueue!==null&&(n.flags|=4),he(n),null);case 4:return U0(),Al(e,n),e===null&&nt(n.stateNode.containerInfo),he(n),null;case 10:return wi(n.type._context),he(n),null;case 17:return we(n.type)&&$t(),he(n),null;case 19:if(se(Ce),l=n.memoizedState,l===null)return he(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Ct(l,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=or(e),o!==null){for(n.flags|=128,Ct(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return oe(Ce,Ce.current&1|2),n.child}e=e.sibling}l.tail!==null&&Oe()>v0&&(n.flags|=128,r=!0,Ct(l,!1),n.lanes=4194304)}else{if(!r)if(e=or(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ct(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Ae)return he(n),null}else 2*Oe()-l.renderingStartTime>v0&&t!==1073741824&&(n.flags|=128,r=!0,Ct(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Oe(),n.sibling=null,t=Ce.current,oe(Ce,r?t&1|2:t&1),n):(he(n),null);case 22:case 23:return Pl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?($e&1073741824)!==0&&(he(n),n.subtreeFlags&6&&(n.flags|=8192)):he(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function QS(e,n){switch(Hi(n),n.tag){case 1:return we(n.type)&&$t(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return U0(),se(xe),se(Ue),Wi(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return ji(n),null;case 13:if(se(Ce),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));P0()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return se(Ce),null;case 4:return U0(),null;case 10:return wi(n.type._context),null;case 22:case 23:return Pl(),null;case 24:return null;default:return null}}var Ir=!1,ge=!1,_S=typeof WeakSet=="function"?WeakSet:Set,v=null;function h0(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ce(e,n,r)}else t.current=null}function dl(e,n,t){try{t()}catch(r){ce(e,n,r)}}var Is=!1;function jS(e,n){if(Pi=Ft,e=zo(),ci(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,a=-1,S=-1,c=0,R=0,p=e,m=null;n:for(;;){for(var h;p!==t||i!==0&&p.nodeType!==3||(a=o+i),p!==l||r!==0&&p.nodeType!==3||(S=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(h=p.firstChild)!==null;)m=p,p=h;for(;;){if(p===e)break n;if(m===t&&++c===i&&(a=o),m===l&&++R===r&&(S=o),(h=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=h}t=a===-1||S===-1?null:{start:a,end:S}}else t=null}t=t||{start:0,end:0}}else t=null;for(Mi={focusedElem:e,selectionRange:t},Ft=!1,v=n;v!==null;)if(n=v,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,v=e;else for(;v!==null;){n=v;try{var y=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var B=y.memoizedProps,me=y.memoizedState,E=n.stateNode,A=E.getSnapshotBeforeUpdate(n.elementType===n.type?B:sn(n.type,B),me);E.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var I=n.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(M){ce(n,n.return,M)}if(e=n.sibling,e!==null){e.return=n.return,v=e;break}v=n.return}return y=Is,Is=!1,y}function Et(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&dl(n,t,l)}i=i.next}while(i!==r)}}function cr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Cl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function cs(e){var n=e.alternate;n!==null&&(e.alternate=null,cs(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[In],delete n[rt],delete n[Di],delete n[GS],delete n[LS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ns(e){return e.tag===5||e.tag===3||e.tag===4}function Os(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ns(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function El(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=zt));else if(r!==4&&(e=e.child,e!==null))for(El(e,n,t),e=e.sibling;e!==null;)El(e,n,t),e=e.sibling}function Il(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Il(e,n,t),e=e.sibling;e!==null;)Il(e,n,t),e=e.sibling}var Ge=null,un=!1;function Vn(e,n,t){for(t=t.child;t!==null;)ms(e,n,t),t=t.sibling}function ms(e,n,t){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(Dt,t)}catch{}switch(t.tag){case 5:ge||h0(t,n);case 6:var r=Ge,i=un;Ge=null,Vn(e,n,t),Ge=r,un=i,Ge!==null&&(un?(e=Ge,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ge.removeChild(t.stateNode));break;case 18:Ge!==null&&(un?(e=Ge,t=t.stateNode,e.nodeType===8?Ui(e.parentNode,t):e.nodeType===1&&Ui(e,t),W0(e)):Ui(Ge,t.stateNode));break;case 4:r=Ge,i=un,Ge=t.stateNode.containerInfo,un=!0,Vn(e,n,t),Ge=r,un=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&dl(t,n,o),i=i.next}while(i!==r)}Vn(e,n,t);break;case 1:if(!ge&&(h0(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){ce(t,n,a)}Vn(e,n,t);break;case 21:Vn(e,n,t);break;case 22:t.mode&1?(ge=(r=ge)||t.memoizedState!==null,Vn(e,n,t),ge=r):Vn(e,n,t);break;default:Vn(e,n,t)}}function fs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new _S),n.forEach(function(r){var i=bS.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Sn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,un=!1;break e;case 3:Ge=a.stateNode.containerInfo,un=!0;break e;case 4:Ge=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(Ge===null)throw Error(s(160));ms(l,o,i),Ge=null,un=!1;var S=i.alternate;S!==null&&(S.return=null),i.return=null}catch(c){ce(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Rs(n,e),n=n.sibling}function Rs(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sn(n,e),On(e),r&4){try{Et(3,e,e.return),cr(3,e)}catch(B){ce(e,e.return,B)}try{Et(5,e,e.return)}catch(B){ce(e,e.return,B)}}break;case 1:Sn(n,e),On(e),r&512&&t!==null&&h0(t,t.return);break;case 5:if(Sn(n,e),On(e),r&512&&t!==null&&h0(t,t.return),e.flags&32){var i=e.stateNode;try{F0(i,"")}catch(B){ce(e,e.return,B)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,a=e.type,S=e.updateQueue;if(e.updateQueue=null,S!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Kl(i,l),Wr(a,o);var c=Wr(a,l);for(o=0;o<S.length;o+=2){var R=S[o],p=S[o+1];R==="style"?to(i,p):R==="dangerouslySetInnerHTML"?eo(i,p):R==="children"?F0(i,p):Fe(i,R,p,c)}switch(a){case"input":Vr(i,l);break;case"textarea":Xl(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var h=l.value;h!=null?u0(i,!!l.multiple,h,!1):m!==!!l.multiple&&(l.defaultValue!=null?u0(i,!!l.multiple,l.defaultValue,!0):u0(i,!!l.multiple,l.multiple?[]:"",!1))}i[rt]=l}catch(B){ce(e,e.return,B)}}break;case 6:if(Sn(n,e),On(e),r&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(B){ce(e,e.return,B)}}break;case 3:if(Sn(n,e),On(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{W0(n.containerInfo)}catch(B){ce(e,e.return,B)}break;case 4:Sn(n,e),On(e);break;case 13:Sn(n,e),On(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Ol=Oe())),r&4&&fs(e);break;case 22:if(R=t!==null&&t.memoizedState!==null,e.mode&1?(ge=(c=ge)||R,Sn(n,e),ge=c):Sn(n,e),On(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!R&&(e.mode&1)!==0)for(v=e,R=e.child;R!==null;){for(p=v=R;v!==null;){switch(m=v,h=m.child,m.tag){case 0:case 11:case 14:case 15:Et(4,m,m.return);break;case 1:h0(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(B){ce(r,t,B)}}break;case 5:h0(m,m.return);break;case 22:if(m.memoizedState!==null){Ps(p);continue}}h!==null?(h.return=m,v=h):Ps(p)}R=R.sibling}e:for(R=null,p=e;;){if(p.tag===5){if(R===null){R=p;try{i=p.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=p.stateNode,S=p.memoizedProps.style,o=S!=null&&S.hasOwnProperty("display")?S.display:null,a.style.display=no("display",o))}catch(B){ce(e,e.return,B)}}}else if(p.tag===6){if(R===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(B){ce(e,e.return,B)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;R===p&&(R=null),p=p.return}R===p&&(R=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Sn(n,e),On(e),r&4&&fs(e);break;case 21:break;default:Sn(n,e),On(e)}}function On(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ns(t)){var r=t;break e}t=t.return}throw Error(s(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(F0(i,""),r.flags&=-33);var l=Os(e);Il(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Os(e);El(e,a,o);break;default:throw Error(s(161))}}catch(S){ce(e,e.return,S)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function JS(e,n,t){v=e,Ts(e)}function Ts(e,n,t){for(var r=(e.mode&1)!==0;v!==null;){var i=v,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ir;if(!o){var a=i.alternate,S=a!==null&&a.memoizedState!==null||ge;a=Ir;var c=ge;if(Ir=o,(ge=S)&&!c)for(v=i;v!==null;)o=v,S=o.child,o.tag===22&&o.memoizedState!==null?Ms(i):S!==null?(S.return=o,v=S):Ms(i);for(;l!==null;)v=l,Ts(l),l=l.sibling;v=i,Ir=a,ge=c}ps(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,v=l):ps(e)}}function ps(e){for(;v!==null;){var n=v;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:ge||cr(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ge)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Pa(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Pa(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var S=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&t.focus();break;case"img":S.src&&(t.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var R=c.memoizedState;if(R!==null){var p=R.dehydrated;p!==null&&W0(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}ge||n.flags&512&&Cl(n)}catch(m){ce(n,n.return,m)}}if(n===e){v=null;break}if(t=n.sibling,t!==null){t.return=n.return,v=t;break}v=n.return}}function Ps(e){for(;v!==null;){var n=v;if(n===e){v=null;break}var t=n.sibling;if(t!==null){t.return=n.return,v=t;break}v=n.return}}function Ms(e){for(;v!==null;){var n=v;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{cr(4,n)}catch(S){ce(n,t,S)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(S){ce(n,i,S)}}var l=n.return;try{Cl(n)}catch(S){ce(n,l,S)}break;case 5:var o=n.return;try{Cl(n)}catch(S){ce(n,o,S)}}}catch(S){ce(n,n.return,S)}if(n===e){v=null;break}var a=n.sibling;if(a!==null){a.return=n.return,v=a;break}v=n.return}}var WS=Math.ceil,Nr=re.ReactCurrentDispatcher,cl=re.ReactCurrentOwner,nn=re.ReactCurrentBatchConfig,q=0,Pe=null,fe=null,Le=0,$e=0,g0=Bn(0),Te=0,It=null,i0=0,Or=0,Nl=0,ct=null,Ve=null,Ol=0,v0=1/0,Ln=null,mr=!1,ml=null,Qn=null,fr=!1,_n=null,Rr=0,Nt=0,fl=null,Tr=-1,pr=0;function ye(){return(q&6)!==0?Oe():Tr!==-1?Tr:Tr=Oe()}function jn(e){return(e.mode&1)===0?1:(q&2)!==0&&Le!==0?Le&-Le:DS.transition!==null?(pr===0&&(pr=Oo()),pr):(e=te,e!==0||(e=window.event,e=e===void 0?16:Lo(e.type)),e)}function An(e,n,t,r){if(50<Nt)throw Nt=0,fl=null,Error(s(185));V0(e,t,r),((q&2)===0||e!==Pe)&&(e===Pe&&((q&2)===0&&(Or|=t),Te===4&&Jn(e,Le)),Qe(e,r),t===1&&q===0&&(n.mode&1)===0&&(v0=Oe()+500,Xt&&xn()))}function Qe(e,n){var t=e.callbackNode;Du(e,n);var r=vt(e,e===Pe?Le:0);if(r===0)t!==null&&Io(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Io(t),n===1)e.tag===0?US(Ls.bind(null,e)):da(Ls.bind(null,e)),PS(function(){(q&6)===0&&xn()}),t=null;else{switch(mo(r)){case 1:t=br;break;case 4:t=co;break;case 16:t=Ut;break;case 536870912:t=No;break;default:t=Ut}t=Fs(t,Gs.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Gs(e,n){if(Tr=-1,pr=0,(q&6)!==0)throw Error(s(327));var t=e.callbackNode;if(H0()&&e.callbackNode!==t)return null;var r=vt(e,e===Pe?Le:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Pr(e,r);else{n=r;var i=q;q|=2;var l=Ds();(Pe!==e||Le!==n)&&(Ln=null,v0=Oe()+500,o0(e,n));do try{$S();break}catch(a){Us(e,a)}while(!0);xi(),Nr.current=l,q=i,fe!==null?n=0:(Pe=null,Le=0,n=Te)}if(n!==0){if(n===2&&(i=ei(e),i!==0&&(r=i,n=Rl(e,i))),n===1)throw t=It,o0(e,0),Jn(e,r),Qe(e,Oe()),t;if(n===6)Jn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!zS(i)&&(n=Pr(e,r),n===2&&(l=ei(e),l!==0&&(r=l,n=Rl(e,l))),n===1))throw t=It,o0(e,0),Jn(e,r),Qe(e,Oe()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(s(345));case 2:a0(e,Ve,Ln);break;case 3:if(Jn(e,r),(r&130023424)===r&&(n=Ol+500-Oe(),10<n)){if(vt(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Li(a0.bind(null,e,Ve,Ln),n);break}a0(e,Ve,Ln);break;case 4:if(Jn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-ln(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WS(r/1960))-r,10<r){e.timeoutHandle=Li(a0.bind(null,e,Ve,Ln),r);break}a0(e,Ve,Ln);break;case 5:a0(e,Ve,Ln);break;default:throw Error(s(329))}}}return Qe(e,Oe()),e.callbackNode===t?Gs.bind(null,e):null}function Rl(e,n){var t=ct;return e.current.memoizedState.isDehydrated&&(o0(e,n).flags|=256),e=Pr(e,n),e!==2&&(n=Ve,Ve=t,n!==null&&Tl(n)),e}function Tl(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function zS(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!on(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Jn(e,n){for(n&=~Nl,n&=~Or,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-ln(n),r=1<<t;e[t]=-1,n&=~r}}function Ls(e){if((q&6)!==0)throw Error(s(327));H0();var n=vt(e,0);if((n&1)===0)return Qe(e,Oe()),null;var t=Pr(e,n);if(e.tag!==0&&t===2){var r=ei(e);r!==0&&(n=r,t=Rl(e,r))}if(t===1)throw t=It,o0(e,0),Jn(e,n),Qe(e,Oe()),t;if(t===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,a0(e,Ve,Ln),Qe(e,Oe()),null}function pl(e,n){var t=q;q|=1;try{return e(n)}finally{q=t,q===0&&(v0=Oe()+500,Xt&&xn())}}function l0(e){_n!==null&&_n.tag===0&&(q&6)===0&&H0();var n=q;q|=1;var t=nn.transition,r=te;try{if(nn.transition=null,te=1,e)return e()}finally{te=r,nn.transition=t,q=n,(q&6)===0&&xn()}}function Pl(){$e=g0.current,se(g0)}function o0(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,pS(t)),fe!==null)for(t=fe.return;t!==null;){var r=t;switch(Hi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$t();break;case 3:U0(),se(xe),se(Ue),Wi();break;case 5:ji(r);break;case 4:U0();break;case 13:se(Ce);break;case 19:se(Ce);break;case 10:wi(r.type._context);break;case 22:case 23:Pl()}t=t.return}if(Pe=e,fe=e=Wn(e.current,null),Le=$e=n,Te=0,It=null,Nl=Or=i0=0,Ve=ct=null,n0!==null){for(n=0;n<n0.length;n++)if(t=n0[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}n0=null}return e}function Us(e,n){do{var t=fe;try{if(xi(),ar.current=Ar,sr){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sr=!1}if(r0=0,pe=Re=Ee=null,ut=!1,St=0,cl.current=null,t===null||t.return===null){Te=1,It=n,fe=null;break}e:{var l=e,o=t.return,a=t,S=n;if(n=Le,a.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var c=S,R=a,p=R.tag;if((R.mode&1)===0&&(p===0||p===11||p===15)){var m=R.alternate;m?(R.updateQueue=m.updateQueue,R.memoizedState=m.memoizedState,R.lanes=m.lanes):(R.updateQueue=null,R.memoizedState=null)}var h=ba(o);if(h!==null){h.flags&=-257,es(h,o,a,l,n),h.mode&1&&Za(l,c,n),n=h,S=c;var y=n.updateQueue;if(y===null){var B=new Set;B.add(S),n.updateQueue=B}else y.add(S);break e}else{if((n&1)===0){Za(l,c,n),Ml();break e}S=Error(s(426))}}else if(Ae&&a.mode&1){var me=ba(o);if(me!==null){(me.flags&65536)===0&&(me.flags|=256),es(me,o,a,l,n),Bi(D0(S,a));break e}}l=S=D0(S,a),Te!==4&&(Te=2),ct===null?ct=[l]:ct.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var E=qa(l,S,n);pa(l,E);break e;case 1:a=S;var A=l.type,I=l.stateNode;if((l.flags&128)===0&&(typeof A.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Qn===null||!Qn.has(I)))){l.flags|=65536,n&=-n,l.lanes|=n;var M=Xa(l,a,n);pa(l,M);break e}}l=l.return}while(l!==null)}gs(t)}catch(x){n=x,fe===t&&t!==null&&(fe=t=t.return);continue}break}while(!0)}function Ds(){var e=Nr.current;return Nr.current=Ar,e===null?Ar:e}function Ml(){(Te===0||Te===3||Te===2)&&(Te=4),Pe===null||(i0&268435455)===0&&(Or&268435455)===0||Jn(Pe,Le)}function Pr(e,n){var t=q;q|=2;var r=Ds();(Pe!==e||Le!==n)&&(Ln=null,o0(e,n));do try{KS();break}catch(i){Us(e,i)}while(!0);if(xi(),q=t,Nr.current=r,fe!==null)throw Error(s(261));return Pe=null,Le=0,Te}function KS(){for(;fe!==null;)hs(fe)}function $S(){for(;fe!==null&&!fu();)hs(fe)}function hs(e){var n=ys(e.alternate,e,$e);e.memoizedProps=e.pendingProps,n===null?gs(e):fe=n,cl.current=null}function gs(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=VS(t,n,$e),t!==null){fe=t;return}}else{if(t=QS(t,n),t!==null){t.flags&=32767,fe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,fe=null;return}}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);Te===0&&(Te=5)}function a0(e,n,t){var r=te,i=nn.transition;try{nn.transition=null,te=1,qS(e,n,t,r)}finally{nn.transition=i,te=r}return null}function qS(e,n,t,r){do H0();while(_n!==null);if((q&6)!==0)throw Error(s(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(hu(e,l),e===Pe&&(fe=Pe=null,Le=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||fr||(fr=!0,Fs(Ut,function(){return H0(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=nn.transition,nn.transition=null;var o=te;te=1;var a=q;q|=4,cl.current=null,jS(e,t),Rs(t,e),cS(Mi),Ft=!!Pi,Mi=Pi=null,e.current=t,JS(t),Ru(),q=a,te=o,nn.transition=l}else e.current=t;if(fr&&(fr=!1,_n=e,Rr=i),l=e.pendingLanes,l===0&&(Qn=null),Pu(t.stateNode),Qe(e,Oe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(mr)throw mr=!1,e=ml,ml=null,e;return(Rr&1)!==0&&e.tag!==0&&H0(),l=e.pendingLanes,(l&1)!==0?e===fl?Nt++:(Nt=0,fl=e):Nt=0,xn(),null}function H0(){if(_n!==null){var e=mo(Rr),n=nn.transition,t=te;try{if(nn.transition=null,te=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,Rr=0,(q&6)!==0)throw Error(s(331));var i=q;for(q|=4,v=e.current;v!==null;){var l=v,o=l.child;if((v.flags&16)!==0){var a=l.deletions;if(a!==null){for(var S=0;S<a.length;S++){var c=a[S];for(v=c;v!==null;){var R=v;switch(R.tag){case 0:case 11:case 15:Et(8,R,l)}var p=R.child;if(p!==null)p.return=R,v=p;else for(;v!==null;){R=v;var m=R.sibling,h=R.return;if(cs(R),R===c){v=null;break}if(m!==null){m.return=h,v=m;break}v=h}}}var y=l.alternate;if(y!==null){var B=y.child;if(B!==null){y.child=null;do{var me=B.sibling;B.sibling=null,B=me}while(B!==null)}}v=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,v=o;else e:for(;v!==null;){if(l=v,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Et(9,l,l.return)}var E=l.sibling;if(E!==null){E.return=l.return,v=E;break e}v=l.return}}var A=e.current;for(v=A;v!==null;){o=v;var I=o.child;if((o.subtreeFlags&2064)!==0&&I!==null)I.return=o,v=I;else e:for(o=A;v!==null;){if(a=v,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:cr(9,a)}}catch(x){ce(a,a.return,x)}if(a===o){v=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,v=M;break e}v=a.return}}if(q=i,xn(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(Dt,e)}catch{}r=!0}return r}finally{te=t,nn.transition=n}}return!1}function vs(e,n,t){n=D0(t,n),n=qa(e,n,1),e=kn(e,n,1),n=ye(),e!==null&&(V0(e,1,n),Qe(e,n))}function ce(e,n,t){if(e.tag===3)vs(e,e,t);else for(;n!==null;){if(n.tag===3){vs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){e=D0(t,e),e=Xa(n,e,1),n=kn(n,e,1),e=ye(),n!==null&&(V0(n,1,e),Qe(n,e));break}}n=n.return}}function XS(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ye(),e.pingedLanes|=e.suspendedLanes&t,Pe===e&&(Le&t)===t&&(Te===4||Te===3&&(Le&130023424)===Le&&500>Oe()-Ol?o0(e,0):Nl|=t),Qe(e,n)}function Hs(e,n){n===0&&((e.mode&1)===0?n=1:(n=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var t=ye();e=Pn(e,n),e!==null&&(V0(e,n,t),Qe(e,t))}function ZS(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Hs(e,t)}function bS(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(n),Hs(e,t)}var ys;ys=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||xe.current)ke=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return ke=!1,kS(e,n,t);ke=(e.flags&131072)!==0}else ke=!1,Ae&&(n.flags&1048576)!==0&&Ca(n,bt,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Er(e,n),e=n.pendingProps;var i=R0(n,Ue.current);L0(n,t),i=$i(null,n,r,e,i,t);var l=qi();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,we(r)?(l=!0,qt(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qi(n),i.updater=dr,n.stateNode=i,i._reactInternals=n,tl(n,r,e,t),n=ol(null,n,r,!0,l,t)):(n.tag=0,Ae&&l&&vi(n),He(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Er(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=nA(r),e=sn(r,e),i){case 0:n=ll(null,n,r,e,t);break e;case 1:n=os(null,n,r,e,t);break e;case 11:n=ns(null,n,r,e,t);break e;case 14:n=ts(null,n,r,sn(r.type,e),t);break e}throw Error(s(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),ll(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),os(e,n,r,i,t);case 3:e:{if(as(n),e===null)throw Error(s(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Ta(e,n),lr(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=D0(Error(s(423)),n),n=ss(e,n,r,t,i);break e}else if(r!==i){i=D0(Error(s(424)),n),n=ss(e,n,r,t,i);break e}else for(Ke=Fn(n.stateNode.containerInfo.firstChild),ze=n,Ae=!0,an=null,t=fa(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(P0(),r===i){n=Gn(e,n,t);break e}He(e,n,r,t)}n=n.child}return n;case 5:return Ma(n),e===null&&Fi(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Gi(r,i)?o=null:l!==null&&Gi(r,l)&&(n.flags|=32),ls(e,n),He(e,n,o,t),n.child;case 6:return e===null&&Fi(n),null;case 13:return us(e,n,t);case 4:return _i(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=M0(n,null,r,t):He(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),ns(e,n,r,i,t);case 7:return He(e,n,n.pendingProps,t),n.child;case 8:return He(e,n,n.pendingProps.children,t),n.child;case 12:return He(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,oe(tr,r._currentValue),r._currentValue=o,l!==null)if(on(l.value,o)){if(l.children===i.children&&!xe.current){n=Gn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var S=a.firstContext;S!==null;){if(S.context===r){if(l.tag===1){S=Mn(-1,t&-t),S.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var R=c.pending;R===null?S.next=S:(S.next=R.next,R.next=S),c.pending=S}}l.lanes|=t,S=l.alternate,S!==null&&(S.lanes|=t),ki(l.return,t,n),a.lanes|=t;break}S=S.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(s(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),ki(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}He(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,L0(n,t),i=be(i),r=r(i),n.flags|=1,He(e,n,r,t),n.child;case 14:return r=n.type,i=sn(r,n.pendingProps),i=sn(r.type,i),ts(e,n,r,i,t);case 15:return rs(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),Er(e,n),n.tag=1,we(r)?(e=!0,qt(n)):e=!1,L0(n,t),Ka(n,r,i),tl(n,r,i,t),ol(null,n,r,!0,e,t);case 19:return As(e,n,t);case 22:return is(e,n,t)}throw Error(s(156,n.tag))};function Fs(e,n){return Eo(e,n)}function eA(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,n,t,r){return new eA(e,n,t,r)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nA(e){if(typeof e=="function")return Gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dn)return 11;if(e===Cn)return 14}return 2}function Wn(e,n){var t=e.alternate;return t===null?(t=tn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Mr(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Gl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Be:return s0(t.children,i,l,n);case qe:o=8,i|=8;break;case Un:return e=tn(12,t,n,i|2),e.elementType=Un,e.lanes=l,e;case je:return e=tn(13,t,n,i),e.elementType=je,e.lanes=l,e;case rn:return e=tn(19,t,n,i),e.elementType=rn,e.lanes=l,e;case Ie:return Gr(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mn:o=10;break e;case $n:o=9;break e;case dn:o=11;break e;case Cn:o=14;break e;case Ye:o=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=tn(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function s0(e,n,t,r){return e=tn(7,e,r,n),e.lanes=t,e}function Gr(e,n,t,r){return e=tn(22,e,r,n),e.elementType=Ie,e.lanes=t,e.stateNode={isHidden:!1},e}function Ll(e,n,t){return e=tn(6,e,null,n),e.lanes=t,e}function Ul(e,n,t){return n=tn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function tA(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dl(e,n,t,r,i,l,o,a,S){return e=new tA(e,n,t,a,S),n===1?(n=1,l===!0&&(n|=8)):n=0,l=tn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qi(l),e}function rA(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Bs(e){if(!e)return Yn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(s(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(we(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(e.tag===1){var t=e.type;if(we(t))return Sa(e,t,n)}return n}function Ys(e,n,t,r,i,l,o,a,S){return e=Dl(t,r,!0,e,i,l,o,a,S),e.context=Bs(null),t=e.current,r=ye(),i=jn(t),l=Mn(r,i),l.callback=n??null,kn(t,l,i),e.current.lanes=i,V0(e,i,r),Qe(e,r),e}function Lr(e,n,t,r){var i=n.current,l=ye(),o=jn(i);return t=Bs(t),n.context===null?n.context=t:n.pendingContext=t,n=Mn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=kn(i,n,o),e!==null&&(An(e,i,o,l),ir(e,i,o)),o}function Ur(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function hl(e,n){xs(e,n),(e=e.alternate)&&xs(e,n)}function iA(){return null}var ws=typeof reportError=="function"?reportError:function(e){console.error(e)};function gl(e){this._internalRoot=e}Dr.prototype.render=gl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));Lr(e,n,null,null)},Dr.prototype.unmount=gl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;l0(function(){Lr(null,e,null,null)}),n[fn]=null}};function Dr(e){this._internalRoot=e}Dr.prototype.unstable_scheduleHydration=function(e){if(e){var n=To();e={blockedOn:null,target:e,priority:n};for(var t=0;t<vn.length&&n!==0&&n<vn[t].priority;t++);vn.splice(t,0,e),t===0&&Mo(e)}};function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ks(){}function lA(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=Ur(o);l.call(c)}}var o=Ys(n,r,e,0,null,!1,!1,"",ks);return e._reactRootContainer=o,e[fn]=o.current,nt(e.nodeType===8?e.parentNode:e),l0(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ur(S);a.call(c)}}var S=Dl(e,0,!1,null,null,!1,!1,"",ks);return e._reactRootContainer=S,e[fn]=S.current,nt(e.nodeType===8?e.parentNode:e),l0(function(){Lr(n,S,t,r)}),S}function gr(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var S=Ur(o);a.call(S)}}Lr(n,o,e,i)}else o=lA(t,n,e,i,r);return Ur(o)}fo=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=k0(n.pendingLanes);t!==0&&(ti(n,t|1),Qe(n,Oe()),(q&6)===0&&(v0=Oe()+500,xn()))}break;case 13:l0(function(){var r=Pn(e,1);if(r!==null){var i=ye();An(r,e,1,i)}}),hl(e,1)}},ri=function(e){if(e.tag===13){var n=Pn(e,134217728);if(n!==null){var t=ye();An(n,e,134217728,t)}hl(e,134217728)}},Ro=function(e){if(e.tag===13){var n=jn(e),t=Pn(e,n);if(t!==null){var r=ye();An(t,e,n,r)}hl(e,n)}},To=function(){return te},po=function(e,n){var t=te;try{return te=e,n()}finally{te=t}},$r=function(e,n,t){switch(n){case"input":if(Vr(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Kt(r);if(!i)throw Error(s(90));Wl(r),Vr(r,i)}}}break;case"textarea":Xl(e,t);break;case"select":n=t.value,n!=null&&u0(e,!!t.multiple,n,!1)}},oo=pl,ao=l0;var oA={usingClientEntryPoint:!1,Events:[it,m0,Kt,io,lo,pl]},Ot={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aA={bundleType:Ot.bundleType,version:Ot.version,rendererPackageName:Ot.rendererPackageName,rendererConfig:Ot.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ao(e),e===null?null:e.stateNode},findFiberByHostInstance:Ot.findFiberByHostInstance||iA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{Dt=vr.inject(aA),En=vr}catch{}}return _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oA,_e.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vl(n))throw Error(s(200));return rA(e,n,null,t)},_e.createRoot=function(e,n){if(!vl(e))throw Error(s(299));var t=!1,r="",i=ws;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Dl(e,1,!1,null,null,t,!1,r,i),e[fn]=n.current,nt(e.nodeType===8?e.parentNode:e),new gl(n)},_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Ao(n),e=e===null?null:e.stateNode,e},_e.flushSync=function(e){return l0(e)},_e.hydrate=function(e,n,t){if(!hr(n))throw Error(s(200));return gr(null,e,n,!0,t)},_e.hydrateRoot=function(e,n,t){if(!vl(e))throw Error(s(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=ws;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Ys(n,null,e,1,t??null,i,!1,l,o),e[fn]=n.current,nt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Dr(n)},_e.render=function(e,n,t){if(!hr(n))throw Error(s(200));return gr(null,e,n,!1,t)},_e.unmountComponentAtNode=function(e){if(!hr(e))throw Error(s(40));return e._reactRootContainer?(l0(function(){gr(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1},_e.unstable_batchedUpdates=pl,_e.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!hr(t))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return gr(e,n,t,!1,r)},_e.version="18.3.1-next-f1338f8080-20240426",_e}var Ks;function NA(){if(Ks)return Bl.exports;Ks=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(d){console.error(d)}}return u(),Bl.exports=cA(),Bl.exports}var $s;function OA(){if($s)return Hr;$s=1;var u=NA();return Hr.createRoot=u.createRoot,Hr.hydrateRoot=u.hydrateRoot,Hr}var mA=OA();const fA="modulepreload",RA=function(u){return"/UMDTerpTracker/"+u},qs={},Tt=function(d,s,P){let N=Promise.resolve();if(s&&s.length>0){let L=function(F){return Promise.all(F.map(J=>Promise.resolve(J).then(V=>({status:"fulfilled",value:V}),V=>({status:"rejected",reason:V}))))};document.getElementsByTagName("link");const T=document.querySelector("meta[property=csp-nonce]"),Y=(T==null?void 0:T.nonce)||(T==null?void 0:T.getAttribute("nonce"));N=L(s.map(F=>{if(F=RA(F),F in qs)return;qs[F]=!0;const J=F.endsWith(".css"),V=J?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${F}"]${V}`))return;const j=document.createElement("link");if(j.rel=J?"stylesheet":fA,J||(j.as="script"),j.crossOrigin="",j.href=F,Y&&j.setAttribute("nonce",Y),document.head.appendChild(j),J)return new Promise((de,ue)=>{j.addEventListener("load",de),j.addEventListener("error",()=>ue(new Error(`Unable to preload CSS for ${F}`)))})}))}function G(L){const T=new Event("vite:preloadError",{cancelable:!0});if(T.payload=L,window.dispatchEvent(T),!T.defaultPrevented)throw L}return N.then(L=>{for(const T of L||[])T.status==="rejected"&&G(T.reason);return d().catch(G)})},TA=new Set(["W","I","NG","AU"]);function pA(u){return u.creditsEarned!==void 0?u.creditsEarned:TA.has(u.grade)||u.gradePoints===0?0:u.credits}function Br(u){let d=0,s=0,P=0;for(const N of u)P+=pA(N),!(!N.countsTowardGpa||N.gradePoints===null)&&(d+=N.credits,s+=N.credits*N.gradePoints);return{gpaCredits:d,qualityPoints:s,earnedCredits:P,gpa:d>0?s/d:null}}function eu(u){const d=u.terms.flatMap(N=>N.courses),s=Br(d),P=Br(u.nonGpaCredits);return{...s,earnedCredits:s.earnedCredits+P.earnedCredits}}function yd(u){const d=[];return u.terms.map(s=>(d.push(...s.courses),{term:s,termGpa:Br(s.courses).gpa,cumulativeGpa:Br(d).gpa}))}const kl={"A+":4,A:4,"A-":3.7,"B+":3.3,B:3,"B-":2.7,"C+":2.3,C:2,"C-":1.7,"D+":1.3,D:1,"D-":.7,F:0,XF:0},PA=["P","S","U","W","I","AU","NC","NG"],MA=[...Object.keys(kl),...PA],Yr=["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","D-"];function GA(u){return MA.includes(u)}function nu(u){return u in kl}function LA(u){return nu(u)?kl[u]:null}function UA(u){return nu(u)}function tu(u){const d=u.trim().toUpperCase().replace(/\s+/g,"");return d&&GA(d)?d:null}function Xs(u){const d=Yr.indexOf(u);return d===-1?Yr.length:d}const DA=[...Yr,"F"];function hA(u){return DA.reduce((d,s)=>d+(u.counts[s]??0),0)}function Zs(u,d){const s=hA(u);if(s===0)return null;const P=Xs(d);let N=0;for(const G of Yr){if(Xs(G)>P)break;N+=u.counts[G]??0}return N/s}class Fd{constructor(d){Hl(this,"byCourse");Hl(this,"fallback");this.byCourse=new Map(d.map(s=>[s.courseId.toUpperCase(),s])),this.fallback=d.length>0?gA(d):null}get(d){return this.byCourse.get(d.toUpperCase())}chanceOfAtLeast(d,s){const P=this.get(d);if(P){const N=Zs(P,s);if(N!==null)return{probability:N,estimated:!1}}return this.fallback?{probability:Zs(this.fallback,s),estimated:!0}:{probability:null,estimated:!0}}}function gA(u){const d={};let s=0,P=0;for(const N of u){P+=N.sections,s+=N.total;for(const[G,L]of Object.entries(N.counts))d[G]=(d[G]??0)+(L??0)}return{courseId:"*",counts:d,total:s,sections:P}}const vA=.005,HA=.5;function Vl(u){const d=eu(u),s=d.gpa,P=u.statedCumulativeGpa,N=s!==null&&P!==null?s-P:null;return{computedGpa:s,statedGpa:P,delta:N,computedCredits:d.earnedCredits,statedCredits:u.statedCumulativeCredits,ok:N!==null&&Math.abs(N)<=vA}}function yA(u){const d=Vl(u),s=[...u.warnings];return d.delta!==null&&!d.ok&&s.push({code:"gpa_mismatch",message:`We read your GPA as ${d.computedGpa.toFixed(3)}, but your transcript says ${d.statedGpa.toFixed(3)}. Something did not parse correctly, so treat the numbers below as approximate.`,detail:`delta ${d.delta.toFixed(3)}`}),d.statedCredits!==null&&Math.abs(d.computedCredits-d.statedCredits)>HA&&s.push({code:"gpa_mismatch",message:`We counted ${d.computedCredits} earned credits but your transcript says ${d.statedCredits}.`,detail:"credit total mismatch"}),{...u,warnings:s}}const ru={rowTolerance:.5,cellGap:1.4};function FA(u,d=ru){if(u.items.length===0)return[];const s=[...u.items].sort((L,T)=>T.y-L.y||L.x-T.x),P=[];let N=[],G=s[0].y;for(const L of s){const T=Math.max(L.height,1)*d.rowTolerance;N.length>0&&Math.abs(L.y-G)>T&&(P.push(N),N=[]),N.length===0&&(G=L.y),N.push(L)}return N.length>0&&P.push(N),P.map(L=>BA(u.pageNumber,L,d))}function BA(u,d,s){var L;const P=[...d].sort((T,Y)=>T.x-Y.x),N=[];for(const T of P){const Y=N[N.length-1],F=Math.max(T.height,1)*s.cellGap;if(Y&&T.x-Y.endX<=F){const J=Y.text.endsWith(" ")||T.text.startsWith(" ")?"":" ",V=T.x-Y.endX<.2?"":J;Y.text=`${Y.text}${V}${T.text}`,Y.endX=Math.max(Y.endX,T.x+T.width)}else N.push({text:T.text,x:T.x,endX:T.x+T.width})}const G=N.map(T=>({...T,text:T.text.replace(/\s+/g," ").trim()})).filter(T=>T.text.length>0);return{page:u,y:((L=P[0])==null?void 0:L.y)??0,cells:G,text:G.map(T=>T.text).join(" ")}}function YA(u,d=ru){return u.flatMap(s=>FA(s,d))}const iu="A\\+|A-|B\\+|B-|C\\+|C-|D\\+|D-|XF|NC|AU|NG|A|B|C|D|F|P|S|U|W|I",Rt="\\d+\\.\\d{2}",wr="[A-Z]{4}\\s?\\d{3}[A-Z]?",xA=new RegExp(`^(${wr})\\s+(.+?)\\s+(${iu})\\s+(${Rt})\\s+(${Rt})(?:\\s+(${Rt}))?(?:\\s+(.*))?$`),wA=new RegExp(`^(?:(\\d{4})\\s+)?(.+?)\\s+(${iu})\\s+(${Rt})(?:\\s+(${wr}))?(?:\\s+(.*))?$`),kA=new RegExp(`^(${wr})\\s+([A-Z0-9]{4})\\s+(${Rt})\\s+([A-Z]{2,4})\\s+([AD])\\b`);function Ql(u){return u.replace(/\s+/g,"").toUpperCase()}const VA=/\b(FS[A-Z]{2}|DS[A-Z]{2}|DV[A-Z]{2}|SCIS)\b/g;function lu(u){if(!u)return;const d=[...u.matchAll(VA)].map(P=>P[1]),s=[...new Set(d)];return s.length>0?s:void 0}function xr(u){if(u===void 0)return;const d=Number(u.replace(/,/g,""));return Number.isFinite(d)?d:void 0}function QA(u){const d=xA.exec(u);if(!d)return null;const s=tu(d[3]),P=xr(d[4]),N=xr(d[5]);if(!s||P===void 0||P>24)return null;const G={courseId:Ql(d[1]),title:d[2].trim(),credits:P,grade:s,gradePoints:LA(s),countsTowardGpa:UA(s),source:"institution"};N!==void 0&&(G.creditsEarned=N);const L=lu(d[7]);return L&&(G.genEd=L),G}function _A(u,d){const s=wA.exec(u);if(!s)return null;const P=tu(s[3]),N=xr(s[4]);if(!P||N===void 0||N>24)return null;const G=s[5],L={courseId:G?Ql(G):"",title:s[2].trim(),credits:N,creditsEarned:N,grade:P,gradePoints:null,countsTowardGpa:!1,source:d},T=lu(s[6]);return T&&(L.genEd=T),L}function jA(u){const d=kA.exec(u);if(!d)return null;const s=xr(d[3]);return s===void 0||s>24?null:{dropped:d[5]==="D",entry:{courseId:Ql(d[1]),title:"",credits:s,grade:"NG",gradePoints:null,countsTowardGpa:!1,source:"institution",section:d[2].toUpperCase()}}}function JA(u){return new RegExp(`^${wr}\\b`).test(u)}const WA=/^(Fall|Spring|Summer|Winter)(?:\s+(I{1,2}))?\s+(\d{4})\b/i,zA=/\*\*\s*Transfer\s+Credit\s+Information/i,KA=/\bHistoric\s+Course\s+Information/i,$A=/\*\*\s*Current\s+Course\s+Information/i,qA=/^(Advanced\s+Placement|AP\s+Exam|International\s+Baccalaureate|IB\s+Exam|CLEP)/i,XA=/\b(College|University|Institute|School|Academy)\b/i,ZA=/^Semester:\s*Attempted\s+([\d.]+);\s*Earned\s+([\d.]+);\s*QPoints\s+([\d.]+);\s*GPA\s+([\d.]+)/i,bA=/^UG\s+Cumulative:\s*([\d.]+);\s*([\d.]+);\s*([\d.]+);\s*([\d.]+)/i,e1=/^UG\s+Cumulative\s+Credit\s*:\s*([\d.]+)/i,n1=/^UG\s+Cumulative\s+GPA\s*:\s*([\d.]+)/i,t1=/^Major\s*:\s*(.+)$/i,r1=/^[=\s]+$/;function i1(u){const d=WA.exec(u);if(!d)return null;const s=d[1],P={season:s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),year:Number(d[3])};return d[2]&&(P.session=d[2].toUpperCase()),P}function l1(u){var j,de;const d=[],s=[],P=[],N=[];let G="header",L="transfer",T=null,Y,F=null,J=null,V;for(const ue of u){const D=ue.text;if(!D||r1.test(D))continue;if(zA.test(D)){G="transfer",T=null;continue}if(KA.test(D)){G="historic",T=null;continue}if($A.test(D)){G="current",T=null;continue}if(G==="header"){V??(V=(de=(j=t1.exec(D))==null?void 0:j[1])==null?void 0:de.trim());continue}const g=ZA.exec(D);if(g){T&&(T.statedTermCredits=Number(g[2]),T.statedTermGpa=Number(g[4]));continue}const $=bA.exec(D);if($){J=Number($[2]),F=Number($[4]);continue}const Ne=e1.exec(D);if(Ne){J=Number(Ne[1]);continue}const Fe=n1.exec(D);if(Fe){F=Number(Fe[1]);continue}const re=i1(D);if(re){const ie=`${re.year}-${re.season}${re.session?` ${re.session}`:""}`;G==="historic"?(T={id:ie,season:re.season,year:re.year,courses:[],statedTermGpa:null,statedTermCredits:null},re.session&&(T.session=re.session),s.push(T)):(T=null,G==="current"&&(Y=ie));continue}if(G==="transfer"){if(qA.test(D)){L="exam";continue}if(XA.test(D)&&!/\d\.\d{2}/.test(D)){L="transfer";continue}const ie=_A(D,L);ie&&P.push(ie);continue}if(G==="current"){const ie=jA(D);ie&&!ie.dropped&&(Y&&(ie.entry.termId=Y),N.push(ie.entry));continue}const ve=QA(D);if(ve){T?T.courses.push(ve):d.push({code:"unparsed_line",message:`${ve.courseId} was not under any term heading.`,page:ue.page});continue}JA(D)&&d.push({code:"unparsed_line",message:"A row looked like a course but could not be read.",page:ue.page,detail:D})}return s.length===0&&d.push({code:"no_terms_found",message:"No semesters were found in this PDF. It may not be a UMD transcript."}),F===null&&d.push({code:"missing_stated_gpa",message:"The transcript did not print a cumulative GPA, so the parse could not be checked against it."}),{major:V,terms:s,nonGpaCredits:P,inProgress:N,statedCumulativeGpa:F,statedCumulativeCredits:J,warnings:d}}function o1(u){return l1(YA(u))}const _l={charWidth:6,lineHeight:12,fontHeight:10,top:780};function a1(u,d,s=_l){const P=[];return d.replace(/\r\n/g,`
`).split(`
`).forEach((G,L)=>{const T=s.top-L*s.lineHeight;for(const Y of G.matchAll(/\S+/g)){const F=Y.index;P.push({text:Y[0],x:F*s.charWidth,y:T,width:Y[0].length*s.charWidth,height:s.fontHeight})}}),{pageNumber:u,items:P}}function s1(u,d=_l){return u.split("\f").map((s,P)=>a1(P+1,s,d))}function ou(u,d=_l){return yA(o1(s1(u,d)))}const u1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Information Science
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2024

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   3.00 MATH120   FSAR, FSMA
      PSYCHOLOGY/SCR 5        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: INFORMATION SCIENCE
INST126  INTRODUCTION TO PROGRAMM A- 3.00  3.00 11.10
ENGL101  ACADEMIC WRITING         B  3.00  3.00 9.00  FSAW
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
AMST101  INTRODUCTION AMERICAN ST A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            15.00;   15.00;    53.10;    3.540

Spring 2024
MAJOR: INFORMATION SCIENCE
INST201  INTRODUCTION TO INFORMAT A  3.00  3.00 12.00 DSHS
STAT100  ELEMENTARY STATISTICS AN B+ 3.00  3.00 9.90  FSAR, FSMA
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
ECON200  PRINCIPLES OF MICROECONO B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.00; GPA 3.600
UG Cumulative:            30.00;   30.00;    107.10;   3.570

UG Cumulative Credit          : 36.00
UG Cumulative GPA             :         3.570

** Current Course Information **
Fall 2024 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
INST311 0101 3.00  REG A  04/01/26 04/01/26
INST314 0102 3.00  REG A  04/01/26 04/01/26
ENGL393 0103 3.00  REG A  04/01/26 04/01/26
BSCI170 0104 3.00  REG A  04/01/26 04/01/26
BSCI171 0105 1.00  REG A  04/01/26 04/01/26
MATH121 0106 3.00  REG A  04/01/26 04/01/26

`,S1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Information Science
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2025

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   3.00 MATH120   FSAR, FSMA
      PSYCHOLOGY/SCR 5        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: INFORMATION SCIENCE
INST126  INTRODUCTION TO PROGRAMM A- 3.00  3.00 11.10
ENGL101  ACADEMIC WRITING         B  3.00  3.00 9.00  FSAW
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
AMST101  INTRODUCTION AMERICAN ST A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            15.00;   15.00;    53.10;    3.540

Spring 2024
MAJOR: INFORMATION SCIENCE
INST201  INTRODUCTION TO INFORMAT A  3.00  3.00 12.00 DSHS
STAT100  ELEMENTARY STATISTICS AN B+ 3.00  3.00 9.90  FSAR, FSMA
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
ECON200  PRINCIPLES OF MICROECONO B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.00; GPA 3.600
UG Cumulative:            30.00;   30.00;    107.10;   3.570
\f
Fall 2024
MAJOR: INFORMATION SCIENCE
INST311  INFORMATION ORGANIZATION B+ 3.00  3.00 9.90
INST314  STATISTICS FOR INFORMATI B  3.00  3.00 9.00
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
MATH121  ELEMENTARY CALCULUS II   W  3.00  0.00 0.00
Semester:     Attempted 13.00; Earned 13.00; QPoints 44.80; GPA 3.446
UG Cumulative:            43.00;   43.00;    151.90;   3.533

Spring 2025
MAJOR: INFORMATION SCIENCE
INST326  OBJECT-ORIENTED PROGRAMM A- 3.00  3.00 11.10
INST327  DATABASE DESIGN AND MODE A  3.00  3.00 12.00 DSSP
GVPT170  AMERICAN GOVERNMENT      B+ 3.00  3.00 9.90  DSHS
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
SOCY241  INEQUALITY IN AMERICAN S B  3.00  3.00 9.00  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            58.00;   58.00;    205.00;   3.534

UG Cumulative Credit          : 64.00
UG Cumulative GPA             :         3.534

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
INST335 0101 3.00  REG A  04/01/26 04/01/26
INST346 0102 3.00  REG A  04/01/26 04/01/26
INST366 0103 3.00  REG A  04/01/26 04/01/26
AOSC200 0104 3.00  REG A  04/01/26 04/01/26
ENES210 0105 3.00  REG A  04/01/26 04/01/26

`,A1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Information Science
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2026

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   3.00 MATH120   FSAR, FSMA
      PSYCHOLOGY/SCR 5        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: INFORMATION SCIENCE
INST126  INTRODUCTION TO PROGRAMM A- 3.00  3.00 11.10
ENGL101  ACADEMIC WRITING         B  3.00  3.00 9.00  FSAW
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
AMST101  INTRODUCTION AMERICAN ST A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            15.00;   15.00;    53.10;    3.540

Spring 2024
MAJOR: INFORMATION SCIENCE
INST201  INTRODUCTION TO INFORMAT A  3.00  3.00 12.00 DSHS
STAT100  ELEMENTARY STATISTICS AN B+ 3.00  3.00 9.90  FSAR, FSMA
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
ECON200  PRINCIPLES OF MICROECONO B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.00; GPA 3.600
UG Cumulative:            30.00;   30.00;    107.10;   3.570
\f
Fall 2024
MAJOR: INFORMATION SCIENCE
INST311  INFORMATION ORGANIZATION B+ 3.00  3.00 9.90
INST314  STATISTICS FOR INFORMATI B  3.00  3.00 9.00
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
MATH121  ELEMENTARY CALCULUS II   W  3.00  0.00 0.00
Semester:     Attempted 13.00; Earned 13.00; QPoints 44.80; GPA 3.446
UG Cumulative:            43.00;   43.00;    151.90;   3.533

Spring 2025
MAJOR: INFORMATION SCIENCE
INST326  OBJECT-ORIENTED PROGRAMM A- 3.00  3.00 11.10
INST327  DATABASE DESIGN AND MODE A  3.00  3.00 12.00 DSSP
GVPT170  AMERICAN GOVERNMENT      B+ 3.00  3.00 9.90  DSHS
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
SOCY241  INEQUALITY IN AMERICAN S B  3.00  3.00 9.00  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            58.00;   58.00;    205.00;   3.534
\f
Fall 2025
MAJOR: INFORMATION SCIENCE
INST335  ORGANIZATIONS MANAGEMENT A- 3.00  3.00 11.10
INST346  TECHNOLOGIES INFRASTRUCT B+ 3.00  3.00 9.90
INST366  PRIVACY SECURITY AND ETH A  3.00  3.00 12.00
AOSC200  WEATHER AND CLIMATE      B+ 3.00  3.00 9.90  DSNS, SCIS
ENES210  ENTREPRENEURIAL OPPORTUN A- 3.00  3.00 11.10 DSSP, SCIS
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.00; GPA 3.600
UG Cumulative:            73.00;   73.00;    259.00;   3.548

Spring 2026
MAJOR: INFORMATION SCIENCE
INST352  INFORMATION USER NEEDS A A  3.00  3.00 12.00
INST362  USER-CENTERED DESIGN     A- 3.00  3.00 11.10
INST354  DECISION-MAKING FOR INFO B+ 3.00  3.00 9.90
INST341  INTRODUCTION TO DIGITAL  A- 3.00  3.00 11.10
ECON201  PRINCIPLES OF MACROECONO B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            88.00;   88.00;    312.10;   3.547

UG Cumulative Credit          : 94.00
UG Cumulative GPA             :         3.547

** Current Course Information **
Fall 2026 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
INST466 0101 3.00  REG A  04/01/26 04/01/26
INST377 0102 3.00  REG A  04/01/26 04/01/26
BMGT220 0103 3.00  REG A  04/01/26 04/01/26
PSYC221 0104 3.00  REG A  04/01/26 04/01/26
ENGL222 0105 3.00  REG A  04/01/26 04/01/26
GVPT200 0106 3.00  REG A  04/01/26 04/01/26

`,d1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Information Science
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Spring 2027

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   3.00 MATH120   FSAR, FSMA
      PSYCHOLOGY/SCR 5        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: INFORMATION SCIENCE
INST126  INTRODUCTION TO PROGRAMM A- 3.00  3.00 11.10
ENGL101  ACADEMIC WRITING         B  3.00  3.00 9.00  FSAW
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
AMST101  INTRODUCTION AMERICAN ST A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            15.00;   15.00;    53.10;    3.540

Spring 2024
MAJOR: INFORMATION SCIENCE
INST201  INTRODUCTION TO INFORMAT A  3.00  3.00 12.00 DSHS
STAT100  ELEMENTARY STATISTICS AN B+ 3.00  3.00 9.90  FSAR, FSMA
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
ECON200  PRINCIPLES OF MICROECONO B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.00; GPA 3.600
UG Cumulative:            30.00;   30.00;    107.10;   3.570
\f
Fall 2024
MAJOR: INFORMATION SCIENCE
INST311  INFORMATION ORGANIZATION B+ 3.00  3.00 9.90
INST314  STATISTICS FOR INFORMATI B  3.00  3.00 9.00
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
MATH121  ELEMENTARY CALCULUS II   W  3.00  0.00 0.00
Semester:     Attempted 13.00; Earned 13.00; QPoints 44.80; GPA 3.446
UG Cumulative:            43.00;   43.00;    151.90;   3.533

Spring 2025
MAJOR: INFORMATION SCIENCE
INST326  OBJECT-ORIENTED PROGRAMM A- 3.00  3.00 11.10
INST327  DATABASE DESIGN AND MODE A  3.00  3.00 12.00 DSSP
GVPT170  AMERICAN GOVERNMENT      B+ 3.00  3.00 9.90  DSHS
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
SOCY241  INEQUALITY IN AMERICAN S B  3.00  3.00 9.00  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            58.00;   58.00;    205.00;   3.534
\f
Fall 2025
MAJOR: INFORMATION SCIENCE
INST335  ORGANIZATIONS MANAGEMENT A- 3.00  3.00 11.10
INST346  TECHNOLOGIES INFRASTRUCT B+ 3.00  3.00 9.90
INST366  PRIVACY SECURITY AND ETH A  3.00  3.00 12.00
AOSC200  WEATHER AND CLIMATE      B+ 3.00  3.00 9.90  DSNS, SCIS
ENES210  ENTREPRENEURIAL OPPORTUN A- 3.00  3.00 11.10 DSSP, SCIS
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.00; GPA 3.600
UG Cumulative:            73.00;   73.00;    259.00;   3.548

Spring 2026
MAJOR: INFORMATION SCIENCE
INST352  INFORMATION USER NEEDS A A  3.00  3.00 12.00
INST362  USER-CENTERED DESIGN     A- 3.00  3.00 11.10
INST354  DECISION-MAKING FOR INFO B+ 3.00  3.00 9.90
INST341  INTRODUCTION TO DIGITAL  A- 3.00  3.00 11.10
ECON201  PRINCIPLES OF MACROECONO B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            88.00;   88.00;    312.10;   3.547
\f
Fall 2026
MAJOR: INFORMATION SCIENCE
INST466  TECHNOLOGY CULTURE AND S A- 3.00  3.00 11.10 DVCC
INST377  DYNAMIC WEB APPLICATIONS B+ 3.00  3.00 9.90
BMGT220  PRINCIPLES OF ACCOUNTING A  3.00  3.00 12.00
PSYC221  SOCIAL PSYCHOLOGY        A- 3.00  3.00 11.10 DSHS, DSSP
ENGL222  AMERICAN LITERATURES     B+ 3.00  3.00 9.90  DSHU
GVPT200  INTERNATIONAL POLITICAL  A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 18.00; Earned 18.00; QPoints 65.10; GPA 3.617
UG Cumulative:            106.00;  106.00;   377.20;   3.558

UG Cumulative Credit          : 112.00
UG Cumulative GPA             :         3.558

** Current Course Information **
Spring 2027 Course  Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
INST490 0101 3.00  REG A  04/01/26 04/01/26
BMGT230 0102 3.00  REG A  04/01/26 04/01/26
SOCY230 0103 3.00  REG A  04/01/26 04/01/26
HIST111 0104 3.00  REG A  04/01/26 04/01/26
MATH121 0105 3.00  REG A  04/01/26 04/01/26

`,C1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Computer Science
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2024

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 5       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: COMPUTER SCIENCE
CMSC131  OBJECT-ORIENTED PROGRAMM A- 4.00  4.00 14.80
MATH141  CALCULUS II              B+ 4.00  4.00 13.20
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG B  3.00  3.00 9.00  DSHS
AMST203  POPULAR CULTURE IN AMERI A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 17.00; Earned 17.00; QPoints 60.10; GPA 3.535
UG Cumulative:            17.00;   17.00;    60.10;    3.535

Spring 2024
MAJOR: COMPUTER SCIENCE
CMSC132  OBJECT-ORIENTED PROGRAMM A  4.00  4.00 16.00
CMSC250  DISCRETE STRUCTURES      B+ 4.00  4.00 13.20
MATH240  INTRODUCTION TO LINEAR A B  4.00  4.00 12.00
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 18.00; Earned 18.00; QPoints 64.30; GPA 3.572
UG Cumulative:            35.00;   35.00;    124.40;   3.554

UG Cumulative Credit          : 42.00
UG Cumulative GPA             :         3.554

** Current Course Information **
Fall 2024 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
CMSC216 0101 4.00  REG A  04/01/26 04/01/26
MATH241 0102 4.00  REG A  04/01/26 04/01/26
BSCI170 0103 3.00  REG A  04/01/26 04/01/26
BSCI171 0104 1.00  REG A  04/01/26 04/01/26
ENGL393 0105 3.00  REG A  04/01/26 04/01/26

`,E1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Computer Science
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2025

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 5       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: COMPUTER SCIENCE
CMSC131  OBJECT-ORIENTED PROGRAMM A- 4.00  4.00 14.80
MATH141  CALCULUS II              B+ 4.00  4.00 13.20
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG B  3.00  3.00 9.00  DSHS
AMST203  POPULAR CULTURE IN AMERI A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 17.00; Earned 17.00; QPoints 60.10; GPA 3.535
UG Cumulative:            17.00;   17.00;    60.10;    3.535

Spring 2024
MAJOR: COMPUTER SCIENCE
CMSC132  OBJECT-ORIENTED PROGRAMM A  4.00  4.00 16.00
CMSC250  DISCRETE STRUCTURES      B+ 4.00  4.00 13.20
MATH240  INTRODUCTION TO LINEAR A B  4.00  4.00 12.00
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 18.00; Earned 18.00; QPoints 64.30; GPA 3.572
UG Cumulative:            35.00;   35.00;    124.40;   3.554
\f
Fall 2024
MAJOR: COMPUTER SCIENCE
CMSC216  INTRODUCTION TO COMPUTER B+ 4.00  4.00 13.20
MATH241  CALCULUS III             B  4.00  4.00 12.00
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.10; GPA 3.407
UG Cumulative:            50.00;   50.00;    175.50;   3.510

Spring 2025
MAJOR: COMPUTER SCIENCE
CMSC330  ORGANIZATION OF PROGRAMM A- 3.00  3.00 11.10
CMSC351  ALGORITHMS               B  3.00  3.00 9.00
STAT400  APPLIED PROBABILITY AND  B+ 3.00  3.00 9.90
AOSC200  WEATHER AND CLIMATE      B+ 3.00  3.00 9.90  DSNS, SCIS
SOCY241  INEQUALITY IN AMERICAN S B  3.00  3.00 9.00  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 48.90; GPA 3.260
UG Cumulative:            65.00;   65.00;    224.40;   3.452

UG Cumulative Credit          : 72.00
UG Cumulative GPA             :         3.452

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
CMSC411 0101 3.00  REG A  04/01/26 04/01/26
CMSC420 0102 3.00  REG A  04/01/26 04/01/26
ENES210 0103 3.00  REG A  04/01/26 04/01/26
ECON300 0104 3.00  REG A  04/01/26 04/01/26
GVPT170 0105 3.00  REG A  04/01/26 04/01/26

`,I1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Computer Science
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2026

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 5       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: COMPUTER SCIENCE
CMSC131  OBJECT-ORIENTED PROGRAMM A- 4.00  4.00 14.80
MATH141  CALCULUS II              B+ 4.00  4.00 13.20
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG B  3.00  3.00 9.00  DSHS
AMST203  POPULAR CULTURE IN AMERI A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 17.00; Earned 17.00; QPoints 60.10; GPA 3.535
UG Cumulative:            17.00;   17.00;    60.10;    3.535

Spring 2024
MAJOR: COMPUTER SCIENCE
CMSC132  OBJECT-ORIENTED PROGRAMM A  4.00  4.00 16.00
CMSC250  DISCRETE STRUCTURES      B+ 4.00  4.00 13.20
MATH240  INTRODUCTION TO LINEAR A B  4.00  4.00 12.00
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 18.00; Earned 18.00; QPoints 64.30; GPA 3.572
UG Cumulative:            35.00;   35.00;    124.40;   3.554
\f
Fall 2024
MAJOR: COMPUTER SCIENCE
CMSC216  INTRODUCTION TO COMPUTER B+ 4.00  4.00 13.20
MATH241  CALCULUS III             B  4.00  4.00 12.00
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.10; GPA 3.407
UG Cumulative:            50.00;   50.00;    175.50;   3.510

Spring 2025
MAJOR: COMPUTER SCIENCE
CMSC330  ORGANIZATION OF PROGRAMM A- 3.00  3.00 11.10
CMSC351  ALGORITHMS               B  3.00  3.00 9.00
STAT400  APPLIED PROBABILITY AND  B+ 3.00  3.00 9.90
AOSC200  WEATHER AND CLIMATE      B+ 3.00  3.00 9.90  DSNS, SCIS
SOCY241  INEQUALITY IN AMERICAN S B  3.00  3.00 9.00  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 48.90; GPA 3.260
UG Cumulative:            65.00;   65.00;    224.40;   3.452
\f
Fall 2025
MAJOR: COMPUTER SCIENCE
CMSC411  COMPUTER SYSTEMS ARCHITE B+ 3.00  3.00 9.90
CMSC420  ADVANCED DATA STRUCTURES A- 3.00  3.00 11.10
ENES210  ENTREPRENEURIAL OPPORTUN A  3.00  3.00 12.00 DSSP, SCIS
ECON300  METHODS AND TOOLS FOR EC B  3.00  3.00 9.00
GVPT170  AMERICAN GOVERNMENT      A- 3.00  3.00 11.10 DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            80.00;   80.00;    277.50;   3.469

Spring 2026
MAJOR: COMPUTER SCIENCE
CMSC421  INTRODUCTION TO ARTIFICI B  3.00  3.00 9.00
CMSC451  DESIGN AND ANALYSIS OF C B+ 3.00  3.00 9.90
CMSC434  INTRODUCTION TO HUMAN-CO A- 3.00  3.00 11.10
ECON305  INTERMEDIATE MACROECONOM B+ 4.00  4.00 13.20
ECON306  INTERMEDIATE MICROECONOM B  4.00  4.00 12.00
Semester:     Attempted 17.00; Earned 17.00; QPoints 55.20; GPA 3.247
UG Cumulative:            97.00;   97.00;    332.70;   3.430

UG Cumulative Credit          : 104.00
UG Cumulative GPA             :         3.430

** Current Course Information **
Fall 2026 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
CMSC430 0101 3.00  REG A  04/01/26 04/01/26
ECON330 0102 3.00  REG A  04/01/26 04/01/26
PSYC100 0103 3.00  REG A  04/01/26 04/01/26
ENGL222 0104 3.00  REG A  04/01/26 04/01/26
GVPT200 0105 3.00  REG A  04/01/26 04/01/26

`,c1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Computer Science
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Spring 2027

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 5       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: COMPUTER SCIENCE
CMSC131  OBJECT-ORIENTED PROGRAMM A- 4.00  4.00 14.80
MATH141  CALCULUS II              B+ 4.00  4.00 13.20
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG B  3.00  3.00 9.00  DSHS
AMST203  POPULAR CULTURE IN AMERI A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 17.00; Earned 17.00; QPoints 60.10; GPA 3.535
UG Cumulative:            17.00;   17.00;    60.10;    3.535

Spring 2024
MAJOR: COMPUTER SCIENCE
CMSC132  OBJECT-ORIENTED PROGRAMM A  4.00  4.00 16.00
CMSC250  DISCRETE STRUCTURES      B+ 4.00  4.00 13.20
MATH240  INTRODUCTION TO LINEAR A B  4.00  4.00 12.00
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 18.00; Earned 18.00; QPoints 64.30; GPA 3.572
UG Cumulative:            35.00;   35.00;    124.40;   3.554
\f
Fall 2024
MAJOR: COMPUTER SCIENCE
CMSC216  INTRODUCTION TO COMPUTER B+ 4.00  4.00 13.20
MATH241  CALCULUS III             B  4.00  4.00 12.00
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.10; GPA 3.407
UG Cumulative:            50.00;   50.00;    175.50;   3.510

Spring 2025
MAJOR: COMPUTER SCIENCE
CMSC330  ORGANIZATION OF PROGRAMM A- 3.00  3.00 11.10
CMSC351  ALGORITHMS               B  3.00  3.00 9.00
STAT400  APPLIED PROBABILITY AND  B+ 3.00  3.00 9.90
AOSC200  WEATHER AND CLIMATE      B+ 3.00  3.00 9.90  DSNS, SCIS
SOCY241  INEQUALITY IN AMERICAN S B  3.00  3.00 9.00  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 48.90; GPA 3.260
UG Cumulative:            65.00;   65.00;    224.40;   3.452
\f
Fall 2025
MAJOR: COMPUTER SCIENCE
CMSC411  COMPUTER SYSTEMS ARCHITE B+ 3.00  3.00 9.90
CMSC420  ADVANCED DATA STRUCTURES A- 3.00  3.00 11.10
ENES210  ENTREPRENEURIAL OPPORTUN A  3.00  3.00 12.00 DSSP, SCIS
ECON300  METHODS AND TOOLS FOR EC B  3.00  3.00 9.00
GVPT170  AMERICAN GOVERNMENT      A- 3.00  3.00 11.10 DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            80.00;   80.00;    277.50;   3.469

Spring 2026
MAJOR: COMPUTER SCIENCE
CMSC421  INTRODUCTION TO ARTIFICI B  3.00  3.00 9.00
CMSC451  DESIGN AND ANALYSIS OF C B+ 3.00  3.00 9.90
CMSC434  INTRODUCTION TO HUMAN-CO A- 3.00  3.00 11.10
ECON305  INTERMEDIATE MACROECONOM B+ 4.00  4.00 13.20
ECON306  INTERMEDIATE MICROECONOM B  4.00  4.00 12.00
Semester:     Attempted 17.00; Earned 17.00; QPoints 55.20; GPA 3.247
UG Cumulative:            97.00;   97.00;    332.70;   3.430
\f
Fall 2026
MAJOR: COMPUTER SCIENCE
CMSC430  INTRODUCTION TO COMPILER A- 3.00  3.00 11.10
ECON330  MONEY AND BANKING        B+ 3.00  3.00 9.90
PSYC100  INTRODUCTION TO PSYCHOLO A  3.00  3.00 12.00 DSHS, DSNS
ENGL222  AMERICAN LITERATURES     B+ 3.00  3.00 9.90  DSHU
GVPT200  INTERNATIONAL POLITICAL  A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.00; GPA 3.600
UG Cumulative:            112.00;  112.00;   386.70;   3.453

UG Cumulative Credit          : 119.00
UG Cumulative GPA             :         3.453

** Current Course Information **
Spring 2027 Course  Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
CMSC417 0101 3.00  REG A  04/01/26 04/01/26
MATH246 0102 3.00  REG A  04/01/26 04/01/26
HIST111 0103 3.00  REG A  04/01/26 04/01/26
SOCY105 0104 3.00  REG A  04/01/26 04/01/26
BMGT110 0105 3.00  REG A  04/01/26 04/01/26

`,N1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Management
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2024

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 4        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: MANAGEMENT
BMGT110  INTRODUCTION TO THE BUSI A  3.00  3.00 12.00
MATH120  ELEMENTARY CALCULUS I    B+ 3.00  3.00 9.90  FSAR, FSMA
ECON200  PRINCIPLES OF MICROECONO B  3.00  3.00 9.00  DSHS
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.00; GPA 3.600
UG Cumulative:            15.00;   15.00;    54.00;    3.600

Spring 2024
MAJOR: MANAGEMENT
BMGT220  PRINCIPLES OF ACCOUNTING B+ 3.00  3.00 9.90
ECON201  PRINCIPLES OF MACROECONO B  3.00  3.00 9.00  DSHS
BMGT230  BUSINESS STATISTICS      A- 3.00  3.00 11.10 FSAR
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
AMST205  AMERICAN MATERIAL CULTUR A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    105.90;   3.530

UG Cumulative Credit          : 36.00
UG Cumulative GPA             :         3.530

** Current Course Information **
Fall 2024 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BMGT221 0101 3.00  REG A  04/01/26 04/01/26
BMGT301 0102 3.00  REG A  04/01/26 04/01/26
BSCI170 0103 3.00  REG A  04/01/26 04/01/26
BSCI171 0104 1.00  REG A  04/01/26 04/01/26
ENGL393 0105 3.00  REG A  04/01/26 04/01/26

`,O1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Management
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2025

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 4        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: MANAGEMENT
BMGT110  INTRODUCTION TO THE BUSI A  3.00  3.00 12.00
MATH120  ELEMENTARY CALCULUS I    B+ 3.00  3.00 9.90  FSAR, FSMA
ECON200  PRINCIPLES OF MICROECONO B  3.00  3.00 9.00  DSHS
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.00; GPA 3.600
UG Cumulative:            15.00;   15.00;    54.00;    3.600

Spring 2024
MAJOR: MANAGEMENT
BMGT220  PRINCIPLES OF ACCOUNTING B+ 3.00  3.00 9.90
ECON201  PRINCIPLES OF MACROECONO B  3.00  3.00 9.00  DSHS
BMGT230  BUSINESS STATISTICS      A- 3.00  3.00 11.10 FSAR
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
AMST205  AMERICAN MATERIAL CULTUR A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    105.90;   3.530
\f
Fall 2024
MAJOR: MANAGEMENT
BMGT221  PRINCIPLES OF ACCOUNTING B  3.00  3.00 9.00
BMGT301  INFORMATION SYSTEMS AI A B+ 3.00  3.00 9.90
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 13.00; Earned 13.00; QPoints 43.60; GPA 3.354
UG Cumulative:            43.00;   43.00;    149.50;   3.477

Spring 2025
MAJOR: MANAGEMENT
BMGT340  BUSINESS FINANCE         B+ 3.00  3.00 9.90
BMGT350  MARKETING PRINCIPLES AND A- 3.00  3.00 11.10
AOSC200  WEATHER AND CLIMATE      B+ 3.00  3.00 9.90  DSNS, SCIS
SOCY241  INEQUALITY IN AMERICAN S B  3.00  3.00 9.00  DSHS, DVUP
BMGT364  MANAGING PEOPLE AND ORGA A  3.00  3.00 12.00
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            58.00;   58.00;    201.40;   3.472

UG Cumulative Credit          : 64.00
UG Cumulative GPA             :         3.472

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BMGT363 0101 3.00  REG A  04/01/26 04/01/26
BMGT380 0102 3.00  REG A  04/01/26 04/01/26
BMGT360 0103 3.00  REG A  04/01/26 04/01/26
GVPT170 0104 3.00  REG A  04/01/26 04/01/26
SOCY100 0105 3.00  REG A  04/01/26 04/01/26

`,m1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Management
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2026

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 4        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: MANAGEMENT
BMGT110  INTRODUCTION TO THE BUSI A  3.00  3.00 12.00
MATH120  ELEMENTARY CALCULUS I    B+ 3.00  3.00 9.90  FSAR, FSMA
ECON200  PRINCIPLES OF MICROECONO B  3.00  3.00 9.00  DSHS
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.00; GPA 3.600
UG Cumulative:            15.00;   15.00;    54.00;    3.600

Spring 2024
MAJOR: MANAGEMENT
BMGT220  PRINCIPLES OF ACCOUNTING B+ 3.00  3.00 9.90
ECON201  PRINCIPLES OF MACROECONO B  3.00  3.00 9.00  DSHS
BMGT230  BUSINESS STATISTICS      A- 3.00  3.00 11.10 FSAR
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
AMST205  AMERICAN MATERIAL CULTUR A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    105.90;   3.530
\f
Fall 2024
MAJOR: MANAGEMENT
BMGT221  PRINCIPLES OF ACCOUNTING B  3.00  3.00 9.00
BMGT301  INFORMATION SYSTEMS AI A B+ 3.00  3.00 9.90
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 13.00; Earned 13.00; QPoints 43.60; GPA 3.354
UG Cumulative:            43.00;   43.00;    149.50;   3.477

Spring 2025
MAJOR: MANAGEMENT
BMGT340  BUSINESS FINANCE         B+ 3.00  3.00 9.90
BMGT350  MARKETING PRINCIPLES AND A- 3.00  3.00 11.10
AOSC200  WEATHER AND CLIMATE      B+ 3.00  3.00 9.90  DSNS, SCIS
SOCY241  INEQUALITY IN AMERICAN S B  3.00  3.00 9.00  DSHS, DVUP
BMGT364  MANAGING PEOPLE AND ORGA A  3.00  3.00 12.00
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            58.00;   58.00;    201.40;   3.472
\f
Fall 2025
MAJOR: MANAGEMENT
BMGT363  LEADERSHIP AND TEAMWORK  A- 3.00  3.00 11.10
BMGT380  BUSINESS LAW I           B+ 3.00  3.00 9.90
BMGT360  STRATEGIC MANAGEMENT OF  A  3.00  3.00 12.00
GVPT170  AMERICAN GOVERNMENT      B+ 3.00  3.00 9.90  DSHS
SOCY100  INTRODUCTION TO SOCIOLOG A- 3.00  3.00 11.10 DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.00; GPA 3.600
UG Cumulative:            73.00;   73.00;    255.40;   3.499

Spring 2026
MAJOR: MANAGEMENT
BMGT362  NEGOTIATIONS             B+ 3.00  3.00 9.90
BMGT366  GROWTH STRATEGIES FOR EM A- 3.00  3.00 11.10
BMGT461  ENTREPRENEURSHIP         B  3.00  3.00 9.00  DSSP
ENGL222  AMERICAN LITERATURES     B+ 3.00  3.00 9.90  DSHU
HIST111  THE MEDIEVAL WORLD       A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            88.00;   88.00;    306.40;   3.482

UG Cumulative Credit          : 94.00
UG Cumulative GPA             :         3.482

** Current Course Information **
Fall 2026 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BMGT463 0101 3.00  REG A  04/01/26 04/01/26
BMGT495 0102 3.00  REG A  04/01/26 04/01/26
BMGT466 0103 3.00  REG A  04/01/26 04/01/26
PSYC221 0104 3.00  REG A  04/01/26 04/01/26
GVPT200 0105 3.00  REG A  04/01/26 04/01/26

`,f1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Management
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Spring 2027

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 4        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: MANAGEMENT
BMGT110  INTRODUCTION TO THE BUSI A  3.00  3.00 12.00
MATH120  ELEMENTARY CALCULUS I    B+ 3.00  3.00 9.90  FSAR, FSMA
ECON200  PRINCIPLES OF MICROECONO B  3.00  3.00 9.00  DSHS
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.00; GPA 3.600
UG Cumulative:            15.00;   15.00;    54.00;    3.600

Spring 2024
MAJOR: MANAGEMENT
BMGT220  PRINCIPLES OF ACCOUNTING B+ 3.00  3.00 9.90
ECON201  PRINCIPLES OF MACROECONO B  3.00  3.00 9.00  DSHS
BMGT230  BUSINESS STATISTICS      A- 3.00  3.00 11.10 FSAR
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
AMST205  AMERICAN MATERIAL CULTUR A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    105.90;   3.530
\f
Fall 2024
MAJOR: MANAGEMENT
BMGT221  PRINCIPLES OF ACCOUNTING B  3.00  3.00 9.00
BMGT301  INFORMATION SYSTEMS AI A B+ 3.00  3.00 9.90
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 13.00; Earned 13.00; QPoints 43.60; GPA 3.354
UG Cumulative:            43.00;   43.00;    149.50;   3.477

Spring 2025
MAJOR: MANAGEMENT
BMGT340  BUSINESS FINANCE         B+ 3.00  3.00 9.90
BMGT350  MARKETING PRINCIPLES AND A- 3.00  3.00 11.10
AOSC200  WEATHER AND CLIMATE      B+ 3.00  3.00 9.90  DSNS, SCIS
SOCY241  INEQUALITY IN AMERICAN S B  3.00  3.00 9.00  DSHS, DVUP
BMGT364  MANAGING PEOPLE AND ORGA A  3.00  3.00 12.00
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            58.00;   58.00;    201.40;   3.472
\f
Fall 2025
MAJOR: MANAGEMENT
BMGT363  LEADERSHIP AND TEAMWORK  A- 3.00  3.00 11.10
BMGT380  BUSINESS LAW I           B+ 3.00  3.00 9.90
BMGT360  STRATEGIC MANAGEMENT OF  A  3.00  3.00 12.00
GVPT170  AMERICAN GOVERNMENT      B+ 3.00  3.00 9.90  DSHS
SOCY100  INTRODUCTION TO SOCIOLOG A- 3.00  3.00 11.10 DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.00; GPA 3.600
UG Cumulative:            73.00;   73.00;    255.40;   3.499

Spring 2026
MAJOR: MANAGEMENT
BMGT362  NEGOTIATIONS             B+ 3.00  3.00 9.90
BMGT366  GROWTH STRATEGIES FOR EM A- 3.00  3.00 11.10
BMGT461  ENTREPRENEURSHIP         B  3.00  3.00 9.00  DSSP
ENGL222  AMERICAN LITERATURES     B+ 3.00  3.00 9.90  DSHU
HIST111  THE MEDIEVAL WORLD       A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            88.00;   88.00;    306.40;   3.482
\f
Fall 2026
MAJOR: MANAGEMENT
BMGT463  CROSS-CULTURAL CHALLENGE A- 3.00  3.00 11.10
BMGT495  STRATEGIC MANAGEMENT     B+ 3.00  3.00 9.90  DSSP
BMGT466  GLOBAL BUSINESS STRATEGY B  3.00  3.00 9.00
PSYC221  SOCIAL PSYCHOLOGY        A- 3.00  3.00 11.10 DSHS, DSSP
GVPT200  INTERNATIONAL POLITICAL  B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            103.00;  103.00;   357.40;   3.470

UG Cumulative Credit          : 109.00
UG Cumulative GPA             :         3.470

** Current Course Information **
Spring 2027 Course  Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BMGT332 0101 3.00  REG A  04/01/26 04/01/26
ECON230 0102 3.00  REG A  04/01/26 04/01/26
SOCY105 0103 3.00  REG A  04/01/26 04/01/26
AMST101 0104 3.00  REG A  04/01/26 04/01/26
COMM200 0105 3.00  REG A  04/01/26 04/01/26

`,R1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Finance
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2024

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   3.00 MATH120   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: FINANCE
BMGT110  INTRODUCTION TO THE BUSI A- 3.00  3.00 11.10
ECON200  PRINCIPLES OF MICROECONO A  3.00  3.00 12.00 DSHS
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A- 3.00  3.00 11.10 FSOC
SOCY100  INTRODUCTION TO SOCIOLOG B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            15.00;   15.00;    53.10;    3.540

Spring 2024
MAJOR: FINANCE
BMGT220  PRINCIPLES OF ACCOUNTING A  3.00  3.00 12.00
ECON201  PRINCIPLES OF MACROECONO B+ 3.00  3.00 9.90  DSHS
BMGT230  BUSINESS STATISTICS      A- 3.00  3.00 11.10 FSAR
HIST200  INTERPRETING AMERICAN HI B  3.00  3.00 9.00  DSHS, DSHU
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            30.00;   30.00;    106.20;   3.540

UG Cumulative Credit          : 36.00
UG Cumulative GPA             :         3.540

** Current Course Information **
Fall 2024 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BMGT221 0101 3.00  REG A  04/01/26 04/01/26
BMGT301 0102 3.00  REG A  04/01/26 04/01/26
BSCI170 0103 3.00  REG A  04/01/26 04/01/26
BSCI171 0104 1.00  REG A  04/01/26 04/01/26
ENGL393 0105 3.00  REG A  04/01/26 04/01/26

`,T1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Finance
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2025

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   3.00 MATH120   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: FINANCE
BMGT110  INTRODUCTION TO THE BUSI A- 3.00  3.00 11.10
ECON200  PRINCIPLES OF MICROECONO A  3.00  3.00 12.00 DSHS
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A- 3.00  3.00 11.10 FSOC
SOCY100  INTRODUCTION TO SOCIOLOG B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            15.00;   15.00;    53.10;    3.540

Spring 2024
MAJOR: FINANCE
BMGT220  PRINCIPLES OF ACCOUNTING A  3.00  3.00 12.00
ECON201  PRINCIPLES OF MACROECONO B+ 3.00  3.00 9.90  DSHS
BMGT230  BUSINESS STATISTICS      A- 3.00  3.00 11.10 FSAR
HIST200  INTERPRETING AMERICAN HI B  3.00  3.00 9.00  DSHS, DSHU
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            30.00;   30.00;    106.20;   3.540
\f
Fall 2024
MAJOR: FINANCE
BMGT221  PRINCIPLES OF ACCOUNTING B+ 3.00  3.00 9.90
BMGT301  INFORMATION SYSTEMS AI A A- 3.00  3.00 11.10
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
ENGL393  TECHNICAL WRITING        A- 3.00  3.00 11.10 FSPW
Semester:     Attempted 13.00; Earned 13.00; QPoints 45.10; GPA 3.469
UG Cumulative:            43.00;   43.00;    151.30;   3.519

Spring 2025
MAJOR: FINANCE
BMGT340  BUSINESS FINANCE         A- 3.00  3.00 11.10
ECON305  INTERMEDIATE MACROECONOM B+ 4.00  4.00 13.20
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
BMGT364  MANAGING PEOPLE AND ORGA A- 3.00  3.00 11.10
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.30; GPA 3.394
UG Cumulative:            59.00;   59.00;    205.60;   3.485

UG Cumulative Credit          : 65.00
UG Cumulative GPA             :         3.485

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BMGT343 0101 3.00  REG A  04/01/26 04/01/26
BMGT310 0102 3.00  REG A  04/01/26 04/01/26
BMGT341 0103 3.00  REG A  04/01/26 04/01/26
GVPT170 0104 3.00  REG A  04/01/26 04/01/26
ENGL234 0105 3.00  REG A  04/01/26 04/01/26

`,p1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Finance
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2026

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   3.00 MATH120   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: FINANCE
BMGT110  INTRODUCTION TO THE BUSI A- 3.00  3.00 11.10
ECON200  PRINCIPLES OF MICROECONO A  3.00  3.00 12.00 DSHS
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A- 3.00  3.00 11.10 FSOC
SOCY100  INTRODUCTION TO SOCIOLOG B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            15.00;   15.00;    53.10;    3.540

Spring 2024
MAJOR: FINANCE
BMGT220  PRINCIPLES OF ACCOUNTING A  3.00  3.00 12.00
ECON201  PRINCIPLES OF MACROECONO B+ 3.00  3.00 9.90  DSHS
BMGT230  BUSINESS STATISTICS      A- 3.00  3.00 11.10 FSAR
HIST200  INTERPRETING AMERICAN HI B  3.00  3.00 9.00  DSHS, DSHU
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            30.00;   30.00;    106.20;   3.540
\f
Fall 2024
MAJOR: FINANCE
BMGT221  PRINCIPLES OF ACCOUNTING B+ 3.00  3.00 9.90
BMGT301  INFORMATION SYSTEMS AI A A- 3.00  3.00 11.10
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
ENGL393  TECHNICAL WRITING        A- 3.00  3.00 11.10 FSPW
Semester:     Attempted 13.00; Earned 13.00; QPoints 45.10; GPA 3.469
UG Cumulative:            43.00;   43.00;    151.30;   3.519

Spring 2025
MAJOR: FINANCE
BMGT340  BUSINESS FINANCE         A- 3.00  3.00 11.10
ECON305  INTERMEDIATE MACROECONOM B+ 4.00  4.00 13.20
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
BMGT364  MANAGING PEOPLE AND ORGA A- 3.00  3.00 11.10
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.30; GPA 3.394
UG Cumulative:            59.00;   59.00;    205.60;   3.485
\f
Fall 2025
MAJOR: FINANCE
BMGT343  INVESTMENTS              B+ 3.00  3.00 9.90
BMGT310  INTERMEDIATE ACCOUNTING  A- 3.00  3.00 11.10
BMGT341  FINANCIAL MARKETS        B  3.00  3.00 9.00
GVPT170  AMERICAN GOVERNMENT      A- 3.00  3.00 11.10 DSHS
ENGL234  AFRICAN-AMERICAN LITERAT B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            74.00;   74.00;    256.60;   3.468

Spring 2026
MAJOR: FINANCE
BMGT440  ADVANCED FINANCIAL MANAG B  3.00  3.00 9.00
BMGT347  QUANTITATIVE FINANCIAL A B+ 3.00  3.00 9.90
BMGT441  FIXED INCOME             A- 3.00  3.00 11.10
ECON230  APPLIED ECONOMIC STATIST B  3.00  3.00 9.00  FSAR
HIST111  THE MEDIEVAL WORLD       A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 50.10; GPA 3.340
UG Cumulative:            89.00;   89.00;    306.70;   3.446

UG Cumulative Credit          : 95.00
UG Cumulative GPA             :         3.446

** Current Course Information **
Fall 2026 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BMGT444 0101 3.00  REG A  04/01/26 04/01/26
BMGT446 0102 3.00  REG A  04/01/26 04/01/26
BMGT350 0103 3.00  REG A  04/01/26 04/01/26
SOCY230 0104 3.00  REG A  04/01/26 04/01/26
GVPT200 0105 3.00  REG A  04/01/26 04/01/26

`,P1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Finance
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Spring 2027

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   3.00 MATH120   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: FINANCE
BMGT110  INTRODUCTION TO THE BUSI A- 3.00  3.00 11.10
ECON200  PRINCIPLES OF MICROECONO A  3.00  3.00 12.00 DSHS
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A- 3.00  3.00 11.10 FSOC
SOCY100  INTRODUCTION TO SOCIOLOG B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            15.00;   15.00;    53.10;    3.540

Spring 2024
MAJOR: FINANCE
BMGT220  PRINCIPLES OF ACCOUNTING A  3.00  3.00 12.00
ECON201  PRINCIPLES OF MACROECONO B+ 3.00  3.00 9.90  DSHS
BMGT230  BUSINESS STATISTICS      A- 3.00  3.00 11.10 FSAR
HIST200  INTERPRETING AMERICAN HI B  3.00  3.00 9.00  DSHS, DSHU
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            30.00;   30.00;    106.20;   3.540
\f
Fall 2024
MAJOR: FINANCE
BMGT221  PRINCIPLES OF ACCOUNTING B+ 3.00  3.00 9.90
BMGT301  INFORMATION SYSTEMS AI A A- 3.00  3.00 11.10
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
ENGL393  TECHNICAL WRITING        A- 3.00  3.00 11.10 FSPW
Semester:     Attempted 13.00; Earned 13.00; QPoints 45.10; GPA 3.469
UG Cumulative:            43.00;   43.00;    151.30;   3.519

Spring 2025
MAJOR: FINANCE
BMGT340  BUSINESS FINANCE         A- 3.00  3.00 11.10
ECON305  INTERMEDIATE MACROECONOM B+ 4.00  4.00 13.20
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
BMGT364  MANAGING PEOPLE AND ORGA A- 3.00  3.00 11.10
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.30; GPA 3.394
UG Cumulative:            59.00;   59.00;    205.60;   3.485
\f
Fall 2025
MAJOR: FINANCE
BMGT343  INVESTMENTS              B+ 3.00  3.00 9.90
BMGT310  INTERMEDIATE ACCOUNTING  A- 3.00  3.00 11.10
BMGT341  FINANCIAL MARKETS        B  3.00  3.00 9.00
GVPT170  AMERICAN GOVERNMENT      A- 3.00  3.00 11.10 DSHS
ENGL234  AFRICAN-AMERICAN LITERAT B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            74.00;   74.00;    256.60;   3.468

Spring 2026
MAJOR: FINANCE
BMGT440  ADVANCED FINANCIAL MANAG B  3.00  3.00 9.00
BMGT347  QUANTITATIVE FINANCIAL A B+ 3.00  3.00 9.90
BMGT441  FIXED INCOME             A- 3.00  3.00 11.10
ECON230  APPLIED ECONOMIC STATIST B  3.00  3.00 9.00  FSAR
HIST111  THE MEDIEVAL WORLD       A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 50.10; GPA 3.340
UG Cumulative:            89.00;   89.00;    306.70;   3.446
\f
Fall 2026
MAJOR: FINANCE
BMGT444  FUTURES AND OPTIONS CONT B+ 3.00  3.00 9.90
BMGT446  INTERNATIONAL FINANCE    A- 3.00  3.00 11.10
BMGT350  MARKETING PRINCIPLES AND B  3.00  3.00 9.00
SOCY230  SOCIOLOGICAL SOCIAL PSYC A- 3.00  3.00 11.10 DSHS
GVPT200  INTERNATIONAL POLITICAL  B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            104.00;  104.00;   357.70;   3.439

UG Cumulative Credit          : 110.00
UG Cumulative GPA             :         3.439

** Current Course Information **
Spring 2027 Course  Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BMGT495 0101 3.00  REG A  04/01/26 04/01/26
ECON330 0102 3.00  REG A  04/01/26 04/01/26
AMST101 0103 3.00  REG A  04/01/26 04/01/26
SOCY105 0104 3.00  REG A  04/01/26 04/01/26
COMM200 0105 3.00  REG A  04/01/26 04/01/26

`,M1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Information Systems
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2024

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   3.00 MATH120   FSAR, FSMA
      PSYCHOLOGY/SCR 5        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: INFORMATION SYSTEMS
BMGT110  INTRODUCTION TO THE BUSI A  3.00  3.00 12.00
ENGL101  ACADEMIC WRITING         B+ 3.00  3.00 9.90  FSAW
ECON200  PRINCIPLES OF MICROECONO A- 3.00  3.00 11.10 DSHS
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.90; GPA 3.660
UG Cumulative:            15.00;   15.00;    54.90;    3.660

Spring 2024
MAJOR: INFORMATION SYSTEMS
BMGT220  PRINCIPLES OF ACCOUNTING A- 3.00  3.00 11.10
ECON201  PRINCIPLES OF MACROECONO B+ 3.00  3.00 9.90  DSHS
BMGT230  BUSINESS STATISTICS      A  3.00  3.00 12.00 FSAR
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
AMST101  INTRODUCTION AMERICAN ST B  3.00  3.00 9.00  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    106.80;   3.560

UG Cumulative Credit          : 36.00
UG Cumulative GPA             :         3.560

** Current Course Information **
Fall 2024 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BMGT221 0101 3.00  REG A  04/01/26 04/01/26
BMGT302 0102 3.00  REG A  04/01/26 04/01/26
BSCI170 0103 3.00  REG A  04/01/26 04/01/26
BSCI171 0104 1.00  REG A  04/01/26 04/01/26
ENGL393 0105 3.00  REG A  04/01/26 04/01/26

`,G1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Information Systems
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2025

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   3.00 MATH120   FSAR, FSMA
      PSYCHOLOGY/SCR 5        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: INFORMATION SYSTEMS
BMGT110  INTRODUCTION TO THE BUSI A  3.00  3.00 12.00
ENGL101  ACADEMIC WRITING         B+ 3.00  3.00 9.90  FSAW
ECON200  PRINCIPLES OF MICROECONO A- 3.00  3.00 11.10 DSHS
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.90; GPA 3.660
UG Cumulative:            15.00;   15.00;    54.90;    3.660

Spring 2024
MAJOR: INFORMATION SYSTEMS
BMGT220  PRINCIPLES OF ACCOUNTING A- 3.00  3.00 11.10
ECON201  PRINCIPLES OF MACROECONO B+ 3.00  3.00 9.90  DSHS
BMGT230  BUSINESS STATISTICS      A  3.00  3.00 12.00 FSAR
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
AMST101  INTRODUCTION AMERICAN ST B  3.00  3.00 9.00  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    106.80;   3.560
\f
Fall 2024
MAJOR: INFORMATION SYSTEMS
BMGT221  PRINCIPLES OF ACCOUNTING B+ 3.00  3.00 9.90
BMGT302  ESSENTIAL PROGRAMMING AN A  3.00  3.00 12.00
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 13.00; Earned 13.00; QPoints 47.50; GPA 3.654
UG Cumulative:            43.00;   43.00;    154.30;   3.588

Spring 2025
MAJOR: INFORMATION SYSTEMS
BMGT301  INFORMATION SYSTEMS AI A A- 3.00  3.00 11.10
BMGT403  SYSTEMS ANALYSIS AND DES B+ 3.00  3.00 9.90
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
SOCY241  INEQUALITY IN AMERICAN S A- 3.00  3.00 11.10 DSHS, DVUP
BMGT364  MANAGING PEOPLE AND ORGA B+ 3.00  3.00 9.90
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            58.00;   58.00;    205.30;   3.540

UG Cumulative Credit          : 64.00
UG Cumulative GPA             :         3.540

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BMGT402 0101 3.00  REG A  04/01/26 04/01/26
BMGT430 0102 3.00  REG A  04/01/26 04/01/26
BMGT340 0103 3.00  REG A  04/01/26 04/01/26
GVPT170 0104 3.00  REG A  04/01/26 04/01/26
SOCY105 0105 3.00  REG A  04/01/26 04/01/26

`,L1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Information Systems
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2026

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   3.00 MATH120   FSAR, FSMA
      PSYCHOLOGY/SCR 5        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: INFORMATION SYSTEMS
BMGT110  INTRODUCTION TO THE BUSI A  3.00  3.00 12.00
ENGL101  ACADEMIC WRITING         B+ 3.00  3.00 9.90  FSAW
ECON200  PRINCIPLES OF MICROECONO A- 3.00  3.00 11.10 DSHS
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.90; GPA 3.660
UG Cumulative:            15.00;   15.00;    54.90;    3.660

Spring 2024
MAJOR: INFORMATION SYSTEMS
BMGT220  PRINCIPLES OF ACCOUNTING A- 3.00  3.00 11.10
ECON201  PRINCIPLES OF MACROECONO B+ 3.00  3.00 9.90  DSHS
BMGT230  BUSINESS STATISTICS      A  3.00  3.00 12.00 FSAR
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
AMST101  INTRODUCTION AMERICAN ST B  3.00  3.00 9.00  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    106.80;   3.560
\f
Fall 2024
MAJOR: INFORMATION SYSTEMS
BMGT221  PRINCIPLES OF ACCOUNTING B+ 3.00  3.00 9.90
BMGT302  ESSENTIAL PROGRAMMING AN A  3.00  3.00 12.00
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 13.00; Earned 13.00; QPoints 47.50; GPA 3.654
UG Cumulative:            43.00;   43.00;    154.30;   3.588

Spring 2025
MAJOR: INFORMATION SYSTEMS
BMGT301  INFORMATION SYSTEMS AI A A- 3.00  3.00 11.10
BMGT403  SYSTEMS ANALYSIS AND DES B+ 3.00  3.00 9.90
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
SOCY241  INEQUALITY IN AMERICAN S A- 3.00  3.00 11.10 DSHS, DVUP
BMGT364  MANAGING PEOPLE AND ORGA B+ 3.00  3.00 9.90
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            58.00;   58.00;    205.30;   3.540
\f
Fall 2025
MAJOR: INFORMATION SYSTEMS
BMGT402  AI AUGMENTED DATABASE SY A- 3.00  3.00 11.10
BMGT430  DATA MODELING IN BUSINES B+ 3.00  3.00 9.90
BMGT340  BUSINESS FINANCE         B  3.00  3.00 9.00
GVPT170  AMERICAN GOVERNMENT      A- 3.00  3.00 11.10 DSHS
SOCY105  UNDERSTANDING CONTEMPORA B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            73.00;   73.00;    256.30;   3.511

Spring 2026
MAJOR: INFORMATION SYSTEMS
BMGT407  INFORMATION SYSTEMS PROJ A  3.00  3.00 12.00
BMGT401  BIG DATA AND AI INFRASTR B+ 3.00  3.00 9.90
BMGT350  MARKETING PRINCIPLES AND A- 3.00  3.00 11.10
ENGL234  AFRICAN-AMERICAN LITERAT B  3.00  3.00 9.00  DSHU, DVUP
HIST111  THE MEDIEVAL WORLD       B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            88.00;   88.00;    308.20;   3.502

UG Cumulative Credit          : 94.00
UG Cumulative GPA             :         3.502

** Current Course Information **
Fall 2026 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BMGT484 0101 3.00  REG A  04/01/26 04/01/26
BMGT495 0102 3.00  REG A  04/01/26 04/01/26
BMGT380 0103 3.00  REG A  04/01/26 04/01/26
SOCY230 0104 3.00  REG A  04/01/26 04/01/26
GVPT200 0105 3.00  REG A  04/01/26 04/01/26

`,U1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Information Systems
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Spring 2027

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   3.00 MATH120   FSAR, FSMA
      PSYCHOLOGY/SCR 5        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: INFORMATION SYSTEMS
BMGT110  INTRODUCTION TO THE BUSI A  3.00  3.00 12.00
ENGL101  ACADEMIC WRITING         B+ 3.00  3.00 9.90  FSAW
ECON200  PRINCIPLES OF MICROECONO A- 3.00  3.00 11.10 DSHS
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.90; GPA 3.660
UG Cumulative:            15.00;   15.00;    54.90;    3.660

Spring 2024
MAJOR: INFORMATION SYSTEMS
BMGT220  PRINCIPLES OF ACCOUNTING A- 3.00  3.00 11.10
ECON201  PRINCIPLES OF MACROECONO B+ 3.00  3.00 9.90  DSHS
BMGT230  BUSINESS STATISTICS      A  3.00  3.00 12.00 FSAR
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
AMST101  INTRODUCTION AMERICAN ST B  3.00  3.00 9.00  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    106.80;   3.560
\f
Fall 2024
MAJOR: INFORMATION SYSTEMS
BMGT221  PRINCIPLES OF ACCOUNTING B+ 3.00  3.00 9.90
BMGT302  ESSENTIAL PROGRAMMING AN A  3.00  3.00 12.00
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 13.00; Earned 13.00; QPoints 47.50; GPA 3.654
UG Cumulative:            43.00;   43.00;    154.30;   3.588

Spring 2025
MAJOR: INFORMATION SYSTEMS
BMGT301  INFORMATION SYSTEMS AI A A- 3.00  3.00 11.10
BMGT403  SYSTEMS ANALYSIS AND DES B+ 3.00  3.00 9.90
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
SOCY241  INEQUALITY IN AMERICAN S A- 3.00  3.00 11.10 DSHS, DVUP
BMGT364  MANAGING PEOPLE AND ORGA B+ 3.00  3.00 9.90
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            58.00;   58.00;    205.30;   3.540
\f
Fall 2025
MAJOR: INFORMATION SYSTEMS
BMGT402  AI AUGMENTED DATABASE SY A- 3.00  3.00 11.10
BMGT430  DATA MODELING IN BUSINES B+ 3.00  3.00 9.90
BMGT340  BUSINESS FINANCE         B  3.00  3.00 9.00
GVPT170  AMERICAN GOVERNMENT      A- 3.00  3.00 11.10 DSHS
SOCY105  UNDERSTANDING CONTEMPORA B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            73.00;   73.00;    256.30;   3.511

Spring 2026
MAJOR: INFORMATION SYSTEMS
BMGT407  INFORMATION SYSTEMS PROJ A  3.00  3.00 12.00
BMGT401  BIG DATA AND AI INFRASTR B+ 3.00  3.00 9.90
BMGT350  MARKETING PRINCIPLES AND A- 3.00  3.00 11.10
ENGL234  AFRICAN-AMERICAN LITERAT B  3.00  3.00 9.00  DSHU, DVUP
HIST111  THE MEDIEVAL WORLD       B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            88.00;   88.00;    308.20;   3.502
\f
Fall 2026
MAJOR: INFORMATION SYSTEMS
BMGT484  DIGITAL MARKETING        A- 3.00  3.00 11.10
BMGT495  STRATEGIC MANAGEMENT     B+ 3.00  3.00 9.90  DSSP
BMGT380  BUSINESS LAW I           A- 3.00  3.00 11.10
SOCY230  SOCIOLOGICAL SOCIAL PSYC B+ 3.00  3.00 9.90  DSHS
GVPT200  INTERNATIONAL POLITICAL  A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            103.00;  103.00;   361.30;   3.508

UG Cumulative Credit          : 109.00
UG Cumulative GPA             :         3.508

** Current Course Information **
Spring 2027 Course  Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BMGT485 0101 3.00  REG A  04/01/26 04/01/26
ECON230 0102 3.00  REG A  04/01/26 04/01/26
AMST205 0103 3.00  REG A  04/01/26 04/01/26
PSYC221 0104 3.00  REG A  04/01/26 04/01/26
COMM200 0105 3.00  REG A  04/01/26 04/01/26

`,D1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Psychology
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2024

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 5     P   3.00 ENGL101   FSAW
      CALCULUS AB/SCR 3       P   3.00 MATH120   FSAR, FSMA
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: PSYCHOLOGY
PSYC100  INTRODUCTION TO PSYCHOLO A  3.00  3.00 12.00 DSHS, DSNS
SOCY100  INTRODUCTION TO SOCIOLOG A- 3.00  3.00 11.10 DSHS
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.90; GPA 3.660
UG Cumulative:            15.00;   15.00;    54.90;    3.660

Spring 2024
MAJOR: PSYCHOLOGY
PSYC200  STATISTICAL METHODS IN P B+ 3.00  3.00 9.90  FSAR
PSYC221  SOCIAL PSYCHOLOGY        A- 3.00  3.00 11.10 DSHS, DSSP
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 13.00; Earned 13.00; QPoints 45.70; GPA 3.515
UG Cumulative:            28.00;   28.00;    100.60;   3.593

UG Cumulative Credit          : 34.00
UG Cumulative GPA             :         3.593

** Current Course Information **
Fall 2024 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
PSYC300 0101 4.00  REG A  04/01/26 04/01/26
SOCY241 0102 3.00  REG A  04/01/26 04/01/26
AOSC200 0103 3.00  REG A  04/01/26 04/01/26
ENES210 0104 3.00  REG A  04/01/26 04/01/26
AMST205 0105 3.00  REG A  04/01/26 04/01/26

`,h1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Psychology
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2025

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 5     P   3.00 ENGL101   FSAW
      CALCULUS AB/SCR 3       P   3.00 MATH120   FSAR, FSMA
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: PSYCHOLOGY
PSYC100  INTRODUCTION TO PSYCHOLO A  3.00  3.00 12.00 DSHS, DSNS
SOCY100  INTRODUCTION TO SOCIOLOG A- 3.00  3.00 11.10 DSHS
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.90; GPA 3.660
UG Cumulative:            15.00;   15.00;    54.90;    3.660

Spring 2024
MAJOR: PSYCHOLOGY
PSYC200  STATISTICAL METHODS IN P B+ 3.00  3.00 9.90  FSAR
PSYC221  SOCIAL PSYCHOLOGY        A- 3.00  3.00 11.10 DSHS, DSSP
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 13.00; Earned 13.00; QPoints 45.70; GPA 3.515
UG Cumulative:            28.00;   28.00;    100.60;   3.593
\f
Fall 2024
MAJOR: PSYCHOLOGY
PSYC300  RESEARCH METHODS IN PSYC B  4.00  4.00 12.00 DSSP
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
AOSC200  WEATHER AND CLIMATE      B+ 3.00  3.00 9.90  DSNS, SCIS
ENES210  ENTREPRENEURIAL OPPORTUN A- 3.00  3.00 11.10 DSSP, SCIS
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 16.00; Earned 16.00; QPoints 52.80; GPA 3.300
UG Cumulative:            44.00;   44.00;    153.40;   3.486

Spring 2025
MAJOR: PSYCHOLOGY
PSYC336  PSYCHOLOGY OF WOMEN      A- 3.00  3.00 11.10 DSHS
PSYC341  INTRODUCTION TO MEMORY A B+ 3.00  3.00 9.90
GVPT170  AMERICAN GOVERNMENT      B  3.00  3.00 9.00  DSHS
ECON200  PRINCIPLES OF MICROECONO B+ 3.00  3.00 9.90  DSHS
ENGL222  AMERICAN LITERATURES     A- 3.00  3.00 11.10 DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            59.00;   59.00;    204.40;   3.464

UG Cumulative Credit          : 65.00
UG Cumulative GPA             :         3.464

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
PSYC353 0101 3.00  REG A  04/01/26 04/01/26
PSYC355 0102 3.00  REG A  04/01/26 04/01/26
SOCY105 0103 3.00  REG A  04/01/26 04/01/26
HIST111 0104 3.00  REG A  04/01/26 04/01/26
GVPT200 0105 3.00  REG A  04/01/26 04/01/26

`,g1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Psychology
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2026

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 5     P   3.00 ENGL101   FSAW
      CALCULUS AB/SCR 3       P   3.00 MATH120   FSAR, FSMA
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: PSYCHOLOGY
PSYC100  INTRODUCTION TO PSYCHOLO A  3.00  3.00 12.00 DSHS, DSNS
SOCY100  INTRODUCTION TO SOCIOLOG A- 3.00  3.00 11.10 DSHS
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.90; GPA 3.660
UG Cumulative:            15.00;   15.00;    54.90;    3.660

Spring 2024
MAJOR: PSYCHOLOGY
PSYC200  STATISTICAL METHODS IN P B+ 3.00  3.00 9.90  FSAR
PSYC221  SOCIAL PSYCHOLOGY        A- 3.00  3.00 11.10 DSHS, DSSP
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 13.00; Earned 13.00; QPoints 45.70; GPA 3.515
UG Cumulative:            28.00;   28.00;    100.60;   3.593
\f
Fall 2024
MAJOR: PSYCHOLOGY
PSYC300  RESEARCH METHODS IN PSYC B  4.00  4.00 12.00 DSSP
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
AOSC200  WEATHER AND CLIMATE      B+ 3.00  3.00 9.90  DSNS, SCIS
ENES210  ENTREPRENEURIAL OPPORTUN A- 3.00  3.00 11.10 DSSP, SCIS
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 16.00; Earned 16.00; QPoints 52.80; GPA 3.300
UG Cumulative:            44.00;   44.00;    153.40;   3.486

Spring 2025
MAJOR: PSYCHOLOGY
PSYC336  PSYCHOLOGY OF WOMEN      A- 3.00  3.00 11.10 DSHS
PSYC341  INTRODUCTION TO MEMORY A B+ 3.00  3.00 9.90
GVPT170  AMERICAN GOVERNMENT      B  3.00  3.00 9.00  DSHS
ECON200  PRINCIPLES OF MICROECONO B+ 3.00  3.00 9.90  DSHS
ENGL222  AMERICAN LITERATURES     A- 3.00  3.00 11.10 DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            59.00;   59.00;    204.40;   3.464
\f
Fall 2025
MAJOR: PSYCHOLOGY
PSYC353  ADULT PSYCHOPATHOLOGY    A- 3.00  3.00 11.10
PSYC355  DEVELOPMENTAL PSYCHOLOGY B+ 3.00  3.00 9.90
SOCY105  UNDERSTANDING CONTEMPORA A- 3.00  3.00 11.10 DSHS
HIST111  THE MEDIEVAL WORLD       B+ 3.00  3.00 9.90  DSHS, DVUP
GVPT200  INTERNATIONAL POLITICAL  B  3.00  3.00 9.00  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            74.00;   74.00;    255.40;   3.451

Spring 2026
MAJOR: PSYCHOLOGY
PSYC361  SURVEY OF INDUSTRIAL AND B+ 3.00  3.00 9.90
PSYC432  COUNSELING PSYCHOLOGY TH A- 3.00  3.00 11.10
STAT100  ELEMENTARY STATISTICS AN B+ 3.00  3.00 9.90  FSAR, FSMA
AMST101  INTRODUCTION AMERICAN ST A- 3.00  3.00 11.10 DSHU, DVUP
ECON201  PRINCIPLES OF MACROECONO B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            89.00;   89.00;    306.40;   3.443

UG Cumulative Credit          : 95.00
UG Cumulative GPA             :         3.443

** Current Course Information **
Fall 2026 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
PSYC436 0101 3.00  REG A  04/01/26 04/01/26
PSYC404 0102 3.00  REG A  04/01/26 04/01/26
SOCY230 0103 3.00  REG A  04/01/26 04/01/26
COMM200 0104 3.00  REG A  04/01/26 04/01/26
BMGT110 0105 3.00  REG A  04/01/26 04/01/26

`,v1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Psychology
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Spring 2027

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 5     P   3.00 ENGL101   FSAW
      CALCULUS AB/SCR 3       P   3.00 MATH120   FSAR, FSMA
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: PSYCHOLOGY
PSYC100  INTRODUCTION TO PSYCHOLO A  3.00  3.00 12.00 DSHS, DSNS
SOCY100  INTRODUCTION TO SOCIOLOG A- 3.00  3.00 11.10 DSHS
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 54.90; GPA 3.660
UG Cumulative:            15.00;   15.00;    54.90;    3.660

Spring 2024
MAJOR: PSYCHOLOGY
PSYC200  STATISTICAL METHODS IN P B+ 3.00  3.00 9.90  FSAR
PSYC221  SOCIAL PSYCHOLOGY        A- 3.00  3.00 11.10 DSHS, DSSP
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 13.00; Earned 13.00; QPoints 45.70; GPA 3.515
UG Cumulative:            28.00;   28.00;    100.60;   3.593
\f
Fall 2024
MAJOR: PSYCHOLOGY
PSYC300  RESEARCH METHODS IN PSYC B  4.00  4.00 12.00 DSSP
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
AOSC200  WEATHER AND CLIMATE      B+ 3.00  3.00 9.90  DSNS, SCIS
ENES210  ENTREPRENEURIAL OPPORTUN A- 3.00  3.00 11.10 DSSP, SCIS
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 16.00; Earned 16.00; QPoints 52.80; GPA 3.300
UG Cumulative:            44.00;   44.00;    153.40;   3.486

Spring 2025
MAJOR: PSYCHOLOGY
PSYC336  PSYCHOLOGY OF WOMEN      A- 3.00  3.00 11.10 DSHS
PSYC341  INTRODUCTION TO MEMORY A B+ 3.00  3.00 9.90
GVPT170  AMERICAN GOVERNMENT      B  3.00  3.00 9.00  DSHS
ECON200  PRINCIPLES OF MICROECONO B+ 3.00  3.00 9.90  DSHS
ENGL222  AMERICAN LITERATURES     A- 3.00  3.00 11.10 DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            59.00;   59.00;    204.40;   3.464
\f
Fall 2025
MAJOR: PSYCHOLOGY
PSYC353  ADULT PSYCHOPATHOLOGY    A- 3.00  3.00 11.10
PSYC355  DEVELOPMENTAL PSYCHOLOGY B+ 3.00  3.00 9.90
SOCY105  UNDERSTANDING CONTEMPORA A- 3.00  3.00 11.10 DSHS
HIST111  THE MEDIEVAL WORLD       B+ 3.00  3.00 9.90  DSHS, DVUP
GVPT200  INTERNATIONAL POLITICAL  B  3.00  3.00 9.00  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            74.00;   74.00;    255.40;   3.451

Spring 2026
MAJOR: PSYCHOLOGY
PSYC361  SURVEY OF INDUSTRIAL AND B+ 3.00  3.00 9.90
PSYC432  COUNSELING PSYCHOLOGY TH A- 3.00  3.00 11.10
STAT100  ELEMENTARY STATISTICS AN B+ 3.00  3.00 9.90  FSAR, FSMA
AMST101  INTRODUCTION AMERICAN ST A- 3.00  3.00 11.10 DSHU, DVUP
ECON201  PRINCIPLES OF MACROECONO B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            89.00;   89.00;    306.40;   3.443
\f
Fall 2026
MAJOR: PSYCHOLOGY
PSYC436  INTRODUCTION TO CLINICAL A- 3.00  3.00 11.10
PSYC404  INTRODUCTION TO BEHAVIOR B+ 3.00  3.00 9.90
SOCY230  SOCIOLOGICAL SOCIAL PSYC A- 3.00  3.00 11.10 DSHS
COMM200  CRITICAL THINKING AND SP B+ 3.00  3.00 9.90  FSOC
BMGT110  INTRODUCTION TO THE BUSI A- 3.00  3.00 11.10
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            104.00;  104.00;   359.50;   3.457

UG Cumulative Credit          : 110.00
UG Cumulative GPA             :         3.457

** Current Course Information **
Spring 2027 Course  Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
PSYC413 0101 3.00  REG A  04/01/26 04/01/26
PSYC330 0102 3.00  REG A  04/01/26 04/01/26
HIST111 0103 3.00  REG A  04/01/26 04/01/26
ENGL234 0104 3.00  REG A  04/01/26 04/01/26
SOCY230 0105 3.00  REG A  04/01/26 04/01/26

`,H1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Criminology and Criminal Justice
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2024

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 4        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS100  INTRODUCTION TO CRIMINAL A- 3.00  3.00 11.10 DSHS
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
MATH120  ELEMENTARY CALCULUS I    B  3.00  3.00 9.00  FSAR, FSMA
HIST200  INTERPRETING AMERICAN HI A  3.00  3.00 12.00 DSHS, DSHU
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            15.00;   15.00;    53.10;    3.540

Spring 2024
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS105  INTRODUCTION TO CRIMINOL B+ 3.00  3.00 9.90  DSHS
GVPT170  AMERICAN GOVERNMENT      A- 3.00  3.00 11.10 DSHS
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
SOCY105  UNDERSTANDING CONTEMPORA B  3.00  3.00 9.00  DSHS
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    105.00;   3.500

UG Cumulative Credit          : 36.00
UG Cumulative GPA             :         3.500

** Current Course Information **
Fall 2024 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
CCJS200 0101 3.00  REG A  04/01/26 04/01/26
CCJS230 0102 3.00  REG A  04/01/26 04/01/26
STAT100 0103 3.00  REG A  04/01/26 04/01/26
BSCI170 0104 3.00  REG A  04/01/26 04/01/26
BSCI171 0105 1.00  REG A  04/01/26 04/01/26

`,y1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Criminology and Criminal Justice
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2025

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 4        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS100  INTRODUCTION TO CRIMINAL A- 3.00  3.00 11.10 DSHS
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
MATH120  ELEMENTARY CALCULUS I    B  3.00  3.00 9.00  FSAR, FSMA
HIST200  INTERPRETING AMERICAN HI A  3.00  3.00 12.00 DSHS, DSHU
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            15.00;   15.00;    53.10;    3.540

Spring 2024
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS105  INTRODUCTION TO CRIMINOL B+ 3.00  3.00 9.90  DSHS
GVPT170  AMERICAN GOVERNMENT      A- 3.00  3.00 11.10 DSHS
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
SOCY105  UNDERSTANDING CONTEMPORA B  3.00  3.00 9.00  DSHS
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    105.00;   3.500
\f
Fall 2024
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS200  STATISTICS FOR CRIMINOLO B  3.00  3.00 9.00  FSAR
CCJS230  CRIMINAL LAW IN ACTION   B+ 3.00  3.00 9.90
STAT100  ELEMENTARY STATISTICS AN A- 3.00  3.00 11.10 FSAR, FSMA
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
Semester:     Attempted 13.00; Earned 13.00; QPoints 42.70; GPA 3.285
UG Cumulative:            43.00;   43.00;    147.70;   3.435

Spring 2025
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS300  CRIMINOLOGICAL AND CRIMI A- 3.00  3.00 11.10 DSSP
PSYC221  SOCIAL PSYCHOLOGY        B+ 3.00  3.00 9.90  DSHS, DSSP
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
ECON200  PRINCIPLES OF MICROECONO B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            58.00;   58.00;    199.60;   3.441

UG Cumulative Credit          : 64.00
UG Cumulative GPA             :         3.441

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
CCJS320 0101 3.00  REG A  04/01/26 04/01/26
CCJS340 0102 3.00  REG A  04/01/26 04/01/26
GVPT200 0103 3.00  REG A  04/01/26 04/01/26
SOCY241 0104 3.00  REG A  04/01/26 04/01/26
HIST111 0105 3.00  REG A  04/01/26 04/01/26

`,F1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Criminology and Criminal Justice
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2026

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 4        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS100  INTRODUCTION TO CRIMINAL A- 3.00  3.00 11.10 DSHS
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
MATH120  ELEMENTARY CALCULUS I    B  3.00  3.00 9.00  FSAR, FSMA
HIST200  INTERPRETING AMERICAN HI A  3.00  3.00 12.00 DSHS, DSHU
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            15.00;   15.00;    53.10;    3.540

Spring 2024
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS105  INTRODUCTION TO CRIMINOL B+ 3.00  3.00 9.90  DSHS
GVPT170  AMERICAN GOVERNMENT      A- 3.00  3.00 11.10 DSHS
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
SOCY105  UNDERSTANDING CONTEMPORA B  3.00  3.00 9.00  DSHS
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    105.00;   3.500
\f
Fall 2024
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS200  STATISTICS FOR CRIMINOLO B  3.00  3.00 9.00  FSAR
CCJS230  CRIMINAL LAW IN ACTION   B+ 3.00  3.00 9.90
STAT100  ELEMENTARY STATISTICS AN A- 3.00  3.00 11.10 FSAR, FSMA
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
Semester:     Attempted 13.00; Earned 13.00; QPoints 42.70; GPA 3.285
UG Cumulative:            43.00;   43.00;    147.70;   3.435

Spring 2025
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS300  CRIMINOLOGICAL AND CRIMI A- 3.00  3.00 11.10 DSSP
PSYC221  SOCIAL PSYCHOLOGY        B+ 3.00  3.00 9.90  DSHS, DSSP
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
ECON200  PRINCIPLES OF MICROECONO B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            58.00;   58.00;    199.60;   3.441
\f
Fall 2025
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS320  INTRODUCTION TO CRIMINAL B+ 3.00  3.00 9.90
CCJS340  POLICING                 A- 3.00  3.00 11.10
GVPT200  INTERNATIONAL POLITICAL  B  3.00  3.00 9.00  DSHS, DVUP
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
HIST111  THE MEDIEVAL WORLD       A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            73.00;   73.00;    250.60;   3.433

Spring 2026
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS352  DRUGS AND CRIME          A- 3.00  3.00 11.10
CCJS360  VICTIMOLOGY              B  3.00  3.00 9.00
CCJS370  RACE CRIME AND CRIMINAL  B+ 3.00  3.00 9.90  DVUP
ENGL222  AMERICAN LITERATURES     A- 3.00  3.00 11.10 DSHU
SOCY230  SOCIOLOGICAL SOCIAL PSYC B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 50.10; GPA 3.340
UG Cumulative:            88.00;   88.00;    300.70;   3.417

UG Cumulative Credit          : 94.00
UG Cumulative GPA             :         3.417

** Current Course Information **
Fall 2026 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
CCJS310 0101 3.00  REG A  04/01/26 04/01/26
CCJS325 0102 3.00  REG A  04/01/26 04/01/26
CCJS345 0103 3.00  REG A  04/01/26 04/01/26
GVPT201 0104 3.00  REG A  04/01/26 04/01/26
COMM200 0105 3.00  REG A  04/01/26 04/01/26

`,B1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Criminology and Criminal Justice
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Spring 2027

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 4        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS100  INTRODUCTION TO CRIMINAL A- 3.00  3.00 11.10 DSHS
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
MATH120  ELEMENTARY CALCULUS I    B  3.00  3.00 9.00  FSAR, FSMA
HIST200  INTERPRETING AMERICAN HI A  3.00  3.00 12.00 DSHS, DSHU
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 53.10; GPA 3.540
UG Cumulative:            15.00;   15.00;    53.10;    3.540

Spring 2024
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS105  INTRODUCTION TO CRIMINOL B+ 3.00  3.00 9.90  DSHS
GVPT170  AMERICAN GOVERNMENT      A- 3.00  3.00 11.10 DSHS
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
SOCY105  UNDERSTANDING CONTEMPORA B  3.00  3.00 9.00  DSHS
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    105.00;   3.500
\f
Fall 2024
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS200  STATISTICS FOR CRIMINOLO B  3.00  3.00 9.00  FSAR
CCJS230  CRIMINAL LAW IN ACTION   B+ 3.00  3.00 9.90
STAT100  ELEMENTARY STATISTICS AN A- 3.00  3.00 11.10 FSAR, FSMA
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
Semester:     Attempted 13.00; Earned 13.00; QPoints 42.70; GPA 3.285
UG Cumulative:            43.00;   43.00;    147.70;   3.435

Spring 2025
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS300  CRIMINOLOGICAL AND CRIMI A- 3.00  3.00 11.10 DSSP
PSYC221  SOCIAL PSYCHOLOGY        B+ 3.00  3.00 9.90  DSHS, DSSP
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
ECON200  PRINCIPLES OF MICROECONO B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            58.00;   58.00;    199.60;   3.441
\f
Fall 2025
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS320  INTRODUCTION TO CRIMINAL B+ 3.00  3.00 9.90
CCJS340  POLICING                 A- 3.00  3.00 11.10
GVPT200  INTERNATIONAL POLITICAL  B  3.00  3.00 9.00  DSHS, DVUP
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
HIST111  THE MEDIEVAL WORLD       A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            73.00;   73.00;    250.60;   3.433

Spring 2026
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS352  DRUGS AND CRIME          A- 3.00  3.00 11.10
CCJS360  VICTIMOLOGY              B  3.00  3.00 9.00
CCJS370  RACE CRIME AND CRIMINAL  B+ 3.00  3.00 9.90  DVUP
ENGL222  AMERICAN LITERATURES     A- 3.00  3.00 11.10 DSHU
SOCY230  SOCIOLOGICAL SOCIAL PSYC B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 50.10; GPA 3.340
UG Cumulative:            88.00;   88.00;    300.70;   3.417
\f
Fall 2026
MAJOR: CRIMINOLOGY AND CRIMINAL JUSTICE
CCJS310  CRIMINAL INVESTIGATIONS  B+ 3.00  3.00 9.90
CCJS325  SLAVERY IN THE TWENTY FI A- 3.00  3.00 11.10 DSHS, SCIS
CCJS345  COURTS AND SENTENCING    B  3.00  3.00 9.00
GVPT201  SCOPE AND METHODS FOR PO B+ 3.00  3.00 9.90  DSSP
COMM200  CRITICAL THINKING AND SP A- 3.00  3.00 11.10 FSOC
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            103.00;  103.00;   351.70;   3.415

UG Cumulative Credit          : 109.00
UG Cumulative GPA             :         3.415

** Current Course Information **
Spring 2027 Course  Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
CCJS321 0101 3.00  REG A  04/01/26 04/01/26
CCJS330 0102 3.00  REG A  04/01/26 04/01/26
PSYC300 0103 4.00  REG A  04/01/26 04/01/26
AMST101 0104 3.00  REG A  04/01/26 04/01/26
SOCY105 0105 3.00  REG A  04/01/26 04/01/26

`,Y1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Economics
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2024

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 5       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: ECONOMICS
ECON200  PRINCIPLES OF MICROECONO A  3.00  3.00 12.00 DSHS
MATH141  CALCULUS II              B+ 4.00  4.00 13.20
HIST200  INTERPRETING AMERICAN HI B  3.00  3.00 9.00  DSHS, DSHU
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 16.00; Earned 16.00; QPoints 55.20; GPA 3.450
UG Cumulative:            16.00;   16.00;    55.20;    3.450

Spring 2024
MAJOR: ECONOMICS
ECON201  PRINCIPLES OF MACROECONO A- 3.00  3.00 11.10 DSHS
MATH240  INTRODUCTION TO LINEAR A B  4.00  4.00 12.00
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
GVPT170  AMERICAN GOVERNMENT      B  3.00  3.00 9.00  DSHS
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.00; GPA 3.375
UG Cumulative:            32.00;   32.00;    109.20;   3.413

UG Cumulative Credit          : 39.00
UG Cumulative GPA             :         3.413

** Current Course Information **
Fall 2024 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
ECON230 0101 3.00  REG A  04/01/26 04/01/26
MATH241 0102 4.00  REG A  04/01/26 04/01/26
BSCI170 0103 3.00  REG A  04/01/26 04/01/26
BSCI171 0104 1.00  REG A  04/01/26 04/01/26
ENGL393 0105 3.00  REG A  04/01/26 04/01/26

`,x1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Economics
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2025

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 5       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: ECONOMICS
ECON200  PRINCIPLES OF MICROECONO A  3.00  3.00 12.00 DSHS
MATH141  CALCULUS II              B+ 4.00  4.00 13.20
HIST200  INTERPRETING AMERICAN HI B  3.00  3.00 9.00  DSHS, DSHU
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 16.00; Earned 16.00; QPoints 55.20; GPA 3.450
UG Cumulative:            16.00;   16.00;    55.20;    3.450

Spring 2024
MAJOR: ECONOMICS
ECON201  PRINCIPLES OF MACROECONO A- 3.00  3.00 11.10 DSHS
MATH240  INTRODUCTION TO LINEAR A B  4.00  4.00 12.00
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
GVPT170  AMERICAN GOVERNMENT      B  3.00  3.00 9.00  DSHS
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.00; GPA 3.375
UG Cumulative:            32.00;   32.00;    109.20;   3.413
\f
Fall 2024
MAJOR: ECONOMICS
ECON230  APPLIED ECONOMIC STATIST B+ 3.00  3.00 9.90  FSAR
MATH241  CALCULUS III             B  4.00  4.00 12.00
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
ENGL393  TECHNICAL WRITING        A- 3.00  3.00 11.10 FSPW
Semester:     Attempted 14.00; Earned 14.00; QPoints 46.90; GPA 3.350
UG Cumulative:            46.00;   46.00;    156.10;   3.393

Spring 2025
MAJOR: ECONOMICS
ECON305  INTERMEDIATE MACROECONOM B  4.00  4.00 12.00
ECON306  INTERMEDIATE MICROECONOM B+ 4.00  4.00 13.20
STAT400  APPLIED PROBABILITY AND  A- 3.00  3.00 11.10
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
HIST111  THE MEDIEVAL WORLD       B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 17.00; Earned 17.00; QPoints 55.20; GPA 3.247
UG Cumulative:            63.00;   63.00;    211.30;   3.354

UG Cumulative Credit          : 70.00
UG Cumulative GPA             :         3.354

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
ECON300 0101 3.00  REG A  04/01/26 04/01/26
ECON317 0102 3.00  REG A  04/01/26 04/01/26
ECON321 0103 3.00  REG A  04/01/26 04/01/26
SOCY241 0104 3.00  REG A  04/01/26 04/01/26
ENGL222 0105 3.00  REG A  04/01/26 04/01/26

`,w1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Economics
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2026

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 5       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: ECONOMICS
ECON200  PRINCIPLES OF MICROECONO A  3.00  3.00 12.00 DSHS
MATH141  CALCULUS II              B+ 4.00  4.00 13.20
HIST200  INTERPRETING AMERICAN HI B  3.00  3.00 9.00  DSHS, DSHU
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 16.00; Earned 16.00; QPoints 55.20; GPA 3.450
UG Cumulative:            16.00;   16.00;    55.20;    3.450

Spring 2024
MAJOR: ECONOMICS
ECON201  PRINCIPLES OF MACROECONO A- 3.00  3.00 11.10 DSHS
MATH240  INTRODUCTION TO LINEAR A B  4.00  4.00 12.00
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
GVPT170  AMERICAN GOVERNMENT      B  3.00  3.00 9.00  DSHS
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.00; GPA 3.375
UG Cumulative:            32.00;   32.00;    109.20;   3.413
\f
Fall 2024
MAJOR: ECONOMICS
ECON230  APPLIED ECONOMIC STATIST B+ 3.00  3.00 9.90  FSAR
MATH241  CALCULUS III             B  4.00  4.00 12.00
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
ENGL393  TECHNICAL WRITING        A- 3.00  3.00 11.10 FSPW
Semester:     Attempted 14.00; Earned 14.00; QPoints 46.90; GPA 3.350
UG Cumulative:            46.00;   46.00;    156.10;   3.393

Spring 2025
MAJOR: ECONOMICS
ECON305  INTERMEDIATE MACROECONOM B  4.00  4.00 12.00
ECON306  INTERMEDIATE MICROECONOM B+ 4.00  4.00 13.20
STAT400  APPLIED PROBABILITY AND  A- 3.00  3.00 11.10
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
HIST111  THE MEDIEVAL WORLD       B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 17.00; Earned 17.00; QPoints 55.20; GPA 3.247
UG Cumulative:            63.00;   63.00;    211.30;   3.354
\f
Fall 2025
MAJOR: ECONOMICS
ECON300  METHODS AND TOOLS FOR EC A- 3.00  3.00 11.10
ECON317  GLOBAL ECONOMIC POLICIES B+ 3.00  3.00 9.90
ECON321  ECONOMIC STATISTICS      B  3.00  3.00 9.00
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
ENGL222  AMERICAN LITERATURES     A- 3.00  3.00 11.10 DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            78.00;   78.00;    262.30;   3.363

Spring 2026
MAJOR: ECONOMICS
ECON330  MONEY AND BANKING        B+ 3.00  3.00 9.90
ECON312  AMERICAN ECONOMIC HISTOR A- 3.00  3.00 11.10
ECON315  ECONOMIC DEVELOPMENT OF  B  3.00  3.00 9.00
PSYC100  INTRODUCTION TO PSYCHOLO A- 3.00  3.00 11.10 DSHS, DSNS
GVPT200  INTERNATIONAL POLITICAL  B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            93.00;   93.00;    313.30;   3.369

UG Cumulative Credit          : 100.00
UG Cumulative GPA             :         3.369

** Current Course Information **
Fall 2026 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
ECON327 0101 3.00  REG A  04/01/26 04/01/26
ECON326 0102 4.00  REG A  04/01/26 04/01/26
ECON401 0103 3.00  REG A  04/01/26 04/01/26
SOCY105 0104 3.00  REG A  04/01/26 04/01/26
COMM200 0105 3.00  REG A  04/01/26 04/01/26

`,k1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Economics
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Spring 2027

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 5       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: ECONOMICS
ECON200  PRINCIPLES OF MICROECONO A  3.00  3.00 12.00 DSHS
MATH141  CALCULUS II              B+ 4.00  4.00 13.20
HIST200  INTERPRETING AMERICAN HI B  3.00  3.00 9.00  DSHS, DSHU
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 16.00; Earned 16.00; QPoints 55.20; GPA 3.450
UG Cumulative:            16.00;   16.00;    55.20;    3.450

Spring 2024
MAJOR: ECONOMICS
ECON201  PRINCIPLES OF MACROECONO A- 3.00  3.00 11.10 DSHS
MATH240  INTRODUCTION TO LINEAR A B  4.00  4.00 12.00
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
GVPT170  AMERICAN GOVERNMENT      B  3.00  3.00 9.00  DSHS
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.00; GPA 3.375
UG Cumulative:            32.00;   32.00;    109.20;   3.413
\f
Fall 2024
MAJOR: ECONOMICS
ECON230  APPLIED ECONOMIC STATIST B+ 3.00  3.00 9.90  FSAR
MATH241  CALCULUS III             B  4.00  4.00 12.00
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
ENGL393  TECHNICAL WRITING        A- 3.00  3.00 11.10 FSPW
Semester:     Attempted 14.00; Earned 14.00; QPoints 46.90; GPA 3.350
UG Cumulative:            46.00;   46.00;    156.10;   3.393

Spring 2025
MAJOR: ECONOMICS
ECON305  INTERMEDIATE MACROECONOM B  4.00  4.00 12.00
ECON306  INTERMEDIATE MICROECONOM B+ 4.00  4.00 13.20
STAT400  APPLIED PROBABILITY AND  A- 3.00  3.00 11.10
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
HIST111  THE MEDIEVAL WORLD       B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 17.00; Earned 17.00; QPoints 55.20; GPA 3.247
UG Cumulative:            63.00;   63.00;    211.30;   3.354
\f
Fall 2025
MAJOR: ECONOMICS
ECON300  METHODS AND TOOLS FOR EC A- 3.00  3.00 11.10
ECON317  GLOBAL ECONOMIC POLICIES B+ 3.00  3.00 9.90
ECON321  ECONOMIC STATISTICS      B  3.00  3.00 9.00
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
ENGL222  AMERICAN LITERATURES     A- 3.00  3.00 11.10 DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            78.00;   78.00;    262.30;   3.363

Spring 2026
MAJOR: ECONOMICS
ECON330  MONEY AND BANKING        B+ 3.00  3.00 9.90
ECON312  AMERICAN ECONOMIC HISTOR A- 3.00  3.00 11.10
ECON315  ECONOMIC DEVELOPMENT OF  B  3.00  3.00 9.00
PSYC100  INTRODUCTION TO PSYCHOLO A- 3.00  3.00 11.10 DSHS, DSNS
GVPT200  INTERNATIONAL POLITICAL  B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            93.00;   93.00;    313.30;   3.369
\f
Fall 2026
MAJOR: ECONOMICS
ECON327  BEHAVIORAL ECONOMICS     B  3.00  3.00 9.00
ECON326  INTERMEDIATE MICROECONOM B+ 4.00  4.00 13.20
ECON401  CURRENT ISSUES IN AMERIC A- 3.00  3.00 11.10
SOCY105  UNDERSTANDING CONTEMPORA B+ 3.00  3.00 9.90  DSHS
COMM200  CRITICAL THINKING AND SP A- 3.00  3.00 11.10 FSOC
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.30; GPA 3.394
UG Cumulative:            109.00;  109.00;   367.60;   3.372

UG Cumulative Credit          : 116.00
UG Cumulative GPA             :         3.372

** Current Course Information **
Spring 2027 Course  Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
ECON386 0101 3.00  REG A  04/01/26 04/01/26
ECON396 0102 3.00  REG A  04/01/26 04/01/26
BMGT110 0103 3.00  REG A  04/01/26 04/01/26
AMST101 0104 3.00  REG A  04/01/26 04/01/26
SOCY230 0105 3.00  REG A  04/01/26 04/01/26

`,V1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Biological Sciences
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2024

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 5     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: BIOLOGICAL SCIENCES
BSCI170  PRINCIPLES OF MOLECULAR  A- 3.00  3.00 11.10 DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
CHEM131  CHEMISTRY I - FUNDAMENTA B+ 3.00  3.00 9.90  DSNL, DSNS
CHEM132  GENERAL CHEMISTRY I LABO A- 1.00  1.00 3.70
MATH141  CALCULUS II              B  4.00  4.00 12.00
Semester:     Attempted 12.00; Earned 12.00; QPoints 40.70; GPA 3.392
UG Cumulative:            12.00;   12.00;    40.70;    3.392

Spring 2024
MAJOR: BIOLOGICAL SCIENCES
BSCI160  PRINCIPLES OF ECOLOGY AN B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI161  PRINCIPLES OF ECOLOGY AN A- 1.00  1.00 3.70
CHEM231  ORGANIC CHEMISTRY I      B  3.00  3.00 9.00
CHEM232  ORGANIC CHEMISTRY LABORA B+ 1.00  1.00 3.30
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
Semester:     Attempted 11.00; Earned 11.00; QPoints 37.90; GPA 3.445
UG Cumulative:            23.00;   23.00;    78.60;    3.417

UG Cumulative Credit          : 30.00
UG Cumulative GPA             :         3.417

** Current Course Information **
Fall 2024 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BSCI201 0101 4.00  REG A  04/01/26 04/01/26
PHYS121 0102 4.00  REG A  04/01/26 04/01/26
ENGL393 0103 3.00  REG A  04/01/26 04/01/26
AMST203 0104 3.00  REG A  04/01/26 04/01/26
HIST200 0105 3.00  REG A  04/01/26 04/01/26

`,Q1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Biological Sciences
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2025

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 5     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: BIOLOGICAL SCIENCES
BSCI170  PRINCIPLES OF MOLECULAR  A- 3.00  3.00 11.10 DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
CHEM131  CHEMISTRY I - FUNDAMENTA B+ 3.00  3.00 9.90  DSNL, DSNS
CHEM132  GENERAL CHEMISTRY I LABO A- 1.00  1.00 3.70
MATH141  CALCULUS II              B  4.00  4.00 12.00
Semester:     Attempted 12.00; Earned 12.00; QPoints 40.70; GPA 3.392
UG Cumulative:            12.00;   12.00;    40.70;    3.392

Spring 2024
MAJOR: BIOLOGICAL SCIENCES
BSCI160  PRINCIPLES OF ECOLOGY AN B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI161  PRINCIPLES OF ECOLOGY AN A- 1.00  1.00 3.70
CHEM231  ORGANIC CHEMISTRY I      B  3.00  3.00 9.00
CHEM232  ORGANIC CHEMISTRY LABORA B+ 1.00  1.00 3.30
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
Semester:     Attempted 11.00; Earned 11.00; QPoints 37.90; GPA 3.445
UG Cumulative:            23.00;   23.00;    78.60;    3.417
\f
Fall 2024
MAJOR: BIOLOGICAL SCIENCES
BSCI201  HUMAN ANATOMY AND PHYSIO B+ 4.00  4.00 13.20 DSNL
PHYS121  FUNDAMENTALS OF PHYSICS  B  4.00  4.00 12.00 DSNL
ENGL393  TECHNICAL WRITING        A- 3.00  3.00 11.10 FSPW
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
Semester:     Attempted 17.00; Earned 17.00; QPoints 57.30; GPA 3.371
UG Cumulative:            40.00;   40.00;    135.90;   3.397

Spring 2025
MAJOR: BIOLOGICAL SCIENCES
BSCI202  HUMAN ANATOMY AND PHYSIO A- 4.00  4.00 14.80
PHYS122  FUNDAMENTALS OF PHYSICS  B+ 4.00  4.00 13.20 DSNL
STAT100  ELEMENTARY STATISTICS AN B  3.00  3.00 9.00  FSAR, FSMA
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 17.00; Earned 17.00; QPoints 58.00; GPA 3.412
UG Cumulative:            57.00;   57.00;    193.90;   3.402

UG Cumulative Credit          : 64.00
UG Cumulative GPA             :         3.402

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BSCI222 0101 4.00  REG A  04/01/26 04/01/26
BSCI207 0102 3.00  REG A  04/01/26 04/01/26
PSYC100 0103 3.00  REG A  04/01/26 04/01/26
GVPT170 0104 3.00  REG A  04/01/26 04/01/26
HIST111 0105 3.00  REG A  04/01/26 04/01/26

`,_1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Biological Sciences
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2026

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 5     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: BIOLOGICAL SCIENCES
BSCI170  PRINCIPLES OF MOLECULAR  A- 3.00  3.00 11.10 DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
CHEM131  CHEMISTRY I - FUNDAMENTA B+ 3.00  3.00 9.90  DSNL, DSNS
CHEM132  GENERAL CHEMISTRY I LABO A- 1.00  1.00 3.70
MATH141  CALCULUS II              B  4.00  4.00 12.00
Semester:     Attempted 12.00; Earned 12.00; QPoints 40.70; GPA 3.392
UG Cumulative:            12.00;   12.00;    40.70;    3.392

Spring 2024
MAJOR: BIOLOGICAL SCIENCES
BSCI160  PRINCIPLES OF ECOLOGY AN B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI161  PRINCIPLES OF ECOLOGY AN A- 1.00  1.00 3.70
CHEM231  ORGANIC CHEMISTRY I      B  3.00  3.00 9.00
CHEM232  ORGANIC CHEMISTRY LABORA B+ 1.00  1.00 3.30
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
Semester:     Attempted 11.00; Earned 11.00; QPoints 37.90; GPA 3.445
UG Cumulative:            23.00;   23.00;    78.60;    3.417
\f
Fall 2024
MAJOR: BIOLOGICAL SCIENCES
BSCI201  HUMAN ANATOMY AND PHYSIO B+ 4.00  4.00 13.20 DSNL
PHYS121  FUNDAMENTALS OF PHYSICS  B  4.00  4.00 12.00 DSNL
ENGL393  TECHNICAL WRITING        A- 3.00  3.00 11.10 FSPW
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
Semester:     Attempted 17.00; Earned 17.00; QPoints 57.30; GPA 3.371
UG Cumulative:            40.00;   40.00;    135.90;   3.397

Spring 2025
MAJOR: BIOLOGICAL SCIENCES
BSCI202  HUMAN ANATOMY AND PHYSIO A- 4.00  4.00 14.80
PHYS122  FUNDAMENTALS OF PHYSICS  B+ 4.00  4.00 13.20 DSNL
STAT100  ELEMENTARY STATISTICS AN B  3.00  3.00 9.00  FSAR, FSMA
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 17.00; Earned 17.00; QPoints 58.00; GPA 3.412
UG Cumulative:            57.00;   57.00;    193.90;   3.402
\f
Fall 2025
MAJOR: BIOLOGICAL SCIENCES
BSCI222  PRINCIPLES OF GENETICS   B+ 4.00  4.00 13.20
BSCI207  PRINCIPLES OF BIOLOGY II A- 3.00  3.00 11.10
PSYC100  INTRODUCTION TO PSYCHOLO A  3.00  3.00 12.00 DSHS, DSNS
GVPT170  AMERICAN GOVERNMENT      B  3.00  3.00 9.00  DSHS
HIST111  THE MEDIEVAL WORLD       B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 16.00; Earned 16.00; QPoints 55.20; GPA 3.450
UG Cumulative:            73.00;   73.00;    249.10;   3.412

Spring 2026
MAJOR: BIOLOGICAL SCIENCES
BSCI331  CELL BIOLOGY AND PHYSIOL B  3.00  3.00 9.00
BSCI353  CELLULAR AND MOLECULAR N B+ 3.00  3.00 9.90
BSCI363  THE BIOLOGY OF CONSERVAT A- 3.00  3.00 11.10
SOCY241  INEQUALITY IN AMERICAN S B  3.00  3.00 9.00  DSHS, DVUP
ENGL222  AMERICAN LITERATURES     B+ 3.00  3.00 9.90  DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 48.90; GPA 3.260
UG Cumulative:            88.00;   88.00;    298.00;   3.386

UG Cumulative Credit          : 95.00
UG Cumulative GPA             :         3.386

** Current Course Information **
Fall 2026 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BSCI361 0101 4.00  REG A  04/01/26 04/01/26
BSCI370 0102 3.00  REG A  04/01/26 04/01/26
BSCI333 0103 4.00  REG A  04/01/26 04/01/26
GVPT200 0104 3.00  REG A  04/01/26 04/01/26

`,j1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Biological Sciences
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Spring 2027

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 4       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 5     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: BIOLOGICAL SCIENCES
BSCI170  PRINCIPLES OF MOLECULAR  A- 3.00  3.00 11.10 DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
CHEM131  CHEMISTRY I - FUNDAMENTA B+ 3.00  3.00 9.90  DSNL, DSNS
CHEM132  GENERAL CHEMISTRY I LABO A- 1.00  1.00 3.70
MATH141  CALCULUS II              B  4.00  4.00 12.00
Semester:     Attempted 12.00; Earned 12.00; QPoints 40.70; GPA 3.392
UG Cumulative:            12.00;   12.00;    40.70;    3.392

Spring 2024
MAJOR: BIOLOGICAL SCIENCES
BSCI160  PRINCIPLES OF ECOLOGY AN B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI161  PRINCIPLES OF ECOLOGY AN A- 1.00  1.00 3.70
CHEM231  ORGANIC CHEMISTRY I      B  3.00  3.00 9.00
CHEM232  ORGANIC CHEMISTRY LABORA B+ 1.00  1.00 3.30
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
Semester:     Attempted 11.00; Earned 11.00; QPoints 37.90; GPA 3.445
UG Cumulative:            23.00;   23.00;    78.60;    3.417
\f
Fall 2024
MAJOR: BIOLOGICAL SCIENCES
BSCI201  HUMAN ANATOMY AND PHYSIO B+ 4.00  4.00 13.20 DSNL
PHYS121  FUNDAMENTALS OF PHYSICS  B  4.00  4.00 12.00 DSNL
ENGL393  TECHNICAL WRITING        A- 3.00  3.00 11.10 FSPW
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
Semester:     Attempted 17.00; Earned 17.00; QPoints 57.30; GPA 3.371
UG Cumulative:            40.00;   40.00;    135.90;   3.397

Spring 2025
MAJOR: BIOLOGICAL SCIENCES
BSCI202  HUMAN ANATOMY AND PHYSIO A- 4.00  4.00 14.80
PHYS122  FUNDAMENTALS OF PHYSICS  B+ 4.00  4.00 13.20 DSNL
STAT100  ELEMENTARY STATISTICS AN B  3.00  3.00 9.00  FSAR, FSMA
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 17.00; Earned 17.00; QPoints 58.00; GPA 3.412
UG Cumulative:            57.00;   57.00;    193.90;   3.402
\f
Fall 2025
MAJOR: BIOLOGICAL SCIENCES
BSCI222  PRINCIPLES OF GENETICS   B+ 4.00  4.00 13.20
BSCI207  PRINCIPLES OF BIOLOGY II A- 3.00  3.00 11.10
PSYC100  INTRODUCTION TO PSYCHOLO A  3.00  3.00 12.00 DSHS, DSNS
GVPT170  AMERICAN GOVERNMENT      B  3.00  3.00 9.00  DSHS
HIST111  THE MEDIEVAL WORLD       B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 16.00; Earned 16.00; QPoints 55.20; GPA 3.450
UG Cumulative:            73.00;   73.00;    249.10;   3.412

Spring 2026
MAJOR: BIOLOGICAL SCIENCES
BSCI331  CELL BIOLOGY AND PHYSIOL B  3.00  3.00 9.00
BSCI353  CELLULAR AND MOLECULAR N B+ 3.00  3.00 9.90
BSCI363  THE BIOLOGY OF CONSERVAT A- 3.00  3.00 11.10
SOCY241  INEQUALITY IN AMERICAN S B  3.00  3.00 9.00  DSHS, DVUP
ENGL222  AMERICAN LITERATURES     B+ 3.00  3.00 9.90  DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 48.90; GPA 3.260
UG Cumulative:            88.00;   88.00;    298.00;   3.386
\f
Fall 2026
MAJOR: BIOLOGICAL SCIENCES
BSCI361  PRINCIPLES OF ECOLOGY    B+ 4.00  4.00 13.20
BSCI370  PRINCIPLES OF EVOLUTION  A- 3.00  3.00 11.10
BSCI333  PRINCIPLES OF PALEONTOLO B  4.00  4.00 12.00
GVPT200  INTERNATIONAL POLITICAL  B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 14.00; Earned 14.00; QPoints 46.20; GPA 3.300
UG Cumulative:            102.00;  102.00;   344.20;   3.375

UG Cumulative Credit          : 109.00
UG Cumulative GPA             :         3.375

** Current Course Information **
Spring 2027 Course  Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
BSCI403 0101 3.00  REG A  04/01/26 04/01/26
BSCI366 0102 3.00  REG A  04/01/26 04/01/26
BSCI355 0103 3.00  REG A  04/01/26 04/01/26
COMM200 0104 3.00  REG A  04/01/26 04/01/26
AMST101 0105 3.00  REG A  04/01/26 04/01/26

`,J1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Government and Politics
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2024

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  US GOVERNMENT/SCR 5     P   3.00 GVPT170   DSHS
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: GOVERNMENT AND POLITICS
GVPT200  INTERNATIONAL POLITICAL  A- 3.00  3.00 11.10 DSHS, DVUP
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG B  3.00  3.00 9.00  DSHS
MATH120  ELEMENTARY CALCULUS I    B+ 3.00  3.00 9.90  FSAR, FSMA
AMST203  POPULAR CULTURE IN AMERI A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            15.00;   15.00;    51.90;    3.460

Spring 2024
MAJOR: GOVERNMENT AND POLITICS
GVPT241  THE STUDY OF POLITICAL P B+ 3.00  3.00 9.90  DSSP
GVPT273  INTRODUCTION TO ENVIRONM A- 3.00  3.00 11.10 DSSP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
ECON200  PRINCIPLES OF MICROECONO B  3.00  3.00 9.00  DSHS
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    103.80;   3.460

UG Cumulative Credit          : 36.00
UG Cumulative GPA             :         3.460

** Current Course Information **
Fall 2024 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
GVPT201 0101 3.00  REG A  04/01/26 04/01/26
GVPT280 0102 3.00  REG A  04/01/26 04/01/26
STAT100 0103 3.00  REG A  04/01/26 04/01/26
BSCI170 0104 3.00  REG A  04/01/26 04/01/26
BSCI171 0105 1.00  REG A  04/01/26 04/01/26

`,W1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Government and Politics
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2025

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  US GOVERNMENT/SCR 5     P   3.00 GVPT170   DSHS
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: GOVERNMENT AND POLITICS
GVPT200  INTERNATIONAL POLITICAL  A- 3.00  3.00 11.10 DSHS, DVUP
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG B  3.00  3.00 9.00  DSHS
MATH120  ELEMENTARY CALCULUS I    B+ 3.00  3.00 9.90  FSAR, FSMA
AMST203  POPULAR CULTURE IN AMERI A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            15.00;   15.00;    51.90;    3.460

Spring 2024
MAJOR: GOVERNMENT AND POLITICS
GVPT241  THE STUDY OF POLITICAL P B+ 3.00  3.00 9.90  DSSP
GVPT273  INTRODUCTION TO ENVIRONM A- 3.00  3.00 11.10 DSSP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
ECON200  PRINCIPLES OF MICROECONO B  3.00  3.00 9.00  DSHS
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    103.80;   3.460
\f
Fall 2024
MAJOR: GOVERNMENT AND POLITICS
GVPT201  SCOPE AND METHODS FOR PO B  3.00  3.00 9.00  DSSP
GVPT280  THE STUDY OF COMPARATIVE B+ 3.00  3.00 9.90
STAT100  ELEMENTARY STATISTICS AN A- 3.00  3.00 11.10 FSAR, FSMA
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
Semester:     Attempted 13.00; Earned 13.00; QPoints 42.70; GPA 3.285
UG Cumulative:            43.00;   43.00;    146.50;   3.407

Spring 2025
MAJOR: GOVERNMENT AND POLITICS
GVPT202  LAW OR POLITICS THE US S A- 3.00  3.00 11.10 DSHS, SCIS
GVPT217  MOCK TRIAL               B+ 3.00  3.00 9.90
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
ECON201  PRINCIPLES OF MACROECONO B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            58.00;   58.00;    198.40;   3.421

UG Cumulative Credit          : 64.00
UG Cumulative GPA             :         3.421

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
GVPT306 0101 3.00  REG A  04/01/26 04/01/26
GVPT354 0102 3.00  REG A  04/01/26 04/01/26
HIST111 0103 3.00  REG A  04/01/26 04/01/26
SOCY241 0104 3.00  REG A  04/01/26 04/01/26
PSYC100 0105 3.00  REG A  04/01/26 04/01/26

`,z1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Government and Politics
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2026

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  US GOVERNMENT/SCR 5     P   3.00 GVPT170   DSHS
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: GOVERNMENT AND POLITICS
GVPT200  INTERNATIONAL POLITICAL  A- 3.00  3.00 11.10 DSHS, DVUP
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG B  3.00  3.00 9.00  DSHS
MATH120  ELEMENTARY CALCULUS I    B+ 3.00  3.00 9.90  FSAR, FSMA
AMST203  POPULAR CULTURE IN AMERI A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            15.00;   15.00;    51.90;    3.460

Spring 2024
MAJOR: GOVERNMENT AND POLITICS
GVPT241  THE STUDY OF POLITICAL P B+ 3.00  3.00 9.90  DSSP
GVPT273  INTRODUCTION TO ENVIRONM A- 3.00  3.00 11.10 DSSP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
ECON200  PRINCIPLES OF MICROECONO B  3.00  3.00 9.00  DSHS
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    103.80;   3.460
\f
Fall 2024
MAJOR: GOVERNMENT AND POLITICS
GVPT201  SCOPE AND METHODS FOR PO B  3.00  3.00 9.00  DSSP
GVPT280  THE STUDY OF COMPARATIVE B+ 3.00  3.00 9.90
STAT100  ELEMENTARY STATISTICS AN A- 3.00  3.00 11.10 FSAR, FSMA
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
Semester:     Attempted 13.00; Earned 13.00; QPoints 42.70; GPA 3.285
UG Cumulative:            43.00;   43.00;    146.50;   3.407

Spring 2025
MAJOR: GOVERNMENT AND POLITICS
GVPT202  LAW OR POLITICS THE US S A- 3.00  3.00 11.10 DSHS, SCIS
GVPT217  MOCK TRIAL               B+ 3.00  3.00 9.90
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
ECON201  PRINCIPLES OF MACROECONO B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            58.00;   58.00;    198.40;   3.421
\f
Fall 2025
MAJOR: GOVERNMENT AND POLITICS
GVPT306  GLOBAL ENVIRONMENTAL POL B+ 3.00  3.00 9.90
GVPT354  INTERNATIONAL DEVELOPMEN A- 3.00  3.00 11.10
HIST111  THE MEDIEVAL WORLD       B  3.00  3.00 9.00  DSHS, DVUP
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
PSYC100  INTRODUCTION TO PSYCHOLO A- 3.00  3.00 11.10 DSHS, DSNS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            73.00;   73.00;    249.40;   3.416

Spring 2026
MAJOR: GOVERNMENT AND POLITICS
GVPT390  GAME THEORY              A- 3.00  3.00 11.10
GVPT404  POLITICAL ECONOMY OF FOR B  3.00  3.00 9.00
GVPT411  CONFLICT IN THE INTERNAT B+ 3.00  3.00 9.90
ENGL222  AMERICAN LITERATURES     A- 3.00  3.00 11.10 DSHU
SOCY105  UNDERSTANDING CONTEMPORA B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 50.10; GPA 3.340
UG Cumulative:            88.00;   88.00;    299.50;   3.403

UG Cumulative Credit          : 94.00
UG Cumulative GPA             :         3.403

** Current Course Information **
Fall 2026 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
GVPT410 0101 3.00  REG A  04/01/26 04/01/26
GVPT412 0102 3.00  REG A  04/01/26 04/01/26
GVPT356 0103 3.00  REG A  04/01/26 04/01/26
COMM200 0104 3.00  REG A  04/01/26 04/01/26
AMST101 0105 3.00  REG A  04/01/26 04/01/26

`,K1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Government and Politics
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Spring 2027

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  US GOVERNMENT/SCR 5     P   3.00 GVPT170   DSHS
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: GOVERNMENT AND POLITICS
GVPT200  INTERNATIONAL POLITICAL  A- 3.00  3.00 11.10 DSHS, DVUP
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG B  3.00  3.00 9.00  DSHS
MATH120  ELEMENTARY CALCULUS I    B+ 3.00  3.00 9.90  FSAR, FSMA
AMST203  POPULAR CULTURE IN AMERI A  3.00  3.00 12.00 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            15.00;   15.00;    51.90;    3.460

Spring 2024
MAJOR: GOVERNMENT AND POLITICS
GVPT241  THE STUDY OF POLITICAL P B+ 3.00  3.00 9.90  DSSP
GVPT273  INTRODUCTION TO ENVIRONM A- 3.00  3.00 11.10 DSSP
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
ECON200  PRINCIPLES OF MICROECONO B  3.00  3.00 9.00  DSHS
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            30.00;   30.00;    103.80;   3.460
\f
Fall 2024
MAJOR: GOVERNMENT AND POLITICS
GVPT201  SCOPE AND METHODS FOR PO B  3.00  3.00 9.00  DSSP
GVPT280  THE STUDY OF COMPARATIVE B+ 3.00  3.00 9.90
STAT100  ELEMENTARY STATISTICS AN A- 3.00  3.00 11.10 FSAR, FSMA
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
Semester:     Attempted 13.00; Earned 13.00; QPoints 42.70; GPA 3.285
UG Cumulative:            43.00;   43.00;    146.50;   3.407

Spring 2025
MAJOR: GOVERNMENT AND POLITICS
GVPT202  LAW OR POLITICS THE US S A- 3.00  3.00 11.10 DSHS, SCIS
GVPT217  MOCK TRIAL               B+ 3.00  3.00 9.90
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
ECON201  PRINCIPLES OF MACROECONO B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            58.00;   58.00;    198.40;   3.421
\f
Fall 2025
MAJOR: GOVERNMENT AND POLITICS
GVPT306  GLOBAL ENVIRONMENTAL POL B+ 3.00  3.00 9.90
GVPT354  INTERNATIONAL DEVELOPMEN A- 3.00  3.00 11.10
HIST111  THE MEDIEVAL WORLD       B  3.00  3.00 9.00  DSHS, DVUP
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
PSYC100  INTRODUCTION TO PSYCHOLO A- 3.00  3.00 11.10 DSHS, DSNS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            73.00;   73.00;    249.40;   3.416

Spring 2026
MAJOR: GOVERNMENT AND POLITICS
GVPT390  GAME THEORY              A- 3.00  3.00 11.10
GVPT404  POLITICAL ECONOMY OF FOR B  3.00  3.00 9.00
GVPT411  CONFLICT IN THE INTERNAT B+ 3.00  3.00 9.90
ENGL222  AMERICAN LITERATURES     A- 3.00  3.00 11.10 DSHU
SOCY105  UNDERSTANDING CONTEMPORA B  3.00  3.00 9.00  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 50.10; GPA 3.340
UG Cumulative:            88.00;   88.00;    299.50;   3.403
\f
Fall 2026
MAJOR: GOVERNMENT AND POLITICS
GVPT410  POLITICS OF NATIONALIST  B+ 3.00  3.00 9.90
GVPT412  NONVIOLENT RESISTANCE IN A- 3.00  3.00 11.10
GVPT356  CAPSTONE IN INTERNATIONA B  3.00  3.00 9.00  DSSP, DVCC
COMM200  CRITICAL THINKING AND SP B+ 3.00  3.00 9.90  FSOC
AMST101  INTRODUCTION AMERICAN ST A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            103.00;  103.00;   350.50;   3.403

UG Cumulative Credit          : 109.00
UG Cumulative GPA             :         3.403

** Current Course Information **
Spring 2027 Course  Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
GVPT413 0101 3.00  REG A  04/01/26 04/01/26
GVPT377 0102 3.00  REG A  04/01/26 04/01/26
GVPT221 0103 3.00  REG A  04/01/26 04/01/26
SOCY230 0104 3.00  REG A  04/01/26 04/01/26
HIST200 0105 3.00  REG A  04/01/26 04/01/26

`,$1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Mechanical Engineering
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2024

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 5       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: MECHANICAL ENGINEERING
ENES100  INTRODUCTION TO ENGINEER A- 3.00  3.00 11.10 DSSP
MATH141  CALCULUS II              B+ 4.00  4.00 13.20
CHEM135  GENERAL CHEMISTRY FOR EN B  3.00  3.00 9.00  DSNS
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.30; GPA 3.394
UG Cumulative:            16.00;   16.00;    54.30;    3.394

Spring 2024
MAJOR: MECHANICAL ENGINEERING
ENME202  COMPUTING FUNDAMENTALS F B+ 3.00  3.00 9.90
MATH241  CALCULUS III             B  4.00  4.00 12.00
PHYS161  GENERAL PHYSICS MECHANIC B+ 3.00  3.00 9.90  DSNS
COMM107  ORAL COMMUNICATION PRINC A- 3.00  3.00 11.10 FSOC
AMST205  AMERICAN MATERIAL CULTUR B  3.00  3.00 9.00  DSHU, DVUP
Semester:     Attempted 16.00; Earned 16.00; QPoints 51.90; GPA 3.244
UG Cumulative:            32.00;   32.00;    106.20;   3.319

UG Cumulative Credit          : 39.00
UG Cumulative GPA             :         3.319

** Current Course Information **
Fall 2024 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
ENME272 0101 2.00  REG A  04/01/26 04/01/26
MATH246 0102 3.00  REG A  04/01/26 04/01/26
PHYS260 0103 3.00  REG A  04/01/26 04/01/26
PHYS261 0104 1.00  REG A  04/01/26 04/01/26
ENGL393 0105 3.00  REG A  04/01/26 04/01/26

`,q1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Mechanical Engineering
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2025

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 5       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: MECHANICAL ENGINEERING
ENES100  INTRODUCTION TO ENGINEER A- 3.00  3.00 11.10 DSSP
MATH141  CALCULUS II              B+ 4.00  4.00 13.20
CHEM135  GENERAL CHEMISTRY FOR EN B  3.00  3.00 9.00  DSNS
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.30; GPA 3.394
UG Cumulative:            16.00;   16.00;    54.30;    3.394

Spring 2024
MAJOR: MECHANICAL ENGINEERING
ENME202  COMPUTING FUNDAMENTALS F B+ 3.00  3.00 9.90
MATH241  CALCULUS III             B  4.00  4.00 12.00
PHYS161  GENERAL PHYSICS MECHANIC B+ 3.00  3.00 9.90  DSNS
COMM107  ORAL COMMUNICATION PRINC A- 3.00  3.00 11.10 FSOC
AMST205  AMERICAN MATERIAL CULTUR B  3.00  3.00 9.00  DSHU, DVUP
Semester:     Attempted 16.00; Earned 16.00; QPoints 51.90; GPA 3.244
UG Cumulative:            32.00;   32.00;    106.20;   3.319
\f
Fall 2024
MAJOR: MECHANICAL ENGINEERING
ENME272  INTRODUCTION TO COMPUTER A- 2.00  2.00 7.40
MATH246  DIFFERENTIAL EQUATIONS F B  3.00  3.00 9.00
PHYS260  GENERAL PHYSICS ELECTRIC B+ 3.00  3.00 9.90  DSNL
PHYS261  GENERAL PHYSICS MECHANIC A- 1.00  1.00 3.70
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 12.00; Earned 12.00; QPoints 42.00; GPA 3.500
UG Cumulative:            44.00;   44.00;    148.20;   3.368

Spring 2025
MAJOR: MECHANICAL ENGINEERING
ENME331  FLUID MECHANICS          B  3.00  3.00 9.00
ENME350  ELECTRONICS AND INSTRUME B+ 3.00  3.00 9.90
ENES220  MECHANICS II             B  3.00  3.00 9.00
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
HIST111  THE MEDIEVAL WORLD       A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 48.90; GPA 3.260
UG Cumulative:            59.00;   59.00;    197.10;   3.341

UG Cumulative Credit          : 66.00
UG Cumulative GPA             :         3.341

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
ENME361 0101 3.00  REG A  04/01/26 04/01/26
ENME382 0102 3.00  REG A  04/01/26 04/01/26
ENME392 0103 3.00  REG A  04/01/26 04/01/26
GVPT170 0104 3.00  REG A  04/01/26 04/01/26
ENGL222 0105 3.00  REG A  04/01/26 04/01/26

`,X1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Mechanical Engineering
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2026

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 5       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: MECHANICAL ENGINEERING
ENES100  INTRODUCTION TO ENGINEER A- 3.00  3.00 11.10 DSSP
MATH141  CALCULUS II              B+ 4.00  4.00 13.20
CHEM135  GENERAL CHEMISTRY FOR EN B  3.00  3.00 9.00  DSNS
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.30; GPA 3.394
UG Cumulative:            16.00;   16.00;    54.30;    3.394

Spring 2024
MAJOR: MECHANICAL ENGINEERING
ENME202  COMPUTING FUNDAMENTALS F B+ 3.00  3.00 9.90
MATH241  CALCULUS III             B  4.00  4.00 12.00
PHYS161  GENERAL PHYSICS MECHANIC B+ 3.00  3.00 9.90  DSNS
COMM107  ORAL COMMUNICATION PRINC A- 3.00  3.00 11.10 FSOC
AMST205  AMERICAN MATERIAL CULTUR B  3.00  3.00 9.00  DSHU, DVUP
Semester:     Attempted 16.00; Earned 16.00; QPoints 51.90; GPA 3.244
UG Cumulative:            32.00;   32.00;    106.20;   3.319
\f
Fall 2024
MAJOR: MECHANICAL ENGINEERING
ENME272  INTRODUCTION TO COMPUTER A- 2.00  2.00 7.40
MATH246  DIFFERENTIAL EQUATIONS F B  3.00  3.00 9.00
PHYS260  GENERAL PHYSICS ELECTRIC B+ 3.00  3.00 9.90  DSNL
PHYS261  GENERAL PHYSICS MECHANIC A- 1.00  1.00 3.70
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 12.00; Earned 12.00; QPoints 42.00; GPA 3.500
UG Cumulative:            44.00;   44.00;    148.20;   3.368

Spring 2025
MAJOR: MECHANICAL ENGINEERING
ENME331  FLUID MECHANICS          B  3.00  3.00 9.00
ENME350  ELECTRONICS AND INSTRUME B+ 3.00  3.00 9.90
ENES220  MECHANICS II             B  3.00  3.00 9.00
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
HIST111  THE MEDIEVAL WORLD       A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 48.90; GPA 3.260
UG Cumulative:            59.00;   59.00;    197.10;   3.341
\f
Fall 2025
MAJOR: MECHANICAL ENGINEERING
ENME361  VIBRATION CONTROLS AND O B+ 3.00  3.00 9.90
ENME382  INTRODUCTION TO MATERIAL B  3.00  3.00 9.00
ENME392  STATISTICAL METHODS FOR  A- 3.00  3.00 11.10
GVPT170  AMERICAN GOVERNMENT      B+ 3.00  3.00 9.90  DSHS
ENGL222  AMERICAN LITERATURES     B  3.00  3.00 9.00  DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 48.90; GPA 3.260
UG Cumulative:            74.00;   74.00;    246.00;   3.324

Spring 2026
MAJOR: MECHANICAL ENGINEERING
ENME400  MACHINE DESIGN           A- 3.00  3.00 11.10
ENME423  MODERN CLIMATE CONTROL A B+ 3.00  3.00 9.90
ENME332  TRANSFER PROCESSES       B  3.00  3.00 9.00
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
PSYC100  INTRODUCTION TO PSYCHOLO A- 3.00  3.00 11.10 DSHS, DSNS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            89.00;   89.00;    297.00;   3.337

UG Cumulative Credit          : 96.00
UG Cumulative GPA             :         3.337

** Current Course Information **
Fall 2026 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
ENME425 0101 3.00  REG A  04/01/26 04/01/26
ENME408 0102 3.00  REG A  04/01/26 04/01/26
ENME416 0103 3.00  REG A  04/01/26 04/01/26
AMST101 0104 3.00  REG A  04/01/26 04/01/26

`,Z1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Mechanical Engineering
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Spring 2027

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  CALCULUS AB/SCR 5       P   4.00 MATH140   FSAR, FSMA
      ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
Acceptable UG Inst. Credits:      7.00
Total UG Credits Applicable:      7.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: MECHANICAL ENGINEERING
ENES100  INTRODUCTION TO ENGINEER A- 3.00  3.00 11.10 DSSP
MATH141  CALCULUS II              B+ 4.00  4.00 13.20
CHEM135  GENERAL CHEMISTRY FOR EN B  3.00  3.00 9.00  DSNS
HIST200  INTERPRETING AMERICAN HI A- 3.00  3.00 11.10 DSHS, DSHU
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.30; GPA 3.394
UG Cumulative:            16.00;   16.00;    54.30;    3.394

Spring 2024
MAJOR: MECHANICAL ENGINEERING
ENME202  COMPUTING FUNDAMENTALS F B+ 3.00  3.00 9.90
MATH241  CALCULUS III             B  4.00  4.00 12.00
PHYS161  GENERAL PHYSICS MECHANIC B+ 3.00  3.00 9.90  DSNS
COMM107  ORAL COMMUNICATION PRINC A- 3.00  3.00 11.10 FSOC
AMST205  AMERICAN MATERIAL CULTUR B  3.00  3.00 9.00  DSHU, DVUP
Semester:     Attempted 16.00; Earned 16.00; QPoints 51.90; GPA 3.244
UG Cumulative:            32.00;   32.00;    106.20;   3.319
\f
Fall 2024
MAJOR: MECHANICAL ENGINEERING
ENME272  INTRODUCTION TO COMPUTER A- 2.00  2.00 7.40
MATH246  DIFFERENTIAL EQUATIONS F B  3.00  3.00 9.00
PHYS260  GENERAL PHYSICS ELECTRIC B+ 3.00  3.00 9.90  DSNL
PHYS261  GENERAL PHYSICS MECHANIC A- 1.00  1.00 3.70
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
Semester:     Attempted 12.00; Earned 12.00; QPoints 42.00; GPA 3.500
UG Cumulative:            44.00;   44.00;    148.20;   3.368

Spring 2025
MAJOR: MECHANICAL ENGINEERING
ENME331  FLUID MECHANICS          B  3.00  3.00 9.00
ENME350  ELECTRONICS AND INSTRUME B+ 3.00  3.00 9.90
ENES220  MECHANICS II             B  3.00  3.00 9.00
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
HIST111  THE MEDIEVAL WORLD       A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 48.90; GPA 3.260
UG Cumulative:            59.00;   59.00;    197.10;   3.341
\f
Fall 2025
MAJOR: MECHANICAL ENGINEERING
ENME361  VIBRATION CONTROLS AND O B+ 3.00  3.00 9.90
ENME382  INTRODUCTION TO MATERIAL B  3.00  3.00 9.00
ENME392  STATISTICAL METHODS FOR  A- 3.00  3.00 11.10
GVPT170  AMERICAN GOVERNMENT      B+ 3.00  3.00 9.90  DSHS
ENGL222  AMERICAN LITERATURES     B  3.00  3.00 9.00  DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 48.90; GPA 3.260
UG Cumulative:            74.00;   74.00;    246.00;   3.324

Spring 2026
MAJOR: MECHANICAL ENGINEERING
ENME400  MACHINE DESIGN           A- 3.00  3.00 11.10
ENME423  MODERN CLIMATE CONTROL A B+ 3.00  3.00 9.90
ENME332  TRANSFER PROCESSES       B  3.00  3.00 9.00
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
PSYC100  INTRODUCTION TO PSYCHOLO A- 3.00  3.00 11.10 DSHS, DSNS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            89.00;   89.00;    297.00;   3.337
\f
Fall 2026
MAJOR: MECHANICAL ENGINEERING
ENME425  ENERGY CONVERSION SYSTEM B+ 3.00  3.00 9.90
ENME408  SELECTED TOPICS IN ENGIN A- 3.00  3.00 11.10
ENME416  ADDITIVE MANUFACTURING   B  3.00  3.00 9.00
AMST101  INTRODUCTION AMERICAN ST B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 12.00; Earned 12.00; QPoints 39.90; GPA 3.325
UG Cumulative:            101.00;  101.00;   336.90;   3.336

UG Cumulative Credit          : 108.00
UG Cumulative GPA             :         3.336

** Current Course Information **
Spring 2027 Course  Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
ENME401 0101 3.00  REG A  04/01/26 04/01/26
ENME405 0102 3.00  REG A  04/01/26 04/01/26
ENME422 0103 3.00  REG A  04/01/26 04/01/26
COMM200 0104 3.00  REG A  04/01/26 04/01/26
SOCY105 0105 3.00  REG A  04/01/26 04/01/26

`,b1=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Communication
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2024

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 5     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 4        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: COMMUNICATION
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
MATH120  ELEMENTARY CALCULUS I    B  3.00  3.00 9.00  FSAR, FSMA
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            15.00;   15.00;    51.90;    3.460

Spring 2024
MAJOR: COMMUNICATION
COMM200  CRITICAL THINKING AND SP A- 3.00  3.00 11.10 FSOC
COMM201  INTRODUCTION TO PUBLIC R B+ 3.00  3.00 9.90
GVPT170  AMERICAN GOVERNMENT      B  3.00  3.00 9.00  DSHS
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
SOCY105  UNDERSTANDING CONTEMPORA B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            30.00;   30.00;    102.90;   3.430

UG Cumulative Credit          : 36.00
UG Cumulative GPA             :         3.430

** Current Course Information **
Fall 2024 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
COMM230 0101 3.00  REG A  04/01/26 04/01/26
COMM250 0102 3.00  REG A  04/01/26 04/01/26
STAT100 0103 3.00  REG A  04/01/26 04/01/26
BSCI170 0104 3.00  REG A  04/01/26 04/01/26
BSCI171 0105 1.00  REG A  04/01/26 04/01/26

`,ed=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Communication
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2025

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 5     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 4        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: COMMUNICATION
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
MATH120  ELEMENTARY CALCULUS I    B  3.00  3.00 9.00  FSAR, FSMA
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            15.00;   15.00;    51.90;    3.460

Spring 2024
MAJOR: COMMUNICATION
COMM200  CRITICAL THINKING AND SP A- 3.00  3.00 11.10 FSOC
COMM201  INTRODUCTION TO PUBLIC R B+ 3.00  3.00 9.90
GVPT170  AMERICAN GOVERNMENT      B  3.00  3.00 9.00  DSHS
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
SOCY105  UNDERSTANDING CONTEMPORA B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            30.00;   30.00;    102.90;   3.430
\f
Fall 2024
MAJOR: COMMUNICATION
COMM230  ARGUMENTATION AND DEBATE B+ 3.00  3.00 9.90
COMM250  INTRODUCTION TO COMMUNIC A- 3.00  3.00 11.10
STAT100  ELEMENTARY STATISTICS AN B  3.00  3.00 9.00  FSAR, FSMA
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
Semester:     Attempted 13.00; Earned 13.00; QPoints 43.90; GPA 3.377
UG Cumulative:            43.00;   43.00;    146.80;   3.414

Spring 2025
MAJOR: COMMUNICATION
COMM301  RHETORICAL THEORIES      A- 3.00  3.00 11.10
COMM302  COMMUNICATION SCIENCE TH B+ 3.00  3.00 9.90
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
ECON200  PRINCIPLES OF MICROECONO B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            58.00;   58.00;    198.70;   3.426

UG Cumulative Credit          : 64.00
UG Cumulative GPA             :         3.426

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
COMM324 0101 3.00  REG A  04/01/26 04/01/26
COMM330 0102 3.00  REG A  04/01/26 04/01/26
COMM351 0103 3.00  REG A  04/01/26 04/01/26
PSYC221 0104 3.00  REG A  04/01/26 04/01/26
HIST111 0105 3.00  REG A  04/01/26 04/01/26

`,nd=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Communication
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2026

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 5     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 4        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: COMMUNICATION
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
MATH120  ELEMENTARY CALCULUS I    B  3.00  3.00 9.00  FSAR, FSMA
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            15.00;   15.00;    51.90;    3.460

Spring 2024
MAJOR: COMMUNICATION
COMM200  CRITICAL THINKING AND SP A- 3.00  3.00 11.10 FSOC
COMM201  INTRODUCTION TO PUBLIC R B+ 3.00  3.00 9.90
GVPT170  AMERICAN GOVERNMENT      B  3.00  3.00 9.00  DSHS
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
SOCY105  UNDERSTANDING CONTEMPORA B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            30.00;   30.00;    102.90;   3.430
\f
Fall 2024
MAJOR: COMMUNICATION
COMM230  ARGUMENTATION AND DEBATE B+ 3.00  3.00 9.90
COMM250  INTRODUCTION TO COMMUNIC A- 3.00  3.00 11.10
STAT100  ELEMENTARY STATISTICS AN B  3.00  3.00 9.00  FSAR, FSMA
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
Semester:     Attempted 13.00; Earned 13.00; QPoints 43.90; GPA 3.377
UG Cumulative:            43.00;   43.00;    146.80;   3.414

Spring 2025
MAJOR: COMMUNICATION
COMM301  RHETORICAL THEORIES      A- 3.00  3.00 11.10
COMM302  COMMUNICATION SCIENCE TH B+ 3.00  3.00 9.90
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
ECON200  PRINCIPLES OF MICROECONO B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            58.00;   58.00;    198.70;   3.426
\f
Fall 2025
MAJOR: COMMUNICATION
COMM324  COMMUNICATION AND GENDER B+ 3.00  3.00 9.90  DSHU, DVUP
COMM330  ARGUMENTATION AND PUBLIC A- 3.00  3.00 11.10
COMM351  PUBLIC RELATIONS TECHNIQ B  3.00  3.00 9.00
PSYC221  SOCIAL PSYCHOLOGY        B+ 3.00  3.00 9.90  DSHS, DSSP
HIST111  THE MEDIEVAL WORLD       A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            73.00;   73.00;    249.70;   3.421

Spring 2026
MAJOR: COMMUNICATION
COMM353  NEW MEDIA WRITING FOR PU A- 3.00  3.00 11.10
COMM311  PEER CONSULTING IN ORAL  B+ 3.00  3.00 9.90
COMM312  PEER MENTORING IN ORAL C B  3.00  3.00 9.00
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
ENGL222  AMERICAN LITERATURES     A- 3.00  3.00 11.10 DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            88.00;   88.00;    300.70;   3.417

UG Cumulative Credit          : 94.00
UG Cumulative GPA             :         3.417

** Current Course Information **
Fall 2026 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
COMM320 0101 3.00  REG A  04/01/26 04/01/26
COMM331 0102 3.00  REG A  04/01/26 04/01/26
COMM345 0103 3.00  REG A  04/01/26 04/01/26
GVPT200 0104 3.00  REG A  04/01/26 04/01/26
AMST101 0105 3.00  REG A  04/01/26 04/01/26

`,td=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Communication
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Spring 2027

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 5     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 4        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: COMMUNICATION
COMM107  ORAL COMMUNICATION PRINC A  3.00  3.00 12.00 FSOC
SOCY100  INTRODUCTION TO SOCIOLOG B+ 3.00  3.00 9.90  DSHS
MATH120  ELEMENTARY CALCULUS I    B  3.00  3.00 9.00  FSAR, FSMA
AMST203  POPULAR CULTURE IN AMERI A- 3.00  3.00 11.10 DSHU, DVUP
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            15.00;   15.00;    51.90;    3.460

Spring 2024
MAJOR: COMMUNICATION
COMM200  CRITICAL THINKING AND SP A- 3.00  3.00 11.10 FSOC
COMM201  INTRODUCTION TO PUBLIC R B+ 3.00  3.00 9.90
GVPT170  AMERICAN GOVERNMENT      B  3.00  3.00 9.00  DSHS
AMST205  AMERICAN MATERIAL CULTUR A- 3.00  3.00 11.10 DSHU, DVUP
SOCY105  UNDERSTANDING CONTEMPORA B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            30.00;   30.00;    102.90;   3.430
\f
Fall 2024
MAJOR: COMMUNICATION
COMM230  ARGUMENTATION AND DEBATE B+ 3.00  3.00 9.90
COMM250  INTRODUCTION TO COMMUNIC A- 3.00  3.00 11.10
STAT100  ELEMENTARY STATISTICS AN B  3.00  3.00 9.00  FSAR, FSMA
BSCI170  PRINCIPLES OF MOLECULAR  B+ 3.00  3.00 9.90  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A  1.00  1.00 4.00
Semester:     Attempted 13.00; Earned 13.00; QPoints 43.90; GPA 3.377
UG Cumulative:            43.00;   43.00;    146.80;   3.414

Spring 2025
MAJOR: COMMUNICATION
COMM301  RHETORICAL THEORIES      A- 3.00  3.00 11.10
COMM302  COMMUNICATION SCIENCE TH B+ 3.00  3.00 9.90
ENGL393  TECHNICAL WRITING        A  3.00  3.00 12.00 FSPW
AOSC200  WEATHER AND CLIMATE      B  3.00  3.00 9.00  DSNS, SCIS
ECON200  PRINCIPLES OF MICROECONO B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.90; GPA 3.460
UG Cumulative:            58.00;   58.00;    198.70;   3.426
\f
Fall 2025
MAJOR: COMMUNICATION
COMM324  COMMUNICATION AND GENDER B+ 3.00  3.00 9.90  DSHU, DVUP
COMM330  ARGUMENTATION AND PUBLIC A- 3.00  3.00 11.10
COMM351  PUBLIC RELATIONS TECHNIQ B  3.00  3.00 9.00
PSYC221  SOCIAL PSYCHOLOGY        B+ 3.00  3.00 9.90  DSHS, DSSP
HIST111  THE MEDIEVAL WORLD       A- 3.00  3.00 11.10 DSHS, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            73.00;   73.00;    249.70;   3.421

Spring 2026
MAJOR: COMMUNICATION
COMM353  NEW MEDIA WRITING FOR PU A- 3.00  3.00 11.10
COMM311  PEER CONSULTING IN ORAL  B+ 3.00  3.00 9.90
COMM312  PEER MENTORING IN ORAL C B  3.00  3.00 9.00
SOCY241  INEQUALITY IN AMERICAN S B+ 3.00  3.00 9.90  DSHS, DVUP
ENGL222  AMERICAN LITERATURES     A- 3.00  3.00 11.10 DSHU
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            88.00;   88.00;    300.70;   3.417
\f
Fall 2026
MAJOR: COMMUNICATION
COMM320  STRATEGIC COMMUNICATION  B+ 3.00  3.00 9.90
COMM331  NEWS WRITING AND REPORTI A- 3.00  3.00 11.10
COMM345  FOUNDATIONS OF PUBLIC DI B  3.00  3.00 9.00
GVPT200  INTERNATIONAL POLITICAL  B+ 3.00  3.00 9.90  DSHS, DVUP
AMST101  INTRODUCTION AMERICAN ST A- 3.00  3.00 11.10 DSHU, DVUP
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            103.00;  103.00;   351.70;   3.415

UG Cumulative Credit          : 109.00
UG Cumulative GPA             :         3.415

** Current Course Information **
Spring 2027 Course  Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
COMM303 0101 3.00  REG A  04/01/26 04/01/26
COMM304 0102 3.00  REG A  04/01/26 04/01/26
COMM305 0103 3.00  REG A  04/01/26 04/01/26
SOCY230 0104 3.00  REG A  04/01/26 04/01/26
COMM306 0105 3.00  REG A  04/01/26 04/01/26

`,rd=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Kinesiology
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2024

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 5        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: KINESIOLOGY
KNES200  INTRODUCTION TO KINESIOL A- 3.00  3.00 11.10
MATH120  ELEMENTARY CALCULUS I    B+ 3.00  3.00 9.90  FSAR, FSMA
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 13.00; Earned 13.00; QPoints 43.60; GPA 3.354
UG Cumulative:            13.00;   13.00;    43.60;    3.354

Spring 2024
MAJOR: KINESIOLOGY
KNES225  HOOP DREAMS BLACK MASCUL B+ 3.00  3.00 9.90  DSHS, SCIS
BSCI201  HUMAN ANATOMY AND PHYSIO B  4.00  4.00 12.00 DSNL
COMM107  ORAL COMMUNICATION PRINC A- 3.00  3.00 11.10 FSOC
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG A- 3.00  3.00 11.10 DSHS
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.00; GPA 3.375
UG Cumulative:            29.00;   29.00;    97.60;    3.366

UG Cumulative Credit          : 35.00
UG Cumulative GPA             :         3.366

** Current Course Information **
Fall 2024 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
KNES260 0101 3.00  REG A  04/01/26 04/01/26
BSCI202 0102 4.00  REG A  04/01/26 04/01/26
CHEM131 0103 3.00  REG A  04/01/26 04/01/26
CHEM132 0104 1.00  REG A  04/01/26 04/01/26
ENGL393 0105 3.00  REG A  04/01/26 04/01/26

`,id=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Kinesiology
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2025

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 5        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: KINESIOLOGY
KNES200  INTRODUCTION TO KINESIOL A- 3.00  3.00 11.10
MATH120  ELEMENTARY CALCULUS I    B+ 3.00  3.00 9.90  FSAR, FSMA
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 13.00; Earned 13.00; QPoints 43.60; GPA 3.354
UG Cumulative:            13.00;   13.00;    43.60;    3.354

Spring 2024
MAJOR: KINESIOLOGY
KNES225  HOOP DREAMS BLACK MASCUL B+ 3.00  3.00 9.90  DSHS, SCIS
BSCI201  HUMAN ANATOMY AND PHYSIO B  4.00  4.00 12.00 DSNL
COMM107  ORAL COMMUNICATION PRINC A- 3.00  3.00 11.10 FSOC
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG A- 3.00  3.00 11.10 DSHS
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.00; GPA 3.375
UG Cumulative:            29.00;   29.00;    97.60;    3.366
\f
Fall 2024
MAJOR: KINESIOLOGY
KNES260  SCIENCE OF PHYSICAL ACTI A- 3.00  3.00 11.10 DSNS, DSSP
BSCI202  HUMAN ANATOMY AND PHYSIO B+ 4.00  4.00 13.20
CHEM131  CHEMISTRY I - FUNDAMENTA B  3.00  3.00 9.00  DSNL, DSNS
CHEM132  GENERAL CHEMISTRY I LABO B+ 1.00  1.00 3.30
ENGL393  TECHNICAL WRITING        A- 3.00  3.00 11.10 FSPW
Semester:     Attempted 14.00; Earned 14.00; QPoints 47.70; GPA 3.407
UG Cumulative:            43.00;   43.00;    145.30;   3.379

Spring 2025
MAJOR: KINESIOLOGY
KNES285  HISTORY OF PHYSICAL CULT B+ 3.00  3.00 9.90  DSHU, DVUP
KNES286  EMPOWERING HEALTHY PHYSI A- 3.00  3.00 11.10 DSSP
STAT100  ELEMENTARY STATISTICS AN B  3.00  3.00 9.00  FSAR, FSMA
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
GVPT170  AMERICAN GOVERNMENT      A- 3.00  3.00 11.10 DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            58.00;   58.00;    196.30;   3.384

UG Cumulative Credit          : 64.00
UG Cumulative GPA             :         3.384

** Current Course Information **
Fall 2025 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
KNES300 0101 4.00  REG A  04/01/26 04/01/26
KNES320 0102 4.00  REG A  04/01/26 04/01/26
PSYC221 0103 3.00  REG A  04/01/26 04/01/26
HIST111 0104 3.00  REG A  04/01/26 04/01/26

`,ld=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Kinesiology
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Fall 2026

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 5        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: KINESIOLOGY
KNES200  INTRODUCTION TO KINESIOL A- 3.00  3.00 11.10
MATH120  ELEMENTARY CALCULUS I    B+ 3.00  3.00 9.90  FSAR, FSMA
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 13.00; Earned 13.00; QPoints 43.60; GPA 3.354
UG Cumulative:            13.00;   13.00;    43.60;    3.354

Spring 2024
MAJOR: KINESIOLOGY
KNES225  HOOP DREAMS BLACK MASCUL B+ 3.00  3.00 9.90  DSHS, SCIS
BSCI201  HUMAN ANATOMY AND PHYSIO B  4.00  4.00 12.00 DSNL
COMM107  ORAL COMMUNICATION PRINC A- 3.00  3.00 11.10 FSOC
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG A- 3.00  3.00 11.10 DSHS
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.00; GPA 3.375
UG Cumulative:            29.00;   29.00;    97.60;    3.366
\f
Fall 2024
MAJOR: KINESIOLOGY
KNES260  SCIENCE OF PHYSICAL ACTI A- 3.00  3.00 11.10 DSNS, DSSP
BSCI202  HUMAN ANATOMY AND PHYSIO B+ 4.00  4.00 13.20
CHEM131  CHEMISTRY I - FUNDAMENTA B  3.00  3.00 9.00  DSNL, DSNS
CHEM132  GENERAL CHEMISTRY I LABO B+ 1.00  1.00 3.30
ENGL393  TECHNICAL WRITING        A- 3.00  3.00 11.10 FSPW
Semester:     Attempted 14.00; Earned 14.00; QPoints 47.70; GPA 3.407
UG Cumulative:            43.00;   43.00;    145.30;   3.379

Spring 2025
MAJOR: KINESIOLOGY
KNES285  HISTORY OF PHYSICAL CULT B+ 3.00  3.00 9.90  DSHU, DVUP
KNES286  EMPOWERING HEALTHY PHYSI A- 3.00  3.00 11.10 DSSP
STAT100  ELEMENTARY STATISTICS AN B  3.00  3.00 9.00  FSAR, FSMA
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
GVPT170  AMERICAN GOVERNMENT      A- 3.00  3.00 11.10 DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            58.00;   58.00;    196.30;   3.384
\f
Fall 2025
MAJOR: KINESIOLOGY
KNES300  BIOMECHANICS OF HUMAN MO B  4.00  4.00 12.00
KNES320  PHYSIOLOGICAL BASIS OF P B+ 4.00  4.00 13.20
PSYC221  SOCIAL PSYCHOLOGY        A- 3.00  3.00 11.10 DSHS, DSSP
HIST111  THE MEDIEVAL WORLD       B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 14.00; Earned 14.00; QPoints 46.20; GPA 3.300
UG Cumulative:            72.00;   72.00;    242.50;   3.368

Spring 2026
MAJOR: KINESIOLOGY
KNES350  THE PSYCHOLOGY OF SPORTS A- 3.00  3.00 11.10 DSHS
KNES360  PHYSIOLOGY OF EXERCISE   B  4.00  4.00 12.00
KNES355  SPORT MANAGEMENT         B+ 3.00  3.00 9.90
SOCY241  INEQUALITY IN AMERICAN S B  3.00  3.00 9.00  DSHS, DVUP
ENGL222  AMERICAN LITERATURES     A- 3.00  3.00 11.10 DSHU
Semester:     Attempted 16.00; Earned 16.00; QPoints 53.10; GPA 3.319
UG Cumulative:            88.00;   88.00;    295.60;   3.359

UG Cumulative Credit          : 94.00
UG Cumulative GPA             :         3.359

** Current Course Information **
Fall 2026 Course    Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
KNES370 0101 3.00  REG A  04/01/26 04/01/26
KNES385 0102 4.00  REG A  04/01/26 04/01/26
KNES386 0103 3.00  REG A  04/01/26 04/01/26
SOCY105 0104 3.00  REG A  04/01/26 04/01/26

`,od=`                    UNIVERSITY OF MARYLAND
                        COLLEGE PARK
                    Office of the Registrar
                    UNOFFICIAL TRANSCRIPT
                  FOR ADVISING PURPOSES ONLY

Terrapin, Sample T
E-Mail: sample@terpmail.umd.edu
Major: Kinesiology
Undergraduate Degree Seeking
GenEd Program                           Current Status: Registered Spring 2027

Transcripts received from the following institutions:
Advanced Placement Exam       on 08/15/23

** Transfer Credit Information **            ** Equivalences **
Advanced Placement Exam
2308  ENG LANG/COMP/SCR 4     P   3.00 ENGL101   FSAW
      PSYCHOLOGY/SCR 5        P   3.00 PSYC100   DSHS, DSNS
Acceptable UG Inst. Credits:      6.00
Total UG Credits Applicable:      6.00

Historic Course Information is listed in the order:
Course, Title, Grade, Credits Attempted, Earned and Quality Points

Fall 2023
MAJOR: KINESIOLOGY
KNES200  INTRODUCTION TO KINESIOL A- 3.00  3.00 11.10
MATH120  ELEMENTARY CALCULUS I    B+ 3.00  3.00 9.90  FSAR, FSMA
BSCI170  PRINCIPLES OF MOLECULAR  B  3.00  3.00 9.00  DSNL, DSNS
BSCI171  PRINCIPLES OF MOLECULAR  A- 1.00  1.00 3.70
AMST203  POPULAR CULTURE IN AMERI B+ 3.00  3.00 9.90  DSHU, DVUP
Semester:     Attempted 13.00; Earned 13.00; QPoints 43.60; GPA 3.354
UG Cumulative:            13.00;   13.00;    43.60;    3.354

Spring 2024
MAJOR: KINESIOLOGY
KNES225  HOOP DREAMS BLACK MASCUL B+ 3.00  3.00 9.90  DSHS, SCIS
BSCI201  HUMAN ANATOMY AND PHYSIO B  4.00  4.00 12.00 DSNL
COMM107  ORAL COMMUNICATION PRINC A- 3.00  3.00 11.10 FSOC
HIST200  INTERPRETING AMERICAN HI B+ 3.00  3.00 9.90  DSHS, DSHU
SOCY100  INTRODUCTION TO SOCIOLOG A- 3.00  3.00 11.10 DSHS
Semester:     Attempted 16.00; Earned 16.00; QPoints 54.00; GPA 3.375
UG Cumulative:            29.00;   29.00;    97.60;    3.366
\f
Fall 2024
MAJOR: KINESIOLOGY
KNES260  SCIENCE OF PHYSICAL ACTI A- 3.00  3.00 11.10 DSNS, DSSP
BSCI202  HUMAN ANATOMY AND PHYSIO B+ 4.00  4.00 13.20
CHEM131  CHEMISTRY I - FUNDAMENTA B  3.00  3.00 9.00  DSNL, DSNS
CHEM132  GENERAL CHEMISTRY I LABO B+ 1.00  1.00 3.30
ENGL393  TECHNICAL WRITING        A- 3.00  3.00 11.10 FSPW
Semester:     Attempted 14.00; Earned 14.00; QPoints 47.70; GPA 3.407
UG Cumulative:            43.00;   43.00;    145.30;   3.379

Spring 2025
MAJOR: KINESIOLOGY
KNES285  HISTORY OF PHYSICAL CULT B+ 3.00  3.00 9.90  DSHU, DVUP
KNES286  EMPOWERING HEALTHY PHYSI A- 3.00  3.00 11.10 DSSP
STAT100  ELEMENTARY STATISTICS AN B  3.00  3.00 9.00  FSAR, FSMA
AMST205  AMERICAN MATERIAL CULTUR B+ 3.00  3.00 9.90  DSHU, DVUP
GVPT170  AMERICAN GOVERNMENT      A- 3.00  3.00 11.10 DSHS
Semester:     Attempted 15.00; Earned 15.00; QPoints 51.00; GPA 3.400
UG Cumulative:            58.00;   58.00;    196.30;   3.384
\f
Fall 2025
MAJOR: KINESIOLOGY
KNES300  BIOMECHANICS OF HUMAN MO B  4.00  4.00 12.00
KNES320  PHYSIOLOGICAL BASIS OF P B+ 4.00  4.00 13.20
PSYC221  SOCIAL PSYCHOLOGY        A- 3.00  3.00 11.10 DSHS, DSSP
HIST111  THE MEDIEVAL WORLD       B+ 3.00  3.00 9.90  DSHS, DVUP
Semester:     Attempted 14.00; Earned 14.00; QPoints 46.20; GPA 3.300
UG Cumulative:            72.00;   72.00;    242.50;   3.368

Spring 2026
MAJOR: KINESIOLOGY
KNES350  THE PSYCHOLOGY OF SPORTS A- 3.00  3.00 11.10 DSHS
KNES360  PHYSIOLOGY OF EXERCISE   B  4.00  4.00 12.00
KNES355  SPORT MANAGEMENT         B+ 3.00  3.00 9.90
SOCY241  INEQUALITY IN AMERICAN S B  3.00  3.00 9.00  DSHS, DVUP
ENGL222  AMERICAN LITERATURES     A- 3.00  3.00 11.10 DSHU
Semester:     Attempted 16.00; Earned 16.00; QPoints 53.10; GPA 3.319
UG Cumulative:            88.00;   88.00;    295.60;   3.359
\f
Fall 2026
MAJOR: KINESIOLOGY
KNES370  MOTOR DEVELOPMENT        B+ 3.00  3.00 9.90
KNES385  MOTOR CONTROL AND LEARNI A- 4.00  4.00 14.80
KNES386  SERVICE LEARNING IN KINE B  3.00  3.00 9.00
SOCY105  UNDERSTANDING CONTEMPORA B+ 3.00  3.00 9.90  DSHS
Semester:     Attempted 13.00; Earned 13.00; QPoints 43.60; GPA 3.354
UG Cumulative:            101.00;  101.00;   339.20;   3.358

UG Cumulative Credit          : 107.00
UG Cumulative GPA             :         3.358

** Current Course Information **
Spring 2027 Course  Sec Credits Grd/ Drop         Add       Drop      Modified GenEd
                    Meth /Add Date                          Date      Date
======== ==== ======= ==== ==== ======== ======== ======== =============
KNES305 0101 3.00  REG A  04/01/26 04/01/26
KNES306 0102 3.00  REG A  04/01/26 04/01/26
KNES340 0103 3.00  REG A  04/01/26 04/01/26
COMM200 0104 3.00  REG A  04/01/26 04/01/26
AMST101 0105 3.00  REG A  04/01/26 04/01/26

`,Kn=[{slug:"information-science",name:"Information Science",short:"InfoSci",hasRequirements:!0},{slug:"computer-science",name:"Computer Science",short:"CS",hasRequirements:!0},{slug:"management",name:"Management",short:"Mgmt",hasRequirements:!0},{slug:"finance",name:"Finance",short:"Finance",hasRequirements:!0},{slug:"information-systems",name:"Information Systems",short:"Info Sys",hasRequirements:!0},{slug:"psychology",name:"Psychology",short:"Psych",hasRequirements:!1},{slug:"criminology",name:"Criminology and Criminal Justice",short:"CCJS",hasRequirements:!1},{slug:"economics",name:"Economics",short:"Econ",hasRequirements:!1},{slug:"biology",name:"Biological Sciences",short:"Biology",hasRequirements:!1},{slug:"government",name:"Government and Politics",short:"GVPT",hasRequirements:!1},{slug:"mechanical-engineering",name:"Mechanical Engineering",short:"Mech E",hasRequirements:!1},{slug:"communication",name:"Communication",short:"Comm",hasRequirements:!1},{slug:"kinesiology",name:"Kinesiology",short:"Kines",hasRequirements:!1}],ft=[{slug:"freshman",label:"Freshman"},{slug:"sophomore",label:"Sophomore"},{slug:"junior",label:"Junior"},{slug:"senior",label:"Senior"}],au=[{id:"sample-information-science-freshman",major:"information-science",year:"freshman",text:u1},{id:"sample-information-science-sophomore",major:"information-science",year:"sophomore",text:S1},{id:"sample-information-science-junior",major:"information-science",year:"junior",text:A1},{id:"sample-information-science-senior",major:"information-science",year:"senior",text:d1},{id:"sample-computer-science-freshman",major:"computer-science",year:"freshman",text:C1},{id:"sample-computer-science-sophomore",major:"computer-science",year:"sophomore",text:E1},{id:"sample-computer-science-junior",major:"computer-science",year:"junior",text:I1},{id:"sample-computer-science-senior",major:"computer-science",year:"senior",text:c1},{id:"sample-management-freshman",major:"management",year:"freshman",text:N1},{id:"sample-management-sophomore",major:"management",year:"sophomore",text:O1},{id:"sample-management-junior",major:"management",year:"junior",text:m1},{id:"sample-management-senior",major:"management",year:"senior",text:f1},{id:"sample-finance-freshman",major:"finance",year:"freshman",text:R1},{id:"sample-finance-sophomore",major:"finance",year:"sophomore",text:T1},{id:"sample-finance-junior",major:"finance",year:"junior",text:p1},{id:"sample-finance-senior",major:"finance",year:"senior",text:P1},{id:"sample-information-systems-freshman",major:"information-systems",year:"freshman",text:M1},{id:"sample-information-systems-sophomore",major:"information-systems",year:"sophomore",text:G1},{id:"sample-information-systems-junior",major:"information-systems",year:"junior",text:L1},{id:"sample-information-systems-senior",major:"information-systems",year:"senior",text:U1},{id:"sample-psychology-freshman",major:"psychology",year:"freshman",text:D1},{id:"sample-psychology-sophomore",major:"psychology",year:"sophomore",text:h1},{id:"sample-psychology-junior",major:"psychology",year:"junior",text:g1},{id:"sample-psychology-senior",major:"psychology",year:"senior",text:v1},{id:"sample-criminology-freshman",major:"criminology",year:"freshman",text:H1},{id:"sample-criminology-sophomore",major:"criminology",year:"sophomore",text:y1},{id:"sample-criminology-junior",major:"criminology",year:"junior",text:F1},{id:"sample-criminology-senior",major:"criminology",year:"senior",text:B1},{id:"sample-economics-freshman",major:"economics",year:"freshman",text:Y1},{id:"sample-economics-sophomore",major:"economics",year:"sophomore",text:x1},{id:"sample-economics-junior",major:"economics",year:"junior",text:w1},{id:"sample-economics-senior",major:"economics",year:"senior",text:k1},{id:"sample-biology-freshman",major:"biology",year:"freshman",text:V1},{id:"sample-biology-sophomore",major:"biology",year:"sophomore",text:Q1},{id:"sample-biology-junior",major:"biology",year:"junior",text:_1},{id:"sample-biology-senior",major:"biology",year:"senior",text:j1},{id:"sample-government-freshman",major:"government",year:"freshman",text:J1},{id:"sample-government-sophomore",major:"government",year:"sophomore",text:W1},{id:"sample-government-junior",major:"government",year:"junior",text:z1},{id:"sample-government-senior",major:"government",year:"senior",text:K1},{id:"sample-mechanical-engineering-freshman",major:"mechanical-engineering",year:"freshman",text:$1},{id:"sample-mechanical-engineering-sophomore",major:"mechanical-engineering",year:"sophomore",text:q1},{id:"sample-mechanical-engineering-junior",major:"mechanical-engineering",year:"junior",text:X1},{id:"sample-mechanical-engineering-senior",major:"mechanical-engineering",year:"senior",text:Z1},{id:"sample-communication-freshman",major:"communication",year:"freshman",text:b1},{id:"sample-communication-sophomore",major:"communication",year:"sophomore",text:ed},{id:"sample-communication-junior",major:"communication",year:"junior",text:nd},{id:"sample-communication-senior",major:"communication",year:"senior",text:td},{id:"sample-kinesiology-freshman",major:"kinesiology",year:"freshman",text:rd},{id:"sample-kinesiology-sophomore",major:"kinesiology",year:"sophomore",text:id},{id:"sample-kinesiology-junior",major:"kinesiology",year:"junior",text:ld},{id:"sample-kinesiology-senior",major:"kinesiology",year:"senior",text:od}];function su(u){return u?au.find(d=>d.id===u):void 0}function yr(u,d){return au.find(s=>s.major===u&&s.year===d)}function ad(u){const d=su(u);return d?Kn.find(s=>s.slug===d.major):void 0}const sd="https://github.com/sanirb-debug/UMDTerpTracker",ud={matches:"Computed GPA matches the GPA printed on the transcript.",differs:"Computed GPA does NOT match the GPA printed on the transcript.","transcript-printed-none":"The transcript printed no cumulative GPA to compare against."};function Sd(u){const d=`Something looks wrong on the ${u.view} view`,P=["Reporting something that looks wrong. I haven't described the problem yet — adding that below.","","## What I was doing","",`- View: ${u.view}`,`- Data: ${u.source==="sample"?`demo sample \`${u.sampleId??"unknown"}\``:"my own uploaded transcript"}`,"","## What the app reported","",`- Parse warnings: ${u.warningCodes.length>0?u.warningCodes.join(", "):"none"}`,`- ${ud[u.gpaCheck]}`,"","## What went wrong","","<!-- Please describe what you expected and what you saw. -->","","---","","This report was prefilled by TerpTracker and deliberately contains no","transcript contents: no courses, grades, credits, GPA values, name or","student ID. Please do not paste any of those into a public issue."].join(`
`),N=`${sd}/issues/new?title=${encodeURIComponent(d)}&body=${encodeURIComponent(P)}`;return{title:d,body:P,url:N}}function Ad(u){const{view:d,transcript:s,sampleId:P}=u;if(!s)return{view:d,source:P?"sample":"upload",...P?{sampleId:P}:{},warningCodes:[],gpaCheck:"transcript-printed-none"};const N=Vl(s),G=N.statedGpa===null?"transcript-printed-none":N.ok?"matches":"differs";return{view:d,source:P?"sample":"upload",...P?{sampleId:P}:{},warningCodes:[...new Set(s.warnings.map(L=>L.code))],gpaCheck:G}}function dd({view:u,transcript:d,sampleId:s,className:P}){const[N,G]=ee.useState(!1),L=ee.useMemo(()=>Sd(Ad({view:u,transcript:d,sampleId:s})),[u,d,s]);return N?O.jsxs("div",{className:"mt-2 w-full rounded-lg border border-neutral-300 p-3 text-left dark:border-neutral-700",children:[O.jsx("h3",{className:"text-sm font-semibold",children:"This is exactly what will be sent"}),O.jsx("p",{className:"mt-1 text-xs text-neutral-600 dark:text-neutral-300",children:"It opens a public GitHub issue in a new tab, prefilled with the text below and nothing else. No part of your transcript is included — no courses, grades, GPA, name or student ID. Please keep it that way when you add your description."}),O.jsx("p",{className:"mt-3 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Title"}),O.jsx("pre",{className:"mt-1 overflow-x-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:L.title}),O.jsx("p",{className:"mt-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Body"}),O.jsx("pre",{className:"mt-1 max-h-56 overflow-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:L.body}),O.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2",children:[O.jsx("a",{className:"button text-xs",href:L.url,target:"_blank",rel:"noopener noreferrer",onClick:()=>G(!1),children:"Open GitHub issue"}),O.jsx("button",{type:"button",className:"button-quiet text-xs",onClick:()=>G(!1),children:"Cancel"})]})]}):O.jsx("button",{type:"button",onClick:()=>G(!0),className:`inline-flex min-h-11 items-center text-xs text-neutral-500 underline decoration-dotted underline-offset-2 hover:text-neutral-900 sm:min-h-0 dark:hover:text-neutral-100 ${P??""}`,children:"Something looks wrong"})}function Fr(u){return typeof u=="string"&&u.trim().length>0}function Cd(u){const d=[];return Fr(u.text)||d.push("text"),Fr(u.speaker)||d.push("speaker"),Fr(u.sourceUrl)||d.push("sourceUrl"),d.length===0?null:`missing ${d.join(", ")}`}function Ed(u,d){const s=u==null?void 0:u.quotes;if(!Array.isArray(s))return[];const P=[];return s.forEach((N,G)=>{Cd(N??{})===null&&P.push({text:N.text.trim(),speaker:N.speaker.trim(),...Fr(N.context)?{context:N.context.trim()}:{},sourceUrl:N.sourceUrl.trim()})}),P}function Id(u,d,s=Math.random){if(u.length===0)return null;const P=u.length>1?u.filter(N=>N!==d):u;return P[Math.min(P.length-1,Math.floor(s()*P.length))]}const cd=[{text:"",speaker:"",context:"",sourceUrl:""}],Nd={quotes:cd},Od=Ed(Nd);function md({quotes:u=Od,random:d}){const[s,P]=ee.useState(null),N=ee.useRef(null),G=ee.useRef(null),L=ee.useCallback(()=>{var T;P(null),(T=N.current)==null||T.focus()},[]);return ee.useEffect(()=>{if(!s)return;const T=Y=>{Y.key==="Escape"&&L()};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[s,L]),u.length===0?null:O.jsxs("div",{className:"pad-safe-bottom pointer-events-none fixed inset-x-0 bottom-0 z-40 flex flex-col items-end gap-2 pr-3 sm:inset-x-auto sm:right-3 sm:pb-3",children:[s&&O.jsxs("blockquote",{id:"testudo-quote",className:"pointer-events-auto max-w-xs rounded-xl border border-neutral-300 bg-white p-3 text-left shadow-lg dark:border-neutral-700 dark:bg-neutral-900",children:[O.jsx("p",{className:"text-sm",children:s.text}),O.jsxs("footer",{className:"mt-2 text-xs text-neutral-500 dark:text-neutral-400",children:[O.jsx("cite",{className:"not-italic font-medium text-neutral-700 dark:text-neutral-200",children:s.speaker}),s.context&&O.jsxs("span",{children:[" — ",s.context]})," ",O.jsx("a",{className:"underline",href:s.sourceUrl,target:"_blank",rel:"noopener noreferrer",children:"source"})]})]}),O.jsx("button",{ref:N,type:"button","aria-label":s?"Hide the quote about Maryland":"Testudo has something to say about Maryland","aria-expanded":s!==null,"aria-controls":s?"testudo-quote":void 0,onClick:()=>P(T=>{if(T)return null;const Y=Id(u,G.current??void 0,d);return G.current=Y,Y}),className:"pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full text-lg leading-none opacity-30 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terp-red sm:h-8 sm:w-8",children:O.jsx("span",{"aria-hidden":"true",children:"🐢"})})]})}class fd extends Error{constructor(){super("This PDF has no text in it, so it looks like a scan or a photo. Download the unofficial transcript straight from Testudo instead of scanning a printout."),this.name="ScannedPdfError"}}function Rd({transcript:u,sampleId:d,onParsed:s,onForget:P}){const[N,G]=ee.useState(null),[L,T]=ee.useState(!1),[Y,F]=ee.useState(null),[J,V]=ee.useState(!1),j=ee.useRef(null),de=ee.useCallback(async D=>{G(null),T(!0),F({phase:"reading"});try{const{parseTranscriptFile:g}=await Tt(async()=>{const{parseTranscriptFile:Ne}=await import("./client-BE7nTby1.js");return{parseTranscriptFile:Ne}},[]),$=await g(D,F);if($.terms.length===0){G("No semesters turned up in that PDF. Make sure it is the unofficial transcript from Testudo.");return}s($)}catch(g){G(g instanceof fd?g.message:`That PDF could not be read. ${g instanceof Error?g.message:""}`.trim())}finally{T(!1),F(null)}},[s]),ue=ee.useCallback((D,g)=>{G(null),s(ou(g),D)},[s]);return O.jsxs("div",{className:"space-y-6",children:[O.jsxs("section",{onDragOver:D=>{D.preventDefault(),V(!0)},onDragLeave:()=>V(!1),onDrop:D=>{D.preventDefault(),V(!1);const g=D.dataTransfer.files[0];g&&de(g)},className:`rounded-xl border p-5 text-center transition-colors sm:border-2 sm:border-dashed sm:p-10 ${J?"border-terp-red bg-red-50 dark:bg-red-950/20":"border-neutral-200 dark:border-neutral-800 sm:border-neutral-300 sm:dark:border-neutral-700"}`,children:[O.jsxs("p",{className:"mb-1 text-lg font-semibold",children:[O.jsx("span",{className:"sm:hidden",children:"Add your unofficial transcript"}),O.jsx("span",{className:"hidden sm:inline",children:"Drop your unofficial transcript here"})]}),O.jsx("p",{className:"mb-5 text-sm text-neutral-500 dark:text-neutral-400",children:"Testudo → Academics → Unofficial Transcript → save as PDF"}),O.jsx("input",{ref:j,id:"transcript-file",type:"file",accept:"application/pdf,.pdf",className:"sr-only",disabled:L,onChange:D=>{var $;const g=($=D.target.files)==null?void 0:$[0];g&&de(g),D.target.value=""}}),L?O.jsx(Td,{progress:Y}):O.jsx("label",{htmlFor:"transcript-file",className:"button w-full cursor-pointer text-base focus-within:ring-2 focus-within:ring-terp-red focus-within:ring-offset-2 sm:w-auto sm:text-sm dark:focus-within:ring-offset-neutral-950",children:"Choose file"}),O.jsx("p",{className:"mt-3 hidden text-xs text-neutral-500 sm:block dark:text-neutral-400",children:"or drag it onto this box"})]}),O.jsxs("section",{className:"card",children:[O.jsx("h2",{className:"font-semibold",children:"See how it works"}),O.jsx("p",{className:"mt-1 text-sm text-neutral-600 dark:text-neutral-300",children:"Rather not hand your transcript to a site you have never heard of? Reasonable. Pick a major and a year — no file, no upload."}),O.jsx(pd,{sampleId:d,onLoad:ue}),O.jsx("div",{className:"mt-4 hidden overflow-x-auto sm:block",children:O.jsxs("table",{className:"w-full border-separate border-spacing-1 text-sm",children:[O.jsx("caption",{className:"sr-only",children:"Sample transcripts by major and class year. Majors marked “no audit” have no degree requirements on file."}),O.jsx("thead",{children:O.jsxs("tr",{children:[O.jsx("th",{className:"sticky left-0 z-10 w-24 bg-white dark:bg-neutral-900"}),Kn.map(D=>O.jsxs("th",{scope:"col",className:"px-1 pb-1 align-bottom",children:[O.jsx("span",{className:"block whitespace-nowrap text-xs font-semibold",children:D.short}),O.jsx("span",{className:`block whitespace-nowrap text-[10px] font-normal ${D.hasRequirements?"text-emerald-600 dark:text-emerald-400":"text-neutral-400 dark:text-neutral-500"}`,children:D.hasRequirements?"audit":"no audit"})]},D.slug))]})}),O.jsx("tbody",{children:ft.map(D=>O.jsxs("tr",{children:[O.jsx("th",{scope:"row",className:"sticky left-0 z-10 bg-white pr-2 text-right text-xs font-medium text-neutral-500 dark:bg-neutral-900",children:D.label}),Kn.map(g=>{const $=yr(g.slug,D.slug);if(!$)return O.jsx("td",{},g.slug);const Ne=$.id===d;return O.jsx("td",{className:"p-0",children:O.jsx("button",{type:"button",onClick:()=>ue($.id,$.text),"aria-current":Ne?"true":void 0,"aria-label":`${g.name}, ${D.label}${g.hasRequirements?"":" (no degree audit available)"}`,className:`w-full whitespace-nowrap rounded border px-3 py-2 text-xs transition-colors hover:border-terp-red ${Ne?"border-terp-red bg-red-50 font-semibold dark:bg-red-950/20":g.hasRequirements?"border-emerald-500/40 dark:border-emerald-500/30":"border-dashed border-neutral-300 dark:border-neutral-700"}`,children:D.label})},g.slug)})]},D.slug))})]})}),O.jsx("p",{className:"mt-3 hidden text-xs text-neutral-500 sm:block dark:text-neutral-400",children:"Solid columns have degree requirements on file and produce a full audit. Dashed ones do not — everything else works, but the audit page says so instead of guessing. Requirements are transcribed from the catalog by hand, one major at a time."}),O.jsx("p",{className:"mt-3 text-xs text-neutral-500 sm:hidden dark:text-neutral-400",children:"Majors marked “no audit” have no degree requirements on file — everything else works, but the audit page says so instead of guessing. Requirements are transcribed from the catalog by hand, one major at a time."}),O.jsx("p",{className:"mt-2 text-xs text-neutral-500 dark:text-neutral-400",children:"Each major is one invented student across four years, so later years contain everything the earlier ones do. Entirely synthetic; no real transcript is in this repository."})]}),N&&O.jsxs("section",{role:"alert",className:"rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200",children:[O.jsx("h2",{className:"font-semibold",children:"That did not work"}),O.jsx("p",{className:"mt-1",children:N}),O.jsx("p",{className:"mt-2 text-xs text-red-700 dark:text-red-300",children:"Nothing was kept and nothing was sent anywhere. Pick another file and try again, or use a sample above to see what the app does."})]}),O.jsxs("section",{className:"card space-y-2 text-sm",children:[O.jsx("h2",{className:"font-semibold",children:"Where your transcript goes"}),O.jsx("p",{className:"text-neutral-600 dark:text-neutral-300",children:"Nowhere. The PDF is read by JavaScript running in this tab. There is no server, no account and no upload — the file never leaves your device, and you can check that in your browser's network tab."}),O.jsx("p",{className:"text-neutral-600 dark:text-neutral-300",children:"The parsed result is kept in this browser's local storage so you do not have to re-upload every visit. Clearing it removes every trace."}),u&&O.jsx("button",{type:"button",className:"button-quiet mt-2",onClick:P,children:d?"Clear the sample":"Clear my transcript"})]})]})}function Td({progress:u}){const d=(u==null?void 0:u.phase)==="parsing"?`Reading page ${u.page} of ${u.totalPages}…`:"Opening your transcript…";return O.jsxs("div",{role:"status",className:"flex min-h-11 items-center justify-center gap-3 text-sm text-neutral-600 dark:text-neutral-300",children:[O.jsx("span",{"aria-hidden":"true",className:"h-5 w-5 animate-spin rounded-full border-2 border-neutral-300 border-t-terp-red dark:border-neutral-700 dark:border-t-terp-red"}),d]})}function pd({sampleId:u,onLoad:d}){const[s,P]=ee.useState(()=>{const F=Kn.find(J=>ft.some(V=>{var j;return((j=yr(J.slug,V.slug))==null?void 0:j.id)===u}));return(F==null?void 0:F.slug)??Kn[0].slug}),[N,G]=ee.useState(()=>{var F;return((F=ft.find(J=>{var V;return((V=yr(s,J.slug))==null?void 0:V.id)===u}))==null?void 0:F.slug)??ft[0].slug}),L=Kn.find(F=>F.slug===s)??Kn[0],T=yr(s,N),Y=T!=null&&T.id===u;return O.jsxs("div",{className:"mt-4 space-y-3 sm:hidden",children:[O.jsxs("label",{className:"block",children:[O.jsx("span",{className:"label",children:"Major"}),O.jsx("select",{className:"select mt-1",value:s,onChange:F=>P(F.target.value),children:Kn.map(F=>O.jsxs("option",{value:F.slug,children:[F.name,F.hasRequirements?"":" (no audit)"]},F.slug))})]}),O.jsxs("label",{className:"block",children:[O.jsx("span",{className:"label",children:"Class year"}),O.jsx("select",{className:"select mt-1",value:N,onChange:F=>G(F.target.value),children:ft.map(F=>O.jsx("option",{value:F.slug,children:F.label},F.slug))})]}),O.jsx("button",{type:"button",className:"button w-full",disabled:!T||Y,onClick:()=>T&&d(T.id,T.text),children:Y?"Showing this sample":"Load this sample"}),O.jsx("p",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:L.hasRequirements?`${L.name} has degree requirements on file, so this one produces a full audit.`:`${L.name} has no degree requirements on file yet — everything works except the audit page, which says so instead of guessing.`})]})}const uu=2,jl="terptracker.transcript.v1",Jl="terptracker.plan.v1";function Su(u){try{const d=window.localStorage.getItem(u);return d?JSON.parse(d):null}catch{return null}}function Au(u,d){try{window.localStorage.setItem(u,JSON.stringify(d))}catch{}}function Pd(){const u=Su(jl);if(!u)return{transcript:null,stale:!1};const d=u;return typeof d.version!="number"||d.version!==uu?{transcript:null,sampleId:d.sampleId,stale:!0}:{transcript:d.transcript,sampleId:d.sampleId,stale:!1}}function bs(u,d){const s={version:uu,transcript:u};d&&(s.sampleId=d),Au(jl,s)}const Bd=()=>Su(Jl),Yd=u=>Au(Jl,u);function Md(){try{window.localStorage.removeItem(jl),window.localStorage.removeItem(Jl),window.localStorage.removeItem("terptracker.isSample.v1")}catch{}}const Gd=ee.lazy(()=>Tt(()=>import("./Dashboard-ilRXxnqf.js"),__vite__mapDeps([0,1,2])).then(u=>({default:u.DashboardPage}))),Ld=ee.lazy(()=>Tt(()=>import("./Planner-CuXGN46r.js"),__vite__mapDeps([3,2,4])).then(u=>({default:u.PlannerPage}))),Ud=ee.lazy(()=>Tt(()=>import("./Schedule-DvvaqKX5.js"),__vite__mapDeps([5,1,4,2])).then(u=>({default:u.SchedulePage}))),Dd=ee.lazy(()=>Tt(()=>import("./Requirements-BaWaHQLa.js"),__vite__mapDeps([6,2,4])).then(u=>({default:u.RequirementsPage}))),hd={dashboard:"Dashboard",requirements:"Requirements",schedule:"Schedule",planner:"Planner",upload:"Transcript"},gd=[{id:"dashboard",label:"Dashboard"},{id:"requirements",label:"Requirements"},{id:"schedule",label:"Schedule"},{id:"planner",label:"Planner"},{id:"upload",label:"Transcript"}];function vd(){var de,ue,D;const[u,d]=ee.useState(null),[s,P]=ee.useState(void 0),[N,G]=ee.useState(!1),[L,T]=ee.useState("upload");ee.useEffect(()=>{const g=Pd();if(g.transcript){d(g.transcript),P(g.sampleId),T("dashboard");return}if(!g.stale)return;const $=su(g.sampleId);if($){const Ne=ou($.text);d(Ne),P($.id),bs(Ne,$.id),T("dashboard");return}G(!0)},[]);const Y=ee.useCallback((g,$)=>{d(g),P($),G(!1),bs(g,$),T("dashboard")},[]),F=ee.useCallback(()=>{Md(),d(null),P(void 0),T("upload")},[]),J=ee.useMemo(()=>u?eu(u):null,[u]),V=ee.useMemo(()=>u?Vl(u):null,[u]),j=!!(V&&V.statedGpa!==null&&!V.ok);return O.jsxs("div",{className:"pad-safe-x mx-auto min-h-screen min-h-dvh max-w-4xl py-8",children:[O.jsxs("header",{className:"mb-4 flex flex-wrap items-start justify-between gap-3",children:[O.jsxs("div",{children:[O.jsxs("h1",{className:"text-2xl font-bold tracking-tight",children:["Terp",O.jsx("span",{className:"text-terp-red",children:"Tracker"})]}),O.jsxs("p",{className:"text-sm text-neutral-500 dark:text-neutral-400",children:[(u==null?void 0:u.major)??"Your transcript, your GPA, and what you need next"," — all in this tab."]})]}),(J==null?void 0:J.gpa)!=null&&O.jsxs("div",{className:"text-right",children:[O.jsxs("div",{className:`text-3xl font-bold tabular-nums ${j?"text-amber-600 dark:text-amber-400":""}`,children:[J.gpa.toFixed(3),j&&O.jsx("span",{className:"ml-1 align-top text-base",children:"⚠"})]}),O.jsxs("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:[J.earnedCredits," credits"]}),O.jsx(dd,{view:hd[L],transcript:u,sampleId:s,className:"mt-1"})]})]}),O.jsxs("p",{className:"mb-4 rounded-lg border border-amber-400/60 bg-amber-50 px-3 py-2 text-sm text-amber-900 dark:border-amber-700/60 dark:bg-amber-950/30 dark:text-amber-200",children:[O.jsx("strong",{children:"Unofficial."})," Not affiliated with the University of Maryland. Confirm anything here with your advisor and your official degree audit before you register."]}),N&&O.jsxs("p",{role:"alert",className:"mb-4 rounded-lg border border-sky-400/60 bg-sky-50 px-3 py-2 text-sm text-sky-900 dark:border-sky-700/60 dark:bg-sky-950/30 dark:text-sky-200",children:[O.jsx("strong",{children:"TerpTracker got better at reading transcripts since you last used it."})," ","Your saved copy was read by the older version and would have shown requirements as unmet that you have actually finished, so it has been cleared. Drop your PDF in again to pick up the new checks — it only ever lived in this browser, so there is nothing to recover."]}),s&&O.jsxs("p",{className:"mb-4 rounded-lg border border-sky-400/60 bg-sky-50 px-3 py-2 text-sm text-sky-900 dark:border-sky-700/60 dark:bg-sky-950/30 dark:text-sky-200",children:["Sample data — an invented ",O.jsx("strong",{children:((de=ad(s))==null?void 0:de.name)??"demo"})," student, not your own record. Everything below is real behaviour on invented data; load your own transcript from the Transcript tab whenever you like."]}),j&&V&&O.jsxs("p",{role:"alert",className:"mb-4 rounded-lg border border-amber-500 bg-amber-100 px-3 py-2 text-sm text-amber-900 dark:border-amber-600 dark:bg-amber-950/50 dark:text-amber-100",children:[O.jsx("strong",{children:"This GPA does not match your transcript."})," We compute"," ",(ue=V.computedGpa)==null?void 0:ue.toFixed(3)," but your transcript prints ",(D=V.statedGpa)==null?void 0:D.toFixed(3),", so something did not parse correctly. Treat every number here as unreliable until it agrees."]}),O.jsx("nav",{className:"mb-6 flex flex-wrap gap-1 border-b border-neutral-200 dark:border-neutral-800 sm:flex-nowrap",children:gd.map(({id:g,label:$})=>O.jsx("button",{type:"button",onClick:()=>T(g),disabled:g!=="upload"&&!u,"aria-current":L===g?"page":void 0,className:`-mb-px min-h-11 border-b-2 px-3 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-0 sm:px-4 ${L===g?"border-terp-red text-terp-red":"border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"}`,children:$},g))}),O.jsx("main",{children:O.jsxs(ee.Suspense,{fallback:O.jsx("p",{className:"text-sm text-neutral-500",children:"Loading…"}),children:[L==="upload"&&O.jsx(Rd,{transcript:u,sampleId:s,onParsed:Y,onForget:F}),L==="dashboard"&&u&&O.jsx(Gd,{transcript:u}),L==="requirements"&&u&&O.jsx(Dd,{transcript:u,sampleId:s}),L==="schedule"&&u&&O.jsx(Ud,{transcript:u}),L==="planner"&&u&&O.jsx(Ld,{transcript:u})]})}),O.jsx("footer",{className:"mt-12 border-t border-neutral-200 pt-4 text-xs text-neutral-500 dark:border-neutral-800",children:"Course data from api.umd.io, grades and ratings from PlanetTerp. Both are run by students and volunteers, and both are cached here rather than called on your behalf."}),O.jsx(md,{})]})}const du=document.getElementById("root");if(!du)throw new Error("missing #root");mA.createRoot(du).render(O.jsx(ee.StrictMode,{children:O.jsx(vd,{})}));export{Fd as D,vA as G,Yr as P,dd as S,Tt as _,LA as a,Yd as b,eu as c,fd as d,ru as e,YA as f,yd as g,FA as h,l1 as i,O as j,Bd as l,o1 as p,ee as r,Vl as s,yA as w};
