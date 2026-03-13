(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var sd={exports:{}},ca={},od={exports:{}},zt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function Jx(){if(Sm)return zt;Sm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function p(V){return V===null||typeof V!="object"?null:(V=v&&V[v]||V["@@iterator"],typeof V=="function"?V:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function y(V,$,Le){this.props=V,this.context=$,this.refs=C,this.updater=Le||S}y.prototype.isReactComponent={},y.prototype.setState=function(V,$){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,$,"setState")},y.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function _(){}_.prototype=y.prototype;function b(V,$,Le){this.props=V,this.context=$,this.refs=C,this.updater=Le||S}var D=b.prototype=new _;D.constructor=b,w(D,y.prototype),D.isPureReactComponent=!0;var P=Array.isArray,F=Object.prototype.hasOwnProperty,U={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(V,$,Le){var Pe,ze={},oe=null,_e=null;if($!=null)for(Pe in $.ref!==void 0&&(_e=$.ref),$.key!==void 0&&(oe=""+$.key),$)F.call($,Pe)&&!O.hasOwnProperty(Pe)&&(ze[Pe]=$[Pe]);var Me=arguments.length-2;if(Me===1)ze.children=Le;else if(1<Me){for(var Ce=Array(Me),Be=0;Be<Me;Be++)Ce[Be]=arguments[Be+2];ze.children=Ce}if(V&&V.defaultProps)for(Pe in Me=V.defaultProps,Me)ze[Pe]===void 0&&(ze[Pe]=Me[Pe]);return{$$typeof:s,type:V,key:oe,ref:_e,props:ze,_owner:U.current}}function A(V,$){return{$$typeof:s,type:V.type,key:$,ref:V.ref,props:V.props,_owner:V._owner}}function Y(V){return typeof V=="object"&&V!==null&&V.$$typeof===s}function z(V){var $={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Le){return $[Le]})}var G=/\/+/g;function Z(V,$){return typeof V=="object"&&V!==null&&V.key!=null?z(""+V.key):$.toString(36)}function se(V,$,Le,Pe,ze){var oe=typeof V;(oe==="undefined"||oe==="boolean")&&(V=null);var _e=!1;if(V===null)_e=!0;else switch(oe){case"string":case"number":_e=!0;break;case"object":switch(V.$$typeof){case s:case e:_e=!0}}if(_e)return _e=V,ze=ze(_e),V=Pe===""?"."+Z(_e,0):Pe,P(ze)?(Le="",V!=null&&(Le=V.replace(G,"$&/")+"/"),se(ze,$,Le,"",function(Be){return Be})):ze!=null&&(Y(ze)&&(ze=A(ze,Le+(!ze.key||_e&&_e.key===ze.key?"":(""+ze.key).replace(G,"$&/")+"/")+V)),$.push(ze)),1;if(_e=0,Pe=Pe===""?".":Pe+":",P(V))for(var Me=0;Me<V.length;Me++){oe=V[Me];var Ce=Pe+Z(oe,Me);_e+=se(oe,$,Le,Ce,ze)}else if(Ce=p(V),typeof Ce=="function")for(V=Ce.call(V),Me=0;!(oe=V.next()).done;)oe=oe.value,Ce=Pe+Z(oe,Me++),_e+=se(oe,$,Le,Ce,ze);else if(oe==="object")throw $=String(V),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return _e}function J(V,$,Le){if(V==null)return V;var Pe=[],ze=0;return se(V,Pe,"","",function(oe){return $.call(Le,oe,ze++)}),Pe}function ee(V){if(V._status===-1){var $=V._result;$=$(),$.then(function(Le){(V._status===0||V._status===-1)&&(V._status=1,V._result=Le)},function(Le){(V._status===0||V._status===-1)&&(V._status=2,V._result=Le)}),V._status===-1&&(V._status=0,V._result=$)}if(V._status===1)return V._result.default;throw V._result}var H={current:null},re={transition:null},le={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:re,ReactCurrentOwner:U};function ue(){throw Error("act(...) is not supported in production builds of React.")}return zt.Children={map:J,forEach:function(V,$,Le){J(V,function(){$.apply(this,arguments)},Le)},count:function(V){var $=0;return J(V,function(){$++}),$},toArray:function(V){return J(V,function($){return $})||[]},only:function(V){if(!Y(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},zt.Component=y,zt.Fragment=t,zt.Profiler=a,zt.PureComponent=b,zt.StrictMode=r,zt.Suspense=m,zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,zt.act=ue,zt.cloneElement=function(V,$,Le){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Pe=w({},V.props),ze=V.key,oe=V.ref,_e=V._owner;if($!=null){if($.ref!==void 0&&(oe=$.ref,_e=U.current),$.key!==void 0&&(ze=""+$.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(Ce in $)F.call($,Ce)&&!O.hasOwnProperty(Ce)&&(Pe[Ce]=$[Ce]===void 0&&Me!==void 0?Me[Ce]:$[Ce])}var Ce=arguments.length-2;if(Ce===1)Pe.children=Le;else if(1<Ce){Me=Array(Ce);for(var Be=0;Be<Ce;Be++)Me[Be]=arguments[Be+2];Pe.children=Me}return{$$typeof:s,type:V.type,key:ze,ref:oe,props:Pe,_owner:_e}},zt.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},zt.createElement=E,zt.createFactory=function(V){var $=E.bind(null,V);return $.type=V,$},zt.createRef=function(){return{current:null}},zt.forwardRef=function(V){return{$$typeof:f,render:V}},zt.isValidElement=Y,zt.lazy=function(V){return{$$typeof:x,_payload:{_status:-1,_result:V},_init:ee}},zt.memo=function(V,$){return{$$typeof:h,type:V,compare:$===void 0?null:$}},zt.startTransition=function(V){var $=re.transition;re.transition={};try{V()}finally{re.transition=$}},zt.unstable_act=ue,zt.useCallback=function(V,$){return H.current.useCallback(V,$)},zt.useContext=function(V){return H.current.useContext(V)},zt.useDebugValue=function(){},zt.useDeferredValue=function(V){return H.current.useDeferredValue(V)},zt.useEffect=function(V,$){return H.current.useEffect(V,$)},zt.useId=function(){return H.current.useId()},zt.useImperativeHandle=function(V,$,Le){return H.current.useImperativeHandle(V,$,Le)},zt.useInsertionEffect=function(V,$){return H.current.useInsertionEffect(V,$)},zt.useLayoutEffect=function(V,$){return H.current.useLayoutEffect(V,$)},zt.useMemo=function(V,$){return H.current.useMemo(V,$)},zt.useReducer=function(V,$,Le){return H.current.useReducer(V,$,Le)},zt.useRef=function(V){return H.current.useRef(V)},zt.useState=function(V){return H.current.useState(V)},zt.useSyncExternalStore=function(V,$,Le){return H.current.useSyncExternalStore(V,$,Le)},zt.useTransition=function(){return H.current.useTransition()},zt.version="18.3.1",zt}var Mm;function zf(){return Mm||(Mm=1,od.exports=Jx()),od.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function Qx(){if(wm)return ca;wm=1;var s=zf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,h){var x,v={},p=null,S=null;h!==void 0&&(p=""+h),m.key!==void 0&&(p=""+m.key),m.ref!==void 0&&(S=m.ref);for(x in m)r.call(m,x)&&!l.hasOwnProperty(x)&&(v[x]=m[x]);if(f&&f.defaultProps)for(x in m=f.defaultProps,m)v[x]===void 0&&(v[x]=m[x]);return{$$typeof:e,type:f,key:p,ref:S,props:v,_owner:a.current}}return ca.Fragment=t,ca.jsx=u,ca.jsxs=u,ca}var Em;function ev(){return Em||(Em=1,sd.exports=Qx()),sd.exports}var L=ev(),ct=zf(),Nl={},ad={exports:{}},hi={},ld={exports:{}},cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function tv(){return bm||(bm=1,(function(s){function e(re,le){var ue=re.length;re.push(le);e:for(;0<ue;){var V=ue-1>>>1,$=re[V];if(0<a($,le))re[V]=le,re[ue]=$,ue=V;else break e}}function t(re){return re.length===0?null:re[0]}function r(re){if(re.length===0)return null;var le=re[0],ue=re.pop();if(ue!==le){re[0]=ue;e:for(var V=0,$=re.length,Le=$>>>1;V<Le;){var Pe=2*(V+1)-1,ze=re[Pe],oe=Pe+1,_e=re[oe];if(0>a(ze,ue))oe<$&&0>a(_e,ze)?(re[V]=_e,re[oe]=ue,V=oe):(re[V]=ze,re[Pe]=ue,V=Pe);else if(oe<$&&0>a(_e,ue))re[V]=_e,re[oe]=ue,V=oe;else break e}}return le}function a(re,le){var ue=re.sortIndex-le.sortIndex;return ue!==0?ue:re.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var m=[],h=[],x=1,v=null,p=3,S=!1,w=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(re){for(var le=t(h);le!==null;){if(le.callback===null)r(h);else if(le.startTime<=re)r(h),le.sortIndex=le.expirationTime,e(m,le);else break;le=t(h)}}function P(re){if(C=!1,D(re),!w)if(t(m)!==null)w=!0,ee(F);else{var le=t(h);le!==null&&H(P,le.startTime-re)}}function F(re,le){w=!1,C&&(C=!1,_(E),E=-1),S=!0;var ue=p;try{for(D(le),v=t(m);v!==null&&(!(v.expirationTime>le)||re&&!z());){var V=v.callback;if(typeof V=="function"){v.callback=null,p=v.priorityLevel;var $=V(v.expirationTime<=le);le=s.unstable_now(),typeof $=="function"?v.callback=$:v===t(m)&&r(m),D(le)}else r(m);v=t(m)}if(v!==null)var Le=!0;else{var Pe=t(h);Pe!==null&&H(P,Pe.startTime-le),Le=!1}return Le}finally{v=null,p=ue,S=!1}}var U=!1,O=null,E=-1,A=5,Y=-1;function z(){return!(s.unstable_now()-Y<A)}function G(){if(O!==null){var re=s.unstable_now();Y=re;var le=!0;try{le=O(!0,re)}finally{le?Z():(U=!1,O=null)}}else U=!1}var Z;if(typeof b=="function")Z=function(){b(G)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,J=se.port2;se.port1.onmessage=G,Z=function(){J.postMessage(null)}}else Z=function(){y(G,0)};function ee(re){O=re,U||(U=!0,Z())}function H(re,le){E=y(function(){re(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(re){re.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ee(F))},s.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<re?Math.floor(1e3/re):5},s.unstable_getCurrentPriorityLevel=function(){return p},s.unstable_getFirstCallbackNode=function(){return t(m)},s.unstable_next=function(re){switch(p){case 1:case 2:case 3:var le=3;break;default:le=p}var ue=p;p=le;try{return re()}finally{p=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(re,le){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ue=p;p=re;try{return le()}finally{p=ue}},s.unstable_scheduleCallback=function(re,le,ue){var V=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?V+ue:V):ue=V,re){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ue+$,re={id:x++,callback:le,priorityLevel:re,startTime:ue,expirationTime:$,sortIndex:-1},ue>V?(re.sortIndex=ue,e(h,re),t(m)===null&&re===t(h)&&(C?(_(E),E=-1):C=!0,H(P,ue-V))):(re.sortIndex=$,e(m,re),w||S||(w=!0,ee(F))),re},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(re){var le=p;return function(){var ue=p;p=le;try{return re.apply(this,arguments)}finally{p=ue}}}})(cd)),cd}var Tm;function nv(){return Tm||(Tm=1,ld.exports=tv()),ld.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function iv(){if(Am)return hi;Am=1;var s=zf(),e=nv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function p(n){return m.call(v,n)?!0:m.call(x,n)?!1:h.test(n)?v[n]=!0:(x[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,o,c,d,g,R){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=R}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,b);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,b);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,b);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,o,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,d,c)&&(o=null),c||d===null?p(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),U=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),z=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),re=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=re&&n[re]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,V;function $(n){if(V===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var Le=!1;function Pe(n,i){if(!n||Le)return"";Le=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ye){var c=ye}Reflect.construct(n,[],i)}else{try{i.call()}catch(ye){c=ye}n.call(i.prototype)}else{try{throw Error()}catch(ye){c=ye}n()}}catch(ye){if(ye&&c&&typeof ye.stack=="string"){for(var d=ye.stack.split(`
`),g=c.stack.split(`
`),R=d.length-1,W=g.length-1;1<=R&&0<=W&&d[R]!==g[W];)W--;for(;1<=R&&0<=W;R--,W--)if(d[R]!==g[W]){if(R!==1||W!==1)do if(R--,W--,0>W||d[R]!==g[W]){var K=`
`+d[R].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=R&&0<=W);break}}}finally{Le=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?$(n):""}function ze(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Pe(n.type,!1),n;case 11:return n=Pe(n.type.render,!1),n;case 1:return n=Pe(n.type,!0),n;default:return""}}function oe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case U:return"Portal";case A:return"Profiler";case E:return"StrictMode";case Z:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case Y:return(n._context.displayName||"Context")+".Provider";case G:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J:return i=n.displayName||null,i!==null?i:oe(n.type)||"Memo";case ee:i=n._payload,n=n._init;try{return oe(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ce(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Be(n){var i=Ce(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(R){c=""+R,g.call(this,R)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(R){c=""+R},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function tt(n){n._valueTracker||(n._valueTracker=Be(n))}function It(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Ce(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ft(n,i){var o=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function it(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Me(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function rt(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function Ze(n,i){rt(n,i);var o=Me(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ht(n,i.type,o):i.hasOwnProperty("defaultValue")&&ht(n,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function j(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function ht(n,i,o){(i!=="number"||dt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var gt=Array.isArray;function St(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Me(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ve(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(gt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Me(o)}}function M(n,i){var o=Me(i.value),c=Me(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function q(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ae(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Se(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ae(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var B,te=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(B=B||document.createElement("div"),B.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=B.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function T(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var k={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];Object.keys(k).forEach(function(n){he.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),k[i]=k[n]})});function ce(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||k.hasOwnProperty(n)&&k[n]?(""+i).trim():i+"px"}function xe(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=ce(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Re=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Te(n,i){if(i){if(Re[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function be(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var We=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var we=null,Ae=null,Ue=null;function Ee(n){if(n=qo(n)){if(typeof we!="function")throw Error(t(280));var i=n.stateNode;i&&(i=qa(i),we(n.stateNode,n.type,i))}}function ge(n){Ae?Ue?Ue.push(n):Ue=[n]:Ae=n}function ke(){if(Ae){var n=Ae,i=Ue;if(Ue=Ae=null,Ee(n),i)for(n=0;n<i.length;n++)Ee(i[n])}}function Je(n,i){return n(i)}function Mt(){}var wt=!1;function qt(n,i,o){if(wt)return n(i,o);wt=!0;try{return Je(n,i,o)}finally{wt=!1,(Ae!==null||Ue!==null)&&(Mt(),ke())}}function Vt(n,i){var o=n.stateNode;if(o===null)return null;var c=qa(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var an=!1;if(f)try{var nn={};Object.defineProperty(nn,"passive",{get:function(){an=!0}}),window.addEventListener("test",nn,nn),window.removeEventListener("test",nn,nn)}catch{an=!1}function Gt(n,i,o,c,d,g,R,W,K){var ye=Array.prototype.slice.call(arguments,3);try{i.apply(o,ye)}catch(Ne){this.onError(Ne)}}var En=!1,un=null,$t=!1,ln=null,Dn={onError:function(n){En=!0,un=n}};function rn(n,i,o,c,d,g,R,W,K){En=!1,un=null,Gt.apply(Dn,arguments)}function Ei(n,i,o,c,d,g,R,W,K){if(rn.apply(this,arguments),En){if(En){var ye=un;En=!1,un=null}else throw Error(t(198));$t||($t=!0,ln=ye)}}function Un(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function oi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ki(n){if(Un(n)!==n)throw Error(t(188))}function Di(n){var i=n.alternate;if(!i){if(i=Un(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===o)return Ki(d),n;if(g===c)return Ki(d),i;g=g.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=g;else{for(var R=!1,W=d.child;W;){if(W===o){R=!0,o=d,c=g;break}if(W===c){R=!0,c=d,o=g;break}W=W.sibling}if(!R){for(W=g.child;W;){if(W===o){R=!0,o=g,c=d;break}if(W===c){R=!0,c=g,o=d;break}W=W.sibling}if(!R)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Ui(n){return n=Di(n),n!==null?as(n):null}function as(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=as(n);if(i!==null)return i;n=n.sibling}return null}var Lr=e.unstable_scheduleCallback,Ir=e.unstable_cancelCallback,Ds=e.unstable_shouldYield,ls=e.unstable_requestPaint,I=e.unstable_now,ie=e.unstable_getCurrentPriorityLevel,ve=e.unstable_ImmediatePriority,pe=e.unstable_UserBlockingPriority,de=e.unstable_NormalPriority,je=e.unstable_LowPriority,Xe=e.unstable_IdlePriority,Ge=null,$e=null;function at(n){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Ge,n,void 0,(n.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:Wt,Dt=Math.log,Qe=Math.LN2;function Wt(n){return n>>>=0,n===0?32:31-(Dt(n)/Qe|0)|0}var Rt=64,Ft=4194304;function kt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Kt(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,R=o&268435455;if(R!==0){var W=R&~d;W!==0?c=kt(W):(g&=R,g!==0&&(c=kt(g)))}else R=o&~d,R!==0?c=kt(R):g!==0&&(c=kt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-_t(i),d=1<<o,c|=n[o],i&=~d;return c}function nt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var R=31-_t(g),W=1<<R,K=d[R];K===-1?((W&o)===0||(W&c)!==0)&&(d[R]=nt(W,i)):K<=i&&(n.expiredLanes|=W),g&=~W}}function vt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Hn(){var n=Rt;return Rt<<=1,(Rt&4194240)===0&&(Rt=64),n}function Vn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function qn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-_t(i),n[i]=o}function Fi(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-_t(o),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~g}}function Xt(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-_t(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var Ct=0;function ai(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var pn,ni,bi,Nr,De,Ye=!1,ot=[],Pt=null,Bt=null,yt=null,xn=new Map,dn=new Map,jt=[],Oi="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fr(n,i){switch(n){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":xn.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(i.pointerId)}}function Dr(n,i,o,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=qo(i),i!==null&&ni(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Sg(n,i,o,c,d){switch(i){case"focusin":return Pt=Dr(Pt,n,i,o,c,d),!0;case"dragenter":return Bt=Dr(Bt,n,i,o,c,d),!0;case"mouseover":return yt=Dr(yt,n,i,o,c,d),!0;case"pointerover":var g=d.pointerId;return xn.set(g,Dr(xn.get(g)||null,n,i,o,c,d)),!0;case"gotpointercapture":return g=d.pointerId,dn.set(g,Dr(dn.get(g)||null,n,i,o,c,d)),!0}return!1}function sh(n){var i=cs(n.target);if(i!==null){var o=Un(i);if(o!==null){if(i=o.tag,i===13){if(i=oi(o),i!==null){n.blockedOn=i,De(n.priority,function(){bi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Da(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Ic(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);We=c,o.target.dispatchEvent(c),We=null}else return i=qo(o),i!==null&&ni(i),n.blockedOn=o,!1;i.shift()}return!0}function oh(n,i,o){Da(n)&&o.delete(i)}function Mg(){Ye=!1,Pt!==null&&Da(Pt)&&(Pt=null),Bt!==null&&Da(Bt)&&(Bt=null),yt!==null&&Da(yt)&&(yt=null),xn.forEach(oh),dn.forEach(oh)}function Uo(n,i){n.blockedOn===i&&(n.blockedOn=null,Ye||(Ye=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Mg)))}function Fo(n){function i(d){return Uo(d,n)}if(0<ot.length){Uo(ot[0],n);for(var o=1;o<ot.length;o++){var c=ot[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Pt!==null&&Uo(Pt,n),Bt!==null&&Uo(Bt,n),yt!==null&&Uo(yt,n),xn.forEach(i),dn.forEach(i),o=0;o<jt.length;o++)c=jt[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<jt.length&&(o=jt[0],o.blockedOn===null);)sh(o),o.blockedOn===null&&jt.shift()}var Us=P.ReactCurrentBatchConfig,Ua=!0;function wg(n,i,o,c){var d=Ct,g=Us.transition;Us.transition=null;try{Ct=1,Lc(n,i,o,c)}finally{Ct=d,Us.transition=g}}function Eg(n,i,o,c){var d=Ct,g=Us.transition;Us.transition=null;try{Ct=4,Lc(n,i,o,c)}finally{Ct=d,Us.transition=g}}function Lc(n,i,o,c){if(Ua){var d=Ic(n,i,o,c);if(d===null)$c(n,i,c,Fa,o),fr(n,c);else if(Sg(d,n,i,o,c))c.stopPropagation();else if(fr(n,c),i&4&&-1<Oi.indexOf(n)){for(;d!==null;){var g=qo(d);if(g!==null&&pn(g),g=Ic(n,i,o,c),g===null&&$c(n,i,c,Fa,o),g===d)break;d=g}d!==null&&c.stopPropagation()}else $c(n,i,c,null,o)}}var Fa=null;function Ic(n,i,o,c){if(Fa=null,n=X(c),n=cs(n),n!==null)if(i=Un(n),i===null)n=null;else if(o=i.tag,o===13){if(n=oi(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Fa=n,null}function ah(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ie()){case ve:return 1;case pe:return 4;case de:case je:return 16;case Xe:return 536870912;default:return 16}default:return 16}}var Ur=null,Nc=null,Oa=null;function lh(){if(Oa)return Oa;var n,i=Nc,o=i.length,c,d="value"in Ur?Ur.value:Ur.textContent,g=d.length;for(n=0;n<o&&i[n]===d[n];n++);var R=o-n;for(c=1;c<=R&&i[o-c]===d[g-c];c++);return Oa=d.slice(n,1<c?1-c:void 0)}function ka(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function za(){return!0}function ch(){return!1}function xi(n){function i(o,c,d,g,R){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=R,this.currentTarget=null;for(var W in n)n.hasOwnProperty(W)&&(o=n[W],this[W]=o?o(g):g[W]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?za:ch,this.isPropagationStopped=ch,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),i}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dc=xi(Fs),Oo=ue({},Fs,{view:0,detail:0}),bg=xi(Oo),Uc,Fc,ko,Ba=ue({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ko&&(ko&&n.type==="mousemove"?(Uc=n.screenX-ko.screenX,Fc=n.screenY-ko.screenY):Fc=Uc=0,ko=n),Uc)},movementY:function(n){return"movementY"in n?n.movementY:Fc}}),uh=xi(Ba),Tg=ue({},Ba,{dataTransfer:0}),Ag=xi(Tg),Cg=ue({},Oo,{relatedTarget:0}),Oc=xi(Cg),Rg=ue({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Pg=xi(Rg),Lg=ue({},Fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ig=xi(Lg),Ng=ue({},Fs,{data:0}),dh=xi(Ng),Dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Og(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Fg[n])?!!i[n]:!1}function kc(){return Og}var kg=ue({},Oo,{key:function(n){if(n.key){var i=Dg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ka(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ug[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(n){return n.type==="keypress"?ka(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ka(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),zg=xi(kg),Bg=ue({},Ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=xi(Bg),Hg=ue({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),Vg=xi(Hg),Gg=ue({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wg=xi(Gg),jg=ue({},Ba,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Xg=xi(jg),Yg=[9,13,27,32],zc=f&&"CompositionEvent"in window,zo=null;f&&"documentMode"in document&&(zo=document.documentMode);var qg=f&&"TextEvent"in window&&!zo,hh=f&&(!zc||zo&&8<zo&&11>=zo),ph=" ",mh=!1;function gh(n,i){switch(n){case"keyup":return Yg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Os=!1;function $g(n,i){switch(n){case"compositionend":return xh(i);case"keypress":return i.which!==32?null:(mh=!0,ph);case"textInput":return n=i.data,n===ph&&mh?null:n;default:return null}}function Kg(n,i){if(Os)return n==="compositionend"||!zc&&gh(n,i)?(n=lh(),Oa=Nc=Ur=null,Os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return hh&&i.locale!=="ko"?null:i.data;default:return null}}var Zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Zg[n.type]:i==="textarea"}function _h(n,i,o,c){ge(c),i=ja(i,"onChange"),0<i.length&&(o=new Dc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var Bo=null,Ho=null;function Jg(n){Oh(n,0)}function Ha(n){var i=Vs(n);if(It(i))return n}function Qg(n,i){if(n==="change")return i}var yh=!1;if(f){var Bc;if(f){var Hc="oninput"in document;if(!Hc){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),Hc=typeof Sh.oninput=="function"}Bc=Hc}else Bc=!1;yh=Bc&&(!document.documentMode||9<document.documentMode)}function Mh(){Bo&&(Bo.detachEvent("onpropertychange",wh),Ho=Bo=null)}function wh(n){if(n.propertyName==="value"&&Ha(Ho)){var i=[];_h(i,Ho,n,X(n)),qt(Jg,i)}}function ex(n,i,o){n==="focusin"?(Mh(),Bo=i,Ho=o,Bo.attachEvent("onpropertychange",wh)):n==="focusout"&&Mh()}function tx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ha(Ho)}function nx(n,i){if(n==="click")return Ha(i)}function ix(n,i){if(n==="input"||n==="change")return Ha(i)}function rx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ki=typeof Object.is=="function"?Object.is:rx;function Vo(n,i){if(ki(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!m.call(i,d)||!ki(n[d],i[d]))return!1}return!0}function Eh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bh(n,i){var o=Eh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Eh(o)}}function Th(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Th(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ah(){for(var n=window,i=dt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=dt(n.document)}return i}function Vc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function sx(n){var i=Ah(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Th(o.ownerDocument.documentElement,o)){if(c!==null&&Vc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=bh(o,g);var R=bh(o,c);d&&R&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==R.node||n.focusOffset!==R.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(R.node,R.offset)):(i.setEnd(R.node,R.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ox=f&&"documentMode"in document&&11>=document.documentMode,ks=null,Gc=null,Go=null,Wc=!1;function Ch(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Wc||ks==null||ks!==dt(c)||(c=ks,"selectionStart"in c&&Vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Go&&Vo(Go,c)||(Go=c,c=ja(Gc,"onSelect"),0<c.length&&(i=new Dc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=ks)))}function Va(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var zs={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},jc={},Rh={};f&&(Rh=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Ga(n){if(jc[n])return jc[n];if(!zs[n])return n;var i=zs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Rh)return jc[n]=i[o];return n}var Ph=Ga("animationend"),Lh=Ga("animationiteration"),Ih=Ga("animationstart"),Nh=Ga("transitionend"),Dh=new Map,Uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,i){Dh.set(n,i),l(i,[n])}for(var Xc=0;Xc<Uh.length;Xc++){var Yc=Uh[Xc],ax=Yc.toLowerCase(),lx=Yc[0].toUpperCase()+Yc.slice(1);Fr(ax,"on"+lx)}Fr(Ph,"onAnimationEnd"),Fr(Lh,"onAnimationIteration"),Fr(Ih,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(Nh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function Fh(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,Ei(c,i,void 0,n),n.currentTarget=null}function Oh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var R=c.length-1;0<=R;R--){var W=c[R],K=W.instance,ye=W.currentTarget;if(W=W.listener,K!==g&&d.isPropagationStopped())break e;Fh(d,W,ye),g=K}else for(R=0;R<c.length;R++){if(W=c[R],K=W.instance,ye=W.currentTarget,W=W.listener,K!==g&&d.isPropagationStopped())break e;Fh(d,W,ye),g=K}}}if($t)throw n=ln,$t=!1,ln=null,n}function fn(n,i){var o=i[tu];o===void 0&&(o=i[tu]=new Set);var c=n+"__bubble";o.has(c)||(kh(i,n,2,!1),o.add(c))}function qc(n,i,o){var c=0;i&&(c|=4),kh(o,n,c,i)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function jo(n){if(!n[Wa]){n[Wa]=!0,r.forEach(function(o){o!=="selectionchange"&&(cx.has(o)||qc(o,!1,n),qc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Wa]||(i[Wa]=!0,qc("selectionchange",!1,i))}}function kh(n,i,o,c){switch(ah(i)){case 1:var d=wg;break;case 4:d=Eg;break;default:d=Lc}o=d.bind(null,i,o,n),d=void 0,!an||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function $c(n,i,o,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var R=c.tag;if(R===3||R===4){var W=c.stateNode.containerInfo;if(W===d||W.nodeType===8&&W.parentNode===d)break;if(R===4)for(R=c.return;R!==null;){var K=R.tag;if((K===3||K===4)&&(K=R.stateNode.containerInfo,K===d||K.nodeType===8&&K.parentNode===d))return;R=R.return}for(;W!==null;){if(R=cs(W),R===null)return;if(K=R.tag,K===5||K===6){c=g=R;continue e}W=W.parentNode}}c=c.return}qt(function(){var ye=g,Ne=X(o),Fe=[];e:{var Ie=Dh.get(n);if(Ie!==void 0){var Ke=Dc,lt=n;switch(n){case"keypress":if(ka(o)===0)break e;case"keydown":case"keyup":Ke=zg;break;case"focusin":lt="focus",Ke=Oc;break;case"focusout":lt="blur",Ke=Oc;break;case"beforeblur":case"afterblur":Ke=Oc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=Ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=Vg;break;case Ph:case Lh:case Ih:Ke=Pg;break;case Nh:Ke=Wg;break;case"scroll":Ke=bg;break;case"wheel":Ke=Xg;break;case"copy":case"cut":case"paste":Ke=Ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=fh}var pt=(i&4)!==0,wn=!pt&&n==="scroll",fe=pt?Ie!==null?Ie+"Capture":null:Ie;pt=[];for(var Q=ye,me;Q!==null;){me=Q;var He=me.stateNode;if(me.tag===5&&He!==null&&(me=He,fe!==null&&(He=Vt(Q,fe),He!=null&&pt.push(Xo(Q,He,me)))),wn)break;Q=Q.return}0<pt.length&&(Ie=new Ke(Ie,lt,null,o,Ne),Fe.push({event:Ie,listeners:pt}))}}if((i&7)===0){e:{if(Ie=n==="mouseover"||n==="pointerover",Ke=n==="mouseout"||n==="pointerout",Ie&&o!==We&&(lt=o.relatedTarget||o.fromElement)&&(cs(lt)||lt[hr]))break e;if((Ke||Ie)&&(Ie=Ne.window===Ne?Ne:(Ie=Ne.ownerDocument)?Ie.defaultView||Ie.parentWindow:window,Ke?(lt=o.relatedTarget||o.toElement,Ke=ye,lt=lt?cs(lt):null,lt!==null&&(wn=Un(lt),lt!==wn||lt.tag!==5&&lt.tag!==6)&&(lt=null)):(Ke=null,lt=ye),Ke!==lt)){if(pt=uh,He="onMouseLeave",fe="onMouseEnter",Q="mouse",(n==="pointerout"||n==="pointerover")&&(pt=fh,He="onPointerLeave",fe="onPointerEnter",Q="pointer"),wn=Ke==null?Ie:Vs(Ke),me=lt==null?Ie:Vs(lt),Ie=new pt(He,Q+"leave",Ke,o,Ne),Ie.target=wn,Ie.relatedTarget=me,He=null,cs(Ne)===ye&&(pt=new pt(fe,Q+"enter",lt,o,Ne),pt.target=me,pt.relatedTarget=wn,He=pt),wn=He,Ke&&lt)t:{for(pt=Ke,fe=lt,Q=0,me=pt;me;me=Bs(me))Q++;for(me=0,He=fe;He;He=Bs(He))me++;for(;0<Q-me;)pt=Bs(pt),Q--;for(;0<me-Q;)fe=Bs(fe),me--;for(;Q--;){if(pt===fe||fe!==null&&pt===fe.alternate)break t;pt=Bs(pt),fe=Bs(fe)}pt=null}else pt=null;Ke!==null&&zh(Fe,Ie,Ke,pt,!1),lt!==null&&wn!==null&&zh(Fe,wn,lt,pt,!0)}}e:{if(Ie=ye?Vs(ye):window,Ke=Ie.nodeName&&Ie.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&Ie.type==="file")var xt=Qg;else if(vh(Ie))if(yh)xt=ix;else{xt=tx;var bt=ex}else(Ke=Ie.nodeName)&&Ke.toLowerCase()==="input"&&(Ie.type==="checkbox"||Ie.type==="radio")&&(xt=nx);if(xt&&(xt=xt(n,ye))){_h(Fe,xt,o,Ne);break e}bt&&bt(n,Ie,ye),n==="focusout"&&(bt=Ie._wrapperState)&&bt.controlled&&Ie.type==="number"&&ht(Ie,"number",Ie.value)}switch(bt=ye?Vs(ye):window,n){case"focusin":(vh(bt)||bt.contentEditable==="true")&&(ks=bt,Gc=ye,Go=null);break;case"focusout":Go=Gc=ks=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,Ch(Fe,o,Ne);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":Ch(Fe,o,Ne)}var Tt;if(zc)e:{switch(n){case"compositionstart":var Lt="onCompositionStart";break e;case"compositionend":Lt="onCompositionEnd";break e;case"compositionupdate":Lt="onCompositionUpdate";break e}Lt=void 0}else Os?gh(n,o)&&(Lt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Lt="onCompositionStart");Lt&&(hh&&o.locale!=="ko"&&(Os||Lt!=="onCompositionStart"?Lt==="onCompositionEnd"&&Os&&(Tt=lh()):(Ur=Ne,Nc="value"in Ur?Ur.value:Ur.textContent,Os=!0)),bt=ja(ye,Lt),0<bt.length&&(Lt=new dh(Lt,n,null,o,Ne),Fe.push({event:Lt,listeners:bt}),Tt?Lt.data=Tt:(Tt=xh(o),Tt!==null&&(Lt.data=Tt)))),(Tt=qg?$g(n,o):Kg(n,o))&&(ye=ja(ye,"onBeforeInput"),0<ye.length&&(Ne=new dh("onBeforeInput","beforeinput",null,o,Ne),Fe.push({event:Ne,listeners:ye}),Ne.data=Tt))}Oh(Fe,i)})}function Xo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function ja(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=Vt(n,o),g!=null&&c.unshift(Xo(n,g,d)),g=Vt(n,i),g!=null&&c.push(Xo(n,g,d))),n=n.return}return c}function Bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zh(n,i,o,c,d){for(var g=i._reactName,R=[];o!==null&&o!==c;){var W=o,K=W.alternate,ye=W.stateNode;if(K!==null&&K===c)break;W.tag===5&&ye!==null&&(W=ye,d?(K=Vt(o,g),K!=null&&R.unshift(Xo(o,K,W))):d||(K=Vt(o,g),K!=null&&R.push(Xo(o,K,W)))),o=o.return}R.length!==0&&n.push({event:i,listeners:R})}var ux=/\r\n?/g,dx=/\u0000|\uFFFD/g;function Bh(n){return(typeof n=="string"?n:""+n).replace(ux,`
`).replace(dx,"")}function Xa(n,i,o){if(i=Bh(i),Bh(n)!==i&&o)throw Error(t(425))}function Ya(){}var Kc=null,Zc=null;function Jc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,fx=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(n){return Hh.resolve(null).then(n).catch(px)}:Qc;function px(n){setTimeout(function(){throw n})}function eu(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),Fo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);Fo(i)}function Or(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Vh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),Zi="__reactFiber$"+Hs,Yo="__reactProps$"+Hs,hr="__reactContainer$"+Hs,tu="__reactEvents$"+Hs,mx="__reactListeners$"+Hs,gx="__reactHandles$"+Hs;function cs(n){var i=n[Zi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[hr]||o[Zi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Vh(n);n!==null;){if(o=n[Zi])return o;n=Vh(n)}return i}n=o,o=n.parentNode}return null}function qo(n){return n=n[Zi]||n[hr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function qa(n){return n[Yo]||null}var nu=[],Gs=-1;function kr(n){return{current:n}}function hn(n){0>Gs||(n.current=nu[Gs],nu[Gs]=null,Gs--)}function cn(n,i){Gs++,nu[Gs]=n.current,n.current=i}var zr={},$n=kr(zr),li=kr(!1),us=zr;function Ws(n,i){var o=n.type.contextTypes;if(!o)return zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in o)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function ci(n){return n=n.childContextTypes,n!=null}function $a(){hn(li),hn($n)}function Gh(n,i,o){if($n.current!==zr)throw Error(t(168));cn($n,i),cn(li,o)}function Wh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,_e(n)||"Unknown",d));return ue({},o,c)}function Ka(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zr,us=$n.current,cn($n,n),cn(li,li.current),!0}function jh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Wh(n,i,us),c.__reactInternalMemoizedMergedChildContext=n,hn(li),hn($n),cn($n,n)):hn(li),cn(li,o)}var pr=null,Za=!1,iu=!1;function Xh(n){pr===null?pr=[n]:pr.push(n)}function xx(n){Za=!0,Xh(n)}function Br(){if(!iu&&pr!==null){iu=!0;var n=0,i=Ct;try{var o=pr;for(Ct=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}pr=null,Za=!1}catch(d){throw pr!==null&&(pr=pr.slice(n+1)),Lr(ve,Br),d}finally{Ct=i,iu=!1}}return null}var js=[],Xs=0,Ja=null,Qa=0,Ti=[],Ai=0,ds=null,mr=1,gr="";function fs(n,i){js[Xs++]=Qa,js[Xs++]=Ja,Ja=n,Qa=i}function Yh(n,i,o){Ti[Ai++]=mr,Ti[Ai++]=gr,Ti[Ai++]=ds,ds=n;var c=mr;n=gr;var d=32-_t(c)-1;c&=~(1<<d),o+=1;var g=32-_t(i)+d;if(30<g){var R=d-d%5;g=(c&(1<<R)-1).toString(32),c>>=R,d-=R,mr=1<<32-_t(i)+d|o<<d|c,gr=g+n}else mr=1<<g|o<<d|c,gr=n}function ru(n){n.return!==null&&(fs(n,1),Yh(n,1,0))}function su(n){for(;n===Ja;)Ja=js[--Xs],js[Xs]=null,Qa=js[--Xs],js[Xs]=null;for(;n===ds;)ds=Ti[--Ai],Ti[Ai]=null,gr=Ti[--Ai],Ti[Ai]=null,mr=Ti[--Ai],Ti[Ai]=null}var vi=null,_i=null,mn=!1,zi=null;function qh(n,i){var o=Li(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function $h(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,vi=n,_i=Or(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,vi=n,_i=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ds!==null?{id:mr,overflow:gr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Li(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,vi=n,_i=null,!0):!1;default:return!1}}function ou(n){return(n.mode&1)!==0&&(n.flags&128)===0}function au(n){if(mn){var i=_i;if(i){var o=i;if(!$h(n,i)){if(ou(n))throw Error(t(418));i=Or(o.nextSibling);var c=vi;i&&$h(n,i)?qh(c,o):(n.flags=n.flags&-4097|2,mn=!1,vi=n)}}else{if(ou(n))throw Error(t(418));n.flags=n.flags&-4097|2,mn=!1,vi=n}}}function Kh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;vi=n}function el(n){if(n!==vi)return!1;if(!mn)return Kh(n),mn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Jc(n.type,n.memoizedProps)),i&&(i=_i)){if(ou(n))throw Zh(),Error(t(418));for(;i;)qh(n,i),i=Or(i.nextSibling)}if(Kh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){_i=Or(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}_i=null}}else _i=vi?Or(n.stateNode.nextSibling):null;return!0}function Zh(){for(var n=_i;n;)n=Or(n.nextSibling)}function Ys(){_i=vi=null,mn=!1}function lu(n){zi===null?zi=[n]:zi.push(n)}var vx=P.ReactCurrentBatchConfig;function $o(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(R){var W=d.refs;R===null?delete W[g]:W[g]=R},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function tl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Jh(n){var i=n._init;return i(n._payload)}function Qh(n){function i(fe,Q){if(n){var me=fe.deletions;me===null?(fe.deletions=[Q],fe.flags|=16):me.push(Q)}}function o(fe,Q){if(!n)return null;for(;Q!==null;)i(fe,Q),Q=Q.sibling;return null}function c(fe,Q){for(fe=new Map;Q!==null;)Q.key!==null?fe.set(Q.key,Q):fe.set(Q.index,Q),Q=Q.sibling;return fe}function d(fe,Q){return fe=qr(fe,Q),fe.index=0,fe.sibling=null,fe}function g(fe,Q,me){return fe.index=me,n?(me=fe.alternate,me!==null?(me=me.index,me<Q?(fe.flags|=2,Q):me):(fe.flags|=2,Q)):(fe.flags|=1048576,Q)}function R(fe){return n&&fe.alternate===null&&(fe.flags|=2),fe}function W(fe,Q,me,He){return Q===null||Q.tag!==6?(Q=Qu(me,fe.mode,He),Q.return=fe,Q):(Q=d(Q,me),Q.return=fe,Q)}function K(fe,Q,me,He){var xt=me.type;return xt===O?Ne(fe,Q,me.props.children,He,me.key):Q!==null&&(Q.elementType===xt||typeof xt=="object"&&xt!==null&&xt.$$typeof===ee&&Jh(xt)===Q.type)?(He=d(Q,me.props),He.ref=$o(fe,Q,me),He.return=fe,He):(He=bl(me.type,me.key,me.props,null,fe.mode,He),He.ref=$o(fe,Q,me),He.return=fe,He)}function ye(fe,Q,me,He){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==me.containerInfo||Q.stateNode.implementation!==me.implementation?(Q=ed(me,fe.mode,He),Q.return=fe,Q):(Q=d(Q,me.children||[]),Q.return=fe,Q)}function Ne(fe,Q,me,He,xt){return Q===null||Q.tag!==7?(Q=ys(me,fe.mode,He,xt),Q.return=fe,Q):(Q=d(Q,me),Q.return=fe,Q)}function Fe(fe,Q,me){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=Qu(""+Q,fe.mode,me),Q.return=fe,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case F:return me=bl(Q.type,Q.key,Q.props,null,fe.mode,me),me.ref=$o(fe,null,Q),me.return=fe,me;case U:return Q=ed(Q,fe.mode,me),Q.return=fe,Q;case ee:var He=Q._init;return Fe(fe,He(Q._payload),me)}if(gt(Q)||le(Q))return Q=ys(Q,fe.mode,me,null),Q.return=fe,Q;tl(fe,Q)}return null}function Ie(fe,Q,me,He){var xt=Q!==null?Q.key:null;if(typeof me=="string"&&me!==""||typeof me=="number")return xt!==null?null:W(fe,Q,""+me,He);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case F:return me.key===xt?K(fe,Q,me,He):null;case U:return me.key===xt?ye(fe,Q,me,He):null;case ee:return xt=me._init,Ie(fe,Q,xt(me._payload),He)}if(gt(me)||le(me))return xt!==null?null:Ne(fe,Q,me,He,null);tl(fe,me)}return null}function Ke(fe,Q,me,He,xt){if(typeof He=="string"&&He!==""||typeof He=="number")return fe=fe.get(me)||null,W(Q,fe,""+He,xt);if(typeof He=="object"&&He!==null){switch(He.$$typeof){case F:return fe=fe.get(He.key===null?me:He.key)||null,K(Q,fe,He,xt);case U:return fe=fe.get(He.key===null?me:He.key)||null,ye(Q,fe,He,xt);case ee:var bt=He._init;return Ke(fe,Q,me,bt(He._payload),xt)}if(gt(He)||le(He))return fe=fe.get(me)||null,Ne(Q,fe,He,xt,null);tl(Q,He)}return null}function lt(fe,Q,me,He){for(var xt=null,bt=null,Tt=Q,Lt=Q=0,kn=null;Tt!==null&&Lt<me.length;Lt++){Tt.index>Lt?(kn=Tt,Tt=null):kn=Tt.sibling;var en=Ie(fe,Tt,me[Lt],He);if(en===null){Tt===null&&(Tt=kn);break}n&&Tt&&en.alternate===null&&i(fe,Tt),Q=g(en,Q,Lt),bt===null?xt=en:bt.sibling=en,bt=en,Tt=kn}if(Lt===me.length)return o(fe,Tt),mn&&fs(fe,Lt),xt;if(Tt===null){for(;Lt<me.length;Lt++)Tt=Fe(fe,me[Lt],He),Tt!==null&&(Q=g(Tt,Q,Lt),bt===null?xt=Tt:bt.sibling=Tt,bt=Tt);return mn&&fs(fe,Lt),xt}for(Tt=c(fe,Tt);Lt<me.length;Lt++)kn=Ke(Tt,fe,Lt,me[Lt],He),kn!==null&&(n&&kn.alternate!==null&&Tt.delete(kn.key===null?Lt:kn.key),Q=g(kn,Q,Lt),bt===null?xt=kn:bt.sibling=kn,bt=kn);return n&&Tt.forEach(function($r){return i(fe,$r)}),mn&&fs(fe,Lt),xt}function pt(fe,Q,me,He){var xt=le(me);if(typeof xt!="function")throw Error(t(150));if(me=xt.call(me),me==null)throw Error(t(151));for(var bt=xt=null,Tt=Q,Lt=Q=0,kn=null,en=me.next();Tt!==null&&!en.done;Lt++,en=me.next()){Tt.index>Lt?(kn=Tt,Tt=null):kn=Tt.sibling;var $r=Ie(fe,Tt,en.value,He);if($r===null){Tt===null&&(Tt=kn);break}n&&Tt&&$r.alternate===null&&i(fe,Tt),Q=g($r,Q,Lt),bt===null?xt=$r:bt.sibling=$r,bt=$r,Tt=kn}if(en.done)return o(fe,Tt),mn&&fs(fe,Lt),xt;if(Tt===null){for(;!en.done;Lt++,en=me.next())en=Fe(fe,en.value,He),en!==null&&(Q=g(en,Q,Lt),bt===null?xt=en:bt.sibling=en,bt=en);return mn&&fs(fe,Lt),xt}for(Tt=c(fe,Tt);!en.done;Lt++,en=me.next())en=Ke(Tt,fe,Lt,en.value,He),en!==null&&(n&&en.alternate!==null&&Tt.delete(en.key===null?Lt:en.key),Q=g(en,Q,Lt),bt===null?xt=en:bt.sibling=en,bt=en);return n&&Tt.forEach(function(Zx){return i(fe,Zx)}),mn&&fs(fe,Lt),xt}function wn(fe,Q,me,He){if(typeof me=="object"&&me!==null&&me.type===O&&me.key===null&&(me=me.props.children),typeof me=="object"&&me!==null){switch(me.$$typeof){case F:e:{for(var xt=me.key,bt=Q;bt!==null;){if(bt.key===xt){if(xt=me.type,xt===O){if(bt.tag===7){o(fe,bt.sibling),Q=d(bt,me.props.children),Q.return=fe,fe=Q;break e}}else if(bt.elementType===xt||typeof xt=="object"&&xt!==null&&xt.$$typeof===ee&&Jh(xt)===bt.type){o(fe,bt.sibling),Q=d(bt,me.props),Q.ref=$o(fe,bt,me),Q.return=fe,fe=Q;break e}o(fe,bt);break}else i(fe,bt);bt=bt.sibling}me.type===O?(Q=ys(me.props.children,fe.mode,He,me.key),Q.return=fe,fe=Q):(He=bl(me.type,me.key,me.props,null,fe.mode,He),He.ref=$o(fe,Q,me),He.return=fe,fe=He)}return R(fe);case U:e:{for(bt=me.key;Q!==null;){if(Q.key===bt)if(Q.tag===4&&Q.stateNode.containerInfo===me.containerInfo&&Q.stateNode.implementation===me.implementation){o(fe,Q.sibling),Q=d(Q,me.children||[]),Q.return=fe,fe=Q;break e}else{o(fe,Q);break}else i(fe,Q);Q=Q.sibling}Q=ed(me,fe.mode,He),Q.return=fe,fe=Q}return R(fe);case ee:return bt=me._init,wn(fe,Q,bt(me._payload),He)}if(gt(me))return lt(fe,Q,me,He);if(le(me))return pt(fe,Q,me,He);tl(fe,me)}return typeof me=="string"&&me!==""||typeof me=="number"?(me=""+me,Q!==null&&Q.tag===6?(o(fe,Q.sibling),Q=d(Q,me),Q.return=fe,fe=Q):(o(fe,Q),Q=Qu(me,fe.mode,He),Q.return=fe,fe=Q),R(fe)):o(fe,Q)}return wn}var qs=Qh(!0),ep=Qh(!1),nl=kr(null),il=null,$s=null,cu=null;function uu(){cu=$s=il=null}function du(n){var i=nl.current;hn(nl),n._currentValue=i}function fu(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Ks(n,i){il=n,cu=$s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ui=!0),n.firstContext=null)}function Ci(n){var i=n._currentValue;if(cu!==n)if(n={context:n,memoizedValue:i,next:null},$s===null){if(il===null)throw Error(t(308));$s=n,il.dependencies={lanes:0,firstContext:n}}else $s=$s.next=n;return i}var hs=null;function hu(n){hs===null?hs=[n]:hs.push(n)}function tp(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,hu(i)):(o.next=d.next,d.next=o),i.interleaved=o,xr(n,c)}function xr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Hr=!1;function pu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function np(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Vr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Zt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,xr(n,o)}return d=c.interleaved,d===null?(i.next=i,hu(c)):(i.next=d.next,d.next=i),c.interleaved=i,xr(n,o)}function rl(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Xt(n,o)}}function ip(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var R={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?d=g=R:g=g.next=R,o=o.next}while(o!==null);g===null?d=g=i:g=g.next=i}else d=g=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function sl(n,i,o,c){var d=n.updateQueue;Hr=!1;var g=d.firstBaseUpdate,R=d.lastBaseUpdate,W=d.shared.pending;if(W!==null){d.shared.pending=null;var K=W,ye=K.next;K.next=null,R===null?g=ye:R.next=ye,R=K;var Ne=n.alternate;Ne!==null&&(Ne=Ne.updateQueue,W=Ne.lastBaseUpdate,W!==R&&(W===null?Ne.firstBaseUpdate=ye:W.next=ye,Ne.lastBaseUpdate=K))}if(g!==null){var Fe=d.baseState;R=0,Ne=ye=K=null,W=g;do{var Ie=W.lane,Ke=W.eventTime;if((c&Ie)===Ie){Ne!==null&&(Ne=Ne.next={eventTime:Ke,lane:0,tag:W.tag,payload:W.payload,callback:W.callback,next:null});e:{var lt=n,pt=W;switch(Ie=i,Ke=o,pt.tag){case 1:if(lt=pt.payload,typeof lt=="function"){Fe=lt.call(Ke,Fe,Ie);break e}Fe=lt;break e;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=pt.payload,Ie=typeof lt=="function"?lt.call(Ke,Fe,Ie):lt,Ie==null)break e;Fe=ue({},Fe,Ie);break e;case 2:Hr=!0}}W.callback!==null&&W.lane!==0&&(n.flags|=64,Ie=d.effects,Ie===null?d.effects=[W]:Ie.push(W))}else Ke={eventTime:Ke,lane:Ie,tag:W.tag,payload:W.payload,callback:W.callback,next:null},Ne===null?(ye=Ne=Ke,K=Fe):Ne=Ne.next=Ke,R|=Ie;if(W=W.next,W===null){if(W=d.shared.pending,W===null)break;Ie=W,W=Ie.next,Ie.next=null,d.lastBaseUpdate=Ie,d.shared.pending=null}}while(!0);if(Ne===null&&(K=Fe),d.baseState=K,d.firstBaseUpdate=ye,d.lastBaseUpdate=Ne,i=d.shared.interleaved,i!==null){d=i;do R|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);gs|=R,n.lanes=R,n.memoizedState=Fe}}function rp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ko={},Ji=kr(Ko),Zo=kr(Ko),Jo=kr(Ko);function ps(n){if(n===Ko)throw Error(t(174));return n}function mu(n,i){switch(cn(Jo,i),cn(Zo,n),cn(Ji,Ko),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Se(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Se(i,n)}hn(Ji),cn(Ji,i)}function Zs(){hn(Ji),hn(Zo),hn(Jo)}function sp(n){ps(Jo.current);var i=ps(Ji.current),o=Se(i,n.type);i!==o&&(cn(Zo,n),cn(Ji,o))}function gu(n){Zo.current===n&&(hn(Ji),hn(Zo))}var vn=kr(0);function ol(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xu=[];function vu(){for(var n=0;n<xu.length;n++)xu[n]._workInProgressVersionPrimary=null;xu.length=0}var al=P.ReactCurrentDispatcher,_u=P.ReactCurrentBatchConfig,ms=0,_n=null,Rn=null,Fn=null,ll=!1,Qo=!1,ea=0,_x=0;function Kn(){throw Error(t(321))}function yu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ki(n[o],i[o]))return!1;return!0}function Su(n,i,o,c,d,g){if(ms=g,_n=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,al.current=n===null||n.memoizedState===null?wx:Ex,n=o(c,d),Qo){g=0;do{if(Qo=!1,ea=0,25<=g)throw Error(t(301));g+=1,Fn=Rn=null,i.updateQueue=null,al.current=bx,n=o(c,d)}while(Qo)}if(al.current=dl,i=Rn!==null&&Rn.next!==null,ms=0,Fn=Rn=_n=null,ll=!1,i)throw Error(t(300));return n}function Mu(){var n=ea!==0;return ea=0,n}function Qi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fn===null?_n.memoizedState=Fn=n:Fn=Fn.next=n,Fn}function Ri(){if(Rn===null){var n=_n.alternate;n=n!==null?n.memoizedState:null}else n=Rn.next;var i=Fn===null?_n.memoizedState:Fn.next;if(i!==null)Fn=i,Rn=n;else{if(n===null)throw Error(t(310));Rn=n,n={memoizedState:Rn.memoizedState,baseState:Rn.baseState,baseQueue:Rn.baseQueue,queue:Rn.queue,next:null},Fn===null?_n.memoizedState=Fn=n:Fn=Fn.next=n}return Fn}function ta(n,i){return typeof i=="function"?i(n):i}function wu(n){var i=Ri(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=Rn,d=c.baseQueue,g=o.pending;if(g!==null){if(d!==null){var R=d.next;d.next=g.next,g.next=R}c.baseQueue=d=g,o.pending=null}if(d!==null){g=d.next,c=c.baseState;var W=R=null,K=null,ye=g;do{var Ne=ye.lane;if((ms&Ne)===Ne)K!==null&&(K=K.next={lane:0,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null}),c=ye.hasEagerState?ye.eagerState:n(c,ye.action);else{var Fe={lane:Ne,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null};K===null?(W=K=Fe,R=c):K=K.next=Fe,_n.lanes|=Ne,gs|=Ne}ye=ye.next}while(ye!==null&&ye!==g);K===null?R=c:K.next=W,ki(c,i.memoizedState)||(ui=!0),i.memoizedState=c,i.baseState=R,i.baseQueue=K,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do g=d.lane,_n.lanes|=g,gs|=g,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Eu(n){var i=Ri(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,g=i.memoizedState;if(d!==null){o.pending=null;var R=d=d.next;do g=n(g,R.action),R=R.next;while(R!==d);ki(g,i.memoizedState)||(ui=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,c]}function op(){}function ap(n,i){var o=_n,c=Ri(),d=i(),g=!ki(c.memoizedState,d);if(g&&(c.memoizedState=d,ui=!0),c=c.queue,bu(up.bind(null,o,c,n),[n]),c.getSnapshot!==i||g||Fn!==null&&Fn.memoizedState.tag&1){if(o.flags|=2048,na(9,cp.bind(null,o,c,d,i),void 0,null),On===null)throw Error(t(349));(ms&30)!==0||lp(o,i,d)}return d}function lp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=_n.updateQueue,i===null?(i={lastEffect:null,stores:null},_n.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function cp(n,i,o,c){i.value=o,i.getSnapshot=c,dp(i)&&fp(n)}function up(n,i,o){return o(function(){dp(i)&&fp(n)})}function dp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ki(n,o)}catch{return!0}}function fp(n){var i=xr(n,1);i!==null&&Gi(i,n,1,-1)}function hp(n){var i=Qi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:n},i.queue=n,n=n.dispatch=Mx.bind(null,_n,n),[i.memoizedState,n]}function na(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=_n.updateQueue,i===null?(i={lastEffect:null,stores:null},_n.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function pp(){return Ri().memoizedState}function cl(n,i,o,c){var d=Qi();_n.flags|=n,d.memoizedState=na(1|i,o,void 0,c===void 0?null:c)}function ul(n,i,o,c){var d=Ri();c=c===void 0?null:c;var g=void 0;if(Rn!==null){var R=Rn.memoizedState;if(g=R.destroy,c!==null&&yu(c,R.deps)){d.memoizedState=na(i,o,g,c);return}}_n.flags|=n,d.memoizedState=na(1|i,o,g,c)}function mp(n,i){return cl(8390656,8,n,i)}function bu(n,i){return ul(2048,8,n,i)}function gp(n,i){return ul(4,2,n,i)}function xp(n,i){return ul(4,4,n,i)}function vp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function _p(n,i,o){return o=o!=null?o.concat([n]):null,ul(4,4,vp.bind(null,i,n),o)}function Tu(){}function yp(n,i){var o=Ri();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&yu(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Sp(n,i){var o=Ri();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&yu(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Mp(n,i,o){return(ms&21)===0?(n.baseState&&(n.baseState=!1,ui=!0),n.memoizedState=o):(ki(o,i)||(o=Hn(),_n.lanes|=o,gs|=o,n.baseState=!0),i)}function yx(n,i){var o=Ct;Ct=o!==0&&4>o?o:4,n(!0);var c=_u.transition;_u.transition={};try{n(!1),i()}finally{Ct=o,_u.transition=c}}function wp(){return Ri().memoizedState}function Sx(n,i,o){var c=Xr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Ep(n))bp(i,o);else if(o=tp(n,i,o,c),o!==null){var d=ri();Gi(o,n,c,d),Tp(o,i,c)}}function Mx(n,i,o){var c=Xr(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ep(n))bp(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var R=i.lastRenderedState,W=g(R,o);if(d.hasEagerState=!0,d.eagerState=W,ki(W,R)){var K=i.interleaved;K===null?(d.next=d,hu(i)):(d.next=K.next,K.next=d),i.interleaved=d;return}}catch{}finally{}o=tp(n,i,d,c),o!==null&&(d=ri(),Gi(o,n,c,d),Tp(o,i,c))}}function Ep(n){var i=n.alternate;return n===_n||i!==null&&i===_n}function bp(n,i){Qo=ll=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Tp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Xt(n,o)}}var dl={readContext:Ci,useCallback:Kn,useContext:Kn,useEffect:Kn,useImperativeHandle:Kn,useInsertionEffect:Kn,useLayoutEffect:Kn,useMemo:Kn,useReducer:Kn,useRef:Kn,useState:Kn,useDebugValue:Kn,useDeferredValue:Kn,useTransition:Kn,useMutableSource:Kn,useSyncExternalStore:Kn,useId:Kn,unstable_isNewReconciler:!1},wx={readContext:Ci,useCallback:function(n,i){return Qi().memoizedState=[n,i===void 0?null:i],n},useContext:Ci,useEffect:mp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,cl(4194308,4,vp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return cl(4194308,4,n,i)},useInsertionEffect:function(n,i){return cl(4,2,n,i)},useMemo:function(n,i){var o=Qi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Qi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Sx.bind(null,_n,n),[c.memoizedState,n]},useRef:function(n){var i=Qi();return n={current:n},i.memoizedState=n},useState:hp,useDebugValue:Tu,useDeferredValue:function(n){return Qi().memoizedState=n},useTransition:function(){var n=hp(!1),i=n[0];return n=yx.bind(null,n[1]),Qi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=_n,d=Qi();if(mn){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),On===null)throw Error(t(349));(ms&30)!==0||lp(c,i,o)}d.memoizedState=o;var g={value:o,getSnapshot:i};return d.queue=g,mp(up.bind(null,c,g,n),[n]),c.flags|=2048,na(9,cp.bind(null,c,g,o,i),void 0,null),o},useId:function(){var n=Qi(),i=On.identifierPrefix;if(mn){var o=gr,c=mr;o=(c&~(1<<32-_t(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=ea++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=_x++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ex={readContext:Ci,useCallback:yp,useContext:Ci,useEffect:bu,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:xp,useMemo:Sp,useReducer:wu,useRef:pp,useState:function(){return wu(ta)},useDebugValue:Tu,useDeferredValue:function(n){var i=Ri();return Mp(i,Rn.memoizedState,n)},useTransition:function(){var n=wu(ta)[0],i=Ri().memoizedState;return[n,i]},useMutableSource:op,useSyncExternalStore:ap,useId:wp,unstable_isNewReconciler:!1},bx={readContext:Ci,useCallback:yp,useContext:Ci,useEffect:bu,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:xp,useMemo:Sp,useReducer:Eu,useRef:pp,useState:function(){return Eu(ta)},useDebugValue:Tu,useDeferredValue:function(n){var i=Ri();return Rn===null?i.memoizedState=n:Mp(i,Rn.memoizedState,n)},useTransition:function(){var n=Eu(ta)[0],i=Ri().memoizedState;return[n,i]},useMutableSource:op,useSyncExternalStore:ap,useId:wp,unstable_isNewReconciler:!1};function Bi(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Au(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:ue({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var fl={isMounted:function(n){return(n=n._reactInternals)?Un(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=ri(),d=Xr(n),g=vr(c,d);g.payload=i,o!=null&&(g.callback=o),i=Vr(n,g,d),i!==null&&(Gi(i,n,d,c),rl(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=ri(),d=Xr(n),g=vr(c,d);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=Vr(n,g,d),i!==null&&(Gi(i,n,d,c),rl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=ri(),c=Xr(n),d=vr(o,c);d.tag=2,i!=null&&(d.callback=i),i=Vr(n,d,c),i!==null&&(Gi(i,n,c,o),rl(i,n,c))}};function Ap(n,i,o,c,d,g,R){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,R):i.prototype&&i.prototype.isPureReactComponent?!Vo(o,c)||!Vo(d,g):!0}function Cp(n,i,o){var c=!1,d=zr,g=i.contextType;return typeof g=="object"&&g!==null?g=Ci(g):(d=ci(i)?us:$n.current,c=i.contextTypes,g=(c=c!=null)?Ws(n,d):zr),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function Rp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&fl.enqueueReplaceState(i,i.state,null)}function Cu(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},pu(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=Ci(g):(g=ci(i)?us:$n.current,d.context=Ws(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Au(n,i,g,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&fl.enqueueReplaceState(d,d.state,null),sl(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Js(n,i){try{var o="",c=i;do o+=ze(c),c=c.return;while(c);var d=o}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Ru(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Pu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Tx=typeof WeakMap=="function"?WeakMap:Map;function Pp(n,i,o){o=vr(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){_l||(_l=!0,ju=c),Pu(n,i)},o}function Lp(n,i,o){o=vr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){Pu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Pu(n,i),typeof c!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var R=i.stack;this.componentDidCatch(i.value,{componentStack:R!==null?R:""})}),o}function Ip(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new Tx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=Bx.bind(null,n,i,o),i.then(n,n))}function Np(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Dp(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=vr(-1,1),i.tag=2,Vr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Ax=P.ReactCurrentOwner,ui=!1;function ii(n,i,o,c){i.child=n===null?ep(i,null,o,c):qs(i,n.child,o,c)}function Up(n,i,o,c,d){o=o.render;var g=i.ref;return Ks(i,d),c=Su(n,i,o,c,g,d),o=Mu(),n!==null&&!ui?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,_r(n,i,d)):(mn&&o&&ru(i),i.flags|=1,ii(n,i,c,d),i.child)}function Fp(n,i,o,c,d){if(n===null){var g=o.type;return typeof g=="function"&&!Ju(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Op(n,i,g,c,d)):(n=bl(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var R=g.memoizedProps;if(o=o.compare,o=o!==null?o:Vo,o(R,c)&&n.ref===i.ref)return _r(n,i,d)}return i.flags|=1,n=qr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Op(n,i,o,c,d){if(n!==null){var g=n.memoizedProps;if(Vo(g,c)&&n.ref===i.ref)if(ui=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(ui=!0);else return i.lanes=n.lanes,_r(n,i,d)}return Lu(n,i,o,c,d)}function kp(n,i,o){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},cn(eo,yi),yi|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,cn(eo,yi),yi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:o,cn(eo,yi),yi|=c}else g!==null?(c=g.baseLanes|o,i.memoizedState=null):c=o,cn(eo,yi),yi|=c;return ii(n,i,d,o),i.child}function zp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Lu(n,i,o,c,d){var g=ci(o)?us:$n.current;return g=Ws(i,g),Ks(i,d),o=Su(n,i,o,c,g,d),c=Mu(),n!==null&&!ui?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,_r(n,i,d)):(mn&&c&&ru(i),i.flags|=1,ii(n,i,o,d),i.child)}function Bp(n,i,o,c,d){if(ci(o)){var g=!0;Ka(i)}else g=!1;if(Ks(i,d),i.stateNode===null)pl(n,i),Cp(i,o,c),Cu(i,o,c,d),c=!0;else if(n===null){var R=i.stateNode,W=i.memoizedProps;R.props=W;var K=R.context,ye=o.contextType;typeof ye=="object"&&ye!==null?ye=Ci(ye):(ye=ci(o)?us:$n.current,ye=Ws(i,ye));var Ne=o.getDerivedStateFromProps,Fe=typeof Ne=="function"||typeof R.getSnapshotBeforeUpdate=="function";Fe||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(W!==c||K!==ye)&&Rp(i,R,c,ye),Hr=!1;var Ie=i.memoizedState;R.state=Ie,sl(i,c,R,d),K=i.memoizedState,W!==c||Ie!==K||li.current||Hr?(typeof Ne=="function"&&(Au(i,o,Ne,c),K=i.memoizedState),(W=Hr||Ap(i,o,W,c,Ie,K,ye))?(Fe||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(i.flags|=4194308)):(typeof R.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=K),R.props=c,R.state=K,R.context=ye,c=W):(typeof R.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{R=i.stateNode,np(n,i),W=i.memoizedProps,ye=i.type===i.elementType?W:Bi(i.type,W),R.props=ye,Fe=i.pendingProps,Ie=R.context,K=o.contextType,typeof K=="object"&&K!==null?K=Ci(K):(K=ci(o)?us:$n.current,K=Ws(i,K));var Ke=o.getDerivedStateFromProps;(Ne=typeof Ke=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(W!==Fe||Ie!==K)&&Rp(i,R,c,K),Hr=!1,Ie=i.memoizedState,R.state=Ie,sl(i,c,R,d);var lt=i.memoizedState;W!==Fe||Ie!==lt||li.current||Hr?(typeof Ke=="function"&&(Au(i,o,Ke,c),lt=i.memoizedState),(ye=Hr||Ap(i,o,ye,c,Ie,lt,K)||!1)?(Ne||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(c,lt,K),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(c,lt,K)),typeof R.componentDidUpdate=="function"&&(i.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof R.componentDidUpdate!="function"||W===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||W===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=lt),R.props=c,R.state=lt,R.context=K,c=ye):(typeof R.componentDidUpdate!="function"||W===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||W===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=1024),c=!1)}return Iu(n,i,o,c,g,d)}function Iu(n,i,o,c,d,g){zp(n,i);var R=(i.flags&128)!==0;if(!c&&!R)return d&&jh(i,o,!1),_r(n,i,g);c=i.stateNode,Ax.current=i;var W=R&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&R?(i.child=qs(i,n.child,null,g),i.child=qs(i,null,W,g)):ii(n,i,W,g),i.memoizedState=c.state,d&&jh(i,o,!0),i.child}function Hp(n){var i=n.stateNode;i.pendingContext?Gh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Gh(n,i.context,!1),mu(n,i.containerInfo)}function Vp(n,i,o,c,d){return Ys(),lu(d),i.flags|=256,ii(n,i,o,c),i.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Du(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gp(n,i,o){var c=i.pendingProps,d=vn.current,g=!1,R=(i.flags&128)!==0,W;if((W=R)||(W=n!==null&&n.memoizedState===null?!1:(d&2)!==0),W?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),cn(vn,d&1),n===null)return au(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(R=c.children,n=c.fallback,g?(c=i.mode,g=i.child,R={mode:"hidden",children:R},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=R):g=Tl(R,c,0,null),n=ys(n,c,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Du(o),i.memoizedState=Nu,n):Uu(i,R));if(d=n.memoizedState,d!==null&&(W=d.dehydrated,W!==null))return Cx(n,i,R,c,W,d,o);if(g){g=c.fallback,R=i.mode,d=n.child,W=d.sibling;var K={mode:"hidden",children:c.children};return(R&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=K,i.deletions=null):(c=qr(d,K),c.subtreeFlags=d.subtreeFlags&14680064),W!==null?g=qr(W,g):(g=ys(g,R,o,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,R=n.child.memoizedState,R=R===null?Du(o):{baseLanes:R.baseLanes|o,cachePool:null,transitions:R.transitions},g.memoizedState=R,g.childLanes=n.childLanes&~o,i.memoizedState=Nu,c}return g=n.child,n=g.sibling,c=qr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Uu(n,i){return i=Tl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function hl(n,i,o,c){return c!==null&&lu(c),qs(i,n.child,null,o),n=Uu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Cx(n,i,o,c,d,g,R){if(o)return i.flags&256?(i.flags&=-257,c=Ru(Error(t(422))),hl(n,i,R,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=Tl({mode:"visible",children:c.children},d,0,null),g=ys(g,d,R,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&qs(i,n.child,null,R),i.child.memoizedState=Du(R),i.memoizedState=Nu,g);if((i.mode&1)===0)return hl(n,i,R,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var W=c.dgst;return c=W,g=Error(t(419)),c=Ru(g,c,void 0),hl(n,i,R,c)}if(W=(R&n.childLanes)!==0,ui||W){if(c=On,c!==null){switch(R&-R){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|R))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,xr(n,d),Gi(c,n,d,-1))}return Zu(),c=Ru(Error(t(421))),hl(n,i,R,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Hx.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,_i=Or(d.nextSibling),vi=i,mn=!0,zi=null,n!==null&&(Ti[Ai++]=mr,Ti[Ai++]=gr,Ti[Ai++]=ds,mr=n.id,gr=n.overflow,ds=i),i=Uu(i,c.children),i.flags|=4096,i)}function Wp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),fu(n.return,i,o)}function Fu(n,i,o,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=d)}function jp(n,i,o){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(ii(n,i,c.children,o),c=vn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wp(n,o,i);else if(n.tag===19)Wp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(cn(vn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&ol(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Fu(i,!1,d,o,g);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ol(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Fu(i,!0,o,null,g);break;case"together":Fu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function pl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function _r(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),gs|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=qr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=qr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Rx(n,i,o){switch(i.tag){case 3:Hp(i),Ys();break;case 5:sp(i);break;case 1:ci(i.type)&&Ka(i);break;case 4:mu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;cn(nl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(cn(vn,vn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Gp(n,i,o):(cn(vn,vn.current&1),n=_r(n,i,o),n!==null?n.sibling:null);cn(vn,vn.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return jp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),cn(vn,vn.current),c)break;return null;case 22:case 23:return i.lanes=0,kp(n,i,o)}return _r(n,i,o)}var Xp,Ou,Yp,qp;Xp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ou=function(){},Yp=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ps(Ji.current);var g=null;switch(o){case"input":d=ft(n,d),c=ft(n,c),g=[];break;case"select":d=ue({},d,{value:void 0}),c=ue({},c,{value:void 0}),g=[];break;case"textarea":d=Ve(n,d),c=Ve(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ya)}Te(o,c);var R;o=null;for(ye in d)if(!c.hasOwnProperty(ye)&&d.hasOwnProperty(ye)&&d[ye]!=null)if(ye==="style"){var W=d[ye];for(R in W)W.hasOwnProperty(R)&&(o||(o={}),o[R]="")}else ye!=="dangerouslySetInnerHTML"&&ye!=="children"&&ye!=="suppressContentEditableWarning"&&ye!=="suppressHydrationWarning"&&ye!=="autoFocus"&&(a.hasOwnProperty(ye)?g||(g=[]):(g=g||[]).push(ye,null));for(ye in c){var K=c[ye];if(W=d!=null?d[ye]:void 0,c.hasOwnProperty(ye)&&K!==W&&(K!=null||W!=null))if(ye==="style")if(W){for(R in W)!W.hasOwnProperty(R)||K&&K.hasOwnProperty(R)||(o||(o={}),o[R]="");for(R in K)K.hasOwnProperty(R)&&W[R]!==K[R]&&(o||(o={}),o[R]=K[R])}else o||(g||(g=[]),g.push(ye,o)),o=K;else ye==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,W=W?W.__html:void 0,K!=null&&W!==K&&(g=g||[]).push(ye,K)):ye==="children"?typeof K!="string"&&typeof K!="number"||(g=g||[]).push(ye,""+K):ye!=="suppressContentEditableWarning"&&ye!=="suppressHydrationWarning"&&(a.hasOwnProperty(ye)?(K!=null&&ye==="onScroll"&&fn("scroll",n),g||W===K||(g=[])):(g=g||[]).push(ye,K))}o&&(g=g||[]).push("style",o);var ye=g;(i.updateQueue=ye)&&(i.flags|=4)}},qp=function(n,i,o,c){o!==c&&(i.flags|=4)};function ia(n,i){if(!mn)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Zn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function Px(n,i,o){var c=i.pendingProps;switch(su(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zn(i),null;case 1:return ci(i.type)&&$a(),Zn(i),null;case 3:return c=i.stateNode,Zs(),hn(li),hn($n),vu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(el(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,zi!==null&&(qu(zi),zi=null))),Ou(n,i),Zn(i),null;case 5:gu(i);var d=ps(Jo.current);if(o=i.type,n!==null&&i.stateNode!=null)Yp(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Zn(i),null}if(n=ps(Ji.current),el(i)){c=i.stateNode,o=i.type;var g=i.memoizedProps;switch(c[Zi]=i,c[Yo]=g,n=(i.mode&1)!==0,o){case"dialog":fn("cancel",c),fn("close",c);break;case"iframe":case"object":case"embed":fn("load",c);break;case"video":case"audio":for(d=0;d<Wo.length;d++)fn(Wo[d],c);break;case"source":fn("error",c);break;case"img":case"image":case"link":fn("error",c),fn("load",c);break;case"details":fn("toggle",c);break;case"input":it(c,g),fn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},fn("invalid",c);break;case"textarea":N(c,g),fn("invalid",c)}Te(o,g),d=null;for(var R in g)if(g.hasOwnProperty(R)){var W=g[R];R==="children"?typeof W=="string"?c.textContent!==W&&(g.suppressHydrationWarning!==!0&&Xa(c.textContent,W,n),d=["children",W]):typeof W=="number"&&c.textContent!==""+W&&(g.suppressHydrationWarning!==!0&&Xa(c.textContent,W,n),d=["children",""+W]):a.hasOwnProperty(R)&&W!=null&&R==="onScroll"&&fn("scroll",c)}switch(o){case"input":tt(c),j(c,g,!0);break;case"textarea":tt(c),q(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Ya)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{R=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ae(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=R.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=R.createElement(o,{is:c.is}):(n=R.createElement(o),o==="select"&&(R=n,c.multiple?R.multiple=!0:c.size&&(R.size=c.size))):n=R.createElementNS(n,o),n[Zi]=i,n[Yo]=c,Xp(n,i,!1,!1),i.stateNode=n;e:{switch(R=be(o,c),o){case"dialog":fn("cancel",n),fn("close",n),d=c;break;case"iframe":case"object":case"embed":fn("load",n),d=c;break;case"video":case"audio":for(d=0;d<Wo.length;d++)fn(Wo[d],n);d=c;break;case"source":fn("error",n),d=c;break;case"img":case"image":case"link":fn("error",n),fn("load",n),d=c;break;case"details":fn("toggle",n),d=c;break;case"input":it(n,c),d=ft(n,c),fn("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ue({},c,{value:void 0}),fn("invalid",n);break;case"textarea":N(n,c),d=Ve(n,c),fn("invalid",n);break;default:d=c}Te(o,d),W=d;for(g in W)if(W.hasOwnProperty(g)){var K=W[g];g==="style"?xe(n,K):g==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,K!=null&&te(n,K)):g==="children"?typeof K=="string"?(o!=="textarea"||K!=="")&&T(n,K):typeof K=="number"&&T(n,""+K):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?K!=null&&g==="onScroll"&&fn("scroll",n):K!=null&&D(n,g,K,R))}switch(o){case"input":tt(n),j(n,c,!1);break;case"textarea":tt(n),q(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?St(n,!!c.multiple,g,!1):c.defaultValue!=null&&St(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ya)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Zn(i),null;case 6:if(n&&i.stateNode!=null)qp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=ps(Jo.current),ps(Ji.current),el(i)){if(c=i.stateNode,o=i.memoizedProps,c[Zi]=i,(g=c.nodeValue!==o)&&(n=vi,n!==null))switch(n.tag){case 3:Xa(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xa(c.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Zi]=i,i.stateNode=c}return Zn(i),null;case 13:if(hn(vn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(mn&&_i!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Zh(),Ys(),i.flags|=98560,g=!1;else if(g=el(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Zi]=i}else Ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Zn(i),g=!1}else zi!==null&&(qu(zi),zi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(vn.current&1)!==0?Pn===0&&(Pn=3):Zu())),i.updateQueue!==null&&(i.flags|=4),Zn(i),null);case 4:return Zs(),Ou(n,i),n===null&&jo(i.stateNode.containerInfo),Zn(i),null;case 10:return du(i.type._context),Zn(i),null;case 17:return ci(i.type)&&$a(),Zn(i),null;case 19:if(hn(vn),g=i.memoizedState,g===null)return Zn(i),null;if(c=(i.flags&128)!==0,R=g.rendering,R===null)if(c)ia(g,!1);else{if(Pn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(R=ol(n),R!==null){for(i.flags|=128,ia(g,!1),c=R.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)g=o,n=c,g.flags&=14680066,R=g.alternate,R===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=R.childLanes,g.lanes=R.lanes,g.child=R.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=R.memoizedProps,g.memoizedState=R.memoizedState,g.updateQueue=R.updateQueue,g.type=R.type,n=R.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return cn(vn,vn.current&1|2),i.child}n=n.sibling}g.tail!==null&&I()>to&&(i.flags|=128,c=!0,ia(g,!1),i.lanes=4194304)}else{if(!c)if(n=ol(R),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ia(g,!0),g.tail===null&&g.tailMode==="hidden"&&!R.alternate&&!mn)return Zn(i),null}else 2*I()-g.renderingStartTime>to&&o!==1073741824&&(i.flags|=128,c=!0,ia(g,!1),i.lanes=4194304);g.isBackwards?(R.sibling=i.child,i.child=R):(o=g.last,o!==null?o.sibling=R:i.child=R,g.last=R)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=I(),i.sibling=null,o=vn.current,cn(vn,c?o&1|2:o&1),i):(Zn(i),null);case 22:case 23:return Ku(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(yi&1073741824)!==0&&(Zn(i),i.subtreeFlags&6&&(i.flags|=8192)):Zn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Lx(n,i){switch(su(i),i.tag){case 1:return ci(i.type)&&$a(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Zs(),hn(li),hn($n),vu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return gu(i),null;case 13:if(hn(vn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ys()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return hn(vn),null;case 4:return Zs(),null;case 10:return du(i.type._context),null;case 22:case 23:return Ku(),null;case 24:return null;default:return null}}var ml=!1,Jn=!1,Ix=typeof WeakSet=="function"?WeakSet:Set,st=null;function Qs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Sn(n,i,c)}else o.current=null}function ku(n,i,o){try{o()}catch(c){Sn(n,i,c)}}var $p=!1;function Nx(n,i){if(Kc=Ua,n=Ah(),Vc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var R=0,W=-1,K=-1,ye=0,Ne=0,Fe=n,Ie=null;t:for(;;){for(var Ke;Fe!==o||d!==0&&Fe.nodeType!==3||(W=R+d),Fe!==g||c!==0&&Fe.nodeType!==3||(K=R+c),Fe.nodeType===3&&(R+=Fe.nodeValue.length),(Ke=Fe.firstChild)!==null;)Ie=Fe,Fe=Ke;for(;;){if(Fe===n)break t;if(Ie===o&&++ye===d&&(W=R),Ie===g&&++Ne===c&&(K=R),(Ke=Fe.nextSibling)!==null)break;Fe=Ie,Ie=Fe.parentNode}Fe=Ke}o=W===-1||K===-1?null:{start:W,end:K}}else o=null}o=o||{start:0,end:0}}else o=null;for(Zc={focusedElem:n,selectionRange:o},Ua=!1,st=i;st!==null;)if(i=st,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,st=n;else for(;st!==null;){i=st;try{var lt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(lt!==null){var pt=lt.memoizedProps,wn=lt.memoizedState,fe=i.stateNode,Q=fe.getSnapshotBeforeUpdate(i.elementType===i.type?pt:Bi(i.type,pt),wn);fe.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var me=i.stateNode.containerInfo;me.nodeType===1?me.textContent="":me.nodeType===9&&me.documentElement&&me.removeChild(me.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(He){Sn(i,i.return,He)}if(n=i.sibling,n!==null){n.return=i.return,st=n;break}st=i.return}return lt=$p,$p=!1,lt}function ra(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&ku(i,o,g)}d=d.next}while(d!==c)}}function gl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function zu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Kp(n){var i=n.alternate;i!==null&&(n.alternate=null,Kp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Zi],delete i[Yo],delete i[tu],delete i[mx],delete i[gx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Zp(n){return n.tag===5||n.tag===3||n.tag===4}function Jp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Zp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ya));else if(c!==4&&(n=n.child,n!==null))for(Bu(n,i,o),n=n.sibling;n!==null;)Bu(n,i,o),n=n.sibling}function Hu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Hu(n,i,o),n=n.sibling;n!==null;)Hu(n,i,o),n=n.sibling}var Gn=null,Hi=!1;function Gr(n,i,o){for(o=o.child;o!==null;)Qp(n,i,o),o=o.sibling}function Qp(n,i,o){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Ge,o)}catch{}switch(o.tag){case 5:Jn||Qs(o,i);case 6:var c=Gn,d=Hi;Gn=null,Gr(n,i,o),Gn=c,Hi=d,Gn!==null&&(Hi?(n=Gn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Gn.removeChild(o.stateNode));break;case 18:Gn!==null&&(Hi?(n=Gn,o=o.stateNode,n.nodeType===8?eu(n.parentNode,o):n.nodeType===1&&eu(n,o),Fo(n)):eu(Gn,o.stateNode));break;case 4:c=Gn,d=Hi,Gn=o.stateNode.containerInfo,Hi=!0,Gr(n,i,o),Gn=c,Hi=d;break;case 0:case 11:case 14:case 15:if(!Jn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,R=g.destroy;g=g.tag,R!==void 0&&((g&2)!==0||(g&4)!==0)&&ku(o,i,R),d=d.next}while(d!==c)}Gr(n,i,o);break;case 1:if(!Jn&&(Qs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(W){Sn(o,i,W)}Gr(n,i,o);break;case 21:Gr(n,i,o);break;case 22:o.mode&1?(Jn=(c=Jn)||o.memoizedState!==null,Gr(n,i,o),Jn=c):Gr(n,i,o);break;default:Gr(n,i,o)}}function em(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Ix),i.forEach(function(c){var d=Vx.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Vi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var g=n,R=i,W=R;e:for(;W!==null;){switch(W.tag){case 5:Gn=W.stateNode,Hi=!1;break e;case 3:Gn=W.stateNode.containerInfo,Hi=!0;break e;case 4:Gn=W.stateNode.containerInfo,Hi=!0;break e}W=W.return}if(Gn===null)throw Error(t(160));Qp(g,R,d),Gn=null,Hi=!1;var K=d.alternate;K!==null&&(K.return=null),d.return=null}catch(ye){Sn(d,i,ye)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)tm(i,n),i=i.sibling}function tm(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vi(i,n),er(n),c&4){try{ra(3,n,n.return),gl(3,n)}catch(pt){Sn(n,n.return,pt)}try{ra(5,n,n.return)}catch(pt){Sn(n,n.return,pt)}}break;case 1:Vi(i,n),er(n),c&512&&o!==null&&Qs(o,o.return);break;case 5:if(Vi(i,n),er(n),c&512&&o!==null&&Qs(o,o.return),n.flags&32){var d=n.stateNode;try{T(d,"")}catch(pt){Sn(n,n.return,pt)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,R=o!==null?o.memoizedProps:g,W=n.type,K=n.updateQueue;if(n.updateQueue=null,K!==null)try{W==="input"&&g.type==="radio"&&g.name!=null&&rt(d,g),be(W,R);var ye=be(W,g);for(R=0;R<K.length;R+=2){var Ne=K[R],Fe=K[R+1];Ne==="style"?xe(d,Fe):Ne==="dangerouslySetInnerHTML"?te(d,Fe):Ne==="children"?T(d,Fe):D(d,Ne,Fe,ye)}switch(W){case"input":Ze(d,g);break;case"textarea":M(d,g);break;case"select":var Ie=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Ke=g.value;Ke!=null?St(d,!!g.multiple,Ke,!1):Ie!==!!g.multiple&&(g.defaultValue!=null?St(d,!!g.multiple,g.defaultValue,!0):St(d,!!g.multiple,g.multiple?[]:"",!1))}d[Yo]=g}catch(pt){Sn(n,n.return,pt)}}break;case 6:if(Vi(i,n),er(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(pt){Sn(n,n.return,pt)}}break;case 3:if(Vi(i,n),er(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Fo(i.containerInfo)}catch(pt){Sn(n,n.return,pt)}break;case 4:Vi(i,n),er(n);break;case 13:Vi(i,n),er(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Wu=I())),c&4&&em(n);break;case 22:if(Ne=o!==null&&o.memoizedState!==null,n.mode&1?(Jn=(ye=Jn)||Ne,Vi(i,n),Jn=ye):Vi(i,n),er(n),c&8192){if(ye=n.memoizedState!==null,(n.stateNode.isHidden=ye)&&!Ne&&(n.mode&1)!==0)for(st=n,Ne=n.child;Ne!==null;){for(Fe=st=Ne;st!==null;){switch(Ie=st,Ke=Ie.child,Ie.tag){case 0:case 11:case 14:case 15:ra(4,Ie,Ie.return);break;case 1:Qs(Ie,Ie.return);var lt=Ie.stateNode;if(typeof lt.componentWillUnmount=="function"){c=Ie,o=Ie.return;try{i=c,lt.props=i.memoizedProps,lt.state=i.memoizedState,lt.componentWillUnmount()}catch(pt){Sn(c,o,pt)}}break;case 5:Qs(Ie,Ie.return);break;case 22:if(Ie.memoizedState!==null){rm(Fe);continue}}Ke!==null?(Ke.return=Ie,st=Ke):rm(Fe)}Ne=Ne.sibling}e:for(Ne=null,Fe=n;;){if(Fe.tag===5){if(Ne===null){Ne=Fe;try{d=Fe.stateNode,ye?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(W=Fe.stateNode,K=Fe.memoizedProps.style,R=K!=null&&K.hasOwnProperty("display")?K.display:null,W.style.display=ce("display",R))}catch(pt){Sn(n,n.return,pt)}}}else if(Fe.tag===6){if(Ne===null)try{Fe.stateNode.nodeValue=ye?"":Fe.memoizedProps}catch(pt){Sn(n,n.return,pt)}}else if((Fe.tag!==22&&Fe.tag!==23||Fe.memoizedState===null||Fe===n)&&Fe.child!==null){Fe.child.return=Fe,Fe=Fe.child;continue}if(Fe===n)break e;for(;Fe.sibling===null;){if(Fe.return===null||Fe.return===n)break e;Ne===Fe&&(Ne=null),Fe=Fe.return}Ne===Fe&&(Ne=null),Fe.sibling.return=Fe.return,Fe=Fe.sibling}}break;case 19:Vi(i,n),er(n),c&4&&em(n);break;case 21:break;default:Vi(i,n),er(n)}}function er(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Zp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(T(d,""),c.flags&=-33);var g=Jp(n);Hu(n,g,d);break;case 3:case 4:var R=c.stateNode.containerInfo,W=Jp(n);Bu(n,W,R);break;default:throw Error(t(161))}}catch(K){Sn(n,n.return,K)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Dx(n,i,o){st=n,nm(n)}function nm(n,i,o){for(var c=(n.mode&1)!==0;st!==null;){var d=st,g=d.child;if(d.tag===22&&c){var R=d.memoizedState!==null||ml;if(!R){var W=d.alternate,K=W!==null&&W.memoizedState!==null||Jn;W=ml;var ye=Jn;if(ml=R,(Jn=K)&&!ye)for(st=d;st!==null;)R=st,K=R.child,R.tag===22&&R.memoizedState!==null?sm(d):K!==null?(K.return=R,st=K):sm(d);for(;g!==null;)st=g,nm(g),g=g.sibling;st=d,ml=W,Jn=ye}im(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,st=g):im(n)}}function im(n){for(;st!==null;){var i=st;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Jn||gl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Jn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Bi(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&rp(i,g,c);break;case 3:var R=i.updateQueue;if(R!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}rp(i,R,o)}break;case 5:var W=i.stateNode;if(o===null&&i.flags&4){o=W;var K=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":K.autoFocus&&o.focus();break;case"img":K.src&&(o.src=K.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ye=i.alternate;if(ye!==null){var Ne=ye.memoizedState;if(Ne!==null){var Fe=Ne.dehydrated;Fe!==null&&Fo(Fe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Jn||i.flags&512&&zu(i)}catch(Ie){Sn(i,i.return,Ie)}}if(i===n){st=null;break}if(o=i.sibling,o!==null){o.return=i.return,st=o;break}st=i.return}}function rm(n){for(;st!==null;){var i=st;if(i===n){st=null;break}var o=i.sibling;if(o!==null){o.return=i.return,st=o;break}st=i.return}}function sm(n){for(;st!==null;){var i=st;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{gl(4,i)}catch(K){Sn(i,o,K)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(K){Sn(i,d,K)}}var g=i.return;try{zu(i)}catch(K){Sn(i,g,K)}break;case 5:var R=i.return;try{zu(i)}catch(K){Sn(i,R,K)}}}catch(K){Sn(i,i.return,K)}if(i===n){st=null;break}var W=i.sibling;if(W!==null){W.return=i.return,st=W;break}st=i.return}}var Ux=Math.ceil,xl=P.ReactCurrentDispatcher,Vu=P.ReactCurrentOwner,Pi=P.ReactCurrentBatchConfig,Zt=0,On=null,bn=null,Wn=0,yi=0,eo=kr(0),Pn=0,sa=null,gs=0,vl=0,Gu=0,oa=null,di=null,Wu=0,to=1/0,yr=null,_l=!1,ju=null,Wr=null,yl=!1,jr=null,Sl=0,aa=0,Xu=null,Ml=-1,wl=0;function ri(){return(Zt&6)!==0?I():Ml!==-1?Ml:Ml=I()}function Xr(n){return(n.mode&1)===0?1:(Zt&2)!==0&&Wn!==0?Wn&-Wn:vx.transition!==null?(wl===0&&(wl=Hn()),wl):(n=Ct,n!==0||(n=window.event,n=n===void 0?16:ah(n.type)),n)}function Gi(n,i,o,c){if(50<aa)throw aa=0,Xu=null,Error(t(185));qn(n,o,c),((Zt&2)===0||n!==On)&&(n===On&&((Zt&2)===0&&(vl|=o),Pn===4&&Yr(n,Wn)),fi(n,c),o===1&&Zt===0&&(i.mode&1)===0&&(to=I()+500,Za&&Br()))}function fi(n,i){var o=n.callbackNode;yn(n,i);var c=Kt(n,n===On?Wn:0);if(c===0)o!==null&&Ir(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Ir(o),i===1)n.tag===0?xx(am.bind(null,n)):Xh(am.bind(null,n)),hx(function(){(Zt&6)===0&&Br()}),o=null;else{switch(ai(c)){case 1:o=ve;break;case 4:o=pe;break;case 16:o=de;break;case 536870912:o=Xe;break;default:o=de}o=mm(o,om.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function om(n,i){if(Ml=-1,wl=0,(Zt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(no()&&n.callbackNode!==o)return null;var c=Kt(n,n===On?Wn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=El(n,c);else{i=c;var d=Zt;Zt|=2;var g=cm();(On!==n||Wn!==i)&&(yr=null,to=I()+500,vs(n,i));do try{kx();break}catch(W){lm(n,W)}while(!0);uu(),xl.current=g,Zt=d,bn!==null?i=0:(On=null,Wn=0,i=Pn)}if(i!==0){if(i===2&&(d=vt(n),d!==0&&(c=d,i=Yu(n,d))),i===1)throw o=sa,vs(n,0),Yr(n,c),fi(n,I()),o;if(i===6)Yr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Fx(d)&&(i=El(n,c),i===2&&(g=vt(n),g!==0&&(c=g,i=Yu(n,g))),i===1))throw o=sa,vs(n,0),Yr(n,c),fi(n,I()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:_s(n,di,yr);break;case 3:if(Yr(n,c),(c&130023424)===c&&(i=Wu+500-I(),10<i)){if(Kt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){ri(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Qc(_s.bind(null,n,di,yr),i);break}_s(n,di,yr);break;case 4:if(Yr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var R=31-_t(c);g=1<<R,R=i[R],R>d&&(d=R),c&=~g}if(c=d,c=I()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Ux(c/1960))-c,10<c){n.timeoutHandle=Qc(_s.bind(null,n,di,yr),c);break}_s(n,di,yr);break;case 5:_s(n,di,yr);break;default:throw Error(t(329))}}}return fi(n,I()),n.callbackNode===o?om.bind(null,n):null}function Yu(n,i){var o=oa;return n.current.memoizedState.isDehydrated&&(vs(n,i).flags|=256),n=El(n,i),n!==2&&(i=di,di=o,i!==null&&qu(i)),n}function qu(n){di===null?di=n:di.push.apply(di,n)}function Fx(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],g=d.getSnapshot;d=d.value;try{if(!ki(g(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Yr(n,i){for(i&=~Gu,i&=~vl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-_t(i),c=1<<o;n[o]=-1,i&=~c}}function am(n){if((Zt&6)!==0)throw Error(t(327));no();var i=Kt(n,0);if((i&1)===0)return fi(n,I()),null;var o=El(n,i);if(n.tag!==0&&o===2){var c=vt(n);c!==0&&(i=c,o=Yu(n,c))}if(o===1)throw o=sa,vs(n,0),Yr(n,i),fi(n,I()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,_s(n,di,yr),fi(n,I()),null}function $u(n,i){var o=Zt;Zt|=1;try{return n(i)}finally{Zt=o,Zt===0&&(to=I()+500,Za&&Br())}}function xs(n){jr!==null&&jr.tag===0&&(Zt&6)===0&&no();var i=Zt;Zt|=1;var o=Pi.transition,c=Ct;try{if(Pi.transition=null,Ct=1,n)return n()}finally{Ct=c,Pi.transition=o,Zt=i,(Zt&6)===0&&Br()}}function Ku(){yi=eo.current,hn(eo)}function vs(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,fx(o)),bn!==null)for(o=bn.return;o!==null;){var c=o;switch(su(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&$a();break;case 3:Zs(),hn(li),hn($n),vu();break;case 5:gu(c);break;case 4:Zs();break;case 13:hn(vn);break;case 19:hn(vn);break;case 10:du(c.type._context);break;case 22:case 23:Ku()}o=o.return}if(On=n,bn=n=qr(n.current,null),Wn=yi=i,Pn=0,sa=null,Gu=vl=gs=0,di=oa=null,hs!==null){for(i=0;i<hs.length;i++)if(o=hs[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,g=o.pending;if(g!==null){var R=g.next;g.next=d,c.next=R}o.pending=c}hs=null}return n}function lm(n,i){do{var o=bn;try{if(uu(),al.current=dl,ll){for(var c=_n.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ll=!1}if(ms=0,Fn=Rn=_n=null,Qo=!1,ea=0,Vu.current=null,o===null||o.return===null){Pn=1,sa=i,bn=null;break}e:{var g=n,R=o.return,W=o,K=i;if(i=Wn,W.flags|=32768,K!==null&&typeof K=="object"&&typeof K.then=="function"){var ye=K,Ne=W,Fe=Ne.tag;if((Ne.mode&1)===0&&(Fe===0||Fe===11||Fe===15)){var Ie=Ne.alternate;Ie?(Ne.updateQueue=Ie.updateQueue,Ne.memoizedState=Ie.memoizedState,Ne.lanes=Ie.lanes):(Ne.updateQueue=null,Ne.memoizedState=null)}var Ke=Np(R);if(Ke!==null){Ke.flags&=-257,Dp(Ke,R,W,g,i),Ke.mode&1&&Ip(g,ye,i),i=Ke,K=ye;var lt=i.updateQueue;if(lt===null){var pt=new Set;pt.add(K),i.updateQueue=pt}else lt.add(K);break e}else{if((i&1)===0){Ip(g,ye,i),Zu();break e}K=Error(t(426))}}else if(mn&&W.mode&1){var wn=Np(R);if(wn!==null){(wn.flags&65536)===0&&(wn.flags|=256),Dp(wn,R,W,g,i),lu(Js(K,W));break e}}g=K=Js(K,W),Pn!==4&&(Pn=2),oa===null?oa=[g]:oa.push(g),g=R;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var fe=Pp(g,K,i);ip(g,fe);break e;case 1:W=K;var Q=g.type,me=g.stateNode;if((g.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||me!==null&&typeof me.componentDidCatch=="function"&&(Wr===null||!Wr.has(me)))){g.flags|=65536,i&=-i,g.lanes|=i;var He=Lp(g,W,i);ip(g,He);break e}}g=g.return}while(g!==null)}dm(o)}catch(xt){i=xt,bn===o&&o!==null&&(bn=o=o.return);continue}break}while(!0)}function cm(){var n=xl.current;return xl.current=dl,n===null?dl:n}function Zu(){(Pn===0||Pn===3||Pn===2)&&(Pn=4),On===null||(gs&268435455)===0&&(vl&268435455)===0||Yr(On,Wn)}function El(n,i){var o=Zt;Zt|=2;var c=cm();(On!==n||Wn!==i)&&(yr=null,vs(n,i));do try{Ox();break}catch(d){lm(n,d)}while(!0);if(uu(),Zt=o,xl.current=c,bn!==null)throw Error(t(261));return On=null,Wn=0,Pn}function Ox(){for(;bn!==null;)um(bn)}function kx(){for(;bn!==null&&!Ds();)um(bn)}function um(n){var i=pm(n.alternate,n,yi);n.memoizedProps=n.pendingProps,i===null?dm(n):bn=i,Vu.current=null}function dm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Px(o,i,yi),o!==null){bn=o;return}}else{if(o=Lx(o,i),o!==null){o.flags&=32767,bn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Pn=6,bn=null;return}}if(i=i.sibling,i!==null){bn=i;return}bn=i=n}while(i!==null);Pn===0&&(Pn=5)}function _s(n,i,o){var c=Ct,d=Pi.transition;try{Pi.transition=null,Ct=1,zx(n,i,o,c)}finally{Pi.transition=d,Ct=c}return null}function zx(n,i,o,c){do no();while(jr!==null);if((Zt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(Fi(n,g),n===On&&(bn=On=null,Wn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||yl||(yl=!0,mm(de,function(){return no(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Pi.transition,Pi.transition=null;var R=Ct;Ct=1;var W=Zt;Zt|=4,Vu.current=null,Nx(n,o),tm(o,n),sx(Zc),Ua=!!Kc,Zc=Kc=null,n.current=o,Dx(o),ls(),Zt=W,Ct=R,Pi.transition=g}else n.current=o;if(yl&&(yl=!1,jr=n,Sl=d),g=n.pendingLanes,g===0&&(Wr=null),at(o.stateNode),fi(n,I()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(_l)throw _l=!1,n=ju,ju=null,n;return(Sl&1)!==0&&n.tag!==0&&no(),g=n.pendingLanes,(g&1)!==0?n===Xu?aa++:(aa=0,Xu=n):aa=0,Br(),null}function no(){if(jr!==null){var n=ai(Sl),i=Pi.transition,o=Ct;try{if(Pi.transition=null,Ct=16>n?16:n,jr===null)var c=!1;else{if(n=jr,jr=null,Sl=0,(Zt&6)!==0)throw Error(t(331));var d=Zt;for(Zt|=4,st=n.current;st!==null;){var g=st,R=g.child;if((st.flags&16)!==0){var W=g.deletions;if(W!==null){for(var K=0;K<W.length;K++){var ye=W[K];for(st=ye;st!==null;){var Ne=st;switch(Ne.tag){case 0:case 11:case 15:ra(8,Ne,g)}var Fe=Ne.child;if(Fe!==null)Fe.return=Ne,st=Fe;else for(;st!==null;){Ne=st;var Ie=Ne.sibling,Ke=Ne.return;if(Kp(Ne),Ne===ye){st=null;break}if(Ie!==null){Ie.return=Ke,st=Ie;break}st=Ke}}}var lt=g.alternate;if(lt!==null){var pt=lt.child;if(pt!==null){lt.child=null;do{var wn=pt.sibling;pt.sibling=null,pt=wn}while(pt!==null)}}st=g}}if((g.subtreeFlags&2064)!==0&&R!==null)R.return=g,st=R;else e:for(;st!==null;){if(g=st,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ra(9,g,g.return)}var fe=g.sibling;if(fe!==null){fe.return=g.return,st=fe;break e}st=g.return}}var Q=n.current;for(st=Q;st!==null;){R=st;var me=R.child;if((R.subtreeFlags&2064)!==0&&me!==null)me.return=R,st=me;else e:for(R=Q;st!==null;){if(W=st,(W.flags&2048)!==0)try{switch(W.tag){case 0:case 11:case 15:gl(9,W)}}catch(xt){Sn(W,W.return,xt)}if(W===R){st=null;break e}var He=W.sibling;if(He!==null){He.return=W.return,st=He;break e}st=W.return}}if(Zt=d,Br(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Ge,n)}catch{}c=!0}return c}finally{Ct=o,Pi.transition=i}}return!1}function fm(n,i,o){i=Js(o,i),i=Pp(n,i,1),n=Vr(n,i,1),i=ri(),n!==null&&(qn(n,1,i),fi(n,i))}function Sn(n,i,o){if(n.tag===3)fm(n,n,o);else for(;i!==null;){if(i.tag===3){fm(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Wr===null||!Wr.has(c))){n=Js(o,n),n=Lp(i,n,1),i=Vr(i,n,1),n=ri(),i!==null&&(qn(i,1,n),fi(i,n));break}}i=i.return}}function Bx(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=ri(),n.pingedLanes|=n.suspendedLanes&o,On===n&&(Wn&o)===o&&(Pn===4||Pn===3&&(Wn&130023424)===Wn&&500>I()-Wu?vs(n,0):Gu|=o),fi(n,i)}function hm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var o=ri();n=xr(n,i),n!==null&&(qn(n,i,o),fi(n,o))}function Hx(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),hm(n,o)}function Vx(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),hm(n,o)}var pm;pm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||li.current)ui=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return ui=!1,Rx(n,i,o);ui=(n.flags&131072)!==0}else ui=!1,mn&&(i.flags&1048576)!==0&&Yh(i,Qa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;pl(n,i),n=i.pendingProps;var d=Ws(i,$n.current);Ks(i,o),d=Su(null,i,c,n,d,o);var g=Mu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ci(c)?(g=!0,Ka(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,pu(i),d.updater=fl,i.stateNode=d,d._reactInternals=i,Cu(i,c,n,o),i=Iu(null,i,c,!0,g,o)):(i.tag=0,mn&&g&&ru(i),ii(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(pl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Wx(c),n=Bi(c,n),d){case 0:i=Lu(null,i,c,n,o);break e;case 1:i=Bp(null,i,c,n,o);break e;case 11:i=Up(null,i,c,n,o);break e;case 14:i=Fp(null,i,c,Bi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bi(c,d),Lu(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bi(c,d),Bp(n,i,c,d,o);case 3:e:{if(Hp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,np(n,i),sl(i,c,null,o);var R=i.memoizedState;if(c=R.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=Js(Error(t(423)),i),i=Vp(n,i,c,o,d);break e}else if(c!==d){d=Js(Error(t(424)),i),i=Vp(n,i,c,o,d);break e}else for(_i=Or(i.stateNode.containerInfo.firstChild),vi=i,mn=!0,zi=null,o=ep(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ys(),c===d){i=_r(n,i,o);break e}ii(n,i,c,o)}i=i.child}return i;case 5:return sp(i),n===null&&au(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,R=d.children,Jc(c,d)?R=null:g!==null&&Jc(c,g)&&(i.flags|=32),zp(n,i),ii(n,i,R,o),i.child;case 6:return n===null&&au(i),null;case 13:return Gp(n,i,o);case 4:return mu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=qs(i,null,c,o):ii(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bi(c,d),Up(n,i,c,d,o);case 7:return ii(n,i,i.pendingProps,o),i.child;case 8:return ii(n,i,i.pendingProps.children,o),i.child;case 12:return ii(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,R=d.value,cn(nl,c._currentValue),c._currentValue=R,g!==null)if(ki(g.value,R)){if(g.children===d.children&&!li.current){i=_r(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var W=g.dependencies;if(W!==null){R=g.child;for(var K=W.firstContext;K!==null;){if(K.context===c){if(g.tag===1){K=vr(-1,o&-o),K.tag=2;var ye=g.updateQueue;if(ye!==null){ye=ye.shared;var Ne=ye.pending;Ne===null?K.next=K:(K.next=Ne.next,Ne.next=K),ye.pending=K}}g.lanes|=o,K=g.alternate,K!==null&&(K.lanes|=o),fu(g.return,o,i),W.lanes|=o;break}K=K.next}}else if(g.tag===10)R=g.type===i.type?null:g.child;else if(g.tag===18){if(R=g.return,R===null)throw Error(t(341));R.lanes|=o,W=R.alternate,W!==null&&(W.lanes|=o),fu(R,o,i),R=g.sibling}else R=g.child;if(R!==null)R.return=g;else for(R=g;R!==null;){if(R===i){R=null;break}if(g=R.sibling,g!==null){g.return=R.return,R=g;break}R=R.return}g=R}ii(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ks(i,o),d=Ci(d),c=c(d),i.flags|=1,ii(n,i,c,o),i.child;case 14:return c=i.type,d=Bi(c,i.pendingProps),d=Bi(c.type,d),Fp(n,i,c,d,o);case 15:return Op(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bi(c,d),pl(n,i),i.tag=1,ci(c)?(n=!0,Ka(i)):n=!1,Ks(i,o),Cp(i,c,d),Cu(i,c,d,o),Iu(null,i,c,!0,n,o);case 19:return jp(n,i,o);case 22:return kp(n,i,o)}throw Error(t(156,i.tag))};function mm(n,i){return Lr(n,i)}function Gx(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Li(n,i,o,c){return new Gx(n,i,o,c)}function Ju(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Wx(n){if(typeof n=="function")return Ju(n)?1:0;if(n!=null){if(n=n.$$typeof,n===G)return 11;if(n===J)return 14}return 2}function qr(n,i){var o=n.alternate;return o===null?(o=Li(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function bl(n,i,o,c,d,g){var R=2;if(c=n,typeof n=="function")Ju(n)&&(R=1);else if(typeof n=="string")R=5;else e:switch(n){case O:return ys(o.children,d,g,i);case E:R=8,d|=8;break;case A:return n=Li(12,o,i,d|2),n.elementType=A,n.lanes=g,n;case Z:return n=Li(13,o,i,d),n.elementType=Z,n.lanes=g,n;case se:return n=Li(19,o,i,d),n.elementType=se,n.lanes=g,n;case H:return Tl(o,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y:R=10;break e;case z:R=9;break e;case G:R=11;break e;case J:R=14;break e;case ee:R=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Li(R,o,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function ys(n,i,o,c){return n=Li(7,n,c,i),n.lanes=o,n}function Tl(n,i,o,c){return n=Li(22,n,c,i),n.elementType=H,n.lanes=o,n.stateNode={isHidden:!1},n}function Qu(n,i,o){return n=Li(6,n,null,i),n.lanes=o,n}function ed(n,i,o){return i=Li(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function jx(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vn(0),this.expirationTimes=Vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function td(n,i,o,c,d,g,R,W,K){return n=new jx(n,i,o,W,K),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Li(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},pu(g),n}function Xx(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function gm(n){if(!n)return zr;n=n._reactInternals;e:{if(Un(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ci(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(ci(o))return Wh(n,o,i)}return i}function xm(n,i,o,c,d,g,R,W,K){return n=td(o,c,!0,n,d,g,R,W,K),n.context=gm(null),o=n.current,c=ri(),d=Xr(o),g=vr(c,d),g.callback=i??null,Vr(o,g,d),n.current.lanes=d,qn(n,d,c),fi(n,c),n}function Al(n,i,o,c){var d=i.current,g=ri(),R=Xr(d);return o=gm(o),i.context===null?i.context=o:i.pendingContext=o,i=vr(g,R),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Vr(d,i,R),n!==null&&(Gi(n,d,R,g),rl(n,d,R)),R}function Cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function vm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function nd(n,i){vm(n,i),(n=n.alternate)&&vm(n,i)}function Yx(){return null}var _m=typeof reportError=="function"?reportError:function(n){console.error(n)};function id(n){this._internalRoot=n}Rl.prototype.render=id.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Al(n,i,null,null)},Rl.prototype.unmount=id.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;xs(function(){Al(null,n,null,null)}),i[hr]=null}};function Rl(n){this._internalRoot=n}Rl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Nr();n={blockedOn:null,target:n,priority:i};for(var o=0;o<jt.length&&i!==0&&i<jt[o].priority;o++);jt.splice(o,0,n),o===0&&sh(n)}};function rd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ym(){}function qx(n,i,o,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var ye=Cl(R);g.call(ye)}}var R=xm(i,c,n,0,null,!1,!1,"",ym);return n._reactRootContainer=R,n[hr]=R.current,jo(n.nodeType===8?n.parentNode:n),xs(),R}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var W=c;c=function(){var ye=Cl(K);W.call(ye)}}var K=td(n,0,!1,null,null,!1,!1,"",ym);return n._reactRootContainer=K,n[hr]=K.current,jo(n.nodeType===8?n.parentNode:n),xs(function(){Al(i,K,o,c)}),K}function Ll(n,i,o,c,d){var g=o._reactRootContainer;if(g){var R=g;if(typeof d=="function"){var W=d;d=function(){var K=Cl(R);W.call(K)}}Al(i,R,n,d)}else R=qx(o,i,n,d,c);return Cl(R)}pn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=kt(i.pendingLanes);o!==0&&(Xt(i,o|1),fi(i,I()),(Zt&6)===0&&(to=I()+500,Br()))}break;case 13:xs(function(){var c=xr(n,1);if(c!==null){var d=ri();Gi(c,n,1,d)}}),nd(n,1)}},ni=function(n){if(n.tag===13){var i=xr(n,134217728);if(i!==null){var o=ri();Gi(i,n,134217728,o)}nd(n,134217728)}},bi=function(n){if(n.tag===13){var i=Xr(n),o=xr(n,i);if(o!==null){var c=ri();Gi(o,n,i,c)}nd(n,i)}},Nr=function(){return Ct},De=function(n,i){var o=Ct;try{return Ct=n,i()}finally{Ct=o}},we=function(n,i,o){switch(i){case"input":if(Ze(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=qa(c);if(!d)throw Error(t(90));It(c),Ze(c,d)}}}break;case"textarea":M(n,o);break;case"select":i=o.value,i!=null&&St(n,!!o.multiple,i,!1)}},Je=$u,Mt=xs;var $x={usingClientEntryPoint:!1,Events:[qo,Vs,qa,ge,ke,$u]},la={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kx={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ui(n),n===null?null:n.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||Yx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{Ge=Il.inject(Kx),$e=Il}catch{}}return hi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$x,hi.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rd(i))throw Error(t(200));return Xx(n,i,null,o)},hi.createRoot=function(n,i){if(!rd(n))throw Error(t(299));var o=!1,c="",d=_m;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=td(n,1,!1,null,null,o,!1,c,d),n[hr]=i.current,jo(n.nodeType===8?n.parentNode:n),new id(i)},hi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ui(i),n=n===null?null:n.stateNode,n},hi.flushSync=function(n){return xs(n)},hi.hydrate=function(n,i,o){if(!Pl(i))throw Error(t(200));return Ll(null,n,i,!0,o)},hi.hydrateRoot=function(n,i,o){if(!rd(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,g="",R=_m;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(R=o.onRecoverableError)),i=xm(i,null,n,1,o??null,d,!1,g,R),n[hr]=i.current,jo(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Rl(i)},hi.render=function(n,i,o){if(!Pl(i))throw Error(t(200));return Ll(null,n,i,!1,o)},hi.unmountComponentAtNode=function(n){if(!Pl(n))throw Error(t(40));return n._reactRootContainer?(xs(function(){Ll(null,null,n,!1,function(){n._reactRootContainer=null,n[hr]=null})}),!0):!1},hi.unstable_batchedUpdates=$u,hi.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!Pl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ll(n,i,o,!1,c)},hi.version="18.3.1-next-f1338f8080-20240426",hi}var Cm;function rv(){if(Cm)return ad.exports;Cm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ad.exports=iv(),ad.exports}var Rm;function sv(){if(Rm)return Nl;Rm=1;var s=rv();return Nl.createRoot=s.createRoot,Nl.hydrateRoot=s.hydrateRoot,Nl}var ov=sv();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bf="183",av=0,Pm=1,lv=2,uc=1,Aa=2,va=3,ss=0,gi=1,mi=2,Ar=0,Mo=1,Lm=2,Im=3,Nm=4,cv=5,Cs=100,uv=101,dv=102,fv=103,hv=104,pv=200,mv=201,gv=202,xv=203,Yd=204,qd=205,vv=206,_v=207,yv=208,Sv=209,Mv=210,wv=211,Ev=212,bv=213,Tv=214,$d=0,Kd=1,Zd=2,Eo=3,Jd=4,Qd=5,ef=6,tf=7,G0=0,Av=1,Cv=2,or=0,W0=1,j0=2,X0=3,Po=4,Y0=5,q0=6,$0=7,K0=300,Ns=301,bo=302,ud=303,dd=304,Ec=306,vc=1e3,Tr=1001,nf=1002,Xn=1003,Rv=1004,Dl=1005,ti=1006,fd=1007,Ps=1008,wi=1009,Z0=1010,J0=1011,Sa=1012,Hf=1013,cr=1014,rr=1015,Rr=1016,Vf=1017,Gf=1018,Ma=1020,Q0=35902,eg=35899,tg=1021,ng=1022,qi=1023,Pr=1026,Ls=1027,ig=1028,Wf=1029,To=1030,jf=1031,Xf=1033,dc=33776,fc=33777,hc=33778,pc=33779,rf=35840,sf=35841,of=35842,af=35843,lf=36196,cf=37492,uf=37496,df=37488,ff=37489,hf=37490,pf=37491,mf=37808,gf=37809,xf=37810,vf=37811,_f=37812,yf=37813,Sf=37814,Mf=37815,wf=37816,Ef=37817,bf=37818,Tf=37819,Af=37820,Cf=37821,Rf=36492,Pf=36494,Lf=36495,If=36283,Nf=36284,Df=36285,Uf=36286,Pv=3200,rg=0,Lv=1,is="",jn="srgb",Ao="srgb-linear",_c="linear",sn="srgb",io=7680,Dm=519,Iv=512,Nv=513,Dv=514,Yf=515,Uv=516,Fv=517,qf=518,Ov=519,Um=35044,Fm="300 es",sr=2e3,wa=2001;function kv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zv(){const s=Ea("canvas");return s.style.display="block",s}const Om={};function km(...s){const e="THREE."+s.shift();console.log(e,...s)}function sg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Nt(...s){s=sg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Jt(...s){s=sg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function yc(...s){const e=s.join(" ");e in Om||(Om[e]=!0,Nt(...s))}function Bv(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Hv={[$d]:Kd,[Zd]:ef,[Jd]:tf,[Eo]:Qd,[Kd]:$d,[ef]:Zd,[tf]:Jd,[Qd]:Eo};class Lo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mc=Math.PI/180,Sc=180/Math.PI;function Ca(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qn[s&255]+Qn[s>>8&255]+Qn[s>>16&255]+Qn[s>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[t&63|128]+Qn[t>>8&255]+"-"+Qn[t>>16&255]+Qn[t>>24&255]+Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]).toLowerCase()}function Ht(s,e,t){return Math.max(e,Math.min(t,s))}function Vv(s,e){return(s%e+e)%e}function hd(s,e,t){return(1-t)*s+t*e}function ua(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ht(this.x,e.x,t.x),this.y=Ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ht(this.x,e,t),this.y=Ht(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ht(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ht(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Io{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,f){let m=r[a+0],h=r[a+1],x=r[a+2],v=r[a+3],p=l[u+0],S=l[u+1],w=l[u+2],C=l[u+3];if(v!==C||m!==p||h!==S||x!==w){let y=m*p+h*S+x*w+v*C;y<0&&(p=-p,S=-S,w=-w,C=-C,y=-y);let _=1-f;if(y<.9995){const b=Math.acos(y),D=Math.sin(b);_=Math.sin(_*b)/D,f=Math.sin(f*b)/D,m=m*_+p*f,h=h*_+S*f,x=x*_+w*f,v=v*_+C*f}else{m=m*_+p*f,h=h*_+S*f,x=x*_+w*f,v=v*_+C*f;const b=1/Math.sqrt(m*m+h*h+x*x+v*v);m*=b,h*=b,x*=b,v*=b}}e[t]=m,e[t+1]=h,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,l,u){const f=r[a],m=r[a+1],h=r[a+2],x=r[a+3],v=l[u],p=l[u+1],S=l[u+2],w=l[u+3];return e[t]=f*w+x*v+m*S-h*p,e[t+1]=m*w+x*p+h*v-f*S,e[t+2]=h*w+x*S+f*p-m*v,e[t+3]=x*w-f*v-m*p-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,h=f(r/2),x=f(a/2),v=f(l/2),p=m(r/2),S=m(a/2),w=m(l/2);switch(u){case"XYZ":this._x=p*x*v+h*S*w,this._y=h*S*v-p*x*w,this._z=h*x*w+p*S*v,this._w=h*x*v-p*S*w;break;case"YXZ":this._x=p*x*v+h*S*w,this._y=h*S*v-p*x*w,this._z=h*x*w-p*S*v,this._w=h*x*v+p*S*w;break;case"ZXY":this._x=p*x*v-h*S*w,this._y=h*S*v+p*x*w,this._z=h*x*w+p*S*v,this._w=h*x*v-p*S*w;break;case"ZYX":this._x=p*x*v-h*S*w,this._y=h*S*v+p*x*w,this._z=h*x*w-p*S*v,this._w=h*x*v+p*S*w;break;case"YZX":this._x=p*x*v+h*S*w,this._y=h*S*v+p*x*w,this._z=h*x*w-p*S*v,this._w=h*x*v-p*S*w;break;case"XZY":this._x=p*x*v-h*S*w,this._y=h*S*v-p*x*w,this._z=h*x*w+p*S*v,this._w=h*x*v+p*S*w;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],f=t[5],m=t[9],h=t[2],x=t[6],v=t[10],p=r+f+v;if(p>0){const S=.5/Math.sqrt(p+1);this._w=.25/S,this._x=(x-m)*S,this._y=(l-h)*S,this._z=(u-a)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(x-m)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+h)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(l-h)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(m+x)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(u-a)/S,this._x=(l+h)/S,this._y=(m+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,f=t._x,m=t._y,h=t._z,x=t._w;return this._x=r*x+u*f+a*h-l*m,this._y=a*x+u*m+l*f-r*h,this._z=l*x+u*h+r*m-a*f,this._w=u*x-r*f-a*m-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,a=-a,l=-l,u=-u,f=-f);let m=1-t;if(f<.9995){const h=Math.acos(f),x=Math.sin(h);m=Math.sin(m*h)/x,t=Math.sin(t*h)/x,this._x=this._x*m+r*t,this._y=this._y*m+a*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+r*t,this._y=this._y*m+a*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,m=e.w,h=2*(u*a-f*r),x=2*(f*t-l*a),v=2*(l*r-u*t);return this.x=t+m*h+u*v-f*x,this.y=r+m*x+f*h-l*v,this.z=a+m*v+l*x-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ht(this.x,e.x,t.x),this.y=Ht(this.y,e.y,t.y),this.z=Ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ht(this.x,e,t),this.y=Ht(this.y,e,t),this.z=Ht(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ht(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,f=t.y,m=t.z;return this.x=a*m-l*f,this.y=l*u-r*m,this.z=r*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ht(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pd=new ne,zm=new Io;class Ut{constructor(e,t,r,a,l,u,f,m,h){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,m,h)}set(e,t,r,a,l,u,f,m,h){const x=this.elements;return x[0]=e,x[1]=a,x[2]=f,x[3]=t,x[4]=l,x[5]=m,x[6]=r,x[7]=u,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[3],m=r[6],h=r[1],x=r[4],v=r[7],p=r[2],S=r[5],w=r[8],C=a[0],y=a[3],_=a[6],b=a[1],D=a[4],P=a[7],F=a[2],U=a[5],O=a[8];return l[0]=u*C+f*b+m*F,l[3]=u*y+f*D+m*U,l[6]=u*_+f*P+m*O,l[1]=h*C+x*b+v*F,l[4]=h*y+x*D+v*U,l[7]=h*_+x*P+v*O,l[2]=p*C+S*b+w*F,l[5]=p*y+S*D+w*U,l[8]=p*_+S*P+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],m=e[6],h=e[7],x=e[8];return t*u*x-t*f*h-r*l*x+r*f*m+a*l*h-a*u*m}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],m=e[6],h=e[7],x=e[8],v=x*u-f*h,p=f*m-x*l,S=h*l-u*m,w=t*v+r*p+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=v*C,e[1]=(a*h-x*r)*C,e[2]=(f*r-a*u)*C,e[3]=p*C,e[4]=(x*t-a*m)*C,e[5]=(a*l-f*t)*C,e[6]=S*C,e[7]=(r*m-h*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,f){const m=Math.cos(l),h=Math.sin(l);return this.set(r*m,r*h,-r*(m*u+h*f)+u+e,-a*h,a*m,-a*(-h*u+m*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(md.makeScale(e,t)),this}rotate(e){return this.premultiply(md.makeRotation(-e)),this}translate(e,t){return this.premultiply(md.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const md=new Ut,Bm=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hm=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gv(){const s={enabled:!0,workingColorSpace:Ao,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===sn&&(a.r=Cr(a.r),a.g=Cr(a.g),a.b=Cr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===sn&&(a.r=wo(a.r),a.g=wo(a.g),a.b=wo(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===is?_c:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return yc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return yc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ao]:{primaries:e,whitePoint:r,transfer:_c,toXYZ:Bm,fromXYZ:Hm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:r,transfer:sn,toXYZ:Bm,fromXYZ:Hm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),s}const Qt=Gv();function Cr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ro;class Wv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ro===void 0&&(ro=Ea("canvas")),ro.width=e.width,ro.height=e.height;const a=ro.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=ro}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Cr(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Cr(t[r]/255)*255):t[r]=Cr(t[r]);return{data:t,width:e.width,height:e.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jv=0;class $f{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(gd(a[u].image)):l.push(gd(a[u]))}else l=gd(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function gd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let Xv=0;const xd=new ne;class Yn extends Lo{constructor(e=Yn.DEFAULT_IMAGE,t=Yn.DEFAULT_MAPPING,r=Tr,a=Tr,l=ti,u=Ps,f=qi,m=wi,h=Yn.DEFAULT_ANISOTROPY,x=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Ca(),this.name="",this.source=new $f(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xd).x}get height(){return this.source.getSize(xd).y}get depth(){return this.source.getSize(xd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Nt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vc:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vc:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=K0;Yn.DEFAULT_ANISOTROPY=1;class Mn{constructor(e=0,t=0,r=0,a=1){Mn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const m=e.elements,h=m[0],x=m[4],v=m[8],p=m[1],S=m[5],w=m[9],C=m[2],y=m[6],_=m[10];if(Math.abs(x-p)<.01&&Math.abs(v-C)<.01&&Math.abs(w-y)<.01){if(Math.abs(x+p)<.1&&Math.abs(v+C)<.1&&Math.abs(w+y)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(h+1)/2,P=(S+1)/2,F=(_+1)/2,U=(x+p)/4,O=(v+C)/4,E=(w+y)/4;return D>P&&D>F?D<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(D),a=U/r,l=O/r):P>F?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=U/a,l=E/a):F<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(F),r=O/l,a=E/l),this.set(r,a,l,t),this}let b=Math.sqrt((y-w)*(y-w)+(v-C)*(v-C)+(p-x)*(p-x));return Math.abs(b)<.001&&(b=1),this.x=(y-w)/b,this.y=(v-C)/b,this.z=(p-x)/b,this.w=Math.acos((h+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ht(this.x,e.x,t.x),this.y=Ht(this.y,e.y,t.y),this.z=Ht(this.z,e.z,t.z),this.w=Ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ht(this.x,e,t),this.y=Ht(this.y,e,t),this.z=Ht(this.z,e,t),this.w=Ht(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ht(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yv extends Lo{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Mn(0,0,e,t),this.scissorTest=!1,this.viewport=new Mn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new Yn(a),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new $f(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends Yv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class og extends Yn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qv extends Yn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gn{constructor(e,t,r,a,l,u,f,m,h,x,v,p,S,w,C,y){gn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,m,h,x,v,p,S,w,C,y)}set(e,t,r,a,l,u,f,m,h,x,v,p,S,w,C,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=l,_[5]=u,_[9]=f,_[13]=m,_[2]=h,_[6]=x,_[10]=v,_[14]=p,_[3]=S,_[7]=w,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,a=1/so.setFromMatrixColumn(e,0).length(),l=1/so.setFromMatrixColumn(e,1).length(),u=1/so.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),m=Math.cos(a),h=Math.sin(a),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const p=u*x,S=u*v,w=f*x,C=f*v;t[0]=m*x,t[4]=-m*v,t[8]=h,t[1]=S+w*h,t[5]=p-C*h,t[9]=-f*m,t[2]=C-p*h,t[6]=w+S*h,t[10]=u*m}else if(e.order==="YXZ"){const p=m*x,S=m*v,w=h*x,C=h*v;t[0]=p+C*f,t[4]=w*f-S,t[8]=u*h,t[1]=u*v,t[5]=u*x,t[9]=-f,t[2]=S*f-w,t[6]=C+p*f,t[10]=u*m}else if(e.order==="ZXY"){const p=m*x,S=m*v,w=h*x,C=h*v;t[0]=p-C*f,t[4]=-u*v,t[8]=w+S*f,t[1]=S+w*f,t[5]=u*x,t[9]=C-p*f,t[2]=-u*h,t[6]=f,t[10]=u*m}else if(e.order==="ZYX"){const p=u*x,S=u*v,w=f*x,C=f*v;t[0]=m*x,t[4]=w*h-S,t[8]=p*h+C,t[1]=m*v,t[5]=C*h+p,t[9]=S*h-w,t[2]=-h,t[6]=f*m,t[10]=u*m}else if(e.order==="YZX"){const p=u*m,S=u*h,w=f*m,C=f*h;t[0]=m*x,t[4]=C-p*v,t[8]=w*v+S,t[1]=v,t[5]=u*x,t[9]=-f*x,t[2]=-h*x,t[6]=S*v+w,t[10]=p-C*v}else if(e.order==="XZY"){const p=u*m,S=u*h,w=f*m,C=f*h;t[0]=m*x,t[4]=-v,t[8]=h*x,t[1]=p*v+C,t[5]=u*x,t[9]=S*v-w,t[2]=w*v-S,t[6]=f*x,t[10]=C*v+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($v,e,Kv)}lookAt(e,t,r){const a=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Kr.crossVectors(r,Si),Kr.lengthSq()===0&&(Math.abs(r.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Kr.crossVectors(r,Si)),Kr.normalize(),Ul.crossVectors(Si,Kr),a[0]=Kr.x,a[4]=Ul.x,a[8]=Si.x,a[1]=Kr.y,a[5]=Ul.y,a[9]=Si.y,a[2]=Kr.z,a[6]=Ul.z,a[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[4],m=r[8],h=r[12],x=r[1],v=r[5],p=r[9],S=r[13],w=r[2],C=r[6],y=r[10],_=r[14],b=r[3],D=r[7],P=r[11],F=r[15],U=a[0],O=a[4],E=a[8],A=a[12],Y=a[1],z=a[5],G=a[9],Z=a[13],se=a[2],J=a[6],ee=a[10],H=a[14],re=a[3],le=a[7],ue=a[11],V=a[15];return l[0]=u*U+f*Y+m*se+h*re,l[4]=u*O+f*z+m*J+h*le,l[8]=u*E+f*G+m*ee+h*ue,l[12]=u*A+f*Z+m*H+h*V,l[1]=x*U+v*Y+p*se+S*re,l[5]=x*O+v*z+p*J+S*le,l[9]=x*E+v*G+p*ee+S*ue,l[13]=x*A+v*Z+p*H+S*V,l[2]=w*U+C*Y+y*se+_*re,l[6]=w*O+C*z+y*J+_*le,l[10]=w*E+C*G+y*ee+_*ue,l[14]=w*A+C*Z+y*H+_*V,l[3]=b*U+D*Y+P*se+F*re,l[7]=b*O+D*z+P*J+F*le,l[11]=b*E+D*G+P*ee+F*ue,l[15]=b*A+D*Z+P*H+F*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],m=e[9],h=e[13],x=e[2],v=e[6],p=e[10],S=e[14],w=e[3],C=e[7],y=e[11],_=e[15],b=m*S-h*p,D=f*S-h*v,P=f*p-m*v,F=u*S-h*x,U=u*p-m*x,O=u*v-f*x;return t*(C*b-y*D+_*P)-r*(w*b-y*F+_*U)+a*(w*D-C*F+_*O)-l*(w*P-C*U+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],m=e[6],h=e[7],x=e[8],v=e[9],p=e[10],S=e[11],w=e[12],C=e[13],y=e[14],_=e[15],b=t*f-r*u,D=t*m-a*u,P=t*h-l*u,F=r*m-a*f,U=r*h-l*f,O=a*h-l*m,E=x*C-v*w,A=x*y-p*w,Y=x*_-S*w,z=v*y-p*C,G=v*_-S*C,Z=p*_-S*y,se=b*Z-D*G+P*z+F*Y-U*A+O*E;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/se;return e[0]=(f*Z-m*G+h*z)*J,e[1]=(a*G-r*Z-l*z)*J,e[2]=(C*O-y*U+_*F)*J,e[3]=(p*U-v*O-S*F)*J,e[4]=(m*Y-u*Z-h*A)*J,e[5]=(t*Z-a*Y+l*A)*J,e[6]=(y*P-w*O-_*D)*J,e[7]=(x*O-p*P+S*D)*J,e[8]=(u*G-f*Y+h*E)*J,e[9]=(r*Y-t*G-l*E)*J,e[10]=(w*U-C*P+_*b)*J,e[11]=(v*P-x*U-S*b)*J,e[12]=(f*A-u*z-m*E)*J,e[13]=(t*z-r*A+a*E)*J,e[14]=(C*D-w*F-y*b)*J,e[15]=(x*F-v*D+p*b)*J,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,f=e.y,m=e.z,h=l*u,x=l*f;return this.set(h*u+r,h*f-a*m,h*m+a*f,0,h*f+a*m,x*f+r,x*m-a*u,0,h*m-a*f,x*m+a*u,l*m*m+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,f=t._z,m=t._w,h=l+l,x=u+u,v=f+f,p=l*h,S=l*x,w=l*v,C=u*x,y=u*v,_=f*v,b=m*h,D=m*x,P=m*v,F=r.x,U=r.y,O=r.z;return a[0]=(1-(C+_))*F,a[1]=(S+P)*F,a[2]=(w-D)*F,a[3]=0,a[4]=(S-P)*U,a[5]=(1-(p+_))*U,a[6]=(y+b)*U,a[7]=0,a[8]=(w+D)*O,a[9]=(y-b)*O,a[10]=(1-(p+C))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=so.set(a[0],a[1],a[2]).length();const f=so.set(a[4],a[5],a[6]).length(),m=so.set(a[8],a[9],a[10]).length();l<0&&(u=-u),Wi.copy(this);const h=1/u,x=1/f,v=1/m;return Wi.elements[0]*=h,Wi.elements[1]*=h,Wi.elements[2]*=h,Wi.elements[4]*=x,Wi.elements[5]*=x,Wi.elements[6]*=x,Wi.elements[8]*=v,Wi.elements[9]*=v,Wi.elements[10]*=v,t.setFromRotationMatrix(Wi),r.x=u,r.y=f,r.z=m,this}makePerspective(e,t,r,a,l,u,f=sr,m=!1){const h=this.elements,x=2*l/(t-e),v=2*l/(r-a),p=(t+e)/(t-e),S=(r+a)/(r-a);let w,C;if(m)w=l/(u-l),C=u*l/(u-l);else if(f===sr)w=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(f===wa)w=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=x,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,u,f=sr,m=!1){const h=this.elements,x=2/(t-e),v=2/(r-a),p=-(t+e)/(t-e),S=-(r+a)/(r-a);let w,C;if(m)w=1/(u-l),C=u/(u-l);else if(f===sr)w=-2/(u-l),C=-(u+l)/(u-l);else if(f===wa)w=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=x,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=v,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=w,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const so=new ne,Wi=new gn,$v=new ne(0,0,0),Kv=new ne(1,1,1),Kr=new ne,Ul=new ne,Si=new ne,Vm=new gn,Gm=new Io;class ur{constructor(e=0,t=0,r=0,a=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],m=a[1],h=a[5],x=a[9],v=a[2],p=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Ht(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(p,S),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Ht(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gm.setFromEuler(this),this.setFromQuaternion(Gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class Kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zv=0;const Wm=new ne,oo=new Io,Sr=new gn,Fl=new ne,da=new ne,Jv=new ne,Qv=new Io,jm=new ne(1,0,0),Xm=new ne(0,1,0),Ym=new ne(0,0,1),qm={type:"added"},e_={type:"removed"},ao={type:"childadded",child:null},vd={type:"childremoved",child:null};class An extends Lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new ne,t=new ur,r=new Io,a=new ne(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new gn},normalMatrix:{value:new Ut}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oo.setFromAxisAngle(e,t),this.quaternion.multiply(oo),this}rotateOnWorldAxis(e,t){return oo.setFromAxisAngle(e,t),this.quaternion.premultiply(oo),this}rotateX(e){return this.rotateOnAxis(jm,e)}rotateY(e){return this.rotateOnAxis(Xm,e)}rotateZ(e){return this.rotateOnAxis(Ym,e)}translateOnAxis(e,t){return Wm.copy(e).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jm,e)}translateY(e){return this.translateOnAxis(Xm,e)}translateZ(e){return this.translateOnAxis(Ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Fl.copy(e):Fl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(da,Fl,this.up):Sr.lookAt(Fl,da,this.up),this.quaternion.setFromRotationMatrix(Sr),a&&(Sr.extractRotation(a.matrixWorld),oo.setFromRotationMatrix(Sr),this.quaternion.premultiply(oo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Jt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qm),ao.child=e,this.dispatchEvent(ao),ao.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e_),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qm),ao.child=e,this.dispatchEvent(ao),ao.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,Jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,Qv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const v=m[h];l(e.shapes,v)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,h=this.material.length;m<h;m++)f.push(l(e.materials,this.material[m]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];a.animations.push(l(e.animations,m))}}if(t){const f=u(e.geometries),m=u(e.materials),h=u(e.textures),x=u(e.images),v=u(e.shapes),p=u(e.skeletons),S=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),p.length>0&&(r.skeletons=p),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function u(f){const m=[];for(const h in f){const x=f[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}An.DEFAULT_UP=new ne(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $i extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t_={type:"move"};class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const f=this._targetRay,m=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),_=this._getHandJoint(h,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const x=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],p=x.position.distanceTo(v.position),S=.02,w=.005;h.inputState.pinching&&p>S+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=S-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(t_)))}return f!==null&&(f.visible=a!==null),m!==null&&(m.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new $i;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function yd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Qt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Qt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Qt.workingColorSpace){if(e=Vv(e,1),t=Ht(t,0,1),r=Ht(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=yd(u,l,e+1/3),this.g=yd(u,l,e),this.b=yd(u,l,e-1/3)}return Qt.colorSpaceToWorking(this,a),this}setStyle(e,t=jn){function r(l){l!==void 0&&parseFloat(l)<1&&Nt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Nt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);Nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const r=ag[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Qt.workingToColorSpace(ei.copy(this),e),Math.round(Ht(ei.r*255,0,255))*65536+Math.round(Ht(ei.g*255,0,255))*256+Math.round(Ht(ei.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qt.workingColorSpace){Qt.workingToColorSpace(ei.copy(this),t);const r=ei.r,a=ei.g,l=ei.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let m,h;const x=(f+u)/2;if(f===u)m=0,h=0;else{const v=u-f;switch(h=x<=.5?v/(u+f):v/(2-u-f),u){case r:m=(a-l)/v+(a<l?6:0);break;case a:m=(l-r)/v+2;break;case l:m=(r-a)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,t=Qt.workingColorSpace){return Qt.workingToColorSpace(ei.copy(this),t),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=jn){Qt.workingToColorSpace(ei.copy(this),e);const t=ei.r,r=ei.g,a=ei.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(Ol);const r=hd(Zr.h,Ol.h,t),a=hd(Zr.s,Ol.s,t),l=hd(Zr.l,Ol.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new At;At.NAMES=ag;class bc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(e),this.density=t}clone(){return new bc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tc{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new At(e),this.near=t,this.far=r}clone(){return new Tc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ra extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ji=new ne,Mr=new ne,Sd=new ne,wr=new ne,lo=new ne,co=new ne,$m=new ne,Md=new ne,wd=new ne,Ed=new ne,bd=new Mn,Td=new Mn,Ad=new Mn;class Ni{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ji.subVectors(e,t),a.cross(ji);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){ji.subVectors(a,t),Mr.subVectors(r,t),Sd.subVectors(e,t);const u=ji.dot(ji),f=ji.dot(Mr),m=ji.dot(Sd),h=Mr.dot(Mr),x=Mr.dot(Sd),v=u*h-f*f;if(v===0)return l.set(0,0,0),null;const p=1/v,S=(h*m-f*x)*p,w=(u*x-f*m)*p;return l.set(1-S-w,w,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,t,r,a,l,u,f,m){return this.getBarycoord(e,t,r,a,wr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,wr.x),m.addScaledVector(u,wr.y),m.addScaledVector(f,wr.z),m)}static getInterpolatedAttribute(e,t,r,a,l,u){return bd.setScalar(0),Td.setScalar(0),Ad.setScalar(0),bd.fromBufferAttribute(e,t),Td.fromBufferAttribute(e,r),Ad.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(bd,l.x),u.addScaledVector(Td,l.y),u.addScaledVector(Ad,l.z),u}static isFrontFacing(e,t,r,a){return ji.subVectors(r,t),Mr.subVectors(e,t),ji.cross(Mr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),ji.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Ni.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,f;lo.subVectors(a,r),co.subVectors(l,r),Md.subVectors(e,r);const m=lo.dot(Md),h=co.dot(Md);if(m<=0&&h<=0)return t.copy(r);wd.subVectors(e,a);const x=lo.dot(wd),v=co.dot(wd);if(x>=0&&v<=x)return t.copy(a);const p=m*v-x*h;if(p<=0&&m>=0&&x<=0)return u=m/(m-x),t.copy(r).addScaledVector(lo,u);Ed.subVectors(e,l);const S=lo.dot(Ed),w=co.dot(Ed);if(w>=0&&S<=w)return t.copy(l);const C=S*h-m*w;if(C<=0&&h>=0&&w<=0)return f=h/(h-w),t.copy(r).addScaledVector(co,f);const y=x*w-S*v;if(y<=0&&v-x>=0&&S-w>=0)return $m.subVectors(l,a),f=(v-x)/(v-x+(S-w)),t.copy(a).addScaledVector($m,f);const _=1/(y+C+p);return u=C*_,f=p*_,t.copy(r).addScaledVector(lo,u).addScaledVector(co,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pa{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Xi):Xi.fromBufferAttribute(l,u),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),kl.copy(r.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),zl.subVectors(this.max,fa),uo.subVectors(e.a,fa),fo.subVectors(e.b,fa),ho.subVectors(e.c,fa),Jr.subVectors(fo,uo),Qr.subVectors(ho,fo),Ss.subVectors(uo,ho);let t=[0,-Jr.z,Jr.y,0,-Qr.z,Qr.y,0,-Ss.z,Ss.y,Jr.z,0,-Jr.x,Qr.z,0,-Qr.x,Ss.z,0,-Ss.x,-Jr.y,Jr.x,0,-Qr.y,Qr.x,0,-Ss.y,Ss.x,0];return!Cd(t,uo,fo,ho,zl)||(t=[1,0,0,0,1,0,0,0,1],!Cd(t,uo,fo,ho,zl))?!1:(Bl.crossVectors(Jr,Qr),t=[Bl.x,Bl.y,Bl.z],Cd(t,uo,fo,ho,zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Er=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Xi=new ne,kl=new Pa,uo=new ne,fo=new ne,ho=new ne,Jr=new ne,Qr=new ne,Ss=new ne,fa=new ne,zl=new ne,Bl=new ne,Ms=new ne;function Cd(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Ms.fromArray(s,l);const f=a.x*Math.abs(Ms.x)+a.y*Math.abs(Ms.y)+a.z*Math.abs(Ms.z),m=e.dot(Ms),h=t.dot(Ms),x=r.dot(Ms);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>f)return!1}return!0}const Tn=new ne,Hl=new Et;let n_=0;class lr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Um,this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Hl.fromBufferAttribute(this,t),Hl.applyMatrix3(e),this.setXY(t,Hl.x,Hl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ua(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=pi(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),r=pi(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),r=pi(r,this.array),a=pi(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),r=pi(r,this.array),a=pi(a,this.array),l=pi(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Um&&(e.usage=this.usage),e}}class lg extends lr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class cg extends lr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class tn extends lr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const i_=new Pa,ha=new ne,Rd=new ne;class Ac{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):i_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(ha,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Rd)),this.expandByPoint(ha.copy(e.center).sub(Rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let r_=0;const Ii=new gn,Pd=new An,po=new ne,Mi=new Pa,pa=new Pa,zn=new ne;class Cn extends Lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kv(e)?cg:lg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,r){return Ii.makeTranslation(e,t,r),this.applyMatrix4(Ii),this}scale(e,t,r){return Ii.makeScale(e,t,r),this.applyMatrix4(Ii),this}lookAt(e){return Pd.lookAt(e),Pd.updateMatrix(),this.applyMatrix4(Pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new tn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Mi.setFromBufferAttribute(l),this.morphTargetsRelative?(zn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(zn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ac);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];pa.setFromBufferAttribute(f),this.morphTargetsRelative?(zn.addVectors(Mi.min,pa.min),Mi.expandByPoint(zn),zn.addVectors(Mi.max,pa.max),Mi.expandByPoint(zn)):(Mi.expandByPoint(pa.min),Mi.expandByPoint(pa.max))}Mi.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)zn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(zn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],m=this.morphTargetsRelative;for(let h=0,x=f.count;h<x;h++)zn.fromBufferAttribute(f,h),m&&(po.fromBufferAttribute(e,h),zn.add(po)),a=Math.max(a,r.distanceToSquared(zn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lr(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],m=[];for(let E=0;E<r.count;E++)f[E]=new ne,m[E]=new ne;const h=new ne,x=new ne,v=new ne,p=new Et,S=new Et,w=new Et,C=new ne,y=new ne;function _(E,A,Y){h.fromBufferAttribute(r,E),x.fromBufferAttribute(r,A),v.fromBufferAttribute(r,Y),p.fromBufferAttribute(l,E),S.fromBufferAttribute(l,A),w.fromBufferAttribute(l,Y),x.sub(h),v.sub(h),S.sub(p),w.sub(p);const z=1/(S.x*w.y-w.x*S.y);isFinite(z)&&(C.copy(x).multiplyScalar(w.y).addScaledVector(v,-S.y).multiplyScalar(z),y.copy(v).multiplyScalar(S.x).addScaledVector(x,-w.x).multiplyScalar(z),f[E].add(C),f[A].add(C),f[Y].add(C),m[E].add(y),m[A].add(y),m[Y].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let E=0,A=b.length;E<A;++E){const Y=b[E],z=Y.start,G=Y.count;for(let Z=z,se=z+G;Z<se;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const D=new ne,P=new ne,F=new ne,U=new ne;function O(E){F.fromBufferAttribute(a,E),U.copy(F);const A=f[E];D.copy(A),D.sub(F.multiplyScalar(F.dot(A))).normalize(),P.crossVectors(U,A);const z=P.dot(m[E])<0?-1:1;u.setXYZW(E,D.x,D.y,D.z,z)}for(let E=0,A=b.length;E<A;++E){const Y=b[E],z=Y.start,G=Y.count;for(let Z=z,se=z+G;Z<se;Z+=3)O(e.getX(Z+0)),O(e.getX(Z+1)),O(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new lr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let p=0,S=r.count;p<S;p++)r.setXYZ(p,0,0,0);const a=new ne,l=new ne,u=new ne,f=new ne,m=new ne,h=new ne,x=new ne,v=new ne;if(e)for(let p=0,S=e.count;p<S;p+=3){const w=e.getX(p+0),C=e.getX(p+1),y=e.getX(p+2);a.fromBufferAttribute(t,w),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,y),x.subVectors(u,l),v.subVectors(a,l),x.cross(v),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,y),f.add(x),m.add(x),h.add(x),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let p=0,S=t.count;p<S;p+=3)a.fromBufferAttribute(t,p+0),l.fromBufferAttribute(t,p+1),u.fromBufferAttribute(t,p+2),x.subVectors(u,l),v.subVectors(a,l),x.cross(v),r.setXYZ(p+0,x.x,x.y,x.z),r.setXYZ(p+1,x.x,x.y,x.z),r.setXYZ(p+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)zn.fromBufferAttribute(e,t),zn.normalize(),e.setXYZ(t,zn.x,zn.y,zn.z)}toNonIndexed(){function e(f,m){const h=f.array,x=f.itemSize,v=f.normalized,p=new h.constructor(m.length*x);let S=0,w=0;for(let C=0,y=m.length;C<y;C++){f.isInterleavedBufferAttribute?S=m[C]*f.data.stride+f.offset:S=m[C]*x;for(let _=0;_<x;_++)p[w++]=h[S++]}return new lr(p,x,v)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,r=this.index.array,a=this.attributes;for(const f in a){const m=a[f],h=e(m,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const m=[],h=l[f];for(let x=0,v=h.length;x<v;x++){const p=h[x],S=e(p,r);m.push(S)}t.morphAttributes[f]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const a={};let l=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let v=0,p=h.length;v<p;v++){const S=h[v];x.push(S.toJSON(e.data))}x.length>0&&(a[m]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const h in a){const x=a[h];this.setAttribute(h,x.clone(t))}const l=e.morphAttributes;for(const h in l){const x=[],v=l[h];for(let p=0,S=v.length;p<S;p++)x.push(v[p].clone(t));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,x=u.length;h<x;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let s_=0;class No extends Lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Ca(),this.name="",this.type="Material",this.blending=Mo,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=qd,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Nt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(r.blending=this.blending),this.side!==ss&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yd&&(r.blendSrc=this.blendSrc),this.blendDst!==qd&&(r.blendDst=this.blendDst),this.blendEquation!==Cs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==io&&(r.stencilFail=this.stencilFail),this.stencilZFail!==io&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==io&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const br=new ne,Ld=new ne,Vl=new ne,es=new ne,Id=new ne,Gl=new ne,Nd=new ne;class Zf{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(br.copy(this.origin).addScaledVector(this.direction,t),br.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Ld.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),es.copy(this.origin).sub(Ld);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Vl),f=es.dot(this.direction),m=-es.dot(Vl),h=es.lengthSq(),x=Math.abs(1-u*u);let v,p,S,w;if(x>0)if(v=u*m-f,p=u*f-m,w=l*x,v>=0)if(p>=-w)if(p<=w){const C=1/x;v*=C,p*=C,S=v*(v+u*p+2*f)+p*(u*v+p+2*m)+h}else p=l,v=Math.max(0,-(u*p+f)),S=-v*v+p*(p+2*m)+h;else p=-l,v=Math.max(0,-(u*p+f)),S=-v*v+p*(p+2*m)+h;else p<=-w?(v=Math.max(0,-(-u*l+f)),p=v>0?-l:Math.min(Math.max(-l,-m),l),S=-v*v+p*(p+2*m)+h):p<=w?(v=0,p=Math.min(Math.max(-l,-m),l),S=p*(p+2*m)+h):(v=Math.max(0,-(u*l+f)),p=v>0?l:Math.min(Math.max(-l,-m),l),S=-v*v+p*(p+2*m)+h);else p=u>0?-l:l,v=Math.max(0,-(u*p+f)),S=-v*v+p*(p+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Ld).addScaledVector(Vl,p),S}intersectSphere(e,t){br.subVectors(e.center,this.origin);const r=br.dot(this.direction),a=br.dot(br)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,m=r+u;return m<0?null:f<0?this.at(m,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,f,m;const h=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,p=this.origin;return h>=0?(r=(e.min.x-p.x)*h,a=(e.max.x-p.x)*h):(r=(e.max.x-p.x)*h,a=(e.min.x-p.x)*h),x>=0?(l=(e.min.y-p.y)*x,u=(e.max.y-p.y)*x):(l=(e.max.y-p.y)*x,u=(e.min.y-p.y)*x),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),v>=0?(f=(e.min.z-p.z)*v,m=(e.max.z-p.z)*v):(f=(e.max.z-p.z)*v,m=(e.min.z-p.z)*v),r>m||f>a)||((f>r||r!==r)&&(r=f),(m<a||a!==a)&&(a=m),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,t,r,a,l){Id.subVectors(t,e),Gl.subVectors(r,e),Nd.crossVectors(Id,Gl);let u=this.direction.dot(Nd),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;es.subVectors(this.origin,e);const m=f*this.direction.dot(Gl.crossVectors(es,Gl));if(m<0)return null;const h=f*this.direction.dot(Id.cross(es));if(h<0||m+h>u)return null;const x=-f*es.dot(Nd);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ns extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=G0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Km=new gn,ws=new Zf,Wl=new Ac,Zm=new ne,jl=new ne,Xl=new ne,Yl=new ne,Dd=new ne,ql=new ne,Jm=new ne,$l=new ne;class Oe extends An{constructor(e=new Cn,t=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){ql.set(0,0,0);for(let m=0,h=l.length;m<h;m++){const x=f[m],v=l[m];x!==0&&(Dd.fromBufferAttribute(v,e),u?ql.addScaledVector(Dd,x):ql.addScaledVector(Dd.sub(t),x))}t.add(ql)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Wl.copy(r.boundingSphere),Wl.applyMatrix4(l),ws.copy(e.ray).recast(e.near),!(Wl.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Wl,Zm)===null||ws.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&(Km.copy(l).invert(),ws.copy(e.ray).applyMatrix4(Km),!(r.boundingBox!==null&&ws.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,h=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,p=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,C=p.length;w<C;w++){const y=p[w],_=u[y.materialIndex],b=Math.max(y.start,S.start),D=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=b,F=D;P<F;P+=3){const U=f.getX(P),O=f.getX(P+1),E=f.getX(P+2);a=Kl(this,_,e,r,h,x,v,U,O,E),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),C=Math.min(f.count,S.start+S.count);for(let y=w,_=C;y<_;y+=3){const b=f.getX(y),D=f.getX(y+1),P=f.getX(y+2);a=Kl(this,u,e,r,h,x,v,b,D,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(m!==void 0)if(Array.isArray(u))for(let w=0,C=p.length;w<C;w++){const y=p[w],_=u[y.materialIndex],b=Math.max(y.start,S.start),D=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let P=b,F=D;P<F;P+=3){const U=P,O=P+1,E=P+2;a=Kl(this,_,e,r,h,x,v,U,O,E),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),C=Math.min(m.count,S.start+S.count);for(let y=w,_=C;y<_;y+=3){const b=y,D=y+1,P=y+2;a=Kl(this,u,e,r,h,x,v,b,D,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function o_(s,e,t,r,a,l,u,f){let m;if(e.side===gi?m=r.intersectTriangle(u,l,a,!0,f):m=r.intersectTriangle(a,l,u,e.side===ss,f),m===null)return null;$l.copy(f),$l.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo($l);return h<t.near||h>t.far?null:{distance:h,point:$l.clone(),object:s}}function Kl(s,e,t,r,a,l,u,f,m,h){s.getVertexPosition(f,jl),s.getVertexPosition(m,Xl),s.getVertexPosition(h,Yl);const x=o_(s,e,t,r,jl,Xl,Yl,Jm);if(x){const v=new ne;Ni.getBarycoord(Jm,jl,Xl,Yl,v),a&&(x.uv=Ni.getInterpolatedAttribute(a,f,m,h,v,new Et)),l&&(x.uv1=Ni.getInterpolatedAttribute(l,f,m,h,v,new Et)),u&&(x.normal=Ni.getInterpolatedAttribute(u,f,m,h,v,new ne),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const p={a:f,b:m,c:h,normal:new ne,materialIndex:0};Ni.getNormal(jl,Xl,Yl,p.normal),x.face=p,x.barycoord=v}return x}class a_ extends Yn{constructor(e=null,t=1,r=1,a,l,u,f,m,h=Xn,x=Xn,v,p){super(null,u,f,m,h,x,a,l,v,p),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ud=new ne,l_=new ne,c_=new Ut;class As{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Ud.subVectors(r,t).cross(l_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ud),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||c_.getNormalMatrix(e),a=this.coplanarPoint(Ud).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Ac,u_=new Et(.5,.5),Zl=new ne;class Jf{constructor(e=new As,t=new As,r=new As,a=new As,l=new As,u=new As){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=sr,r=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],h=l[3],x=l[4],v=l[5],p=l[6],S=l[7],w=l[8],C=l[9],y=l[10],_=l[11],b=l[12],D=l[13],P=l[14],F=l[15];if(a[0].setComponents(h-u,S-x,_-w,F-b).normalize(),a[1].setComponents(h+u,S+x,_+w,F+b).normalize(),a[2].setComponents(h+f,S+v,_+C,F+D).normalize(),a[3].setComponents(h-f,S-v,_-C,F-D).normalize(),r)a[4].setComponents(m,p,y,P).normalize(),a[5].setComponents(h-m,S-p,_-y,F-P).normalize();else if(a[4].setComponents(h-m,S-p,_-y,F-P).normalize(),t===sr)a[5].setComponents(h+m,S+p,_+y,F+P).normalize();else if(t===wa)a[5].setComponents(m,p,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const t=u_.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Zl.x=a.normal.x>0?e.max.x:e.min.x,Zl.y=a.normal.y>0?e.max.y:e.min.y,Zl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yo extends No{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mc=new ne,wc=new ne,Qm=new gn,ma=new Zf,Jl=new Ac,Fd=new ne,e0=new ne;class gc extends An{constructor(e=new Cn,t=new yo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)Mc.fromBufferAttribute(t,a-1),wc.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Mc.distanceTo(wc);e.setAttribute("lineDistance",new tn(r,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Jl.copy(r.boundingSphere),Jl.applyMatrix4(a),Jl.radius+=l,e.ray.intersectsSphere(Jl)===!1)return;Qm.copy(a).invert(),ma.copy(e.ray).applyMatrix4(Qm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,h=this.isLineSegments?2:1,x=r.index,p=r.attributes.position;if(x!==null){const S=Math.max(0,u.start),w=Math.min(x.count,u.start+u.count);for(let C=S,y=w-1;C<y;C+=h){const _=x.getX(C),b=x.getX(C+1),D=Ql(this,e,ma,m,_,b,C);D&&t.push(D)}if(this.isLineLoop){const C=x.getX(w-1),y=x.getX(S),_=Ql(this,e,ma,m,C,y,w-1);_&&t.push(_)}}else{const S=Math.max(0,u.start),w=Math.min(p.count,u.start+u.count);for(let C=S,y=w-1;C<y;C+=h){const _=Ql(this,e,ma,m,C,C+1,C);_&&t.push(_)}if(this.isLineLoop){const C=Ql(this,e,ma,m,w-1,S,w-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Ql(s,e,t,r,a,l,u){const f=s.geometry.attributes.position;if(Mc.fromBufferAttribute(f,a),wc.fromBufferAttribute(f,l),t.distanceSqToSegment(Mc,wc,Fd,e0)>r)return;Fd.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Fd);if(!(h<e.near||h>e.far))return{distance:h,point:e0.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const t0=new ne,n0=new ne;class i0 extends gc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)t0.fromBufferAttribute(t,a),n0.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+t0.distanceTo(n0);e.setAttribute("lineDistance",new tn(r,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ug extends Yn{constructor(e=[],t=Ns,r,a,l,u,f,m,h,x){super(e,t,r,a,l,u,f,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dg extends Yn{constructor(e,t,r,a,l,u,f,m,h){super(e,t,r,a,l,u,f,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ba extends Yn{constructor(e,t,r=cr,a,l,u,f=Xn,m=Xn,h,x=Pr,v=1){if(x!==Pr&&x!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:v};super(p,a,l,u,f,m,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $f(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class d_ extends ba{constructor(e,t=cr,r=Ns,a,l,u=Xn,f=Xn,m,h=Pr){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,t,r,a,l,u,f,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fg extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mt extends Cn{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const m=[],h=[],x=[],v=[];let p=0,S=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,a,u,2),w("x","z","y",1,-1,e,r,-t,a,u,3),w("x","y","z",1,-1,e,t,r,a,l,4),w("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(m),this.setAttribute("position",new tn(h,3)),this.setAttribute("normal",new tn(x,3)),this.setAttribute("uv",new tn(v,2));function w(C,y,_,b,D,P,F,U,O,E,A){const Y=P/O,z=F/E,G=P/2,Z=F/2,se=U/2,J=O+1,ee=E+1;let H=0,re=0;const le=new ne;for(let ue=0;ue<ee;ue++){const V=ue*z-Z;for(let $=0;$<J;$++){const Le=$*Y-G;le[C]=Le*b,le[y]=V*D,le[_]=se,h.push(le.x,le.y,le.z),le[C]=0,le[y]=0,le[_]=U>0?1:-1,x.push(le.x,le.y,le.z),v.push($/O),v.push(1-ue/E),H+=1}}for(let ue=0;ue<E;ue++)for(let V=0;V<O;V++){const $=p+V+J*ue,Le=p+V+J*(ue+1),Pe=p+(V+1)+J*(ue+1),ze=p+(V+1)+J*ue;m.push($,Le,ze),m.push(Le,Pe,ze),re+=6}f.addGroup(S,re,A),S+=re,p+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yi extends Cn{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],u=[],f=[],m=[],h=new ne,x=new Et;u.push(0,0,0),f.push(0,0,1),m.push(.5,.5);for(let v=0,p=3;v<=t;v++,p+=3){const S=r+v/t*a;h.x=e*Math.cos(S),h.y=e*Math.sin(S),u.push(h.x,h.y,h.z),f.push(0,0,1),x.x=(u[p]/e+1)/2,x.y=(u[p+1]/e+1)/2,m.push(x.x,x.y)}for(let v=1;v<=t;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new tn(u,3)),this.setAttribute("normal",new tn(f,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ut extends Cn{constructor(e=1,t=1,r=1,a=32,l=1,u=!1,f=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:m};const h=this;a=Math.floor(a),l=Math.floor(l);const x=[],v=[],p=[],S=[];let w=0;const C=[],y=r/2;let _=0;b(),u===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(x),this.setAttribute("position",new tn(v,3)),this.setAttribute("normal",new tn(p,3)),this.setAttribute("uv",new tn(S,2));function b(){const P=new ne,F=new ne;let U=0;const O=(t-e)/r;for(let E=0;E<=l;E++){const A=[],Y=E/l,z=Y*(t-e)+e;for(let G=0;G<=a;G++){const Z=G/a,se=Z*m+f,J=Math.sin(se),ee=Math.cos(se);F.x=z*J,F.y=-Y*r+y,F.z=z*ee,v.push(F.x,F.y,F.z),P.set(J,O,ee).normalize(),p.push(P.x,P.y,P.z),S.push(Z,1-Y),A.push(w++)}C.push(A)}for(let E=0;E<a;E++)for(let A=0;A<l;A++){const Y=C[A][E],z=C[A+1][E],G=C[A+1][E+1],Z=C[A][E+1];(e>0||A!==0)&&(x.push(Y,z,Z),U+=3),(t>0||A!==l-1)&&(x.push(z,G,Z),U+=3)}h.addGroup(_,U,0),_+=U}function D(P){const F=w,U=new Et,O=new ne;let E=0;const A=P===!0?e:t,Y=P===!0?1:-1;for(let G=1;G<=a;G++)v.push(0,y*Y,0),p.push(0,Y,0),S.push(.5,.5),w++;const z=w;for(let G=0;G<=a;G++){const se=G/a*m+f,J=Math.cos(se),ee=Math.sin(se);O.x=A*ee,O.y=y*Y,O.z=A*J,v.push(O.x,O.y,O.z),p.push(0,Y,0),U.x=J*.5+.5,U.y=ee*.5*Y+.5,S.push(U.x,U.y),w++}for(let G=0;G<a;G++){const Z=F+G,se=z+G;P===!0?x.push(se,se+1,Z):x.push(se+1,se,Z),E+=3}h.addGroup(_,E,P===!0?1:2),_+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Co extends ut{constructor(e=1,t=1,r=32,a=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,a,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Co(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cc extends Cn{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const l=[],u=[];f(a),h(r),x(),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(l.slice(),3)),this.setAttribute("uv",new tn(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(b){const D=new ne,P=new ne,F=new ne;for(let U=0;U<t.length;U+=3)S(t[U+0],D),S(t[U+1],P),S(t[U+2],F),m(D,P,F,b)}function m(b,D,P,F){const U=F+1,O=[];for(let E=0;E<=U;E++){O[E]=[];const A=b.clone().lerp(P,E/U),Y=D.clone().lerp(P,E/U),z=U-E;for(let G=0;G<=z;G++)G===0&&E===U?O[E][G]=A:O[E][G]=A.clone().lerp(Y,G/z)}for(let E=0;E<U;E++)for(let A=0;A<2*(U-E)-1;A++){const Y=Math.floor(A/2);A%2===0?(p(O[E][Y+1]),p(O[E+1][Y]),p(O[E][Y])):(p(O[E][Y+1]),p(O[E+1][Y+1]),p(O[E+1][Y]))}}function h(b){const D=new ne;for(let P=0;P<l.length;P+=3)D.x=l[P+0],D.y=l[P+1],D.z=l[P+2],D.normalize().multiplyScalar(b),l[P+0]=D.x,l[P+1]=D.y,l[P+2]=D.z}function x(){const b=new ne;for(let D=0;D<l.length;D+=3){b.x=l[D+0],b.y=l[D+1],b.z=l[D+2];const P=y(b)/2/Math.PI+.5,F=_(b)/Math.PI+.5;u.push(P,1-F)}w(),v()}function v(){for(let b=0;b<u.length;b+=6){const D=u[b+0],P=u[b+2],F=u[b+4],U=Math.max(D,P,F),O=Math.min(D,P,F);U>.9&&O<.1&&(D<.2&&(u[b+0]+=1),P<.2&&(u[b+2]+=1),F<.2&&(u[b+4]+=1))}}function p(b){l.push(b.x,b.y,b.z)}function S(b,D){const P=b*3;D.x=e[P+0],D.y=e[P+1],D.z=e[P+2]}function w(){const b=new ne,D=new ne,P=new ne,F=new ne,U=new Et,O=new Et,E=new Et;for(let A=0,Y=0;A<l.length;A+=9,Y+=6){b.set(l[A+0],l[A+1],l[A+2]),D.set(l[A+3],l[A+4],l[A+5]),P.set(l[A+6],l[A+7],l[A+8]),U.set(u[Y+0],u[Y+1]),O.set(u[Y+2],u[Y+3]),E.set(u[Y+4],u[Y+5]),F.copy(b).add(D).add(P).divideScalar(3);const z=y(F);C(U,Y+0,b,z),C(O,Y+2,D,z),C(E,Y+4,P,z)}}function C(b,D,P,F){F<0&&b.x===1&&(u[D]=b.x-1),P.x===0&&P.z===0&&(u[D]=F/2/Math.PI+.5)}function y(b){return Math.atan2(b.z,-b.x)}function _(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.vertices,e.indices,e.radius,e.detail)}}class Qf extends Cc{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,a=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qf(e.radius,e.detail)}}const ec=new ne,tc=new ne,Od=new ne,nc=new Ni;class r0 extends Cn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),l=Math.cos(mc*t),u=e.getIndex(),f=e.getAttribute("position"),m=u?u.count:f.count,h=[0,0,0],x=["a","b","c"],v=new Array(3),p={},S=[];for(let w=0;w<m;w+=3){u?(h[0]=u.getX(w),h[1]=u.getX(w+1),h[2]=u.getX(w+2)):(h[0]=w,h[1]=w+1,h[2]=w+2);const{a:C,b:y,c:_}=nc;if(C.fromBufferAttribute(f,h[0]),y.fromBufferAttribute(f,h[1]),_.fromBufferAttribute(f,h[2]),nc.getNormal(Od),v[0]=`${Math.round(C.x*a)},${Math.round(C.y*a)},${Math.round(C.z*a)}`,v[1]=`${Math.round(y.x*a)},${Math.round(y.y*a)},${Math.round(y.z*a)}`,v[2]=`${Math.round(_.x*a)},${Math.round(_.y*a)},${Math.round(_.z*a)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let b=0;b<3;b++){const D=(b+1)%3,P=v[b],F=v[D],U=nc[x[b]],O=nc[x[D]],E=`${P}_${F}`,A=`${F}_${P}`;A in p&&p[A]?(Od.dot(p[A].normal)<=l&&(S.push(U.x,U.y,U.z),S.push(O.x,O.y,O.z)),p[A]=null):E in p||(p[E]={index0:h[b],index1:h[D],normal:Od.clone()})}}for(const w in p)if(p[w]){const{index0:C,index1:y}=p[w];ec.fromBufferAttribute(f,C),tc.fromBufferAttribute(f,y),S.push(ec.x,ec.y,ec.z),S.push(tc.x,tc.y,tc.z)}this.setAttribute("position",new tn(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ta extends Cn{constructor(e=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],t=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:r,phiLength:a},t=Math.floor(t),a=Ht(a,0,Math.PI*2);const l=[],u=[],f=[],m=[],h=[],x=1/t,v=new ne,p=new Et,S=new ne,w=new ne,C=new ne;let y=0,_=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:y=e[b+1].x-e[b].x,_=e[b+1].y-e[b].y,S.x=_*1,S.y=-y,S.z=_*0,C.copy(S),S.normalize(),m.push(S.x,S.y,S.z);break;case e.length-1:m.push(C.x,C.y,C.z);break;default:y=e[b+1].x-e[b].x,_=e[b+1].y-e[b].y,S.x=_*1,S.y=-y,S.z=_*0,w.copy(S),S.x+=C.x,S.y+=C.y,S.z+=C.z,S.normalize(),m.push(S.x,S.y,S.z),C.copy(w)}for(let b=0;b<=t;b++){const D=r+b*x*a,P=Math.sin(D),F=Math.cos(D);for(let U=0;U<=e.length-1;U++){v.x=e[U].x*P,v.y=e[U].y,v.z=e[U].x*F,u.push(v.x,v.y,v.z),p.x=b/t,p.y=U/(e.length-1),f.push(p.x,p.y);const O=m[3*U+0]*P,E=m[3*U+1],A=m[3*U+0]*F;h.push(O,E,A)}}for(let b=0;b<t;b++)for(let D=0;D<e.length-1;D++){const P=D+b*e.length,F=P,U=P+e.length,O=P+e.length+1,E=P+1;l.push(F,U,E),l.push(O,E,U)}this.setIndex(l),this.setAttribute("position",new tn(u,3)),this.setAttribute("uv",new tn(f,2)),this.setAttribute("normal",new tn(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.points,e.segments,e.phiStart,e.phiLength)}}class eh extends Cc{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new eh(e.radius,e.detail)}}class Yt extends Cn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,f=Math.floor(r),m=Math.floor(a),h=f+1,x=m+1,v=e/f,p=t/m,S=[],w=[],C=[],y=[];for(let _=0;_<x;_++){const b=_*p-u;for(let D=0;D<h;D++){const P=D*v-l;w.push(P,-b,0),C.push(0,0,1),y.push(D/f),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let b=0;b<f;b++){const D=b+h*_,P=b+h*(_+1),F=b+1+h*(_+1),U=b+1+h*_;S.push(D,P,U),S.push(P,F,U)}this.setIndex(S),this.setAttribute("position",new tn(w,3)),this.setAttribute("normal",new tn(C,3)),this.setAttribute("uv",new tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.widthSegments,e.heightSegments)}}class on extends Cn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const m=Math.min(u+f,Math.PI);let h=0;const x=[],v=new ne,p=new ne,S=[],w=[],C=[],y=[];for(let _=0;_<=r;_++){const b=[],D=_/r;let P=0;_===0&&u===0?P=.5/t:_===r&&m===Math.PI&&(P=-.5/t);for(let F=0;F<=t;F++){const U=F/t;v.x=-e*Math.cos(a+U*l)*Math.sin(u+D*f),v.y=e*Math.cos(u+D*f),v.z=e*Math.sin(a+U*l)*Math.sin(u+D*f),w.push(v.x,v.y,v.z),p.copy(v).normalize(),C.push(p.x,p.y,p.z),y.push(U+P,1-D),b.push(h++)}x.push(b)}for(let _=0;_<r;_++)for(let b=0;b<t;b++){const D=x[_][b+1],P=x[_][b],F=x[_+1][b],U=x[_+1][b+1];(_!==0||u>0)&&S.push(D,P,U),(_!==r-1||m<Math.PI)&&S.push(P,F,U)}this.setIndex(S),this.setAttribute("position",new tn(w,3)),this.setAttribute("normal",new tn(C,3)),this.setAttribute("uv",new tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class os extends Cn{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),a=Math.floor(a);const m=[],h=[],x=[],v=[],p=new ne,S=new ne,w=new ne;for(let C=0;C<=r;C++){const y=u+C/r*f;for(let _=0;_<=a;_++){const b=_/a*l;S.x=(e+t*Math.cos(y))*Math.cos(b),S.y=(e+t*Math.cos(y))*Math.sin(b),S.z=t*Math.sin(y),h.push(S.x,S.y,S.z),p.x=e*Math.cos(b),p.y=e*Math.sin(b),w.subVectors(S,p).normalize(),x.push(w.x,w.y,w.z),v.push(_/a),v.push(C/r)}}for(let C=1;C<=r;C++)for(let y=1;y<=a;y++){const _=(a+1)*C+y-1,b=(a+1)*(C-1)+y-1,D=(a+1)*(C-1)+y,P=(a+1)*C+y;m.push(_,b,P),m.push(b,D,P)}this.setIndex(m),this.setAttribute("position",new tn(h,3)),this.setAttribute("normal",new tn(x,3)),this.setAttribute("uv",new tn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Ro(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function si(s){const e={};for(let t=0;t<s.length;t++){const r=Ro(s[t]);for(const a in r)e[a]=r[a]}return e}function f_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function hg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qt.workingColorSpace}const h_={clone:Ro,merge:si};var p_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p_,this.fragmentShader=m_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=f_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class g_ extends dr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class et extends No{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rg,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class x_ extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v_ extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(s0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!s0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function s0(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class __{constructor(e,t,r){const a=this;let l=!1,u=0,f=0,m;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(x){f++,l===!1&&a.onStart!==void 0&&a.onStart(x,u,f),l=!0},this.itemEnd=function(x){u++,a.onProgress!==void 0&&a.onProgress(x,u,f),u===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(x){a.onError!==void 0&&a.onError(x)},this.resolveURL=function(x){return m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,v){return h.push(x,v),this},this.removeHandler=function(x){const v=h.indexOf(x);return v!==-1&&h.splice(v,2),this},this.getHandler=function(x){for(let v=0,p=h.length;v<p;v+=2){const S=h[v],w=h[v+1];if(S.global&&(S.lastIndex=0),S.test(x))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const y_=new __;class th{constructor(e){this.manager=e!==void 0?e:y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(a,l){r.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}th.DEFAULT_MATERIAL_NAME="__DEFAULT";const mo=new WeakMap;class S_ extends th{constructor(e){super(e)}load(e,t,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=kd.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let v=mo.get(u);v===void 0&&(v=[],mo.set(u,v)),v.push({onLoad:t,onError:a})}return u}const f=Ea("img");function m(){x(),t&&t(this);const v=mo.get(this)||[];for(let p=0;p<v.length;p++){const S=v[p];S.onLoad&&S.onLoad(this)}mo.delete(this),l.manager.itemEnd(e)}function h(v){x(),a&&a(v),kd.remove(`image:${e}`);const p=mo.get(this)||[];for(let S=0;S<p.length;S++){const w=p[S];w.onError&&w.onError(v)}mo.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function x(){f.removeEventListener("load",m,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",m,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),kd.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class M_ extends th{constructor(e){super(e)}load(e,t,r,a){const l=new Yn,u=new S_(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,a),l}}class La extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class w_ extends La{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const zd=new gn,o0=new ne,a0=new ne;class nh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new gn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jf,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;o0.setFromMatrixPosition(e.matrixWorld),t.position.copy(o0),a0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(a0),t.updateMatrixWorld(),zd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===wa||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ic=new ne,rc=new Io,tr=new ne;class pg extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ic,rc,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,rc,tr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ic,rc,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,rc,tr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new ne,l0=new Et,c0=new Et;class Bn extends pg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sc*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,l0,c0),t.subVectors(c0,l0)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;l+=u.offsetX*a/m,t-=u.offsetY*r/h,a*=u.width/m,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class E_ extends nh{constructor(){super(new Bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=Sc*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||a!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=a,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _a extends La{constructor(e,t,r=0,a=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.distance=r,this.angle=a,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new E_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class b_ extends nh{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0}}class So extends La{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new b_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ih extends pg{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+t,m=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=x*this.view.offsetY,m=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class T_ extends nh{constructor(){super(new ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Is extends La{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new T_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ia extends La{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const go=-90,xo=1;class A_ extends An{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Bn(go,xo,e,t);a.layers=this.layers,this.add(a);const l=new Bn(go,xo,e,t);l.layers=this.layers,this.add(l);const u=new Bn(go,xo,e,t);u.layers=this.layers,this.add(u);const f=new Bn(go,xo,e,t);f.layers=this.layers,this.add(f);const m=new Bn(go,xo,e,t);m.layers=this.layers,this.add(m);const h=new Bn(go,xo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,f,m]=t;for(const h of t)this.remove(h);if(e===sr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===wa)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,h,x]=this.children,v=e.getRenderTarget(),p=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(r,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(v,p,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class C_ extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const u0=new gn;class rh{constructor(e,t,r=0,a=1/0){this.ray=new Zf(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new Kf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Jt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return u0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(u0),this}intersectObject(e,t=!0,r=[]){return Ff(e,this,r,t),r.sort(d0),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Ff(e[a],this,r,t);return r.sort(d0),r}}function d0(s,e){return s.distance-e.distance}function Ff(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let u=0,f=l.length;u<f;u++)Ff(l[u],e,t,!0)}}function f0(s,e,t,r){const a=R_(r);switch(t){case tg:return s*e;case ig:return s*e/a.components*a.byteLength;case Wf:return s*e/a.components*a.byteLength;case To:return s*e*2/a.components*a.byteLength;case jf:return s*e*2/a.components*a.byteLength;case ng:return s*e*3/a.components*a.byteLength;case qi:return s*e*4/a.components*a.byteLength;case Xf:return s*e*4/a.components*a.byteLength;case dc:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hc:case pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sf:case af:return Math.max(s,16)*Math.max(e,8)/4;case rf:case of:return Math.max(s,8)*Math.max(e,8)/2;case lf:case cf:case df:case ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uf:case hf:case pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case xf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Af:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rf:case Pf:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case If:case Nf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Df:case Uf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R_(s){switch(s){case wi:case Z0:return{byteLength:1,components:1};case Sa:case J0:case Rr:return{byteLength:2,components:1};case Vf:case Gf:return{byteLength:2,components:4};case cr:case Hf:case rr:return{byteLength:4,components:1};case Q0:case eg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bf}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mg(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function P_(s){const e=new WeakMap;function t(f,m){const h=f.array,x=f.usage,v=h.byteLength,p=s.createBuffer();s.bindBuffer(m,p),s.bufferData(m,h,x),f.onUploadCallback();let S;if(h instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=s.SHORT;else if(h instanceof Uint32Array)S=s.UNSIGNED_INT;else if(h instanceof Int32Array)S=s.INT;else if(h instanceof Int8Array)S=s.BYTE;else if(h instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,m,h){const x=m.array,v=m.updateRanges;if(s.bindBuffer(h,f),v.length===0)s.bufferSubData(h,0,x);else{v.sort((S,w)=>S.start-w.start);let p=0;for(let S=1;S<v.length;S++){const w=v[p],C=v[S];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++p,v[p]=C)}v.length=p+1;for(let S=0,w=v.length;S<w;S++){const C=v[S];s.bufferSubData(h,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,m));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,m),h.version=f.version}}return{get:a,remove:l,update:u}}var L_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,N_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,B_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,W_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,j_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,J_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,e1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a1="gl_FragColor = linearToOutputTexel( gl_FragColor );",l1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,w1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,E1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,R1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,I1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,B1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,my=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_y=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,My=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ey=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,by=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Oy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ky=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$y=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:L_,alphahash_pars_fragment:I_,alphamap_fragment:N_,alphamap_pars_fragment:D_,alphatest_fragment:U_,alphatest_pars_fragment:F_,aomap_fragment:O_,aomap_pars_fragment:k_,batching_pars_vertex:z_,batching_vertex:B_,begin_vertex:H_,beginnormal_vertex:V_,bsdfs:G_,iridescence_fragment:W_,bumpmap_pars_fragment:j_,clipping_planes_fragment:X_,clipping_planes_pars_fragment:Y_,clipping_planes_pars_vertex:q_,clipping_planes_vertex:$_,color_fragment:K_,color_pars_fragment:Z_,color_pars_vertex:J_,color_vertex:Q_,common:e1,cube_uv_reflection_fragment:t1,defaultnormal_vertex:n1,displacementmap_pars_vertex:i1,displacementmap_vertex:r1,emissivemap_fragment:s1,emissivemap_pars_fragment:o1,colorspace_fragment:a1,colorspace_pars_fragment:l1,envmap_fragment:c1,envmap_common_pars_fragment:u1,envmap_pars_fragment:d1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:w1,envmap_vertex:h1,fog_vertex:p1,fog_pars_vertex:m1,fog_fragment:g1,fog_pars_fragment:x1,gradientmap_pars_fragment:v1,lightmap_pars_fragment:_1,lights_lambert_fragment:y1,lights_lambert_pars_fragment:S1,lights_pars_begin:M1,lights_toon_fragment:E1,lights_toon_pars_fragment:b1,lights_phong_fragment:T1,lights_phong_pars_fragment:A1,lights_physical_fragment:C1,lights_physical_pars_fragment:R1,lights_fragment_begin:P1,lights_fragment_maps:L1,lights_fragment_end:I1,logdepthbuf_fragment:N1,logdepthbuf_pars_fragment:D1,logdepthbuf_pars_vertex:U1,logdepthbuf_vertex:F1,map_fragment:O1,map_pars_fragment:k1,map_particle_fragment:z1,map_particle_pars_fragment:B1,metalnessmap_fragment:H1,metalnessmap_pars_fragment:V1,morphinstance_vertex:G1,morphcolor_vertex:W1,morphnormal_vertex:j1,morphtarget_pars_vertex:X1,morphtarget_vertex:Y1,normal_fragment_begin:q1,normal_fragment_maps:$1,normal_pars_fragment:K1,normal_pars_vertex:Z1,normal_vertex:J1,normalmap_pars_fragment:Q1,clearcoat_normal_fragment_begin:ey,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ny,iridescence_pars_fragment:iy,opaque_fragment:ry,packing:sy,premultiplied_alpha_fragment:oy,project_vertex:ay,dithering_fragment:ly,dithering_pars_fragment:cy,roughnessmap_fragment:uy,roughnessmap_pars_fragment:dy,shadowmap_pars_fragment:fy,shadowmap_pars_vertex:hy,shadowmap_vertex:py,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:xy,skinning_vertex:vy,skinnormal_vertex:_y,specularmap_fragment:yy,specularmap_pars_fragment:Sy,tonemapping_fragment:My,tonemapping_pars_fragment:wy,transmission_fragment:Ey,transmission_pars_fragment:by,uv_pars_fragment:Ty,uv_pars_vertex:Ay,uv_vertex:Cy,worldpos_vertex:Ry,background_vert:Py,background_frag:Ly,backgroundCube_vert:Iy,backgroundCube_frag:Ny,cube_vert:Dy,cube_frag:Uy,depth_vert:Fy,depth_frag:Oy,distance_vert:ky,distance_frag:zy,equirect_vert:By,equirect_frag:Hy,linedashed_vert:Vy,linedashed_frag:Gy,meshbasic_vert:Wy,meshbasic_frag:jy,meshlambert_vert:Xy,meshlambert_frag:Yy,meshmatcap_vert:qy,meshmatcap_frag:$y,meshnormal_vert:Ky,meshnormal_frag:Zy,meshphong_vert:Jy,meshphong_frag:Qy,meshphysical_vert:eS,meshphysical_frag:tS,meshtoon_vert:nS,meshtoon_frag:iS,points_vert:rS,points_frag:sS,shadow_vert:oS,shadow_frag:aS,sprite_vert:lS,sprite_frag:cS},qe={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},ir={basic:{uniforms:si([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:si([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:si([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:si([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:si([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new At(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:si([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:si([qe.points,qe.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:si([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:si([qe.common,qe.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:si([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:si([qe.sprite,qe.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:si([qe.common,qe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:si([qe.lights,qe.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};ir.physical={uniforms:si([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const sc={r:0,b:0,g:0},bs=new ur,uS=new gn;function dS(s,e,t,r,a,l){const u=new At(0);let f=a===!0?0:1,m,h,x=null,v=0,p=null;function S(b){let D=b.isScene===!0?b.background:null;if(D&&D.isTexture){const P=b.backgroundBlurriness>0;D=e.get(D,P)}return D}function w(b){let D=!1;const P=S(b);P===null?y(u,f):P&&P.isColor&&(y(P,1),D=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(b,D){const P=S(D);P&&(P.isCubeTexture||P.mapping===Ec)?(h===void 0&&(h=new Oe(new mt(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:Ro(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),bs.copy(D.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(uS.makeRotationFromEuler(bs)),h.material.toneMapped=Qt.getTransfer(P.colorSpace)!==sn,(x!==P||v!==P.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,x=P,v=P.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new Oe(new Yt(2,2),new dr({name:"BackgroundMaterial",uniforms:Ro(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Qt.getTransfer(P.colorSpace)!==sn,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||v!==P.version||p!==s.toneMapping)&&(m.material.needsUpdate=!0,x=P,v=P.version,p=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null))}function y(b,D){b.getRGB(sc,hg(s)),t.buffers.color.setClear(sc.r,sc.g,sc.b,D,l)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,D=1){u.set(b),f=D,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,y(u,f)},render:w,addToRenderList:C,dispose:_}}function fS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=p(null);let l=a,u=!1;function f(z,G,Z,se,J){let ee=!1;const H=v(z,se,Z,G);l!==H&&(l=H,h(l.object)),ee=S(z,se,Z,J),ee&&w(z,se,Z,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,P(z,G,Z,se),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return s.createVertexArray()}function h(z){return s.bindVertexArray(z)}function x(z){return s.deleteVertexArray(z)}function v(z,G,Z,se){const J=se.wireframe===!0;let ee=r[G.id];ee===void 0&&(ee={},r[G.id]=ee);const H=z.isInstancedMesh===!0?z.id:0;let re=ee[H];re===void 0&&(re={},ee[H]=re);let le=re[Z.id];le===void 0&&(le={},re[Z.id]=le);let ue=le[J];return ue===void 0&&(ue=p(m()),le[J]=ue),ue}function p(z){const G=[],Z=[],se=[];for(let J=0;J<t;J++)G[J]=0,Z[J]=0,se[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:se,object:z,attributes:{},index:null}}function S(z,G,Z,se){const J=l.attributes,ee=G.attributes;let H=0;const re=Z.getAttributes();for(const le in re)if(re[le].location>=0){const V=J[le];let $=ee[le];if($===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&($=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&($=z.instanceColor)),V===void 0||V.attribute!==$||$&&V.data!==$.data)return!0;H++}return l.attributesNum!==H||l.index!==se}function w(z,G,Z,se){const J={},ee=G.attributes;let H=0;const re=Z.getAttributes();for(const le in re)if(re[le].location>=0){let V=ee[le];V===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&(V=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&(V=z.instanceColor));const $={};$.attribute=V,V&&V.data&&($.data=V.data),J[le]=$,H++}l.attributes=J,l.attributesNum=H,l.index=se}function C(){const z=l.newAttributes;for(let G=0,Z=z.length;G<Z;G++)z[G]=0}function y(z){_(z,0)}function _(z,G){const Z=l.newAttributes,se=l.enabledAttributes,J=l.attributeDivisors;Z[z]=1,se[z]===0&&(s.enableVertexAttribArray(z),se[z]=1),J[z]!==G&&(s.vertexAttribDivisor(z,G),J[z]=G)}function b(){const z=l.newAttributes,G=l.enabledAttributes;for(let Z=0,se=G.length;Z<se;Z++)G[Z]!==z[Z]&&(s.disableVertexAttribArray(Z),G[Z]=0)}function D(z,G,Z,se,J,ee,H){H===!0?s.vertexAttribIPointer(z,G,Z,J,ee):s.vertexAttribPointer(z,G,Z,se,J,ee)}function P(z,G,Z,se){C();const J=se.attributes,ee=Z.getAttributes(),H=G.defaultAttributeValues;for(const re in ee){const le=ee[re];if(le.location>=0){let ue=J[re];if(ue===void 0&&(re==="instanceMatrix"&&z.instanceMatrix&&(ue=z.instanceMatrix),re==="instanceColor"&&z.instanceColor&&(ue=z.instanceColor)),ue!==void 0){const V=ue.normalized,$=ue.itemSize,Le=e.get(ue);if(Le===void 0)continue;const Pe=Le.buffer,ze=Le.type,oe=Le.bytesPerElement,_e=ze===s.INT||ze===s.UNSIGNED_INT||ue.gpuType===Hf;if(ue.isInterleavedBufferAttribute){const Me=ue.data,Ce=Me.stride,Be=ue.offset;if(Me.isInstancedInterleavedBuffer){for(let tt=0;tt<le.locationSize;tt++)_(le.location+tt,Me.meshPerAttribute);z.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let tt=0;tt<le.locationSize;tt++)y(le.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let tt=0;tt<le.locationSize;tt++)D(le.location+tt,$/le.locationSize,ze,V,Ce*oe,(Be+$/le.locationSize*tt)*oe,_e)}else{if(ue.isInstancedBufferAttribute){for(let Me=0;Me<le.locationSize;Me++)_(le.location+Me,ue.meshPerAttribute);z.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Me=0;Me<le.locationSize;Me++)y(le.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Me=0;Me<le.locationSize;Me++)D(le.location+Me,$/le.locationSize,ze,V,$*oe,$/le.locationSize*Me*oe,_e)}}else if(H!==void 0){const V=H[re];if(V!==void 0)switch(V.length){case 2:s.vertexAttrib2fv(le.location,V);break;case 3:s.vertexAttrib3fv(le.location,V);break;case 4:s.vertexAttrib4fv(le.location,V);break;default:s.vertexAttrib1fv(le.location,V)}}}}b()}function F(){A();for(const z in r){const G=r[z];for(const Z in G){const se=G[Z];for(const J in se){const ee=se[J];for(const H in ee)x(ee[H].object),delete ee[H];delete se[J]}}delete r[z]}}function U(z){if(r[z.id]===void 0)return;const G=r[z.id];for(const Z in G){const se=G[Z];for(const J in se){const ee=se[J];for(const H in ee)x(ee[H].object),delete ee[H];delete se[J]}}delete r[z.id]}function O(z){for(const G in r){const Z=r[G];for(const se in Z){const J=Z[se];if(J[z.id]===void 0)continue;const ee=J[z.id];for(const H in ee)x(ee[H].object),delete ee[H];delete J[z.id]}}}function E(z){for(const G in r){const Z=r[G],se=z.isInstancedMesh===!0?z.id:0,J=Z[se];if(J!==void 0){for(const ee in J){const H=J[ee];for(const re in H)x(H[re].object),delete H[re];delete J[ee]}delete Z[se],Object.keys(Z).length===0&&delete r[G]}}}function A(){Y(),u=!0,l!==a&&(l=a,h(l.object))}function Y(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:A,resetDefaultState:Y,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:y,disableUnusedAttributes:b}}function hS(s,e,t){let r;function a(h){r=h}function l(h,x){s.drawArrays(r,h,x),t.update(x,r,1)}function u(h,x,v){v!==0&&(s.drawArraysInstanced(r,h,x,v),t.update(x,r,v))}function f(h,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,x,0,v);let S=0;for(let w=0;w<v;w++)S+=x[w];t.update(S,r,1)}function m(h,x,v,p){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<h.length;w++)u(h[w],x[w],p[w]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,x,0,p,0,v);let w=0;for(let C=0;C<v;C++)w+=x[C]*p[C];t.update(w,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function pS(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==qi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const E=O===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==wi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==rr&&!E)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const x=m(h);x!==h&&(Nt("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const v=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:p,maxTextures:S,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:b,maxVaryings:D,maxFragmentUniforms:P,maxSamples:F,samples:U}}function mS(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new As,f=new Ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,p){const S=v.length!==0||p||r!==0||a;return a=p,r=v.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,p){t=x(v,p,0)},this.setState=function(v,p,S){const w=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!a||w===null||w.length===0||l&&!y)l?x(null):h();else{const b=l?0:r,D=b*4;let P=_.clippingState||null;m.value=P,P=x(w,p,D,S);for(let F=0;F!==D;++F)P[F]=t[F];_.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=b}};function h(){m.value!==t&&(m.value=t,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,p,S,w){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=m.value,w!==!0||y===null){const _=S+C*4,b=p.matrixWorldInverse;f.getNormalMatrix(b),(y===null||y.length<_)&&(y=new Float32Array(_));for(let D=0,P=S;D!==C;++D,P+=4)u.copy(v[D]).applyMatrix4(b,f),u.normal.toArray(y,P),y[P+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const rs=4,h0=[.125,.215,.35,.446,.526,.582],Rs=20,gS=256,ga=new ih,p0=new At;let Bd=null,Hd=0,Vd=0,Gd=!1;const xS=new ne;class m0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:f=xS}=l;Bd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,a,m,f),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,Hd,Vd),this._renderer.xr.enabled=Gd,e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Rr,format:qi,colorSpace:Ao,depthBuffer:!1},a=g0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vS(l)),this._blurMaterial=yS(l,e,t),this._ggxMaterial=_S(l,e,t)}return a}_compileMaterial(e){const t=new Oe(new Cn,e);this._renderer.compile(t,ga)}_sceneToCubeUV(e,t,r,a,l){const m=new Bn(90,1,t,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,p=v.autoClear,S=v.toneMapping;v.getClearColor(p0),v.toneMapping=or,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new mt,new ns({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let _=!1;const b=e.background;b?b.isColor&&(y.color.copy(b),e.background=null,_=!0):(y.color.copy(p0),_=!0);for(let D=0;D<6;D++){const P=D%3;P===0?(m.up.set(0,h[D],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+x[D],l.y,l.z)):P===1?(m.up.set(0,0,h[D]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+x[D],l.z)):(m.up.set(0,h[D],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+x[D]));const F=this._cubeSize;vo(a,P*F,D>2?F:0,F,F),v.setRenderTarget(a),_&&v.render(C,m),v.render(e,m)}v.toneMapping=S,v.autoClear=p,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ns||e.mapping===bo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x0());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;vo(t,0,0,3*m,2*m),r.setRenderTarget(t),r.render(u,ga)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const m=u.uniforms,h=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-x*x),p=0+h*1.25,S=v*p,{_lodMax:w}=this,C=this._sizeLods[r],y=3*C*(r>w-rs?r-w+rs:0),_=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=w-t,vo(l,y,_,3*C,2*C),a.setRenderTarget(l),a.render(f,ga),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=w-r,vo(e,y,_,3*C,2*C),a.setRenderTarget(e),a.render(f,ga)}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,f){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Jt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[a];v.material=h;const p=h.uniforms,S=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Rs-1),C=l/w,y=isFinite(l)?1+Math.floor(x*C):Rs;y>Rs&&Nt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rs}`);const _=[];let b=0;for(let O=0;O<Rs;++O){const E=O/C,A=Math.exp(-E*E/2);_.push(A),O===0?b+=A:O<y&&(b+=2*A)}for(let O=0;O<_.length;O++)_[O]=_[O]/b;p.envMap.value=e.texture,p.samples.value=y,p.weights.value=_,p.latitudinal.value=u==="latitudinal",f&&(p.poleAxis.value=f);const{_lodMax:D}=this;p.dTheta.value=w,p.mipInt.value=D-r;const P=this._sizeLods[a],F=3*P*(a>D-rs?a-D+rs:0),U=4*(this._cubeSize-P);vo(t,F,U,3*P,2*P),m.setRenderTarget(t),m.render(v,ga)}}function vS(s){const e=[],t=[],r=[];let a=s;const l=s-rs+1+h0.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);e.push(f);let m=1/f;u>s-rs?m=h0[u-s+rs-1]:u===0&&(m=0),t.push(m);const h=1/(f-2),x=-h,v=1+h,p=[x,x,v,x,v,v,x,x,v,v,x,v],S=6,w=6,C=3,y=2,_=1,b=new Float32Array(C*w*S),D=new Float32Array(y*w*S),P=new Float32Array(_*w*S);for(let U=0;U<S;U++){const O=U%3*2/3-1,E=U>2?0:-1,A=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];b.set(A,C*w*U),D.set(p,y*w*U);const Y=[U,U,U,U,U,U];P.set(Y,_*w*U)}const F=new Cn;F.setAttribute("position",new lr(b,C)),F.setAttribute("uv",new lr(D,y)),F.setAttribute("faceIndex",new lr(P,_)),r.push(new Oe(F,null)),a>rs&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function g0(s,e,t){const r=new ar(s,e,t);return r.texture.mapping=Ec,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vo(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function _S(s,e,t){return new dr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function yS(s,e,t){const r=new Float32Array(Rs),a=new ne(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function x0(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function v0(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class gg extends ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new ug(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new mt(5,5,5),l=new dr({name:"CubemapFromEquirect",uniforms:Ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:gi,blending:Ar});l.uniforms.tEquirect.value=t;const u=new Oe(a,l),f=t.minFilter;return t.minFilter===Ps&&(t.minFilter=ti),new A_(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}function SS(s){let e=new WeakMap,t=new WeakMap,r=null;function a(p,S=!1){return p==null?null:S?u(p):l(p)}function l(p){if(p&&p.isTexture){const S=p.mapping;if(S===ud||S===dd)if(e.has(p)){const w=e.get(p).texture;return f(w,p.mapping)}else{const w=p.image;if(w&&w.height>0){const C=new gg(w.height);return C.fromEquirectangularTexture(s,p),e.set(p,C),p.addEventListener("dispose",h),f(C.texture,p.mapping)}else return null}}return p}function u(p){if(p&&p.isTexture){const S=p.mapping,w=S===ud||S===dd,C=S===Ns||S===bo;if(w||C){let y=t.get(p);const _=y!==void 0?y.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==_)return r===null&&(r=new m0(s)),y=w?r.fromEquirectangular(p,y):r.fromCubemap(p,y),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),y.texture;if(y!==void 0)return y.texture;{const b=p.image;return w&&b&&b.height>0||C&&b&&m(b)?(r===null&&(r=new m0(s)),y=w?r.fromEquirectangular(p):r.fromCubemap(p),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),p.addEventListener("dispose",x),y.texture):null}}}return p}function f(p,S){return S===ud?p.mapping=Ns:S===dd&&(p.mapping=bo),p}function m(p){let S=0;const w=6;for(let C=0;C<w;C++)p[C]!==void 0&&S++;return S===w}function h(p){const S=p.target;S.removeEventListener("dispose",h);const w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function x(p){const S=p.target;S.removeEventListener("dispose",x);const w=t.get(S);w!==void 0&&(t.delete(S),w.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:v}}function MS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&yc("WebGLRenderer: "+r+" extension not supported."),a}}}function wS(s,e,t,r){const a={},l=new WeakMap;function u(v){const p=v.target;p.index!==null&&e.remove(p.index);for(const w in p.attributes)e.remove(p.attributes[w]);p.removeEventListener("dispose",u),delete a[p.id];const S=l.get(p);S&&(e.remove(S),l.delete(p)),r.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function f(v,p){return a[p.id]===!0||(p.addEventListener("dispose",u),a[p.id]=!0,t.memory.geometries++),p}function m(v){const p=v.attributes;for(const S in p)e.update(p[S],s.ARRAY_BUFFER)}function h(v){const p=[],S=v.index,w=v.attributes.position;let C=0;if(w===void 0)return;if(S!==null){const b=S.array;C=S.version;for(let D=0,P=b.length;D<P;D+=3){const F=b[D+0],U=b[D+1],O=b[D+2];p.push(F,U,U,O,O,F)}}else{const b=w.array;C=w.version;for(let D=0,P=b.length/3-1;D<P;D+=3){const F=D+0,U=D+1,O=D+2;p.push(F,U,U,O,O,F)}}const y=new(w.count>=65535?cg:lg)(p,1);y.version=C;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function x(v){const p=l.get(v);if(p){const S=v.index;S!==null&&p.version<S.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:m,getWireframeAttribute:x}}function ES(s,e,t){let r;function a(p){r=p}let l,u;function f(p){l=p.type,u=p.bytesPerElement}function m(p,S){s.drawElements(r,S,l,p*u),t.update(S,r,1)}function h(p,S,w){w!==0&&(s.drawElementsInstanced(r,S,l,p*u,w),t.update(S,r,w))}function x(p,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,p,0,w);let y=0;for(let _=0;_<w;_++)y+=S[_];t.update(y,r,1)}function v(p,S,w,C){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<p.length;_++)h(p[_]/u,S[_],C[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,p,0,C,0,w);let _=0;for(let b=0;b<w;b++)_+=S[b]*C[b];t.update(_,r,1)}}this.setMode=a,this.setIndex=f,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function bS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Jt("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function TS(s,e,t){const r=new WeakMap,a=new Mn;function l(u,f,m){const h=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let p=r.get(f);if(p===void 0||p.count!==v){let Y=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",Y)};var S=Y;p!==void 0&&p.texture.dispose();const w=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let P=0;w===!0&&(P=1),C===!0&&(P=2),y===!0&&(P=3);let F=f.attributes.position.count*P,U=1;F>e.maxTextureSize&&(U=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const O=new Float32Array(F*U*4*v),E=new og(O,F,U,v);E.type=rr,E.needsUpdate=!0;const A=P*4;for(let z=0;z<v;z++){const G=_[z],Z=b[z],se=D[z],J=F*U*4*z;for(let ee=0;ee<G.count;ee++){const H=ee*A;w===!0&&(a.fromBufferAttribute(G,ee),O[J+H+0]=a.x,O[J+H+1]=a.y,O[J+H+2]=a.z,O[J+H+3]=0),C===!0&&(a.fromBufferAttribute(Z,ee),O[J+H+4]=a.x,O[J+H+5]=a.y,O[J+H+6]=a.z,O[J+H+7]=0),y===!0&&(a.fromBufferAttribute(se,ee),O[J+H+8]=a.x,O[J+H+9]=a.y,O[J+H+10]=a.z,O[J+H+11]=se.itemSize===4?a.w:1)}}p={count:v,texture:E,size:new Et(F,U)},r.set(f,p),f.addEventListener("dispose",Y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let y=0;y<h.length;y++)w+=h[y];const C=f.morphTargetsRelative?1:1-w;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),m.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:l}}function AS(s,e,t,r,a){let l=new WeakMap;function u(h){const x=a.render.frame,v=h.geometry,p=e.get(h,v);if(l.get(p)!==x&&(e.update(p),l.set(p,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),l.get(h)!==x&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,x))),h.isSkinnedMesh){const S=h.skeleton;l.get(S)!==x&&(S.update(),l.set(S,x))}return p}function f(){l=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:u,dispose:f}}const CS={[W0]:"LINEAR_TONE_MAPPING",[j0]:"REINHARD_TONE_MAPPING",[X0]:"CINEON_TONE_MAPPING",[Po]:"ACES_FILMIC_TONE_MAPPING",[q0]:"AGX_TONE_MAPPING",[$0]:"NEUTRAL_TONE_MAPPING",[Y0]:"CUSTOM_TONE_MAPPING"};function RS(s,e,t,r,a){const l=new ar(e,t,{type:s,depthBuffer:r,stencilBuffer:a}),u=new ar(e,t,{type:Rr,depthBuffer:!1,stencilBuffer:!1}),f=new Cn;f.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new tn([0,2,0,0,2,0],2));const m=new g_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Oe(f,m),x=new ih(-1,1,1,-1,0,1);let v=null,p=null,S=!1,w,C=null,y=[],_=!1;this.setSize=function(b,D){l.setSize(b,D),u.setSize(b,D);for(let P=0;P<y.length;P++){const F=y[P];F.setSize&&F.setSize(b,D)}},this.setEffects=function(b){y=b,_=y.length>0&&y[0].isRenderPass===!0;const D=l.width,P=l.height;for(let F=0;F<y.length;F++){const U=y[F];U.setSize&&U.setSize(D,P)}},this.begin=function(b,D){if(S||b.toneMapping===or&&y.length===0)return!1;if(C=D,D!==null){const P=D.width,F=D.height;(l.width!==P||l.height!==F)&&this.setSize(P,F)}return _===!1&&b.setRenderTarget(l),w=b.toneMapping,b.toneMapping=or,!0},this.hasRenderPass=function(){return _},this.end=function(b,D){b.toneMapping=w,S=!0;let P=l,F=u;for(let U=0;U<y.length;U++){const O=y[U];if(O.enabled!==!1&&(O.render(b,F,P,D),O.needsSwap!==!1)){const E=P;P=F,F=E}}if(v!==b.outputColorSpace||p!==b.toneMapping){v=b.outputColorSpace,p=b.toneMapping,m.defines={},Qt.getTransfer(v)===sn&&(m.defines.SRGB_TRANSFER="");const U=CS[p];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,b.setRenderTarget(C),b.render(h,x),C=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),m.dispose()}}const xg=new Yn,Of=new ba(1,1),vg=new og,_g=new qv,yg=new ug,_0=[],y0=[],S0=new Float32Array(16),M0=new Float32Array(9),w0=new Float32Array(4);function Do(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=_0[a];if(l===void 0&&(l=new Float32Array(a),_0[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function In(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Nn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Pc(s,e){let t=y0[e];t===void 0&&(t=new Int32Array(e),y0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function PS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function LS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;s.uniform2fv(this.addr,e),Nn(t,e)}}function IS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;s.uniform3fv(this.addr,e),Nn(t,e)}}function NS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;s.uniform4fv(this.addr,e),Nn(t,e)}}function DS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(In(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(In(t,r))return;w0.set(r),s.uniformMatrix2fv(this.addr,!1,w0),Nn(t,r)}}function US(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(In(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(In(t,r))return;M0.set(r),s.uniformMatrix3fv(this.addr,!1,M0),Nn(t,r)}}function FS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(In(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(In(t,r))return;S0.set(r),s.uniformMatrix4fv(this.addr,!1,S0),Nn(t,r)}}function OS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function kS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;s.uniform2iv(this.addr,e),Nn(t,e)}}function zS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;s.uniform3iv(this.addr,e),Nn(t,e)}}function BS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;s.uniform4iv(this.addr,e),Nn(t,e)}}function HS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function VS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;s.uniform2uiv(this.addr,e),Nn(t,e)}}function GS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;s.uniform3uiv(this.addr,e),Nn(t,e)}}function WS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;s.uniform4uiv(this.addr,e),Nn(t,e)}}function jS(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Of.compareFunction=t.isReversedDepthBuffer()?qf:Yf,l=Of):l=xg,t.setTexture2D(e||l,a)}function XS(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||_g,a)}function YS(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||yg,a)}function qS(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||vg,a)}function $S(s){switch(s){case 5126:return PS;case 35664:return LS;case 35665:return IS;case 35666:return NS;case 35674:return DS;case 35675:return US;case 35676:return FS;case 5124:case 35670:return OS;case 35667:case 35671:return kS;case 35668:case 35672:return zS;case 35669:case 35673:return BS;case 5125:return HS;case 36294:return VS;case 36295:return GS;case 36296:return WS;case 35678:case 36198:case 36298:case 36306:case 35682:return jS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return qS}}function KS(s,e){s.uniform1fv(this.addr,e)}function ZS(s,e){const t=Do(e,this.size,2);s.uniform2fv(this.addr,t)}function JS(s,e){const t=Do(e,this.size,3);s.uniform3fv(this.addr,t)}function QS(s,e){const t=Do(e,this.size,4);s.uniform4fv(this.addr,t)}function eM(s,e){const t=Do(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function tM(s,e){const t=Do(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function nM(s,e){const t=Do(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function iM(s,e){s.uniform1iv(this.addr,e)}function rM(s,e){s.uniform2iv(this.addr,e)}function sM(s,e){s.uniform3iv(this.addr,e)}function oM(s,e){s.uniform4iv(this.addr,e)}function aM(s,e){s.uniform1uiv(this.addr,e)}function lM(s,e){s.uniform2uiv(this.addr,e)}function cM(s,e){s.uniform3uiv(this.addr,e)}function uM(s,e){s.uniform4uiv(this.addr,e)}function dM(s,e,t){const r=this.cache,a=e.length,l=Pc(t,a);In(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Of:u=xg;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||u,l[f])}function fM(s,e,t){const r=this.cache,a=e.length,l=Pc(t,a);In(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||_g,l[u])}function hM(s,e,t){const r=this.cache,a=e.length,l=Pc(t,a);In(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||yg,l[u])}function pM(s,e,t){const r=this.cache,a=e.length,l=Pc(t,a);In(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||vg,l[u])}function mM(s){switch(s){case 5126:return KS;case 35664:return ZS;case 35665:return JS;case 35666:return QS;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return pM}}class gM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=$S(t.type)}}class xM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mM(t.type)}}class vM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function E0(s,e){s.seq.push(e),s.map[e.id]=e}function _M(s,e,t){const r=s.name,a=r.length;for(Wd.lastIndex=0;;){const l=Wd.exec(r),u=Wd.lastIndex;let f=l[1];const m=l[2]==="]",h=l[3];if(m&&(f=f|0),h===void 0||h==="["&&u+2===a){E0(t,h===void 0?new gM(f,s,e):new xM(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new vM(f),E0(t,v)),t=v}}}class xc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),m=e.getUniformLocation(t,f.name);_M(f,m,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const f=t[l],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function b0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const yM=37297;let SM=0;function MM(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const T0=new Ut;function wM(s){Qt._getMatrix(T0,Qt.workingColorSpace,s);const e=`mat3( ${T0.elements.map(t=>t.toFixed(4))} )`;switch(Qt.getTransfer(s)){case _c:return[e,"LinearTransferOETF"];case sn:return[e,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function A0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+MM(s.getShaderSource(e),f)}else return l}function EM(s,e){const t=wM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const bM={[W0]:"Linear",[j0]:"Reinhard",[X0]:"Cineon",[Po]:"ACESFilmic",[q0]:"AgX",[$0]:"Neutral",[Y0]:"Custom"};function TM(s,e){const t=bM[e];return t===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oc=new ne;function AM(){Qt.getLuminanceCoefficients(oc);const s=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function RM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function PM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function ya(s){return s!==""}function C0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LM=/^[ \t]*#include +<([\w\d./]+)>/gm;function kf(s){return s.replace(LM,NM)}const IM=new Map;function NM(s,e){let t=Ot[e];if(t===void 0){const r=IM.get(e);if(r!==void 0)t=Ot[r],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kf(t)}const DM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P0(s){return s.replace(DM,UM)}function UM(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function L0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const FM={[uc]:"SHADOWMAP_TYPE_PCF",[va]:"SHADOWMAP_TYPE_VSM"};function OM(s){return FM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kM={[Ns]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE",[Ec]:"ENVMAP_TYPE_CUBE_UV"};function zM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":kM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const BM={[bo]:"ENVMAP_MODE_REFRACTION"};function HM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":BM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VM={[G0]:"ENVMAP_BLENDING_MULTIPLY",[Av]:"ENVMAP_BLENDING_MIX",[Cv]:"ENVMAP_BLENDING_ADD"};function GM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":VM[s.combine]||"ENVMAP_BLENDING_NONE"}function WM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function jM(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const m=OM(t),h=zM(t),x=HM(t),v=GM(t),p=WM(t),S=CM(t),w=RM(l),C=a.createProgram();let y,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ya).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ya).join(`
`),_.length>0&&(_+=`
`)):(y=[L0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),_=[L0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?Ot.tonemapping_pars_fragment:"",t.toneMapping!==or?TM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,EM("linearToOutputTexel",t.outputColorSpace),AM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),u=kf(u),u=C0(u,t),u=R0(u,t),f=kf(f),f=C0(f,t),f=R0(f,t),u=P0(u),f=P0(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=b+y+u,P=b+_+f,F=b0(a,a.VERTEX_SHADER,D),U=b0(a,a.FRAGMENT_SHADER,P);a.attachShader(C,F),a.attachShader(C,U),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function O(z){if(s.debug.checkShaderErrors){const G=a.getProgramInfoLog(C)||"",Z=a.getShaderInfoLog(F)||"",se=a.getShaderInfoLog(U)||"",J=G.trim(),ee=Z.trim(),H=se.trim();let re=!0,le=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(re=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,F,U);else{const ue=A0(a,F,"vertex"),V=A0(a,U,"fragment");Jt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+J+`
`+ue+`
`+V)}else J!==""?Nt("WebGLProgram: Program Info Log:",J):(ee===""||H==="")&&(le=!1);le&&(z.diagnostics={runnable:re,programLog:J,vertexShader:{log:ee,prefix:y},fragmentShader:{log:H,prefix:_}})}a.deleteShader(F),a.deleteShader(U),E=new xc(a,C),A=PM(a,C)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=a.getProgramParameter(C,yM)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=U,this}let XM=0;class YM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new qM(e),t.set(e,r)),r}}class qM{constructor(e){this.id=XM++,this.code=e,this.usedTimes=0}}function $M(s,e,t,r,a,l){const u=new Kf,f=new YM,m=new Set,h=[],x=new Map,v=r.logarithmicDepthBuffer;let p=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return m.add(E),E===0?"uv":`uv${E}`}function C(E,A,Y,z,G){const Z=z.fog,se=G.geometry,J=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,ee=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,H=e.get(E.envMap||J,ee),re=H&&H.mapping===Ec?H.image.height:null,le=S[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&Nt("WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ue=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,V=ue!==void 0?ue.length:0;let $=0;se.morphAttributes.position!==void 0&&($=1),se.morphAttributes.normal!==void 0&&($=2),se.morphAttributes.color!==void 0&&($=3);let Le,Pe,ze,oe;if(le){const wt=ir[le];Le=wt.vertexShader,Pe=wt.fragmentShader}else Le=E.vertexShader,Pe=E.fragmentShader,f.update(E),ze=f.getVertexShaderID(E),oe=f.getFragmentShaderID(E);const _e=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Ce=G.isInstancedMesh===!0,Be=G.isBatchedMesh===!0,tt=!!E.map,It=!!E.matcap,dt=!!H,ft=!!E.aoMap,it=!!E.lightMap,rt=!!E.bumpMap,Ze=!!E.normalMap,j=!!E.displacementMap,ht=!!E.emissiveMap,gt=!!E.metalnessMap,St=!!E.roughnessMap,Ve=E.anisotropy>0,N=E.clearcoat>0,M=E.dispersion>0,q=E.iridescence>0,ae=E.sheen>0,Se=E.transmission>0,B=Ve&&!!E.anisotropyMap,te=N&&!!E.clearcoatMap,T=N&&!!E.clearcoatNormalMap,k=N&&!!E.clearcoatRoughnessMap,he=q&&!!E.iridescenceMap,ce=q&&!!E.iridescenceThicknessMap,xe=ae&&!!E.sheenColorMap,Re=ae&&!!E.sheenRoughnessMap,Te=!!E.specularMap,be=!!E.specularColorMap,We=!!E.specularIntensityMap,X=Se&&!!E.transmissionMap,we=Se&&!!E.thicknessMap,Ae=!!E.gradientMap,Ue=!!E.alphaMap,Ee=E.alphaTest>0,ge=!!E.alphaHash,ke=!!E.extensions;let Je=or;E.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Je=s.toneMapping);const Mt={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:Le,fragmentShader:Pe,defines:E.defines,customVertexShaderID:ze,customFragmentShaderID:oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Be,batchingColor:Be&&G._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&G.instanceColor!==null,instancingMorph:Ce&&G.morphTexture!==null,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Ao,alphaToCoverage:!!E.alphaToCoverage,map:tt,matcap:It,envMap:dt,envMapMode:dt&&H.mapping,envMapCubeUVHeight:re,aoMap:ft,lightMap:it,bumpMap:rt,normalMap:Ze,displacementMap:j,emissiveMap:ht,normalMapObjectSpace:Ze&&E.normalMapType===Lv,normalMapTangentSpace:Ze&&E.normalMapType===rg,metalnessMap:gt,roughnessMap:St,anisotropy:Ve,anisotropyMap:B,clearcoat:N,clearcoatMap:te,clearcoatNormalMap:T,clearcoatRoughnessMap:k,dispersion:M,iridescence:q,iridescenceMap:he,iridescenceThicknessMap:ce,sheen:ae,sheenColorMap:xe,sheenRoughnessMap:Re,specularMap:Te,specularColorMap:be,specularIntensityMap:We,transmission:Se,transmissionMap:X,thicknessMap:we,gradientMap:Ae,opaque:E.transparent===!1&&E.blending===Mo&&E.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Ee,alphaHash:ge,combine:E.combine,mapUv:tt&&w(E.map.channel),aoMapUv:ft&&w(E.aoMap.channel),lightMapUv:it&&w(E.lightMap.channel),bumpMapUv:rt&&w(E.bumpMap.channel),normalMapUv:Ze&&w(E.normalMap.channel),displacementMapUv:j&&w(E.displacementMap.channel),emissiveMapUv:ht&&w(E.emissiveMap.channel),metalnessMapUv:gt&&w(E.metalnessMap.channel),roughnessMapUv:St&&w(E.roughnessMap.channel),anisotropyMapUv:B&&w(E.anisotropyMap.channel),clearcoatMapUv:te&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:T&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Re&&w(E.sheenRoughnessMap.channel),specularMapUv:Te&&w(E.specularMap.channel),specularColorMapUv:be&&w(E.specularColorMap.channel),specularIntensityMapUv:We&&w(E.specularIntensityMap.channel),transmissionMapUv:X&&w(E.transmissionMap.channel),thicknessMapUv:we&&w(E.thicknessMap.channel),alphaMapUv:Ue&&w(E.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Ze||Ve),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!se.attributes.uv&&(tt||Ue),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||se.attributes.normal===void 0&&Ze===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Me,skinning:G.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:$,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,decodeVideoTexture:tt&&E.map.isVideoTexture===!0&&Qt.getTransfer(E.map.colorSpace)===sn,decodeVideoTextureEmissive:ht&&E.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(E.emissiveMap.colorSpace)===sn,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mi,flipSided:E.side===gi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ke&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&E.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Mt.vertexUv1s=m.has(1),Mt.vertexUv2s=m.has(2),Mt.vertexUv3s=m.has(3),m.clear(),Mt}function y(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)A.push(Y),A.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(_(A,E),b(A,E),A.push(s.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function _(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function b(E,A){u.disableAll(),A.instancing&&u.enable(0),A.instancingColor&&u.enable(1),A.instancingMorph&&u.enable(2),A.matcap&&u.enable(3),A.envMap&&u.enable(4),A.normalMapObjectSpace&&u.enable(5),A.normalMapTangentSpace&&u.enable(6),A.clearcoat&&u.enable(7),A.iridescence&&u.enable(8),A.alphaTest&&u.enable(9),A.vertexColors&&u.enable(10),A.vertexAlphas&&u.enable(11),A.vertexUv1s&&u.enable(12),A.vertexUv2s&&u.enable(13),A.vertexUv3s&&u.enable(14),A.vertexTangents&&u.enable(15),A.anisotropy&&u.enable(16),A.alphaHash&&u.enable(17),A.batching&&u.enable(18),A.dispersion&&u.enable(19),A.batchingColor&&u.enable(20),A.gradientMap&&u.enable(21),E.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.reversedDepthBuffer&&u.enable(4),A.skinning&&u.enable(5),A.morphTargets&&u.enable(6),A.morphNormals&&u.enable(7),A.morphColors&&u.enable(8),A.premultipliedAlpha&&u.enable(9),A.shadowMapEnabled&&u.enable(10),A.doubleSided&&u.enable(11),A.flipSided&&u.enable(12),A.useDepthPacking&&u.enable(13),A.dithering&&u.enable(14),A.transmission&&u.enable(15),A.sheen&&u.enable(16),A.opaque&&u.enable(17),A.pointsUvs&&u.enable(18),A.decodeVideoTexture&&u.enable(19),A.decodeVideoTextureEmissive&&u.enable(20),A.alphaToCoverage&&u.enable(21),E.push(u.mask)}function D(E){const A=S[E.type];let Y;if(A){const z=ir[A];Y=h_.clone(z.uniforms)}else Y=E.uniforms;return Y}function P(E,A){let Y=x.get(A);return Y!==void 0?++Y.usedTimes:(Y=new jM(s,A,E,a),h.push(Y),x.set(A,Y)),Y}function F(E){if(--E.usedTimes===0){const A=h.indexOf(E);h[A]=h[h.length-1],h.pop(),x.delete(E.cacheKey),E.destroy()}}function U(E){f.remove(E)}function O(){f.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:D,acquireProgram:P,releaseProgram:F,releaseShaderCache:U,programs:h,dispose:O}}function KM(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,m){s.get(u)[f]=m}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function ZM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function I0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function N0(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(p){let S=0;return p.isInstancedMesh&&(S+=2),p.isSkinnedMesh&&(S+=1),S}function f(p,S,w,C,y,_){let b=s[e];return b===void 0?(b={id:p.id,object:p,geometry:S,material:w,materialVariant:u(p),groupOrder:C,renderOrder:p.renderOrder,z:y,group:_},s[e]=b):(b.id=p.id,b.object=p,b.geometry=S,b.material=w,b.materialVariant=u(p),b.groupOrder=C,b.renderOrder=p.renderOrder,b.z=y,b.group=_),e++,b}function m(p,S,w,C,y,_){const b=f(p,S,w,C,y,_);w.transmission>0?r.push(b):w.transparent===!0?a.push(b):t.push(b)}function h(p,S,w,C,y,_){const b=f(p,S,w,C,y,_);w.transmission>0?r.unshift(b):w.transparent===!0?a.unshift(b):t.unshift(b)}function x(p,S){t.length>1&&t.sort(p||ZM),r.length>1&&r.sort(S||I0),a.length>1&&a.sort(S||I0)}function v(){for(let p=e,S=s.length;p<S;p++){const w=s[p];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:m,unshift:h,finish:v,sort:x}}function JM(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new N0,s.set(r,[u])):a>=l.length?(u=new N0,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function QM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new At};break;case"SpotLight":t={position:new ne,direction:new ne,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=t,t}}}function ew(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let tw=0;function nw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function iw(s){const e=new QM,t=ew(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ne);const a=new ne,l=new gn,u=new gn;function f(h){let x=0,v=0,p=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let S=0,w=0,C=0,y=0,_=0,b=0,D=0,P=0,F=0,U=0,O=0;h.sort(nw);for(let A=0,Y=h.length;A<Y;A++){const z=h[A],G=z.color,Z=z.intensity,se=z.distance;let J=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===To?J=z.shadow.map.texture:J=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)x+=G.r*Z,v+=G.g*Z,p+=G.b*Z;else if(z.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(z.sh.coefficients[ee],Z);O++}else if(z.isDirectionalLight){const ee=e.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const H=z.shadow,re=t.get(z);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,r.directionalShadow[S]=re,r.directionalShadowMap[S]=J,r.directionalShadowMatrix[S]=z.shadow.matrix,b++}r.directional[S]=ee,S++}else if(z.isSpotLight){const ee=e.get(z);ee.position.setFromMatrixPosition(z.matrixWorld),ee.color.copy(G).multiplyScalar(Z),ee.distance=se,ee.coneCos=Math.cos(z.angle),ee.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ee.decay=z.decay,r.spot[C]=ee;const H=z.shadow;if(z.map&&(r.spotLightMap[F]=z.map,F++,H.updateMatrices(z),z.castShadow&&U++),r.spotLightMatrix[C]=H.matrix,z.castShadow){const re=t.get(z);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,r.spotShadow[C]=re,r.spotShadowMap[C]=J,P++}C++}else if(z.isRectAreaLight){const ee=e.get(z);ee.color.copy(G).multiplyScalar(Z),ee.halfWidth.set(z.width*.5,0,0),ee.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=ee,y++}else if(z.isPointLight){const ee=e.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),ee.distance=z.distance,ee.decay=z.decay,z.castShadow){const H=z.shadow,re=t.get(z);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,re.shadowCameraNear=H.camera.near,re.shadowCameraFar=H.camera.far,r.pointShadow[w]=re,r.pointShadowMap[w]=J,r.pointShadowMatrix[w]=z.shadow.matrix,D++}r.point[w]=ee,w++}else if(z.isHemisphereLight){const ee=e.get(z);ee.skyColor.copy(z.color).multiplyScalar(Z),ee.groundColor.copy(z.groundColor).multiplyScalar(Z),r.hemi[_]=ee,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_FLOAT_1,r.rectAreaLTC2=qe.LTC_FLOAT_2):(r.rectAreaLTC1=qe.LTC_HALF_1,r.rectAreaLTC2=qe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=p;const E=r.hash;(E.directionalLength!==S||E.pointLength!==w||E.spotLength!==C||E.rectAreaLength!==y||E.hemiLength!==_||E.numDirectionalShadows!==b||E.numPointShadows!==D||E.numSpotShadows!==P||E.numSpotMaps!==F||E.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=y,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+F-U,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=O,E.directionalLength=S,E.pointLength=w,E.spotLength=C,E.rectAreaLength=y,E.hemiLength=_,E.numDirectionalShadows=b,E.numPointShadows=D,E.numSpotShadows=P,E.numSpotMaps=F,E.numLightProbes=O,r.version=tw++)}function m(h,x){let v=0,p=0,S=0,w=0,C=0;const y=x.matrixWorldInverse;for(let _=0,b=h.length;_<b;_++){const D=h[_];if(D.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),v++}else if(D.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const P=r.rectArea[w];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),u.identity(),l.copy(D.matrixWorld),l.premultiply(y),u.extractRotation(l),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),w++}else if(D.isPointLight){const P=r.point[p];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),p++}else if(D.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(y),C++}}}return{setup:f,setupView:m,state:r}}function D0(s){const e=new iw(s),t=[],r=[];function a(x){h.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function u(x){r.push(x)}function f(){e.setup(t)}function m(x){e.setupView(t,x)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:f,setupLightsView:m,pushLight:l,pushShadow:u}}function rw(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new D0(s),e.set(a,[f])):l>=u.length?(f=new D0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const sw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ow=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aw=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],lw=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],U0=new gn,xa=new ne,jd=new ne;function cw(s,e,t){let r=new Jf;const a=new Et,l=new Et,u=new Mn,f=new x_,m=new v_,h={},x=t.maxTextureSize,v={[ss]:gi,[gi]:ss,[mi]:mi},p=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:sw,fragmentShader:ow}),S=p.clone();S.defines.HORIZONTAL_PASS=1;const w=new Cn;w.setAttribute("position",new lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Oe(w,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let _=this.type;this.render=function(U,O,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===Aa&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=uc);const A=s.getRenderTarget(),Y=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Ar),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Z=_!==this.type;Z&&O.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(J=>J.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,J=U.length;se<J;se++){const ee=U[se],H=ee.shadow;if(H===void 0){Nt("WebGLShadowMap:",ee,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const re=H.getFrameExtents();a.multiply(re),l.copy(H.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/re.x),a.x=l.x*re.x,H.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/re.y),a.y=l.y*re.y,H.mapSize.y=l.y));const le=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=le,H.map===null||Z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===va){if(ee.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ar(a.x,a.y,{format:To,type:Rr,minFilter:ti,magFilter:ti,generateMipmaps:!1}),H.map.texture.name=ee.name+".shadowMap",H.map.depthTexture=new ba(a.x,a.y,rr),H.map.depthTexture.name=ee.name+".shadowMapDepth",H.map.depthTexture.format=Pr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Xn,H.map.depthTexture.magFilter=Xn}else ee.isPointLight?(H.map=new gg(a.x),H.map.depthTexture=new d_(a.x,cr)):(H.map=new ar(a.x,a.y),H.map.depthTexture=new ba(a.x,a.y,cr)),H.map.depthTexture.name=ee.name+".shadowMap",H.map.depthTexture.format=Pr,this.type===uc?(H.map.depthTexture.compareFunction=le?qf:Yf,H.map.depthTexture.minFilter=ti,H.map.depthTexture.magFilter=ti):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Xn,H.map.depthTexture.magFilter=Xn);H.camera.updateProjectionMatrix()}const ue=H.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<ue;V++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,V),s.clear();else{V===0&&(s.setRenderTarget(H.map),s.clear());const $=H.getViewport(V);u.set(l.x*$.x,l.y*$.y,l.x*$.z,l.y*$.w),G.viewport(u)}if(ee.isPointLight){const $=H.camera,Le=H.matrix,Pe=ee.distance||$.far;Pe!==$.far&&($.far=Pe,$.updateProjectionMatrix()),xa.setFromMatrixPosition(ee.matrixWorld),$.position.copy(xa),jd.copy($.position),jd.add(aw[V]),$.up.copy(lw[V]),$.lookAt(jd),$.updateMatrixWorld(),Le.makeTranslation(-xa.x,-xa.y,-xa.z),U0.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),H._frustum.setFromProjectionMatrix(U0,$.coordinateSystem,$.reversedDepth)}else H.updateMatrices(ee);r=H.getFrustum(),P(O,E,H.camera,ee,this.type)}H.isPointLightShadow!==!0&&this.type===va&&b(H,E),H.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(A,Y,z)};function b(U,O){const E=e.update(C);p.defines.VSM_SAMPLES!==U.blurSamples&&(p.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,p.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ar(a.x,a.y,{format:To,type:Rr})),p.uniforms.shadow_pass.value=U.map.depthTexture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(O,null,E,p,C,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(O,null,E,S,C,null)}function D(U,O,E,A){let Y=null;const z=E.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)Y=z;else if(Y=E.isPointLight===!0?m:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const G=Y.uuid,Z=O.uuid;let se=h[G];se===void 0&&(se={},h[G]=se);let J=se[Z];J===void 0&&(J=Y.clone(),se[Z]=J,O.addEventListener("dispose",F)),Y=J}if(Y.visible=O.visible,Y.wireframe=O.wireframe,A===va?Y.side=O.shadowSide!==null?O.shadowSide:O.side:Y.side=O.shadowSide!==null?O.shadowSide:v[O.side],Y.alphaMap=O.alphaMap,Y.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,Y.map=O.map,Y.clipShadows=O.clipShadows,Y.clippingPlanes=O.clippingPlanes,Y.clipIntersection=O.clipIntersection,Y.displacementMap=O.displacementMap,Y.displacementScale=O.displacementScale,Y.displacementBias=O.displacementBias,Y.wireframeLinewidth=O.wireframeLinewidth,Y.linewidth=O.linewidth,E.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const G=s.properties.get(Y);G.light=E}return Y}function P(U,O,E,A,Y){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&Y===va)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,U.matrixWorld);const Z=e.update(U),se=U.material;if(Array.isArray(se)){const J=Z.groups;for(let ee=0,H=J.length;ee<H;ee++){const re=J[ee],le=se[re.materialIndex];if(le&&le.visible){const ue=D(U,le,A,Y);U.onBeforeShadow(s,U,O,E,Z,ue,re),s.renderBufferDirect(E,null,Z,ue,U,re),U.onAfterShadow(s,U,O,E,Z,ue,re)}}}else if(se.visible){const J=D(U,se,A,Y);U.onBeforeShadow(s,U,O,E,Z,J,null),s.renderBufferDirect(E,null,Z,J,U,null),U.onAfterShadow(s,U,O,E,Z,J,null)}}const G=U.children;for(let Z=0,se=G.length;Z<se;Z++)P(G[Z],O,E,A,Y)}function F(U){U.target.removeEventListener("dispose",F);for(const E in h){const A=h[E],Y=U.target.uuid;Y in A&&(A[Y].dispose(),delete A[Y])}}}function uw(s,e){function t(){let X=!1;const we=new Mn;let Ae=null;const Ue=new Mn(0,0,0,0);return{setMask:function(Ee){Ae!==Ee&&!X&&(s.colorMask(Ee,Ee,Ee,Ee),Ae=Ee)},setLocked:function(Ee){X=Ee},setClear:function(Ee,ge,ke,Je,Mt){Mt===!0&&(Ee*=Je,ge*=Je,ke*=Je),we.set(Ee,ge,ke,Je),Ue.equals(we)===!1&&(s.clearColor(Ee,ge,ke,Je),Ue.copy(we))},reset:function(){X=!1,Ae=null,Ue.set(-1,0,0,0)}}}function r(){let X=!1,we=!1,Ae=null,Ue=null,Ee=null;return{setReversed:function(ge){if(we!==ge){const ke=e.get("EXT_clip_control");ge?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),we=ge;const Je=Ee;Ee=null,this.setClear(Je)}},getReversed:function(){return we},setTest:function(ge){ge?_e(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(ge){Ae!==ge&&!X&&(s.depthMask(ge),Ae=ge)},setFunc:function(ge){if(we&&(ge=Hv[ge]),Ue!==ge){switch(ge){case $d:s.depthFunc(s.NEVER);break;case Kd:s.depthFunc(s.ALWAYS);break;case Zd:s.depthFunc(s.LESS);break;case Eo:s.depthFunc(s.LEQUAL);break;case Jd:s.depthFunc(s.EQUAL);break;case Qd:s.depthFunc(s.GEQUAL);break;case ef:s.depthFunc(s.GREATER);break;case tf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=ge}},setLocked:function(ge){X=ge},setClear:function(ge){Ee!==ge&&(Ee=ge,we&&(ge=1-ge),s.clearDepth(ge))},reset:function(){X=!1,Ae=null,Ue=null,Ee=null,we=!1}}}function a(){let X=!1,we=null,Ae=null,Ue=null,Ee=null,ge=null,ke=null,Je=null,Mt=null;return{setTest:function(wt){X||(wt?_e(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(wt){we!==wt&&!X&&(s.stencilMask(wt),we=wt)},setFunc:function(wt,qt,Vt){(Ae!==wt||Ue!==qt||Ee!==Vt)&&(s.stencilFunc(wt,qt,Vt),Ae=wt,Ue=qt,Ee=Vt)},setOp:function(wt,qt,Vt){(ge!==wt||ke!==qt||Je!==Vt)&&(s.stencilOp(wt,qt,Vt),ge=wt,ke=qt,Je=Vt)},setLocked:function(wt){X=wt},setClear:function(wt){Mt!==wt&&(s.clearStencil(wt),Mt=wt)},reset:function(){X=!1,we=null,Ae=null,Ue=null,Ee=null,ge=null,ke=null,Je=null,Mt=null}}}const l=new t,u=new r,f=new a,m=new WeakMap,h=new WeakMap;let x={},v={},p=new WeakMap,S=[],w=null,C=!1,y=null,_=null,b=null,D=null,P=null,F=null,U=null,O=new At(0,0,0),E=0,A=!1,Y=null,z=null,G=null,Z=null,se=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,H=0;const re=s.getParameter(s.VERSION);re.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(re)[1]),ee=H>=1):re.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ee=H>=2);let le=null,ue={};const V=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),Le=new Mn().fromArray(V),Pe=new Mn().fromArray($);function ze(X,we,Ae,Ue){const Ee=new Uint8Array(4),ge=s.createTexture();s.bindTexture(X,ge),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ke=0;ke<Ae;ke++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(we+ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return ge}const oe={};oe[s.TEXTURE_2D]=ze(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),u.setFunc(Eo),rt(!1),Ze(Pm),_e(s.CULL_FACE),ft(Ar);function _e(X){x[X]!==!0&&(s.enable(X),x[X]=!0)}function Me(X){x[X]!==!1&&(s.disable(X),x[X]=!1)}function Ce(X,we){return v[X]!==we?(s.bindFramebuffer(X,we),v[X]=we,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=we),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Be(X,we){let Ae=S,Ue=!1;if(X){Ae=p.get(we),Ae===void 0&&(Ae=[],p.set(we,Ae));const Ee=X.textures;if(Ae.length!==Ee.length||Ae[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,ke=Ee.length;ge<ke;ge++)Ae[ge]=s.COLOR_ATTACHMENT0+ge;Ae.length=Ee.length,Ue=!0}}else Ae[0]!==s.BACK&&(Ae[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(Ae)}function tt(X){return w!==X?(s.useProgram(X),w=X,!0):!1}const It={[Cs]:s.FUNC_ADD,[uv]:s.FUNC_SUBTRACT,[dv]:s.FUNC_REVERSE_SUBTRACT};It[fv]=s.MIN,It[hv]=s.MAX;const dt={[pv]:s.ZERO,[mv]:s.ONE,[gv]:s.SRC_COLOR,[Yd]:s.SRC_ALPHA,[Mv]:s.SRC_ALPHA_SATURATE,[yv]:s.DST_COLOR,[vv]:s.DST_ALPHA,[xv]:s.ONE_MINUS_SRC_COLOR,[qd]:s.ONE_MINUS_SRC_ALPHA,[Sv]:s.ONE_MINUS_DST_COLOR,[_v]:s.ONE_MINUS_DST_ALPHA,[wv]:s.CONSTANT_COLOR,[Ev]:s.ONE_MINUS_CONSTANT_COLOR,[bv]:s.CONSTANT_ALPHA,[Tv]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(X,we,Ae,Ue,Ee,ge,ke,Je,Mt,wt){if(X===Ar){C===!0&&(Me(s.BLEND),C=!1);return}if(C===!1&&(_e(s.BLEND),C=!0),X!==cv){if(X!==y||wt!==A){if((_!==Cs||P!==Cs)&&(s.blendEquation(s.FUNC_ADD),_=Cs,P=Cs),wt)switch(X){case Mo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lm:s.blendFunc(s.ONE,s.ONE);break;case Im:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Jt("WebGLState: Invalid blending: ",X);break}else switch(X){case Mo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Im:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nm:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",X);break}b=null,D=null,F=null,U=null,O.set(0,0,0),E=0,y=X,A=wt}return}Ee=Ee||we,ge=ge||Ae,ke=ke||Ue,(we!==_||Ee!==P)&&(s.blendEquationSeparate(It[we],It[Ee]),_=we,P=Ee),(Ae!==b||Ue!==D||ge!==F||ke!==U)&&(s.blendFuncSeparate(dt[Ae],dt[Ue],dt[ge],dt[ke]),b=Ae,D=Ue,F=ge,U=ke),(Je.equals(O)===!1||Mt!==E)&&(s.blendColor(Je.r,Je.g,Je.b,Mt),O.copy(Je),E=Mt),y=X,A=!1}function it(X,we){X.side===mi?Me(s.CULL_FACE):_e(s.CULL_FACE);let Ae=X.side===gi;we&&(Ae=!Ae),rt(Ae),X.blending===Mo&&X.transparent===!1?ft(Ar):ft(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const Ue=X.stencilWrite;f.setTest(Ue),Ue&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ht(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(X){Y!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),Y=X)}function Ze(X){X!==av?(_e(s.CULL_FACE),X!==z&&(X===Pm?s.cullFace(s.BACK):X===lv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),z=X}function j(X){X!==G&&(ee&&s.lineWidth(X),G=X)}function ht(X,we,Ae){X?(_e(s.POLYGON_OFFSET_FILL),(Z!==we||se!==Ae)&&(Z=we,se=Ae,u.getReversed()&&(we=-we),s.polygonOffset(we,Ae))):Me(s.POLYGON_OFFSET_FILL)}function gt(X){X?_e(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function St(X){X===void 0&&(X=s.TEXTURE0+J-1),le!==X&&(s.activeTexture(X),le=X)}function Ve(X,we,Ae){Ae===void 0&&(le===null?Ae=s.TEXTURE0+J-1:Ae=le);let Ue=ue[Ae];Ue===void 0&&(Ue={type:void 0,texture:void 0},ue[Ae]=Ue),(Ue.type!==X||Ue.texture!==we)&&(le!==Ae&&(s.activeTexture(Ae),le=Ae),s.bindTexture(X,we||oe[X]),Ue.type=X,Ue.texture=we)}function N(){const X=ue[le];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(X){Jt("WebGLState:",X)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(X){Jt("WebGLState:",X)}}function ae(){try{s.texSubImage2D(...arguments)}catch(X){Jt("WebGLState:",X)}}function Se(){try{s.texSubImage3D(...arguments)}catch(X){Jt("WebGLState:",X)}}function B(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Jt("WebGLState:",X)}}function te(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Jt("WebGLState:",X)}}function T(){try{s.texStorage2D(...arguments)}catch(X){Jt("WebGLState:",X)}}function k(){try{s.texStorage3D(...arguments)}catch(X){Jt("WebGLState:",X)}}function he(){try{s.texImage2D(...arguments)}catch(X){Jt("WebGLState:",X)}}function ce(){try{s.texImage3D(...arguments)}catch(X){Jt("WebGLState:",X)}}function xe(X){Le.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Le.copy(X))}function Re(X){Pe.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Pe.copy(X))}function Te(X,we){let Ae=h.get(we);Ae===void 0&&(Ae=new WeakMap,h.set(we,Ae));let Ue=Ae.get(X);Ue===void 0&&(Ue=s.getUniformBlockIndex(we,X.name),Ae.set(X,Ue))}function be(X,we){const Ue=h.get(we).get(X);m.get(we)!==Ue&&(s.uniformBlockBinding(we,Ue,X.__bindingPointIndex),m.set(we,Ue))}function We(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},le=null,ue={},v={},p=new WeakMap,S=[],w=null,C=!1,y=null,_=null,b=null,D=null,P=null,F=null,U=null,O=new At(0,0,0),E=0,A=!1,Y=null,z=null,G=null,Z=null,se=null,Le.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:_e,disable:Me,bindFramebuffer:Ce,drawBuffers:Be,useProgram:tt,setBlending:ft,setMaterial:it,setFlipSided:rt,setCullFace:Ze,setLineWidth:j,setPolygonOffset:ht,setScissorTest:gt,activeTexture:St,bindTexture:Ve,unbindTexture:N,compressedTexImage2D:M,compressedTexImage3D:q,texImage2D:he,texImage3D:ce,updateUBOMapping:Te,uniformBlockBinding:be,texStorage2D:T,texStorage3D:k,texSubImage2D:ae,texSubImage3D:Se,compressedTexSubImage2D:B,compressedTexSubImage3D:te,scissor:xe,viewport:Re,reset:We}}function dw(s,e,t,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,x=new WeakMap;let v;const p=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,M){return S?new OffscreenCanvas(N,M):Ea("canvas")}function C(N,M,q){let ae=1;const Se=Ve(N);if((Se.width>q||Se.height>q)&&(ae=q/Math.max(Se.width,Se.height)),ae<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const B=Math.floor(ae*Se.width),te=Math.floor(ae*Se.height);v===void 0&&(v=w(B,te));const T=M?w(B,te):v;return T.width=B,T.height=te,T.getContext("2d").drawImage(N,0,0,B,te),Nt("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+B+"x"+te+")."),T}else return"data"in N&&Nt("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function b(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(N,M,q,ae,Se=!1){if(N!==null){if(s[N]!==void 0)return s[N];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let B=M;if(M===s.RED&&(q===s.FLOAT&&(B=s.R32F),q===s.HALF_FLOAT&&(B=s.R16F),q===s.UNSIGNED_BYTE&&(B=s.R8)),M===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(B=s.R8UI),q===s.UNSIGNED_SHORT&&(B=s.R16UI),q===s.UNSIGNED_INT&&(B=s.R32UI),q===s.BYTE&&(B=s.R8I),q===s.SHORT&&(B=s.R16I),q===s.INT&&(B=s.R32I)),M===s.RG&&(q===s.FLOAT&&(B=s.RG32F),q===s.HALF_FLOAT&&(B=s.RG16F),q===s.UNSIGNED_BYTE&&(B=s.RG8)),M===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(B=s.RG8UI),q===s.UNSIGNED_SHORT&&(B=s.RG16UI),q===s.UNSIGNED_INT&&(B=s.RG32UI),q===s.BYTE&&(B=s.RG8I),q===s.SHORT&&(B=s.RG16I),q===s.INT&&(B=s.RG32I)),M===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(B=s.RGB8UI),q===s.UNSIGNED_SHORT&&(B=s.RGB16UI),q===s.UNSIGNED_INT&&(B=s.RGB32UI),q===s.BYTE&&(B=s.RGB8I),q===s.SHORT&&(B=s.RGB16I),q===s.INT&&(B=s.RGB32I)),M===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(B=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(B=s.RGBA16UI),q===s.UNSIGNED_INT&&(B=s.RGBA32UI),q===s.BYTE&&(B=s.RGBA8I),q===s.SHORT&&(B=s.RGBA16I),q===s.INT&&(B=s.RGBA32I)),M===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(B=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(B=s.R11F_G11F_B10F)),M===s.RGBA){const te=Se?_c:Qt.getTransfer(ae);q===s.FLOAT&&(B=s.RGBA32F),q===s.HALF_FLOAT&&(B=s.RGBA16F),q===s.UNSIGNED_BYTE&&(B=te===sn?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(B=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(B=s.RGB5_A1)}return(B===s.R16F||B===s.R32F||B===s.RG16F||B===s.RG32F||B===s.RGBA16F||B===s.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function P(N,M){let q;return N?M===null||M===cr||M===Ma?q=s.DEPTH24_STENCIL8:M===rr?q=s.DEPTH32F_STENCIL8:M===Sa&&(q=s.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===cr||M===Ma?q=s.DEPTH_COMPONENT24:M===rr?q=s.DEPTH_COMPONENT32F:M===Sa&&(q=s.DEPTH_COMPONENT16),q}function F(N,M){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Xn&&N.minFilter!==ti?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function U(N){const M=N.target;M.removeEventListener("dispose",U),E(M),M.isVideoTexture&&x.delete(M)}function O(N){const M=N.target;M.removeEventListener("dispose",O),Y(M)}function E(N){const M=r.get(N);if(M.__webglInit===void 0)return;const q=N.source,ae=p.get(q);if(ae){const Se=ae[M.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&A(N),Object.keys(ae).length===0&&p.delete(q)}r.remove(N)}function A(N){const M=r.get(N);s.deleteTexture(M.__webglTexture);const q=N.source,ae=p.get(q);delete ae[M.__cacheKey],u.memory.textures--}function Y(N){const M=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(M.__webglFramebuffer[ae]))for(let Se=0;Se<M.__webglFramebuffer[ae].length;Se++)s.deleteFramebuffer(M.__webglFramebuffer[ae][Se]);else s.deleteFramebuffer(M.__webglFramebuffer[ae]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ae])}else{if(Array.isArray(M.__webglFramebuffer))for(let ae=0;ae<M.__webglFramebuffer.length;ae++)s.deleteFramebuffer(M.__webglFramebuffer[ae]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ae=0;ae<M.__webglColorRenderbuffer.length;ae++)M.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ae]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=N.textures;for(let ae=0,Se=q.length;ae<Se;ae++){const B=r.get(q[ae]);B.__webglTexture&&(s.deleteTexture(B.__webglTexture),u.memory.textures--),r.remove(q[ae])}r.remove(N)}let z=0;function G(){z=0}function Z(){const N=z;return N>=a.maxTextures&&Nt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),z+=1,N}function se(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function J(N,M){const q=r.get(N);if(N.isVideoTexture&&gt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const ae=N.image;if(ae===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(q,N,M);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+M)}function ee(N,M){const q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){oe(q,N,M);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+M)}function H(N,M){const q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){oe(q,N,M);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+M)}function re(N,M){const q=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){_e(q,N,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+M)}const le={[vc]:s.REPEAT,[Tr]:s.CLAMP_TO_EDGE,[nf]:s.MIRRORED_REPEAT},ue={[Xn]:s.NEAREST,[Rv]:s.NEAREST_MIPMAP_NEAREST,[Dl]:s.NEAREST_MIPMAP_LINEAR,[ti]:s.LINEAR,[fd]:s.LINEAR_MIPMAP_NEAREST,[Ps]:s.LINEAR_MIPMAP_LINEAR},V={[Iv]:s.NEVER,[Ov]:s.ALWAYS,[Nv]:s.LESS,[Yf]:s.LEQUAL,[Dv]:s.EQUAL,[qf]:s.GEQUAL,[Uv]:s.GREATER,[Fv]:s.NOTEQUAL};function $(N,M){if(M.type===rr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ti||M.magFilter===fd||M.magFilter===Dl||M.magFilter===Ps||M.minFilter===ti||M.minFilter===fd||M.minFilter===Dl||M.minFilter===Ps)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,le[M.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,le[M.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,le[M.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,ue[M.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,V[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xn||M.minFilter!==Dl&&M.minFilter!==Ps||M.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Le(N,M){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",U));const ae=M.source;let Se=p.get(ae);Se===void 0&&(Se={},p.set(ae,Se));const B=se(M);if(B!==N.__cacheKey){Se[B]===void 0&&(Se[B]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,q=!0),Se[B].usedTimes++;const te=Se[N.__cacheKey];te!==void 0&&(Se[N.__cacheKey].usedTimes--,te.usedTimes===0&&A(M)),N.__cacheKey=B,N.__webglTexture=Se[B].texture}return q}function Pe(N,M,q){return Math.floor(Math.floor(N/q)/M)}function ze(N,M,q,ae){const B=N.updateRanges;if(B.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,q,ae,M.data);else{B.sort((ce,xe)=>ce.start-xe.start);let te=0;for(let ce=1;ce<B.length;ce++){const xe=B[te],Re=B[ce],Te=xe.start+xe.count,be=Pe(Re.start,M.width,4),We=Pe(xe.start,M.width,4);Re.start<=Te+1&&be===We&&Pe(Re.start+Re.count-1,M.width,4)===be?xe.count=Math.max(xe.count,Re.start+Re.count-xe.start):(++te,B[te]=Re)}B.length=te+1;const T=s.getParameter(s.UNPACK_ROW_LENGTH),k=s.getParameter(s.UNPACK_SKIP_PIXELS),he=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let ce=0,xe=B.length;ce<xe;ce++){const Re=B[ce],Te=Math.floor(Re.start/4),be=Math.ceil(Re.count/4),We=Te%M.width,X=Math.floor(Te/M.width),we=be,Ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),t.texSubImage2D(s.TEXTURE_2D,0,We,X,we,Ae,q,ae,M.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,T),s.pixelStorei(s.UNPACK_SKIP_PIXELS,k),s.pixelStorei(s.UNPACK_SKIP_ROWS,he)}}function oe(N,M,q){let ae=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=s.TEXTURE_3D);const Se=Le(N,M),B=M.source;t.bindTexture(ae,N.__webglTexture,s.TEXTURE0+q);const te=r.get(B);if(B.version!==te.__version||Se===!0){t.activeTexture(s.TEXTURE0+q);const T=Qt.getPrimaries(Qt.workingColorSpace),k=M.colorSpace===is?null:Qt.getPrimaries(M.colorSpace),he=M.colorSpace===is||T===k?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ce=C(M.image,!1,a.maxTextureSize);ce=St(M,ce);const xe=l.convert(M.format,M.colorSpace),Re=l.convert(M.type);let Te=D(M.internalFormat,xe,Re,M.colorSpace,M.isVideoTexture);$(ae,M);let be;const We=M.mipmaps,X=M.isVideoTexture!==!0,we=te.__version===void 0||Se===!0,Ae=B.dataReady,Ue=F(M,ce);if(M.isDepthTexture)Te=P(M.format===Ls,M.type),we&&(X?t.texStorage2D(s.TEXTURE_2D,1,Te,ce.width,ce.height):t.texImage2D(s.TEXTURE_2D,0,Te,ce.width,ce.height,0,xe,Re,null));else if(M.isDataTexture)if(We.length>0){X&&we&&t.texStorage2D(s.TEXTURE_2D,Ue,Te,We[0].width,We[0].height);for(let Ee=0,ge=We.length;Ee<ge;Ee++)be=We[Ee],X?Ae&&t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,be.width,be.height,xe,Re,be.data):t.texImage2D(s.TEXTURE_2D,Ee,Te,be.width,be.height,0,xe,Re,be.data);M.generateMipmaps=!1}else X?(we&&t.texStorage2D(s.TEXTURE_2D,Ue,Te,ce.width,ce.height),Ae&&ze(M,ce,xe,Re)):t.texImage2D(s.TEXTURE_2D,0,Te,ce.width,ce.height,0,xe,Re,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){X&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Te,We[0].width,We[0].height,ce.depth);for(let Ee=0,ge=We.length;Ee<ge;Ee++)if(be=We[Ee],M.format!==qi)if(xe!==null)if(X){if(Ae)if(M.layerUpdates.size>0){const ke=f0(be.width,be.height,M.format,M.type);for(const Je of M.layerUpdates){const Mt=be.data.subarray(Je*ke/be.data.BYTES_PER_ELEMENT,(Je+1)*ke/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,Je,be.width,be.height,1,xe,Mt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,be.width,be.height,ce.depth,xe,be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,Te,be.width,be.height,ce.depth,0,be.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,be.width,be.height,ce.depth,xe,Re,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ee,Te,be.width,be.height,ce.depth,0,xe,Re,be.data)}else{X&&we&&t.texStorage2D(s.TEXTURE_2D,Ue,Te,We[0].width,We[0].height);for(let Ee=0,ge=We.length;Ee<ge;Ee++)be=We[Ee],M.format!==qi?xe!==null?X?Ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,be.width,be.height,xe,be.data):t.compressedTexImage2D(s.TEXTURE_2D,Ee,Te,be.width,be.height,0,be.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ae&&t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,be.width,be.height,xe,Re,be.data):t.texImage2D(s.TEXTURE_2D,Ee,Te,be.width,be.height,0,xe,Re,be.data)}else if(M.isDataArrayTexture)if(X){if(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Te,ce.width,ce.height,ce.depth),Ae)if(M.layerUpdates.size>0){const Ee=f0(ce.width,ce.height,M.format,M.type);for(const ge of M.layerUpdates){const ke=ce.data.subarray(ge*Ee/ce.data.BYTES_PER_ELEMENT,(ge+1)*Ee/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,ce.width,ce.height,1,xe,Re,ke)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,xe,Re,ce.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,ce.width,ce.height,ce.depth,0,xe,Re,ce.data);else if(M.isData3DTexture)X?(we&&t.texStorage3D(s.TEXTURE_3D,Ue,Te,ce.width,ce.height,ce.depth),Ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,xe,Re,ce.data)):t.texImage3D(s.TEXTURE_3D,0,Te,ce.width,ce.height,ce.depth,0,xe,Re,ce.data);else if(M.isFramebufferTexture){if(we)if(X)t.texStorage2D(s.TEXTURE_2D,Ue,Te,ce.width,ce.height);else{let Ee=ce.width,ge=ce.height;for(let ke=0;ke<Ue;ke++)t.texImage2D(s.TEXTURE_2D,ke,Te,Ee,ge,0,xe,Re,null),Ee>>=1,ge>>=1}}else if(We.length>0){if(X&&we){const Ee=Ve(We[0]);t.texStorage2D(s.TEXTURE_2D,Ue,Te,Ee.width,Ee.height)}for(let Ee=0,ge=We.length;Ee<ge;Ee++)be=We[Ee],X?Ae&&t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,xe,Re,be):t.texImage2D(s.TEXTURE_2D,Ee,Te,xe,Re,be);M.generateMipmaps=!1}else if(X){if(we){const Ee=Ve(ce);t.texStorage2D(s.TEXTURE_2D,Ue,Te,Ee.width,Ee.height)}Ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Re,ce)}else t.texImage2D(s.TEXTURE_2D,0,Te,xe,Re,ce);y(M)&&_(ae),te.__version=B.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function _e(N,M,q){if(M.image.length!==6)return;const ae=Le(N,M),Se=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+q);const B=r.get(Se);if(Se.version!==B.__version||ae===!0){t.activeTexture(s.TEXTURE0+q);const te=Qt.getPrimaries(Qt.workingColorSpace),T=M.colorSpace===is?null:Qt.getPrimaries(M.colorSpace),k=M.colorSpace===is||te===T?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);const he=M.isCompressedTexture||M.image[0].isCompressedTexture,ce=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let ge=0;ge<6;ge++)!he&&!ce?xe[ge]=C(M.image[ge],!0,a.maxCubemapSize):xe[ge]=ce?M.image[ge].image:M.image[ge],xe[ge]=St(M,xe[ge]);const Re=xe[0],Te=l.convert(M.format,M.colorSpace),be=l.convert(M.type),We=D(M.internalFormat,Te,be,M.colorSpace),X=M.isVideoTexture!==!0,we=B.__version===void 0||ae===!0,Ae=Se.dataReady;let Ue=F(M,Re);$(s.TEXTURE_CUBE_MAP,M);let Ee;if(he){X&&we&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,We,Re.width,Re.height);for(let ge=0;ge<6;ge++){Ee=xe[ge].mipmaps;for(let ke=0;ke<Ee.length;ke++){const Je=Ee[ke];M.format!==qi?Te!==null?X?Ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke,0,0,Je.width,Je.height,Te,Je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke,We,Je.width,Je.height,0,Je.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke,0,0,Je.width,Je.height,Te,be,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke,We,Je.width,Je.height,0,Te,be,Je.data)}}}else{if(Ee=M.mipmaps,X&&we){Ee.length>0&&Ue++;const ge=Ve(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,We,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ce){X?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,xe[ge].width,xe[ge].height,Te,be,xe[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,We,xe[ge].width,xe[ge].height,0,Te,be,xe[ge].data);for(let ke=0;ke<Ee.length;ke++){const Mt=Ee[ke].image[ge].image;X?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke+1,0,0,Mt.width,Mt.height,Te,be,Mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke+1,We,Mt.width,Mt.height,0,Te,be,Mt.data)}}else{X?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Te,be,xe[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,We,Te,be,xe[ge]);for(let ke=0;ke<Ee.length;ke++){const Je=Ee[ke];X?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke+1,0,0,Te,be,Je.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke+1,We,Te,be,Je.image[ge])}}}y(M)&&_(s.TEXTURE_CUBE_MAP),B.__version=Se.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Me(N,M,q,ae,Se,B){const te=l.convert(q.format,q.colorSpace),T=l.convert(q.type),k=D(q.internalFormat,te,T,q.colorSpace),he=r.get(M),ce=r.get(q);if(ce.__renderTarget=M,!he.__hasExternalTextures){const xe=Math.max(1,M.width>>B),Re=Math.max(1,M.height>>B);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?t.texImage3D(Se,B,k,xe,Re,M.depth,0,te,T,null):t.texImage2D(Se,B,k,xe,Re,0,te,T,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),ht(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,Se,ce.__webglTexture,0,j(M)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,Se,ce.__webglTexture,B),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(N,M,q){if(s.bindRenderbuffer(s.RENDERBUFFER,N),M.depthBuffer){const ae=M.depthTexture,Se=ae&&ae.isDepthTexture?ae.type:null,B=P(M.stencilBuffer,Se),te=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ht(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(M),B,M.width,M.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(M),B,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,B,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,N)}else{const ae=M.textures;for(let Se=0;Se<ae.length;Se++){const B=ae[Se],te=l.convert(B.format,B.colorSpace),T=l.convert(B.type),k=D(B.internalFormat,te,T,B.colorSpace);ht(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(M),k,M.width,M.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(M),k,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,k,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(N,M,q){const ae=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=r.get(M.depthTexture);if(Se.__renderTarget=M,(!Se.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ae){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,M.depthTexture.addEventListener("dispose",U)),Se.__webglTexture===void 0){Se.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),$(s.TEXTURE_CUBE_MAP,M.depthTexture);const he=l.convert(M.depthTexture.format),ce=l.convert(M.depthTexture.type);let xe;M.depthTexture.format===Pr?xe=s.DEPTH_COMPONENT24:M.depthTexture.format===Ls&&(xe=s.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,xe,M.width,M.height,0,he,ce,null)}}else J(M.depthTexture,0);const B=Se.__webglTexture,te=j(M),T=ae?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,k=M.depthTexture.format===Ls?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Pr)ht(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,k,T,B,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,k,T,B,0);else if(M.depthTexture.format===Ls)ht(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,k,T,B,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,k,T,B,0);else throw new Error("Unknown depthTexture format")}function tt(N){const M=r.get(N),q=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const ae=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ae){const Se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ae.removeEventListener("dispose",Se)};ae.addEventListener("dispose",Se),M.__depthDisposeCallback=Se}M.__boundDepthTexture=ae}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let ae=0;ae<6;ae++)Be(M.__webglFramebuffer[ae],N,ae);else{const ae=N.texture.mipmaps;ae&&ae.length>0?Be(M.__webglFramebuffer[0],N,0):Be(M.__webglFramebuffer,N,0)}else if(q){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]===void 0)M.__webglDepthbuffer[ae]=s.createRenderbuffer(),Ce(M.__webglDepthbuffer[ae],N,!1);else{const Se=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,B=M.__webglDepthbuffer[ae];s.bindRenderbuffer(s.RENDERBUFFER,B),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,B)}}else{const ae=N.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Ce(M.__webglDepthbuffer,N,!1);else{const Se=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,B=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,B),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,B)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function It(N,M,q){const ae=r.get(N);M!==void 0&&Me(ae.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&tt(N)}function dt(N){const M=N.texture,q=r.get(N),ae=r.get(M);N.addEventListener("dispose",O);const Se=N.textures,B=N.isWebGLCubeRenderTarget===!0,te=Se.length>1;if(te||(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=M.version,u.memory.textures++),B){q.__webglFramebuffer=[];for(let T=0;T<6;T++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[T]=[];for(let k=0;k<M.mipmaps.length;k++)q.__webglFramebuffer[T][k]=s.createFramebuffer()}else q.__webglFramebuffer[T]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let T=0;T<M.mipmaps.length;T++)q.__webglFramebuffer[T]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(te)for(let T=0,k=Se.length;T<k;T++){const he=r.get(Se[T]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&ht(N)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let T=0;T<Se.length;T++){const k=Se[T];q.__webglColorRenderbuffer[T]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[T]);const he=l.convert(k.format,k.colorSpace),ce=l.convert(k.type),xe=D(k.internalFormat,he,ce,k.colorSpace,N.isXRRenderTarget===!0),Re=j(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,xe,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+T,s.RENDERBUFFER,q.__webglColorRenderbuffer[T])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(B){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),$(s.TEXTURE_CUBE_MAP,M);for(let T=0;T<6;T++)if(M.mipmaps&&M.mipmaps.length>0)for(let k=0;k<M.mipmaps.length;k++)Me(q.__webglFramebuffer[T][k],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+T,k);else Me(q.__webglFramebuffer[T],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+T,0);y(M)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){for(let T=0,k=Se.length;T<k;T++){const he=Se[T],ce=r.get(he);let xe=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(xe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,ce.__webglTexture),$(xe,he),Me(q.__webglFramebuffer,N,he,s.COLOR_ATTACHMENT0+T,xe,0),y(he)&&_(xe)}t.unbindTexture()}else{let T=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(T=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(T,ae.__webglTexture),$(T,M),M.mipmaps&&M.mipmaps.length>0)for(let k=0;k<M.mipmaps.length;k++)Me(q.__webglFramebuffer[k],N,M,s.COLOR_ATTACHMENT0,T,k);else Me(q.__webglFramebuffer,N,M,s.COLOR_ATTACHMENT0,T,0);y(M)&&_(T),t.unbindTexture()}N.depthBuffer&&tt(N)}function ft(N){const M=N.textures;for(let q=0,ae=M.length;q<ae;q++){const Se=M[q];if(y(Se)){const B=b(N),te=r.get(Se).__webglTexture;t.bindTexture(B,te),_(B),t.unbindTexture()}}}const it=[],rt=[];function Ze(N){if(N.samples>0){if(ht(N)===!1){const M=N.textures,q=N.width,ae=N.height;let Se=s.COLOR_BUFFER_BIT;const B=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=r.get(N),T=M.length>1;if(T)for(let he=0;he<M.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer);const k=N.texture.mipmaps;k&&k.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let he=0;he<M.length;he++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),T){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,te.__webglColorRenderbuffer[he]);const ce=r.get(M[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ce,0)}s.blitFramebuffer(0,0,q,ae,0,0,q,ae,Se,s.NEAREST),m===!0&&(it.length=0,rt.length=0,it.push(s.COLOR_ATTACHMENT0+he),N.depthBuffer&&N.resolveDepthBuffer===!1&&(it.push(B),rt.push(B),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,rt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),T)for(let he=0;he<M.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,te.__webglColorRenderbuffer[he]);const ce=r.get(M[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,ce,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const M=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function j(N){return Math.min(a.maxSamples,N.samples)}function ht(N){const M=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(N){const M=u.render.frame;x.get(N)!==M&&(x.set(N,M),N.update())}function St(N,M){const q=N.colorSpace,ae=N.format,Se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==Ao&&q!==is&&(Qt.getTransfer(q)===sn?(ae!==qi||Se!==wi)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",q)),M}function Ve(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=G,this.setTexture2D=J,this.setTexture2DArray=ee,this.setTexture3D=H,this.setTextureCube=re,this.rebindTextures=It,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fw(s,e){function t(r,a=is){let l;const u=Qt.getTransfer(a);if(r===wi)return s.UNSIGNED_BYTE;if(r===Vf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Q0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===eg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Z0)return s.BYTE;if(r===J0)return s.SHORT;if(r===Sa)return s.UNSIGNED_SHORT;if(r===Hf)return s.INT;if(r===cr)return s.UNSIGNED_INT;if(r===rr)return s.FLOAT;if(r===Rr)return s.HALF_FLOAT;if(r===tg)return s.ALPHA;if(r===ng)return s.RGB;if(r===qi)return s.RGBA;if(r===Pr)return s.DEPTH_COMPONENT;if(r===Ls)return s.DEPTH_STENCIL;if(r===ig)return s.RED;if(r===Wf)return s.RED_INTEGER;if(r===To)return s.RG;if(r===jf)return s.RG_INTEGER;if(r===Xf)return s.RGBA_INTEGER;if(r===dc||r===fc||r===hc||r===pc)if(u===sn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===dc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===dc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rf||r===sf||r===of||r===af)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===rf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===of)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===af)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lf||r===cf||r===uf||r===df||r===ff||r===hf||r===pf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===lf||r===cf)return u===sn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===uf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===df)return l.COMPRESSED_R11_EAC;if(r===ff)return l.COMPRESSED_SIGNED_R11_EAC;if(r===hf)return l.COMPRESSED_RG11_EAC;if(r===pf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===mf||r===gf||r===xf||r===vf||r===_f||r===yf||r===Sf||r===Mf||r===wf||r===Ef||r===bf||r===Tf||r===Af||r===Cf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===mf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_f)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ef)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Af)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cf)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rf||r===Pf||r===Lf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Rf)return u===sn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===If||r===Nf||r===Df||r===Uf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===If)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Nf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Df)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ma?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new fg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new dr({vertexShader:hw,fragmentShader:pw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Yt(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gw extends Lo{constructor(e,t){super();const r=this;let a=null,l=1,u=null,f="local-floor",m=1,h=null,x=null,v=null,p=null,S=null,w=null;const C=typeof XRWebGLBinding<"u",y=new mw,_={},b=t.getContextAttributes();let D=null,P=null;const F=[],U=[],O=new Et;let E=null;const A=new Bn;A.viewport=new Mn;const Y=new Bn;Y.viewport=new Mn;const z=[A,Y],G=new C_;let Z=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let _e=F[oe];return _e===void 0&&(_e=new _d,F[oe]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(oe){let _e=F[oe];return _e===void 0&&(_e=new _d,F[oe]=_e),_e.getGripSpace()},this.getHand=function(oe){let _e=F[oe];return _e===void 0&&(_e=new _d,F[oe]=_e),_e.getHandSpace()};function J(oe){const _e=U.indexOf(oe.inputSource);if(_e===-1)return;const Me=F[_e];Me!==void 0&&(Me.update(oe.inputSource,oe.frame,h||u),Me.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ee(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",ee),a.removeEventListener("inputsourceschange",H);for(let oe=0;oe<F.length;oe++){const _e=U[oe];_e!==null&&(U[oe]=null,F[oe].disconnect(_e))}Z=null,se=null,y.reset();for(const oe in _)delete _[oe];e.setRenderTarget(D),S=null,p=null,v=null,a=null,P=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,r.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,r.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return p!==null?p:S},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(a,t)),v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(oe){if(a=oe,a!==null){if(D=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",ee),a.addEventListener("inputsourceschange",H),b.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ce=null,Be=null;b.depth&&(Be=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=b.stencil?Ls:Pr,Ce=b.stencil?Ma:cr);const tt={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:l};v=this.getBinding(),p=v.createProjectionLayer(tt),a.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),P=new ar(p.textureWidth,p.textureHeight,{format:qi,type:wi,depthTexture:new ba(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Me),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new ar(S.framebufferWidth,S.framebufferHeight,{format:qi,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await a.requestReferenceSpace(f),ze.setContext(a),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(oe){for(let _e=0;_e<oe.removed.length;_e++){const Me=oe.removed[_e],Ce=U.indexOf(Me);Ce>=0&&(U[Ce]=null,F[Ce].disconnect(Me))}for(let _e=0;_e<oe.added.length;_e++){const Me=oe.added[_e];let Ce=U.indexOf(Me);if(Ce===-1){for(let tt=0;tt<F.length;tt++)if(tt>=U.length){U.push(Me),Ce=tt;break}else if(U[tt]===null){U[tt]=Me,Ce=tt;break}if(Ce===-1)break}const Be=F[Ce];Be&&Be.connect(Me)}}const re=new ne,le=new ne;function ue(oe,_e,Me){re.setFromMatrixPosition(_e.matrixWorld),le.setFromMatrixPosition(Me.matrixWorld);const Ce=re.distanceTo(le),Be=_e.projectionMatrix.elements,tt=Me.projectionMatrix.elements,It=Be[14]/(Be[10]-1),dt=Be[14]/(Be[10]+1),ft=(Be[9]+1)/Be[5],it=(Be[9]-1)/Be[5],rt=(Be[8]-1)/Be[0],Ze=(tt[8]+1)/tt[0],j=It*rt,ht=It*Ze,gt=Ce/(-rt+Ze),St=gt*-rt;if(_e.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(St),oe.translateZ(gt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Be[10]===-1)oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Ve=It+gt,N=dt+gt,M=j-St,q=ht+(Ce-St),ae=ft*dt/N*Ve,Se=it*dt/N*Ve;oe.projectionMatrix.makePerspective(M,q,ae,Se,Ve,N),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function V(oe,_e){_e===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(_e.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(a===null)return;let _e=oe.near,Me=oe.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),G.near=Y.near=A.near=_e,G.far=Y.far=A.far=Me,(Z!==G.near||se!==G.far)&&(a.updateRenderState({depthNear:G.near,depthFar:G.far}),Z=G.near,se=G.far),G.layers.mask=oe.layers.mask|6,A.layers.mask=G.layers.mask&-5,Y.layers.mask=G.layers.mask&-3;const Ce=oe.parent,Be=G.cameras;V(G,Ce);for(let tt=0;tt<Be.length;tt++)V(Be[tt],Ce);Be.length===2?ue(G,A,Y):G.projectionMatrix.copy(A.projectionMatrix),$(oe,G,Ce)};function $(oe,_e,Me){Me===null?oe.matrix.copy(_e.matrixWorld):(oe.matrix.copy(Me.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(_e.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Sc*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(p===null&&S===null))return m},this.setFoveation=function(oe){m=oe,p!==null&&(p.fixedFoveation=oe),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(G)},this.getCameraTexture=function(oe){return _[oe]};let Le=null;function Pe(oe,_e){if(x=_e.getViewerPose(h||u),w=_e,x!==null){const Me=x.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Ce=!1;Me.length!==G.cameras.length&&(G.cameras.length=0,Ce=!0);for(let dt=0;dt<Me.length;dt++){const ft=Me[dt];let it=null;if(S!==null)it=S.getViewport(ft);else{const Ze=v.getViewSubImage(p,ft);it=Ze.viewport,dt===0&&(e.setRenderTargetTextures(P,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(P))}let rt=z[dt];rt===void 0&&(rt=new Bn,rt.layers.enable(dt),rt.viewport=new Mn,z[dt]=rt),rt.matrix.fromArray(ft.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ft.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(it.x,it.y,it.width,it.height),dt===0&&(G.matrix.copy(rt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ce===!0&&G.cameras.push(rt)}const Be=a.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const dt=v.getDepthInformation(Me[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,a.renderState)}if(Be&&Be.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let dt=0;dt<Me.length;dt++){const ft=Me[dt].camera;if(ft){let it=_[ft];it||(it=new fg,_[ft]=it);const rt=v.getCameraImage(ft);it.sourceTexture=rt}}}}for(let Me=0;Me<F.length;Me++){const Ce=U[Me],Be=F[Me];Ce!==null&&Be!==void 0&&Be.update(Ce,_e,h||u)}Le&&Le(oe,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),w=null}const ze=new mg;ze.setAnimationLoop(Pe),this.setAnimationLoop=function(oe){Le=oe},this.dispose=function(){}}}const Ts=new ur,xw=new gn;function vw(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,hg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,b,D,P){_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),x(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),p(y,_),_.isMeshPhysicalMaterial&&S(y,_,P)):_.isMeshMatcapMaterial?(l(y,_),w(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),C(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?m(y,_,b,D):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===gi&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===gi&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const b=e.get(_),D=b.envMap,P=b.envMapRotation;D&&(y.envMap.value=D,Ts.copy(P),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),y.envMapRotation.value.setFromMatrix4(xw.makeRotationFromEuler(Ts)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,b,D){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*b,y.scale.value=D*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function x(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function p(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,b){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===gi&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const b=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function _w(s,e,t,r){let a={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(b,D){const P=D.program;r.uniformBlockBinding(b,P)}function h(b,D){let P=a[b.id];P===void 0&&(w(b),P=x(b),a[b.id]=P,b.addEventListener("dispose",y));const F=D.program;r.updateUBOMapping(b,F);const U=e.render.frame;l[b.id]!==U&&(p(b),l[b.id]=U)}function x(b){const D=v();b.__bindingPointIndex=D;const P=s.createBuffer(),F=b.__size,U=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,F,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,P),P}function v(){for(let b=0;b<f;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const D=a[b.id],P=b.uniforms,F=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let U=0,O=P.length;U<O;U++){const E=Array.isArray(P[U])?P[U]:[P[U]];for(let A=0,Y=E.length;A<Y;A++){const z=E[A];if(S(z,U,A,F)===!0){const G=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let se=0;for(let J=0;J<Z.length;J++){const ee=Z[J],H=C(ee);typeof ee=="number"||typeof ee=="boolean"?(z.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,G+se,z.__data)):ee.isMatrix3?(z.__data[0]=ee.elements[0],z.__data[1]=ee.elements[1],z.__data[2]=ee.elements[2],z.__data[3]=0,z.__data[4]=ee.elements[3],z.__data[5]=ee.elements[4],z.__data[6]=ee.elements[5],z.__data[7]=0,z.__data[8]=ee.elements[6],z.__data[9]=ee.elements[7],z.__data[10]=ee.elements[8],z.__data[11]=0):(ee.toArray(z.__data,se),se+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(b,D,P,F){const U=b.value,O=D+"_"+P;if(F[O]===void 0)return typeof U=="number"||typeof U=="boolean"?F[O]=U:F[O]=U.clone(),!0;{const E=F[O];if(typeof U=="number"||typeof U=="boolean"){if(E!==U)return F[O]=U,!0}else if(E.equals(U)===!1)return E.copy(U),!0}return!1}function w(b){const D=b.uniforms;let P=0;const F=16;for(let O=0,E=D.length;O<E;O++){const A=Array.isArray(D[O])?D[O]:[D[O]];for(let Y=0,z=A.length;Y<z;Y++){const G=A[Y],Z=Array.isArray(G.value)?G.value:[G.value];for(let se=0,J=Z.length;se<J;se++){const ee=Z[se],H=C(ee),re=P%F,le=re%H.boundary,ue=re+le;P+=le,ue!==0&&F-ue<H.storage&&(P+=F-ue),G.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=P,P+=H.storage}}}const U=P%F;return U>0&&(P+=F-U),b.__size=P,b.__cache={},this}function C(b){const D={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(D.boundary=4,D.storage=4):b.isVector2?(D.boundary=8,D.storage=8):b.isVector3||b.isColor?(D.boundary=16,D.storage=12):b.isVector4?(D.boundary=16,D.storage=16):b.isMatrix3?(D.boundary=48,D.storage=48):b.isMatrix4?(D.boundary=64,D.storage=64):b.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Nt("WebGLRenderer: Unsupported uniform value type.",b),D}function y(b){const D=b.target;D.removeEventListener("dispose",y);const P=u.indexOf(D.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function _(){for(const b in a)s.deleteBuffer(a[b]);u=[],a={},l={}}return{bind:m,update:h,dispose:_}}const yw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nr=null;function Sw(){return nr===null&&(nr=new a_(yw,16,16,To,Rr),nr.name="DFG_LUT",nr.minFilter=ti,nr.magFilter=ti,nr.wrapS=Tr,nr.wrapT=Tr,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}class Na{constructor(e={}){const{canvas:t=zv(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:p=!1,outputBufferType:S=wi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const C=S,y=new Set([Xf,jf,Wf]),_=new Set([wi,cr,Sa,Ma,Vf,Gf]),b=new Uint32Array(4),D=new Int32Array(4);let P=null,F=null;const U=[],O=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let Y=!1;this._outputColorSpace=jn;let z=0,G=0,Z=null,se=-1,J=null;const ee=new Mn,H=new Mn;let re=null;const le=new At(0);let ue=0,V=t.width,$=t.height,Le=1,Pe=null,ze=null;const oe=new Mn(0,0,V,$),_e=new Mn(0,0,V,$);let Me=!1;const Ce=new Jf;let Be=!1,tt=!1;const It=new gn,dt=new ne,ft=new Mn,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Ze(){return Z===null?Le:1}let j=r;function ht(I,ie){return t.getContext(I,ie)}try{const I={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bf}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",Mt,!1),j===null){const ie="webgl2";if(j=ht(ie,I),j===null)throw ht(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw Jt("WebGLRenderer: "+I.message),I}let gt,St,Ve,N,M,q,ae,Se,B,te,T,k,he,ce,xe,Re,Te,be,We,X,we,Ae,Ue;function Ee(){gt=new MS(j),gt.init(),we=new fw(j,gt),St=new pS(j,gt,e,we),Ve=new uw(j,gt),St.reversedDepthBuffer&&p&&Ve.buffers.depth.setReversed(!0),N=new bS(j),M=new KM,q=new dw(j,gt,Ve,M,St,we,N),ae=new SS(A),Se=new P_(j),Ae=new fS(j,Se),B=new wS(j,Se,N,Ae),te=new AS(j,B,Se,Ae,N),be=new TS(j,St,q),xe=new mS(M),T=new $M(A,ae,gt,St,Ae,xe),k=new vw(A,M),he=new JM,ce=new rw(gt),Te=new dS(A,ae,Ve,te,w,m),Re=new cw(A,te,St),Ue=new _w(j,N,St,Ve),We=new hS(j,gt,N),X=new ES(j,gt,N),N.programs=T.programs,A.capabilities=St,A.extensions=gt,A.properties=M,A.renderLists=he,A.shadowMap=Re,A.state=Ve,A.info=N}Ee(),C!==wi&&(E=new RS(C,t.width,t.height,a,l));const ge=new gw(A,j);this.xr=ge,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const I=gt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=gt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(I){I!==void 0&&(Le=I,this.setSize(V,$,!1))},this.getSize=function(I){return I.set(V,$)},this.setSize=function(I,ie,ve=!0){if(ge.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}V=I,$=ie,t.width=Math.floor(I*Le),t.height=Math.floor(ie*Le),ve===!0&&(t.style.width=I+"px",t.style.height=ie+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,I,ie)},this.getDrawingBufferSize=function(I){return I.set(V*Le,$*Le).floor()},this.setDrawingBufferSize=function(I,ie,ve){V=I,$=ie,Le=ve,t.width=Math.floor(I*ve),t.height=Math.floor(ie*ve),this.setViewport(0,0,I,ie)},this.setEffects=function(I){if(C===wi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let ie=0;ie<I.length;ie++)if(I[ie].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(ee)},this.getViewport=function(I){return I.copy(oe)},this.setViewport=function(I,ie,ve,pe){I.isVector4?oe.set(I.x,I.y,I.z,I.w):oe.set(I,ie,ve,pe),Ve.viewport(ee.copy(oe).multiplyScalar(Le).round())},this.getScissor=function(I){return I.copy(_e)},this.setScissor=function(I,ie,ve,pe){I.isVector4?_e.set(I.x,I.y,I.z,I.w):_e.set(I,ie,ve,pe),Ve.scissor(H.copy(_e).multiplyScalar(Le).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(I){Ve.setScissorTest(Me=I)},this.setOpaqueSort=function(I){Pe=I},this.setTransparentSort=function(I){ze=I},this.getClearColor=function(I){return I.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(I=!0,ie=!0,ve=!0){let pe=0;if(I){let de=!1;if(Z!==null){const je=Z.texture.format;de=y.has(je)}if(de){const je=Z.texture.type,Xe=_.has(je),Ge=Te.getClearColor(),$e=Te.getClearAlpha(),at=Ge.r,_t=Ge.g,Dt=Ge.b;Xe?(b[0]=at,b[1]=_t,b[2]=Dt,b[3]=$e,j.clearBufferuiv(j.COLOR,0,b)):(D[0]=at,D[1]=_t,D[2]=Dt,D[3]=$e,j.clearBufferiv(j.COLOR,0,D))}else pe|=j.COLOR_BUFFER_BIT}ie&&(pe|=j.DEPTH_BUFFER_BIT),ve&&(pe|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pe!==0&&j.clear(pe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Mt,!1),Te.dispose(),he.dispose(),ce.dispose(),M.dispose(),ae.dispose(),te.dispose(),Ae.dispose(),Ue.dispose(),T.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",En),ge.removeEventListener("sessionend",un),$t.stop()};function ke(I){I.preventDefault(),km("WebGLRenderer: Context Lost."),Y=!0}function Je(){km("WebGLRenderer: Context Restored."),Y=!1;const I=N.autoReset,ie=Re.enabled,ve=Re.autoUpdate,pe=Re.needsUpdate,de=Re.type;Ee(),N.autoReset=I,Re.enabled=ie,Re.autoUpdate=ve,Re.needsUpdate=pe,Re.type=de}function Mt(I){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function wt(I){const ie=I.target;ie.removeEventListener("dispose",wt),qt(ie)}function qt(I){Vt(I),M.remove(I)}function Vt(I){const ie=M.get(I).programs;ie!==void 0&&(ie.forEach(function(ve){T.releaseProgram(ve)}),I.isShaderMaterial&&T.releaseShaderCache(I))}this.renderBufferDirect=function(I,ie,ve,pe,de,je){ie===null&&(ie=it);const Xe=de.isMesh&&de.matrixWorld.determinant()<0,Ge=Ui(I,ie,ve,pe,de);Ve.setMaterial(pe,Xe);let $e=ve.index,at=1;if(pe.wireframe===!0){if($e=B.getWireframeAttribute(ve),$e===void 0)return;at=2}const _t=ve.drawRange,Dt=ve.attributes.position;let Qe=_t.start*at,Wt=(_t.start+_t.count)*at;je!==null&&(Qe=Math.max(Qe,je.start*at),Wt=Math.min(Wt,(je.start+je.count)*at)),$e!==null?(Qe=Math.max(Qe,0),Wt=Math.min(Wt,$e.count)):Dt!=null&&(Qe=Math.max(Qe,0),Wt=Math.min(Wt,Dt.count));const Rt=Wt-Qe;if(Rt<0||Rt===1/0)return;Ae.setup(de,pe,Ge,ve,$e);let Ft,kt=We;if($e!==null&&(Ft=Se.get($e),kt=X,kt.setIndex(Ft)),de.isMesh)pe.wireframe===!0?(Ve.setLineWidth(pe.wireframeLinewidth*Ze()),kt.setMode(j.LINES)):kt.setMode(j.TRIANGLES);else if(de.isLine){let Kt=pe.linewidth;Kt===void 0&&(Kt=1),Ve.setLineWidth(Kt*Ze()),de.isLineSegments?kt.setMode(j.LINES):de.isLineLoop?kt.setMode(j.LINE_LOOP):kt.setMode(j.LINE_STRIP)}else de.isPoints?kt.setMode(j.POINTS):de.isSprite&&kt.setMode(j.TRIANGLES);if(de.isBatchedMesh)if(de._multiDrawInstances!==null)yc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),kt.renderMultiDrawInstances(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount,de._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))kt.renderMultiDraw(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount);else{const Kt=de._multiDrawStarts,nt=de._multiDrawCounts,yn=de._multiDrawCount,vt=$e?Se.get($e).bytesPerElement:1,Hn=M.get(pe).currentProgram.getUniforms();for(let Vn=0;Vn<yn;Vn++)Hn.setValue(j,"_gl_DrawID",Vn),kt.render(Kt[Vn]/vt,nt[Vn])}else if(de.isInstancedMesh)kt.renderInstances(Qe,Rt,de.count);else if(ve.isInstancedBufferGeometry){const Kt=ve._maxInstanceCount!==void 0?ve._maxInstanceCount:1/0,nt=Math.min(ve.instanceCount,Kt);kt.renderInstances(Qe,Rt,nt)}else kt.render(Qe,Rt)};function an(I,ie,ve){I.transparent===!0&&I.side===mi&&I.forceSinglePass===!1?(I.side=gi,I.needsUpdate=!0,oi(I,ie,ve),I.side=ss,I.needsUpdate=!0,oi(I,ie,ve),I.side=mi):oi(I,ie,ve)}this.compile=function(I,ie,ve=null){ve===null&&(ve=I),F=ce.get(ve),F.init(ie),O.push(F),ve.traverseVisible(function(de){de.isLight&&de.layers.test(ie.layers)&&(F.pushLight(de),de.castShadow&&F.pushShadow(de))}),I!==ve&&I.traverseVisible(function(de){de.isLight&&de.layers.test(ie.layers)&&(F.pushLight(de),de.castShadow&&F.pushShadow(de))}),F.setupLights();const pe=new Set;return I.traverse(function(de){if(!(de.isMesh||de.isPoints||de.isLine||de.isSprite))return;const je=de.material;if(je)if(Array.isArray(je))for(let Xe=0;Xe<je.length;Xe++){const Ge=je[Xe];an(Ge,ve,de),pe.add(Ge)}else an(je,ve,de),pe.add(je)}),F=O.pop(),pe},this.compileAsync=function(I,ie,ve=null){const pe=this.compile(I,ie,ve);return new Promise(de=>{function je(){if(pe.forEach(function(Xe){M.get(Xe).currentProgram.isReady()&&pe.delete(Xe)}),pe.size===0){de(I);return}setTimeout(je,10)}gt.get("KHR_parallel_shader_compile")!==null?je():setTimeout(je,10)})};let nn=null;function Gt(I){nn&&nn(I)}function En(){$t.stop()}function un(){$t.start()}const $t=new mg;$t.setAnimationLoop(Gt),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(I){nn=I,ge.setAnimationLoop(I),I===null?$t.stop():$t.start()},ge.addEventListener("sessionstart",En),ge.addEventListener("sessionend",un),this.render=function(I,ie){if(ie!==void 0&&ie.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;const ve=ge.enabled===!0&&ge.isPresenting===!0,pe=E!==null&&(Z===null||ve)&&E.begin(A,Z);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(ie),ie=ge.getCamera()),I.isScene===!0&&I.onBeforeRender(A,I,ie,Z),F=ce.get(I,O.length),F.init(ie),O.push(F),It.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),Ce.setFromProjectionMatrix(It,sr,ie.reversedDepth),tt=this.localClippingEnabled,Be=xe.init(this.clippingPlanes,tt),P=he.get(I,U.length),P.init(),U.push(P),ge.enabled===!0&&ge.isPresenting===!0){const Xe=A.xr.getDepthSensingMesh();Xe!==null&&ln(Xe,ie,-1/0,A.sortObjects)}ln(I,ie,0,A.sortObjects),P.finish(),A.sortObjects===!0&&P.sort(Pe,ze),rt=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,rt&&Te.addToRenderList(P,I),this.info.render.frame++,Be===!0&&xe.beginShadows();const de=F.state.shadowsArray;if(Re.render(de,I,ie),Be===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(pe&&E.hasRenderPass())===!1){const Xe=P.opaque,Ge=P.transmissive;if(F.setupLights(),ie.isArrayCamera){const $e=ie.cameras;if(Ge.length>0)for(let at=0,_t=$e.length;at<_t;at++){const Dt=$e[at];rn(Xe,Ge,I,Dt)}rt&&Te.render(I);for(let at=0,_t=$e.length;at<_t;at++){const Dt=$e[at];Dn(P,I,Dt,Dt.viewport)}}else Ge.length>0&&rn(Xe,Ge,I,ie),rt&&Te.render(I),Dn(P,I,ie)}Z!==null&&G===0&&(q.updateMultisampleRenderTarget(Z),q.updateRenderTargetMipmap(Z)),pe&&E.end(A),I.isScene===!0&&I.onAfterRender(A,I,ie),Ae.resetDefaultState(),se=-1,J=null,O.pop(),O.length>0?(F=O[O.length-1],Be===!0&&xe.setGlobalState(A.clippingPlanes,F.state.camera)):F=null,U.pop(),U.length>0?P=U[U.length-1]:P=null};function ln(I,ie,ve,pe){if(I.visible===!1)return;if(I.layers.test(ie.layers)){if(I.isGroup)ve=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ie);else if(I.isLight)F.pushLight(I),I.castShadow&&F.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Ce.intersectsSprite(I)){pe&&ft.setFromMatrixPosition(I.matrixWorld).applyMatrix4(It);const Xe=te.update(I),Ge=I.material;Ge.visible&&P.push(I,Xe,Ge,ve,ft.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Ce.intersectsObject(I))){const Xe=te.update(I),Ge=I.material;if(pe&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ft.copy(I.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),ft.copy(Xe.boundingSphere.center)),ft.applyMatrix4(I.matrixWorld).applyMatrix4(It)),Array.isArray(Ge)){const $e=Xe.groups;for(let at=0,_t=$e.length;at<_t;at++){const Dt=$e[at],Qe=Ge[Dt.materialIndex];Qe&&Qe.visible&&P.push(I,Xe,Qe,ve,ft.z,Dt)}}else Ge.visible&&P.push(I,Xe,Ge,ve,ft.z,null)}}const je=I.children;for(let Xe=0,Ge=je.length;Xe<Ge;Xe++)ln(je[Xe],ie,ve,pe)}function Dn(I,ie,ve,pe){const{opaque:de,transmissive:je,transparent:Xe}=I;F.setupLightsView(ve),Be===!0&&xe.setGlobalState(A.clippingPlanes,ve),pe&&Ve.viewport(ee.copy(pe)),de.length>0&&Ei(de,ie,ve),je.length>0&&Ei(je,ie,ve),Xe.length>0&&Ei(Xe,ie,ve),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function rn(I,ie,ve,pe){if((ve.isScene===!0?ve.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[pe.id]===void 0){const Qe=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[pe.id]=new ar(1,1,{generateMipmaps:!0,type:Qe?Rr:wi,minFilter:Ps,samples:Math.max(4,St.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const je=F.state.transmissionRenderTarget[pe.id],Xe=pe.viewport||ee;je.setSize(Xe.z*A.transmissionResolutionScale,Xe.w*A.transmissionResolutionScale);const Ge=A.getRenderTarget(),$e=A.getActiveCubeFace(),at=A.getActiveMipmapLevel();A.setRenderTarget(je),A.getClearColor(le),ue=A.getClearAlpha(),ue<1&&A.setClearColor(16777215,.5),A.clear(),rt&&Te.render(ve);const _t=A.toneMapping;A.toneMapping=or;const Dt=pe.viewport;if(pe.viewport!==void 0&&(pe.viewport=void 0),F.setupLightsView(pe),Be===!0&&xe.setGlobalState(A.clippingPlanes,pe),Ei(I,ve,pe),q.updateMultisampleRenderTarget(je),q.updateRenderTargetMipmap(je),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Wt=0,Rt=ie.length;Wt<Rt;Wt++){const Ft=ie[Wt],{object:kt,geometry:Kt,material:nt,group:yn}=Ft;if(nt.side===mi&&kt.layers.test(pe.layers)){const vt=nt.side;nt.side=gi,nt.needsUpdate=!0,Un(kt,ve,pe,Kt,nt,yn),nt.side=vt,nt.needsUpdate=!0,Qe=!0}}Qe===!0&&(q.updateMultisampleRenderTarget(je),q.updateRenderTargetMipmap(je))}A.setRenderTarget(Ge,$e,at),A.setClearColor(le,ue),Dt!==void 0&&(pe.viewport=Dt),A.toneMapping=_t}function Ei(I,ie,ve){const pe=ie.isScene===!0?ie.overrideMaterial:null;for(let de=0,je=I.length;de<je;de++){const Xe=I[de],{object:Ge,geometry:$e,group:at}=Xe;let _t=Xe.material;_t.allowOverride===!0&&pe!==null&&(_t=pe),Ge.layers.test(ve.layers)&&Un(Ge,ie,ve,$e,_t,at)}}function Un(I,ie,ve,pe,de,je){I.onBeforeRender(A,ie,ve,pe,de,je),I.modelViewMatrix.multiplyMatrices(ve.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),de.onBeforeRender(A,ie,ve,pe,I,je),de.transparent===!0&&de.side===mi&&de.forceSinglePass===!1?(de.side=gi,de.needsUpdate=!0,A.renderBufferDirect(ve,ie,pe,de,I,je),de.side=ss,de.needsUpdate=!0,A.renderBufferDirect(ve,ie,pe,de,I,je),de.side=mi):A.renderBufferDirect(ve,ie,pe,de,I,je),I.onAfterRender(A,ie,ve,pe,de,je)}function oi(I,ie,ve){ie.isScene!==!0&&(ie=it);const pe=M.get(I),de=F.state.lights,je=F.state.shadowsArray,Xe=de.state.version,Ge=T.getParameters(I,de.state,je,ie,ve),$e=T.getProgramCacheKey(Ge);let at=pe.programs;pe.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?ie.environment:null,pe.fog=ie.fog;const _t=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;pe.envMap=ae.get(I.envMap||pe.environment,_t),pe.envMapRotation=pe.environment!==null&&I.envMap===null?ie.environmentRotation:I.envMapRotation,at===void 0&&(I.addEventListener("dispose",wt),at=new Map,pe.programs=at);let Dt=at.get($e);if(Dt!==void 0){if(pe.currentProgram===Dt&&pe.lightsStateVersion===Xe)return Di(I,Ge),Dt}else Ge.uniforms=T.getUniforms(I),I.onBeforeCompile(Ge,A),Dt=T.acquireProgram(Ge,$e),at.set($e,Dt),pe.uniforms=Ge.uniforms;const Qe=pe.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Qe.clippingPlanes=xe.uniform),Di(I,Ge),pe.needsLights=Lr(I),pe.lightsStateVersion=Xe,pe.needsLights&&(Qe.ambientLightColor.value=de.state.ambient,Qe.lightProbe.value=de.state.probe,Qe.directionalLights.value=de.state.directional,Qe.directionalLightShadows.value=de.state.directionalShadow,Qe.spotLights.value=de.state.spot,Qe.spotLightShadows.value=de.state.spotShadow,Qe.rectAreaLights.value=de.state.rectArea,Qe.ltc_1.value=de.state.rectAreaLTC1,Qe.ltc_2.value=de.state.rectAreaLTC2,Qe.pointLights.value=de.state.point,Qe.pointLightShadows.value=de.state.pointShadow,Qe.hemisphereLights.value=de.state.hemi,Qe.directionalShadowMatrix.value=de.state.directionalShadowMatrix,Qe.spotLightMatrix.value=de.state.spotLightMatrix,Qe.spotLightMap.value=de.state.spotLightMap,Qe.pointShadowMatrix.value=de.state.pointShadowMatrix),pe.currentProgram=Dt,pe.uniformsList=null,Dt}function Ki(I){if(I.uniformsList===null){const ie=I.currentProgram.getUniforms();I.uniformsList=xc.seqWithValue(ie.seq,I.uniforms)}return I.uniformsList}function Di(I,ie){const ve=M.get(I);ve.outputColorSpace=ie.outputColorSpace,ve.batching=ie.batching,ve.batchingColor=ie.batchingColor,ve.instancing=ie.instancing,ve.instancingColor=ie.instancingColor,ve.instancingMorph=ie.instancingMorph,ve.skinning=ie.skinning,ve.morphTargets=ie.morphTargets,ve.morphNormals=ie.morphNormals,ve.morphColors=ie.morphColors,ve.morphTargetsCount=ie.morphTargetsCount,ve.numClippingPlanes=ie.numClippingPlanes,ve.numIntersection=ie.numClipIntersection,ve.vertexAlphas=ie.vertexAlphas,ve.vertexTangents=ie.vertexTangents,ve.toneMapping=ie.toneMapping}function Ui(I,ie,ve,pe,de){ie.isScene!==!0&&(ie=it),q.resetTextureUnits();const je=ie.fog,Xe=pe.isMeshStandardMaterial||pe.isMeshLambertMaterial||pe.isMeshPhongMaterial?ie.environment:null,Ge=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ao,$e=pe.isMeshStandardMaterial||pe.isMeshLambertMaterial&&!pe.envMap||pe.isMeshPhongMaterial&&!pe.envMap,at=ae.get(pe.envMap||Xe,$e),_t=pe.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,Dt=!!ve.attributes.tangent&&(!!pe.normalMap||pe.anisotropy>0),Qe=!!ve.morphAttributes.position,Wt=!!ve.morphAttributes.normal,Rt=!!ve.morphAttributes.color;let Ft=or;pe.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ft=A.toneMapping);const kt=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,Kt=kt!==void 0?kt.length:0,nt=M.get(pe),yn=F.state.lights;if(Be===!0&&(tt===!0||I!==J)){const pn=I===J&&pe.id===se;xe.setState(pe,I,pn)}let vt=!1;pe.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==yn.state.version||nt.outputColorSpace!==Ge||de.isBatchedMesh&&nt.batching===!1||!de.isBatchedMesh&&nt.batching===!0||de.isBatchedMesh&&nt.batchingColor===!0&&de.colorTexture===null||de.isBatchedMesh&&nt.batchingColor===!1&&de.colorTexture!==null||de.isInstancedMesh&&nt.instancing===!1||!de.isInstancedMesh&&nt.instancing===!0||de.isSkinnedMesh&&nt.skinning===!1||!de.isSkinnedMesh&&nt.skinning===!0||de.isInstancedMesh&&nt.instancingColor===!0&&de.instanceColor===null||de.isInstancedMesh&&nt.instancingColor===!1&&de.instanceColor!==null||de.isInstancedMesh&&nt.instancingMorph===!0&&de.morphTexture===null||de.isInstancedMesh&&nt.instancingMorph===!1&&de.morphTexture!==null||nt.envMap!==at||pe.fog===!0&&nt.fog!==je||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==xe.numPlanes||nt.numIntersection!==xe.numIntersection)||nt.vertexAlphas!==_t||nt.vertexTangents!==Dt||nt.morphTargets!==Qe||nt.morphNormals!==Wt||nt.morphColors!==Rt||nt.toneMapping!==Ft||nt.morphTargetsCount!==Kt)&&(vt=!0):(vt=!0,nt.__version=pe.version);let Hn=nt.currentProgram;vt===!0&&(Hn=oi(pe,ie,de));let Vn=!1,qn=!1,Fi=!1;const Xt=Hn.getUniforms(),Ct=nt.uniforms;if(Ve.useProgram(Hn.program)&&(Vn=!0,qn=!0,Fi=!0),pe.id!==se&&(se=pe.id,qn=!0),Vn||J!==I){Ve.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Xt.setValue(j,"projectionMatrix",I.projectionMatrix),Xt.setValue(j,"viewMatrix",I.matrixWorldInverse);const ni=Xt.map.cameraPosition;ni!==void 0&&ni.setValue(j,dt.setFromMatrixPosition(I.matrixWorld)),St.logarithmicDepthBuffer&&Xt.setValue(j,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(pe.isMeshPhongMaterial||pe.isMeshToonMaterial||pe.isMeshLambertMaterial||pe.isMeshBasicMaterial||pe.isMeshStandardMaterial||pe.isShaderMaterial)&&Xt.setValue(j,"isOrthographic",I.isOrthographicCamera===!0),J!==I&&(J=I,qn=!0,Fi=!0)}if(nt.needsLights&&(yn.state.directionalShadowMap.length>0&&Xt.setValue(j,"directionalShadowMap",yn.state.directionalShadowMap,q),yn.state.spotShadowMap.length>0&&Xt.setValue(j,"spotShadowMap",yn.state.spotShadowMap,q),yn.state.pointShadowMap.length>0&&Xt.setValue(j,"pointShadowMap",yn.state.pointShadowMap,q)),de.isSkinnedMesh){Xt.setOptional(j,de,"bindMatrix"),Xt.setOptional(j,de,"bindMatrixInverse");const pn=de.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Xt.setValue(j,"boneTexture",pn.boneTexture,q))}de.isBatchedMesh&&(Xt.setOptional(j,de,"batchingTexture"),Xt.setValue(j,"batchingTexture",de._matricesTexture,q),Xt.setOptional(j,de,"batchingIdTexture"),Xt.setValue(j,"batchingIdTexture",de._indirectTexture,q),Xt.setOptional(j,de,"batchingColorTexture"),de._colorsTexture!==null&&Xt.setValue(j,"batchingColorTexture",de._colorsTexture,q));const ai=ve.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&be.update(de,ve,Hn),(qn||nt.receiveShadow!==de.receiveShadow)&&(nt.receiveShadow=de.receiveShadow,Xt.setValue(j,"receiveShadow",de.receiveShadow)),(pe.isMeshStandardMaterial||pe.isMeshLambertMaterial||pe.isMeshPhongMaterial)&&pe.envMap===null&&ie.environment!==null&&(Ct.envMapIntensity.value=ie.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=Sw()),qn&&(Xt.setValue(j,"toneMappingExposure",A.toneMappingExposure),nt.needsLights&&as(Ct,Fi),je&&pe.fog===!0&&k.refreshFogUniforms(Ct,je),k.refreshMaterialUniforms(Ct,pe,Le,$,F.state.transmissionRenderTarget[I.id]),xc.upload(j,Ki(nt),Ct,q)),pe.isShaderMaterial&&pe.uniformsNeedUpdate===!0&&(xc.upload(j,Ki(nt),Ct,q),pe.uniformsNeedUpdate=!1),pe.isSpriteMaterial&&Xt.setValue(j,"center",de.center),Xt.setValue(j,"modelViewMatrix",de.modelViewMatrix),Xt.setValue(j,"normalMatrix",de.normalMatrix),Xt.setValue(j,"modelMatrix",de.matrixWorld),pe.isShaderMaterial||pe.isRawShaderMaterial){const pn=pe.uniformsGroups;for(let ni=0,bi=pn.length;ni<bi;ni++){const Nr=pn[ni];Ue.update(Nr,Hn),Ue.bind(Nr,Hn)}}return Hn}function as(I,ie){I.ambientLightColor.needsUpdate=ie,I.lightProbe.needsUpdate=ie,I.directionalLights.needsUpdate=ie,I.directionalLightShadows.needsUpdate=ie,I.pointLights.needsUpdate=ie,I.pointLightShadows.needsUpdate=ie,I.spotLights.needsUpdate=ie,I.spotLightShadows.needsUpdate=ie,I.rectAreaLights.needsUpdate=ie,I.hemisphereLights.needsUpdate=ie}function Lr(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(I,ie,ve){const pe=M.get(I);pe.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,pe.__autoAllocateDepthBuffer===!1&&(pe.__useRenderToTexture=!1),M.get(I.texture).__webglTexture=ie,M.get(I.depthTexture).__webglTexture=pe.__autoAllocateDepthBuffer?void 0:ve,pe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,ie){const ve=M.get(I);ve.__webglFramebuffer=ie,ve.__useDefaultFramebuffer=ie===void 0};const Ir=j.createFramebuffer();this.setRenderTarget=function(I,ie=0,ve=0){Z=I,z=ie,G=ve;let pe=null,de=!1,je=!1;if(I){const Ge=M.get(I);if(Ge.__useDefaultFramebuffer!==void 0){Ve.bindFramebuffer(j.FRAMEBUFFER,Ge.__webglFramebuffer),ee.copy(I.viewport),H.copy(I.scissor),re=I.scissorTest,Ve.viewport(ee),Ve.scissor(H),Ve.setScissorTest(re),se=-1;return}else if(Ge.__webglFramebuffer===void 0)q.setupRenderTarget(I);else if(Ge.__hasExternalTextures)q.rebindTextures(I,M.get(I.texture).__webglTexture,M.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const _t=I.depthTexture;if(Ge.__boundDepthTexture!==_t){if(_t!==null&&M.has(_t)&&(I.width!==_t.image.width||I.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(I)}}const $e=I.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(je=!0);const at=M.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(at[ie])?pe=at[ie][ve]:pe=at[ie],de=!0):I.samples>0&&q.useMultisampledRTT(I)===!1?pe=M.get(I).__webglMultisampledFramebuffer:Array.isArray(at)?pe=at[ve]:pe=at,ee.copy(I.viewport),H.copy(I.scissor),re=I.scissorTest}else ee.copy(oe).multiplyScalar(Le).floor(),H.copy(_e).multiplyScalar(Le).floor(),re=Me;if(ve!==0&&(pe=Ir),Ve.bindFramebuffer(j.FRAMEBUFFER,pe)&&Ve.drawBuffers(I,pe),Ve.viewport(ee),Ve.scissor(H),Ve.setScissorTest(re),de){const Ge=M.get(I.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ge.__webglTexture,ve)}else if(je){const Ge=ie;for(let $e=0;$e<I.textures.length;$e++){const at=M.get(I.textures[$e]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+$e,at.__webglTexture,ve,Ge)}}else if(I!==null&&ve!==0){const Ge=M.get(I.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ge.__webglTexture,ve)}se=-1},this.readRenderTargetPixels=function(I,ie,ve,pe,de,je,Xe,Ge=0){if(!(I&&I.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=M.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Xe!==void 0&&($e=$e[Xe]),$e){Ve.bindFramebuffer(j.FRAMEBUFFER,$e);try{const at=I.textures[Ge],_t=at.format,Dt=at.type;if(I.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ge),!St.textureFormatReadable(_t)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Dt)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=I.width-pe&&ve>=0&&ve<=I.height-de&&j.readPixels(ie,ve,pe,de,we.convert(_t),we.convert(Dt),je)}finally{const at=Z!==null?M.get(Z).__webglFramebuffer:null;Ve.bindFramebuffer(j.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(I,ie,ve,pe,de,je,Xe,Ge=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=M.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Xe!==void 0&&($e=$e[Xe]),$e)if(ie>=0&&ie<=I.width-pe&&ve>=0&&ve<=I.height-de){Ve.bindFramebuffer(j.FRAMEBUFFER,$e);const at=I.textures[Ge],_t=at.format,Dt=at.type;if(I.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ge),!St.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Qe),j.bufferData(j.PIXEL_PACK_BUFFER,je.byteLength,j.STREAM_READ),j.readPixels(ie,ve,pe,de,we.convert(_t),we.convert(Dt),0);const Wt=Z!==null?M.get(Z).__webglFramebuffer:null;Ve.bindFramebuffer(j.FRAMEBUFFER,Wt);const Rt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Bv(j,Rt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Qe),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,je),j.deleteBuffer(Qe),j.deleteSync(Rt),je}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,ie=null,ve=0){const pe=Math.pow(2,-ve),de=Math.floor(I.image.width*pe),je=Math.floor(I.image.height*pe),Xe=ie!==null?ie.x:0,Ge=ie!==null?ie.y:0;q.setTexture2D(I,0),j.copyTexSubImage2D(j.TEXTURE_2D,ve,0,0,Xe,Ge,de,je),Ve.unbindTexture()};const Ds=j.createFramebuffer(),ls=j.createFramebuffer();this.copyTextureToTexture=function(I,ie,ve=null,pe=null,de=0,je=0){let Xe,Ge,$e,at,_t,Dt,Qe,Wt,Rt;const Ft=I.isCompressedTexture?I.mipmaps[je]:I.image;if(ve!==null)Xe=ve.max.x-ve.min.x,Ge=ve.max.y-ve.min.y,$e=ve.isBox3?ve.max.z-ve.min.z:1,at=ve.min.x,_t=ve.min.y,Dt=ve.isBox3?ve.min.z:0;else{const Ct=Math.pow(2,-de);Xe=Math.floor(Ft.width*Ct),Ge=Math.floor(Ft.height*Ct),I.isDataArrayTexture?$e=Ft.depth:I.isData3DTexture?$e=Math.floor(Ft.depth*Ct):$e=1,at=0,_t=0,Dt=0}pe!==null?(Qe=pe.x,Wt=pe.y,Rt=pe.z):(Qe=0,Wt=0,Rt=0);const kt=we.convert(ie.format),Kt=we.convert(ie.type);let nt;ie.isData3DTexture?(q.setTexture3D(ie,0),nt=j.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(q.setTexture2DArray(ie,0),nt=j.TEXTURE_2D_ARRAY):(q.setTexture2D(ie,0),nt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ie.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ie.unpackAlignment);const yn=j.getParameter(j.UNPACK_ROW_LENGTH),vt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Hn=j.getParameter(j.UNPACK_SKIP_PIXELS),Vn=j.getParameter(j.UNPACK_SKIP_ROWS),qn=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Ft.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ft.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,at),j.pixelStorei(j.UNPACK_SKIP_ROWS,_t),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Dt);const Fi=I.isDataArrayTexture||I.isData3DTexture,Xt=ie.isDataArrayTexture||ie.isData3DTexture;if(I.isDepthTexture){const Ct=M.get(I),ai=M.get(ie),pn=M.get(Ct.__renderTarget),ni=M.get(ai.__renderTarget);Ve.bindFramebuffer(j.READ_FRAMEBUFFER,pn.__webglFramebuffer),Ve.bindFramebuffer(j.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let bi=0;bi<$e;bi++)Fi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,M.get(I).__webglTexture,de,Dt+bi),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,M.get(ie).__webglTexture,je,Rt+bi)),j.blitFramebuffer(at,_t,Xe,Ge,Qe,Wt,Xe,Ge,j.DEPTH_BUFFER_BIT,j.NEAREST);Ve.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(de!==0||I.isRenderTargetTexture||M.has(I)){const Ct=M.get(I),ai=M.get(ie);Ve.bindFramebuffer(j.READ_FRAMEBUFFER,Ds),Ve.bindFramebuffer(j.DRAW_FRAMEBUFFER,ls);for(let pn=0;pn<$e;pn++)Fi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ct.__webglTexture,de,Dt+pn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ct.__webglTexture,de),Xt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ai.__webglTexture,je,Rt+pn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ai.__webglTexture,je),de!==0?j.blitFramebuffer(at,_t,Xe,Ge,Qe,Wt,Xe,Ge,j.COLOR_BUFFER_BIT,j.NEAREST):Xt?j.copyTexSubImage3D(nt,je,Qe,Wt,Rt+pn,at,_t,Xe,Ge):j.copyTexSubImage2D(nt,je,Qe,Wt,at,_t,Xe,Ge);Ve.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Xt?I.isDataTexture||I.isData3DTexture?j.texSubImage3D(nt,je,Qe,Wt,Rt,Xe,Ge,$e,kt,Kt,Ft.data):ie.isCompressedArrayTexture?j.compressedTexSubImage3D(nt,je,Qe,Wt,Rt,Xe,Ge,$e,kt,Ft.data):j.texSubImage3D(nt,je,Qe,Wt,Rt,Xe,Ge,$e,kt,Kt,Ft):I.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,je,Qe,Wt,Xe,Ge,kt,Kt,Ft.data):I.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,je,Qe,Wt,Ft.width,Ft.height,kt,Ft.data):j.texSubImage2D(j.TEXTURE_2D,je,Qe,Wt,Xe,Ge,kt,Kt,Ft);j.pixelStorei(j.UNPACK_ROW_LENGTH,yn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,vt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Hn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Vn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,qn),je===0&&ie.generateMipmaps&&j.generateMipmap(nt),Ve.unbindTexture()},this.initRenderTarget=function(I){M.get(I).__webglFramebuffer===void 0&&q.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?q.setTextureCube(I,0):I.isData3DTexture?q.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?q.setTexture2DArray(I,0):q.setTexture2D(I,0),Ve.unbindTexture()},this.resetState=function(){z=0,G=0,Z=null,Ve.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qt._getUnpackColorSpace()}}const F0={slim:2,regular:5,relaxed:9,baggy:16,flared:6};function _o(s){return s/(2*Math.PI)*(.15/(95/(2*Math.PI)))}function O0(s=0,e=.55){const r=document.createElement("canvas");r.width=r.height=512;const a=r.getContext("2d");a.fillStyle="rgb(128,128,255)",a.fillRect(0,0,512,512);const l=a.getImageData(0,0,512,512),u=l.data;function f(C){return C*C*C*(C*(C*6-15)+10)}function m(C,y,_){return C+_*(y-C)}function h(C,y){const _=C*127.1+y*311.7+s*419.2;return Math.sin(_)*43758.5453%1}function x(C,y,_){const b=C*_,D=y*_,P=Math.floor(b),F=Math.floor(D),U=f(b-P),O=f(D-F),E=h(P,F),A=h(P+1,F),Y=h(P,F+1),z=h(P+1,F+1);return m(m(E,A,U),m(Y,z,U),O)}function v(C,y,_,b){let D=0,P=.5,F=b,U=0;for(let O=0;O<_;O++)D+=x(C,y,F)*P,U+=P,P*=.52,F*=2.1;return D/U}const p=new Float32Array(512*512);for(let C=0;C<512;C++)for(let y=0;y<512;y++){const _=y/512,b=C/512;let D=v(_,b,4,1.8)*.6;D+=v(_,b*2.5,3,2.5)*.25,D+=v(_,b,2,8)*.1,D+=v(_,b,1,18)*.05,p[C*512+y]=D}const S=e*6;for(let C=1;C<511;C++)for(let y=1;y<511;y++){const _=(p[C*512+(y+1)]-p[C*512+(y-1)])*S,b=(p[(C+1)*512+y]-p[(C-1)*512+y])*S,D=1,P=Math.sqrt(_*_+b*b+D*D),F=(C*512+y)*4;u[F]=Math.round((-_/P*.5+.5)*255),u[F+1]=Math.round((-b/P*.5+.5)*255),u[F+2]=Math.round((D/P*.5+.5)*255),u[F+3]=255}a.putImageData(l,0,0);const w=new dg(r);return w.wrapS=w.wrapT=vc,w}const Mw=["#FDDBB4","#F1C27D","#E0AC69","#C68642","#A0522D","#8D5524","#6B3A2A","#3B1F0F","#F5CBA7","#D4A574","#BC8A5F","#9B6A3E"];function ww(s,e,t,r,a=40){const l=[],u=s*.62,f=40;for(let m=0;m<=f;m++){const h=m/f;let x;if(h<.12){const v=h/.12,p=v*v*(3-2*v);x=u+(s-u)*p}else if(h<.5){const v=(h-.12)/.38;x=s*(1-3*v*v+2*v*v*v)+e*(3*v*v-2*v*v*v)}else{const v=(h-.5)*2;x=e*(1-3*v*v+2*v*v*v)+t*(3*v*v-2*v*v*v)}l.push(new Et(Math.max(x,.001),r/2-h*r))}return new Ta(l,a)}const Ew=[{id:"tshirt",name:"T-Shirt",type:"upper",fitStyle:"regular",color:"#6a8caf"},{id:"button",name:"Button-Down",type:"upper",fitStyle:"slim",color:"#e0cfa8"},{id:"blazer",name:"Blazer",type:"upper",fitStyle:"slim",color:"#2c2c34"},{id:"jeans",name:"Slim Jeans",type:"lower",fitStyle:"slim",color:"#3a4a6a"},{id:"trousers",name:"Trousers",type:"lower",fitStyle:"relaxed",color:"#5a5550"},{id:"skirt",name:"Flared Skirt",type:"lower",fitStyle:"flared",color:"#c4a882"}],k0={S:{upper:88,lower:72},M:{upper:95,lower:80},L:{upper:104,lower:88}},bw=["shirt","top","dress","jacket","pants","jeans","skirt","shorts","coat","blouse","sweater","cardigan","tee","vest","blazer","trouser","legging","jumpsuit","tunic","bodysuit","linen"],Tw=["pants","jeans","shorts","skirt","trouser","legging","trousers"];async function Aw(s){try{const e=new Image;e.crossOrigin="anonymous",await new Promise((h,x)=>{e.onload=h,e.onerror=x,e.src=s});const t=document.createElement("canvas");t.width=t.height=64;const r=t.getContext("2d");r.drawImage(e,0,0,64,64);const a=r.getImageData(16,16,32,32).data;let l=0,u=0,f=0,m=0;for(let h=0;h<a.length;h+=4)l+=a[h],u+=a[h+1],f+=a[h+2],m++;return`#${[l,u,f].map(h=>Math.round(h/m).toString(16).padStart(2,"0")).join("")}`}catch{return"#c5b995"}}function Cw(s){const e=(s.title+" "+(s.tags||[]).join(" ")).toLowerCase();return Tw.some(t=>e.includes(t))?"lower":"upper"}function Rw({products:s,onClose:e}){const[t,r]=ct.useState({height_cm:175,chest_cm:95,waist_cm:80,hips_cm:98,shoulders_cm:44,arm_length_cm:65,leg_length_cm:90,torso_length_cm:50}),[a,l]=ct.useState({upper:null,lower:null}),[u,f]=ct.useState({}),[m,h]=ct.useState("#c68642"),[x,v]=ct.useState(!1),[p,S]=ct.useState(!1),w=ct.useRef(),C=ct.useRef(),y=ct.useRef(t),_=ct.useRef(a),b=ct.useRef(m),D=ct.useRef({}),P=ct.useRef(null),F=ct.useRef(null);ct.useEffect(()=>{y.current=t},[t]),ct.useEffect(()=>{_.current=a},[a]),ct.useEffect(()=>{b.current=m},[m]),ct.useEffect(()=>{const A=w.current;if(!A)return;const Y=A.clientWidth||800,z=A.clientHeight||600,G=new Na({antialias:!0});G.setPixelRatio(Math.min(window.devicePixelRatio,2)),G.setSize(Y,z),G.shadowMap.enabled=!0,G.setClearColor(15788248,1),A.appendChild(G.domElement);const Z=new Ra,se=new Bn(42,Y/z,.01,100);Z.add(new Ia(16777215,1.1));const J=new Is(16777215,1.2);J.position.set(3,5,4),J.castShadow=!0,Z.add(J);const ee=new Is(11584767,.5);ee.position.set(-3,2,-2),Z.add(ee);const H=new Is(16772829,.4);H.position.set(0,4,-5),Z.add(H);const re=new Oe(new Yi(2,64),new et({color:14210254,roughness:.95}));re.rotation.x=-Math.PI/2,re.position.y=-1.6,re.receiveShadow=!0;const le=new $i,ue=new $i;Z.add(le);const V=new et({color:new At("#c68642"),roughness:.65,metalness:0}),$=new et({color:new At("#c68642").multiplyScalar(.75),roughness:.75,metalness:0});P.current=()=>{var Ue;const Ze=y.current,j=new At(b.current);for(V.color.set(j),$.color.set(j.clone().multiplyScalar(.75)),V.needsUpdate=!0,$.needsUpdate=!0;le.children.length;)le.remove(le.children[0]);le.add(ue),le.add(re),D.current={};const ht=Ze.height_cm/175,gt=Ze.chest_cm/95,St=Ze.waist_cm/80,Ve=Ze.hips_cm/98,N=Ze.shoulders_cm/44,M=Ze.arm_length_cm/65,q=Ze.leg_length_cm/90,ae=Ze.torso_length_cm/50,Se=-1.6,B=.75*q,te=.5*ae,T=.085,k=.112*ht,he=.15*gt,ce=.11*St,xe=.16*Ve,Re=.2*N,Te=Se+B+te/2,be=Se+B,We=Se+B+te+T/2,X=Se+B+te+T+k+.01;D.current={torsoY:Te,torH:te,chestR:he,waistR:ce,hipR:xe,hipY:be,legH:B,sW:Re};function we(Ee,ge,ke,Je,Mt,wt=0,qt=0,Vt=0){const an=new Oe(Ee,ge);return an.position.set(ke,Je,Mt),an.rotation.set(wt,qt,Vt),an.castShadow=!0,le.add(an),an}we(new on(k,32,32),V,0,X,0),we(new ut(.048,.052,T,20),$,0,We,0),we(ww(he,ce,xe,te),V,0,Te,0),[-1,1].forEach(Ee=>we(new on(.058*N,20,20),V,Ee*Re,Te+te/2-.035,0));const Ae=.56*M;[-1,1].forEach(Ee=>{const ge=Ae*.52,ke=Ae*.48,Je=Ee*Math.PI/7,Mt=Ee*Re,wt=Te+te/2-.04,qt=Mt+Ee*ge*Math.sin(Math.abs(Je))*.5,Vt=wt-ge*.5;we(new ut(.036,.031,ge,14),V,qt,Vt,0,0,0,Je);const an=Mt+Ee*ge*Math.sin(Math.abs(Je)),nn=wt-ge*Math.cos(Math.abs(Je));we(new on(.032,14,14),$,an,nn,0);const Gt=an+Ee*.01,En=nn-ke/2;we(new ut(.03,.024,ke,14),$,Gt,En,0);const un=nn-ke,$t=.032,ln=.038,Dn=.018,rn=new Oe(new mt($t,ln,Dn),$);rn.position.set(Gt,un-ln/2,0),rn.castShadow=!0,le.add(rn),we(new on(.024,10,10),$,Gt,un,0);const Ei=.009,Un=.028;[-.011,-.004,.004,.011].forEach(oi=>{we(new ut(Ei*.9,Ei,Un,8),$,Gt+oi*Ee,un-ln-Un/2+.004,0),we(new on(Ei*.9,8,8),$,Gt+oi*Ee,un-ln-Un+.006,0)}),we(new ut(.009,.01,.022,8),$,Gt+Ee*.02,un-ln*.3,0,0,0,Ee*.55)}),we(new ut(xe+.004,xe+.004,.035,32),$,0,be+.015,0),[-1,1].forEach(Ee=>{const ge=Ee*.085*Ve,ke=B*.52,Je=B*.48;we(new ut(.055,.046,ke,18),V,ge,be-ke/2,0),we(new on(.044,14,14),$,ge,be-ke,0),we(new ut(.043,.032,Je,16),V,ge,be-ke-Je/2,0);const Mt=new Oe(new mt(.062,.038,.13),$);Mt.position.set(ge,Se+.019,.036),Mt.castShadow=!0,le.add(Mt)}),(Ue=F.current)==null||Ue.call(F)},F.current=()=>{for(;ue.children.length;)ue.remove(ue.children[0]);const Ze=D.current;if(!Ze.torsoY)return;const j=_.current,ht=y.current,{torsoY:gt,torH:St,chestR:Ve,waistR:N,hipR:M,hipY:q,legH:ae,sW:Se}=Ze;function B(te,T,k,he,ce,xe=0,Re=0,Te=0){const be=new Oe(te,T);be.position.set(k,he,ce),be.rotation.set(xe,Re,Te),be.castShadow=!0,ue.add(be)}if(j.upper){const te=j.upper,T=F0[te.fitStyle||"regular"],k=te.garmentSize||ht.chest_cm,he=te.garmentSize?te.garmentSize*(ht.waist_cm/ht.chest_cm):ht.waist_cm,ce=te.garmentSize?te.garmentSize*(ht.hips_cm/ht.chest_cm):ht.hips_cm,xe=k+T,Re=he+T*.8,Te=ce+T*1.1,be=Math.max(_o(xe),Ve+.008),We=Math.max(_o(Re),N+.006),X=Math.max(_o(Te),M+.01),we=St*.9,Ae=gt+St*.05,Ue={slim:.18,regular:.32,relaxed:.5,baggy:.8,flared:.55}[te.fitStyle||"regular"],Ee=O0((te.garmentSize||95)*1.3,Ue);Ee.repeat.set(2,2.5);const ge={slim:.7,regular:.8,relaxed:.88,baggy:.94,flared:.88}[te.fitStyle||"regular"],ke=new et({color:new At(te.color||"#888888"),roughness:ge,metalness:0,normalMap:Ee,normalScale:new Et(Ue*1.4,Ue*1.4),side:mi,depthWrite:!0}),Je=be*.62,Mt=[];Mt.push(new Et(0,we/2)),Mt.push(new Et(Je,we/2));for(let $t=0;$t<=40;$t++){const ln=$t/40;let Dn;if(ln<.12){const rn=ln/.12;Dn=Je+(be-Je)*rn*rn*(3-2*rn)}else if(ln<.5){const rn=(ln-.12)/.38;Dn=be*(1-3*rn*rn+2*rn*rn*rn)+We*(3*rn*rn-2*rn*rn*rn)}else{const rn=(ln-.5)*2;Dn=We*(1-rn)+X*rn}Mt.push(new Et(Math.max(Dn,.001),we/2-ln*we))}Mt.push(new Et(X,-we/2)),Mt.push(new Et(0,-we/2)),B(new Ta(Mt,40),ke,0,Ae,0);const wt=.56*(ht.arm_length_cm/65),qt=Math.PI/7,Vt=wt*.52,an=wt*.48,nn=Math.max(_o(xe)*.3,.04),Gt=gt+St/2-.035,En=Se+Vt*Math.sin(qt),un=Gt-Vt*Math.cos(qt);[-1,1].forEach($t=>{B(new on(nn*1.55,24,24),ke,$t*Se,Gt+.01,0),B(new ut(nn+.002,nn,Vt+.01,18,1,!1),ke,$t*(Se+Vt*Math.sin(qt)*.5),Gt-Vt*.5,0,0,0,$t*qt),B(new on(nn+.001,16,16),ke,$t*En,un,0),B(new ut(nn,nn*.82,an,18,1,!1),ke,$t*En+$t*.01,un-an/2,0),B(new Yi(nn*.82,18),ke,$t*En+$t*.01,un-an,0,Math.PI/2,0,0)}),B(new os(.056,.012,10,32),ke,0,gt+St/2+.012,0,Math.PI/2,0,0)}if(j.lower){const te=j.lower,T=F0[te.fitStyle||"regular"],k=ht.hips_cm/98,he=ae*.96;te.garmentSize||ht.waist_cm;const ce=te.garmentSize?te.garmentSize*(ht.hips_cm/ht.waist_cm):ht.hips_cm,xe=ce*.6,Re=Math.max(_o(ce+T*1.1),M+.01),Te=Math.max(_o(xe+T*.9),.058),be=Te*.88,We=te.fitStyle==="baggy"||te.fitStyle==="relaxed"?Te*.82:Te*.68,X=he*.52,we=he*.48,Ae=X+we,Ue={slim:.22,regular:.4,relaxed:.62,baggy:.95,flared:.75}[te.fitStyle||"regular"],Ee=O0(te.garmentSize||82,Ue);Ee.repeat.set(2,3.5);const ge={slim:.72,regular:.82,relaxed:.9,baggy:.96,flared:.92}[te.fitStyle||"regular"],ke=new et({color:new At(te.color||"#888888"),roughness:ge,metalness:0,normalMap:Ee,normalScale:new Et(Ue*1.5,Ue*1.5),side:mi,depthWrite:!0});B(new ut(Re,Re*.97,.08,32,1,!1),ke,0,q+.02,0),[-1,1].forEach(Je=>{const Mt=Je*.085*k,wt=[],qt=te.fitStyle==="flared",Vt=te.fitStyle==="baggy"||te.fitStyle==="relaxed",an=Vt?Te*.12:0;for(let nn=0;nn<=48;nn++){const Gt=nn/48,En=Ae/2-Gt*Ae;let un;qt?un=Gt<.5?Te*(1-Gt*2)+be*(Gt*2):be*(1-(Gt-.5)*2*(Gt-.5)*2)+Te*1.55*((Gt-.5)*2*(Gt-.5)*2):un=Gt<.5?Te*(1-Gt*2)+be*(Gt*2):be*(1-(Gt-.5)*2)+We*((Gt-.5)*2);const $t=Gt<.5?Gt*2:0,ln=an*Math.sin($t*Math.PI),Dn=Vt?Math.sin(Gt*Math.PI*5+(te.garmentSize||82)*.1)*Te*.018:0;wt.push(new Et(Math.max(un+ln+Dn,.01),En))}wt.push(new Et(0,-Ae/2)),B(new Ta(wt,28),ke,Mt,q-Ae/2,0),B(new Yi(Te,24),ke,Mt,q,0,-Math.PI/2,0,0)})}},P.current();let Le=0,Pe=0,ze=3.5;const oe=1.5,_e=6;let Me=!1,Ce=0,Be=0;const tt=Ze=>{Me=!0,Ce=Ze.clientX,Be=Ze.clientY,A.setPointerCapture(Ze.pointerId)},It=Ze=>{Me&&(Le+=(Ze.clientX-Ce)*.012,Ce=Ze.clientX,Pe+=(Ze.clientY-Be)*.006,Be=Ze.clientY,Pe=Math.max(-.4,Math.min(.6,Pe)))},dt=()=>{Me=!1},ft=Ze=>{ze=Math.max(oe,Math.min(_e,ze+Ze.deltaY*.005))};A.addEventListener("pointerdown",tt),A.addEventListener("pointermove",It),A.addEventListener("pointerup",dt),A.addEventListener("wheel",ft,{passive:!0});const it=()=>{C.current=requestAnimationFrame(it),se.position.x=Math.sin(Le)*ze,se.position.y=-.3+Pe*ze*.4,se.position.z=Math.cos(Le)*ze,se.lookAt(0,-.8,0),G.render(Z,se)};it();const rt=()=>{const Ze=A.clientWidth,j=A.clientHeight;!Ze||!j||(se.aspect=Ze/j,se.updateProjectionMatrix(),G.setSize(Ze,j))};return window.addEventListener("resize",rt),()=>{cancelAnimationFrame(C.current),A.removeEventListener("pointerdown",tt),A.removeEventListener("pointermove",It),A.removeEventListener("pointerup",dt),A.removeEventListener("wheel",ft),window.removeEventListener("resize",rt),G.dispose(),A.contains(G.domElement)&&A.removeChild(G.domElement)}},[]),ct.useEffect(()=>{P.current&&P.current()},[t,m]),ct.useEffect(()=>{F.current&&F.current()},[a]);const U=(A,Y)=>{const z=k0[Y];f(G=>({...G,[A.id]:Y})),l(G=>({...G,[A.type]:{...A,garmentSize:z[A.type]}}))},O=async A=>{const Y=await Aw(A.image),z=Cw(A);l(G=>({...G,[z]:{...A,name:A.title,fitStyle:"regular",garmentSize:k0.M[z],color:Y}}))},E=A=>{const Y=a[A];if(!(Y!=null&&Y.garmentSize))return null;const z=A==="upper"?t.chest_cm:t.waist_cm,G=Y.garmentSize-z;return G<-5?{text:"too small",color:"#f87171"}:G>15?{text:"too big",color:"#fbbf24"}:{text:"good fit",color:"#4ade80"}};return L.jsxs("div",{style:{position:"fixed",inset:0,background:"#150f34",zIndex:600,display:"flex",flexDirection:"column"},children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 20px",background:"rgba(21,15,52,0.96)",backdropFilter:"blur(8px)",borderBottom:"1px solid rgba(255,45,150,0.2)",zIndex:10,flexShrink:0},children:[L.jsx("button",{onClick:e,style:{background:"none",border:"1px solid rgba(255,45,150,0.3)",color:"rgba(240,235,255,0.6)",padding:"6px 14px",borderRadius:8,cursor:"pointer",fontSize:13},children:"← Back"}),L.jsx("span",{style:{color:"#f0ebff",fontFamily:"serif",fontSize:15,letterSpacing:"0.12em"},children:"FITTING ROOM"}),L.jsxs("div",{style:{position:"relative"},children:[L.jsx("button",{onClick:()=>S(A=>!A),style:{width:28,height:28,borderRadius:"50%",background:m,border:"2px solid rgba(255,45,150,0.4)",cursor:"pointer",display:"block"},title:"Skin tone"}),p&&L.jsxs("div",{style:{position:"absolute",right:0,top:36,background:"#1e1944",border:"1px solid rgba(255,45,150,0.25)",borderRadius:10,padding:10,display:"grid",gridTemplateColumns:"repeat(4, 28px)",gap:6,zIndex:20},children:[Mw.map(A=>L.jsx("button",{onClick:()=>{h(A),S(!1)},style:{width:28,height:28,borderRadius:"50%",background:A,border:m===A?"2px solid #ff2d78":"2px solid transparent",cursor:"pointer"}},A)),L.jsx("input",{type:"color",value:m,onChange:A=>h(A.target.value),style:{gridColumn:"span 4",height:28,cursor:"pointer",borderRadius:4,width:"100%"}})]})]})]}),L.jsxs("div",{style:{flex:1,display:"flex",overflow:"hidden",minHeight:0},children:[L.jsxs("div",{style:{width:180,background:"#1e1944",borderRight:"1px solid rgba(255,45,150,0.18)",overflowY:"auto",padding:"10px 8px",display:"flex",flexDirection:"column",gap:6,flexShrink:0},children:[L.jsx("div",{style:{color:"rgba(240,235,255,0.4)",fontSize:10,textTransform:"uppercase",letterSpacing:"0.1em",paddingBottom:4},children:"Try On"}),Ew.map(A=>{var G;const Y=((G=a[A.type])==null?void 0:G.id)===A.id,z=u[A.id];return L.jsxs("div",{style:{background:Y?"rgba(255,45,120,0.12)":"#271f50",border:`1px solid ${Y?"#ff2d78":"rgba(255,45,150,0.2)"}`,borderRadius:8,padding:"8px 10px"},children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:7},children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[L.jsx("div",{style:{width:13,height:13,borderRadius:3,background:A.color,border:"1px solid rgba(255,255,255,0.15)",flexShrink:0}}),L.jsx("span",{style:{color:"#f0ebff",fontSize:12},children:A.name})]}),Y&&L.jsx("span",{style:{color:"#ff2d78",fontSize:9,fontWeight:700},children:"ON"})]}),L.jsx("div",{style:{display:"flex",gap:4},children:["S","M","L"].map(Z=>{const se=Y&&z===Z;return L.jsx("button",{onClick:()=>U(A,Z),style:{flex:1,padding:"5px 0",borderRadius:5,cursor:"pointer",border:`1px solid ${se?"#ff2d78":"rgba(255,45,150,0.22)"}`,background:se?"#ff2d78":"#1e1944",color:se?"#150f34":"rgba(240,235,255,0.5)",fontSize:11,fontWeight:se?700:400},children:Z},Z)})})]},A.id)}),(()=>{const A=s.filter(Y=>{const z=(Y.title+" "+(Y.tags||[]).join(" ")).toLowerCase();return bw.some(G=>z.includes(G))});return A.length===0?null:L.jsxs(L.Fragment,{children:[L.jsx("div",{style:{color:"rgba(240,235,255,0.3)",fontSize:10,textTransform:"uppercase",letterSpacing:"0.1em",paddingTop:8,paddingBottom:2,borderTop:"1px solid rgba(255,45,150,0.18)"},children:"Your Finds"}),A.map(Y=>{var G,Z,se,J;const z=((G=a.upper)==null?void 0:G.id)===Y.id||((Z=a.lower)==null?void 0:Z.id)===Y.id;return L.jsxs("button",{onClick:()=>O(Y),style:{background:z?"rgba(255,45,120,0.12)":"#271f50",border:`1px solid ${z?"#ff2d78":"rgba(255,45,150,0.2)"}`,borderRadius:8,padding:8,cursor:"pointer",textAlign:"left",display:"flex",flexDirection:"column",gap:5},children:[Y.image&&L.jsx("img",{src:Y.image,alt:"",style:{width:"100%",height:90,objectFit:"cover",borderRadius:5}}),L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[L.jsxs("span",{style:{color:"rgba(240,235,255,0.7)",fontSize:11,lineHeight:1.3,flex:1},children:[(se=Y.title)==null?void 0:se.slice(0,36),((J=Y.title)==null?void 0:J.length)>36?"…":""]}),z&&L.jsx("span",{style:{color:"#ff2d78",fontSize:9,fontWeight:700,marginLeft:4,flexShrink:0},children:"ON"})]})]},Y.id)})]})})()]}),L.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden",minHeight:0},children:[L.jsx("div",{ref:w,style:{width:"100%",height:"100%"}}),(a.upper||a.lower)&&L.jsxs("div",{style:{position:"absolute",top:12,right:12,background:"rgba(21,15,52,0.92)",border:"1px solid rgba(255,45,150,0.25)",borderRadius:10,padding:"10px 12px",display:"flex",flexDirection:"column",gap:8,minWidth:160,maxWidth:200},children:[L.jsx("div",{style:{color:"rgba(240,235,255,0.4)",fontSize:10,textTransform:"uppercase",letterSpacing:"0.08em"},children:"Wearing"}),["upper","lower"].filter(A=>a[A]).map(A=>{const Y=a[A],z=E(A);return L.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:6},children:[L.jsxs("div",{style:{flex:1,minWidth:0},children:[L.jsx("div",{style:{color:"rgba(240,235,255,0.85)",fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Y.name}),z&&L.jsx("div",{style:{color:z.color,fontSize:10,marginTop:1},children:z.text})]}),L.jsx("button",{onClick:()=>l(G=>({...G,[A]:null})),style:{background:"none",border:"none",color:"rgba(240,235,255,0.35)",cursor:"pointer",fontSize:14,lineHeight:1,flexShrink:0,padding:0},children:"✕"})]},A)})]}),L.jsx("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",color:"rgba(240,235,255,0.2)",fontSize:11,pointerEvents:"none",whiteSpace:"nowrap"},children:"Drag to rotate · Scroll to zoom"})]})]}),L.jsxs("div",{style:{background:"#1e1944",borderTop:"1px solid rgba(255,45,150,0.18)",flexShrink:0},children:[L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,padding:"8px 16px"},children:[L.jsx("button",{onClick:()=>v(A=>!A),style:{background:"none",border:"1px solid rgba(255,45,150,0.3)",color:"rgba(240,235,255,0.6)",padding:"4px 10px",borderRadius:6,cursor:"pointer",fontSize:12,flexShrink:0},children:x?"⊖ Sizing":"⊕ Sizing"}),!x&&L.jsxs("span",{style:{color:"rgba(240,235,255,0.35)",fontSize:11},children:["H:",t.height_cm," · C:",t.chest_cm," · W:",t.waist_cm," · Hip:",t.hips_cm]})]}),x&&L.jsx("div",{style:{padding:"4px 16px 14px",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:14},children:[{key:"height_cm",label:"Height",min:140,max:200},{key:"chest_cm",label:"Chest",min:70,max:130},{key:"waist_cm",label:"Waist",min:60,max:120},{key:"hips_cm",label:"Hips",min:75,max:135},{key:"arm_length_cm",label:"Arms",min:50,max:80}].map(({key:A,label:Y,min:z,max:G})=>L.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[L.jsx("span",{style:{color:"rgba(240,235,255,0.45)",fontSize:10},children:Y}),L.jsx("span",{style:{color:"#ff2d78",fontSize:11},children:t[A]})]}),L.jsx("input",{type:"range",min:z,max:G,value:t[A],onChange:Z=>r(se=>({...se,[A]:Number(Z.target.value)})),style:{width:"100%",accentColor:"#ff2d78",cursor:"pointer"}})]},A))})]})]})}function Pw({products:s,tags:e,palette:t,title:r="Your Showroom",spaceType:a="My Space",color:l,onClose:u,onSelectProduct:f}){const m=ct.useRef(null),h=ct.useRef({phi:0,theta:0}),x=ct.useRef({x:0,z:0,tx:0,tz:0}),[v,p]=ct.useState(!1),S=ct.useRef(null);S.current=()=>p(!0);const w=(t==null?void 0:t[0])||l||"#c8a87a";s.filter((_,b)=>b%2===0).slice(0,3),s.filter((_,b)=>b%2===1).slice(0,3),ct.useEffect(()=>{const _=m.current;if(!_)return;const b=h.current,D=new Na({antialias:!0});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(_.clientWidth,_.clientHeight),D.shadowMap.enabled=!0,D.shadowMap.type=Aa,D.outputColorSpace=jn,D.toneMapping=Po,D.toneMappingExposure=1.1,_.appendChild(D.domElement);const P=16117992,F=new Ra;F.background=new At(P),F.fog=new Tc(P,2400,4e3);const U=new Bn(58,_.clientWidth/_.clientHeight,1,6e3),O=2e3,E=950,A=310;U.position.set(0,A,O);const Y=1800,z=920,G=2e3,Z=new At(w),se=new et({color:13153418,roughness:.65}),J=new et({color:14605014,metalness:.9,roughness:.14}),ee=new et({color:16447732,roughness:.92}),H=(De,Ye,ot,Pt,Bt,yt=0,xn=0,dn=0)=>{const jt=new Oe(De,Ye);return jt.position.set(ot,Pt,Bt),jt.rotation.set(yt,xn,dn),jt.castShadow=!0,jt.receiveShadow=!0,F.add(jt),jt};H(new Yt(Y,G),new et({color:15261904,roughness:.18,metalness:.06}),0,0,0,-Math.PI/2);const re=new et({color:16117992,roughness:.95}),le=new et({color:15657180,roughness:.95});H(new Yt(Y,z),le,0,z/2,-G/2),H(new Yt(G,z),re,-Y/2,z/2,0,0,Math.PI/2),H(new Yt(G,z),re.clone(),Y/2,z/2,0,0,-Math.PI/2),H(new Yt(Y,G),new et({color:16447732,roughness:.98}),0,z,0,Math.PI/2);const ue=new et({color:14209214,roughness:.8});H(new mt(36,z,36),ue,-Y/2+18,z/2,G/2-18),H(new mt(36,z,36),ue,Y/2-18,z/2,G/2-18),H(new mt(Y,55,36),new et({color:13617336,roughness:.8}),0,z-27,G/2-18),H(new mt(480,28,4),new et({color:16117992,roughness:.9}),0,z-27,G/2-5);const V=new et({color:15262420,roughness:.88});H(new mt(Y+8,52,8),V,0,26,-G/2+4),H(new mt(8,52,G),V,-Y/2+4,26,0),H(new mt(8,52,G),V,Y/2-4,26,0),H(new mt(880,5,620),new et({color:12095600,roughness:1}),0,2,-80),H(new mt(882,4,14),new et({color:10516568,roughness:1}),0,2,230),H(new mt(882,4,14),new et({color:10516568,roughness:1}),0,2,-390),F.add(new Ia(16774368,1)),[-660,-220,220,660].forEach(De=>{const Ye=new _a(16763008,3.8,1400,Math.PI/6,.55,1.4);Ye.position.set(0,z-12,De),Ye.target.position.set(0,0,De),Ye.castShadow=!0,Ye.shadow.mapSize.setScalar(512),Ye.shadow.bias=-.001,F.add(Ye,Ye.target);const ot=new Oe(new on(5,10,10),new ns({color:16772795}));ot.position.set(0,z-18,De),F.add(ot)});const $=new So(16775406,.5,2800);$.position.set(0,400,1400),F.add($);const Le=new So(16767136,1,900);Le.position.set(-Y/2+160,500,-100),F.add(Le);const Pe=new So(16767136,1,900);Pe.position.set(Y/2-160,500,-100),F.add(Pe),H(new mt(640,10,42),se,0,480,-G/2+24),[-290,290].forEach(De=>H(new mt(7,80,44),se,De,440,-G/2+24));const ze=485;H(new ut(10,7,34,12),ee,160,ze+17,-G/2+24),H(new on(10,10,10),ee,160,ze+34+10,-G/2+24),H(new ut(8,7,24,10),new et({color:16115920,roughness:.8}),-100,ze+12,-G/2+24),H(new on(4,8,8),new ns({color:16764006}),-160,ze+24+5,-G/2+24);const oe=new So(16750916,.5,300);oe.position.set(-160,ze+40,-G/2+50),F.add(oe);const _e=48,Me=-G/2+24;H(new ut(12,9,18,10),new et({color:14998736,roughness:.85}),_e,ze+9,Me);for(let De=0;De<6;De++){const Ye=De/6*Math.PI*2;H(new on(7,8,8),new et({color:8034912,roughness:1}),_e+Math.sin(Ye)*9,ze+18+4,Me+Math.cos(Ye)*9)}H(new on(7,8,8),new et({color:9087600,roughness:1}),_e,ze+22,Me);const Ce=260,Be=z-10,tt=240,It=Y/2-Ce,dt=-G/2+10,ft=new et({color:15262424,roughness:.9}),it=new et({color:14208960,roughness:1,side:mi});H(new mt(10,Be,tt),ft,It,Be/2,dt+tt/2);const rt=Be-130;H(new ut(3,3,Ce,10),J,It+Ce/2,rt,dt+14,0,0,Math.PI/2),H(new mt(Ce*.55,rt-20,5),it,It+Ce*.28,(rt-20)/2+10,dt+16),[.08,.18,.3,.42,.54].forEach(De=>{H(new os(5,1.2,8,12),J,It+Ce*De,rt,dt+14,Math.PI/2,0,0)});const Ze=document.createElement("canvas");Ze.width=512,Ze.height=96;const j=Ze.getContext("2d");j.fillStyle="#1e1a16",j.fillRect(0,0,512,96),j.strokeStyle=Z.getStyle(),j.lineWidth=2,j.strokeRect(10,10,492,76),j.fillStyle=Z.getStyle(),j.font="bold 34px serif",j.textAlign="center",j.textBaseline="middle",j.letterSpacing="0.18em",j.fillText("FITTING ROOM",256,48);const ht=new dg(Ze),gt=new Oe(new Yt(230,44),new ns({map:ht}));gt.position.set(It+Ce/2,Be-30,-G/2+3),F.add(gt),H(new ut(2,2,18,8),J,It+24,Be*.55,dt+60,Math.PI/2,0,0);const St=-Y/2+20,Ve=-G/2+300;H(new mt(5,450,150),se,St,225,Ve),H(new mt(2,430,130),new et({color:14348024,metalness:1,roughness:.05}),St+4,225,Ve);const N=460,M=14,q=100,ae=184,Se=6,B=ae+M,te=(De,Ye)=>{H(new mt(N,M,q),se,De,B,Ye),[[-190,-34],[-190,34],[190,-34],[190,34]].forEach(([ot,Pt])=>H(new ut(Se,Se,ae,10),se,De+ot,ae/2,Ye+Pt))},T=380,k=160;te(T,k);const he=[[15262424,14538442,13814719],[13946568,13288638,12630708]],ce=[[14208960,13419700,12630184],[11057328,10004640,11583160],[13942960,13153444,12364442]];[-100,20,140].forEach((De,Ye)=>{ce[Ye].forEach((ot,Pt)=>{const yt=B+M/2+11+Pt*23;H(new mt(84,22,60),new et({color:ot,roughness:.98}),T+De,yt,k),[-34,34].forEach(xn=>H(new mt(14,16,18),new et({color:ot,roughness:.98}),T+De+xn,yt-2,k+18))})});let xe=null;he[1].forEach((De,Ye)=>{const Pt=B+M/2+9+Ye*19,Bt=new et({color:De,roughness:.99,emissive:new At(0),emissiveIntensity:0}),yt=new Oe(new mt(90,18,65),Bt);yt.position.set(T+160,Pt,k),yt.castShadow=!0,yt.receiveShadow=!0,F.add(yt),xe=yt,H(new mt(90,2,2),new et({color:De-657930,roughness:1}),T+160,Pt+18/2,k-30)});const Re=-380;te(Re,k);const Te=B+M/2;let be=null;he[0].forEach((De,Ye)=>{const Pt=Te+9+Ye*19,Bt=new et({color:De,roughness:.99,emissive:new At(0),emissiveIntensity:0}),yt=new Oe(new mt(90,18,65),Bt);yt.position.set(Re-150,Pt,k),yt.castShadow=!0,yt.receiveShadow=!0,F.add(yt),be=yt,H(new mt(90,2,2),new et({color:De-657930,roughness:1}),Re-150,Pt+18/2,k-30)});const We=k+40,X=[];[30,70,110].forEach((De,Ye)=>{const ot=50+Ye*20,Pt=new et({color:Ye===0?16117216:Ye===1?15261136:14536900,roughness:.85,emissive:new At(0),emissiveIntensity:0}),Bt=new Oe(new ut(8,8,ot,12),Pt);Bt.position.set(Re+De-90,Te+ot/2,We),Bt.castShadow=!0,Bt.receiveShadow=!0,F.add(Bt),X.push(Bt),H(new on(3.5,7,7),new ns({color:16763989}),Re+De-90,Te+ot+5,We);const yt=new So(16750899,.3+Ye*.08,220);yt.position.set(Re+De-90,Te+ot+12,We),F.add(yt)});const we=k-20;let Ae=null;[60,110,160].forEach((De,Ye)=>{const ot=80+Ye*8,Pt=Ye===0?14213336:Ye===1?14736596:13949148,Bt=H(new ut(10,11,ot,12),new et({color:Pt,roughness:.4,metalness:.1}),Re+De,Te+ot/2,we);Ye===1&&(Ae=Bt),H(new ut(5,10,14,10),new et({color:Pt,roughness:.4}),Re+De,Te+ot+7,we),H(new ut(5,5,8,10),new et({color:13157566,metalness:.4,roughness:.3}),Re+De,Te+ot+18,we),H(new mt(18,5,7),new et({color:13157566,metalness:.3,roughness:.4}),Re+De+10,Te+ot+14,we)});const Ue=new et({color:12089440,roughness:.9}),Ee=new et({color:3822896,roughness:1}),ge=new et({color:4876341,roughness:1}),ke=new et({color:6981712,roughness:1}),Je=new et({color:15262424,roughness:.85}),Mt=(De,Ye,ot,Pt,Bt,yt)=>{for(let xn=0;xn<Pt;xn++){const dn=xn/(Pt-1),jt=De+Math.sin(xn*1.5)*(10+dn*22),Oi=Ye-dn*dn*140,fr=ot+Math.cos(xn*1.1)*(8+dn*16);H(new on(Math.max(7.5-dn*2,5),7,7),new et({color:xn%2===0?Bt:yt,roughness:1}),jt,Oi,fr)}},wt=-Y/2+170,qt=-G/2+170,Vt=46,an=260;H(new ut(28,22,Vt,14),Ue.clone(),wt,Vt/2,qt),H(new ut(5,6,an,8),Ee.clone(),wt,Vt+an/2,qt);const nn=Vt+an;[[0,0],[-32,-22],[28,26],[4,-10]].forEach(([De,Ye])=>H(new on(64,11,11),ge.clone(),wt+De,nn,qt+Ye));const Gt=It-80,En=-G/2+160,un=40;H(new ut(24,18,un,14),Je.clone(),Gt,un/2,En);for(let De=0;De<7;De++){const Ye=De/7*Math.PI*2,ot=190+De*26,Pt=.16+De%2*.14,Bt=Math.sin(Ye)*8,yt=Math.cos(Ye)*8,xn=un,dn=new Oe(new mt(12,ot,4),new et({color:De%2===0?3824176:4876352,roughness:1}));dn.position.set(Gt+Bt,xn+ot/2,En+yt),dn.rotation.set(Math.cos(Ye)*Pt,0,Math.sin(Ye)*Pt*-.5),dn.castShadow=!0,F.add(dn);const jt=new Oe(new mt(3,ot*.85,5),new et({color:8032352,roughness:1}));jt.position.set(Gt+Bt,xn+ot/2,En+yt),jt.rotation.copy(dn.rotation),F.add(jt)}const $t=Y/2-260,ln=320,Dn=40,rn=200;H(new ut(26,20,Dn,14),Ue.clone(),$t,Dn/2,ln),H(new ut(5,6,rn,8),Ee.clone(),$t,Dn+rn/2,ln);const Ei=Dn+rn;[[0,0],[-30,-20],[28,18],[-10,28],[24,-28]].forEach(([De,Ye],ot)=>{const Pt=new Oe(new on(42+ot*4,9,9),new et({color:ot%2===0?4022320:5140544,roughness:1}));Pt.scale.set(1,.38,1),Pt.position.set($t+De,Ei+ot*14,ln+Ye),Pt.castShadow=!0,F.add(Pt)}),H(new on(14,10,10),new et({color:6981717,roughness:1}),-60,496,-G/2+28);const Un=-Y/2+380,oi=-300,Ki=z-80,Di=30,Ui=220;H(new ut(1.5,1.5,Ui,6),J,Un,Ki-Ui/2,oi);const as=Ki-Ui-Di/2;H(new ut(28,20,Di,14),Je.clone(),Un,as,oi),Mt(Un,as+Di/2,oi,10,5931088,7381096);const Lr=Y/2-380,Ir=-300;H(new ut(1.5,1.5,Ui,6),J,Lr,Ki-Ui/2,Ir);const Ds=Ki-Ui-Di/2;H(new ut(28,20,Di,14),Je.clone(),Lr,Ds,Ir),Mt(Lr,Ds+Di/2,Ir,10,6453320,5931088);const ls=Y/2-140,I=720,ie=42;H(new ut(30,24,ie,14),Ue.clone(),ls,ie/2,I);for(let De=0;De<9;De++){const Ye=De/9*Math.PI*2,ot=260+De*30,Pt=Math.sin(Ye)*12,Bt=Math.cos(Ye)*12;H(new ut(4,4,ot,6),new et({color:8034912,roughness:.8}),ls+Pt,ie+ot/2,I+Bt),De%2===0&&H(new on(22,7,7),ke.clone(),ls+Pt,ie+ot,I+Bt)}const ve=T+260,pe=k,de=20;H(new ut(14,10,de,10),new et({color:13682872,roughness:.9}),ve,de/2,pe);for(let De=0;De<8;De++){const Ye=De/8*Math.PI*2,ot=22+De%3*8;H(new ut(1.5,1.5,ot,6),new et({color:5933120,roughness:1}),ve+Math.sin(Ye)*6,de+ot/2,pe+Math.cos(Ye)*6),H(new on(9,7,7),new et({color:8039008,roughness:1}),ve+Math.sin(Ye)*7,de+ot+6,pe+Math.cos(Ye)*7)}const je=new M_,Xe=[],Ge=162,$e=204,at=9,_t=(De,Ye,ot,Pt,Bt)=>{const yt=new $i;yt.position.set(Ye,ot,Pt),yt.rotation.y=Bt,F.add(yt);const xn=new et({color:12098680,roughness:.7,metalness:.05,emissive:new At(0),emissiveIntensity:0}),dn=new Oe(new mt(Ge,$e,at),xn);dn.castShadow=!0,yt.add(dn);const jt=new ns({color:15261908}),Oi=new Oe(new Yt(Ge-20,$e-20),jt);Oi.position.z=at/2+.5,Oi.userData.product=De,Oi.userData.frameMesh=dn,yt.add(Oi),Xe.push(Oi);const fr=new Oe(new Yt(Ge-20,3),new ns({color:Z}));fr.position.set(0,-90,at/2+.9),yt.add(fr),De.img&&je.load(De.img,Dr=>{Dr.colorSpace=jn,jt.map=Dr,jt.color.set(16777215),jt.needsUpdate=!0},void 0,()=>{})},Dt=-G/2+at/2+1;[3,5].forEach((De,Ye)=>{const ot=s[De];ot&&_t(ot,[-160,160][Ye],660,Dt,0)}),s[0]&&X[1]&&(X[1].userData.product=s[0],X[1].userData.mesh=X[1],Xe.push(X[1])),s[4]&&be&&(be.userData.product=s[4],be.userData.mesh=be,Xe.push(be)),s[1]&&xe&&(xe.userData.product=s[1],xe.userData.mesh=xe,Xe.push(xe)),s[2]&&Ae&&(Ae.userData.product=s[2],Ae.userData.mesh=Ae,Xe.push(Ae));const Qe=document.createElement("div");Qe.style.cssText=["position:absolute","pointer-events:none","background:rgba(250,247,242,0.96)","backdrop-filter:blur(10px)","-webkit-backdrop-filter:blur(10px)","border:1px solid rgba(0,0,0,0.09)","padding:10px 18px","border-radius:4px","font-family:'Crimson Pro',Georgia,serif","font-size:14px","color:#2a2218","line-height:1.4","transition:opacity 0.14s","opacity:0","white-space:nowrap","z-index:20","box-shadow:0 4px 22px rgba(0,0,0,0.07)"].join(";"),_.appendChild(Qe);let Wt=0;U.position.set(0,A,O);const Rt=x.current;Rt.x=0,Rt.z=E,Rt.tx=0,Rt.tz=E;const Ft={on:!1,x:0,y:0,phi0:0,th0:0};let kt={x:0,y:0},Kt=null;const nt=new rh,yn=new Et,vt=D.domElement,Hn=De=>{Ft.on=!0,Ft.x=De.clientX,Ft.y=De.clientY,Ft.phi0=b.phi,Ft.th0=b.theta,kt={x:De.clientX,y:De.clientY},vt.style.cursor="grabbing",vt.setPointerCapture(De.pointerId)},Vn=De=>{if(Ft.on){b.phi=Ft.phi0-(De.clientX-Ft.x)*.003,b.theta=Math.max(-.18,Math.min(.35,Ft.th0+(De.clientY-Ft.y)*.002));return}const Ye=vt.getBoundingClientRect();yn.x=(De.clientX-Ye.left)/Ye.width*2-1,yn.y=-((De.clientY-Ye.top)/Ye.height)*2+1,nt.setFromCamera(yn,U);const ot=nt.intersectObjects(Xe),Pt=Kt;Kt=ot.length?ot[0].object:null;const Bt=nt.intersectObjects([gt]).length>0;if(vt.style.cursor=Kt||Bt?"pointer":"grab",Pt!==Kt){if(Pt){const yt=Pt.userData.frameMesh||Pt.userData.mesh;yt&&(yt.material.emissive.set(0,0,0),yt.material.emissiveIntensity=0)}if(Kt){const yt=Kt.userData.frameMesh||Kt.userData.mesh;yt&&(yt.material.emissive.setRGB(Z.r,Z.g,Z.b),yt.material.emissiveIntensity=.22)}}},qn=()=>{Ft.on=!1,vt.style.cursor=Kt?"pointer":"grab"},Fi=De=>{if(Math.hypot(De.clientX-kt.x,De.clientY-kt.y)>6)return;const Ye=vt.getBoundingClientRect();if(yn.x=(De.clientX-Ye.left)/Ye.width*2-1,yn.y=-((De.clientY-Ye.top)/Ye.height)*2+1,nt.setFromCamera(yn,U),nt.intersectObjects([gt]).length){S.current();return}const ot=nt.intersectObjects(Xe);ot.length&&ot[0].object.userData.product&&(f==null||f(ot[0].object.userData.product))},Xt=De=>{De.key==="ArrowLeft"&&(b.phi-=.07),De.key==="ArrowRight"&&(b.phi+=.07),De.key==="ArrowUp"&&(b.theta=Math.max(-.18,b.theta-.04)),De.key==="ArrowDown"&&(b.theta=Math.min(.35,b.theta+.04)),De.key==="Escape"&&u()},Ct=De=>{De.preventDefault();const Ye=De.deltaY*.38;Rt.tx-=Math.sin(b.phi)*Ye,Rt.tz-=Math.cos(b.phi)*Ye;const ot=80;Rt.tx=Math.max(-Y/2+ot,Math.min(Y/2-ot,Rt.tx)),Rt.tz=Math.max(-G/2+ot,Math.min(G/2-ot,Rt.tz))};vt.addEventListener("pointerdown",Hn),vt.addEventListener("pointermove",Vn),vt.addEventListener("pointerup",qn),vt.addEventListener("click",Fi),vt.addEventListener("wheel",Ct,{passive:!1}),window.addEventListener("keydown",Xt);const ai=()=>{const De=_.clientWidth,Ye=_.clientHeight;U.aspect=De/Ye,U.updateProjectionMatrix(),D.setSize(De,Ye)};window.addEventListener("resize",ai);const pn=new ne;let ni,bi=performance.now();const Nr=()=>{ni=requestAnimationFrame(Nr);const De=performance.now(),Ye=Math.min((De-bi)/1e3,.05);if(bi=De,Wt<1){Wt=Math.min(1,Wt+Ye*.55);const yt=1-Math.pow(1-Wt,3);U.position.z=O+(E-O)*yt,U.position.y=A,Rt.x=0,Rt.z=U.position.z,Rt.tx=0,Rt.tz=E}else{const yt=1-Math.pow(.04,Ye);Rt.x+=(Rt.tx-Rt.x)*yt,Rt.z+=(Rt.tz-Rt.z)*yt,U.position.x=Rt.x,U.position.z=Rt.z,U.position.y=A}const ot=Math.sin(b.phi)*Math.cos(b.theta),Pt=-Math.sin(b.theta),Bt=-Math.cos(b.phi)*Math.cos(b.theta);if(U.lookAt(U.position.x+ot*200,U.position.y+Pt*200,U.position.z+Bt*200),oe.intensity=.45+Math.sin(De*.007)*.07+Math.sin(De*.013)*.04,Kt&&!Ft.on){Kt.getWorldPosition(pn);const yt=pn.clone().project(U),xn=(yt.x*.5+.5)*vt.clientWidth,dn=(-yt.y*.5+.5)*vt.clientHeight,jt=Kt.userData.product,Oi=jt!=null&&jt.title?jt.title.split(" ").slice(0,5).join(" "):"View piece",fr=jt!=null&&jt.price?` · $${jt.price}`:"";Qe.innerHTML=`${Oi}${fr}<br><span style="font-size:10px;opacity:0.5;font-family:IBM Plex Mono,monospace;letter-spacing:0.1em">TAP TO VIEW</span>`,Qe.style.left=`${xn}px`,Qe.style.top=`${dn}px`,Qe.style.transform="translate(-50%, calc(-100% - 18px))",Qe.style.opacity="1"}else Qe.style.opacity="0";D.render(F,U)};return Nr(),()=>{cancelAnimationFrame(ni),vt.removeEventListener("pointerdown",Hn),vt.removeEventListener("pointermove",Vn),vt.removeEventListener("pointerup",qn),vt.removeEventListener("click",Fi),vt.removeEventListener("wheel",Ct),window.removeEventListener("keydown",Xt),window.removeEventListener("resize",ai),D.dispose(),_.contains(vt)&&_.removeChild(vt),_.contains(Qe)&&_.removeChild(Qe)}},[]);const C="IBM Plex Mono, monospace";return L.jsxs("div",{style:{position:"fixed",inset:0,zIndex:500,background:"#f5f0e8",cursor:"grab"},children:[L.jsx("div",{ref:m,style:{width:"100%",height:"100%"}}),(()=>{const _=[{label:"Left wall",x:-680,z:200,phi:.55},{label:"Entrance",x:0,z:920,phi:0},{label:"Right wall",x:680,z:200,phi:-.55}];return L.jsx("div",{style:{position:"absolute",bottom:44,left:"50%",transform:"translateX(-50%)",display:"flex",gap:10,zIndex:15,pointerEvents:"auto"},children:_.map((b,D)=>L.jsx("button",{onClick:()=>{x.current.tx=b.x,x.current.tz=b.z,h.current.phi=b.phi,h.current.theta=.02},style:{background:"rgba(250,247,242,0.92)",border:"1px solid rgba(0,0,0,0.12)",color:"#5a5040",fontSize:8,padding:"7px 14px",cursor:"pointer",letterSpacing:"0.18em",textTransform:"uppercase",fontFamily:"IBM Plex Mono, monospace",borderRadius:2,backdropFilter:"blur(8px)"},children:b.label},D))})})(),L.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"22px 30px",zIndex:10,pointerEvents:"none",background:"linear-gradient(to bottom, rgba(245,240,232,0.94) 0%, transparent 100%)"},children:[L.jsxs("div",{children:[L.jsxs("div",{style:{color:w,fontSize:9,letterSpacing:"0.32em",textTransform:"uppercase",marginBottom:5,fontFamily:C},children:["✦ ",a]}),L.jsx("div",{style:{color:"#2a2218",fontSize:21,fontFamily:"Crimson Pro, Georgia, serif",fontWeight:300,letterSpacing:"0.02em"},children:r})]}),L.jsxs("div",{style:{display:"flex",gap:8,pointerEvents:"auto"},children:[L.jsx("button",{onClick:()=>p(!0),style:{background:"rgba(255,251,245,0.92)",border:"1px solid rgba(0,0,0,0.13)",color:"#5a5040",fontSize:9,padding:"9px 18px",cursor:"pointer",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:C,borderRadius:2,backdropFilter:"blur(6px)"},children:"✦   Fitting Room"}),L.jsx("button",{onClick:u,style:{background:"rgba(255,251,245,0.92)",border:"1px solid rgba(0,0,0,0.13)",color:"#5a5040",fontSize:9,padding:"9px 18px",cursor:"pointer",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:C,borderRadius:2,backdropFilter:"blur(6px)"},children:"✕   Exit"})]})]}),L.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 30px",zIndex:10,pointerEvents:"none",background:"linear-gradient(to top, rgba(245,240,232,0.94) 0%, transparent 100%)"},children:[L.jsx("span",{style:{color:"rgba(72, 47, 6, 0.5)",fontSize:12,fontFamily:C,letterSpacing:"0.12em"},children:"Drag to look · ← → ↑ ↓ keys · ✦FIND PRODUCTS TO VIEW✦"}),L.jsxs("span",{style:{color:w,fontSize:9,fontFamily:C,letterSpacing:"0.1em"},children:[s.length," pieces"]})]}),v&&L.jsx(Rw,{products:s,onClose:()=>p(!1)})]})}function Lw({products:s,tags:e,title:t,spaceType:r,color:a,onClose:l,onSelectProduct:u}){const f=ct.useRef(null);return ct.useEffect(()=>{const m=f.current;if(!m)return;const h=new Na({antialias:!0});h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setSize(m.clientWidth,m.clientHeight),h.outputColorSpace=jn,h.toneMapping=Po,h.toneMappingExposure=1.25,h.shadowMap.enabled=!0,h.shadowMap.type=Aa,m.appendChild(h.domElement);const x=new Ra;x.background=new At(13161662),x.fog=new Tc(13161662,2800,5e3);const v=new Bn(55,m.clientWidth/m.clientHeight,1,7e3),p=(B,te=.85,T=0)=>new et({color:B,roughness:te,metalness:T}),S=(B=7051605)=>new et({color:B,roughness:.85,side:mi});x.add(new Ia(16774632,.65));const w=new Is(16772556,2.2);w.position.set(300,1200,700),w.castShadow=!0,w.shadow.mapSize.set(2048,2048),w.shadow.camera.left=-2e3,w.shadow.camera.right=2e3,w.shadow.camera.top=2e3,w.shadow.camera.bottom=-2e3,w.shadow.camera.near=1,w.shadow.camera.far=4e3,w.shadow.bias=-3e-4,x.add(w);const C=new Is(13953218,.55);C.position.set(-600,500,200),x.add(C);const y=[[-480,600,-400],[0,600,-400],[480,600,-400],[-480,600,200],[0,600,200],[480,600,200]];y.forEach(([B,te,T])=>{const k=new So(16771248,.9,900,1.6);k.position.set(B,te,T),x.add(k)});const _=new Yt(3600,5e3,36,60),b=new et({color:12888442,roughness:.82,metalness:.04}),D=_.attributes.position,P=[];for(let B=0;B<D.count;B++){const T=.88+Math.floor((D.getX(B)+1800)/120)%2*.07+Math.random()*.05;P.push(T,T*.92,T*.78)}_.setAttribute("color",new tn(P,3)),b.vertexColors=!0;const F=new Oe(_,b);F.rotation.x=-Math.PI/2,F.receiveShadow=!0,x.add(F);const U=p(15261908,.95),O=new Oe(new Yt(3600,1400),U);O.position.set(0,700,-2200),O.receiveShadow=!0,x.add(O);const E=new Oe(new Yt(5e3,1400),p(15261908,.95));E.rotation.y=Math.PI/2,E.position.set(-1800,700,-200),E.receiveShadow=!0,x.add(E);const A=new Oe(new Yt(5e3,1400),p(15261908,.95));A.rotation.y=-Math.PI/2,A.position.set(1800,700,-200),A.receiveShadow=!0,x.add(A);const Y=new Oe(new Yt(3600,5e3),p(15789284,.97));Y.rotation.x=Math.PI/2,Y.position.set(0,1400,-200),x.add(Y),[[-300,1398,-600],[300,1398,-600],[0,1398,0]].forEach(([B,te,T])=>{const k=new Oe(new Yt(260,260),new et({color:16775656,roughness:.1,metalness:.05}));k.rotation.x=Math.PI/2,k.position.set(B,te,T),x.add(k);const he=new i0(new r0(new Yt(260,260)),new yo({color:13945008}));he.rotation.x=Math.PI/2,he.position.set(B,te+1,T),x.add(he)});const z=p(9136192,.9,.02);for(let B=-1800;B<=800;B+=500){const te=new Oe(new mt(3600,28,40),z);te.position.set(0,1385,B),te.castShadow=!0,x.add(te)}for(let B=-1500;B<=1500;B+=750){const te=new Oe(new mt(40,28,5e3),z);te.position.set(B,1385,-200),te.castShadow=!0,x.add(te)}const G=new yo({color:5917238});y.forEach(([B,te,T])=>{x.add(new gc(new Cn().setFromPoints([new ne(B,1380,T),new ne(B,te+28,T)]),G));const k=new Oe(new Co(28,22,16,1,!0),p(12614229,.75));k.rotation.x=Math.PI,k.position.set(B,te+28,T),k.castShadow=!0,x.add(k);const he=new Oe(new Yi(14,16),new et({color:16772522,emissive:16769136,emissiveIntensity:1.2,roughness:.2}));he.rotation.x=Math.PI/2,he.position.set(B,te+18,T),x.add(he)});const Z=p(10516560,.8,.03),se=p(11569248,.6,.04),J=[[-480,0,-400],[0,0,-400],[480,0,-400],[-480,0,200],[0,0,200],[480,0,200]],ee=[()=>new mt(60,80,60),()=>new ut(28,28,90,20),()=>new on(38,20,20),()=>new Co(32,85,18),()=>new os(28,10,12,30),()=>new Qf(36)],H=[12883306,9087624,15259056,11563104,10136720,13940886];J.forEach(([B,,te],T)=>{const k=new Oe(new ut(75,80,260,24),Z);k.position.set(B,130,te),k.castShadow=!0,k.receiveShadow=!0,x.add(k);const he=new Oe(new ut(80,80,8,24),se);he.position.set(B,264,te),he.castShadow=!0,x.add(he);const ce=new Oe(ee[T%ee.length](),p(H[T%H.length],.7,.08));ce.position.set(B,315,te),ce.castShadow=!0,x.add(ce)});const re=p(10122320,.85,.03),le=p(8019002,.9,.02);[-700,0,700].forEach(B=>{[-55,55].forEach(te=>{const T=new Oe(new mt(18,860,28),le);T.position.set(B+te,430,-2188),T.castShadow=!0,x.add(T)}),[180,400,620,840].forEach(te=>{const T=new Oe(new mt(140,14,30),re);T.position.set(B,te,-2188),T.castShadow=!0,x.add(T);for(let k=0;k<3;k++){const he=20+Math.random()*30,ce=new Oe(new ut(5+Math.random()*7,5+Math.random()*7,he,10),p([13149306,10136704,14732720,12095600][Math.floor(Math.random()*4)],.8));ce.position.set(B-44+k*44,te+7+he/2,-2184),x.add(ce)}})});const ue=p(11570272,.85),V=p(8018998,.9);[[-700,0,900],[700,0,900]].forEach(([B,,te])=>{for(let T=0;T<5;T++){const k=new Oe(new mt(240,14,24),ue);k.position.set(B,170,te-48+T*24),k.castShadow=!0,x.add(k)}[[-100,te-45],[100,te-45],[-100,te+45],[100,te+45]].forEach(([T,k])=>{const he=new Oe(new mt(16,170,16),V);he.position.set(B+T,85,k),he.castShadow=!0,x.add(he)})});function $(B,te,T,k=1,he=0){const ce=new $i;ce.position.set(B,te,T);const xe=new Oe(new ut(18*k,14*k,28*k,14),p(12613712,.85));xe.position.y=14*k,xe.castShadow=!0,ce.add(xe);const Re=new Oe(new Yi(17*k,14),p(5914152,.95));Re.rotation.x=-Math.PI/2,Re.position.y=28.5*k,ce.add(Re);const Te=[7051605,5143610,9091184,5935172,8040032];if(he===0)for(let be=0;be<6;be++){const We=be/6*Math.PI*2+Math.random()*.3,X=(40+Math.random()*40)*k,we=new Oe(new ut(1.5*k,2*k,X,6),p(5929536,.9));we.position.set(Math.cos(We)*8*k,28*k+X/2,Math.sin(We)*8*k),we.rotation.z=(Math.random()-.5)*.6,we.rotation.x=(Math.random()-.5)*.4,ce.add(we);const Ae=(22+Math.random()*16)*k,Ue=new Oe(new Yi(Ae,10),S(Te[be%Te.length]));Ue.position.set(Math.cos(We)*(12+X*.6)*k,28*k+X+Ae*.3,Math.sin(We)*(12+X*.6)*k),Ue.rotation.y=We,Ue.rotation.x=-Math.PI/3+(Math.random()-.5)*.7,ce.add(Ue)}else if(he===1){const be=new Oe(new ut(8*k,10*k,140*k,10),p(5931072,.85));be.position.y=28*k+70*k,be.castShadow=!0,ce.add(be);for(let We=0;We<9;We++){const X=We/9*Math.PI*2,we=new Oe(new Yi(16*k,8),S(Te[We%Te.length]));we.position.set(Math.cos(X)*14*k,28*k+30*k+We/9*90*k,Math.sin(X)*14*k),we.rotation.y=X,we.rotation.x=-.5,ce.add(we)}}else for(let be=0;be<20;be++){const We=be/20*Math.PI*2,X=(10+Math.random()*22)*k,we=(Math.random()*40-20)*k,Ae=new Oe(new Yi((8+Math.random()*10)*k,6),S(Te[be%Te.length]));Ae.position.set(Math.cos(We)*X,28*k+20*k+we,Math.sin(We)*X),Ae.rotation.y=We,Ae.rotation.x=-Math.PI/2+.3+(Math.random()-.5)*.8,ce.add(Ae)}return x.add(ce),ce}$(-1600,0,-1800,3.5,1),$(1600,0,-1800,3.5,1),$(-1600,0,800,2.8,0),$(1600,0,800,2.8,0),$(-360,0,1800,2.2,2),$(360,0,1800,2.2,2),$(-900,0,-800,1.8,0),$(900,0,-800,1.8,2),$(-900,0,400,1.6,1),$(900,0,400,1.6,0),J.forEach(([B,,te],T)=>$(B+100,268,te,.7,T%3)),[[-900,1300,-600],[900,1300,-600],[0,1300,-1200],[-900,1300,200],[900,1300,200]].forEach(([B,te,T])=>{x.add(new gc(new Cn().setFromPoints([new ne(B,1380,T),new ne(B,te,T)]),new yo({color:9136708})));const k=new Oe(new ut(20,15,24,12),p(12613712,.85));k.position.set(B,te-12,T),x.add(k);for(let he=0;he<12;he++){const ce=he/12*Math.PI*2,xe=Math.random()*80,Re=new Oe(new Yi(8+Math.random()*8,6),S(6990421));Re.position.set(B+Math.cos(ce)*(18+xe*.3),te-24-xe,T+Math.sin(ce)*(18+xe*.3)),Re.rotation.y=ce,Re.rotation.x=-Math.PI/2+.5+Math.random()*.5,x.add(Re)}});const Le=[7048277,8035938,5929030,9087600];[-900,-200,200,900].forEach(B=>{const te=new Oe(new Yt(300,500),p(Le[Math.floor(Math.random()*4)],.95));te.position.set(B,600,-2190),x.add(te);for(let T=0;T<40;T++){const k=new Oe(new on(4+Math.random()*6,6,6),p(Le[Math.floor(Math.random()*4)],.9));k.position.set(B+(Math.random()-.5)*260,300+Math.random()*400,-2185),x.add(k)}}),[[-1400,0,0],[1400,0,0]].forEach(([B,,te])=>{const T=new Oe(new ut(100,100,8,24),p(8022098,.9));T.position.set(B,4,te),x.add(T);for(let k=0;k<30;k++){const he=Math.random()*85,ce=Math.random()*Math.PI*2,xe=new Oe(new on(4+Math.random()*5,6,6),p([13154458,10522752,13943976,12101768][Math.floor(Math.random()*4)],.9));xe.position.set(B+Math.cos(ce)*he,10,te+Math.sin(ce)*he),xe.scale.y=.5,x.add(xe)}}),[[-480,0,-100],[480,0,-100]].forEach(([B,,te],T)=>{const k=new Oe(new Yt(320,500),p([12886128,13940864][T],.95));k.rotation.x=-Math.PI/2,k.position.set(B,2,te),x.add(k);for(let he=-160;he<=160;he+=12)[[te-250,te-270],[te+250,te+270]].forEach(([ce,xe])=>{const Re=new Cn().setFromPoints([new ne(B+he,2,ce),new ne(B+he,2,xe)]);x.add(new gc(Re,new yo({color:9072720})))})});const Pe=new Oe(new mt(340,100,12),p(9136192,.75));Pe.position.set(0,950,-2186),x.add(Pe);const ze=new i0(new r0(new mt(340,100,14)),new yo({color:5914146}));ze.position.set(0,950,-2184),x.add(ze);const oe=new ne(0,280,0),_e={radius:2100,phi:Math.PI/2-.08,theta:0},Me=.12,Ce=Math.PI*.58,Be=300,tt=3400;function It(){v.position.set(oe.x+_e.radius*Math.sin(_e.phi)*Math.sin(_e.theta),oe.y+_e.radius*Math.cos(_e.phi),oe.z+_e.radius*Math.sin(_e.phi)*Math.cos(_e.theta)),v.lookAt(oe)}It();let dt=!1,ft=0,it=0,rt=null;const Ze=B=>{dt=!0,ft=B.clientX,it=B.clientY,M.style.cursor="grabbing"},j=B=>{dt&&(_e.theta-=(B.clientX-ft)*.004,_e.phi=Math.max(Me,Math.min(Ce,_e.phi+(B.clientY-it)*.004)),ft=B.clientX,it=B.clientY,It())},ht=()=>{dt=!1,M.style.cursor="grab"},gt=B=>{B.preventDefault(),_e.radius=Math.max(Be,Math.min(tt,_e.radius+B.deltaY*1.4)),It()},St=B=>{B.touches.length===1?(dt=!0,ft=B.touches[0].clientX,it=B.touches[0].clientY):B.touches.length===2&&(rt=Math.hypot(B.touches[0].clientX-B.touches[1].clientX,B.touches[0].clientY-B.touches[1].clientY))},Ve=B=>{if(B.preventDefault(),B.touches.length===1&&dt)_e.theta-=(B.touches[0].clientX-ft)*.005,_e.phi=Math.max(Me,Math.min(Ce,_e.phi+(B.touches[0].clientY-it)*.005)),ft=B.touches[0].clientX,it=B.touches[0].clientY,It();else if(B.touches.length===2&&rt!==null){const te=Math.hypot(B.touches[0].clientX-B.touches[1].clientX,B.touches[0].clientY-B.touches[1].clientY);_e.radius=Math.max(Be,Math.min(tt,_e.radius-(te-rt)*2)),rt=te,It()}},N=()=>{dt=!1,rt=null},M=h.domElement;M.style.cursor="grab",M.addEventListener("mousedown",Ze),M.addEventListener("mousemove",j),M.addEventListener("mouseup",ht),M.addEventListener("mouseleave",ht),M.addEventListener("wheel",gt,{passive:!1}),M.addEventListener("touchstart",St,{passive:!1}),M.addEventListener("touchmove",Ve,{passive:!1}),M.addEventListener("touchend",N);let q;const ae=()=>{q=requestAnimationFrame(ae),h.render(x,v)};ae();const Se=()=>{v.aspect=m.clientWidth/m.clientHeight,v.updateProjectionMatrix(),h.setSize(m.clientWidth,m.clientHeight)};return window.addEventListener("resize",Se),()=>{cancelAnimationFrame(q),window.removeEventListener("resize",Se),M.removeEventListener("mousedown",Ze),M.removeEventListener("mousemove",j),M.removeEventListener("mouseup",ht),M.removeEventListener("mouseleave",ht),M.removeEventListener("wheel",gt),M.removeEventListener("touchstart",St),M.removeEventListener("touchmove",Ve),M.removeEventListener("touchend",N),h.dispose(),m.contains(h.domElement)&&m.removeChild(h.domElement)}},[]),L.jsxs("div",{className:"sr-overlay",style:{overflow:"hidden"},children:[L.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,zIndex:10,display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"20px 24px",pointerEvents:"none"},children:[L.jsxs("div",{children:[L.jsx("div",{style:{fontFamily:"'Playfair Display',Georgia,serif",fontSize:22,fontWeight:500,letterSpacing:"0.04em",color:"rgba(60,44,28,0.88)",textShadow:"0 1px 8px rgba(255,248,230,0.7)"},children:t||"Soleil's Showroom"}),L.jsxs("div",{style:{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,letterSpacing:"0.18em",color:"rgba(80,60,40,0.6)",marginTop:4,textTransform:"uppercase"},children:[r||"Soft Botanical",e!=null&&e.length?" · "+e.join(", "):""]})]}),L.jsx("button",{onClick:l,style:{pointerEvents:"all",background:"rgba(255,248,236,0.75)",border:"1px solid rgba(140,100,60,0.3)",borderRadius:"50%",width:36,height:36,cursor:"pointer",fontSize:14,color:"rgba(80,55,30,0.8)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)"},children:"✕"})]}),L.jsx("div",{ref:f,style:{width:"100%",height:"100%"}}),L.jsx("div",{style:{position:"absolute",bottom:18,left:"50%",transform:"translateX(-50%)",fontFamily:"'IBM Plex Mono',monospace",fontSize:9,letterSpacing:"0.22em",color:"rgba(80,60,40,0.45)",pointerEvents:"none",textTransform:"uppercase",whiteSpace:"nowrap"},children:"drag to look around · scroll to zoom"})]})}function Iw({products:s=[],tags:e=[],title:t,spaceType:r,color:a,onClose:l,onSelectProduct:u}){const f=ct.useRef(null),[m,h]=ct.useState([]);return ct.useEffect(()=>{const x=f.current;if(!x)return;const v=new Na({antialias:!0});v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.setSize(x.clientWidth,x.clientHeight),v.outputColorSpace=jn,v.toneMapping=Po,v.toneMappingExposure=1.35,v.shadowMap.enabled=!0,v.shadowMap.type=Aa,x.appendChild(v.domElement);const p=new Ra;p.background=new At(2894901),p.fog=new bc(2894901,22e-5);const S=new Bn(52,x.clientWidth/x.clientHeight,1,8e3);S.position.set(0,420,1900),S.lookAt(0,240,0);const w=new et({color:4868692,roughness:.88,metalness:.06}),C=new et({color:5922154,roughness:.25,metalness:.88}),y=new et({color:3684415,roughness:.78,metalness:.2}),_=new et({color:2763314,roughness:1,metalness:0}),b=2800,D=3600,P=900,F=new Oe(new Yt(b,D,40,40),y);F.rotation.x=-Math.PI/2,F.receiveShadow=!0,p.add(F);const U=new et({color:16109648,roughness:.95,metalness:0}),O=new Oe(new Yt(1400,900),U);O.rotation.x=-Math.PI/2,O.position.set(0,2,-200),O.receiveShadow=!0,p.add(O);const E=new Oe(new Yt(b,D),_);E.rotation.x=Math.PI/2,E.position.y=P,p.add(E);const A=new Oe(new Yt(b,P),w);A.position.set(0,P/2,-D/2),A.receiveShadow=!0,p.add(A),[-1,1].forEach(T=>{const k=new Oe(new Yt(D,P),w);k.rotation.y=T*Math.PI/2,k.position.set(T*b/2,P/2,0),k.receiveShadow=!0,p.add(k)});const Y=new mt(60,P,60);[-3,-1,1,3].map(T=>T*320).forEach(T=>{[-1,1].forEach(k=>{const he=new Oe(Y,C);he.position.set(k*(b/2-30),P/2,T),he.castShadow=!0,he.receiveShadow=!0,p.add(he);const ce=new Oe(new mt(80,12,80),C);ce.position.set(k*(b/2-30),P-6,T),p.add(ce)})}),[-1,1].forEach(T=>{const k=new Oe(new mt(8,6,D),C);k.position.set(T*(b/2-35),3,0),p.add(k)}),[-380,0,380].forEach(T=>{const k=new Oe(new mt(10,8,D),C);k.position.set(T,P-4,0),p.add(k)}),p.add(new Ia(11189213,2.2));const G=new w_(13424895,4473941,1.4);p.add(G);const Z=new _a(16773324,9,2400,Math.PI/9,.45,1);Z.position.set(120,820,600),Z.target.position.set(0,0,0),Z.castShadow=!0,Z.shadow.mapSize.set(2048,2048),Z.shadow.camera.near=50,Z.shadow.camera.far=3e3,p.add(Z),p.add(Z.target);const se=new _a(6719743,3.5,3e3,Math.PI/5,.6,.8);se.position.set(-600,700,-1200),se.target.position.set(0,100,0),p.add(se),p.add(se.target);const J=new _a(16768426,2,2e3,Math.PI/6,.8,1.2);J.position.set(800,700,400),J.target.position.set(0,100,0),p.add(J),p.add(J.target);const ee=s.length>0?s:[{id:1,name:"OBJECT 001",price:"$280",subtitle:"limited run"},{id:2,name:"OBJECT 002",price:"$440",subtitle:"signature series"},{id:3,name:"OBJECT 003",price:"$195",subtitle:"raw edition"}],H=Math.min(ee.length,5),re=520,le=-(H-1)*re/2,ue=-200,V=[];ee.slice(0,H).forEach((T,k)=>{const he=le+k*re,ce=new mt(180,14,180),xe=new Oe(ce,w);xe.position.set(he,7,ue),xe.castShadow=!0,xe.receiveShadow=!0,p.add(xe);const Re=220+k%2*60,Te=new mt(80,Re,80),be=new Oe(Te,C);be.position.set(he,14+Re/2,ue),be.castShadow=!0,be.receiveShadow=!0,p.add(be);const We=new mt(200,18,200),X=new et({color:6974842,roughness:.1,metalness:.95}),we=new Oe(We,X),Ae=14+Re+9;we.position.set(he,Ae,ue),we.castShadow=!0,we.receiveShadow=!0,p.add(we);const Ue=Ae+9;let Ee;const ge=[new mt(90,110,90),new ut(42,42,120,32),new ut(0,62,110,4),new os(42,14,16,48),new eh(62)],ke=new et({color:new At(a||8947865),roughness:.22,metalness:.78,envMapIntensity:1.2});Ee=new Oe(ge[k%ge.length],ke),Ee.position.set(he,Ue+62,ue),Ee.castShadow=!0,Ee.userData={product:T,index:k},p.add(Ee),V.push(Ee);const Je=new os(70,2.5,8,64),Mt=new et({color:4482781,emissive:1127338,emissiveIntensity:.6,roughness:.3,metalness:.8}),wt=new Oe(Je,Mt);wt.rotation.x=Math.PI/2,wt.position.set(he,Ae+10,ue),p.add(wt);const qt=new _a(16773336,4,1400,Math.PI/12,.3,1.2);qt.position.set(he,P-10,ue+100),qt.target.position.set(he,Ue+62,ue),qt.castShadow=!1,p.add(qt),p.add(qt.target);const Vt=new ut(10,14,30,12),an=new et({color:1710626,roughness:.5,metalness:.9}),nn=new Oe(Vt,an);nn.position.set(he,P-22,ue+100),p.add(nn)});const $=new mt(120,120,120),Le=new et({color:1710624,roughness:.95,metalness:.05});[[-900,0,-1300],[-760,120,-1300],[-780,0,-1150],[820,0,-1200],[950,0,-1280],[870,120,-1280]].forEach(([T,k,he])=>{const ce=new Oe($,Le);ce.position.set(T,k+60,he),ce.rotation.y=Math.random()*.4-.2,ce.castShadow=!0,p.add(ce)});const Pe=new mt(6,6,D*.7),ze=new et({color:2245802,emissive:8874,emissiveIntensity:.8});[-1,1].forEach(T=>{const k=new Oe(Pe,ze);k.position.set(T*(b/2-8),12,-100),p.add(k)});const oe=new rh,_e=new Et(-9999,-9999),Me={phi:0,theta:.085},Ce={on:!1,x:0,y:0,phi0:0,th0:0};let Be=1900;const tt=400,It=3500;let dt={x:0,y:0},ft=null;const it=v.domElement,rt=T=>{Ce.on=!0,Ce.x=T.clientX,Ce.y=T.clientY,Ce.phi0=Me.phi,Ce.th0=Me.theta,dt={x:T.clientX,y:T.clientY},it.style.cursor="grabbing",it.setPointerCapture(T.pointerId)},Ze=T=>{if(Ce.on){Me.phi=Ce.phi0-(T.clientX-Ce.x)*.003,Me.theta=Math.max(-.1,Math.min(.45,Ce.th0+(T.clientY-Ce.y)*.002));return}const k=it.getBoundingClientRect();_e.x=(T.clientX-k.left)/k.width*2-1,_e.y=-((T.clientY-k.top)/k.height)*2+1},j=()=>{Ce.on=!1,it.style.cursor="grab"},ht=T=>{if(Math.hypot(T.clientX-dt.x,T.clientY-dt.y)>6)return;oe.setFromCamera(_e,S);const k=oe.intersectObjects(V);k.length>0&&u&&u(k[0].object.userData.product)},gt=T=>{T.preventDefault(),Be=Math.max(tt,Math.min(It,Be+T.deltaY*1.2))},St=T=>{T.touches.length===2&&(ft=Math.hypot(T.touches[0].clientX-T.touches[1].clientX,T.touches[0].clientY-T.touches[1].clientY))},Ve=T=>{if(T.touches.length===2&&ft!==null){const k=Math.hypot(T.touches[0].clientX-T.touches[1].clientX,T.touches[0].clientY-T.touches[1].clientY);Be=Math.max(tt,Math.min(It,Be-(k-ft)*2)),ft=k,T.preventDefault()}};it.style.cursor="grab",it.addEventListener("pointerdown",rt),it.addEventListener("pointermove",Ze),it.addEventListener("pointerup",j),it.addEventListener("click",ht),it.addEventListener("wheel",gt,{passive:!1}),it.addEventListener("touchstart",St,{passive:!1}),it.addEventListener("touchmove",Ve,{passive:!1});let N,M=0;const q=0,ae=260,Se=0,B=()=>{N=requestAnimationFrame(B),M+=.005,S.position.set(q+Be*Math.sin(Me.phi)*Math.cos(Me.theta),ae+Be*Math.sin(Me.theta),Se+Be*Math.cos(Me.phi)*Math.cos(Me.theta)),S.lookAt(q,ae,Se),V.forEach((xe,Re)=>{xe.rotation.y+=.004+Re*8e-4,xe.position.y+=Math.sin(M+Re*1.3)*.12}),oe.setFromCamera(_e,S);const T=oe.intersectObjects(V);V.forEach(xe=>{const Re=T.length>0&&T[0].object===xe,Te=xe.material;Re?(Te.emissive=new At(3359880),Te.emissiveIntensity=.5,xe.scale.setScalar(1.08)):(Te.emissive=new At(0),Te.emissiveIntensity=0,xe.scale.setScalar(1))});const k=x.clientWidth,he=x.clientHeight,ce=V.map(xe=>{const Re=xe.position.clone().project(S);return{x:(Re.x*.5+.5)*k,y:(-Re.y*.5+.5)*he,product:xe.userData.product,hovered:T.length>0&&T[0].object===xe}});h(ce),v.render(p,S)};B();const te=()=>{S.aspect=x.clientWidth/x.clientHeight,S.updateProjectionMatrix(),v.setSize(x.clientWidth,x.clientHeight)};return window.addEventListener("resize",te),()=>{cancelAnimationFrame(N),window.removeEventListener("resize",te),it.removeEventListener("pointerdown",rt),it.removeEventListener("pointermove",Ze),it.removeEventListener("pointerup",j),it.removeEventListener("click",ht),it.removeEventListener("wheel",gt),it.removeEventListener("touchstart",St),it.removeEventListener("touchmove",Ve),v.dispose(),x.contains(v.domElement)&&x.removeChild(v.domElement)}},[s,a]),L.jsxs("div",{style:Ln.overlay,children:[L.jsxs("div",{style:Ln.hud,children:[L.jsxs("div",{style:Ln.hudLeft,children:[L.jsx("div",{style:Ln.hudTitle,children:t||"DANIEL'S SPACE"}),L.jsxs("div",{style:Ln.hudSub,children:[r||"URBAN REFINED","  ·  ",e==null?void 0:e.join("  ·  ")]})]}),L.jsxs("div",{style:Ln.hudRight,children:[L.jsx("div",{style:Ln.hudDot}),L.jsx("div",{style:Ln.hudStatus,children:"LIVE"})]}),L.jsx("button",{style:Ln.closeBtn,onClick:l,children:"✕"})]}),L.jsx("div",{style:{...Ln.corner,top:12,left:12,borderTop:"1px solid rgba(80,120,255,0.4)",borderLeft:"1px solid rgba(80,120,255,0.4)"}}),L.jsx("div",{style:{...Ln.corner,top:12,right:12,borderTop:"1px solid rgba(80,120,255,0.4)",borderRight:"1px solid rgba(80,120,255,0.4)"}}),L.jsx("div",{style:{...Ln.corner,bottom:12,left:12,borderBottom:"1px solid rgba(80,120,255,0.4)",borderLeft:"1px solid rgba(80,120,255,0.4)"}}),L.jsx("div",{style:{...Ln.corner,bottom:12,right:12,borderBottom:"1px solid rgba(80,120,255,0.4)",borderRight:"1px solid rgba(80,120,255,0.4)"}}),L.jsx("div",{ref:f,style:Ln.canvas}),m.map((x,v)=>{var p,S,w;return L.jsxs("div",{onClick:()=>u&&u(x.product),style:{...Ln.productLabel,left:x.x,top:x.y+90,opacity:x.hovered?1:.55,transform:`translateX(-50%) translateY(${x.hovered?"-4px":"0"})`,borderColor:x.hovered?"rgba(80,120,255,0.8)":"rgba(80,120,255,0.2)",cursor:u?"pointer":"default"},children:[L.jsx("div",{style:Ln.labelName,children:((p=x.product)==null?void 0:p.name)||`OBJECT ${String(v+1).padStart(3,"0")}`}),((S=x.product)==null?void 0:S.price)&&L.jsx("div",{style:Ln.labelPrice,children:x.product.price}),((w=x.product)==null?void 0:w.subtitle)&&L.jsx("div",{style:Ln.labelSub,children:x.product.subtitle})]},v)}),L.jsx("div",{style:Ln.scanLine})]})}const Ln={overlay:{position:"fixed",inset:0,zIndex:500,background:"#2c2c35",fontFamily:"'IBM Plex Mono', 'Courier New', monospace",overflow:"hidden"},canvas:{position:"absolute",inset:0,width:"100%",height:"100%"},hud:{position:"absolute",top:0,left:0,right:0,zIndex:10,display:"flex",alignItems:"center",padding:"18px 28px",background:"linear-gradient(to bottom, rgba(44,44,53,0.97) 60%, transparent)",borderBottom:"1px solid rgba(80,120,255,0.12)"},hudLeft:{flex:1},hudTitle:{fontSize:"11px",letterSpacing:"0.3em",color:"rgba(200,210,255,0.9)",fontWeight:600,textTransform:"uppercase"},hudSub:{fontSize:"9px",letterSpacing:"0.2em",color:"rgba(120,140,200,0.5)",marginTop:"4px",textTransform:"uppercase"},hudRight:{display:"flex",alignItems:"center",gap:"7px",marginRight:"24px"},hudDot:{width:"6px",height:"6px",borderRadius:"50%",background:"#4488ff",boxShadow:"0 0 8px #4488ff",animation:"pulse 2s ease-in-out infinite"},hudStatus:{fontSize:"9px",letterSpacing:"0.25em",color:"rgba(80,120,255,0.7)"},closeBtn:{background:"none",border:"1px solid rgba(80,120,255,0.25)",color:"rgba(180,190,255,0.6)",width:"32px",height:"32px",cursor:"pointer",fontSize:"12px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s",letterSpacing:0},corner:{position:"absolute",width:"20px",height:"20px",zIndex:10,opacity:.6},productLabel:{position:"absolute",zIndex:10,padding:"8px 14px",background:"rgba(38, 38, 48, 0.88)",border:"1px solid rgba(80,120,255,0.2)",backdropFilter:"blur(8px)",transition:"all 0.25s ease",pointerEvents:"auto",minWidth:"120px",textAlign:"center"},labelName:{fontSize:"9px",letterSpacing:"0.22em",color:"rgba(200,210,255,0.85)",fontWeight:600,textTransform:"uppercase"},labelPrice:{fontSize:"11px",letterSpacing:"0.12em",color:"rgba(140,170,255,0.7)",marginTop:"3px",fontWeight:400},labelSub:{fontSize:"8px",letterSpacing:"0.18em",color:"rgba(90,110,180,0.55)",marginTop:"2px",textTransform:"uppercase"},scanLine:{position:"absolute",bottom:0,left:0,right:0,height:"1px",background:"linear-gradient(to right, transparent, rgba(80,120,255,0.4), transparent)",zIndex:10}};function Nw({products:s=[],tags:e=[],title:t,spaceType:r,color:a,onClose:l,onSelectProduct:u}){const f=ct.useRef(null),m=ct.useRef(l),h=ct.useRef(u);ct.useEffect(()=>{m.current=l},[l]),ct.useEffect(()=>{h.current=u},[u]),ct.useEffect(()=>{const p=f.current;if(!p)return;const S=new Na({antialias:!0});S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.setSize(p.clientWidth,p.clientHeight),S.outputColorSpace=jn,S.toneMapping=Po,S.toneMappingExposure=1.15,S.shadowMap.enabled=!0,S.shadowMap.type=Aa,p.appendChild(S.domElement);const w={sky:14084853,ocean:11064552,sand:15590608,sandDark:14734780,foam:15923451,blush:15910084,peach:16111032,sage:12113088,lilac:13945064,mint:12642520,drift:13351066,white:16447733,accent:9291992},C=new Ra;C.background=new At(w.sky),C.fog=new bc(w.sky,18e-5);const y=new Bn(52,p.clientWidth/p.clientHeight,1,6e3);y.position.set(0,310,1080),y.lookAt(0,230,0);let _=1080;const b=350,D=2e3,P=2600,F=960,U=2200,O=(N,M=.85,q=0,ae={})=>new et({color:N,roughness:M,metalness:q,...ae}),E=(N,M,q,ae,Se,B=0,te=0,T=0)=>{const k=new Oe(N,M);return k.position.set(q,ae,Se),k.rotation.set(B,te,T),k.castShadow=!0,k.receiveShadow=!0,C.add(k),k};E(new Yt(P,U),O(w.sand,.99),0,0,0,-Math.PI/2);for(let N=-5;N<=5;N++)E(new Yt(P,22),O(w.sandDark,1),0,.8,N*190,-Math.PI/2);E(new Yt(P,F*.38),O(w.ocean,.05,.08),0,F*.19,-U/2),E(new Yt(P,F*.62),O(w.sky,.04),0,F*.69,-U/2),E(new Yt(P,6),O(w.foam,.1),0,F*.38,-U/2+1),[0,80,160].forEach((N,M)=>{E(new Yt(P,14-M*2),O(w.foam,.1,0,{transparent:!0,opacity:.55-M*.12}),0,F*.38-60-N,-U/2+2)}),E(new Yt(U,F),O(w.sky,.96),-P/2,F/2,0,0,Math.PI/2),E(new Yt(U,F),O(w.sky,.96),P/2,F/2,0,0,-Math.PI/2),C.add(new Ia(16775412,1.05));const A=new Is(16774632,1.7);A.position.set(-400,900,500),A.castShadow=!0,A.shadow.mapSize.setScalar(1024),A.shadow.camera.near=1,A.shadow.camera.far=4e3,A.shadow.camera.left=-1200,A.shadow.camera.right=1200,A.shadow.camera.top=1200,A.shadow.camera.bottom=-400,C.add(A);const Y=new Is(13167352,.42);Y.position.set(500,180,800),C.add(Y),E(new mt(560,4,380),O(w.white,1),80,1.5,180),E(new mt(560,4.5,28),O(w.blush,1),80,1.8,60),E(new mt(560,4.5,28),O(w.mint,1),80,1.8,-60);const z=-580,G=60;E(new ut(4,4,440,12),O(w.drift,.85),z,220,G),E(new Co(200,80,32),O(w.blush,.75,0,{side:mi}),z,430,G),E(new os(200,3,6,40),O(w.white,.6),z,390,G,Math.PI/2),((N,M,q)=>{const ae=new $i;ae.position.set(N,0,M),ae.rotation.y=q,C.add(ae);const Se=O(w.drift,.88);[[-70,-90],[70,-90],[-70,90],[70,90]].forEach(([T,k])=>{const he=new Oe(new ut(5,5,68,8),Se);he.position.set(T,34,k),he.castShadow=!0,ae.add(he)}),[[-70],[70]].forEach(([T])=>{const k=new Oe(new ut(4,4,180,8),Se);k.position.set(T,68,0),k.rotation.x=Math.PI/2,k.castShadow=!0,ae.add(k)});const B=new Oe(new mt(140,6,200),O(w.sage,.95));B.position.set(0,71,0),B.castShadow=!0,ae.add(B),[[-70],[70]].forEach(([T])=>{const k=new Oe(new ut(4,4,160,8),Se);k.position.set(T,148,-90),k.castShadow=!0,ae.add(k)});const te=new Oe(new mt(130,6,160),O(w.sage,.95));te.position.set(0,148,-90),te.rotation.x=.38,te.castShadow=!0,ae.add(te)})(-290,120,-.2);const se=(N,M,q,ae,Se)=>{const B=new $i;B.position.set(N,0,M),B.rotation.y=q,C.add(B);const te=new Oe(new ut(4,4,520,10),O(15261908,.6,.05));te.position.set(0,260,0),te.castShadow=!0,B.add(te);const T=new Oe(new ut(44,44,8,20),O(14538184,.7));T.position.set(0,4,0),T.castShadow=!0,B.add(T);const k=new Oe(new ut(3,3,120,8),O(15261908,.6));k.position.set(0,480,0),k.rotation.z=Math.PI/2,B.add(k),[-28,28].forEach(Re=>{const Te=new Oe(new on(22,12,8,0,Math.PI),O(ae,.82));Te.position.set(Re,460,4),Te.rotation.x=-.3,Te.scale.set(1,.55,.7),Te.castShadow=!0,B.add(Te)}),[[-50,20],[50,20]].forEach(([Re,Te])=>{const be=new Oe(new ut(1.5,1.5,38,5),O(ae,.9));be.position.set(Re,452,Te),be.rotation.z=Re<0?.6:-.6,B.add(be)});const he=new Oe(new ut(1.5,1.5,50,5),O(ae,.9));he.position.set(0,492,0),B.add(he);const ce=new Oe(new mt(68,80,8),O(Se,.84));ce.position.set(0,350,4),ce.scale.set(1,1,.3),B.add(ce),[-34,34].forEach(Re=>{const Te=new Oe(new ut(2,2,44,5),O(Se,.88));Te.position.set(Re,375,4),Te.rotation.z=Re<0?.8:-.8,B.add(Te)});const xe=new Oe(new mt(18,10,1),O(w.white,.9));xe.position.set(36,330,8),B.add(xe)};se(-560,-300,.25,w.blush,w.blush),se(560,-300,-.25,w.lilac,w.lilac);const J=new $i;J.position.set(P/2-160,0,-160),J.rotation.set(0,.28,.16),C.add(J);const ee=O(w.peach,.55,.04),H=new Oe(new ut(32,32,500,18),ee);H.rotation.z=Math.PI/2,H.scale.set(1,.22,.58),H.position.set(0,36,0),H.castShadow=!0,J.add(H),[240,-240].forEach(N=>{const M=new Oe(new on(32,14,8,0,Math.PI*2,0,Math.PI/2),ee);M.rotation.z=N>0?Math.PI/2:-Math.PI/2,M.scale.set(1,.22,.58),M.position.set(N,36,0),J.add(M)});const re=new Oe(new mt(460,6,10),O(w.white,.5));re.position.set(0,44,0),J.add(re);const le=new Oe(new Co(16,38,3),O(w.peach,.6));le.position.set(-190,10,0),le.rotation.z=Math.PI,le.scale.set(.4,1,1),J.add(le),[[150,280],[260,340],[100,420],[-120,310],[300,200],[380,360],[-60,200],[190,470],[440,290],[-200,430]].forEach(([N,M],q)=>{const ae=q%3===0?15521976:q%3===1?15255720:15786184,Se=.5+q*.13%.6;E(new on(7*Se,7,5),O(ae,.65),N,3,M,.1*q,q,0).scale.set(1,.44,1.3)});const ue=490;E(new mt(720,10,34),O(w.drift,.82),0,ue,-U/2+20),E(new ut(7,5,72,14),O(w.white,.7),-200,ue+36,-U/2+20),E(new on(7,10,10),O(w.white,.7),-200,ue+79,-U/2+20),[0,1,2].forEach(N=>E(new ut(12-N*2,13-N*2,9,14),O(14208440,.88),-60,ue+5+N*9,-U/2+20)),E(new ut(18,12,12,16),O(w.accent,.55,.08),80,ue+6,-U/2+20),E(new ut(4,3,110,8),O(w.drift,.94),230,ue+5,-U/2+20,0,0,Math.PI/2);const V=[],$=document.createElement("div");$.style.cssText=["position:absolute","pointer-events:none","background:rgba(250,248,244,0.96)","backdrop-filter:blur(14px)","border:1px solid rgba(141,200,216,0.35)","padding:10px 18px","border-radius:3px","font-family:Georgia,serif","font-size:13px","color:#3a3028","line-height:1.5","transition:opacity 0.12s","opacity:0","white-space:nowrap","z-index:20","box-shadow:0 4px 20px rgba(100,160,180,0.12)","letter-spacing:0.02em"].join(";"),p.appendChild($);const Le={phi:0,theta:.02},Pe={on:!1,x:0,y:0,phi0:0,th0:0};let ze={x:0,y:0},oe=null;const _e=new rh,Me=new Et,Ce=S.domElement,Be=new ne,tt=N=>{Pe.on=!0,Pe.x=N.clientX,Pe.y=N.clientY,Pe.phi0=Le.phi,Pe.th0=Le.theta,ze={x:N.clientX,y:N.clientY},Ce.style.cursor="grabbing",Ce.setPointerCapture(N.pointerId)},It=N=>{if(Pe.on){Le.phi=Pe.phi0-(N.clientX-Pe.x)*.003,Le.theta=Math.max(-.22,Math.min(.34,Pe.th0+(N.clientY-Pe.y)*.002));return}const M=Ce.getBoundingClientRect();Me.x=(N.clientX-M.left)/M.width*2-1,Me.y=-((N.clientY-M.top)/M.height)*2+1,_e.setFromCamera(Me,y);const q=_e.intersectObjects(V),ae=oe;oe=q.length?q[0].object:null,Ce.style.cursor=oe?"pointer":"grab",ae!==oe&&(ae!=null&&ae.userData.frameMesh&&(ae.userData.frameMesh.material.emissiveIntensity=0),oe!=null&&oe.userData.frameMesh&&(oe.userData.frameMesh.material.emissive.set(.55,.78,.84),oe.userData.frameMesh.material.emissiveIntensity=.14))},dt=()=>{Pe.on=!1,Ce.style.cursor=oe?"pointer":"grab"},ft=N=>{var ae;if(Math.hypot(N.clientX-ze.x,N.clientY-ze.y)>6)return;const M=Ce.getBoundingClientRect();Me.x=(N.clientX-M.left)/M.width*2-1,Me.y=-((N.clientY-M.top)/M.height)*2+1,_e.setFromCamera(Me,y);const q=_e.intersectObjects(V);q.length&&q[0].object.userData.product&&((ae=h.current)==null||ae.call(h,q[0].object.userData.product))},it=N=>{N.preventDefault(),_=Math.max(b,Math.min(D,_+N.deltaY*.75))};let rt=null;const Ze=N=>{N.touches.length===2&&(rt=Math.hypot(N.touches[0].clientX-N.touches[1].clientX,N.touches[0].clientY-N.touches[1].clientY))},j=N=>{if(N.touches.length===2&&rt!==null){const M=Math.hypot(N.touches[0].clientX-N.touches[1].clientX,N.touches[0].clientY-N.touches[1].clientY);_=Math.max(b,Math.min(D,_-(M-rt)*1.4)),rt=M,N.preventDefault()}},ht=N=>{var M;N.key==="ArrowLeft"&&(Le.phi-=.07),N.key==="ArrowRight"&&(Le.phi+=.07),N.key==="ArrowUp"&&(Le.theta=Math.max(-.22,Le.theta-.04)),N.key==="ArrowDown"&&(Le.theta=Math.min(.34,Le.theta+.04)),(N.key==="+"||N.key==="=")&&(_=Math.max(b,_-80)),N.key==="-"&&(_=Math.min(D,_+80)),N.key==="Escape"&&((M=m.current)==null||M.call(m))},gt=()=>{y.aspect=p.clientWidth/p.clientHeight,y.updateProjectionMatrix(),S.setSize(p.clientWidth,p.clientHeight)};Ce.addEventListener("pointerdown",tt),Ce.addEventListener("pointermove",It),Ce.addEventListener("pointerup",dt),Ce.addEventListener("click",ft),Ce.addEventListener("wheel",it,{passive:!1}),Ce.addEventListener("touchstart",Ze,{passive:!1}),Ce.addEventListener("touchmove",j,{passive:!1}),window.addEventListener("keydown",ht),window.addEventListener("resize",gt);let St;const Ve=()=>{St=requestAnimationFrame(Ve),y.position.z+=(_-y.position.z)*.09;const N=Math.sin(Le.phi)*Math.cos(Le.theta),M=-Math.sin(Le.theta),q=-Math.cos(Le.phi)*Math.cos(Le.theta);if(y.lookAt(y.position.x+N*200,y.position.y+M*200,y.position.z+q*200),oe&&!Pe.on){oe.getWorldPosition(Be);const ae=Be.clone().project(y),Se=(ae.x*.5+.5)*Ce.clientWidth,B=(-ae.y*.5+.5)*Ce.clientHeight,te=oe.userData.product,T=te!=null&&te.title?te.title.split(" ").slice(0,5).join(" "):"View piece",k=te!=null&&te.price?` — $${te.price}`:"";$.innerHTML=`${T}${k}<br><span style="font-size:9px;opacity:0.4;font-family:monospace;letter-spacing:0.14em;text-transform:uppercase">Tap to view</span>`,$.style.left=`${Se}px`,$.style.top=`${B}px`,$.style.transform="translate(-50%, calc(-100% - 18px))",$.style.opacity="1"}else $.style.opacity="0";S.render(C,y)};return Ve(),()=>{cancelAnimationFrame(St),Ce.removeEventListener("pointerdown",tt),Ce.removeEventListener("pointermove",It),Ce.removeEventListener("pointerup",dt),Ce.removeEventListener("click",ft),Ce.removeEventListener("wheel",it),Ce.removeEventListener("touchstart",Ze),Ce.removeEventListener("touchmove",j),window.removeEventListener("keydown",ht),window.removeEventListener("resize",gt),S.dispose(),p.contains(Ce)&&p.removeChild(Ce),p.contains($)&&p.removeChild($)}},[]);const x="ui-monospace, 'SF Mono', monospace";return L.jsxs("div",{style:{position:"fixed",inset:0,zIndex:500,background:"#d6eaf5",cursor:"grab"},children:[L.jsx("div",{ref:f,style:{width:"100%",height:"100%"}}),L.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"24px 32px",zIndex:10,pointerEvents:"none",background:"linear-gradient(to bottom, rgba(214,234,245,0.85) 0%, transparent 100%)"},children:[L.jsxs("div",{children:[L.jsx("div",{style:{color:"#8dc8d8",fontSize:8,letterSpacing:"0.38em",textTransform:"uppercase",marginBottom:6,fontFamily:x},children:r}),L.jsx("div",{style:{color:"#3a3028",fontSize:22,fontFamily:"Georgia, 'Times New Roman', serif",fontWeight:400,letterSpacing:"0.01em"},children:t})]}),L.jsx("button",{onClick:l,style:{pointerEvents:"auto",background:"rgba(250,248,244,0.9)",border:"1px solid rgba(141,200,216,0.4)",color:"#5a5048",fontSize:8,padding:"10px 20px",cursor:"pointer",letterSpacing:"0.22em",textTransform:"uppercase",fontFamily:x,borderRadius:2,backdropFilter:"blur(10px)"},children:"Exit"})]}),L.jsx("div",{style:{position:"absolute",right:28,top:"50%",transform:"translateY(-50%)",display:"flex",flexDirection:"column",gap:6,zIndex:10},children:[["+",-75],["−",75]].map(([p,S])=>L.jsx("button",{onClick:()=>{var C;const w=(C=f.current)==null?void 0:C.querySelector("canvas");w&&w.dispatchEvent(new WheelEvent("wheel",{deltaY:S*10,bubbles:!0}))},style:{width:36,height:36,borderRadius:2,background:"rgba(250,248,244,0.88)",border:"1px solid rgba(141,200,216,0.4)",color:"#5a5048",fontSize:18,cursor:"pointer",fontFamily:x,lineHeight:1,backdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center"},children:p},p))}),L.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 32px",zIndex:10,pointerEvents:"none",background:"linear-gradient(to top, rgba(214,234,245,0.7) 0%, transparent 100%)"},children:[L.jsx("span",{style:{color:"rgba(90,80,72,0.45)",fontSize:8,fontFamily:x,letterSpacing:"0.14em"},children:"Drag to look  ·  Scroll or pinch to zoom  ·  Click to view"}),L.jsxs("span",{style:{color:"#8dc8d8",fontSize:8,fontFamily:x,letterSpacing:"0.14em"},children:[s.length," pieces"]})]})]})}const Dw="@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=IBM+Plex+Mono:wght@300;400;500&display=swap');";async function Uw(s){var u,f;const t=s.map(m=>({type:"image",source:{type:"base64",media_type:"image/jpeg",data:m.split(",")[1]}})),l=((f=(u=(await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":void 0,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:"claude-opus-4-6",max_tokens:500,messages:[{role:"user",content:[...t,{type:"text",text:`Analyse these inspiration images and extract the person's aesthetic taste profile.
Return ONLY a JSON object with this exact structure, no other text:
{
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "palette": ["#hexcolor1", "#hexcolor2", "#hexcolor3"],
  "summary": "Two sentence description of their aesthetic in second person, e.g. 'You gravitate toward...'",
  "crewType": "A two-word label like 'Warm Minimalist' or 'Dark Romantic'"
}

Tags should be single evocative words from this list or similar:
minimal, earthy, organic, warm, refined, textured, coastal, airy, natural, soft, 
bold, moody, classical, layered, modern, sharp, dark, urban, graphic, nostalgic, 
retro, luxe, raw, editorial, botanical, industrial, playful, geometric

Keep tags to 5, palette to 3 hex colours dominant in the images, crewType exactly 2 words.`}]}]})})).json()).content)==null?void 0:u[0])==null?void 0:f.text)||"";try{const m=l.replace(/```json|```/g,"").trim();return JSON.parse(m)}catch{return{tags:["minimal","earthy","warm","organic","refined"],palette:["#ff2d78","#c8a8f0","#00f0e0"],summary:"You gravitate toward warm, considered spaces with a natural sensibility. Your taste balances restraint with texture.",crewType:"Warm Minimalist"}}}const ac=[{id:1,name:"Linen Overshirt",brand:"Arket",price:"£89",match:!0,rx:{you:"❤️",friend:"❤️"},img:"https://images.unsplash.com/photo-1713881842156-3d9ef36418cc?w=400&q=80"},{id:2,name:"Ceramic Mug",brand:"Urban Outfitters",price:"£25",match:!0,rx:{you:null,friend:"😍"},img:"https://images.unsplash.com/photo-1649270716777-1bd08cb443f5?w=400&q=80"},{id:3,name:"Merino Chunky Knit",brand:"COS",price:"£100",match:!1,rx:{you:"❤️",friend:null},img:"https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=400&q=80"},{id:4,name:"Raw Edge Notebook",brand:"Papier",price:"£28",match:!1,rx:{you:null,friend:null},img:"https://images.unsplash.com/photo-1621168854680-9250096b4a27?w=400&q=80"},{id:5,name:"Oak Display Tray",brand:"MUJI",price:"£9",match:!0,rx:{you:"❤️",friend:"❤️"},img:"https://images.unsplash.com/photo-1645020089957-608f1f0dfb61?w=400&q=80"},{id:6,name:"Soy Candle",brand:"Yankee Candles",price:"£18",match:!1,rx:{you:null,friend:"❤️"},img:"https://images.unsplash.com/photo-1612293905607-b003de9e54fb?w=400&q=80"},{id:7,name:"Canvas Tote",brand:"Baggu",price:"£35",match:!1,rx:{you:"😍",friend:null},img:"https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80"},{id:8,name:"Wool Throw",brand:"Hay",price:"£145",match:!0,rx:{you:"❤️",friend:"😍"},img:"https://images.unsplash.com/photo-1639109743189-91a3ec8b0437?w=400&q=80"}],z0=[{id:"tp1",name:"Beeswax Taper Candles",shop:"Hive & Hearth",price:"£22",tags:["earthy","organic","warm"],img:"https://images.unsplash.com/photo-1732117924212-39bfaec174c9?w=400&q=80"},{id:"tp6",name:"Hand-thrown Clay Bowl",shop:"Toyo Kiln",price:"£38",tags:["organic","warm","textured"],img:"https://images.unsplash.com/photo-1621453571761-1fd23ec15396?w=400&q=80"},{id:"tp3",name:"Linen Pillow Cover",shop:"Still Meadow",price:"£34",tags:["minimal","refined","warm"],img:"https://images.unsplash.com/photo-1730580015629-d07e58d81c32?w=400&q=80"},{id:"tp4",name:"Merino Wool Throw",shop:"Highland Fibre",price:"£145",tags:["warm","textured","refined"],img:"https://images.unsplash.com/photo-1548536207-7b32566ca27d?w=400&q=80"},{id:"tp5",name:"Oak Tray",shop:"Workshop No.7",price:"£64",tags:["earthy","organic","natural"],img:"https://images.unsplash.com/photo-1657981190934-5a31370aa54f?w=400&q=80"},{id:"tp2",name:"Lavender Room Spray",shop:"Atelier No.3",price:"£48",tags:["refined","warm","minimal"],img:"https://images.unsplash.com/photo-1683559086021-7f5e3b5e11cb?w=400&q=80"}],B0=[{id:"s1",name:"Hand-dyed Knitted Scarf",brand:"Studio Wabi",price:"£32",match:!1,rx:{you:"❤️",friend:null},img:"https://images.unsplash.com/photo-1457545195570-67f207084966?w=400&q=80"},{id:"s2",name:"Speckled Thrown Mug",brand:"Earthen Kiln",price:"£27",match:!0,rx:{you:"❤️",friend:"❤️"},img:"https://images.unsplash.com/photo-1729441733364-37e7df95fa70?w=400&q=80"},{id:"s3",name:"Beeswax Block Candle",brand:"Hive & Hearth",price:"£11",match:!1,rx:{you:"😍",friend:null},img:"https://images.unsplash.com/photo-1732117924212-39bfaec174c9?w=400&q=80"},{id:"s4",name:"Washed Linen Napkins",brand:"Vala",price:"£16",match:!0,rx:{you:null,friend:"❤️"},img:"https://images.unsplash.com/photo-1635207945702-98fdc3df9d90?w=400&q=80"},{id:"s5",name:"Pressed Botanicals Art",brand:"Paper & Pine",price:"£34",match:!1,rx:{you:"❤️",friend:null},img:"https://images.unsplash.com/photo-1621620211152-db44233d5b6c?w=400&q=80"},{id:"s6",name:"Raw Clay Bud Vase Set",brand:"Form & Earth",price:"£44",match:!1,rx:{you:null,friend:"😍"},img:"https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80"},{id:"s7",name:"Palo Santo Bundle",brand:"Earth & Ember",price:"£16",match:!0,rx:{you:"❤️",friend:"❤️"},img:"https://images.unsplash.com/photo-1597717503010-ee19fef2db91?w=400&q=80"},{id:"s8",name:"Hand-knit Wool Socks",brand:"The Yarn Shed",price:"£24",match:!1,rx:{you:"😍",friend:null},img:"https://images.unsplash.com/photo-1641399050826-9616c90427bb?w=400&q=80"}],Fw=[{id:"maya",name:"Maya",avatar:"M",color:"#00f0e0",compat:78,type:"Coastal Minimalist",tags:["minimal","coastal","organic"],picks:["tp2","tp3"]},{id:"soleil",name:"Soleil",avatar:"S",color:"#c8a8f0",compat:71,type:"Soft Botanical",tags:["natural","soft","earthy"],picks:["tp1","tp5"]},{id:"daniel",name:"Daniel",avatar:"D",color:"#ff00cc",compat:64,type:"Urban Refined",tags:["minimal","sharp","edgy"],picks:["tp4","tp6"]}],lc=[{id:1,name:"Raw Linen & Stone",bg:"#b5a48a",tags:["minimal","earthy","organic"],photo:"https://images.unsplash.com/photo-1591625591034-75d303d2e1a4?auto=format&fit=crop&w=400&h=560&q=80"},{id:2,name:"Dark Academia",bg:"#2d2416",tags:["moody","classical","layered"],photo:"https://images.unsplash.com/photo-1698360308488-48a0f089ec3c?auto=format&fit=crop&w=400&h=560&q=80"},{id:3,name:"Clean & Precise",bg:"#d8d8d8",tags:["minimal","modern","sharp"],photo:"https://images.unsplash.com/photo-1565791380713-1756b9a05343?auto=format&fit=crop&w=400&h=560&q=80"},{id:4,name:"Warm Maximalist",bg:"#c47a3a",tags:["bold","warm","textured"],photo:"https://images.unsplash.com/photo-1650137938625-11576502aecd?auto=format&fit=crop&w=400&h=560&q=80"},{id:5,name:"Soft Botanical",bg:"#7aaa82",tags:["natural","soft","organic"],photo:"https://images.unsplash.com/photo-1656115884764-0dff3589108b?auto=format&fit=crop&w=400&h=560&q=80"},{id:6,name:"Urban Edge",bg:"#1a1a2e",tags:["dark","urban","graphic"],photo:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=400&h=560&q=80"},{id:7,name:"Coastal Luxury",bg:"#a8c5c5",tags:["airy","refined","coastal"],photo:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&h=560&q=80"},{id:8,name:"Vintage Revival",bg:"#d4a56a",tags:["nostalgic","warm","retro"],photo:"https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=400&h=560&q=80"}],Xd=[{label:"minimal",x:48,y:28,r:16,c:"#ff2d78"},{label:"earthy",x:28,y:52,r:13,c:"#ff2d78"},{label:"organic",x:62,y:58,r:11,c:"#ff2d78"},{label:"warm",x:44,y:70,r:15,c:"#ff2d78"},{label:"refined",x:74,y:38,r:10,c:"#ff2d78"},{label:"bohemian",x:20,y:34,r:10,c:"#ff2d78"}],Ow=[{label:"minimal",x:54,y:26,r:15,c:"#00f0e0"},{label:"coastal",x:70,y:50,r:13,c:"#00f0e0"},{label:"organic",x:58,y:64,r:12,c:"#00f0e0"},{label:"airy",x:34,y:44,r:10,c:"#00f0e0"},{label:"natural",x:24,y:62,r:14,c:"#00f0e0"},{label:"soft",x:78,y:28,r:9,c:"#00f0e0"}],kw=[{id:1,text:"omg the linen shirt is giving everything 😭",from:"friend"},{id:2,text:"i know!! adding to our overlap zone rn",from:"you"},{id:3,text:"78% crew compatibility makes so much sense",from:"friend"}],H0=[{x:260,y:380},{x:480,y:240},{x:160,y:420},{x:580,y:300},{x:380,y:480},{x:240,y:180}],cc=["i was literally just looking at that 👀","add it to the overlap zone??","okay we need to come back to this","the vibe is SO us honestly","buy it before it sells out!!"],zw=["Browse Together","Shop Together","Wander Together","Your Crew Shapes Your Taste","Find Your Overlap","Browse Together","Shop Together","Wander Together","Your Crew Shapes Your Taste","Find Your Overlap"],Bw=`
  ${Dw}
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #150f34;
    --surface: #1e1944;
    --surface2: #271f50;
    --border: rgba(255,45,150,0.18);
    --text: #f0ebff;
    --muted: rgba(240,235,255,0.58);
    --gold: #ff2d78;
    --amber: #c01255;
    --cream: #f0ebff;
    --teal: #00f0e0;
    --pink: #bf5c95;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'IBM Plex Mono', monospace;
    overflow-x: hidden;
  }

  body::after {
    content: '';
    position: fixed; inset: 0;
    background: repeating-linear-gradient(
      0deg, transparent, transparent 2px,
      rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px
    );
    pointer-events: none; z-index: 9999;
  }

  .app { min-height: 100vh; }
  .screen { display: none; min-height: 100vh; }
  .screen.active { display: flex; }

  /* ── LANDING ── */
  .landing {
    flex-direction: column; align-items: center;
    justify-content: center; text-align: center;
    padding: 40px 20px; position: relative; overflow: hidden;
  }
  .landing-bg {
    position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 70% 50% at 50% 60%, rgba(255,45,120,0.14) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 20% 20%, rgba(0,240,224,0.10) 0%, transparent 60%);
  }
  .grid-floor {
    position: absolute; bottom: 0; left: 0; right: 0; height: 45%;
    background-image:
      linear-gradient(rgba(255,45,120,0.18) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,45,120,0.18) 1px, transparent 1px);
    background-size: 60px 60px;
    transform: perspective(400px) rotateX(60deg);
    transform-origin: bottom; pointer-events: none;
  }
  .wordmark { position: relative; z-index: 2; }
  .wm-top {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(64px,16vw,160px); letter-spacing: 0.08em; line-height: 0.85;
    color: var(--gold);
    text-shadow: 0 0 40px rgba(255,45,120,0.7), 0 0 80px rgba(255,45,120,0.3), -4px 4px 0 rgba(0,240,224,0.7);
    animation: glitchIn 0.8s ease both;
  }
  .wm-bot {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(64px,16vw,160px); letter-spacing: 0.08em; line-height: 0.85;
    color: var(--cream); text-shadow: 4px 4px 0 rgba(0,0,0,0.5);
    animation: glitchIn 0.8s 0.1s ease both;
  }
  .wm-sub {
    font-size: clamp(10px,1.5vw,13px); letter-spacing: 0.5em;
    color: var(--gold); text-transform: uppercase; margin-top: 8px; opacity: 0.7;
    animation: fadeUp 1s 0.3s ease both;
  }
  .slogan { margin-top: 32px; position: relative; z-index: 2; animation: fadeUp 1s 0.4s ease both; }
  .slogan-line {
    font-family: 'Crimson Pro', serif; font-size: clamp(16px,3vw,26px);
    font-weight: 300; font-style: italic; color: rgba(240,235,255,0.6); line-height: 1.8;
  }
  .slogan-line span { color: var(--gold); font-style: normal; font-weight: 400; }
  .landing-btns {
    display: flex; flex-direction: column; align-items: center; gap: 12px;
    margin-top: 48px; position: relative; z-index: 2; animation: fadeUp 1s 0.5s ease both;
  }
  .ticker {
    position: absolute; bottom: 0; left: 0; right: 0; overflow: hidden;
    border-top: 1px solid var(--border); padding: 10px 0; z-index: 2;
  }
  .ticker-inner { display: flex; gap: 64px; animation: ticker 20s linear infinite; white-space: nowrap; }
  .ticker-item { font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--muted); flex-shrink: 0; }
  .ticker-item span { color: var(--gold); margin-right: 8px; }
  @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* ── BUTTONS ── */
  .btn-gold {
    padding: 16px 56px; background: var(--gold); border: none; color: var(--bg);
    font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 500;
    letter-spacing: 0.3em; text-transform: uppercase; cursor: pointer;
    transition: all 0.2s; box-shadow: 0 0 30px rgba(255,45,120,0.3), 4px 4px 0 rgba(192,18,85,0.5);
  }
  .btn-gold:hover { transform: translate(-2px,-2px); box-shadow: 0 0 40px rgba(255,45,120,0.5), 6px 6px 0 rgba(192,18,85,0.5); }
  .btn-ghost {
    padding: 14px 56px; background: transparent; border: 1px solid rgba(240,235,255,0.2);
    color: var(--muted); font-family: 'IBM Plex Mono', monospace; font-size: 11px;
    letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; transition: all 0.2s;
  }
  .btn-ghost:hover { border-color: var(--gold); color: var(--gold); }
  .share-taste-link { background: none; border: none; cursor: pointer; font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(240,235,255,0.35); padding: 6px 0; transition: color 0.2s; }
  .share-taste-link:hover { color: var(--gold); }

  /* ── ONBOARDING ── */
  .onboarding {
    flex-direction: column; align-items: center;
    justify-content: center; padding: 40px 20px; position: relative;
  }
  .ob-header { text-align: center; margin-bottom: 36px; animation: fadeUp 0.6s ease both; }
  .ob-eyebrow { font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; }
  .ob-title {
    font-family: 'Bebas Neue', sans-serif; font-size: clamp(32px,8vw,64px);
    letter-spacing: 0.05em; color: var(--cream); line-height: 1;
  }
  .ob-sub { font-family: 'Crimson Pro', serif; font-size: 18px; font-style: italic; color: var(--muted); margin-top: 8px; }

  .progress-track { display: flex; gap: 6px; margin-top: 16px; justify-content: center; }
  .pdot { width: 24px; height: 3px; background: var(--border); transition: all 0.3s; }
  .pdot.done { background: var(--gold); }
  .pdot.now  { background: var(--amber); }

  /* Swipe cards */
  .swipe-wrap { position: relative; width: min(340px,88vw); height: 440px; }
  .swipe-card {
    position: absolute; inset: 0; overflow: hidden; cursor: grab; user-select: none;
    box-shadow: 0 30px 60px rgba(0,0,0,0.7), 6px 6px 0 rgba(255,45,120,0.15);
    border: 1px solid var(--border);
  }
  .swipe-card:active { cursor: grabbing; }
  .card-inner {
    width: 100%; height: 100%; position: relative; overflow: hidden;
    display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding: 32px;
  }
  .card-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
  .card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.88) 30%, rgba(0,0,0,0.15) 100%); }
  .card-content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; width: 100%; }
  .card-lbl { font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 6px; }
  .card-name {
    font-family: 'Bebas Neue', sans-serif; font-size: 34px; letter-spacing: 0.05em;
    color: white; text-align: center; text-shadow: 0 2px 20px rgba(0,0,0,0.8);
  }
  .card-tags { display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; justify-content: center; }
  .card-tag { font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.15); padding: 3px 10px; }
  .swipe-btns { display: flex; gap: 40px; margin-top: 32px; animation: fadeUp 0.6s 0.2s ease both; }
  .swipe-btn {
    width: 64px; height: 64px; border: 1px solid var(--border); background: var(--surface);
    display: flex; align-items: center; justify-content: center; cursor: pointer;
    font-size: 22px; transition: all 0.2s;
  }
  .swipe-btn.no:hover  { border-color: var(--pink);  background: rgba(191,92,149,0.1); transform: translate(-2px,-2px); box-shadow: 4px 4px 0 rgba(191,92,149,0.2); }
  .swipe-btn.yes:hover { border-color: var(--gold);  background: rgba(255,45,120,0.1);  transform: translate(-2px,-2px); box-shadow: 4px 4px 0 rgba(255,45,120,0.2); }
  .swipe-hint { font-size: 10px; color: var(--muted); letter-spacing: 0.2em; text-transform: uppercase; margin-top: 14px; }

  /* OR divider + upload CTA */
  .or-divider {
    display: flex; align-items: center; gap: 16px;
    margin-top: 28px; width: min(340px,88vw); animation: fadeUp 0.6s 0.3s ease both;
  }
  .or-line { flex: 1; height: 1px; background: var(--border); }
  .or-text { font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--muted); }
  .upload-cta {
    margin-top: 16px; animation: fadeUp 0.6s 0.4s ease both;
    width: min(340px,88vw); text-align: center;
  }
  .upload-cta-btn {
    width: 100%; padding: 14px; background: transparent;
    border: 1px dashed rgba(255,45,120,0.3); color: var(--gold);
    font-family: 'IBM Plex Mono', monospace; font-size: 11px;
    letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer;
    transition: all 0.2s;
  }
  .upload-cta-btn:hover { border-color: var(--gold); background: rgba(255,45,120,0.05); }

  @keyframes aLeft  { to { transform: translateX(-140%) rotate(-18deg); opacity: 0; } }
  @keyframes aRight { to { transform: translateX(140%)  rotate(18deg);  opacity: 0; } }
  .go-left  { animation: aLeft  0.38s ease forwards !important; }
  .go-right { animation: aRight 0.38s ease forwards !important; }

  /* ── UPLOAD SCREEN ── */
  .upload-screen {
    flex-direction: column; align-items: center;
    justify-content: center; padding: 60px 20px; position: relative;
  }
  .upload-bg {
    position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,45,120,0.05) 0%, transparent 70%);
  }

  .drop-zone {
    position: relative; z-index: 1;
    width: min(560px,90vw); min-height: 280px;
    border: 2px dashed rgba(255,45,120,0.25);
    display: flex; flex-direction: column; align-items: center;
    justify-content: center; padding: 40px; text-align: center;
    cursor: pointer; transition: all 0.25s; background: var(--surface);
  }
  .drop-zone.over { border-color: var(--gold); background: rgba(255,45,120,0.05); }
  .drop-zone input[type=file] { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
  .drop-icon { font-size: 48px; margin-bottom: 16px; opacity: 0.6; }
  .drop-title {
    font-family: 'Bebas Neue', sans-serif; font-size: 28px; letter-spacing: 0.05em; color: var(--cream);
  }
  .drop-sub { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-top: 8px; }
  .drop-hint { font-size: 10px; color: rgba(240,235,255,0.25); margin-top: 12px; letter-spacing: 0.1em; }

  .preview-grid {
    display: flex; gap: 12px; flex-wrap: wrap;
    justify-content: center; margin-top: 24px;
    width: min(560px,90vw); position: relative; z-index: 1;
  }
  .preview-thumb {
    width: 100px; height: 100px; object-fit: cover;
    border: 2px solid var(--border); transition: border-color 0.2s;
  }
  .preview-thumb:hover { border-color: var(--gold); }

  .analyse-btn-wrap { margin-top: 28px; position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 12px; }

  .analysing-bar {
    width: min(340px,80vw); height: 2px; background: var(--border);
    overflow: hidden; margin-top: 8px;
  }
  .analysing-fill {
    height: 100%; background: var(--gold);
    animation: analyseScroll 1.4s ease infinite;
  }
  @keyframes analyseScroll {
    0%   { width: 0%;   margin-left: 0%; }
    50%  { width: 60%;  margin-left: 20%; }
    100% { width: 0%;   margin-left: 100%; }
  }
  .analysing-label { font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-top: 10px; }

  /* ── TASTE GRAPH ── */
  .taste-screen {
    flex-direction: column; align-items: center;
    padding: 60px 20px 40px; position: relative; overflow: hidden;
  }
  .taste-bg {
    position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,45,120,0.05) 0%, transparent 70%);
  }
  .eyebrow { font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase; color: var(--gold); text-align: center; position: relative; animation: fadeUp 0.5s ease both; }
  .sec-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(32px,7vw,64px); letter-spacing: 0.05em; text-align: center; color: var(--cream); position: relative; margin-top: 8px; animation: fadeUp 0.5s 0.1s ease both; }
  .sec-sub { font-family: 'Crimson Pro', serif; font-size: 18px; font-style: italic; color: var(--muted); text-align: center; position: relative; margin-top: 6px; animation: fadeUp 0.5s 0.15s ease both; }

  .taste-layout { display: flex; align-items: flex-start; gap: 48px; width: 100%; max-width: 960px; margin-top: 20px; }
  .taste-left { display: flex; flex-direction: column; align-items: center; flex: 1 1 auto; }
  .taste-right { display: flex; flex-direction: column; align-items: center; flex: 0 0 300px; padding-top: 60px; }
  .constellation { position: relative; width: min(480px,88vw); height: min(480px,88vw); margin: 0 auto; }

  /* AI summary card */
  .ai-summary {
    position: relative; z-index: 1;
    width: min(520px,90vw); margin: 0 auto 24px;
    padding: 24px 28px; border: 1px solid rgba(255,45,120,0.2);
    background: var(--surface); animation: fadeUp 0.6s 0.3s ease both;
  }
  .ai-summary::before {
    content: '✦ AI ANALYSIS';
    font-size: 8px; letter-spacing: 0.3em; color: var(--gold);
    display: block; margin-bottom: 12px;
  }
  .ai-palette { display: flex; gap: 8px; margin-bottom: 14px; }
  .palette-swatch { width: 28px; height: 28px; border: 1px solid rgba(255,255,255,0.1); }
  .ai-text { font-family: 'Crimson Pro', serif; font-size: 17px; font-style: italic; color: rgba(240,235,255,0.75); line-height: 1.6; }

  .taste-chips { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 520px; position: relative; animation: fadeUp 0.6s 0.4s ease both; }
  .taste-chip { padding: 7px 18px; border: 1px solid; font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; font-family: 'IBM Plex Mono', monospace; animation: popIn 0.3s ease both; }

  .compat-card {
    margin: 24px auto; text-align: center; padding: 28px 48px;
    border: 1px solid var(--border); background: var(--surface);
    max-width: 380px; position: relative;
    box-shadow: 6px 6px 0 rgba(255,45,120,0.08); animation: fadeUp 0.6s 0.5s ease both;
  }
  .compat-card::before {
    content: '✦ YOUR RESULTS: ✦';
    position: absolute; top: -8px; left: 50%; transform: translateX(-50%);
    font-size: 8px; letter-spacing: 0.25em; color: var(--gold);
    background: var(--surface); padding: 0 12px; white-space: nowrap;
  }
  .compat-num {
    font-family: 'Bebas Neue', sans-serif; font-size: 88px; color: var(--gold); line-height: 1;
    text-shadow: 0 0 40px rgba(255,45,120,0.6), 0 0 80px rgba(255,45,120,0.25), -4px 4px 0 rgba(0,240,224,0.6); letter-spacing: 0.05em;
  }
  .compat-lbl { font-family: 'Crimson Pro', serif; font-size: 20px; font-style: italic; color: rgba(240,235,255,0.6); margin-top: 4px; }

  /* ── SHOP SCREEN ── */
  .shop-screen { flex-direction: column; }
  .shop-hdr {
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 28px; border-bottom: 1px solid var(--border);
    background: var(--bg); position: sticky; top: 0; z-index: 100; gap: 16px;
  }
  .shop-wm { display: flex; flex-direction: column; line-height: 1; }
  .shop-wm-top { font-family: 'Bebas Neue', sans-serif; font-size: 22px; letter-spacing: 0.12em; color: var(--gold); text-shadow: 0 0 20px rgba(255,45,120,0.7), 0 0 40px rgba(255,45,120,0.3); }
  .shop-wm-bot { font-family: 'Bebas Neue', sans-serif; font-size: 22px; letter-spacing: 0.12em; color: var(--cream); margin-top: -4px; }
  .session-bar {
    display: flex; align-items: center; gap: 14px; padding: 8px 20px;
    border: 1px solid var(--border); background: var(--surface);
    font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted);
  }
  .live-pip { width: 6px; height: 6px; border-radius: 50%; background: var(--teal); box-shadow: 0 0 8px var(--teal); animation: pip 2s ease infinite; }
  @keyframes pip { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.4;transform:scale(0.7);} }
  .crew-av { width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-family: 'Bebas Neue', sans-serif; font-size: 14px; border: 2px solid; }

  .shop-layout { display: grid; grid-template-columns: 1fr 320px; height: calc(100vh - 65px); overflow: hidden; }
  .products-area { padding: 28px; overflow-y: auto; }
  .products-hdr { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 28px; padding-bottom: 16px; border-bottom: 1px solid var(--border); }
  .products-title { font-family: 'Bebas Neue', sans-serif; font-size: 36px; letter-spacing: 0.05em; color: var(--cream); }
  .products-count { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); }
  .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px,1fr)); gap: 16px; }

  .p-card {
    background: var(--surface); border: 1px solid var(--border); cursor: pointer;
    transition: all 0.25s; position: relative; overflow: hidden;
    animation: fadeUp 0.4s ease both;
  }
  .p-card:hover { border-color: rgba(255,45,120,0.3); transform: translate(-2px,-2px); box-shadow: 4px 4px 0 rgba(255,45,120,0.1); }
  .p-card.match { border-color: var(--gold) !important; box-shadow: 0 0 24px rgba(255,45,120,0.15), 4px 4px 0 rgba(255,45,120,0.2) !important; }
  .match-badge { position: absolute; top:0; left:0; right:0; background: var(--gold); color: var(--bg); font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; padding: 5px 10px; font-family: 'IBM Plex Mono', monospace; font-weight: 500; z-index: 2; }
  .p-img { width: 100%; aspect-ratio: 3/4; object-fit: cover; display: block; }
  .p-img-wrap { position: relative; }
  .p-reactions { position: absolute; bottom: 8px; right: 8px; display: flex; gap: 4px; }
  .react-chip { background: rgba(8,6,26,0.9); border: 1px solid var(--border); padding: 3px 8px; font-size: 11px; animation: popIn 0.3s ease both; }
  .p-info { padding: 14px; }
  .p-brand { font-size: 8px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; }
  .p-name { font-family: 'Crimson Pro', serif; font-size: 18px; font-weight: 400; color: var(--cream); }
  .p-price { font-size: 11px; color: var(--muted); margin-top: 4px; }

  /* ── SIDEBAR ── */
  .sidebar { border-left: 1px solid var(--border); display: flex; flex-direction: column; overflow: hidden; background: var(--surface); }
  .stabs { display: flex; border-bottom: 1px solid var(--border); }
  .stab { flex: 1; padding: 14px 8px; font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); cursor: pointer; border: none; background: transparent; transition: all 0.2s; border-bottom: 2px solid transparent; font-family: 'IBM Plex Mono', monospace; }
  .stab.on { color: var(--gold); border-bottom-color: var(--gold); }
  .stab.teal.on { color: var(--teal); border-bottom-color: var(--teal); }
  .wishlist-empty { text-align:center; color:var(--muted); font-size:11px; padding:32px 16px; line-height:1.6; }
  .wishlist-list { display:flex; flex-direction:column; gap:10px; }
  .wishlist-item { display:flex; align-items:center; gap:10px; padding:8px; border:1px solid var(--border); cursor:pointer; transition:border-color 0.2s; }
  .wishlist-item:hover { border-color:var(--teal); }
  .wishlist-img { width:44px; height:44px; object-fit:cover; flex-shrink:0; }
  .wishlist-info { flex:1; min-width:0; }
  .wishlist-name { font-size:11px; color:var(--cream); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .wishlist-price { font-size:10px; margin-top:2px; }
  .wishlist-remove { background:none; border:none; color:var(--muted); cursor:pointer; font-size:10px; padding:4px; flex-shrink:0; }
  .wishlist-remove:hover { color:var(--gold); }
  .sidebar-body { flex: 1; overflow-y: auto; padding: 20px; }
  .s-section { margin-bottom: 28px; }
  .s-eye { font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; display: flex; align-items: center; gap: 10px; }
  .s-eye::after { content: ''; flex: 1; height: 1px; background: var(--border); }
  .mini-const { width: 100%; height: 150px; margin-bottom: 16px; }
  .inline-compat { display: flex; align-items: center; justify-content: space-between; padding: 16px; border: 1px solid var(--border); background: var(--surface2); margin-bottom: 16px; }
  .ic-num { font-family: 'Bebas Neue', sans-serif; font-size: 48px; color: var(--gold); letter-spacing: 0.05em; text-shadow: 0 0 20px rgba(255,45,120,0.6), -3px 3px 0 rgba(0,240,224,0.6); line-height: 1; }
  .ic-lbl { font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); }
  .ic-desc { font-family: 'Crimson Pro', serif; font-size: 16px; font-style: italic; color: var(--cream); margin-top: 2px; }
  .gift-card { padding: 16px; border: 1px solid rgba(255,45,120,0.25); background: rgba(255,45,120,0.04); }
  .gift-card::before { content: '🎁 GIFT UNLOCK'; font-size: 8px; letter-spacing: 0.2em; color: var(--gold); display: block; margin-bottom: 10px; }
  .gift-text { font-family: 'Crimson Pro', serif; font-size: 15px; font-style: italic; color: rgba(240,235,255,0.7); line-height: 1.6; }
  .gift-text strong { color: var(--gold); font-style: normal; }
  .shared-chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .shared-chip { font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; border: 1px solid var(--gold); color: var(--gold); padding: 5px 12px; font-family: 'IBM Plex Mono', monospace; }

  /* ── CHAT ── */
  .chat-wrap { display: flex; flex-direction: column; height: 100%; min-height: 0; }
  .chat-msgs { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; padding-bottom: 4px; }
  .chat-msg { display: flex; gap: 8px; align-items: flex-start; }
  .chat-msg.mine { flex-direction: row-reverse; }
  .chat-av { width: 22px; height: 22px; border: 1.5px solid; display: flex; align-items: center; justify-content: center; font-family: 'Bebas Neue', sans-serif; font-size: 12px; flex-shrink: 0; }
  .chat-bub { max-width: 82%; padding: 9px 13px; border: 1px solid var(--border); background: var(--surface2); font-size: 12px; line-height: 1.5; color: rgba(240,235,255,0.75); }
  .chat-msg.mine .chat-bub { background: rgba(255,45,120,0.06); border-color: rgba(255,45,120,0.2); }
  .chat-row { display: flex; gap: 8px; margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--border); }
  .chat-in { flex: 1; background: var(--surface2); border: 1px solid var(--border); color: var(--text); font-family: 'IBM Plex Mono', monospace; font-size: 11px; padding: 9px 12px; outline: none; transition: border-color 0.2s; }
  .chat-in:focus { border-color: rgba(255,45,120,0.3); }
  .chat-in::placeholder { color: var(--muted); }
  .chat-send { padding: 9px 14px; background: var(--gold); border: none; color: var(--bg); font-family: 'IBM Plex Mono', monospace; font-size: 13px; cursor: pointer; font-weight: 500; transition: all 0.2s; }
  .chat-send:hover { background: var(--amber); }

  /* ── FRIEND CURSOR ── */
  .friend-cursor {
    position: fixed; pointer-events: none; z-index: 998;
    transition: left 1.8s cubic-bezier(0.25,0.46,0.45,0.94), top 1.8s cubic-bezier(0.25,0.46,0.45,0.94);
    display: flex; align-items: center; gap: 6px;
  }
  .cursor-pip { width: 10px; height: 10px; background: var(--teal); box-shadow: 0 0 14px var(--teal); clip-path: polygon(50% 0%,0% 100%,100% 100%); }
  .cursor-name { font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--teal); background: rgba(8,6,26,0.85); padding: 3px 8px; border: 1px solid rgba(0,240,224,0.3); white-space: nowrap; }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
  @keyframes popIn  { from{opacity:0;transform:scale(0.75);} to{opacity:1;transform:scale(1);} }
  @keyframes glitchIn { 0%{opacity:0;transform:translateY(30px) skewX(-5deg);} 60%{opacity:1;transform:translateY(-4px) skewX(1deg);} 100%{opacity:1;transform:translateY(0) skewX(0);} }
  @keyframes nodeIn { from{opacity:0;} to{opacity:1;} }

  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); }

  @media (max-width: 768px) {
    .shop-layout { grid-template-columns: 1fr; }
    .sidebar { display: none; }
  }

  /* ── FLOATING TASTE THUMBNAILS (pinned to constellation nodes) ── */
  .constellation-overlay { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; }
  .tp-floating { position:absolute; transform:translate(-50%,-50%); cursor:pointer; z-index:10; animation:popIn 0.4s ease both; }
  .tp-floating:hover { z-index:20; }
  .tp-float-img {
    width:52px; height:52px; border-radius:50%; object-fit:cover; display:block;
    border:2px solid rgba(255,45,120,0.55);
    box-shadow:0 0 14px rgba(255,45,120,0.18), 0 3px 14px rgba(0,0,0,0.65);
    background:var(--surface2); transition:all 0.25s;
  }
  .tp-floating:hover .tp-float-img {
    transform:scale(1.18); border-color:var(--gold);
    box-shadow:0 0 24px rgba(255,45,120,0.4), 0 4px 20px rgba(0,0,0,0.7);
  }
  .tp-float-tooltip {
    position:absolute; bottom:calc(100% + 8px); left:50%; transform:translateX(-50%);
    background:var(--surface); border:1px solid rgba(255,45,120,0.2);
    padding:6px 10px; white-space:nowrap; pointer-events:none;
    opacity:0; transition:opacity 0.18s;
    box-shadow:0 4px 16px rgba(0,0,0,0.5);
  }
  .tp-float-tooltip div:first-child { font-size:9px; letter-spacing:0.15em; text-transform:uppercase; color:var(--cream); }
  .tp-float-tooltip div:last-child  { font-size:10px; color:var(--gold); margin-top:3px; }
  .tp-floating:hover .tp-float-tooltip { opacity:1; }

  /* ── PRODUCT OVERLAY ── */
  .prod-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:1000; display:flex; align-items:center; justify-content:center; padding:20px; animation:fadeIn 0.2s ease; }
  @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
  .prod-overlay-inner { position:relative; width:100%; max-width:720px; }
  .prod-drawer { width:100%; background:var(--surface); border:1px solid rgba(255,45,120,0.2); max-height:85vh; overflow-y:auto; animation:fadeUp 0.28s cubic-bezier(0.22,1,0.36,1); }
  .prod-drawer-inner { display:grid; grid-template-columns:1fr 1fr; }
  @media (max-width:600px) { .prod-drawer-inner { grid-template-columns:1fr; } }
  .prod-big-img { width:100%; height:100%; min-height:320px; object-fit:cover; display:block; }
  .prod-details { padding:36px 32px; display:flex; flex-direction:column; gap:12px; }
  .prod-eyebrow { font-size:8px; letter-spacing:0.3em; text-transform:uppercase; color:var(--gold); }
  .prod-title { font-family:'Bebas Neue',sans-serif; font-size:34px; letter-spacing:0.04em; color:var(--cream); line-height:1.05; }
  .prod-shop-name { font-family:'Crimson Pro',serif; font-size:16px; font-style:italic; color:rgba(240,235,255,0.5); }
  .prod-price-lg { font-family:'Bebas Neue',sans-serif; font-size:30px; color:var(--gold); letter-spacing:0.05em; }
  .prod-tags-row { display:flex; flex-wrap:wrap; gap:6px; }
  .prod-tag { font-size:8px; letter-spacing:0.2em; text-transform:uppercase; border:1px solid var(--border); color:var(--muted); padding:4px 10px; }
  .prod-actions { display:flex; flex-direction:column; gap:8px; margin-top:auto; padding-top:16px; }
  .prod-save-btn { padding:12px; background:transparent; border:1px solid var(--border); color:var(--muted); font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; cursor:pointer; transition:all 0.2s; }
  .prod-save-btn:hover { border-color:var(--gold); color:var(--gold); }
  .prod-bag-btn { padding:14px; background:var(--gold); border:none; color:var(--bg); font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.25em; text-transform:uppercase; cursor:pointer; transition:all 0.2s; font-weight:500; }
  .prod-bag-btn:hover { background:var(--amber); }
  .prod-bag-btn.added { background:var(--teal); pointer-events:none; }
  .prod-crew-btn { padding:11px; background:transparent; border:1px solid rgba(0,240,224,0.3); color:var(--teal); font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; cursor:pointer; transition:all 0.2s; }
  .prod-crew-btn:hover { background:rgba(0,240,224,0.08); border-color:var(--teal); }
  .prod-close { position:absolute; top:14px; right:14px; background:var(--surface2); border:1px solid var(--border); color:var(--muted); width:34px; height:34px; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:16px; transition:all 0.2s; z-index:2; }
  .prod-close:hover { border-color:var(--gold); color:var(--gold); }

  /* ── PRODUCT TABS (shop screen) ── */
  .ptabs { display:flex; border-bottom:1px solid var(--border); margin-bottom:20px; }
  .ptab { padding:10px 20px; font-size:9px; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); background:transparent; border:none; border-bottom:2px solid transparent; cursor:pointer; font-family:'IBM Plex Mono',monospace; transition:all 0.2s; }
  .ptab.on { color:var(--gold); border-bottom-color:var(--gold); }
  .ptab.teal.on { color:var(--teal); border-bottom-color:var(--teal); }
  .sm-badge { position:absolute; top:0; left:0; right:0; background:var(--teal); color:var(--bg); font-size:7px; letter-spacing:0.2em; text-transform:uppercase; padding:5px 10px; font-family:'IBM Plex Mono',monospace; font-weight:500; z-index:2; }

  /* ── CREW DISCOVERY SIDEBAR ── */
  .crew-member-card { display:flex; align-items:center; gap:12px; padding:14px; border:1px solid var(--border); background:var(--surface2); margin-bottom:10px; cursor:pointer; transition:all 0.25s; position:relative; overflow:hidden; }
  .crew-member-card:hover { border-color:rgba(255,45,120,0.25); transform:translate(-1px,-1px); }
  .crew-member-card.active-crew { border-color:var(--teal); box-shadow:0 0 16px rgba(0,240,224,0.1); }
  .crew-av-lg { width:40px; height:40px; border:2px solid; display:flex; align-items:center; justify-content:center; font-family:'Bebas Neue',sans-serif; font-size:20px; flex-shrink:0; }
  .crew-info { flex:1; min-width:0; }
  .crew-name { font-family:'Bebas Neue',sans-serif; font-size:18px; letter-spacing:0.05em; color:var(--cream); line-height:1; }
  .crew-aesthetic { font-size:8px; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); margin-top:3px; }
  .crew-compat-row { display:flex; align-items:center; gap:8px; margin-top:6px; }
  .crew-compat-track { flex:1; height:2px; background:var(--border); position:relative; }
  .crew-compat-fill { position:absolute; top:0; left:0; height:100%; transition:width 1s ease; }
  .crew-pct { font-family:'Bebas Neue',sans-serif; font-size:18px; line-height:1; flex-shrink:0; }
  .crew-live-dot { width:6px; height:6px; border-radius:50%; box-shadow:0 0 8px; animation:pip 2s ease infinite; flex-shrink:0; }
  .crew-tags-mini { display:flex; flex-wrap:wrap; gap:5px; margin-top:6px; }
  .crew-tag-mini { font-size:7px; padding:3px 8px; border:1px solid rgba(255,255,255,0.1); color:var(--muted); letter-spacing:0.15em; text-transform:uppercase; }
  .crew-browse-btn { margin-top:8px; width:100%; padding:9px; background:var(--surface); border:1px solid; font-family:'IBM Plex Mono',monospace; font-size:8px; letter-spacing:0.2em; text-transform:uppercase; cursor:pointer; transition:all 0.2s; }
  .crew-browse-btn:hover { opacity:0.8; }
  .crew-find-section { margin-top:16px; padding-top:14px; border-top:1px solid var(--border); }
  .crew-find-desc { font-family:'Crimson Pro',serif; font-size:14px; font-style:italic; color:var(--muted); margin-bottom:12px; line-height:1.5; }
  .crew-find-btn { width:100%; padding:12px; background:transparent; border:1px solid rgba(255,45,120,0.25); color:var(--gold); font-family:'IBM Plex Mono',monospace; font-size:9px; letter-spacing:0.25em; text-transform:uppercase; cursor:pointer; transition:all 0.2s; }
  .crew-find-btn:hover { background:rgba(255,45,120,0.05); border-color:var(--gold); }
  .crew-count-badge { display:inline-flex; align-items:center; gap:6px; padding:4px 12px; border:1px solid rgba(0,240,224,0.3); color:var(--teal); font-size:8px; letter-spacing:0.2em; text-transform:uppercase; margin-top:10px; }
  .crew-count-pip { width:5px; height:5px; border-radius:50%; background:var(--teal); box-shadow:0 0 6px var(--teal); animation:pip 2s ease infinite; }

  /* ── SHOWROOM 3D — cosy boutique ── */
  .sr-overlay {
    position:fixed; inset:0; z-index:500; overflow:hidden;
    background:#f5f0d8;
    perspective:1400px; perspective-origin:50% 38%;
    animation:srFadeIn 0.5s ease both;
  }
  @keyframes srFadeIn { from{opacity:0;} to{opacity:1;} }

  .sr-room {
    position:absolute; inset:0;
    transform-style:preserve-3d;
  }

  /* ── FLOOR — polished light tiles ── */
  .sr-floor {
    position:absolute; bottom:0;
    left:-50vw; width:200vw; height:900px;
    transform-origin:bottom center;
    transform:rotateX(90deg);
    overflow:hidden;
  }
  .sr-floor-grid { position:absolute; inset:0; background-size:80px 80px; }
  .sr-floor-sheen {
    position:absolute; inset:0;
    background:linear-gradient(to top, rgba(240,232,204,0.72) 0%, transparent 55%);
  }
  .sr-floor-spot {
    position:absolute; bottom:0; transform:translateX(-50%);
    width:220px; height:200px; pointer-events:none;
  }

  /* ── CEILING — white with black track lighting ── */
  .sr-ceiling {
    position:absolute; top:0;
    left:-50vw; width:200vw; height:900px;
    transform-origin:top center;
    transform:rotateX(-90deg);
    background:#f7f4e8;
    overflow:hidden;
  }
  .sr-track-rail {
    position:absolute; top:14px; left:5%; right:5%; height:3px;
    background:#1a1a1a; border-radius:2px;
  }
  .sr-light {
    position:absolute; top:0; transform:translateX(-50%);
    display:flex; flex-direction:column; align-items:center;
    pointer-events:none;
  }
  .sr-light-stem { width:2px; height:16px; background:#1a1a1a; }
  .sr-light-bulb { width:9px; height:9px; border-radius:50%; flex-shrink:0; background:#fff9e8; }
  .sr-light-cone {
    width:300px; height:650px; margin-left:-150px; margin-top:-1px;
    clip-path:polygon(44% 0%,56% 0%,100% 100%,0% 100%);
  }

  /* ── SIDE WALLS — warm light grey ── */
  .sr-left-wall {
    position:absolute; top:0; left:0;
    width:900px; height:100vh;
    transform-origin:left center;
    transform:rotateY(90deg);
    background:linear-gradient(170deg,#f2e8c4 0%,#e8d8a8 100%);
    overflow:visible; transform-style:preserve-3d;
  }
  .sr-right-wall {
    position:absolute; top:0; right:0;
    width:900px; height:100vh;
    transform-origin:right center;
    transform:rotateY(-90deg);
    background:linear-gradient(190deg,#f2e8c4 0%,#e8d8a8 100%);
    overflow:visible; transform-style:preserve-3d;
  }
  .sr-left-wall::before, .sr-right-wall::before, .sr-back-wall-face::before {
    content:''; position:absolute; top:0; left:0; right:0; height:5px;
    background:#d8cc98; border-bottom:1px solid #c8bc80;
  }
  .sr-left-wall::after, .sr-right-wall::after, .sr-back-wall-face::after {
    content:''; position:absolute; bottom:0; left:0; right:0; height:5px;
    background:#d8cc98; border-top:1px solid #c8bc80;
  }

  /* ── CLOTHING RAIL (left wall) ── */
  .sr-clothing-rail-bar {
    position:absolute; top:38%; left:70px; right:70px;
    height:4px; background:#1a1a1a; border-radius:2px; z-index:1;
  }
  .sr-clothing-rail-bar::before { content:''; position:absolute; left:-6px; top:-3px; width:10px; height:10px; border-radius:50%; background:#1a1a1a; }
  .sr-clothing-rail-bar::after  { content:''; position:absolute; right:-6px; top:-3px; width:10px; height:10px; border-radius:50%; background:#1a1a1a; }

  /* ── DISPLAY SHELF (right wall) ── */
  .sr-wall-shelf-bar {
    position:absolute; top:46%; left:60px; right:60px;
    height:5px; background:#b8b5ae; border-radius:1px; z-index:1;
    box-shadow:0 3px 8px rgba(0,0,0,0.14);
  }
  .sr-shelf-bracket {
    position:absolute; top:0; width:14px; height:20px;
    border-right:3px solid #999793; border-bottom:3px solid #999793;
  }
  .sr-shelf-bracket-l { left:44px; }
  .sr-shelf-bracket-r { right:44px; }

  /* ── RACK SUPPORT POLES (left wall) ── */
  .sr-rack-pole {
    position:absolute; top:38%; width:5px; height:57%;
    background:linear-gradient(to right,#1c1c1c,#4a4a4a,#1c1c1c);
    border-radius:2px; z-index:2;
    animation:srFadeIn 0.5s 0.15s ease both;
  }
  .sr-rack-pole::before {
    content:''; position:absolute; bottom:8px; left:-11px;
    width:27px; height:5px; background:#1c1c1c; border-radius:2px;
  }
  .sr-rack-pole::after {
    content:''; position:absolute; bottom:0; left:-18px;
    width:41px; height:4px; background:#111; border-radius:3px;
  }

  /* ── FITTING ROOM (right wall, back corner) ── */
  .sr-fitting-room {
    position:absolute; left:28px; bottom:0; width:200px; height:80%;
    z-index:3; animation:srFadeIn 0.6s 0.2s ease both;
  }
  .sr-fitting-room-sign {
    position:absolute; top:-26px; left:0; right:0;
    display:flex; align-items:center; justify-content:center; gap:6px;
    font-family:'IBM Plex Mono',monospace; font-size:6.5px;
    letter-spacing:0.32em; text-transform:uppercase; color:#888;
    padding:4px 8px; border:1px solid #d0c890; background:#f5f0d8;
    white-space:nowrap;
  }
  .sr-fitting-curtain-rod {
    position:absolute; top:0; left:0; right:0; height:4px;
    background:linear-gradient(to right,#1a1a1a,#555,#1a1a1a); border-radius:2px;
  }
  .sr-fitting-curtain-rod::before {
    content:''; position:absolute; left:-5px; top:-4px; width:13px; height:13px;
    border-radius:50%; background:#1a1a1a;
  }
  .sr-fitting-curtain-rod::after {
    content:''; position:absolute; right:-5px; top:-4px; width:13px; height:13px;
    border-radius:50%; background:#1a1a1a;
  }
  .sr-fitting-curtain {
    position:absolute; top:4px; left:0; width:62%; bottom:0;
    background:
      repeating-linear-gradient(to right,
        rgba(255,255,255,0.22) 0px, transparent 3px,
        rgba(0,0,0,0.06) 6px, transparent 11px,
        rgba(255,255,255,0.15) 14px, transparent 19px
      ),
      linear-gradient(170deg,#ddd6c8 0%,#c8bfb0 55%,#d6cfc2 100%);
    border-left:3px solid #b0a898; border-bottom:3px solid #a8a090;
  }
  .sr-fitting-room-wall {
    position:absolute; top:4px; left:0; right:0; bottom:0;
    border-left:3px solid #c0bdb6; border-right:3px solid #c0bdb6;
    border-bottom:3px solid #c0bdb6;
  }
  /* ── FULL-LENGTH MIRROR (beside fitting room) ── */
  .sr-fitting-mirror {
    position:absolute; left:238px; top:22%; width:48px; bottom:12%;
    background:linear-gradient(145deg,
      rgba(255,255,255,0.88) 0%, rgba(215,225,238,0.7) 35%,
      rgba(245,250,255,0.82) 60%, rgba(200,215,230,0.65) 85%,
      rgba(255,255,255,0.8) 100%
    );
    border:3px solid #1a1a1a;
    box-shadow:0 0 0 1px rgba(255,255,255,0.4) inset, 0 5px 14px rgba(0,0,0,0.18);
    z-index:2; animation:srFadeIn 0.6s 0.25s ease both;
  }
  .sr-fitting-mirror::before {
    content:''; position:absolute; top:8px; left:6px; width:7px; height:52%;
    background:linear-gradient(to right,rgba(255,255,255,0.85),transparent);
    border-radius:3px;
  }

  /* ── COUCH (back wall) ── */
  .sr-couch {
    position:absolute; bottom:7%; left:50%; transform:translateX(-50%);
    width:320px; animation:fadeUp 0.85s 0.45s ease both;
  }
  .sr-couch-inner { position:relative; }
  .sr-couch-arm {
    position:absolute; top:0; width:26px; height:118px;
    background:linear-gradient(to right,#9a8a60,#b8a878,#a09068);
    border-radius:5px; box-shadow:2px 4px 10px rgba(0,0,0,0.16); z-index:2;
  }
  .sr-couch-arm-l { left:0; border-radius:6px 4px 4px 6px; }
  .sr-couch-arm-r { right:0; border-radius:4px 6px 6px 4px; }
  .sr-couch-body { margin:0 26px; display:flex; flex-direction:column; }
  .sr-couch-back {
    display:flex; gap:4px; padding:8px 4px 0; height:66px;
    border-radius:4px 4px 0 0;
    background:linear-gradient(to bottom,#c8b888 0%,#b0a070 100%);
  }
  .sr-couch-back-cushion {
    flex:1; height:100%;
    background:linear-gradient(135deg,#d8c898 0%,#c0b078 65%,#b0a068 100%);
    border-radius:3px 3px 0 0;
    box-shadow:inset 0 3px 8px rgba(255,255,255,0.2);
  }
  .sr-couch-seat {
    display:flex; gap:4px; padding:4px; height:52px;
    background:linear-gradient(to bottom,#b8a878 0%,#a09060 100%);
    box-shadow:0 10px 24px rgba(0,0,0,0.18),0 4px 8px rgba(0,0,0,0.1);
  }
  .sr-couch-seat-cushion {
    flex:1; height:100%;
    background:linear-gradient(135deg,#c8b888 0%,#b0a068 60%,#a09060 100%);
    border-radius:2px;
    box-shadow:inset 0 -3px 6px rgba(0,0,0,0.1);
  }
  .sr-couch-legs { display:flex; justify-content:space-between; padding:0 36px; }
  .sr-couch-leg { width:9px; height:13px; background:#7a6848; border-radius:0 0 3px 3px; }
  .sr-pillow {
    position:absolute; top:14px; width:30px; height:28px;
    border-radius:4px; box-shadow:1px 2px 6px rgba(0,0,0,0.14);
    border:1px solid rgba(255,255,255,0.35);
  }
  /* ── SIDE TABLE (beside couch) ── */
  .sr-side-table {
    position:absolute; bottom:7%; left:calc(50% + 194px);
    width:58px; animation:fadeUp 0.85s 0.5s ease both;
  }
  .sr-side-table-top {
    height:6px; width:64px; margin-left:-3px;
    background:linear-gradient(to right,#b8a868,#d0bc88,#b8a868);
    border-radius:50%; box-shadow:0 2px 8px rgba(0,0,0,0.16);
  }
  .sr-side-table-stem { width:5px; height:40px; background:#a09060; margin:0 auto; border-radius:1px; }
  .sr-side-table-base { height:4px; width:40px; background:#9a8858; margin:0 auto; border-radius:50%; }
  .sr-table-plant {
    width:20px; height:24px;
    background:radial-gradient(ellipse at 40% 25%,#8abd50,#3a7020);
    border-radius:55% 55% 35% 35%; margin:0 auto 2px;
  }
  /* ── FLOOR RUG ── */
  .sr-floor-rug {
    position:absolute; bottom:18%; left:20%; width:58%; height:32%;
    border-radius:6px;
    background:linear-gradient(135deg,rgba(172,148,100,0.34) 0%,rgba(152,128,78,0.26) 50%,rgba(172,148,100,0.3) 100%);
    border:2px solid rgba(152,126,76,0.3);
    box-shadow:inset 0 0 22px rgba(0,0,0,0.04);
  }
  /* ── 3D COUCH DEPTH FACES ── */
  .sr-couch-seat-top {
    position:absolute; top:0; left:0; right:0; height:44px;
    background:linear-gradient(to top,#c8b888 0%,#b8a870 100%);
    transform-origin:top center; transform:rotateX(-90deg);
  }
  .sr-couch-back-top {
    position:absolute; top:0; left:0; right:0; height:18px;
    background:linear-gradient(to top,#c0b07a 0%,#b0a068 100%);
    transform-origin:top center; transform:rotateX(-90deg);
    border-radius:4px 4px 0 0;
  }
  .sr-couch-arm-top {
    position:absolute; top:0; left:0; right:0; height:36px;
    background:linear-gradient(to top,#b0a068,#c0b078);
    transform-origin:top center; transform:rotateX(-90deg);
    border-radius:5px 5px 0 0;
  }

  /* ── BACK WALL ── */
  .sr-back-wall-face {
    position:absolute; top:0; left:0;
    width:100vw; height:100vh;
    transform:translateZ(-900px);
    background:#ede0b0;
    overflow:visible; transform-style:preserve-3d;
    display:flex; flex-direction:column;
    align-items:center; padding-top:48px;
  }
  .sr-back-atm { position:absolute; inset:0; pointer-events:none; }
  .sr-store-sign {
    position:relative; display:flex; flex-direction:column; align-items:center;
    gap:4px; margin-bottom:14px;
    animation:fadeUp 0.9s 0.25s ease both;
  }
  .sr-sign-type {
    font-size:9px; letter-spacing:0.45em; text-transform:uppercase;
    font-family:'IBM Plex Mono',monospace; color:#888;
  }
  .sr-sign-name {
    font-family:'Bebas Neue',sans-serif; font-size:clamp(30px,5vw,80px);
    letter-spacing:0.06em; line-height:1; color:#1a1a1a;
  }
  .sr-sign-rule {
    width:48px; height:1px; background:#1a1a1a; margin-top:7px; opacity:0.25;
  }
  .sr-tag-cloud {
    display:flex; flex-wrap:wrap; gap:7px; justify-content:center;
    max-width:460px; margin-top:10px;
    animation:fadeUp 0.9s 0.4s ease both;
  }
  .sr-tag {
    font-size:7px; letter-spacing:0.28em; text-transform:uppercase;
    border:1px solid; padding:4px 12px; font-family:'IBM Plex Mono',monospace;
    background:rgba(255,255,255,0.55); animation:popIn 0.4s ease both;
  }

  /* ── DISPLAY TABLE (back wall) ── */
  .sr-display-table {
    position:absolute; bottom:9%; left:50%; transform:translateX(-50%);
    width:440px;
    animation:fadeUp 0.8s 0.35s ease both;
  }
  .sr-display-table-items {
    display:flex; gap:26px; justify-content:center; align-items:flex-end;
    padding:0 20px 10px;
  }
  .sr-display-table-top {
    height:8px; background:#bfbcb4;
    border-top:2px solid #a8a59e; border-radius:1px;
  }
  .sr-display-table-legs {
    display:flex; justify-content:space-between; padding:0 44px;
  }
  .sr-display-table-leg { width:5px; height:38px; background:#b0ada6; }

  /* ── HANGER ITEM (clothing rail) ── */
  .sr-hanger-item {
    position:absolute; top:calc(38% + 4px);
    transform:translateX(-50%);
    display:flex; flex-direction:column; align-items:center;
    cursor:pointer; animation:srFrameIn 0.5s ease both;
    transition:transform 0.22s ease; transform-style:preserve-3d;
  }
  .sr-hanger-item:hover { transform:translateX(-50%) translateY(-6px) scale(1.04); }
  .sr-hanger-hook { width:6px; height:12px; border:2px solid #1a1a1a; border-bottom:none; border-radius:4px 4px 0 0; }
  .sr-hanger-neck { width:2px; height:8px; background:#1a1a1a; }
  .sr-hanger-bar  { width:58px; height:2px; background:#2a2a2a; }
  .sr-garment-wrap {
    width:84px; height:104px; overflow:hidden; border-radius:1px;
    box-shadow:0 6px 18px rgba(0,0,0,0.13); transform:translateZ(18px);
  }
  .sr-garment-wrap img { width:100%; height:100%; object-fit:cover; display:block; }

  /* ── SHELF ITEM (display shelf) ── */
  .sr-shelf-item {
    position:absolute; transform:translateX(-50%);
    bottom:calc(100vh - 46% + 5px);
    display:flex; flex-direction:column; align-items:center;
    cursor:pointer; animation:srFrameIn 0.5s ease both;
    transition:transform 0.22s ease; transform-style:preserve-3d;
  }
  .sr-shelf-item:hover { transform:translateX(-50%) translateY(-6px) scale(1.04); }
  .sr-shelf-img-wrap {
    width:76px; height:90px; overflow:hidden; border-radius:2px;
    box-shadow:0 5px 14px rgba(0,0,0,0.11); background:#fff; transform:translateZ(14px);
  }
  .sr-shelf-img-wrap img { width:100%; height:100%; object-fit:cover; display:block; }

  /* ── TABLE ITEM (back wall display) ── */
  .sr-table-item {
    display:flex; flex-direction:column; align-items:center;
    cursor:pointer; animation:srFrameIn 0.55s ease both;
    transition:transform 0.22s ease;
  }
  .sr-table-item:hover { transform:translateY(-6px) scale(1.05); }
  .sr-table-img-wrap {
    width:84px; height:98px; overflow:hidden; border-radius:2px;
    box-shadow:0 8px 22px rgba(0,0,0,0.13); background:#fff;
  }
  .sr-table-img-wrap img { width:100%; height:100%; object-fit:cover; display:block; }

  /* ── PRICE TAG ── */
  .sr-price-tag {
    background:#fff; border:1px solid #e0ddd8; border-radius:1px;
    padding:4px 8px; margin-top:7px;
    transform:rotate(-2.5deg);
    box-shadow:0 1px 4px rgba(0,0,0,0.08);
    text-align:center; position:relative;
  }
  .sr-price-tag::before {
    content:''; position:absolute; top:-6px; left:50%; transform:translateX(-50%);
    width:1px; height:6px; background:#bbb;
  }
  .sr-pt-name {
    font-family:'IBM Plex Mono',monospace; font-size:7px; color:#777;
    display:block; max-width:72px;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis; letter-spacing:0.04em;
  }
  .sr-pt-price {
    font-family:'IBM Plex Mono',monospace; font-size:11px; color:#1a1a1a;
    display:block; font-weight:500; letter-spacing:0.04em;
  }

  @keyframes srFrameIn {
    from{opacity:0;transform:translateY(16px) scale(0.9);}
    to  {opacity:1;transform:translateY(0) scale(1);}
  }

  /* ── NAV ARROWS ── */
  .sr-nav {
    position:absolute; top:50%; z-index:10; transform:translateY(-50%);
    width:44px; height:80px;
    background:rgba(255,255,255,0.88); border:1px solid rgba(0,0,0,0.1);
    color:rgba(0,0,0,0.3); font-size:28px;
    display:flex; align-items:center; justify-content:center;
    cursor:pointer; transition:all 0.2s; pointer-events:all; font-family:serif;
    user-select:none; backdrop-filter:blur(4px);
  }
  .sr-nav:hover { background:#fff; color:#1a1a1a; border-color:rgba(0,0,0,0.22); }
  .sr-nav-l { left:10px; }
  .sr-nav-r { right:10px; }

  /* ── HUD ── */
  .sr-hud-top {
    position:absolute; top:0; left:0; right:0; z-index:10;
    display:flex; align-items:center; justify-content:space-between;
    padding:18px 32px;
    background:linear-gradient(to bottom,rgba(245,240,216,0.96) 0%,transparent 100%);
    pointer-events:none;
  }
  .sr-hud-top button { pointer-events:all; }
  .sr-hud-left { display:flex; flex-direction:column; gap:2px; }
  .sr-hud-eyebrow { font-size:9px; letter-spacing:0.35em; text-transform:uppercase; color:#888; }
  .sr-hud-name { font-family:'Bebas Neue',sans-serif; font-size:20px; letter-spacing:0.08em; color:#1a1a1a; }
  .sr-exit-btn {
    padding:9px 20px; background:#fffdf0; border:1px solid #ddd;
    color:#555; font-family:'IBM Plex Mono',monospace; font-size:9px;
    letter-spacing:0.2em; text-transform:uppercase; cursor:pointer; transition:all 0.2s;
    box-shadow:0 1px 3px rgba(0,0,0,0.07);
  }
  .sr-exit-btn:hover { border-color:#1a1a1a; color:#1a1a1a; }
  .sr-hud-bottom {
    position:absolute; bottom:0; left:0; right:0; z-index:10;
    display:flex; align-items:center; justify-content:space-between;
    padding:12px 32px;
    background:linear-gradient(to top,rgba(245,240,216,0.96) 0%,transparent 100%);
    pointer-events:none;
  }
  .sr-hint { font-size:9px; letter-spacing:0.22em; text-transform:uppercase; color:#aaa; }
  .sr-count { font-family:'Bebas Neue',sans-serif; font-size:18px; letter-spacing:0.1em; color:#1a1a1a; }

  /* ── SHOWROOM ENTRY BUTTONS ── */
  .sr-enter-btn {
    padding:9px 22px; background:transparent; border:1px solid rgba(255,45,120,0.25);
    color:var(--gold); font-family:'IBM Plex Mono',monospace;
    font-size:9px; letter-spacing:0.25em; text-transform:uppercase;
    cursor:pointer; transition:all 0.2s; display:inline-flex; align-items:center; gap:7px;
  }
  .sr-enter-btn:hover { background:rgba(255,45,120,0.06); border-color:var(--gold); }
  .sr-enter-btn-teal { border-color:rgba(74,184,160,0.25); color:var(--teal); }
  .sr-enter-btn-teal:hover { background:rgba(74,184,160,0.06); border-color:var(--teal); }
`;function V0({nodesA:s,nodesB:e=[],showBoth:t=!1,w:r=480}){const a=u=>({x:u.x/100*r,y:u.y/100*r}),l=t?s.filter(u=>e.some(f=>f.label===u.label)):[];return L.jsxs("svg",{viewBox:`0 0 ${r} ${r}`,style:{width:"100%",height:"100%"},children:[Array.from({length:35}).map((u,f)=>L.jsx("circle",{cx:(Math.sin(f*137.5)*.5+.5)*r,cy:(Math.cos(f*97.3)*.5+.5)*r,r:f%5===0?1.2:.6,fill:"rgba(240,235,255,0.12)"},f)),l.map((u,f)=>{const m=e.find(v=>v.label===u.label),h=a(u),x=a(m);return L.jsx("line",{x1:h.x,y1:h.y,x2:x.x,y2:x.y,stroke:"rgba(255,45,120,0.45)",strokeWidth:"1.5",strokeDasharray:"5 4"},f)}),s.map((u,f)=>s.slice(f+1).map((m,h)=>{const x=a(u),v=a(m);return Math.hypot(x.x-v.x,x.y-v.y)>155?null:L.jsx("line",{x1:x.x,y1:x.y,x2:v.x,y2:v.y,stroke:"rgba(255,45,120,0.1)",strokeWidth:"1"},`y${f}-${h}`)})),t&&e.map((u,f)=>e.slice(f+1).map((m,h)=>{const x=a(u),v=a(m);return Math.hypot(x.x-v.x,x.y-v.y)>155?null:L.jsx("line",{x1:x.x,y1:x.y,x2:v.x,y2:v.y,stroke:"rgba(0,240,224,0.1)",strokeWidth:"1"},`f${f}-${h}`)})),s.map((u,f)=>{const{x:m,y:h}=a(u);return L.jsxs("g",{style:{animation:`nodeIn 0.4s ${f*.08}s ease both`},children:[L.jsx("circle",{cx:m,cy:h,r:u.r+10,fill:`${u.c}10`}),L.jsx("circle",{cx:m,cy:h,r:u.r,fill:`${u.c}22`,stroke:u.c,strokeWidth:"1.5"}),L.jsx("text",{x:m,y:h+u.r+13,textAnchor:"middle",fill:u.c,fontSize:"8",fontFamily:"IBM Plex Mono",letterSpacing:"1.5",children:u.label.toUpperCase()})]},f)}),t&&e.map((u,f)=>{const{x:m,y:h}=a(u);return L.jsxs("g",{style:{animation:`nodeIn 0.4s ${(s.length+f)*.08}s ease both`},children:[L.jsx("circle",{cx:m,cy:h,r:u.r+10,fill:`${u.c}10`}),L.jsx("circle",{cx:m,cy:h,r:u.r,fill:`${u.c}18`,stroke:u.c,strokeWidth:"1.5",strokeDasharray:"4 3"}),L.jsx("text",{x:m,y:h+u.r+13,textAnchor:"middle",fill:u.c,fontSize:"8",fontFamily:"IBM Plex Mono",letterSpacing:"1.5",children:u.label.toUpperCase()})]},f)})]})}function Hw(){var te;const[s,e]=ct.useState("landing"),[t,r]=ct.useState(0),[a,l]=ct.useState([]),[u,f]=ct.useState(null),[m,h]=ct.useState("overlap"),[x,v]=ct.useState(kw),[p,S]=ct.useState(""),[w,C]=ct.useState(0),[y,_]=ct.useState(!1),[b,D]=ct.useState([]),[P,F]=ct.useState(!1),[U,O]=ct.useState(null),[E,A]=ct.useState(null),[Y,z]=ct.useState(!1),[G,Z]=ct.useState([]),[se,J]=ct.useState([]),[ee,H]=ct.useState("all"),[re,le]=ct.useState("maya"),[ue,V]=ct.useState([]),[$,Le]=ct.useState(!1),[Pe,ze]=ct.useState(null),[oe]=ct.useState(()=>Math.floor(Math.random()*9)+75),_e=ct.useRef(null),Me=ct.useRef(null);ct.useEffect(()=>{if(s!=="shop")return;const T=setInterval(()=>C(k=>(k+1)%H0.length),2e3);return()=>clearInterval(T)},[s]),ct.useEffect(()=>{var T;(T=_e.current)==null||T.scrollIntoView({behavior:"smooth"})},[x]);const Ce=T=>{f(T==="right"?"go-right":"go-left"),T==="right"&&l(k=>[...k,lc[t]]),setTimeout(()=>{f(null),t+1>=lc.length?e("taste"):r(k=>k+1)},380)},Be=T=>new Promise((k,he)=>{const ce=new FileReader;ce.onload=()=>k(ce.result),ce.onerror=he,ce.readAsDataURL(T)}),tt=async T=>{const k=Array.from(T).filter(ce=>ce.type.startsWith("image/")).slice(0,6);if(!k.length)return;const he=await Promise.all(k.map(Be));D(he)},It=T=>{T.preventDefault(),_(!1),tt(T.dataTransfer.files)},dt=async()=>{if(b.length){F(!0);try{const T=await Uw(b);O(T),e("taste")}catch(T){console.error("Analysis failed:",T),e("taste")}finally{F(!1)}}},ft=T=>{A(T),z(!1)},it=()=>{z(!0),J(T=>T.some(k=>k.id===E.id)?T:[...T,E])},rt=()=>{E&&(v(T=>[...T,{id:Date.now(),text:`just found this — ${E.name} from ${E.shop||E.brand} ${E.price} 👀`,from:"you"}]),setTimeout(()=>{v(T=>[...T,{id:Date.now()+1,text:cc[Math.floor(Math.random()*cc.length)],from:"friend"}])},900),A(null),s!=="shop"&&e("shop"),h("chat"))},Ze=()=>{p.trim()&&(v(T=>[...T,{id:Date.now(),text:p,from:"you"}]),S(""),setTimeout(()=>{v(T=>[...T,{id:Date.now()+1,text:cc[Math.floor(Math.random()*cc.length)],from:"friend"}])},1100))},j=[...new Set(a.flatMap(T=>T.tags))],ht=(U==null?void 0:U.tags)||(j.length?j:["minimal","earthy","organic","warm","refined"]),gt=(U==null?void 0:U.crewType)||"Warm Minimalist",St=(U==null?void 0:U.summary)||null,Ve=(U==null?void 0:U.palette)||[],N=["#ff2d78","#00f0e0","#ff00cc","#c8a8f0","#00d4ff","#ff8aaa"],M=ht.map((T,k)=>({label:T,x:20+(k*47+15)%65,y:25+(k*31+20)%55,r:10+k%3*3,c:"#e8b84b"})),q=U?M:Xd,ae=[...z0].sort((T,k)=>{const he=T.tags.filter(xe=>ht.includes(xe)).length;return k.tags.filter(xe=>ht.includes(xe)).length-he}),Se=(()=>{const T=new Set;return ae.map(k=>{let he=null;for(const Ee of k.tags){const ge=q.find(ke=>ke.label===Ee&&!T.has(ke.label));if(ge){he=ge;break}}he||(he=q.find(Ee=>!T.has(Ee.label))||q[0]),T.add(he.label);const Re=Math.atan2(he.y-50,he.x-50),Te=he.label==="organic"||he.label==="warm"?10:16,be=8,We=90;let X=he.x+Math.cos(Re)*Te,we=he.y+Math.sin(Re)*Te;return(X<be||X>We)&&(X=Math.max(be,Math.min(We,X)),we=he.y+Math.sign(Math.sin(Re))*Math.sqrt(Math.max(0,Te*Te-(X-he.x)**2))),(we<be||we>We)&&(we=Math.max(be,Math.min(We,we)),X=Math.max(be,Math.min(We,he.x+Math.sign(Math.cos(Re))*Math.sqrt(Math.max(0,Te*Te-(we-he.y)**2))))),{product:k,node:he,thumbX:X,thumbY:we}})})(),B=H0[w];return L.jsxs("div",{className:"app",children:[L.jsx("style",{children:Bw}),L.jsxs("div",{className:`screen landing ${s==="landing"?"active":""}`,children:[L.jsx("div",{className:"landing-bg"}),L.jsx("div",{className:"grid-floor"}),L.jsxs("div",{className:"wordmark",children:[L.jsx("div",{className:"wm-top",children:"SOCIAL"}),L.jsx("div",{className:"wm-bot",children:"ARCADE"})]}),L.jsxs("div",{className:"slogan",children:[L.jsxs("div",{className:"slogan-line",children:[L.jsx("span",{children:"Browse"})," together."]}),L.jsxs("div",{className:"slogan-line",children:[L.jsx("span",{children:"Shop"})," together."]}),L.jsxs("div",{className:"slogan-line",children:[L.jsx("span",{children:"Wander"})," together."]})]}),L.jsxs("div",{className:"landing-btns",children:[L.jsx("button",{className:"btn-gold",onClick:()=>e("onboarding"),children:"Find Your Style"}),L.jsx("button",{className:"btn-ghost",onClick:()=>e("taste"),children:"Skip to Shop →"})]}),L.jsx("div",{className:"ticker",children:L.jsx("div",{className:"ticker-inner",children:zw.map((T,k)=>L.jsxs("span",{className:"ticker-item",children:[L.jsx("span",{children:"✦"}),T]},k))})})]}),L.jsxs("div",{className:`screen onboarding ${s==="onboarding"?"active":""}`,children:[L.jsxs("div",{className:"ob-header",children:[L.jsx("div",{className:"ob-eyebrow",children:"✦ Step 1 · Taste Profile"}),L.jsx("div",{className:"ob-title",children:"What's your vibe?"}),L.jsx("div",{className:"ob-sub",children:"Swipe to build your aesthetic fingerprint"}),L.jsx("div",{className:"progress-track",children:lc.map((T,k)=>L.jsx("div",{className:`pdot ${k<t?"done":k===t?"now":""}`},k))})]}),L.jsx("div",{className:"swipe-wrap",children:lc.slice(t,t+2).reverse().map((T,k)=>L.jsx("div",{className:`swipe-card ${k===1&&u||""}`,style:{transform:`scale(${k===0?.93:1}) translateY(${k===0?14:0}px)`,zIndex:k,transition:k===0?"transform 0.3s ease":void 0},children:L.jsxs("div",{className:"card-inner",style:{background:T.bg},children:[L.jsx("img",{className:"card-photo",src:T.photo,alt:T.name}),L.jsx("div",{className:"card-overlay"}),L.jsxs("div",{className:"card-content",children:[L.jsx("div",{className:"card-lbl",children:"Aesthetic"}),L.jsx("div",{className:"card-name",children:T.name}),L.jsx("div",{className:"card-tags",children:T.tags.map(he=>L.jsx("span",{className:"card-tag",children:he},he))})]})]})},T.id))}),L.jsxs("div",{className:"swipe-btns",children:[L.jsx("button",{className:"swipe-btn no",onClick:()=>Ce("left"),children:"✕"}),L.jsx("button",{className:"swipe-btn yes",onClick:()=>Ce("right"),children:"♥"})]}),L.jsx("div",{className:"swipe-hint",children:"← not for me  ·  love it →"}),L.jsxs("div",{className:"or-divider",children:[L.jsx("div",{className:"or-line"}),L.jsx("div",{className:"or-text",children:"or"}),L.jsx("div",{className:"or-line"})]}),L.jsx("div",{className:"upload-cta",children:L.jsx("button",{className:"upload-cta-btn",onClick:()=>e("upload"),children:"📸   Upload inspo images instead"})})]}),L.jsxs("div",{className:`screen upload-screen ${s==="upload"?"active":""}`,children:[L.jsx("div",{className:"upload-bg"}),L.jsxs("div",{className:"ob-header",style:{position:"relative",zIndex:1},children:[L.jsx("div",{className:"ob-eyebrow",children:"✦ Upload Your Inspo"}),L.jsx("div",{className:"ob-title",children:"Drop Your Aesthetic"}),L.jsx("div",{className:"ob-sub",children:"Screenshots, Pinterest saves, Instagram inspo — anything"})]}),L.jsxs("div",{className:`drop-zone ${y?"over":""}`,onDragOver:T=>{T.preventDefault(),_(!0)},onDragLeave:()=>_(!1),onDrop:It,onClick:()=>{var T;return(T=Me.current)==null?void 0:T.click()},children:[L.jsx("input",{ref:Me,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:T=>tt(T.target.files)}),b.length===0?L.jsxs(L.Fragment,{children:[L.jsx("div",{className:"drop-icon",children:"🖼️"}),L.jsx("div",{className:"drop-title",children:"Drag & Drop Here"}),L.jsx("div",{className:"drop-sub",children:"Or click to browse files"}),L.jsx("div",{className:"drop-hint",children:"PNG · JPG · WEBP · up to 6 images"})]}):L.jsxs("div",{className:"drop-sub",style:{color:"var(--gold)"},children:["✦ ",b.length," image",b.length>1?"s":""," ready — click to add more"]})]}),b.length>0&&L.jsx("div",{className:"preview-grid",children:b.map((T,k)=>L.jsx("img",{src:T,className:"preview-thumb",alt:`inspo ${k+1}`},k))}),L.jsxs("div",{className:"analyse-btn-wrap",children:[b.length>0&&!P&&L.jsx("button",{className:"btn-gold",onClick:dt,children:"✦   Analyse My Aesthetic"}),P&&L.jsxs(L.Fragment,{children:[L.jsx("div",{className:"analysing-label",children:"Gemini is reading your aesthetic..."}),L.jsx("div",{className:"analysing-bar",children:L.jsx("div",{className:"analysing-fill"})})]}),L.jsx("button",{className:"btn-ghost",style:{marginTop:8},onClick:()=>e("onboarding"),children:"← Back to swipe"})]})]}),L.jsxs("div",{className:`screen taste-screen ${s==="taste"?"active":""}`,children:[L.jsx("div",{className:"taste-bg"}),L.jsx("div",{className:"sec-title",children:"Your Taste Graph"}),L.jsx("div",{className:"sec-sub",children:U?`AI analysed ${b.length} images · ${ht.length} nodes mapped`:j.length>0?`${a.length} resonances · ${j.length} nodes identified`:"Your visual identity, mapped as a constellation"}),U&&L.jsxs("div",{className:"ai-summary",children:[Ve.length>0&&L.jsx("div",{className:"ai-palette",children:Ve.map((T,k)=>L.jsx("div",{className:"palette-swatch",style:{background:T},title:T},k))}),L.jsx("div",{className:"ai-text",children:St})]}),L.jsxs("div",{className:"taste-layout",children:[L.jsxs("div",{className:"taste-left",children:[L.jsxs("div",{className:"constellation",children:[L.jsx(V0,{nodesA:U?M:Xd,w:480}),$&&L.jsx("svg",{className:"constellation-overlay","aria-hidden":"true",children:Se.map(({product:T,node:k,thumbX:he,thumbY:ce})=>L.jsx("line",{x1:`${k.x}%`,y1:`${k.y}%`,x2:`${he}%`,y2:`${ce}%`,stroke:"rgba(255,45,120,0.22)",strokeWidth:"1",strokeDasharray:"4 3"},T.id))}),$&&Se.map(({product:T,thumbX:k,thumbY:he},ce)=>L.jsxs("div",{className:"tp-floating",style:{left:`${k}%`,top:`${he}%`,animationDelay:`${.25+ce*.1}s`},onClick:()=>ft(T),children:[L.jsx("img",{className:"tp-float-img",src:T.img,alt:T.name,onError:xe=>{xe.target.style.background="var(--surface2)"}}),L.jsxs("div",{className:"tp-float-tooltip",children:[L.jsx("div",{children:T.name}),L.jsx("div",{style:{color:"var(--gold)",marginTop:2},children:T.price})]})]},T.id))]}),L.jsx("button",{onClick:()=>Le(T=>!T),style:{marginTop:16,background:$?"var(--gold)":"none",border:"1px solid var(--gold)",color:$?"var(--bg)":"var(--gold)",padding:"7px 22px",borderRadius:4,cursor:"pointer",fontSize:10,letterSpacing:"0.22em",textTransform:"uppercase",fontFamily:"'IBM Plex Mono', monospace",transition:"all 0.2s"},children:$?"✦ Hide Products":"✦ Show Products"}),L.jsx("div",{className:"taste-chips",style:{marginTop:20},children:ht.map((T,k)=>{const he=N[k%N.length];return L.jsx("span",{className:"taste-chip",style:{borderColor:he,color:he,animationDelay:`${k*.07}s`},children:T},T)})}),L.jsx("button",{className:"share-taste-link",style:{marginTop:12},onClick:()=>{const T=window.location.origin;navigator.share?navigator.share({title:"My Taste Graph",text:"Check out my taste graph on Social Arcade ✦",url:T}):(navigator.clipboard.writeText(T),alert("Link copied to clipboard!"))},children:"✦   Share your taste graph"})]}),L.jsxs("div",{className:"taste-right",children:[L.jsxs("div",{className:"compat-card",children:[L.jsxs("div",{className:"compat-num",children:[oe,"%"]}),L.jsxs("div",{className:"compat-lbl",style:{marginTop:4},children:["match to the"," ",L.jsx("em",{children:ht[0]||"minimal"})," aesthetic"]})]}),L.jsx("button",{className:"sr-enter-btn",style:{marginTop:18},onClick:()=>ze({products:ae,tags:ht,palette:Ve,title:gt,spaceType:"My Space",color:"#e8b84b"}),children:"⬡   Enter Your Showroom"}),L.jsx("button",{className:"btn-gold",style:{marginTop:10,position:"relative"},onClick:()=>e("shop"),children:"Shop With Your Crew →"}),L.jsx("button",{className:"btn-ghost",style:{marginTop:8},onClick:()=>{const T=window.location.origin;navigator.share?navigator.share({title:"Social Arcade",text:"Come shop with me on Social Arcade ✦",url:T}):(navigator.clipboard.writeText(T),alert("Link copied to clipboard!"))},children:"✦ Invite Friends"})]})]})]}),L.jsxs("div",{className:`screen shop-screen ${s==="shop"?"active":""}`,children:[!Pe&&L.jsxs("div",{className:"friend-cursor",style:{left:B.x,top:B.y},children:[L.jsx("div",{className:"cursor-pip"}),L.jsx("div",{className:"cursor-name",children:"Maya is browsing"})]}),L.jsxs("div",{className:"shop-hdr",children:[L.jsxs("div",{className:"shop-wm",children:[L.jsx("div",{className:"shop-wm-top",children:"SOCIAL"}),L.jsx("div",{className:"shop-wm-bot",children:"ARCADE"})]}),L.jsxs("div",{className:"session-bar",children:[L.jsx("div",{className:"live-pip"}),L.jsx("span",{children:"Live Session"}),L.jsx("div",{className:"crew-av",style:{borderColor:"#00f0e0",background:"rgba(0,240,224,0.08)",color:"#00f0e0"},children:"M"}),!Pe&&L.jsx("span",{style:{color:"#00f0e0"},children:"Maya is here"})]}),L.jsx("button",{className:"btn-ghost",style:{padding:"8px 20px"},onClick:()=>e("taste"),children:"← Taste Graph"})]}),L.jsxs("div",{className:"shop-layout",children:[L.jsxs("div",{className:"products-area",children:[L.jsxs("div",{className:"products-hdr",children:[L.jsx("div",{className:"products-title",children:ee==="all"?"All Picks":ee==="crew"?"Crew Overlap":"Small Shops"}),L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[L.jsxs("div",{className:"products-count",children:[ee==="all"&&`✦ ${ac.length} items`,ee==="crew"&&`✦ ${ac.filter(T=>T.match).length} matches`,ee==="small"&&`✦ ${B0.length} makers`]}),ee==="all"&&L.jsx("button",{className:"sr-enter-btn",style:{padding:"7px 16px",fontSize:"8px"},onClick:()=>ze({products:ae,tags:ht,palette:Ve,title:gt,spaceType:"My Space",color:"#e8b84b"}),children:"⬡ Showroom"})]})]}),L.jsxs("div",{className:"ptabs",children:[L.jsx("button",{className:`ptab ${ee==="all"?"on":""}`,onClick:()=>H("all"),children:"All"}),L.jsx("button",{className:`ptab ${ee==="crew"?"on":""}`,onClick:()=>H("crew"),children:"Crew Overlap"}),L.jsx("button",{className:`ptab teal ${ee==="small"?"on":""}`,onClick:()=>{H("small"),h("wishlist")},children:"✦ Small Shops"})]}),L.jsx("div",{className:"products-grid",children:(ee==="small"?B0:ee==="crew"?ac.filter(T=>T.match):ac).map((T,k)=>L.jsxs("div",{className:`p-card ${T.match&&ee!=="small"?"match":""}`,style:{animationDelay:`${k*.05}s`},onClick:()=>ft(T),children:[ee==="small"&&L.jsx("div",{className:"sm-badge",children:"✦ Independent Maker"}),T.match&&ee!=="small"&&L.jsx("div",{className:"match-badge",children:"✦ Both love this"}),L.jsxs("div",{className:"p-img-wrap",children:[L.jsx("img",{src:T.img,className:"p-img",alt:T.name,style:{marginTop:T.match&&ee!=="small"||ee==="small"?28:0},onError:he=>{he.target.style.display="none"}}),L.jsxs("div",{className:"p-reactions",children:[T.rx.you&&L.jsxs("span",{className:"react-chip",style:{borderColor:"rgba(255,45,120,0.3)"},children:["Y ",T.rx.you]}),T.rx.friend&&L.jsxs("span",{className:"react-chip",style:{borderColor:"rgba(0,240,224,0.3)"},children:["M ",T.rx.friend]})]})]}),L.jsxs("div",{className:"p-info",children:[L.jsx("div",{className:"p-brand",children:T.brand}),L.jsx("div",{className:"p-name",children:T.name}),L.jsx("div",{className:"p-price",children:T.price})]})]},T.id))})]}),L.jsxs("div",{className:"sidebar",children:[L.jsxs("div",{className:"stabs",children:[L.jsx("button",{className:`stab ${m==="overlap"?"on":""}`,onClick:()=>h("overlap"),children:"Taste"}),L.jsx("button",{className:`stab ${m==="chat"?"on":""}`,onClick:()=>h("chat"),children:"Chat"}),L.jsx("button",{className:`stab ${m==="crew"?"on":""}`,onClick:()=>h("crew"),children:"Crew"}),L.jsx("button",{className:`stab teal ${m==="wishlist"?"on":""}`,onClick:()=>h("wishlist"),children:"🛍 Saved"})]}),L.jsxs("div",{className:"sidebar-body",children:[m==="overlap"&&L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"s-section",children:[L.jsx("div",{className:"s-eye",children:"Taste Map"}),L.jsx("div",{className:"mini-const",children:L.jsx(V0,{nodesA:U?M:Xd,nodesB:Ow,showBoth:!0,w:280})}),L.jsxs("div",{className:"inline-compat",children:[L.jsx("div",{className:"ic-num",children:"78%"}),L.jsxs("div",{children:[L.jsx("div",{className:"ic-lbl",children:"Crew Compatibility"}),L.jsxs("div",{className:"ic-desc",children:['"',gt,'s"']})]})]})]}),L.jsxs("div",{className:"s-section",children:[L.jsx("div",{className:"s-eye",children:"Shared Nodes"}),L.jsx("div",{className:"shared-chips",children:["minimal","organic","warm"].map(T=>L.jsx("span",{className:"shared-chip",children:T},T))})]}),L.jsx("div",{className:"s-section",children:L.jsx("div",{className:"gift-card",children:L.jsxs("div",{className:"gift-text",children:["Maya would love the ",L.jsx("strong",{children:"Soy Candle"})," — it matches her ",L.jsx("strong",{children:"coastal + warm"})," nodes exactly."]})})})]}),m==="chat"&&L.jsxs("div",{className:"chat-wrap",children:[L.jsxs("div",{className:"chat-msgs",children:[x.map(T=>L.jsxs("div",{className:`chat-msg ${T.from==="you"?"mine":""}`,children:[L.jsx("div",{className:"chat-av",style:{borderColor:T.from==="you"?"#ff2d78":"#00f0e0",background:T.from==="you"?"rgba(255,45,120,0.08)":"rgba(0,240,224,0.08)",color:T.from==="you"?"#ff2d78":"#00f0e0"},children:T.from==="you"?"Y":"M"}),L.jsx("div",{className:"chat-bub",children:T.text})]},T.id)),L.jsx("div",{ref:_e})]}),L.jsxs("div",{className:"chat-row",children:[L.jsx("input",{className:"chat-in",placeholder:"say something...",value:p,onChange:T=>S(T.target.value),onKeyDown:T=>T.key==="Enter"&&Ze()}),L.jsx("button",{className:"chat-send",onClick:Ze,children:"→"})]})]}),m==="crew"&&L.jsxs("div",{children:[L.jsx("div",{className:"s-eye",children:"Your Aesthetic Crew"}),Fw.map(T=>L.jsxs("div",{className:`crew-member-card ${re===T.id?"active-crew":""}`,onClick:()=>le(T.id),children:[L.jsx("div",{className:"crew-av-lg",style:{borderColor:T.color,background:`${T.color}12`,color:T.color},children:T.avatar}),L.jsxs("div",{className:"crew-info",children:[L.jsx("div",{className:"crew-name",children:T.name}),L.jsx("div",{className:"crew-aesthetic",children:T.type}),L.jsxs("div",{className:"crew-compat-row",children:[L.jsx("div",{className:"crew-compat-track",children:L.jsx("div",{className:"crew-compat-fill",style:{width:`${T.compat}%`,background:T.color}})}),L.jsxs("div",{className:"crew-pct",style:{color:T.color},children:[T.compat,"%"]})]}),L.jsx("div",{className:"crew-tags-mini",children:T.tags.map(k=>L.jsx("span",{className:"crew-tag-mini",style:{borderColor:`${T.color}30`,color:`${T.color}99`},children:k},k))}),L.jsx("button",{className:"crew-browse-btn",style:{borderColor:re===T.id||ue.includes(T.id)?T.color:"var(--border)",color:re===T.id||ue.includes(T.id)?T.color:"var(--muted)"},onClick:()=>{le(T.id),T.id!=="maya"&&V(k=>k.includes(T.id)?k:[...k,T.id])},children:T.id==="maya"?re===T.id?"● Currently browsing together":"○ Currently browsing together":ue.includes(T.id)?"● Request sent":"○ Request to browse together"}),re===T.id&&L.jsx("button",{className:"sr-enter-btn",style:{marginTop:8,width:"100%",justifyContent:"center",borderColor:`${T.color}40`,color:T.color,fontSize:"8px"},onClick:()=>ze({owner:T.id,products:z0.filter(k=>k.tags.some(he=>T.tags.includes(he))),tags:T.tags,palette:[],title:`${T.name}'s Space`,spaceType:T.type,color:T.color}),children:"⬡   Enter Their Showroom"})]}),re===T.id&&L.jsx("div",{className:"crew-live-dot",style:{background:T.color,boxShadow:`0 0 8px ${T.color}`}})]},T.id)),L.jsxs("div",{className:"crew-find-section",children:[L.jsx("div",{className:"crew-find-desc",children:"Discover strangers who share your exact aesthetic and shop the same overlap zone."}),L.jsx("button",{className:"crew-find-btn",children:"✦   Find more crew"}),L.jsxs("div",{className:"crew-count-badge",children:[L.jsx("span",{className:"crew-count-pip"}),L.jsxs("span",{children:["2,847 ",gt,"s online now"]})]})]})]}),m==="wishlist"&&L.jsxs("div",{className:"s-section",children:[L.jsx("div",{className:"s-eye",children:"🛍 Bag"}),se.length===0?L.jsxs("div",{className:"wishlist-empty",children:[L.jsx("div",{style:{fontSize:24,marginBottom:8},children:"🛍"}),L.jsx("div",{children:"Add items to your bag to see them here"})]}):L.jsx("div",{className:"wishlist-list",children:se.map(T=>L.jsxs("div",{className:"wishlist-item",onClick:()=>ft(T),children:[L.jsx("img",{className:"wishlist-img",src:T.img,alt:T.name,onError:k=>k.target.style.display="none"}),L.jsxs("div",{className:"wishlist-info",children:[L.jsx("div",{className:"wishlist-name",children:T.name}),L.jsx("div",{className:"wishlist-price",style:{color:"var(--gold)"},children:T.price})]}),L.jsx("button",{className:"wishlist-remove",onClick:k=>{k.stopPropagation(),J(he=>he.filter(ce=>ce.id!==T.id))},children:"✕"})]},T.id))}),L.jsx("div",{className:"s-eye",style:{marginTop:20},children:"♡ Saved"}),G.length===0?L.jsxs("div",{className:"wishlist-empty",children:[L.jsx("div",{style:{fontSize:24,marginBottom:8},children:"♡"}),L.jsx("div",{children:"Save items from any category to see them here"})]}):L.jsx("div",{className:"wishlist-list",children:G.map(T=>L.jsxs("div",{className:"wishlist-item",onClick:()=>ft(T),children:[L.jsx("img",{className:"wishlist-img",src:T.img,alt:T.name,onError:k=>k.target.style.display="none"}),L.jsxs("div",{className:"wishlist-info",children:[L.jsx("div",{className:"wishlist-name",children:T.name}),L.jsx("div",{className:"wishlist-price",style:{color:"var(--gold)"},children:T.price})]}),L.jsx("button",{className:"wishlist-remove",onClick:k=>{k.stopPropagation(),Z(he=>he.filter(ce=>ce.id!==T.id))},children:"✕"})]},T.id))})]})]})]})]})]}),Pe&&Pe.owner==="soleil"&&L.jsx(Lw,{products:Pe.products,tags:Pe.tags,title:Pe.title,spaceType:Pe.spaceType,color:Pe.color,onClose:()=>ze(null),onSelectProduct:T=>ft(T)}),Pe&&Pe.owner==="daniel"&&L.jsx(Iw,{products:Pe.products,tags:Pe.tags,title:Pe.title,spaceType:Pe.spaceType,color:Pe.color,onClose:()=>ze(null),onSelectProduct:T=>ft(T)}),Pe&&Pe.owner==="maya"&&L.jsx(Nw,{products:Pe.products,tags:Pe.tags,title:Pe.title,spaceType:Pe.spaceType,color:Pe.color,onClose:()=>ze(null),onSelectProduct:T=>ft(T)}),Pe&&!["soleil","daniel","maya"].includes(Pe.owner)&&L.jsx(Pw,{products:Pe.products,tags:Pe.tags,palette:Pe.palette,title:Pe.title,spaceType:Pe.spaceType,color:Pe.color,onClose:()=>ze(null),onSelectProduct:T=>ft(T)}),E&&L.jsx("div",{className:"prod-overlay",onClick:()=>A(null),children:L.jsxs("div",{className:"prod-overlay-inner",onClick:T=>T.stopPropagation(),children:[L.jsx("button",{className:"prod-close",onClick:()=>A(null),children:"✕"}),L.jsx("div",{className:"prod-drawer",children:L.jsxs("div",{className:"prod-drawer-inner",children:[L.jsx("img",{className:"prod-big-img",src:E.img,alt:E.name,onError:T=>{T.target.style.background="var(--surface2)"}}),L.jsxs("div",{className:"prod-details",children:[L.jsxs("div",{className:"prod-eyebrow",children:["✦ Independent Maker · ",E.shop||E.brand]}),L.jsx("div",{className:"prod-title",children:E.name}),L.jsxs("div",{className:"prod-shop-name",children:["by ",E.shop||E.brand]}),L.jsx("div",{className:"prod-price-lg",children:E.price}),((te=E.tags)==null?void 0:te.length)>0&&L.jsx("div",{className:"prod-tags-row",children:E.tags.map(T=>L.jsx("span",{className:"prod-tag",children:T},T))}),L.jsxs("div",{className:"prod-actions",children:[L.jsx("button",{className:"prod-save-btn",onClick:()=>Z(T=>T.some(k=>k.id===E.id)?T.filter(k=>k.id!==E.id):[...T,E]),children:G.some(T=>T.id===E.id)?"♥   Saved":"♡   Save to wishlist"}),L.jsx("button",{className:`prod-bag-btn ${Y?"added":""}`,onClick:it,children:Y?"✓  Added to bag":"Add to bag"}),L.jsx("button",{className:"prod-crew-btn",onClick:rt,children:"✦   Share with crew"})]})]})]})})]})})]})}ov.createRoot(document.getElementById("root")).render(L.jsx(ct.StrictMode,{children:L.jsx(Hw,{})}));
