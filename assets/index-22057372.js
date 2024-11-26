function t1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function ec(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tc={exports:{}},ao={},nc={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mr=Symbol.for("react.element"),n1=Symbol.for("react.portal"),r1=Symbol.for("react.fragment"),i1=Symbol.for("react.strict_mode"),o1=Symbol.for("react.profiler"),l1=Symbol.for("react.provider"),a1=Symbol.for("react.context"),s1=Symbol.for("react.forward_ref"),u1=Symbol.for("react.suspense"),c1=Symbol.for("react.memo"),d1=Symbol.for("react.lazy"),js=Symbol.iterator;function f1(e){return e===null||typeof e!="object"?null:(e=js&&e[js]||e["@@iterator"],typeof e=="function"?e:null)}var rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ic=Object.assign,oc={};function Mn(e,t,n){this.props=e,this.context=t,this.refs=oc,this.updater=n||rc}Mn.prototype.isReactComponent={};Mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lc(){}lc.prototype=Mn.prototype;function ga(e,t,n){this.props=e,this.context=t,this.refs=oc,this.updater=n||rc}var va=ga.prototype=new lc;va.constructor=ga;ic(va,Mn.prototype);va.isPureReactComponent=!0;var Ps=Array.isArray,ac=Object.prototype.hasOwnProperty,ya={current:null},sc={key:!0,ref:!0,__self:!0,__source:!0};function uc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)ac.call(t,r)&&!sc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Mr,type:e,key:o,ref:l,props:i,_owner:ya.current}}function p1(e,t){return{$$typeof:Mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mr}function h1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _s=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?h1(""+e.key):t.toString(36)}function vi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Mr:case n1:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ho(l,0):r,Ps(i)?(n="",e!=null&&(n=e.replace(_s,"$&/")+"/"),vi(i,t,n,"",function(u){return u})):i!=null&&(xa(i)&&(i=p1(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(_s,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ps(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Ho(o,a);l+=vi(o,t,n,s,i)}else if(s=f1(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Ho(o,a++),l+=vi(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Vr(e,t,n){if(e==null)return e;var r=[],i=0;return vi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function m1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},yi={transition:null},g1={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:yi,ReactCurrentOwner:ya};M.Children={map:Vr,forEach:function(e,t,n){Vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vr(e,function(){t++}),t},toArray:function(e){return Vr(e,function(t){return t})||[]},only:function(e){if(!xa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Mn;M.Fragment=r1;M.Profiler=o1;M.PureComponent=ga;M.StrictMode=i1;M.Suspense=u1;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g1;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ic({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ya.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ac.call(t,s)&&!sc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Mr,type:e.type,key:i,ref:o,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:a1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l1,_context:e},e.Consumer=e};M.createElement=uc;M.createFactory=function(e){var t=uc.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:s1,render:e}};M.isValidElement=xa;M.lazy=function(e){return{$$typeof:d1,_payload:{_status:-1,_result:e},_init:m1}};M.memo=function(e,t){return{$$typeof:c1,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=yi.transition;yi.transition={};try{e()}finally{yi.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return ke.current.useCallback(e,t)};M.useContext=function(e){return ke.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};M.useEffect=function(e,t){return ke.current.useEffect(e,t)};M.useId=function(){return ke.current.useId()};M.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ke.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};M.useRef=function(e){return ke.current.useRef(e)};M.useState=function(e){return ke.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ke.current.useTransition()};M.version="18.2.0";nc.exports=M;var j=nc.exports;const Pt=ec(j),gl=t1({__proto__:null,default:Pt},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1=j,y1=Symbol.for("react.element"),x1=Symbol.for("react.fragment"),w1=Object.prototype.hasOwnProperty,C1=v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k1={key:!0,ref:!0,__self:!0,__source:!0};function cc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)w1.call(t,r)&&!k1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:y1,type:e,key:o,ref:l,props:i,_owner:C1.current}}ao.Fragment=x1;ao.jsx=cc;ao.jsxs=cc;tc.exports=ao;var d=tc.exports,vl={},dc={exports:{}},Me={},fc={exports:{}},pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var F=T.length;T.push(L);e:for(;0<F;){var Z=F-1>>>1,ie=T[Z];if(0<i(ie,L))T[Z]=L,T[F]=ie,F=Z;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],F=T.pop();if(F!==L){T[0]=F;e:for(var Z=0,ie=T.length,Hr=ie>>>1;Z<Hr;){var Ht=2*(Z+1)-1,Bo=T[Ht],Wt=Ht+1,Wr=T[Wt];if(0>i(Bo,F))Wt<ie&&0>i(Wr,Bo)?(T[Z]=Wr,T[Wt]=F,Z=Wt):(T[Z]=Bo,T[Ht]=F,Z=Ht);else if(Wt<ie&&0>i(Wr,F))T[Z]=Wr,T[Wt]=F,Z=Wt;else break e}}return L}function i(T,L){var F=T.sortIndex-L.sortIndex;return F!==0?F:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],h=1,m=null,g=3,w=!1,y=!1,v=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=T)r(u),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(u)}}function x(T){if(v=!1,p(T),!y)if(n(s)!==null)y=!0,Uo(E);else{var L=n(u);L!==null&&Ao(x,L.startTime-T)}}function E(T,L){y=!1,v&&(v=!1,f(R),R=-1),w=!0;var F=g;try{for(p(L),m=n(s);m!==null&&(!(m.expirationTime>L)||T&&!Ve());){var Z=m.callback;if(typeof Z=="function"){m.callback=null,g=m.priorityLevel;var ie=Z(m.expirationTime<=L);L=e.unstable_now(),typeof ie=="function"?m.callback=ie:m===n(s)&&r(s),p(L)}else r(s);m=n(s)}if(m!==null)var Hr=!0;else{var Ht=n(u);Ht!==null&&Ao(x,Ht.startTime-L),Hr=!1}return Hr}finally{m=null,g=F,w=!1}}var _=!1,S=null,R=-1,B=5,N=-1;function Ve(){return!(e.unstable_now()-N<B)}function Hn(){if(S!==null){var T=e.unstable_now();N=T;var L=!0;try{L=S(!0,T)}finally{L?Wn():(_=!1,S=null)}}else _=!1}var Wn;if(typeof c=="function")Wn=function(){c(Hn)};else if(typeof MessageChannel<"u"){var Es=new MessageChannel,e1=Es.port2;Es.port1.onmessage=Hn,Wn=function(){e1.postMessage(null)}}else Wn=function(){P(Hn,0)};function Uo(T){S=T,_||(_=!0,Wn())}function Ao(T,L){R=P(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Uo(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var F=g;g=L;try{return T()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var F=g;g=T;try{return L()}finally{g=F}},e.unstable_scheduleCallback=function(T,L,F){var Z=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Z+F:Z):F=Z,T){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=F+ie,T={id:h++,callback:L,priorityLevel:T,startTime:F,expirationTime:ie,sortIndex:-1},F>Z?(T.sortIndex=F,t(u,T),n(s)===null&&T===n(u)&&(v?(f(R),R=-1):v=!0,Ao(x,F-Z))):(T.sortIndex=ie,t(s,T),y||w||(y=!0,Uo(E))),T},e.unstable_shouldYield=Ve,e.unstable_wrapCallback=function(T){var L=g;return function(){var F=g;g=L;try{return T.apply(this,arguments)}finally{g=F}}}})(pc);fc.exports=pc;var S1=fc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc=j,Fe=S1;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mc=new Set,hr={};function rn(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(hr[e]=t,e=0;e<t.length;e++)mc.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yl=Object.prototype.hasOwnProperty,E1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zs={},Ts={};function j1(e){return yl.call(Ts,e)?!0:yl.call(zs,e)?!1:E1.test(e)?Ts[e]=!0:(zs[e]=!0,!1)}function P1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _1(e,t,n,r){if(t===null||typeof t>"u"||P1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var wa=/[\-:]([a-z])/g;function Ca(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wa,Ca);fe[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wa,Ca);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wa,Ca);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function ka(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_1(t,n,i,r)&&(n=null),r||i===null?j1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),sn=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),Sa=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),vc=Symbol.for("react.context"),Ea=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),ja=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),yc=Symbol.for("react.offscreen"),Rs=Symbol.iterator;function Vn(e){return e===null||typeof e!="object"?null:(e=Rs&&e[Rs]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Wo;function qn(e){if(Wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wo=t&&t[1]||""}return`
`+Wo+e}var Vo=!1;function Qo(e,t){if(!e||Vo)return"";Vo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Vo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qn(e):""}function z1(e){switch(e.tag){case 5:return qn(e.type);case 16:return qn("Lazy");case 13:return qn("Suspense");case 19:return qn("SuspenseList");case 0:case 2:case 15:return e=Qo(e.type,!1),e;case 11:return e=Qo(e.type.render,!1),e;case 1:return e=Qo(e.type,!0),e;default:return""}}function kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case un:return"Fragment";case sn:return"Portal";case xl:return"Profiler";case Sa:return"StrictMode";case wl:return"Suspense";case Cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vc:return(e.displayName||"Context")+".Consumer";case gc:return(e._context.displayName||"Context")+".Provider";case Ea:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ja:return t=e.displayName||null,t!==null?t:kl(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return kl(e(t))}catch{}}return null}function T1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kl(t);case 8:return t===Sa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function It(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R1(e){var t=xc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=R1(e))}function wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sl(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $s(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=It(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cc(e,t){t=t.checked,t!=null&&ka(e,"checked",t,!1)}function El(e,t){Cc(e,t);var n=It(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&jl(e,t.type,It(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ls(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jl(e,t,n){(t!=="number"||Li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var er=Array.isArray;function wn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ns(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(er(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:It(n)}}function kc(e,t){var n=It(t.value),r=It(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,Ec=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$1=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){$1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ir[t]=ir[e]})});function jc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ir.hasOwnProperty(e)&&ir[e]?(""+t).trim():t+"px"}function Pc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var L1=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(L1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rl=null;function Pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $l=null,Cn=null,kn=null;function Ms(e){if(e=Dr(e)){if(typeof $l!="function")throw Error(k(280));var t=e.stateNode;t&&(t=po(t),$l(e.stateNode,e.type,t))}}function _c(e){Cn?kn?kn.push(e):kn=[e]:Cn=e}function zc(){if(Cn){var e=Cn,t=kn;if(kn=Cn=null,Ms(e),t)for(e=0;e<t.length;e++)Ms(t[e])}}function Tc(e,t){return e(t)}function Rc(){}var Go=!1;function $c(e,t,n){if(Go)return e(t,n);Go=!0;try{return Tc(e,t,n)}finally{Go=!1,(Cn!==null||kn!==null)&&(Rc(),zc())}}function gr(e,t){var n=e.stateNode;if(n===null)return null;var r=po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ll=!1;if(ft)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){Ll=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{Ll=!1}function N1(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var or=!1,Ni=null,Fi=!1,Nl=null,F1={onError:function(e){or=!0,Ni=e}};function M1(e,t,n,r,i,o,l,a,s){or=!1,Ni=null,N1.apply(F1,arguments)}function O1(e,t,n,r,i,o,l,a,s){if(M1.apply(this,arguments),or){if(or){var u=Ni;or=!1,Ni=null}else throw Error(k(198));Fi||(Fi=!0,Nl=u)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Os(e){if(on(e)!==e)throw Error(k(188))}function I1(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Os(i),e;if(o===r)return Os(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Nc(e){return e=I1(e),e!==null?Fc(e):null}function Fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fc(e);if(t!==null)return t;e=e.sibling}return null}var Mc=Fe.unstable_scheduleCallback,Is=Fe.unstable_cancelCallback,D1=Fe.unstable_shouldYield,U1=Fe.unstable_requestPaint,b=Fe.unstable_now,A1=Fe.unstable_getCurrentPriorityLevel,_a=Fe.unstable_ImmediatePriority,Oc=Fe.unstable_UserBlockingPriority,Mi=Fe.unstable_NormalPriority,B1=Fe.unstable_LowPriority,Ic=Fe.unstable_IdlePriority,so=null,rt=null;function H1(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(so,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:Q1,W1=Math.log,V1=Math.LN2;function Q1(e){return e>>>=0,e===0?32:31-(W1(e)/V1|0)|0}var Jr=64,Xr=4194304;function tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=tr(a):(o&=l,o!==0&&(r=tr(o)))}else l=n&~i,l!==0?r=tr(l):o!==0&&(r=tr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),i=1<<n,r|=e[n],t&=~i;return r}function G1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Xe(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=G1(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Fl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dc(){var e=Jr;return Jr<<=1,!(Jr&4194240)&&(Jr=64),e}function Ko(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function J1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Xe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function za(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Uc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ac,Ta,Bc,Hc,Wc,Ml=!1,Yr=[],_t=null,zt=null,Tt=null,vr=new Map,yr=new Map,Ct=[],X1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ds(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(t.pointerId)}}function Gn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Dr(t),t!==null&&Ta(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Y1(e,t,n,r,i){switch(t){case"focusin":return _t=Gn(_t,e,t,n,r,i),!0;case"dragenter":return zt=Gn(zt,e,t,n,r,i),!0;case"mouseover":return Tt=Gn(Tt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return vr.set(o,Gn(vr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,yr.set(o,Gn(yr.get(o)||null,e,t,n,r,i)),!0}return!1}function Vc(e){var t=Gt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=Lc(n),t!==null){e.blockedOn=t,Wc(e.priority,function(){Bc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ol(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Rl=r,n.target.dispatchEvent(r),Rl=null}else return t=Dr(n),t!==null&&Ta(t),e.blockedOn=n,!1;t.shift()}return!0}function Us(e,t,n){xi(e)&&n.delete(t)}function Z1(){Ml=!1,_t!==null&&xi(_t)&&(_t=null),zt!==null&&xi(zt)&&(zt=null),Tt!==null&&xi(Tt)&&(Tt=null),vr.forEach(Us),yr.forEach(Us)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ml||(Ml=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,Z1)))}function xr(e){function t(i){return Kn(i,e)}if(0<Yr.length){Kn(Yr[0],e);for(var n=1;n<Yr.length;n++){var r=Yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Kn(_t,e),zt!==null&&Kn(zt,e),Tt!==null&&Kn(Tt,e),vr.forEach(t),yr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)Vc(n),n.blockedOn===null&&Ct.shift()}var Sn=gt.ReactCurrentBatchConfig,Ii=!0;function b1(e,t,n,r){var i=U,o=Sn.transition;Sn.transition=null;try{U=1,Ra(e,t,n,r)}finally{U=i,Sn.transition=o}}function q1(e,t,n,r){var i=U,o=Sn.transition;Sn.transition=null;try{U=4,Ra(e,t,n,r)}finally{U=i,Sn.transition=o}}function Ra(e,t,n,r){if(Ii){var i=Ol(e,t,n,r);if(i===null)rl(e,t,r,Di,n),Ds(e,r);else if(Y1(i,e,t,n,r))r.stopPropagation();else if(Ds(e,r),t&4&&-1<X1.indexOf(e)){for(;i!==null;){var o=Dr(i);if(o!==null&&Ac(o),o=Ol(e,t,n,r),o===null&&rl(e,t,r,Di,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else rl(e,t,r,null,n)}}var Di=null;function Ol(e,t,n,r){if(Di=null,e=Pa(r),e=Gt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Di=e,null}function Qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A1()){case _a:return 1;case Oc:return 4;case Mi:case B1:return 16;case Ic:return 536870912;default:return 16}default:return 16}}var St=null,$a=null,wi=null;function Gc(){if(wi)return wi;var e,t=$a,n=t.length,r,i="value"in St?St.value:St.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return wi=i.slice(e,1<r?1-r:void 0)}function Ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function As(){return!1}function Oe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zr:As,this.isPropagationStopped=As,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},La=Oe(On),Ir=X({},On,{view:0,detail:0}),ep=Oe(Ir),Jo,Xo,Jn,uo=X({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(Jo=e.screenX-Jn.screenX,Xo=e.screenY-Jn.screenY):Xo=Jo=0,Jn=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),Bs=Oe(uo),tp=X({},uo,{dataTransfer:0}),np=Oe(tp),rp=X({},Ir,{relatedTarget:0}),Yo=Oe(rp),ip=X({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),op=Oe(ip),lp=X({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ap=Oe(lp),sp=X({},On,{data:0}),Hs=Oe(sp),up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dp[e])?!!t[e]:!1}function Na(){return fp}var pp=X({},Ir,{key:function(e){if(e.key){var t=up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(e){return e.type==="keypress"?Ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hp=Oe(pp),mp=X({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ws=Oe(mp),gp=X({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),vp=Oe(gp),yp=X({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),xp=Oe(yp),wp=X({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cp=Oe(wp),kp=[9,13,27,32],Fa=ft&&"CompositionEvent"in window,lr=null;ft&&"documentMode"in document&&(lr=document.documentMode);var Sp=ft&&"TextEvent"in window&&!lr,Kc=ft&&(!Fa||lr&&8<lr&&11>=lr),Vs=String.fromCharCode(32),Qs=!1;function Jc(e,t){switch(e){case"keyup":return kp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function Ep(e,t){switch(e){case"compositionend":return Xc(t);case"keypress":return t.which!==32?null:(Qs=!0,Vs);case"textInput":return e=t.data,e===Vs&&Qs?null:e;default:return null}}function jp(e,t){if(cn)return e==="compositionend"||!Fa&&Jc(e,t)?(e=Gc(),wi=$a=St=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kc&&t.locale!=="ko"?null:t.data;default:return null}}var Pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pp[e.type]:t==="textarea"}function Yc(e,t,n,r){_c(r),t=Ui(t,"onChange"),0<t.length&&(n=new La("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ar=null,wr=null;function _p(e){ad(e,0)}function co(e){var t=pn(e);if(wc(t))return e}function zp(e,t){if(e==="change")return t}var Zc=!1;if(ft){var Zo;if(ft){var bo="oninput"in document;if(!bo){var Ks=document.createElement("div");Ks.setAttribute("oninput","return;"),bo=typeof Ks.oninput=="function"}Zo=bo}else Zo=!1;Zc=Zo&&(!document.documentMode||9<document.documentMode)}function Js(){ar&&(ar.detachEvent("onpropertychange",bc),wr=ar=null)}function bc(e){if(e.propertyName==="value"&&co(wr)){var t=[];Yc(t,wr,e,Pa(e)),$c(_p,t)}}function Tp(e,t,n){e==="focusin"?(Js(),ar=t,wr=n,ar.attachEvent("onpropertychange",bc)):e==="focusout"&&Js()}function Rp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(wr)}function $p(e,t){if(e==="click")return co(t)}function Lp(e,t){if(e==="input"||e==="change")return co(t)}function Np(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Np;function Cr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yl.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function Xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ys(e,t){var n=Xs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xs(n)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ed(){for(var e=window,t=Li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Li(e.document)}return t}function Ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fp(e){var t=ed(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qc(n.ownerDocument.documentElement,n)){if(r!==null&&Ma(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ys(n,o);var l=Ys(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mp=ft&&"documentMode"in document&&11>=document.documentMode,dn=null,Il=null,sr=null,Dl=!1;function Zs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||dn==null||dn!==Li(r)||(r=dn,"selectionStart"in r&&Ma(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sr&&Cr(sr,r)||(sr=r,r=Ui(Il,"onSelect"),0<r.length&&(t=new La("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dn)))}function br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionend:br("Transition","TransitionEnd")},qo={},td={};ft&&(td=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function fo(e){if(qo[e])return qo[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in td)return qo[e]=t[n];return e}var nd=fo("animationend"),rd=fo("animationiteration"),id=fo("animationstart"),od=fo("transitionend"),ld=new Map,bs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){ld.set(e,t),rn(t,[e])}for(var el=0;el<bs.length;el++){var tl=bs[el],Op=tl.toLowerCase(),Ip=tl[0].toUpperCase()+tl.slice(1);Ut(Op,"on"+Ip)}Ut(nd,"onAnimationEnd");Ut(rd,"onAnimationIteration");Ut(id,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(od,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dp=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function qs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,O1(r,t,void 0,e),e.currentTarget=null}function ad(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;qs(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;qs(i,a,u),o=s}}}if(Fi)throw e=Nl,Fi=!1,Nl=null,e}function W(e,t){var n=t[Wl];n===void 0&&(n=t[Wl]=new Set);var r=e+"__bubble";n.has(r)||(sd(t,e,2,!1),n.add(r))}function nl(e,t,n){var r=0;t&&(r|=4),sd(n,e,r,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function kr(e){if(!e[qr]){e[qr]=!0,mc.forEach(function(n){n!=="selectionchange"&&(Dp.has(n)||nl(n,!1,e),nl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qr]||(t[qr]=!0,nl("selectionchange",!1,t))}}function sd(e,t,n,r){switch(Qc(t)){case 1:var i=b1;break;case 4:i=q1;break;default:i=Ra}n=i.bind(null,t,n,e),i=void 0,!Ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Gt(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}$c(function(){var u=o,h=Pa(n),m=[];e:{var g=ld.get(e);if(g!==void 0){var w=La,y=e;switch(e){case"keypress":if(Ci(n)===0)break e;case"keydown":case"keyup":w=hp;break;case"focusin":y="focus",w=Yo;break;case"focusout":y="blur",w=Yo;break;case"beforeblur":case"afterblur":w=Yo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=vp;break;case nd:case rd:case id:w=op;break;case od:w=xp;break;case"scroll":w=ep;break;case"wheel":w=Cp;break;case"copy":case"cut":case"paste":w=ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ws}var v=(t&4)!==0,P=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var c=u,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=gr(c,f),x!=null&&v.push(Sr(c,x,p)))),P)break;c=c.return}0<v.length&&(g=new w(g,y,null,n,h),m.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==Rl&&(y=n.relatedTarget||n.fromElement)&&(Gt(y)||y[pt]))break e;if((w||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?Gt(y):null,y!==null&&(P=on(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(v=Bs,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ws,x="onPointerLeave",f="onPointerEnter",c="pointer"),P=w==null?g:pn(w),p=y==null?g:pn(y),g=new v(x,c+"leave",w,n,h),g.target=P,g.relatedTarget=p,x=null,Gt(h)===u&&(v=new v(f,c+"enter",y,n,h),v.target=p,v.relatedTarget=P,x=v),P=x,w&&y)t:{for(v=w,f=y,c=0,p=v;p;p=an(p))c++;for(p=0,x=f;x;x=an(x))p++;for(;0<c-p;)v=an(v),c--;for(;0<p-c;)f=an(f),p--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=an(v),f=an(f)}v=null}else v=null;w!==null&&eu(m,g,w,v,!1),y!==null&&P!==null&&eu(m,P,y,v,!0)}}e:{if(g=u?pn(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=zp;else if(Gs(g))if(Zc)E=Lp;else{E=Rp;var _=Tp}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=$p);if(E&&(E=E(e,u))){Yc(m,E,n,h);break e}_&&_(e,g,u),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&jl(g,"number",g.value)}switch(_=u?pn(u):window,e){case"focusin":(Gs(_)||_.contentEditable==="true")&&(dn=_,Il=u,sr=null);break;case"focusout":sr=Il=dn=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,Zs(m,n,h);break;case"selectionchange":if(Mp)break;case"keydown":case"keyup":Zs(m,n,h)}var S;if(Fa)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else cn?Jc(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Kc&&n.locale!=="ko"&&(cn||R!=="onCompositionStart"?R==="onCompositionEnd"&&cn&&(S=Gc()):(St=h,$a="value"in St?St.value:St.textContent,cn=!0)),_=Ui(u,R),0<_.length&&(R=new Hs(R,e,null,n,h),m.push({event:R,listeners:_}),S?R.data=S:(S=Xc(n),S!==null&&(R.data=S)))),(S=Sp?Ep(e,n):jp(e,n))&&(u=Ui(u,"onBeforeInput"),0<u.length&&(h=new Hs("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:u}),h.data=S))}ad(m,t)})}function Sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ui(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=gr(e,n),o!=null&&r.unshift(Sr(e,o,i)),o=gr(e,t),o!=null&&r.push(Sr(e,o,i))),e=e.return}return r}function an(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=gr(n,o),s!=null&&l.unshift(Sr(n,s,a))):i||(s=gr(n,o),s!=null&&l.push(Sr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Up=/\r\n?/g,Ap=/\u0000|\uFFFD/g;function tu(e){return(typeof e=="string"?e:""+e).replace(Up,`
`).replace(Ap,"")}function ei(e,t,n){if(t=tu(t),tu(e)!==t&&n)throw Error(k(425))}function Ai(){}var Ul=null,Al=null;function Bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hl=typeof setTimeout=="function"?setTimeout:void 0,Bp=typeof clearTimeout=="function"?clearTimeout:void 0,nu=typeof Promise=="function"?Promise:void 0,Hp=typeof queueMicrotask=="function"?queueMicrotask:typeof nu<"u"?function(e){return nu.resolve(null).then(e).catch(Wp)}:Hl;function Wp(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ru(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var In=Math.random().toString(36).slice(2),nt="__reactFiber$"+In,Er="__reactProps$"+In,pt="__reactContainer$"+In,Wl="__reactEvents$"+In,Vp="__reactListeners$"+In,Qp="__reactHandles$"+In;function Gt(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ru(e);e!==null;){if(n=e[nt])return n;e=ru(e)}return t}e=n,n=e.parentNode}return null}function Dr(e){return e=e[nt]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function po(e){return e[Er]||null}var Vl=[],hn=-1;function At(e){return{current:e}}function V(e){0>hn||(e.current=Vl[hn],Vl[hn]=null,hn--)}function H(e,t){hn++,Vl[hn]=e.current,e.current=t}var Dt={},ve=At(Dt),Pe=At(!1),bt=Dt;function zn(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function Bi(){V(Pe),V(ve)}function iu(e,t,n){if(ve.current!==Dt)throw Error(k(168));H(ve,t),H(Pe,n)}function ud(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,T1(e)||"Unknown",i));return X({},n,r)}function Hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,bt=ve.current,H(ve,e),H(Pe,Pe.current),!0}function ou(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=ud(e,t,bt),r.__reactInternalMemoizedMergedChildContext=e,V(Pe),V(ve),H(ve,e)):V(Pe),H(Pe,n)}var at=null,ho=!1,ol=!1;function cd(e){at===null?at=[e]:at.push(e)}function Gp(e){ho=!0,cd(e)}function Bt(){if(!ol&&at!==null){ol=!0;var e=0,t=U;try{var n=at;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,ho=!1}catch(i){throw at!==null&&(at=at.slice(e+1)),Mc(_a,Bt),i}finally{U=t,ol=!1}}return null}var mn=[],gn=0,Wi=null,Vi=0,De=[],Ue=0,qt=null,st=1,ut="";function Vt(e,t){mn[gn++]=Vi,mn[gn++]=Wi,Wi=e,Vi=t}function dd(e,t,n){De[Ue++]=st,De[Ue++]=ut,De[Ue++]=qt,qt=e;var r=st;e=ut;var i=32-Xe(r)-1;r&=~(1<<i),n+=1;var o=32-Xe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,st=1<<32-Xe(t)+i|n<<i|r,ut=o+e}else st=1<<o|n<<i|r,ut=e}function Oa(e){e.return!==null&&(Vt(e,1),dd(e,1,0))}function Ia(e){for(;e===Wi;)Wi=mn[--gn],mn[gn]=null,Vi=mn[--gn],mn[gn]=null;for(;e===qt;)qt=De[--Ue],De[Ue]=null,ut=De[--Ue],De[Ue]=null,st=De[--Ue],De[Ue]=null}var Le=null,$e=null,G=!1,Je=null;function fd(e,t){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,$e=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:st,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,$e=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(G){var t=$e;if(t){var n=t;if(!lu(e,t)){if(Ql(e))throw Error(k(418));t=Rt(n.nextSibling);var r=Le;t&&lu(e,t)?fd(r,n):(e.flags=e.flags&-4097|2,G=!1,Le=e)}}else{if(Ql(e))throw Error(k(418));e.flags=e.flags&-4097|2,G=!1,Le=e}}}function au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function ti(e){if(e!==Le)return!1;if(!G)return au(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bl(e.type,e.memoizedProps)),t&&(t=$e)){if(Ql(e))throw pd(),Error(k(418));for(;t;)fd(e,t),t=Rt(t.nextSibling)}if(au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Le?Rt(e.stateNode.nextSibling):null;return!0}function pd(){for(var e=$e;e;)e=Rt(e.nextSibling)}function Tn(){$e=Le=null,G=!1}function Da(e){Je===null?Je=[e]:Je.push(e)}var Kp=gt.ReactCurrentBatchConfig;function Ge(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Qi=At(null),Gi=null,vn=null,Ua=null;function Aa(){Ua=vn=Gi=null}function Ba(e){var t=Qi.current;V(Qi),e._currentValue=t}function Kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function En(e,t){Gi=e,Ua=vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Ua!==e)if(e={context:e,memoizedValue:t,next:null},vn===null){if(Gi===null)throw Error(k(308));vn=e,Gi.dependencies={lanes:0,firstContext:e}}else vn=vn.next=e;return t}var Kt=null;function Ha(e){Kt===null?Kt=[e]:Kt.push(e)}function hd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ha(t)):(n.next=i.next,i.next=n),t.interleaved=n,ht(e,r)}function ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function md(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ht(e,n)}return i=r.interleaved,i===null?(t.next=t,Ha(r)):(t.next=i.next,i.next=t),r.interleaved=t,ht(e,n)}function ki(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,za(e,n)}}function su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ki(e,t,n,r){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;l=0,h=u=s=null,a=o;do{var g=a.lane,w=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(g=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){m=y.call(w,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,g=typeof y=="function"?y.call(w,m,g):y,g==null)break e;m=X({},m,g);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=w,s=m):h=h.next=w,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(h===null&&(s=m),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=m}}function uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var gd=new hc.Component().refs;function Jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mo={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=Nt(e),o=ct(r,i);o.payload=t,n!=null&&(o.callback=n),t=$t(e,o,i),t!==null&&(Ye(t,e,i,r),ki(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=Nt(e),o=ct(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=$t(e,o,i),t!==null&&(Ye(t,e,i,r),ki(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=Nt(e),i=ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=$t(e,i,r),t!==null&&(Ye(t,e,r,n),ki(t,e,r))}};function cu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,o):!0}function vd(e,t,n){var r=!1,i=Dt,o=t.contextType;return typeof o=="object"&&o!==null?o=He(o):(i=_e(t)?bt:ve.current,r=t.contextTypes,o=(r=r!=null)?zn(e,i):Dt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function du(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mo.enqueueReplaceState(t,t.state,null)}function Xl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=gd,Wa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=He(o):(o=_e(t)?bt:ve.current,i.context=zn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Jl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&mo.enqueueReplaceState(i,i.state,null),Ki(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===gd&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ni(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fu(e){var t=e._init;return t(e._payload)}function yd(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Ft(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,x){return c===null||c.tag!==6?(c=fl(p,f.mode,x),c.return=f,c):(c=i(c,p),c.return=f,c)}function s(f,c,p,x){var E=p.type;return E===un?h(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===xt&&fu(E)===c.type)?(x=i(c,p.props),x.ref=Xn(f,c,p),x.return=f,x):(x=zi(p.type,p.key,p.props,null,f.mode,x),x.ref=Xn(f,c,p),x.return=f,x)}function u(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=pl(p,f.mode,x),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function h(f,c,p,x,E){return c===null||c.tag!==7?(c=Yt(p,f.mode,x,E),c.return=f,c):(c=i(c,p),c.return=f,c)}function m(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=fl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qr:return p=zi(c.type,c.key,c.props,null,f.mode,p),p.ref=Xn(f,null,c),p.return=f,p;case sn:return c=pl(c,f.mode,p),c.return=f,c;case xt:var x=c._init;return m(f,x(c._payload),p)}if(er(c)||Vn(c))return c=Yt(c,f.mode,p,null),c.return=f,c;ni(f,c)}return null}function g(f,c,p,x){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:return p.key===E?s(f,c,p,x):null;case sn:return p.key===E?u(f,c,p,x):null;case xt:return E=p._init,g(f,c,E(p._payload),x)}if(er(p)||Vn(p))return E!==null?null:h(f,c,p,x,null);ni(f,p)}return null}function w(f,c,p,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,a(c,f,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qr:return f=f.get(x.key===null?p:x.key)||null,s(c,f,x,E);case sn:return f=f.get(x.key===null?p:x.key)||null,u(c,f,x,E);case xt:var _=x._init;return w(f,c,p,_(x._payload),E)}if(er(x)||Vn(x))return f=f.get(p)||null,h(c,f,x,E,null);ni(c,x)}return null}function y(f,c,p,x){for(var E=null,_=null,S=c,R=c=0,B=null;S!==null&&R<p.length;R++){S.index>R?(B=S,S=null):B=S.sibling;var N=g(f,S,p[R],x);if(N===null){S===null&&(S=B);break}e&&S&&N.alternate===null&&t(f,S),c=o(N,c,R),_===null?E=N:_.sibling=N,_=N,S=B}if(R===p.length)return n(f,S),G&&Vt(f,R),E;if(S===null){for(;R<p.length;R++)S=m(f,p[R],x),S!==null&&(c=o(S,c,R),_===null?E=S:_.sibling=S,_=S);return G&&Vt(f,R),E}for(S=r(f,S);R<p.length;R++)B=w(S,f,R,p[R],x),B!==null&&(e&&B.alternate!==null&&S.delete(B.key===null?R:B.key),c=o(B,c,R),_===null?E=B:_.sibling=B,_=B);return e&&S.forEach(function(Ve){return t(f,Ve)}),G&&Vt(f,R),E}function v(f,c,p,x){var E=Vn(p);if(typeof E!="function")throw Error(k(150));if(p=E.call(p),p==null)throw Error(k(151));for(var _=E=null,S=c,R=c=0,B=null,N=p.next();S!==null&&!N.done;R++,N=p.next()){S.index>R?(B=S,S=null):B=S.sibling;var Ve=g(f,S,N.value,x);if(Ve===null){S===null&&(S=B);break}e&&S&&Ve.alternate===null&&t(f,S),c=o(Ve,c,R),_===null?E=Ve:_.sibling=Ve,_=Ve,S=B}if(N.done)return n(f,S),G&&Vt(f,R),E;if(S===null){for(;!N.done;R++,N=p.next())N=m(f,N.value,x),N!==null&&(c=o(N,c,R),_===null?E=N:_.sibling=N,_=N);return G&&Vt(f,R),E}for(S=r(f,S);!N.done;R++,N=p.next())N=w(S,f,R,N.value,x),N!==null&&(e&&N.alternate!==null&&S.delete(N.key===null?R:N.key),c=o(N,c,R),_===null?E=N:_.sibling=N,_=N);return e&&S.forEach(function(Hn){return t(f,Hn)}),G&&Vt(f,R),E}function P(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===un&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:e:{for(var E=p.key,_=c;_!==null;){if(_.key===E){if(E=p.type,E===un){if(_.tag===7){n(f,_.sibling),c=i(_,p.props.children),c.return=f,f=c;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===xt&&fu(E)===_.type){n(f,_.sibling),c=i(_,p.props),c.ref=Xn(f,_,p),c.return=f,f=c;break e}n(f,_);break}else t(f,_);_=_.sibling}p.type===un?(c=Yt(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=zi(p.type,p.key,p.props,null,f.mode,x),x.ref=Xn(f,c,p),x.return=f,f=x)}return l(f);case sn:e:{for(_=p.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=pl(p,f.mode,x),c.return=f,f=c}return l(f);case xt:return _=p._init,P(f,c,_(p._payload),x)}if(er(p))return y(f,c,p,x);if(Vn(p))return v(f,c,p,x);ni(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=fl(p,f.mode,x),c.return=f,f=c),l(f)):n(f,c)}return P}var Rn=yd(!0),xd=yd(!1),Ur={},it=At(Ur),jr=At(Ur),Pr=At(Ur);function Jt(e){if(e===Ur)throw Error(k(174));return e}function Va(e,t){switch(H(Pr,t),H(jr,e),H(it,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_l(t,e)}V(it),H(it,t)}function $n(){V(it),V(jr),V(Pr)}function wd(e){Jt(Pr.current);var t=Jt(it.current),n=_l(t,e.type);t!==n&&(H(jr,e),H(it,n))}function Qa(e){jr.current===e&&(V(it),V(jr))}var K=At(0);function Ji(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ll=[];function Ga(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var Si=gt.ReactCurrentDispatcher,al=gt.ReactCurrentBatchConfig,en=0,J=null,ne=null,oe=null,Xi=!1,ur=!1,_r=0,Jp=0;function pe(){throw Error(k(321))}function Ka(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function Ja(e,t,n,r,i,o){if(en=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Si.current=e===null||e.memoizedState===null?bp:qp,e=n(r,i),ur){o=0;do{if(ur=!1,_r=0,25<=o)throw Error(k(301));o+=1,oe=ne=null,t.updateQueue=null,Si.current=e0,e=n(r,i)}while(ur)}if(Si.current=Yi,t=ne!==null&&ne.next!==null,en=0,oe=ne=J=null,Xi=!1,t)throw Error(k(300));return e}function Xa(){var e=_r!==0;return _r=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?J.memoizedState=oe=e:oe=oe.next=e,oe}function We(){if(ne===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=oe===null?J.memoizedState:oe.next;if(t!==null)oe=t,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?J.memoizedState=oe=e:oe=oe.next=e}return oe}function zr(e,t){return typeof t=="function"?t(e):t}function sl(e){var t=We(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var h=u.lane;if((en&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,J.lanes|=h,tn|=h}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Ze(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,J.lanes|=o,tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ul(e){var t=We(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ze(o,t.memoizedState)||(je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Cd(){}function kd(e,t){var n=J,r=We(),i=t(),o=!Ze(r.memoizedState,i);if(o&&(r.memoizedState=i,je=!0),r=r.queue,Ya(jd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Tr(9,Ed.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(k(349));en&30||Sd(n,t,i)}return i}function Sd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ed(e,t,n,r){t.value=n,t.getSnapshot=r,Pd(t)&&_d(e)}function jd(e,t,n){return n(function(){Pd(t)&&_d(e)})}function Pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function _d(e){var t=ht(e,1);t!==null&&Ye(t,e,1,-1)}function pu(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zp.bind(null,J,e),[t.memoizedState,e]}function Tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zd(){return We().memoizedState}function Ei(e,t,n,r){var i=qe();J.flags|=e,i.memoizedState=Tr(1|t,n,void 0,r===void 0?null:r)}function go(e,t,n,r){var i=We();r=r===void 0?null:r;var o=void 0;if(ne!==null){var l=ne.memoizedState;if(o=l.destroy,r!==null&&Ka(r,l.deps)){i.memoizedState=Tr(t,n,o,r);return}}J.flags|=e,i.memoizedState=Tr(1|t,n,o,r)}function hu(e,t){return Ei(8390656,8,e,t)}function Ya(e,t){return go(2048,8,e,t)}function Td(e,t){return go(4,2,e,t)}function Rd(e,t){return go(4,4,e,t)}function $d(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ld(e,t,n){return n=n!=null?n.concat([e]):null,go(4,4,$d.bind(null,t,e),n)}function Za(){}function Nd(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fd(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Md(e,t,n){return en&21?(Ze(n,t)||(n=Dc(),J.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function Xp(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=al.transition;al.transition={};try{e(!1),t()}finally{U=n,al.transition=r}}function Od(){return We().memoizedState}function Yp(e,t,n){var r=Nt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Id(e))Dd(t,n);else if(n=hd(e,t,n,r),n!==null){var i=Ce();Ye(n,e,r,i),Ud(n,t,r)}}function Zp(e,t,n){var r=Nt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Id(e))Dd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ze(a,l)){var s=t.interleaved;s===null?(i.next=i,Ha(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=hd(e,t,i,r),n!==null&&(i=Ce(),Ye(n,e,r,i),Ud(n,t,r))}}function Id(e){var t=e.alternate;return e===J||t!==null&&t===J}function Dd(e,t){ur=Xi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ud(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,za(e,n)}}var Yi={readContext:He,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},bp={readContext:He,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ei(4194308,4,$d.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ei(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ei(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yp.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:pu,useDebugValue:Za,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=pu(!1),t=e[0];return e=Xp.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=qe();if(G){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ae===null)throw Error(k(349));en&30||Sd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,hu(jd.bind(null,r,o,e),[e]),r.flags|=2048,Tr(9,Ed.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qe(),t=ae.identifierPrefix;if(G){var n=ut,r=st;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qp={readContext:He,useCallback:Nd,useContext:He,useEffect:Ya,useImperativeHandle:Ld,useInsertionEffect:Td,useLayoutEffect:Rd,useMemo:Fd,useReducer:sl,useRef:zd,useState:function(){return sl(zr)},useDebugValue:Za,useDeferredValue:function(e){var t=We();return Md(t,ne.memoizedState,e)},useTransition:function(){var e=sl(zr)[0],t=We().memoizedState;return[e,t]},useMutableSource:Cd,useSyncExternalStore:kd,useId:Od,unstable_isNewReconciler:!1},e0={readContext:He,useCallback:Nd,useContext:He,useEffect:Ya,useImperativeHandle:Ld,useInsertionEffect:Td,useLayoutEffect:Rd,useMemo:Fd,useReducer:ul,useRef:zd,useState:function(){return ul(zr)},useDebugValue:Za,useDeferredValue:function(e){var t=We();return ne===null?t.memoizedState=e:Md(t,ne.memoizedState,e)},useTransition:function(){var e=ul(zr)[0],t=We().memoizedState;return[e,t]},useMutableSource:Cd,useSyncExternalStore:kd,useId:Od,unstable_isNewReconciler:!1};function Ln(e,t){try{var n="",r=t;do n+=z1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var t0=typeof WeakMap=="function"?WeakMap:Map;function Ad(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bi||(bi=!0,la=r),Yl(e,t)},n}function Bd(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Yl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Yl(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function mu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new t0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=m0.bind(null,e,t,n),t.then(e,e))}function gu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,$t(n,t,1))),n.lanes|=1),e)}var n0=gt.ReactCurrentOwner,je=!1;function we(e,t,n,r){t.child=e===null?xd(t,null,n,r):Rn(t,e.child,n,r)}function yu(e,t,n,r,i){n=n.render;var o=t.ref;return En(t,i),r=Ja(e,t,n,r,o,i),n=Xa(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mt(e,t,i)):(G&&n&&Oa(t),t.flags|=1,we(e,t,r,i),t.child)}function xu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!os(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Hd(e,t,o,r,i)):(e=zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(l,r)&&e.ref===t.ref)return mt(e,t,i)}return t.flags|=1,e=Ft(o,r),e.ref=t.ref,e.return=t,t.child=e}function Hd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Cr(o,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,mt(e,t,i)}return Zl(e,t,n,r,i)}function Wd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(xn,Re),Re|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(xn,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,H(xn,Re),Re|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,H(xn,Re),Re|=r;return we(e,t,i,n),t.child}function Vd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zl(e,t,n,r,i){var o=_e(n)?bt:ve.current;return o=zn(t,o),En(t,i),n=Ja(e,t,n,r,o,i),r=Xa(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mt(e,t,i)):(G&&r&&Oa(t),t.flags|=1,we(e,t,n,i),t.child)}function wu(e,t,n,r,i){if(_e(n)){var o=!0;Hi(t)}else o=!1;if(En(t,i),t.stateNode===null)ji(e,t),vd(t,n,r),Xl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=_e(n)?bt:ve.current,u=zn(t,u));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&du(t,l,r,u),wt=!1;var g=t.memoizedState;l.state=g,Ki(t,r,l,i),s=t.memoizedState,a!==r||g!==s||Pe.current||wt?(typeof h=="function"&&(Jl(t,n,h,r),s=t.memoizedState),(a=wt||cu(t,n,a,r,g,s,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,md(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ge(t.type,a),l.props=u,m=t.pendingProps,g=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=He(s):(s=_e(n)?bt:ve.current,s=zn(t,s));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||g!==s)&&du(t,l,r,s),wt=!1,g=t.memoizedState,l.state=g,Ki(t,r,l,i);var y=t.memoizedState;a!==m||g!==y||Pe.current||wt?(typeof w=="function"&&(Jl(t,n,w,r),y=t.memoizedState),(u=wt||cu(t,n,u,r,g,y,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return bl(e,t,n,r,o,i)}function bl(e,t,n,r,i,o){Vd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ou(t,n,!1),mt(e,t,o);r=t.stateNode,n0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Rn(t,e.child,null,o),t.child=Rn(t,null,a,o)):we(e,t,a,o),t.memoizedState=r.state,i&&ou(t,n,!0),t.child}function Qd(e){var t=e.stateNode;t.pendingContext?iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&iu(e,t.context,!1),Va(e,t.containerInfo)}function Cu(e,t,n,r,i){return Tn(),Da(i),t.flags|=256,we(e,t,n,r),t.child}var ql={dehydrated:null,treeContext:null,retryLane:0};function ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gd(e,t,n){var r=t.pendingProps,i=K.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(K,i&1),e===null)return Gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=xo(l,r,0,null),e=Yt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ea(n),t.memoizedState=ql,e):ba(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return r0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ft(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ft(a,o):(o=Yt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ea(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ql,r}return o=e.child,e=o.sibling,r=Ft(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ba(e,t){return t=xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ri(e,t,n,r){return r!==null&&Da(r),Rn(t,e.child,null,n),e=ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function r0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=cl(Error(k(422))),ri(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=xo({mode:"visible",children:r.children},i,0,null),o=Yt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Rn(t,e.child,null,l),t.child.memoizedState=ea(l),t.memoizedState=ql,o);if(!(t.mode&1))return ri(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=cl(o,r,void 0),ri(e,t,l,r)}if(a=(l&e.childLanes)!==0,je||a){if(r=ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ht(e,i),Ye(r,e,i,-1))}return is(),r=cl(Error(k(421))),ri(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=g0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$e=Rt(i.nextSibling),Le=t,G=!0,Je=null,e!==null&&(De[Ue++]=st,De[Ue++]=ut,De[Ue++]=qt,st=e.id,ut=e.overflow,qt=t),t=ba(t,r.children),t.flags|=4096,t)}function ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kl(e.return,t,n)}function dl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Kd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(we(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ku(e,n,t);else if(e.tag===19)ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ji(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),dl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ji(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}dl(t,!0,n,null,o);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ji(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function i0(e,t,n){switch(t.tag){case 3:Qd(t),Tn();break;case 5:wd(t);break;case 1:_e(t.type)&&Hi(t);break;case 4:Va(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Qi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Gd(e,t,n):(H(K,K.current&1),e=mt(e,t,n),e!==null?e.sibling:null);H(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Wd(e,t,n)}return mt(e,t,n)}var Jd,ta,Xd,Yd;Jd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ta=function(){};Xd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Jt(it.current);var o=null;switch(n){case"input":i=Sl(e,i),r=Sl(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=Pl(e,i),r=Pl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ai)}zl(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&W("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Yd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Yn(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function o0(e,t,n){var r=t.pendingProps;switch(Ia(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return _e(t.type)&&Bi(),he(t),null;case 3:return r=t.stateNode,$n(),V(Pe),V(ve),Ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(ua(Je),Je=null))),ta(e,t),he(t),null;case 5:Qa(t);var i=Jt(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)Xd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return he(t),null}if(e=Jt(it.current),ti(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[nt]=t,r[Er]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<nr.length;i++)W(nr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":$s(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Ns(r,o),W("invalid",r)}zl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ei(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ei(r.textContent,a,e),i=["children",""+a]):hr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":Gr(r),Ls(r,o,!0);break;case"textarea":Gr(r),Fs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ai)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[nt]=t,e[Er]=r,Jd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Tl(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<nr.length;i++)W(nr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":$s(e,r),i=Sl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ns(e,r),i=Pl(e,r),W("invalid",e);break;default:i=r}zl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Pc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ec(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&mr(e,s):typeof s=="number"&&mr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&W("scroll",e):s!=null&&ka(e,o,s,l))}switch(n){case"input":Gr(e),Ls(e,r,!1);break;case"textarea":Gr(e),Fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+It(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?wn(e,!!r.multiple,o,!1):r.defaultValue!=null&&wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Yd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Jt(Pr.current),Jt(it.current),ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(o=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ei(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return he(t),null;case 13:if(V(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&$e!==null&&t.mode&1&&!(t.flags&128))pd(),Tn(),t.flags|=98560,o=!1;else if(o=ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[nt]=t}else Tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),o=!1}else Je!==null&&(ua(Je),Je=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?re===0&&(re=3):is())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return $n(),ta(e,t),e===null&&kr(t.stateNode.containerInfo),he(t),null;case 10:return Ba(t.type._context),he(t),null;case 17:return _e(t.type)&&Bi(),he(t),null;case 19:if(V(K),o=t.memoizedState,o===null)return he(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Yn(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ji(e),l!==null){for(t.flags|=128,Yn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&b()>Nn&&(t.flags|=128,r=!0,Yn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ji(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!G)return he(t),null}else 2*b()-o.renderingStartTime>Nn&&n!==1073741824&&(t.flags|=128,r=!0,Yn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,n=K.current,H(K,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return rs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function l0(e,t){switch(Ia(t),t.tag){case 1:return _e(t.type)&&Bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),V(Pe),V(ve),Ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qa(t),null;case 13:if(V(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(K),null;case 4:return $n(),null;case 10:return Ba(t.type._context),null;case 22:case 23:return rs(),null;case 24:return null;default:return null}}var ii=!1,ge=!1,a0=typeof WeakSet=="function"?WeakSet:Set,z=null;function yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function na(e,t,n){try{n()}catch(r){Y(e,t,r)}}var Su=!1;function s0(e,t){if(Ul=Ii,e=ed(),Ma(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,h=0,m=e,g=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===e)break t;if(g===n&&++u===i&&(a=l),g===o&&++h===r&&(s=l),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Al={focusedElem:e,selectionRange:n},Ii=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,P=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ge(t.type,v),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){Y(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return y=Su,Su=!1,y}function cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&na(t,n,o)}i=i.next}while(i!==r)}}function vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ra(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zd(e){var t=e.alternate;t!==null&&(e.alternate=null,Zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Er],delete t[Wl],delete t[Vp],delete t[Qp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bd(e){return e.tag===5||e.tag===3||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(r!==4&&(e=e.child,e!==null))for(ia(e,t,n),e=e.sibling;e!==null;)ia(e,t,n),e=e.sibling}function oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}var ue=null,Ke=!1;function yt(e,t,n){for(n=n.child;n!==null;)qd(e,t,n),n=n.sibling}function qd(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(so,n)}catch{}switch(n.tag){case 5:ge||yn(n,t);case 6:var r=ue,i=Ke;ue=null,yt(e,t,n),ue=r,Ke=i,ue!==null&&(Ke?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ke?(e=ue,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),xr(e)):il(ue,n.stateNode));break;case 4:r=ue,i=Ke,ue=n.stateNode.containerInfo,Ke=!0,yt(e,t,n),ue=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&na(n,t,l),i=i.next}while(i!==r)}yt(e,t,n);break;case 1:if(!ge&&(yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,t,a)}yt(e,t,n);break;case 21:yt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,yt(e,t,n),ge=r):yt(e,t,n);break;default:yt(e,t,n)}}function ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new a0),t.forEach(function(r){var i=v0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ke=!1;break e;case 3:ue=a.stateNode.containerInfo,Ke=!0;break e;case 4:ue=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(ue===null)throw Error(k(160));qd(o,l,i),ue=null,Ke=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Y(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ef(t,e),t=t.sibling}function ef(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),be(e),r&4){try{cr(3,e,e.return),vo(3,e)}catch(v){Y(e,e.return,v)}try{cr(5,e,e.return)}catch(v){Y(e,e.return,v)}}break;case 1:Qe(t,e),be(e),r&512&&n!==null&&yn(n,n.return);break;case 5:if(Qe(t,e),be(e),r&512&&n!==null&&yn(n,n.return),e.flags&32){var i=e.stateNode;try{mr(i,"")}catch(v){Y(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Cc(i,o),Tl(a,l);var u=Tl(a,o);for(l=0;l<s.length;l+=2){var h=s[l],m=s[l+1];h==="style"?Pc(i,m):h==="dangerouslySetInnerHTML"?Ec(i,m):h==="children"?mr(i,m):ka(i,h,m,u)}switch(a){case"input":El(i,o);break;case"textarea":kc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?wn(i,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?wn(i,!!o.multiple,o.defaultValue,!0):wn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Er]=o}catch(v){Y(e,e.return,v)}}break;case 6:if(Qe(t,e),be(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Y(e,e.return,v)}}break;case 3:if(Qe(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xr(t.containerInfo)}catch(v){Y(e,e.return,v)}break;case 4:Qe(t,e),be(e);break;case 13:Qe(t,e),be(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ts=b())),r&4&&ju(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||h,Qe(t,e),ge=u):Qe(t,e),be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(z=e,h=e.child;h!==null;){for(m=z=h;z!==null;){switch(g=z,w=g.child,g.tag){case 0:case 11:case 14:case 15:cr(4,g,g.return);break;case 1:yn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Y(r,n,v)}}break;case 5:yn(g,g.return);break;case 22:if(g.memoizedState!==null){_u(m);continue}}w!==null?(w.return=g,z=w):_u(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=jc("display",l))}catch(v){Y(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(v){Y(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Qe(t,e),be(e),r&4&&ju(e);break;case 21:break;default:Qe(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mr(i,""),r.flags&=-33);var o=Eu(e);oa(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Eu(e);ia(e,a,l);break;default:throw Error(k(161))}}catch(s){Y(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function u0(e,t,n){z=e,tf(e)}function tf(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ii;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||ge;a=ii;var u=ge;if(ii=l,(ge=s)&&!u)for(z=i;z!==null;)l=z,s=l.child,l.tag===22&&l.memoizedState!==null?zu(i):s!==null?(s.return=l,z=s):zu(i);for(;o!==null;)z=o,tf(o),o=o.sibling;z=i,ii=a,ge=u}Pu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Pu(e)}}function Pu(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&uu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&xr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ge||t.flags&512&&ra(t)}catch(g){Y(t,t.return,g)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function _u(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function zu(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vo(4,t)}catch(s){Y(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Y(t,i,s)}}var o=t.return;try{ra(t)}catch(s){Y(t,o,s)}break;case 5:var l=t.return;try{ra(t)}catch(s){Y(t,l,s)}}}catch(s){Y(t,t.return,s)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var c0=Math.ceil,Zi=gt.ReactCurrentDispatcher,qa=gt.ReactCurrentOwner,Be=gt.ReactCurrentBatchConfig,O=0,ae=null,te=null,de=0,Re=0,xn=At(0),re=0,Rr=null,tn=0,yo=0,es=0,dr=null,Ee=null,ts=0,Nn=1/0,lt=null,bi=!1,la=null,Lt=null,oi=!1,Et=null,qi=0,fr=0,aa=null,Pi=-1,_i=0;function Ce(){return O&6?b():Pi!==-1?Pi:Pi=b()}function Nt(e){return e.mode&1?O&2&&de!==0?de&-de:Kp.transition!==null?(_i===0&&(_i=Dc()),_i):(e=U,e!==0||(e=window.event,e=e===void 0?16:Qc(e.type)),e):1}function Ye(e,t,n,r){if(50<fr)throw fr=0,aa=null,Error(k(185));Or(e,n,r),(!(O&2)||e!==ae)&&(e===ae&&(!(O&2)&&(yo|=n),re===4&&kt(e,de)),ze(e,r),n===1&&O===0&&!(t.mode&1)&&(Nn=b()+500,ho&&Bt()))}function ze(e,t){var n=e.callbackNode;K1(e,t);var r=Oi(e,e===ae?de:0);if(r===0)n!==null&&Is(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Is(n),t===1)e.tag===0?Gp(Tu.bind(null,e)):cd(Tu.bind(null,e)),Hp(function(){!(O&6)&&Bt()}),n=null;else{switch(Uc(r)){case 1:n=_a;break;case 4:n=Oc;break;case 16:n=Mi;break;case 536870912:n=Ic;break;default:n=Mi}n=cf(n,nf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nf(e,t){if(Pi=-1,_i=0,O&6)throw Error(k(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=Oi(e,e===ae?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=eo(e,r);else{t=r;var i=O;O|=2;var o=of();(ae!==e||de!==t)&&(lt=null,Nn=b()+500,Xt(e,t));do try{p0();break}catch(a){rf(e,a)}while(1);Aa(),Zi.current=o,O=i,te!==null?t=0:(ae=null,de=0,t=re)}if(t!==0){if(t===2&&(i=Fl(e),i!==0&&(r=i,t=sa(e,i))),t===1)throw n=Rr,Xt(e,0),kt(e,r),ze(e,b()),n;if(t===6)kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!d0(i)&&(t=eo(e,r),t===2&&(o=Fl(e),o!==0&&(r=o,t=sa(e,o))),t===1))throw n=Rr,Xt(e,0),kt(e,r),ze(e,b()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Qt(e,Ee,lt);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=ts+500-b(),10<t)){if(Oi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hl(Qt.bind(null,e,Ee,lt),t);break}Qt(e,Ee,lt);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Xe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=b()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c0(r/1960))-r,10<r){e.timeoutHandle=Hl(Qt.bind(null,e,Ee,lt),r);break}Qt(e,Ee,lt);break;case 5:Qt(e,Ee,lt);break;default:throw Error(k(329))}}}return ze(e,b()),e.callbackNode===n?nf.bind(null,e):null}function sa(e,t){var n=dr;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=eo(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&ua(t)),e}function ua(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function d0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ze(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~es,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function Tu(e){if(O&6)throw Error(k(327));jn();var t=Oi(e,0);if(!(t&1))return ze(e,b()),null;var n=eo(e,t);if(e.tag!==0&&n===2){var r=Fl(e);r!==0&&(t=r,n=sa(e,r))}if(n===1)throw n=Rr,Xt(e,0),kt(e,t),ze(e,b()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,Ee,lt),ze(e,b()),null}function ns(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Nn=b()+500,ho&&Bt())}}function nn(e){Et!==null&&Et.tag===0&&!(O&6)&&jn();var t=O;O|=1;var n=Be.transition,r=U;try{if(Be.transition=null,U=1,e)return e()}finally{U=r,Be.transition=n,O=t,!(O&6)&&Bt()}}function rs(){Re=xn.current,V(xn)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bp(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Ia(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bi();break;case 3:$n(),V(Pe),V(ve),Ga();break;case 5:Qa(r);break;case 4:$n();break;case 13:V(K);break;case 19:V(K);break;case 10:Ba(r.type._context);break;case 22:case 23:rs()}n=n.return}if(ae=e,te=e=Ft(e.current,null),de=Re=t,re=0,Rr=null,es=yo=tn=0,Ee=dr=null,Kt!==null){for(t=0;t<Kt.length;t++)if(n=Kt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Kt=null}return e}function rf(e,t){do{var n=te;try{if(Aa(),Si.current=Yi,Xi){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xi=!1}if(en=0,oe=ne=J=null,ur=!1,_r=0,qa.current=null,n===null||n.return===null){re=1,Rr=t,te=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=de,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=gu(l);if(w!==null){w.flags&=-257,vu(w,l,a,o,t),w.mode&1&&mu(o,u,t),t=w,s=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(s),t.updateQueue=v}else y.add(s);break e}else{if(!(t&1)){mu(o,u,t),is();break e}s=Error(k(426))}}else if(G&&a.mode&1){var P=gu(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),vu(P,l,a,o,t),Da(Ln(s,a));break e}}o=s=Ln(s,a),re!==4&&(re=2),dr===null?dr=[o]:dr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ad(o,s,t);su(o,f);break e;case 1:a=s;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Lt===null||!Lt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Bd(o,a,t);su(o,x);break e}}o=o.return}while(o!==null)}af(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function of(){var e=Zi.current;return Zi.current=Yi,e===null?Yi:e}function is(){(re===0||re===3||re===2)&&(re=4),ae===null||!(tn&268435455)&&!(yo&268435455)||kt(ae,de)}function eo(e,t){var n=O;O|=2;var r=of();(ae!==e||de!==t)&&(lt=null,Xt(e,t));do try{f0();break}catch(i){rf(e,i)}while(1);if(Aa(),O=n,Zi.current=r,te!==null)throw Error(k(261));return ae=null,de=0,re}function f0(){for(;te!==null;)lf(te)}function p0(){for(;te!==null&&!D1();)lf(te)}function lf(e){var t=uf(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?af(e):te=t,qa.current=null}function af(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=l0(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=o0(n,t,Re),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Qt(e,t,n){var r=U,i=Be.transition;try{Be.transition=null,U=1,h0(e,t,n,r)}finally{Be.transition=i,U=r}return null}function h0(e,t,n,r){do jn();while(Et!==null);if(O&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(J1(e,o),e===ae&&(te=ae=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oi||(oi=!0,cf(Mi,function(){return jn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Be.transition,Be.transition=null;var l=U;U=1;var a=O;O|=4,qa.current=null,s0(e,n),ef(n,e),Fp(Al),Ii=!!Ul,Al=Ul=null,e.current=n,u0(n),U1(),O=a,U=l,Be.transition=o}else e.current=n;if(oi&&(oi=!1,Et=e,qi=i),o=e.pendingLanes,o===0&&(Lt=null),H1(n.stateNode),ze(e,b()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bi)throw bi=!1,e=la,la=null,e;return qi&1&&e.tag!==0&&jn(),o=e.pendingLanes,o&1?e===aa?fr++:(fr=0,aa=e):fr=0,Bt(),null}function jn(){if(Et!==null){var e=Uc(qi),t=Be.transition,n=U;try{if(Be.transition=null,U=16>e?16:e,Et===null)var r=!1;else{if(e=Et,Et=null,qi=0,O&6)throw Error(k(331));var i=O;for(O|=4,z=e.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(z=u;z!==null;){var h=z;switch(h.tag){case 0:case 11:case 15:cr(8,h,o)}var m=h.child;if(m!==null)m.return=h,z=m;else for(;z!==null;){h=z;var g=h.sibling,w=h.return;if(Zd(h),h===u){z=null;break}if(g!==null){g.return=w,z=g;break}z=w}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var P=v.sibling;v.sibling=null,v=P}while(v!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:cr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,z=f;break e}z=o.return}}var c=e.current;for(z=c;z!==null;){l=z;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,z=p;else e:for(l=c;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vo(9,a)}}catch(E){Y(a,a.return,E)}if(a===l){z=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,z=x;break e}z=a.return}}if(O=i,Bt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(so,e)}catch{}r=!0}return r}finally{U=n,Be.transition=t}}return!1}function Ru(e,t,n){t=Ln(n,t),t=Ad(e,t,1),e=$t(e,t,1),t=Ce(),e!==null&&(Or(e,1,t),ze(e,t))}function Y(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=Ln(n,e),e=Bd(t,e,1),t=$t(t,e,1),e=Ce(),t!==null&&(Or(t,1,e),ze(t,e));break}}t=t.return}}function m0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(de&n)===n&&(re===4||re===3&&(de&130023424)===de&&500>b()-ts?Xt(e,0):es|=n),ze(e,t)}function sf(e,t){t===0&&(e.mode&1?(t=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):t=1);var n=Ce();e=ht(e,t),e!==null&&(Or(e,t,n),ze(e,n))}function g0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sf(e,n)}function v0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),sf(e,n)}var uf;uf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,i0(e,t,n);je=!!(e.flags&131072)}else je=!1,G&&t.flags&1048576&&dd(t,Vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ji(e,t),e=t.pendingProps;var i=zn(t,ve.current);En(t,n),i=Ja(null,t,r,e,i,n);var o=Xa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,Hi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wa(t),i.updater=mo,t.stateNode=i,i._reactInternals=t,Xl(t,r,e,n),t=bl(null,t,r,!0,o,n)):(t.tag=0,G&&o&&Oa(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ji(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=x0(r),e=Ge(r,e),i){case 0:t=Zl(null,t,r,e,n);break e;case 1:t=wu(null,t,r,e,n);break e;case 11:t=yu(null,t,r,e,n);break e;case 14:t=xu(null,t,r,Ge(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),Zl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),wu(e,t,r,i,n);case 3:e:{if(Qd(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,md(e,t),Ki(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ln(Error(k(423)),t),t=Cu(e,t,r,n,i);break e}else if(r!==i){i=Ln(Error(k(424)),t),t=Cu(e,t,r,n,i);break e}else for($e=Rt(t.stateNode.containerInfo.firstChild),Le=t,G=!0,Je=null,n=xd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===i){t=mt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return wd(t),e===null&&Gl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Bl(r,i)?l=null:o!==null&&Bl(r,o)&&(t.flags|=32),Vd(e,t),we(e,t,l,n),t.child;case 6:return e===null&&Gl(t),null;case 13:return Gd(e,t,n);case 4:return Va(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),yu(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,H(Qi,r._currentValue),r._currentValue=l,o!==null)if(Ze(o.value,l)){if(o.children===i.children&&!Pe.current){t=mt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=ct(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Kl(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Kl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,En(t,n),i=He(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Ge(r,t.pendingProps),i=Ge(r.type,i),xu(e,t,r,i,n);case 15:return Hd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),ji(e,t),t.tag=1,_e(r)?(e=!0,Hi(t)):e=!1,En(t,n),vd(t,r,i),Xl(t,r,i,n),bl(null,t,r,!0,e,n);case 19:return Kd(e,t,n);case 22:return Wd(e,t,n)}throw Error(k(156,t.tag))};function cf(e,t){return Mc(e,t)}function y0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,n,r){return new y0(e,t,n,r)}function os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function x0(e){if(typeof e=="function")return os(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ea)return 11;if(e===ja)return 14}return 2}function Ft(e,t){var n=e.alternate;return n===null?(n=Ae(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")os(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case un:return Yt(n.children,i,o,t);case Sa:l=8,i|=8;break;case xl:return e=Ae(12,n,t,i|2),e.elementType=xl,e.lanes=o,e;case wl:return e=Ae(13,n,t,i),e.elementType=wl,e.lanes=o,e;case Cl:return e=Ae(19,n,t,i),e.elementType=Cl,e.lanes=o,e;case yc:return xo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gc:l=10;break e;case vc:l=9;break e;case Ea:l=11;break e;case ja:l=14;break e;case xt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ae(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yt(e,t,n,r){return e=Ae(7,e,r,t),e.lanes=n,e}function xo(e,t,n,r){return e=Ae(22,e,r,t),e.elementType=yc,e.lanes=n,e.stateNode={isHidden:!1},e}function fl(e,t,n){return e=Ae(6,e,null,t),e.lanes=n,e}function pl(e,t,n){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function w0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ls(e,t,n,r,i,o,l,a,s){return e=new w0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ae(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wa(o),e}function C0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function df(e){if(!e)return Dt;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(_e(n))return ud(e,n,t)}return t}function ff(e,t,n,r,i,o,l,a,s){return e=ls(n,r,!0,e,i,o,l,a,s),e.context=df(null),n=e.current,r=Ce(),i=Nt(n),o=ct(r,i),o.callback=t??null,$t(n,o,i),e.current.lanes=i,Or(e,i,r),ze(e,r),e}function wo(e,t,n,r){var i=t.current,o=Ce(),l=Nt(i);return n=df(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$t(i,t,l),e!==null&&(Ye(e,i,l,o),ki(e,i,l)),l}function to(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function as(e,t){$u(e,t),(e=e.alternate)&&$u(e,t)}function k0(){return null}var pf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ss(e){this._internalRoot=e}Co.prototype.render=ss.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));wo(e,t,null,null)};Co.prototype.unmount=ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){wo(null,e,null,null)}),t[pt]=null}};function Co(e){this._internalRoot=e}Co.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&Vc(e)}};function us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lu(){}function S0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=to(l);o.call(u)}}var l=ff(t,r,e,0,null,!1,!1,"",Lu);return e._reactRootContainer=l,e[pt]=l.current,kr(e.nodeType===8?e.parentNode:e),nn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=to(s);a.call(u)}}var s=ls(e,0,!1,null,null,!1,!1,"",Lu);return e._reactRootContainer=s,e[pt]=s.current,kr(e.nodeType===8?e.parentNode:e),nn(function(){wo(t,s,n,r)}),s}function So(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=to(l);a.call(s)}}wo(t,l,e,i)}else l=S0(n,t,e,i,r);return to(l)}Ac=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tr(t.pendingLanes);n!==0&&(za(t,n|1),ze(t,b()),!(O&6)&&(Nn=b()+500,Bt()))}break;case 13:nn(function(){var r=ht(e,1);if(r!==null){var i=Ce();Ye(r,e,1,i)}}),as(e,1)}};Ta=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var n=Ce();Ye(t,e,134217728,n)}as(e,134217728)}};Bc=function(e){if(e.tag===13){var t=Nt(e),n=ht(e,t);if(n!==null){var r=Ce();Ye(n,e,t,r)}as(e,t)}};Hc=function(){return U};Wc=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};$l=function(e,t,n){switch(t){case"input":if(El(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=po(r);if(!i)throw Error(k(90));wc(r),El(r,i)}}}break;case"textarea":kc(e,n);break;case"select":t=n.value,t!=null&&wn(e,!!n.multiple,t,!1)}};Tc=ns;Rc=nn;var E0={usingClientEntryPoint:!1,Events:[Dr,pn,po,_c,zc,ns]},Zn={findFiberByHostInstance:Gt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},j0={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nc(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||k0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{so=li.inject(j0),rt=li}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E0;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!us(t))throw Error(k(200));return C0(e,t,null,n)};Me.createRoot=function(e,t){if(!us(e))throw Error(k(299));var n=!1,r="",i=pf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ls(e,1,!1,null,null,n,!1,r,i),e[pt]=t.current,kr(e.nodeType===8?e.parentNode:e),new ss(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Nc(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return nn(e)};Me.hydrate=function(e,t,n){if(!ko(t))throw Error(k(200));return So(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!us(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=pf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ff(t,null,e,1,n??null,i,!1,o,l),e[pt]=t.current,kr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Co(t)};Me.render=function(e,t,n){if(!ko(t))throw Error(k(200));return So(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!ko(e))throw Error(k(40));return e._reactRootContainer?(nn(function(){So(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};Me.unstable_batchedUpdates=ns;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ko(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return So(e,t,n,!1,r)};Me.version="18.2.0-next-9e3b772b8-20220608";function hf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hf)}catch(e){console.error(e)}}hf(),dc.exports=Me;var P0=dc.exports,Nu=P0;vl.createRoot=Nu.createRoot,vl.hydrateRoot=Nu.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $r(){return $r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$r.apply(this,arguments)}var jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jt||(jt={}));const Fu="popstate";function _0(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:a="",hash:s=""}=ln(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),ca("",{pathname:l,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=i.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof o=="string"?o:no(o))}function r(i,o){Eo(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return T0(t,n,r,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Eo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function z0(){return Math.random().toString(36).substr(2,8)}function Mu(e,t){return{usr:e.state,key:e.key,idx:t}}function ca(e,t,n,r){return n===void 0&&(n=null),$r({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ln(t):t,{state:n,key:t&&t.key||r||z0()})}function no(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ln(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function T0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=jt.Pop,s=null,u=h();u==null&&(u=0,l.replaceState($r({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function m(){a=jt.Pop;let P=h(),f=P==null?null:P-u;u=P,s&&s({action:a,location:v.location,delta:f})}function g(P,f){a=jt.Push;let c=ca(v.location,P,f);n&&n(c,P),u=h()+1;let p=Mu(c,u),x=v.createHref(c);try{l.pushState(p,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(x)}o&&s&&s({action:a,location:v.location,delta:1})}function w(P,f){a=jt.Replace;let c=ca(v.location,P,f);n&&n(c,P),u=h();let p=Mu(c,u),x=v.createHref(c);l.replaceState(p,"",x),o&&s&&s({action:a,location:v.location,delta:0})}function y(P){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof P=="string"?P:no(P);return q(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let v={get action(){return a},get location(){return e(i,l)},listen(P){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Fu,m),s=P,()=>{i.removeEventListener(Fu,m),s=null}},createHref(P){return t(i,P)},createURL:y,encodeLocation(P){let f=y(P);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:w,go(P){return l.go(P)}};return v}var Ou;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ou||(Ou={}));function R0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ln(t):t,i=cs(r.pathname||"/",n);if(i==null)return null;let o=mf(e);$0(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=A0(o[a],W0(i));return l}function mf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Mt([r,s.relativePath]),h=n.concat(s);o.children&&o.children.length>0&&(q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),mf(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:D0(u,o.index),routesMeta:h})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of gf(o.path))i(o,l,s)}),t}function gf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=gf(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function $0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:U0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const L0=/^:\w+$/,N0=3,F0=2,M0=1,O0=10,I0=-2,Iu=e=>e==="*";function D0(e,t){let n=e.split("/"),r=n.length;return n.some(Iu)&&(r+=I0),t&&(r+=F0),n.filter(i=>!Iu(i)).reduce((i,o)=>i+(L0.test(o)?N0:o===""?M0:O0),r)}function U0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function A0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",h=B0({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!h)return null;Object.assign(r,h.params);let m=a.route;o.push({params:r,pathname:Mt([i,h.pathname]),pathnameBase:K0(Mt([i,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(i=Mt([i,h.pathnameBase]))}return o}function B0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=H0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,m)=>{if(h==="*"){let g=a[m]||"";l=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return u[h]=V0(a[m]||"",h),u},{}),pathname:o,pathnameBase:l,pattern:e}}function H0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Eo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function W0(e){try{return decodeURI(e)}catch(t){return Eo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function V0(e,t){try{return decodeURIComponent(e)}catch(n){return Eo(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function cs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Q0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ln(e):e;return{pathname:n?n.startsWith("/")?n:G0(n,t):t,search:J0(r),hash:X0(i)}}function G0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ds(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fs(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ln(e):(i=$r({},e),q(!i.pathname||!i.pathname.includes("?"),hl("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),hl("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),hl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(r||l==null)a=n;else{let m=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}a=m>=0?t[m]:"/"}let s=Q0(i,a),u=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}const Mt=e=>e.join("/").replace(/\/\/+/g,"/"),K0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),J0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,X0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Y0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vf=["post","put","patch","delete"];new Set(vf);const Z0=["get",...vf];new Set(Z0);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}const ps=j.createContext(null),b0=j.createContext(null),Dn=j.createContext(null),jo=j.createContext(null),vt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),yf=j.createContext(null);function q0(e,t){let{relative:n}=t===void 0?{}:t;Un()||q(!1);let{basename:r,navigator:i}=j.useContext(Dn),{hash:o,pathname:l,search:a}=Cf(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Mt([r,l])),i.createHref({pathname:s,search:a,hash:o})}function Un(){return j.useContext(jo)!=null}function Ar(){return Un()||q(!1),j.useContext(jo).location}function xf(e){j.useContext(Dn).static||j.useLayoutEffect(e)}function wf(){let{isDataRoute:e}=j.useContext(vt);return e?ph():eh()}function eh(){Un()||q(!1);let e=j.useContext(ps),{basename:t,navigator:n}=j.useContext(Dn),{matches:r}=j.useContext(vt),{pathname:i}=Ar(),o=JSON.stringify(ds(r).map(s=>s.pathnameBase)),l=j.useRef(!1);return xf(()=>{l.current=!0}),j.useCallback(function(s,u){if(u===void 0&&(u={}),!l.current)return;if(typeof s=="number"){n.go(s);return}let h=fs(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Mt([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,o,i,e])}function th(){let{matches:e}=j.useContext(vt),t=e[e.length-1];return t?t.params:{}}function Cf(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=j.useContext(vt),{pathname:i}=Ar(),o=JSON.stringify(ds(r).map(l=>l.pathnameBase));return j.useMemo(()=>fs(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function nh(e,t){return rh(e,t)}function rh(e,t,n){Un()||q(!1);let{navigator:r}=j.useContext(Dn),{matches:i}=j.useContext(vt),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let s=Ar(),u;if(t){var h;let v=typeof t=="string"?ln(t):t;a==="/"||(h=v.pathname)!=null&&h.startsWith(a)||q(!1),u=v}else u=s;let m=u.pathname||"/",g=a==="/"?m:m.slice(a.length)||"/",w=R0(e,{pathname:g}),y=sh(w&&w.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:Mt([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Mt([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&y?j.createElement(jo.Provider,{value:{location:ro({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:jt.Pop}},y):y}function ih(){let e=fh(),t=Y0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,o)}const oh=j.createElement(ih,null);class lh extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?j.createElement(vt.Provider,{value:this.props.routeContext},j.createElement(yf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ah(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(ps);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(vt.Provider,{value:t},r)}function sh(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let a=o.findIndex(s=>s.route.id&&(l==null?void 0:l[s.route.id]));a>=0||q(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,s,u)=>{let h=s.route.id?l==null?void 0:l[s.route.id]:null,m=null;n&&(m=s.route.errorElement||oh);let g=t.concat(o.slice(0,u+1)),w=()=>{let y;return h?y=m:s.route.Component?y=j.createElement(s.route.Component,null):s.route.element?y=s.route.element:y=a,j.createElement(ah,{match:s,routeContext:{outlet:a,matches:g,isDataRoute:n!=null},children:y})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?j.createElement(lh,{location:n.location,revalidation:n.revalidation,component:m,error:h,children:w(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):w()},null)}var kf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(kf||{}),io=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(io||{});function uh(e){let t=j.useContext(ps);return t||q(!1),t}function ch(e){let t=j.useContext(b0);return t||q(!1),t}function dh(e){let t=j.useContext(vt);return t||q(!1),t}function Sf(e){let t=dh(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function fh(){var e;let t=j.useContext(yf),n=ch(io.UseRouteError),r=Sf(io.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function ph(){let{router:e}=uh(kf.UseNavigateStable),t=Sf(io.UseNavigateStable),n=j.useRef(!1);return xf(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ro({fromRouteId:t},o)))},[e,t])}function hh(e){let{to:t,replace:n,state:r,relative:i}=e;Un()||q(!1);let{matches:o}=j.useContext(vt),{pathname:l}=Ar(),a=wf(),s=fs(t,ds(o).map(h=>h.pathnameBase),l,i==="path"),u=JSON.stringify(s);return j.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function rr(e){q(!1)}function mh(e){let{basename:t="/",children:n=null,location:r,navigationType:i=jt.Pop,navigator:o,static:l=!1}=e;Un()&&q(!1);let a=t.replace(/^\/*/,"/"),s=j.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=ln(r));let{pathname:u="/",search:h="",hash:m="",state:g=null,key:w="default"}=r,y=j.useMemo(()=>{let v=cs(u,a);return v==null?null:{location:{pathname:v,search:h,hash:m,state:g,key:w},navigationType:i}},[a,u,h,m,g,w,i]);return y==null?null:j.createElement(Dn.Provider,{value:s},j.createElement(jo.Provider,{children:n,value:y}))}function gh(e){let{children:t,location:n}=e;return nh(da(t),n)}new Promise(()=>{});function da(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,da(r.props.children,o));return}r.type!==rr&&q(!1),!r.props.index||!r.props.children||q(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=da(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}function vh(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function yh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xh(e,t){return e.button===0&&(!t||t==="_self")&&!yh(e)}const wh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Ch="startTransition",Du=gl[Ch];function kh(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=_0({window:i,v5Compat:!0}));let l=o.current,[a,s]=j.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},h=j.useCallback(m=>{u&&Du?Du(()=>s(m)):s(m)},[s,u]);return j.useLayoutEffect(()=>l.listen(h),[l,h]),j.createElement(mh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l})}const Sh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Eh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dt=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:h}=t,m=vh(t,wh),{basename:g}=j.useContext(Dn),w,y=!1;if(typeof u=="string"&&Eh.test(u)&&(w=u,Sh))try{let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),x=cs(p.pathname,g);p.origin===c.origin&&x!=null?u=x+p.search+p.hash:y=!0}catch{}let v=q0(u,{relative:i}),P=jh(u,{replace:l,state:a,target:s,preventScrollReset:h,relative:i});function f(c){r&&r(c),c.defaultPrevented||P(c)}return j.createElement("a",fa({},m,{href:w||v,onClick:y||o?r:f,ref:n,target:s}))});var Uu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Uu||(Uu={}));var Au;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Au||(Au={}));function jh(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l}=t===void 0?{}:t,a=wf(),s=Ar(),u=Cf(e,{relative:l});return j.useCallback(h=>{if(xh(h,n)){h.preventDefault();let m=r!==void 0?r:no(s)===no(u);a(e,{replace:m,state:i,preventScrollReset:o,relative:l})}},[s,a,u,r,i,n,e,o,l])}function pa(){return pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pa.apply(this,arguments)}function Ef(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ph=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_h=Ef(function(e){return Ph.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function zh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Th(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Rh=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Th(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=zh(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),me="-ms-",oo="-moz-",I="-webkit-",jf="comm",hs="rule",ms="decl",$h="@import",Pf="@keyframes",Lh="@layer",Nh=Math.abs,Po=String.fromCharCode,Fh=Object.assign;function Mh(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function _f(e){return e.trim()}function Oh(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function ha(e,t){return e.indexOf(t)}function ce(e,t){return e.charCodeAt(t)|0}function Lr(e,t,n){return e.slice(t,n)}function et(e){return e.length}function gs(e){return e.length}function ai(e,t){return t.push(e),e}function Ih(e,t){return e.map(t).join("")}var _o=1,Fn=1,zf=0,Te=0,ee=0,An="";function zo(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:_o,column:Fn,length:l,return:""}}function bn(e,t){return Fh(zo("",null,null,"",null,null,0),e,{length:-e.length},t)}function Dh(){return ee}function Uh(){return ee=Te>0?ce(An,--Te):0,Fn--,ee===10&&(Fn=1,_o--),ee}function Ne(){return ee=Te<zf?ce(An,Te++):0,Fn++,ee===10&&(Fn=1,_o++),ee}function ot(){return ce(An,Te)}function Ti(){return Te}function Br(e,t){return Lr(An,e,t)}function Nr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tf(e){return _o=Fn=1,zf=et(An=e),Te=0,[]}function Rf(e){return An="",e}function Ri(e){return _f(Br(Te-1,ma(e===91?e+2:e===40?e+1:e)))}function Ah(e){for(;(ee=ot())&&ee<33;)Ne();return Nr(e)>2||Nr(ee)>3?"":" "}function Bh(e,t){for(;--t&&Ne()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Br(e,Ti()+(t<6&&ot()==32&&Ne()==32))}function ma(e){for(;Ne();)switch(ee){case e:return Te;case 34:case 39:e!==34&&e!==39&&ma(ee);break;case 40:e===41&&ma(e);break;case 92:Ne();break}return Te}function Hh(e,t){for(;Ne()&&e+ee!==47+10;)if(e+ee===42+42&&ot()===47)break;return"/*"+Br(t,Te-1)+"*"+Po(e===47?e:Ne())}function Wh(e){for(;!Nr(ot());)Ne();return Br(e,Te)}function Vh(e){return Rf($i("",null,null,null,[""],e=Tf(e),0,[0],e))}function $i(e,t,n,r,i,o,l,a,s){for(var u=0,h=0,m=l,g=0,w=0,y=0,v=1,P=1,f=1,c=0,p="",x=i,E=o,_=r,S=p;P;)switch(y=c,c=Ne()){case 40:if(y!=108&&ce(S,m-1)==58){ha(S+=D(Ri(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:S+=Ri(c);break;case 9:case 10:case 13:case 32:S+=Ah(y);break;case 92:S+=Bh(Ti()-1,7);continue;case 47:switch(ot()){case 42:case 47:ai(Qh(Hh(Ne(),Ti()),t,n),s);break;default:S+="/"}break;case 123*v:a[u++]=et(S)*f;case 125*v:case 59:case 0:switch(c){case 0:case 125:P=0;case 59+h:f==-1&&(S=D(S,/\f/g,"")),w>0&&et(S)-m&&ai(w>32?Hu(S+";",r,n,m-1):Hu(D(S," ","")+";",r,n,m-2),s);break;case 59:S+=";";default:if(ai(_=Bu(S,t,n,u,h,i,a,p,x=[],E=[],m),o),c===123)if(h===0)$i(S,t,_,_,x,o,m,a,E);else switch(g===99&&ce(S,3)===110?100:g){case 100:case 108:case 109:case 115:$i(e,_,_,r&&ai(Bu(e,_,_,0,0,i,a,p,i,x=[],m),E),i,E,m,a,r?x:E);break;default:$i(S,_,_,_,[""],E,0,a,E)}}u=h=w=0,v=f=1,p=S="",m=l;break;case 58:m=1+et(S),w=y;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&Uh()==125)continue}switch(S+=Po(c),c*v){case 38:f=h>0?1:(S+="\f",-1);break;case 44:a[u++]=(et(S)-1)*f,f=1;break;case 64:ot()===45&&(S+=Ri(Ne())),g=ot(),h=m=et(p=S+=Wh(Ti())),c++;break;case 45:y===45&&et(S)==2&&(v=0)}}return o}function Bu(e,t,n,r,i,o,l,a,s,u,h){for(var m=i-1,g=i===0?o:[""],w=gs(g),y=0,v=0,P=0;y<r;++y)for(var f=0,c=Lr(e,m+1,m=Nh(v=l[y])),p=e;f<w;++f)(p=_f(v>0?g[f]+" "+c:D(c,/&\f/g,g[f])))&&(s[P++]=p);return zo(e,t,n,i===0?hs:a,s,u,h)}function Qh(e,t,n){return zo(e,t,n,jf,Po(Dh()),Lr(e,2,-2),0)}function Hu(e,t,n,r){return zo(e,t,n,ms,Lr(e,0,r),Lr(e,r+1,-1),r)}function Pn(e,t){for(var n="",r=gs(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Gh(e,t,n,r){switch(e.type){case Lh:if(e.children.length)break;case $h:case ms:return e.return=e.return||e.value;case jf:return"";case Pf:return e.return=e.value+"{"+Pn(e.children,r)+"}";case hs:e.value=e.props.join(",")}return et(n=Pn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Kh(e){var t=gs(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function Jh(e){return function(t){t.root||(t=t.return)&&e(t)}}var Xh=function(t,n,r){for(var i=0,o=0;i=o,o=ot(),i===38&&o===12&&(n[r]=1),!Nr(o);)Ne();return Br(t,Te)},Yh=function(t,n){var r=-1,i=44;do switch(Nr(i)){case 0:i===38&&ot()===12&&(n[r]=1),t[r]+=Xh(Te-1,n,r);break;case 2:t[r]+=Ri(i);break;case 4:if(i===44){t[++r]=ot()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Po(i)}while(i=Ne());return t},Zh=function(t,n){return Rf(Yh(Tf(t),n))},Wu=new WeakMap,bh=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Wu.get(r))&&!i){Wu.set(t,!0);for(var o=[],l=Zh(n,o),a=r.props,s=0,u=0;s<l.length;s++)for(var h=0;h<a.length;h++,u++)t.props[u]=o[s]?l[s].replace(/&\f/g,a[h]):a[h]+" "+l[s]}}},qh=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function $f(e,t){switch(Mh(e,t)){case 5103:return I+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return I+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return I+e+oo+e+me+e+e;case 6828:case 4268:return I+e+me+e+e;case 6165:return I+e+me+"flex-"+e+e;case 5187:return I+e+D(e,/(\w+).+(:[^]+)/,I+"box-$1$2"+me+"flex-$1$2")+e;case 5443:return I+e+me+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return I+e+me+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return I+e+me+D(e,"shrink","negative")+e;case 5292:return I+e+me+D(e,"basis","preferred-size")+e;case 6060:return I+"box-"+D(e,"-grow","")+I+e+me+D(e,"grow","positive")+e;case 4554:return I+D(e,/([^-])(transform)/g,"$1"+I+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,I+"$1"),/(image-set)/,I+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,I+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,I+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+I+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,I+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(et(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+I+"$2-$3$1"+oo+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ha(e,"stretch")?$f(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ce(e,t+1)!==115)break;case 6444:switch(ce(e,et(e)-3-(~ha(e,"!important")&&10))){case 107:return D(e,":",":"+I)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+I+(ce(e,14)===45?"inline-":"")+"box$3$1"+I+"$2$3$1"+me+"$2box$3")+e}break;case 5936:switch(ce(e,t+11)){case 114:return I+e+me+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return I+e+me+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return I+e+me+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return I+e+me+e+e}return e}var em=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case ms:t.return=$f(t.value,t.length);break;case Pf:return Pn([bn(t,{value:D(t.value,"@","@"+I)})],i);case hs:if(t.length)return Ih(t.props,function(o){switch(Oh(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Pn([bn(t,{props:[D(o,/:(read-\w+)/,":"+oo+"$1")]})],i);case"::placeholder":return Pn([bn(t,{props:[D(o,/:(plac\w+)/,":"+I+"input-$1")]}),bn(t,{props:[D(o,/:(plac\w+)/,":"+oo+"$1")]}),bn(t,{props:[D(o,/:(plac\w+)/,me+"input-$1")]})],i)}return""})}},tm=[em],nm=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var P=v.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||tm,o={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var P=v.getAttribute("data-emotion").split(" "),f=1;f<P.length;f++)o[P[f]]=!0;a.push(v)});var s,u=[bh,qh];{var h,m=[Gh,Jh(function(v){h.insert(v)})],g=Kh(u.concat(i,m)),w=function(P){return Pn(Vh(P),g)};s=function(P,f,c,p){h=c,w(P?P+"{"+f.styles+"}":f.styles),p&&(y.inserted[f.name]=!0)}}var y={key:n,sheet:new Rh({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return y.sheet.hydrate(a),y},Lf={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=typeof Symbol=="function"&&Symbol.for,vs=se?Symbol.for("react.element"):60103,ys=se?Symbol.for("react.portal"):60106,To=se?Symbol.for("react.fragment"):60107,Ro=se?Symbol.for("react.strict_mode"):60108,$o=se?Symbol.for("react.profiler"):60114,Lo=se?Symbol.for("react.provider"):60109,No=se?Symbol.for("react.context"):60110,xs=se?Symbol.for("react.async_mode"):60111,Fo=se?Symbol.for("react.concurrent_mode"):60111,Mo=se?Symbol.for("react.forward_ref"):60112,Oo=se?Symbol.for("react.suspense"):60113,rm=se?Symbol.for("react.suspense_list"):60120,Io=se?Symbol.for("react.memo"):60115,Do=se?Symbol.for("react.lazy"):60116,im=se?Symbol.for("react.block"):60121,om=se?Symbol.for("react.fundamental"):60117,lm=se?Symbol.for("react.responder"):60118,am=se?Symbol.for("react.scope"):60119;function Ie(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case vs:switch(e=e.type,e){case xs:case Fo:case To:case $o:case Ro:case Oo:return e;default:switch(e=e&&e.$$typeof,e){case No:case Mo:case Do:case Io:case Lo:return e;default:return t}}case ys:return t}}}function Nf(e){return Ie(e)===Fo}A.AsyncMode=xs;A.ConcurrentMode=Fo;A.ContextConsumer=No;A.ContextProvider=Lo;A.Element=vs;A.ForwardRef=Mo;A.Fragment=To;A.Lazy=Do;A.Memo=Io;A.Portal=ys;A.Profiler=$o;A.StrictMode=Ro;A.Suspense=Oo;A.isAsyncMode=function(e){return Nf(e)||Ie(e)===xs};A.isConcurrentMode=Nf;A.isContextConsumer=function(e){return Ie(e)===No};A.isContextProvider=function(e){return Ie(e)===Lo};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===vs};A.isForwardRef=function(e){return Ie(e)===Mo};A.isFragment=function(e){return Ie(e)===To};A.isLazy=function(e){return Ie(e)===Do};A.isMemo=function(e){return Ie(e)===Io};A.isPortal=function(e){return Ie(e)===ys};A.isProfiler=function(e){return Ie(e)===$o};A.isStrictMode=function(e){return Ie(e)===Ro};A.isSuspense=function(e){return Ie(e)===Oo};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===To||e===Fo||e===$o||e===Ro||e===Oo||e===rm||typeof e=="object"&&e!==null&&(e.$$typeof===Do||e.$$typeof===Io||e.$$typeof===Lo||e.$$typeof===No||e.$$typeof===Mo||e.$$typeof===om||e.$$typeof===lm||e.$$typeof===am||e.$$typeof===im)};A.typeOf=Ie;Lf.exports=A;var sm=Lf.exports,Ff=sm,um={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mf={};Mf[Ff.ForwardRef]=um;Mf[Ff.Memo]=cm;var dm=!0;function fm(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Of=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||dm===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},pm=function(t,n,r){Of(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function hm(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var mm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},gm=/[A-Z]|^ms/g,vm=/_EMO_([^_]+?)_([^]*?)_EMO_/g,If=function(t){return t.charCodeAt(1)===45},Vu=function(t){return t!=null&&typeof t!="boolean"},ml=Ef(function(e){return If(e)?e:e.replace(gm,"-$&").toLowerCase()}),Qu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(vm,function(r,i,o){return tt={name:i,styles:o,next:tt},i})}return mm[t]!==1&&!If(t)&&typeof n=="number"&&n!==0?n+"px":n};function Fr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return tt={name:n.name,styles:n.styles,next:tt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)tt={name:r.name,styles:r.styles,next:tt},r=r.next;var i=n.styles+";";return i}return ym(e,t,n)}case"function":{if(e!==void 0){var o=tt,l=n(e);return tt=o,Fr(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function ym(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Fr(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":Vu(l)&&(r+=ml(o)+":"+Qu(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)Vu(l[a])&&(r+=ml(o)+":"+Qu(o,l[a])+";");else{var s=Fr(e,t,l);switch(o){case"animation":case"animationName":{r+=ml(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var Gu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,tt,Df=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";tt=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=Fr(r,n,l)):o+=l[0];for(var a=1;a<t.length;a++)o+=Fr(r,n,t[a]),i&&(o+=l[a]);Gu.lastIndex=0;for(var s="",u;(u=Gu.exec(o))!==null;)s+="-"+u[1];var h=hm(o)+s;return{name:h,styles:o,next:tt}},xm=function(t){return t()},wm=gl["useInsertionEffect"]?gl["useInsertionEffect"]:!1,Cm=wm||xm,Uf=j.createContext(typeof HTMLElement<"u"?nm({key:"css"}):null);Uf.Provider;var km=function(t){return j.forwardRef(function(n,r){var i=j.useContext(Uf);return t(n,i,r)})},Sm=j.createContext({});function Em(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Df(t)}var jm=function(){var t=Em.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Pm=_h,_m=function(t){return t!=="theme"},Ku=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Pm:_m},Ju=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(l){return t.__emotion_forwardProp(l)&&o(l)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},zm=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Of(n,r,i),Cm(function(){return pm(n,r,i)}),null},Tm=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,l;n!==void 0&&(o=n.label,l=n.target);var a=Ju(t,n,r),s=a||Ku(i),u=!s("as");return function(){var h=arguments,m=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&m.push("label:"+o+";"),h[0]==null||h[0].raw===void 0)m.push.apply(m,h);else{m.push(h[0][0]);for(var g=h.length,w=1;w<g;w++)m.push(h[w],h[0][w])}var y=km(function(v,P,f){var c=u&&v.as||i,p="",x=[],E=v;if(v.theme==null){E={};for(var _ in v)E[_]=v[_];E.theme=j.useContext(Sm)}typeof v.className=="string"?p=fm(P.registered,x,v.className):v.className!=null&&(p=v.className+" ");var S=Df(m.concat(x),P.registered,E);p+=P.key+"-"+S.name,l!==void 0&&(p+=" "+l);var R=u&&a===void 0?Ku(c):s,B={};for(var N in v)u&&N==="as"||R(N)&&(B[N]=v[N]);return B.className=p,B.ref=f,j.createElement(j.Fragment,null,j.createElement(zm,{cache:P,serialized:S,isStringTag:typeof c=="string"}),j.createElement(c,B))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=m,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return"."+l}}),y.withComponent=function(v,P){return e(v,pa({},n,P,{shouldForwardProp:Ju(y,P,!0)})).apply(void 0,m)},y}},Rm=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],C=Tm.bind();Rm.forEach(function(e){C[e]=C(e)});var Af={exports:{}},$m="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Lm=$m,Nm=Lm;function Bf(){}function Hf(){}Hf.resetWarningCache=Bf;var Fm=function(){function e(r,i,o,l,a,s){if(s!==Nm){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Hf,resetWarningCache:Bf};return n.PropTypes=n,n};Af.exports=Fm();var Mm=Af.exports;const le=ec(Mm),Om=C.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: ${({visible:e})=>e?"block":"none"};
  z-index: 99;
`,Wf=({visible:e,onClose:t})=>d.jsx(Om,{visible:e,onClick:t});Wf.propTypes={visible:le.bool.isRequired,onClose:le.func.isRequired};const Bn={primary:"'Ubuntu', sans-serif",secondary:'"Roboto", sans-serif',third:'"Playfair Display", serif'},$={text:{xs:`
    font-size: 0.625rem;
    line-height: 0.55rem;
    `,sm:`
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,md:`
    font-size: 1rem;
    `,lg:`
    font-size: 1.125rem;
    line-height: 1.5rem;
    `,xl:`
    font-size: 1.3rem;
    line-height: 1.75rem;
    `,xt:`
    font-size: 0.875rem;
    line-height: normal;
    `,lgx:`
    font-size: 1.1rem;
    `},head:{xs:`
    font-size: 1.25rem;
    line-height: 1.75rem;
    `,xss:`
    font-size: 1.4rem;
    line-height: 1.75rem;
    `,sm:`
    font-size: 1.5rem;
    line-height: 2rem;
    `,md:`
    font-size: 1.875rem;
    line-height: 2.25rem;
    `,lg:`
    font-size: 2.25rem;
    line-height: 3rem;
    `,lgx:`
    font-size: 3rem;
    line-height: 2.2rem;
    `,xl:`
    font-size: 4rem;
    line-height: 5rem;
    font-style: normal;
    letter-spacing: -0.5px;
    line-height: 88px;
    `,xxl:`
    font-size: 3rem;
    line-height: 3.75rem;
    `}};for(const e in $.text)$.text[e]+=`
  font-family: ${Bn.primary};
  `;for(const e in $.head)$.head[e]+=`
  font-family: ${Bn.primary};
  font-weight: 600;
  `;const ye={text:{xs:`
    font-size: 0.625rem;
    line-height: 0.55rem;
    `,sm:`
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,md:`
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.26rem;
    `,lg:`
    font-size: 1.125rem;
    line-height: 1.41rem;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    `,xl:`
    font-size: 1.3rem;
    line-height: 1.75rem;
    `,xt:`
    font-size: 0.875rem;
    line-height: normal;
    color: gray;
    `},head:{xs:`
    font-size: 1.25rem;
    line-height: 1.75rem;
    `,xss:`
    font-size: 1.4rem;
    line-height: 1.75rem;
    `,sm:`
    font-size: 1.5rem;
    line-height: 2rem;
    `,md:`
    font-size: 1.875rem;
    line-height: 2.25rem;
    `,lg:`
    font-size: 2.25rem;
    line-height: 2.5rem;
    `,xl:`
    font-size: 4rem;
    line-height: 5rem;
    font-style: normal;
    letter-spacing: -0.5px;
    line-height: 88px;
    `,xxl:`
    font-size: 3rem;
    line-height: 3.75rem;
    `}};for(const e in ye.head)ye.head[e]+=`
  font-family: ${Bn.secondary};
  font-weight: 600;
  `;for(const e in ye.text)ye.text[e]+=`
  font-family: ${Bn.secondary};
  `;const Zt={text:{xs:`
    font-size: 0.625rem;
    line-height: 0.55rem;
    `,sm:`
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,md:`
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.26rem;
    `,lg:`
    font-size: 1.125rem;
    line-height: 1.41rem;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    `,xl:`
    font-size: 1.3rem;
    line-height: 1.75rem;
    `,xt:`
    font-size: 0.875rem;
    line-height: normal;
    color: gray;
    `},head:{xs:`
    font-size: 1.25rem;
    line-height: 1.75rem;
    `,xss:`
    font-size: 1.4rem;
    line-height: 1.75rem;
    `,sm:`
    font-size: 1.5rem;
    line-height: 2rem;
    `,md:`
    font-size: 1.875rem;
    line-height: 2.25rem;
    `,lg:`
    font-size: 2.3rem;
    line-height: 3rem;
    `,xl:`
    font-size: 4rem;
    line-height: 5rem;
    font-style: normal;
    letter-spacing: -0.5px;
    line-height: 88px;
    `,xxl:`
    font-size: 3rem;
    line-height: 3.75rem;
    `}};for(const e in Zt.head)Zt.head[e]+=`
  font-family: ${Bn.third};
  font-weight: 600;
  `;for(const e in Zt.text)Zt.text[e]+=`
  font-family: ${Bn.third};
  `;const Q={pink:{50:"#FDF2F8",100:"#FCE7F3",200:"#FBCFE8",300:"#F9A8D4",400:"#F472B6",500:"#EC4899",600:"#DB2777",700:"#BE185D",800:"#9D174D",900:"#831843"},stone:{50:"#FAFAF9",100:"#F5F5F4",200:"#E7E5E4",300:"#D6D3D1",400:"#A8A29E",500:"#78716C",600:"#57534E",700:"#44403C",800:"#292524",900:"#1C1917"},red:{50:"#FEF2F2",100:"#FEE2E2",200:"#FECACA",300:"#FCA5A5",400:"#F87171",500:"#EF4444",600:"#DC2626",700:"#B91C1C",800:"#991B1B",900:"#7F1D1D"},yellow:{50:"#FFFBEB",100:"#FEF3C7",200:"#FDE68A",300:"#FCD34D",400:"#FBBF24",500:"#F5B40B",600:"#D1AE00",700:"#A67D02",800:"#89610A",900:"#744F0F"},green:{50:"#ECFDF5",100:"#D1FAE5",200:"#A7F3D0",300:"#6EE7B7",400:"#34D399",500:"#10B981",600:"#059669",700:"#047857",800:"#065F46",900:"#064E3B"},blue:{50:"#EFF6FF",100:"#DBEAFE",200:"#BFDBFE",300:"#93C5FD",400:"#60A5FA",500:"#3B82F6",600:"#2563EB",700:"#1D4ED8",800:"#1E40AF",900:"#1E3A8A",1e3:"#033244"},black:{50:"#404040",100:"#303030",200:"#2F2F2F",300:"#2C2C2C",400:"#2B2B2B",500:"#202020",600:"#1C1C1C",700:"#1A1A1A",800:"#161616",900:"#111111"},tangerine:{25:"#F06529",50:"#FFFBEA",100:"#FFF1C5",200:"#FFE485",300:"#FFCF46",400:"#FFB91B",500:"#FF9500",600:"#E26E00",700:"#BB4A02",800:"#983908",900:"#7C2f0B",950:"#481600"},white:"#FFFFFF","light-gray":"#f6f6f9",gray:"#B8B8BB"},Im=C.button`
  ${$.head.xs}
  background-color: transparent;
  border: 1px solid ${Q.blue[500]};
  font-weight: 500;
  color: white;
  border-radius: 16px;
  height: 48px;
  width: 140px;
  align-self: center;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.07);
    background-color: ${Q.blue[500]}
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`,lo=({profileURL:e})=>(lo.propTypes={profileURL:le.string},d.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:d.jsx(Im,{children:"Contact Me"})}));C.button`
  ${$.text.xl}
  background-color: ${Q.blue[700]};
  color: white;
  border: none;
  border-radius: 36px;
  height: 64px;
  padding: 16px;
  align-items: center;
  cursor: pointer;
`;const Dm=C.button`
  ${ye.text.md};
  background-color: white;
  color: black;
  border: none;
  border-radius: 1rem;
  width: 300px;
  padding: 16px;
  align-items: center;
  cursor: pointer;

   @media (max-width: 500px) {
    ${ye.text.sm};
    width: 200px;
  }
`;var Vf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xu=Pt.createContext&&Pt.createContext(Vf),Ot=globalThis&&globalThis.__assign||function(){return Ot=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ot.apply(this,arguments)},Um=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Qf(e){return e&&e.map(function(t,n){return Pt.createElement(t.tag,Ot({key:n},t.attr),Qf(t.child))})}function xe(e){return function(t){return Pt.createElement(Am,Ot({attr:Ot({},e.attr)},t),Qf(e.child))}}function Am(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=Um(e,["attr","size","title"]),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Pt.createElement("svg",Ot({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:Ot(Ot({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Pt.createElement("title",null,o),e.children)};return Xu!==void 0?Pt.createElement(Xu.Consumer,null,function(n){return t(n)}):t(Vf)}function Bm(e){return xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(e)}function Hm(e){return xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(e)}const Wm=C.div`
  display: flex;
  width: 80%;
  height: 10rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid white;
  
`,Vm=C.h1`
  ${ye.head.md}
  color: ${Q.stone[100]};
  margin: 0;

  @media (max-width: 900px) {
    ${ye.head.sm};
  }
`,Qm=C.li`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`,Yu=C.p`
  ${$.head.xs}
  font-weight: 500;
  color: ${Q.stone[100]};
  margin: 0;
  padding: 16px 0;
`,Gm=C.div`
  display: ${e=>e.visible?"flex":"none"};
  flex-direction: column;
  background-color: ${Q.black[100]};
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  right: ${e=>e.visible?"0":"-250px"};
  transition: right 0.5s ease;
  z-index: 100;
  text-align: center;

  @media (max-width: 900px) {
    width: 80%;
    right: ${e=>e.visible?"0":"-80%"};
  }
`,Gf=jm`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`,Km=C.div`
  display: none;
  cursor: pointer;
  color: ${Q.stone[100]};
  padding-top: 4px;
  transition: transform 0.5s ease;  

  @media (max-width: 900px) {
    display: ${e=>e.menuVisible?"none":"block"};
    animation: ${Gf} 0.5s linear;
  }
`,Jm=C.div`
  display: none;
  cursor: pointer;
  color: ${Q.stone[100]};
  transition: transform 0.5s ease;

  @media (max-width: 900px) {
    display: ${e=>e.menuVisible?"block":"none"};
  }
  animation: ${Gf} 0.5s linear reverse;
  margin: 1rem 1rem 0 0;
  align-self: flex-end;
`,Xm=C.img`
    border-radius: 50%;
    margin: 1rem 0;
    width: 150px;
    height: 150px;
    display: flex;
    align-self: center;

    @media (max-width: 375px) {
      width: 130px;
      height: 130px;
    }
`;function Ym(){const[e,t]=j.useState(!1),n=()=>{t(i=>!i)},r=()=>{t(!1)};return d.jsxs(d.Fragment,{children:[d.jsxs(Wm,{menuVisible:e,children:[d.jsx(Vm,{children:d.jsx(dt,{to:"/",style:{textDecoration:"none",color:"inherit"},onClick:()=>window.scrollTo(0,0),children:"Jorge Rosano"})}),d.jsx(Km,{onClick:n,menuVisible:e,children:d.jsx(Bm,{style:{height:"40px",width:"40px"}})}),d.jsxs(Qm,{children:[d.jsx(dt,{to:"/projects",style:{textDecoration:"none"},onClick:()=>window.scrollTo(0,0),children:d.jsx(Yu,{children:"Portfolio"})}),d.jsx(lo,{profileURL:"https://www.linkedin.com/in/jorgeros13"})]}),d.jsxs(Gm,{visible:e,children:[d.jsx(Jm,{onClick:n,menuVisible:e,children:d.jsx(Hm,{style:{height:"1.5rem",width:"1.5rem"}})}),d.jsx(Xm,{src:"/images/jr.png",alt:"jr"}),d.jsx(dt,{to:"/projects",style:{textDecoration:"none"},onClick:()=>window.scrollTo(0,0),children:d.jsx(Yu,{style:{color:"white"},children:"Portfolio"})}),d.jsx(lo,{profileURL:"https://www.linkedin.com/in/jorgeros13"})]})]}),d.jsx(Wf,{visible:e,onClose:r})]})}function Zm(e){return xe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z"}}]})(e)}function Kf(e){return xe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(e)}function Jf(e){return xe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}}]})(e)}const bm=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 1000px) {
    padding: 0;
    align-items: center;
  }
`,qm=C.div`
  display: flex;
  gap: 10px;

`,eg=C.img`
  width: 270px;
  border-radius: 13%;

  @media (max-width: 600px) {
    width: 250px;
  }

  @media (max-width: 350px) {
    width: 180px;
  }
`,Zu=C.a`
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.08);
  }
`,bu=C.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px){
    width: 1.75rem;
  }
`;function Xf({gitHubUrl:e,linkedInUrl:t,img:n}){return Xf.propTypes={gitHubUrl:le.string,linkedInUrl:le.string,img:le.string},d.jsxs(bm,{children:[d.jsx(eg,{src:n,alt:"JRoss"}),d.jsxs(qm,{children:[d.jsx(Zu,{href:e,children:d.jsx(bu,{children:d.jsx(Kf,{style:{width:"100%",height:"110%",color:"#D6D3D1"}})})}),d.jsx(Zu,{href:t,children:d.jsx(bu,{children:d.jsx(Jf,{style:{width:"85%",height:"90%",color:"#D6D3D1"}})})})]})]})}const tg="/the-portfolio/assets/Developer-0e8f9fb1.jpg",ng=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,rg=C.p`
  ${$.head.lgx};
  color: white;
  margin: 0;
  padding-top: 1rem;

   @media (max-width: 1100px) {
   text-align: center;
   ${$.head.lg};
  }

  @media (max-width: 500px) {
    ${$.head.md};
    
  }
`,ig=C.p`
  ${$.text.xl}
  color: white;
  margin: 0;
  padding: 2rem 0;

   @media (max-width: 1100px) {
    ${$.text.lgx};
    padding-bottom: 0;
  }
`,og=C.p`
  ${$.head.lg};
  color: ${Q.blue[300]};
  margin: 0;
  padding-top: 2rem;

   @media (max-width: 1100px) {
   ${$.text.xl};
   font-weight: 400;
  }
`;function lg(){return d.jsxs(ng,{children:[d.jsx(rg,{children:'"Hello world!"'}),d.jsxs(ig,{children:["I'm ",d.jsx("span",{style:{color:"#93C5FD",fontWeight:600},children:"Jorge"}),", an independent full-stack web developer from México, designing and developing apps for different types of clients, ranging from small businesses to growing companies.",d.jsx("br",{})]}),d.jsx(og,{children:"Ready to bring your next big idea to life!"})]})}const ag=C.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 320px;
  font-size: 12px;
  cursor: pointer;
  letter-spacing: 0.5px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    width: 260px;
  }

  @media (max-width: 320px) {
    width: 220px;
  }
`,sg=C.img`
  filter: grayscale(100%);
  height: 160px;

  &:hover {
    transition: filter 0.3s ease;
    filter: grayscale(0%);  
  }

  @media (max-width: 500px) {
    height: 140px;
  }

  @media (max-width: 320px) {
    height: 120px;
  }
`,ug=C.p`
  ${$.text.lg}
  color: white;
  margin: 0;
  padding-bottom: 5px;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`,cg=C.p`
  ${$.text.sm}
  color: white;
  margin: 0;
  overflow: hidden;
`;function Yf({img:e,title:t,summary:n}){Yf.propTypes={title:le.string.isRequired,summary:le.string.isRequired,img:le.string};const r=100,i=n.length>r?n.slice(0,r)+"...":n;return d.jsxs(ag,{children:[d.jsx(sg,{src:e,alt:"home-cards"}),d.jsx(ug,{children:t}),d.jsx(cg,{children:i})]})}function ws(e){return xe({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function Cs(e){return xe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function ks(e){return xe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function Ss(e){return xe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"}}]})(e)}const dg=C.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  border-top: 1px solid #A8A29E;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`,fg=C.div`
  ${$.text.lg}
  color: ${Q.stone[200]};
  font-weight: 500;
  margin: 0;
  padding: 4rem 0 5rem;
  text-align: left;

  @media (max-width: 800px) {
    padding: 4rem 0 0 0;
  }
`,pg=C.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 0;
  align-items: center;
  gap: 4rem;
  margin: 0;
  color: white;

  @media (max-width: 800px) {
    padding: 0 0 5rem 0;
    gap: 2rem;
    grid-template-columns: repeat(1, auto);
    align-items: flex-start;
  }
`,si=C.li`
  margin: 0;
`,ui=C.a`
  color: inherit;
  text-decoration: none;
  font-size: 2.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5rem;

   @media (max-width: 800px) {
    font-size: 2rem;
  }
`,hg=C.p`
  color: ${Q.stone[300]};
  ${$.head.lg};
  margin: 0;
`,mg=C.p`
  ${$.text.md}
  color: ${Q.stone[100]};
  margin: .5rem 0;
  font-weight: 400;
`,gg=C.p`
  ${$.text.md}
  color: ${Q.stone[100]};
  margin: .5rem 0;
  font-weight: 400;
  text-align: right;

  @media (max-width: 800px) {
    text-align: left;
  }
`,ci=C.p`
  ${$.text.md}
  color: white;
  margin: 0;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    ${$.text.sm}
  }
`,vg=C.p`
  ${$.text.md}
  color: ${Q.stone[100]};
  margin: 0;
  }
`,yg=C.span`
  ${$.text.md};
  color: ${Q.blue[300]};
  margin: 0;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`,xg=C.a`
  text-decoration: none;
`;function wg(){return d.jsxs(dg,{children:[d.jsxs(fg,{children:[d.jsxs(hg,{children:["Let's chat! ",d.jsx("br",{}),d.jsx("br",{})]}),d.jsxs(mg,{children:["Need a full-stack developer to help out? ",d.jsx("br",{})]}),d.jsxs(vg,{children:[d.jsx(xg,{href:"mailto:jorg.ross@protonmail.com",children:d.jsx(yg,{children:"Send me an email"})})," and see how we can make a positive impact together! ",d.jsx("br",{}),d.jsx("br",{})]}),d.jsxs(gg,{children:["Find me on these online spaces!",d.jsx("span",{style:{color:"#93C5FD"},children:" →"})]})]}),d.jsxs(pg,{children:[d.jsx(si,{children:d.jsxs(ui,{href:"https://github.com/jorge-ross",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(ws,{}),d.jsx(ci,{children:"GitHub"})]})}),d.jsx(si,{children:d.jsxs(ui,{href:"https://www.linkedin.com/in/jorgeros13",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(ks,{}),d.jsx(ci,{children:"LinkedIn"})]})}),d.jsx(si,{children:d.jsxs(ui,{href:"https://www.instagram.com/_jorgeross",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(Cs,{}),d.jsx(ci,{children:"Instagram"})]})}),d.jsx(si,{children:d.jsxs(ui,{href:"https://x.com/jorg_ros",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(Ss,{}),d.jsx(ci,{children:"X"})]})})]})]})}const pr=[{id:"1",imgSrc:"/images/get-that-home.png",imgComp:"/images/gth-cpm.png",title:"Get that home",summary:"A sophisticated React-based application meticulously designed to provide a compelling, user-friendly platform for renting, selling, and searching for houses and apartments. This application integrates advanced features such as price range filters for rooms and bathrooms, allowing users to tailor their search to fit their specific needs. Additionally, the intuitive interface ensures a seamless experience, making it easy for users to navigate through listings, view property details, and contact sellers or landlords. Whether users are looking to find their ideal home or list their properties with ease, this application offers a comprehensive and efficient solution for all real estate needs.",tech:["Javascript","React","Ruby","Rails","Heroku"],team:[{name:"Gabriel Nuñez",profilePicUrl:"/images/gab.jpg",githubUrl:"https://github.com/NunezGabriel"},{name:"Jorge Rosano",profilePicUrl:"/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross",linkedinurl:"https://www.linkedin.com/in/jorgeros13"},{name:"Pedro Arias",profilePicUrl:"/images/ped.png",githubUrl:"https://github.com/pdroariasvilela"},{name:"Diego Gómez",profilePicUrl:"/images/dg.jpg",githubUrl:"https://github.com/DiegoGomezCuadross"},{name:"Daniel Toledo",profilePicUrl:"/images/dt.jpg",githubUrl:"https://github.com/DanielToledo-99"}],project_url:"https://github.com/jorge-ross/get-that-home-c-10"},{id:"2",imgSrc:"/images/ndev.png",imgComp:"/images/logond-wb.png",title:"Neuro-dev",summary:"Explore my bespoke clinic website, which aims to serve as a comprehensive psychology platform. Although still in progress, it is designed to deliver a seamless and intuitive user experience for those seeking mental health care. The website will offer a range of features to help users find the support they need, from a detailed therapist profile and appointment scheduling to resources and tools for mental well-being.",tech:["Javascript","React","HTML","CSS"],team:[{name:"Jorge Rosano",profilePicUrl:"/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/neuro-dev"},{id:"3",imgSrc:"/images/clivia.png",imgComp:"/images/cli-comp.png",title:"CLIvia Generator",summary:"The classic trivia game that challenges users with questions on a wide range of topics, including history, science, and pop culture. Players earn one point for each correct answer, and the highest score at the end of the game wins. Built with Ruby, this game provides an engaging and educational experience for users of all ages. Its dynamic interface and diverse question pool ensure that players stay entertained and informed throughout the gameplay.",tech:["Ruby","Heroku"],team:[{name:"Jorge Rosano",profilePicUrl:"/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/CLIvia-generator"},{id:"4",imgSrc:"/images/doable-one.png",imgComp:"/images/doable.png",title:"Doable",summary:"A streamlined iteration of a note-taking application constructed using JavaScript, enabling users to generate, categorize, and oversee tasks. This application offers a user-friendly interface and efficient organization features, allowing users to create notes quickly, assign categories for better organization, and manage their tasks with ease. Whether for personal use or professional project management, this note-taking app enhances productivity and keeps users organized.",tech:["Javascript"],team:[{name:"Jorge Rosano",profilePicUrl:"/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/Doable-js"},{id:"5",imgSrc:"/images/eatable.png",imgComp:"/images/eatable-co.png",title:"Eatable",summary:"A dynamic digital menu crafted with React for both personal and commercial use, allowing users to explore, create, edit, and delete dishes. This application provides a personalized user experience by enabling customization and management of menu items with ease. Whether for a home cook or a restaurant owner, this digital menu enhances the dining experience by offering flexibility and control over menu content.",tech:["Javascript","React"],team:[{name:"Jorge Rosano",profilePicUrl:"/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/Eatable-p"},{id:"6",imgSrc:"/images/b-ui.png",imgComp:"/images/blog-co.png",title:"Blog UI",summary:"A website focused on enhancing the user experience when interacting with an online blog. The objective of this project is to create an enjoyable and engaging user interface (UI) using HTML and CSS. By prioritizing intuitive design and aesthetic appeal, this website aims to make reading and navigating the blog a pleasant and seamless experience for users. Thoughtful design elements and responsive layouts are incorporated to ensure that the blog is visually appealing and easy to use across different devices and screen sizes.",tech:["HTML","CSS"],team:[{name:"Jorge Rosano",profilePicUrl:"/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/jorgeross--blog-ui"},{id:"7",imgSrc:"/images/contactable.png",imgComp:"/images/conco.png",title:"Contactable",summary:"Making your life easier! Keep track of contact emails and phone numbers with the Contactable app. Let us be your local memory, so you can focus on what matters most to you. This app provides a user-friendly interface to easily store, organize, and access your important contacts, ensuring you never lose touch with the people who matter. With Contactable, managing your contacts has never been simpler or more efficient.",tech:["Javascript","Heroku"],team:[{name:"Kevin Robles",profilePicUrl:"/images/kr.png",githubUrl:"https://github.com/kevinronu"},{name:"Jorge Rosano",profilePicUrl:"/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/contactable-js-t3"},{id:"8",imgSrc:"/images/tweetable.png",imgComp:"/images/tcom.png",title:"Tweetable",summary:"A simplified version of X, formerly known as Twitter, developed using Ruby on Rails. In this platform, users can create, reply to, and like posts, with the objective of creating a minimum viable product (MVP) of the X app. This project focuses on delivering the core functionalities of the original platform, offering a streamlined and efficient user experience while showcasing the essential features that make social interaction and content sharing easy and engaging.",tech:["Ruby","Rails"],team:[{name:"Jorge Rosano",profilePicUrl:"/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/Tweetable-p"},{id:"9",imgSrc:"/images/critics.png",imgComp:"/images/critics-comp.png",title:"Critics RC",summary:"An interactive video game catalog where users can sign up and log in with their username and password if already registered, granting access to reviews and ratings for each video game and company in the database. Additionally, users can create, edit, and delete their own companies and critiques. This platform offers a comprehensive and user-friendly experience, enabling gamers to explore detailed information, share their opinions, and manage their contributions, creating a vibrant community of video game enthusiasts.",tech:["Ruby","Rails"],team:[{name:"Kevin Quispe",profilePicUrl:"/images/kq.jpg",githubUrl:"https://github.com/Kevincarlosqa"},{name:"Jorge Rosano",profilePicUrl:"/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"},{name:"Gerardo Avena",profilePicUrl:"/images/gav.jpg",githubUrl:"https://github.com/Avenator02"},{name:"Sebastián Maguiña",profilePicUrl:"/images/sm.jpg",githubUrl:"https://github.com/Sebas54318"}],project_url:"https://github.com/codeableorg/critics-release-candidate-c10-w11-criticsrc-team6"},{id:"10",imgSrc:"/images/G-s-1.png",imgComp:"/images/stats.png",title:"GitHub Stats",summary:"Investigate the primary statistical attributes of the GitHub community and preserve notable users for future reference with the GitHub Stats application. This powerful tool allows users to explore key metrics and trends within the GitHub community, offering valuable insights into user activity, repository growth, and project popularity. By identifying and saving notable users, the GitHub Stats application helps users stay informed, connected, and engaged within the development community, making it easier to track influential contributors and follow significant projects over time.",tech:["Javascript","React"],team:[{name:"Jorge Rosano",profilePicUrl:"/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"},{name:"Gabriel Nuñez",profilePicUrl:"/images/gab.jpg",githubUrl:"https://github.com/NunezGabriel"}],project_url:"https://github.com/jorge-ross/Github-stats"}],Cg=C.div`
  width: 80%;
  display: flex;
  justify-content: center;
`,kg=C.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 0;
  gap: 5rem;
  padding: 6rem 0;
  width: 80%;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 4rem 0;
    gap: 2rem;
    width: 90%;
  }
`,qu=C.p`
  ${$.text.lg};
  margin: 0;
  color: white;

@media (max-width: 1100px) {
    ${$.text.lgx};
  }
    
  @media (max-width: 500px) {
    ${$.text.md};
  }

`;function Sg(){return d.jsx(Cg,{children:d.jsxs(kg,{children:[d.jsxs(qu,{children:["With almost two years of experience in the tech industry, I've been dedicated to helping founders and business owners bring their ideas to life through technology. In this time, I've worked on various projects, ranging from simple websites to more complex applications like SaaS platforms.",d.jsx("br",{})," ",d.jsx("br",{}),"My distinctive background, transitioning from Behavioral Sciences to technical support, and now as a programmer and IT enthusiast, attests that I am a problem-solver with a proven ability to adapt and tackle challenging projects."]}),d.jsxs(qu,{children:["As a",d.jsx("span",{style:{color:"#93C5FD",fontWeight:600},children:" full-stack developer"}),", I can manage projects from start to finish, taking ideas from conception to completion. I'm adept at quickly understanding new concepts and breaking down business requirements for industry-specific systems.",d.jsx("br",{})," ",d.jsx("br",{}),"Whether you're a non-technical founder building your first app or an enterprise looking for fresh talent, I will work closely with you to bring your vision to life, making sure everything runs smoothly and effectively."]})]})})}const Eg=C.div`
  height: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 3rem;
  padding: 5rem 0;
  border-top: 1px solid #A8A29E;

  @media (max-width: 1000px) {
    gap: 2.5rem;
    padding: 4rem 0;
  }
`,jg=C.p`
  color: white;
  ${$.head.lgx};
  margin: 0;
  padding-left: 6rem;

  @media (max-width: 1100px) {
   ${$.head.lg};
    padding: 0;
  }

  @media (max-width: 500px) {
    ${$.head.md};
  }
`,Pg=C.p`
  ${$.text.lg}
  color: white;
  margin: 0;
  width: 60%;
  padding-left: 6rem;

  @media (max-width: 1100px) {
    ${$.text.lgx}
    padding: 0;
    width: 80%;
  }

  @media (max-width: 500px) {
    ${$.text.md};
    padding: 0;
    width: 100%;
  }
`;function _g(){return d.jsxs(Eg,{children:[d.jsx(jg,{children:"Why work with me?"}),d.jsxs(Pg,{children:["Being a",d.jsx("span",{style:{color:"#93C5FD",fontWeight:600},children:" Web Developer"})," has enabled me to cultivate the exceptional ability to solve problems. I enjoy breaking down complex ideas and figuring out how to build them.",d.jsx("br",{}),d.jsx("br",{}),"I've worked independently on various projects, which has made me agile and quick to adapt. Likewise, I've launched projects that needed to work flawlessly from day one, so I understand the importance of reliability and performance.",d.jsx("br",{}),d.jsx("br",{}),"Finally, I'm a great communicator and collaborator, and I know that what's most important is getting the job done well and on time."]})]})}const zg=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`,Tg=C.div`
  width: 80%;
  border-bottom: 1px solid #A8A29E;
  display: flex;
  justify-content: center;
`,Rg=C.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 6rem;
  padding: 5rem 0;

  @media (max-width: 1000px) {
    gap: 2.5rem;
    display: flex;
    flex-direction: column;
    padding: 4rem 0;
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 90%;
    gap: 1.5rem;
  }
`,$g=C.div`
  background-color: ${Q.black[600]};
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  width: 80%;
  border-top: 1px solid #A8A29E;

  @media (max-width: 1000px) {
    background-image: none;
    background-color: #1C1C1C;
    display: flex;
    flex-direction: column;
    padding: 4rem 0;
  }

`,Lg=C.p`
  ${$.head.lg}
  color: ${Q.stone[100]};
  font-weight: 600;
  margin: 0;
  padding-bottom: 3rem;
  text-align: center;

  @media (max-width: 500px) {
    ${$.head.sm};
  }
`,Ng=C.div`
  height: auto; 
  width: 100%;
  gap: 4rem;

  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
  }
`,Fg=C(dt)`
  ${$.head.sm}
  color: ${Q.stone[100]};
  font-weight: 500;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding-top: 2rem;

  &:hover {
    color: ${Q.yellow[500]};
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    ${$.text.lg}
  }
`;function Mg(){return d.jsx(d.Fragment,{children:d.jsxs(zg,{children:[d.jsx(Ym,{}),d.jsx(Tg,{children:d.jsxs(Rg,{children:[d.jsx(Xf,{gitHubUrl:"https://github.com/jorge-ross",linkedInUrl:"https://www.linkedin.com/in/jorgeros13",img:tg}),d.jsx(lg,{})]})}),d.jsx(Sg,{}),d.jsxs($g,{children:[d.jsx(Lg,{children:"Recent Projects & Work"}),d.jsx(Ng,{children:pr.slice(0,4).map((e,t)=>d.jsx(dt,{to:`/projects/${t}`,style:{textDecoration:"none"},onClick:()=>window.scrollTo(0,0),children:d.jsx(Yf,{img:e.imgSrc,title:e.title,summary:e.summary},e.id)},e.id))}),d.jsx(Fg,{to:"/projects",onClick:()=>window.scrollTo(0,0),children:"See all"})]}),d.jsx(_g,{}),d.jsx(wg,{})]})})}function Og(e){return xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM13.3344 16.055C14.0531 16.6343 14.7717 16.9203 15.4904 16.913C15.9304 16.913 16.2677 16.8323 16.5024 16.671C16.7297 16.517 16.8434 16.297 16.8434 16.011C16.8434 15.7177 16.7297 15.4683 16.5024 15.263C16.2677 15.0577 15.8241 14.8523 15.1714 14.647C14.3867 14.4197 13.7817 14.1263 13.3564 13.767C12.9384 13.4077 12.7257 12.9053 12.7184 12.26C12.7184 11.6513 12.9824 11.1417 13.5104 10.731C14.0237 10.3203 14.6801 10.115 15.4794 10.115C16.5941 10.115 17.4887 10.3863 18.1634 10.929L17.3934 12.128C17.1221 11.9153 16.8104 11.7613 16.4584 11.666C16.1064 11.556 15.7911 11.501 15.5124 11.501C15.1311 11.501 14.8267 11.5707 14.5994 11.71C14.3721 11.8493 14.2584 12.0327 14.2584 12.26C14.2584 12.5093 14.3977 12.722 14.6764 12.898C14.9551 13.0667 15.4317 13.2537 16.1064 13.459C16.9204 13.701 17.4997 14.0237 17.8444 14.427C18.1891 14.8303 18.3614 15.3437 18.3614 15.967C18.3614 16.605 18.1157 17.155 17.6244 17.617C17.1404 18.0717 16.4364 18.31 15.5124 18.332C14.3024 18.332 13.2904 17.969 12.4764 17.243L13.3344 16.055ZM7.80405 16.693C8.03872 16.8397 8.32105 16.913 8.65105 16.913C8.99572 16.913 9.28172 16.814 9.50905 16.616C9.73639 16.4107 9.85005 16.055 9.85005 15.549V10.247H11.3351V15.835C11.3131 16.7003 11.0637 17.3237 10.5871 17.705C10.3157 17.9323 10.0187 18.0937 9.69605 18.189C9.37339 18.2843 9.06172 18.332 8.76105 18.332C8.21105 18.332 7.72339 18.2367 7.29805 18.046C6.84339 17.8407 6.46205 17.4777 6.15405 16.957L7.18805 16.11C7.37872 16.3667 7.58405 16.561 7.80405 16.693Z"}}]})(e)}function Ig(e){return xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.0002 2L21.3002 5.32L19.8817 17.63L12.0002 22L4.11867 17.63L2.7002 5.32L12.0002 2ZM12.0002 4.21L6.18645 17.26H8.35412L9.52286 14.34H14.4576L15.6263 17.26H17.794L12.0002 4.21ZM13.6984 12.54H10.302L12.0002 8.45L13.6984 12.54Z"}}]})(e)}function Dg(e){return xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.448 16.2394C13.8809 17.0412 13.2933 17.7714 12.7015 18.4146C14.3738 20.0375 15.9291 20.7975 16.792 20.2993C17.6549 19.8011 17.7744 18.0742 17.2051 15.8145C16.3521 16.0054 15.426 16.1492 14.448 16.2394ZM13.138 16.3265C12.7641 16.342 12.3845 16.3499 12.0003 16.3499C11.6161 16.3499 11.2365 16.342 10.8627 16.3265C11.2394 16.8188 11.6208 17.2749 12.0003 17.6905C12.3798 17.2749 12.7612 16.8188 13.138 16.3265ZM18.1787 8.43278C20.8434 9.19718 22.5837 10.4672 22.5837 11.9999C22.5837 13.5325 20.8434 14.8026 18.1787 15.567C18.8491 18.2569 18.6193 20.399 17.292 21.1653C15.9647 21.9316 13.9947 21.0595 12.0003 19.134C10.006 21.0595 8.03596 21.9316 6.70866 21.1653C5.38136 20.399 5.15158 18.2569 5.82195 15.567C3.15724 14.8026 1.41699 13.5325 1.41699 11.9999C1.41699 10.4672 3.15724 9.19718 5.82195 8.43278C5.15158 5.74288 5.38136 3.60075 6.70866 2.83443C8.03596 2.06811 10.006 2.94019 12.0003 4.86569C13.9947 2.94019 15.9647 2.06811 17.292 2.83443C18.6193 3.60075 18.8491 5.74288 18.1787 8.43278ZM17.2051 8.18527C17.7744 5.92558 17.6549 4.19865 16.792 3.70046C15.9291 3.20226 14.3738 3.96221 12.7015 5.58509C13.2933 6.2283 13.8809 6.95849 14.448 7.76031C15.426 7.85054 16.3521 7.99432 17.2051 8.18527ZM6.79554 15.8145C6.22624 18.0742 6.34577 19.8011 7.20866 20.2993C8.07155 20.7975 9.62688 20.0375 11.2992 18.4146C10.7073 17.7714 10.1197 17.0412 9.55262 16.2394C8.57467 16.1492 7.6485 16.0054 6.79554 15.8145ZM10.8627 7.67324C11.2365 7.65776 11.6161 7.64987 12.0003 7.64987C12.3845 7.64987 12.7641 7.65776 13.138 7.67324C12.7612 7.18096 12.3798 6.7248 12.0003 6.30922C11.6208 6.7248 11.2394 7.18096 10.8627 7.67324ZM9.55262 7.76031C10.1197 6.95849 10.7073 6.2283 11.2992 5.58509C9.62688 3.96221 8.07155 3.20226 7.20866 3.70046C6.34577 4.19865 6.22624 5.92558 6.79554 8.18527C7.6485 7.99432 8.57467 7.85054 9.55262 7.76031ZM13.8939 15.2797C14.2395 14.7728 14.5772 14.2366 14.9015 13.6749C15.2258 13.1131 15.5213 12.5526 15.7875 11.9999C15.5213 11.4471 15.2258 10.8866 14.9015 10.3249C14.5772 9.76311 14.2395 9.22694 13.8939 8.72005C13.2821 8.6742 12.649 8.64987 12.0003 8.64987C11.3517 8.64987 10.7185 8.6742 10.1067 8.72005C9.76112 9.22694 9.42347 9.76311 9.09914 10.3249C8.77481 10.8866 8.4793 11.4471 8.21312 11.9999C8.4793 12.5526 8.77481 13.1131 9.09914 13.6749C9.42347 14.2366 9.76112 14.7728 10.1067 15.2797C10.7185 15.3255 11.3517 15.3499 12.0003 15.3499C12.649 15.3499 13.2821 15.3255 13.8939 15.2797ZM15.1785 15.1484C15.7932 15.0683 16.3789 14.9661 16.9286 14.8452C16.7584 14.3087 16.5541 13.7504 16.3161 13.178C16.1426 13.5095 15.9596 13.8421 15.7675 14.1749C15.5754 14.5076 15.3788 14.8324 15.1785 15.1484ZM8.82218 8.85133C8.20747 8.93147 7.62174 9.03367 7.07208 9.15454C7.24223 9.691 7.44659 10.2494 7.68454 10.8218C7.85806 10.4903 8.04101 10.1576 8.23311 9.82487C8.42522 9.49212 8.62185 9.16736 8.82218 8.85133ZM7.07208 14.8452C7.62174 14.9661 8.20747 15.0683 8.82218 15.1484C8.62185 14.8324 8.42522 14.5076 8.23311 14.1749C8.04101 13.8421 7.85806 13.5095 7.68454 13.178C7.44659 13.7504 7.24223 14.3087 7.07208 14.8452ZM6.09439 14.6C6.35551 13.7659 6.69407 12.8919 7.10491 11.9999C6.69407 11.1078 6.35551 10.2339 6.09439 9.39969C3.85279 10.0365 2.41699 11.0035 2.41699 11.9999C2.41699 12.9962 3.85279 13.9632 6.09439 14.6ZM16.9286 9.15454C16.3789 9.03367 15.7932 8.93147 15.1785 8.85133C15.3788 9.16736 15.5754 9.49212 15.7675 9.82487C15.9596 10.1576 16.1426 10.4903 16.3161 10.8218C16.5541 10.2494 16.7584 9.691 16.9286 9.15454ZM17.9063 9.39969C17.6451 10.2339 17.3066 11.1078 16.8957 11.9999C17.3066 12.8919 17.6451 13.7659 17.9063 14.6C20.1479 13.9632 21.5837 12.9962 21.5837 11.9999C21.5837 11.0035 20.1479 10.0365 17.9063 9.39969ZM12.0003 13.879C10.9625 13.879 10.1212 13.0377 10.1212 11.9999C10.1212 10.962 10.9625 10.1207 12.0003 10.1207C13.0382 10.1207 13.8795 10.962 13.8795 11.9999C13.8795 13.0377 13.0382 13.879 12.0003 13.879Z"}}]})(e)}function Ug(e){return xe({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M7.523 7.781c-.187 0-.382.011-.582.035l.116.358c.175-.018.351-.024.527-.024h.06l-.12-.369zm2.315.358l-.024.4c.2.067.394.138.588.217l.026-.404c-.055-.03-.208-.104-.59-.213zm-4.988.23a9.597 9.597 0 00-.473.26l.28.426c.157-.097.308-.19.466-.268L4.85 8.37zm2.89.022a5.602 5.602 0 00-.654.027c-.443.04-.909.169-1.38.375-1.418.618-2.878 1.918-3.833 3.51-.955 1.591-1.291 3-1.4 3.603-.037.202-.05.313-.05.313h4.79s-.057-.26-.096-.678a8.18 8.18 0 01-.033-.732c0-.55.055-1.203.244-1.858.047-.163.103-.328.168-.49.065-.162.14-.321.225-.479.17-.314.381-.618.646-.894s.584-.525.963-.736c.248-.12.698-.365 1.346-.489.216-.041.453-.07.713-.076.26-.005.542.012.845.06.606.097 1.298.32 2.075.74.388.211.798.47 1.228.788.11-.09.211-.162.211-.162s-.196-.197-.547-.486c-.35-.29-.853-.672-1.467-1.043-.306-.186-.642-.37-.998-.538a8.852 8.852 0 00-1.129-.44 7.48 7.48 0 00-1.226-.27 6.048 6.048 0 00-.64-.045zm2.086 1.65l-.023.383c.2.006.4.03.6.072l.025-.375a4.32 4.32 0 00-.602-.08zm-1.418.146c-.206.061-.381.127-.533.194l.139.418c.175-.085.351-.157.527-.211l-.133-.4zm-6.008.024c-.157.151-.31.303-.449.455l.467.4c.127-.163.267-.327.412-.478l-.43-.377zm4.34.898c-.14.128-.266.267-.375.407l.291.435c.103-.151.224-.29.358-.43l-.274-.412zm.989.787v4.323h1.164v-1.043L9.9 16.219h1.721l-1.351-1.364s1.06-.09 1.06-1.46c0-1.37-1.285-1.499-1.285-1.499H7.729zm5.292.032c-.842 0-1.126.763-1.126 1.127v3.164h1.181v-.758h1.11v.758h1.146v-3.164c0-.922-.838-1.127-1.129-1.127h-1.182zm2.85 0v4.29h1.23v-4.29h-1.23zm1.733 0v4.291h2.88v-1.11h-1.656v-3.181h-1.224zm4.359 0c-.485 0-1.133.399-1.133 1.144v.383c0 .746.642 1.127 1.133 1.127 1.364.006-.327 0 .933 0v.533l-2.005.006v1.098h1.982c.406 0 1.103-.297 1.127-1.127v-.424c0-.71-.581-1.129-1.127-1.129h-.988v-.508h1.957v-1.103h-1.88zM5.668 12.8a5.75 5.75 0 00-.182.666l.49.388c.025-.236.069-.472.13-.709l-.438-.345zm7.771.15h.407c.327 0 .334.236.334.236v1.05h-1.11v-1.05s0-.236.37-.236zm-4.546.031h.933s.262.097.262.49c0 .395-.268.499-.268.499h-.927v-.989zm-8.59.061c-.115.26-.242.563-.303.727l.697.255c.08-.206.206-.504.303-.728l-.697-.254zm5.092 1.963c.012.321.043.584.074.765l.726.26a8.003 8.003 0 01-.144-.787l-.656-.238z"}}]})(e)}function Ag(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M7.73 9.828c0 3.552 0.097 6.459 0.226 6.459 0.097 0 1.776-0.517 3.746-1.13 2.68-0.904 3.972-1.13 5.361-1.066l1.808 0.097 0.097 7.492 0.065 7.524h3.875v-7.88c0-7.653-0.032-7.879-0.743-8.945-1.292-1.938-4.618-2.358-8.752-1.13l-1.486 0.452v-8.332h-4.198v6.459zM18.872 5.727c-0.711 1.26-1.324 2.422-1.389 2.551-0.065 0.161 0.807 0.258 1.938 0.258h2.034l1.162-1.873c2.228-3.488 2.261-3.294-0.258-3.294h-2.196l-1.292 2.357zM7.73 25.167c0 2.034 0.129 3.714 0.258 3.714s1.066-0.839 2.099-1.873l1.841-1.873-1.873-1.841c-1.033-1.001-1.97-1.841-2.099-1.841s-0.226 1.679-0.226 3.714z"}}]})(e)}function Bg(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M6.248 16.554c0.132-0.413 0.289-1.255 0.655-1.995 1.781-3.594 4.536-6.208 8.215-7.796 0.71-0.306 1.555-0.404 2.339-0.408 0.98-0.005 1.637 0.677 1.723 1.666 0.045 0.515 0.039 1.087-0.138 1.561-1.743 4.662-5.032 7.784-9.656 9.538-0.18 0.068-0.381 0.086-0.575 0.112-1.574 0.216-2.587-0.676-2.563-2.678zM18.349 13.099c2.556-0.179 5.069-0.355 7.702-0.54-0.192-0.183-0.3-0.303-0.425-0.403-2.292-1.838-4.59-3.668-6.873-5.517-0.226-0.183-0.366-0.471-0.668-0.871 0.981 0 1.774-0.009 2.567 0.002 0.957 0.014 1.937-0.079 2.867 0.093 2.011 0.372 3.084 1.669 3.046 3.713-0.035 1.916-0.233 3.829-0.375 5.742-0.217 2.929-0.445 5.858-0.671 8.786-0.039 0.505-0.086 1.010-0.137 1.61-1.063-0.947-2.080-1.852-3.095-2.758-0.131-0.117-0.24-0.268-0.385-0.361-1.241-0.79-1.759-1.968-2.041-3.376-0.368-1.84-0.907-3.646-1.371-5.467-0.052-0.204-0.090-0.412-0.142-0.655zM8.765 24.301c0.547-0.076 1.059-0.108 1.547-0.234 0.192-0.049 0.415-0.283 0.477-0.479 0.46-1.455 0.882-2.923 1.317-4.385 0.038-0.128 0.091-0.252 0.161-0.443 2.662 0.852 5.303 1.698 8.022 2.568-1.415 1.428-2.92 2.625-4.602 3.701 2.997 0.229 5.994 0.458 8.991 0.687 0 0.038 0 0.077 0.001 0.115-0.646 0.046-1.292 0.094-1.938 0.137-3.812 0.251-7.623 0.501-11.435 0.75-0.606 0.040-1.213 0.106-1.818 0.095-2.566-0.047-4.020-1.453-4.053-4.027-0.019-1.446 0.13-2.894 0.222-4.34 0.007-0.109 0.163-0.209 0.25-0.313 0.129 0.115 0.317 0.205 0.38 0.349 0.766 1.776 1.514 3.56 2.267 5.341 0.061 0.143 0.126 0.284 0.211 0.478z"}}]})(e)}function Hg(e){return xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"}}]})(e)}const Wg=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  letter-spacing: 0.5px;
  cursor: pointer;
  gap: .5rem;
  border: 1px solid white;
  padding: 2rem 0;

  @media (max-width: 400px) {
    width: 280px;
  }

  @media (max-width: 300px) {
    width: 220px;
  }
`,Vg=C.img`
  width: 90%;
  height: 150px;
  filter: grayscale(100%);
  border-radius: 0.75rem;

  @media (max-width: 400px) {
    height: 130px;
  }

  @media (max-width: 300px) {
    height: 110px;
  }

  &:hover {
    transition: filter 0.3s ease;
    filter: grayscale(0%);
  }
`,Qg=C.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`,Gg=C.p`
  ${$.head.xs}
  color: white;
  text-align: justify;
  margin: 0;
  padding: .875rem 0;
`,Kg=C.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Jg={Javascript:Og,React:Dg,Ruby:Bg,Rails:Ug,HTML:Zm,CSS:Hg,Heroku:Ag,Angular:Ig};function Zf({imgSrc:e,title:t,tech:n}){return Zf.propTypes={title:le.string.isRequired,imgSrc:le.string.isRequired,tech:le.arrayOf(le.string).isRequired},d.jsxs(Wg,{children:[d.jsx(Vg,{src:e,alt:"project"}),d.jsxs(Qg,{children:[d.jsx(Gg,{children:t}),d.jsx(Kg,{children:n.map((r,i)=>{const o=Jg[r];return o?d.jsx(o,{style:{width:"25px",height:"25px",color:r==="Javascript"?"#FCD34D":r==="React"?"#60A5FA":r==="Angular"?"#B52E31":r==="Ruby"||r==="Rails"?"#EF4444":r==="HTML"?"#F06529":r==="CSS"?"#2965F1":r==="Heroku"?"#6762A6":void 0}},i):null})})]})]})}const Xg=C.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  border-top: 1px solid #A8A29E;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`,Yg=C.div`
  ${$.text.lg}
  color: ${Q.stone[200]};
  font-weight: 500;
  margin: 0;
  padding: 3rem 0;
  text-align: left;

  @media (max-width: 800px) {
    padding: 4rem 0 0 0;
  }
`,Zg=C.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  align-items: center;
  gap: 2rem;
  margin: 0;
  color: white;

  @media (max-width: 800px) {
    padding: 0 0 5rem 0;
  }
  
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(1, auto);
    align-items: center;
    justify-content: center;
  }
`,di=C.li`
  margin: 0;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`,fi=C.a`
  color: inherit;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5rem;
`,bg=C.p`
  color: ${Q.stone[300]};
  ${$.head.lg};
  margin: 0;

  @media (max-width: 500px){
    ${$.head.md};
    text-align: left;
  }
`,qg=C.p`
  ${$.text.md}
  color: ${Q.stone[100]};
  margin: .5rem 0;
  font-weight: 400;
`,pi=C.p`
  ${$.text.md}
  color: white;
  margin: 0;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;function e2(){return d.jsxs(Xg,{children:[d.jsxs(Yg,{children:[d.jsxs(bg,{children:["Jorge Rosano ",d.jsx("br",{}),d.jsx("br",{})]}),d.jsxs(qg,{children:["An independent web developer from Mexico. ",d.jsx("br",{})]})]}),d.jsxs(Zg,{children:[d.jsx(di,{children:d.jsxs(fi,{href:"https://github.com/jorge-ross",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(ws,{}),d.jsx(pi,{children:"GitHub"})]})}),d.jsx(di,{children:d.jsxs(fi,{href:"https://www.linkedin.com/in/jorgeros13",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(ks,{}),d.jsx(pi,{children:"LinkedIn"})]})}),d.jsx(di,{children:d.jsxs(fi,{href:"https://www.instagram.com/_jorgeross",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(Cs,{}),d.jsx(pi,{children:"Instagram"})]})}),d.jsx(di,{children:d.jsxs(fi,{href:"https://x.com/jorg_ros",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(Ss,{}),d.jsx(pi,{children:"X"})]})})]})]})}const t2=C.div`
  display: flex;
  width: 80%;
  height: 10rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid white;

  @media (max-width: 900px) {
    ${ye.head.sm};
    justify-content: center;
    height: 7rem;
  }
`,n2=C.h1`
  ${ye.head.md}
  color: ${Q.stone[100]};
  margin: 0;

  @media (max-width: 900px) {
    ${ye.head.sm};
  }
`,r2=C.li`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;function i2(){return d.jsx(d.Fragment,{children:d.jsxs(t2,{children:[d.jsx(n2,{children:d.jsx(dt,{to:"/",style:{textDecoration:"none",color:"inherit"},onClick:()=>window.scrollTo(0,0),children:"Jorge Rosano"})}),d.jsx(r2,{children:d.jsx(lo,{profileURL:"https://www.linkedin.com/in/jorgeros13"})})]})})}const o2=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`,l2=C.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1.5rem;
  padding: 4rem 0;
  border-bottom: 1px solid #A8A29E;
  
  @media(max-width: 1000px) {
    width: 80%;
  }
  
`,a2=C.h1`
  ${Zt.head.lg};
  color: ${Q.white};
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media(max-width: 1200px) {
  ${Zt.head.md};
  }

   @media(max-width: 700px) {
  ${Zt.head.sm};
  }
`,s2=C.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  color: ${Q.blue[300]};
  opacity: 70%;
  margin: 0 0 .5rem 0;
  text-align: center;
`,u2=C.p`
  ${$.text.md};
  font-weight: 400;
  color: white;
  margin: 1rem 0 0 0;
  text-align: center;

  @media(max-width: 700px) {
    ${$.text.sm};
  }
`,c2=C.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  padding: 5rem 0;
  gap: 2.5rem;

  @media(max-width: 1100px) {
    grid-template-columns: repeat(2, auto);
  }

  @media(max-width: 700px) {
    grid-template-columns: repeat(1, auto);
    padding: 4rem 0;
  }
`;function d2(){return d.jsxs(o2,{children:[d.jsx(i2,{}),d.jsxs(l2,{children:[d.jsx(s2,{children:"Work"}),d.jsx(a2,{children:"Here's a selection of some of the things I've built."}),d.jsx(u2,{children:"I've never had a traditional job, so this is where I document everything I've been working on over these years—whether it's new businesses I've been developing, experiments, or projects from my programming education."})]}),d.jsx(c2,{children:pr==null?void 0:pr.map((e,t)=>d.jsx(dt,{to:`/projects/${t}`,style:{textDecoration:"none"},onClick:()=>window.scrollTo(0,0),children:d.jsx(Zf,{imgSrc:e.imgSrc,title:e.title,tech:e.tech})},e.id))}),d.jsx(e2,{})]})}const f2=C.div`
  display: flex;
  justify-content: flex-start;

   @media(max-width: 1200px) {
    justify-content: center;
  }
`,p2=C.img`
  width: 90%;

  @media (max-width: 500px){
    width: 95%;
  }
`,bf=({src:e})=>(bf.propTypes={src:le.string.isRequired},d.jsx(f2,{children:d.jsx(p2,{src:e,alt:"covers"})})),h2=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
`,m2=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`,g2=C.p`
  ${ye.text.md};
  font-weight: 600;
  color: white;
  margin: 0;

  @media (max-width: 500px) {
   ${ye.text.sm};
  }
`,v2=C.div`
  display: flex;
  width: 130px;

   @media (max-width: 700px) {
    width: 110px;
  }
`,y2=C.img`
  width: 100%;
  border-radius: 20%;
`,x2=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
`;function qf({name:e,gitHubUrl:t,linkedInUrl:n,profilePicUrl:r}){return qf.propTypes={name:le.string,gitHubUrl:le.string,linkedInUrl:le.string,profilePicUrl:le.string},d.jsxs(h2,{children:[d.jsx(v2,{children:d.jsx(y2,{src:r,alt:"Team member"})}),d.jsxs(m2,{children:[d.jsx(g2,{children:e}),d.jsxs(x2,{children:[d.jsxs("a",{href:t,children:[" ",d.jsx(Kf,{style:{width:"20px",height:"20px",color:"white",borderRadius:"50%"}})," "]}),d.jsx("a",{href:n,children:d.jsx(Jf,{style:{width:"18px",height:"18px",color:"#D6D3D1"}})})]})]})]})}const w2=C.div`
  width: 80%;
  padding: 5rem 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;


  @media (max-width: 850px) {
    width: 90%;
    border-top: 1px solid white;
  }
`,C2=C.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  align-items: center;
  gap: 2rem;
  margin: 0;
  color: white;
 
  @media (max-width: 850px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }

  @media (max-width: 500px) {
    gap: 1.5rem;
  }
`,hi=C.li`
  margin: 0;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,mi=C.a`
  color: inherit;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5rem;
`,gi=C.p`
  ${$.text.md}
  color: white;
  margin: 0;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;function k2(){return d.jsx(w2,{children:d.jsxs(C2,{children:[d.jsx(hi,{children:d.jsxs(mi,{href:"https://github.com/jorge-ross",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(ws,{}),d.jsx(gi,{children:"GitHub"})]})}),d.jsx(hi,{children:d.jsxs(mi,{href:"https://www.linkedin.com/in/jorgeros13",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(ks,{}),d.jsx(gi,{children:"LinkedIn"})]})}),d.jsx(hi,{children:d.jsxs(mi,{href:"https://www.instagram.com/_jorgeross",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(Cs,{}),d.jsx(gi,{children:"Instagram"})]})}),d.jsx(hi,{children:d.jsxs(mi,{href:"https://x.com/jorg_ros",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(Ss,{}),d.jsx(gi,{children:"X"})]})})]})})}const S2=C.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 6rem;
  align-items: center;

  @media(max-width: 750px) {
    padding: 4rem 0;
  }
`,E2=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 5rem;
  width: 90%;

  @media(max-width: 600px) {
  padding: 0;
  }
`,j2=C.div`
  padding: 5rem 3rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;

  @media(max-width: 850px) {
    border: none;
    padding: 4rem 0;
    width: auto;
  }
`,P2=C.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  padding-bottom: 4rem;
  border-bottom: 1px solid white;
  gap: 1rem;

  @media(max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    gap: 3rem;
  }
`,_2=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,z2=C.p`
  margin: 0;
  ${ye.head.md};
  color: white;


  @media (max-width: 500px) {
    ${ye.head.sm};
  }
`,T2=C.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  padding: 4rem 0;
`,R2=C.p`
  ${$.text.md};
  margin: 0 0.5rem;
  color: white;
  display: flex;
  font-weight: 400;
  text-align: justify;
  line-height: 1.7; 

  @media (max-width: 500px) {
    ${$.text.sm};
    text-align: left;
     line-height: 1.7;
  }
`,$2=C.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 0 0;
  border-top: 1px solid white;
`,L2=C.p`
  ${ye.head.md};
  color: white;
  margin: 0;
`,N2=C.div`
  display: ${e=>e.singleMember?"flex":"grid"};
  grid-template-columns: ${e=>e.singleMember?"1fr":"repeat(3, 1fr)"};
  align-items: center;
  gap: 5rem;
  padding: 4rem 0 0 0;

  @media (max-width: 1000px) {
    grid-template-columns: ${e=>e.singleMember?"1fr":"repeat(2, 1fr)"};
  }

  @media (max-width: 500px) {
    gap: 3rem;
  }

  @media (max-width: 350px) {
    grid-template-columns: ${e=>e.singleMember?"1fr":"repeat(1, auto)"}
  }
`,F2=C.img`
  display: flex;
  width: 80%;
`;function M2(){const{id:e}=th(),t=parseInt(e),n=pr[t];return d.jsxs(S2,{children:[d.jsx(E2,{children:d.jsx(dt,{to:"/projects",className:"link-style",onClick:()=>window.scrollTo(0,0),children:"← Back to portfolio"})}),d.jsxs(j2,{children:[d.jsxs(P2,{children:[d.jsx(_2,{children:d.jsx(z2,{children:n.title})}),d.jsx(bf,{src:n.imgSrc})]}),d.jsxs(T2,{children:[d.jsx(R2,{children:n.summary}),d.jsx(F2,{src:n.imgComp}),d.jsx(dt,{to:n.project_url,children:d.jsx(Dm,{children:"Go to Repo!"})})]}),d.jsxs($2,{children:[d.jsx(L2,{children:n.team.length>1?"The team":"Created by"}),d.jsx(N2,{singleMember:n.team.length<2,children:n.team.map((r,i)=>d.jsx(qf,{name:r.name,profilePicUrl:r.profilePicUrl,gitHubUrl:r.githubUrl,linkedInUrl:r.linkedinurl},i))})]})]}),d.jsx(k2,{})]})}function O2(){return d.jsx(kh,{children:d.jsxs(gh,{children:[d.jsx(rr,{path:"",element:d.jsx(Mg,{})}),d.jsx(rr,{path:"projects",element:d.jsx(d2,{})}),d.jsx(rr,{path:"projects/:id",element:d.jsx(M2,{})}),d.jsx(rr,{path:"*",element:d.jsx(hh,{to:"/",replace:!0})})]})})}vl.createRoot(document.getElementById("root")).render(d.jsx(O2,{}));
