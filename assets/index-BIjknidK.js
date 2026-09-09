const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-Btd3o-8q.js","assets/degree-fRidr2EM.js","assets/CourseLink-q65aBAFQ.js","assets/Planner-BdovDp6F.js","assets/TopRated-D7Kf1Ukg.js","assets/Schedule-DbuC2E9b.js","assets/Requirements-Bp-DZWvj.js"])))=>i.map(i=>d[i]);
var Ld=Object.defineProperty;var Ud=(a,S,s)=>S in a?Ld(a,S,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[S]=s;var Yl=(a,S,s)=>Ud(a,typeof S!="symbol"?S+"":S,s);(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))m(O);new MutationObserver(O=>{for(const P of O)if(P.type==="childList")for(const M of P.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&m(M)}).observe(document,{childList:!0,subtree:!0});function s(O){const P={};return O.integrity&&(P.integrity=O.integrity),O.referrerPolicy&&(P.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?P.credentials="include":O.crossOrigin==="anonymous"?P.credentials="omit":P.credentials="same-origin",P}function m(O){if(O.ep)return;O.ep=!0;const P=s(O);fetch(O.href,P)}})();var wl={exports:{}},mt={},kl={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws;function Dd(){if(Ws)return q;Ws=1;var a=Symbol.for("react.element"),S=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),M=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),U=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),V=Symbol.iterator;function J(C){return C===null||typeof C!="object"?null:(C=V&&C[V]||C["@@iterator"],typeof C=="function"?C:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,B={};function Y(C,R,$){this.props=C,this.context=R,this.refs=B,this.updater=$||_}Y.prototype.isReactComponent={},Y.prototype.setState=function(C,R){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,R,"setState")},Y.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function oe(){}oe.prototype=Y.prototype;function Re(C,R,$){this.props=C,this.context=R,this.refs=B,this.updater=$||_}var Z=Re.prototype=new oe;Z.constructor=Re,Q(Z,Y.prototype),Z.isPureReactComponent=!0;var K=Array.isArray,Oe=Object.prototype.hasOwnProperty,ae={current:null},Be={key:!0,ref:!0,__self:!0,__source:!0};function qe(C,R,$){var X,ne={},te=null,se=null;if(R!=null)for(X in R.ref!==void 0&&(se=R.ref),R.key!==void 0&&(te=""+R.key),R)Oe.call(R,X)&&!Be.hasOwnProperty(X)&&(ne[X]=R[X]);var ie=arguments.length-2;if(ie===1)ne.children=$;else if(1<ie){for(var Ae=Array(ie),Je=0;Je<ie;Je++)Ae[Je]=arguments[Je+2];ne.children=Ae}if(C&&C.defaultProps)for(X in ie=C.defaultProps,ie)ne[X]===void 0&&(ne[X]=ie[X]);return{$$typeof:a,type:C,key:te,ref:se,props:ne,_owner:ae.current}}function Un(C,R){return{$$typeof:a,type:C.type,key:R,ref:C.ref,props:C.props,_owner:C._owner}}function mn(C){return typeof C=="object"&&C!==null&&C.$$typeof===a}function $n(C){var R={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function($){return R[$]})}var An=/\/+/g;function Qe(C,R){return typeof C=="object"&&C!==null&&C.key!=null?$n(""+C.key):R.toString(36)}function rn(C,R,$,X,ne){var te=typeof C;(te==="undefined"||te==="boolean")&&(C=null);var se=!1;if(C===null)se=!0;else switch(te){case"string":case"number":se=!0;break;case"object":switch(C.$$typeof){case a:case S:se=!0}}if(se)return se=C,ne=ne(se),C=X===""?"."+Qe(se,0):X,K(ne)?($="",C!=null&&($=C.replace(An,"$&/")+"/"),rn(ne,R,$,"",function(Je){return Je})):ne!=null&&(mn(ne)&&(ne=Un(ne,$+(!ne.key||se&&se.key===ne.key?"":(""+ne.key).replace(An,"$&/")+"/")+C)),R.push(ne)),1;if(se=0,X=X===""?".":X+":",K(C))for(var ie=0;ie<C.length;ie++){te=C[ie];var Ae=X+Qe(te,ie);se+=rn(te,R,$,Ae,ne)}else if(Ae=J(C),typeof Ae=="function")for(C=Ae.call(C),ie=0;!(te=C.next()).done;)te=te.value,Ae=X+Qe(te,ie++),se+=rn(te,R,$,Ae,ne);else if(te==="object")throw R=String(C),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return se}function Cn(C,R,$){if(C==null)return C;var X=[],ne=0;return rn(C,X,"","",function(te){return R.call($,te,ne++)}),X}function xe(C){if(C._status===-1){var R=C._result;R=R(),R.then(function($){(C._status===0||C._status===-1)&&(C._status=1,C._result=$)},function($){(C._status===0||C._status===-1)&&(C._status=2,C._result=$)}),C._status===-1&&(C._status=0,C._result=R)}if(C._status===1)return C._result.default;throw C._result}var Ie={current:null},D={transition:null},W={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:D,ReactCurrentOwner:ae};function y(){throw Error("act(...) is not supported in production builds of React.")}return q.Children={map:Cn,forEach:function(C,R,$){Cn(C,function(){R.apply(this,arguments)},$)},count:function(C){var R=0;return Cn(C,function(){R++}),R},toArray:function(C){return Cn(C,function(R){return R})||[]},only:function(C){if(!mn(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},q.Component=Y,q.Fragment=s,q.Profiler=O,q.PureComponent=Re,q.StrictMode=m,q.Suspense=h,q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,q.act=y,q.cloneElement=function(C,R,$){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var X=Q({},C.props),ne=C.key,te=C.ref,se=C._owner;if(R!=null){if(R.ref!==void 0&&(te=R.ref,se=ae.current),R.key!==void 0&&(ne=""+R.key),C.type&&C.type.defaultProps)var ie=C.type.defaultProps;for(Ae in R)Oe.call(R,Ae)&&!Be.hasOwnProperty(Ae)&&(X[Ae]=R[Ae]===void 0&&ie!==void 0?ie[Ae]:R[Ae])}var Ae=arguments.length-2;if(Ae===1)X.children=$;else if(1<Ae){ie=Array(Ae);for(var Je=0;Je<Ae;Je++)ie[Je]=arguments[Je+2];X.children=ie}return{$$typeof:a,type:C.type,key:ne,ref:te,props:X,_owner:se}},q.createContext=function(C){return C={$$typeof:M,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:P,_context:C},C.Consumer=C},q.createElement=qe,q.createFactory=function(C){var R=qe.bind(null,C);return R.type=C,R},q.createRef=function(){return{current:null}},q.forwardRef=function(C){return{$$typeof:f,render:C}},q.isValidElement=mn,q.lazy=function(C){return{$$typeof:j,_payload:{_status:-1,_result:C},_init:xe}},q.memo=function(C,R){return{$$typeof:U,type:C,compare:R===void 0?null:R}},q.startTransition=function(C){var R=D.transition;D.transition={};try{C()}finally{D.transition=R}},q.unstable_act=y,q.useCallback=function(C,R){return Ie.current.useCallback(C,R)},q.useContext=function(C){return Ie.current.useContext(C)},q.useDebugValue=function(){},q.useDeferredValue=function(C){return Ie.current.useDeferredValue(C)},q.useEffect=function(C,R){return Ie.current.useEffect(C,R)},q.useId=function(){return Ie.current.useId()},q.useImperativeHandle=function(C,R,$){return Ie.current.useImperativeHandle(C,R,$)},q.useInsertionEffect=function(C,R){return Ie.current.useInsertionEffect(C,R)},q.useLayoutEffect=function(C,R){return Ie.current.useLayoutEffect(C,R)},q.useMemo=function(C,R){return Ie.current.useMemo(C,R)},q.useReducer=function(C,R,$){return Ie.current.useReducer(C,R,$)},q.useRef=function(C){return Ie.current.useRef(C)},q.useState=function(C){return Ie.current.useState(C)},q.useSyncExternalStore=function(C,R,$){return Ie.current.useSyncExternalStore(C,R,$)},q.useTransition=function(){return Ie.current.useTransition()},q.version="18.3.1",q}var zs;function Wl(){return zs||(zs=1,kl.exports=Dd()),kl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks;function hd(){if(Ks)return mt;Ks=1;var a=Wl(),S=Symbol.for("react.element"),s=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,O=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function M(f,h,U){var j,V={},J=null,_=null;U!==void 0&&(J=""+U),h.key!==void 0&&(J=""+h.key),h.ref!==void 0&&(_=h.ref);for(j in h)m.call(h,j)&&!P.hasOwnProperty(j)&&(V[j]=h[j]);if(f&&f.defaultProps)for(j in h=f.defaultProps,h)V[j]===void 0&&(V[j]=h[j]);return{$$typeof:S,type:f,key:J,ref:_,props:V,_owner:O.current}}return mt.Fragment=s,mt.jsx=M,mt.jsxs=M,mt}var $s;function gd(){return $s||($s=1,wl.exports=hd()),wl.exports}var c=gd(),b=Wl(),Hr={},Vl={exports:{}},_e={},jl={exports:{}},_l={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qs;function vd(){return qs||(qs=1,(function(a){function S(D,W){var y=D.length;D.push(W);e:for(;0<y;){var C=y-1>>>1,R=D[C];if(0<O(R,W))D[C]=W,D[y]=R,y=C;else break e}}function s(D){return D.length===0?null:D[0]}function m(D){if(D.length===0)return null;var W=D[0],y=D.pop();if(y!==W){D[0]=y;e:for(var C=0,R=D.length,$=R>>>1;C<$;){var X=2*(C+1)-1,ne=D[X],te=X+1,se=D[te];if(0>O(ne,y))te<R&&0>O(se,ne)?(D[C]=se,D[te]=y,C=te):(D[C]=ne,D[X]=y,C=X);else if(te<R&&0>O(se,y))D[C]=se,D[te]=y,C=te;else break e}}return W}function O(D,W){var y=D.sortIndex-W.sortIndex;return y!==0?y:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var P=performance;a.unstable_now=function(){return P.now()}}else{var M=Date,f=M.now();a.unstable_now=function(){return M.now()-f}}var h=[],U=[],j=1,V=null,J=3,_=!1,Q=!1,B=!1,Y=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,Re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(D){for(var W=s(U);W!==null;){if(W.callback===null)m(U);else if(W.startTime<=D)m(U),W.sortIndex=W.expirationTime,S(h,W);else break;W=s(U)}}function K(D){if(B=!1,Z(D),!Q)if(s(h)!==null)Q=!0,xe(Oe);else{var W=s(U);W!==null&&Ie(K,W.startTime-D)}}function Oe(D,W){Q=!1,B&&(B=!1,oe(qe),qe=-1),_=!0;var y=J;try{for(Z(W),V=s(h);V!==null&&(!(V.expirationTime>W)||D&&!$n());){var C=V.callback;if(typeof C=="function"){V.callback=null,J=V.priorityLevel;var R=C(V.expirationTime<=W);W=a.unstable_now(),typeof R=="function"?V.callback=R:V===s(h)&&m(h),Z(W)}else m(h);V=s(h)}if(V!==null)var $=!0;else{var X=s(U);X!==null&&Ie(K,X.startTime-W),$=!1}return $}finally{V=null,J=y,_=!1}}var ae=!1,Be=null,qe=-1,Un=5,mn=-1;function $n(){return!(a.unstable_now()-mn<Un)}function An(){if(Be!==null){var D=a.unstable_now();mn=D;var W=!0;try{W=Be(!0,D)}finally{W?Qe():(ae=!1,Be=null)}}else ae=!1}var Qe;if(typeof Re=="function")Qe=function(){Re(An)};else if(typeof MessageChannel<"u"){var rn=new MessageChannel,Cn=rn.port2;rn.port1.onmessage=An,Qe=function(){Cn.postMessage(null)}}else Qe=function(){Y(An,0)};function xe(D){Be=D,ae||(ae=!0,Qe())}function Ie(D,W){qe=Y(function(){D(a.unstable_now())},W)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_continueExecution=function(){Q||_||(Q=!0,xe(Oe))},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Un=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return J},a.unstable_getFirstCallbackNode=function(){return s(h)},a.unstable_next=function(D){switch(J){case 1:case 2:case 3:var W=3;break;default:W=J}var y=J;J=W;try{return D()}finally{J=y}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var y=J;J=D;try{return W()}finally{J=y}},a.unstable_scheduleCallback=function(D,W,y){var C=a.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?C+y:C):y=C,D){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=y+R,D={id:j++,callback:W,priorityLevel:D,startTime:y,expirationTime:R,sortIndex:-1},y>C?(D.sortIndex=y,S(U,D),s(h)===null&&D===s(U)&&(B?(oe(qe),qe=-1):B=!0,Ie(K,y-C))):(D.sortIndex=R,S(h,D),Q||_||(Q=!0,xe(Oe))),D},a.unstable_shouldYield=$n,a.unstable_wrapCallback=function(D){var W=J;return function(){var y=J;J=W;try{return D.apply(this,arguments)}finally{J=y}}}})(_l)),_l}var Xs;function yd(){return Xs||(Xs=1,jl.exports=vd()),jl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zs;function Hd(){if(Zs)return _e;Zs=1;var a=Wl(),S=yd();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,O={};function P(e,n){M(e,n),M(e+"Capture",n)}function M(e,n){for(O[e]=n,e=0;e<n.length;e++)m.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,U=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j={},V={};function J(e){return h.call(V,e)?!0:h.call(j,e)?!1:U.test(e)?V[e]=!0:(j[e]=!0,!1)}function _(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q(e,n,t,r){if(n===null||typeof n>"u"||_(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function B(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Y[n]=new B(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function Re(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(oe,Re);Y[n]=new B(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(oe,Re);Y[n]=new B(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(oe,Re);Y[n]=new B(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function Z(e,n,t,r){var i=Y.hasOwnProperty(n)?Y[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Q(n,t,i,r)&&(t=null),r||i===null?J(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var K=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),ae=Symbol.for("react.portal"),Be=Symbol.for("react.fragment"),qe=Symbol.for("react.strict_mode"),Un=Symbol.for("react.profiler"),mn=Symbol.for("react.provider"),$n=Symbol.for("react.context"),An=Symbol.for("react.forward_ref"),Qe=Symbol.for("react.suspense"),rn=Symbol.for("react.suspense_list"),Cn=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),Ie=Symbol.for("react.offscreen"),D=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var y=Object.assign,C;function R(e){if(C===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);C=n&&n[1]||""}return`
`+C+e}var $=!1;function X(e,n){if(!e||$)return"";$=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(N){var r=N}Reflect.construct(e,[],n)}else{try{n.call()}catch(N){r=N}e.call(n.prototype)}else{try{throw Error()}catch(N){r=N}e()}}catch(N){if(N&&r&&typeof N.stack=="string"){for(var i=N.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var d=`
`+i[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=u);break}}}finally{$=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?R(e):""}function ne(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Be:return"Fragment";case ae:return"Portal";case Un:return"Profiler";case qe:return"StrictMode";case Qe:return"Suspense";case rn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $n:return(e.displayName||"Context")+".Consumer";case mn:return(e._context.displayName||"Context")+".Provider";case An:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cn:return n=e.displayName||null,n!==null?n:te(e.type)||"Memo";case xe:n=e._payload,e=e._init;try{return te(e(n))}catch{}}return null}function se(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(n);case 8:return n===qe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ae(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e){var n=Ae(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pt(e){e._valueTracker||(e._valueTracker=Je(e))}function Xl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ae(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Mt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jr(e,n){var t=n.checked;return y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Zl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ie(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function bl(e,n){n=n.checked,n!=null&&Z(e,"checked",n,!1)}function Wr(e,n){bl(e,n);var t=ie(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?zr(e,n.type,t):n.hasOwnProperty("defaultValue")&&zr(e,n.type,ie(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function eo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function zr(e,n,t){(n!=="number"||Mt(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var H0=Array.isArray;function u0(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ie(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Kr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function no(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(s(92));if(H0(t)){if(1<t.length)throw Error(s(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ie(t)}}function to(e,n){var t=ie(n.value),r=ie(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ro(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function io(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $r(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?io(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gt,lo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Gt=Gt||document.createElement("div"),Gt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Gt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function F0(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var B0={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gu=["Webkit","ms","Moz","O"];Object.keys(B0).forEach(function(e){gu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),B0[n]=B0[e]})});function oo(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||B0.hasOwnProperty(e)&&B0[e]?(""+n).trim():n+"px"}function ao(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=oo(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var vu=y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qr(e,n){if(n){if(vu[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function Xr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zr=null;function br(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ei=null,S0=null,d0=null;function so(e){if(e=it(e)){if(typeof ei!="function")throw Error(s(280));var n=e.stateNode;n&&(n=$t(n),ei(e.stateNode,e.type,n))}}function uo(e){S0?d0?d0.push(e):d0=[e]:S0=e}function So(){if(S0){var e=S0,n=d0;if(d0=S0=null,so(e),n)for(e=0;e<n.length;e++)so(n[e])}}function Ao(e,n){return e(n)}function Co(){}var ni=!1;function co(e,n,t){if(ni)return e(n,t);ni=!0;try{return Ao(e,n,t)}finally{ni=!1,(S0!==null||d0!==null)&&(Co(),So())}}function x0(e,n){var t=e.stateNode;if(t===null)return null;var r=$t(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var ti=!1;if(f)try{var Y0={};Object.defineProperty(Y0,"passive",{get:function(){ti=!0}}),window.addEventListener("test",Y0,Y0),window.removeEventListener("test",Y0,Y0)}catch{ti=!1}function yu(e,n,t,r,i,l,o,u,d){var N=Array.prototype.slice.call(arguments,3);try{n.apply(t,N)}catch(p){this.onError(p)}}var w0=!1,Lt=null,Ut=!1,ri=null,Hu={onError:function(e){w0=!0,Lt=e}};function Fu(e,n,t,r,i,l,o,u,d){w0=!1,Lt=null,yu.apply(Hu,arguments)}function Bu(e,n,t,r,i,l,o,u,d){if(Fu.apply(this,arguments),w0){if(w0){var N=Lt;w0=!1,Lt=null}else throw Error(s(198));Ut||(Ut=!0,ri=N)}}function qn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Eo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Io(e){if(qn(e)!==e)throw Error(s(188))}function xu(e){var n=e.alternate;if(!n){if(n=qn(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Io(i),e;if(l===r)return Io(i),n;l=l.sibling}throw Error(s(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(s(189))}}if(t.alternate!==r)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function No(e){return e=xu(e),e!==null?Oo(e):null}function Oo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Oo(e);if(n!==null)return n;e=e.sibling}return null}var mo=S.unstable_scheduleCallback,fo=S.unstable_cancelCallback,Yu=S.unstable_shouldYield,wu=S.unstable_requestPaint,me=S.unstable_now,ku=S.unstable_getCurrentPriorityLevel,ii=S.unstable_ImmediatePriority,To=S.unstable_UserBlockingPriority,Dt=S.unstable_NormalPriority,Vu=S.unstable_LowPriority,Ro=S.unstable_IdlePriority,ht=null,cn=null;function ju(e){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(ht,e,void 0,(e.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:Ju,_u=Math.log,Qu=Math.LN2;function Ju(e){return e>>>=0,e===0?32:31-(_u(e)/Qu|0)|0}var gt=64,vt=4194304;function k0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yt(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=k0(u):(l&=o,l!==0&&(r=k0(l)))}else o=t&~i,o!==0?r=k0(o):l!==0&&(r=k0(l));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-ln(n),i=1<<t,r|=e[t],n&=~i;return r}function Wu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zu(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-ln(l),u=1<<o,d=i[o];d===-1?((u&t)===0||(u&r)!==0)&&(i[o]=Wu(u,n)):d<=n&&(e.expiredLanes|=u),l&=~u}}function li(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function po(){var e=gt;return gt<<=1,(gt&4194240)===0&&(gt=64),e}function oi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function V0(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-ln(n),e[n]=t}function Ku(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-ln(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function ai(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-ln(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var le=0;function Po(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Mo,si,Go,Lo,Uo,ui=!1,Ht=[],Dn=null,hn=null,gn=null,j0=new Map,_0=new Map,vn=[],$u="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Do(e,n){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":j0.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_0.delete(n.pointerId)}}function Q0(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=it(n),n!==null&&si(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function qu(e,n,t,r,i){switch(n){case"focusin":return Dn=Q0(Dn,e,n,t,r,i),!0;case"dragenter":return hn=Q0(hn,e,n,t,r,i),!0;case"mouseover":return gn=Q0(gn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return j0.set(l,Q0(j0.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,_0.set(l,Q0(_0.get(l)||null,e,n,t,r,i)),!0}return!1}function ho(e){var n=Xn(e.target);if(n!==null){var t=qn(n);if(t!==null){if(n=t.tag,n===13){if(n=Eo(t),n!==null){e.blockedOn=n,Uo(e.priority,function(){Go(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ft(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=di(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Zr=r,t.target.dispatchEvent(r),Zr=null}else return n=it(t),n!==null&&si(n),e.blockedOn=t,!1;n.shift()}return!0}function go(e,n,t){Ft(e)&&t.delete(n)}function Xu(){ui=!1,Dn!==null&&Ft(Dn)&&(Dn=null),hn!==null&&Ft(hn)&&(hn=null),gn!==null&&Ft(gn)&&(gn=null),j0.forEach(go),_0.forEach(go)}function J0(e,n){e.blockedOn===n&&(e.blockedOn=null,ui||(ui=!0,S.unstable_scheduleCallback(S.unstable_NormalPriority,Xu)))}function W0(e){function n(i){return J0(i,e)}if(0<Ht.length){J0(Ht[0],e);for(var t=1;t<Ht.length;t++){var r=Ht[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Dn!==null&&J0(Dn,e),hn!==null&&J0(hn,e),gn!==null&&J0(gn,e),j0.forEach(n),_0.forEach(n),t=0;t<vn.length;t++)r=vn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(t=vn[0],t.blockedOn===null);)ho(t),t.blockedOn===null&&vn.shift()}var A0=K.ReactCurrentBatchConfig,Bt=!0;function Zu(e,n,t,r){var i=le,l=A0.transition;A0.transition=null;try{le=1,Si(e,n,t,r)}finally{le=i,A0.transition=l}}function bu(e,n,t,r){var i=le,l=A0.transition;A0.transition=null;try{le=4,Si(e,n,t,r)}finally{le=i,A0.transition=l}}function Si(e,n,t,r){if(Bt){var i=di(e,n,t,r);if(i===null)Ui(e,n,r,xt,t),Do(e,r);else if(qu(i,e,n,t,r))r.stopPropagation();else if(Do(e,r),n&4&&-1<$u.indexOf(e)){for(;i!==null;){var l=it(i);if(l!==null&&Mo(l),l=di(e,n,t,r),l===null&&Ui(e,n,r,xt,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ui(e,n,r,null,t)}}var xt=null;function di(e,n,t,r){if(xt=null,e=br(r),e=Xn(e),e!==null)if(n=qn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Eo(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return xt=e,null}function vo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ku()){case ii:return 1;case To:return 4;case Dt:case Vu:return 16;case Ro:return 536870912;default:return 16}default:return 16}}var yn=null,Ai=null,Yt=null;function yo(){if(Yt)return Yt;var e,n=Ai,t=n.length,r,i="value"in yn?yn.value:yn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Yt=i.slice(e,1<r?1-r:void 0)}function wt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function kt(){return!0}function Ho(){return!1}function We(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?kt:Ho,this.isPropagationStopped=Ho,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=kt)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=kt)},persist:function(){},isPersistent:kt}),n}var C0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ci=We(C0),z0=y({},C0,{view:0,detail:0}),eS=We(z0),ci,Ei,K0,Vt=y({},z0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ni,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==K0&&(K0&&e.type==="mousemove"?(ci=e.screenX-K0.screenX,Ei=e.screenY-K0.screenY):Ei=ci=0,K0=e),ci)},movementY:function(e){return"movementY"in e?e.movementY:Ei}}),Fo=We(Vt),nS=y({},Vt,{dataTransfer:0}),tS=We(nS),rS=y({},z0,{relatedTarget:0}),Ii=We(rS),iS=y({},C0,{animationName:0,elapsedTime:0,pseudoElement:0}),lS=We(iS),oS=y({},C0,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),aS=We(oS),sS=y({},C0,{data:0}),Bo=We(sS),uS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=dS[e])?!!n[e]:!1}function Ni(){return AS}var CS=y({},z0,{key:function(e){if(e.key){var n=uS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?SS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ni,charCode:function(e){return e.type==="keypress"?wt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cS=We(CS),ES=y({},Vt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xo=We(ES),IS=y({},z0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ni}),NS=We(IS),OS=y({},C0,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=We(OS),fS=y({},Vt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),TS=We(fS),RS=[9,13,27,32],Oi=f&&"CompositionEvent"in window,$0=null;f&&"documentMode"in document&&($0=document.documentMode);var pS=f&&"TextEvent"in window&&!$0,Yo=f&&(!Oi||$0&&8<$0&&11>=$0),wo=" ",ko=!1;function Vo(e,n){switch(e){case"keyup":return RS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var c0=!1;function PS(e,n){switch(e){case"compositionend":return jo(n);case"keypress":return n.which!==32?null:(ko=!0,wo);case"textInput":return e=n.data,e===wo&&ko?null:e;default:return null}}function MS(e,n){if(c0)return e==="compositionend"||!Oi&&Vo(e,n)?(e=yo(),Yt=Ai=yn=null,c0=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yo&&n.locale!=="ko"?null:n.data;default:return null}}var GS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _o(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!GS[e.type]:n==="textarea"}function Qo(e,n,t,r){uo(r),n=Wt(n,"onChange"),0<n.length&&(t=new Ci("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var q0=null,X0=null;function LS(e){sa(e,0)}function jt(e){var n=m0(e);if(Xl(n))return e}function US(e,n){if(e==="change")return n}var Jo=!1;if(f){var mi;if(f){var fi="oninput"in document;if(!fi){var Wo=document.createElement("div");Wo.setAttribute("oninput","return;"),fi=typeof Wo.oninput=="function"}mi=fi}else mi=!1;Jo=mi&&(!document.documentMode||9<document.documentMode)}function zo(){q0&&(q0.detachEvent("onpropertychange",Ko),X0=q0=null)}function Ko(e){if(e.propertyName==="value"&&jt(X0)){var n=[];Qo(n,X0,e,br(e)),co(LS,n)}}function DS(e,n,t){e==="focusin"?(zo(),q0=n,X0=t,q0.attachEvent("onpropertychange",Ko)):e==="focusout"&&zo()}function hS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jt(X0)}function gS(e,n){if(e==="click")return jt(n)}function vS(e,n){if(e==="input"||e==="change")return jt(n)}function yS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var on=typeof Object.is=="function"?Object.is:yS;function Z0(e,n){if(on(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!h.call(n,i)||!on(e[i],n[i]))return!1}return!0}function $o(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qo(e,n){var t=$o(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$o(t)}}function Xo(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xo(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zo(){for(var e=window,n=Mt();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Mt(e.document)}return n}function Ti(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function HS(e){var n=Zo(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Xo(t.ownerDocument.documentElement,t)){if(r!==null&&Ti(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=qo(t,l);var o=qo(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var FS=f&&"documentMode"in document&&11>=document.documentMode,E0=null,Ri=null,b0=null,pi=!1;function bo(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pi||E0==null||E0!==Mt(r)||(r=E0,"selectionStart"in r&&Ti(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),b0&&Z0(b0,r)||(b0=r,r=Wt(Ri,"onSelect"),0<r.length&&(n=new Ci("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=E0)))}function _t(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var I0={animationend:_t("Animation","AnimationEnd"),animationiteration:_t("Animation","AnimationIteration"),animationstart:_t("Animation","AnimationStart"),transitionend:_t("Transition","TransitionEnd")},Pi={},ea={};f&&(ea=document.createElement("div").style,"AnimationEvent"in window||(delete I0.animationend.animation,delete I0.animationiteration.animation,delete I0.animationstart.animation),"TransitionEvent"in window||delete I0.transitionend.transition);function Qt(e){if(Pi[e])return Pi[e];if(!I0[e])return e;var n=I0[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ea)return Pi[e]=n[t];return e}var na=Qt("animationend"),ta=Qt("animationiteration"),ra=Qt("animationstart"),ia=Qt("transitionend"),la=new Map,oa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(e,n){la.set(e,n),P(n,[e])}for(var Mi=0;Mi<oa.length;Mi++){var Gi=oa[Mi],BS=Gi.toLowerCase(),xS=Gi[0].toUpperCase()+Gi.slice(1);Hn(BS,"on"+xS)}Hn(na,"onAnimationEnd"),Hn(ta,"onAnimationIteration"),Hn(ra,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(ia,"onTransitionEnd"),M("onMouseEnter",["mouseout","mouseover"]),M("onMouseLeave",["mouseout","mouseover"]),M("onPointerEnter",["pointerout","pointerover"]),M("onPointerLeave",["pointerout","pointerover"]),P("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),P("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),P("onBeforeInput",["compositionend","keypress","textInput","paste"]),P("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),P("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),P("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var et="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YS=new Set("cancel close invalid load scroll toggle".split(" ").concat(et));function aa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Bu(r,n,void 0,e),e.currentTarget=null}function sa(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],d=u.instance,N=u.currentTarget;if(u=u.listener,d!==l&&i.isPropagationStopped())break e;aa(i,u,N),l=d}else for(o=0;o<r.length;o++){if(u=r[o],d=u.instance,N=u.currentTarget,u=u.listener,d!==l&&i.isPropagationStopped())break e;aa(i,u,N),l=d}}}if(Ut)throw e=ri,Ut=!1,ri=null,e}function Se(e,n){var t=n[Hi];t===void 0&&(t=n[Hi]=new Set);var r=e+"__bubble";t.has(r)||(ua(n,e,2,!1),t.add(r))}function Li(e,n,t){var r=0;n&&(r|=4),ua(t,e,r,n)}var Jt="_reactListening"+Math.random().toString(36).slice(2);function nt(e){if(!e[Jt]){e[Jt]=!0,m.forEach(function(t){t!=="selectionchange"&&(YS.has(t)||Li(t,!1,e),Li(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jt]||(n[Jt]=!0,Li("selectionchange",!1,n))}}function ua(e,n,t,r){switch(vo(n)){case 1:var i=Zu;break;case 4:i=bu;break;default:i=Si}t=i.bind(null,n,t,e),i=void 0,!ti||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ui(e,n,t,r,i){var l=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;o=o.return}for(;u!==null;){if(o=Xn(u),o===null)return;if(d=o.tag,d===5||d===6){r=l=o;continue e}u=u.parentNode}}r=r.return}co(function(){var N=l,p=br(t),G=[];e:{var T=la.get(e);if(T!==void 0){var g=Ci,H=e;switch(e){case"keypress":if(wt(t)===0)break e;case"keydown":case"keyup":g=cS;break;case"focusin":H="focus",g=Ii;break;case"focusout":H="blur",g=Ii;break;case"beforeblur":case"afterblur":g=Ii;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=NS;break;case na:case ta:case ra:g=lS;break;case ia:g=mS;break;case"scroll":g=eS;break;case"wheel":g=TS;break;case"copy":case"cut":case"paste":g=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xo}var F=(n&4)!==0,fe=!F&&e==="scroll",E=F?T!==null?T+"Capture":null:T;F=[];for(var A=N,I;A!==null;){I=A;var L=I.stateNode;if(I.tag===5&&L!==null&&(I=L,E!==null&&(L=x0(A,E),L!=null&&F.push(tt(A,L,I)))),fe)break;A=A.return}0<F.length&&(T=new g(T,H,null,t,p),G.push({event:T,listeners:F}))}}if((n&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",T&&t!==Zr&&(H=t.relatedTarget||t.fromElement)&&(Xn(H)||H[fn]))break e;if((g||T)&&(T=p.window===p?p:(T=p.ownerDocument)?T.defaultView||T.parentWindow:window,g?(H=t.relatedTarget||t.toElement,g=N,H=H?Xn(H):null,H!==null&&(fe=qn(H),H!==fe||H.tag!==5&&H.tag!==6)&&(H=null)):(g=null,H=N),g!==H)){if(F=Fo,L="onMouseLeave",E="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(F=xo,L="onPointerLeave",E="onPointerEnter",A="pointer"),fe=g==null?T:m0(g),I=H==null?T:m0(H),T=new F(L,A+"leave",g,t,p),T.target=fe,T.relatedTarget=I,L=null,Xn(p)===N&&(F=new F(E,A+"enter",H,t,p),F.target=I,F.relatedTarget=fe,L=F),fe=L,g&&H)n:{for(F=g,E=H,A=0,I=F;I;I=N0(I))A++;for(I=0,L=E;L;L=N0(L))I++;for(;0<A-I;)F=N0(F),A--;for(;0<I-A;)E=N0(E),I--;for(;A--;){if(F===E||E!==null&&F===E.alternate)break n;F=N0(F),E=N0(E)}F=null}else F=null;g!==null&&Sa(G,T,g,F,!1),H!==null&&fe!==null&&Sa(G,fe,H,F,!0)}}e:{if(T=N?m0(N):window,g=T.nodeName&&T.nodeName.toLowerCase(),g==="select"||g==="input"&&T.type==="file")var x=US;else if(_o(T))if(Jo)x=vS;else{x=hS;var w=DS}else(g=T.nodeName)&&g.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(x=gS);if(x&&(x=x(e,N))){Qo(G,x,t,p);break e}w&&w(e,T,N),e==="focusout"&&(w=T._wrapperState)&&w.controlled&&T.type==="number"&&zr(T,"number",T.value)}switch(w=N?m0(N):window,e){case"focusin":(_o(w)||w.contentEditable==="true")&&(E0=w,Ri=N,b0=null);break;case"focusout":b0=Ri=E0=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,bo(G,t,p);break;case"selectionchange":if(FS)break;case"keydown":case"keyup":bo(G,t,p)}var k;if(Oi)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else c0?Vo(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(Yo&&t.locale!=="ko"&&(c0||z!=="onCompositionStart"?z==="onCompositionEnd"&&c0&&(k=yo()):(yn=p,Ai="value"in yn?yn.value:yn.textContent,c0=!0)),w=Wt(N,z),0<w.length&&(z=new Bo(z,e,null,t,p),G.push({event:z,listeners:w}),k?z.data=k:(k=jo(t),k!==null&&(z.data=k)))),(k=pS?PS(e,t):MS(e,t))&&(N=Wt(N,"onBeforeInput"),0<N.length&&(p=new Bo("onBeforeInput","beforeinput",null,t,p),G.push({event:p,listeners:N}),p.data=k))}sa(G,n)})}function tt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Wt(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=x0(e,t),l!=null&&r.unshift(tt(e,l,i)),l=x0(e,n),l!=null&&r.push(tt(e,l,i))),e=e.return}return r}function N0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sa(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,d=u.alternate,N=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&N!==null&&(u=N,i?(d=x0(t,l),d!=null&&o.unshift(tt(t,d,u))):i||(d=x0(t,l),d!=null&&o.push(tt(t,d,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var wS=/\r\n?/g,kS=/\u0000|\uFFFD/g;function da(e){return(typeof e=="string"?e:""+e).replace(wS,`
`).replace(kS,"")}function zt(e,n,t){if(n=da(n),da(e)!==n&&t)throw Error(s(425))}function Kt(){}var Di=null,hi=null;function gi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,VS=typeof clearTimeout=="function"?clearTimeout:void 0,Aa=typeof Promise=="function"?Promise:void 0,jS=typeof queueMicrotask=="function"?queueMicrotask:typeof Aa<"u"?function(e){return Aa.resolve(null).then(e).catch(_S)}:vi;function _S(e){setTimeout(function(){throw e})}function yi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),W0(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);W0(n)}function Fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ca(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var O0=Math.random().toString(36).slice(2),En="__reactFiber$"+O0,rt="__reactProps$"+O0,fn="__reactContainer$"+O0,Hi="__reactEvents$"+O0,QS="__reactListeners$"+O0,JS="__reactHandles$"+O0;function Xn(e){var n=e[En];if(n)return n;for(var t=e.parentNode;t;){if(n=t[fn]||t[En]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ca(e);e!==null;){if(t=e[En])return t;e=Ca(e)}return n}e=t,t=e.parentNode}return null}function it(e){return e=e[En]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function m0(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function $t(e){return e[rt]||null}var Fi=[],f0=-1;function Bn(e){return{current:e}}function de(e){0>f0||(e.current=Fi[f0],Fi[f0]=null,f0--)}function ue(e,n){f0++,Fi[f0]=e.current,e.current=n}var xn={},he=Bn(xn),Ye=Bn(!1),Zn=xn;function T0(e,n){var t=e.type.contextTypes;if(!t)return xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function qt(){de(Ye),de(he)}function ca(e,n,t){if(he.current!==xn)throw Error(s(168));ue(he,n),ue(Ye,t)}function Ea(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(s(108,se(e)||"Unknown",i));return y({},t,r)}function Xt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Zn=he.current,ue(he,e),ue(Ye,Ye.current),!0}function Ia(e,n,t){var r=e.stateNode;if(!r)throw Error(s(169));t?(e=Ea(e,n,Zn),r.__reactInternalMemoizedMergedChildContext=e,de(Ye),de(he),ue(he,e)):de(Ye),ue(Ye,t)}var Tn=null,Zt=!1,Bi=!1;function Na(e){Tn===null?Tn=[e]:Tn.push(e)}function WS(e){Zt=!0,Na(e)}function Yn(){if(!Bi&&Tn!==null){Bi=!0;var e=0,n=le;try{var t=Tn;for(le=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Tn=null,Zt=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(e+1)),mo(ii,Yn),i}finally{le=n,Bi=!1}}return null}var R0=[],p0=0,bt=null,er=0,Xe=[],Ze=0,bn=null,Rn=1,pn="";function e0(e,n){R0[p0++]=er,R0[p0++]=bt,bt=e,er=n}function Oa(e,n,t){Xe[Ze++]=Rn,Xe[Ze++]=pn,Xe[Ze++]=bn,bn=e;var r=Rn;e=pn;var i=32-ln(r)-1;r&=~(1<<i),t+=1;var l=32-ln(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-ln(n)+i|t<<i|r,pn=l+e}else Rn=1<<l|t<<i|r,pn=e}function xi(e){e.return!==null&&(e0(e,1),Oa(e,1,0))}function Yi(e){for(;e===bt;)bt=R0[--p0],R0[p0]=null,er=R0[--p0],R0[p0]=null;for(;e===bn;)bn=Xe[--Ze],Xe[Ze]=null,pn=Xe[--Ze],Xe[Ze]=null,Rn=Xe[--Ze],Xe[Ze]=null}var ze=null,Ke=null,Ce=!1,an=null;function ma(e,n){var t=tn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function fa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ze=e,Ke=Fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ze=e,Ke=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=bn!==null?{id:Rn,overflow:pn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=tn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ze=e,Ke=null,!0):!1;default:return!1}}function wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ki(e){if(Ce){var n=Ke;if(n){var t=n;if(!fa(e,n)){if(wi(e))throw Error(s(418));n=Fn(t.nextSibling);var r=ze;n&&fa(e,n)?ma(r,t):(e.flags=e.flags&-4097|2,Ce=!1,ze=e)}}else{if(wi(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ce=!1,ze=e}}}function Ta(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function nr(e){if(e!==ze)return!1;if(!Ce)return Ta(e),Ce=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gi(e.type,e.memoizedProps)),n&&(n=Ke)){if(wi(e))throw Ra(),Error(s(418));for(;n;)ma(e,n),n=Fn(n.nextSibling)}if(Ta(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ke=Fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ke=null}}else Ke=ze?Fn(e.stateNode.nextSibling):null;return!0}function Ra(){for(var e=Ke;e;)e=Fn(e.nextSibling)}function P0(){Ke=ze=null,Ce=!1}function Vi(e){an===null?an=[e]:an.push(e)}var zS=K.ReactCurrentBatchConfig;function lt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(s(309));var r=t.stateNode}if(!r)throw Error(s(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(s(284));if(!t._owner)throw Error(s(290,e))}return e}function tr(e,n){throw e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function pa(e){var n=e._init;return n(e._payload)}function Pa(e){function n(E,A){if(e){var I=E.deletions;I===null?(E.deletions=[A],E.flags|=16):I.push(A)}}function t(E,A){if(!e)return null;for(;A!==null;)n(E,A),A=A.sibling;return null}function r(E,A){for(E=new Map;A!==null;)A.key!==null?E.set(A.key,A):E.set(A.index,A),A=A.sibling;return E}function i(E,A){return E=Wn(E,A),E.index=0,E.sibling=null,E}function l(E,A,I){return E.index=I,e?(I=E.alternate,I!==null?(I=I.index,I<A?(E.flags|=2,A):I):(E.flags|=2,A)):(E.flags|=1048576,A)}function o(E){return e&&E.alternate===null&&(E.flags|=2),E}function u(E,A,I,L){return A===null||A.tag!==6?(A=vl(I,E.mode,L),A.return=E,A):(A=i(A,I),A.return=E,A)}function d(E,A,I,L){var x=I.type;return x===Be?p(E,A,I.props.children,L,I.key):A!==null&&(A.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===xe&&pa(x)===A.type)?(L=i(A,I.props),L.ref=lt(E,A,I),L.return=E,L):(L=Gr(I.type,I.key,I.props,null,E.mode,L),L.ref=lt(E,A,I),L.return=E,L)}function N(E,A,I,L){return A===null||A.tag!==4||A.stateNode.containerInfo!==I.containerInfo||A.stateNode.implementation!==I.implementation?(A=yl(I,E.mode,L),A.return=E,A):(A=i(A,I.children||[]),A.return=E,A)}function p(E,A,I,L,x){return A===null||A.tag!==7?(A=s0(I,E.mode,L,x),A.return=E,A):(A=i(A,I),A.return=E,A)}function G(E,A,I){if(typeof A=="string"&&A!==""||typeof A=="number")return A=vl(""+A,E.mode,I),A.return=E,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Oe:return I=Gr(A.type,A.key,A.props,null,E.mode,I),I.ref=lt(E,null,A),I.return=E,I;case ae:return A=yl(A,E.mode,I),A.return=E,A;case xe:var L=A._init;return G(E,L(A._payload),I)}if(H0(A)||W(A))return A=s0(A,E.mode,I,null),A.return=E,A;tr(E,A)}return null}function T(E,A,I,L){var x=A!==null?A.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return x!==null?null:u(E,A,""+I,L);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Oe:return I.key===x?d(E,A,I,L):null;case ae:return I.key===x?N(E,A,I,L):null;case xe:return x=I._init,T(E,A,x(I._payload),L)}if(H0(I)||W(I))return x!==null?null:p(E,A,I,L,null);tr(E,I)}return null}function g(E,A,I,L,x){if(typeof L=="string"&&L!==""||typeof L=="number")return E=E.get(I)||null,u(A,E,""+L,x);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Oe:return E=E.get(L.key===null?I:L.key)||null,d(A,E,L,x);case ae:return E=E.get(L.key===null?I:L.key)||null,N(A,E,L,x);case xe:var w=L._init;return g(E,A,I,w(L._payload),x)}if(H0(L)||W(L))return E=E.get(I)||null,p(A,E,L,x,null);tr(A,L)}return null}function H(E,A,I,L){for(var x=null,w=null,k=A,z=A=0,Le=null;k!==null&&z<I.length;z++){k.index>z?(Le=k,k=null):Le=k.sibling;var re=T(E,k,I[z],L);if(re===null){k===null&&(k=Le);break}e&&k&&re.alternate===null&&n(E,k),A=l(re,A,z),w===null?x=re:w.sibling=re,w=re,k=Le}if(z===I.length)return t(E,k),Ce&&e0(E,z),x;if(k===null){for(;z<I.length;z++)k=G(E,I[z],L),k!==null&&(A=l(k,A,z),w===null?x=k:w.sibling=k,w=k);return Ce&&e0(E,z),x}for(k=r(E,k);z<I.length;z++)Le=g(k,E,z,I[z],L),Le!==null&&(e&&Le.alternate!==null&&k.delete(Le.key===null?z:Le.key),A=l(Le,A,z),w===null?x=Le:w.sibling=Le,w=Le);return e&&k.forEach(function(zn){return n(E,zn)}),Ce&&e0(E,z),x}function F(E,A,I,L){var x=W(I);if(typeof x!="function")throw Error(s(150));if(I=x.call(I),I==null)throw Error(s(151));for(var w=x=null,k=A,z=A=0,Le=null,re=I.next();k!==null&&!re.done;z++,re=I.next()){k.index>z?(Le=k,k=null):Le=k.sibling;var zn=T(E,k,re.value,L);if(zn===null){k===null&&(k=Le);break}e&&k&&zn.alternate===null&&n(E,k),A=l(zn,A,z),w===null?x=zn:w.sibling=zn,w=zn,k=Le}if(re.done)return t(E,k),Ce&&e0(E,z),x;if(k===null){for(;!re.done;z++,re=I.next())re=G(E,re.value,L),re!==null&&(A=l(re,A,z),w===null?x=re:w.sibling=re,w=re);return Ce&&e0(E,z),x}for(k=r(E,k);!re.done;z++,re=I.next())re=g(k,E,z,re.value,L),re!==null&&(e&&re.alternate!==null&&k.delete(re.key===null?z:re.key),A=l(re,A,z),w===null?x=re:w.sibling=re,w=re);return e&&k.forEach(function(Gd){return n(E,Gd)}),Ce&&e0(E,z),x}function fe(E,A,I,L){if(typeof I=="object"&&I!==null&&I.type===Be&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Oe:e:{for(var x=I.key,w=A;w!==null;){if(w.key===x){if(x=I.type,x===Be){if(w.tag===7){t(E,w.sibling),A=i(w,I.props.children),A.return=E,E=A;break e}}else if(w.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===xe&&pa(x)===w.type){t(E,w.sibling),A=i(w,I.props),A.ref=lt(E,w,I),A.return=E,E=A;break e}t(E,w);break}else n(E,w);w=w.sibling}I.type===Be?(A=s0(I.props.children,E.mode,L,I.key),A.return=E,E=A):(L=Gr(I.type,I.key,I.props,null,E.mode,L),L.ref=lt(E,A,I),L.return=E,E=L)}return o(E);case ae:e:{for(w=I.key;A!==null;){if(A.key===w)if(A.tag===4&&A.stateNode.containerInfo===I.containerInfo&&A.stateNode.implementation===I.implementation){t(E,A.sibling),A=i(A,I.children||[]),A.return=E,E=A;break e}else{t(E,A);break}else n(E,A);A=A.sibling}A=yl(I,E.mode,L),A.return=E,E=A}return o(E);case xe:return w=I._init,fe(E,A,w(I._payload),L)}if(H0(I))return H(E,A,I,L);if(W(I))return F(E,A,I,L);tr(E,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,A!==null&&A.tag===6?(t(E,A.sibling),A=i(A,I),A.return=E,E=A):(t(E,A),A=vl(I,E.mode,L),A.return=E,E=A),o(E)):t(E,A)}return fe}var M0=Pa(!0),Ma=Pa(!1),rr=Bn(null),ir=null,G0=null,ji=null;function _i(){ji=G0=ir=null}function Qi(e){var n=rr.current;de(rr),e._currentValue=n}function Ji(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function L0(e,n){ir=e,ji=G0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(ke=!0),e.firstContext=null)}function be(e){var n=e._currentValue;if(ji!==e)if(e={context:e,memoizedValue:n,next:null},G0===null){if(ir===null)throw Error(s(308));G0=e,ir.dependencies={lanes:0,firstContext:e}}else G0=G0.next=e;return n}var n0=null;function Wi(e){n0===null?n0=[e]:n0.push(e)}function Ga(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Wi(n)):(t.next=i.next,i.next=t),n.interleaved=t,Pn(e,r)}function Pn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var wn=!1;function zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function La(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ee&2)!==0){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Pn(e,t)}return i=r.interleaved,i===null?(n.next=n,Wi(r)):(n.next=i.next,i.next=n),r.interleaved=n,Pn(e,t)}function lr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ai(e,t)}}function Ua(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function or(e,n,t,r){var i=e.updateQueue;wn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,N=d.next;d.next=null,o===null?l=N:o.next=N,o=d;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==o&&(u===null?p.firstBaseUpdate=N:u.next=N,p.lastBaseUpdate=d))}if(l!==null){var G=i.baseState;o=0,p=N=d=null,u=l;do{var T=u.lane,g=u.eventTime;if((r&T)===T){p!==null&&(p=p.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var H=e,F=u;switch(T=n,g=t,F.tag){case 1:if(H=F.payload,typeof H=="function"){G=H.call(g,G,T);break e}G=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=F.payload,T=typeof H=="function"?H.call(g,G,T):H,T==null)break e;G=y({},G,T);break e;case 2:wn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,T=i.effects,T===null?i.effects=[u]:T.push(u))}else g={eventTime:g,lane:T,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(N=p=g,d=G):p=p.next=g,o|=T;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;T=u,u=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);if(p===null&&(d=G),i.baseState=d,i.firstBaseUpdate=N,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);i0|=o,e.lanes=o,e.memoizedState=G}}function Da(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(s(191,i));i.call(r)}}}var ot={},In=Bn(ot),at=Bn(ot),st=Bn(ot);function t0(e){if(e===ot)throw Error(s(174));return e}function Ki(e,n){switch(ue(st,n),ue(at,e),ue(In,ot),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:$r(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=$r(n,e)}de(In),ue(In,n)}function U0(){de(In),de(at),de(st)}function ha(e){t0(st.current);var n=t0(In.current),t=$r(n,e.type);n!==t&&(ue(at,e),ue(In,t))}function $i(e){at.current===e&&(de(In),de(at))}var ce=Bn(0);function ar(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=[];function Xi(){for(var e=0;e<qi.length;e++)qi[e]._workInProgressVersionPrimary=null;qi.length=0}var sr=K.ReactCurrentDispatcher,Zi=K.ReactCurrentBatchConfig,r0=0,Ee=null,pe=null,Me=null,ur=!1,ut=!1,St=0,KS=0;function ge(){throw Error(s(321))}function bi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!on(e[t],n[t]))return!1;return!0}function el(e,n,t,r,i,l){if(r0=l,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,sr.current=e===null||e.memoizedState===null?ZS:bS,e=t(r,i),ut){l=0;do{if(ut=!1,St=0,25<=l)throw Error(s(301));l+=1,Me=pe=null,n.updateQueue=null,sr.current=ed,e=t(r,i)}while(ut)}if(sr.current=Ar,n=pe!==null&&pe.next!==null,r0=0,Me=pe=Ee=null,ur=!1,n)throw Error(s(300));return e}function nl(){var e=St!==0;return St=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Ee.memoizedState=Me=e:Me=Me.next=e,Me}function en(){if(pe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=Me===null?Ee.memoizedState:Me.next;if(n!==null)Me=n,pe=e;else{if(e===null)throw Error(s(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Me===null?Ee.memoizedState=Me=e:Me=Me.next=e}return Me}function dt(e,n){return typeof n=="function"?n(e):n}function tl(e){var n=en(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var r=pe,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,d=null,N=l;do{var p=N.lane;if((r0&p)===p)d!==null&&(d=d.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),r=N.hasEagerState?N.eagerState:e(r,N.action);else{var G={lane:p,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};d===null?(u=d=G,o=r):d=d.next=G,Ee.lanes|=p,i0|=p}N=N.next}while(N!==null&&N!==l);d===null?o=r:d.next=u,on(r,n.memoizedState)||(ke=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=d,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,Ee.lanes|=l,i0|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function rl(e){var n=en(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);on(l,n.memoizedState)||(ke=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function ga(){}function va(e,n){var t=Ee,r=en(),i=n(),l=!on(r.memoizedState,i);if(l&&(r.memoizedState=i,ke=!0),r=r.queue,il(Fa.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Me!==null&&Me.memoizedState.tag&1){if(t.flags|=2048,At(9,Ha.bind(null,t,r,i,n),void 0,null),Ge===null)throw Error(s(349));(r0&30)!==0||ya(t,n,i)}return i}function ya(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ee.updateQueue,n===null?(n={lastEffect:null,stores:null},Ee.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ha(e,n,t,r){n.value=t,n.getSnapshot=r,Ba(n)&&xa(e)}function Fa(e,n,t){return t(function(){Ba(n)&&xa(e)})}function Ba(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!on(e,t)}catch{return!0}}function xa(e){var n=Pn(e,1);n!==null&&dn(n,e,1,-1)}function Ya(e){var n=Nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dt,lastRenderedState:e},n.queue=e,e=e.dispatch=XS.bind(null,Ee,e),[n.memoizedState,e]}function At(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Ee.updateQueue,n===null?(n={lastEffect:null,stores:null},Ee.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function wa(){return en().memoizedState}function Sr(e,n,t,r){var i=Nn();Ee.flags|=e,i.memoizedState=At(1|n,t,void 0,r===void 0?null:r)}function dr(e,n,t,r){var i=en();r=r===void 0?null:r;var l=void 0;if(pe!==null){var o=pe.memoizedState;if(l=o.destroy,r!==null&&bi(r,o.deps)){i.memoizedState=At(n,t,l,r);return}}Ee.flags|=e,i.memoizedState=At(1|n,t,l,r)}function ka(e,n){return Sr(8390656,8,e,n)}function il(e,n){return dr(2048,8,e,n)}function Va(e,n){return dr(4,2,e,n)}function ja(e,n){return dr(4,4,e,n)}function _a(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qa(e,n,t){return t=t!=null?t.concat([e]):null,dr(4,4,_a.bind(null,n,e),t)}function ll(){}function Ja(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&bi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Wa(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&bi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function za(e,n,t){return(r0&21)===0?(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=t):(on(t,n)||(t=po(),Ee.lanes|=t,i0|=t,e.baseState=!0),n)}function $S(e,n){var t=le;le=t!==0&&4>t?t:4,e(!0);var r=Zi.transition;Zi.transition={};try{e(!1),n()}finally{le=t,Zi.transition=r}}function Ka(){return en().memoizedState}function qS(e,n,t){var r=Qn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},$a(e))qa(n,t);else if(t=Ga(e,n,t,r),t!==null){var i=Fe();dn(t,e,r,i),Xa(t,n,r)}}function XS(e,n,t){var r=Qn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if($a(e))qa(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,on(u,o)){var d=n.interleaved;d===null?(i.next=i,Wi(n)):(i.next=d.next,d.next=i),n.interleaved=i;return}}catch{}finally{}t=Ga(e,n,i,r),t!==null&&(i=Fe(),dn(t,e,r,i),Xa(t,n,r))}}function $a(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function qa(e,n){ut=ur=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Xa(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ai(e,t)}}var Ar={readContext:be,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},ZS={readContext:be,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:be,useEffect:ka,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Sr(4194308,4,_a.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Sr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Sr(4,2,e,n)},useMemo:function(e,n){var t=Nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Nn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=qS.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:Ya,useDebugValue:ll,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=Ya(!1),n=e[0];return e=$S.bind(null,e[1]),Nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Ee,i=Nn();if(Ce){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Ge===null)throw Error(s(349));(r0&30)!==0||ya(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,ka(Fa.bind(null,r,l,e),[e]),r.flags|=2048,At(9,Ha.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Nn(),n=Ge.identifierPrefix;if(Ce){var t=pn,r=Rn;t=(r&~(1<<32-ln(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=St++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=KS++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},bS={readContext:be,useCallback:Ja,useContext:be,useEffect:il,useImperativeHandle:Qa,useInsertionEffect:Va,useLayoutEffect:ja,useMemo:Wa,useReducer:tl,useRef:wa,useState:function(){return tl(dt)},useDebugValue:ll,useDeferredValue:function(e){var n=en();return za(n,pe.memoizedState,e)},useTransition:function(){var e=tl(dt)[0],n=en().memoizedState;return[e,n]},useMutableSource:ga,useSyncExternalStore:va,useId:Ka,unstable_isNewReconciler:!1},ed={readContext:be,useCallback:Ja,useContext:be,useEffect:il,useImperativeHandle:Qa,useInsertionEffect:Va,useLayoutEffect:ja,useMemo:Wa,useReducer:rl,useRef:wa,useState:function(){return rl(dt)},useDebugValue:ll,useDeferredValue:function(e){var n=en();return pe===null?n.memoizedState=e:za(n,pe.memoizedState,e)},useTransition:function(){var e=rl(dt)[0],n=en().memoizedState;return[e,n]},useMutableSource:ga,useSyncExternalStore:va,useId:Ka,unstable_isNewReconciler:!1};function sn(e,n){if(e&&e.defaultProps){n=y({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ol(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:y({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Cr={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Fe(),i=Qn(e),l=Mn(r,i);l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,i),n!==null&&(dn(n,e,i,r),lr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Fe(),i=Qn(e),l=Mn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,i),n!==null&&(dn(n,e,i,r),lr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Fe(),r=Qn(e),i=Mn(t,r);i.tag=2,n!=null&&(i.callback=n),n=kn(e,i,r),n!==null&&(dn(n,e,r,t),lr(n,e,r))}};function Za(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Z0(t,r)||!Z0(i,l):!0}function ba(e,n,t){var r=!1,i=xn,l=n.contextType;return typeof l=="object"&&l!==null?l=be(l):(i=we(n)?Zn:he.current,r=n.contextTypes,l=(r=r!=null)?T0(e,i):xn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Cr,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function es(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Cr.enqueueReplaceState(n,n.state,null)}function al(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},zi(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=be(l):(l=we(n)?Zn:he.current,i.context=T0(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(ol(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Cr.enqueueReplaceState(i,i.state,null),or(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function D0(e,n){try{var t="",r=n;do t+=ne(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function sl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ul(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var nd=typeof WeakMap=="function"?WeakMap:Map;function ns(e,n,t){t=Mn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){fr||(fr=!0,Pl=r),ul(e,n)},t}function ts(e,n,t){t=Mn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){ul(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){ul(e,n),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function rs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new nd;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Ed.bind(null,e,n,t),n.then(e,e))}function is(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ls(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Mn(-1,1),n.tag=2,kn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var td=K.ReactCurrentOwner,ke=!1;function He(e,n,t,r){n.child=e===null?Ma(n,null,t,r):M0(n,e.child,t,r)}function os(e,n,t,r,i){t=t.render;var l=n.ref;return L0(n,i),r=el(e,n,t,r,l,i),t=nl(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Gn(e,n,i)):(Ce&&t&&xi(n),n.flags|=1,He(e,n,r,i),n.child)}function as(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!gl(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,ss(e,n,l,r,i)):(e=Gr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Z0,t(o,r)&&e.ref===n.ref)return Gn(e,n,i)}return n.flags|=1,e=Wn(l,r),e.ref=n.ref,e.return=n,n.child=e}function ss(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Z0(l,r)&&e.ref===n.ref)if(ke=!1,n.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ke=!0);else return n.lanes=e.lanes,Gn(e,n,i)}return Sl(e,n,t,r,i)}function us(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(g0,$e),$e|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ue(g0,$e),$e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,ue(g0,$e),$e|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,ue(g0,$e),$e|=r;return He(e,n,i,t),n.child}function Ss(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Sl(e,n,t,r,i){var l=we(t)?Zn:he.current;return l=T0(n,l),L0(n,i),t=el(e,n,t,r,l,i),r=nl(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Gn(e,n,i)):(Ce&&r&&xi(n),n.flags|=1,He(e,n,t,i),n.child)}function ds(e,n,t,r,i){if(we(t)){var l=!0;Xt(n)}else l=!1;if(L0(n,i),n.stateNode===null)Er(e,n),ba(n,t,r),al(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var d=o.context,N=t.contextType;typeof N=="object"&&N!==null?N=be(N):(N=we(t)?Zn:he.current,N=T0(n,N));var p=t.getDerivedStateFromProps,G=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";G||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||d!==N)&&es(n,o,r,N),wn=!1;var T=n.memoizedState;o.state=T,or(n,r,o,i),d=n.memoizedState,u!==r||T!==d||Ye.current||wn?(typeof p=="function"&&(ol(n,t,p,r),d=n.memoizedState),(u=wn||Za(n,t,u,r,T,d,N))?(G||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=d),o.props=r,o.state=d,o.context=N,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,La(e,n),u=n.memoizedProps,N=n.type===n.elementType?u:sn(n.type,u),o.props=N,G=n.pendingProps,T=o.context,d=t.contextType,typeof d=="object"&&d!==null?d=be(d):(d=we(t)?Zn:he.current,d=T0(n,d));var g=t.getDerivedStateFromProps;(p=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==G||T!==d)&&es(n,o,r,d),wn=!1,T=n.memoizedState,o.state=T,or(n,r,o,i);var H=n.memoizedState;u!==G||T!==H||Ye.current||wn?(typeof g=="function"&&(ol(n,t,g,r),H=n.memoizedState),(N=wn||Za(n,t,N,r,T,H,d)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,H,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,H,d)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=H),o.props=r,o.state=H,o.context=d,r=N):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),r=!1)}return dl(e,n,t,r,l,i)}function dl(e,n,t,r,i,l){Ss(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Ia(n,t,!1),Gn(e,n,l);r=n.stateNode,td.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=M0(n,e.child,null,l),n.child=M0(n,null,u,l)):He(e,n,u,l),n.memoizedState=r.state,i&&Ia(n,t,!0),n.child}function As(e){var n=e.stateNode;n.pendingContext?ca(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ca(e,n.context,!1),Ki(e,n.containerInfo)}function Cs(e,n,t,r,i){return P0(),Vi(i),n.flags|=256,He(e,n,t,r),n.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function Cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function cs(e,n,t){var r=n.pendingProps,i=ce.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ue(ce,i&1),e===null)return ki(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Lr(o,r,0,null),e=s0(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Cl(t),n.memoizedState=Al,e):cl(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return rd(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var d={mode:"hidden",children:r.children};return(o&1)===0&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=d,n.deletions=null):(r=Wn(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=Wn(u,l):(l=s0(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?Cl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Al,r}return l=e.child,e=l.sibling,r=Wn(l,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function cl(e,n){return n=Lr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function cr(e,n,t,r){return r!==null&&Vi(r),M0(n,e.child,null,t),e=cl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rd(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=sl(Error(s(422))),cr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Lr({mode:"visible",children:r.children},i,0,null),l=s0(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,(n.mode&1)!==0&&M0(n,e.child,null,o),n.child.memoizedState=Cl(o),n.memoizedState=Al,l);if((n.mode&1)===0)return cr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(s(419)),r=sl(l,r,void 0),cr(e,n,o,r)}if(u=(o&e.childLanes)!==0,ke||u){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Pn(e,i),dn(r,e,i,-1))}return hl(),r=sl(Error(s(421))),cr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Id.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,Ke=Fn(i.nextSibling),ze=n,Ce=!0,an=null,e!==null&&(Xe[Ze++]=Rn,Xe[Ze++]=pn,Xe[Ze++]=bn,Rn=e.id,pn=e.overflow,bn=n),n=cl(n,r.children),n.flags|=4096,n)}function Es(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ji(e.return,n,t)}function El(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Is(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(He(e,n,r.children,t),r=ce.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Es(e,t,n);else if(e.tag===19)Es(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(ce,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ar(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),El(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ar(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}El(n,!0,t,null,l);break;case"together":El(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Er(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),i0|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=Wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function id(e,n,t){switch(n.tag){case 3:As(n),P0();break;case 5:ha(n);break;case 1:we(n.type)&&Xt(n);break;case 4:Ki(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ue(rr,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ue(ce,ce.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?cs(e,n,t):(ue(ce,ce.current&1),e=Gn(e,n,t),e!==null?e.sibling:null);ue(ce,ce.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Is(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ce,ce.current),r)break;return null;case 22:case 23:return n.lanes=0,us(e,n,t)}return Gn(e,n,t)}var Ns,Il,Os,ms;Ns=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Il=function(){},Os=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,t0(In.current);var l=null;switch(t){case"input":i=Jr(e,i),r=Jr(e,r),l=[];break;case"select":i=y({},i,{value:void 0}),r=y({},r,{value:void 0}),l=[];break;case"textarea":i=Kr(e,i),r=Kr(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kt)}qr(t,r);var o;t=null;for(N in i)if(!r.hasOwnProperty(N)&&i.hasOwnProperty(N)&&i[N]!=null)if(N==="style"){var u=i[N];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(O.hasOwnProperty(N)?l||(l=[]):(l=l||[]).push(N,null));for(N in r){var d=r[N];if(u=i!=null?i[N]:void 0,r.hasOwnProperty(N)&&d!==u&&(d!=null||u!=null))if(N==="style")if(u){for(o in u)!u.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in d)d.hasOwnProperty(o)&&u[o]!==d[o]&&(t||(t={}),t[o]=d[o])}else t||(l||(l=[]),l.push(N,t)),t=d;else N==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(l=l||[]).push(N,d)):N==="children"?typeof d!="string"&&typeof d!="number"||(l=l||[]).push(N,""+d):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(O.hasOwnProperty(N)?(d!=null&&N==="onScroll"&&Se("scroll",e),l||u===d||(l=[])):(l=l||[]).push(N,d))}t&&(l=l||[]).push("style",t);var N=l;(n.updateQueue=N)&&(n.flags|=4)}},ms=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ct(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function ld(e,n,t){var r=n.pendingProps;switch(Yi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(n),null;case 1:return we(n.type)&&qt(),ve(n),null;case 3:return r=n.stateNode,U0(),de(Ye),de(he),Xi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(nr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,an!==null&&(Ll(an),an=null))),Il(e,n),ve(n),null;case 5:$i(n);var i=t0(st.current);if(t=n.type,e!==null&&n.stateNode!=null)Os(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ve(n),null}if(e=t0(In.current),nr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[En]=n,r[rt]=l,e=(n.mode&1)!==0,t){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<et.length;i++)Se(et[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Zl(r,l),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Se("invalid",r);break;case"textarea":no(r,l),Se("invalid",r)}qr(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&zt(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&zt(r.textContent,u,e),i=["children",""+u]):O.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&Se("scroll",r)}switch(t){case"input":Pt(r),eo(r,l,!0);break;case"textarea":Pt(r),ro(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Kt)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=io(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[En]=n,e[rt]=r,Ns(e,n,!1,!1),n.stateNode=e;e:{switch(o=Xr(t,r),t){case"dialog":Se("cancel",e),Se("close",e),i=r;break;case"iframe":case"object":case"embed":Se("load",e),i=r;break;case"video":case"audio":for(i=0;i<et.length;i++)Se(et[i],e);i=r;break;case"source":Se("error",e),i=r;break;case"img":case"image":case"link":Se("error",e),Se("load",e),i=r;break;case"details":Se("toggle",e),i=r;break;case"input":Zl(e,r),i=Jr(e,r),Se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=y({},r,{value:void 0}),Se("invalid",e);break;case"textarea":no(e,r),i=Kr(e,r),Se("invalid",e);break;default:i=r}qr(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var d=u[l];l==="style"?ao(e,d):l==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&lo(e,d)):l==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&F0(e,d):typeof d=="number"&&F0(e,""+d):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(O.hasOwnProperty(l)?d!=null&&l==="onScroll"&&Se("scroll",e):d!=null&&Z(e,l,d,o))}switch(t){case"input":Pt(e),eo(e,r,!1);break;case"textarea":Pt(e),ro(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ie(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?u0(e,!!r.multiple,l,!1):r.defaultValue!=null&&u0(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Kt)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ve(n),null;case 6:if(e&&n.stateNode!=null)ms(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=t0(st.current),t0(In.current),nr(n)){if(r=n.stateNode,t=n.memoizedProps,r[En]=n,(l=r.nodeValue!==t)&&(e=ze,e!==null))switch(e.tag){case 3:zt(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zt(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[En]=n,n.stateNode=r}return ve(n),null;case 13:if(de(ce),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&Ke!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Ra(),P0(),n.flags|=98560,l=!1;else if(l=nr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[En]=n}else P0(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ve(n),l=!1}else an!==null&&(Ll(an),an=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ce.current&1)!==0?Pe===0&&(Pe=3):hl())),n.updateQueue!==null&&(n.flags|=4),ve(n),null);case 4:return U0(),Il(e,n),e===null&&nt(n.stateNode.containerInfo),ve(n),null;case 10:return Qi(n.type._context),ve(n),null;case 17:return we(n.type)&&qt(),ve(n),null;case 19:if(de(ce),l=n.memoizedState,l===null)return ve(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Ct(l,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=ar(e),o!==null){for(n.flags|=128,Ct(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ue(ce,ce.current&1|2),n.child}e=e.sibling}l.tail!==null&&me()>v0&&(n.flags|=128,r=!0,Ct(l,!1),n.lanes=4194304)}else{if(!r)if(e=ar(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ct(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Ce)return ve(n),null}else 2*me()-l.renderingStartTime>v0&&t!==1073741824&&(n.flags|=128,r=!0,Ct(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=me(),n.sibling=null,t=ce.current,ue(ce,r?t&1|2:t&1),n):(ve(n),null);case 22:case 23:return Dl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?($e&1073741824)!==0&&(ve(n),n.subtreeFlags&6&&(n.flags|=8192)):ve(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function od(e,n){switch(Yi(n),n.tag){case 1:return we(n.type)&&qt(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return U0(),de(Ye),de(he),Xi(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return $i(n),null;case 13:if(de(ce),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));P0()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return de(ce),null;case 4:return U0(),null;case 10:return Qi(n.type._context),null;case 22:case 23:return Dl(),null;case 24:return null;default:return null}}var Ir=!1,ye=!1,ad=typeof WeakSet=="function"?WeakSet:Set,v=null;function h0(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ne(e,n,r)}else t.current=null}function Nl(e,n,t){try{t()}catch(r){Ne(e,n,r)}}var fs=!1;function sd(e,n){if(Di=Bt,e=Zo(),Ti(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,d=-1,N=0,p=0,G=e,T=null;n:for(;;){for(var g;G!==t||i!==0&&G.nodeType!==3||(u=o+i),G!==l||r!==0&&G.nodeType!==3||(d=o+r),G.nodeType===3&&(o+=G.nodeValue.length),(g=G.firstChild)!==null;)T=G,G=g;for(;;){if(G===e)break n;if(T===t&&++N===i&&(u=o),T===l&&++p===r&&(d=o),(g=G.nextSibling)!==null)break;G=T,T=G.parentNode}G=g}t=u===-1||d===-1?null:{start:u,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(hi={focusedElem:e,selectionRange:t},Bt=!1,v=n;v!==null;)if(n=v,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,v=e;else for(;v!==null;){n=v;try{var H=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var F=H.memoizedProps,fe=H.memoizedState,E=n.stateNode,A=E.getSnapshotBeforeUpdate(n.elementType===n.type?F:sn(n.type,F),fe);E.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var I=n.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(L){Ne(n,n.return,L)}if(e=n.sibling,e!==null){e.return=n.return,v=e;break}v=n.return}return H=fs,fs=!1,H}function ct(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Nl(n,t,l)}i=i.next}while(i!==r)}}function Nr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ol(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ts(e){var n=e.alternate;n!==null&&(e.alternate=null,Ts(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[En],delete n[rt],delete n[Hi],delete n[QS],delete n[JS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rs(e){return e.tag===5||e.tag===3||e.tag===4}function ps(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ml(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Kt));else if(r!==4&&(e=e.child,e!==null))for(ml(e,n,t),e=e.sibling;e!==null;)ml(e,n,t),e=e.sibling}function fl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fl(e,n,t),e=e.sibling;e!==null;)fl(e,n,t),e=e.sibling}var Ue=null,un=!1;function Vn(e,n,t){for(t=t.child;t!==null;)Ps(e,n,t),t=t.sibling}function Ps(e,n,t){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(ht,t)}catch{}switch(t.tag){case 5:ye||h0(t,n);case 6:var r=Ue,i=un;Ue=null,Vn(e,n,t),Ue=r,un=i,Ue!==null&&(un?(e=Ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ue.removeChild(t.stateNode));break;case 18:Ue!==null&&(un?(e=Ue,t=t.stateNode,e.nodeType===8?yi(e.parentNode,t):e.nodeType===1&&yi(e,t),W0(e)):yi(Ue,t.stateNode));break;case 4:r=Ue,i=un,Ue=t.stateNode.containerInfo,un=!0,Vn(e,n,t),Ue=r,un=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&Nl(t,n,o),i=i.next}while(i!==r)}Vn(e,n,t);break;case 1:if(!ye&&(h0(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){Ne(t,n,u)}Vn(e,n,t);break;case 21:Vn(e,n,t);break;case 22:t.mode&1?(ye=(r=ye)||t.memoizedState!==null,Vn(e,n,t),ye=r):Vn(e,n,t);break;default:Vn(e,n,t)}}function Ms(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ad),n.forEach(function(r){var i=Nd.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Sn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:Ue=u.stateNode,un=!1;break e;case 3:Ue=u.stateNode.containerInfo,un=!0;break e;case 4:Ue=u.stateNode.containerInfo,un=!0;break e}u=u.return}if(Ue===null)throw Error(s(160));Ps(l,o,i),Ue=null,un=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(N){Ne(i,n,N)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gs(n,e),n=n.sibling}function Gs(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sn(n,e),On(e),r&4){try{ct(3,e,e.return),Nr(3,e)}catch(F){Ne(e,e.return,F)}try{ct(5,e,e.return)}catch(F){Ne(e,e.return,F)}}break;case 1:Sn(n,e),On(e),r&512&&t!==null&&h0(t,t.return);break;case 5:if(Sn(n,e),On(e),r&512&&t!==null&&h0(t,t.return),e.flags&32){var i=e.stateNode;try{F0(i,"")}catch(F){Ne(e,e.return,F)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&bl(i,l),Xr(u,o);var N=Xr(u,l);for(o=0;o<d.length;o+=2){var p=d[o],G=d[o+1];p==="style"?ao(i,G):p==="dangerouslySetInnerHTML"?lo(i,G):p==="children"?F0(i,G):Z(i,p,G,N)}switch(u){case"input":Wr(i,l);break;case"textarea":to(i,l);break;case"select":var T=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var g=l.value;g!=null?u0(i,!!l.multiple,g,!1):T!==!!l.multiple&&(l.defaultValue!=null?u0(i,!!l.multiple,l.defaultValue,!0):u0(i,!!l.multiple,l.multiple?[]:"",!1))}i[rt]=l}catch(F){Ne(e,e.return,F)}}break;case 6:if(Sn(n,e),On(e),r&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(F){Ne(e,e.return,F)}}break;case 3:if(Sn(n,e),On(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{W0(n.containerInfo)}catch(F){Ne(e,e.return,F)}break;case 4:Sn(n,e),On(e);break;case 13:Sn(n,e),On(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(pl=me())),r&4&&Ms(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(ye=(N=ye)||p,Sn(n,e),ye=N):Sn(n,e),On(e),r&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!p&&(e.mode&1)!==0)for(v=e,p=e.child;p!==null;){for(G=v=p;v!==null;){switch(T=v,g=T.child,T.tag){case 0:case 11:case 14:case 15:ct(4,T,T.return);break;case 1:h0(T,T.return);var H=T.stateNode;if(typeof H.componentWillUnmount=="function"){r=T,t=T.return;try{n=r,H.props=n.memoizedProps,H.state=n.memoizedState,H.componentWillUnmount()}catch(F){Ne(r,t,F)}}break;case 5:h0(T,T.return);break;case 22:if(T.memoizedState!==null){Ds(G);continue}}g!==null?(g.return=T,v=g):Ds(G)}p=p.sibling}e:for(p=null,G=e;;){if(G.tag===5){if(p===null){p=G;try{i=G.stateNode,N?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=G.stateNode,d=G.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=oo("display",o))}catch(F){Ne(e,e.return,F)}}}else if(G.tag===6){if(p===null)try{G.stateNode.nodeValue=N?"":G.memoizedProps}catch(F){Ne(e,e.return,F)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===e)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===e)break e;for(;G.sibling===null;){if(G.return===null||G.return===e)break e;p===G&&(p=null),G=G.return}p===G&&(p=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Sn(n,e),On(e),r&4&&Ms(e);break;case 21:break;default:Sn(n,e),On(e)}}function On(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Rs(t)){var r=t;break e}t=t.return}throw Error(s(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(F0(i,""),r.flags&=-33);var l=ps(e);fl(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=ps(e);ml(e,u,o);break;default:throw Error(s(161))}}catch(d){Ne(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ud(e,n,t){v=e,Ls(e)}function Ls(e,n,t){for(var r=(e.mode&1)!==0;v!==null;){var i=v,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ir;if(!o){var u=i.alternate,d=u!==null&&u.memoizedState!==null||ye;u=Ir;var N=ye;if(Ir=o,(ye=d)&&!N)for(v=i;v!==null;)o=v,d=o.child,o.tag===22&&o.memoizedState!==null?hs(i):d!==null?(d.return=o,v=d):hs(i);for(;l!==null;)v=l,Ls(l),l=l.sibling;v=i,Ir=u,ye=N}Us(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,v=l):Us(e)}}function Us(e){for(;v!==null;){var n=v;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:ye||Nr(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ye)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Da(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Da(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var N=n.alternate;if(N!==null){var p=N.memoizedState;if(p!==null){var G=p.dehydrated;G!==null&&W0(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}ye||n.flags&512&&Ol(n)}catch(T){Ne(n,n.return,T)}}if(n===e){v=null;break}if(t=n.sibling,t!==null){t.return=n.return,v=t;break}v=n.return}}function Ds(e){for(;v!==null;){var n=v;if(n===e){v=null;break}var t=n.sibling;if(t!==null){t.return=n.return,v=t;break}v=n.return}}function hs(e){for(;v!==null;){var n=v;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Nr(4,n)}catch(d){Ne(n,t,d)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(d){Ne(n,i,d)}}var l=n.return;try{Ol(n)}catch(d){Ne(n,l,d)}break;case 5:var o=n.return;try{Ol(n)}catch(d){Ne(n,o,d)}}}catch(d){Ne(n,n.return,d)}if(n===e){v=null;break}var u=n.sibling;if(u!==null){u.return=n.return,v=u;break}v=n.return}}var Sd=Math.ceil,Or=K.ReactCurrentDispatcher,Tl=K.ReactCurrentOwner,nn=K.ReactCurrentBatchConfig,ee=0,Ge=null,Te=null,De=0,$e=0,g0=Bn(0),Pe=0,Et=null,i0=0,mr=0,Rl=0,It=null,Ve=null,pl=0,v0=1/0,Ln=null,fr=!1,Pl=null,jn=null,Tr=!1,_n=null,Rr=0,Nt=0,Ml=null,pr=-1,Pr=0;function Fe(){return(ee&6)!==0?me():pr!==-1?pr:pr=me()}function Qn(e){return(e.mode&1)===0?1:(ee&2)!==0&&De!==0?De&-De:zS.transition!==null?(Pr===0&&(Pr=po()),Pr):(e=le,e!==0||(e=window.event,e=e===void 0?16:vo(e.type)),e)}function dn(e,n,t,r){if(50<Nt)throw Nt=0,Ml=null,Error(s(185));V0(e,t,r),((ee&2)===0||e!==Ge)&&(e===Ge&&((ee&2)===0&&(mr|=t),Pe===4&&Jn(e,De)),je(e,r),t===1&&ee===0&&(n.mode&1)===0&&(v0=me()+500,Zt&&Yn()))}function je(e,n){var t=e.callbackNode;zu(e,n);var r=yt(e,e===Ge?De:0);if(r===0)t!==null&&fo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&fo(t),n===1)e.tag===0?WS(vs.bind(null,e)):Na(vs.bind(null,e)),jS(function(){(ee&6)===0&&Yn()}),t=null;else{switch(Po(r)){case 1:t=ii;break;case 4:t=To;break;case 16:t=Dt;break;case 536870912:t=Ro;break;default:t=Dt}t=ks(t,gs.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function gs(e,n){if(pr=-1,Pr=0,(ee&6)!==0)throw Error(s(327));var t=e.callbackNode;if(y0()&&e.callbackNode!==t)return null;var r=yt(e,e===Ge?De:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Mr(e,r);else{n=r;var i=ee;ee|=2;var l=Hs();(Ge!==e||De!==n)&&(Ln=null,v0=me()+500,o0(e,n));do try{Cd();break}catch(u){ys(e,u)}while(!0);_i(),Or.current=l,ee=i,Te!==null?n=0:(Ge=null,De=0,n=Pe)}if(n!==0){if(n===2&&(i=li(e),i!==0&&(r=i,n=Gl(e,i))),n===1)throw t=Et,o0(e,0),Jn(e,r),je(e,me()),t;if(n===6)Jn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!dd(i)&&(n=Mr(e,r),n===2&&(l=li(e),l!==0&&(r=l,n=Gl(e,l))),n===1))throw t=Et,o0(e,0),Jn(e,r),je(e,me()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(s(345));case 2:a0(e,Ve,Ln);break;case 3:if(Jn(e,r),(r&130023424)===r&&(n=pl+500-me(),10<n)){if(yt(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vi(a0.bind(null,e,Ve,Ln),n);break}a0(e,Ve,Ln);break;case 4:if(Jn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-ln(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sd(r/1960))-r,10<r){e.timeoutHandle=vi(a0.bind(null,e,Ve,Ln),r);break}a0(e,Ve,Ln);break;case 5:a0(e,Ve,Ln);break;default:throw Error(s(329))}}}return je(e,me()),e.callbackNode===t?gs.bind(null,e):null}function Gl(e,n){var t=It;return e.current.memoizedState.isDehydrated&&(o0(e,n).flags|=256),e=Mr(e,n),e!==2&&(n=Ve,Ve=t,n!==null&&Ll(n)),e}function Ll(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function dd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!on(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Jn(e,n){for(n&=~Rl,n&=~mr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-ln(n),r=1<<t;e[t]=-1,n&=~r}}function vs(e){if((ee&6)!==0)throw Error(s(327));y0();var n=yt(e,0);if((n&1)===0)return je(e,me()),null;var t=Mr(e,n);if(e.tag!==0&&t===2){var r=li(e);r!==0&&(n=r,t=Gl(e,r))}if(t===1)throw t=Et,o0(e,0),Jn(e,n),je(e,me()),t;if(t===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,a0(e,Ve,Ln),je(e,me()),null}function Ul(e,n){var t=ee;ee|=1;try{return e(n)}finally{ee=t,ee===0&&(v0=me()+500,Zt&&Yn())}}function l0(e){_n!==null&&_n.tag===0&&(ee&6)===0&&y0();var n=ee;ee|=1;var t=nn.transition,r=le;try{if(nn.transition=null,le=1,e)return e()}finally{le=r,nn.transition=t,ee=n,(ee&6)===0&&Yn()}}function Dl(){$e=g0.current,de(g0)}function o0(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,VS(t)),Te!==null)for(t=Te.return;t!==null;){var r=t;switch(Yi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qt();break;case 3:U0(),de(Ye),de(he),Xi();break;case 5:$i(r);break;case 4:U0();break;case 13:de(ce);break;case 19:de(ce);break;case 10:Qi(r.type._context);break;case 22:case 23:Dl()}t=t.return}if(Ge=e,Te=e=Wn(e.current,null),De=$e=n,Pe=0,Et=null,Rl=mr=i0=0,Ve=It=null,n0!==null){for(n=0;n<n0.length;n++)if(t=n0[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}n0=null}return e}function ys(e,n){do{var t=Te;try{if(_i(),sr.current=Ar,ur){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ur=!1}if(r0=0,Me=pe=Ee=null,ut=!1,St=0,Tl.current=null,t===null||t.return===null){Pe=1,Et=n,Te=null;break}e:{var l=e,o=t.return,u=t,d=n;if(n=De,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var N=d,p=u,G=p.tag;if((p.mode&1)===0&&(G===0||G===11||G===15)){var T=p.alternate;T?(p.updateQueue=T.updateQueue,p.memoizedState=T.memoizedState,p.lanes=T.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=is(o);if(g!==null){g.flags&=-257,ls(g,o,u,l,n),g.mode&1&&rs(l,N,n),n=g,d=N;var H=n.updateQueue;if(H===null){var F=new Set;F.add(d),n.updateQueue=F}else H.add(d);break e}else{if((n&1)===0){rs(l,N,n),hl();break e}d=Error(s(426))}}else if(Ce&&u.mode&1){var fe=is(o);if(fe!==null){(fe.flags&65536)===0&&(fe.flags|=256),ls(fe,o,u,l,n),Vi(D0(d,u));break e}}l=d=D0(d,u),Pe!==4&&(Pe=2),It===null?It=[l]:It.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var E=ns(l,d,n);Ua(l,E);break e;case 1:u=d;var A=l.type,I=l.stateNode;if((l.flags&128)===0&&(typeof A.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(jn===null||!jn.has(I)))){l.flags|=65536,n&=-n,l.lanes|=n;var L=ts(l,u,n);Ua(l,L);break e}}l=l.return}while(l!==null)}Bs(t)}catch(x){n=x,Te===t&&t!==null&&(Te=t=t.return);continue}break}while(!0)}function Hs(){var e=Or.current;return Or.current=Ar,e===null?Ar:e}function hl(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Ge===null||(i0&268435455)===0&&(mr&268435455)===0||Jn(Ge,De)}function Mr(e,n){var t=ee;ee|=2;var r=Hs();(Ge!==e||De!==n)&&(Ln=null,o0(e,n));do try{Ad();break}catch(i){ys(e,i)}while(!0);if(_i(),ee=t,Or.current=r,Te!==null)throw Error(s(261));return Ge=null,De=0,Pe}function Ad(){for(;Te!==null;)Fs(Te)}function Cd(){for(;Te!==null&&!Yu();)Fs(Te)}function Fs(e){var n=ws(e.alternate,e,$e);e.memoizedProps=e.pendingProps,n===null?Bs(e):Te=n,Tl.current=null}function Bs(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=ld(t,n,$e),t!==null){Te=t;return}}else{if(t=od(t,n),t!==null){t.flags&=32767,Te=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Te=null;return}}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);Pe===0&&(Pe=5)}function a0(e,n,t){var r=le,i=nn.transition;try{nn.transition=null,le=1,cd(e,n,t,r)}finally{nn.transition=i,le=r}return null}function cd(e,n,t,r){do y0();while(_n!==null);if((ee&6)!==0)throw Error(s(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Ku(e,l),e===Ge&&(Te=Ge=null,De=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Tr||(Tr=!0,ks(Dt,function(){return y0(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=nn.transition,nn.transition=null;var o=le;le=1;var u=ee;ee|=4,Tl.current=null,sd(e,t),Gs(t,e),HS(hi),Bt=!!Di,hi=Di=null,e.current=t,ud(t),wu(),ee=u,le=o,nn.transition=l}else e.current=t;if(Tr&&(Tr=!1,_n=e,Rr=i),l=e.pendingLanes,l===0&&(jn=null),ju(t.stateNode),je(e,me()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(fr)throw fr=!1,e=Pl,Pl=null,e;return(Rr&1)!==0&&e.tag!==0&&y0(),l=e.pendingLanes,(l&1)!==0?e===Ml?Nt++:(Nt=0,Ml=e):Nt=0,Yn(),null}function y0(){if(_n!==null){var e=Po(Rr),n=nn.transition,t=le;try{if(nn.transition=null,le=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,Rr=0,(ee&6)!==0)throw Error(s(331));var i=ee;for(ee|=4,v=e.current;v!==null;){var l=v,o=l.child;if((v.flags&16)!==0){var u=l.deletions;if(u!==null){for(var d=0;d<u.length;d++){var N=u[d];for(v=N;v!==null;){var p=v;switch(p.tag){case 0:case 11:case 15:ct(8,p,l)}var G=p.child;if(G!==null)G.return=p,v=G;else for(;v!==null;){p=v;var T=p.sibling,g=p.return;if(Ts(p),p===N){v=null;break}if(T!==null){T.return=g,v=T;break}v=g}}}var H=l.alternate;if(H!==null){var F=H.child;if(F!==null){H.child=null;do{var fe=F.sibling;F.sibling=null,F=fe}while(F!==null)}}v=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,v=o;else e:for(;v!==null;){if(l=v,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:ct(9,l,l.return)}var E=l.sibling;if(E!==null){E.return=l.return,v=E;break e}v=l.return}}var A=e.current;for(v=A;v!==null;){o=v;var I=o.child;if((o.subtreeFlags&2064)!==0&&I!==null)I.return=o,v=I;else e:for(o=A;v!==null;){if(u=v,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Nr(9,u)}}catch(x){Ne(u,u.return,x)}if(u===o){v=null;break e}var L=u.sibling;if(L!==null){L.return=u.return,v=L;break e}v=u.return}}if(ee=i,Yn(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(ht,e)}catch{}r=!0}return r}finally{le=t,nn.transition=n}}return!1}function xs(e,n,t){n=D0(t,n),n=ns(e,n,1),e=kn(e,n,1),n=Fe(),e!==null&&(V0(e,1,n),je(e,n))}function Ne(e,n,t){if(e.tag===3)xs(e,e,t);else for(;n!==null;){if(n.tag===3){xs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=D0(t,e),e=ts(n,e,1),n=kn(n,e,1),e=Fe(),n!==null&&(V0(n,1,e),je(n,e));break}}n=n.return}}function Ed(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Fe(),e.pingedLanes|=e.suspendedLanes&t,Ge===e&&(De&t)===t&&(Pe===4||Pe===3&&(De&130023424)===De&&500>me()-pl?o0(e,0):Rl|=t),je(e,n)}function Ys(e,n){n===0&&((e.mode&1)===0?n=1:(n=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var t=Fe();e=Pn(e,n),e!==null&&(V0(e,n,t),je(e,t))}function Id(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ys(e,t)}function Nd(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(n),Ys(e,t)}var ws;ws=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ye.current)ke=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return ke=!1,id(e,n,t);ke=(e.flags&131072)!==0}else ke=!1,Ce&&(n.flags&1048576)!==0&&Oa(n,er,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Er(e,n),e=n.pendingProps;var i=T0(n,he.current);L0(n,t),i=el(null,n,r,e,i,t);var l=nl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,we(r)?(l=!0,Xt(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zi(n),i.updater=Cr,n.stateNode=i,i._reactInternals=n,al(n,r,e,t),n=dl(null,n,r,!0,l,t)):(n.tag=0,Ce&&l&&xi(n),He(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Er(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=md(r),e=sn(r,e),i){case 0:n=Sl(null,n,r,e,t);break e;case 1:n=ds(null,n,r,e,t);break e;case 11:n=os(null,n,r,e,t);break e;case 14:n=as(null,n,r,sn(r.type,e),t);break e}throw Error(s(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),Sl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),ds(e,n,r,i,t);case 3:e:{if(As(n),e===null)throw Error(s(387));r=n.pendingProps,l=n.memoizedState,i=l.element,La(e,n),or(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=D0(Error(s(423)),n),n=Cs(e,n,r,t,i);break e}else if(r!==i){i=D0(Error(s(424)),n),n=Cs(e,n,r,t,i);break e}else for(Ke=Fn(n.stateNode.containerInfo.firstChild),ze=n,Ce=!0,an=null,t=Ma(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(P0(),r===i){n=Gn(e,n,t);break e}He(e,n,r,t)}n=n.child}return n;case 5:return ha(n),e===null&&ki(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,gi(r,i)?o=null:l!==null&&gi(r,l)&&(n.flags|=32),Ss(e,n),He(e,n,o,t),n.child;case 6:return e===null&&ki(n),null;case 13:return cs(e,n,t);case 4:return Ki(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=M0(n,null,r,t):He(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),os(e,n,r,i,t);case 7:return He(e,n,n.pendingProps,t),n.child;case 8:return He(e,n,n.pendingProps.children,t),n.child;case 12:return He(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,ue(rr,r._currentValue),r._currentValue=o,l!==null)if(on(l.value,o)){if(l.children===i.children&&!Ye.current){n=Gn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(l.tag===1){d=Mn(-1,t&-t),d.tag=2;var N=l.updateQueue;if(N!==null){N=N.shared;var p=N.pending;p===null?d.next=d:(d.next=p.next,p.next=d),N.pending=d}}l.lanes|=t,d=l.alternate,d!==null&&(d.lanes|=t),Ji(l.return,t,n),u.lanes|=t;break}d=d.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(s(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Ji(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}He(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,L0(n,t),i=be(i),r=r(i),n.flags|=1,He(e,n,r,t),n.child;case 14:return r=n.type,i=sn(r,n.pendingProps),i=sn(r.type,i),as(e,n,r,i,t);case 15:return ss(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),Er(e,n),n.tag=1,we(r)?(e=!0,Xt(n)):e=!1,L0(n,t),ba(n,r,i),al(n,r,i,t),dl(null,n,r,!0,e,t);case 19:return Is(e,n,t);case 22:return us(e,n,t)}throw Error(s(156,n.tag))};function ks(e,n){return mo(e,n)}function Od(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,n,t,r){return new Od(e,n,t,r)}function gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function md(e){if(typeof e=="function")return gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===An)return 11;if(e===Cn)return 14}return 2}function Wn(e,n){var t=e.alternate;return t===null?(t=tn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Gr(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")gl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Be:return s0(t.children,i,l,n);case qe:o=8,i|=8;break;case Un:return e=tn(12,t,n,i|2),e.elementType=Un,e.lanes=l,e;case Qe:return e=tn(13,t,n,i),e.elementType=Qe,e.lanes=l,e;case rn:return e=tn(19,t,n,i),e.elementType=rn,e.lanes=l,e;case Ie:return Lr(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mn:o=10;break e;case $n:o=9;break e;case An:o=11;break e;case Cn:o=14;break e;case xe:o=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=tn(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function s0(e,n,t,r){return e=tn(7,e,r,n),e.lanes=t,e}function Lr(e,n,t,r){return e=tn(22,e,r,n),e.elementType=Ie,e.lanes=t,e.stateNode={isHidden:!1},e}function vl(e,n,t){return e=tn(6,e,null,n),e.lanes=t,e}function yl(e,n,t){return n=tn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function fd(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hl(e,n,t,r,i,l,o,u,d){return e=new fd(e,n,t,u,d),n===1?(n=1,l===!0&&(n|=8)):n=0,l=tn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zi(l),e}function Td(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Vs(e){if(!e)return xn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(s(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(we(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(e.tag===1){var t=e.type;if(we(t))return Ea(e,t,n)}return n}function js(e,n,t,r,i,l,o,u,d){return e=Hl(t,r,!0,e,i,l,o,u,d),e.context=Vs(null),t=e.current,r=Fe(),i=Qn(t),l=Mn(r,i),l.callback=n??null,kn(t,l,i),e.current.lanes=i,V0(e,i,r),je(e,r),e}function Ur(e,n,t,r){var i=n.current,l=Fe(),o=Qn(i);return t=Vs(t),n.context===null?n.context=t:n.pendingContext=t,n=Mn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=kn(i,n,o),e!==null&&(dn(e,i,o,l),lr(e,i,o)),o}function Dr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _s(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Fl(e,n){_s(e,n),(e=e.alternate)&&_s(e,n)}function Rd(){return null}var Qs=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bl(e){this._internalRoot=e}hr.prototype.render=Bl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));Ur(e,n,null,null)},hr.prototype.unmount=Bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;l0(function(){Ur(null,e,null,null)}),n[fn]=null}};function hr(e){this._internalRoot=e}hr.prototype.unstable_scheduleHydration=function(e){if(e){var n=Lo();e={blockedOn:null,target:e,priority:n};for(var t=0;t<vn.length&&n!==0&&n<vn[t].priority;t++);vn.splice(t,0,e),t===0&&ho(e)}};function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Js(){}function pd(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var N=Dr(o);l.call(N)}}var o=js(n,r,e,0,null,!1,!1,"",Js);return e._reactRootContainer=o,e[fn]=o.current,nt(e.nodeType===8?e.parentNode:e),l0(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var N=Dr(d);u.call(N)}}var d=Hl(e,0,!1,null,null,!1,!1,"",Js);return e._reactRootContainer=d,e[fn]=d.current,nt(e.nodeType===8?e.parentNode:e),l0(function(){Ur(n,d,t,r)}),d}function vr(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var d=Dr(o);u.call(d)}}Ur(n,o,e,i)}else o=pd(t,n,e,i,r);return Dr(o)}Mo=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=k0(n.pendingLanes);t!==0&&(ai(n,t|1),je(n,me()),(ee&6)===0&&(v0=me()+500,Yn()))}break;case 13:l0(function(){var r=Pn(e,1);if(r!==null){var i=Fe();dn(r,e,1,i)}}),Fl(e,1)}},si=function(e){if(e.tag===13){var n=Pn(e,134217728);if(n!==null){var t=Fe();dn(n,e,134217728,t)}Fl(e,134217728)}},Go=function(e){if(e.tag===13){var n=Qn(e),t=Pn(e,n);if(t!==null){var r=Fe();dn(t,e,n,r)}Fl(e,n)}},Lo=function(){return le},Uo=function(e,n){var t=le;try{return le=e,n()}finally{le=t}},ei=function(e,n,t){switch(n){case"input":if(Wr(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=$t(r);if(!i)throw Error(s(90));Xl(r),Wr(r,i)}}}break;case"textarea":to(e,t);break;case"select":n=t.value,n!=null&&u0(e,!!t.multiple,n,!1)}},Ao=Ul,Co=l0;var Pd={usingClientEntryPoint:!1,Events:[it,m0,$t,uo,So,Ul]},Ot={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Md={bundleType:Ot.bundleType,version:Ot.version,rendererPackageName:Ot.rendererPackageName,rendererConfig:Ot.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=No(e),e===null?null:e.stateNode},findFiberByHostInstance:Ot.findFiberByHostInstance||Rd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{ht=yr.inject(Md),cn=yr}catch{}}return _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pd,_e.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xl(n))throw Error(s(200));return Td(e,n,null,t)},_e.createRoot=function(e,n){if(!xl(e))throw Error(s(299));var t=!1,r="",i=Qs;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Hl(e,1,!1,null,null,t,!1,r,i),e[fn]=n.current,nt(e.nodeType===8?e.parentNode:e),new Bl(n)},_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=No(n),e=e===null?null:e.stateNode,e},_e.flushSync=function(e){return l0(e)},_e.hydrate=function(e,n,t){if(!gr(n))throw Error(s(200));return vr(null,e,n,!0,t)},_e.hydrateRoot=function(e,n,t){if(!xl(e))throw Error(s(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Qs;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=js(n,null,e,1,t??null,i,!1,l,o),e[fn]=n.current,nt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new hr(n)},_e.render=function(e,n,t){if(!gr(n))throw Error(s(200));return vr(null,e,n,!1,t)},_e.unmountComponentAtNode=function(e){if(!gr(e))throw Error(s(40));return e._reactRootContainer?(l0(function(){vr(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1},_e.unstable_batchedUpdates=Ul,_e.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!gr(t))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return vr(e,n,t,!1,r)},_e.version="18.3.1-next-f1338f8080-20240426",_e}var bs;function Fd(){if(bs)return Vl.exports;bs=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(S){console.error(S)}}return a(),Vl.exports=Hd(),Vl.exports}var eu;function Bd(){if(eu)return Hr;eu=1;var a=Fd();return Hr.createRoot=a.createRoot,Hr.hydrateRoot=a.hydrateRoot,Hr}var xd=Bd();const Yd="modulepreload",wd=function(a){return"/UMDTerpTracker/"+a},nu={},pt=function(S,s,m){let O=Promise.resolve();if(s&&s.length>0){let M=function(U){return Promise.all(U.map(j=>Promise.resolve(j).then(V=>({status:"fulfilled",value:V}),V=>({status:"rejected",reason:V}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));O=M(s.map(U=>{if(U=wd(U),U in nu)return;nu[U]=!0;const j=U.endsWith(".css"),V=j?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${U}"]${V}`))return;const J=document.createElement("link");if(J.rel=j?"stylesheet":Yd,j||(J.as="script"),J.crossOrigin="",J.href=U,h&&J.setAttribute("nonce",h),document.head.appendChild(J),j)return new Promise((_,Q)=>{J.addEventListener("load",_),J.addEventListener("error",()=>Q(new Error(`Unable to preload CSS for ${U}`)))})}))}function P(M){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=M,window.dispatchEvent(f),!f.defaultPrevented)throw M}return O.then(M=>{for(const f of M||[])f.status==="rejected"&&P(f.reason);return S().catch(P)})},kd=new Set(["W","I","NG","AU"]);function Vd(a){return a.repeatExcluded?0:a.creditsEarned!==void 0?a.creditsEarned:kd.has(a.grade)||a.gradePoints===0?0:a.credits}function wr(a){let S=0,s=0,m=0;for(const O of a)m+=Vd(O),!(!O.countsTowardGpa||O.gradePoints===null)&&(S+=O.credits,s+=O.credits*O.gradePoints);return{gpaCredits:S,qualityPoints:s,earnedCredits:m,gpa:S>0?s/S:null}}function su(a){const S=a.terms.flatMap(O=>O.courses),s=wr(S),m=wr(a.nonGpaCredits);return{...s,earnedCredits:s.earnedCredits+m.earnedCredits}}function sC(a){const S=[];return a.terms.map(s=>(S.push(...s.courses),{term:s,termGpa:wr(s.courses).gpa,cumulativeGpa:wr(S).gpa}))}const zl={"A+":4,A:4,"A-":3.7,"B+":3.3,B:3,"B-":2.7,"C+":2.3,C:2,"C-":1.7,"D+":1.3,D:1,"D-":.7,F:0,XF:0},jd=["P","S","U","W","I","AU","NC","NG"],_d=[...Object.keys(zl),...jd],kr=["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","D-"];function Qd(a){return _d.includes(a)}function uu(a){return a in zl}function Jd(a){return uu(a)?zl[a]:null}function Wd(a){return uu(a)}function Su(a){const S=a.trim().toUpperCase().replace(/\s+/g,"");return S&&Qd(S)?S:null}function tu(a){const S=kr.indexOf(a);return S===-1?kr.length:S}const zd=[...kr,"F"];function Kd(a){return zd.reduce((S,s)=>S+(a.counts[s]??0),0)}function ru(a,S){const s=Kd(a);if(s===0)return null;const m=tu(S);let O=0;for(const P of kr){if(tu(P)>m)break;O+=a.counts[P]??0}return O/s}class uC{constructor(S){Yl(this,"byCourse");Yl(this,"fallback");this.byCourse=new Map(S.map(s=>[s.courseId.toUpperCase(),s])),this.fallback=S.length>0?$d(S):null}get(S){return this.byCourse.get(S.toUpperCase())}chanceOfAtLeast(S,s){const m=this.get(S);if(m){const O=ru(m,s);if(O!==null)return{probability:O,estimated:!1}}return this.fallback?{probability:ru(this.fallback,s),estimated:!0}:{probability:null,estimated:!0}}}function $d(a){const S={};let s=0,m=0;for(const O of a){m+=O.sections,s+=O.total;for(const[P,M]of Object.entries(O.counts))S[P]=(S[P]??0)+(M??0)}return{courseId:"*",counts:S,total:s,sections:m}}function qd(a){const S=new Map;for(const s of a.terms)for(const m of s.courses){if(!m.courseId||!m.countsTowardGpa&&!m.repeatExcluded)continue;const O=S.get(m.courseId)??[];O.push({termId:s.id,grade:m.grade,credits:m.credits}),S.set(m.courseId,O)}return[...S.entries()].filter(([,s])=>s.length>1).map(([s,m])=>({courseId:s,attempts:m}))}function Xd(a){const S=new Set,s=[...a.terms].reverse().map(m=>({...m,courses:[...m.courses].reverse().map(O=>!O.countsTowardGpa||!O.courseId?O:S.has(O.courseId)?{...O,countsTowardGpa:!1,repeatExcluded:!0}:(S.add(O.courseId),O)).reverse()})).reverse();return{...a,terms:s}}const Zd=.005,bd=.5;function Rt(a){const S=su(a),s=S.gpa,m=a.statedCumulativeGpa,O=s!==null&&m!==null?s-m:null;return{computedGpa:s,statedGpa:m,delta:O,computedCredits:S.earnedCredits,statedCredits:a.statedCumulativeCredits,ok:O!==null&&Math.abs(O)<=Zd}}function eA(a){const S=Xd(a);return Rt(S).ok?S:null}function nA(a){const S=Rt(a),s=qd(a),m=S.delta!==null&&!S.ok&&s.length>0?eA(a):null,O=m??a,P=m?Rt(O):S,M=[...O.warnings],f=s.map(U=>U.courseId).join(", "),h=s.map(U=>`${U.courseId}×${U.attempts.length}`).join(" ");return m?M.push({code:"repeated_course",message:`${f} appears on your transcript more than once. UMD counts only your latest attempt toward your GPA and awards the credit once, and TerpTracker has done the same here — which is why the numbers below agree with the ${P.statedGpa.toFixed(3)} your transcript prints.`,detail:h}):P.delta!==null&&!P.ok&&(M.push({code:"gpa_mismatch",message:`We read your GPA as ${P.computedGpa.toFixed(3)}, but your transcript says ${P.statedGpa.toFixed(3)}. Something did not parse correctly, so treat the numbers below as approximate.`,detail:`delta ${P.delta.toFixed(3)}`}),s.length>0&&M.push({code:"repeated_course",message:`${f} appears on your transcript more than once, which may be why the numbers above disagree — TerpTracker counts every attempt, and UMD's repeat policy does not. It does not explain the whole difference, so something else is off as well.`,detail:h})),P.statedCredits!==null&&Math.abs(P.computedCredits-P.statedCredits)>bd&&M.push({code:"gpa_mismatch",message:`We counted ${P.computedCredits} earned credits but your transcript says ${P.statedCredits}.`,detail:"credit total mismatch"}),{...O,warnings:M}}const du={rowTolerance:.5,cellGap:1.4};function tA(a,S=du){if(a.items.length===0)return[];const s=[...a.items].sort((M,f)=>f.y-M.y||M.x-f.x),m=[];let O=[],P=s[0].y;for(const M of s){const f=Math.max(M.height,1)*S.rowTolerance;O.length>0&&Math.abs(M.y-P)>f&&(m.push(O),O=[]),O.length===0&&(P=M.y),O.push(M)}return O.length>0&&m.push(O),m.map(M=>rA(a.pageNumber,M,S))}function rA(a,S,s){var M;const m=[...S].sort((f,h)=>f.x-h.x),O=[];for(const f of m){const h=O[O.length-1],U=Math.max(f.height,1)*s.cellGap;if(h&&f.x-h.endX<=U){const j=h.text.endsWith(" ")||f.text.startsWith(" ")?"":" ",V=f.x-h.endX<.2?"":j;h.text=`${h.text}${V}${f.text}`,h.endX=Math.max(h.endX,f.x+f.width)}else O.push({text:f.text,x:f.x,endX:f.x+f.width})}const P=O.map(f=>({...f,text:f.text.replace(/\s+/g," ").trim()})).filter(f=>f.text.length>0);return{page:a,y:((M=m[0])==null?void 0:M.y)??0,cells:P,text:P.map(f=>f.text).join(" ")}}function iA(a,S=du){return a.flatMap(s=>tA(s,S))}const Au="A\\+|A-|B\\+|B-|C\\+|C-|D\\+|D-|XF|NC|AU|NG|A|B|C|D|F|P|S|U|W|I",Tt="\\d+\\.\\d{2}",jr="[A-Z]{4}\\s?\\d{3}[A-Z]?",lA=new RegExp(`^(${jr})\\s+(.+?)\\s+(${Au})\\s+(${Tt})\\s+(${Tt})(?:\\s+(${Tt}))?(?:\\s+(.*))?$`),oA=new RegExp(`^(?:(\\d{4})\\s+)?(.+?)\\s+(${Au})\\s+(${Tt})(?:\\s+(${jr}))?(?:\\s+(.*))?$`),aA=new RegExp(`^(${jr})\\s+([A-Z0-9]{4})\\s+(${Tt})\\s+([A-Z]{2,4})\\s+([AD])\\b`);function Kl(a){return a.replace(/\s+/g,"").toUpperCase()}const sA=/\b(FS[A-Z]{2}|DS[A-Z]{2}|DV[A-Z]{2}|SCIS)\b/g;function Cu(a){if(!a)return;const S=[...a.matchAll(sA)].map(m=>m[1]),s=[...new Set(S)];return s.length>0?s:void 0}function Vr(a){if(a===void 0)return;const S=Number(a.replace(/,/g,""));return Number.isFinite(S)?S:void 0}function uA(a){const S=lA.exec(a);if(!S)return null;const s=Su(S[3]),m=Vr(S[4]),O=Vr(S[5]);if(!s||m===void 0||m>24)return null;const P={courseId:Kl(S[1]),title:S[2].trim(),credits:m,grade:s,gradePoints:Jd(s),countsTowardGpa:Wd(s),source:"institution"};O!==void 0&&(P.creditsEarned=O);const M=Cu(S[7]);return M&&(P.genEd=M),P}function SA(a,S){const s=oA.exec(a);if(!s)return null;const m=Su(s[3]),O=Vr(s[4]);if(!m||O===void 0||O>24)return null;const P=s[5],M={courseId:P?Kl(P):"",title:s[2].trim(),credits:O,creditsEarned:O,grade:m,gradePoints:null,countsTowardGpa:!1,source:S},f=Cu(s[6]);return f&&(M.genEd=f),M}function dA(a){const S=aA.exec(a);if(!S)return null;const s=Vr(S[3]);return s===void 0||s>24?null:{dropped:S[5]==="D",entry:{courseId:Kl(S[1]),title:"",credits:s,grade:"NG",gradePoints:null,countsTowardGpa:!1,source:"institution",section:S[2].toUpperCase()}}}function AA(a){return new RegExp(`^${jr}\\b`).test(a)}const CA=/^(Fall|Spring|Summer|Winter)(?:\s+(I{1,2}))?\s+(\d{4})\b/i,cA=/\*\*\s*Transfer\s+Credit\s+Information/i,EA=/\bHistoric\s+Course\s+Information/i,IA=/\*\*\s*Current\s+Course\s+Information/i,NA=/^(Advanced\s+Placement|AP\s+Exam|International\s+Baccalaureate|IB\s+Exam|CLEP)/i,OA=/\b(College|University|Institute|School|Academy)\b/i,mA=/^Semester:\s*Attempted\s+([\d.]+);\s*Earned\s+([\d.]+);\s*QPoints\s+([\d.]+);\s*GPA\s+([\d.]+)/i,fA=/^UG\s+Cumulative:\s*([\d.]+);\s*([\d.]+);\s*([\d.]+);\s*([\d.]+)/i,TA=/^UG\s+Cumulative\s+Credit\s*:\s*([\d.]+)/i,RA=/^UG\s+Cumulative\s+GPA\s*:\s*([\d.]+)/i,pA=/^Major\s*:\s*(.+)$/i,PA=/^[=\s]+$/;function MA(a){const S=CA.exec(a);if(!S)return null;const s=S[1],m={season:s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),year:Number(S[3])};return S[2]&&(m.session=S[2].toUpperCase()),m}function GA(a){var J,_;const S=[],s=[],m=[],O=[];let P="header",M="transfer",f=null,h,U=null,j=null,V;for(const Q of a){const B=Q.text;if(!B||PA.test(B))continue;if(cA.test(B)){P="transfer",f=null;continue}if(EA.test(B)){P="historic",f=null;continue}if(IA.test(B)){P="current",f=null;continue}if(P==="header"){V??(V=(_=(J=pA.exec(B))==null?void 0:J[1])==null?void 0:_.trim());continue}const Y=mA.exec(B);if(Y){f&&(f.statedTermCredits=Number(Y[2]),f.statedTermGpa=Number(Y[4]));continue}const oe=fA.exec(B);if(oe){j=Number(oe[2]),U=Number(oe[4]);continue}const Re=TA.exec(B);if(Re){j=Number(Re[1]);continue}const Z=RA.exec(B);if(Z){U=Number(Z[1]);continue}const K=MA(B);if(K){const ae=`${K.year}-${K.season}${K.session?` ${K.session}`:""}`;P==="historic"?(f={id:ae,season:K.season,year:K.year,courses:[],statedTermGpa:null,statedTermCredits:null},K.session&&(f.session=K.session),s.push(f)):(f=null,P==="current"&&(h=ae));continue}if(P==="transfer"){if(NA.test(B)){M="exam";continue}if(OA.test(B)&&!/\d\.\d{2}/.test(B)){M="transfer";continue}const ae=SA(B,M);ae&&m.push(ae);continue}if(P==="current"){const ae=dA(B);ae&&!ae.dropped&&(h&&(ae.entry.termId=h),O.push(ae.entry));continue}const Oe=uA(B);if(Oe){f?f.courses.push(Oe):S.push({code:"unparsed_line",message:`${Oe.courseId} was not under any term heading.`,page:Q.page});continue}AA(B)&&S.push({code:"unparsed_line",message:"A row looked like a course but could not be read.",page:Q.page,detail:B})}return s.length===0&&S.push({code:"no_terms_found",message:"No semesters were found in this PDF. It may not be a UMD transcript."}),U===null&&S.push({code:"missing_stated_gpa",message:"The transcript did not print a cumulative GPA, so the parse could not be checked against it."}),{major:V,terms:s,nonGpaCredits:m,inProgress:O,statedCumulativeGpa:U,statedCumulativeCredits:j,warnings:S}}function LA(a){return GA(iA(a))}const $l={charWidth:6,lineHeight:12,fontHeight:10,top:780};function UA(a,S,s=$l){const m=[];return S.replace(/\r\n/g,`
`).split(`
`).forEach((P,M)=>{const f=s.top-M*s.lineHeight;for(const h of P.matchAll(/\S+/g)){const U=h.index;m.push({text:h[0],x:U*s.charWidth,y:f,width:h[0].length*s.charWidth,height:s.fontHeight})}}),{pageNumber:a,items:m}}function DA(a,S=$l){return a.split("\f").map((s,m)=>UA(m+1,s,S))}function cu(a,S=$l){return nA(LA(DA(a,S)))}const hA=`                    UNIVERSITY OF MARYLAND
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

`,gA=`                    UNIVERSITY OF MARYLAND
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

`,vA=`                    UNIVERSITY OF MARYLAND
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

`,yA=`                    UNIVERSITY OF MARYLAND
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

`,HA=`                    UNIVERSITY OF MARYLAND
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

`,FA=`                    UNIVERSITY OF MARYLAND
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

`,BA=`                    UNIVERSITY OF MARYLAND
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

`,xA=`                    UNIVERSITY OF MARYLAND
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

`,YA=`                    UNIVERSITY OF MARYLAND
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

`,wA=`                    UNIVERSITY OF MARYLAND
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

`,kA=`                    UNIVERSITY OF MARYLAND
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

`,VA=`                    UNIVERSITY OF MARYLAND
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

`,jA=`                    UNIVERSITY OF MARYLAND
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

`,_A=`                    UNIVERSITY OF MARYLAND
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

`,QA=`                    UNIVERSITY OF MARYLAND
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

`,JA=`                    UNIVERSITY OF MARYLAND
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

`,WA=`                    UNIVERSITY OF MARYLAND
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

`,zA=`                    UNIVERSITY OF MARYLAND
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

`,KA=`                    UNIVERSITY OF MARYLAND
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

`,$A=`                    UNIVERSITY OF MARYLAND
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

`,qA=`                    UNIVERSITY OF MARYLAND
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

`,XA=`                    UNIVERSITY OF MARYLAND
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

`,ZA=`                    UNIVERSITY OF MARYLAND
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

`,bA=`                    UNIVERSITY OF MARYLAND
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

`,e1=`                    UNIVERSITY OF MARYLAND
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

`,n1=`                    UNIVERSITY OF MARYLAND
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

`,t1=`                    UNIVERSITY OF MARYLAND
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

`,r1=`                    UNIVERSITY OF MARYLAND
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

`,i1=`                    UNIVERSITY OF MARYLAND
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

`,l1=`                    UNIVERSITY OF MARYLAND
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

`,o1=`                    UNIVERSITY OF MARYLAND
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

`,a1=`                    UNIVERSITY OF MARYLAND
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

`,s1=`                    UNIVERSITY OF MARYLAND
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

`,u1=`                    UNIVERSITY OF MARYLAND
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

`,S1=`                    UNIVERSITY OF MARYLAND
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

`,d1=`                    UNIVERSITY OF MARYLAND
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

`,A1=`                    UNIVERSITY OF MARYLAND
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

`,C1=`                    UNIVERSITY OF MARYLAND
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

`,c1=`                    UNIVERSITY OF MARYLAND
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

`,E1=`                    UNIVERSITY OF MARYLAND
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

`,I1=`                    UNIVERSITY OF MARYLAND
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

`,N1=`                    UNIVERSITY OF MARYLAND
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

`,O1=`                    UNIVERSITY OF MARYLAND
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

`,m1=`                    UNIVERSITY OF MARYLAND
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

`,f1=`                    UNIVERSITY OF MARYLAND
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

`,T1=`                    UNIVERSITY OF MARYLAND
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

`,R1=`                    UNIVERSITY OF MARYLAND
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

`,p1=`                    UNIVERSITY OF MARYLAND
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

`,P1=`                    UNIVERSITY OF MARYLAND
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

`,M1=`                    UNIVERSITY OF MARYLAND
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

`,G1=`                    UNIVERSITY OF MARYLAND
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

`,L1=`                    UNIVERSITY OF MARYLAND
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

`,Kn=[{slug:"information-science",name:"Information Science",short:"InfoSci",hasRequirements:!0},{slug:"computer-science",name:"Computer Science",short:"CS",hasRequirements:!0},{slug:"management",name:"Management",short:"Mgmt",hasRequirements:!0},{slug:"finance",name:"Finance",short:"Finance",hasRequirements:!0},{slug:"information-systems",name:"Information Systems",short:"Info Sys",hasRequirements:!0},{slug:"psychology",name:"Psychology",short:"Psych",hasRequirements:!1},{slug:"criminology",name:"Criminology and Criminal Justice",short:"CCJS",hasRequirements:!1},{slug:"economics",name:"Economics",short:"Econ",hasRequirements:!1},{slug:"biology",name:"Biological Sciences",short:"Biology",hasRequirements:!1},{slug:"government",name:"Government and Politics",short:"GVPT",hasRequirements:!1},{slug:"mechanical-engineering",name:"Mechanical Engineering",short:"Mech E",hasRequirements:!1},{slug:"communication",name:"Communication",short:"Comm",hasRequirements:!1},{slug:"kinesiology",name:"Kinesiology",short:"Kines",hasRequirements:!1}],ft=[{slug:"freshman",label:"Freshman"},{slug:"sophomore",label:"Sophomore"},{slug:"junior",label:"Junior"},{slug:"senior",label:"Senior"}],Eu=[{id:"sample-information-science-freshman",major:"information-science",year:"freshman",text:hA},{id:"sample-information-science-sophomore",major:"information-science",year:"sophomore",text:gA},{id:"sample-information-science-junior",major:"information-science",year:"junior",text:vA},{id:"sample-information-science-senior",major:"information-science",year:"senior",text:yA},{id:"sample-computer-science-freshman",major:"computer-science",year:"freshman",text:HA},{id:"sample-computer-science-sophomore",major:"computer-science",year:"sophomore",text:FA},{id:"sample-computer-science-junior",major:"computer-science",year:"junior",text:BA},{id:"sample-computer-science-senior",major:"computer-science",year:"senior",text:xA},{id:"sample-management-freshman",major:"management",year:"freshman",text:YA},{id:"sample-management-sophomore",major:"management",year:"sophomore",text:wA},{id:"sample-management-junior",major:"management",year:"junior",text:kA},{id:"sample-management-senior",major:"management",year:"senior",text:VA},{id:"sample-finance-freshman",major:"finance",year:"freshman",text:jA},{id:"sample-finance-sophomore",major:"finance",year:"sophomore",text:_A},{id:"sample-finance-junior",major:"finance",year:"junior",text:QA},{id:"sample-finance-senior",major:"finance",year:"senior",text:JA},{id:"sample-information-systems-freshman",major:"information-systems",year:"freshman",text:WA},{id:"sample-information-systems-sophomore",major:"information-systems",year:"sophomore",text:zA},{id:"sample-information-systems-junior",major:"information-systems",year:"junior",text:KA},{id:"sample-information-systems-senior",major:"information-systems",year:"senior",text:$A},{id:"sample-psychology-freshman",major:"psychology",year:"freshman",text:qA},{id:"sample-psychology-sophomore",major:"psychology",year:"sophomore",text:XA},{id:"sample-psychology-junior",major:"psychology",year:"junior",text:ZA},{id:"sample-psychology-senior",major:"psychology",year:"senior",text:bA},{id:"sample-criminology-freshman",major:"criminology",year:"freshman",text:e1},{id:"sample-criminology-sophomore",major:"criminology",year:"sophomore",text:n1},{id:"sample-criminology-junior",major:"criminology",year:"junior",text:t1},{id:"sample-criminology-senior",major:"criminology",year:"senior",text:r1},{id:"sample-economics-freshman",major:"economics",year:"freshman",text:i1},{id:"sample-economics-sophomore",major:"economics",year:"sophomore",text:l1},{id:"sample-economics-junior",major:"economics",year:"junior",text:o1},{id:"sample-economics-senior",major:"economics",year:"senior",text:a1},{id:"sample-biology-freshman",major:"biology",year:"freshman",text:s1},{id:"sample-biology-sophomore",major:"biology",year:"sophomore",text:u1},{id:"sample-biology-junior",major:"biology",year:"junior",text:S1},{id:"sample-biology-senior",major:"biology",year:"senior",text:d1},{id:"sample-government-freshman",major:"government",year:"freshman",text:A1},{id:"sample-government-sophomore",major:"government",year:"sophomore",text:C1},{id:"sample-government-junior",major:"government",year:"junior",text:c1},{id:"sample-government-senior",major:"government",year:"senior",text:E1},{id:"sample-mechanical-engineering-freshman",major:"mechanical-engineering",year:"freshman",text:I1},{id:"sample-mechanical-engineering-sophomore",major:"mechanical-engineering",year:"sophomore",text:N1},{id:"sample-mechanical-engineering-junior",major:"mechanical-engineering",year:"junior",text:O1},{id:"sample-mechanical-engineering-senior",major:"mechanical-engineering",year:"senior",text:m1},{id:"sample-communication-freshman",major:"communication",year:"freshman",text:f1},{id:"sample-communication-sophomore",major:"communication",year:"sophomore",text:T1},{id:"sample-communication-junior",major:"communication",year:"junior",text:R1},{id:"sample-communication-senior",major:"communication",year:"senior",text:p1},{id:"sample-kinesiology-freshman",major:"kinesiology",year:"freshman",text:P1},{id:"sample-kinesiology-sophomore",major:"kinesiology",year:"sophomore",text:M1},{id:"sample-kinesiology-junior",major:"kinesiology",year:"junior",text:G1},{id:"sample-kinesiology-senior",major:"kinesiology",year:"senior",text:L1}];function Iu(a){return a?Eu.find(S=>S.id===a):void 0}function Br(a,S){return Eu.find(s=>s.major===a&&s.year===S)}function U1(a){const S=Iu(a);return S?Kn.find(s=>s.slug===S.major):void 0}const Nu="https://github.com/sanirb-debug/UMDTerpTracker",D1={matches:"Computed GPA matches the GPA printed on the transcript.",differs:"Computed GPA does NOT match the GPA printed on the transcript.","transcript-printed-none":"The transcript printed no cumulative GPA to compare against."};function h1(a){const S=`Something looks wrong on the ${a.view} view`,m=["Reporting something that looks wrong. I haven't described the problem yet — adding that below.","","## What I was doing","",`- View: ${a.view}`,`- Data: ${a.source==="sample"?`demo sample \`${a.sampleId??"unknown"}\``:"my own uploaded transcript"}`,"","## What the app reported","",`- Parse warnings: ${a.warningCodes.length>0?a.warningCodes.join(", "):"none"}`,`- ${D1[a.gpaCheck]}`,"","## What went wrong","","<!-- Please describe what you expected and what you saw. -->","","---","","This report was prefilled by TerpTracker and deliberately contains no","transcript contents: no courses, grades, credits, GPA values, name or","student ID. Please do not paste any of those into a public issue."].join(`
`),O=`${Nu}/issues/new?title=${encodeURIComponent(S)}&body=${encodeURIComponent(m)}`;return{title:S,body:m,url:O}}function Ou(a){const{view:S,transcript:s,sampleId:m}=a;if(!s)return{view:S,source:m?"sample":"upload",...m?{sampleId:m}:{},warningCodes:[],gpaCheck:"transcript-printed-none"};const O=Rt(s),P=O.statedGpa===null?"transcript-printed-none":O.ok?"matches":"differs";return{view:S,source:m?"sample":"upload",...m?{sampleId:m}:{},warningCodes:[...new Set(s.warnings.map(M=>M.code))],gpaCheck:P}}function g1({view:a,transcript:S,sampleId:s,className:m}){const[O,P]=b.useState(!1),M=b.useMemo(()=>h1(Ou({view:a,transcript:S,sampleId:s})),[a,S,s]);return O?c.jsxs("div",{className:"mt-2 w-full rounded-lg border border-neutral-300 p-3 text-left dark:border-neutral-700",children:[c.jsx("h3",{className:"text-sm font-semibold",children:"This is exactly what will be sent"}),c.jsx("p",{className:"mt-1 text-xs text-neutral-600 dark:text-neutral-300",children:"It opens a public GitHub issue in a new tab, prefilled with the text below and nothing else. No part of your transcript is included — no courses, grades, GPA, name or student ID. Please keep it that way when you add your description."}),c.jsx("p",{className:"mt-3 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Title"}),c.jsx("pre",{className:"mt-1 overflow-x-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:M.title}),c.jsx("p",{className:"mt-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Body"}),c.jsx("pre",{className:"mt-1 max-h-56 overflow-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:M.body}),c.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2",children:[c.jsx("a",{className:"button text-xs",href:M.url,target:"_blank",rel:"noopener noreferrer",onClick:()=>P(!1),children:"Open GitHub issue"}),c.jsx("button",{type:"button",className:"button-quiet text-xs",onClick:()=>P(!1),children:"Cancel"})]})]}):c.jsx("button",{type:"button",onClick:()=>P(!0),className:`inline-flex min-h-11 items-center text-xs text-neutral-500 underline decoration-dotted underline-offset-2 hover:text-neutral-900 sm:min-h-0 dark:hover:text-neutral-100 ${m??""}`,children:"Something looks wrong"})}const xr=300,v1={gpaMatched:null,auditMatched:null,usedFor:[],missing:[],note:""},mu={yes:"Yes — the GPA matched my transcript",no:"No — the GPA did not match my transcript","not-sure":"Not sure"},fu={yes:"Yes — it matched my official UMD degree audit",no:"No — it did not match my official UMD degree audit","didnt-check":"Didn't check","not-applicable":"N/A — no major audit was available"},Tu={"check-gpa":"Check my GPA","plan-semester":"Plan next semester","hit-target":"Work out how to hit a GPA target","check-requirements":"Check degree requirements",looking:"Just looking"},Ru={major:"My major",minor:"My minor",pathway:"A pathway (e.g. pre-nursing, pre-med)","schedule-planning":"Schedule planning",other:"Something else"},Fr={gpaMatched:mu,auditMatched:fu,usedFor:Tu,missing:Ru},y1={matches:"computed GPA matched the printed GPA",differs:"computed GPA did NOT match the printed GPA","transcript-printed-none":"the transcript printed no GPA to compare against"};function H1(a){const S=["feedback"];return a.gpaMatched==="no"&&S.push("gpa-mismatch-reported"),a.auditMatched==="no"&&S.push("audit-mismatch-reported"),a.missing.length>0&&S.push("coverage-request"),S}function pu(a){return a.replace(/\r?\n+/g," ").trim().slice(0,xr)}function F1(a,S){const s=pu(S.note),m=`Feedback from the ${a.view} view`,O=(U,j)=>U.length>0?U.map(V=>`\`${j[V]}\``).join(", "):"_no answer_",M=["Feedback submitted through the app.","","## Did it get the numbers right","",`- **GPA matched my transcript:** ${S.gpaMatched?mu[S.gpaMatched]:"_no answer_"}`,`- **Audit matched my official UMD degree audit:** ${S.auditMatched?fu[S.auditMatched]:"_no answer_"}`,"","## What it was used for","",`- ${O(S.usedFor,Tu)}`,"","## What is missing","",`- ${O(S.missing,Ru)}`,"","## Anything else","",s.length>0?s:"_nothing added_","","## Automatically attached","",`- View: ${a.view}`,`- Data: ${a.source==="sample"?`demo sample \`${a.sampleId??"unknown"}\``:"the reader’s own uploaded transcript"}`,`- Parse warnings: ${a.warningCodes.length>0?a.warningCodes.join(", "):"none"}`,`- Self-check: ${y1[a.gpaCheck]}`,"","---","","Everything above the free-text answer was prefilled by TerpTracker from a","fixed set of options and deliberately contains no transcript contents: no","courses, grades, credits, GPA values, name or student ID."].join(`
`),f=H1(S),h=`${Nu}/issues/new?title=${encodeURIComponent(m)}&labels=${encodeURIComponent(f.join(","))}&body=${encodeURIComponent(M)}`;return{title:m,body:M,labels:f,url:h}}const B1=["yes","no","not-sure"],x1=["yes","no","didnt-check","not-applicable"],Y1=["check-gpa","plan-semester","hit-target","check-requirements","looking"],w1=["major","minor","pathway","schedule-planning","other"];function iu({view:a,transcript:S,sampleId:s,hasMajorAudit:m,label:O="Feedback",className:P,onClose:M,startOpen:f=!1}){const[h,U]=b.useState(f?"form":"closed"),[j,V]=b.useState({...v1,auditMatched:m===!1?"not-applicable":null}),J=b.useMemo(()=>F1(Ou({view:a,transcript:S,sampleId:s}),j),[a,S,s,j]),_=()=>{U("closed"),M==null||M()},Q=(Y,oe)=>V(Re=>{const Z=Re[Y],K=Z.includes(oe)?Z.filter(Oe=>Oe!==oe):[...Z,oe];return{...Re,[Y]:K}});if(h==="closed")return c.jsx("button",{type:"button",onClick:()=>U("form"),className:`inline-flex min-h-11 items-center text-xs text-neutral-500 underline decoration-dotted underline-offset-2 hover:text-neutral-900 sm:min-h-0 dark:hover:text-neutral-100 ${P??""}`,children:O});if(h==="preview")return c.jsxs("div",{className:"mt-2 w-full rounded-lg border border-neutral-300 p-3 text-left dark:border-neutral-700",children:[c.jsx("h3",{className:"text-sm font-semibold",children:"This is exactly what will be sent"}),c.jsx("p",{className:"mt-1 text-xs text-neutral-600 dark:text-neutral-300",children:"It opens a public GitHub issue in a new tab, prefilled with the text below and nothing else."}),c.jsx("p",{className:"mt-3 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Title"}),c.jsx("pre",{className:"mt-1 overflow-x-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:J.title}),c.jsx("p",{className:"mt-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Labels"}),c.jsx("pre",{className:"mt-1 overflow-x-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:J.labels.join(", ")}),c.jsx("p",{className:"mt-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Body"}),c.jsx("pre",{className:"mt-1 max-h-64 overflow-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:J.body}),c.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2",children:[c.jsx("a",{className:"button text-xs",href:J.url,target:"_blank",rel:"noopener noreferrer",onClick:_,children:"Open GitHub issue"}),c.jsx("button",{type:"button",className:"button-quiet text-xs",onClick:()=>U("form"),children:"Back"}),c.jsx("button",{type:"button",className:"button-quiet text-xs",onClick:_,children:"Cancel"})]})]});const B=pu(j.note).length;return c.jsxs("div",{className:"mt-2 w-full rounded-lg border border-neutral-300 p-4 text-left dark:border-neutral-700",children:[c.jsx("h3",{className:"font-semibold",children:"How did this go?"}),c.jsx("p",{className:"mt-1 text-xs text-neutral-600 dark:text-neutral-300",children:"Every answer is optional. This becomes a public GitHub issue, and you will see exactly what it says before it opens."}),c.jsx(lu,{legend:"Did the GPA we calculated match your transcript?",name:"gpa-matched",options:B1,labels:Fr.gpaMatched,value:j.gpaMatched,onChange:Y=>V(oe=>({...oe,gpaMatched:Y}))}),c.jsx(lu,{legend:m===!1?"Did the requirements match your official UMD degree audit? (no audit was available for your major)":"Did the requirements match your official UMD degree audit?",name:"audit-matched",options:x1,labels:Fr.auditMatched,value:j.auditMatched,onChange:Y=>V(oe=>({...oe,auditMatched:Y}))}),c.jsx(ou,{legend:"What did you use this for?",options:Y1,labels:Fr.usedFor,chosen:j.usedFor,onToggle:Y=>Q("usedFor",Y)}),c.jsx(ou,{legend:"What's missing?",options:w1,labels:Fr.missing,chosen:j.missing,onToggle:Y=>Q("missing",Y)}),c.jsxs("fieldset",{className:"mt-4",children:[c.jsx("legend",{className:"text-sm font-medium",children:"Anything else?"}),c.jsxs("p",{className:"mt-1 rounded border border-caution-400/60 bg-caution-50 px-2 py-1.5 text-xs text-caution-900 dark:border-caution-700/60 dark:bg-caution-950/30 dark:text-caution-100",children:[c.jsx("strong",{children:"This goes into a public GitHub issue."})," Please don't paste grades, course lists, your name, or your student ID."]}),c.jsx("textarea",{className:"input mt-2 h-24",maxLength:xr,value:j.note,placeholder:"Optional",onChange:Y=>V(oe=>({...oe,note:Y.target.value.slice(0,xr)}))}),c.jsxs("p",{className:"mt-1 text-right text-xs tabular-nums text-neutral-500",children:[B,"/",xr]})]}),c.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2",children:[c.jsx("button",{type:"button",className:"button text-xs",onClick:()=>U("preview"),children:"Show me what will be sent"}),c.jsx("button",{type:"button",className:"button-quiet text-xs",onClick:_,children:"Cancel"})]})]})}function lu({legend:a,name:S,options:s,labels:m,value:O,onChange:P}){return c.jsxs("fieldset",{className:"mt-4",children:[c.jsx("legend",{className:"text-sm font-medium",children:a}),c.jsx("div",{className:"mt-1 flex flex-wrap gap-2",children:s.map(M=>c.jsxs("label",{className:`inline-flex min-h-11 cursor-pointer items-center rounded-lg border px-3 py-1.5 text-xs sm:min-h-0 ${O===M?"border-accent-600 bg-accent-50 font-semibold dark:bg-accent-950/40":"border-neutral-300 hover:border-accent-600 dark:border-neutral-700"}`,children:[c.jsx("input",{type:"radio",name:S,className:"sr-only",checked:O===M,onChange:()=>P(M)}),m[M]]},M))})]})}function ou({legend:a,options:S,labels:s,chosen:m,onToggle:O}){return c.jsxs("fieldset",{className:"mt-4",children:[c.jsx("legend",{className:"text-sm font-medium",children:a}),c.jsx("div",{className:"mt-1 flex flex-wrap gap-2",children:S.map(P=>c.jsxs("label",{className:`inline-flex min-h-11 cursor-pointer items-center rounded-lg border px-3 py-1.5 text-xs sm:min-h-0 ${m.includes(P)?"border-accent-600 bg-accent-50 font-semibold dark:bg-accent-950/40":"border-neutral-300 hover:border-accent-600 dark:border-neutral-700"}`,children:[c.jsx("input",{type:"checkbox",className:"sr-only",checked:m.includes(P),onChange:()=>O(P)}),s[P]]},P))})]})}function Yr(a){return typeof a=="string"&&a.trim().length>0}function k1(a){const S=[];return Yr(a.text)||S.push("text"),Yr(a.speaker)||S.push("speaker"),Yr(a.sourceUrl)||S.push("sourceUrl"),S.length===0?null:`missing ${S.join(", ")}`}function V1(a,S){const s=a==null?void 0:a.quotes;if(!Array.isArray(s))return[];const m=[];return s.forEach((O,P)=>{k1(O??{})===null&&m.push({text:O.text.trim(),speaker:O.speaker.trim(),...Yr(O.context)?{context:O.context.trim()}:{},sourceUrl:O.sourceUrl.trim()})}),m}function j1(a,S,s=Math.random){if(a.length===0)return null;const m=a.length>1?a.filter(O=>O!==S):a;return m[Math.min(m.length-1,Math.floor(s()*m.length))]}const _1=[{text:"",speaker:"",context:"",sourceUrl:""}],Q1={quotes:_1},J1=V1(Q1);function W1({quotes:a=J1,random:S}){const[s,m]=b.useState(null),O=b.useRef(null),P=b.useRef(null),M=b.useCallback(()=>{var f;m(null),(f=O.current)==null||f.focus()},[]);return b.useEffect(()=>{if(!s)return;const f=h=>{h.key==="Escape"&&M()};return document.addEventListener("keydown",f),()=>document.removeEventListener("keydown",f)},[s,M]),a.length===0?null:c.jsxs("div",{className:"pad-safe-bottom pointer-events-none fixed inset-x-0 bottom-0 z-40 flex flex-col items-end gap-2 pr-3 sm:inset-x-auto sm:right-3 sm:pb-3",children:[s&&c.jsxs("blockquote",{id:"testudo-quote",className:"pointer-events-auto max-w-xs rounded-xl border border-neutral-300 bg-white p-3 text-left shadow-lg dark:border-neutral-700 dark:bg-neutral-900",children:[c.jsx("p",{className:"text-sm",children:s.text}),c.jsxs("footer",{className:"mt-2 text-xs text-neutral-500 dark:text-neutral-400",children:[c.jsx("cite",{className:"not-italic font-medium text-neutral-700 dark:text-neutral-200",children:s.speaker}),s.context&&c.jsxs("span",{children:[" — ",s.context]})," ",c.jsx("a",{className:"underline",href:s.sourceUrl,target:"_blank",rel:"noopener noreferrer",children:"source"})]})]}),c.jsx("button",{ref:O,type:"button","aria-label":s?"Hide the quote about Maryland":"Testudo has something to say about Maryland","aria-expanded":s!==null,"aria-controls":s?"testudo-quote":void 0,onClick:()=>m(f=>{if(f)return null;const h=j1(a,P.current??void 0,S);return P.current=h,h}),className:"pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full text-lg leading-none opacity-30 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 sm:h-8 sm:w-8",children:c.jsx("span",{"aria-hidden":"true",children:"🐢"})})]})}class _r extends Error{}class SC extends _r{constructor(){super("This PDF has no text in it, so it looks like a scan or a photo. Download the unofficial transcript straight from Testudo instead of scanning a printout."),this.name="ScannedPdfError"}}class dC extends _r{constructor(){super("That PDF is password-protected, so it cannot be opened here. Open it in a PDF reader, save an unlocked copy, and drop that in — or download the transcript again from Testudo."),this.name="EncryptedPdfError"}}class AC extends _r{constructor(){super("That file could not be opened as a PDF. Downloads that stop early do this — try downloading the unofficial transcript from Testudo again."),this.name="UnreadablePdfError"}}const Pu=2,Mu="terptracker.transcript.v1",Gu="terptracker.plan.v1";function ql(a){try{const S=window.localStorage.getItem(a);return S?JSON.parse(S):null}catch{return null}}function Qr(a,S){try{window.localStorage.setItem(a,JSON.stringify(S))}catch{}}function z1(){const a=ql(Mu);if(!a)return{transcript:null,stale:!1};const S=a;return typeof S.version!="number"||S.version!==Pu?{transcript:null,sampleId:S.sampleId,stale:!0}:{transcript:S.transcript,sampleId:S.sampleId,stale:!1}}function au(a,S){const s={version:Pu,transcript:a};S&&(s.sampleId=S),Qr(Mu,s)}const Lu="terptracker.feedbackPrompt.v1";function K1(){try{return window.localStorage.getItem(Lu)!==null}catch{return!0}}function $1(){Qr(Lu,{seen:!0})}const Jl="terptracker.major.v1";function CC(){var a;return(a=ql(Jl))==null?void 0:a.id}function cC(a){if(!a){try{window.localStorage.removeItem(Jl)}catch{}return}Qr(Jl,{id:a})}const EC=()=>ql(Gu),IC=a=>Qr(Gu,a),q1="terptracker.";function Uu(){try{const a=[];for(let S=0;S<window.localStorage.length;S+=1){const s=window.localStorage.key(S);s!=null&&s.startsWith(q1)&&a.push(s)}return a.sort()}catch{return[]}}function Du(){const a=Uu();try{for(const S of a)window.localStorage.removeItem(S)}catch{}return a}function X1({onCleared:a}){const[S,s]=b.useState(null),m=()=>{const O=Du();s({removed:O,remaining:Uu()}),a()};return c.jsxs("div",{children:[c.jsx("button",{type:"button",className:"button-quiet",onClick:m,children:"Clear my data"}),S&&c.jsx("p",{role:"status",className:`mt-2 text-xs ${S.remaining.length===0?"text-positive-700 dark:text-positive-300":"text-critical-700 dark:text-critical-300"}`,children:S.remaining.length>0?c.jsxs(c.Fragment,{children:["Something is still stored (",S.remaining.join(", "),"). Clearing this site's data from your browser settings will remove it."]}):S.removed.length===0?c.jsx(c.Fragment,{children:"Nothing was stored — there was nothing to clear."}):c.jsxs(c.Fragment,{children:["Cleared. Removed ",S.removed.length," ",S.removed.length===1?"item":"items"," (",S.removed.join(", "),") and local storage now holds nothing for this site. You can confirm it in your browser's developer tools under Application → Local Storage."]})})]})}function Z1({sampleId:a,onParsed:S,onForget:s}){const[m,O]=b.useState(null),[P,M]=b.useState(!1),[f,h]=b.useState(null),[U,j]=b.useState(!1),V=b.useCallback(async _=>{O(null),M(!0),h({phase:"reading"});try{const{parseTranscriptFile:Q}=await pt(async()=>{const{parseTranscriptFile:Y}=await import("./client-DFUy676J.js");return{parseTranscriptFile:Y}},[]),B=await Q(_,h);if(B.terms.length===0){O("No semesters turned up in that PDF. Make sure it is the unofficial transcript from Testudo.");return}S(B)}catch(Q){O(Q instanceof _r?Q.message:`That PDF could not be read. ${Q instanceof Error?Q.message:""}`.trim())}finally{M(!1),h(null)}},[S]),J=b.useCallback((_,Q)=>{O(null),S(cu(Q),_)},[S]);return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("p",{className:"rounded-lg border border-positive-300 bg-positive-50 px-4 py-3 text-sm text-positive-900 dark:border-positive-800 dark:bg-positive-950/30 dark:text-positive-100",children:[c.jsx("strong",{children:"Your transcript is read here in your browser and never uploaded."})," There is no server and no account — the file is opened by code running in this tab, and nothing about it is sent anywhere. You can watch that yourself in your browser's network tab."]}),c.jsxs("section",{onDragOver:_=>{_.preventDefault(),j(!0)},onDragLeave:()=>j(!1),onDrop:_=>{_.preventDefault(),j(!1);const Q=_.dataTransfer.files[0];Q&&V(Q)},className:`rounded-xl border p-5 text-center transition-colors sm:border-2 sm:border-dashed sm:p-10 ${U?"border-accent-600 bg-accent-50 dark:bg-accent-950/40":"border-neutral-200 dark:border-neutral-800 sm:border-neutral-300 sm:dark:border-neutral-700"}`,children:[c.jsxs("p",{className:"mb-1 text-lg font-semibold",children:[c.jsx("span",{className:"sm:hidden",children:"Add your unofficial transcript"}),c.jsx("span",{className:"hidden sm:inline",children:"Drop your unofficial transcript here"})]}),c.jsx("p",{className:"mb-5 text-sm text-neutral-500 dark:text-neutral-400",children:"Testudo → Academics → Unofficial Transcript → save as PDF"}),c.jsx("input",{id:"transcript-file",type:"file",accept:"application/pdf,.pdf",className:"sr-only",disabled:P,onChange:_=>{var B;const Q=(B=_.target.files)==null?void 0:B[0];Q&&V(Q),_.target.value=""}}),P?c.jsx(b1,{progress:f}):c.jsx("label",{htmlFor:"transcript-file",className:"button w-full cursor-pointer text-base focus-within:ring-2 focus-within:ring-accent-600 focus-within:ring-offset-2 sm:w-auto sm:text-sm dark:focus-within:ring-offset-neutral-950",children:"Choose file"}),c.jsx("p",{className:"mt-3 hidden text-xs text-neutral-500 sm:block dark:text-neutral-400",children:"or drag it onto this box"})]}),c.jsxs("section",{className:"card",children:[c.jsx("h2",{className:"font-semibold",children:"See how it works"}),c.jsx("p",{className:"mt-1 text-sm text-neutral-600 dark:text-neutral-300",children:"Rather not hand your transcript to a site you have never heard of? Reasonable. Pick a major and a year — no file, no upload."}),c.jsx(eC,{sampleId:a,onLoad:J}),c.jsx("div",{className:"mt-4 hidden overflow-x-auto sm:block",children:c.jsxs("table",{className:"w-full border-separate border-spacing-1 text-sm",children:[c.jsx("caption",{className:"sr-only",children:"Sample transcripts by major and class year. Majors marked “no audit” have no degree requirements on file."}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{className:"sticky left-0 z-10 w-24 bg-white dark:bg-neutral-900"}),Kn.map(_=>c.jsxs("th",{scope:"col",className:"px-1 pb-1 align-bottom",children:[c.jsx("span",{className:"block whitespace-nowrap text-xs font-semibold",children:_.short}),c.jsx("span",{className:`block whitespace-nowrap text-[10px] font-normal ${_.hasRequirements?"text-positive-600 dark:text-positive-400":"text-neutral-400 dark:text-neutral-500"}`,children:_.hasRequirements?"audit":"no audit"})]},_.slug))]})}),c.jsx("tbody",{children:ft.map(_=>c.jsxs("tr",{children:[c.jsx("th",{scope:"row",className:"sticky left-0 z-10 bg-white pr-2 text-right text-xs font-medium text-neutral-500 dark:bg-neutral-900",children:_.label}),Kn.map(Q=>{const B=Br(Q.slug,_.slug);if(!B)return c.jsx("td",{},Q.slug);const Y=B.id===a;return c.jsx("td",{className:"p-0",children:c.jsx("button",{type:"button",onClick:()=>J(B.id,B.text),"aria-current":Y?"true":void 0,"aria-label":`${Q.name}, ${_.label}${Q.hasRequirements?"":" (no degree audit available)"}`,className:`w-full whitespace-nowrap rounded border px-3 py-2 text-xs transition-colors hover:border-accent-600 ${Y?"border-accent-600 bg-accent-50 font-semibold dark:bg-accent-950/40":Q.hasRequirements?"border-positive-500/40 dark:border-positive-500/30":"border-dashed border-neutral-300 dark:border-neutral-700"}`,children:_.label})},Q.slug)})]},_.slug))})]})}),c.jsx("p",{className:"mt-3 hidden text-xs text-neutral-500 sm:block dark:text-neutral-400",children:"Solid columns have degree requirements on file and produce a full audit. Dashed ones do not — everything else works, but the audit page says so instead of guessing. Requirements are transcribed from the catalog by hand, one major at a time."}),c.jsx("p",{className:"mt-3 text-xs text-neutral-500 sm:hidden dark:text-neutral-400",children:"Majors marked “no audit” have no degree requirements on file — everything else works, but the audit page says so instead of guessing. Requirements are transcribed from the catalog by hand, one major at a time."}),c.jsx("p",{className:"mt-2 text-xs text-neutral-500 dark:text-neutral-400",children:"Each major is one invented student across four years, so later years contain everything the earlier ones do. Entirely synthetic; no real transcript is in this repository."})]}),m&&c.jsxs("section",{role:"alert",className:"rounded-lg border border-critical-300 bg-critical-50 p-4 text-sm text-critical-800 dark:border-critical-900 dark:bg-critical-950/40 dark:text-critical-200",children:[c.jsx("h2",{className:"font-semibold",children:"That did not work"}),c.jsx("p",{className:"mt-1",children:m}),c.jsx("p",{className:"mt-2 text-xs text-critical-700 dark:text-critical-300",children:"Nothing was kept and nothing was sent anywhere. Pick another file and try again, or use a sample above to see what the app does."})]}),c.jsxs("section",{className:"card space-y-2 text-sm",children:[c.jsx("h2",{className:"font-semibold",children:"Where your transcript goes"}),c.jsx("p",{className:"text-neutral-600 dark:text-neutral-300",children:"Nowhere. The PDF is read by JavaScript running in this tab. There is no server, no account and no upload — the file never leaves your device, and you can check that in your browser's network tab."}),c.jsx("p",{className:"text-neutral-600 dark:text-neutral-300",children:"The parsed result is kept in this browser's local storage so you do not have to re-upload every visit. That is the only copy that exists anywhere, and the button below deletes it."}),c.jsx("div",{className:"pt-1",children:c.jsx(X1,{onCleared:s})})]})]})}function b1({progress:a}){const S=(a==null?void 0:a.phase)==="parsing"?`Reading page ${a.page} of ${a.totalPages}…`:"Opening your transcript…";return c.jsxs("div",{role:"status",className:"flex min-h-11 items-center justify-center gap-3 text-sm text-neutral-600 dark:text-neutral-300",children:[c.jsx("span",{"aria-hidden":"true",className:"h-5 w-5 animate-spin rounded-full border-2 border-neutral-300 border-t-accent-700 dark:border-neutral-700 dark:border-t-accent-700"}),S]})}function eC({sampleId:a,onLoad:S}){const[s,m]=b.useState(()=>{const U=Kn.find(j=>ft.some(V=>{var J;return((J=Br(j.slug,V.slug))==null?void 0:J.id)===a}));return(U==null?void 0:U.slug)??Kn[0].slug}),[O,P]=b.useState(()=>{var U;return((U=ft.find(j=>{var V;return((V=Br(s,j.slug))==null?void 0:V.id)===a}))==null?void 0:U.slug)??ft[0].slug}),M=Kn.find(U=>U.slug===s)??Kn[0],f=Br(s,O),h=f!=null&&f.id===a;return c.jsxs("div",{className:"mt-4 space-y-3 sm:hidden",children:[c.jsxs("label",{className:"block",children:[c.jsx("span",{className:"label",children:"Major"}),c.jsx("select",{className:"select mt-1",value:s,onChange:U=>m(U.target.value),children:Kn.map(U=>c.jsxs("option",{value:U.slug,children:[U.name,U.hasRequirements?"":" (no audit)"]},U.slug))})]}),c.jsxs("label",{className:"block",children:[c.jsx("span",{className:"label",children:"Class year"}),c.jsx("select",{className:"select mt-1",value:O,onChange:U=>P(U.target.value),children:ft.map(U=>c.jsx("option",{value:U.slug,children:U.label},U.slug))})]}),c.jsx("button",{type:"button",className:"button w-full",disabled:!f||h,onClick:()=>f&&S(f.id,f.text),children:h?"Showing this sample":"Load this sample"}),c.jsx("p",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:M.hasRequirements?`${M.name} has degree requirements on file, so this one produces a full audit.`:`${M.name} has no degree requirements on file yet — everything works except the audit page, which says so instead of guessing.`})]})}const nC=b.lazy(()=>pt(()=>import("./Dashboard-Btd3o-8q.js"),__vite__mapDeps([0,1,2])).then(a=>({default:a.DashboardPage}))),tC=b.lazy(()=>pt(()=>import("./Planner-BdovDp6F.js"),__vite__mapDeps([3,2,4])).then(a=>({default:a.PlannerPage}))),rC=b.lazy(()=>pt(()=>import("./Schedule-DbuC2E9b.js"),__vite__mapDeps([5,1,4,2])).then(a=>({default:a.SchedulePage}))),iC=b.lazy(()=>pt(()=>import("./Requirements-Bp-DZWvj.js"),__vite__mapDeps([6,2,4])).then(a=>({default:a.RequirementsPage}))),Ql={dashboard:"Dashboard",requirements:"Requirements",schedule:"Schedule",planner:"Planner",upload:"Transcript"},lC=[{id:"dashboard",label:"Dashboard"},{id:"requirements",label:"Requirements"},{id:"schedule",label:"Schedule"},{id:"planner",label:"Planner"},{id:"upload",label:"Transcript"}];function oC(){var Y,oe,Re;const[a,S]=b.useState(null),[s,m]=b.useState(void 0),[O,P]=b.useState(!1),[M,f]=b.useState("upload"),[h,U]=b.useState(!1);b.useEffect(()=>{const Z=z1();if(Z.transcript){S(Z.transcript),m(Z.sampleId),f("dashboard");return}if(!Z.stale)return;const K=Iu(Z.sampleId);if(K){const Oe=cu(K.text);S(Oe),m(K.id),au(Oe,K.id),f("dashboard");return}P(!0)},[]);const j=b.useCallback((Z,K)=>{S(Z),m(K),P(!1),au(Z,K),f("dashboard")},[]),V=b.useCallback(Z=>{f(K=>((K==="requirements"||K==="planner")&&Z!==K&&!K1()&&($1(),U(!0)),Z))},[]),J=b.useCallback(()=>{Du(),S(null),m(void 0),f("upload")},[]),_=b.useMemo(()=>a?su(a):null,[a]),Q=b.useMemo(()=>a?Rt(a):null,[a]),B=!!(Q&&Q.statedGpa!==null&&!Q.ok);return c.jsxs("div",{className:"pad-safe-x mx-auto min-h-screen min-h-dvh max-w-4xl py-8",children:[c.jsxs("header",{className:"mb-4 flex flex-wrap items-start justify-between gap-3",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-2xl font-bold tracking-tight",children:["Terp",c.jsx("span",{className:"text-terp-red",children:"Tracker"})]}),c.jsxs("p",{className:"text-sm text-neutral-500 dark:text-neutral-400",children:[(a==null?void 0:a.major)??"Your transcript, your GPA, and what you need next"," — all in this tab."]})]}),(_==null?void 0:_.gpa)!=null&&c.jsxs("div",{className:"text-right",children:[c.jsxs("div",{className:`text-3xl font-bold tabular-nums ${B?"text-caution-600 dark:text-caution-400":""}`,children:[_.gpa.toFixed(3),B&&c.jsx("span",{className:"ml-1 align-top text-base",children:"⚠"})]}),c.jsxs("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:[_.earnedCredits," credits"]}),c.jsx(g1,{view:Ql[M],transcript:a,sampleId:s,className:"mt-1"})]})]}),c.jsxs("p",{className:"mb-4 rounded-lg border border-caution-400/60 bg-caution-50 px-3 py-2 text-sm text-caution-900 dark:border-caution-700/60 dark:bg-caution-950/30 dark:text-caution-200",children:[c.jsx("strong",{children:"Unofficial."})," Not affiliated with the University of Maryland. Confirm anything here with your advisor and your official degree audit before you register."]}),O&&c.jsxs("p",{role:"alert",className:"mb-4 rounded-lg border border-info-400/60 bg-info-50 px-3 py-2 text-sm text-info-900 dark:border-info-700/60 dark:bg-info-950/30 dark:text-info-200",children:[c.jsx("strong",{children:"TerpTracker got better at reading transcripts since you last used it."})," ","Your saved copy was read by the older version and would have shown requirements as unmet that you have actually finished, so it has been cleared. Drop your PDF in again to pick up the new checks — it only ever lived in this browser, so there is nothing to recover."]}),s&&c.jsxs("p",{className:"mb-4 rounded-lg border border-info-400/60 bg-info-50 px-3 py-2 text-sm text-info-900 dark:border-info-700/60 dark:bg-info-950/30 dark:text-info-200",children:["Sample data — an invented ",c.jsx("strong",{children:((Y=U1(s))==null?void 0:Y.name)??"demo"})," student, not your own record. Everything below is real behaviour on invented data; load your own transcript from the Transcript tab whenever you like."]}),B&&Q&&c.jsxs("p",{role:"alert",className:"mb-4 rounded-lg border border-caution-500 bg-caution-100 px-3 py-2 text-sm text-caution-900 dark:border-caution-600 dark:bg-caution-950/50 dark:text-caution-100",children:[c.jsx("strong",{children:"This GPA does not match your transcript."})," We compute"," ",(oe=Q.computedGpa)==null?void 0:oe.toFixed(3)," but your transcript prints ",(Re=Q.statedGpa)==null?void 0:Re.toFixed(3),", so something did not parse correctly. Treat every number here as unreliable until it agrees."]}),c.jsx("nav",{className:"mb-6 flex flex-wrap gap-1 border-b border-neutral-200 dark:border-neutral-800 sm:flex-nowrap",children:lC.map(({id:Z,label:K})=>c.jsx("button",{type:"button",onClick:()=>V(Z),disabled:Z!=="upload"&&!a,"aria-current":M===Z?"page":void 0,className:`-mb-px min-h-11 border-b-2 px-3 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-0 sm:px-4 ${M===Z?"border-accent-600 text-accent-700 dark:text-accent-400":"border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"}`,children:K},Z))}),c.jsx("main",{children:c.jsxs(b.Suspense,{fallback:c.jsx("p",{className:"text-sm text-neutral-500",children:"Loading…"}),children:[M==="upload"&&c.jsx(Z1,{sampleId:s,onParsed:j,onForget:J}),M==="dashboard"&&a&&c.jsx(nC,{transcript:a}),M==="requirements"&&a&&c.jsx(iC,{transcript:a,sampleId:s}),M==="schedule"&&a&&c.jsx(rC,{transcript:a}),M==="planner"&&a&&c.jsx(tC,{transcript:a})]})}),h&&c.jsxs("section",{className:"mt-8 rounded-lg border border-info-300 bg-info-50 p-4 dark:border-info-800 dark:bg-info-950/30",children:[c.jsxs("p",{className:"text-sm",children:[c.jsx("strong",{children:"Did this get it right?"})," A few taps would help — especially whether the GPA and the requirements matched your official records."]}),c.jsx(iu,{view:Ql[M],transcript:a,sampleId:s,startOpen:!0,onClose:()=>U(!1)}),c.jsx("button",{type:"button",className:"mt-2 text-xs text-neutral-500 underline decoration-dotted underline-offset-2",onClick:()=>U(!1),children:"No thanks"})]}),c.jsxs("footer",{className:"mt-12 border-t border-neutral-200 pt-4 text-xs text-neutral-500 dark:border-neutral-800",children:["Course data from api.umd.io, grades and ratings from PlanetTerp. Both are run by students and volunteers, and both are cached here rather than called on your behalf.",c.jsx("div",{className:"mt-2",children:c.jsx(iu,{view:Ql[M],transcript:a,sampleId:s})})]}),c.jsx(W1,{})]})}const hu=document.getElementById("root");if(!hu)throw new Error("missing #root");xd.createRoot(hu).render(c.jsx(b.StrictMode,{children:c.jsx(oC,{})}));export{uC as D,dC as E,iu as F,Zd as G,kr as P,g1 as S,AC as U,pt as _,Jd as a,IC as b,su as c,CC as d,cC as e,SC as f,sC as g,du as h,iA as i,c as j,tA as k,EC as l,GA as m,LA as p,b as r,Rt as s,nA as w};
