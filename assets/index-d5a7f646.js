function e1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function ec(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tc={exports:{}},so={},nc={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mr=Symbol.for("react.element"),t1=Symbol.for("react.portal"),n1=Symbol.for("react.fragment"),r1=Symbol.for("react.strict_mode"),i1=Symbol.for("react.profiler"),o1=Symbol.for("react.provider"),l1=Symbol.for("react.context"),s1=Symbol.for("react.forward_ref"),a1=Symbol.for("react.suspense"),u1=Symbol.for("react.memo"),c1=Symbol.for("react.lazy"),ja=Symbol.iterator;function d1(e){return e===null||typeof e!="object"?null:(e=ja&&e[ja]||e["@@iterator"],typeof e=="function"?e:null)}var rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ic=Object.assign,oc={};function Mn(e,t,n){this.props=e,this.context=t,this.refs=oc,this.updater=n||rc}Mn.prototype.isReactComponent={};Mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lc(){}lc.prototype=Mn.prototype;function gs(e,t,n){this.props=e,this.context=t,this.refs=oc,this.updater=n||rc}var vs=gs.prototype=new lc;vs.constructor=gs;ic(vs,Mn.prototype);vs.isPureReactComponent=!0;var Pa=Array.isArray,sc=Object.prototype.hasOwnProperty,ys={current:null},ac={key:!0,ref:!0,__self:!0,__source:!0};function uc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)sc.call(t,r)&&!ac.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Mr,type:e,key:o,ref:l,props:i,_owner:ys.current}}function f1(e,t){return{$$typeof:Mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mr}function p1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _a=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?p1(""+e.key):t.toString(36)}function vi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Mr:case t1:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ho(l,0):r,Pa(i)?(n="",e!=null&&(n=e.replace(_a,"$&/")+"/"),vi(i,t,n,"",function(u){return u})):i!=null&&(xs(i)&&(i=f1(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(_a,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Pa(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Ho(o,s);l+=vi(o,t,n,a,i)}else if(a=d1(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Ho(o,s++),l+=vi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Wr(e,t,n){if(e==null)return e;var r=[],i=0;return vi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function h1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},yi={transition:null},m1={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:yi,ReactCurrentOwner:ys};M.Children={map:Wr,forEach:function(e,t,n){Wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wr(e,function(){t++}),t},toArray:function(e){return Wr(e,function(t){return t})||[]},only:function(e){if(!xs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Mn;M.Fragment=n1;M.Profiler=i1;M.PureComponent=gs;M.StrictMode=r1;M.Suspense=a1;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ic({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ys.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)sc.call(t,a)&&!ac.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Mr,type:e.type,key:i,ref:o,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:l1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o1,_context:e},e.Consumer=e};M.createElement=uc;M.createFactory=function(e){var t=uc.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:s1,render:e}};M.isValidElement=xs;M.lazy=function(e){return{$$typeof:c1,_payload:{_status:-1,_result:e},_init:h1}};M.memo=function(e,t){return{$$typeof:u1,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=yi.transition;yi.transition={};try{e()}finally{yi.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return Se.current.useCallback(e,t)};M.useContext=function(e){return Se.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};M.useEffect=function(e,t){return Se.current.useEffect(e,t)};M.useId=function(){return Se.current.useId()};M.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Se.current.useMemo(e,t)};M.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};M.useRef=function(e){return Se.current.useRef(e)};M.useState=function(e){return Se.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return Se.current.useTransition()};M.version="18.2.0";nc.exports=M;var j=nc.exports;const jt=ec(j),gl=e1({__proto__:null,default:jt},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g1=j,v1=Symbol.for("react.element"),y1=Symbol.for("react.fragment"),x1=Object.prototype.hasOwnProperty,w1=g1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C1={key:!0,ref:!0,__self:!0,__source:!0};function cc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)x1.call(t,r)&&!C1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:v1,type:e,key:o,ref:l,props:i,_owner:w1.current}}so.Fragment=y1;so.jsx=cc;so.jsxs=cc;tc.exports=so;var d=tc.exports,vl={},dc={exports:{}},Me={},fc={exports:{}},pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,L){var F=R.length;R.push(L);e:for(;0<F;){var Y=F-1>>>1,ie=R[Y];if(0<i(ie,L))R[Y]=L,R[F]=ie,F=Y;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var L=R[0],F=R.pop();if(F!==L){R[0]=F;e:for(var Y=0,ie=R.length,Hr=ie>>>1;Y<Hr;){var Vt=2*(Y+1)-1,Bo=R[Vt],Wt=Vt+1,Vr=R[Wt];if(0>i(Bo,F))Wt<ie&&0>i(Vr,Bo)?(R[Y]=Vr,R[Wt]=F,Y=Wt):(R[Y]=Bo,R[Vt]=F,Y=Vt);else if(Wt<ie&&0>i(Vr,F))R[Y]=Vr,R[Wt]=F,Y=Wt;else break e}}return L}function i(R,L){var F=R.sortIndex-L.sortIndex;return F!==0?F:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],h=1,m=null,g=3,w=!1,y=!1,v=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(R){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=R)r(u),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(u)}}function x(R){if(v=!1,p(R),!y)if(n(a)!==null)y=!0,Uo(E);else{var L=n(u);L!==null&&Ao(x,L.startTime-R)}}function E(R,L){y=!1,v&&(v=!1,f(T),T=-1),w=!0;var F=g;try{for(p(L),m=n(a);m!==null&&(!(m.expirationTime>L)||R&&!We());){var Y=m.callback;if(typeof Y=="function"){m.callback=null,g=m.priorityLevel;var ie=Y(m.expirationTime<=L);L=e.unstable_now(),typeof ie=="function"?m.callback=ie:m===n(a)&&r(a),p(L)}else r(a);m=n(a)}if(m!==null)var Hr=!0;else{var Vt=n(u);Vt!==null&&Ao(x,Vt.startTime-L),Hr=!1}return Hr}finally{m=null,g=F,w=!1}}var _=!1,k=null,T=-1,H=5,N=-1;function We(){return!(e.unstable_now()-N<H)}function Hn(){if(k!==null){var R=e.unstable_now();N=R;var L=!0;try{L=k(!0,R)}finally{L?Vn():(_=!1,k=null)}}else _=!1}var Vn;if(typeof c=="function")Vn=function(){c(Hn)};else if(typeof MessageChannel<"u"){var Ea=new MessageChannel,qf=Ea.port2;Ea.port1.onmessage=Hn,Vn=function(){qf.postMessage(null)}}else Vn=function(){P(Hn,0)};function Uo(R){k=R,_||(_=!0,Vn())}function Ao(R,L){T=P(function(){R(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Uo(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var F=g;g=L;try{return R()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=g;g=R;try{return L()}finally{g=F}},e.unstable_scheduleCallback=function(R,L,F){var Y=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Y+F:Y):F=Y,R){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=F+ie,R={id:h++,callback:L,priorityLevel:R,startTime:F,expirationTime:ie,sortIndex:-1},F>Y?(R.sortIndex=F,t(u,R),n(a)===null&&R===n(u)&&(v?(f(T),T=-1):v=!0,Ao(x,F-Y))):(R.sortIndex=ie,t(a,R),y||w||(y=!0,Uo(E))),R},e.unstable_shouldYield=We,e.unstable_wrapCallback=function(R){var L=g;return function(){var F=g;g=L;try{return R.apply(this,arguments)}finally{g=F}}}})(pc);fc.exports=pc;var S1=fc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc=j,Fe=S1;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mc=new Set,hr={};function rn(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(hr[e]=t,e=0;e<t.length;e++)mc.add(t[e])}var dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yl=Object.prototype.hasOwnProperty,k1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,za={},Ra={};function E1(e){return yl.call(Ra,e)?!0:yl.call(za,e)?!1:k1.test(e)?Ra[e]=!0:(za[e]=!0,!1)}function j1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P1(e,t,n,r){if(t===null||typeof t>"u"||j1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var ws=/[\-:]([a-z])/g;function Cs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ws,Cs);fe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ws,Cs);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ws,Cs);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ss(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P1(t,n,i,r)&&(n=null),r||i===null?E1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),an=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),ks=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),vc=Symbol.for("react.context"),Es=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),js=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),yc=Symbol.for("react.offscreen"),Ta=Symbol.iterator;function Wn(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Vo;function qn(e){if(Vo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vo=t&&t[1]||""}return`
`+Vo+e}var Wo=!1;function Qo(e,t){if(!e||Wo)return"";Wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Wo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qn(e):""}function _1(e){switch(e.tag){case 5:return qn(e.type);case 16:return qn("Lazy");case 13:return qn("Suspense");case 19:return qn("SuspenseList");case 0:case 2:case 15:return e=Qo(e.type,!1),e;case 11:return e=Qo(e.type.render,!1),e;case 1:return e=Qo(e.type,!0),e;default:return""}}function Sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case un:return"Fragment";case an:return"Portal";case xl:return"Profiler";case ks:return"StrictMode";case wl:return"Suspense";case Cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vc:return(e.displayName||"Context")+".Consumer";case gc:return(e._context.displayName||"Context")+".Provider";case Es:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case js:return t=e.displayName||null,t!==null?t:Sl(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return Sl(e(t))}catch{}}return null}function z1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sl(t);case 8:return t===ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R1(e){var t=xc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=R1(e))}function wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $a(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cc(e,t){t=t.checked,t!=null&&Ss(e,"checked",t,!1)}function El(e,t){Cc(e,t);var n=Dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&jl(e,t.type,Dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function La(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jl(e,t,n){(t!=="number"||Li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var er=Array.isArray;function wn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Na(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(er(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dt(n)}}function Sc(e,t){var n=Dt(t.value),r=Dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,Ec=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T1=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){T1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ir[t]=ir[e]})});function jc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ir.hasOwnProperty(e)&&ir[e]?(""+t).trim():t+"px"}function Pc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $1=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if($1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Rl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function Ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $l=null,Cn=null,Sn=null;function Ma(e){if(e=Dr(e)){if(typeof $l!="function")throw Error(S(280));var t=e.stateNode;t&&(t=po(t),$l(e.stateNode,e.type,t))}}function _c(e){Cn?Sn?Sn.push(e):Sn=[e]:Cn=e}function zc(){if(Cn){var e=Cn,t=Sn;if(Sn=Cn=null,Ma(e),t)for(e=0;e<t.length;e++)Ma(t[e])}}function Rc(e,t){return e(t)}function Tc(){}var Go=!1;function $c(e,t,n){if(Go)return e(t,n);Go=!0;try{return Rc(e,t,n)}finally{Go=!1,(Cn!==null||Sn!==null)&&(Tc(),zc())}}function gr(e,t){var n=e.stateNode;if(n===null)return null;var r=po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ll=!1;if(dt)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){Ll=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{Ll=!1}function L1(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var or=!1,Ni=null,Fi=!1,Nl=null,N1={onError:function(e){or=!0,Ni=e}};function F1(e,t,n,r,i,o,l,s,a){or=!1,Ni=null,L1.apply(N1,arguments)}function M1(e,t,n,r,i,o,l,s,a){if(F1.apply(this,arguments),or){if(or){var u=Ni;or=!1,Ni=null}else throw Error(S(198));Fi||(Fi=!0,Nl=u)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oa(e){if(on(e)!==e)throw Error(S(188))}function O1(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Oa(i),e;if(o===r)return Oa(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Nc(e){return e=O1(e),e!==null?Fc(e):null}function Fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fc(e);if(t!==null)return t;e=e.sibling}return null}var Mc=Fe.unstable_scheduleCallback,Ia=Fe.unstable_cancelCallback,I1=Fe.unstable_shouldYield,D1=Fe.unstable_requestPaint,Z=Fe.unstable_now,U1=Fe.unstable_getCurrentPriorityLevel,_s=Fe.unstable_ImmediatePriority,Oc=Fe.unstable_UserBlockingPriority,Mi=Fe.unstable_NormalPriority,A1=Fe.unstable_LowPriority,Ic=Fe.unstable_IdlePriority,ao=null,rt=null;function B1(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(ao,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:W1,H1=Math.log,V1=Math.LN2;function W1(e){return e>>>=0,e===0?32:31-(H1(e)/V1|0)|0}var br=64,Jr=4194304;function tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=tr(s):(o&=l,o!==0&&(r=tr(o)))}else l=n&~i,l!==0?r=tr(l):o!==0&&(r=tr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function Q1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Je(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=Q1(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Fl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dc(){var e=br;return br<<=1,!(br&4194240)&&(br=64),e}function Ko(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function K1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function zs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var A=0;function Uc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ac,Rs,Bc,Hc,Vc,Ml=!1,Xr=[],Pt=null,_t=null,zt=null,vr=new Map,yr=new Map,wt=[],b1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Da(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(t.pointerId)}}function Gn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Dr(t),t!==null&&Rs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function J1(e,t,n,r,i){switch(t){case"focusin":return Pt=Gn(Pt,e,t,n,r,i),!0;case"dragenter":return _t=Gn(_t,e,t,n,r,i),!0;case"mouseover":return zt=Gn(zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return vr.set(o,Gn(vr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,yr.set(o,Gn(yr.get(o)||null,e,t,n,r,i)),!0}return!1}function Wc(e){var t=Kt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=Lc(n),t!==null){e.blockedOn=t,Vc(e.priority,function(){Bc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ol(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tl=r,n.target.dispatchEvent(r),Tl=null}else return t=Dr(n),t!==null&&Rs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ua(e,t,n){xi(e)&&n.delete(t)}function X1(){Ml=!1,Pt!==null&&xi(Pt)&&(Pt=null),_t!==null&&xi(_t)&&(_t=null),zt!==null&&xi(zt)&&(zt=null),vr.forEach(Ua),yr.forEach(Ua)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ml||(Ml=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,X1)))}function xr(e){function t(i){return Kn(i,e)}if(0<Xr.length){Kn(Xr[0],e);for(var n=1;n<Xr.length;n++){var r=Xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Kn(Pt,e),_t!==null&&Kn(_t,e),zt!==null&&Kn(zt,e),vr.forEach(t),yr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Wc(n),n.blockedOn===null&&wt.shift()}var kn=mt.ReactCurrentBatchConfig,Ii=!0;function Y1(e,t,n,r){var i=A,o=kn.transition;kn.transition=null;try{A=1,Ts(e,t,n,r)}finally{A=i,kn.transition=o}}function Z1(e,t,n,r){var i=A,o=kn.transition;kn.transition=null;try{A=4,Ts(e,t,n,r)}finally{A=i,kn.transition=o}}function Ts(e,t,n,r){if(Ii){var i=Ol(e,t,n,r);if(i===null)rl(e,t,r,Di,n),Da(e,r);else if(J1(i,e,t,n,r))r.stopPropagation();else if(Da(e,r),t&4&&-1<b1.indexOf(e)){for(;i!==null;){var o=Dr(i);if(o!==null&&Ac(o),o=Ol(e,t,n,r),o===null&&rl(e,t,r,Di,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else rl(e,t,r,null,n)}}var Di=null;function Ol(e,t,n,r){if(Di=null,e=Ps(r),e=Kt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Di=e,null}function Qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U1()){case _s:return 1;case Oc:return 4;case Mi:case A1:return 16;case Ic:return 536870912;default:return 16}default:return 16}}var St=null,$s=null,wi=null;function Gc(){if(wi)return wi;var e,t=$s,n=t.length,r,i="value"in St?St.value:St.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return wi=i.slice(e,1<r?1-r:void 0)}function Ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function Aa(){return!1}function Oe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yr:Aa,this.isPropagationStopped=Aa,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=Oe(On),Ir=J({},On,{view:0,detail:0}),q1=Oe(Ir),bo,Jo,bn,uo=J({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(bo=e.screenX-bn.screenX,Jo=e.screenY-bn.screenY):Jo=bo=0,bn=e),bo)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),Ba=Oe(uo),ep=J({},uo,{dataTransfer:0}),tp=Oe(ep),np=J({},Ir,{relatedTarget:0}),Xo=Oe(np),rp=J({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),ip=Oe(rp),op=J({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lp=Oe(op),sp=J({},On,{data:0}),Ha=Oe(sp),ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cp[e])?!!t[e]:!1}function Ns(){return dp}var fp=J({},Ir,{key:function(e){if(e.key){var t=ap[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?Ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pp=Oe(fp),hp=J({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Va=Oe(hp),mp=J({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),gp=Oe(mp),vp=J({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),yp=Oe(vp),xp=J({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=Oe(xp),Cp=[9,13,27,32],Fs=dt&&"CompositionEvent"in window,lr=null;dt&&"documentMode"in document&&(lr=document.documentMode);var Sp=dt&&"TextEvent"in window&&!lr,Kc=dt&&(!Fs||lr&&8<lr&&11>=lr),Wa=String.fromCharCode(32),Qa=!1;function bc(e,t){switch(e){case"keyup":return Cp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function kp(e,t){switch(e){case"compositionend":return Jc(t);case"keypress":return t.which!==32?null:(Qa=!0,Wa);case"textInput":return e=t.data,e===Wa&&Qa?null:e;default:return null}}function Ep(e,t){if(cn)return e==="compositionend"||!Fs&&bc(e,t)?(e=Gc(),wi=$s=St=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kc&&t.locale!=="ko"?null:t.data;default:return null}}var jp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jp[e.type]:t==="textarea"}function Xc(e,t,n,r){_c(r),t=Ui(t,"onChange"),0<t.length&&(n=new Ls("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var sr=null,wr=null;function Pp(e){sd(e,0)}function co(e){var t=pn(e);if(wc(t))return e}function _p(e,t){if(e==="change")return t}var Yc=!1;if(dt){var Yo;if(dt){var Zo="oninput"in document;if(!Zo){var Ka=document.createElement("div");Ka.setAttribute("oninput","return;"),Zo=typeof Ka.oninput=="function"}Yo=Zo}else Yo=!1;Yc=Yo&&(!document.documentMode||9<document.documentMode)}function ba(){sr&&(sr.detachEvent("onpropertychange",Zc),wr=sr=null)}function Zc(e){if(e.propertyName==="value"&&co(wr)){var t=[];Xc(t,wr,e,Ps(e)),$c(Pp,t)}}function zp(e,t,n){e==="focusin"?(ba(),sr=t,wr=n,sr.attachEvent("onpropertychange",Zc)):e==="focusout"&&ba()}function Rp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(wr)}function Tp(e,t){if(e==="click")return co(t)}function $p(e,t){if(e==="input"||e==="change")return co(t)}function Lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:Lp;function Cr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yl.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function Ja(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xa(e,t){var n=Ja(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ja(n)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ed(){for(var e=window,t=Li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Li(e.document)}return t}function Ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Np(e){var t=ed(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qc(n.ownerDocument.documentElement,n)){if(r!==null&&Ms(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Xa(n,o);var l=Xa(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fp=dt&&"documentMode"in document&&11>=document.documentMode,dn=null,Il=null,ar=null,Dl=!1;function Ya(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||dn==null||dn!==Li(r)||(r=dn,"selectionStart"in r&&Ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ar&&Cr(ar,r)||(ar=r,r=Ui(Il,"onSelect"),0<r.length&&(t=new Ls("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dn)))}function Zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},qo={},td={};dt&&(td=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function fo(e){if(qo[e])return qo[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in td)return qo[e]=t[n];return e}var nd=fo("animationend"),rd=fo("animationiteration"),id=fo("animationstart"),od=fo("transitionend"),ld=new Map,Za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){ld.set(e,t),rn(t,[e])}for(var el=0;el<Za.length;el++){var tl=Za[el],Mp=tl.toLowerCase(),Op=tl[0].toUpperCase()+tl.slice(1);At(Mp,"on"+Op)}At(nd,"onAnimationEnd");At(rd,"onAnimationIteration");At(id,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(od,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ip=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function qa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,M1(r,t,void 0,e),e.currentTarget=null}function sd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;qa(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;qa(i,s,u),o=a}}}if(Fi)throw e=Nl,Fi=!1,Nl=null,e}function W(e,t){var n=t[Vl];n===void 0&&(n=t[Vl]=new Set);var r=e+"__bubble";n.has(r)||(ad(t,e,2,!1),n.add(r))}function nl(e,t,n){var r=0;t&&(r|=4),ad(n,e,r,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[qr]){e[qr]=!0,mc.forEach(function(n){n!=="selectionchange"&&(Ip.has(n)||nl(n,!1,e),nl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qr]||(t[qr]=!0,nl("selectionchange",!1,t))}}function ad(e,t,n,r){switch(Qc(t)){case 1:var i=Y1;break;case 4:i=Z1;break;default:i=Ts}n=i.bind(null,t,n,e),i=void 0,!Ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Kt(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}$c(function(){var u=o,h=Ps(n),m=[];e:{var g=ld.get(e);if(g!==void 0){var w=Ls,y=e;switch(e){case"keypress":if(Ci(n)===0)break e;case"keydown":case"keyup":w=pp;break;case"focusin":y="focus",w=Xo;break;case"focusout":y="blur",w=Xo;break;case"beforeblur":case"afterblur":w=Xo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ba;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=gp;break;case nd:case rd:case id:w=ip;break;case od:w=yp;break;case"scroll":w=q1;break;case"wheel":w=wp;break;case"copy":case"cut":case"paste":w=lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Va}var v=(t&4)!==0,P=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var c=u,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=gr(c,f),x!=null&&v.push(kr(c,x,p)))),P)break;c=c.return}0<v.length&&(g=new w(g,y,null,n,h),m.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==Tl&&(y=n.relatedTarget||n.fromElement)&&(Kt(y)||y[ft]))break e;if((w||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?Kt(y):null,y!==null&&(P=on(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(v=Ba,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Va,x="onPointerLeave",f="onPointerEnter",c="pointer"),P=w==null?g:pn(w),p=y==null?g:pn(y),g=new v(x,c+"leave",w,n,h),g.target=P,g.relatedTarget=p,x=null,Kt(h)===u&&(v=new v(f,c+"enter",y,n,h),v.target=p,v.relatedTarget=P,x=v),P=x,w&&y)t:{for(v=w,f=y,c=0,p=v;p;p=sn(p))c++;for(p=0,x=f;x;x=sn(x))p++;for(;0<c-p;)v=sn(v),c--;for(;0<p-c;)f=sn(f),p--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=sn(v),f=sn(f)}v=null}else v=null;w!==null&&eu(m,g,w,v,!1),y!==null&&P!==null&&eu(m,P,y,v,!0)}}e:{if(g=u?pn(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=_p;else if(Ga(g))if(Yc)E=$p;else{E=Rp;var _=zp}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Tp);if(E&&(E=E(e,u))){Xc(m,E,n,h);break e}_&&_(e,g,u),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&jl(g,"number",g.value)}switch(_=u?pn(u):window,e){case"focusin":(Ga(_)||_.contentEditable==="true")&&(dn=_,Il=u,ar=null);break;case"focusout":ar=Il=dn=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,Ya(m,n,h);break;case"selectionchange":if(Fp)break;case"keydown":case"keyup":Ya(m,n,h)}var k;if(Fs)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else cn?bc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Kc&&n.locale!=="ko"&&(cn||T!=="onCompositionStart"?T==="onCompositionEnd"&&cn&&(k=Gc()):(St=h,$s="value"in St?St.value:St.textContent,cn=!0)),_=Ui(u,T),0<_.length&&(T=new Ha(T,e,null,n,h),m.push({event:T,listeners:_}),k?T.data=k:(k=Jc(n),k!==null&&(T.data=k)))),(k=Sp?kp(e,n):Ep(e,n))&&(u=Ui(u,"onBeforeInput"),0<u.length&&(h=new Ha("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:u}),h.data=k))}sd(m,t)})}function kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ui(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=gr(e,n),o!=null&&r.unshift(kr(e,o,i)),o=gr(e,t),o!=null&&r.push(kr(e,o,i))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=gr(n,o),a!=null&&l.unshift(kr(n,a,s))):i||(a=gr(n,o),a!=null&&l.push(kr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Dp=/\r\n?/g,Up=/\u0000|\uFFFD/g;function tu(e){return(typeof e=="string"?e:""+e).replace(Dp,`
`).replace(Up,"")}function ei(e,t,n){if(t=tu(t),tu(e)!==t&&n)throw Error(S(425))}function Ai(){}var Ul=null,Al=null;function Bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hl=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,nu=typeof Promise=="function"?Promise:void 0,Bp=typeof queueMicrotask=="function"?queueMicrotask:typeof nu<"u"?function(e){return nu.resolve(null).then(e).catch(Hp)}:Hl;function Hp(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ru(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var In=Math.random().toString(36).slice(2),nt="__reactFiber$"+In,Er="__reactProps$"+In,ft="__reactContainer$"+In,Vl="__reactEvents$"+In,Vp="__reactListeners$"+In,Wp="__reactHandles$"+In;function Kt(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ru(e);e!==null;){if(n=e[nt])return n;e=ru(e)}return t}e=n,n=e.parentNode}return null}function Dr(e){return e=e[nt]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function po(e){return e[Er]||null}var Wl=[],hn=-1;function Bt(e){return{current:e}}function Q(e){0>hn||(e.current=Wl[hn],Wl[hn]=null,hn--)}function V(e,t){hn++,Wl[hn]=e.current,e.current=t}var Ut={},ve=Bt(Ut),Pe=Bt(!1),Zt=Ut;function zn(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function Bi(){Q(Pe),Q(ve)}function iu(e,t,n){if(ve.current!==Ut)throw Error(S(168));V(ve,t),V(Pe,n)}function ud(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,z1(e)||"Unknown",i));return J({},n,r)}function Hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,Zt=ve.current,V(ve,e),V(Pe,Pe.current),!0}function ou(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=ud(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,Q(Pe),Q(ve),V(ve,e)):Q(Pe),V(Pe,n)}var st=null,ho=!1,ol=!1;function cd(e){st===null?st=[e]:st.push(e)}function Qp(e){ho=!0,cd(e)}function Ht(){if(!ol&&st!==null){ol=!0;var e=0,t=A;try{var n=st;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}st=null,ho=!1}catch(i){throw st!==null&&(st=st.slice(e+1)),Mc(_s,Ht),i}finally{A=t,ol=!1}}return null}var mn=[],gn=0,Vi=null,Wi=0,De=[],Ue=0,qt=null,at=1,ut="";function Qt(e,t){mn[gn++]=Wi,mn[gn++]=Vi,Vi=e,Wi=t}function dd(e,t,n){De[Ue++]=at,De[Ue++]=ut,De[Ue++]=qt,qt=e;var r=at;e=ut;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var o=32-Je(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,at=1<<32-Je(t)+i|n<<i|r,ut=o+e}else at=1<<o|n<<i|r,ut=e}function Os(e){e.return!==null&&(Qt(e,1),dd(e,1,0))}function Is(e){for(;e===Vi;)Vi=mn[--gn],mn[gn]=null,Wi=mn[--gn],mn[gn]=null;for(;e===qt;)qt=De[--Ue],De[Ue]=null,ut=De[--Ue],De[Ue]=null,at=De[--Ue],De[Ue]=null}var Le=null,$e=null,G=!1,be=null;function fd(e,t){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,$e=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:at,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,$e=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(G){var t=$e;if(t){var n=t;if(!lu(e,t)){if(Ql(e))throw Error(S(418));t=Rt(n.nextSibling);var r=Le;t&&lu(e,t)?fd(r,n):(e.flags=e.flags&-4097|2,G=!1,Le=e)}}else{if(Ql(e))throw Error(S(418));e.flags=e.flags&-4097|2,G=!1,Le=e}}}function su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function ti(e){if(e!==Le)return!1;if(!G)return su(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bl(e.type,e.memoizedProps)),t&&(t=$e)){if(Ql(e))throw pd(),Error(S(418));for(;t;)fd(e,t),t=Rt(t.nextSibling)}if(su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Le?Rt(e.stateNode.nextSibling):null;return!0}function pd(){for(var e=$e;e;)e=Rt(e.nextSibling)}function Rn(){$e=Le=null,G=!1}function Ds(e){be===null?be=[e]:be.push(e)}var Gp=mt.ReactCurrentBatchConfig;function Ge(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Qi=Bt(null),Gi=null,vn=null,Us=null;function As(){Us=vn=Gi=null}function Bs(e){var t=Qi.current;Q(Qi),e._currentValue=t}function Kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function En(e,t){Gi=e,Us=vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Us!==e)if(e={context:e,memoizedValue:t,next:null},vn===null){if(Gi===null)throw Error(S(308));vn=e,Gi.dependencies={lanes:0,firstContext:e}}else vn=vn.next=e;return t}var bt=null;function Hs(e){bt===null?bt=[e]:bt.push(e)}function hd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Hs(t)):(n.next=i.next,i.next=n),t.interleaved=n,pt(e,r)}function pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function Vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function md(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,pt(e,n)}return i=r.interleaved,i===null?(t.next=t,Hs(r)):(t.next=i.next,i.next=t),r.interleaved=t,pt(e,n)}function Si(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zs(e,n)}}function au(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ki(e,t,n,r){var i=e.updateQueue;xt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=a))}if(o!==null){var m=i.baseState;l=0,h=u=a=null,s=o;do{var g=s.lane,w=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,v=s;switch(g=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){m=y.call(w,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,g=typeof y=="function"?y.call(w,m,g):y,g==null)break e;m=J({},m,g);break e;case 2:xt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=w,a=m):h=h.next=w,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(h===null&&(a=m),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=m}}function uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var gd=new hc.Component().refs;function bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mo={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),i=Lt(e),o=ct(r,i);o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Xe(t,e,i,r),Si(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),i=Lt(e),o=ct(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Xe(t,e,i,r),Si(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Lt(e),i=ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=Tt(e,i,r),t!==null&&(Xe(t,e,r,n),Si(t,e,r))}};function cu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,o):!0}function vd(e,t,n){var r=!1,i=Ut,o=t.contextType;return typeof o=="object"&&o!==null?o=He(o):(i=_e(t)?Zt:ve.current,r=t.contextTypes,o=(r=r!=null)?zn(e,i):Ut),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function du(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mo.enqueueReplaceState(t,t.state,null)}function Jl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=gd,Vs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=He(o):(o=_e(t)?Zt:ve.current,i.context=zn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&mo.enqueueReplaceState(i,i.state,null),Ki(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===gd&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ni(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fu(e){var t=e._init;return t(e._payload)}function yd(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Nt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,x){return c===null||c.tag!==6?(c=fl(p,f.mode,x),c.return=f,c):(c=i(c,p),c.return=f,c)}function a(f,c,p,x){var E=p.type;return E===un?h(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&fu(E)===c.type)?(x=i(c,p.props),x.ref=Jn(f,c,p),x.return=f,x):(x=zi(p.type,p.key,p.props,null,f.mode,x),x.ref=Jn(f,c,p),x.return=f,x)}function u(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=pl(p,f.mode,x),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function h(f,c,p,x,E){return c===null||c.tag!==7?(c=Yt(p,f.mode,x,E),c.return=f,c):(c=i(c,p),c.return=f,c)}function m(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=fl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qr:return p=zi(c.type,c.key,c.props,null,f.mode,p),p.ref=Jn(f,null,c),p.return=f,p;case an:return c=pl(c,f.mode,p),c.return=f,c;case yt:var x=c._init;return m(f,x(c._payload),p)}if(er(c)||Wn(c))return c=Yt(c,f.mode,p,null),c.return=f,c;ni(f,c)}return null}function g(f,c,p,x){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:s(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:return p.key===E?a(f,c,p,x):null;case an:return p.key===E?u(f,c,p,x):null;case yt:return E=p._init,g(f,c,E(p._payload),x)}if(er(p)||Wn(p))return E!==null?null:h(f,c,p,x,null);ni(f,p)}return null}function w(f,c,p,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(c,f,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qr:return f=f.get(x.key===null?p:x.key)||null,a(c,f,x,E);case an:return f=f.get(x.key===null?p:x.key)||null,u(c,f,x,E);case yt:var _=x._init;return w(f,c,p,_(x._payload),E)}if(er(x)||Wn(x))return f=f.get(p)||null,h(c,f,x,E,null);ni(c,x)}return null}function y(f,c,p,x){for(var E=null,_=null,k=c,T=c=0,H=null;k!==null&&T<p.length;T++){k.index>T?(H=k,k=null):H=k.sibling;var N=g(f,k,p[T],x);if(N===null){k===null&&(k=H);break}e&&k&&N.alternate===null&&t(f,k),c=o(N,c,T),_===null?E=N:_.sibling=N,_=N,k=H}if(T===p.length)return n(f,k),G&&Qt(f,T),E;if(k===null){for(;T<p.length;T++)k=m(f,p[T],x),k!==null&&(c=o(k,c,T),_===null?E=k:_.sibling=k,_=k);return G&&Qt(f,T),E}for(k=r(f,k);T<p.length;T++)H=w(k,f,T,p[T],x),H!==null&&(e&&H.alternate!==null&&k.delete(H.key===null?T:H.key),c=o(H,c,T),_===null?E=H:_.sibling=H,_=H);return e&&k.forEach(function(We){return t(f,We)}),G&&Qt(f,T),E}function v(f,c,p,x){var E=Wn(p);if(typeof E!="function")throw Error(S(150));if(p=E.call(p),p==null)throw Error(S(151));for(var _=E=null,k=c,T=c=0,H=null,N=p.next();k!==null&&!N.done;T++,N=p.next()){k.index>T?(H=k,k=null):H=k.sibling;var We=g(f,k,N.value,x);if(We===null){k===null&&(k=H);break}e&&k&&We.alternate===null&&t(f,k),c=o(We,c,T),_===null?E=We:_.sibling=We,_=We,k=H}if(N.done)return n(f,k),G&&Qt(f,T),E;if(k===null){for(;!N.done;T++,N=p.next())N=m(f,N.value,x),N!==null&&(c=o(N,c,T),_===null?E=N:_.sibling=N,_=N);return G&&Qt(f,T),E}for(k=r(f,k);!N.done;T++,N=p.next())N=w(k,f,T,N.value,x),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?T:N.key),c=o(N,c,T),_===null?E=N:_.sibling=N,_=N);return e&&k.forEach(function(Hn){return t(f,Hn)}),G&&Qt(f,T),E}function P(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===un&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:e:{for(var E=p.key,_=c;_!==null;){if(_.key===E){if(E=p.type,E===un){if(_.tag===7){n(f,_.sibling),c=i(_,p.props.children),c.return=f,f=c;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&fu(E)===_.type){n(f,_.sibling),c=i(_,p.props),c.ref=Jn(f,_,p),c.return=f,f=c;break e}n(f,_);break}else t(f,_);_=_.sibling}p.type===un?(c=Yt(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=zi(p.type,p.key,p.props,null,f.mode,x),x.ref=Jn(f,c,p),x.return=f,f=x)}return l(f);case an:e:{for(_=p.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=pl(p,f.mode,x),c.return=f,f=c}return l(f);case yt:return _=p._init,P(f,c,_(p._payload),x)}if(er(p))return y(f,c,p,x);if(Wn(p))return v(f,c,p,x);ni(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=fl(p,f.mode,x),c.return=f,f=c),l(f)):n(f,c)}return P}var Tn=yd(!0),xd=yd(!1),Ur={},it=Bt(Ur),jr=Bt(Ur),Pr=Bt(Ur);function Jt(e){if(e===Ur)throw Error(S(174));return e}function Ws(e,t){switch(V(Pr,t),V(jr,e),V(it,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_l(t,e)}Q(it),V(it,t)}function $n(){Q(it),Q(jr),Q(Pr)}function wd(e){Jt(Pr.current);var t=Jt(it.current),n=_l(t,e.type);t!==n&&(V(jr,e),V(it,n))}function Qs(e){jr.current===e&&(Q(it),Q(jr))}var K=Bt(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ll=[];function Gs(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var ki=mt.ReactCurrentDispatcher,sl=mt.ReactCurrentBatchConfig,en=0,b=null,ne=null,oe=null,Ji=!1,ur=!1,_r=0,Kp=0;function pe(){throw Error(S(321))}function Ks(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function bs(e,t,n,r,i,o){if(en=o,b=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ki.current=e===null||e.memoizedState===null?Yp:Zp,e=n(r,i),ur){o=0;do{if(ur=!1,_r=0,25<=o)throw Error(S(301));o+=1,oe=ne=null,t.updateQueue=null,ki.current=qp,e=n(r,i)}while(ur)}if(ki.current=Xi,t=ne!==null&&ne.next!==null,en=0,oe=ne=b=null,Ji=!1,t)throw Error(S(300));return e}function Js(){var e=_r!==0;return _r=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?b.memoizedState=oe=e:oe=oe.next=e,oe}function Ve(){if(ne===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=oe===null?b.memoizedState:oe.next;if(t!==null)oe=t,ne=e;else{if(e===null)throw Error(S(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?b.memoizedState=oe=e:oe=oe.next=e}return oe}function zr(e,t){return typeof t=="function"?t(e):t}function al(e){var t=Ve(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,u=o;do{var h=u.lane;if((en&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=m,l=r):a=a.next=m,b.lanes|=h,tn|=h}u=u.next}while(u!==null&&u!==o);a===null?l=r:a.next=s,Ye(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,b.lanes|=o,tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ul(e){var t=Ve(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ye(o,t.memoizedState)||(je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Cd(){}function Sd(e,t){var n=b,r=Ve(),i=t(),o=!Ye(r.memoizedState,i);if(o&&(r.memoizedState=i,je=!0),r=r.queue,Xs(jd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Rr(9,Ed.bind(null,n,r,i,t),void 0,null),le===null)throw Error(S(349));en&30||kd(n,t,i)}return i}function kd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ed(e,t,n,r){t.value=n,t.getSnapshot=r,Pd(t)&&_d(e)}function jd(e,t,n){return n(function(){Pd(t)&&_d(e)})}function Pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function _d(e){var t=pt(e,1);t!==null&&Xe(t,e,1,-1)}function pu(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},t.queue=e,e=e.dispatch=Xp.bind(null,b,e),[t.memoizedState,e]}function Rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zd(){return Ve().memoizedState}function Ei(e,t,n,r){var i=qe();b.flags|=e,i.memoizedState=Rr(1|t,n,void 0,r===void 0?null:r)}function go(e,t,n,r){var i=Ve();r=r===void 0?null:r;var o=void 0;if(ne!==null){var l=ne.memoizedState;if(o=l.destroy,r!==null&&Ks(r,l.deps)){i.memoizedState=Rr(t,n,o,r);return}}b.flags|=e,i.memoizedState=Rr(1|t,n,o,r)}function hu(e,t){return Ei(8390656,8,e,t)}function Xs(e,t){return go(2048,8,e,t)}function Rd(e,t){return go(4,2,e,t)}function Td(e,t){return go(4,4,e,t)}function $d(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ld(e,t,n){return n=n!=null?n.concat([e]):null,go(4,4,$d.bind(null,t,e),n)}function Ys(){}function Nd(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ks(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fd(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ks(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Md(e,t,n){return en&21?(Ye(n,t)||(n=Dc(),b.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function bp(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),t()}finally{A=n,sl.transition=r}}function Od(){return Ve().memoizedState}function Jp(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Id(e))Dd(t,n);else if(n=hd(e,t,n,r),n!==null){var i=we();Xe(n,e,r,i),Ud(n,t,r)}}function Xp(e,t,n){var r=Lt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Id(e))Dd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ye(s,l)){var a=t.interleaved;a===null?(i.next=i,Hs(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=hd(e,t,i,r),n!==null&&(i=we(),Xe(n,e,r,i),Ud(n,t,r))}}function Id(e){var t=e.alternate;return e===b||t!==null&&t===b}function Dd(e,t){ur=Ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ud(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zs(e,n)}}var Xi={readContext:He,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},Yp={readContext:He,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ei(4194308,4,$d.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ei(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ei(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jp.bind(null,b,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:pu,useDebugValue:Ys,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=pu(!1),t=e[0];return e=bp.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=b,i=qe();if(G){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),le===null)throw Error(S(349));en&30||kd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,hu(jd.bind(null,r,o,e),[e]),r.flags|=2048,Rr(9,Ed.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qe(),t=le.identifierPrefix;if(G){var n=ut,r=at;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zp={readContext:He,useCallback:Nd,useContext:He,useEffect:Xs,useImperativeHandle:Ld,useInsertionEffect:Rd,useLayoutEffect:Td,useMemo:Fd,useReducer:al,useRef:zd,useState:function(){return al(zr)},useDebugValue:Ys,useDeferredValue:function(e){var t=Ve();return Md(t,ne.memoizedState,e)},useTransition:function(){var e=al(zr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Cd,useSyncExternalStore:Sd,useId:Od,unstable_isNewReconciler:!1},qp={readContext:He,useCallback:Nd,useContext:He,useEffect:Xs,useImperativeHandle:Ld,useInsertionEffect:Rd,useLayoutEffect:Td,useMemo:Fd,useReducer:ul,useRef:zd,useState:function(){return ul(zr)},useDebugValue:Ys,useDeferredValue:function(e){var t=Ve();return ne===null?t.memoizedState=e:Md(t,ne.memoizedState,e)},useTransition:function(){var e=ul(zr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Cd,useSyncExternalStore:Sd,useId:Od,unstable_isNewReconciler:!1};function Ln(e,t){try{var n="",r=t;do n+=_1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var e0=typeof WeakMap=="function"?WeakMap:Map;function Ad(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zi||(Zi=!0,ls=r),Xl(e,t)},n}function Bd(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xl(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function mu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new e0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=h0.bind(null,e,t,n),t.then(e,e))}function gu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e)}var t0=mt.ReactCurrentOwner,je=!1;function xe(e,t,n,r){t.child=e===null?xd(t,null,n,r):Tn(t,e.child,n,r)}function yu(e,t,n,r,i){n=n.render;var o=t.ref;return En(t,i),r=bs(e,t,n,r,o,i),n=Js(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(G&&n&&Os(t),t.flags|=1,xe(e,t,r,i),t.child)}function xu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!oa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Hd(e,t,o,r,i)):(e=zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(l,r)&&e.ref===t.ref)return ht(e,t,i)}return t.flags|=1,e=Nt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Hd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Cr(o,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,ht(e,t,i)}return Yl(e,t,n,r,i)}function Vd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(xn,Te),Te|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(xn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(xn,Te),Te|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(xn,Te),Te|=r;return xe(e,t,i,n),t.child}function Wd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yl(e,t,n,r,i){var o=_e(n)?Zt:ve.current;return o=zn(t,o),En(t,i),n=bs(e,t,n,r,o,i),r=Js(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(G&&r&&Os(t),t.flags|=1,xe(e,t,n,i),t.child)}function wu(e,t,n,r,i){if(_e(n)){var o=!0;Hi(t)}else o=!1;if(En(t,i),t.stateNode===null)ji(e,t),vd(t,n,r),Jl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=_e(n)?Zt:ve.current,u=zn(t,u));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&du(t,l,r,u),xt=!1;var g=t.memoizedState;l.state=g,Ki(t,r,l,i),a=t.memoizedState,s!==r||g!==a||Pe.current||xt?(typeof h=="function"&&(bl(t,n,h,r),a=t.memoizedState),(s=xt||cu(t,n,s,r,g,a,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,md(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ge(t.type,s),l.props=u,m=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=He(a):(a=_e(n)?Zt:ve.current,a=zn(t,a));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||g!==a)&&du(t,l,r,a),xt=!1,g=t.memoizedState,l.state=g,Ki(t,r,l,i);var y=t.memoizedState;s!==m||g!==y||Pe.current||xt?(typeof w=="function"&&(bl(t,n,w,r),y=t.memoizedState),(u=xt||cu(t,n,u,r,g,y,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Zl(e,t,n,r,o,i)}function Zl(e,t,n,r,i,o){Wd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ou(t,n,!1),ht(e,t,o);r=t.stateNode,t0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Tn(t,e.child,null,o),t.child=Tn(t,null,s,o)):xe(e,t,s,o),t.memoizedState=r.state,i&&ou(t,n,!0),t.child}function Qd(e){var t=e.stateNode;t.pendingContext?iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&iu(e,t.context,!1),Ws(e,t.containerInfo)}function Cu(e,t,n,r,i){return Rn(),Ds(i),t.flags|=256,xe(e,t,n,r),t.child}var ql={dehydrated:null,treeContext:null,retryLane:0};function es(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gd(e,t,n){var r=t.pendingProps,i=K.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(K,i&1),e===null)return Gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=xo(l,r,0,null),e=Yt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=es(n),t.memoizedState=ql,e):Zs(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return n0(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Nt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Nt(s,o):(o=Yt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?es(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ql,r}return o=e.child,e=o.sibling,r=Nt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zs(e,t){return t=xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ri(e,t,n,r){return r!==null&&Ds(r),Tn(t,e.child,null,n),e=Zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=cl(Error(S(422))),ri(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=xo({mode:"visible",children:r.children},i,0,null),o=Yt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Tn(t,e.child,null,l),t.child.memoizedState=es(l),t.memoizedState=ql,o);if(!(t.mode&1))return ri(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(S(419)),r=cl(o,r,void 0),ri(e,t,l,r)}if(s=(l&e.childLanes)!==0,je||s){if(r=le,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,pt(e,i),Xe(r,e,i,-1))}return ia(),r=cl(Error(S(421))),ri(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=m0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$e=Rt(i.nextSibling),Le=t,G=!0,be=null,e!==null&&(De[Ue++]=at,De[Ue++]=ut,De[Ue++]=qt,at=e.id,ut=e.overflow,qt=t),t=Zs(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Kl(e.return,t,n)}function dl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Kd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),dl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}dl(t,!0,n,null,o);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ji(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Nt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function r0(e,t,n){switch(t.tag){case 3:Qd(t),Rn();break;case 5:wd(t);break;case 1:_e(t.type)&&Hi(t);break;case 4:Ws(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Qi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Gd(e,t,n):(V(K,K.current&1),e=ht(e,t,n),e!==null?e.sibling:null);V(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Vd(e,t,n)}return ht(e,t,n)}var bd,ts,Jd,Xd;bd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ts=function(){};Jd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Jt(it.current);var o=null;switch(n){case"input":i=kl(e,i),r=kl(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=Pl(e,i),r=Pl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ai)}zl(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&W("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Xd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xn(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i0(e,t,n){var r=t.pendingProps;switch(Is(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return _e(t.type)&&Bi(),he(t),null;case 3:return r=t.stateNode,$n(),Q(Pe),Q(ve),Gs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,be!==null&&(us(be),be=null))),ts(e,t),he(t),null;case 5:Qs(t);var i=Jt(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)Jd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return he(t),null}if(e=Jt(it.current),ti(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[nt]=t,r[Er]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<nr.length;i++)W(nr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":$a(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Na(r,o),W("invalid",r)}zl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ei(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ei(r.textContent,s,e),i=["children",""+s]):hr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":Gr(r),La(r,o,!0);break;case"textarea":Gr(r),Fa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ai)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[nt]=t,e[Er]=r,bd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Rl(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<nr.length;i++)W(nr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":$a(e,r),i=kl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),W("invalid",e);break;case"textarea":Na(e,r),i=Pl(e,r),W("invalid",e);break;default:i=r}zl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Pc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ec(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&mr(e,a):typeof a=="number"&&mr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&W("scroll",e):a!=null&&Ss(e,o,a,l))}switch(n){case"input":Gr(e),La(e,r,!1);break;case"textarea":Gr(e),Fa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Dt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?wn(e,!!r.multiple,o,!1):r.defaultValue!=null&&wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Xd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Jt(Pr.current),Jt(it.current),ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(o=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ei(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return he(t),null;case 13:if(Q(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&$e!==null&&t.mode&1&&!(t.flags&128))pd(),Rn(),t.flags|=98560,o=!1;else if(o=ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[nt]=t}else Rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),o=!1}else be!==null&&(us(be),be=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?re===0&&(re=3):ia())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return $n(),ts(e,t),e===null&&Sr(t.stateNode.containerInfo),he(t),null;case 10:return Bs(t.type._context),he(t),null;case 17:return _e(t.type)&&Bi(),he(t),null;case 19:if(Q(K),o=t.memoizedState,o===null)return he(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Xn(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=bi(e),l!==null){for(t.flags|=128,Xn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>Nn&&(t.flags|=128,r=!0,Xn(o,!1),t.lanes=4194304)}else{if(!r)if(e=bi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!G)return he(t),null}else 2*Z()-o.renderingStartTime>Nn&&n!==1073741824&&(t.flags|=128,r=!0,Xn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=K.current,V(K,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return ra(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function o0(e,t){switch(Is(t),t.tag){case 1:return _e(t.type)&&Bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),Q(Pe),Q(ve),Gs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qs(t),null;case 13:if(Q(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(K),null;case 4:return $n(),null;case 10:return Bs(t.type._context),null;case 22:case 23:return ra(),null;case 24:return null;default:return null}}var ii=!1,ge=!1,l0=typeof WeakSet=="function"?WeakSet:Set,z=null;function yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function ns(e,t,n){try{n()}catch(r){X(e,t,r)}}var ku=!1;function s0(e,t){if(Ul=Ii,e=ed(),Ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,h=0,m=e,g=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(s=l+i),m!==o||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===e)break t;if(g===n&&++u===i&&(s=l),g===o&&++h===r&&(a=l),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Al={focusedElem:e,selectionRange:n},Ii=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,P=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ge(t.type,v),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){X(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return y=ku,ku=!1,y}function cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ns(t,n,o)}i=i.next}while(i!==r)}}function vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function rs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yd(e){var t=e.alternate;t!==null&&(e.alternate=null,Yd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Er],delete t[Vl],delete t[Vp],delete t[Wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zd(e){return e.tag===5||e.tag===3||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(r!==4&&(e=e.child,e!==null))for(is(e,t,n),e=e.sibling;e!==null;)is(e,t,n),e=e.sibling}function os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(os(e,t,n),e=e.sibling;e!==null;)os(e,t,n),e=e.sibling}var ae=null,Ke=!1;function vt(e,t,n){for(n=n.child;n!==null;)qd(e,t,n),n=n.sibling}function qd(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(ao,n)}catch{}switch(n.tag){case 5:ge||yn(n,t);case 6:var r=ae,i=Ke;ae=null,vt(e,t,n),ae=r,Ke=i,ae!==null&&(Ke?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ke?(e=ae,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),xr(e)):il(ae,n.stateNode));break;case 4:r=ae,i=Ke,ae=n.stateNode.containerInfo,Ke=!0,vt(e,t,n),ae=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ns(n,t,l),i=i.next}while(i!==r)}vt(e,t,n);break;case 1:if(!ge&&(yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,vt(e,t,n),ge=r):vt(e,t,n);break;default:vt(e,t,n)}}function ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new l0),t.forEach(function(r){var i=g0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Ke=!1;break e;case 3:ae=s.stateNode.containerInfo,Ke=!0;break e;case 4:ae=s.stateNode.containerInfo,Ke=!0;break e}s=s.return}if(ae===null)throw Error(S(160));qd(o,l,i),ae=null,Ke=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ef(t,e),t=t.sibling}function ef(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),Ze(e),r&4){try{cr(3,e,e.return),vo(3,e)}catch(v){X(e,e.return,v)}try{cr(5,e,e.return)}catch(v){X(e,e.return,v)}}break;case 1:Qe(t,e),Ze(e),r&512&&n!==null&&yn(n,n.return);break;case 5:if(Qe(t,e),Ze(e),r&512&&n!==null&&yn(n,n.return),e.flags&32){var i=e.stateNode;try{mr(i,"")}catch(v){X(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Cc(i,o),Rl(s,l);var u=Rl(s,o);for(l=0;l<a.length;l+=2){var h=a[l],m=a[l+1];h==="style"?Pc(i,m):h==="dangerouslySetInnerHTML"?Ec(i,m):h==="children"?mr(i,m):Ss(i,h,m,u)}switch(s){case"input":El(i,o);break;case"textarea":Sc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?wn(i,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?wn(i,!!o.multiple,o.defaultValue,!0):wn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Er]=o}catch(v){X(e,e.return,v)}}break;case 6:if(Qe(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){X(e,e.return,v)}}break;case 3:if(Qe(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xr(t.containerInfo)}catch(v){X(e,e.return,v)}break;case 4:Qe(t,e),Ze(e);break;case 13:Qe(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ta=Z())),r&4&&ju(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||h,Qe(t,e),ge=u):Qe(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(z=e,h=e.child;h!==null;){for(m=z=h;z!==null;){switch(g=z,w=g.child,g.tag){case 0:case 11:case 14:case 15:cr(4,g,g.return);break;case 1:yn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){X(r,n,v)}}break;case 5:yn(g,g.return);break;case 22:if(g.memoizedState!==null){_u(m);continue}}w!==null?(w.return=g,z=w):_u(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=jc("display",l))}catch(v){X(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(v){X(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Qe(t,e),Ze(e),r&4&&ju(e);break;case 21:break;default:Qe(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mr(i,""),r.flags&=-33);var o=Eu(e);os(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Eu(e);is(e,s,l);break;default:throw Error(S(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function a0(e,t,n){z=e,tf(e)}function tf(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ii;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||ge;s=ii;var u=ge;if(ii=l,(ge=a)&&!u)for(z=i;z!==null;)l=z,a=l.child,l.tag===22&&l.memoizedState!==null?zu(i):a!==null?(a.return=l,z=a):zu(i);for(;o!==null;)z=o,tf(o),o=o.sibling;z=i,ii=s,ge=u}Pu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Pu(e)}}function Pu(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&uu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&xr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ge||t.flags&512&&rs(t)}catch(g){X(t,t.return,g)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function _u(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function zu(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vo(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){X(t,i,a)}}var o=t.return;try{rs(t)}catch(a){X(t,o,a)}break;case 5:var l=t.return;try{rs(t)}catch(a){X(t,l,a)}}}catch(a){X(t,t.return,a)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var u0=Math.ceil,Yi=mt.ReactCurrentDispatcher,qs=mt.ReactCurrentOwner,Be=mt.ReactCurrentBatchConfig,O=0,le=null,te=null,de=0,Te=0,xn=Bt(0),re=0,Tr=null,tn=0,yo=0,ea=0,dr=null,Ee=null,ta=0,Nn=1/0,lt=null,Zi=!1,ls=null,$t=null,oi=!1,kt=null,qi=0,fr=0,ss=null,Pi=-1,_i=0;function we(){return O&6?Z():Pi!==-1?Pi:Pi=Z()}function Lt(e){return e.mode&1?O&2&&de!==0?de&-de:Gp.transition!==null?(_i===0&&(_i=Dc()),_i):(e=A,e!==0||(e=window.event,e=e===void 0?16:Qc(e.type)),e):1}function Xe(e,t,n,r){if(50<fr)throw fr=0,ss=null,Error(S(185));Or(e,n,r),(!(O&2)||e!==le)&&(e===le&&(!(O&2)&&(yo|=n),re===4&&Ct(e,de)),ze(e,r),n===1&&O===0&&!(t.mode&1)&&(Nn=Z()+500,ho&&Ht()))}function ze(e,t){var n=e.callbackNode;G1(e,t);var r=Oi(e,e===le?de:0);if(r===0)n!==null&&Ia(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ia(n),t===1)e.tag===0?Qp(Ru.bind(null,e)):cd(Ru.bind(null,e)),Bp(function(){!(O&6)&&Ht()}),n=null;else{switch(Uc(r)){case 1:n=_s;break;case 4:n=Oc;break;case 16:n=Mi;break;case 536870912:n=Ic;break;default:n=Mi}n=cf(n,nf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nf(e,t){if(Pi=-1,_i=0,O&6)throw Error(S(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=Oi(e,e===le?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=eo(e,r);else{t=r;var i=O;O|=2;var o=of();(le!==e||de!==t)&&(lt=null,Nn=Z()+500,Xt(e,t));do try{f0();break}catch(s){rf(e,s)}while(1);As(),Yi.current=o,O=i,te!==null?t=0:(le=null,de=0,t=re)}if(t!==0){if(t===2&&(i=Fl(e),i!==0&&(r=i,t=as(e,i))),t===1)throw n=Tr,Xt(e,0),Ct(e,r),ze(e,Z()),n;if(t===6)Ct(e,r);else{if(i=e.current.alternate,!(r&30)&&!c0(i)&&(t=eo(e,r),t===2&&(o=Fl(e),o!==0&&(r=o,t=as(e,o))),t===1))throw n=Tr,Xt(e,0),Ct(e,r),ze(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Gt(e,Ee,lt);break;case 3:if(Ct(e,r),(r&130023424)===r&&(t=ta+500-Z(),10<t)){if(Oi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hl(Gt.bind(null,e,Ee,lt),t);break}Gt(e,Ee,lt);break;case 4:if(Ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Je(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u0(r/1960))-r,10<r){e.timeoutHandle=Hl(Gt.bind(null,e,Ee,lt),r);break}Gt(e,Ee,lt);break;case 5:Gt(e,Ee,lt);break;default:throw Error(S(329))}}}return ze(e,Z()),e.callbackNode===n?nf.bind(null,e):null}function as(e,t){var n=dr;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=eo(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&us(t)),e}function us(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function c0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ye(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ct(e,t){for(t&=~ea,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Ru(e){if(O&6)throw Error(S(327));jn();var t=Oi(e,0);if(!(t&1))return ze(e,Z()),null;var n=eo(e,t);if(e.tag!==0&&n===2){var r=Fl(e);r!==0&&(t=r,n=as(e,r))}if(n===1)throw n=Tr,Xt(e,0),Ct(e,t),ze(e,Z()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,Ee,lt),ze(e,Z()),null}function na(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Nn=Z()+500,ho&&Ht())}}function nn(e){kt!==null&&kt.tag===0&&!(O&6)&&jn();var t=O;O|=1;var n=Be.transition,r=A;try{if(Be.transition=null,A=1,e)return e()}finally{A=r,Be.transition=n,O=t,!(O&6)&&Ht()}}function ra(){Te=xn.current,Q(xn)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ap(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Is(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bi();break;case 3:$n(),Q(Pe),Q(ve),Gs();break;case 5:Qs(r);break;case 4:$n();break;case 13:Q(K);break;case 19:Q(K);break;case 10:Bs(r.type._context);break;case 22:case 23:ra()}n=n.return}if(le=e,te=e=Nt(e.current,null),de=Te=t,re=0,Tr=null,ea=yo=tn=0,Ee=dr=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}bt=null}return e}function rf(e,t){do{var n=te;try{if(As(),ki.current=Xi,Ji){for(var r=b.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ji=!1}if(en=0,oe=ne=b=null,ur=!1,_r=0,qs.current=null,n===null||n.return===null){re=1,Tr=t,te=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=de,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=gu(l);if(w!==null){w.flags&=-257,vu(w,l,s,o,t),w.mode&1&&mu(o,u,t),t=w,a=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(a),t.updateQueue=v}else y.add(a);break e}else{if(!(t&1)){mu(o,u,t),ia();break e}a=Error(S(426))}}else if(G&&s.mode&1){var P=gu(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),vu(P,l,s,o,t),Ds(Ln(a,s));break e}}o=a=Ln(a,s),re!==4&&(re=2),dr===null?dr=[o]:dr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ad(o,a,t);au(o,f);break e;case 1:s=a;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&($t===null||!$t.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Bd(o,s,t);au(o,x);break e}}o=o.return}while(o!==null)}sf(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function of(){var e=Yi.current;return Yi.current=Xi,e===null?Xi:e}function ia(){(re===0||re===3||re===2)&&(re=4),le===null||!(tn&268435455)&&!(yo&268435455)||Ct(le,de)}function eo(e,t){var n=O;O|=2;var r=of();(le!==e||de!==t)&&(lt=null,Xt(e,t));do try{d0();break}catch(i){rf(e,i)}while(1);if(As(),O=n,Yi.current=r,te!==null)throw Error(S(261));return le=null,de=0,re}function d0(){for(;te!==null;)lf(te)}function f0(){for(;te!==null&&!I1();)lf(te)}function lf(e){var t=uf(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?sf(e):te=t,qs.current=null}function sf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=o0(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=i0(n,t,Te),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Gt(e,t,n){var r=A,i=Be.transition;try{Be.transition=null,A=1,p0(e,t,n,r)}finally{Be.transition=i,A=r}return null}function p0(e,t,n,r){do jn();while(kt!==null);if(O&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(K1(e,o),e===le&&(te=le=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oi||(oi=!0,cf(Mi,function(){return jn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Be.transition,Be.transition=null;var l=A;A=1;var s=O;O|=4,qs.current=null,s0(e,n),ef(n,e),Np(Al),Ii=!!Ul,Al=Ul=null,e.current=n,a0(n),D1(),O=s,A=l,Be.transition=o}else e.current=n;if(oi&&(oi=!1,kt=e,qi=i),o=e.pendingLanes,o===0&&($t=null),B1(n.stateNode),ze(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zi)throw Zi=!1,e=ls,ls=null,e;return qi&1&&e.tag!==0&&jn(),o=e.pendingLanes,o&1?e===ss?fr++:(fr=0,ss=e):fr=0,Ht(),null}function jn(){if(kt!==null){var e=Uc(qi),t=Be.transition,n=A;try{if(Be.transition=null,A=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,qi=0,O&6)throw Error(S(331));var i=O;for(O|=4,z=e.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(z=u;z!==null;){var h=z;switch(h.tag){case 0:case 11:case 15:cr(8,h,o)}var m=h.child;if(m!==null)m.return=h,z=m;else for(;z!==null;){h=z;var g=h.sibling,w=h.return;if(Yd(h),h===u){z=null;break}if(g!==null){g.return=w,z=g;break}z=w}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var P=v.sibling;v.sibling=null,v=P}while(v!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:cr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,z=f;break e}z=o.return}}var c=e.current;for(z=c;z!==null;){l=z;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,z=p;else e:for(l=c;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:vo(9,s)}}catch(E){X(s,s.return,E)}if(s===l){z=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,z=x;break e}z=s.return}}if(O=i,Ht(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(ao,e)}catch{}r=!0}return r}finally{A=n,Be.transition=t}}return!1}function Tu(e,t,n){t=Ln(n,t),t=Ad(e,t,1),e=Tt(e,t,1),t=we(),e!==null&&(Or(e,1,t),ze(e,t))}function X(e,t,n){if(e.tag===3)Tu(e,e,n);else for(;t!==null;){if(t.tag===3){Tu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=Ln(n,e),e=Bd(t,e,1),t=Tt(t,e,1),e=we(),t!==null&&(Or(t,1,e),ze(t,e));break}}t=t.return}}function h0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(de&n)===n&&(re===4||re===3&&(de&130023424)===de&&500>Z()-ta?Xt(e,0):ea|=n),ze(e,t)}function af(e,t){t===0&&(e.mode&1?(t=Jr,Jr<<=1,!(Jr&130023424)&&(Jr=4194304)):t=1);var n=we();e=pt(e,t),e!==null&&(Or(e,t,n),ze(e,n))}function m0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),af(e,n)}function g0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),af(e,n)}var uf;uf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,r0(e,t,n);je=!!(e.flags&131072)}else je=!1,G&&t.flags&1048576&&dd(t,Wi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ji(e,t),e=t.pendingProps;var i=zn(t,ve.current);En(t,n),i=bs(null,t,r,e,i,n);var o=Js();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,Hi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vs(t),i.updater=mo,t.stateNode=i,i._reactInternals=t,Jl(t,r,e,n),t=Zl(null,t,r,!0,o,n)):(t.tag=0,G&&o&&Os(t),xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ji(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=y0(r),e=Ge(r,e),i){case 0:t=Yl(null,t,r,e,n);break e;case 1:t=wu(null,t,r,e,n);break e;case 11:t=yu(null,t,r,e,n);break e;case 14:t=xu(null,t,r,Ge(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),Yl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),wu(e,t,r,i,n);case 3:e:{if(Qd(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,md(e,t),Ki(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ln(Error(S(423)),t),t=Cu(e,t,r,n,i);break e}else if(r!==i){i=Ln(Error(S(424)),t),t=Cu(e,t,r,n,i);break e}else for($e=Rt(t.stateNode.containerInfo.firstChild),Le=t,G=!0,be=null,n=xd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rn(),r===i){t=ht(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return wd(t),e===null&&Gl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Bl(r,i)?l=null:o!==null&&Bl(r,o)&&(t.flags|=32),Wd(e,t),xe(e,t,l,n),t.child;case 6:return e===null&&Gl(t),null;case 13:return Gd(e,t,n);case 4:return Ws(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),yu(e,t,r,i,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,V(Qi,r._currentValue),r._currentValue=l,o!==null)if(Ye(o.value,l)){if(o.children===i.children&&!Pe.current){t=ht(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=ct(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kl(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Kl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,En(t,n),i=He(i),r=r(i),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,i=Ge(r,t.pendingProps),i=Ge(r.type,i),xu(e,t,r,i,n);case 15:return Hd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ge(r,i),ji(e,t),t.tag=1,_e(r)?(e=!0,Hi(t)):e=!1,En(t,n),vd(t,r,i),Jl(t,r,i,n),Zl(null,t,r,!0,e,n);case 19:return Kd(e,t,n);case 22:return Vd(e,t,n)}throw Error(S(156,t.tag))};function cf(e,t){return Mc(e,t)}function v0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,n,r){return new v0(e,t,n,r)}function oa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y0(e){if(typeof e=="function")return oa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Es)return 11;if(e===js)return 14}return 2}function Nt(e,t){var n=e.alternate;return n===null?(n=Ae(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")oa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case un:return Yt(n.children,i,o,t);case ks:l=8,i|=8;break;case xl:return e=Ae(12,n,t,i|2),e.elementType=xl,e.lanes=o,e;case wl:return e=Ae(13,n,t,i),e.elementType=wl,e.lanes=o,e;case Cl:return e=Ae(19,n,t,i),e.elementType=Cl,e.lanes=o,e;case yc:return xo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gc:l=10;break e;case vc:l=9;break e;case Es:l=11;break e;case js:l=14;break e;case yt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ae(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yt(e,t,n,r){return e=Ae(7,e,r,t),e.lanes=n,e}function xo(e,t,n,r){return e=Ae(22,e,r,t),e.elementType=yc,e.lanes=n,e.stateNode={isHidden:!1},e}function fl(e,t,n){return e=Ae(6,e,null,t),e.lanes=n,e}function pl(e,t,n){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function x0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function la(e,t,n,r,i,o,l,s,a){return e=new x0(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ae(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vs(o),e}function w0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:an,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function df(e){if(!e)return Ut;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(_e(n))return ud(e,n,t)}return t}function ff(e,t,n,r,i,o,l,s,a){return e=la(n,r,!0,e,i,o,l,s,a),e.context=df(null),n=e.current,r=we(),i=Lt(n),o=ct(r,i),o.callback=t??null,Tt(n,o,i),e.current.lanes=i,Or(e,i,r),ze(e,r),e}function wo(e,t,n,r){var i=t.current,o=we(),l=Lt(i);return n=df(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(i,t,l),e!==null&&(Xe(e,i,l,o),Si(e,i,l)),l}function to(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sa(e,t){$u(e,t),(e=e.alternate)&&$u(e,t)}function C0(){return null}var pf=typeof reportError=="function"?reportError:function(e){console.error(e)};function aa(e){this._internalRoot=e}Co.prototype.render=aa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));wo(e,t,null,null)};Co.prototype.unmount=aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){wo(null,e,null,null)}),t[ft]=null}};function Co(e){this._internalRoot=e}Co.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&Wc(e)}};function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lu(){}function S0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=to(l);o.call(u)}}var l=ff(t,r,e,0,null,!1,!1,"",Lu);return e._reactRootContainer=l,e[ft]=l.current,Sr(e.nodeType===8?e.parentNode:e),nn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=to(a);s.call(u)}}var a=la(e,0,!1,null,null,!1,!1,"",Lu);return e._reactRootContainer=a,e[ft]=a.current,Sr(e.nodeType===8?e.parentNode:e),nn(function(){wo(t,a,n,r)}),a}function ko(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=to(l);s.call(a)}}wo(t,l,e,i)}else l=S0(n,t,e,i,r);return to(l)}Ac=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tr(t.pendingLanes);n!==0&&(zs(t,n|1),ze(t,Z()),!(O&6)&&(Nn=Z()+500,Ht()))}break;case 13:nn(function(){var r=pt(e,1);if(r!==null){var i=we();Xe(r,e,1,i)}}),sa(e,1)}};Rs=function(e){if(e.tag===13){var t=pt(e,134217728);if(t!==null){var n=we();Xe(t,e,134217728,n)}sa(e,134217728)}};Bc=function(e){if(e.tag===13){var t=Lt(e),n=pt(e,t);if(n!==null){var r=we();Xe(n,e,t,r)}sa(e,t)}};Hc=function(){return A};Vc=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};$l=function(e,t,n){switch(t){case"input":if(El(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=po(r);if(!i)throw Error(S(90));wc(r),El(r,i)}}}break;case"textarea":Sc(e,n);break;case"select":t=n.value,t!=null&&wn(e,!!n.multiple,t,!1)}};Rc=na;Tc=nn;var k0={usingClientEntryPoint:!1,Events:[Dr,pn,po,_c,zc,na]},Yn={findFiberByHostInstance:Kt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},E0={bundleType:Yn.bundleType,version:Yn.version,rendererPackageName:Yn.rendererPackageName,rendererConfig:Yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nc(e),e===null?null:e.stateNode},findFiberByHostInstance:Yn.findFiberByHostInstance||C0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{ao=li.inject(E0),rt=li}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k0;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(t))throw Error(S(200));return w0(e,t,null,n)};Me.createRoot=function(e,t){if(!ua(e))throw Error(S(299));var n=!1,r="",i=pf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=la(e,1,!1,null,null,n,!1,r,i),e[ft]=t.current,Sr(e.nodeType===8?e.parentNode:e),new aa(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Nc(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return nn(e)};Me.hydrate=function(e,t,n){if(!So(t))throw Error(S(200));return ko(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!ua(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=pf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ff(t,null,e,1,n??null,i,!1,o,l),e[ft]=t.current,Sr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Co(t)};Me.render=function(e,t,n){if(!So(t))throw Error(S(200));return ko(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!So(e))throw Error(S(40));return e._reactRootContainer?(nn(function(){ko(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Me.unstable_batchedUpdates=na;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!So(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ko(e,t,n,!1,r)};Me.version="18.2.0-next-9e3b772b8-20220608";function hf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hf)}catch(e){console.error(e)}}hf(),dc.exports=Me;var j0=dc.exports,Nu=j0;vl.createRoot=Nu.createRoot,vl.hydrateRoot=Nu.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $r(){return $r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$r.apply(this,arguments)}var Et;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Et||(Et={}));const Fu="popstate";function P0(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:s="",hash:a=""}=ln(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),cs("",{pathname:l,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let a=i.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof o=="string"?o:no(o))}function r(i,o){Eo(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return z0(t,n,r,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Eo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _0(){return Math.random().toString(36).substr(2,8)}function Mu(e,t){return{usr:e.state,key:e.key,idx:t}}function cs(e,t,n,r){return n===void 0&&(n=null),$r({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ln(t):t,{state:n,key:t&&t.key||r||_0()})}function no(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ln(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function z0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Et.Pop,a=null,u=h();u==null&&(u=0,l.replaceState($r({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function m(){s=Et.Pop;let P=h(),f=P==null?null:P-u;u=P,a&&a({action:s,location:v.location,delta:f})}function g(P,f){s=Et.Push;let c=cs(v.location,P,f);n&&n(c,P),u=h()+1;let p=Mu(c,u),x=v.createHref(c);try{l.pushState(p,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(x)}o&&a&&a({action:s,location:v.location,delta:1})}function w(P,f){s=Et.Replace;let c=cs(v.location,P,f);n&&n(c,P),u=h();let p=Mu(c,u),x=v.createHref(c);l.replaceState(p,"",x),o&&a&&a({action:s,location:v.location,delta:0})}function y(P){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof P=="string"?P:no(P);return q(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let v={get action(){return s},get location(){return e(i,l)},listen(P){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Fu,m),a=P,()=>{i.removeEventListener(Fu,m),a=null}},createHref(P){return t(i,P)},createURL:y,encodeLocation(P){let f=y(P);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:w,go(P){return l.go(P)}};return v}var Ou;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ou||(Ou={}));function R0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ln(t):t,i=ca(r.pathname||"/",n);if(i==null)return null;let o=mf(e);T0(o);let l=null;for(let s=0;l==null&&s<o.length;++s)l=U0(o[s],H0(i));return l}function mf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};a.relativePath.startsWith("/")&&(q(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Ft([r,a.relativePath]),h=n.concat(a);o.children&&o.children.length>0&&(q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),mf(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:I0(u,o.index),routesMeta:h})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let a of gf(o.path))i(o,l,a)}),t}function gf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=gf(r.join("/")),s=[];return s.push(...l.map(a=>a===""?o:[o,a].join("/"))),i&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function T0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:D0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $0=/^:\w+$/,L0=3,N0=2,F0=1,M0=10,O0=-2,Iu=e=>e==="*";function I0(e,t){let n=e.split("/"),r=n.length;return n.some(Iu)&&(r+=O0),t&&(r+=N0),n.filter(i=>!Iu(i)).reduce((i,o)=>i+($0.test(o)?L0:o===""?F0:M0),r)}function D0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function U0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],a=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",h=A0({path:s.relativePath,caseSensitive:s.caseSensitive,end:a},u);if(!h)return null;Object.assign(r,h.params);let m=s.route;o.push({params:r,pathname:Ft([i,h.pathname]),pathnameBase:G0(Ft([i,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(i=Ft([i,h.pathnameBase]))}return o}function A0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=B0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,h,m)=>{if(h==="*"){let g=s[m]||"";l=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return u[h]=V0(s[m]||"",h),u},{}),pathname:o,pathnameBase:l,pattern:e}}function B0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Eo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function H0(e){try{return decodeURI(e)}catch(t){return Eo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function V0(e,t){try{return decodeURIComponent(e)}catch(n){return Eo(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ca(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function W0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ln(e):e;return{pathname:n?n.startsWith("/")?n:Q0(n,t):t,search:K0(r),hash:b0(i)}}function Q0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function da(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fa(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ln(e):(i=$r({},e),q(!i.pathname||!i.pathname.includes("?"),hl("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),hl("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),hl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(r||l==null)s=n;else{let m=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}s=m>=0?t[m]:"/"}let a=W0(i,s),u=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||h)&&(a.pathname+="/"),a}const Ft=e=>e.join("/").replace(/\/\/+/g,"/"),G0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),K0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,b0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function J0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vf=["post","put","patch","delete"];new Set(vf);const X0=["get",...vf];new Set(X0);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}const pa=j.createContext(null),Y0=j.createContext(null),Dn=j.createContext(null),jo=j.createContext(null),gt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),yf=j.createContext(null);function Z0(e,t){let{relative:n}=t===void 0?{}:t;Un()||q(!1);let{basename:r,navigator:i}=j.useContext(Dn),{hash:o,pathname:l,search:s}=Cf(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:Ft([r,l])),i.createHref({pathname:a,search:s,hash:o})}function Un(){return j.useContext(jo)!=null}function Ar(){return Un()||q(!1),j.useContext(jo).location}function xf(e){j.useContext(Dn).static||j.useLayoutEffect(e)}function wf(){let{isDataRoute:e}=j.useContext(gt);return e?fh():q0()}function q0(){Un()||q(!1);let e=j.useContext(pa),{basename:t,navigator:n}=j.useContext(Dn),{matches:r}=j.useContext(gt),{pathname:i}=Ar(),o=JSON.stringify(da(r).map(a=>a.pathnameBase)),l=j.useRef(!1);return xf(()=>{l.current=!0}),j.useCallback(function(a,u){if(u===void 0&&(u={}),!l.current)return;if(typeof a=="number"){n.go(a);return}let h=fa(a,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Ft([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,o,i,e])}function eh(){let{matches:e}=j.useContext(gt),t=e[e.length-1];return t?t.params:{}}function Cf(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=j.useContext(gt),{pathname:i}=Ar(),o=JSON.stringify(da(r).map(l=>l.pathnameBase));return j.useMemo(()=>fa(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function th(e,t){return nh(e,t)}function nh(e,t,n){Un()||q(!1);let{navigator:r}=j.useContext(Dn),{matches:i}=j.useContext(gt),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let a=Ar(),u;if(t){var h;let v=typeof t=="string"?ln(t):t;s==="/"||(h=v.pathname)!=null&&h.startsWith(s)||q(!1),u=v}else u=a;let m=u.pathname||"/",g=s==="/"?m:m.slice(s.length)||"/",w=R0(e,{pathname:g}),y=sh(w&&w.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:Ft([s,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?s:Ft([s,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&y?j.createElement(jo.Provider,{value:{location:ro({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Et.Pop}},y):y}function rh(){let e=dh(),t=J0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,o)}const ih=j.createElement(rh,null);class oh extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?j.createElement(gt.Provider,{value:this.props.routeContext},j.createElement(yf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lh(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(pa);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(gt.Provider,{value:t},r)}function sh(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let s=o.findIndex(a=>a.route.id&&(l==null?void 0:l[a.route.id]));s>=0||q(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,a,u)=>{let h=a.route.id?l==null?void 0:l[a.route.id]:null,m=null;n&&(m=a.route.errorElement||ih);let g=t.concat(o.slice(0,u+1)),w=()=>{let y;return h?y=m:a.route.Component?y=j.createElement(a.route.Component,null):a.route.element?y=a.route.element:y=s,j.createElement(lh,{match:a,routeContext:{outlet:s,matches:g,isDataRoute:n!=null},children:y})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?j.createElement(oh,{location:n.location,revalidation:n.revalidation,component:m,error:h,children:w(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):w()},null)}var Sf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Sf||{}),io=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(io||{});function ah(e){let t=j.useContext(pa);return t||q(!1),t}function uh(e){let t=j.useContext(Y0);return t||q(!1),t}function ch(e){let t=j.useContext(gt);return t||q(!1),t}function kf(e){let t=ch(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function dh(){var e;let t=j.useContext(yf),n=uh(io.UseRouteError),r=kf(io.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function fh(){let{router:e}=ah(Sf.UseNavigateStable),t=kf(io.UseNavigateStable),n=j.useRef(!1);return xf(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ro({fromRouteId:t},o)))},[e,t])}function ph(e){let{to:t,replace:n,state:r,relative:i}=e;Un()||q(!1);let{matches:o}=j.useContext(gt),{pathname:l}=Ar(),s=wf(),a=fa(t,da(o).map(h=>h.pathnameBase),l,i==="path"),u=JSON.stringify(a);return j.useEffect(()=>s(JSON.parse(u),{replace:n,state:r,relative:i}),[s,u,i,n,r]),null}function rr(e){q(!1)}function hh(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Et.Pop,navigator:o,static:l=!1}=e;Un()&&q(!1);let s=t.replace(/^\/*/,"/"),a=j.useMemo(()=>({basename:s,navigator:o,static:l}),[s,o,l]);typeof r=="string"&&(r=ln(r));let{pathname:u="/",search:h="",hash:m="",state:g=null,key:w="default"}=r,y=j.useMemo(()=>{let v=ca(u,s);return v==null?null:{location:{pathname:v,search:h,hash:m,state:g,key:w},navigationType:i}},[s,u,h,m,g,w,i]);return y==null?null:j.createElement(Dn.Provider,{value:a},j.createElement(jo.Provider,{children:n,value:y}))}function mh(e){let{children:t,location:n}=e;return th(ds(t),n)}new Promise(()=>{});function ds(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,ds(r.props.children,o));return}r.type!==rr&&q(!1),!r.props.index||!r.props.children||q(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ds(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fs.apply(this,arguments)}function gh(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function vh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function yh(e,t){return e.button===0&&(!t||t==="_self")&&!vh(e)}const xh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],wh="startTransition",Du=gl[wh];function Ch(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=P0({window:i,v5Compat:!0}));let l=o.current,[s,a]=j.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},h=j.useCallback(m=>{u&&Du?Du(()=>a(m)):a(m)},[a,u]);return j.useLayoutEffect(()=>l.listen(h),[l,h]),j.createElement(hh,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l})}const Sh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mt=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:a,to:u,preventScrollReset:h}=t,m=gh(t,xh),{basename:g}=j.useContext(Dn),w,y=!1;if(typeof u=="string"&&kh.test(u)&&(w=u,Sh))try{let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),x=ca(p.pathname,g);p.origin===c.origin&&x!=null?u=x+p.search+p.hash:y=!0}catch{}let v=Z0(u,{relative:i}),P=Eh(u,{replace:l,state:s,target:a,preventScrollReset:h,relative:i});function f(c){r&&r(c),c.defaultPrevented||P(c)}return j.createElement("a",fs({},m,{href:w||v,onClick:y||o?r:f,ref:n,target:a}))});var Uu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Uu||(Uu={}));var Au;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Au||(Au={}));function Eh(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l}=t===void 0?{}:t,s=wf(),a=Ar(),u=Cf(e,{relative:l});return j.useCallback(h=>{if(yh(h,n)){h.preventDefault();let m=r!==void 0?r:no(a)===no(u);s(e,{replace:m,state:i,preventScrollReset:o,relative:l})}},[a,s,u,r,i,n,e,o,l])}function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ps.apply(this,arguments)}function Ef(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var jh=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ph=Ef(function(e){return jh.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function _h(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function zh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Rh=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(zh(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=_h(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),me="-ms-",oo="-moz-",D="-webkit-",jf="comm",ha="rule",ma="decl",Th="@import",Pf="@keyframes",$h="@layer",Lh=Math.abs,Po=String.fromCharCode,Nh=Object.assign;function Fh(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function _f(e){return e.trim()}function Mh(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function hs(e,t){return e.indexOf(t)}function ue(e,t){return e.charCodeAt(t)|0}function Lr(e,t,n){return e.slice(t,n)}function et(e){return e.length}function ga(e){return e.length}function si(e,t){return t.push(e),e}function Oh(e,t){return e.map(t).join("")}var _o=1,Fn=1,zf=0,Re=0,ee=0,An="";function zo(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:_o,column:Fn,length:l,return:""}}function Zn(e,t){return Nh(zo("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ih(){return ee}function Dh(){return ee=Re>0?ue(An,--Re):0,Fn--,ee===10&&(Fn=1,_o--),ee}function Ne(){return ee=Re<zf?ue(An,Re++):0,Fn++,ee===10&&(Fn=1,_o++),ee}function ot(){return ue(An,Re)}function Ri(){return Re}function Br(e,t){return Lr(An,e,t)}function Nr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rf(e){return _o=Fn=1,zf=et(An=e),Re=0,[]}function Tf(e){return An="",e}function Ti(e){return _f(Br(Re-1,ms(e===91?e+2:e===40?e+1:e)))}function Uh(e){for(;(ee=ot())&&ee<33;)Ne();return Nr(e)>2||Nr(ee)>3?"":" "}function Ah(e,t){for(;--t&&Ne()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Br(e,Ri()+(t<6&&ot()==32&&Ne()==32))}function ms(e){for(;Ne();)switch(ee){case e:return Re;case 34:case 39:e!==34&&e!==39&&ms(ee);break;case 40:e===41&&ms(e);break;case 92:Ne();break}return Re}function Bh(e,t){for(;Ne()&&e+ee!==47+10;)if(e+ee===42+42&&ot()===47)break;return"/*"+Br(t,Re-1)+"*"+Po(e===47?e:Ne())}function Hh(e){for(;!Nr(ot());)Ne();return Br(e,Re)}function Vh(e){return Tf($i("",null,null,null,[""],e=Rf(e),0,[0],e))}function $i(e,t,n,r,i,o,l,s,a){for(var u=0,h=0,m=l,g=0,w=0,y=0,v=1,P=1,f=1,c=0,p="",x=i,E=o,_=r,k=p;P;)switch(y=c,c=Ne()){case 40:if(y!=108&&ue(k,m-1)==58){hs(k+=U(Ti(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:k+=Ti(c);break;case 9:case 10:case 13:case 32:k+=Uh(y);break;case 92:k+=Ah(Ri()-1,7);continue;case 47:switch(ot()){case 42:case 47:si(Wh(Bh(Ne(),Ri()),t,n),a);break;default:k+="/"}break;case 123*v:s[u++]=et(k)*f;case 125*v:case 59:case 0:switch(c){case 0:case 125:P=0;case 59+h:f==-1&&(k=U(k,/\f/g,"")),w>0&&et(k)-m&&si(w>32?Hu(k+";",r,n,m-1):Hu(U(k," ","")+";",r,n,m-2),a);break;case 59:k+=";";default:if(si(_=Bu(k,t,n,u,h,i,s,p,x=[],E=[],m),o),c===123)if(h===0)$i(k,t,_,_,x,o,m,s,E);else switch(g===99&&ue(k,3)===110?100:g){case 100:case 108:case 109:case 115:$i(e,_,_,r&&si(Bu(e,_,_,0,0,i,s,p,i,x=[],m),E),i,E,m,s,r?x:E);break;default:$i(k,_,_,_,[""],E,0,s,E)}}u=h=w=0,v=f=1,p=k="",m=l;break;case 58:m=1+et(k),w=y;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&Dh()==125)continue}switch(k+=Po(c),c*v){case 38:f=h>0?1:(k+="\f",-1);break;case 44:s[u++]=(et(k)-1)*f,f=1;break;case 64:ot()===45&&(k+=Ti(Ne())),g=ot(),h=m=et(p=k+=Hh(Ri())),c++;break;case 45:y===45&&et(k)==2&&(v=0)}}return o}function Bu(e,t,n,r,i,o,l,s,a,u,h){for(var m=i-1,g=i===0?o:[""],w=ga(g),y=0,v=0,P=0;y<r;++y)for(var f=0,c=Lr(e,m+1,m=Lh(v=l[y])),p=e;f<w;++f)(p=_f(v>0?g[f]+" "+c:U(c,/&\f/g,g[f])))&&(a[P++]=p);return zo(e,t,n,i===0?ha:s,a,u,h)}function Wh(e,t,n){return zo(e,t,n,jf,Po(Ih()),Lr(e,2,-2),0)}function Hu(e,t,n,r){return zo(e,t,n,ma,Lr(e,0,r),Lr(e,r+1,-1),r)}function Pn(e,t){for(var n="",r=ga(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Qh(e,t,n,r){switch(e.type){case $h:if(e.children.length)break;case Th:case ma:return e.return=e.return||e.value;case jf:return"";case Pf:return e.return=e.value+"{"+Pn(e.children,r)+"}";case ha:e.value=e.props.join(",")}return et(n=Pn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Gh(e){var t=ga(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function Kh(e){return function(t){t.root||(t=t.return)&&e(t)}}var bh=function(t,n,r){for(var i=0,o=0;i=o,o=ot(),i===38&&o===12&&(n[r]=1),!Nr(o);)Ne();return Br(t,Re)},Jh=function(t,n){var r=-1,i=44;do switch(Nr(i)){case 0:i===38&&ot()===12&&(n[r]=1),t[r]+=bh(Re-1,n,r);break;case 2:t[r]+=Ti(i);break;case 4:if(i===44){t[++r]=ot()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Po(i)}while(i=Ne());return t},Xh=function(t,n){return Tf(Jh(Rf(t),n))},Vu=new WeakMap,Yh=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Vu.get(r))&&!i){Vu.set(t,!0);for(var o=[],l=Xh(n,o),s=r.props,a=0,u=0;a<l.length;a++)for(var h=0;h<s.length;h++,u++)t.props[u]=o[a]?l[a].replace(/&\f/g,s[h]):s[h]+" "+l[a]}}},Zh=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function $f(e,t){switch(Fh(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+oo+e+me+e+e;case 6828:case 4268:return D+e+me+e+e;case 6165:return D+e+me+"flex-"+e+e;case 5187:return D+e+U(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+me+"flex-$1$2")+e;case 5443:return D+e+me+"flex-item-"+U(e,/flex-|-self/,"")+e;case 4675:return D+e+me+"flex-line-pack"+U(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+me+U(e,"shrink","negative")+e;case 5292:return D+e+me+U(e,"basis","preferred-size")+e;case 6060:return D+"box-"+U(e,"-grow","")+D+e+me+U(e,"grow","positive")+e;case 4554:return D+U(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(et(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+oo+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~hs(e,"stretch")?$f(U(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ue(e,t+1)!==115)break;case 6444:switch(ue(e,et(e)-3-(~hs(e,"!important")&&10))){case 107:return U(e,":",":"+D)+e;case 101:return U(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(ue(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+me+"$2box$3")+e}break;case 5936:switch(ue(e,t+11)){case 114:return D+e+me+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+me+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+me+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+me+e+e}return e}var qh=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case ma:t.return=$f(t.value,t.length);break;case Pf:return Pn([Zn(t,{value:U(t.value,"@","@"+D)})],i);case ha:if(t.length)return Oh(t.props,function(o){switch(Mh(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Pn([Zn(t,{props:[U(o,/:(read-\w+)/,":"+oo+"$1")]})],i);case"::placeholder":return Pn([Zn(t,{props:[U(o,/:(plac\w+)/,":"+D+"input-$1")]}),Zn(t,{props:[U(o,/:(plac\w+)/,":"+oo+"$1")]}),Zn(t,{props:[U(o,/:(plac\w+)/,me+"input-$1")]})],i)}return""})}},em=[qh],tm=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var P=v.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||em,o={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var P=v.getAttribute("data-emotion").split(" "),f=1;f<P.length;f++)o[P[f]]=!0;s.push(v)});var a,u=[Yh,Zh];{var h,m=[Qh,Kh(function(v){h.insert(v)})],g=Gh(u.concat(i,m)),w=function(P){return Pn(Vh(P),g)};a=function(P,f,c,p){h=c,w(P?P+"{"+f.styles+"}":f.styles),p&&(y.inserted[f.name]=!0)}}var y={key:n,sheet:new Rh({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return y.sheet.hydrate(s),y},Lf={exports:{}},B={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=typeof Symbol=="function"&&Symbol.for,va=se?Symbol.for("react.element"):60103,ya=se?Symbol.for("react.portal"):60106,Ro=se?Symbol.for("react.fragment"):60107,To=se?Symbol.for("react.strict_mode"):60108,$o=se?Symbol.for("react.profiler"):60114,Lo=se?Symbol.for("react.provider"):60109,No=se?Symbol.for("react.context"):60110,xa=se?Symbol.for("react.async_mode"):60111,Fo=se?Symbol.for("react.concurrent_mode"):60111,Mo=se?Symbol.for("react.forward_ref"):60112,Oo=se?Symbol.for("react.suspense"):60113,nm=se?Symbol.for("react.suspense_list"):60120,Io=se?Symbol.for("react.memo"):60115,Do=se?Symbol.for("react.lazy"):60116,rm=se?Symbol.for("react.block"):60121,im=se?Symbol.for("react.fundamental"):60117,om=se?Symbol.for("react.responder"):60118,lm=se?Symbol.for("react.scope"):60119;function Ie(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case va:switch(e=e.type,e){case xa:case Fo:case Ro:case $o:case To:case Oo:return e;default:switch(e=e&&e.$$typeof,e){case No:case Mo:case Do:case Io:case Lo:return e;default:return t}}case ya:return t}}}function Nf(e){return Ie(e)===Fo}B.AsyncMode=xa;B.ConcurrentMode=Fo;B.ContextConsumer=No;B.ContextProvider=Lo;B.Element=va;B.ForwardRef=Mo;B.Fragment=Ro;B.Lazy=Do;B.Memo=Io;B.Portal=ya;B.Profiler=$o;B.StrictMode=To;B.Suspense=Oo;B.isAsyncMode=function(e){return Nf(e)||Ie(e)===xa};B.isConcurrentMode=Nf;B.isContextConsumer=function(e){return Ie(e)===No};B.isContextProvider=function(e){return Ie(e)===Lo};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===va};B.isForwardRef=function(e){return Ie(e)===Mo};B.isFragment=function(e){return Ie(e)===Ro};B.isLazy=function(e){return Ie(e)===Do};B.isMemo=function(e){return Ie(e)===Io};B.isPortal=function(e){return Ie(e)===ya};B.isProfiler=function(e){return Ie(e)===$o};B.isStrictMode=function(e){return Ie(e)===To};B.isSuspense=function(e){return Ie(e)===Oo};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ro||e===Fo||e===$o||e===To||e===Oo||e===nm||typeof e=="object"&&e!==null&&(e.$$typeof===Do||e.$$typeof===Io||e.$$typeof===Lo||e.$$typeof===No||e.$$typeof===Mo||e.$$typeof===im||e.$$typeof===om||e.$$typeof===lm||e.$$typeof===rm)};B.typeOf=Ie;Lf.exports=B;var sm=Lf.exports,Ff=sm,am={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},um={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mf={};Mf[Ff.ForwardRef]=am;Mf[Ff.Memo]=um;var cm=!0;function dm(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Of=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||cm===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},fm=function(t,n,r){Of(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function pm(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var hm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mm=/[A-Z]|^ms/g,gm=/_EMO_([^_]+?)_([^]*?)_EMO_/g,If=function(t){return t.charCodeAt(1)===45},Wu=function(t){return t!=null&&typeof t!="boolean"},ml=Ef(function(e){return If(e)?e:e.replace(mm,"-$&").toLowerCase()}),Qu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(gm,function(r,i,o){return tt={name:i,styles:o,next:tt},i})}return hm[t]!==1&&!If(t)&&typeof n=="number"&&n!==0?n+"px":n};function Fr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return tt={name:n.name,styles:n.styles,next:tt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)tt={name:r.name,styles:r.styles,next:tt},r=r.next;var i=n.styles+";";return i}return vm(e,t,n)}case"function":{if(e!==void 0){var o=tt,l=n(e);return tt=o,Fr(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function vm(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Fr(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":Wu(l)&&(r+=ml(o)+":"+Qu(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)Wu(l[s])&&(r+=ml(o)+":"+Qu(o,l[s])+";");else{var a=Fr(e,t,l);switch(o){case"animation":case"animationName":{r+=ml(o)+":"+a+";";break}default:r+=o+"{"+a+"}"}}}return r}var Gu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,tt,Df=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";tt=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=Fr(r,n,l)):o+=l[0];for(var s=1;s<t.length;s++)o+=Fr(r,n,t[s]),i&&(o+=l[s]);Gu.lastIndex=0;for(var a="",u;(u=Gu.exec(o))!==null;)a+="-"+u[1];var h=pm(o)+a;return{name:h,styles:o,next:tt}},ym=function(t){return t()},xm=gl["useInsertionEffect"]?gl["useInsertionEffect"]:!1,wm=xm||ym,Uf=j.createContext(typeof HTMLElement<"u"?tm({key:"css"}):null);Uf.Provider;var Cm=function(t){return j.forwardRef(function(n,r){var i=j.useContext(Uf);return t(n,i,r)})},Sm=j.createContext({});function km(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Df(t)}var Em=function(){var t=km.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},jm=Ph,Pm=function(t){return t!=="theme"},Ku=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?jm:Pm},bu=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(l){return t.__emotion_forwardProp(l)&&o(l)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},_m=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Of(n,r,i),wm(function(){return fm(n,r,i)}),null},zm=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,l;n!==void 0&&(o=n.label,l=n.target);var s=bu(t,n,r),a=s||Ku(i),u=!a("as");return function(){var h=arguments,m=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&m.push("label:"+o+";"),h[0]==null||h[0].raw===void 0)m.push.apply(m,h);else{m.push(h[0][0]);for(var g=h.length,w=1;w<g;w++)m.push(h[w],h[0][w])}var y=Cm(function(v,P,f){var c=u&&v.as||i,p="",x=[],E=v;if(v.theme==null){E={};for(var _ in v)E[_]=v[_];E.theme=j.useContext(Sm)}typeof v.className=="string"?p=dm(P.registered,x,v.className):v.className!=null&&(p=v.className+" ");var k=Df(m.concat(x),P.registered,E);p+=P.key+"-"+k.name,l!==void 0&&(p+=" "+l);var T=u&&s===void 0?Ku(c):a,H={};for(var N in v)u&&N==="as"||T(N)&&(H[N]=v[N]);return H.className=p,H.ref=f,j.createElement(j.Fragment,null,j.createElement(_m,{cache:P,serialized:k,isStringTag:typeof c=="string"}),j.createElement(c,H))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=m,y.__emotion_forwardProp=s,Object.defineProperty(y,"toString",{value:function(){return"."+l}}),y.withComponent=function(v,P){return e(v,ps({},n,P,{shouldForwardProp:bu(y,P,!0)})).apply(void 0,m)},y}},Rm=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],C=zm.bind();Rm.forEach(function(e){C[e]=C(e)});var Af={exports:{}},Tm="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$m=Tm,Lm=$m;function Bf(){}function Hf(){}Hf.resetWarningCache=Bf;var Nm=function(){function e(r,i,o,l,s,a){if(a!==Lm){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Hf,resetWarningCache:Bf};return n.PropTypes=n,n};Af.exports=Nm();var Fm=Af.exports;const ce=ec(Fm),Mm=C.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: ${({visible:e})=>e?"block":"none"};
  z-index: 99;
`,Vf=({visible:e,onClose:t})=>d.jsx(Mm,{visible:e,onClick:t});Vf.propTypes={visible:ce.bool.isRequired,onClose:ce.func.isRequired};const Bn={primary:"'Ubuntu', sans-serif",secondary:'"Roboto", sans-serif',third:'"Playfair Display", serif'},$={text:{xs:`
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
    line-height: 1.5rem;
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
  `;const Ce={text:{xs:`
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
    `}};for(const e in Ce.head)Ce.head[e]+=`
  font-family: ${Bn.secondary};
  font-weight: 600;
  `;for(const e in Ce.text)Ce.text[e]+=`
  font-family: ${Bn.secondary};
  `;const Ot={text:{xs:`
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
    `}};for(const e in Ot.head)Ot.head[e]+=`
  font-family: ${Bn.third};
  font-weight: 600;
  `;for(const e in Ot.text)Ot.text[e]+=`
  font-family: ${Bn.third};
  `;const I={pink:{50:"#FDF2F8",100:"#FCE7F3",200:"#FBCFE8",300:"#F9A8D4",400:"#F472B6",500:"#EC4899",600:"#DB2777",700:"#BE185D",800:"#9D174D",900:"#831843"},stone:{50:"#FAFAF9",100:"#F5F5F4",200:"#E7E5E4",300:"#D6D3D1",400:"#A8A29E",500:"#78716C",600:"#57534E",700:"#44403C",800:"#292524",900:"#1C1917"},red:{50:"#FEF2F2",100:"#FEE2E2",200:"#FECACA",300:"#FCA5A5",400:"#F87171",500:"#EF4444",600:"#DC2626",700:"#B91C1C",800:"#991B1B",900:"#7F1D1D"},yellow:{50:"#FFFBEB",100:"#FEF3C7",200:"#FDE68A",300:"#FCD34D",400:"#FBBF24",500:"#F5B40B",600:"#D1AE00",700:"#A67D02",800:"#89610A",900:"#744F0F"},green:{50:"#ECFDF5",100:"#D1FAE5",200:"#A7F3D0",300:"#6EE7B7",400:"#34D399",500:"#10B981",600:"#059669",700:"#047857",800:"#065F46",900:"#064E3B"},blue:{50:"#EFF6FF",100:"#DBEAFE",200:"#BFDBFE",300:"#93C5FD",400:"#60A5FA",500:"#3B82F6",600:"#2563EB",700:"#1D4ED8",800:"#1E40AF",900:"#1E3A8A",1e3:"#033244"},black:{50:"#404040",100:"#303030",200:"#2F2F2F",300:"#2C2C2C",400:"#2B2B2B",500:"#202020",600:"#1C1C1C",700:"#1A1A1A",800:"#161616",900:"#111111"},tangerine:{25:"#F06529",50:"#FFFBEA",100:"#FFF1C5",200:"#FFE485",300:"#FFCF46",400:"#FFB91B",500:"#FF9500",600:"#E26E00",700:"#BB4A02",800:"#983908",900:"#7C2f0B",950:"#481600"},white:"#FFFFFF","light-gray":"#f6f6f9",gray:"#B8B8BB"},Om=C.button`
  ${$.head.xs}
  background-color: transparent;
  border: 1px solid ${I.blue[500]};
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
    background-color: ${I.blue[500]}
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`,lo=({profileURL:e})=>(lo.propTypes={profileURL:ce.string},d.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:d.jsx(Om,{children:"Contact Me"})}));C.button`
  ${$.text.xl}
  background-color: ${I.blue[700]};
  color: white;
  border: none;
  border-radius: 36px;
  height: 64px;
  padding: 16px;
  align-items: center;
  cursor: pointer;
`;const Im=C.button`
  ${Ce.text.md};
  background-color: white;
  color: black;
  border: none;
  border-radius: 1rem;
  width: 150px;
  padding: 16px;
  align-items: center;
  cursor: pointer;

   @media (max-width: 540px) {
    ${Ce.text.sm};
    width: 100%;
  }
`;var Wf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ju=jt.createContext&&jt.createContext(Wf),It=globalThis&&globalThis.__assign||function(){return It=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},It.apply(this,arguments)},Dm=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Qf(e){return e&&e.map(function(t,n){return jt.createElement(t.tag,It({key:n},t.attr),Qf(t.child))})}function ye(e){return function(t){return jt.createElement(Um,It({attr:It({},e.attr)},t),Qf(e.child))}}function Um(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=Dm(e,["attr","size","title"]),s=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),jt.createElement("svg",It({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:It(It({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&jt.createElement("title",null,o),e.children)};return Ju!==void 0?jt.createElement(Ju.Consumer,null,function(n){return t(n)}):t(Wf)}function Am(e){return ye({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(e)}function Bm(e){return ye({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(e)}const Hm=C.div`
  display: flex;
  width: 80%;
  height: 10rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid white;
`,Vm=C.h1`
  ${Ce.head.md}
  color: ${I.stone[100]};
  margin: 0;

  @media (max-width: 900px) {
    ${Ce.head.sm};
  }
`,Wm=C.li`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`,Xu=C.p`
  ${$.head.xs}
  font-weight: 500;
  color: ${I.stone[100]};
  margin: 0;
  padding: 16px 0;
`,Qm=C.div`
  display: ${e=>e.visible?"flex":"none"};
  flex-direction: column;
  background-color: ${I.black[100]};
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: ${e=>e.visible?"0":"-250px"};
  transition: left 0.5s ease;
  z-index: 100;
  text-align: center;

  @media (max-width: 900px) {
    width: 80%;
    left: ${e=>e.visible?"0":"-80%"};
  }
`,Gf=Em`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`,Gm=C.div`
  display: none;
  cursor: pointer;
  color: ${I.stone[100]};
  padding-top: 4px;
  transition: transform 0.5s ease;  

  @media (max-width: 900px) {
    display: ${e=>e.menuVisible?"none":"block"};
    animation: ${Gf} 0.5s linear;
  }
`,Km=C.div`
  display: none;
  cursor: pointer;
  color: ${I.stone[100]};
  transition: transform 0.5s ease;

  @media (max-width: 900px) {
    display: ${e=>e.menuVisible?"block":"none"};
  }
  animation: ${Gf} 0.5s linear reverse;
  margin: 1rem 1rem 0 0;
  align-self: flex-end;
`;function bm(){const[e,t]=j.useState(!1),n=()=>{t(i=>!i)},r=()=>{t(!1)};return d.jsxs(d.Fragment,{children:[d.jsxs(Hm,{menuVisible:e,children:[d.jsx(Vm,{children:d.jsx(Mt,{to:"/",style:{textDecoration:"none",color:"inherit"},onClick:()=>window.scrollTo(0,0),children:"Jorge Rosano"})}),d.jsx(Gm,{onClick:n,menuVisible:e,children:d.jsx(Am,{style:{height:"40px",width:"40px"}})}),d.jsxs(Wm,{children:[d.jsx(Mt,{to:"/projects",style:{textDecoration:"none"},onClick:()=>window.scrollTo(0,0),children:d.jsx(Xu,{children:"Portfolio"})}),d.jsx(lo,{profileURL:"https://www.linkedin.com/in/jorgeros13"})]}),d.jsxs(Qm,{visible:e,children:[d.jsx(Km,{onClick:n,menuVisible:e,children:d.jsx(Bm,{style:{height:"1.5rem",width:"1.5rem"}})}),d.jsx(Mt,{to:"/projects",style:{textDecoration:"none"},onClick:()=>window.scrollTo(0,0),children:d.jsx(Xu,{style:{color:"white"},children:"Portfolio"})}),d.jsx(lo,{profileURL:"https://www.linkedin.com/in/jorgeros13"})]})]}),d.jsx(Vf,{visible:e,onClose:r})]})}function Jm(e){return ye({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z"}}]})(e)}function Kf(e){return ye({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(e)}function Xm(e){return ye({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}}]})(e)}const Ym=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  grid-area: left;
  padding: 32px 0 32px 64px;

  @media (max-width: 1000px) {
    width: auto;
    height: auto;
    padding: 3rem 0 0 0;
  }
`,Zm=C.div`
  display: flex;
  gap: 10px;
`,qm=C.img`
  width: auto;
  height: 320px;
  border-radius: 15%;

  @media (max-width: 1000px) {
    width: auto;
    height: 230px;
  }
`,Yu=C.a`
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.08);
  }
`,Zu=C.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;function bf({gitHubUrl:e,linkedInUrl:t,img:n}){return bf.propTypes={gitHubUrl:ce.string,linkedInUrl:ce.string,img:ce.string},d.jsxs(Ym,{children:[d.jsx(qm,{src:n,alt:"JRoss"}),d.jsxs(Zm,{children:[d.jsx(Yu,{href:e,children:d.jsx(Zu,{children:d.jsx(Kf,{style:{width:"100%",height:"110%",color:"#D6D3D1"}})})}),d.jsx(Yu,{href:t,children:d.jsx(Zu,{children:d.jsx(Xm,{style:{width:"88%",height:"78%",color:"#D6D3D1"}})})})]})]})}const eg="/the-portfolio/assets/Developer-0e8f9fb1.jpg",tg=C.div`
  height: 390px;
  width: 95%;
  grid-area: right;
  display: flex;
  flex-direction: column;
  justify-content: center;

   @media (max-width: 1000px) {
    width: auto;
    height: auto;
    padding: 0 2.5rem 2rem;
  }

  @media (max-width: 500px) {
    width: auto;
    height: auto;
  }
`,ng=C.p`
  color: ${I.stone[300]};
  ${$.head.lgx}
  margin: 0;
  padding: 2rem 0 0 0;

  @media (max-width: 500px) {
    ${$.head.md};
  }
`,rg=C.p`
  ${$.head.xs}
  color: ${I.white};
  font-weight: 500;
  margin: 0;
  padding: 1.5rem 0;

   @media (max-width: 500px) {
    ${$.text.lg};
  }
`;function ig(){return d.jsxs(tg,{children:[d.jsx(ng,{children:'"Hello world!"'}),d.jsxs(rg,{children:["I'm ",d.jsx("span",{style:{color:"#D1AE00",fontWeight:600},children:"Jorge"}),", an independent full-stack web developer from México, building apps and online experiences for companies large and small.",d.jsx("br",{}),d.jsx("br",{}),"Ready to bring your next big idea to life."]})]})}const og=C.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 340px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #616161;
  position: relative;
  cursor: pointer;

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`,lg=C.img`
  width: 100%;
  height: 160px;
  filter: grayscale(100%);

  &:hover {
    transition: filter 0.3s ease;
    filter: grayscale(0%);  
  }
`,sg=C.div`
  margin: 0;
  height: 100px;
`,ag=C.p`
  ${$.text.lg}
  color: white;
  text-align: justify;
  margin: 0;
  padding-bottom: 5px;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`,ug=C.p`
  ${$.text.sm}
  color: white;
  text-align: justify;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;function Jf({img:e,title:t,summary:n}){Jf.propTypes={title:ce.string.isRequired,summary:ce.string.isRequired,img:ce.string};const r=100,i=n.length>r?n.slice(0,r)+"...":n;return d.jsxs(og,{children:[d.jsx(lg,{src:e,alt:"home-cards"}),d.jsxs(sg,{children:[d.jsx(ag,{children:t}),d.jsx(ug,{children:i})]})]})}function wa(e){return ye({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function Ca(e){return ye({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function Sa(e){return ye({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function ka(e){return ye({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"}}]})(e)}const cg=C.div`
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
  }
`,dg=C.div`
  ${$.text.lg}
  color: ${I.stone[200]};
  font-weight: 500;
  margin: 0;
  padding: 4rem 0 5rem;
  text-align: left;

  @media (max-width: 800px) {
    padding: 4rem 0 0 0;
  }
`,fg=C.ul`
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
  }
`,ai=C.li`
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
`,pg=C.p`
  color: ${I.stone[300]};
  ${$.head.lg};
  margin: 0;
`,hg=C.p`
  ${$.text.md}
  color: ${I.stone[100]};
  margin: .5rem 0;
  font-weight: 400;
`,mg=C.p`
  ${$.text.md}
  color: ${I.stone[100]};
  margin: .5rem 0;
  font-weight: 400;
  text-align: right;
`,ci=C.p`
  ${$.text.md}
  color: white;
  margin: 0;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`,gg=C.p`
  ${$.text.md}
  color: ${I.stone[100]};
  margin: 0;
  }
`,vg=C.span`
  ${$.text.md}
  color: ${I.stone[100]};
  margin: 0;
  text-decoration: underline;

  &:hover {
    color: ${I.yellow[400]};
    cursor: pointer;
  }
`;function yg(){return d.jsxs(cg,{children:[d.jsxs(dg,{children:[d.jsxs(pg,{children:["Let's chat! ",d.jsx("br",{}),d.jsx("br",{})]}),d.jsxs(hg,{children:["Need a full-stack developer to help out? ",d.jsx("br",{})]}),d.jsxs(gg,{children:[d.jsx(vg,{children:"Send me an email"})," and see how we can make a positive impact together! ",d.jsx("br",{}),d.jsx("br",{})]}),d.jsxs(mg,{children:["Find me on these online spaces too! →",d.jsx("br",{})]})]}),d.jsxs(fg,{children:[d.jsx(ai,{children:d.jsxs(ui,{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(ci,{children:"GitHub"}),d.jsx(wa,{})]})}),d.jsx(ai,{children:d.jsxs(ui,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(ci,{children:"LinkedIn"}),d.jsx(Sa,{})]})}),d.jsx(ai,{children:d.jsxs(ui,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(ci,{children:"Instagram"}),d.jsx(Ca,{})]})}),d.jsx(ai,{children:d.jsxs(ui,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(ci,{children:"X"}),d.jsx(ka,{})]})})]})]})}const pr=[{id:"1",imgSrc:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/get-that-home.png",imgComp:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/gth-cpm.png",title:"Get that home",summary:"Sophisticated React-based application designed to serve as a compelling, user-friendly platform for renting, selling, and searching for houses and apartments.",tech:["Javascript","React","Ruby","Rails","Heroku"],team:[{name:"Gabriel Nuñez",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/gab.jpg",githubUrl:"https://github.com/NunezGabriel"},{name:"Jorge Rosano",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"},{name:"Pedro Arias",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/ped.png",githubUrl:"https://github.com/pdroariasvilela"},{name:"Diego Gómez",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/dg.jpg",githubUrl:"https://github.com/DiegoGomezCuadross"},{name:"Daniel Toledo",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/dt.jpg",githubUrl:"https://github.com/DanielToledo-99"}],project_url:"https://github.com/jorge-ross/get-that-home-c-10"},{id:"2",imgSrc:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/ndev.png",imgComp:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/neuro-comp.jpg",title:"Neuro-dev",summary:"Explore my bespoke clinic website, delivering a seamless and intuitive user experience for those seeking mental health care.",tech:["Javascript","Angular","HTML","CSS"],team:[{name:"Jorge Rosano",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/neuro-clinic"},{id:"3",imgSrc:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/clivia.png",imgComp:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/cli-comp.png",title:"CLIvia Generator",summary:"The classic trivia game that asks questions about a variety of topics, including history, science, and pop culture. The user can earn one point for each correct answer, the highest score at the end of the game wins. Built with Ruby.",tech:["Ruby","Heroku"],team:[{name:"Jorge Rosano",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/CLIvia-generator"},{id:"4",imgSrc:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/doable-one.png",imgComp:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/doable.png",title:"Doable",summary:"A streamlined iteration of a note-taking application constructed using JavaScript, enabling users to generate, categorize, and oversee tasks.",tech:["Javascript"],team:[{name:"Jorge Rosano",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/Doable-js"},{id:"5",imgSrc:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/eatable.png",imgComp:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/eatable-co.png",title:"Eatable",summary:"Dynamic digital menu crafted with React for both personal and commercial use, where the user can explore, create, edit, and delete dishes, thus offering a personalized user experience.",tech:["Javascript","React"],team:[{name:"Jorge Rosano",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/Eatable-p"},{id:"6",imgSrc:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/b-ui.png",imgComp:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/blog-co.png",title:"Blog UI",summary:"A website focused on the user experience when interacting with an online blog, which is why the objective of this project is to create an enjoyable UI (User Interface) using HTML and CSS.",tech:["HTML","CSS"],team:[{name:"Jorge Rosano",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/jorgeross--blog-ui"},{id:"7",imgSrc:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/contactable.png",imgComp:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/conco.png",title:"Contactable",summary:"Making your life easier! Keep track of contact emails and phone numbers in the Contactable app. Allow us to be your local memory, and focus on what matters most to you! ",tech:["Javascript","Heroku"],team:[{name:"Kevin Robles",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/kr.png",githubUrl:"https://github.com/kevinronu"},{name:"Jorge Rosano",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/contactable-js-t3"},{id:"8",imgSrc:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/tweetable.png",imgComp:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/tcom.png",title:"Tweetable",summary:"A simpler version of X, once Twitter, using Ruby on Rails, where users can create, reply and like posts with the objective of creating a minimum viable product (MVP) of the X app.",tech:["Ruby","Rails"],team:[{name:"Jorge Rosano",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"}],project_url:"https://github.com/jorge-ross/Tweetable-p"},{id:"9",imgSrc:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/critics.png",imgComp:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/critics-comp.png",title:"Critics RC",summary:"Interactive video game catalog, where the user can sign up, log in with their username and password if already registered, and access reviews and ratings for each of the video games and companies in the database. Additionally, user can create, edit, and delete their own companies and critics.",tech:["Ruby","Rails"],team:[{name:"Kevin Quispe",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/kq.jpg",githubUrl:"https://github.com/Kevincarlosqa"},{name:"Jorge Rosano",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"},{name:"Gerardo Avena",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/gav.jpg",githubUrl:"https://github.com/Avenator02"},{name:"Sebastián Maguiña",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/sm.jpg",githubUrl:"https://github.com/Sebas54318"}],project_url:"https://github.com/codeableorg/critics-release-candidate-c10-w11-criticsrc-team6"},{id:"10",imgSrc:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/G-s-1.png",imgComp:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/stats.png",title:"GitHub Stats",summary:"Investigate the primary statistical attributes of the GitHub community and preserve notable users for future reference through the utilization of the GitHub Stats application.",tech:["Javascript","React"],team:[{name:"Jorge Rosano",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/jrh.jpg",githubUrl:"https://github.com/jorge-ross"},{name:"Gabriel Nuñez",profilePicUrl:"https://github.com/jorge-ross/the-portfolio/raw/main/src/assets/images/gab.jpg",githubUrl:"https://github.com/NunezGabriel"}],project_url:"https://github.com/jorge-ross/Github-stats"}],xg=C.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  position: relative;
  width: 80%;
  gap: 3rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`,qu=C.div`
  ${$.text.md};
  color: ${I.stone[300]};
  height: auto;
  width: 400px;
  font-weight: 500;

  @media (max-width: 1000px) {
    width: auto;
    padding: 16px 88px;
  }
`;function wg(){return d.jsxs(xg,{children:[d.jsxs(qu,{children:["Motivated by a profound fascination for science, computing, and its boundless potential as a comprehensive field of study, I realized that the tech industry held the key to transform lives.",d.jsx("br",{})," ",d.jsx("br",{}),"Walking this path has become a great opportunity to combine my understanding of the human mind, as a former neuropsychology specialist, with cutting-edge technologies, knowing that this fusion could unlock new horizons of empowerment. This is the calling to be at the forefront of innovation, to create solutions that could reach far beyond the confines of a therapist's office. ",d.jsx("br",{})," ",d.jsx("br",{})]}),d.jsx(qu,{children:"That being said, I am determined to collaborate with like-minded professionals who share the same passion for leveraging technology to make a tangible difference in people's lives."})]})}const Cg=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`,Sg=C.div`
  background-color: ${I.black[600]};
  height: 580px;
  width: 80%;
  place-items: center;
  position: relative;
  display: grid;
  grid-template-columns: 0.6fr 2fr;
  gap: 4rem;
  grid-template-rows: auto;
  grid-template-areas: "left right";
  border-bottom: 1px solid #A8A29E;

  @media (max-width: 1000px) {
    width: 100%;
    gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
      height: auto;
  }
`,kg=C.div`
  background-color: ${I.black[600]};
  height: 480px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;

  @media (max-width: 1000px) {
    width: auto;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 700px) {
    width: auto;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 550px) {
    width: auto;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 435px) {
    width: auto;
    height: 870px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  @media (max-width: 405px) {
    width: auto;
    height: 960px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 380px) {
    width: auto;
    height: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 353px) {
    width: auto;
    height: 1300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`,Eg=C.div`
  background-color: ${I.black[700]};
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
    width: auto;
    height: fit-content;
  }

`,jg=C.p`
  ${$.head.lg}
  color: ${I.stone[100]};
  font-weight: 600;
  margin: 0;
  padding-bottom: 3rem;
  text-align: center;

  @media (max-width: 500px) {
    ${$.head.sm};
  }
`,Pg=C.div`
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
`,_g=C.p`
  ${$.head.sm}
  color: ${I.stone[100]};
  font-weight: 500;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding-top: 2rem;

  &:hover {
    color: ${I.yellow[500]};
    text-decoration: underline;
    cursor: pointer;
  }
`,zg=C.div`
  height: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 3rem;
  padding: 5rem 0;
  border-top: 1px solid #A8A29E;

  @media (max-width: 700px) {
    gap: 2.5rem;
  }
`,Rg=C.p`
  color: ${I.stone[300]};
  ${$.head.lgx};
  margin: 0;
  padding-left: 6rem;

  @media (max-width: 700px) {
   ${$.head.lg};
    padding-left: 2rem;
  }

  @media (max-width: 500px) {
    padding: 0;
    ${$.head.md};
  }
`,Tg=C.p`
  ${$.text.lg}
  color: ${I.white};
  margin: 0;
  width: 60%;
  padding-left: 6rem;

  @media (max-width: 700px) {
    ${$.text.md}
    padding-left: 2rem;
    width: 80%;
  }

  @media (max-width: 500px) {
    ${$.text.sm};
    padding: 0;
    width: 100%;
  }
`;function $g(){return d.jsx(d.Fragment,{children:d.jsxs(Cg,{children:[d.jsx(bm,{}),d.jsxs(Sg,{children:[d.jsx(bf,{gitHubUrl:"https://github.com/jorge-ross",linkedInUrl:"https://www.linkedin.com/in/jorgeros13",img:eg}),d.jsx(ig,{})]}),d.jsx(kg,{children:d.jsx(wg,{})}),d.jsxs(Eg,{children:[d.jsx(jg,{children:"Recent Projects & Work"}),d.jsx(Pg,{children:pr.slice(0,4).map((e,t)=>d.jsx(Mt,{to:`/projects/${t}`,style:{textDecoration:"none"},onClick:()=>window.scrollTo(0,0),children:d.jsx(Jf,{img:e.imgSrc,title:e.title,summary:e.summary},e.id)},e.id))}),d.jsx(_g,{children:"See all"})]}),d.jsxs(zg,{children:[d.jsx(Rg,{children:"Why work with me?"}),d.jsxs(Tg,{children:["With a background in computer science, my superpower is problem solving. I'm excellent at breaking down weird and wonderful ideas and figuring out how to get them built.",d.jsx("br",{}),d.jsx("br",{}),"Having worked independently for years, I'm agile and able to move quickly. I've launched large internationaly publicised projects that had to work on day one so I understand the importance of reliability and performance.",d.jsx("br",{}),d.jsx("br",{}),"Finally, I'm a great communicator and collaborator and understand that you don't always care about *how* it gets done, just that it gets done well and on time."]})]}),d.jsx(yg,{})]})})}function Lg(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM13.3344 16.055C14.0531 16.6343 14.7717 16.9203 15.4904 16.913C15.9304 16.913 16.2677 16.8323 16.5024 16.671C16.7297 16.517 16.8434 16.297 16.8434 16.011C16.8434 15.7177 16.7297 15.4683 16.5024 15.263C16.2677 15.0577 15.8241 14.8523 15.1714 14.647C14.3867 14.4197 13.7817 14.1263 13.3564 13.767C12.9384 13.4077 12.7257 12.9053 12.7184 12.26C12.7184 11.6513 12.9824 11.1417 13.5104 10.731C14.0237 10.3203 14.6801 10.115 15.4794 10.115C16.5941 10.115 17.4887 10.3863 18.1634 10.929L17.3934 12.128C17.1221 11.9153 16.8104 11.7613 16.4584 11.666C16.1064 11.556 15.7911 11.501 15.5124 11.501C15.1311 11.501 14.8267 11.5707 14.5994 11.71C14.3721 11.8493 14.2584 12.0327 14.2584 12.26C14.2584 12.5093 14.3977 12.722 14.6764 12.898C14.9551 13.0667 15.4317 13.2537 16.1064 13.459C16.9204 13.701 17.4997 14.0237 17.8444 14.427C18.1891 14.8303 18.3614 15.3437 18.3614 15.967C18.3614 16.605 18.1157 17.155 17.6244 17.617C17.1404 18.0717 16.4364 18.31 15.5124 18.332C14.3024 18.332 13.2904 17.969 12.4764 17.243L13.3344 16.055ZM7.80405 16.693C8.03872 16.8397 8.32105 16.913 8.65105 16.913C8.99572 16.913 9.28172 16.814 9.50905 16.616C9.73639 16.4107 9.85005 16.055 9.85005 15.549V10.247H11.3351V15.835C11.3131 16.7003 11.0637 17.3237 10.5871 17.705C10.3157 17.9323 10.0187 18.0937 9.69605 18.189C9.37339 18.2843 9.06172 18.332 8.76105 18.332C8.21105 18.332 7.72339 18.2367 7.29805 18.046C6.84339 17.8407 6.46205 17.4777 6.15405 16.957L7.18805 16.11C7.37872 16.3667 7.58405 16.561 7.80405 16.693Z"}}]})(e)}function Ng(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.0002 2L21.3002 5.32L19.8817 17.63L12.0002 22L4.11867 17.63L2.7002 5.32L12.0002 2ZM12.0002 4.21L6.18645 17.26H8.35412L9.52286 14.34H14.4576L15.6263 17.26H17.794L12.0002 4.21ZM13.6984 12.54H10.302L12.0002 8.45L13.6984 12.54Z"}}]})(e)}function Fg(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.448 16.2394C13.8809 17.0412 13.2933 17.7714 12.7015 18.4146C14.3738 20.0375 15.9291 20.7975 16.792 20.2993C17.6549 19.8011 17.7744 18.0742 17.2051 15.8145C16.3521 16.0054 15.426 16.1492 14.448 16.2394ZM13.138 16.3265C12.7641 16.342 12.3845 16.3499 12.0003 16.3499C11.6161 16.3499 11.2365 16.342 10.8627 16.3265C11.2394 16.8188 11.6208 17.2749 12.0003 17.6905C12.3798 17.2749 12.7612 16.8188 13.138 16.3265ZM18.1787 8.43278C20.8434 9.19718 22.5837 10.4672 22.5837 11.9999C22.5837 13.5325 20.8434 14.8026 18.1787 15.567C18.8491 18.2569 18.6193 20.399 17.292 21.1653C15.9647 21.9316 13.9947 21.0595 12.0003 19.134C10.006 21.0595 8.03596 21.9316 6.70866 21.1653C5.38136 20.399 5.15158 18.2569 5.82195 15.567C3.15724 14.8026 1.41699 13.5325 1.41699 11.9999C1.41699 10.4672 3.15724 9.19718 5.82195 8.43278C5.15158 5.74288 5.38136 3.60075 6.70866 2.83443C8.03596 2.06811 10.006 2.94019 12.0003 4.86569C13.9947 2.94019 15.9647 2.06811 17.292 2.83443C18.6193 3.60075 18.8491 5.74288 18.1787 8.43278ZM17.2051 8.18527C17.7744 5.92558 17.6549 4.19865 16.792 3.70046C15.9291 3.20226 14.3738 3.96221 12.7015 5.58509C13.2933 6.2283 13.8809 6.95849 14.448 7.76031C15.426 7.85054 16.3521 7.99432 17.2051 8.18527ZM6.79554 15.8145C6.22624 18.0742 6.34577 19.8011 7.20866 20.2993C8.07155 20.7975 9.62688 20.0375 11.2992 18.4146C10.7073 17.7714 10.1197 17.0412 9.55262 16.2394C8.57467 16.1492 7.6485 16.0054 6.79554 15.8145ZM10.8627 7.67324C11.2365 7.65776 11.6161 7.64987 12.0003 7.64987C12.3845 7.64987 12.7641 7.65776 13.138 7.67324C12.7612 7.18096 12.3798 6.7248 12.0003 6.30922C11.6208 6.7248 11.2394 7.18096 10.8627 7.67324ZM9.55262 7.76031C10.1197 6.95849 10.7073 6.2283 11.2992 5.58509C9.62688 3.96221 8.07155 3.20226 7.20866 3.70046C6.34577 4.19865 6.22624 5.92558 6.79554 8.18527C7.6485 7.99432 8.57467 7.85054 9.55262 7.76031ZM13.8939 15.2797C14.2395 14.7728 14.5772 14.2366 14.9015 13.6749C15.2258 13.1131 15.5213 12.5526 15.7875 11.9999C15.5213 11.4471 15.2258 10.8866 14.9015 10.3249C14.5772 9.76311 14.2395 9.22694 13.8939 8.72005C13.2821 8.6742 12.649 8.64987 12.0003 8.64987C11.3517 8.64987 10.7185 8.6742 10.1067 8.72005C9.76112 9.22694 9.42347 9.76311 9.09914 10.3249C8.77481 10.8866 8.4793 11.4471 8.21312 11.9999C8.4793 12.5526 8.77481 13.1131 9.09914 13.6749C9.42347 14.2366 9.76112 14.7728 10.1067 15.2797C10.7185 15.3255 11.3517 15.3499 12.0003 15.3499C12.649 15.3499 13.2821 15.3255 13.8939 15.2797ZM15.1785 15.1484C15.7932 15.0683 16.3789 14.9661 16.9286 14.8452C16.7584 14.3087 16.5541 13.7504 16.3161 13.178C16.1426 13.5095 15.9596 13.8421 15.7675 14.1749C15.5754 14.5076 15.3788 14.8324 15.1785 15.1484ZM8.82218 8.85133C8.20747 8.93147 7.62174 9.03367 7.07208 9.15454C7.24223 9.691 7.44659 10.2494 7.68454 10.8218C7.85806 10.4903 8.04101 10.1576 8.23311 9.82487C8.42522 9.49212 8.62185 9.16736 8.82218 8.85133ZM7.07208 14.8452C7.62174 14.9661 8.20747 15.0683 8.82218 15.1484C8.62185 14.8324 8.42522 14.5076 8.23311 14.1749C8.04101 13.8421 7.85806 13.5095 7.68454 13.178C7.44659 13.7504 7.24223 14.3087 7.07208 14.8452ZM6.09439 14.6C6.35551 13.7659 6.69407 12.8919 7.10491 11.9999C6.69407 11.1078 6.35551 10.2339 6.09439 9.39969C3.85279 10.0365 2.41699 11.0035 2.41699 11.9999C2.41699 12.9962 3.85279 13.9632 6.09439 14.6ZM16.9286 9.15454C16.3789 9.03367 15.7932 8.93147 15.1785 8.85133C15.3788 9.16736 15.5754 9.49212 15.7675 9.82487C15.9596 10.1576 16.1426 10.4903 16.3161 10.8218C16.5541 10.2494 16.7584 9.691 16.9286 9.15454ZM17.9063 9.39969C17.6451 10.2339 17.3066 11.1078 16.8957 11.9999C17.3066 12.8919 17.6451 13.7659 17.9063 14.6C20.1479 13.9632 21.5837 12.9962 21.5837 11.9999C21.5837 11.0035 20.1479 10.0365 17.9063 9.39969ZM12.0003 13.879C10.9625 13.879 10.1212 13.0377 10.1212 11.9999C10.1212 10.962 10.9625 10.1207 12.0003 10.1207C13.0382 10.1207 13.8795 10.962 13.8795 11.9999C13.8795 13.0377 13.0382 13.879 12.0003 13.879Z"}}]})(e)}function Mg(e){return ye({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M7.523 7.781c-.187 0-.382.011-.582.035l.116.358c.175-.018.351-.024.527-.024h.06l-.12-.369zm2.315.358l-.024.4c.2.067.394.138.588.217l.026-.404c-.055-.03-.208-.104-.59-.213zm-4.988.23a9.597 9.597 0 00-.473.26l.28.426c.157-.097.308-.19.466-.268L4.85 8.37zm2.89.022a5.602 5.602 0 00-.654.027c-.443.04-.909.169-1.38.375-1.418.618-2.878 1.918-3.833 3.51-.955 1.591-1.291 3-1.4 3.603-.037.202-.05.313-.05.313h4.79s-.057-.26-.096-.678a8.18 8.18 0 01-.033-.732c0-.55.055-1.203.244-1.858.047-.163.103-.328.168-.49.065-.162.14-.321.225-.479.17-.314.381-.618.646-.894s.584-.525.963-.736c.248-.12.698-.365 1.346-.489.216-.041.453-.07.713-.076.26-.005.542.012.845.06.606.097 1.298.32 2.075.74.388.211.798.47 1.228.788.11-.09.211-.162.211-.162s-.196-.197-.547-.486c-.35-.29-.853-.672-1.467-1.043-.306-.186-.642-.37-.998-.538a8.852 8.852 0 00-1.129-.44 7.48 7.48 0 00-1.226-.27 6.048 6.048 0 00-.64-.045zm2.086 1.65l-.023.383c.2.006.4.03.6.072l.025-.375a4.32 4.32 0 00-.602-.08zm-1.418.146c-.206.061-.381.127-.533.194l.139.418c.175-.085.351-.157.527-.211l-.133-.4zm-6.008.024c-.157.151-.31.303-.449.455l.467.4c.127-.163.267-.327.412-.478l-.43-.377zm4.34.898c-.14.128-.266.267-.375.407l.291.435c.103-.151.224-.29.358-.43l-.274-.412zm.989.787v4.323h1.164v-1.043L9.9 16.219h1.721l-1.351-1.364s1.06-.09 1.06-1.46c0-1.37-1.285-1.499-1.285-1.499H7.729zm5.292.032c-.842 0-1.126.763-1.126 1.127v3.164h1.181v-.758h1.11v.758h1.146v-3.164c0-.922-.838-1.127-1.129-1.127h-1.182zm2.85 0v4.29h1.23v-4.29h-1.23zm1.733 0v4.291h2.88v-1.11h-1.656v-3.181h-1.224zm4.359 0c-.485 0-1.133.399-1.133 1.144v.383c0 .746.642 1.127 1.133 1.127 1.364.006-.327 0 .933 0v.533l-2.005.006v1.098h1.982c.406 0 1.103-.297 1.127-1.127v-.424c0-.71-.581-1.129-1.127-1.129h-.988v-.508h1.957v-1.103h-1.88zM5.668 12.8a5.75 5.75 0 00-.182.666l.49.388c.025-.236.069-.472.13-.709l-.438-.345zm7.771.15h.407c.327 0 .334.236.334.236v1.05h-1.11v-1.05s0-.236.37-.236zm-4.546.031h.933s.262.097.262.49c0 .395-.268.499-.268.499h-.927v-.989zm-8.59.061c-.115.26-.242.563-.303.727l.697.255c.08-.206.206-.504.303-.728l-.697-.254zm5.092 1.963c.012.321.043.584.074.765l.726.26a8.003 8.003 0 01-.144-.787l-.656-.238z"}}]})(e)}function Og(e){return ye({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M7.73 9.828c0 3.552 0.097 6.459 0.226 6.459 0.097 0 1.776-0.517 3.746-1.13 2.68-0.904 3.972-1.13 5.361-1.066l1.808 0.097 0.097 7.492 0.065 7.524h3.875v-7.88c0-7.653-0.032-7.879-0.743-8.945-1.292-1.938-4.618-2.358-8.752-1.13l-1.486 0.452v-8.332h-4.198v6.459zM18.872 5.727c-0.711 1.26-1.324 2.422-1.389 2.551-0.065 0.161 0.807 0.258 1.938 0.258h2.034l1.162-1.873c2.228-3.488 2.261-3.294-0.258-3.294h-2.196l-1.292 2.357zM7.73 25.167c0 2.034 0.129 3.714 0.258 3.714s1.066-0.839 2.099-1.873l1.841-1.873-1.873-1.841c-1.033-1.001-1.97-1.841-2.099-1.841s-0.226 1.679-0.226 3.714z"}}]})(e)}function Ig(e){return ye({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M6.248 16.554c0.132-0.413 0.289-1.255 0.655-1.995 1.781-3.594 4.536-6.208 8.215-7.796 0.71-0.306 1.555-0.404 2.339-0.408 0.98-0.005 1.637 0.677 1.723 1.666 0.045 0.515 0.039 1.087-0.138 1.561-1.743 4.662-5.032 7.784-9.656 9.538-0.18 0.068-0.381 0.086-0.575 0.112-1.574 0.216-2.587-0.676-2.563-2.678zM18.349 13.099c2.556-0.179 5.069-0.355 7.702-0.54-0.192-0.183-0.3-0.303-0.425-0.403-2.292-1.838-4.59-3.668-6.873-5.517-0.226-0.183-0.366-0.471-0.668-0.871 0.981 0 1.774-0.009 2.567 0.002 0.957 0.014 1.937-0.079 2.867 0.093 2.011 0.372 3.084 1.669 3.046 3.713-0.035 1.916-0.233 3.829-0.375 5.742-0.217 2.929-0.445 5.858-0.671 8.786-0.039 0.505-0.086 1.010-0.137 1.61-1.063-0.947-2.080-1.852-3.095-2.758-0.131-0.117-0.24-0.268-0.385-0.361-1.241-0.79-1.759-1.968-2.041-3.376-0.368-1.84-0.907-3.646-1.371-5.467-0.052-0.204-0.090-0.412-0.142-0.655zM8.765 24.301c0.547-0.076 1.059-0.108 1.547-0.234 0.192-0.049 0.415-0.283 0.477-0.479 0.46-1.455 0.882-2.923 1.317-4.385 0.038-0.128 0.091-0.252 0.161-0.443 2.662 0.852 5.303 1.698 8.022 2.568-1.415 1.428-2.92 2.625-4.602 3.701 2.997 0.229 5.994 0.458 8.991 0.687 0 0.038 0 0.077 0.001 0.115-0.646 0.046-1.292 0.094-1.938 0.137-3.812 0.251-7.623 0.501-11.435 0.75-0.606 0.040-1.213 0.106-1.818 0.095-2.566-0.047-4.020-1.453-4.053-4.027-0.019-1.446 0.13-2.894 0.222-4.34 0.007-0.109 0.163-0.209 0.25-0.313 0.129 0.115 0.317 0.205 0.38 0.349 0.766 1.776 1.514 3.56 2.267 5.341 0.061 0.143 0.126 0.284 0.211 0.478z"}}]})(e)}function Dg(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"}}]})(e)}const Ug=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 320px;
  letter-spacing: 0.5px;
  cursor: pointer;
  gap: .5rem;
  border: 1px solid white;

  @media (max-width: 1200px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 400px) {
    height: 220px;
    width: 230px;
  }
`,Ag=C.img`
  width: 85%;
  height: 150px;
filter: grayscale(100%);
 

  @media (max-width: 1200px) {
    height: 130px;
  }

  @media (max-width: 600px) {
    height: 100px;
  }

  &:hover {
    transition: filter 0.3s ease;
    filter: grayscale(0%);
  }
`,Bg=C.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`,Hg=C.p`
  ${$.head.xs}
  color: white;
  text-align: justify;
  margin: 0;
  padding: .875rem 0;
`,Vg=C.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Wg={Javascript:Lg,React:Fg,Ruby:Ig,Rails:Mg,HTML:Jm,CSS:Dg,Heroku:Og,Angular:Ng};function Xf({imgSrc:e,title:t,tech:n}){return Xf.propTypes={title:ce.string.isRequired,imgSrc:ce.string.isRequired,tech:ce.arrayOf(ce.string).isRequired},d.jsxs(Ug,{children:[d.jsx(Ag,{src:e,alt:"project"}),d.jsxs(Bg,{children:[d.jsx(Hg,{children:t}),d.jsx(Vg,{children:n.map((r,i)=>{const o=Wg[r];return o?d.jsx(o,{style:{width:"25px",height:"25px",color:r==="Javascript"?"#FCD34D":r==="React"?"#60A5FA":r==="Angular"?"#B52E31":r==="Ruby"||r==="Rails"?"#EF4444":r==="HTML"?"#F06529":r==="CSS"?"#2965F1":r==="Heroku"?"#6762A6":void 0}},i):null})})]})]})}const Qg=C.div`
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
  }
`,Gg=C.div`
  ${$.text.lg}
  color: ${I.stone[200]};
  font-weight: 500;
  margin: 0;
  padding: 3rem 0;
  text-align: left;

  @media (max-width: 800px) {
    padding: 4rem 0 0 0;
  }
`,Kg=C.ul`
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
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: center;
  }
`,di=C.li`
  margin: 0;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
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
  color: ${I.stone[300]};
  ${$.head.lg};
  margin: 0;

  @media (max-width: 500px){
    ${$.head.md};
    text-align: center;
  }
`,Jg=C.p`
  ${$.text.md}
  color: ${I.stone[100]};
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
`;function Xg(){return d.jsxs(Qg,{children:[d.jsxs(Gg,{children:[d.jsxs(bg,{children:["Jorge Rosano ",d.jsx("br",{}),d.jsx("br",{})]}),d.jsxs(Jg,{children:["An independent web developer from Mexico. ",d.jsx("br",{})]})]}),d.jsxs(Kg,{children:[d.jsx(di,{children:d.jsxs(fi,{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(pi,{children:"GitHub"}),d.jsx(wa,{})]})}),d.jsx(di,{children:d.jsxs(fi,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(pi,{children:"LinkedIn"}),d.jsx(Sa,{})]})}),d.jsx(di,{children:d.jsxs(fi,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(pi,{children:"Instagram"}),d.jsx(Ca,{})]})}),d.jsx(di,{children:d.jsxs(fi,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(pi,{children:"X"}),d.jsx(ka,{})]})})]})]})}const Yg=C.div`
  display: flex;
  width: 80%;
  height: 10rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid white;

  @media (max-width: 900px) {
    ${Ce.head.sm};
    justify-content: center;
    height: 7rem;
  }
`,Zg=C.h1`
  ${Ce.head.md}
  color: ${I.stone[100]};
  margin: 0;

  @media (max-width: 900px) {
    ${Ce.head.sm};
  }
`,qg=C.li`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;function e2(){return d.jsx(d.Fragment,{children:d.jsxs(Yg,{children:[d.jsx(Zg,{children:d.jsx(Mt,{to:"/",style:{textDecoration:"none",color:"inherit"},onClick:()=>window.scrollTo(0,0),children:"Jorge Rosano"})}),d.jsx(qg,{children:d.jsx(lo,{profileURL:"https://www.linkedin.com/in/jorgeros13"})})]})})}const t2=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`,n2=C.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1.5rem;
  padding: 4rem 0;
  border-bottom: 1px solid #A8A29E;
  
  @media(max-width: 1000px) {
    width: 80%;
  }
  
`,r2=C.h1`
  ${Ot.head.lg};
  color: ${I.white};
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media(max-width: 1200px) {
  ${Ot.head.md};
  }

   @media(max-width: 1200px) {
  ${Ot.head.sm};
  }
`,i2=C.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  color: ${I.blue[300]};
  opacity: 70%;
  margin: 0 0 .5rem 0;
  text-align: center;
`,o2=C.p`
  ${$.text.md};
  font-weight: 400;
  color: white;
  margin: 1rem 0 0 0;
  text-align: center;
`,l2=C.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  padding: 5rem 0;
  gap: 2.5rem;

  @media(max-width: 1000px) {
    grid-template-columns: repeat(2, auto);
  }

  @media(max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;function s2(){return d.jsxs(t2,{children:[d.jsx(e2,{}),d.jsxs(n2,{children:[d.jsx(i2,{children:"Work"}),d.jsx(r2,{children:"Here's a selection of some of the things I've built."}),d.jsx(o2,{children:"I've never had a real job so this is where I keep track of all the things I've been doing over the years, whether it's new businesses I've been building out, client projects or just experiments."})]}),d.jsx(l2,{children:pr==null?void 0:pr.map((e,t)=>d.jsx(Mt,{to:`/projects/${t}`,style:{textDecoration:"none"},onClick:()=>window.scrollTo(0,0),children:d.jsx(Xf,{imgSrc:e.imgSrc,title:e.title,tech:e.tech})},e.id))}),d.jsx(Xg,{})]})}const a2=C.div`
  display: flex;
  width: 60%;

  @media (max-width: 1000px) {
    width: 90%;
  }
`,u2=C.img`
  width: 100%;
`,Yf=({src:e})=>(Yf.propTypes={src:ce.string.isRequired},d.jsx(a2,{children:d.jsx(u2,{src:e,alt:"covers"})})),c2=C.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 850px) {
   justify-content: center;
   gap: 2.5rem;
  }

   @media (max-width: 500px) {
   gap: 2rem;
  }
`,d2=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
`,f2=C.p`
  ${Ce.text.md};
  font-weight: 600;
  color: white;
  margin: 0;

  @media (max-width: 500px) {
   ${Ce.text.sm};
  }
`,p2=C.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
   width: 30%;
  }

   @media (max-width: 500px) {
   width: 40%;
  }
`,h2=C.img`
  width: 100%;
  border-radius: 20%;
`;function Zf({name:e,gitHubUrl:t,profilePicUrl:n}){return Zf.propTypes={name:ce.string,gitHubUrl:ce.string,profilePicUrl:ce.string},d.jsxs(c2,{children:[d.jsx(p2,{children:d.jsx(h2,{src:n,alt:"Team member"})}),d.jsxs(d2,{children:[d.jsx(f2,{children:e}),d.jsxs("a",{href:t,children:[" ",d.jsx(Kf,{style:{width:"20px",height:"20px",color:"white",borderRadius:"50%"},className:"fluorescent"})," "]})]})]})}const m2=C.div`
  width: 80%;
  padding: 5rem 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;


  @media (max-width: 850px) {
    border-top: 1px solid white;
  }
`,g2=C.ul`
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
`;function v2(){return d.jsx(m2,{children:d.jsxs(g2,{children:[d.jsx(hi,{children:d.jsxs(mi,{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(gi,{children:"GitHub"}),d.jsx(wa,{})]})}),d.jsx(hi,{children:d.jsxs(mi,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(gi,{children:"LinkedIn"}),d.jsx(Sa,{})]})}),d.jsx(hi,{children:d.jsxs(mi,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(gi,{children:"Instagram"}),d.jsx(Ca,{})]})}),d.jsx(hi,{children:d.jsxs(mi,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(gi,{children:"X"}),d.jsx(ka,{})]})})]})})}const y2=C.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 6rem;
  align-items: center;

  @media(max-width: 750px) {
    padding: 4rem 1rem;
  }
`,x2=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 5rem;
  width: 90%;

  @media(max-width: 600px) {
  padding: 0;
  }
`,w2=C.h1`
  margin: 0;
  ${$.head.md};
  color: white;

  @media(max-width: 600px) {
  display: none;
  }
`,C2=C.div`
  padding: 4rem 1rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;

  @media(max-width: 850px) {
    border: none;
    padding: 3rem 0;
    width: auto;
  }
`,S2=C.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  padding: 0 2rem 4rem;
  border-bottom: 1px solid white;

  @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 1rem 0 4rem;
  }
`,k2=C.div`
  display: flex;
  align-items: center;

  @media(max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }
`,E2=C.p`
  margin: 0;
  ${Ce.head.lg};
  color: white;


  @media (max-width: 500px) {
    ${Ce.head.md};
  }
`,j2=C.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  padding: 5rem 0 0 0;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`,P2=C.div`
  ${Ot.text.xl};
  color: white;
  display: flex;

  @media (max-width: 950px) {
    ${$.text.lg};
    font-weight: 500;
    margin: 0;
  }

  @media (max-width: 540px) {
    ${$.text.md};
  }
`,_2=C.div`
  display: flex;

  @media(max-width: 950px) {
    height: 75px;
  }
`,z2=C.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 0 0;
  border-top: 1px solid white;
`,R2=C.p`
  ${$.head.md};
  color: white;
  margin: 0;
`,T2=C.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 5rem;
  padding: 4rem 0;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 500px) {
    padding-bottom: 2rem;
  }
`,$2=C.img`
  display: flex;
  width: 70%;
  padding: 4rem 0;

  @media (max-width: 750px) {
    padding: 2rem 0 4rem;
  }
`;function L2(){const{id:e}=eh(),t=parseInt(e),n=pr[t];return d.jsxs(y2,{children:[d.jsxs(x2,{children:[d.jsx(Mt,{to:"/projects",className:"link-style",onClick:()=>window.scrollTo(0,0),children:"← Back to portfolio"}),d.jsx(w2,{children:"Jorge Rosano"})]}),d.jsxs(C2,{children:[d.jsxs(S2,{children:[d.jsx(k2,{children:d.jsx(E2,{children:n.title})}),d.jsx(Yf,{src:n.imgSrc})]}),d.jsxs(j2,{children:[d.jsx(P2,{children:n.summary}),d.jsx(_2,{children:d.jsx(Mt,{to:n.project_url,children:d.jsx(Im,{children:"Go to Repo!"})})})]}),d.jsx($2,{src:n.imgComp}),d.jsxs(z2,{children:[d.jsx(R2,{children:n.team.length>1?"The team":"Created by"}),d.jsx(T2,{children:n.team.map((r,i)=>d.jsx(Zf,{name:r.name,profilePicUrl:r.profilePicUrl,gitHubUrl:r.githubUrl},i))})]})]}),d.jsx(v2,{})]})}function N2(){return d.jsx(Ch,{children:d.jsxs(mh,{children:[d.jsx(rr,{path:"",element:d.jsx($g,{})}),d.jsx(rr,{path:"projects",element:d.jsx(s2,{})}),d.jsx(rr,{path:"projects/:id",element:d.jsx(L2,{})}),d.jsx(rr,{path:"*",element:d.jsx(ph,{to:"/",replace:!0})})]})})}vl.createRoot(document.getElementById("root")).render(d.jsx(N2,{}));
