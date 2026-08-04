const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-B7U27mkT.js","assets/degree-BZiAsScj.js","assets/CourseLink-BddwOg7R.js","assets/Planner-DNfhMckK.js","assets/TopRated-DgBphYpJ.js","assets/Schedule-Lx4aVMQC.js","assets/Requirements-BTh1CZOY.js"])))=>i.map(i=>d[i]);
var GA=Object.defineProperty;var LA=(s,S,a)=>S in s?GA(s,S,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[S]=a;var Fl=(s,S,a)=>LA(s,typeof S!="symbol"?S+"":S,a);(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))m(O);new MutationObserver(O=>{for(const M of O)if(M.type==="childList")for(const R of M.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&m(R)}).observe(document,{childList:!0,subtree:!0});function a(O){const M={};return O.integrity&&(M.integrity=O.integrity),O.referrerPolicy&&(M.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?M.credentials="include":O.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function m(O){if(O.ep)return;O.ep=!0;const M=a(O);fetch(O.href,M)}})();var Bl={exports:{}},mt={},xl={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s;function UA(){if(_s)return q;_s=1;var s=Symbol.for("react.element"),S=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),R=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),D=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),V=Symbol.iterator;function J(C){return C===null||typeof C!="object"?null:(C=V&&C[V]||C["@@iterator"],typeof C=="function"?C:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,B={};function Y(C,p,$){this.props=C,this.context=p,this.refs=B,this.updater=$||_}Y.prototype.isReactComponent={},Y.prototype.setState=function(C,p){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,p,"setState")},Y.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function oe(){}oe.prototype=Y.prototype;function Re(C,p,$){this.props=C,this.context=p,this.refs=B,this.updater=$||_}var Z=Re.prototype=new oe;Z.constructor=Re,Q(Z,Y.prototype),Z.isPureReactComponent=!0;var K=Array.isArray,Oe=Object.prototype.hasOwnProperty,ae={current:null},Be={key:!0,ref:!0,__self:!0,__source:!0};function qe(C,p,$){var X,ne={},te=null,se=null;if(p!=null)for(X in p.ref!==void 0&&(se=p.ref),p.key!==void 0&&(te=""+p.key),p)Oe.call(p,X)&&!Be.hasOwnProperty(X)&&(ne[X]=p[X]);var ie=arguments.length-2;if(ie===1)ne.children=$;else if(1<ie){for(var de=Array(ie),Je=0;Je<ie;Je++)de[Je]=arguments[Je+2];ne.children=de}if(C&&C.defaultProps)for(X in ie=C.defaultProps,ie)ne[X]===void 0&&(ne[X]=ie[X]);return{$$typeof:s,type:C,key:te,ref:se,props:ne,_owner:ae.current}}function Un(C,p){return{$$typeof:s,type:C.type,key:p,ref:C.ref,props:C.props,_owner:C._owner}}function mn(C){return typeof C=="object"&&C!==null&&C.$$typeof===s}function $n(C){var p={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function($){return p[$]})}var dn=/\/+/g;function Qe(C,p){return typeof C=="object"&&C!==null&&C.key!=null?$n(""+C.key):p.toString(36)}function rn(C,p,$,X,ne){var te=typeof C;(te==="undefined"||te==="boolean")&&(C=null);var se=!1;if(C===null)se=!0;else switch(te){case"string":case"number":se=!0;break;case"object":switch(C.$$typeof){case s:case S:se=!0}}if(se)return se=C,ne=ne(se),C=X===""?"."+Qe(se,0):X,K(ne)?($="",C!=null&&($=C.replace(dn,"$&/")+"/"),rn(ne,p,$,"",function(Je){return Je})):ne!=null&&(mn(ne)&&(ne=Un(ne,$+(!ne.key||se&&se.key===ne.key?"":(""+ne.key).replace(dn,"$&/")+"/")+C)),p.push(ne)),1;if(se=0,X=X===""?".":X+":",K(C))for(var ie=0;ie<C.length;ie++){te=C[ie];var de=X+Qe(te,ie);se+=rn(te,p,$,de,ne)}else if(de=J(C),typeof de=="function")for(C=de.call(C),ie=0;!(te=C.next()).done;)te=te.value,de=X+Qe(te,ie++),se+=rn(te,p,$,de,ne);else if(te==="object")throw p=String(C),Error("Objects are not valid as a React child (found: "+(p==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":p)+"). If you meant to render a collection of children, use an array instead.");return se}function Cn(C,p,$){if(C==null)return C;var X=[],ne=0;return rn(C,X,"","",function(te){return p.call($,te,ne++)}),X}function xe(C){if(C._status===-1){var p=C._result;p=p(),p.then(function($){(C._status===0||C._status===-1)&&(C._status=1,C._result=$)},function($){(C._status===0||C._status===-1)&&(C._status=2,C._result=$)}),C._status===-1&&(C._status=0,C._result=p)}if(C._status===1)return C._result.default;throw C._result}var Ie={current:null},U={transition:null},W={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:U,ReactCurrentOwner:ae};function y(){throw Error("act(...) is not supported in production builds of React.")}return q.Children={map:Cn,forEach:function(C,p,$){Cn(C,function(){p.apply(this,arguments)},$)},count:function(C){var p=0;return Cn(C,function(){p++}),p},toArray:function(C){return Cn(C,function(p){return p})||[]},only:function(C){if(!mn(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},q.Component=Y,q.Fragment=a,q.Profiler=O,q.PureComponent=Re,q.StrictMode=m,q.Suspense=g,q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,q.act=y,q.cloneElement=function(C,p,$){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var X=Q({},C.props),ne=C.key,te=C.ref,se=C._owner;if(p!=null){if(p.ref!==void 0&&(te=p.ref,se=ae.current),p.key!==void 0&&(ne=""+p.key),C.type&&C.type.defaultProps)var ie=C.type.defaultProps;for(de in p)Oe.call(p,de)&&!Be.hasOwnProperty(de)&&(X[de]=p[de]===void 0&&ie!==void 0?ie[de]:p[de])}var de=arguments.length-2;if(de===1)X.children=$;else if(1<de){ie=Array(de);for(var Je=0;Je<de;Je++)ie[Je]=arguments[Je+2];X.children=ie}return{$$typeof:s,type:C.type,key:ne,ref:te,props:X,_owner:se}},q.createContext=function(C){return C={$$typeof:R,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:M,_context:C},C.Consumer=C},q.createElement=qe,q.createFactory=function(C){var p=qe.bind(null,C);return p.type=C,p},q.createRef=function(){return{current:null}},q.forwardRef=function(C){return{$$typeof:f,render:C}},q.isValidElement=mn,q.lazy=function(C){return{$$typeof:j,_payload:{_status:-1,_result:C},_init:xe}},q.memo=function(C,p){return{$$typeof:D,type:C,compare:p===void 0?null:p}},q.startTransition=function(C){var p=U.transition;U.transition={};try{C()}finally{U.transition=p}},q.unstable_act=y,q.useCallback=function(C,p){return Ie.current.useCallback(C,p)},q.useContext=function(C){return Ie.current.useContext(C)},q.useDebugValue=function(){},q.useDeferredValue=function(C){return Ie.current.useDeferredValue(C)},q.useEffect=function(C,p){return Ie.current.useEffect(C,p)},q.useId=function(){return Ie.current.useId()},q.useImperativeHandle=function(C,p,$){return Ie.current.useImperativeHandle(C,p,$)},q.useInsertionEffect=function(C,p){return Ie.current.useInsertionEffect(C,p)},q.useLayoutEffect=function(C,p){return Ie.current.useLayoutEffect(C,p)},q.useMemo=function(C,p){return Ie.current.useMemo(C,p)},q.useReducer=function(C,p,$){return Ie.current.useReducer(C,p,$)},q.useRef=function(C){return Ie.current.useRef(C)},q.useState=function(C){return Ie.current.useState(C)},q.useSyncExternalStore=function(C,p,$){return Ie.current.useSyncExternalStore(C,p,$)},q.useTransition=function(){return Ie.current.useTransition()},q.version="18.3.1",q}var Qs;function jl(){return Qs||(Qs=1,xl.exports=UA()),xl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Js;function DA(){if(Js)return mt;Js=1;var s=jl(),S=Symbol.for("react.element"),a=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,O=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function R(f,g,D){var j,V={},J=null,_=null;D!==void 0&&(J=""+D),g.key!==void 0&&(J=""+g.key),g.ref!==void 0&&(_=g.ref);for(j in g)m.call(g,j)&&!M.hasOwnProperty(j)&&(V[j]=g[j]);if(f&&f.defaultProps)for(j in g=f.defaultProps,g)V[j]===void 0&&(V[j]=g[j]);return{$$typeof:S,type:f,key:J,ref:_,props:V,_owner:O.current}}return mt.Fragment=a,mt.jsx=R,mt.jsxs=R,mt}var Ws;function hA(){return Ws||(Ws=1,Bl.exports=DA()),Bl.exports}var c=hA(),b=jl(),yr={},Yl={exports:{}},_e={},wl={exports:{}},kl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs;function gA(){return zs||(zs=1,(function(s){function S(U,W){var y=U.length;U.push(W);e:for(;0<y;){var C=y-1>>>1,p=U[C];if(0<O(p,W))U[C]=W,U[y]=p,y=C;else break e}}function a(U){return U.length===0?null:U[0]}function m(U){if(U.length===0)return null;var W=U[0],y=U.pop();if(y!==W){U[0]=y;e:for(var C=0,p=U.length,$=p>>>1;C<$;){var X=2*(C+1)-1,ne=U[X],te=X+1,se=U[te];if(0>O(ne,y))te<p&&0>O(se,ne)?(U[C]=se,U[te]=y,C=te):(U[C]=ne,U[X]=y,C=X);else if(te<p&&0>O(se,y))U[C]=se,U[te]=y,C=te;else break e}}return W}function O(U,W){var y=U.sortIndex-W.sortIndex;return y!==0?y:U.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var M=performance;s.unstable_now=function(){return M.now()}}else{var R=Date,f=R.now();s.unstable_now=function(){return R.now()-f}}var g=[],D=[],j=1,V=null,J=3,_=!1,Q=!1,B=!1,Y=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,Re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(U){for(var W=a(D);W!==null;){if(W.callback===null)m(D);else if(W.startTime<=U)m(D),W.sortIndex=W.expirationTime,S(g,W);else break;W=a(D)}}function K(U){if(B=!1,Z(U),!Q)if(a(g)!==null)Q=!0,xe(Oe);else{var W=a(D);W!==null&&Ie(K,W.startTime-U)}}function Oe(U,W){Q=!1,B&&(B=!1,oe(qe),qe=-1),_=!0;var y=J;try{for(Z(W),V=a(g);V!==null&&(!(V.expirationTime>W)||U&&!$n());){var C=V.callback;if(typeof C=="function"){V.callback=null,J=V.priorityLevel;var p=C(V.expirationTime<=W);W=s.unstable_now(),typeof p=="function"?V.callback=p:V===a(g)&&m(g),Z(W)}else m(g);V=a(g)}if(V!==null)var $=!0;else{var X=a(D);X!==null&&Ie(K,X.startTime-W),$=!1}return $}finally{V=null,J=y,_=!1}}var ae=!1,Be=null,qe=-1,Un=5,mn=-1;function $n(){return!(s.unstable_now()-mn<Un)}function dn(){if(Be!==null){var U=s.unstable_now();mn=U;var W=!0;try{W=Be(!0,U)}finally{W?Qe():(ae=!1,Be=null)}}else ae=!1}var Qe;if(typeof Re=="function")Qe=function(){Re(dn)};else if(typeof MessageChannel<"u"){var rn=new MessageChannel,Cn=rn.port2;rn.port1.onmessage=dn,Qe=function(){Cn.postMessage(null)}}else Qe=function(){Y(dn,0)};function xe(U){Be=U,ae||(ae=!0,Qe())}function Ie(U,W){qe=Y(function(){U(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_continueExecution=function(){Q||_||(Q=!0,xe(Oe))},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Un=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return J},s.unstable_getFirstCallbackNode=function(){return a(g)},s.unstable_next=function(U){switch(J){case 1:case 2:case 3:var W=3;break;default:W=J}var y=J;J=W;try{return U()}finally{J=y}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var y=J;J=U;try{return W()}finally{J=y}},s.unstable_scheduleCallback=function(U,W,y){var C=s.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?C+y:C):y=C,U){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=y+p,U={id:j++,callback:W,priorityLevel:U,startTime:y,expirationTime:p,sortIndex:-1},y>C?(U.sortIndex=y,S(D,U),a(g)===null&&U===a(D)&&(B?(oe(qe),qe=-1):B=!0,Ie(K,y-C))):(U.sortIndex=p,S(g,U),Q||_||(Q=!0,xe(Oe))),U},s.unstable_shouldYield=$n,s.unstable_wrapCallback=function(U){var W=J;return function(){var y=J;J=W;try{return U.apply(this,arguments)}finally{J=y}}}})(kl)),kl}var Ks;function vA(){return Ks||(Ks=1,wl.exports=gA()),wl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $s;function yA(){if($s)return _e;$s=1;var s=jl(),S=vA();function a(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,O={};function M(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(O[e]=n,e=0;e<n.length;e++)m.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,D=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j={},V={};function J(e){return g.call(V,e)?!0:g.call(j,e)?!1:D.test(e)?V[e]=!0:(j[e]=!0,!1)}function _(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q(e,n,t,r){if(n===null||typeof n>"u"||_(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function B(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Y[n]=new B(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function Re(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(oe,Re);Y[n]=new B(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(oe,Re);Y[n]=new B(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(oe,Re);Y[n]=new B(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function Z(e,n,t,r){var i=Y.hasOwnProperty(n)?Y[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Q(n,t,i,r)&&(t=null),r||i===null?J(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var K=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),ae=Symbol.for("react.portal"),Be=Symbol.for("react.fragment"),qe=Symbol.for("react.strict_mode"),Un=Symbol.for("react.profiler"),mn=Symbol.for("react.provider"),$n=Symbol.for("react.context"),dn=Symbol.for("react.forward_ref"),Qe=Symbol.for("react.suspense"),rn=Symbol.for("react.suspense_list"),Cn=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),Ie=Symbol.for("react.offscreen"),U=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var y=Object.assign,C;function p(e){if(C===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);C=n&&n[1]||""}return`
`+C+e}var $=!1;function X(e,n){if(!e||$)return"";$=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(N){var r=N}Reflect.construct(e,[],n)}else{try{n.call()}catch(N){r=N}e.call(n.prototype)}else{try{throw Error()}catch(N){r=N}e()}}catch(N){if(N&&r&&typeof N.stack=="string"){for(var i=N.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var A=`
`+i[o].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=o&&0<=u);break}}}finally{$=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?p(e):""}function ne(e){switch(e.tag){case 5:return p(e.type);case 16:return p("Lazy");case 13:return p("Suspense");case 19:return p("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Be:return"Fragment";case ae:return"Portal";case Un:return"Profiler";case qe:return"StrictMode";case Qe:return"Suspense";case rn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $n:return(e.displayName||"Context")+".Consumer";case mn:return(e._context.displayName||"Context")+".Provider";case dn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cn:return n=e.displayName||null,n!==null?n:te(e.type)||"Memo";case xe:n=e._payload,e=e._init;try{return te(e(n))}catch{}}return null}function se(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(n);case 8:return n===qe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e){var n=de(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pt(e){e._valueTracker||(e._valueTracker=Je(e))}function Kl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=de(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Pt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jr(e,n){var t=n.checked;return y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function $l(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ie(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ql(e,n){n=n.checked,n!=null&&Z(e,"checked",n,!1)}function _r(e,n){ql(e,n);var t=ie(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Qr(e,n.type,t):n.hasOwnProperty("defaultValue")&&Qr(e,n.type,ie(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Xl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Qr(e,n,t){(n!=="number"||Pt(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var H0=Array.isArray;function u0(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ie(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Jr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(a(91));return y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(a(92));if(H0(t)){if(1<t.length)throw Error(a(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ie(t)}}function bl(e,n){var t=ie(n.value),r=ie(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function eo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function no(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?no(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mt,to=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Mt=Mt||document.createElement("div"),Mt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Mt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function F0(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var B0={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hu=["Webkit","ms","Moz","O"];Object.keys(B0).forEach(function(e){hu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),B0[n]=B0[e]})});function ro(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||B0.hasOwnProperty(e)&&B0[e]?(""+n).trim():n+"px"}function io(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=ro(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var gu=y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zr(e,n){if(n){if(gu[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(a(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(n.style!=null&&typeof n.style!="object")throw Error(a(62))}}function Kr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $r=null;function qr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xr=null,S0=null,A0=null;function lo(e){if(e=it(e)){if(typeof Xr!="function")throw Error(a(280));var n=e.stateNode;n&&(n=Kt(n),Xr(e.stateNode,e.type,n))}}function oo(e){S0?A0?A0.push(e):A0=[e]:S0=e}function ao(){if(S0){var e=S0,n=A0;if(A0=S0=null,lo(e),n)for(e=0;e<n.length;e++)lo(n[e])}}function so(e,n){return e(n)}function uo(){}var Zr=!1;function So(e,n,t){if(Zr)return e(n,t);Zr=!0;try{return so(e,n,t)}finally{Zr=!1,(S0!==null||A0!==null)&&(uo(),ao())}}function x0(e,n){var t=e.stateNode;if(t===null)return null;var r=Kt(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var br=!1;if(f)try{var Y0={};Object.defineProperty(Y0,"passive",{get:function(){br=!0}}),window.addEventListener("test",Y0,Y0),window.removeEventListener("test",Y0,Y0)}catch{br=!1}function vu(e,n,t,r,i,l,o,u,A){var N=Array.prototype.slice.call(arguments,3);try{n.apply(t,N)}catch(P){this.onError(P)}}var w0=!1,Gt=null,Lt=!1,ei=null,yu={onError:function(e){w0=!0,Gt=e}};function Hu(e,n,t,r,i,l,o,u,A){w0=!1,Gt=null,vu.apply(yu,arguments)}function Fu(e,n,t,r,i,l,o,u,A){if(Hu.apply(this,arguments),w0){if(w0){var N=Gt;w0=!1,Gt=null}else throw Error(a(198));Lt||(Lt=!0,ei=N)}}function qn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ao(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Co(e){if(qn(e)!==e)throw Error(a(188))}function Bu(e){var n=e.alternate;if(!n){if(n=qn(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Co(i),e;if(l===r)return Co(i),n;l=l.sibling}throw Error(a(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function co(e){return e=Bu(e),e!==null?Eo(e):null}function Eo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Eo(e);if(n!==null)return n;e=e.sibling}return null}var Io=S.unstable_scheduleCallback,No=S.unstable_cancelCallback,xu=S.unstable_shouldYield,Yu=S.unstable_requestPaint,me=S.unstable_now,wu=S.unstable_getCurrentPriorityLevel,ni=S.unstable_ImmediatePriority,Oo=S.unstable_UserBlockingPriority,Ut=S.unstable_NormalPriority,ku=S.unstable_LowPriority,mo=S.unstable_IdlePriority,Dt=null,cn=null;function Vu(e){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Dt,e,void 0,(e.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:Qu,ju=Math.log,_u=Math.LN2;function Qu(e){return e>>>=0,e===0?32:31-(ju(e)/_u|0)|0}var ht=64,gt=4194304;function k0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vt(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=k0(u):(l&=o,l!==0&&(r=k0(l)))}else o=t&~i,o!==0?r=k0(o):l!==0&&(r=k0(l));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-ln(n),i=1<<t,r|=e[t],n&=~i;return r}function Ju(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wu(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-ln(l),u=1<<o,A=i[o];A===-1?((u&t)===0||(u&r)!==0)&&(i[o]=Ju(u,n)):A<=n&&(e.expiredLanes|=u),l&=~u}}function ti(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fo(){var e=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),e}function ri(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function V0(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-ln(n),e[n]=t}function zu(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-ln(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function ii(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-ln(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var le=0;function To(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ro,li,po,Po,Mo,oi=!1,yt=[],Dn=null,hn=null,gn=null,j0=new Map,_0=new Map,vn=[],Ku="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Go(e,n){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":j0.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_0.delete(n.pointerId)}}function Q0(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=it(n),n!==null&&li(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function $u(e,n,t,r,i){switch(n){case"focusin":return Dn=Q0(Dn,e,n,t,r,i),!0;case"dragenter":return hn=Q0(hn,e,n,t,r,i),!0;case"mouseover":return gn=Q0(gn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return j0.set(l,Q0(j0.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,_0.set(l,Q0(_0.get(l)||null,e,n,t,r,i)),!0}return!1}function Lo(e){var n=Xn(e.target);if(n!==null){var t=qn(n);if(t!==null){if(n=t.tag,n===13){if(n=Ao(t),n!==null){e.blockedOn=n,Mo(e.priority,function(){po(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ht(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=si(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);$r=r,t.target.dispatchEvent(r),$r=null}else return n=it(t),n!==null&&li(n),e.blockedOn=t,!1;n.shift()}return!0}function Uo(e,n,t){Ht(e)&&t.delete(n)}function qu(){oi=!1,Dn!==null&&Ht(Dn)&&(Dn=null),hn!==null&&Ht(hn)&&(hn=null),gn!==null&&Ht(gn)&&(gn=null),j0.forEach(Uo),_0.forEach(Uo)}function J0(e,n){e.blockedOn===n&&(e.blockedOn=null,oi||(oi=!0,S.unstable_scheduleCallback(S.unstable_NormalPriority,qu)))}function W0(e){function n(i){return J0(i,e)}if(0<yt.length){J0(yt[0],e);for(var t=1;t<yt.length;t++){var r=yt[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Dn!==null&&J0(Dn,e),hn!==null&&J0(hn,e),gn!==null&&J0(gn,e),j0.forEach(n),_0.forEach(n),t=0;t<vn.length;t++)r=vn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(t=vn[0],t.blockedOn===null);)Lo(t),t.blockedOn===null&&vn.shift()}var d0=K.ReactCurrentBatchConfig,Ft=!0;function Xu(e,n,t,r){var i=le,l=d0.transition;d0.transition=null;try{le=1,ai(e,n,t,r)}finally{le=i,d0.transition=l}}function Zu(e,n,t,r){var i=le,l=d0.transition;d0.transition=null;try{le=4,ai(e,n,t,r)}finally{le=i,d0.transition=l}}function ai(e,n,t,r){if(Ft){var i=si(e,n,t,r);if(i===null)Mi(e,n,r,Bt,t),Go(e,r);else if($u(i,e,n,t,r))r.stopPropagation();else if(Go(e,r),n&4&&-1<Ku.indexOf(e)){for(;i!==null;){var l=it(i);if(l!==null&&Ro(l),l=si(e,n,t,r),l===null&&Mi(e,n,r,Bt,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Mi(e,n,r,null,t)}}var Bt=null;function si(e,n,t,r){if(Bt=null,e=qr(r),e=Xn(e),e!==null)if(n=qn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ao(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Bt=e,null}function Do(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wu()){case ni:return 1;case Oo:return 4;case Ut:case ku:return 16;case mo:return 536870912;default:return 16}default:return 16}}var yn=null,ui=null,xt=null;function ho(){if(xt)return xt;var e,n=ui,t=n.length,r,i="value"in yn?yn.value:yn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return xt=i.slice(e,1<r?1-r:void 0)}function Yt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wt(){return!0}function go(){return!1}function We(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?wt:go,this.isPropagationStopped=go,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wt)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wt)},persist:function(){},isPersistent:wt}),n}var C0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Si=We(C0),z0=y({},C0,{view:0,detail:0}),bu=We(z0),Ai,di,K0,kt=y({},z0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ci,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==K0&&(K0&&e.type==="mousemove"?(Ai=e.screenX-K0.screenX,di=e.screenY-K0.screenY):di=Ai=0,K0=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:di}}),vo=We(kt),eS=y({},kt,{dataTransfer:0}),nS=We(eS),tS=y({},z0,{relatedTarget:0}),Ci=We(tS),rS=y({},C0,{animationName:0,elapsedTime:0,pseudoElement:0}),iS=We(rS),lS=y({},C0,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oS=We(lS),aS=y({},C0,{data:0}),yo=We(aS),sS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=SS[e])?!!n[e]:!1}function ci(){return AS}var dS=y({},z0,{key:function(e){if(e.key){var n=sS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ci,charCode:function(e){return e.type==="keypress"?Yt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),CS=We(dS),cS=y({},kt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ho=We(cS),ES=y({},z0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ci}),IS=We(ES),NS=y({},C0,{propertyName:0,elapsedTime:0,pseudoElement:0}),OS=We(NS),mS=y({},kt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fS=We(mS),TS=[9,13,27,32],Ei=f&&"CompositionEvent"in window,$0=null;f&&"documentMode"in document&&($0=document.documentMode);var RS=f&&"TextEvent"in window&&!$0,Fo=f&&(!Ei||$0&&8<$0&&11>=$0),Bo=" ",xo=!1;function Yo(e,n){switch(e){case"keyup":return TS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var c0=!1;function pS(e,n){switch(e){case"compositionend":return wo(n);case"keypress":return n.which!==32?null:(xo=!0,Bo);case"textInput":return e=n.data,e===Bo&&xo?null:e;default:return null}}function PS(e,n){if(c0)return e==="compositionend"||!Ei&&Yo(e,n)?(e=ho(),xt=ui=yn=null,c0=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fo&&n.locale!=="ko"?null:n.data;default:return null}}var MS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ko(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!MS[e.type]:n==="textarea"}function Vo(e,n,t,r){oo(r),n=Jt(n,"onChange"),0<n.length&&(t=new Si("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var q0=null,X0=null;function GS(e){la(e,0)}function Vt(e){var n=m0(e);if(Kl(n))return e}function LS(e,n){if(e==="change")return n}var jo=!1;if(f){var Ii;if(f){var Ni="oninput"in document;if(!Ni){var _o=document.createElement("div");_o.setAttribute("oninput","return;"),Ni=typeof _o.oninput=="function"}Ii=Ni}else Ii=!1;jo=Ii&&(!document.documentMode||9<document.documentMode)}function Qo(){q0&&(q0.detachEvent("onpropertychange",Jo),X0=q0=null)}function Jo(e){if(e.propertyName==="value"&&Vt(X0)){var n=[];Vo(n,X0,e,qr(e)),So(GS,n)}}function US(e,n,t){e==="focusin"?(Qo(),q0=n,X0=t,q0.attachEvent("onpropertychange",Jo)):e==="focusout"&&Qo()}function DS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vt(X0)}function hS(e,n){if(e==="click")return Vt(n)}function gS(e,n){if(e==="input"||e==="change")return Vt(n)}function vS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var on=typeof Object.is=="function"?Object.is:vS;function Z0(e,n){if(on(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!g.call(n,i)||!on(e[i],n[i]))return!1}return!0}function Wo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zo(e,n){var t=Wo(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Wo(t)}}function Ko(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ko(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $o(){for(var e=window,n=Pt();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Pt(e.document)}return n}function Oi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function yS(e){var n=$o(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ko(t.ownerDocument.documentElement,t)){if(r!==null&&Oi(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=zo(t,l);var o=zo(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var HS=f&&"documentMode"in document&&11>=document.documentMode,E0=null,mi=null,b0=null,fi=!1;function qo(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fi||E0==null||E0!==Pt(r)||(r=E0,"selectionStart"in r&&Oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),b0&&Z0(b0,r)||(b0=r,r=Jt(mi,"onSelect"),0<r.length&&(n=new Si("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=E0)))}function jt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var I0={animationend:jt("Animation","AnimationEnd"),animationiteration:jt("Animation","AnimationIteration"),animationstart:jt("Animation","AnimationStart"),transitionend:jt("Transition","TransitionEnd")},Ti={},Xo={};f&&(Xo=document.createElement("div").style,"AnimationEvent"in window||(delete I0.animationend.animation,delete I0.animationiteration.animation,delete I0.animationstart.animation),"TransitionEvent"in window||delete I0.transitionend.transition);function _t(e){if(Ti[e])return Ti[e];if(!I0[e])return e;var n=I0[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Xo)return Ti[e]=n[t];return e}var Zo=_t("animationend"),bo=_t("animationiteration"),ea=_t("animationstart"),na=_t("transitionend"),ta=new Map,ra="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(e,n){ta.set(e,n),M(n,[e])}for(var Ri=0;Ri<ra.length;Ri++){var pi=ra[Ri],FS=pi.toLowerCase(),BS=pi[0].toUpperCase()+pi.slice(1);Hn(FS,"on"+BS)}Hn(Zo,"onAnimationEnd"),Hn(bo,"onAnimationIteration"),Hn(ea,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(na,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),M("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),M("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),M("onBeforeInput",["compositionend","keypress","textInput","paste"]),M("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var et="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("cancel close invalid load scroll toggle".split(" ").concat(et));function ia(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Fu(r,n,void 0,e),e.currentTarget=null}function la(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],A=u.instance,N=u.currentTarget;if(u=u.listener,A!==l&&i.isPropagationStopped())break e;ia(i,u,N),l=A}else for(o=0;o<r.length;o++){if(u=r[o],A=u.instance,N=u.currentTarget,u=u.listener,A!==l&&i.isPropagationStopped())break e;ia(i,u,N),l=A}}}if(Lt)throw e=ei,Lt=!1,ei=null,e}function Se(e,n){var t=n[gi];t===void 0&&(t=n[gi]=new Set);var r=e+"__bubble";t.has(r)||(oa(n,e,2,!1),t.add(r))}function Pi(e,n,t){var r=0;n&&(r|=4),oa(t,e,r,n)}var Qt="_reactListening"+Math.random().toString(36).slice(2);function nt(e){if(!e[Qt]){e[Qt]=!0,m.forEach(function(t){t!=="selectionchange"&&(xS.has(t)||Pi(t,!1,e),Pi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Qt]||(n[Qt]=!0,Pi("selectionchange",!1,n))}}function oa(e,n,t,r){switch(Do(n)){case 1:var i=Xu;break;case 4:i=Zu;break;default:i=ai}t=i.bind(null,n,t,e),i=void 0,!br||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Mi(e,n,t,r,i){var l=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var A=o.tag;if((A===3||A===4)&&(A=o.stateNode.containerInfo,A===i||A.nodeType===8&&A.parentNode===i))return;o=o.return}for(;u!==null;){if(o=Xn(u),o===null)return;if(A=o.tag,A===5||A===6){r=l=o;continue e}u=u.parentNode}}r=r.return}So(function(){var N=l,P=qr(t),G=[];e:{var T=ta.get(e);if(T!==void 0){var h=Si,H=e;switch(e){case"keypress":if(Yt(t)===0)break e;case"keydown":case"keyup":h=CS;break;case"focusin":H="focus",h=Ci;break;case"focusout":H="blur",h=Ci;break;case"beforeblur":case"afterblur":h=Ci;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=nS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=IS;break;case Zo:case bo:case ea:h=iS;break;case na:h=OS;break;case"scroll":h=bu;break;case"wheel":h=fS;break;case"copy":case"cut":case"paste":h=oS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ho}var F=(n&4)!==0,fe=!F&&e==="scroll",E=F?T!==null?T+"Capture":null:T;F=[];for(var d=N,I;d!==null;){I=d;var L=I.stateNode;if(I.tag===5&&L!==null&&(I=L,E!==null&&(L=x0(d,E),L!=null&&F.push(tt(d,L,I)))),fe)break;d=d.return}0<F.length&&(T=new h(T,H,null,t,P),G.push({event:T,listeners:F}))}}if((n&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",T&&t!==$r&&(H=t.relatedTarget||t.fromElement)&&(Xn(H)||H[fn]))break e;if((h||T)&&(T=P.window===P?P:(T=P.ownerDocument)?T.defaultView||T.parentWindow:window,h?(H=t.relatedTarget||t.toElement,h=N,H=H?Xn(H):null,H!==null&&(fe=qn(H),H!==fe||H.tag!==5&&H.tag!==6)&&(H=null)):(h=null,H=N),h!==H)){if(F=vo,L="onMouseLeave",E="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(F=Ho,L="onPointerLeave",E="onPointerEnter",d="pointer"),fe=h==null?T:m0(h),I=H==null?T:m0(H),T=new F(L,d+"leave",h,t,P),T.target=fe,T.relatedTarget=I,L=null,Xn(P)===N&&(F=new F(E,d+"enter",H,t,P),F.target=I,F.relatedTarget=fe,L=F),fe=L,h&&H)n:{for(F=h,E=H,d=0,I=F;I;I=N0(I))d++;for(I=0,L=E;L;L=N0(L))I++;for(;0<d-I;)F=N0(F),d--;for(;0<I-d;)E=N0(E),I--;for(;d--;){if(F===E||E!==null&&F===E.alternate)break n;F=N0(F),E=N0(E)}F=null}else F=null;h!==null&&aa(G,T,h,F,!1),H!==null&&fe!==null&&aa(G,fe,H,F,!0)}}e:{if(T=N?m0(N):window,h=T.nodeName&&T.nodeName.toLowerCase(),h==="select"||h==="input"&&T.type==="file")var x=LS;else if(ko(T))if(jo)x=gS;else{x=DS;var w=US}else(h=T.nodeName)&&h.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(x=hS);if(x&&(x=x(e,N))){Vo(G,x,t,P);break e}w&&w(e,T,N),e==="focusout"&&(w=T._wrapperState)&&w.controlled&&T.type==="number"&&Qr(T,"number",T.value)}switch(w=N?m0(N):window,e){case"focusin":(ko(w)||w.contentEditable==="true")&&(E0=w,mi=N,b0=null);break;case"focusout":b0=mi=E0=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,qo(G,t,P);break;case"selectionchange":if(HS)break;case"keydown":case"keyup":qo(G,t,P)}var k;if(Ei)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else c0?Yo(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(Fo&&t.locale!=="ko"&&(c0||z!=="onCompositionStart"?z==="onCompositionEnd"&&c0&&(k=ho()):(yn=P,ui="value"in yn?yn.value:yn.textContent,c0=!0)),w=Jt(N,z),0<w.length&&(z=new yo(z,e,null,t,P),G.push({event:z,listeners:w}),k?z.data=k:(k=wo(t),k!==null&&(z.data=k)))),(k=RS?pS(e,t):PS(e,t))&&(N=Jt(N,"onBeforeInput"),0<N.length&&(P=new yo("onBeforeInput","beforeinput",null,t,P),G.push({event:P,listeners:N}),P.data=k))}la(G,n)})}function tt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Jt(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=x0(e,t),l!=null&&r.unshift(tt(e,l,i)),l=x0(e,n),l!=null&&r.push(tt(e,l,i))),e=e.return}return r}function N0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function aa(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,A=u.alternate,N=u.stateNode;if(A!==null&&A===r)break;u.tag===5&&N!==null&&(u=N,i?(A=x0(t,l),A!=null&&o.unshift(tt(t,A,u))):i||(A=x0(t,l),A!=null&&o.push(tt(t,A,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var YS=/\r\n?/g,wS=/\u0000|\uFFFD/g;function sa(e){return(typeof e=="string"?e:""+e).replace(YS,`
`).replace(wS,"")}function Wt(e,n,t){if(n=sa(n),sa(e)!==n&&t)throw Error(a(425))}function zt(){}var Gi=null,Li=null;function Ui(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Di=typeof setTimeout=="function"?setTimeout:void 0,kS=typeof clearTimeout=="function"?clearTimeout:void 0,ua=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof ua<"u"?function(e){return ua.resolve(null).then(e).catch(jS)}:Di;function jS(e){setTimeout(function(){throw e})}function hi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),W0(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);W0(n)}function Fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Sa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var O0=Math.random().toString(36).slice(2),En="__reactFiber$"+O0,rt="__reactProps$"+O0,fn="__reactContainer$"+O0,gi="__reactEvents$"+O0,_S="__reactListeners$"+O0,QS="__reactHandles$"+O0;function Xn(e){var n=e[En];if(n)return n;for(var t=e.parentNode;t;){if(n=t[fn]||t[En]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Sa(e);e!==null;){if(t=e[En])return t;e=Sa(e)}return n}e=t,t=e.parentNode}return null}function it(e){return e=e[En]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function m0(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Kt(e){return e[rt]||null}var vi=[],f0=-1;function Bn(e){return{current:e}}function Ae(e){0>f0||(e.current=vi[f0],vi[f0]=null,f0--)}function ue(e,n){f0++,vi[f0]=e.current,e.current=n}var xn={},he=Bn(xn),Ye=Bn(!1),Zn=xn;function T0(e,n){var t=e.type.contextTypes;if(!t)return xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function $t(){Ae(Ye),Ae(he)}function Aa(e,n,t){if(he.current!==xn)throw Error(a(168));ue(he,n),ue(Ye,t)}function da(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(a(108,se(e)||"Unknown",i));return y({},t,r)}function qt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Zn=he.current,ue(he,e),ue(Ye,Ye.current),!0}function Ca(e,n,t){var r=e.stateNode;if(!r)throw Error(a(169));t?(e=da(e,n,Zn),r.__reactInternalMemoizedMergedChildContext=e,Ae(Ye),Ae(he),ue(he,e)):Ae(Ye),ue(Ye,t)}var Tn=null,Xt=!1,yi=!1;function ca(e){Tn===null?Tn=[e]:Tn.push(e)}function JS(e){Xt=!0,ca(e)}function Yn(){if(!yi&&Tn!==null){yi=!0;var e=0,n=le;try{var t=Tn;for(le=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Tn=null,Xt=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(e+1)),Io(ni,Yn),i}finally{le=n,yi=!1}}return null}var R0=[],p0=0,Zt=null,bt=0,Xe=[],Ze=0,bn=null,Rn=1,pn="";function e0(e,n){R0[p0++]=bt,R0[p0++]=Zt,Zt=e,bt=n}function Ea(e,n,t){Xe[Ze++]=Rn,Xe[Ze++]=pn,Xe[Ze++]=bn,bn=e;var r=Rn;e=pn;var i=32-ln(r)-1;r&=~(1<<i),t+=1;var l=32-ln(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-ln(n)+i|t<<i|r,pn=l+e}else Rn=1<<l|t<<i|r,pn=e}function Hi(e){e.return!==null&&(e0(e,1),Ea(e,1,0))}function Fi(e){for(;e===Zt;)Zt=R0[--p0],R0[p0]=null,bt=R0[--p0],R0[p0]=null;for(;e===bn;)bn=Xe[--Ze],Xe[Ze]=null,pn=Xe[--Ze],Xe[Ze]=null,Rn=Xe[--Ze],Xe[Ze]=null}var ze=null,Ke=null,Ce=!1,an=null;function Ia(e,n){var t=tn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Na(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ze=e,Ke=Fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ze=e,Ke=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=bn!==null?{id:Rn,overflow:pn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=tn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ze=e,Ke=null,!0):!1;default:return!1}}function Bi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xi(e){if(Ce){var n=Ke;if(n){var t=n;if(!Na(e,n)){if(Bi(e))throw Error(a(418));n=Fn(t.nextSibling);var r=ze;n&&Na(e,n)?Ia(r,t):(e.flags=e.flags&-4097|2,Ce=!1,ze=e)}}else{if(Bi(e))throw Error(a(418));e.flags=e.flags&-4097|2,Ce=!1,ze=e}}}function Oa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function er(e){if(e!==ze)return!1;if(!Ce)return Oa(e),Ce=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ui(e.type,e.memoizedProps)),n&&(n=Ke)){if(Bi(e))throw ma(),Error(a(418));for(;n;)Ia(e,n),n=Fn(n.nextSibling)}if(Oa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ke=Fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ke=null}}else Ke=ze?Fn(e.stateNode.nextSibling):null;return!0}function ma(){for(var e=Ke;e;)e=Fn(e.nextSibling)}function P0(){Ke=ze=null,Ce=!1}function Yi(e){an===null?an=[e]:an.push(e)}var WS=K.ReactCurrentBatchConfig;function lt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(a(309));var r=t.stateNode}if(!r)throw Error(a(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(a(284));if(!t._owner)throw Error(a(290,e))}return e}function nr(e,n){throw e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function fa(e){var n=e._init;return n(e._payload)}function Ta(e){function n(E,d){if(e){var I=E.deletions;I===null?(E.deletions=[d],E.flags|=16):I.push(d)}}function t(E,d){if(!e)return null;for(;d!==null;)n(E,d),d=d.sibling;return null}function r(E,d){for(E=new Map;d!==null;)d.key!==null?E.set(d.key,d):E.set(d.index,d),d=d.sibling;return E}function i(E,d){return E=Wn(E,d),E.index=0,E.sibling=null,E}function l(E,d,I){return E.index=I,e?(I=E.alternate,I!==null?(I=I.index,I<d?(E.flags|=2,d):I):(E.flags|=2,d)):(E.flags|=1048576,d)}function o(E){return e&&E.alternate===null&&(E.flags|=2),E}function u(E,d,I,L){return d===null||d.tag!==6?(d=Dl(I,E.mode,L),d.return=E,d):(d=i(d,I),d.return=E,d)}function A(E,d,I,L){var x=I.type;return x===Be?P(E,d,I.props.children,L,I.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===xe&&fa(x)===d.type)?(L=i(d,I.props),L.ref=lt(E,d,I),L.return=E,L):(L=Mr(I.type,I.key,I.props,null,E.mode,L),L.ref=lt(E,d,I),L.return=E,L)}function N(E,d,I,L){return d===null||d.tag!==4||d.stateNode.containerInfo!==I.containerInfo||d.stateNode.implementation!==I.implementation?(d=hl(I,E.mode,L),d.return=E,d):(d=i(d,I.children||[]),d.return=E,d)}function P(E,d,I,L,x){return d===null||d.tag!==7?(d=s0(I,E.mode,L,x),d.return=E,d):(d=i(d,I),d.return=E,d)}function G(E,d,I){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Dl(""+d,E.mode,I),d.return=E,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Oe:return I=Mr(d.type,d.key,d.props,null,E.mode,I),I.ref=lt(E,null,d),I.return=E,I;case ae:return d=hl(d,E.mode,I),d.return=E,d;case xe:var L=d._init;return G(E,L(d._payload),I)}if(H0(d)||W(d))return d=s0(d,E.mode,I,null),d.return=E,d;nr(E,d)}return null}function T(E,d,I,L){var x=d!==null?d.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return x!==null?null:u(E,d,""+I,L);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Oe:return I.key===x?A(E,d,I,L):null;case ae:return I.key===x?N(E,d,I,L):null;case xe:return x=I._init,T(E,d,x(I._payload),L)}if(H0(I)||W(I))return x!==null?null:P(E,d,I,L,null);nr(E,I)}return null}function h(E,d,I,L,x){if(typeof L=="string"&&L!==""||typeof L=="number")return E=E.get(I)||null,u(d,E,""+L,x);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Oe:return E=E.get(L.key===null?I:L.key)||null,A(d,E,L,x);case ae:return E=E.get(L.key===null?I:L.key)||null,N(d,E,L,x);case xe:var w=L._init;return h(E,d,I,w(L._payload),x)}if(H0(L)||W(L))return E=E.get(I)||null,P(d,E,L,x,null);nr(d,L)}return null}function H(E,d,I,L){for(var x=null,w=null,k=d,z=d=0,Le=null;k!==null&&z<I.length;z++){k.index>z?(Le=k,k=null):Le=k.sibling;var re=T(E,k,I[z],L);if(re===null){k===null&&(k=Le);break}e&&k&&re.alternate===null&&n(E,k),d=l(re,d,z),w===null?x=re:w.sibling=re,w=re,k=Le}if(z===I.length)return t(E,k),Ce&&e0(E,z),x;if(k===null){for(;z<I.length;z++)k=G(E,I[z],L),k!==null&&(d=l(k,d,z),w===null?x=k:w.sibling=k,w=k);return Ce&&e0(E,z),x}for(k=r(E,k);z<I.length;z++)Le=h(k,E,z,I[z],L),Le!==null&&(e&&Le.alternate!==null&&k.delete(Le.key===null?z:Le.key),d=l(Le,d,z),w===null?x=Le:w.sibling=Le,w=Le);return e&&k.forEach(function(zn){return n(E,zn)}),Ce&&e0(E,z),x}function F(E,d,I,L){var x=W(I);if(typeof x!="function")throw Error(a(150));if(I=x.call(I),I==null)throw Error(a(151));for(var w=x=null,k=d,z=d=0,Le=null,re=I.next();k!==null&&!re.done;z++,re=I.next()){k.index>z?(Le=k,k=null):Le=k.sibling;var zn=T(E,k,re.value,L);if(zn===null){k===null&&(k=Le);break}e&&k&&zn.alternate===null&&n(E,k),d=l(zn,d,z),w===null?x=zn:w.sibling=zn,w=zn,k=Le}if(re.done)return t(E,k),Ce&&e0(E,z),x;if(k===null){for(;!re.done;z++,re=I.next())re=G(E,re.value,L),re!==null&&(d=l(re,d,z),w===null?x=re:w.sibling=re,w=re);return Ce&&e0(E,z),x}for(k=r(E,k);!re.done;z++,re=I.next())re=h(k,E,z,re.value,L),re!==null&&(e&&re.alternate!==null&&k.delete(re.key===null?z:re.key),d=l(re,d,z),w===null?x=re:w.sibling=re,w=re);return e&&k.forEach(function(MA){return n(E,MA)}),Ce&&e0(E,z),x}function fe(E,d,I,L){if(typeof I=="object"&&I!==null&&I.type===Be&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Oe:e:{for(var x=I.key,w=d;w!==null;){if(w.key===x){if(x=I.type,x===Be){if(w.tag===7){t(E,w.sibling),d=i(w,I.props.children),d.return=E,E=d;break e}}else if(w.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===xe&&fa(x)===w.type){t(E,w.sibling),d=i(w,I.props),d.ref=lt(E,w,I),d.return=E,E=d;break e}t(E,w);break}else n(E,w);w=w.sibling}I.type===Be?(d=s0(I.props.children,E.mode,L,I.key),d.return=E,E=d):(L=Mr(I.type,I.key,I.props,null,E.mode,L),L.ref=lt(E,d,I),L.return=E,E=L)}return o(E);case ae:e:{for(w=I.key;d!==null;){if(d.key===w)if(d.tag===4&&d.stateNode.containerInfo===I.containerInfo&&d.stateNode.implementation===I.implementation){t(E,d.sibling),d=i(d,I.children||[]),d.return=E,E=d;break e}else{t(E,d);break}else n(E,d);d=d.sibling}d=hl(I,E.mode,L),d.return=E,E=d}return o(E);case xe:return w=I._init,fe(E,d,w(I._payload),L)}if(H0(I))return H(E,d,I,L);if(W(I))return F(E,d,I,L);nr(E,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,d!==null&&d.tag===6?(t(E,d.sibling),d=i(d,I),d.return=E,E=d):(t(E,d),d=Dl(I,E.mode,L),d.return=E,E=d),o(E)):t(E,d)}return fe}var M0=Ta(!0),Ra=Ta(!1),tr=Bn(null),rr=null,G0=null,wi=null;function ki(){wi=G0=rr=null}function Vi(e){var n=tr.current;Ae(tr),e._currentValue=n}function ji(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function L0(e,n){rr=e,wi=G0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(ke=!0),e.firstContext=null)}function be(e){var n=e._currentValue;if(wi!==e)if(e={context:e,memoizedValue:n,next:null},G0===null){if(rr===null)throw Error(a(308));G0=e,rr.dependencies={lanes:0,firstContext:e}}else G0=G0.next=e;return n}var n0=null;function _i(e){n0===null?n0=[e]:n0.push(e)}function pa(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,_i(n)):(t.next=i.next,i.next=t),n.interleaved=t,Pn(e,r)}function Pn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var wn=!1;function Qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pa(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ee&2)!==0){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Pn(e,t)}return i=r.interleaved,i===null?(n.next=n,_i(r)):(n.next=i.next,i.next=n),r.interleaved=n,Pn(e,t)}function ir(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ii(e,t)}}function Ma(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function lr(e,n,t,r){var i=e.updateQueue;wn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var A=u,N=A.next;A.next=null,o===null?l=N:o.next=N,o=A;var P=e.alternate;P!==null&&(P=P.updateQueue,u=P.lastBaseUpdate,u!==o&&(u===null?P.firstBaseUpdate=N:u.next=N,P.lastBaseUpdate=A))}if(l!==null){var G=i.baseState;o=0,P=N=A=null,u=l;do{var T=u.lane,h=u.eventTime;if((r&T)===T){P!==null&&(P=P.next={eventTime:h,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var H=e,F=u;switch(T=n,h=t,F.tag){case 1:if(H=F.payload,typeof H=="function"){G=H.call(h,G,T);break e}G=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=F.payload,T=typeof H=="function"?H.call(h,G,T):H,T==null)break e;G=y({},G,T);break e;case 2:wn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,T=i.effects,T===null?i.effects=[u]:T.push(u))}else h={eventTime:h,lane:T,tag:u.tag,payload:u.payload,callback:u.callback,next:null},P===null?(N=P=h,A=G):P=P.next=h,o|=T;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;T=u,u=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);if(P===null&&(A=G),i.baseState=A,i.firstBaseUpdate=N,i.lastBaseUpdate=P,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);i0|=o,e.lanes=o,e.memoizedState=G}}function Ga(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(a(191,i));i.call(r)}}}var ot={},In=Bn(ot),at=Bn(ot),st=Bn(ot);function t0(e){if(e===ot)throw Error(a(174));return e}function Ji(e,n){switch(ue(st,n),ue(at,e),ue(In,ot),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Wr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Wr(n,e)}Ae(In),ue(In,n)}function U0(){Ae(In),Ae(at),Ae(st)}function La(e){t0(st.current);var n=t0(In.current),t=Wr(n,e.type);n!==t&&(ue(at,e),ue(In,t))}function Wi(e){at.current===e&&(Ae(In),Ae(at))}var ce=Bn(0);function or(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var zi=[];function Ki(){for(var e=0;e<zi.length;e++)zi[e]._workInProgressVersionPrimary=null;zi.length=0}var ar=K.ReactCurrentDispatcher,$i=K.ReactCurrentBatchConfig,r0=0,Ee=null,pe=null,Me=null,sr=!1,ut=!1,St=0,zS=0;function ge(){throw Error(a(321))}function qi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!on(e[t],n[t]))return!1;return!0}function Xi(e,n,t,r,i,l){if(r0=l,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ar.current=e===null||e.memoizedState===null?XS:ZS,e=t(r,i),ut){l=0;do{if(ut=!1,St=0,25<=l)throw Error(a(301));l+=1,Me=pe=null,n.updateQueue=null,ar.current=bS,e=t(r,i)}while(ut)}if(ar.current=Ar,n=pe!==null&&pe.next!==null,r0=0,Me=pe=Ee=null,sr=!1,n)throw Error(a(300));return e}function Zi(){var e=St!==0;return St=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Ee.memoizedState=Me=e:Me=Me.next=e,Me}function en(){if(pe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=Me===null?Ee.memoizedState:Me.next;if(n!==null)Me=n,pe=e;else{if(e===null)throw Error(a(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Me===null?Ee.memoizedState=Me=e:Me=Me.next=e}return Me}function At(e,n){return typeof n=="function"?n(e):n}function bi(e){var n=en(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=pe,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,A=null,N=l;do{var P=N.lane;if((r0&P)===P)A!==null&&(A=A.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),r=N.hasEagerState?N.eagerState:e(r,N.action);else{var G={lane:P,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};A===null?(u=A=G,o=r):A=A.next=G,Ee.lanes|=P,i0|=P}N=N.next}while(N!==null&&N!==l);A===null?o=r:A.next=u,on(r,n.memoizedState)||(ke=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=A,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,Ee.lanes|=l,i0|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function el(e){var n=en(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);on(l,n.memoizedState)||(ke=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Ua(){}function Da(e,n){var t=Ee,r=en(),i=n(),l=!on(r.memoizedState,i);if(l&&(r.memoizedState=i,ke=!0),r=r.queue,nl(va.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Me!==null&&Me.memoizedState.tag&1){if(t.flags|=2048,dt(9,ga.bind(null,t,r,i,n),void 0,null),Ge===null)throw Error(a(349));(r0&30)!==0||ha(t,n,i)}return i}function ha(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ee.updateQueue,n===null?(n={lastEffect:null,stores:null},Ee.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ga(e,n,t,r){n.value=t,n.getSnapshot=r,ya(n)&&Ha(e)}function va(e,n,t){return t(function(){ya(n)&&Ha(e)})}function ya(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!on(e,t)}catch{return!0}}function Ha(e){var n=Pn(e,1);n!==null&&An(n,e,1,-1)}function Fa(e){var n=Nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:At,lastRenderedState:e},n.queue=e,e=e.dispatch=qS.bind(null,Ee,e),[n.memoizedState,e]}function dt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Ee.updateQueue,n===null?(n={lastEffect:null,stores:null},Ee.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ba(){return en().memoizedState}function ur(e,n,t,r){var i=Nn();Ee.flags|=e,i.memoizedState=dt(1|n,t,void 0,r===void 0?null:r)}function Sr(e,n,t,r){var i=en();r=r===void 0?null:r;var l=void 0;if(pe!==null){var o=pe.memoizedState;if(l=o.destroy,r!==null&&qi(r,o.deps)){i.memoizedState=dt(n,t,l,r);return}}Ee.flags|=e,i.memoizedState=dt(1|n,t,l,r)}function xa(e,n){return ur(8390656,8,e,n)}function nl(e,n){return Sr(2048,8,e,n)}function Ya(e,n){return Sr(4,2,e,n)}function wa(e,n){return Sr(4,4,e,n)}function ka(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Va(e,n,t){return t=t!=null?t.concat([e]):null,Sr(4,4,ka.bind(null,n,e),t)}function tl(){}function ja(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&qi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function _a(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&qi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Qa(e,n,t){return(r0&21)===0?(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=t):(on(t,n)||(t=fo(),Ee.lanes|=t,i0|=t,e.baseState=!0),n)}function KS(e,n){var t=le;le=t!==0&&4>t?t:4,e(!0);var r=$i.transition;$i.transition={};try{e(!1),n()}finally{le=t,$i.transition=r}}function Ja(){return en().memoizedState}function $S(e,n,t){var r=Qn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Wa(e))za(n,t);else if(t=pa(e,n,t,r),t!==null){var i=Fe();An(t,e,r,i),Ka(t,n,r)}}function qS(e,n,t){var r=Qn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Wa(e))za(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,on(u,o)){var A=n.interleaved;A===null?(i.next=i,_i(n)):(i.next=A.next,A.next=i),n.interleaved=i;return}}catch{}finally{}t=pa(e,n,i,r),t!==null&&(i=Fe(),An(t,e,r,i),Ka(t,n,r))}}function Wa(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function za(e,n){ut=sr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ka(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ii(e,t)}}var Ar={readContext:be,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},XS={readContext:be,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:be,useEffect:xa,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ur(4194308,4,ka.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ur(4194308,4,e,n)},useInsertionEffect:function(e,n){return ur(4,2,e,n)},useMemo:function(e,n){var t=Nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Nn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=$S.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:Fa,useDebugValue:tl,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=Fa(!1),n=e[0];return e=KS.bind(null,e[1]),Nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Ee,i=Nn();if(Ce){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),Ge===null)throw Error(a(349));(r0&30)!==0||ha(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,xa(va.bind(null,r,l,e),[e]),r.flags|=2048,dt(9,ga.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Nn(),n=Ge.identifierPrefix;if(Ce){var t=pn,r=Rn;t=(r&~(1<<32-ln(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=St++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=zS++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ZS={readContext:be,useCallback:ja,useContext:be,useEffect:nl,useImperativeHandle:Va,useInsertionEffect:Ya,useLayoutEffect:wa,useMemo:_a,useReducer:bi,useRef:Ba,useState:function(){return bi(At)},useDebugValue:tl,useDeferredValue:function(e){var n=en();return Qa(n,pe.memoizedState,e)},useTransition:function(){var e=bi(At)[0],n=en().memoizedState;return[e,n]},useMutableSource:Ua,useSyncExternalStore:Da,useId:Ja,unstable_isNewReconciler:!1},bS={readContext:be,useCallback:ja,useContext:be,useEffect:nl,useImperativeHandle:Va,useInsertionEffect:Ya,useLayoutEffect:wa,useMemo:_a,useReducer:el,useRef:Ba,useState:function(){return el(At)},useDebugValue:tl,useDeferredValue:function(e){var n=en();return pe===null?n.memoizedState=e:Qa(n,pe.memoizedState,e)},useTransition:function(){var e=el(At)[0],n=en().memoizedState;return[e,n]},useMutableSource:Ua,useSyncExternalStore:Da,useId:Ja,unstable_isNewReconciler:!1};function sn(e,n){if(e&&e.defaultProps){n=y({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function rl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:y({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var dr={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Fe(),i=Qn(e),l=Mn(r,i);l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,i),n!==null&&(An(n,e,i,r),ir(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Fe(),i=Qn(e),l=Mn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=kn(e,l,i),n!==null&&(An(n,e,i,r),ir(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Fe(),r=Qn(e),i=Mn(t,r);i.tag=2,n!=null&&(i.callback=n),n=kn(e,i,r),n!==null&&(An(n,e,r,t),ir(n,e,r))}};function $a(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Z0(t,r)||!Z0(i,l):!0}function qa(e,n,t){var r=!1,i=xn,l=n.contextType;return typeof l=="object"&&l!==null?l=be(l):(i=we(n)?Zn:he.current,r=n.contextTypes,l=(r=r!=null)?T0(e,i):xn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=dr,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Xa(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&dr.enqueueReplaceState(n,n.state,null)}function il(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Qi(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=be(l):(l=we(n)?Zn:he.current,i.context=T0(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(rl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&dr.enqueueReplaceState(i,i.state,null),lr(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function D0(e,n){try{var t="",r=n;do t+=ne(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function ll(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ol(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var eA=typeof WeakMap=="function"?WeakMap:Map;function Za(e,n,t){t=Mn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){mr||(mr=!0,Tl=r),ol(e,n)},t}function ba(e,n,t){t=Mn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){ol(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){ol(e,n),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function es(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new eA;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=cA.bind(null,e,n,t),n.then(e,e))}function ns(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ts(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Mn(-1,1),n.tag=2,kn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var nA=K.ReactCurrentOwner,ke=!1;function He(e,n,t,r){n.child=e===null?Ra(n,null,t,r):M0(n,e.child,t,r)}function rs(e,n,t,r,i){t=t.render;var l=n.ref;return L0(n,i),r=Xi(e,n,t,r,l,i),t=Zi(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Gn(e,n,i)):(Ce&&t&&Hi(n),n.flags|=1,He(e,n,r,i),n.child)}function is(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Ul(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,ls(e,n,l,r,i)):(e=Mr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Z0,t(o,r)&&e.ref===n.ref)return Gn(e,n,i)}return n.flags|=1,e=Wn(l,r),e.ref=n.ref,e.return=n,n.child=e}function ls(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Z0(l,r)&&e.ref===n.ref)if(ke=!1,n.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ke=!0);else return n.lanes=e.lanes,Gn(e,n,i)}return al(e,n,t,r,i)}function os(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(g0,$e),$e|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ue(g0,$e),$e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,ue(g0,$e),$e|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,ue(g0,$e),$e|=r;return He(e,n,i,t),n.child}function as(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function al(e,n,t,r,i){var l=we(t)?Zn:he.current;return l=T0(n,l),L0(n,i),t=Xi(e,n,t,r,l,i),r=Zi(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Gn(e,n,i)):(Ce&&r&&Hi(n),n.flags|=1,He(e,n,t,i),n.child)}function ss(e,n,t,r,i){if(we(t)){var l=!0;qt(n)}else l=!1;if(L0(n,i),n.stateNode===null)cr(e,n),qa(n,t,r),il(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var A=o.context,N=t.contextType;typeof N=="object"&&N!==null?N=be(N):(N=we(t)?Zn:he.current,N=T0(n,N));var P=t.getDerivedStateFromProps,G=typeof P=="function"||typeof o.getSnapshotBeforeUpdate=="function";G||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||A!==N)&&Xa(n,o,r,N),wn=!1;var T=n.memoizedState;o.state=T,lr(n,r,o,i),A=n.memoizedState,u!==r||T!==A||Ye.current||wn?(typeof P=="function"&&(rl(n,t,P,r),A=n.memoizedState),(u=wn||$a(n,t,u,r,T,A,N))?(G||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=A),o.props=r,o.state=A,o.context=N,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Pa(e,n),u=n.memoizedProps,N=n.type===n.elementType?u:sn(n.type,u),o.props=N,G=n.pendingProps,T=o.context,A=t.contextType,typeof A=="object"&&A!==null?A=be(A):(A=we(t)?Zn:he.current,A=T0(n,A));var h=t.getDerivedStateFromProps;(P=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==G||T!==A)&&Xa(n,o,r,A),wn=!1,T=n.memoizedState,o.state=T,lr(n,r,o,i);var H=n.memoizedState;u!==G||T!==H||Ye.current||wn?(typeof h=="function"&&(rl(n,t,h,r),H=n.memoizedState),(N=wn||$a(n,t,N,r,T,H,A)||!1)?(P||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,H,A),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,H,A)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=H),o.props=r,o.state=H,o.context=A,r=N):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),r=!1)}return sl(e,n,t,r,l,i)}function sl(e,n,t,r,i,l){as(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Ca(n,t,!1),Gn(e,n,l);r=n.stateNode,nA.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=M0(n,e.child,null,l),n.child=M0(n,null,u,l)):He(e,n,u,l),n.memoizedState=r.state,i&&Ca(n,t,!0),n.child}function us(e){var n=e.stateNode;n.pendingContext?Aa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Aa(e,n.context,!1),Ji(e,n.containerInfo)}function Ss(e,n,t,r,i){return P0(),Yi(i),n.flags|=256,He(e,n,t,r),n.child}var ul={dehydrated:null,treeContext:null,retryLane:0};function Sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function As(e,n,t){var r=n.pendingProps,i=ce.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ue(ce,i&1),e===null)return xi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Gr(o,r,0,null),e=s0(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Sl(t),n.memoizedState=ul,e):Al(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return tA(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var A={mode:"hidden",children:r.children};return(o&1)===0&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=A,n.deletions=null):(r=Wn(i,A),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=Wn(u,l):(l=s0(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?Sl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=ul,r}return l=e.child,e=l.sibling,r=Wn(l,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Al(e,n){return n=Gr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Cr(e,n,t,r){return r!==null&&Yi(r),M0(n,e.child,null,t),e=Al(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function tA(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=ll(Error(a(422))),Cr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Gr({mode:"visible",children:r.children},i,0,null),l=s0(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,(n.mode&1)!==0&&M0(n,e.child,null,o),n.child.memoizedState=Sl(o),n.memoizedState=ul,l);if((n.mode&1)===0)return Cr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(a(419)),r=ll(l,r,void 0),Cr(e,n,o,r)}if(u=(o&e.childLanes)!==0,ke||u){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Pn(e,i),An(r,e,i,-1))}return Ll(),r=ll(Error(a(421))),Cr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=EA.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,Ke=Fn(i.nextSibling),ze=n,Ce=!0,an=null,e!==null&&(Xe[Ze++]=Rn,Xe[Ze++]=pn,Xe[Ze++]=bn,Rn=e.id,pn=e.overflow,bn=n),n=Al(n,r.children),n.flags|=4096,n)}function ds(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ji(e.return,n,t)}function dl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Cs(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(He(e,n,r.children,t),r=ce.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ds(e,t,n);else if(e.tag===19)ds(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(ce,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&or(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),dl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&or(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}dl(n,!0,t,null,l);break;case"together":dl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function cr(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),i0|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=Wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function rA(e,n,t){switch(n.tag){case 3:us(n),P0();break;case 5:La(n);break;case 1:we(n.type)&&qt(n);break;case 4:Ji(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ue(tr,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ue(ce,ce.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?As(e,n,t):(ue(ce,ce.current&1),e=Gn(e,n,t),e!==null?e.sibling:null);ue(ce,ce.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Cs(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ce,ce.current),r)break;return null;case 22:case 23:return n.lanes=0,os(e,n,t)}return Gn(e,n,t)}var cs,Cl,Es,Is;cs=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Cl=function(){},Es=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,t0(In.current);var l=null;switch(t){case"input":i=jr(e,i),r=jr(e,r),l=[];break;case"select":i=y({},i,{value:void 0}),r=y({},r,{value:void 0}),l=[];break;case"textarea":i=Jr(e,i),r=Jr(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zt)}zr(t,r);var o;t=null;for(N in i)if(!r.hasOwnProperty(N)&&i.hasOwnProperty(N)&&i[N]!=null)if(N==="style"){var u=i[N];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(O.hasOwnProperty(N)?l||(l=[]):(l=l||[]).push(N,null));for(N in r){var A=r[N];if(u=i!=null?i[N]:void 0,r.hasOwnProperty(N)&&A!==u&&(A!=null||u!=null))if(N==="style")if(u){for(o in u)!u.hasOwnProperty(o)||A&&A.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in A)A.hasOwnProperty(o)&&u[o]!==A[o]&&(t||(t={}),t[o]=A[o])}else t||(l||(l=[]),l.push(N,t)),t=A;else N==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,u=u?u.__html:void 0,A!=null&&u!==A&&(l=l||[]).push(N,A)):N==="children"?typeof A!="string"&&typeof A!="number"||(l=l||[]).push(N,""+A):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(O.hasOwnProperty(N)?(A!=null&&N==="onScroll"&&Se("scroll",e),l||u===A||(l=[])):(l=l||[]).push(N,A))}t&&(l=l||[]).push("style",t);var N=l;(n.updateQueue=N)&&(n.flags|=4)}},Is=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ct(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function iA(e,n,t){var r=n.pendingProps;switch(Fi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(n),null;case 1:return we(n.type)&&$t(),ve(n),null;case 3:return r=n.stateNode,U0(),Ae(Ye),Ae(he),Ki(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(er(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,an!==null&&(Pl(an),an=null))),Cl(e,n),ve(n),null;case 5:Wi(n);var i=t0(st.current);if(t=n.type,e!==null&&n.stateNode!=null)Es(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(a(166));return ve(n),null}if(e=t0(In.current),er(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[En]=n,r[rt]=l,e=(n.mode&1)!==0,t){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<et.length;i++)Se(et[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":$l(r,l),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Se("invalid",r);break;case"textarea":Zl(r,l),Se("invalid",r)}zr(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&Wt(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Wt(r.textContent,u,e),i=["children",""+u]):O.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&Se("scroll",r)}switch(t){case"input":pt(r),Xl(r,l,!0);break;case"textarea":pt(r),eo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=zt)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=no(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[En]=n,e[rt]=r,cs(e,n,!1,!1),n.stateNode=e;e:{switch(o=Kr(t,r),t){case"dialog":Se("cancel",e),Se("close",e),i=r;break;case"iframe":case"object":case"embed":Se("load",e),i=r;break;case"video":case"audio":for(i=0;i<et.length;i++)Se(et[i],e);i=r;break;case"source":Se("error",e),i=r;break;case"img":case"image":case"link":Se("error",e),Se("load",e),i=r;break;case"details":Se("toggle",e),i=r;break;case"input":$l(e,r),i=jr(e,r),Se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=y({},r,{value:void 0}),Se("invalid",e);break;case"textarea":Zl(e,r),i=Jr(e,r),Se("invalid",e);break;default:i=r}zr(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var A=u[l];l==="style"?io(e,A):l==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&to(e,A)):l==="children"?typeof A=="string"?(t!=="textarea"||A!=="")&&F0(e,A):typeof A=="number"&&F0(e,""+A):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(O.hasOwnProperty(l)?A!=null&&l==="onScroll"&&Se("scroll",e):A!=null&&Z(e,l,A,o))}switch(t){case"input":pt(e),Xl(e,r,!1);break;case"textarea":pt(e),eo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ie(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?u0(e,!!r.multiple,l,!1):r.defaultValue!=null&&u0(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zt)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ve(n),null;case 6:if(e&&n.stateNode!=null)Is(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(t=t0(st.current),t0(In.current),er(n)){if(r=n.stateNode,t=n.memoizedProps,r[En]=n,(l=r.nodeValue!==t)&&(e=ze,e!==null))switch(e.tag){case 3:Wt(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wt(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[En]=n,n.stateNode=r}return ve(n),null;case 13:if(Ae(ce),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&Ke!==null&&(n.mode&1)!==0&&(n.flags&128)===0)ma(),P0(),n.flags|=98560,l=!1;else if(l=er(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(a(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(a(317));l[En]=n}else P0(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ve(n),l=!1}else an!==null&&(Pl(an),an=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ce.current&1)!==0?Pe===0&&(Pe=3):Ll())),n.updateQueue!==null&&(n.flags|=4),ve(n),null);case 4:return U0(),Cl(e,n),e===null&&nt(n.stateNode.containerInfo),ve(n),null;case 10:return Vi(n.type._context),ve(n),null;case 17:return we(n.type)&&$t(),ve(n),null;case 19:if(Ae(ce),l=n.memoizedState,l===null)return ve(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Ct(l,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=or(e),o!==null){for(n.flags|=128,Ct(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ue(ce,ce.current&1|2),n.child}e=e.sibling}l.tail!==null&&me()>v0&&(n.flags|=128,r=!0,Ct(l,!1),n.lanes=4194304)}else{if(!r)if(e=or(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ct(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Ce)return ve(n),null}else 2*me()-l.renderingStartTime>v0&&t!==1073741824&&(n.flags|=128,r=!0,Ct(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=me(),n.sibling=null,t=ce.current,ue(ce,r?t&1|2:t&1),n):(ve(n),null);case 22:case 23:return Gl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?($e&1073741824)!==0&&(ve(n),n.subtreeFlags&6&&(n.flags|=8192)):ve(n),null;case 24:return null;case 25:return null}throw Error(a(156,n.tag))}function lA(e,n){switch(Fi(n),n.tag){case 1:return we(n.type)&&$t(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return U0(),Ae(Ye),Ae(he),Ki(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Wi(n),null;case 13:if(Ae(ce),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));P0()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ae(ce),null;case 4:return U0(),null;case 10:return Vi(n.type._context),null;case 22:case 23:return Gl(),null;case 24:return null;default:return null}}var Er=!1,ye=!1,oA=typeof WeakSet=="function"?WeakSet:Set,v=null;function h0(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ne(e,n,r)}else t.current=null}function cl(e,n,t){try{t()}catch(r){Ne(e,n,r)}}var Ns=!1;function aA(e,n){if(Gi=Ft,e=$o(),Oi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,A=-1,N=0,P=0,G=e,T=null;n:for(;;){for(var h;G!==t||i!==0&&G.nodeType!==3||(u=o+i),G!==l||r!==0&&G.nodeType!==3||(A=o+r),G.nodeType===3&&(o+=G.nodeValue.length),(h=G.firstChild)!==null;)T=G,G=h;for(;;){if(G===e)break n;if(T===t&&++N===i&&(u=o),T===l&&++P===r&&(A=o),(h=G.nextSibling)!==null)break;G=T,T=G.parentNode}G=h}t=u===-1||A===-1?null:{start:u,end:A}}else t=null}t=t||{start:0,end:0}}else t=null;for(Li={focusedElem:e,selectionRange:t},Ft=!1,v=n;v!==null;)if(n=v,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,v=e;else for(;v!==null;){n=v;try{var H=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var F=H.memoizedProps,fe=H.memoizedState,E=n.stateNode,d=E.getSnapshotBeforeUpdate(n.elementType===n.type?F:sn(n.type,F),fe);E.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var I=n.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(L){Ne(n,n.return,L)}if(e=n.sibling,e!==null){e.return=n.return,v=e;break}v=n.return}return H=Ns,Ns=!1,H}function ct(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&cl(n,t,l)}i=i.next}while(i!==r)}}function Ir(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function El(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Os(e){var n=e.alternate;n!==null&&(e.alternate=null,Os(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[En],delete n[rt],delete n[gi],delete n[_S],delete n[QS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ms(e){return e.tag===5||e.tag===3||e.tag===4}function fs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ms(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=zt));else if(r!==4&&(e=e.child,e!==null))for(Il(e,n,t),e=e.sibling;e!==null;)Il(e,n,t),e=e.sibling}function Nl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nl(e,n,t),e=e.sibling;e!==null;)Nl(e,n,t),e=e.sibling}var Ue=null,un=!1;function Vn(e,n,t){for(t=t.child;t!==null;)Ts(e,n,t),t=t.sibling}function Ts(e,n,t){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Dt,t)}catch{}switch(t.tag){case 5:ye||h0(t,n);case 6:var r=Ue,i=un;Ue=null,Vn(e,n,t),Ue=r,un=i,Ue!==null&&(un?(e=Ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ue.removeChild(t.stateNode));break;case 18:Ue!==null&&(un?(e=Ue,t=t.stateNode,e.nodeType===8?hi(e.parentNode,t):e.nodeType===1&&hi(e,t),W0(e)):hi(Ue,t.stateNode));break;case 4:r=Ue,i=un,Ue=t.stateNode.containerInfo,un=!0,Vn(e,n,t),Ue=r,un=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&cl(t,n,o),i=i.next}while(i!==r)}Vn(e,n,t);break;case 1:if(!ye&&(h0(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){Ne(t,n,u)}Vn(e,n,t);break;case 21:Vn(e,n,t);break;case 22:t.mode&1?(ye=(r=ye)||t.memoizedState!==null,Vn(e,n,t),ye=r):Vn(e,n,t);break;default:Vn(e,n,t)}}function Rs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new oA),n.forEach(function(r){var i=IA.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Sn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:Ue=u.stateNode,un=!1;break e;case 3:Ue=u.stateNode.containerInfo,un=!0;break e;case 4:Ue=u.stateNode.containerInfo,un=!0;break e}u=u.return}if(Ue===null)throw Error(a(160));Ts(l,o,i),Ue=null,un=!1;var A=i.alternate;A!==null&&(A.return=null),i.return=null}catch(N){Ne(i,n,N)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ps(n,e),n=n.sibling}function ps(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sn(n,e),On(e),r&4){try{ct(3,e,e.return),Ir(3,e)}catch(F){Ne(e,e.return,F)}try{ct(5,e,e.return)}catch(F){Ne(e,e.return,F)}}break;case 1:Sn(n,e),On(e),r&512&&t!==null&&h0(t,t.return);break;case 5:if(Sn(n,e),On(e),r&512&&t!==null&&h0(t,t.return),e.flags&32){var i=e.stateNode;try{F0(i,"")}catch(F){Ne(e,e.return,F)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&ql(i,l),Kr(u,o);var N=Kr(u,l);for(o=0;o<A.length;o+=2){var P=A[o],G=A[o+1];P==="style"?io(i,G):P==="dangerouslySetInnerHTML"?to(i,G):P==="children"?F0(i,G):Z(i,P,G,N)}switch(u){case"input":_r(i,l);break;case"textarea":bl(i,l);break;case"select":var T=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var h=l.value;h!=null?u0(i,!!l.multiple,h,!1):T!==!!l.multiple&&(l.defaultValue!=null?u0(i,!!l.multiple,l.defaultValue,!0):u0(i,!!l.multiple,l.multiple?[]:"",!1))}i[rt]=l}catch(F){Ne(e,e.return,F)}}break;case 6:if(Sn(n,e),On(e),r&4){if(e.stateNode===null)throw Error(a(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(F){Ne(e,e.return,F)}}break;case 3:if(Sn(n,e),On(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{W0(n.containerInfo)}catch(F){Ne(e,e.return,F)}break;case 4:Sn(n,e),On(e);break;case 13:Sn(n,e),On(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(fl=me())),r&4&&Rs(e);break;case 22:if(P=t!==null&&t.memoizedState!==null,e.mode&1?(ye=(N=ye)||P,Sn(n,e),ye=N):Sn(n,e),On(e),r&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!P&&(e.mode&1)!==0)for(v=e,P=e.child;P!==null;){for(G=v=P;v!==null;){switch(T=v,h=T.child,T.tag){case 0:case 11:case 14:case 15:ct(4,T,T.return);break;case 1:h0(T,T.return);var H=T.stateNode;if(typeof H.componentWillUnmount=="function"){r=T,t=T.return;try{n=r,H.props=n.memoizedProps,H.state=n.memoizedState,H.componentWillUnmount()}catch(F){Ne(r,t,F)}}break;case 5:h0(T,T.return);break;case 22:if(T.memoizedState!==null){Gs(G);continue}}h!==null?(h.return=T,v=h):Gs(G)}P=P.sibling}e:for(P=null,G=e;;){if(G.tag===5){if(P===null){P=G;try{i=G.stateNode,N?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=G.stateNode,A=G.memoizedProps.style,o=A!=null&&A.hasOwnProperty("display")?A.display:null,u.style.display=ro("display",o))}catch(F){Ne(e,e.return,F)}}}else if(G.tag===6){if(P===null)try{G.stateNode.nodeValue=N?"":G.memoizedProps}catch(F){Ne(e,e.return,F)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===e)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===e)break e;for(;G.sibling===null;){if(G.return===null||G.return===e)break e;P===G&&(P=null),G=G.return}P===G&&(P=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Sn(n,e),On(e),r&4&&Rs(e);break;case 21:break;default:Sn(n,e),On(e)}}function On(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ms(t)){var r=t;break e}t=t.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(F0(i,""),r.flags&=-33);var l=fs(e);Nl(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=fs(e);Il(e,u,o);break;default:throw Error(a(161))}}catch(A){Ne(e,e.return,A)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sA(e,n,t){v=e,Ps(e)}function Ps(e,n,t){for(var r=(e.mode&1)!==0;v!==null;){var i=v,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Er;if(!o){var u=i.alternate,A=u!==null&&u.memoizedState!==null||ye;u=Er;var N=ye;if(Er=o,(ye=A)&&!N)for(v=i;v!==null;)o=v,A=o.child,o.tag===22&&o.memoizedState!==null?Ls(i):A!==null?(A.return=o,v=A):Ls(i);for(;l!==null;)v=l,Ps(l),l=l.sibling;v=i,Er=u,ye=N}Ms(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,v=l):Ms(e)}}function Ms(e){for(;v!==null;){var n=v;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:ye||Ir(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ye)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Ga(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ga(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var A=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&t.focus();break;case"img":A.src&&(t.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var N=n.alternate;if(N!==null){var P=N.memoizedState;if(P!==null){var G=P.dehydrated;G!==null&&W0(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}ye||n.flags&512&&El(n)}catch(T){Ne(n,n.return,T)}}if(n===e){v=null;break}if(t=n.sibling,t!==null){t.return=n.return,v=t;break}v=n.return}}function Gs(e){for(;v!==null;){var n=v;if(n===e){v=null;break}var t=n.sibling;if(t!==null){t.return=n.return,v=t;break}v=n.return}}function Ls(e){for(;v!==null;){var n=v;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ir(4,n)}catch(A){Ne(n,t,A)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(A){Ne(n,i,A)}}var l=n.return;try{El(n)}catch(A){Ne(n,l,A)}break;case 5:var o=n.return;try{El(n)}catch(A){Ne(n,o,A)}}}catch(A){Ne(n,n.return,A)}if(n===e){v=null;break}var u=n.sibling;if(u!==null){u.return=n.return,v=u;break}v=n.return}}var uA=Math.ceil,Nr=K.ReactCurrentDispatcher,Ol=K.ReactCurrentOwner,nn=K.ReactCurrentBatchConfig,ee=0,Ge=null,Te=null,De=0,$e=0,g0=Bn(0),Pe=0,Et=null,i0=0,Or=0,ml=0,It=null,Ve=null,fl=0,v0=1/0,Ln=null,mr=!1,Tl=null,jn=null,fr=!1,_n=null,Tr=0,Nt=0,Rl=null,Rr=-1,pr=0;function Fe(){return(ee&6)!==0?me():Rr!==-1?Rr:Rr=me()}function Qn(e){return(e.mode&1)===0?1:(ee&2)!==0&&De!==0?De&-De:WS.transition!==null?(pr===0&&(pr=fo()),pr):(e=le,e!==0||(e=window.event,e=e===void 0?16:Do(e.type)),e)}function An(e,n,t,r){if(50<Nt)throw Nt=0,Rl=null,Error(a(185));V0(e,t,r),((ee&2)===0||e!==Ge)&&(e===Ge&&((ee&2)===0&&(Or|=t),Pe===4&&Jn(e,De)),je(e,r),t===1&&ee===0&&(n.mode&1)===0&&(v0=me()+500,Xt&&Yn()))}function je(e,n){var t=e.callbackNode;Wu(e,n);var r=vt(e,e===Ge?De:0);if(r===0)t!==null&&No(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&No(t),n===1)e.tag===0?JS(Ds.bind(null,e)):ca(Ds.bind(null,e)),VS(function(){(ee&6)===0&&Yn()}),t=null;else{switch(To(r)){case 1:t=ni;break;case 4:t=Oo;break;case 16:t=Ut;break;case 536870912:t=mo;break;default:t=Ut}t=xs(t,Us.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Us(e,n){if(Rr=-1,pr=0,(ee&6)!==0)throw Error(a(327));var t=e.callbackNode;if(y0()&&e.callbackNode!==t)return null;var r=vt(e,e===Ge?De:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Pr(e,r);else{n=r;var i=ee;ee|=2;var l=gs();(Ge!==e||De!==n)&&(Ln=null,v0=me()+500,o0(e,n));do try{dA();break}catch(u){hs(e,u)}while(!0);ki(),Nr.current=l,ee=i,Te!==null?n=0:(Ge=null,De=0,n=Pe)}if(n!==0){if(n===2&&(i=ti(e),i!==0&&(r=i,n=pl(e,i))),n===1)throw t=Et,o0(e,0),Jn(e,r),je(e,me()),t;if(n===6)Jn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!SA(i)&&(n=Pr(e,r),n===2&&(l=ti(e),l!==0&&(r=l,n=pl(e,l))),n===1))throw t=Et,o0(e,0),Jn(e,r),je(e,me()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(a(345));case 2:a0(e,Ve,Ln);break;case 3:if(Jn(e,r),(r&130023424)===r&&(n=fl+500-me(),10<n)){if(vt(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Di(a0.bind(null,e,Ve,Ln),n);break}a0(e,Ve,Ln);break;case 4:if(Jn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-ln(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uA(r/1960))-r,10<r){e.timeoutHandle=Di(a0.bind(null,e,Ve,Ln),r);break}a0(e,Ve,Ln);break;case 5:a0(e,Ve,Ln);break;default:throw Error(a(329))}}}return je(e,me()),e.callbackNode===t?Us.bind(null,e):null}function pl(e,n){var t=It;return e.current.memoizedState.isDehydrated&&(o0(e,n).flags|=256),e=Pr(e,n),e!==2&&(n=Ve,Ve=t,n!==null&&Pl(n)),e}function Pl(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function SA(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!on(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Jn(e,n){for(n&=~ml,n&=~Or,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-ln(n),r=1<<t;e[t]=-1,n&=~r}}function Ds(e){if((ee&6)!==0)throw Error(a(327));y0();var n=vt(e,0);if((n&1)===0)return je(e,me()),null;var t=Pr(e,n);if(e.tag!==0&&t===2){var r=ti(e);r!==0&&(n=r,t=pl(e,r))}if(t===1)throw t=Et,o0(e,0),Jn(e,n),je(e,me()),t;if(t===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,a0(e,Ve,Ln),je(e,me()),null}function Ml(e,n){var t=ee;ee|=1;try{return e(n)}finally{ee=t,ee===0&&(v0=me()+500,Xt&&Yn())}}function l0(e){_n!==null&&_n.tag===0&&(ee&6)===0&&y0();var n=ee;ee|=1;var t=nn.transition,r=le;try{if(nn.transition=null,le=1,e)return e()}finally{le=r,nn.transition=t,ee=n,(ee&6)===0&&Yn()}}function Gl(){$e=g0.current,Ae(g0)}function o0(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,kS(t)),Te!==null)for(t=Te.return;t!==null;){var r=t;switch(Fi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$t();break;case 3:U0(),Ae(Ye),Ae(he),Ki();break;case 5:Wi(r);break;case 4:U0();break;case 13:Ae(ce);break;case 19:Ae(ce);break;case 10:Vi(r.type._context);break;case 22:case 23:Gl()}t=t.return}if(Ge=e,Te=e=Wn(e.current,null),De=$e=n,Pe=0,Et=null,ml=Or=i0=0,Ve=It=null,n0!==null){for(n=0;n<n0.length;n++)if(t=n0[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}n0=null}return e}function hs(e,n){do{var t=Te;try{if(ki(),ar.current=Ar,sr){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sr=!1}if(r0=0,Me=pe=Ee=null,ut=!1,St=0,Ol.current=null,t===null||t.return===null){Pe=1,Et=n,Te=null;break}e:{var l=e,o=t.return,u=t,A=n;if(n=De,u.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var N=A,P=u,G=P.tag;if((P.mode&1)===0&&(G===0||G===11||G===15)){var T=P.alternate;T?(P.updateQueue=T.updateQueue,P.memoizedState=T.memoizedState,P.lanes=T.lanes):(P.updateQueue=null,P.memoizedState=null)}var h=ns(o);if(h!==null){h.flags&=-257,ts(h,o,u,l,n),h.mode&1&&es(l,N,n),n=h,A=N;var H=n.updateQueue;if(H===null){var F=new Set;F.add(A),n.updateQueue=F}else H.add(A);break e}else{if((n&1)===0){es(l,N,n),Ll();break e}A=Error(a(426))}}else if(Ce&&u.mode&1){var fe=ns(o);if(fe!==null){(fe.flags&65536)===0&&(fe.flags|=256),ts(fe,o,u,l,n),Yi(D0(A,u));break e}}l=A=D0(A,u),Pe!==4&&(Pe=2),It===null?It=[l]:It.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var E=Za(l,A,n);Ma(l,E);break e;case 1:u=A;var d=l.type,I=l.stateNode;if((l.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(jn===null||!jn.has(I)))){l.flags|=65536,n&=-n,l.lanes|=n;var L=ba(l,u,n);Ma(l,L);break e}}l=l.return}while(l!==null)}ys(t)}catch(x){n=x,Te===t&&t!==null&&(Te=t=t.return);continue}break}while(!0)}function gs(){var e=Nr.current;return Nr.current=Ar,e===null?Ar:e}function Ll(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Ge===null||(i0&268435455)===0&&(Or&268435455)===0||Jn(Ge,De)}function Pr(e,n){var t=ee;ee|=2;var r=gs();(Ge!==e||De!==n)&&(Ln=null,o0(e,n));do try{AA();break}catch(i){hs(e,i)}while(!0);if(ki(),ee=t,Nr.current=r,Te!==null)throw Error(a(261));return Ge=null,De=0,Pe}function AA(){for(;Te!==null;)vs(Te)}function dA(){for(;Te!==null&&!xu();)vs(Te)}function vs(e){var n=Bs(e.alternate,e,$e);e.memoizedProps=e.pendingProps,n===null?ys(e):Te=n,Ol.current=null}function ys(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=iA(t,n,$e),t!==null){Te=t;return}}else{if(t=lA(t,n),t!==null){t.flags&=32767,Te=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Te=null;return}}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);Pe===0&&(Pe=5)}function a0(e,n,t){var r=le,i=nn.transition;try{nn.transition=null,le=1,CA(e,n,t,r)}finally{nn.transition=i,le=r}return null}function CA(e,n,t,r){do y0();while(_n!==null);if((ee&6)!==0)throw Error(a(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(zu(e,l),e===Ge&&(Te=Ge=null,De=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||fr||(fr=!0,xs(Ut,function(){return y0(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=nn.transition,nn.transition=null;var o=le;le=1;var u=ee;ee|=4,Ol.current=null,aA(e,t),ps(t,e),yS(Li),Ft=!!Gi,Li=Gi=null,e.current=t,sA(t),Yu(),ee=u,le=o,nn.transition=l}else e.current=t;if(fr&&(fr=!1,_n=e,Tr=i),l=e.pendingLanes,l===0&&(jn=null),Vu(t.stateNode),je(e,me()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(mr)throw mr=!1,e=Tl,Tl=null,e;return(Tr&1)!==0&&e.tag!==0&&y0(),l=e.pendingLanes,(l&1)!==0?e===Rl?Nt++:(Nt=0,Rl=e):Nt=0,Yn(),null}function y0(){if(_n!==null){var e=To(Tr),n=nn.transition,t=le;try{if(nn.transition=null,le=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,Tr=0,(ee&6)!==0)throw Error(a(331));var i=ee;for(ee|=4,v=e.current;v!==null;){var l=v,o=l.child;if((v.flags&16)!==0){var u=l.deletions;if(u!==null){for(var A=0;A<u.length;A++){var N=u[A];for(v=N;v!==null;){var P=v;switch(P.tag){case 0:case 11:case 15:ct(8,P,l)}var G=P.child;if(G!==null)G.return=P,v=G;else for(;v!==null;){P=v;var T=P.sibling,h=P.return;if(Os(P),P===N){v=null;break}if(T!==null){T.return=h,v=T;break}v=h}}}var H=l.alternate;if(H!==null){var F=H.child;if(F!==null){H.child=null;do{var fe=F.sibling;F.sibling=null,F=fe}while(F!==null)}}v=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,v=o;else e:for(;v!==null;){if(l=v,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:ct(9,l,l.return)}var E=l.sibling;if(E!==null){E.return=l.return,v=E;break e}v=l.return}}var d=e.current;for(v=d;v!==null;){o=v;var I=o.child;if((o.subtreeFlags&2064)!==0&&I!==null)I.return=o,v=I;else e:for(o=d;v!==null;){if(u=v,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Ir(9,u)}}catch(x){Ne(u,u.return,x)}if(u===o){v=null;break e}var L=u.sibling;if(L!==null){L.return=u.return,v=L;break e}v=u.return}}if(ee=i,Yn(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Dt,e)}catch{}r=!0}return r}finally{le=t,nn.transition=n}}return!1}function Hs(e,n,t){n=D0(t,n),n=Za(e,n,1),e=kn(e,n,1),n=Fe(),e!==null&&(V0(e,1,n),je(e,n))}function Ne(e,n,t){if(e.tag===3)Hs(e,e,t);else for(;n!==null;){if(n.tag===3){Hs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=D0(t,e),e=ba(n,e,1),n=kn(n,e,1),e=Fe(),n!==null&&(V0(n,1,e),je(n,e));break}}n=n.return}}function cA(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Fe(),e.pingedLanes|=e.suspendedLanes&t,Ge===e&&(De&t)===t&&(Pe===4||Pe===3&&(De&130023424)===De&&500>me()-fl?o0(e,0):ml|=t),je(e,n)}function Fs(e,n){n===0&&((e.mode&1)===0?n=1:(n=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var t=Fe();e=Pn(e,n),e!==null&&(V0(e,n,t),je(e,t))}function EA(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Fs(e,t)}function IA(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(n),Fs(e,t)}var Bs;Bs=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ye.current)ke=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return ke=!1,rA(e,n,t);ke=(e.flags&131072)!==0}else ke=!1,Ce&&(n.flags&1048576)!==0&&Ea(n,bt,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;cr(e,n),e=n.pendingProps;var i=T0(n,he.current);L0(n,t),i=Xi(null,n,r,e,i,t);var l=Zi();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,we(r)?(l=!0,qt(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qi(n),i.updater=dr,n.stateNode=i,i._reactInternals=n,il(n,r,e,t),n=sl(null,n,r,!0,l,t)):(n.tag=0,Ce&&l&&Hi(n),He(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(cr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=OA(r),e=sn(r,e),i){case 0:n=al(null,n,r,e,t);break e;case 1:n=ss(null,n,r,e,t);break e;case 11:n=rs(null,n,r,e,t);break e;case 14:n=is(null,n,r,sn(r.type,e),t);break e}throw Error(a(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),al(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),ss(e,n,r,i,t);case 3:e:{if(us(n),e===null)throw Error(a(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Pa(e,n),lr(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=D0(Error(a(423)),n),n=Ss(e,n,r,t,i);break e}else if(r!==i){i=D0(Error(a(424)),n),n=Ss(e,n,r,t,i);break e}else for(Ke=Fn(n.stateNode.containerInfo.firstChild),ze=n,Ce=!0,an=null,t=Ra(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(P0(),r===i){n=Gn(e,n,t);break e}He(e,n,r,t)}n=n.child}return n;case 5:return La(n),e===null&&xi(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ui(r,i)?o=null:l!==null&&Ui(r,l)&&(n.flags|=32),as(e,n),He(e,n,o,t),n.child;case 6:return e===null&&xi(n),null;case 13:return As(e,n,t);case 4:return Ji(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=M0(n,null,r,t):He(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),rs(e,n,r,i,t);case 7:return He(e,n,n.pendingProps,t),n.child;case 8:return He(e,n,n.pendingProps.children,t),n.child;case 12:return He(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,ue(tr,r._currentValue),r._currentValue=o,l!==null)if(on(l.value,o)){if(l.children===i.children&&!Ye.current){n=Gn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var A=u.firstContext;A!==null;){if(A.context===r){if(l.tag===1){A=Mn(-1,t&-t),A.tag=2;var N=l.updateQueue;if(N!==null){N=N.shared;var P=N.pending;P===null?A.next=A:(A.next=P.next,P.next=A),N.pending=A}}l.lanes|=t,A=l.alternate,A!==null&&(A.lanes|=t),ji(l.return,t,n),u.lanes|=t;break}A=A.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(a(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),ji(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}He(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,L0(n,t),i=be(i),r=r(i),n.flags|=1,He(e,n,r,t),n.child;case 14:return r=n.type,i=sn(r,n.pendingProps),i=sn(r.type,i),is(e,n,r,i,t);case 15:return ls(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),cr(e,n),n.tag=1,we(r)?(e=!0,qt(n)):e=!1,L0(n,t),qa(n,r,i),il(n,r,i,t),sl(null,n,r,!0,e,t);case 19:return Cs(e,n,t);case 22:return os(e,n,t)}throw Error(a(156,n.tag))};function xs(e,n){return Io(e,n)}function NA(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,n,t,r){return new NA(e,n,t,r)}function Ul(e){return e=e.prototype,!(!e||!e.isReactComponent)}function OA(e){if(typeof e=="function")return Ul(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dn)return 11;if(e===Cn)return 14}return 2}function Wn(e,n){var t=e.alternate;return t===null?(t=tn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Mr(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Ul(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Be:return s0(t.children,i,l,n);case qe:o=8,i|=8;break;case Un:return e=tn(12,t,n,i|2),e.elementType=Un,e.lanes=l,e;case Qe:return e=tn(13,t,n,i),e.elementType=Qe,e.lanes=l,e;case rn:return e=tn(19,t,n,i),e.elementType=rn,e.lanes=l,e;case Ie:return Gr(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mn:o=10;break e;case $n:o=9;break e;case dn:o=11;break e;case Cn:o=14;break e;case xe:o=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return n=tn(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function s0(e,n,t,r){return e=tn(7,e,r,n),e.lanes=t,e}function Gr(e,n,t,r){return e=tn(22,e,r,n),e.elementType=Ie,e.lanes=t,e.stateNode={isHidden:!1},e}function Dl(e,n,t){return e=tn(6,e,null,n),e.lanes=t,e}function hl(e,n,t){return n=tn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function mA(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gl(e,n,t,r,i,l,o,u,A){return e=new mA(e,n,t,u,A),n===1?(n=1,l===!0&&(n|=8)):n=0,l=tn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qi(l),e}function fA(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ys(e){if(!e)return xn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(a(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(we(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(a(171))}if(e.tag===1){var t=e.type;if(we(t))return da(e,t,n)}return n}function ws(e,n,t,r,i,l,o,u,A){return e=gl(t,r,!0,e,i,l,o,u,A),e.context=Ys(null),t=e.current,r=Fe(),i=Qn(t),l=Mn(r,i),l.callback=n??null,kn(t,l,i),e.current.lanes=i,V0(e,i,r),je(e,r),e}function Lr(e,n,t,r){var i=n.current,l=Fe(),o=Qn(i);return t=Ys(t),n.context===null?n.context=t:n.pendingContext=t,n=Mn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=kn(i,n,o),e!==null&&(An(e,i,o,l),ir(e,i,o)),o}function Ur(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ks(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function vl(e,n){ks(e,n),(e=e.alternate)&&ks(e,n)}function TA(){return null}var Vs=typeof reportError=="function"?reportError:function(e){console.error(e)};function yl(e){this._internalRoot=e}Dr.prototype.render=yl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));Lr(e,n,null,null)},Dr.prototype.unmount=yl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;l0(function(){Lr(null,e,null,null)}),n[fn]=null}};function Dr(e){this._internalRoot=e}Dr.prototype.unstable_scheduleHydration=function(e){if(e){var n=Po();e={blockedOn:null,target:e,priority:n};for(var t=0;t<vn.length&&n!==0&&n<vn[t].priority;t++);vn.splice(t,0,e),t===0&&Lo(e)}};function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function js(){}function RA(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var N=Ur(o);l.call(N)}}var o=ws(n,r,e,0,null,!1,!1,"",js);return e._reactRootContainer=o,e[fn]=o.current,nt(e.nodeType===8?e.parentNode:e),l0(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var N=Ur(A);u.call(N)}}var A=gl(e,0,!1,null,null,!1,!1,"",js);return e._reactRootContainer=A,e[fn]=A.current,nt(e.nodeType===8?e.parentNode:e),l0(function(){Lr(n,A,t,r)}),A}function gr(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var A=Ur(o);u.call(A)}}Lr(n,o,e,i)}else o=RA(t,n,e,i,r);return Ur(o)}Ro=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=k0(n.pendingLanes);t!==0&&(ii(n,t|1),je(n,me()),(ee&6)===0&&(v0=me()+500,Yn()))}break;case 13:l0(function(){var r=Pn(e,1);if(r!==null){var i=Fe();An(r,e,1,i)}}),vl(e,1)}},li=function(e){if(e.tag===13){var n=Pn(e,134217728);if(n!==null){var t=Fe();An(n,e,134217728,t)}vl(e,134217728)}},po=function(e){if(e.tag===13){var n=Qn(e),t=Pn(e,n);if(t!==null){var r=Fe();An(t,e,n,r)}vl(e,n)}},Po=function(){return le},Mo=function(e,n){var t=le;try{return le=e,n()}finally{le=t}},Xr=function(e,n,t){switch(n){case"input":if(_r(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Kt(r);if(!i)throw Error(a(90));Kl(r),_r(r,i)}}}break;case"textarea":bl(e,t);break;case"select":n=t.value,n!=null&&u0(e,!!t.multiple,n,!1)}},so=Ml,uo=l0;var pA={usingClientEntryPoint:!1,Events:[it,m0,Kt,oo,ao,Ml]},Ot={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PA={bundleType:Ot.bundleType,version:Ot.version,rendererPackageName:Ot.rendererPackageName,rendererConfig:Ot.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=co(e),e===null?null:e.stateNode},findFiberByHostInstance:Ot.findFiberByHostInstance||TA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{Dt=vr.inject(PA),cn=vr}catch{}}return _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pA,_e.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hl(n))throw Error(a(200));return fA(e,n,null,t)},_e.createRoot=function(e,n){if(!Hl(e))throw Error(a(299));var t=!1,r="",i=Vs;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=gl(e,1,!1,null,null,t,!1,r,i),e[fn]=n.current,nt(e.nodeType===8?e.parentNode:e),new yl(n)},_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=co(n),e=e===null?null:e.stateNode,e},_e.flushSync=function(e){return l0(e)},_e.hydrate=function(e,n,t){if(!hr(n))throw Error(a(200));return gr(null,e,n,!0,t)},_e.hydrateRoot=function(e,n,t){if(!Hl(e))throw Error(a(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Vs;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=ws(n,null,e,1,t??null,i,!1,l,o),e[fn]=n.current,nt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Dr(n)},_e.render=function(e,n,t){if(!hr(n))throw Error(a(200));return gr(null,e,n,!1,t)},_e.unmountComponentAtNode=function(e){if(!hr(e))throw Error(a(40));return e._reactRootContainer?(l0(function(){gr(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1},_e.unstable_batchedUpdates=Ml,_e.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!hr(t))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return gr(e,n,t,!1,r)},_e.version="18.3.1-next-f1338f8080-20240426",_e}var qs;function HA(){if(qs)return Yl.exports;qs=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(S){console.error(S)}}return s(),Yl.exports=yA(),Yl.exports}var Xs;function FA(){if(Xs)return yr;Xs=1;var s=HA();return yr.createRoot=s.createRoot,yr.hydrateRoot=s.hydrateRoot,yr}var BA=FA();const xA="modulepreload",YA=function(s){return"/UMDTerpTracker/"+s},Zs={},Rt=function(S,a,m){let O=Promise.resolve();if(a&&a.length>0){let R=function(D){return Promise.all(D.map(j=>Promise.resolve(j).then(V=>({status:"fulfilled",value:V}),V=>({status:"rejected",reason:V}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));O=R(a.map(D=>{if(D=YA(D),D in Zs)return;Zs[D]=!0;const j=D.endsWith(".css"),V=j?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${D}"]${V}`))return;const J=document.createElement("link");if(J.rel=j?"stylesheet":xA,j||(J.as="script"),J.crossOrigin="",J.href=D,g&&J.setAttribute("nonce",g),document.head.appendChild(J),j)return new Promise((_,Q)=>{J.addEventListener("load",_),J.addEventListener("error",()=>Q(new Error(`Unable to preload CSS for ${D}`)))})}))}function M(R){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=R,window.dispatchEvent(f),!f.defaultPrevented)throw R}return O.then(R=>{for(const f of R||[])f.status==="rejected"&&M(f.reason);return S().catch(M)})},wA=new Set(["W","I","NG","AU"]);function kA(s){return s.creditsEarned!==void 0?s.creditsEarned:wA.has(s.grade)||s.gradePoints===0?0:s.credits}function Yr(s){let S=0,a=0,m=0;for(const O of s)m+=kA(O),!(!O.countsTowardGpa||O.gradePoints===null)&&(S+=O.credits,a+=O.credits*O.gradePoints);return{gpaCredits:S,qualityPoints:a,earnedCredits:m,gpa:S>0?a/S:null}}function lu(s){const S=s.terms.flatMap(O=>O.courses),a=Yr(S),m=Yr(s.nonGpaCredits);return{...a,earnedCredits:a.earnedCredits+m.earnedCredits}}function oC(s){const S=[];return s.terms.map(a=>(S.push(...a.courses),{term:a,termGpa:Yr(a.courses).gpa,cumulativeGpa:Yr(S).gpa}))}const _l={"A+":4,A:4,"A-":3.7,"B+":3.3,B:3,"B-":2.7,"C+":2.3,C:2,"C-":1.7,"D+":1.3,D:1,"D-":.7,F:0,XF:0},VA=["P","S","U","W","I","AU","NC","NG"],jA=[...Object.keys(_l),...VA],wr=["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","D-"];function _A(s){return jA.includes(s)}function ou(s){return s in _l}function QA(s){return ou(s)?_l[s]:null}function JA(s){return ou(s)}function au(s){const S=s.trim().toUpperCase().replace(/\s+/g,"");return S&&_A(S)?S:null}function bs(s){const S=wr.indexOf(s);return S===-1?wr.length:S}const WA=[...wr,"F"];function zA(s){return WA.reduce((S,a)=>S+(s.counts[a]??0),0)}function eu(s,S){const a=zA(s);if(a===0)return null;const m=bs(S);let O=0;for(const M of wr){if(bs(M)>m)break;O+=s.counts[M]??0}return O/a}class aC{constructor(S){Fl(this,"byCourse");Fl(this,"fallback");this.byCourse=new Map(S.map(a=>[a.courseId.toUpperCase(),a])),this.fallback=S.length>0?KA(S):null}get(S){return this.byCourse.get(S.toUpperCase())}chanceOfAtLeast(S,a){const m=this.get(S);if(m){const O=eu(m,a);if(O!==null)return{probability:O,estimated:!1}}return this.fallback?{probability:eu(this.fallback,a),estimated:!0}:{probability:null,estimated:!0}}}function KA(s){const S={};let a=0,m=0;for(const O of s){m+=O.sections,a+=O.total;for(const[M,R]of Object.entries(O.counts))S[M]=(S[M]??0)+(R??0)}return{courseId:"*",counts:S,total:a,sections:m}}function $A(s){const S=new Map;for(const a of s.terms)for(const m of a.courses){if(!m.countsTowardGpa||!m.courseId)continue;const O=S.get(m.courseId)??[];O.push({termId:a.id,grade:m.grade,credits:m.credits}),S.set(m.courseId,O)}return[...S.entries()].filter(([,a])=>a.length>1).map(([a,m])=>({courseId:a,attempts:m}))}function qA(s){const S=new Set,a=[];for(const M of[...s.terms].reverse())for(const R of[...M.courses].reverse()){if(R.countsTowardGpa&&R.courseId){if(S.has(R.courseId))continue;S.add(R.courseId)}a.push(R)}let m=0,O=0;for(const M of a)!M.countsTowardGpa||M.gradePoints===null||(m+=M.credits,O+=M.credits*M.gradePoints);return m>0?O/m:null}const su=.005,XA=.5;function Ql(s){const S=lu(s),a=S.gpa,m=s.statedCumulativeGpa,O=a!==null&&m!==null?a-m:null;return{computedGpa:a,statedGpa:m,delta:O,computedCredits:S.earnedCredits,statedCredits:s.statedCumulativeCredits,ok:O!==null&&Math.abs(O)<=su}}function ZA(s){const S=Ql(s),a=[...s.warnings];if(S.delta!==null&&!S.ok){a.push({code:"gpa_mismatch",message:`We read your GPA as ${S.computedGpa.toFixed(3)}, but your transcript says ${S.statedGpa.toFixed(3)}. Something did not parse correctly, so treat the numbers below as approximate.`,detail:`delta ${S.delta.toFixed(3)}`});const m=$A(s);if(m.length>0){const O=qA(s),M=O!==null&&S.statedGpa!==null&&Math.abs(O-S.statedGpa)<=su,R=m.map(f=>f.courseId).join(", ");a.push({code:"repeated_course",message:M?`${R} appears on your transcript more than once. UMD's repeat policy counts only the later attempt toward your GPA, and TerpTracker does not do that yet — it is counting both. That fully explains the difference above: ignoring the earlier attempt gives exactly the ${S.statedGpa.toFixed(3)} your transcript prints. Trust your transcript, not this page.`:`${R} appears on your transcript more than once, which may be why the numbers above disagree — TerpTracker counts every attempt, and UMD's repeat policy does not. It does not explain the whole difference, so something else is off as well.`,detail:m.map(f=>`${f.courseId}×${f.attempts.length}`).join(" ")})}}return S.statedCredits!==null&&Math.abs(S.computedCredits-S.statedCredits)>XA&&a.push({code:"gpa_mismatch",message:`We counted ${S.computedCredits} earned credits but your transcript says ${S.statedCredits}.`,detail:"credit total mismatch"}),{...s,warnings:a}}const uu={rowTolerance:.5,cellGap:1.4};function bA(s,S=uu){if(s.items.length===0)return[];const a=[...s.items].sort((R,f)=>f.y-R.y||R.x-f.x),m=[];let O=[],M=a[0].y;for(const R of a){const f=Math.max(R.height,1)*S.rowTolerance;O.length>0&&Math.abs(R.y-M)>f&&(m.push(O),O=[]),O.length===0&&(M=R.y),O.push(R)}return O.length>0&&m.push(O),m.map(R=>ed(s.pageNumber,R,S))}function ed(s,S,a){var R;const m=[...S].sort((f,g)=>f.x-g.x),O=[];for(const f of m){const g=O[O.length-1],D=Math.max(f.height,1)*a.cellGap;if(g&&f.x-g.endX<=D){const j=g.text.endsWith(" ")||f.text.startsWith(" ")?"":" ",V=f.x-g.endX<.2?"":j;g.text=`${g.text}${V}${f.text}`,g.endX=Math.max(g.endX,f.x+f.width)}else O.push({text:f.text,x:f.x,endX:f.x+f.width})}const M=O.map(f=>({...f,text:f.text.replace(/\s+/g," ").trim()})).filter(f=>f.text.length>0);return{page:s,y:((R=m[0])==null?void 0:R.y)??0,cells:M,text:M.map(f=>f.text).join(" ")}}function nd(s,S=uu){return s.flatMap(a=>bA(a,S))}const Su="A\\+|A-|B\\+|B-|C\\+|C-|D\\+|D-|XF|NC|AU|NG|A|B|C|D|F|P|S|U|W|I",Tt="\\d+\\.\\d{2}",Vr="[A-Z]{4}\\s?\\d{3}[A-Z]?",td=new RegExp(`^(${Vr})\\s+(.+?)\\s+(${Su})\\s+(${Tt})\\s+(${Tt})(?:\\s+(${Tt}))?(?:\\s+(.*))?$`),rd=new RegExp(`^(?:(\\d{4})\\s+)?(.+?)\\s+(${Su})\\s+(${Tt})(?:\\s+(${Vr}))?(?:\\s+(.*))?$`),id=new RegExp(`^(${Vr})\\s+([A-Z0-9]{4})\\s+(${Tt})\\s+([A-Z]{2,4})\\s+([AD])\\b`);function Jl(s){return s.replace(/\s+/g,"").toUpperCase()}const ld=/\b(FS[A-Z]{2}|DS[A-Z]{2}|DV[A-Z]{2}|SCIS)\b/g;function Au(s){if(!s)return;const S=[...s.matchAll(ld)].map(m=>m[1]),a=[...new Set(S)];return a.length>0?a:void 0}function kr(s){if(s===void 0)return;const S=Number(s.replace(/,/g,""));return Number.isFinite(S)?S:void 0}function od(s){const S=td.exec(s);if(!S)return null;const a=au(S[3]),m=kr(S[4]),O=kr(S[5]);if(!a||m===void 0||m>24)return null;const M={courseId:Jl(S[1]),title:S[2].trim(),credits:m,grade:a,gradePoints:QA(a),countsTowardGpa:JA(a),source:"institution"};O!==void 0&&(M.creditsEarned=O);const R=Au(S[7]);return R&&(M.genEd=R),M}function ad(s,S){const a=rd.exec(s);if(!a)return null;const m=au(a[3]),O=kr(a[4]);if(!m||O===void 0||O>24)return null;const M=a[5],R={courseId:M?Jl(M):"",title:a[2].trim(),credits:O,creditsEarned:O,grade:m,gradePoints:null,countsTowardGpa:!1,source:S},f=Au(a[6]);return f&&(R.genEd=f),R}function sd(s){const S=id.exec(s);if(!S)return null;const a=kr(S[3]);return a===void 0||a>24?null:{dropped:S[5]==="D",entry:{courseId:Jl(S[1]),title:"",credits:a,grade:"NG",gradePoints:null,countsTowardGpa:!1,source:"institution",section:S[2].toUpperCase()}}}function ud(s){return new RegExp(`^${Vr}\\b`).test(s)}const Sd=/^(Fall|Spring|Summer|Winter)(?:\s+(I{1,2}))?\s+(\d{4})\b/i,Ad=/\*\*\s*Transfer\s+Credit\s+Information/i,dd=/\bHistoric\s+Course\s+Information/i,Cd=/\*\*\s*Current\s+Course\s+Information/i,cd=/^(Advanced\s+Placement|AP\s+Exam|International\s+Baccalaureate|IB\s+Exam|CLEP)/i,Ed=/\b(College|University|Institute|School|Academy)\b/i,Id=/^Semester:\s*Attempted\s+([\d.]+);\s*Earned\s+([\d.]+);\s*QPoints\s+([\d.]+);\s*GPA\s+([\d.]+)/i,Nd=/^UG\s+Cumulative:\s*([\d.]+);\s*([\d.]+);\s*([\d.]+);\s*([\d.]+)/i,Od=/^UG\s+Cumulative\s+Credit\s*:\s*([\d.]+)/i,md=/^UG\s+Cumulative\s+GPA\s*:\s*([\d.]+)/i,fd=/^Major\s*:\s*(.+)$/i,Td=/^[=\s]+$/;function Rd(s){const S=Sd.exec(s);if(!S)return null;const a=S[1],m={season:a.charAt(0).toUpperCase()+a.slice(1).toLowerCase(),year:Number(S[3])};return S[2]&&(m.session=S[2].toUpperCase()),m}function pd(s){var J,_;const S=[],a=[],m=[],O=[];let M="header",R="transfer",f=null,g,D=null,j=null,V;for(const Q of s){const B=Q.text;if(!B||Td.test(B))continue;if(Ad.test(B)){M="transfer",f=null;continue}if(dd.test(B)){M="historic",f=null;continue}if(Cd.test(B)){M="current",f=null;continue}if(M==="header"){V??(V=(_=(J=fd.exec(B))==null?void 0:J[1])==null?void 0:_.trim());continue}const Y=Id.exec(B);if(Y){f&&(f.statedTermCredits=Number(Y[2]),f.statedTermGpa=Number(Y[4]));continue}const oe=Nd.exec(B);if(oe){j=Number(oe[2]),D=Number(oe[4]);continue}const Re=Od.exec(B);if(Re){j=Number(Re[1]);continue}const Z=md.exec(B);if(Z){D=Number(Z[1]);continue}const K=Rd(B);if(K){const ae=`${K.year}-${K.season}${K.session?` ${K.session}`:""}`;M==="historic"?(f={id:ae,season:K.season,year:K.year,courses:[],statedTermGpa:null,statedTermCredits:null},K.session&&(f.session=K.session),a.push(f)):(f=null,M==="current"&&(g=ae));continue}if(M==="transfer"){if(cd.test(B)){R="exam";continue}if(Ed.test(B)&&!/\d\.\d{2}/.test(B)){R="transfer";continue}const ae=ad(B,R);ae&&m.push(ae);continue}if(M==="current"){const ae=sd(B);ae&&!ae.dropped&&(g&&(ae.entry.termId=g),O.push(ae.entry));continue}const Oe=od(B);if(Oe){f?f.courses.push(Oe):S.push({code:"unparsed_line",message:`${Oe.courseId} was not under any term heading.`,page:Q.page});continue}ud(B)&&S.push({code:"unparsed_line",message:"A row looked like a course but could not be read.",page:Q.page,detail:B})}return a.length===0&&S.push({code:"no_terms_found",message:"No semesters were found in this PDF. It may not be a UMD transcript."}),D===null&&S.push({code:"missing_stated_gpa",message:"The transcript did not print a cumulative GPA, so the parse could not be checked against it."}),{major:V,terms:a,nonGpaCredits:m,inProgress:O,statedCumulativeGpa:D,statedCumulativeCredits:j,warnings:S}}function Pd(s){return pd(nd(s))}const Wl={charWidth:6,lineHeight:12,fontHeight:10,top:780};function Md(s,S,a=Wl){const m=[];return S.replace(/\r\n/g,`
`).split(`
`).forEach((M,R)=>{const f=a.top-R*a.lineHeight;for(const g of M.matchAll(/\S+/g)){const D=g.index;m.push({text:g[0],x:D*a.charWidth,y:f,width:g[0].length*a.charWidth,height:a.fontHeight})}}),{pageNumber:s,items:m}}function Gd(s,S=Wl){return s.split("\f").map((a,m)=>Md(m+1,a,S))}function du(s,S=Wl){return ZA(Pd(Gd(s,S)))}const Ld=`                    UNIVERSITY OF MARYLAND
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

`,Ud=`                    UNIVERSITY OF MARYLAND
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

`,Dd=`                    UNIVERSITY OF MARYLAND
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

`,hd=`                    UNIVERSITY OF MARYLAND
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

`,gd=`                    UNIVERSITY OF MARYLAND
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

`,vd=`                    UNIVERSITY OF MARYLAND
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

`,yd=`                    UNIVERSITY OF MARYLAND
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

`,Hd=`                    UNIVERSITY OF MARYLAND
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

`,Fd=`                    UNIVERSITY OF MARYLAND
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

`,Bd=`                    UNIVERSITY OF MARYLAND
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

`,xd=`                    UNIVERSITY OF MARYLAND
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

`,Yd=`                    UNIVERSITY OF MARYLAND
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

`,wd=`                    UNIVERSITY OF MARYLAND
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

`,kd=`                    UNIVERSITY OF MARYLAND
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

`,Vd=`                    UNIVERSITY OF MARYLAND
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

`,jd=`                    UNIVERSITY OF MARYLAND
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

`,_d=`                    UNIVERSITY OF MARYLAND
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

`,Qd=`                    UNIVERSITY OF MARYLAND
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

`,Jd=`                    UNIVERSITY OF MARYLAND
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

`,Wd=`                    UNIVERSITY OF MARYLAND
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

`,zd=`                    UNIVERSITY OF MARYLAND
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

`,Kd=`                    UNIVERSITY OF MARYLAND
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

`,$d=`                    UNIVERSITY OF MARYLAND
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

`,qd=`                    UNIVERSITY OF MARYLAND
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

`,Xd=`                    UNIVERSITY OF MARYLAND
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

`,Zd=`                    UNIVERSITY OF MARYLAND
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

`,bd=`                    UNIVERSITY OF MARYLAND
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

`,e1=`                    UNIVERSITY OF MARYLAND
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

`,n1=`                    UNIVERSITY OF MARYLAND
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

`,t1=`                    UNIVERSITY OF MARYLAND
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

`,r1=`                    UNIVERSITY OF MARYLAND
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

`,i1=`                    UNIVERSITY OF MARYLAND
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

`,l1=`                    UNIVERSITY OF MARYLAND
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

`,o1=`                    UNIVERSITY OF MARYLAND
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

`,a1=`                    UNIVERSITY OF MARYLAND
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

`,s1=`                    UNIVERSITY OF MARYLAND
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

`,u1=`                    UNIVERSITY OF MARYLAND
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

`,S1=`                    UNIVERSITY OF MARYLAND
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

`,A1=`                    UNIVERSITY OF MARYLAND
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

`,d1=`                    UNIVERSITY OF MARYLAND
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

`,C1=`                    UNIVERSITY OF MARYLAND
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

`,c1=`                    UNIVERSITY OF MARYLAND
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

`,E1=`                    UNIVERSITY OF MARYLAND
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

`,I1=`                    UNIVERSITY OF MARYLAND
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

`,N1=`                    UNIVERSITY OF MARYLAND
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

`,O1=`                    UNIVERSITY OF MARYLAND
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

`,m1=`                    UNIVERSITY OF MARYLAND
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

`,f1=`                    UNIVERSITY OF MARYLAND
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

`,T1=`                    UNIVERSITY OF MARYLAND
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

`,R1=`                    UNIVERSITY OF MARYLAND
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

`,p1=`                    UNIVERSITY OF MARYLAND
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

`,P1=`                    UNIVERSITY OF MARYLAND
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

`,Kn=[{slug:"information-science",name:"Information Science",short:"InfoSci",hasRequirements:!0},{slug:"computer-science",name:"Computer Science",short:"CS",hasRequirements:!0},{slug:"management",name:"Management",short:"Mgmt",hasRequirements:!0},{slug:"finance",name:"Finance",short:"Finance",hasRequirements:!0},{slug:"information-systems",name:"Information Systems",short:"Info Sys",hasRequirements:!0},{slug:"psychology",name:"Psychology",short:"Psych",hasRequirements:!1},{slug:"criminology",name:"Criminology and Criminal Justice",short:"CCJS",hasRequirements:!1},{slug:"economics",name:"Economics",short:"Econ",hasRequirements:!1},{slug:"biology",name:"Biological Sciences",short:"Biology",hasRequirements:!1},{slug:"government",name:"Government and Politics",short:"GVPT",hasRequirements:!1},{slug:"mechanical-engineering",name:"Mechanical Engineering",short:"Mech E",hasRequirements:!1},{slug:"communication",name:"Communication",short:"Comm",hasRequirements:!1},{slug:"kinesiology",name:"Kinesiology",short:"Kines",hasRequirements:!1}],ft=[{slug:"freshman",label:"Freshman"},{slug:"sophomore",label:"Sophomore"},{slug:"junior",label:"Junior"},{slug:"senior",label:"Senior"}],Cu=[{id:"sample-information-science-freshman",major:"information-science",year:"freshman",text:Ld},{id:"sample-information-science-sophomore",major:"information-science",year:"sophomore",text:Ud},{id:"sample-information-science-junior",major:"information-science",year:"junior",text:Dd},{id:"sample-information-science-senior",major:"information-science",year:"senior",text:hd},{id:"sample-computer-science-freshman",major:"computer-science",year:"freshman",text:gd},{id:"sample-computer-science-sophomore",major:"computer-science",year:"sophomore",text:vd},{id:"sample-computer-science-junior",major:"computer-science",year:"junior",text:yd},{id:"sample-computer-science-senior",major:"computer-science",year:"senior",text:Hd},{id:"sample-management-freshman",major:"management",year:"freshman",text:Fd},{id:"sample-management-sophomore",major:"management",year:"sophomore",text:Bd},{id:"sample-management-junior",major:"management",year:"junior",text:xd},{id:"sample-management-senior",major:"management",year:"senior",text:Yd},{id:"sample-finance-freshman",major:"finance",year:"freshman",text:wd},{id:"sample-finance-sophomore",major:"finance",year:"sophomore",text:kd},{id:"sample-finance-junior",major:"finance",year:"junior",text:Vd},{id:"sample-finance-senior",major:"finance",year:"senior",text:jd},{id:"sample-information-systems-freshman",major:"information-systems",year:"freshman",text:_d},{id:"sample-information-systems-sophomore",major:"information-systems",year:"sophomore",text:Qd},{id:"sample-information-systems-junior",major:"information-systems",year:"junior",text:Jd},{id:"sample-information-systems-senior",major:"information-systems",year:"senior",text:Wd},{id:"sample-psychology-freshman",major:"psychology",year:"freshman",text:zd},{id:"sample-psychology-sophomore",major:"psychology",year:"sophomore",text:Kd},{id:"sample-psychology-junior",major:"psychology",year:"junior",text:$d},{id:"sample-psychology-senior",major:"psychology",year:"senior",text:qd},{id:"sample-criminology-freshman",major:"criminology",year:"freshman",text:Xd},{id:"sample-criminology-sophomore",major:"criminology",year:"sophomore",text:Zd},{id:"sample-criminology-junior",major:"criminology",year:"junior",text:bd},{id:"sample-criminology-senior",major:"criminology",year:"senior",text:e1},{id:"sample-economics-freshman",major:"economics",year:"freshman",text:n1},{id:"sample-economics-sophomore",major:"economics",year:"sophomore",text:t1},{id:"sample-economics-junior",major:"economics",year:"junior",text:r1},{id:"sample-economics-senior",major:"economics",year:"senior",text:i1},{id:"sample-biology-freshman",major:"biology",year:"freshman",text:l1},{id:"sample-biology-sophomore",major:"biology",year:"sophomore",text:o1},{id:"sample-biology-junior",major:"biology",year:"junior",text:a1},{id:"sample-biology-senior",major:"biology",year:"senior",text:s1},{id:"sample-government-freshman",major:"government",year:"freshman",text:u1},{id:"sample-government-sophomore",major:"government",year:"sophomore",text:S1},{id:"sample-government-junior",major:"government",year:"junior",text:A1},{id:"sample-government-senior",major:"government",year:"senior",text:d1},{id:"sample-mechanical-engineering-freshman",major:"mechanical-engineering",year:"freshman",text:C1},{id:"sample-mechanical-engineering-sophomore",major:"mechanical-engineering",year:"sophomore",text:c1},{id:"sample-mechanical-engineering-junior",major:"mechanical-engineering",year:"junior",text:E1},{id:"sample-mechanical-engineering-senior",major:"mechanical-engineering",year:"senior",text:I1},{id:"sample-communication-freshman",major:"communication",year:"freshman",text:N1},{id:"sample-communication-sophomore",major:"communication",year:"sophomore",text:O1},{id:"sample-communication-junior",major:"communication",year:"junior",text:m1},{id:"sample-communication-senior",major:"communication",year:"senior",text:f1},{id:"sample-kinesiology-freshman",major:"kinesiology",year:"freshman",text:T1},{id:"sample-kinesiology-sophomore",major:"kinesiology",year:"sophomore",text:R1},{id:"sample-kinesiology-junior",major:"kinesiology",year:"junior",text:p1},{id:"sample-kinesiology-senior",major:"kinesiology",year:"senior",text:P1}];function cu(s){return s?Cu.find(S=>S.id===s):void 0}function Fr(s,S){return Cu.find(a=>a.major===s&&a.year===S)}function M1(s){const S=cu(s);return S?Kn.find(a=>a.slug===S.major):void 0}const Eu="https://github.com/sanirb-debug/UMDTerpTracker",G1={matches:"Computed GPA matches the GPA printed on the transcript.",differs:"Computed GPA does NOT match the GPA printed on the transcript.","transcript-printed-none":"The transcript printed no cumulative GPA to compare against."};function L1(s){const S=`Something looks wrong on the ${s.view} view`,m=["Reporting something that looks wrong. I haven't described the problem yet — adding that below.","","## What I was doing","",`- View: ${s.view}`,`- Data: ${s.source==="sample"?`demo sample \`${s.sampleId??"unknown"}\``:"my own uploaded transcript"}`,"","## What the app reported","",`- Parse warnings: ${s.warningCodes.length>0?s.warningCodes.join(", "):"none"}`,`- ${G1[s.gpaCheck]}`,"","## What went wrong","","<!-- Please describe what you expected and what you saw. -->","","---","","This report was prefilled by TerpTracker and deliberately contains no","transcript contents: no courses, grades, credits, GPA values, name or","student ID. Please do not paste any of those into a public issue."].join(`
`),O=`${Eu}/issues/new?title=${encodeURIComponent(S)}&body=${encodeURIComponent(m)}`;return{title:S,body:m,url:O}}function Iu(s){const{view:S,transcript:a,sampleId:m}=s;if(!a)return{view:S,source:m?"sample":"upload",...m?{sampleId:m}:{},warningCodes:[],gpaCheck:"transcript-printed-none"};const O=Ql(a),M=O.statedGpa===null?"transcript-printed-none":O.ok?"matches":"differs";return{view:S,source:m?"sample":"upload",...m?{sampleId:m}:{},warningCodes:[...new Set(a.warnings.map(R=>R.code))],gpaCheck:M}}function U1({view:s,transcript:S,sampleId:a,className:m}){const[O,M]=b.useState(!1),R=b.useMemo(()=>L1(Iu({view:s,transcript:S,sampleId:a})),[s,S,a]);return O?c.jsxs("div",{className:"mt-2 w-full rounded-lg border border-neutral-300 p-3 text-left dark:border-neutral-700",children:[c.jsx("h3",{className:"text-sm font-semibold",children:"This is exactly what will be sent"}),c.jsx("p",{className:"mt-1 text-xs text-neutral-600 dark:text-neutral-300",children:"It opens a public GitHub issue in a new tab, prefilled with the text below and nothing else. No part of your transcript is included — no courses, grades, GPA, name or student ID. Please keep it that way when you add your description."}),c.jsx("p",{className:"mt-3 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Title"}),c.jsx("pre",{className:"mt-1 overflow-x-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:R.title}),c.jsx("p",{className:"mt-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Body"}),c.jsx("pre",{className:"mt-1 max-h-56 overflow-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:R.body}),c.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2",children:[c.jsx("a",{className:"button text-xs",href:R.url,target:"_blank",rel:"noopener noreferrer",onClick:()=>M(!1),children:"Open GitHub issue"}),c.jsx("button",{type:"button",className:"button-quiet text-xs",onClick:()=>M(!1),children:"Cancel"})]})]}):c.jsx("button",{type:"button",onClick:()=>M(!0),className:`inline-flex min-h-11 items-center text-xs text-neutral-500 underline decoration-dotted underline-offset-2 hover:text-neutral-900 sm:min-h-0 dark:hover:text-neutral-100 ${m??""}`,children:"Something looks wrong"})}const Br=300,D1={gpaMatched:null,auditMatched:null,usedFor:[],missing:[],note:""},Nu={yes:"Yes — the GPA matched my transcript",no:"No — the GPA did not match my transcript","not-sure":"Not sure"},Ou={yes:"Yes — it matched my official UMD degree audit",no:"No — it did not match my official UMD degree audit","didnt-check":"Didn't check","not-applicable":"N/A — no major audit was available"},mu={"check-gpa":"Check my GPA","plan-semester":"Plan next semester","hit-target":"Work out how to hit a GPA target","check-requirements":"Check degree requirements",looking:"Just looking"},fu={major:"My major",minor:"My minor",pathway:"A pathway (e.g. pre-nursing, pre-med)","schedule-planning":"Schedule planning",other:"Something else"},Hr={gpaMatched:Nu,auditMatched:Ou,usedFor:mu,missing:fu},h1={matches:"computed GPA matched the printed GPA",differs:"computed GPA did NOT match the printed GPA","transcript-printed-none":"the transcript printed no GPA to compare against"};function g1(s){const S=["feedback"];return s.gpaMatched==="no"&&S.push("gpa-mismatch-reported"),s.auditMatched==="no"&&S.push("audit-mismatch-reported"),s.missing.length>0&&S.push("coverage-request"),S}function Tu(s){return s.replace(/\r?\n+/g," ").trim().slice(0,Br)}function v1(s,S){const a=Tu(S.note),m=`Feedback from the ${s.view} view`,O=(D,j)=>D.length>0?D.map(V=>`\`${j[V]}\``).join(", "):"_no answer_",R=["Feedback submitted through the app.","","## Did it get the numbers right","",`- **GPA matched my transcript:** ${S.gpaMatched?Nu[S.gpaMatched]:"_no answer_"}`,`- **Audit matched my official UMD degree audit:** ${S.auditMatched?Ou[S.auditMatched]:"_no answer_"}`,"","## What it was used for","",`- ${O(S.usedFor,mu)}`,"","## What is missing","",`- ${O(S.missing,fu)}`,"","## Anything else","",a.length>0?a:"_nothing added_","","## Automatically attached","",`- View: ${s.view}`,`- Data: ${s.source==="sample"?`demo sample \`${s.sampleId??"unknown"}\``:"the reader’s own uploaded transcript"}`,`- Parse warnings: ${s.warningCodes.length>0?s.warningCodes.join(", "):"none"}`,`- Self-check: ${h1[s.gpaCheck]}`,"","---","","Everything above the free-text answer was prefilled by TerpTracker from a","fixed set of options and deliberately contains no transcript contents: no","courses, grades, credits, GPA values, name or student ID."].join(`
`),f=g1(S),g=`${Eu}/issues/new?title=${encodeURIComponent(m)}&labels=${encodeURIComponent(f.join(","))}&body=${encodeURIComponent(R)}`;return{title:m,body:R,labels:f,url:g}}const y1=["yes","no","not-sure"],H1=["yes","no","didnt-check","not-applicable"],F1=["check-gpa","plan-semester","hit-target","check-requirements","looking"],B1=["major","minor","pathway","schedule-planning","other"];function nu({view:s,transcript:S,sampleId:a,hasMajorAudit:m,label:O="Feedback",className:M,onClose:R,startOpen:f=!1}){const[g,D]=b.useState(f?"form":"closed"),[j,V]=b.useState({...D1,auditMatched:m===!1?"not-applicable":null}),J=b.useMemo(()=>v1(Iu({view:s,transcript:S,sampleId:a}),j),[s,S,a,j]),_=()=>{D("closed"),R==null||R()},Q=(Y,oe)=>V(Re=>{const Z=Re[Y],K=Z.includes(oe)?Z.filter(Oe=>Oe!==oe):[...Z,oe];return{...Re,[Y]:K}});if(g==="closed")return c.jsx("button",{type:"button",onClick:()=>D("form"),className:`inline-flex min-h-11 items-center text-xs text-neutral-500 underline decoration-dotted underline-offset-2 hover:text-neutral-900 sm:min-h-0 dark:hover:text-neutral-100 ${M??""}`,children:O});if(g==="preview")return c.jsxs("div",{className:"mt-2 w-full rounded-lg border border-neutral-300 p-3 text-left dark:border-neutral-700",children:[c.jsx("h3",{className:"text-sm font-semibold",children:"This is exactly what will be sent"}),c.jsx("p",{className:"mt-1 text-xs text-neutral-600 dark:text-neutral-300",children:"It opens a public GitHub issue in a new tab, prefilled with the text below and nothing else."}),c.jsx("p",{className:"mt-3 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Title"}),c.jsx("pre",{className:"mt-1 overflow-x-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:J.title}),c.jsx("p",{className:"mt-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Labels"}),c.jsx("pre",{className:"mt-1 overflow-x-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:J.labels.join(", ")}),c.jsx("p",{className:"mt-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-500",children:"Body"}),c.jsx("pre",{className:"mt-1 max-h-64 overflow-auto whitespace-pre-wrap rounded bg-neutral-100 p-2 text-xs dark:bg-neutral-950",children:J.body}),c.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2",children:[c.jsx("a",{className:"button text-xs",href:J.url,target:"_blank",rel:"noopener noreferrer",onClick:_,children:"Open GitHub issue"}),c.jsx("button",{type:"button",className:"button-quiet text-xs",onClick:()=>D("form"),children:"Back"}),c.jsx("button",{type:"button",className:"button-quiet text-xs",onClick:_,children:"Cancel"})]})]});const B=Tu(j.note).length;return c.jsxs("div",{className:"mt-2 w-full rounded-lg border border-neutral-300 p-4 text-left dark:border-neutral-700",children:[c.jsx("h3",{className:"font-semibold",children:"How did this go?"}),c.jsx("p",{className:"mt-1 text-xs text-neutral-600 dark:text-neutral-300",children:"Every answer is optional. This becomes a public GitHub issue, and you will see exactly what it says before it opens."}),c.jsx(tu,{legend:"Did the GPA we calculated match your transcript?",name:"gpa-matched",options:y1,labels:Hr.gpaMatched,value:j.gpaMatched,onChange:Y=>V(oe=>({...oe,gpaMatched:Y}))}),c.jsx(tu,{legend:m===!1?"Did the requirements match your official UMD degree audit? (no audit was available for your major)":"Did the requirements match your official UMD degree audit?",name:"audit-matched",options:H1,labels:Hr.auditMatched,value:j.auditMatched,onChange:Y=>V(oe=>({...oe,auditMatched:Y}))}),c.jsx(ru,{legend:"What did you use this for?",options:F1,labels:Hr.usedFor,chosen:j.usedFor,onToggle:Y=>Q("usedFor",Y)}),c.jsx(ru,{legend:"What's missing?",options:B1,labels:Hr.missing,chosen:j.missing,onToggle:Y=>Q("missing",Y)}),c.jsxs("fieldset",{className:"mt-4",children:[c.jsx("legend",{className:"text-sm font-medium",children:"Anything else?"}),c.jsxs("p",{className:"mt-1 rounded border border-caution-400/60 bg-caution-50 px-2 py-1.5 text-xs text-caution-900 dark:border-caution-700/60 dark:bg-caution-950/30 dark:text-caution-100",children:[c.jsx("strong",{children:"This goes into a public GitHub issue."})," Please don't paste grades, course lists, your name, or your student ID."]}),c.jsx("textarea",{className:"input mt-2 h-24",maxLength:Br,value:j.note,placeholder:"Optional",onChange:Y=>V(oe=>({...oe,note:Y.target.value.slice(0,Br)}))}),c.jsxs("p",{className:"mt-1 text-right text-xs tabular-nums text-neutral-500",children:[B,"/",Br]})]}),c.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2",children:[c.jsx("button",{type:"button",className:"button text-xs",onClick:()=>D("preview"),children:"Show me what will be sent"}),c.jsx("button",{type:"button",className:"button-quiet text-xs",onClick:_,children:"Cancel"})]})]})}function tu({legend:s,name:S,options:a,labels:m,value:O,onChange:M}){return c.jsxs("fieldset",{className:"mt-4",children:[c.jsx("legend",{className:"text-sm font-medium",children:s}),c.jsx("div",{className:"mt-1 flex flex-wrap gap-2",children:a.map(R=>c.jsxs("label",{className:`inline-flex min-h-11 cursor-pointer items-center rounded-lg border px-3 py-1.5 text-xs sm:min-h-0 ${O===R?"border-accent-600 bg-accent-50 font-semibold dark:bg-accent-950/40":"border-neutral-300 hover:border-accent-600 dark:border-neutral-700"}`,children:[c.jsx("input",{type:"radio",name:S,className:"sr-only",checked:O===R,onChange:()=>M(R)}),m[R]]},R))})]})}function ru({legend:s,options:S,labels:a,chosen:m,onToggle:O}){return c.jsxs("fieldset",{className:"mt-4",children:[c.jsx("legend",{className:"text-sm font-medium",children:s}),c.jsx("div",{className:"mt-1 flex flex-wrap gap-2",children:S.map(M=>c.jsxs("label",{className:`inline-flex min-h-11 cursor-pointer items-center rounded-lg border px-3 py-1.5 text-xs sm:min-h-0 ${m.includes(M)?"border-accent-600 bg-accent-50 font-semibold dark:bg-accent-950/40":"border-neutral-300 hover:border-accent-600 dark:border-neutral-700"}`,children:[c.jsx("input",{type:"checkbox",className:"sr-only",checked:m.includes(M),onChange:()=>O(M)}),a[M]]},M))})]})}function xr(s){return typeof s=="string"&&s.trim().length>0}function x1(s){const S=[];return xr(s.text)||S.push("text"),xr(s.speaker)||S.push("speaker"),xr(s.sourceUrl)||S.push("sourceUrl"),S.length===0?null:`missing ${S.join(", ")}`}function Y1(s,S){const a=s==null?void 0:s.quotes;if(!Array.isArray(a))return[];const m=[];return a.forEach((O,M)=>{x1(O??{})===null&&m.push({text:O.text.trim(),speaker:O.speaker.trim(),...xr(O.context)?{context:O.context.trim()}:{},sourceUrl:O.sourceUrl.trim()})}),m}function w1(s,S,a=Math.random){if(s.length===0)return null;const m=s.length>1?s.filter(O=>O!==S):s;return m[Math.min(m.length-1,Math.floor(a()*m.length))]}const k1=[{text:"",speaker:"",context:"",sourceUrl:""}],V1={quotes:k1},j1=Y1(V1);function _1({quotes:s=j1,random:S}){const[a,m]=b.useState(null),O=b.useRef(null),M=b.useRef(null),R=b.useCallback(()=>{var f;m(null),(f=O.current)==null||f.focus()},[]);return b.useEffect(()=>{if(!a)return;const f=g=>{g.key==="Escape"&&R()};return document.addEventListener("keydown",f),()=>document.removeEventListener("keydown",f)},[a,R]),s.length===0?null:c.jsxs("div",{className:"pad-safe-bottom pointer-events-none fixed inset-x-0 bottom-0 z-40 flex flex-col items-end gap-2 pr-3 sm:inset-x-auto sm:right-3 sm:pb-3",children:[a&&c.jsxs("blockquote",{id:"testudo-quote",className:"pointer-events-auto max-w-xs rounded-xl border border-neutral-300 bg-white p-3 text-left shadow-lg dark:border-neutral-700 dark:bg-neutral-900",children:[c.jsx("p",{className:"text-sm",children:a.text}),c.jsxs("footer",{className:"mt-2 text-xs text-neutral-500 dark:text-neutral-400",children:[c.jsx("cite",{className:"not-italic font-medium text-neutral-700 dark:text-neutral-200",children:a.speaker}),a.context&&c.jsxs("span",{children:[" — ",a.context]})," ",c.jsx("a",{className:"underline",href:a.sourceUrl,target:"_blank",rel:"noopener noreferrer",children:"source"})]})]}),c.jsx("button",{ref:O,type:"button","aria-label":a?"Hide the quote about Maryland":"Testudo has something to say about Maryland","aria-expanded":a!==null,"aria-controls":a?"testudo-quote":void 0,onClick:()=>m(f=>{if(f)return null;const g=w1(s,M.current??void 0,S);return M.current=g,g}),className:"pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full text-lg leading-none opacity-30 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 sm:h-8 sm:w-8",children:c.jsx("span",{"aria-hidden":"true",children:"🐢"})})]})}class Q1 extends Error{constructor(){super("This PDF has no text in it, so it looks like a scan or a photo. Download the unofficial transcript straight from Testudo instead of scanning a printout."),this.name="ScannedPdfError"}}const Ru=2,pu="terptracker.transcript.v1",Pu="terptracker.plan.v1";function Mu(s){try{const S=window.localStorage.getItem(s);return S?JSON.parse(S):null}catch{return null}}function zl(s,S){try{window.localStorage.setItem(s,JSON.stringify(S))}catch{}}function J1(){const s=Mu(pu);if(!s)return{transcript:null,stale:!1};const S=s;return typeof S.version!="number"||S.version!==Ru?{transcript:null,sampleId:S.sampleId,stale:!0}:{transcript:S.transcript,sampleId:S.sampleId,stale:!1}}function iu(s,S){const a={version:Ru,transcript:s};S&&(a.sampleId=S),zl(pu,a)}const Gu="terptracker.feedbackPrompt.v1";function W1(){try{return window.localStorage.getItem(Gu)!==null}catch{return!0}}function z1(){zl(Gu,{seen:!0})}const sC=()=>Mu(Pu),uC=s=>zl(Pu,s),K1="terptracker.";function Lu(){try{const s=[];for(let S=0;S<window.localStorage.length;S+=1){const a=window.localStorage.key(S);a!=null&&a.startsWith(K1)&&s.push(a)}return s.sort()}catch{return[]}}function Uu(){const s=Lu();try{for(const S of s)window.localStorage.removeItem(S)}catch{}return s}function $1({onCleared:s}){const[S,a]=b.useState(null),m=()=>{const O=Uu();a({removed:O,remaining:Lu()}),s()};return c.jsxs("div",{children:[c.jsx("button",{type:"button",className:"button-quiet",onClick:m,children:"Clear my data"}),S&&c.jsx("p",{role:"status",className:`mt-2 text-xs ${S.remaining.length===0?"text-positive-700 dark:text-positive-300":"text-critical-700 dark:text-critical-300"}`,children:S.remaining.length>0?c.jsxs(c.Fragment,{children:["Something is still stored (",S.remaining.join(", "),"). Clearing this site's data from your browser settings will remove it."]}):S.removed.length===0?c.jsx(c.Fragment,{children:"Nothing was stored — there was nothing to clear."}):c.jsxs(c.Fragment,{children:["Cleared. Removed ",S.removed.length," ",S.removed.length===1?"item":"items"," (",S.removed.join(", "),") and local storage now holds nothing for this site. You can confirm it in your browser's developer tools under Application → Local Storage."]})})]})}function q1({sampleId:s,onParsed:S,onForget:a}){const[m,O]=b.useState(null),[M,R]=b.useState(!1),[f,g]=b.useState(null),[D,j]=b.useState(!1),V=b.useCallback(async _=>{O(null),R(!0),g({phase:"reading"});try{const{parseTranscriptFile:Q}=await Rt(async()=>{const{parseTranscriptFile:Y}=await import("./client-DWsWZp14.js");return{parseTranscriptFile:Y}},[]),B=await Q(_,g);if(B.terms.length===0){O("No semesters turned up in that PDF. Make sure it is the unofficial transcript from Testudo.");return}S(B)}catch(Q){O(Q instanceof Q1?Q.message:`That PDF could not be read. ${Q instanceof Error?Q.message:""}`.trim())}finally{R(!1),g(null)}},[S]),J=b.useCallback((_,Q)=>{O(null),S(du(Q),_)},[S]);return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("p",{className:"rounded-lg border border-positive-300 bg-positive-50 px-4 py-3 text-sm text-positive-900 dark:border-positive-800 dark:bg-positive-950/30 dark:text-positive-100",children:[c.jsx("strong",{children:"Your transcript is read here in your browser and never uploaded."})," There is no server and no account — the file is opened by code running in this tab, and nothing about it is sent anywhere. You can watch that yourself in your browser's network tab."]}),c.jsxs("section",{onDragOver:_=>{_.preventDefault(),j(!0)},onDragLeave:()=>j(!1),onDrop:_=>{_.preventDefault(),j(!1);const Q=_.dataTransfer.files[0];Q&&V(Q)},className:`rounded-xl border p-5 text-center transition-colors sm:border-2 sm:border-dashed sm:p-10 ${D?"border-accent-600 bg-accent-50 dark:bg-accent-950/40":"border-neutral-200 dark:border-neutral-800 sm:border-neutral-300 sm:dark:border-neutral-700"}`,children:[c.jsxs("p",{className:"mb-1 text-lg font-semibold",children:[c.jsx("span",{className:"sm:hidden",children:"Add your unofficial transcript"}),c.jsx("span",{className:"hidden sm:inline",children:"Drop your unofficial transcript here"})]}),c.jsx("p",{className:"mb-5 text-sm text-neutral-500 dark:text-neutral-400",children:"Testudo → Academics → Unofficial Transcript → save as PDF"}),c.jsx("input",{id:"transcript-file",type:"file",accept:"application/pdf,.pdf",className:"sr-only",disabled:M,onChange:_=>{var B;const Q=(B=_.target.files)==null?void 0:B[0];Q&&V(Q),_.target.value=""}}),M?c.jsx(X1,{progress:f}):c.jsx("label",{htmlFor:"transcript-file",className:"button w-full cursor-pointer text-base focus-within:ring-2 focus-within:ring-accent-600 focus-within:ring-offset-2 sm:w-auto sm:text-sm dark:focus-within:ring-offset-neutral-950",children:"Choose file"}),c.jsx("p",{className:"mt-3 hidden text-xs text-neutral-500 sm:block dark:text-neutral-400",children:"or drag it onto this box"})]}),c.jsxs("section",{className:"card",children:[c.jsx("h2",{className:"font-semibold",children:"See how it works"}),c.jsx("p",{className:"mt-1 text-sm text-neutral-600 dark:text-neutral-300",children:"Rather not hand your transcript to a site you have never heard of? Reasonable. Pick a major and a year — no file, no upload."}),c.jsx(Z1,{sampleId:s,onLoad:J}),c.jsx("div",{className:"mt-4 hidden overflow-x-auto sm:block",children:c.jsxs("table",{className:"w-full border-separate border-spacing-1 text-sm",children:[c.jsx("caption",{className:"sr-only",children:"Sample transcripts by major and class year. Majors marked “no audit” have no degree requirements on file."}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{className:"sticky left-0 z-10 w-24 bg-white dark:bg-neutral-900"}),Kn.map(_=>c.jsxs("th",{scope:"col",className:"px-1 pb-1 align-bottom",children:[c.jsx("span",{className:"block whitespace-nowrap text-xs font-semibold",children:_.short}),c.jsx("span",{className:`block whitespace-nowrap text-[10px] font-normal ${_.hasRequirements?"text-positive-600 dark:text-positive-400":"text-neutral-400 dark:text-neutral-500"}`,children:_.hasRequirements?"audit":"no audit"})]},_.slug))]})}),c.jsx("tbody",{children:ft.map(_=>c.jsxs("tr",{children:[c.jsx("th",{scope:"row",className:"sticky left-0 z-10 bg-white pr-2 text-right text-xs font-medium text-neutral-500 dark:bg-neutral-900",children:_.label}),Kn.map(Q=>{const B=Fr(Q.slug,_.slug);if(!B)return c.jsx("td",{},Q.slug);const Y=B.id===s;return c.jsx("td",{className:"p-0",children:c.jsx("button",{type:"button",onClick:()=>J(B.id,B.text),"aria-current":Y?"true":void 0,"aria-label":`${Q.name}, ${_.label}${Q.hasRequirements?"":" (no degree audit available)"}`,className:`w-full whitespace-nowrap rounded border px-3 py-2 text-xs transition-colors hover:border-accent-600 ${Y?"border-accent-600 bg-accent-50 font-semibold dark:bg-accent-950/40":Q.hasRequirements?"border-positive-500/40 dark:border-positive-500/30":"border-dashed border-neutral-300 dark:border-neutral-700"}`,children:_.label})},Q.slug)})]},_.slug))})]})}),c.jsx("p",{className:"mt-3 hidden text-xs text-neutral-500 sm:block dark:text-neutral-400",children:"Solid columns have degree requirements on file and produce a full audit. Dashed ones do not — everything else works, but the audit page says so instead of guessing. Requirements are transcribed from the catalog by hand, one major at a time."}),c.jsx("p",{className:"mt-3 text-xs text-neutral-500 sm:hidden dark:text-neutral-400",children:"Majors marked “no audit” have no degree requirements on file — everything else works, but the audit page says so instead of guessing. Requirements are transcribed from the catalog by hand, one major at a time."}),c.jsx("p",{className:"mt-2 text-xs text-neutral-500 dark:text-neutral-400",children:"Each major is one invented student across four years, so later years contain everything the earlier ones do. Entirely synthetic; no real transcript is in this repository."})]}),m&&c.jsxs("section",{role:"alert",className:"rounded-lg border border-critical-300 bg-critical-50 p-4 text-sm text-critical-800 dark:border-critical-900 dark:bg-critical-950/40 dark:text-critical-200",children:[c.jsx("h2",{className:"font-semibold",children:"That did not work"}),c.jsx("p",{className:"mt-1",children:m}),c.jsx("p",{className:"mt-2 text-xs text-critical-700 dark:text-critical-300",children:"Nothing was kept and nothing was sent anywhere. Pick another file and try again, or use a sample above to see what the app does."})]}),c.jsxs("section",{className:"card space-y-2 text-sm",children:[c.jsx("h2",{className:"font-semibold",children:"Where your transcript goes"}),c.jsx("p",{className:"text-neutral-600 dark:text-neutral-300",children:"Nowhere. The PDF is read by JavaScript running in this tab. There is no server, no account and no upload — the file never leaves your device, and you can check that in your browser's network tab."}),c.jsx("p",{className:"text-neutral-600 dark:text-neutral-300",children:"The parsed result is kept in this browser's local storage so you do not have to re-upload every visit. That is the only copy that exists anywhere, and the button below deletes it."}),c.jsx("div",{className:"pt-1",children:c.jsx($1,{onCleared:a})})]})]})}function X1({progress:s}){const S=(s==null?void 0:s.phase)==="parsing"?`Reading page ${s.page} of ${s.totalPages}…`:"Opening your transcript…";return c.jsxs("div",{role:"status",className:"flex min-h-11 items-center justify-center gap-3 text-sm text-neutral-600 dark:text-neutral-300",children:[c.jsx("span",{"aria-hidden":"true",className:"h-5 w-5 animate-spin rounded-full border-2 border-neutral-300 border-t-accent-700 dark:border-neutral-700 dark:border-t-accent-700"}),S]})}function Z1({sampleId:s,onLoad:S}){const[a,m]=b.useState(()=>{const D=Kn.find(j=>ft.some(V=>{var J;return((J=Fr(j.slug,V.slug))==null?void 0:J.id)===s}));return(D==null?void 0:D.slug)??Kn[0].slug}),[O,M]=b.useState(()=>{var D;return((D=ft.find(j=>{var V;return((V=Fr(a,j.slug))==null?void 0:V.id)===s}))==null?void 0:D.slug)??ft[0].slug}),R=Kn.find(D=>D.slug===a)??Kn[0],f=Fr(a,O),g=f!=null&&f.id===s;return c.jsxs("div",{className:"mt-4 space-y-3 sm:hidden",children:[c.jsxs("label",{className:"block",children:[c.jsx("span",{className:"label",children:"Major"}),c.jsx("select",{className:"select mt-1",value:a,onChange:D=>m(D.target.value),children:Kn.map(D=>c.jsxs("option",{value:D.slug,children:[D.name,D.hasRequirements?"":" (no audit)"]},D.slug))})]}),c.jsxs("label",{className:"block",children:[c.jsx("span",{className:"label",children:"Class year"}),c.jsx("select",{className:"select mt-1",value:O,onChange:D=>M(D.target.value),children:ft.map(D=>c.jsx("option",{value:D.slug,children:D.label},D.slug))})]}),c.jsx("button",{type:"button",className:"button w-full",disabled:!f||g,onClick:()=>f&&S(f.id,f.text),children:g?"Showing this sample":"Load this sample"}),c.jsx("p",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:R.hasRequirements?`${R.name} has degree requirements on file, so this one produces a full audit.`:`${R.name} has no degree requirements on file yet — everything works except the audit page, which says so instead of guessing.`})]})}const b1=b.lazy(()=>Rt(()=>import("./Dashboard-B7U27mkT.js"),__vite__mapDeps([0,1,2])).then(s=>({default:s.DashboardPage}))),eC=b.lazy(()=>Rt(()=>import("./Planner-DNfhMckK.js"),__vite__mapDeps([3,2,4])).then(s=>({default:s.PlannerPage}))),nC=b.lazy(()=>Rt(()=>import("./Schedule-Lx4aVMQC.js"),__vite__mapDeps([5,1,4,2])).then(s=>({default:s.SchedulePage}))),tC=b.lazy(()=>Rt(()=>import("./Requirements-BTh1CZOY.js"),__vite__mapDeps([6,2,4])).then(s=>({default:s.RequirementsPage}))),Vl={dashboard:"Dashboard",requirements:"Requirements",schedule:"Schedule",planner:"Planner",upload:"Transcript"},rC=[{id:"dashboard",label:"Dashboard"},{id:"requirements",label:"Requirements"},{id:"schedule",label:"Schedule"},{id:"planner",label:"Planner"},{id:"upload",label:"Transcript"}];function iC(){var Y,oe,Re;const[s,S]=b.useState(null),[a,m]=b.useState(void 0),[O,M]=b.useState(!1),[R,f]=b.useState("upload"),[g,D]=b.useState(!1);b.useEffect(()=>{const Z=J1();if(Z.transcript){S(Z.transcript),m(Z.sampleId),f("dashboard");return}if(!Z.stale)return;const K=cu(Z.sampleId);if(K){const Oe=du(K.text);S(Oe),m(K.id),iu(Oe,K.id),f("dashboard");return}M(!0)},[]);const j=b.useCallback((Z,K)=>{S(Z),m(K),M(!1),iu(Z,K),f("dashboard")},[]),V=b.useCallback(Z=>{f(K=>((K==="requirements"||K==="planner")&&Z!==K&&!W1()&&(z1(),D(!0)),Z))},[]),J=b.useCallback(()=>{Uu(),S(null),m(void 0),f("upload")},[]),_=b.useMemo(()=>s?lu(s):null,[s]),Q=b.useMemo(()=>s?Ql(s):null,[s]),B=!!(Q&&Q.statedGpa!==null&&!Q.ok);return c.jsxs("div",{className:"pad-safe-x mx-auto min-h-screen min-h-dvh max-w-4xl py-8",children:[c.jsxs("header",{className:"mb-4 flex flex-wrap items-start justify-between gap-3",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-2xl font-bold tracking-tight",children:["Terp",c.jsx("span",{className:"text-terp-red",children:"Tracker"})]}),c.jsxs("p",{className:"text-sm text-neutral-500 dark:text-neutral-400",children:[(s==null?void 0:s.major)??"Your transcript, your GPA, and what you need next"," — all in this tab."]})]}),(_==null?void 0:_.gpa)!=null&&c.jsxs("div",{className:"text-right",children:[c.jsxs("div",{className:`text-3xl font-bold tabular-nums ${B?"text-caution-600 dark:text-caution-400":""}`,children:[_.gpa.toFixed(3),B&&c.jsx("span",{className:"ml-1 align-top text-base",children:"⚠"})]}),c.jsxs("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:[_.earnedCredits," credits"]}),c.jsx(U1,{view:Vl[R],transcript:s,sampleId:a,className:"mt-1"})]})]}),c.jsxs("p",{className:"mb-4 rounded-lg border border-caution-400/60 bg-caution-50 px-3 py-2 text-sm text-caution-900 dark:border-caution-700/60 dark:bg-caution-950/30 dark:text-caution-200",children:[c.jsx("strong",{children:"Unofficial."})," Not affiliated with the University of Maryland. Confirm anything here with your advisor and your official degree audit before you register."]}),O&&c.jsxs("p",{role:"alert",className:"mb-4 rounded-lg border border-info-400/60 bg-info-50 px-3 py-2 text-sm text-info-900 dark:border-info-700/60 dark:bg-info-950/30 dark:text-info-200",children:[c.jsx("strong",{children:"TerpTracker got better at reading transcripts since you last used it."})," ","Your saved copy was read by the older version and would have shown requirements as unmet that you have actually finished, so it has been cleared. Drop your PDF in again to pick up the new checks — it only ever lived in this browser, so there is nothing to recover."]}),a&&c.jsxs("p",{className:"mb-4 rounded-lg border border-info-400/60 bg-info-50 px-3 py-2 text-sm text-info-900 dark:border-info-700/60 dark:bg-info-950/30 dark:text-info-200",children:["Sample data — an invented ",c.jsx("strong",{children:((Y=M1(a))==null?void 0:Y.name)??"demo"})," student, not your own record. Everything below is real behaviour on invented data; load your own transcript from the Transcript tab whenever you like."]}),B&&Q&&c.jsxs("p",{role:"alert",className:"mb-4 rounded-lg border border-caution-500 bg-caution-100 px-3 py-2 text-sm text-caution-900 dark:border-caution-600 dark:bg-caution-950/50 dark:text-caution-100",children:[c.jsx("strong",{children:"This GPA does not match your transcript."})," We compute"," ",(oe=Q.computedGpa)==null?void 0:oe.toFixed(3)," but your transcript prints ",(Re=Q.statedGpa)==null?void 0:Re.toFixed(3),", so something did not parse correctly. Treat every number here as unreliable until it agrees."]}),c.jsx("nav",{className:"mb-6 flex flex-wrap gap-1 border-b border-neutral-200 dark:border-neutral-800 sm:flex-nowrap",children:rC.map(({id:Z,label:K})=>c.jsx("button",{type:"button",onClick:()=>V(Z),disabled:Z!=="upload"&&!s,"aria-current":R===Z?"page":void 0,className:`-mb-px min-h-11 border-b-2 px-3 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-0 sm:px-4 ${R===Z?"border-accent-600 text-accent-700 dark:text-accent-400":"border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"}`,children:K},Z))}),c.jsx("main",{children:c.jsxs(b.Suspense,{fallback:c.jsx("p",{className:"text-sm text-neutral-500",children:"Loading…"}),children:[R==="upload"&&c.jsx(q1,{sampleId:a,onParsed:j,onForget:J}),R==="dashboard"&&s&&c.jsx(b1,{transcript:s}),R==="requirements"&&s&&c.jsx(tC,{transcript:s,sampleId:a}),R==="schedule"&&s&&c.jsx(nC,{transcript:s}),R==="planner"&&s&&c.jsx(eC,{transcript:s})]})}),g&&c.jsxs("section",{className:"mt-8 rounded-lg border border-info-300 bg-info-50 p-4 dark:border-info-800 dark:bg-info-950/30",children:[c.jsxs("p",{className:"text-sm",children:[c.jsx("strong",{children:"Did this get it right?"})," A few taps would help — especially whether the GPA and the requirements matched your official records."]}),c.jsx(nu,{view:Vl[R],transcript:s,sampleId:a,startOpen:!0,onClose:()=>D(!1)}),c.jsx("button",{type:"button",className:"mt-2 text-xs text-neutral-500 underline decoration-dotted underline-offset-2",onClick:()=>D(!1),children:"No thanks"})]}),c.jsxs("footer",{className:"mt-12 border-t border-neutral-200 pt-4 text-xs text-neutral-500 dark:border-neutral-800",children:["Course data from api.umd.io, grades and ratings from PlanetTerp. Both are run by students and volunteers, and both are cached here rather than called on your behalf.",c.jsx("div",{className:"mt-2",children:c.jsx(nu,{view:Vl[R],transcript:s,sampleId:a})})]}),c.jsx(_1,{})]})}const Du=document.getElementById("root");if(!Du)throw new Error("missing #root");BA.createRoot(Du).render(c.jsx(b.StrictMode,{children:c.jsx(iC,{})}));export{aC as D,nu as F,su as G,wr as P,U1 as S,Rt as _,QA as a,uC as b,lu as c,Q1 as d,uu as e,nd as f,oC as g,bA as h,pd as i,c as j,sC as l,Pd as p,b as r,Ql as s,ZA as w};
