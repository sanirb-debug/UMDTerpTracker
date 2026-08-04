const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-CBbUDwfs.js","assets/degree-DOY8losu.js","assets/CourseLink-BHOERu4Y.js","assets/Planner-DhEoj7Ew.js","assets/TopRated-DwR7Isfp.js","assets/Schedule-DwgnhGAS.js","assets/Requirements-BwNPD7KU.js"])))=>i.map(i=>d[i]);
var dA=Object.defineProperty;var CA=(u,S,a)=>S in u?dA(u,S,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[S]=a;var Hl=(u,S,a)=>CA(u,typeof S!="symbol"?S+"":S,a);(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))f(N);new MutationObserver(N=>{for(const L of N)if(L.type==="childList")for(const G of L.addedNodes)G.tagName==="LINK"&&G.rel==="modulepreload"&&f(G)}).observe(document,{childList:!0,subtree:!0});function a(N){const L={};return N.integrity&&(L.integrity=N.integrity),N.referrerPolicy&&(L.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?L.credentials="include":N.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function f(N){if(N.ep)return;N.ep=!0;const L=a(N);fetch(N.href,L)}})();var yl={exports:{}},ft={},Fl={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ws;function cA(){if(ws)return $;ws=1;var u=Symbol.for("react.element"),S=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),G=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),V=Symbol.iterator;function _(C){return C===null||typeof C!="object"?null:(C=V&&C[V]||C["@@iterator"],typeof C=="function"?C:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,Y={};function k(C,R,K){this.props=C,this.context=R,this.refs=Y,this.updater=K||W}k.prototype.isReactComponent={},k.prototype.setState=function(C,R){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,R,"setState")},k.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function de(){}de.prototype=k.prototype;function Le(C,R,K){this.props=C,this.context=R,this.refs=Y,this.updater=K||W}var Fe=Le.prototype=new de;Fe.constructor=Le,z(Fe,k.prototype),Fe.isPureReactComponent=!0;var ie=Array.isArray,ve=Object.prototype.hasOwnProperty,le={current:null},Be={key:!0,ref:!0,__self:!0,__source:!0};function qe(C,R,K){var q,Z={},b=null,oe=null;if(R!=null)for(q in R.ref!==void 0&&(oe=R.ref),R.key!==void 0&&(b=""+R.key),R)ve.call(R,q)&&!Be.hasOwnProperty(q)&&(Z[q]=R[q]);var te=arguments.length-2;if(te===1)Z.children=K;else if(1<te){for(var Se=Array(te),Je=0;Je<te;Je++)Se[Je]=arguments[Je+2];Z.children=Se}if(C&&C.defaultProps)for(q in te=C.defaultProps,te)Z[q]===void 0&&(Z[q]=te[q]);return{$$typeof:u,type:C,key:b,ref:oe,props:Z,_owner:le.current}}function Un(C,R){return{$$typeof:u,type:C.type,key:R,ref:C.ref,props:C.props,_owner:C._owner}}function fn(C){return typeof C=="object"&&C!==null&&C.$$typeof===u}function $n(C){var R={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(K){return R[K]})}var dn=/\/+/g;function _e(C,R){return typeof C=="object"&&C!==null&&C.key!=null?$n(""+C.key):R.toString(36)}function rn(C,R,K,q,Z){var b=typeof C;(b==="undefined"||b==="boolean")&&(C=null);var oe=!1;if(C===null)oe=!0;else switch(b){case"string":case"number":oe=!0;break;case"object":switch(C.$$typeof){case u:case S:oe=!0}}if(oe)return oe=C,Z=Z(oe),C=q===""?"."+_e(oe,0):q,ie(Z)?(K="",C!=null&&(K=C.replace(dn,"$&/")+"/"),rn(Z,R,K,"",function(Je){return Je})):Z!=null&&(fn(Z)&&(Z=Un(Z,K+(!Z.key||oe&&oe.key===Z.key?"":(""+Z.key).replace(dn,"$&/")+"/")+C)),R.push(Z)),1;if(oe=0,q=q===""?".":q+":",ie(C))for(var te=0;te<C.length;te++){b=C[te];var Se=q+_e(b,te);oe+=rn(b,R,K,Se,Z)}else if(Se=_(C),typeof Se=="function")for(C=Se.call(C),te=0;!(b=C.next()).done;)b=b.value,Se=q+_e(b,te++),oe+=rn(b,R,K,Se,Z);else if(b==="object")throw R=String(C),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return oe}function Cn(C,R,K){if(C==null)return C;var q=[],Z=0;return rn(C,q,"","",function(b){return R.call(K,b,Z++)}),q}function Ye(C){if(C._status===-1){var R=C._result;R=R(),R.then(function(K){(C._status===0||C._status===-1)&&(C._status=1,C._result=K)},function(K){(C._status===0||C._status===-1)&&(C._status=2,C._result=K)}),C._status===-1&&(C._status=0,C._result=R)}if(C._status===1)return C._result.default;throw C._result}var Ee={current:null},U={transition:null},Q={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:U,ReactCurrentOwner:le};function g(){throw Error("act(...) is not supported in production builds of React.")}return $.Children={map:Cn,forEach:function(C,R,K){Cn(C,function(){R.apply(this,arguments)},K)},count:function(C){var R=0;return Cn(C,function(){R++}),R},toArray:function(C){return Cn(C,function(R){return R})||[]},only:function(C){if(!fn(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},$.Component=k,$.Fragment=a,$.Profiler=N,$.PureComponent=Le,$.StrictMode=f,$.Suspense=H,$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,$.act=g,$.cloneElement=function(C,R,K){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var q=z({},C.props),Z=C.key,b=C.ref,oe=C._owner;if(R!=null){if(R.ref!==void 0&&(b=R.ref,oe=le.current),R.key!==void 0&&(Z=""+R.key),C.type&&C.type.defaultProps)var te=C.type.defaultProps;for(Se in R)ve.call(R,Se)&&!Be.hasOwnProperty(Se)&&(q[Se]=R[Se]===void 0&&te!==void 0?te[Se]:R[Se])}var Se=arguments.length-2;if(Se===1)q.children=K;else if(1<Se){te=Array(Se);for(var Je=0;Je<Se;Je++)te[Je]=arguments[Je+2];q.children=te}return{$$typeof:u,type:C.type,key:Z,ref:b,props:q,_owner:oe}},$.createContext=function(C){return C={$$typeof:G,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:L,_context:C},C.Consumer=C},$.createElement=qe,$.createFactory=function(C){var R=qe.bind(null,C);return R.type=C,R},$.createRef=function(){return{current:null}},$.forwardRef=function(C){return{$$typeof:m,render:C}},$.isValidElement=fn,$.lazy=function(C){return{$$typeof:J,_payload:{_status:-1,_result:C},_init:Ye}},$.memo=function(C,R){return{$$typeof:F,type:C,compare:R===void 0?null:R}},$.startTransition=function(C){var R=U.transition;U.transition={};try{C()}finally{U.transition=R}},$.unstable_act=g,$.useCallback=function(C,R){return Ee.current.useCallback(C,R)},$.useContext=function(C){return Ee.current.useContext(C)},$.useDebugValue=function(){},$.useDeferredValue=function(C){return Ee.current.useDeferredValue(C)},$.useEffect=function(C,R){return Ee.current.useEffect(C,R)},$.useId=function(){return Ee.current.useId()},$.useImperativeHandle=function(C,R,K){return Ee.current.useImperativeHandle(C,R,K)},$.useInsertionEffect=function(C,R){return Ee.current.useInsertionEffect(C,R)},$.useLayoutEffect=function(C,R){return Ee.current.useLayoutEffect(C,R)},$.useMemo=function(C,R){return Ee.current.useMemo(C,R)},$.useReducer=function(C,R,K){return Ee.current.useReducer(C,R,K)},$.useRef=function(C){return Ee.current.useRef(C)},$.useState=function(C){return Ee.current.useState(C)},$.useSyncExternalStore=function(C,R,K){return Ee.current.useSyncExternalStore(C,R,K)},$.useTransition=function(){return Ee.current.useTransition()},$.version="18.3.1",$}var ks;function wl(){return ks||(ks=1,Fl.exports=cA()),Fl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vs;function EA(){if(Vs)return ft;Vs=1;var u=wl(),S=Symbol.for("react.element"),a=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,N=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function G(m,H,F){var J,V={},_=null,W=null;F!==void 0&&(_=""+F),H.key!==void 0&&(_=""+H.key),H.ref!==void 0&&(W=H.ref);for(J in H)f.call(H,J)&&!L.hasOwnProperty(J)&&(V[J]=H[J]);if(m&&m.defaultProps)for(J in H=m.defaultProps,H)V[J]===void 0&&(V[J]=H[J]);return{$$typeof:S,type:m,key:_,ref:W,props:V,_owner:N.current}}return ft.Fragment=a,ft.jsx=G,ft.jsxs=G,ft}var Qs;function IA(){return Qs||(Qs=1,yl.exports=EA()),yl.exports}var O=IA(),ne=wl(),Hr={},Bl={exports:{}},je={},Yl={exports:{}},xl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js;function NA(){return js||(js=1,(function(u){function S(U,Q){var g=U.length;U.push(Q);e:for(;0<g;){var C=g-1>>>1,R=U[C];if(0<N(R,Q))U[C]=Q,U[g]=R,g=C;else break e}}function a(U){return U.length===0?null:U[0]}function f(U){if(U.length===0)return null;var Q=U[0],g=U.pop();if(g!==Q){U[0]=g;e:for(var C=0,R=U.length,K=R>>>1;C<K;){var q=2*(C+1)-1,Z=U[q],b=q+1,oe=U[b];if(0>N(Z,g))b<R&&0>N(oe,Z)?(U[C]=oe,U[b]=g,C=b):(U[C]=Z,U[q]=g,C=q);else if(b<R&&0>N(oe,g))U[C]=oe,U[b]=g,C=b;else break e}}return Q}function N(U,Q){var g=U.sortIndex-Q.sortIndex;return g!==0?g:U.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var L=performance;u.unstable_now=function(){return L.now()}}else{var G=Date,m=G.now();u.unstable_now=function(){return G.now()-m}}var H=[],F=[],J=1,V=null,_=3,W=!1,z=!1,Y=!1,k=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,Le=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Fe(U){for(var Q=a(F);Q!==null;){if(Q.callback===null)f(F);else if(Q.startTime<=U)f(F),Q.sortIndex=Q.expirationTime,S(H,Q);else break;Q=a(F)}}function ie(U){if(Y=!1,Fe(U),!z)if(a(H)!==null)z=!0,Ye(ve);else{var Q=a(F);Q!==null&&Ee(ie,Q.startTime-U)}}function ve(U,Q){z=!1,Y&&(Y=!1,de(qe),qe=-1),W=!0;var g=_;try{for(Fe(Q),V=a(H);V!==null&&(!(V.expirationTime>Q)||U&&!$n());){var C=V.callback;if(typeof C=="function"){V.callback=null,_=V.priorityLevel;var R=C(V.expirationTime<=Q);Q=u.unstable_now(),typeof R=="function"?V.callback=R:V===a(H)&&f(H),Fe(Q)}else f(H);V=a(H)}if(V!==null)var K=!0;else{var q=a(F);q!==null&&Ee(ie,q.startTime-Q),K=!1}return K}finally{V=null,_=g,W=!1}}var le=!1,Be=null,qe=-1,Un=5,fn=-1;function $n(){return!(u.unstable_now()-fn<Un)}function dn(){if(Be!==null){var U=u.unstable_now();fn=U;var Q=!0;try{Q=Be(!0,U)}finally{Q?_e():(le=!1,Be=null)}}else le=!1}var _e;if(typeof Le=="function")_e=function(){Le(dn)};else if(typeof MessageChannel<"u"){var rn=new MessageChannel,Cn=rn.port2;rn.port1.onmessage=dn,_e=function(){Cn.postMessage(null)}}else _e=function(){k(dn,0)};function Ye(U){Be=U,le||(le=!0,_e())}function Ee(U,Q){qe=k(function(){U(u.unstable_now())},Q)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(U){U.callback=null},u.unstable_continueExecution=function(){z||W||(z=!0,Ye(ve))},u.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Un=0<U?Math.floor(1e3/U):5},u.unstable_getCurrentPriorityLevel=function(){return _},u.unstable_getFirstCallbackNode=function(){return a(H)},u.unstable_next=function(U){switch(_){case 1:case 2:case 3:var Q=3;break;default:Q=_}var g=_;_=Q;try{return U()}finally{_=g}},u.unstable_pauseExecution=function(){},u.unstable_requestPaint=function(){},u.unstable_runWithPriority=function(U,Q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var g=_;_=U;try{return Q()}finally{_=g}},u.unstable_scheduleCallback=function(U,Q,g){var C=u.unstable_now();switch(typeof g=="object"&&g!==null?(g=g.delay,g=typeof g=="number"&&0<g?C+g:C):g=C,U){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=g+R,U={id:J++,callback:Q,priorityLevel:U,startTime:g,expirationTime:R,sortIndex:-1},g>C?(U.sortIndex=g,S(F,U),a(H)===null&&U===a(F)&&(Y?(de(qe),qe=-1):Y=!0,Ee(ie,g-C))):(U.sortIndex=R,S(H,U),z||W||(z=!0,Ye(ve))),U},u.unstable_shouldYield=$n,u.unstable_wrapCallback=function(U){var Q=_;return function(){var g=_;_=Q;try{return U.apply(this,arguments)}finally{_=g}}}})(xl)),xl}var _s;function OA(){return _s||(_s=1,Yl.exports=NA()),Yl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Js;function fA(){if(Js)return je;Js=1;var u=wl(),S=OA();function a(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,N={};function L(e,n){G(e,n),G(e+"Capture",n)}function G(e,n){for(N[e]=n,e=0;e<n.length;e++)f.add(n[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),H=Object.prototype.hasOwnProperty,F=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,J={},V={};function _(e){return H.call(V,e)?!0:H.call(J,e)?!1:F.test(e)?V[e]=!0:(J[e]=!0,!1)}function W(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z(e,n,t,r){if(n===null||typeof n>"u"||W(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Y(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new Y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];k[n]=new Y(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new Y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new Y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new Y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new Y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new Y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new Y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new Y(e,5,!1,e.toLowerCase(),null,!1,!1)});var de=/[\-:]([a-z])/g;function Le(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(de,Le);k[n]=new Y(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(de,Le);k[n]=new Y(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(de,Le);k[n]=new Y(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new Y(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new Y(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fe(e,n,t,r){var i=k.hasOwnProperty(n)?k[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(z(n,t,i,r)&&(t=null),r||i===null?_(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var ie=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ve=Symbol.for("react.element"),le=Symbol.for("react.portal"),Be=Symbol.for("react.fragment"),qe=Symbol.for("react.strict_mode"),Un=Symbol.for("react.profiler"),fn=Symbol.for("react.provider"),$n=Symbol.for("react.context"),dn=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),rn=Symbol.for("react.suspense_list"),Cn=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),U=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var g=Object.assign,C;function R(e){if(C===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);C=n&&n[1]||""}return`
`+C+e}var K=!1;function q(e,n){if(!e||K)return"";K=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(I){var r=I}Reflect.construct(e,[],n)}else{try{n.call()}catch(I){r=I}e.call(n.prototype)}else{try{throw Error()}catch(I){r=I}e()}}catch(I){if(I&&r&&typeof I.stack=="string"){for(var i=I.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var A=`
`+i[o].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=o&&0<=s);break}}}finally{K=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?R(e):""}function Z(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=q(e.type,!1),e;case 11:return e=q(e.type.render,!1),e;case 1:return e=q(e.type,!0),e;default:return""}}function b(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Be:return"Fragment";case le:return"Portal";case Un:return"Profiler";case qe:return"StrictMode";case _e:return"Suspense";case rn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $n:return(e.displayName||"Context")+".Consumer";case fn:return(e._context.displayName||"Context")+".Provider";case dn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cn:return n=e.displayName||null,n!==null?n:b(e.type)||"Memo";case Ye:n=e._payload,e=e._init;try{return b(e(n))}catch{}}return null}function oe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return b(n);case 8:return n===qe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e){var n=Se(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pt(e){e._valueTracker||(e._valueTracker=Je(e))}function _l(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Se(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Pt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kr(e,n){var t=n.checked;return g({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Jl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=te(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Wl(e,n){n=n.checked,n!=null&&Fe(e,"checked",n,!1)}function Vr(e,n){Wl(e,n);var t=te(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Qr(e,n.type,t):n.hasOwnProperty("defaultValue")&&Qr(e,n.type,te(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function zl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Qr(e,n,t){(n!=="number"||Pt(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var y0=Array.isArray;function u0(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+te(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function jr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(a(91));return g({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(a(92));if(y0(t)){if(1<t.length)throw Error(a(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:te(t)}}function $l(e,n){var t=te(n.value),r=te(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ql(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Xl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _r(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Xl(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mt,Zl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Mt=Mt||document.createElement("div"),Mt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Mt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function F0(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var B0={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iu=["Webkit","ms","Moz","O"];Object.keys(B0).forEach(function(e){Iu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),B0[n]=B0[e]})});function bl(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||B0.hasOwnProperty(e)&&B0[e]?(""+n).trim():n+"px"}function eo(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=bl(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Nu=g({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jr(e,n){if(n){if(Nu[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(a(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(n.style!=null&&typeof n.style!="object")throw Error(a(62))}}function Wr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zr=null;function Kr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $r=null,S0=null,A0=null;function no(e){if(e=it(e)){if(typeof $r!="function")throw Error(a(280));var n=e.stateNode;n&&(n=Kt(n),$r(e.stateNode,e.type,n))}}function to(e){S0?A0?A0.push(e):A0=[e]:S0=e}function ro(){if(S0){var e=S0,n=A0;if(A0=S0=null,no(e),n)for(e=0;e<n.length;e++)no(n[e])}}function io(e,n){return e(n)}function lo(){}var qr=!1;function oo(e,n,t){if(qr)return e(n,t);qr=!0;try{return io(e,n,t)}finally{qr=!1,(S0!==null||A0!==null)&&(lo(),ro())}}function Y0(e,n){var t=e.stateNode;if(t===null)return null;var r=Kt(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var Xr=!1;if(m)try{var x0={};Object.defineProperty(x0,"passive",{get:function(){Xr=!0}}),window.addEventListener("test",x0,x0),window.removeEventListener("test",x0,x0)}catch{Xr=!1}function Ou(e,n,t,r,i,l,o,s,A){var I=Array.prototype.slice.call(arguments,3);try{n.apply(t,I)}catch(p){this.onError(p)}}var w0=!1,Gt=null,Lt=!1,Zr=null,fu={onError:function(e){w0=!0,Gt=e}};function mu(e,n,t,r,i,l,o,s,A){w0=!1,Gt=null,Ou.apply(fu,arguments)}function Tu(e,n,t,r,i,l,o,s,A){if(mu.apply(this,arguments),w0){if(w0){var I=Gt;w0=!1,Gt=null}else throw Error(a(198));Lt||(Lt=!0,Zr=I)}}function qn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ao(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function so(e){if(qn(e)!==e)throw Error(a(188))}function Ru(e){var n=e.alternate;if(!n){if(n=qn(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return so(i),e;if(l===r)return so(i),n;l=l.sibling}throw Error(a(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function uo(e){return e=Ru(e),e!==null?So(e):null}function So(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=So(e);if(n!==null)return n;e=e.sibling}return null}var Ao=S.unstable_scheduleCallback,Co=S.unstable_cancelCallback,pu=S.unstable_shouldYield,Pu=S.unstable_requestPaint,Ne=S.unstable_now,Mu=S.unstable_getCurrentPriorityLevel,br=S.unstable_ImmediatePriority,co=S.unstable_UserBlockingPriority,Ut=S.unstable_NormalPriority,Gu=S.unstable_LowPriority,Eo=S.unstable_IdlePriority,Dt=null,cn=null;function Lu(e){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Dt,e,void 0,(e.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:hu,Uu=Math.log,Du=Math.LN2;function hu(e){return e>>>=0,e===0?32:31-(Uu(e)/Du|0)|0}var ht=64,gt=4194304;function k0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vt(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~i;s!==0?r=k0(s):(l&=o,l!==0&&(r=k0(l)))}else o=t&~i,o!==0?r=k0(o):l!==0&&(r=k0(l));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-ln(n),i=1<<t,r|=e[t],n&=~i;return r}function gu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vu(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-ln(l),s=1<<o,A=i[o];A===-1?((s&t)===0||(s&r)!==0)&&(i[o]=gu(s,n)):A<=n&&(e.expiredLanes|=s),l&=~s}}function ei(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Io(){var e=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),e}function ni(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function V0(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-ln(n),e[n]=t}function Hu(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-ln(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function ti(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-ln(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var re=0;function No(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Oo,ri,fo,mo,To,ii=!1,Ht=[],Dn=null,hn=null,gn=null,Q0=new Map,j0=new Map,vn=[],yu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ro(e,n){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":Q0.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":j0.delete(n.pointerId)}}function _0(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=it(n),n!==null&&ri(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Fu(e,n,t,r,i){switch(n){case"focusin":return Dn=_0(Dn,e,n,t,r,i),!0;case"dragenter":return hn=_0(hn,e,n,t,r,i),!0;case"mouseover":return gn=_0(gn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Q0.set(l,_0(Q0.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,j0.set(l,_0(j0.get(l)||null,e,n,t,r,i)),!0}return!1}function po(e){var n=Xn(e.target);if(n!==null){var t=qn(n);if(t!==null){if(n=t.tag,n===13){if(n=ao(t),n!==null){e.blockedOn=n,To(e.priority,function(){fo(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yt(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=oi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);zr=r,t.target.dispatchEvent(r),zr=null}else return n=it(t),n!==null&&ri(n),e.blockedOn=t,!1;n.shift()}return!0}function Po(e,n,t){yt(e)&&t.delete(n)}function Bu(){ii=!1,Dn!==null&&yt(Dn)&&(Dn=null),hn!==null&&yt(hn)&&(hn=null),gn!==null&&yt(gn)&&(gn=null),Q0.forEach(Po),j0.forEach(Po)}function J0(e,n){e.blockedOn===n&&(e.blockedOn=null,ii||(ii=!0,S.unstable_scheduleCallback(S.unstable_NormalPriority,Bu)))}function W0(e){function n(i){return J0(i,e)}if(0<Ht.length){J0(Ht[0],e);for(var t=1;t<Ht.length;t++){var r=Ht[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Dn!==null&&J0(Dn,e),hn!==null&&J0(hn,e),gn!==null&&J0(gn,e),Q0.forEach(n),j0.forEach(n),t=0;t<vn.length;t++)r=vn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(t=vn[0],t.blockedOn===null);)po(t),t.blockedOn===null&&vn.shift()}var d0=ie.ReactCurrentBatchConfig,Ft=!0;function Yu(e,n,t,r){var i=re,l=d0.transition;d0.transition=null;try{re=1,li(e,n,t,r)}finally{re=i,d0.transition=l}}function xu(e,n,t,r){var i=re,l=d0.transition;d0.transition=null;try{re=4,li(e,n,t,r)}finally{re=i,d0.transition=l}}function li(e,n,t,r){if(Ft){var i=oi(e,n,t,r);if(i===null)pi(e,n,r,Bt,t),Ro(e,r);else if(Fu(i,e,n,t,r))r.stopPropagation();else if(Ro(e,r),n&4&&-1<yu.indexOf(e)){for(;i!==null;){var l=it(i);if(l!==null&&Oo(l),l=oi(e,n,t,r),l===null&&pi(e,n,r,Bt,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else pi(e,n,r,null,t)}}var Bt=null;function oi(e,n,t,r){if(Bt=null,e=Kr(r),e=Xn(e),e!==null)if(n=qn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ao(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Bt=e,null}function Mo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mu()){case br:return 1;case co:return 4;case Ut:case Gu:return 16;case Eo:return 536870912;default:return 16}default:return 16}}var Hn=null,ai=null,Yt=null;function Go(){if(Yt)return Yt;var e,n=ai,t=n.length,r,i="value"in Hn?Hn.value:Hn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Yt=i.slice(e,1<r?1-r:void 0)}function xt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wt(){return!0}function Lo(){return!1}function We(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?wt:Lo,this.isPropagationStopped=Lo,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wt)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wt)},persist:function(){},isPersistent:wt}),n}var C0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},si=We(C0),z0=g({},C0,{view:0,detail:0}),wu=We(z0),ui,Si,K0,kt=g({},z0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:di,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==K0&&(K0&&e.type==="mousemove"?(ui=e.screenX-K0.screenX,Si=e.screenY-K0.screenY):Si=ui=0,K0=e),ui)},movementY:function(e){return"movementY"in e?e.movementY:Si}}),Uo=We(kt),ku=g({},kt,{dataTransfer:0}),Vu=We(ku),Qu=g({},z0,{relatedTarget:0}),Ai=We(Qu),ju=g({},C0,{animationName:0,elapsedTime:0,pseudoElement:0}),_u=We(ju),Ju=g({},C0,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wu=We(Ju),zu=g({},C0,{data:0}),Do=We(zu),Ku={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$u={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=qu[e])?!!n[e]:!1}function di(){return Xu}var Zu=g({},z0,{key:function(e){if(e.key){var n=Ku[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$u[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:di,charCode:function(e){return e.type==="keypress"?xt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bu=We(Zu),eS=g({},kt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ho=We(eS),nS=g({},z0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:di}),tS=We(nS),rS=g({},C0,{propertyName:0,elapsedTime:0,pseudoElement:0}),iS=We(rS),lS=g({},kt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oS=We(lS),aS=[9,13,27,32],Ci=m&&"CompositionEvent"in window,$0=null;m&&"documentMode"in document&&($0=document.documentMode);var sS=m&&"TextEvent"in window&&!$0,go=m&&(!Ci||$0&&8<$0&&11>=$0),vo=" ",Ho=!1;function yo(e,n){switch(e){case"keyup":return aS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var c0=!1;function uS(e,n){switch(e){case"compositionend":return Fo(n);case"keypress":return n.which!==32?null:(Ho=!0,vo);case"textInput":return e=n.data,e===vo&&Ho?null:e;default:return null}}function SS(e,n){if(c0)return e==="compositionend"||!Ci&&yo(e,n)?(e=Go(),Yt=ai=Hn=null,c0=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return go&&n.locale!=="ko"?null:n.data;default:return null}}var AS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!AS[e.type]:n==="textarea"}function Yo(e,n,t,r){to(r),n=Jt(n,"onChange"),0<n.length&&(t=new si("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var q0=null,X0=null;function dS(e){na(e,0)}function Vt(e){var n=f0(e);if(_l(n))return e}function CS(e,n){if(e==="change")return n}var xo=!1;if(m){var ci;if(m){var Ei="oninput"in document;if(!Ei){var wo=document.createElement("div");wo.setAttribute("oninput","return;"),Ei=typeof wo.oninput=="function"}ci=Ei}else ci=!1;xo=ci&&(!document.documentMode||9<document.documentMode)}function ko(){q0&&(q0.detachEvent("onpropertychange",Vo),X0=q0=null)}function Vo(e){if(e.propertyName==="value"&&Vt(X0)){var n=[];Yo(n,X0,e,Kr(e)),oo(dS,n)}}function cS(e,n,t){e==="focusin"?(ko(),q0=n,X0=t,q0.attachEvent("onpropertychange",Vo)):e==="focusout"&&ko()}function ES(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vt(X0)}function IS(e,n){if(e==="click")return Vt(n)}function NS(e,n){if(e==="input"||e==="change")return Vt(n)}function OS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var on=typeof Object.is=="function"?Object.is:OS;function Z0(e,n){if(on(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!H.call(n,i)||!on(e[i],n[i]))return!1}return!0}function Qo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jo(e,n){var t=Qo(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Qo(t)}}function _o(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_o(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Jo(){for(var e=window,n=Pt();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Pt(e.document)}return n}function Ii(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function fS(e){var n=Jo(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&_o(t.ownerDocument.documentElement,t)){if(r!==null&&Ii(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=jo(t,l);var o=jo(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mS=m&&"documentMode"in document&&11>=document.documentMode,E0=null,Ni=null,b0=null,Oi=!1;function Wo(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Oi||E0==null||E0!==Pt(r)||(r=E0,"selectionStart"in r&&Ii(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),b0&&Z0(b0,r)||(b0=r,r=Jt(Ni,"onSelect"),0<r.length&&(n=new si("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=E0)))}function Qt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var I0={animationend:Qt("Animation","AnimationEnd"),animationiteration:Qt("Animation","AnimationIteration"),animationstart:Qt("Animation","AnimationStart"),transitionend:Qt("Transition","TransitionEnd")},fi={},zo={};m&&(zo=document.createElement("div").style,"AnimationEvent"in window||(delete I0.animationend.animation,delete I0.animationiteration.animation,delete I0.animationstart.animation),"TransitionEvent"in window||delete I0.transitionend.transition);function jt(e){if(fi[e])return fi[e];if(!I0[e])return e;var n=I0[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in zo)return fi[e]=n[t];return e}var Ko=jt("animationend"),$o=jt("animationiteration"),qo=jt("animationstart"),Xo=jt("transitionend"),Zo=new Map,bo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,n){Zo.set(e,n),L(n,[e])}for(var mi=0;mi<bo.length;mi++){var Ti=bo[mi],TS=Ti.toLowerCase(),RS=Ti[0].toUpperCase()+Ti.slice(1);yn(TS,"on"+RS)}yn(Ko,"onAnimationEnd"),yn($o,"onAnimationIteration"),yn(qo,"onAnimationStart"),yn("dblclick","onDoubleClick"),yn("focusin","onFocus"),yn("focusout","onBlur"),yn(Xo,"onTransitionEnd"),G("onMouseEnter",["mouseout","mouseover"]),G("onMouseLeave",["mouseout","mouseover"]),G("onPointerEnter",["pointerout","pointerover"]),G("onPointerLeave",["pointerout","pointerover"]),L("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),L("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),L("onBeforeInput",["compositionend","keypress","textInput","paste"]),L("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),L("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),L("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var et="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("cancel close invalid load scroll toggle".split(" ").concat(et));function ea(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Tu(r,n,void 0,e),e.currentTarget=null}function na(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],A=s.instance,I=s.currentTarget;if(s=s.listener,A!==l&&i.isPropagationStopped())break e;ea(i,s,I),l=A}else for(o=0;o<r.length;o++){if(s=r[o],A=s.instance,I=s.currentTarget,s=s.listener,A!==l&&i.isPropagationStopped())break e;ea(i,s,I),l=A}}}if(Lt)throw e=Zr,Lt=!1,Zr=null,e}function se(e,n){var t=n[Di];t===void 0&&(t=n[Di]=new Set);var r=e+"__bubble";t.has(r)||(ta(n,e,2,!1),t.add(r))}function Ri(e,n,t){var r=0;n&&(r|=4),ta(t,e,r,n)}var _t="_reactListening"+Math.random().toString(36).slice(2);function nt(e){if(!e[_t]){e[_t]=!0,f.forEach(function(t){t!=="selectionchange"&&(pS.has(t)||Ri(t,!1,e),Ri(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[_t]||(n[_t]=!0,Ri("selectionchange",!1,n))}}function ta(e,n,t,r){switch(Mo(n)){case 1:var i=Yu;break;case 4:i=xu;break;default:i=li}t=i.bind(null,n,t,e),i=void 0,!Xr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function pi(e,n,t,r,i){var l=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var A=o.tag;if((A===3||A===4)&&(A=o.stateNode.containerInfo,A===i||A.nodeType===8&&A.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Xn(s),o===null)return;if(A=o.tag,A===5||A===6){r=l=o;continue e}s=s.parentNode}}r=r.return}oo(function(){var I=l,p=Kr(t),P=[];e:{var T=Zo.get(e);if(T!==void 0){var D=si,v=e;switch(e){case"keypress":if(xt(t)===0)break e;case"keydown":case"keyup":D=bu;break;case"focusin":v="focus",D=Ai;break;case"focusout":v="blur",D=Ai;break;case"beforeblur":case"afterblur":D=Ai;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Vu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=tS;break;case Ko:case $o:case qo:D=_u;break;case Xo:D=iS;break;case"scroll":D=wu;break;case"wheel":D=oS;break;case"copy":case"cut":case"paste":D=Wu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=ho}var y=(n&4)!==0,Oe=!y&&e==="scroll",c=y?T!==null?T+"Capture":null:T;y=[];for(var d=I,E;d!==null;){E=d;var M=E.stateNode;if(E.tag===5&&M!==null&&(E=M,c!==null&&(M=Y0(d,c),M!=null&&y.push(tt(d,M,E)))),Oe)break;d=d.return}0<y.length&&(T=new D(T,v,null,t,p),P.push({event:T,listeners:y}))}}if((n&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",T&&t!==zr&&(v=t.relatedTarget||t.fromElement)&&(Xn(v)||v[mn]))break e;if((D||T)&&(T=p.window===p?p:(T=p.ownerDocument)?T.defaultView||T.parentWindow:window,D?(v=t.relatedTarget||t.toElement,D=I,v=v?Xn(v):null,v!==null&&(Oe=qn(v),v!==Oe||v.tag!==5&&v.tag!==6)&&(v=null)):(D=null,v=I),D!==v)){if(y=Uo,M="onMouseLeave",c="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=ho,M="onPointerLeave",c="onPointerEnter",d="pointer"),Oe=D==null?T:f0(D),E=v==null?T:f0(v),T=new y(M,d+"leave",D,t,p),T.target=Oe,T.relatedTarget=E,M=null,Xn(p)===I&&(y=new y(c,d+"enter",v,t,p),y.target=E,y.relatedTarget=Oe,M=y),Oe=M,D&&v)n:{for(y=D,c=v,d=0,E=y;E;E=N0(E))d++;for(E=0,M=c;M;M=N0(M))E++;for(;0<d-E;)y=N0(y),d--;for(;0<E-d;)c=N0(c),E--;for(;d--;){if(y===c||c!==null&&y===c.alternate)break n;y=N0(y),c=N0(c)}y=null}else y=null;D!==null&&ra(P,T,D,y,!1),v!==null&&Oe!==null&&ra(P,Oe,v,y,!0)}}e:{if(T=I?f0(I):window,D=T.nodeName&&T.nodeName.toLowerCase(),D==="select"||D==="input"&&T.type==="file")var B=CS;else if(Bo(T))if(xo)B=NS;else{B=ES;var x=cS}else(D=T.nodeName)&&D.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(B=IS);if(B&&(B=B(e,I))){Yo(P,B,t,p);break e}x&&x(e,T,I),e==="focusout"&&(x=T._wrapperState)&&x.controlled&&T.type==="number"&&Qr(T,"number",T.value)}switch(x=I?f0(I):window,e){case"focusin":(Bo(x)||x.contentEditable==="true")&&(E0=x,Ni=I,b0=null);break;case"focusout":b0=Ni=E0=null;break;case"mousedown":Oi=!0;break;case"contextmenu":case"mouseup":case"dragend":Oi=!1,Wo(P,t,p);break;case"selectionchange":if(mS)break;case"keydown":case"keyup":Wo(P,t,p)}var w;if(Ci)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else c0?yo(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(go&&t.locale!=="ko"&&(c0||j!=="onCompositionStart"?j==="onCompositionEnd"&&c0&&(w=Go()):(Hn=p,ai="value"in Hn?Hn.value:Hn.textContent,c0=!0)),x=Jt(I,j),0<x.length&&(j=new Do(j,e,null,t,p),P.push({event:j,listeners:x}),w?j.data=w:(w=Fo(t),w!==null&&(j.data=w)))),(w=sS?uS(e,t):SS(e,t))&&(I=Jt(I,"onBeforeInput"),0<I.length&&(p=new Do("onBeforeInput","beforeinput",null,t,p),P.push({event:p,listeners:I}),p.data=w))}na(P,n)})}function tt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Jt(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Y0(e,t),l!=null&&r.unshift(tt(e,l,i)),l=Y0(e,n),l!=null&&r.push(tt(e,l,i))),e=e.return}return r}function N0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ra(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var s=t,A=s.alternate,I=s.stateNode;if(A!==null&&A===r)break;s.tag===5&&I!==null&&(s=I,i?(A=Y0(t,l),A!=null&&o.unshift(tt(t,A,s))):i||(A=Y0(t,l),A!=null&&o.push(tt(t,A,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var PS=/\r\n?/g,MS=/\u0000|\uFFFD/g;function ia(e){return(typeof e=="string"?e:""+e).replace(PS,`
`).replace(MS,"")}function Wt(e,n,t){if(n=ia(n),ia(e)!==n&&t)throw Error(a(425))}function zt(){}var Pi=null,Mi=null;function Gi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Li=typeof setTimeout=="function"?setTimeout:void 0,GS=typeof clearTimeout=="function"?clearTimeout:void 0,la=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof la<"u"?function(e){return la.resolve(null).then(e).catch(US)}:Li;function US(e){setTimeout(function(){throw e})}function Ui(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),W0(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);W0(n)}function Fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function oa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var O0=Math.random().toString(36).slice(2),En="__reactFiber$"+O0,rt="__reactProps$"+O0,mn="__reactContainer$"+O0,Di="__reactEvents$"+O0,DS="__reactListeners$"+O0,hS="__reactHandles$"+O0;function Xn(e){var n=e[En];if(n)return n;for(var t=e.parentNode;t;){if(n=t[mn]||t[En]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=oa(e);e!==null;){if(t=e[En])return t;e=oa(e)}return n}e=t,t=e.parentNode}return null}function it(e){return e=e[En]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function f0(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Kt(e){return e[rt]||null}var hi=[],m0=-1;function Bn(e){return{current:e}}function ue(e){0>m0||(e.current=hi[m0],hi[m0]=null,m0--)}function ae(e,n){m0++,hi[m0]=e.current,e.current=n}var Yn={},Ue=Bn(Yn),xe=Bn(!1),Zn=Yn;function T0(e,n){var t=e.type.contextTypes;if(!t)return Yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function $t(){ue(xe),ue(Ue)}function aa(e,n,t){if(Ue.current!==Yn)throw Error(a(168));ae(Ue,n),ae(xe,t)}function sa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(a(108,oe(e)||"Unknown",i));return g({},t,r)}function qt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,Zn=Ue.current,ae(Ue,e),ae(xe,xe.current),!0}function ua(e,n,t){var r=e.stateNode;if(!r)throw Error(a(169));t?(e=sa(e,n,Zn),r.__reactInternalMemoizedMergedChildContext=e,ue(xe),ue(Ue),ae(Ue,e)):ue(xe),ae(xe,t)}var Tn=null,Xt=!1,gi=!1;function Sa(e){Tn===null?Tn=[e]:Tn.push(e)}function gS(e){Xt=!0,Sa(e)}function xn(){if(!gi&&Tn!==null){gi=!0;var e=0,n=re;try{var t=Tn;for(re=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Tn=null,Xt=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(e+1)),Ao(br,xn),i}finally{re=n,gi=!1}}return null}var R0=[],p0=0,Zt=null,bt=0,Xe=[],Ze=0,bn=null,Rn=1,pn="";function e0(e,n){R0[p0++]=bt,R0[p0++]=Zt,Zt=e,bt=n}function Aa(e,n,t){Xe[Ze++]=Rn,Xe[Ze++]=pn,Xe[Ze++]=bn,bn=e;var r=Rn;e=pn;var i=32-ln(r)-1;r&=~(1<<i),t+=1;var l=32-ln(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-ln(n)+i|t<<i|r,pn=l+e}else Rn=1<<l|t<<i|r,pn=e}function vi(e){e.return!==null&&(e0(e,1),Aa(e,1,0))}function Hi(e){for(;e===Zt;)Zt=R0[--p0],R0[p0]=null,bt=R0[--p0],R0[p0]=null;for(;e===bn;)bn=Xe[--Ze],Xe[Ze]=null,pn=Xe[--Ze],Xe[Ze]=null,Rn=Xe[--Ze],Xe[Ze]=null}var ze=null,Ke=null,Ae=!1,an=null;function da(e,n){var t=tn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ca(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ze=e,Ke=Fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ze=e,Ke=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=bn!==null?{id:Rn,overflow:pn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=tn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ze=e,Ke=null,!0):!1;default:return!1}}function yi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fi(e){if(Ae){var n=Ke;if(n){var t=n;if(!Ca(e,n)){if(yi(e))throw Error(a(418));n=Fn(t.nextSibling);var r=ze;n&&Ca(e,n)?da(r,t):(e.flags=e.flags&-4097|2,Ae=!1,ze=e)}}else{if(yi(e))throw Error(a(418));e.flags=e.flags&-4097|2,Ae=!1,ze=e}}}function ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function er(e){if(e!==ze)return!1;if(!Ae)return ca(e),Ae=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Gi(e.type,e.memoizedProps)),n&&(n=Ke)){if(yi(e))throw Ea(),Error(a(418));for(;n;)da(e,n),n=Fn(n.nextSibling)}if(ca(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ke=Fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ke=null}}else Ke=ze?Fn(e.stateNode.nextSibling):null;return!0}function Ea(){for(var e=Ke;e;)e=Fn(e.nextSibling)}function P0(){Ke=ze=null,Ae=!1}function Bi(e){an===null?an=[e]:an.push(e)}var vS=ie.ReactCurrentBatchConfig;function lt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(a(309));var r=t.stateNode}if(!r)throw Error(a(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(a(284));if(!t._owner)throw Error(a(290,e))}return e}function nr(e,n){throw e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ia(e){var n=e._init;return n(e._payload)}function Na(e){function n(c,d){if(e){var E=c.deletions;E===null?(c.deletions=[d],c.flags|=16):E.push(d)}}function t(c,d){if(!e)return null;for(;d!==null;)n(c,d),d=d.sibling;return null}function r(c,d){for(c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function i(c,d){return c=Wn(c,d),c.index=0,c.sibling=null,c}function l(c,d,E){return c.index=E,e?(E=c.alternate,E!==null?(E=E.index,E<d?(c.flags|=2,d):E):(c.flags|=2,d)):(c.flags|=1048576,d)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function s(c,d,E,M){return d===null||d.tag!==6?(d=Ll(E,c.mode,M),d.return=c,d):(d=i(d,E),d.return=c,d)}function A(c,d,E,M){var B=E.type;return B===Be?p(c,d,E.props.children,M,E.key):d!==null&&(d.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ye&&Ia(B)===d.type)?(M=i(d,E.props),M.ref=lt(c,d,E),M.return=c,M):(M=Mr(E.type,E.key,E.props,null,c.mode,M),M.ref=lt(c,d,E),M.return=c,M)}function I(c,d,E,M){return d===null||d.tag!==4||d.stateNode.containerInfo!==E.containerInfo||d.stateNode.implementation!==E.implementation?(d=Ul(E,c.mode,M),d.return=c,d):(d=i(d,E.children||[]),d.return=c,d)}function p(c,d,E,M,B){return d===null||d.tag!==7?(d=s0(E,c.mode,M,B),d.return=c,d):(d=i(d,E),d.return=c,d)}function P(c,d,E){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ll(""+d,c.mode,E),d.return=c,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ve:return E=Mr(d.type,d.key,d.props,null,c.mode,E),E.ref=lt(c,null,d),E.return=c,E;case le:return d=Ul(d,c.mode,E),d.return=c,d;case Ye:var M=d._init;return P(c,M(d._payload),E)}if(y0(d)||Q(d))return d=s0(d,c.mode,E,null),d.return=c,d;nr(c,d)}return null}function T(c,d,E,M){var B=d!==null?d.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return B!==null?null:s(c,d,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ve:return E.key===B?A(c,d,E,M):null;case le:return E.key===B?I(c,d,E,M):null;case Ye:return B=E._init,T(c,d,B(E._payload),M)}if(y0(E)||Q(E))return B!==null?null:p(c,d,E,M,null);nr(c,E)}return null}function D(c,d,E,M,B){if(typeof M=="string"&&M!==""||typeof M=="number")return c=c.get(E)||null,s(d,c,""+M,B);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ve:return c=c.get(M.key===null?E:M.key)||null,A(d,c,M,B);case le:return c=c.get(M.key===null?E:M.key)||null,I(d,c,M,B);case Ye:var x=M._init;return D(c,d,E,x(M._payload),B)}if(y0(M)||Q(M))return c=c.get(E)||null,p(d,c,M,B,null);nr(d,M)}return null}function v(c,d,E,M){for(var B=null,x=null,w=d,j=d=0,Pe=null;w!==null&&j<E.length;j++){w.index>j?(Pe=w,w=null):Pe=w.sibling;var ee=T(c,w,E[j],M);if(ee===null){w===null&&(w=Pe);break}e&&w&&ee.alternate===null&&n(c,w),d=l(ee,d,j),x===null?B=ee:x.sibling=ee,x=ee,w=Pe}if(j===E.length)return t(c,w),Ae&&e0(c,j),B;if(w===null){for(;j<E.length;j++)w=P(c,E[j],M),w!==null&&(d=l(w,d,j),x===null?B=w:x.sibling=w,x=w);return Ae&&e0(c,j),B}for(w=r(c,w);j<E.length;j++)Pe=D(w,c,j,E[j],M),Pe!==null&&(e&&Pe.alternate!==null&&w.delete(Pe.key===null?j:Pe.key),d=l(Pe,d,j),x===null?B=Pe:x.sibling=Pe,x=Pe);return e&&w.forEach(function(zn){return n(c,zn)}),Ae&&e0(c,j),B}function y(c,d,E,M){var B=Q(E);if(typeof B!="function")throw Error(a(150));if(E=B.call(E),E==null)throw Error(a(151));for(var x=B=null,w=d,j=d=0,Pe=null,ee=E.next();w!==null&&!ee.done;j++,ee=E.next()){w.index>j?(Pe=w,w=null):Pe=w.sibling;var zn=T(c,w,ee.value,M);if(zn===null){w===null&&(w=Pe);break}e&&w&&zn.alternate===null&&n(c,w),d=l(zn,d,j),x===null?B=zn:x.sibling=zn,x=zn,w=Pe}if(ee.done)return t(c,w),Ae&&e0(c,j),B;if(w===null){for(;!ee.done;j++,ee=E.next())ee=P(c,ee.value,M),ee!==null&&(d=l(ee,d,j),x===null?B=ee:x.sibling=ee,x=ee);return Ae&&e0(c,j),B}for(w=r(c,w);!ee.done;j++,ee=E.next())ee=D(w,c,j,ee.value,M),ee!==null&&(e&&ee.alternate!==null&&w.delete(ee.key===null?j:ee.key),d=l(ee,d,j),x===null?B=ee:x.sibling=ee,x=ee);return e&&w.forEach(function(AA){return n(c,AA)}),Ae&&e0(c,j),B}function Oe(c,d,E,M){if(typeof E=="object"&&E!==null&&E.type===Be&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ve:e:{for(var B=E.key,x=d;x!==null;){if(x.key===B){if(B=E.type,B===Be){if(x.tag===7){t(c,x.sibling),d=i(x,E.props.children),d.return=c,c=d;break e}}else if(x.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ye&&Ia(B)===x.type){t(c,x.sibling),d=i(x,E.props),d.ref=lt(c,x,E),d.return=c,c=d;break e}t(c,x);break}else n(c,x);x=x.sibling}E.type===Be?(d=s0(E.props.children,c.mode,M,E.key),d.return=c,c=d):(M=Mr(E.type,E.key,E.props,null,c.mode,M),M.ref=lt(c,d,E),M.return=c,c=M)}return o(c);case le:e:{for(x=E.key;d!==null;){if(d.key===x)if(d.tag===4&&d.stateNode.containerInfo===E.containerInfo&&d.stateNode.implementation===E.implementation){t(c,d.sibling),d=i(d,E.children||[]),d.return=c,c=d;break e}else{t(c,d);break}else n(c,d);d=d.sibling}d=Ul(E,c.mode,M),d.return=c,c=d}return o(c);case Ye:return x=E._init,Oe(c,d,x(E._payload),M)}if(y0(E))return v(c,d,E,M);if(Q(E))return y(c,d,E,M);nr(c,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,d!==null&&d.tag===6?(t(c,d.sibling),d=i(d,E),d.return=c,c=d):(t(c,d),d=Ll(E,c.mode,M),d.return=c,c=d),o(c)):t(c,d)}return Oe}var M0=Na(!0),Oa=Na(!1),tr=Bn(null),rr=null,G0=null,Yi=null;function xi(){Yi=G0=rr=null}function wi(e){var n=tr.current;ue(tr),e._currentValue=n}function ki(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function L0(e,n){rr=e,Yi=G0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(ke=!0),e.firstContext=null)}function be(e){var n=e._currentValue;if(Yi!==e)if(e={context:e,memoizedValue:n,next:null},G0===null){if(rr===null)throw Error(a(308));G0=e,rr.dependencies={lanes:0,firstContext:e}}else G0=G0.next=e;return n}var n0=null;function Vi(e){n0===null?n0=[e]:n0.push(e)}function fa(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Vi(n)):(t.next=i.next,i.next=t),n.interleaved=t,Pn(e,r)}function Pn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var wn=!1;function Qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ma(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(X&2)!==0){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Pn(e,t)}return i=r.interleaved,i===null?(n.next=n,Vi(r)):(n.next=i.next,i.next=n),r.interleaved=n,Pn(e,t)}function ir(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ti(e,t)}}function Ta(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function lr(e,n,t,r){var i=e.updateQueue;wn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var A=s,I=A.next;A.next=null,o===null?l=I:o.next=I,o=A;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==o&&(s===null?p.firstBaseUpdate=I:s.next=I,p.lastBaseUpdate=A))}if(l!==null){var P=i.baseState;o=0,p=I=A=null,s=l;do{var T=s.lane,D=s.eventTime;if((r&T)===T){p!==null&&(p=p.next={eventTime:D,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,y=s;switch(T=n,D=t,y.tag){case 1:if(v=y.payload,typeof v=="function"){P=v.call(D,P,T);break e}P=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,T=typeof v=="function"?v.call(D,P,T):v,T==null)break e;P=g({},P,T);break e;case 2:wn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,T=i.effects,T===null?i.effects=[s]:T.push(s))}else D={eventTime:D,lane:T,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(I=p=D,A=P):p=p.next=D,o|=T;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;T=s,s=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);if(p===null&&(A=P),i.baseState=A,i.firstBaseUpdate=I,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);i0|=o,e.lanes=o,e.memoizedState=P}}function Ra(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(a(191,i));i.call(r)}}}var ot={},In=Bn(ot),at=Bn(ot),st=Bn(ot);function t0(e){if(e===ot)throw Error(a(174));return e}function ji(e,n){switch(ae(st,n),ae(at,e),ae(In,ot),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:_r(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=_r(n,e)}ue(In),ae(In,n)}function U0(){ue(In),ue(at),ue(st)}function pa(e){t0(st.current);var n=t0(In.current),t=_r(n,e.type);n!==t&&(ae(at,e),ae(In,t))}function _i(e){at.current===e&&(ue(In),ue(at))}var Ce=Bn(0);function or(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=[];function Wi(){for(var e=0;e<Ji.length;e++)Ji[e]._workInProgressVersionPrimary=null;Ji.length=0}var ar=ie.ReactCurrentDispatcher,zi=ie.ReactCurrentBatchConfig,r0=0,ce=null,me=null,Re=null,sr=!1,ut=!1,St=0,HS=0;function De(){throw Error(a(321))}function Ki(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!on(e[t],n[t]))return!1;return!0}function $i(e,n,t,r,i,l){if(r0=l,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ar.current=e===null||e.memoizedState===null?YS:xS,e=t(r,i),ut){l=0;do{if(ut=!1,St=0,25<=l)throw Error(a(301));l+=1,Re=me=null,n.updateQueue=null,ar.current=wS,e=t(r,i)}while(ut)}if(ar.current=Ar,n=me!==null&&me.next!==null,r0=0,Re=me=ce=null,sr=!1,n)throw Error(a(300));return e}function qi(){var e=St!==0;return St=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ce.memoizedState=Re=e:Re=Re.next=e,Re}function en(){if(me===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var n=Re===null?ce.memoizedState:Re.next;if(n!==null)Re=n,me=e;else{if(e===null)throw Error(a(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Re===null?ce.memoizedState=Re=e:Re=Re.next=e}return Re}function At(e,n){return typeof n=="function"?n(e):n}function Xi(e){var n=en(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=me,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,A=null,I=l;do{var p=I.lane;if((r0&p)===p)A!==null&&(A=A.next={lane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),r=I.hasEagerState?I.eagerState:e(r,I.action);else{var P={lane:p,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null};A===null?(s=A=P,o=r):A=A.next=P,ce.lanes|=p,i0|=p}I=I.next}while(I!==null&&I!==l);A===null?o=r:A.next=s,on(r,n.memoizedState)||(ke=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=A,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,ce.lanes|=l,i0|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Zi(e){var n=en(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);on(l,n.memoizedState)||(ke=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Pa(){}function Ma(e,n){var t=ce,r=en(),i=n(),l=!on(r.memoizedState,i);if(l&&(r.memoizedState=i,ke=!0),r=r.queue,bi(Ua.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Re!==null&&Re.memoizedState.tag&1){if(t.flags|=2048,dt(9,La.bind(null,t,r,i,n),void 0,null),pe===null)throw Error(a(349));(r0&30)!==0||Ga(t,n,i)}return i}function Ga(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function La(e,n,t,r){n.value=t,n.getSnapshot=r,Da(n)&&ha(e)}function Ua(e,n,t){return t(function(){Da(n)&&ha(e)})}function Da(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!on(e,t)}catch{return!0}}function ha(e){var n=Pn(e,1);n!==null&&An(n,e,1,-1)}function ga(e){var n=Nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:At,lastRenderedState:e},n.queue=e,e=e.dispatch=BS.bind(null,ce,e),[n.memoizedState,e]}function dt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function va(){return en().memoizedState}function ur(e,n,t,r){var i=Nn();ce.flags|=e,i.memoizedState=dt(1|n,t,void 0,r===void 0?null:r)}function Sr(e,n,t,r){var i=en();r=r===void 0?null:r;var l=void 0;if(me!==null){var o=me.memoizedState;if(l=o.destroy,r!==null&&Ki(r,o.deps)){i.memoizedState=dt(n,t,l,r);return}}ce.flags|=e,i.memoizedState=dt(1|n,t,l,r)}function Ha(e,n){return ur(8390656,8,e,n)}function bi(e,n){return Sr(2048,8,e,n)}function ya(e,n){return Sr(4,2,e,n)}function Fa(e,n){return Sr(4,4,e,n)}function Ba(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ya(e,n,t){return t=t!=null?t.concat([e]):null,Sr(4,4,Ba.bind(null,n,e),t)}function el(){}function xa(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ki(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function wa(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ki(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function ka(e,n,t){return(r0&21)===0?(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=t):(on(t,n)||(t=Io(),ce.lanes|=t,i0|=t,e.baseState=!0),n)}function yS(e,n){var t=re;re=t!==0&&4>t?t:4,e(!0);var r=zi.transition;zi.transition={};try{e(!1),n()}finally{re=t,zi.transition=r}}function Va(){return en().memoizedState}function FS(e,n,t){var r=_n(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Qa(e))ja(n,t);else if(t=fa(e,n,t,r),t!==null){var i=ye();An(t,e,r,i),_a(t,n,r)}}function BS(e,n,t){var r=_n(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qa(e))ja(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,s=l(o,t);if(i.hasEagerState=!0,i.eagerState=s,on(s,o)){var A=n.interleaved;A===null?(i.next=i,Vi(n)):(i.next=A.next,A.next=i),n.interleaved=i;return}}catch{}finally{}t=fa(e,n,i,r),t!==null&&(i=ye(),An(t,e,r,i),_a(t,n,r))}}function Qa(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function ja(e,n){ut=sr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function _a(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ti(e,t)}}var Ar={readContext:be,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},YS={readContext:be,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:be,useEffect:Ha,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ur(4194308,4,Ba.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ur(4194308,4,e,n)},useInsertionEffect:function(e,n){return ur(4,2,e,n)},useMemo:function(e,n){var t=Nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Nn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=FS.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:ga,useDebugValue:el,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=ga(!1),n=e[0];return e=yS.bind(null,e[1]),Nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ce,i=Nn();if(Ae){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),pe===null)throw Error(a(349));(r0&30)!==0||Ga(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Ha(Ua.bind(null,r,l,e),[e]),r.flags|=2048,dt(9,La.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Nn(),n=pe.identifierPrefix;if(Ae){var t=pn,r=Rn;t=(r&~(1<<32-ln(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=St++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=HS++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},xS={readContext:be,useCallback:xa,useContext:be,useEffect:bi,useImperativeHandle:Ya,useInsertionEffect:ya,useLayoutEffect:Fa,useMemo:wa,useReducer:Xi,useRef:va,useState:function(){return Xi(At)},useDebugValue:el,useDeferredValue:function(e){var n=en();return ka(n,me.memoizedState,e)},useTransition:function(){var e=Xi(At)[0],n=en().memoizedState;return[e,n]},useMutableSource:Pa,useSyncExternalStore:Ma,useId:Va,unstable_isNewReconciler:!1},wS={readContext:be,useCallback:xa,useContext:be,useEffect:bi,useImperativeHandle:Ya,useInsertionEffect:ya,useLayoutEffect:Fa,useMemo:wa,useReducer:Zi,useRef:va,useState:function(){return Zi(At)},useDebugValue:el,useDeferredValue:function(e){var n=en();return me===null?n.memoizedState=e:ka(n,me.memoizedState,e)},useTransition:function(){var e=Zi(At)[0],n=en().memoizedState;return[e,n]},useMutableSource:Pa,useSyncExternalStore:Ma,useId:Va,unstable_isNewReconciler:!1};function sn(e,n){if(e&&e.defaultProps){n=g({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function nl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:g({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var dr={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ye(),i=_n(e),l=Mn(r,i);l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,i),n!==null&&(An(n,e,i,r),ir(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ye(),i=_n(e),l=Mn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,i),n!==null&&(An(n,e,i,r),ir(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ye(),r=_n(e),i=Mn(t,r);i.tag=2,n!=null&&(i.callback=n),n=kn(e,i,r),n!==null&&(An(n,e,r,t),ir(n,e,r))}};function Ja(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Z0(t,r)||!Z0(i,l):!0}function Wa(e,n,t){var r=!1,i=Yn,l=n.contextType;return typeof l=="object"&&l!==null?l=be(l):(i=we(n)?Zn:Ue.current,r=n.contextTypes,l=(r=r!=null)?T0(e,i):Yn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=dr,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function za(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&dr.enqueueReplaceState(n,n.state,null)}function tl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Qi(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=be(l):(l=we(n)?Zn:Ue.current,i.context=T0(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(nl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&dr.enqueueReplaceState(i,i.state,null),lr(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function D0(e,n){try{var t="",r=n;do t+=Z(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function rl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function il(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var kS=typeof WeakMap=="function"?WeakMap:Map;function Ka(e,n,t){t=Mn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){fr||(fr=!0,fl=r),il(e,n)},t}function $a(e,n,t){t=Mn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){il(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){il(e,n),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function qa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new kS;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=eA.bind(null,e,n,t),n.then(e,e))}function Xa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Za(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Mn(-1,1),n.tag=2,kn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var VS=ie.ReactCurrentOwner,ke=!1;function He(e,n,t,r){n.child=e===null?Oa(n,null,t,r):M0(n,e.child,t,r)}function ba(e,n,t,r,i){t=t.render;var l=n.ref;return L0(n,i),r=$i(e,n,t,r,l,i),t=qi(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Gn(e,n,i)):(Ae&&t&&vi(n),n.flags|=1,He(e,n,r,i),n.child)}function es(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Gl(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,ns(e,n,l,r,i)):(e=Mr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Z0,t(o,r)&&e.ref===n.ref)return Gn(e,n,i)}return n.flags|=1,e=Wn(l,r),e.ref=n.ref,e.return=n,n.child=e}function ns(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Z0(l,r)&&e.ref===n.ref)if(ke=!1,n.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ke=!0);else return n.lanes=e.lanes,Gn(e,n,i)}return ll(e,n,t,r,i)}function ts(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(g0,$e),$e|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ae(g0,$e),$e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,ae(g0,$e),$e|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,ae(g0,$e),$e|=r;return He(e,n,i,t),n.child}function rs(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ll(e,n,t,r,i){var l=we(t)?Zn:Ue.current;return l=T0(n,l),L0(n,i),t=$i(e,n,t,r,l,i),r=qi(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Gn(e,n,i)):(Ae&&r&&vi(n),n.flags|=1,He(e,n,t,i),n.child)}function is(e,n,t,r,i){if(we(t)){var l=!0;qt(n)}else l=!1;if(L0(n,i),n.stateNode===null)cr(e,n),Wa(n,t,r),tl(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var A=o.context,I=t.contextType;typeof I=="object"&&I!==null?I=be(I):(I=we(t)?Zn:Ue.current,I=T0(n,I));var p=t.getDerivedStateFromProps,P=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";P||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||A!==I)&&za(n,o,r,I),wn=!1;var T=n.memoizedState;o.state=T,lr(n,r,o,i),A=n.memoizedState,s!==r||T!==A||xe.current||wn?(typeof p=="function"&&(nl(n,t,p,r),A=n.memoizedState),(s=wn||Ja(n,t,s,r,T,A,I))?(P||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=A),o.props=r,o.state=A,o.context=I,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,ma(e,n),s=n.memoizedProps,I=n.type===n.elementType?s:sn(n.type,s),o.props=I,P=n.pendingProps,T=o.context,A=t.contextType,typeof A=="object"&&A!==null?A=be(A):(A=we(t)?Zn:Ue.current,A=T0(n,A));var D=t.getDerivedStateFromProps;(p=typeof D=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==P||T!==A)&&za(n,o,r,A),wn=!1,T=n.memoizedState,o.state=T,lr(n,r,o,i);var v=n.memoizedState;s!==P||T!==v||xe.current||wn?(typeof D=="function"&&(nl(n,t,D,r),v=n.memoizedState),(I=wn||Ja(n,t,I,r,T,v,A)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,A),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,A)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),o.props=r,o.state=v,o.context=A,r=I):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),r=!1)}return ol(e,n,t,r,l,i)}function ol(e,n,t,r,i,l){rs(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&ua(n,t,!1),Gn(e,n,l);r=n.stateNode,VS.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=M0(n,e.child,null,l),n.child=M0(n,null,s,l)):He(e,n,s,l),n.memoizedState=r.state,i&&ua(n,t,!0),n.child}function ls(e){var n=e.stateNode;n.pendingContext?aa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&aa(e,n.context,!1),ji(e,n.containerInfo)}function os(e,n,t,r,i){return P0(),Bi(i),n.flags|=256,He(e,n,t,r),n.child}var al={dehydrated:null,treeContext:null,retryLane:0};function sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function as(e,n,t){var r=n.pendingProps,i=Ce.current,l=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(Ce,i&1),e===null)return Fi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Gr(o,r,0,null),e=s0(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=sl(t),n.memoizedState=al,e):ul(n,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return QS(e,n,o,r,s,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,s=i.sibling;var A={mode:"hidden",children:r.children};return(o&1)===0&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=A,n.deletions=null):(r=Wn(i,A),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=Wn(s,l):(l=s0(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?sl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=al,r}return l=e.child,e=l.sibling,r=Wn(l,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ul(e,n){return n=Gr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Cr(e,n,t,r){return r!==null&&Bi(r),M0(n,e.child,null,t),e=ul(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function QS(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=rl(Error(a(422))),Cr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Gr({mode:"visible",children:r.children},i,0,null),l=s0(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,(n.mode&1)!==0&&M0(n,e.child,null,o),n.child.memoizedState=sl(o),n.memoizedState=al,l);if((n.mode&1)===0)return Cr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(a(419)),r=rl(l,r,void 0),Cr(e,n,o,r)}if(s=(o&e.childLanes)!==0,ke||s){if(r=pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Pn(e,i),An(r,e,i,-1))}return Ml(),r=rl(Error(a(421))),Cr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=nA.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,Ke=Fn(i.nextSibling),ze=n,Ae=!0,an=null,e!==null&&(Xe[Ze++]=Rn,Xe[Ze++]=pn,Xe[Ze++]=bn,Rn=e.id,pn=e.overflow,bn=n),n=ul(n,r.children),n.flags|=4096,n)}function ss(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ki(e.return,n,t)}function Sl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function us(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(He(e,n,r.children,t),r=Ce.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ss(e,t,n);else if(e.tag===19)ss(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(Ce,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&or(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Sl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&or(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Sl(n,!0,t,null,l);break;case"together":Sl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function cr(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),i0|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=Wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function jS(e,n,t){switch(n.tag){case 3:ls(n),P0();break;case 5:pa(n);break;case 1:we(n.type)&&qt(n);break;case 4:ji(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ae(tr,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ae(Ce,Ce.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?as(e,n,t):(ae(Ce,Ce.current&1),e=Gn(e,n,t),e!==null?e.sibling:null);ae(Ce,Ce.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return us(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(Ce,Ce.current),r)break;return null;case 22:case 23:return n.lanes=0,ts(e,n,t)}return Gn(e,n,t)}var Ss,Al,As,ds;Ss=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Al=function(){},As=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,t0(In.current);var l=null;switch(t){case"input":i=kr(e,i),r=kr(e,r),l=[];break;case"select":i=g({},i,{value:void 0}),r=g({},r,{value:void 0}),l=[];break;case"textarea":i=jr(e,i),r=jr(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zt)}Jr(t,r);var o;t=null;for(I in i)if(!r.hasOwnProperty(I)&&i.hasOwnProperty(I)&&i[I]!=null)if(I==="style"){var s=i[I];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else I!=="dangerouslySetInnerHTML"&&I!=="children"&&I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(N.hasOwnProperty(I)?l||(l=[]):(l=l||[]).push(I,null));for(I in r){var A=r[I];if(s=i!=null?i[I]:void 0,r.hasOwnProperty(I)&&A!==s&&(A!=null||s!=null))if(I==="style")if(s){for(o in s)!s.hasOwnProperty(o)||A&&A.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in A)A.hasOwnProperty(o)&&s[o]!==A[o]&&(t||(t={}),t[o]=A[o])}else t||(l||(l=[]),l.push(I,t)),t=A;else I==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,s=s?s.__html:void 0,A!=null&&s!==A&&(l=l||[]).push(I,A)):I==="children"?typeof A!="string"&&typeof A!="number"||(l=l||[]).push(I,""+A):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&(N.hasOwnProperty(I)?(A!=null&&I==="onScroll"&&se("scroll",e),l||s===A||(l=[])):(l=l||[]).push(I,A))}t&&(l=l||[]).push("style",t);var I=l;(n.updateQueue=I)&&(n.flags|=4)}},ds=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ct(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function _S(e,n,t){var r=n.pendingProps;switch(Hi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(n),null;case 1:return we(n.type)&&$t(),he(n),null;case 3:return r=n.stateNode,U0(),ue(xe),ue(Ue),Wi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(er(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,an!==null&&(Rl(an),an=null))),Al(e,n),he(n),null;case 5:_i(n);var i=t0(st.current);if(t=n.type,e!==null&&n.stateNode!=null)As(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(a(166));return he(n),null}if(e=t0(In.current),er(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[En]=n,r[rt]=l,e=(n.mode&1)!==0,t){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<et.length;i++)se(et[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Jl(r,l),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},se("invalid",r);break;case"textarea":Kl(r,l),se("invalid",r)}Jr(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Wt(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Wt(r.textContent,s,e),i=["children",""+s]):N.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&se("scroll",r)}switch(t){case"input":pt(r),zl(r,l,!0);break;case"textarea":pt(r),ql(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=zt)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[En]=n,e[rt]=r,Ss(e,n,!1,!1),n.stateNode=e;e:{switch(o=Wr(t,r),t){case"dialog":se("cancel",e),se("close",e),i=r;break;case"iframe":case"object":case"embed":se("load",e),i=r;break;case"video":case"audio":for(i=0;i<et.length;i++)se(et[i],e);i=r;break;case"source":se("error",e),i=r;break;case"img":case"image":case"link":se("error",e),se("load",e),i=r;break;case"details":se("toggle",e),i=r;break;case"input":Jl(e,r),i=kr(e,r),se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=g({},r,{value:void 0}),se("invalid",e);break;case"textarea":Kl(e,r),i=jr(e,r),se("invalid",e);break;default:i=r}Jr(t,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var A=s[l];l==="style"?eo(e,A):l==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Zl(e,A)):l==="children"?typeof A=="string"?(t!=="textarea"||A!=="")&&F0(e,A):typeof A=="number"&&F0(e,""+A):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(N.hasOwnProperty(l)?A!=null&&l==="onScroll"&&se("scroll",e):A!=null&&Fe(e,l,A,o))}switch(t){case"input":pt(e),zl(e,r,!1);break;case"textarea":pt(e),ql(e);break;case"option":r.value!=null&&e.setAttribute("value",""+te(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?u0(e,!!r.multiple,l,!1):r.defaultValue!=null&&u0(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zt)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return he(n),null;case 6:if(e&&n.stateNode!=null)ds(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(t=t0(st.current),t0(In.current),er(n)){if(r=n.stateNode,t=n.memoizedProps,r[En]=n,(l=r.nodeValue!==t)&&(e=ze,e!==null))switch(e.tag){case 3:Wt(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wt(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[En]=n,n.stateNode=r}return he(n),null;case 13:if(ue(Ce),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&Ke!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Ea(),P0(),n.flags|=98560,l=!1;else if(l=er(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(a(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(a(317));l[En]=n}else P0(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;he(n),l=!1}else an!==null&&(Rl(an),an=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Te===0&&(Te=3):Ml())),n.updateQueue!==null&&(n.flags|=4),he(n),null);case 4:return U0(),Al(e,n),e===null&&nt(n.stateNode.containerInfo),he(n),null;case 10:return wi(n.type._context),he(n),null;case 17:return we(n.type)&&$t(),he(n),null;case 19:if(ue(Ce),l=n.memoizedState,l===null)return he(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Ct(l,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=or(e),o!==null){for(n.flags|=128,Ct(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ae(Ce,Ce.current&1|2),n.child}e=e.sibling}l.tail!==null&&Ne()>v0&&(n.flags|=128,r=!0,Ct(l,!1),n.lanes=4194304)}else{if(!r)if(e=or(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ct(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Ae)return he(n),null}else 2*Ne()-l.renderingStartTime>v0&&t!==1073741824&&(n.flags|=128,r=!0,Ct(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Ne(),n.sibling=null,t=Ce.current,ae(Ce,r?t&1|2:t&1),n):(he(n),null);case 22:case 23:return Pl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?($e&1073741824)!==0&&(he(n),n.subtreeFlags&6&&(n.flags|=8192)):he(n),null;case 24:return null;case 25:return null}throw Error(a(156,n.tag))}function JS(e,n){switch(Hi(n),n.tag){case 1:return we(n.type)&&$t(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return U0(),ue(xe),ue(Ue),Wi(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return _i(n),null;case 13:if(ue(Ce),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));P0()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ue(Ce),null;case 4:return U0(),null;case 10:return wi(n.type._context),null;case 22:case 23:return Pl(),null;case 24:return null;default:return null}}var Er=!1,ge=!1,WS=typeof WeakSet=="function"?WeakSet:Set,h=null;function h0(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ie(e,n,r)}else t.current=null}function dl(e,n,t){try{t()}catch(r){Ie(e,n,r)}}var Cs=!1;function zS(e,n){if(Pi=Ft,e=Jo(),Ii(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,s=-1,A=-1,I=0,p=0,P=e,T=null;n:for(;;){for(var D;P!==t||i!==0&&P.nodeType!==3||(s=o+i),P!==l||r!==0&&P.nodeType!==3||(A=o+r),P.nodeType===3&&(o+=P.nodeValue.length),(D=P.firstChild)!==null;)T=P,P=D;for(;;){if(P===e)break n;if(T===t&&++I===i&&(s=o),T===l&&++p===r&&(A=o),(D=P.nextSibling)!==null)break;P=T,T=P.parentNode}P=D}t=s===-1||A===-1?null:{start:s,end:A}}else t=null}t=t||{start:0,end:0}}else t=null;for(Mi={focusedElem:e,selectionRange:t},Ft=!1,h=n;h!==null;)if(n=h,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,h=e;else for(;h!==null;){n=h;try{var v=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,Oe=v.memoizedState,c=n.stateNode,d=c.getSnapshotBeforeUpdate(n.elementType===n.type?y:sn(n.type,y),Oe);c.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var E=n.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(M){Ie(n,n.return,M)}if(e=n.sibling,e!==null){e.return=n.return,h=e;break}h=n.return}return v=Cs,Cs=!1,v}function ct(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&dl(n,t,l)}i=i.next}while(i!==r)}}function Ir(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Cl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function cs(e){var n=e.alternate;n!==null&&(e.alternate=null,cs(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[En],delete n[rt],delete n[Di],delete n[DS],delete n[hS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Es(e){return e.tag===5||e.tag===3||e.tag===4}function Is(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Es(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=zt));else if(r!==4&&(e=e.child,e!==null))for(cl(e,n,t),e=e.sibling;e!==null;)cl(e,n,t),e=e.sibling}function El(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(El(e,n,t),e=e.sibling;e!==null;)El(e,n,t),e=e.sibling}var Me=null,un=!1;function Vn(e,n,t){for(t=t.child;t!==null;)Ns(e,n,t),t=t.sibling}function Ns(e,n,t){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Dt,t)}catch{}switch(t.tag){case 5:ge||h0(t,n);case 6:var r=Me,i=un;Me=null,Vn(e,n,t),Me=r,un=i,Me!==null&&(un?(e=Me,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Me.removeChild(t.stateNode));break;case 18:Me!==null&&(un?(e=Me,t=t.stateNode,e.nodeType===8?Ui(e.parentNode,t):e.nodeType===1&&Ui(e,t),W0(e)):Ui(Me,t.stateNode));break;case 4:r=Me,i=un,Me=t.stateNode.containerInfo,un=!0,Vn(e,n,t),Me=r,un=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&dl(t,n,o),i=i.next}while(i!==r)}Vn(e,n,t);break;case 1:if(!ge&&(h0(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){Ie(t,n,s)}Vn(e,n,t);break;case 21:Vn(e,n,t);break;case 22:t.mode&1?(ge=(r=ge)||t.memoizedState!==null,Vn(e,n,t),ge=r):Vn(e,n,t);break;default:Vn(e,n,t)}}function Os(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new WS),n.forEach(function(r){var i=tA.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Sn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:Me=s.stateNode,un=!1;break e;case 3:Me=s.stateNode.containerInfo,un=!0;break e;case 4:Me=s.stateNode.containerInfo,un=!0;break e}s=s.return}if(Me===null)throw Error(a(160));Ns(l,o,i),Me=null,un=!1;var A=i.alternate;A!==null&&(A.return=null),i.return=null}catch(I){Ie(i,n,I)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)fs(n,e),n=n.sibling}function fs(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sn(n,e),On(e),r&4){try{ct(3,e,e.return),Ir(3,e)}catch(y){Ie(e,e.return,y)}try{ct(5,e,e.return)}catch(y){Ie(e,e.return,y)}}break;case 1:Sn(n,e),On(e),r&512&&t!==null&&h0(t,t.return);break;case 5:if(Sn(n,e),On(e),r&512&&t!==null&&h0(t,t.return),e.flags&32){var i=e.stateNode;try{F0(i,"")}catch(y){Ie(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,s=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Wl(i,l),Wr(s,o);var I=Wr(s,l);for(o=0;o<A.length;o+=2){var p=A[o],P=A[o+1];p==="style"?eo(i,P):p==="dangerouslySetInnerHTML"?Zl(i,P):p==="children"?F0(i,P):Fe(i,p,P,I)}switch(s){case"input":Vr(i,l);break;case"textarea":$l(i,l);break;case"select":var T=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var D=l.value;D!=null?u0(i,!!l.multiple,D,!1):T!==!!l.multiple&&(l.defaultValue!=null?u0(i,!!l.multiple,l.defaultValue,!0):u0(i,!!l.multiple,l.multiple?[]:"",!1))}i[rt]=l}catch(y){Ie(e,e.return,y)}}break;case 6:if(Sn(n,e),On(e),r&4){if(e.stateNode===null)throw Error(a(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(y){Ie(e,e.return,y)}}break;case 3:if(Sn(n,e),On(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{W0(n.containerInfo)}catch(y){Ie(e,e.return,y)}break;case 4:Sn(n,e),On(e);break;case 13:Sn(n,e),On(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Ol=Ne())),r&4&&Os(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(ge=(I=ge)||p,Sn(n,e),ge=I):Sn(n,e),On(e),r&8192){if(I=e.memoizedState!==null,(e.stateNode.isHidden=I)&&!p&&(e.mode&1)!==0)for(h=e,p=e.child;p!==null;){for(P=h=p;h!==null;){switch(T=h,D=T.child,T.tag){case 0:case 11:case 14:case 15:ct(4,T,T.return);break;case 1:h0(T,T.return);var v=T.stateNode;if(typeof v.componentWillUnmount=="function"){r=T,t=T.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(y){Ie(r,t,y)}}break;case 5:h0(T,T.return);break;case 22:if(T.memoizedState!==null){Rs(P);continue}}D!==null?(D.return=T,h=D):Rs(P)}p=p.sibling}e:for(p=null,P=e;;){if(P.tag===5){if(p===null){p=P;try{i=P.stateNode,I?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=P.stateNode,A=P.memoizedProps.style,o=A!=null&&A.hasOwnProperty("display")?A.display:null,s.style.display=bl("display",o))}catch(y){Ie(e,e.return,y)}}}else if(P.tag===6){if(p===null)try{P.stateNode.nodeValue=I?"":P.memoizedProps}catch(y){Ie(e,e.return,y)}}else if((P.tag!==22&&P.tag!==23||P.memoizedState===null||P===e)&&P.child!==null){P.child.return=P,P=P.child;continue}if(P===e)break e;for(;P.sibling===null;){if(P.return===null||P.return===e)break e;p===P&&(p=null),P=P.return}p===P&&(p=null),P.sibling.return=P.return,P=P.sibling}}break;case 19:Sn(n,e),On(e),r&4&&Os(e);break;case 21:break;default:Sn(n,e),On(e)}}function On(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Es(t)){var r=t;break e}t=t.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(F0(i,""),r.flags&=-33);var l=Is(e);El(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Is(e);cl(e,s,o);break;default:throw Error(a(161))}}catch(A){Ie(e,e.return,A)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function KS(e,n,t){h=e,ms(e)}function ms(e,n,t){for(var r=(e.mode&1)!==0;h!==null;){var i=h,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Er;if(!o){var s=i.alternate,A=s!==null&&s.memoizedState!==null||ge;s=Er;var I=ge;if(Er=o,(ge=A)&&!I)for(h=i;h!==null;)o=h,A=o.child,o.tag===22&&o.memoizedState!==null?ps(i):A!==null?(A.return=o,h=A):ps(i);for(;l!==null;)h=l,ms(l),l=l.sibling;h=i,Er=s,ge=I}Ts(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,h=l):Ts(e)}}function Ts(e){for(;h!==null;){var n=h;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:ge||Ir(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ge)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Ra(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ra(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var A=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&t.focus();break;case"img":A.src&&(t.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var I=n.alternate;if(I!==null){var p=I.memoizedState;if(p!==null){var P=p.dehydrated;P!==null&&W0(P)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}ge||n.flags&512&&Cl(n)}catch(T){Ie(n,n.return,T)}}if(n===e){h=null;break}if(t=n.sibling,t!==null){t.return=n.return,h=t;break}h=n.return}}function Rs(e){for(;h!==null;){var n=h;if(n===e){h=null;break}var t=n.sibling;if(t!==null){t.return=n.return,h=t;break}h=n.return}}function ps(e){for(;h!==null;){var n=h;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ir(4,n)}catch(A){Ie(n,t,A)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(A){Ie(n,i,A)}}var l=n.return;try{Cl(n)}catch(A){Ie(n,l,A)}break;case 5:var o=n.return;try{Cl(n)}catch(A){Ie(n,o,A)}}}catch(A){Ie(n,n.return,A)}if(n===e){h=null;break}var s=n.sibling;if(s!==null){s.return=n.return,h=s;break}h=n.return}}var $S=Math.ceil,Nr=ie.ReactCurrentDispatcher,Il=ie.ReactCurrentOwner,nn=ie.ReactCurrentBatchConfig,X=0,pe=null,fe=null,Ge=0,$e=0,g0=Bn(0),Te=0,Et=null,i0=0,Or=0,Nl=0,It=null,Ve=null,Ol=0,v0=1/0,Ln=null,fr=!1,fl=null,Qn=null,mr=!1,jn=null,Tr=0,Nt=0,ml=null,Rr=-1,pr=0;function ye(){return(X&6)!==0?Ne():Rr!==-1?Rr:Rr=Ne()}function _n(e){return(e.mode&1)===0?1:(X&2)!==0&&Ge!==0?Ge&-Ge:vS.transition!==null?(pr===0&&(pr=Io()),pr):(e=re,e!==0||(e=window.event,e=e===void 0?16:Mo(e.type)),e)}function An(e,n,t,r){if(50<Nt)throw Nt=0,ml=null,Error(a(185));V0(e,t,r),((X&2)===0||e!==pe)&&(e===pe&&((X&2)===0&&(Or|=t),Te===4&&Jn(e,Ge)),Qe(e,r),t===1&&X===0&&(n.mode&1)===0&&(v0=Ne()+500,Xt&&xn()))}function Qe(e,n){var t=e.callbackNode;vu(e,n);var r=vt(e,e===pe?Ge:0);if(r===0)t!==null&&Co(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Co(t),n===1)e.tag===0?gS(Ms.bind(null,e)):Sa(Ms.bind(null,e)),LS(function(){(X&6)===0&&xn()}),t=null;else{switch(No(r)){case 1:t=br;break;case 4:t=co;break;case 16:t=Ut;break;case 536870912:t=Eo;break;default:t=Ut}t=Hs(t,Ps.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ps(e,n){if(Rr=-1,pr=0,(X&6)!==0)throw Error(a(327));var t=e.callbackNode;if(H0()&&e.callbackNode!==t)return null;var r=vt(e,e===pe?Ge:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Pr(e,r);else{n=r;var i=X;X|=2;var l=Ls();(pe!==e||Ge!==n)&&(Ln=null,v0=Ne()+500,o0(e,n));do try{ZS();break}catch(s){Gs(e,s)}while(!0);xi(),Nr.current=l,X=i,fe!==null?n=0:(pe=null,Ge=0,n=Te)}if(n!==0){if(n===2&&(i=ei(e),i!==0&&(r=i,n=Tl(e,i))),n===1)throw t=Et,o0(e,0),Jn(e,r),Qe(e,Ne()),t;if(n===6)Jn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!qS(i)&&(n=Pr(e,r),n===2&&(l=ei(e),l!==0&&(r=l,n=Tl(e,l))),n===1))throw t=Et,o0(e,0),Jn(e,r),Qe(e,Ne()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(a(345));case 2:a0(e,Ve,Ln);break;case 3:if(Jn(e,r),(r&130023424)===r&&(n=Ol+500-Ne(),10<n)){if(vt(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Li(a0.bind(null,e,Ve,Ln),n);break}a0(e,Ve,Ln);break;case 4:if(Jn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-ln(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$S(r/1960))-r,10<r){e.timeoutHandle=Li(a0.bind(null,e,Ve,Ln),r);break}a0(e,Ve,Ln);break;case 5:a0(e,Ve,Ln);break;default:throw Error(a(329))}}}return Qe(e,Ne()),e.callbackNode===t?Ps.bind(null,e):null}function Tl(e,n){var t=It;return e.current.memoizedState.isDehydrated&&(o0(e,n).flags|=256),e=Pr(e,n),e!==2&&(n=Ve,Ve=t,n!==null&&Rl(n)),e}function Rl(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function qS(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!on(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Jn(e,n){for(n&=~Nl,n&=~Or,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-ln(n),r=1<<t;e[t]=-1,n&=~r}}function Ms(e){if((X&6)!==0)throw Error(a(327));H0();var n=vt(e,0);if((n&1)===0)return Qe(e,Ne()),null;var t=Pr(e,n);if(e.tag!==0&&t===2){var r=ei(e);r!==0&&(n=r,t=Tl(e,r))}if(t===1)throw t=Et,o0(e,0),Jn(e,n),Qe(e,Ne()),t;if(t===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,a0(e,Ve,Ln),Qe(e,Ne()),null}function pl(e,n){var t=X;X|=1;try{return e(n)}finally{X=t,X===0&&(v0=Ne()+500,Xt&&xn())}}function l0(e){jn!==null&&jn.tag===0&&(X&6)===0&&H0();var n=X;X|=1;var t=nn.transition,r=re;try{if(nn.transition=null,re=1,e)return e()}finally{re=r,nn.transition=t,X=n,(X&6)===0&&xn()}}function Pl(){$e=g0.current,ue(g0)}function o0(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,GS(t)),fe!==null)for(t=fe.return;t!==null;){var r=t;switch(Hi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$t();break;case 3:U0(),ue(xe),ue(Ue),Wi();break;case 5:_i(r);break;case 4:U0();break;case 13:ue(Ce);break;case 19:ue(Ce);break;case 10:wi(r.type._context);break;case 22:case 23:Pl()}t=t.return}if(pe=e,fe=e=Wn(e.current,null),Ge=$e=n,Te=0,Et=null,Nl=Or=i0=0,Ve=It=null,n0!==null){for(n=0;n<n0.length;n++)if(t=n0[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}n0=null}return e}function Gs(e,n){do{var t=fe;try{if(xi(),ar.current=Ar,sr){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sr=!1}if(r0=0,Re=me=ce=null,ut=!1,St=0,Il.current=null,t===null||t.return===null){Te=1,Et=n,fe=null;break}e:{var l=e,o=t.return,s=t,A=n;if(n=Ge,s.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var I=A,p=s,P=p.tag;if((p.mode&1)===0&&(P===0||P===11||P===15)){var T=p.alternate;T?(p.updateQueue=T.updateQueue,p.memoizedState=T.memoizedState,p.lanes=T.lanes):(p.updateQueue=null,p.memoizedState=null)}var D=Xa(o);if(D!==null){D.flags&=-257,Za(D,o,s,l,n),D.mode&1&&qa(l,I,n),n=D,A=I;var v=n.updateQueue;if(v===null){var y=new Set;y.add(A),n.updateQueue=y}else v.add(A);break e}else{if((n&1)===0){qa(l,I,n),Ml();break e}A=Error(a(426))}}else if(Ae&&s.mode&1){var Oe=Xa(o);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),Za(Oe,o,s,l,n),Bi(D0(A,s));break e}}l=A=D0(A,s),Te!==4&&(Te=2),It===null?It=[l]:It.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var c=Ka(l,A,n);Ta(l,c);break e;case 1:s=A;var d=l.type,E=l.stateNode;if((l.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Qn===null||!Qn.has(E)))){l.flags|=65536,n&=-n,l.lanes|=n;var M=$a(l,s,n);Ta(l,M);break e}}l=l.return}while(l!==null)}Ds(t)}catch(B){n=B,fe===t&&t!==null&&(fe=t=t.return);continue}break}while(!0)}function Ls(){var e=Nr.current;return Nr.current=Ar,e===null?Ar:e}function Ml(){(Te===0||Te===3||Te===2)&&(Te=4),pe===null||(i0&268435455)===0&&(Or&268435455)===0||Jn(pe,Ge)}function Pr(e,n){var t=X;X|=2;var r=Ls();(pe!==e||Ge!==n)&&(Ln=null,o0(e,n));do try{XS();break}catch(i){Gs(e,i)}while(!0);if(xi(),X=t,Nr.current=r,fe!==null)throw Error(a(261));return pe=null,Ge=0,Te}function XS(){for(;fe!==null;)Us(fe)}function ZS(){for(;fe!==null&&!pu();)Us(fe)}function Us(e){var n=vs(e.alternate,e,$e);e.memoizedProps=e.pendingProps,n===null?Ds(e):fe=n,Il.current=null}function Ds(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=_S(t,n,$e),t!==null){fe=t;return}}else{if(t=JS(t,n),t!==null){t.flags&=32767,fe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,fe=null;return}}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);Te===0&&(Te=5)}function a0(e,n,t){var r=re,i=nn.transition;try{nn.transition=null,re=1,bS(e,n,t,r)}finally{nn.transition=i,re=r}return null}function bS(e,n,t,r){do H0();while(jn!==null);if((X&6)!==0)throw Error(a(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Hu(e,l),e===pe&&(fe=pe=null,Ge=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||mr||(mr=!0,Hs(Ut,function(){return H0(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=nn.transition,nn.transition=null;var o=re;re=1;var s=X;X|=4,Il.current=null,zS(e,t),fs(t,e),fS(Mi),Ft=!!Pi,Mi=Pi=null,e.current=t,KS(t),Pu(),X=s,re=o,nn.transition=l}else e.current=t;if(mr&&(mr=!1,jn=e,Tr=i),l=e.pendingLanes,l===0&&(Qn=null),Lu(t.stateNode),Qe(e,Ne()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(fr)throw fr=!1,e=fl,fl=null,e;return(Tr&1)!==0&&e.tag!==0&&H0(),l=e.pendingLanes,(l&1)!==0?e===ml?Nt++:(Nt=0,ml=e):Nt=0,xn(),null}function H0(){if(jn!==null){var e=No(Tr),n=nn.transition,t=re;try{if(nn.transition=null,re=16>e?16:e,jn===null)var r=!1;else{if(e=jn,jn=null,Tr=0,(X&6)!==0)throw Error(a(331));var i=X;for(X|=4,h=e.current;h!==null;){var l=h,o=l.child;if((h.flags&16)!==0){var s=l.deletions;if(s!==null){for(var A=0;A<s.length;A++){var I=s[A];for(h=I;h!==null;){var p=h;switch(p.tag){case 0:case 11:case 15:ct(8,p,l)}var P=p.child;if(P!==null)P.return=p,h=P;else for(;h!==null;){p=h;var T=p.sibling,D=p.return;if(cs(p),p===I){h=null;break}if(T!==null){T.return=D,h=T;break}h=D}}}var v=l.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var Oe=y.sibling;y.sibling=null,y=Oe}while(y!==null)}}h=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,h=o;else e:for(;h!==null;){if(l=h,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:ct(9,l,l.return)}var c=l.sibling;if(c!==null){c.return=l.return,h=c;break e}h=l.return}}var d=e.current;for(h=d;h!==null;){o=h;var E=o.child;if((o.subtreeFlags&2064)!==0&&E!==null)E.return=o,h=E;else e:for(o=d;h!==null;){if(s=h,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Ir(9,s)}}catch(B){Ie(s,s.return,B)}if(s===o){h=null;break e}var M=s.sibling;if(M!==null){M.return=s.return,h=M;break e}h=s.return}}if(X=i,xn(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Dt,e)}catch{}r=!0}return r}finally{re=t,nn.transition=n}}return!1}function hs(e,n,t){n=D0(t,n),n=Ka(e,n,1),e=kn(e,n,1),n=ye(),e!==null&&(V0(e,1,n),Qe(e,n))}function Ie(e,n,t){if(e.tag===3)hs(e,e,t);else for(;n!==null;){if(n.tag===3){hs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){e=D0(t,e),e=$a(n,e,1),n=kn(n,e,1),e=ye(),n!==null&&(V0(n,1,e),Qe(n,e));break}}n=n.return}}function eA(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ye(),e.pingedLanes|=e.suspendedLanes&t,pe===e&&(Ge&t)===t&&(Te===4||Te===3&&(Ge&130023424)===Ge&&500>Ne()-Ol?o0(e,0):Nl|=t),Qe(e,n)}function gs(e,n){n===0&&((e.mode&1)===0?n=1:(n=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var t=ye();e=Pn(e,n),e!==null&&(V0(e,n,t),Qe(e,t))}function nA(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),gs(e,t)}function tA(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(n),gs(e,t)}var vs;vs=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||xe.current)ke=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return ke=!1,jS(e,n,t);ke=(e.flags&131072)!==0}else ke=!1,Ae&&(n.flags&1048576)!==0&&Aa(n,bt,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;cr(e,n),e=n.pendingProps;var i=T0(n,Ue.current);L0(n,t),i=$i(null,n,r,e,i,t);var l=qi();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,we(r)?(l=!0,qt(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qi(n),i.updater=dr,n.stateNode=i,i._reactInternals=n,tl(n,r,e,t),n=ol(null,n,r,!0,l,t)):(n.tag=0,Ae&&l&&vi(n),He(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(cr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=iA(r),e=sn(r,e),i){case 0:n=ll(null,n,r,e,t);break e;case 1:n=is(null,n,r,e,t);break e;case 11:n=ba(null,n,r,e,t);break e;case 14:n=es(null,n,r,sn(r.type,e),t);break e}throw Error(a(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),ll(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),is(e,n,r,i,t);case 3:e:{if(ls(n),e===null)throw Error(a(387));r=n.pendingProps,l=n.memoizedState,i=l.element,ma(e,n),lr(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=D0(Error(a(423)),n),n=os(e,n,r,t,i);break e}else if(r!==i){i=D0(Error(a(424)),n),n=os(e,n,r,t,i);break e}else for(Ke=Fn(n.stateNode.containerInfo.firstChild),ze=n,Ae=!0,an=null,t=Oa(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(P0(),r===i){n=Gn(e,n,t);break e}He(e,n,r,t)}n=n.child}return n;case 5:return pa(n),e===null&&Fi(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Gi(r,i)?o=null:l!==null&&Gi(r,l)&&(n.flags|=32),rs(e,n),He(e,n,o,t),n.child;case 6:return e===null&&Fi(n),null;case 13:return as(e,n,t);case 4:return ji(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=M0(n,null,r,t):He(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),ba(e,n,r,i,t);case 7:return He(e,n,n.pendingProps,t),n.child;case 8:return He(e,n,n.pendingProps.children,t),n.child;case 12:return He(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,ae(tr,r._currentValue),r._currentValue=o,l!==null)if(on(l.value,o)){if(l.children===i.children&&!xe.current){n=Gn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var A=s.firstContext;A!==null;){if(A.context===r){if(l.tag===1){A=Mn(-1,t&-t),A.tag=2;var I=l.updateQueue;if(I!==null){I=I.shared;var p=I.pending;p===null?A.next=A:(A.next=p.next,p.next=A),I.pending=A}}l.lanes|=t,A=l.alternate,A!==null&&(A.lanes|=t),ki(l.return,t,n),s.lanes|=t;break}A=A.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(a(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),ki(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}He(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,L0(n,t),i=be(i),r=r(i),n.flags|=1,He(e,n,r,t),n.child;case 14:return r=n.type,i=sn(r,n.pendingProps),i=sn(r.type,i),es(e,n,r,i,t);case 15:return ns(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),cr(e,n),n.tag=1,we(r)?(e=!0,qt(n)):e=!1,L0(n,t),Wa(n,r,i),tl(n,r,i,t),ol(null,n,r,!0,e,t);case 19:return us(e,n,t);case 22:return ts(e,n,t)}throw Error(a(156,n.tag))};function Hs(e,n){return Ao(e,n)}function rA(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,n,t,r){return new rA(e,n,t,r)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function iA(e){if(typeof e=="function")return Gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dn)return 11;if(e===Cn)return 14}return 2}function Wn(e,n){var t=e.alternate;return t===null?(t=tn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Mr(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Gl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Be:return s0(t.children,i,l,n);case qe:o=8,i|=8;break;case Un:return e=tn(12,t,n,i|2),e.elementType=Un,e.lanes=l,e;case _e:return e=tn(13,t,n,i),e.elementType=_e,e.lanes=l,e;case rn:return e=tn(19,t,n,i),e.elementType=rn,e.lanes=l,e;case Ee:return Gr(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fn:o=10;break e;case $n:o=9;break e;case dn:o=11;break e;case Cn:o=14;break e;case Ye:o=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return n=tn(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function s0(e,n,t,r){return e=tn(7,e,r,n),e.lanes=t,e}function Gr(e,n,t,r){return e=tn(22,e,r,n),e.elementType=Ee,e.lanes=t,e.stateNode={isHidden:!1},e}function Ll(e,n,t){return e=tn(6,e,null,n),e.lanes=t,e}function Ul(e,n,t){return n=tn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function lA(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dl(e,n,t,r,i,l,o,s,A){return e=new lA(e,n,t,s,A),n===1?(n=1,l===!0&&(n|=8)):n=0,l=tn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qi(l),e}function oA(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:le,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ys(e){if(!e)return Yn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(a(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(we(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(a(171))}if(e.tag===1){var t=e.type;if(we(t))return sa(e,t,n)}return n}function Fs(e,n,t,r,i,l,o,s,A){return e=Dl(t,r,!0,e,i,l,o,s,A),e.context=ys(null),t=e.current,r=ye(),i=_n(t),l=Mn(r,i),l.callback=n??null,kn(t,l,i),e.current.lanes=i,V0(e,i,r),Qe(e,r),e}function Lr(e,n,t,r){var i=n.current,l=ye(),o=_n(i);return t=ys(t),n.context===null?n.context=t:n.pendingContext=t,n=Mn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=kn(i,n,o),e!==null&&(An(e,i,o,l),ir(e,i,o)),o}function Ur(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function hl(e,n){Bs(e,n),(e=e.alternate)&&Bs(e,n)}function aA(){return null}var Ys=typeof reportError=="function"?reportError:function(e){console.error(e)};function gl(e){this._internalRoot=e}Dr.prototype.render=gl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));Lr(e,n,null,null)},Dr.prototype.unmount=gl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;l0(function(){Lr(null,e,null,null)}),n[mn]=null}};function Dr(e){this._internalRoot=e}Dr.prototype.unstable_scheduleHydration=function(e){if(e){var n=mo();e={blockedOn:null,target:e,priority:n};for(var t=0;t<vn.length&&n!==0&&n<vn[t].priority;t++);vn.splice(t,0,e),t===0&&po(e)}};function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xs(){}function sA(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var I=Ur(o);l.call(I)}}var o=Fs(n,r,e,0,null,!1,!1,"",xs);return e._reactRootContainer=o,e[mn]=o.current,nt(e.nodeType===8?e.parentNode:e),l0(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var I=Ur(A);s.call(I)}}var A=Dl(e,0,!1,null,null,!1,!1,"",xs);return e._reactRootContainer=A,e[mn]=A.current,nt(e.nodeType===8?e.parentNode:e),l0(function(){Lr(n,A,t,r)}),A}function gr(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var A=Ur(o);s.call(A)}}Lr(n,o,e,i)}else o=sA(t,n,e,i,r);return Ur(o)}Oo=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=k0(n.pendingLanes);t!==0&&(ti(n,t|1),Qe(n,Ne()),(X&6)===0&&(v0=Ne()+500,xn()))}break;case 13:l0(function(){var r=Pn(e,1);if(r!==null){var i=ye();An(r,e,1,i)}}),hl(e,1)}},ri=function(e){if(e.tag===13){var n=Pn(e,134217728);if(n!==null){var t=ye();An(n,e,134217728,t)}hl(e,134217728)}},fo=function(e){if(e.tag===13){var n=_n(e),t=Pn(e,n);if(t!==null){var r=ye();An(t,e,n,r)}hl(e,n)}},mo=function(){return re},To=function(e,n){var t=re;try{return re=e,n()}finally{re=t}},$r=function(e,n,t){switch(n){case"input":if(Vr(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Kt(r);if(!i)throw Error(a(90));_l(r),Vr(r,i)}}}break;case"textarea":$l(e,t);break;case"select":n=t.value,n!=null&&u0(e,!!t.multiple,n,!1)}},io=pl,lo=l0;var uA={usingClientEntryPoint:!1,Events:[it,f0,Kt,to,ro,pl]},Ot={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SA={bundleType:Ot.bundleType,version:Ot.version,rendererPackageName:Ot.rendererPackageName,rendererConfig:Ot.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uo(e),e===null?null:e.stateNode},findFiberByHostInstance:Ot.findFiberByHostInstance||aA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{Dt=vr.inject(SA),cn=vr}catch{}}return je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uA,je.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vl(n))throw Error(a(200));return oA(e,n,null,t)},je.createRoot=function(e,n){if(!vl(e))throw Error(a(299));var t=!1,r="",i=Ys;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Dl(e,1,!1,null,null,t,!1,r,i),e[mn]=n.current,nt(e.nodeType===8?e.parentNode:e),new gl(n)},je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=uo(n),e=e===null?null:e.stateNode,e},je.flushSync=function(e){return l0(e)},je.hydrate=function(e,n,t){if(!hr(n))throw Error(a(200));return gr(null,e,n,!0,t)},je.hydrateRoot=function(e,n,t){if(!vl(e))throw Error(a(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Ys;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Fs(n,null,e,1,t??null,i,!1,l,o),e[mn]=n.current,nt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Dr(n)},je.render=function(e,n,t){if(!hr(n))throw Error(a(200));return gr(null,e,n,!1,t)},je.unmountComponentAtNode=function(e){if(!hr(e))throw Error(a(40));return e._reactRootContainer?(l0(function(){gr(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1},je.unstable_batchedUpdates=pl,je.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!hr(t))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return gr(e,n,t,!1,r)},je.version="18.3.1-next-f1338f8080-20240426",je}var Ws;function mA(){if(Ws)return Bl.exports;Ws=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(S){console.error(S)}}return u(),Bl.exports=fA(),Bl.exports}var zs;function TA(){if(zs)return Hr;zs=1;var u=mA();return Hr.createRoot=u.createRoot,Hr.hydrateRoot=u.hydrateRoot,Hr}var RA=TA();const pA="modulepreload",PA=function(u){return"/UMDTerpTracker/"+u},Ks={},Rt=function(S,a,f){let N=Promise.resolve();if(a&&a.length>0){let G=function(F){return Promise.all(F.map(J=>Promise.resolve(J).then(V=>({status:"fulfilled",value:V}),V=>({status:"rejected",reason:V}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),H=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));N=G(a.map(F=>{if(F=PA(F),F in Ks)return;Ks[F]=!0;const J=F.endsWith(".css"),V=J?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${F}"]${V}`))return;const _=document.createElement("link");if(_.rel=J?"stylesheet":pA,J||(_.as="script"),_.crossOrigin="",_.href=F,H&&_.setAttribute("nonce",H),document.head.appendChild(_),J)return new Promise((W,z)=>{_.addEventListener("load",W),_.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${F}`)))})}))}function L(G){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=G,window.dispatchEvent(m),!m.defaultPrevented)throw G}return N.then(G=>{for(const m of G||[])m.status==="rejected"&&L(m.reason);return S().catch(L)})},MA=new Set(["W","I","NG","AU"]);function GA(u){return u.creditsEarned!==void 0?u.creditsEarned:MA.has(u.grade)||u.gradePoints===0?0:u.credits}function Br(u){let S=0,a=0,f=0;for(const N of u)f+=GA(N),!(!N.countsTowardGpa||N.gradePoints===null)&&(S+=N.credits,a+=N.credits*N.gradePoints);return{gpaCredits:S,qualityPoints:a,earnedCredits:f,gpa:S>0?a/S:null}}function Zs(u){const S=u.terms.flatMap(N=>N.courses),a=Br(S),f=Br(u.nonGpaCredits);return{...a,earnedCredits:a.earnedCredits+f.earnedCredits}}function wd(u){const S=[];return u.terms.map(a=>(S.push(...a.courses),{term:a,termGpa:Br(a.courses).gpa,cumulativeGpa:Br(S).gpa}))}const kl={"A+":4,A:4,"A-":3.7,"B+":3.3,B:3,"B-":2.7,"C+":2.3,C:2,"C-":1.7,"D+":1.3,D:1,"D-":.7,F:0,XF:0},LA=["P","S","U","W","I","AU","NC","NG"],UA=[...Object.keys(kl),...LA],Yr=["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","D-"];function DA(u){return UA.includes(u)}function bs(u){return u in kl}function hA(u){return bs(u)?kl[u]:null}function gA(u){return bs(u)}function eu(u){const S=u.trim().toUpperCase().replace(/\s+/g,"");return S&&DA(S)?S:null}function $s(u){const S=Yr.indexOf(u);return S===-1?Yr.length:S}const vA=[...Yr,"F"];function HA(u){return vA.reduce((S,a)=>S+(u.counts[a]??0),0)}function qs(u,S){const a=HA(u);if(a===0)return null;const f=$s(S);let N=0;for(const L of Yr){if($s(L)>f)break;N+=u.counts[L]??0}return N/a}class kd{constructor(S){Hl(this,"byCourse");Hl(this,"fallback");this.byCourse=new Map(S.map(a=>[a.courseId.toUpperCase(),a])),this.fallback=S.length>0?yA(S):null}get(S){return this.byCourse.get(S.toUpperCase())}chanceOfAtLeast(S,a){const f=this.get(S);if(f){const N=qs(f,a);if(N!==null)return{probability:N,estimated:!1}}return this.fallback?{probability:qs(this.fallback,a),estimated:!0}:{probability:null,estimated:!0}}}function yA(u){const S={};let a=0,f=0;for(const N of u){f+=N.sections,a+=N.total;for(const[L,G]of Object.entries(N.counts))S[L]=(S[L]??0)+(G??0)}return{courseId:"*",counts:S,total:a,sections:f}}function FA(u){const S=new Map;for(const a of u.terms)for(const f of a.courses){if(!f.countsTowardGpa||!f.courseId)continue;const N=S.get(f.courseId)??[];N.push({termId:a.id,grade:f.grade,credits:f.credits}),S.set(f.courseId,N)}return[...S.entries()].filter(([,a])=>a.length>1).map(([a,f])=>({courseId:a,attempts:f}))}function BA(u){const S=new Set,a=[];for(const L of[...u.terms].reverse())for(const G of[...L.courses].reverse()){if(G.countsTowardGpa&&G.courseId){if(S.has(G.courseId))continue;S.add(G.courseId)}a.push(G)}let f=0,N=0;for(const L of a)!L.countsTowardGpa||L.gradePoints===null||(f+=L.credits,N+=L.credits*L.gradePoints);return f>0?N/f:null}const nu=.005,YA=.5;function Vl(u){const S=Zs(u),a=S.gpa,f=u.statedCumulativeGpa,N=a!==null&&f!==null?a-f:null;return{computedGpa:a,statedGpa:f,delta:N,computedCredits:S.earnedCredits,statedCredits:u.statedCumulativeCredits,ok:N!==null&&Math.abs(N)<=nu}}function xA(u){const S=Vl(u),a=[...u.warnings];if(S.delta!==null&&!S.ok){a.push({code:"gpa_mismatch",message:`We read your GPA as ${S.computedGpa.toFixed(3)}, but your transcript says ${S.statedGpa.toFixed(3)}. Something did not parse correctly, so treat the numbers below as approximate.`,detail:`delta ${S.delta.toFixed(3)}`});const f=FA(u);if(f.length>0){const N=BA(u),L=N!==null&&S.statedGpa!==null&&Math.abs(N-S.statedGpa)<=nu,G=f.map(m=>m.courseId).join(", ");a.push({code:"repeated_course",message:L?`${G} appears on your transcript more than once. UMD's repeat policy counts only the later attempt toward your GPA, and TerpTracker does not do that yet — it is counting both. That fully explains the difference above: ignoring the earlier attempt gives exactly the ${S.statedGpa.toFixed(3)} your transcript prints. Trust your transcript, not this page.`:`${G} appears on your transcript more than once, which may be why the numbers above disagree — TerpTracker counts every attempt, and UMD's repeat policy does not. It does not explain the whole difference, so something else is off as well.`,detail:f.map(m=>`${m.courseId}×${m.attempts.length}`).join(" ")})}}return S.statedCredits!==null&&Math.abs(S.computedCredits-S.statedCredits)>YA&&a.push({code:"gpa_mismatch",message:`We counted ${S.computedCredits} earned credits but your transcript says ${S.statedCredits}.`,detail:"credit total mismatch"}),{...u,warnings:a}}const tu={rowTolerance:.5,cellGap:1.4};function wA(u,S=tu){if(u.items.length===0)return[];const a=[...u.items].sort((G,m)=>m.y-G.y||G.x-m.x),f=[];let N=[],L=a[0].y;for(const G of a){const m=Math.max(G.height,1)*S.rowTolerance;N.length>0&&Math.abs(G.y-L)>m&&(f.push(N),N=[]),N.length===0&&(L=G.y),N.push(G)}return N.length>0&&f.push(N),f.map(G=>kA(u.pageNumber,G,S))}function kA(u,S,a){var G;const f=[...S].sort((m,H)=>m.x-H.x),N=[];for(const m of f){const H=N[N.length-1],F=Math.max(m.height,1)*a.cellGap;if(H&&m.x-H.endX<=F){const J=H.text.endsWith(" ")||m.text.startsWith(" ")?"":" ",V=m.x-H.endX<.2?"":J;H.text=`${H.text}${V}${m.text}`,H.endX=Math.max(H.endX,m.x+m.width)}else N.push({text:m.text,x:m.x,endX:m.x+m.width})}const L=N.map(m=>({...m,text:m.text.replace(/\s+/g," ").trim()})).filter(m=>m.text.length>0);return{page:u,y:((G=f[0])==null?void 0:G.y)??0,cells:L,text:L.map(m=>m.text).join(" ")}}function VA(u,S=tu){return u.flatMap(a=>wA(a,S))}const ru="A\\+|A-|B\\+|B-|C\\+|C-|D\\+|D-|XF|NC|AU|NG|A|B|C|D|F|P|S|U|W|I",Tt="\\d+\\.\\d{2}",wr="[A-Z]{4}\\s?\\d{3}[A-Z]?",QA=new RegExp(`^(${wr})\\s+(.+?)\\s+(${ru})\\s+(${Tt})\\s+(${Tt})(?:\\s+(${Tt}))?(?:\\s+(.*))?$`),jA=new RegExp(`^(?:(\\d{4})\\s+)?(.+?)\\s+(${ru})\\s+(${Tt})(?:\\s+(${wr}))?(?:\\s+(.*))?$`),_A=new RegExp(`^(${wr})\\s+([A-Z0-9]{4})\\s+(${Tt})\\s+([A-Z]{2,4})\\s+([AD])\\b`);function Ql(u){return u.replace(/\s+/g,"").toUpperCase()}const JA=/\b(FS[A-Z]{2}|DS[A-Z]{2}|DV[A-Z]{2}|SCIS)\b/g;function iu(u){if(!u)return;const S=[...u.matchAll(JA)].map(f=>f[1]),a=[...new Set(S)];return a.length>0?a:void 0}function xr(u){if(u===void 0)return;const S=Number(u.replace(/,/g,""));return Number.isFinite(S)?S:void 0}function WA(u){const S=QA.exec(u);if(!S)return null;const a=eu(S[3]),f=xr(S[4]),N=xr(S[5]);if(!a||f===void 0||f>24)return null;const L={courseId:Ql(S[1]),title:S[2].trim(),credits:f,grade:a,gradePoints:hA(a),countsTowardGpa:gA(a),source:"institution"};N!==void 0&&(L.creditsEarned=N);const G=iu(S[7]);return G&&(L.genEd=G),L}function zA(u,S){const a=jA.exec(u);if(!a)return null;const f=eu(a[3]),N=xr(a[4]);if(!f||N===void 0||N>24)return null;const L=a[5],G={courseId:L?Ql(L):"",title:a[2].trim(),credits:N,creditsEarned:N,grade:f,gradePoints:null,countsTowardGpa:!1,source:S},m=iu(a[6]);return m&&(G.genEd=m),G}function KA(u){const S=_A.exec(u);if(!S)return null;const a=xr(S[3]);return a===void 0||a>24?null:{dropped:S[5]==="D",entry:{courseId:Ql(S[1]),title:"",credits:a,grade:"NG",gradePoints:null,countsTowardGpa:!1,source:"institution",section:S[2].toUpperCase()}}}function $A(u){return new RegExp(`^${wr}\\b`).test(u)}const qA=/^(Fall|Spring|Summer|Winter)(?:\s+(I{1,2}))?\s+(\d{4})\b/i,XA=/\*\*\s*Transfer\s+Credit\s+Information/i,ZA=/\bHistoric\s+Course\s+Information/i,bA=/\*\*\s*Current\s+Course\s+Information/i,e1=/^(Advanced\s+Placement|AP\s+Exam|International\s+Baccalaureate|IB\s+Exam|CLEP)/i,n1=/\b(College|University|Institute|School|Academy)\b/i,t1=/^Semester:\s*Attempted\s+([\d.]+);\s*Earned\s+([\d.]+);\s*QPoints\s+([\d.]+);\s*GPA\s+([\d.]+)/i,r1=/^UG\s+Cumulative:\s*([\d.]+);\s*([\d.]+);\s*([\d.]+);\s*([\d.]+)/i,i1=/^UG\s+Cumulative\s+Credit\s*:\s*([\d.]+)/i,l1=/^UG\s+Cumulative\s+GPA\s*:\s*([\d.]+)/i,o1=/^Major\s*:\s*(.+)$/i,a1=/^[=\s]+$/;function s1(u){const S=qA.exec(u);if(!S)return null;const a=S[1],f={season:a.charAt(0).toUpperCase()+a.slice(1).toLowerCase(),year:Number(S[3])};return S[2]&&(f.session=S[2].toUpperCase()),f}function u1(u){var _,W;const S=[],a=[],f=[],N=[];let L="header",G="transfer",m=null,H,F=null,J=null,V;for(const z of u){const Y=z.text;if(!Y||a1.test(Y))continue;if(XA.test(Y)){L="transfer",m=null;continue}if(ZA.test(Y)){L="historic",m=null;continue}if(bA.test(Y)){L="current",m=null;continue}if(L==="header"){V??(V=(W=(_=o1.exec(Y))==null?void 0:_[1])==null?void 0:W.trim());continue}const k=t1.exec(Y);if(k){m&&(m.statedTermCredits=Number(k[2]),m.statedTermGpa=Number(k[4]));continue}const de=r1.exec(Y);if(de){J=Number(de[2]),F=Number(de[4]);continue}const Le=i1.exec(Y);if(Le){J=Number(Le[1]);continue}const Fe=l1.exec(Y);if(Fe){F=Number(Fe[1]);continue}const ie=s1(Y);if(ie){const le=`${ie.year}-${ie.season}${ie.session?` ${ie.session}`:""}`;L==="historic"?(m={id:le,season:ie.season,year:ie.year,courses:[],statedTermGpa:null,statedTermCredits:null},ie.session&&(m.session=ie.session),a.push(m)):(m=null,L==="current"&&(H=le));continue}if(L==="transfer"){if(e1.test(Y)){G="exam";continue}if(n1.test(Y)&&!/\d\.\d{2}/.test(Y)){G="transfer";continue}const le=zA(Y,G);le&&f.push(le);continue}if(L==="current"){const le=KA(Y);le&&!le.dropped&&(H&&(le.entry.termId=H),N.push(le.entry));continue}const ve=WA(Y);if(ve){m?m.courses.push(ve):S.push({code:"unparsed_line",message:`${ve.courseId} was not under any term heading.`,page:z.page});continue}$A(Y)&&S.push({code:"unparsed_line",message:"A row looked like a course but could not be read.",page:z.page,detail:Y})}return a.length===0&&S.push({code:"no_terms_found",message:"No semesters were found in this PDF. It may not be a UMD transcript."}),F===null&&S.push({code:"missing_stated_gpa",message:"The transcript did not print a cumulative GPA, so the parse could not be checked against it."}),{major:V,terms:a,nonGpaCredits:f,inProgress:N,statedCumulativeGpa:F,statedCumulativeCredits:J,warnings:S}}function S1(u){return u1(VA(u))}const jl={charWidth:6,lineHeight:12,fontHeight:10,top:780};function A1(u,S,a=jl){const f=[];return S.replace(/\r\n/g,`
`).split(`
`).forEach((L,G)=>{const m=a.top-G*a.lineHeight;for(const H of L.matchAll(/\S+/g)){const F=H.index;f.push({text:H[0],x:F*a.charWidth,y:m,width:H[0].length*a.charWidth,height:a.fontHeight})}}),{pageNumber:u,items:f}}function d1(u,S=jl){return u.split("\f").map((a,f)=>A1(f+1,a,S))}function lu(u,S=jl){return xA(S1(d1(u,S)))}const C1=`                    UNIVERSITY OF MARYLAND
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

`,c1=`                    UNIVERSITY OF MARYLAND
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

`,E1=`                    UNIVERSITY OF MARYLAND
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

`,I1=`                    UNIVERSITY OF MARYLAND
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

`,N1=`                    UNIVERSITY OF MARYLAND
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

`,O1=`                    UNIVERSITY OF MARYLAND
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

`,f1=`                    UNIVERSITY OF MARYLAND
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

`,m1=`                    UNIVERSITY OF MARYLAND
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

`,T1=`                    UNIVERSITY OF MARYLAND
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

`,R1=`                    UNIVERSITY OF MARYLAND
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

`,p1=`                    UNIVERSITY OF MARYLAND
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

`,P1=`                    UNIVERSITY OF MARYLAND
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

`,M1=`                    UNIVERSITY OF MARYLAND
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

`,G1=`                    UNIVERSITY OF MARYLAND
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

`,L1=`                    UNIVERSITY OF MARYLAND
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

`,U1=`                    UNIVERSITY OF MARYLAND
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

`,D1=`                    UNIVERSITY OF MARYLAND
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

`,h1=`                    UNIVERSITY OF MARYLAND
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

`,g1=`                    UNIVERSITY OF MARYLAND
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

`,v1=`                    UNIVERSITY OF MARYLAND
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

`,H1=`                    UNIVERSITY OF MARYLAND
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

`,y1=`                    UNIVERSITY OF MARYLAND
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

`,F1=`                    UNIVERSITY OF MARYLAND
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

`,B1=`                    UNIVERSITY OF MARYLAND
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

`,Y1=`                    UNIVERSITY OF MARYLAND
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

`,x1=`                    UNIVERSITY OF MARYLAND
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

`,w1=`                    UNIVERSITY OF MARYLAND
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

`,k1=`                    UNIVERSITY OF MARYLAND
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

`,V1=`                    UNIVERSITY OF MARYLAND
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

`,Q1=`                    UNIVERSITY OF MARYLAND
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

`,j1=`                    UNIVERSITY OF MARYLAND
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

`,_1=`                    UNIVERSITY OF MARYLAND
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

`,J1=`                    UNIVERSITY OF MARYLAND
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

`,W1=`                    UNIVERSITY OF MARYLAND
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

`,z1=`                    UNIVERSITY OF MARYLAND
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

`,K1=`                    UNIVERSITY OF MARYLAND
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

`,$1=`                    UNIVERSITY OF MARYLAND
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

`,q1=`                    UNIVERSITY OF MARYLAND
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

`,X1=`                    UNIVERSITY OF MARYLAND
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

`,Z1=`                    UNIVERSITY OF MARYLAND
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

`,b1=`                    UNIVERSITY OF MARYLAND
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

`,ed=`                    UNIVERSITY OF MARYLAND
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

`,nd=`                    UNIVERSITY OF MARYLAND
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

`,td=`                    UNIVERSITY OF MARYLAND
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

`,rd=`                    UNIVERSITY OF MARYLAND
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

`,id=`                    UNIVERSITY OF MARYLAND
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

`,ld=`                    UNIVERSITY OF MARYLAND
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

`,od=`                    UNIVERSITY OF MARYLAND
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

`,ad=`                    UNIVERSITY OF MARYLAND
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

`,sd=`                    UNIVERSITY OF MARYLAND
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

`,ud=`                    UNIVERSITY OF MARYLAND
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

`,Sd=`                    UNIVERSITY OF MARYLAND
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

`,Kn=[{slug:"information-science",name:"Information Science",short:"InfoSci",hasRequirements:!0},{slug:"computer-science",name:"Computer Science",short:"CS",hasRequirements:!0},{slug:"management",name:"Management",short:"Mgmt",hasRequirements:!0},{slug:"finance",name:"Finance",short:"Finance",hasRequirements:!0},{slug:"information-systems",name:"Information Systems",short:"Info Sys",hasRequirements:!0},{slug:"psychology",name:"Psychology",short:"Psych",hasRequirements:!1},{slug:"criminology",name:"Criminology and Criminal Justice",short:"CCJS",hasRequirements:!1},{slug:"economics",name:"Economics",short:"Econ",hasRequirements:!1},{slug:"biology",name:"Biological Sciences",short:"Biology",hasRequirements:!1},{slug:"government",name:"Government and Politics",short:"GVPT",hasRequirements:!1},{slug:"mechanical-engineering",name:"Mechanical Engineering",short:"Mech E",hasRequirements:!1},{slug:"communication",name:"Communication",short:"Comm",hasRequirements:!1},{slug:"kinesiology",name:"Kinesiology",short:"Kines",hasRequirements:!1}],mt=[{slug:"freshman",label:"Freshman"},{slug:"sophomore",label:"Sophomore"},{slug:"junior",label:"Junior"},{slug:"senior",label:"Senior"}],ou=[{id:"sample-information-science-freshman",major:"information-science",year:"freshman",text:C1},{id:"sample-information-science-sophomore",major:"information-science",year:"sophomore",text:c1},{id:"sample-information-science-junior",major:"information-science",year:"junior",text:E1},{id:"sample-information-science-senior",major:"information-science",year:"senior",text:I1},{id:"sample-computer-science-freshman",major:"computer-science",year:"freshman",text:N1},{id:"sample-computer-science-sophomore",major:"computer-science",year:"sophomore",text:O1},{id:"sample-computer-science-junior",major:"computer-science",year:"junior",text:f1},{id:"sample-computer-science-senior",major:"computer-science",year:"senior",text:m1},{id:"sample-management-freshman",major:"management",year:"freshman",text:T1},{id:"sample-management-sophomore",major:"management",year:"sophomore",text:R1},{id:"sample-management-junior",major:"management",year:"junior",text:p1},{id:"sample-management-senior",major:"management",year:"senior",text:P1},{id:"sample-finance-freshman",major:"finance",year:"freshman",text:M1},{id:"sample-finance-sophomore",major:"finance",year:"sophomore",text:G1},{id:"sample-finance-junior",major:"finance",year:"junior",text:L1},{id:"sample-finance-senior",major:"finance",year:"senior",text:U1},{id:"sample-information-systems-freshman",major:"information-systems",year:"freshman",text:D1},{id:"sample-information-systems-sophomore",major:"information-systems",year:"sophomore",text:h1},{id:"sample-information-systems-junior",major:"information-systems",year:"junior",text:g1},{id:"sample-information-systems-senior",major:"information-systems",year:"senior",text:v1},{id:"sample-psychology-freshman",major:"psychology",year:"freshman",text:H1},{id:"sample-psychology-sophomore",major:"psychology",year:"sophomore",text:y1},{id:"sample-psychology-junior",major:"psychology",year:"junior",text:F1},{id:"sample-psychology-senior",major:"psychology",year:"senior",text:B1},{id:"sample-criminology-freshman",major:"criminology",year:"freshman",text:Y1},{id:"sample-criminology-sophomore",major:"criminology",year:"sophomore",text:x1},{id:"sample-criminology-junior",major:"criminology",year:"junior",text:w1},{id:"sample-criminology-senior",major:"criminology",year:"senior",text:k1},{id:"sample-economics-freshman",major:"economics",year:"freshman",text:V1},{id:"sample-economics-sophomore",major:"economics",year:"sophomore",text:Q1},{id:"sample-economics-junior",major:"economics",year:"junior",text:j1},{id:"sample-economics-senior",major:"economics",year:"senior",text:_1},{id:"sample-biology-freshman",major:"biology",year:"freshman",text:J1},{id:"sample-biology-sophomore",major:"biology",year:"sophomore",text:W1},{id:"sample-biology-junior",major:"biology",year:"junior",text:z1},{id:"sample-biology-senior",major:"biology",year:"senior",text:K1},{id:"sample-government-freshman",major:"government",year:"freshman",text:$1},{id:"sample-government-sophomore",major:"government",year:"sophomore",text:q1},{id:"sample-government-junior",major:"government",year:"junior",text:X1},{id:"sample-government-senior",major:"government",year:"senior",text:Z1},{id:"sample-mechanical-engineering-freshman",major:"mechanical-engineering",year:"freshman",text:b1},{id:"sample-mechanical-engineering-sophomore",major:"mechanical-engineering",year:"sophomore",text:ed},{id:"sample-mechanical-engineering-junior",major:"mechanical-engineering",year:"junior",text:nd},{id:"sample-mechanical-engineering-senior",major:"mechanical-engineering",year:"senior",text:td},{id:"sample-communication-freshman",major:"communication",year:"freshman",text:rd},{id:"sample-communication-sophomore",major:"communication",year:"sophomore",text:id},{id:"sample-communication-junior",major:"communication",year:"junior",text:ld},{id:"sample-communication-senior",major:"communication",year:"senior",text:od},{id:"sample-kinesiology-freshman",major:"kinesiology",year:"freshman",text:ad},{id:"sample-kinesiology-sophomore",major:"kinesiology",year:"sophomore",text:sd},{id:"sample-kinesiology-junior",major:"kinesiology",year:"junior",text:ud},{id:"sample-kinesiology-senior",major:"kinesiology",year:"senior",text:Sd}];function au(u){return u?ou.find(S=>S.id===u):void 0}function yr(u,S){return ou.find(a=>a.major===u&&a.year===S)}function Ad(u){const S=au(u);return S?Kn.find(a=>a.slug===S.major):void 0}const dd="https://github.com/sanirb-debug/UMDTerpTracker",Cd={matches:"Computed GPA matches the GPA printed on the transcript.",differs:"Computed GPA does NOT match the GPA printed on the transcript.","transcript-printed-none":"The transcript printed no cumulative GPA to compare against."};function cd(u){const S=`Something looks wrong on the ${u.view} view`,f=["Reporting something that looks wrong. I haven't described the problem yet — adding that below.","","## What I was doing","",`- View: ${u.view}`,`- Data: ${u.source==="sample"?`demo sample \`${u.sampleId??"unknown"}\``:"my own uploaded transcript"}`,"","## What the app reported","",`- Parse warnings: ${u.warningCodes.length>0?u.warningCodes.join(", "):"none"}`,`- ${Cd[u.gpaCheck]}`,"","## What went wrong","","<!-- Please describe what you expected and what you saw. -->","","---","","This report was prefilled by TerpTracker and deliberately contains no","transcript contents: no courses, grades, credits, GPA values, name or","student ID. Please do not paste any of those into a public issue."].join(`
`),N=`${dd}/issues/new?title=${encodeURIComponent(S)}&body=${encodeURIComponent(f)}`;return{title:S,body:f,url:N}}function Ed(u){const{view:S,transcript:a,sampleId:f}=u;if(!a)return{view:S,source:f?"sample":"upload",...f?{sampleId:f}:{},warningCodes:[],gpaCheck:"transcript-printed-none"};const N=Vl(a),L=N.statedGpa===null?"transcript-printed-none":N.ok?"matches":"differs";return{view:S,source:f?"sample":"upload",...f?{sampleId:f}:{},warningCodes:[...new Set(a.warnings.map(G=>G.code))],gpaCheck:L}}function Id({view:u,transcript:S,sampleId:a,className:f}){const[N,L]=ne.useState(!1),G=ne.useMemo(()=>cd(Ed({view:u,transcript:S,sampleId:a})),[u,S,a]);return N?O.jsxs("div",{className:"mt-2 w-full rounded-lg border border-neutral-300 p-3 text-left dark:border-neutral-700",children:[O.jsx("h3",{className:"text-sm font-semibold",children:"This is exactly what will be sent"}),O.jsx("p",{className:"mt-1 text-xs text-neutral-600 dark:text-neutral-300",children:"It opens a public GitHub issue in a new tab, prefilled with the text below and nothing else. No part of your transcript is included — no courses, grades, GPA, name or student ID. Please keep it that way when you add your description."}),O.jsx("p",{className:"mt-3 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Title"}),O.jsx("pre",{className:"mt-1 overflow-x-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:G.title}),O.jsx("p",{className:"mt-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Body"}),O.jsx("pre",{className:"mt-1 max-h-56 overflow-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:G.body}),O.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2",children:[O.jsx("a",{className:"button text-xs",href:G.url,target:"_blank",rel:"noopener noreferrer",onClick:()=>L(!1),children:"Open GitHub issue"}),O.jsx("button",{type:"button",className:"button-quiet text-xs",onClick:()=>L(!1),children:"Cancel"})]})]}):O.jsx("button",{type:"button",onClick:()=>L(!0),className:`inline-flex min-h-11 items-center text-xs text-neutral-500 underline decoration-dotted underline-offset-2 hover:text-neutral-900 sm:min-h-0 dark:hover:text-neutral-100 ${f??""}`,children:"Something looks wrong"})}function Fr(u){return typeof u=="string"&&u.trim().length>0}function Nd(u){const S=[];return Fr(u.text)||S.push("text"),Fr(u.speaker)||S.push("speaker"),Fr(u.sourceUrl)||S.push("sourceUrl"),S.length===0?null:`missing ${S.join(", ")}`}function Od(u,S){const a=u==null?void 0:u.quotes;if(!Array.isArray(a))return[];const f=[];return a.forEach((N,L)=>{Nd(N??{})===null&&f.push({text:N.text.trim(),speaker:N.speaker.trim(),...Fr(N.context)?{context:N.context.trim()}:{},sourceUrl:N.sourceUrl.trim()})}),f}function fd(u,S,a=Math.random){if(u.length===0)return null;const f=u.length>1?u.filter(N=>N!==S):u;return f[Math.min(f.length-1,Math.floor(a()*f.length))]}const md=[{text:"",speaker:"",context:"",sourceUrl:""}],Td={quotes:md},Rd=Od(Td);function pd({quotes:u=Rd,random:S}){const[a,f]=ne.useState(null),N=ne.useRef(null),L=ne.useRef(null),G=ne.useCallback(()=>{var m;f(null),(m=N.current)==null||m.focus()},[]);return ne.useEffect(()=>{if(!a)return;const m=H=>{H.key==="Escape"&&G()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[a,G]),u.length===0?null:O.jsxs("div",{className:"pad-safe-bottom pointer-events-none fixed inset-x-0 bottom-0 z-40 flex flex-col items-end gap-2 pr-3 sm:inset-x-auto sm:right-3 sm:pb-3",children:[a&&O.jsxs("blockquote",{id:"testudo-quote",className:"pointer-events-auto max-w-xs rounded-xl border border-neutral-300 bg-white p-3 text-left shadow-lg dark:border-neutral-700 dark:bg-neutral-900",children:[O.jsx("p",{className:"text-sm",children:a.text}),O.jsxs("footer",{className:"mt-2 text-xs text-neutral-500 dark:text-neutral-400",children:[O.jsx("cite",{className:"not-italic font-medium text-neutral-700 dark:text-neutral-200",children:a.speaker}),a.context&&O.jsxs("span",{children:[" — ",a.context]})," ",O.jsx("a",{className:"underline",href:a.sourceUrl,target:"_blank",rel:"noopener noreferrer",children:"source"})]})]}),O.jsx("button",{ref:N,type:"button","aria-label":a?"Hide the quote about Maryland":"Testudo has something to say about Maryland","aria-expanded":a!==null,"aria-controls":a?"testudo-quote":void 0,onClick:()=>f(m=>{if(m)return null;const H=fd(u,L.current??void 0,S);return L.current=H,H}),className:"pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full text-lg leading-none opacity-30 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 sm:h-8 sm:w-8",children:O.jsx("span",{"aria-hidden":"true",children:"🐢"})})]})}class Pd extends Error{constructor(){super("This PDF has no text in it, so it looks like a scan or a photo. Download the unofficial transcript straight from Testudo instead of scanning a printout."),this.name="ScannedPdfError"}}const su=2,uu="terptracker.transcript.v1",Su="terptracker.plan.v1";function Au(u){try{const S=window.localStorage.getItem(u);return S?JSON.parse(S):null}catch{return null}}function du(u,S){try{window.localStorage.setItem(u,JSON.stringify(S))}catch{}}function Md(){const u=Au(uu);if(!u)return{transcript:null,stale:!1};const S=u;return typeof S.version!="number"||S.version!==su?{transcript:null,sampleId:S.sampleId,stale:!0}:{transcript:S.transcript,sampleId:S.sampleId,stale:!1}}function Xs(u,S){const a={version:su,transcript:u};S&&(a.sampleId=S),du(uu,a)}const Vd=()=>Au(Su),Qd=u=>du(Su,u),Gd="terptracker.";function Cu(){try{const u=[];for(let S=0;S<window.localStorage.length;S+=1){const a=window.localStorage.key(S);a!=null&&a.startsWith(Gd)&&u.push(a)}return u.sort()}catch{return[]}}function cu(){const u=Cu();try{for(const S of u)window.localStorage.removeItem(S)}catch{}return u}function Ld({onCleared:u}){const[S,a]=ne.useState(null),f=()=>{const N=cu();a({removed:N,remaining:Cu()}),u()};return O.jsxs("div",{children:[O.jsx("button",{type:"button",className:"button-quiet",onClick:f,children:"Clear my data"}),S&&O.jsx("p",{role:"status",className:`mt-2 text-xs ${S.remaining.length===0?"text-positive-700 dark:text-positive-300":"text-critical-700 dark:text-critical-300"}`,children:S.remaining.length>0?O.jsxs(O.Fragment,{children:["Something is still stored (",S.remaining.join(", "),"). Clearing this site's data from your browser settings will remove it."]}):S.removed.length===0?O.jsx(O.Fragment,{children:"Nothing was stored — there was nothing to clear."}):O.jsxs(O.Fragment,{children:["Cleared. Removed ",S.removed.length," ",S.removed.length===1?"item":"items"," (",S.removed.join(", "),") and local storage now holds nothing for this site. You can confirm it in your browser's developer tools under Application → Local Storage."]})})]})}function Ud({sampleId:u,onParsed:S,onForget:a}){const[f,N]=ne.useState(null),[L,G]=ne.useState(!1),[m,H]=ne.useState(null),[F,J]=ne.useState(!1),V=ne.useCallback(async W=>{N(null),G(!0),H({phase:"reading"});try{const{parseTranscriptFile:z}=await Rt(async()=>{const{parseTranscriptFile:k}=await import("./client-CyuDoYJ-.js");return{parseTranscriptFile:k}},[]),Y=await z(W,H);if(Y.terms.length===0){N("No semesters turned up in that PDF. Make sure it is the unofficial transcript from Testudo.");return}S(Y)}catch(z){N(z instanceof Pd?z.message:`That PDF could not be read. ${z instanceof Error?z.message:""}`.trim())}finally{G(!1),H(null)}},[S]),_=ne.useCallback((W,z)=>{N(null),S(lu(z),W)},[S]);return O.jsxs("div",{className:"space-y-6",children:[O.jsxs("p",{className:"rounded-lg border border-positive-300 bg-positive-50 px-4 py-3 text-sm text-positive-900 dark:border-positive-800 dark:bg-positive-950/30 dark:text-positive-100",children:[O.jsx("strong",{children:"Your transcript is read here in your browser and never uploaded."})," There is no server and no account — the file is opened by code running in this tab, and nothing about it is sent anywhere. You can watch that yourself in your browser's network tab."]}),O.jsxs("section",{onDragOver:W=>{W.preventDefault(),J(!0)},onDragLeave:()=>J(!1),onDrop:W=>{W.preventDefault(),J(!1);const z=W.dataTransfer.files[0];z&&V(z)},className:`rounded-xl border p-5 text-center transition-colors sm:border-2 sm:border-dashed sm:p-10 ${F?"border-accent-600 bg-accent-50 dark:bg-accent-950/40":"border-neutral-200 dark:border-neutral-800 sm:border-neutral-300 sm:dark:border-neutral-700"}`,children:[O.jsxs("p",{className:"mb-1 text-lg font-semibold",children:[O.jsx("span",{className:"sm:hidden",children:"Add your unofficial transcript"}),O.jsx("span",{className:"hidden sm:inline",children:"Drop your unofficial transcript here"})]}),O.jsx("p",{className:"mb-5 text-sm text-neutral-500 dark:text-neutral-400",children:"Testudo → Academics → Unofficial Transcript → save as PDF"}),O.jsx("input",{id:"transcript-file",type:"file",accept:"application/pdf,.pdf",className:"sr-only",disabled:L,onChange:W=>{var Y;const z=(Y=W.target.files)==null?void 0:Y[0];z&&V(z),W.target.value=""}}),L?O.jsx(Dd,{progress:m}):O.jsx("label",{htmlFor:"transcript-file",className:"button w-full cursor-pointer text-base focus-within:ring-2 focus-within:ring-accent-600 focus-within:ring-offset-2 sm:w-auto sm:text-sm dark:focus-within:ring-offset-neutral-950",children:"Choose file"}),O.jsx("p",{className:"mt-3 hidden text-xs text-neutral-500 sm:block dark:text-neutral-400",children:"or drag it onto this box"})]}),O.jsxs("section",{className:"card",children:[O.jsx("h2",{className:"font-semibold",children:"See how it works"}),O.jsx("p",{className:"mt-1 text-sm text-neutral-600 dark:text-neutral-300",children:"Rather not hand your transcript to a site you have never heard of? Reasonable. Pick a major and a year — no file, no upload."}),O.jsx(hd,{sampleId:u,onLoad:_}),O.jsx("div",{className:"mt-4 hidden overflow-x-auto sm:block",children:O.jsxs("table",{className:"w-full border-separate border-spacing-1 text-sm",children:[O.jsx("caption",{className:"sr-only",children:"Sample transcripts by major and class year. Majors marked “no audit” have no degree requirements on file."}),O.jsx("thead",{children:O.jsxs("tr",{children:[O.jsx("th",{className:"sticky left-0 z-10 w-24 bg-white dark:bg-neutral-900"}),Kn.map(W=>O.jsxs("th",{scope:"col",className:"px-1 pb-1 align-bottom",children:[O.jsx("span",{className:"block whitespace-nowrap text-xs font-semibold",children:W.short}),O.jsx("span",{className:`block whitespace-nowrap text-[10px] font-normal ${W.hasRequirements?"text-positive-600 dark:text-positive-400":"text-neutral-400 dark:text-neutral-500"}`,children:W.hasRequirements?"audit":"no audit"})]},W.slug))]})}),O.jsx("tbody",{children:mt.map(W=>O.jsxs("tr",{children:[O.jsx("th",{scope:"row",className:"sticky left-0 z-10 bg-white pr-2 text-right text-xs font-medium text-neutral-500 dark:bg-neutral-900",children:W.label}),Kn.map(z=>{const Y=yr(z.slug,W.slug);if(!Y)return O.jsx("td",{},z.slug);const k=Y.id===u;return O.jsx("td",{className:"p-0",children:O.jsx("button",{type:"button",onClick:()=>_(Y.id,Y.text),"aria-current":k?"true":void 0,"aria-label":`${z.name}, ${W.label}${z.hasRequirements?"":" (no degree audit available)"}`,className:`w-full whitespace-nowrap rounded border px-3 py-2 text-xs transition-colors hover:border-accent-600 ${k?"border-accent-600 bg-accent-50 font-semibold dark:bg-accent-950/40":z.hasRequirements?"border-positive-500/40 dark:border-positive-500/30":"border-dashed border-neutral-300 dark:border-neutral-700"}`,children:W.label})},z.slug)})]},W.slug))})]})}),O.jsx("p",{className:"mt-3 hidden text-xs text-neutral-500 sm:block dark:text-neutral-400",children:"Solid columns have degree requirements on file and produce a full audit. Dashed ones do not — everything else works, but the audit page says so instead of guessing. Requirements are transcribed from the catalog by hand, one major at a time."}),O.jsx("p",{className:"mt-3 text-xs text-neutral-500 sm:hidden dark:text-neutral-400",children:"Majors marked “no audit” have no degree requirements on file — everything else works, but the audit page says so instead of guessing. Requirements are transcribed from the catalog by hand, one major at a time."}),O.jsx("p",{className:"mt-2 text-xs text-neutral-500 dark:text-neutral-400",children:"Each major is one invented student across four years, so later years contain everything the earlier ones do. Entirely synthetic; no real transcript is in this repository."})]}),f&&O.jsxs("section",{role:"alert",className:"rounded-lg border border-critical-300 bg-critical-50 p-4 text-sm text-critical-800 dark:border-critical-900 dark:bg-critical-950/40 dark:text-critical-200",children:[O.jsx("h2",{className:"font-semibold",children:"That did not work"}),O.jsx("p",{className:"mt-1",children:f}),O.jsx("p",{className:"mt-2 text-xs text-critical-700 dark:text-critical-300",children:"Nothing was kept and nothing was sent anywhere. Pick another file and try again, or use a sample above to see what the app does."})]}),O.jsxs("section",{className:"card space-y-2 text-sm",children:[O.jsx("h2",{className:"font-semibold",children:"Where your transcript goes"}),O.jsx("p",{className:"text-neutral-600 dark:text-neutral-300",children:"Nowhere. The PDF is read by JavaScript running in this tab. There is no server, no account and no upload — the file never leaves your device, and you can check that in your browser's network tab."}),O.jsx("p",{className:"text-neutral-600 dark:text-neutral-300",children:"The parsed result is kept in this browser's local storage so you do not have to re-upload every visit. That is the only copy that exists anywhere, and the button below deletes it."}),O.jsx("div",{className:"pt-1",children:O.jsx(Ld,{onCleared:a})})]})]})}function Dd({progress:u}){const S=(u==null?void 0:u.phase)==="parsing"?`Reading page ${u.page} of ${u.totalPages}…`:"Opening your transcript…";return O.jsxs("div",{role:"status",className:"flex min-h-11 items-center justify-center gap-3 text-sm text-neutral-600 dark:text-neutral-300",children:[O.jsx("span",{"aria-hidden":"true",className:"h-5 w-5 animate-spin rounded-full border-2 border-neutral-300 border-t-accent-700 dark:border-neutral-700 dark:border-t-accent-700"}),S]})}function hd({sampleId:u,onLoad:S}){const[a,f]=ne.useState(()=>{const F=Kn.find(J=>mt.some(V=>{var _;return((_=yr(J.slug,V.slug))==null?void 0:_.id)===u}));return(F==null?void 0:F.slug)??Kn[0].slug}),[N,L]=ne.useState(()=>{var F;return((F=mt.find(J=>{var V;return((V=yr(a,J.slug))==null?void 0:V.id)===u}))==null?void 0:F.slug)??mt[0].slug}),G=Kn.find(F=>F.slug===a)??Kn[0],m=yr(a,N),H=m!=null&&m.id===u;return O.jsxs("div",{className:"mt-4 space-y-3 sm:hidden",children:[O.jsxs("label",{className:"block",children:[O.jsx("span",{className:"label",children:"Major"}),O.jsx("select",{className:"select mt-1",value:a,onChange:F=>f(F.target.value),children:Kn.map(F=>O.jsxs("option",{value:F.slug,children:[F.name,F.hasRequirements?"":" (no audit)"]},F.slug))})]}),O.jsxs("label",{className:"block",children:[O.jsx("span",{className:"label",children:"Class year"}),O.jsx("select",{className:"select mt-1",value:N,onChange:F=>L(F.target.value),children:mt.map(F=>O.jsx("option",{value:F.slug,children:F.label},F.slug))})]}),O.jsx("button",{type:"button",className:"button w-full",disabled:!m||H,onClick:()=>m&&S(m.id,m.text),children:H?"Showing this sample":"Load this sample"}),O.jsx("p",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:G.hasRequirements?`${G.name} has degree requirements on file, so this one produces a full audit.`:`${G.name} has no degree requirements on file yet — everything works except the audit page, which says so instead of guessing.`})]})}const gd=ne.lazy(()=>Rt(()=>import("./Dashboard-CBbUDwfs.js"),__vite__mapDeps([0,1,2])).then(u=>({default:u.DashboardPage}))),vd=ne.lazy(()=>Rt(()=>import("./Planner-DhEoj7Ew.js"),__vite__mapDeps([3,2,4])).then(u=>({default:u.PlannerPage}))),Hd=ne.lazy(()=>Rt(()=>import("./Schedule-DwgnhGAS.js"),__vite__mapDeps([5,1,4,2])).then(u=>({default:u.SchedulePage}))),yd=ne.lazy(()=>Rt(()=>import("./Requirements-BwNPD7KU.js"),__vite__mapDeps([6,2,4])).then(u=>({default:u.RequirementsPage}))),Fd={dashboard:"Dashboard",requirements:"Requirements",schedule:"Schedule",planner:"Planner",upload:"Transcript"},Bd=[{id:"dashboard",label:"Dashboard"},{id:"requirements",label:"Requirements"},{id:"schedule",label:"Schedule"},{id:"planner",label:"Planner"},{id:"upload",label:"Transcript"}];function Yd(){var W,z,Y;const[u,S]=ne.useState(null),[a,f]=ne.useState(void 0),[N,L]=ne.useState(!1),[G,m]=ne.useState("upload");ne.useEffect(()=>{const k=Md();if(k.transcript){S(k.transcript),f(k.sampleId),m("dashboard");return}if(!k.stale)return;const de=au(k.sampleId);if(de){const Le=lu(de.text);S(Le),f(de.id),Xs(Le,de.id),m("dashboard");return}L(!0)},[]);const H=ne.useCallback((k,de)=>{S(k),f(de),L(!1),Xs(k,de),m("dashboard")},[]),F=ne.useCallback(()=>{cu(),S(null),f(void 0),m("upload")},[]),J=ne.useMemo(()=>u?Zs(u):null,[u]),V=ne.useMemo(()=>u?Vl(u):null,[u]),_=!!(V&&V.statedGpa!==null&&!V.ok);return O.jsxs("div",{className:"pad-safe-x mx-auto min-h-screen min-h-dvh max-w-4xl py-8",children:[O.jsxs("header",{className:"mb-4 flex flex-wrap items-start justify-between gap-3",children:[O.jsxs("div",{children:[O.jsxs("h1",{className:"text-2xl font-bold tracking-tight",children:["Terp",O.jsx("span",{className:"text-terp-red",children:"Tracker"})]}),O.jsxs("p",{className:"text-sm text-neutral-500 dark:text-neutral-400",children:[(u==null?void 0:u.major)??"Your transcript, your GPA, and what you need next"," — all in this tab."]})]}),(J==null?void 0:J.gpa)!=null&&O.jsxs("div",{className:"text-right",children:[O.jsxs("div",{className:`text-3xl font-bold tabular-nums ${_?"text-caution-600 dark:text-caution-400":""}`,children:[J.gpa.toFixed(3),_&&O.jsx("span",{className:"ml-1 align-top text-base",children:"⚠"})]}),O.jsxs("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:[J.earnedCredits," credits"]}),O.jsx(Id,{view:Fd[G],transcript:u,sampleId:a,className:"mt-1"})]})]}),O.jsxs("p",{className:"mb-4 rounded-lg border border-caution-400/60 bg-caution-50 px-3 py-2 text-sm text-caution-900 dark:border-caution-700/60 dark:bg-caution-950/30 dark:text-caution-200",children:[O.jsx("strong",{children:"Unofficial."})," Not affiliated with the University of Maryland. Confirm anything here with your advisor and your official degree audit before you register."]}),N&&O.jsxs("p",{role:"alert",className:"mb-4 rounded-lg border border-info-400/60 bg-info-50 px-3 py-2 text-sm text-info-900 dark:border-info-700/60 dark:bg-info-950/30 dark:text-info-200",children:[O.jsx("strong",{children:"TerpTracker got better at reading transcripts since you last used it."})," ","Your saved copy was read by the older version and would have shown requirements as unmet that you have actually finished, so it has been cleared. Drop your PDF in again to pick up the new checks — it only ever lived in this browser, so there is nothing to recover."]}),a&&O.jsxs("p",{className:"mb-4 rounded-lg border border-info-400/60 bg-info-50 px-3 py-2 text-sm text-info-900 dark:border-info-700/60 dark:bg-info-950/30 dark:text-info-200",children:["Sample data — an invented ",O.jsx("strong",{children:((W=Ad(a))==null?void 0:W.name)??"demo"})," student, not your own record. Everything below is real behaviour on invented data; load your own transcript from the Transcript tab whenever you like."]}),_&&V&&O.jsxs("p",{role:"alert",className:"mb-4 rounded-lg border border-caution-500 bg-caution-100 px-3 py-2 text-sm text-caution-900 dark:border-caution-600 dark:bg-caution-950/50 dark:text-caution-100",children:[O.jsx("strong",{children:"This GPA does not match your transcript."})," We compute"," ",(z=V.computedGpa)==null?void 0:z.toFixed(3)," but your transcript prints ",(Y=V.statedGpa)==null?void 0:Y.toFixed(3),", so something did not parse correctly. Treat every number here as unreliable until it agrees."]}),O.jsx("nav",{className:"mb-6 flex flex-wrap gap-1 border-b border-neutral-200 dark:border-neutral-800 sm:flex-nowrap",children:Bd.map(({id:k,label:de})=>O.jsx("button",{type:"button",onClick:()=>m(k),disabled:k!=="upload"&&!u,"aria-current":G===k?"page":void 0,className:`-mb-px min-h-11 border-b-2 px-3 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-0 sm:px-4 ${G===k?"border-accent-600 text-accent-700 dark:text-accent-400":"border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"}`,children:de},k))}),O.jsx("main",{children:O.jsxs(ne.Suspense,{fallback:O.jsx("p",{className:"text-sm text-neutral-500",children:"Loading…"}),children:[G==="upload"&&O.jsx(Ud,{sampleId:a,onParsed:H,onForget:F}),G==="dashboard"&&u&&O.jsx(gd,{transcript:u}),G==="requirements"&&u&&O.jsx(yd,{transcript:u,sampleId:a}),G==="schedule"&&u&&O.jsx(Hd,{transcript:u}),G==="planner"&&u&&O.jsx(vd,{transcript:u})]})}),O.jsx("footer",{className:"mt-12 border-t border-neutral-200 pt-4 text-xs text-neutral-500 dark:border-neutral-800",children:"Course data from api.umd.io, grades and ratings from PlanetTerp. Both are run by students and volunteers, and both are cached here rather than called on your behalf."}),O.jsx(pd,{})]})}const Eu=document.getElementById("root");if(!Eu)throw new Error("missing #root");RA.createRoot(Eu).render(O.jsx(ne.StrictMode,{children:O.jsx(Yd,{})}));export{kd as D,nu as G,Yr as P,Id as S,Rt as _,hA as a,Qd as b,Zs as c,Pd as d,tu as e,VA as f,wd as g,wA as h,u1 as i,O as j,Vd as l,S1 as p,ne as r,Vl as s,xA as w};
