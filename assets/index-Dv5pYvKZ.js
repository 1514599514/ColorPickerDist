const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-BsJiAZ6A.js","assets/AboutView-CSIvawM9.css"])))=>i.map(i=>d[i]);
var J0=Object.defineProperty;var ep=Object.getPrototypeOf;var tp=Reflect.get;var Cc=t=>{throw TypeError(t)};var ip=(t,e,i)=>e in t?J0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var mt=(t,e,i)=>ip(t,typeof e!="symbol"?e+"":e,i),da=(t,e,i)=>e.has(t)||Cc("Cannot "+i);var Re=(t,e,i)=>(da(t,e,"read from private field"),i?i.call(t):e.get(t)),st=(t,e,i)=>e.has(t)?Cc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Li=(t,e,i,n)=>(da(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),ft=(t,e,i)=>(da(t,e,"access private method"),i);var ua=(t,e,i)=>tp(ep(t),i,e);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mo=globalThis,Ll=mo.ShadowRoot&&(mo.ShadyCSS===void 0||mo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Dl=Symbol(),kc=new WeakMap;let bu=class{constructor(e,i,n){if(this._$cssResult$=!0,n!==Dl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(Ll&&e===void 0){const n=i!==void 0&&i.length===1;n&&(e=kc.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&kc.set(i,e))}return e}toString(){return this.cssText}};const np=t=>new bu(typeof t=="string"?t:t+"",void 0,Dl),Ne=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((n,o,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]);return new bu(i,t,Dl)},rp=(t,e)=>{if(Ll)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const n=document.createElement("style"),o=mo.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}},Ec=Ll?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const n of e.cssRules)i+=n.cssText;return np(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:sp,defineProperty:op,getOwnPropertyDescriptor:ap,getOwnPropertyNames:lp,getOwnPropertySymbols:cp,getPrototypeOf:hp}=Object,an=globalThis,Rc=an.trustedTypes,dp=Rc?Rc.emptyScript:"",fa=an.reactiveElementPolyfillSupport,ks=(t,e)=>t,Eo={toAttribute(t,e){switch(e){case Boolean:t=t?dp:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Fl=(t,e)=>!sp(t,e),Ac={attribute:!0,type:String,converter:Eo,reflect:!1,hasChanged:Fl};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),an.litPropertyMetadata??(an.litPropertyMetadata=new WeakMap);class er extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=Ac){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(e,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,i);o!==void 0&&op(this.prototype,e,o)}}static getPropertyDescriptor(e,i,n){const{get:o,set:r}=ap(this.prototype,e)??{get(){return this[i]},set(s){this[i]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);r.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ac}static _$Ei(){if(this.hasOwnProperty(ks("elementProperties")))return;const e=hp(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ks("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ks("properties"))){const i=this.properties,n=[...lp(i),...cp(i)];for(const o of n)this.createProperty(o,i[o])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)i.unshift(Ec(o))}else e!==void 0&&i.push(Ec(e));return i}static _$Eu(e,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var i;(i=this._$EO)==null||i.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rp(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(e,i,n){this._$AK(e,n)}_$EC(e,i){var r;const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const s=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:Eo).toAttribute(i,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,i){var r;const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:Eo;this._$Em=o,this[o]=a.fromAttribute(i,s.type),this._$Em=null}}requestUpdate(e,i,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Fl)(this[e],i))return;this.P(e,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,i,n){this._$AL.has(e)||this._$AL.set(e,i),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],s)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(n=this._$EO)==null||n.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(i)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(i)}willUpdate(e){}_$AE(e){var i;(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(e){}firstUpdated(e){}}er.elementStyles=[],er.shadowRootOptions={mode:"open"},er[ks("elementProperties")]=new Map,er[ks("finalized")]=new Map,fa==null||fa({ReactiveElement:er}),(an.reactiveElementVersions??(an.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Es=globalThis,Ro=Es.trustedTypes,Tc=Ro?Ro.createPolicy("lit-html",{createHTML:t=>t}):void 0,$l="$lit$",ji=`lit$${Math.random().toFixed(9).slice(2)}$`,Bl="?"+ji,up=`<${Bl}>`,Bn=document,$s=()=>Bn.createComment(""),Bs=t=>t===null||typeof t!="object"&&typeof t!="function",zl=Array.isArray,yu=t=>zl(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",pa=`[ 	
\f\r]`,Tr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pc=/-->/g,Ic=/>/g,Sn=RegExp(`>|${pa}(?:([^\\s"'>=/]+)(${pa}*=${pa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oc=/'/g,Mc=/"/g,xu=/^(?:script|style|textarea|title)$/i,fp=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),me=fp(1),Ki=Symbol.for("lit-noChange"),Me=Symbol.for("lit-nothing"),Lc=new WeakMap,Ln=Bn.createTreeWalker(Bn,129);function wu(t,e){if(!zl(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tc!==void 0?Tc.createHTML(e):e}const Su=(t,e)=>{const i=t.length-1,n=[];let o,r=e===2?"<svg>":e===3?"<math>":"",s=Tr;for(let a=0;a<i;a++){const l=t[a];let d,h,c=-1,g=0;for(;g<l.length&&(s.lastIndex=g,h=s.exec(l),h!==null);)g=s.lastIndex,s===Tr?h[1]==="!--"?s=Pc:h[1]!==void 0?s=Ic:h[2]!==void 0?(xu.test(h[2])&&(o=RegExp("</"+h[2],"g")),s=Sn):h[3]!==void 0&&(s=Sn):s===Sn?h[0]===">"?(s=o??Tr,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,d=h[1],s=h[3]===void 0?Sn:h[3]==='"'?Mc:Oc):s===Mc||s===Oc?s=Sn:s===Pc||s===Ic?s=Tr:(s=Sn,o=void 0);const f=s===Sn&&t[a+1].startsWith("/>")?" ":"";r+=s===Tr?l+up:c>=0?(n.push(d),l.slice(0,c)+$l+l.slice(c)+ji+f):l+ji+(c===-2?a:f)}return[wu(t,r+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class zs{constructor({strings:e,_$litType$:i},n){let o;this.parts=[];let r=0,s=0;const a=e.length-1,l=this.parts,[d,h]=Su(e,i);if(this.el=zs.createElement(d,n),Ln.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=Ln.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith($l)){const g=h[s++],f=o.getAttribute(c).split(ji),u=/([.?@])?(.*)/.exec(g);l.push({type:1,index:r,name:u[2],strings:f,ctor:u[1]==="."?ku:u[1]==="?"?Eu:u[1]==="@"?Ru:so}),o.removeAttribute(c)}else c.startsWith(ji)&&(l.push({type:6,index:r}),o.removeAttribute(c));if(xu.test(o.tagName)){const c=o.textContent.split(ji),g=c.length-1;if(g>0){o.textContent=Ro?Ro.emptyScript:"";for(let f=0;f<g;f++)o.append(c[f],$s()),Ln.nextNode(),l.push({type:2,index:++r});o.append(c[g],$s())}}}else if(o.nodeType===8)if(o.data===Bl)l.push({type:2,index:r});else{let c=-1;for(;(c=o.data.indexOf(ji,c+1))!==-1;)l.push({type:7,index:r}),c+=ji.length-1}r++}}static createElement(e,i){const n=Bn.createElement("template");return n.innerHTML=e,n}}function zn(t,e,i=t,n){var s,a;if(e===Ki)return e;let o=n!==void 0?(s=i._$Co)==null?void 0:s[n]:i._$Cl;const r=Bs(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),r===void 0?o=void 0:(o=new r(t),o._$AT(t,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=o:i._$Cl=o),o!==void 0&&(e=zn(t,o._$AS(t,e.values),o,n)),e}let Cu=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:n}=this._$AD,o=((e==null?void 0:e.creationScope)??Bn).importNode(i,!0);Ln.currentNode=o;let r=Ln.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let d;l.type===2?d=new wr(r,r.nextSibling,this,e):l.type===1?d=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(d=new Au(r,this,e)),this._$AV.push(d),l=n[++a]}s!==(l==null?void 0:l.index)&&(r=Ln.nextNode(),s++)}return Ln.currentNode=Bn,o}p(e){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,i),i+=n.strings.length-2):n._$AI(e[i])),i++}};class wr{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,i,n,o){this.type=2,this._$AH=Me,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=zn(this,e,i),Bs(e)?e===Me||e==null||e===""?(this._$AH!==Me&&this._$AR(),this._$AH=Me):e!==this._$AH&&e!==Ki&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yu(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Me&&Bs(this._$AH)?this._$AA.nextSibling.data=e:this.T(Bn.createTextNode(e)),this._$AH=e}$(e){var r;const{values:i,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=zs.createElement(wu(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(i);else{const s=new Cu(o,this),a=s.u(this.options);s.p(i),this.T(a),this._$AH=s}}_$AC(e){let i=Lc.get(e.strings);return i===void 0&&Lc.set(e.strings,i=new zs(e)),i}k(e){zl(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const r of e)o===i.length?i.push(n=new wr(this.O($s()),this.O($s()),this,this.options)):n=i[o],n._$AI(r),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}}class so{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,n,o,r){this.type=1,this._$AH=Me,this._$AN=void 0,this.element=e,this.name=i,this._$AM=o,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Me}_$AI(e,i=this,n,o){const r=this.strings;let s=!1;if(r===void 0)e=zn(this,e,i,0),s=!Bs(e)||e!==this._$AH&&e!==Ki,s&&(this._$AH=e);else{const a=e;let l,d;for(e=r[0],l=0;l<r.length-1;l++)d=zn(this,a[n+l],i,l),d===Ki&&(d=this._$AH[l]),s||(s=!Bs(d)||d!==this._$AH[l]),d===Me?e=Me:e!==Me&&(e+=(d??"")+r[l+1]),this._$AH[l]=d}s&&!o&&this.j(e)}j(e){e===Me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ku extends so{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Me?void 0:e}}class Eu extends so{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Me)}}class Ru extends so{constructor(e,i,n,o,r){super(e,i,n,o,r),this.type=5}_$AI(e,i=this){if((e=zn(this,e,i,0)??Me)===Ki)return;const n=this._$AH,o=e===Me&&n!==Me||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==Me&&(n===Me||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$AH.handleEvent(e)}}class Au{constructor(e,i,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){zn(this,e)}}const pp={M:$l,P:ji,A:Bl,C:1,L:Su,R:Cu,D:yu,V:zn,I:wr,H:so,N:Eu,U:Ru,B:ku,F:Au},ga=Es.litHtmlPolyfillSupport;ga==null||ga(zs,wr),(Es.litHtmlVersions??(Es.litHtmlVersions=[])).push("3.2.1");const gp=(t,e,i)=>{const n=(i==null?void 0:i.renderBefore)??e;let o=n._$litPart$;if(o===void 0){const r=(i==null?void 0:i.renderBefore)??null;n._$litPart$=o=new wr(e.insertBefore($s(),r),r,void 0,i??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gi=class extends er{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const e=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=e.firstChild),e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gp(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ki}};var mu;gi._$litElement$=!0,gi.finalized=!0,(mu=globalThis.litElementHydrateSupport)==null||mu.call(globalThis,{LitElement:gi});const va=globalThis.litElementPolyfillSupport;va==null||va({LitElement:gi});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=t=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vp={attribute:!0,type:String,converter:Eo,reflect:!1,hasChanged:Fl},_p=(t=vp,e,i)=>{const{kind:n,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,t),n==="accessor"){const{name:s}=i;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.P(s,void 0,t),a}}}if(n==="setter"){const{name:s}=i;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+n)};function K(t){return(e,i)=>typeof i=="object"?_p(t,e,i):((n,o,r)=>{const s=o.hasOwnProperty(r);return o.constructor.createProperty(r,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(o,r):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fe(t){return K({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nl=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mt(t,e){return(i,n,o)=>{const r=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(t))??null};return Nl(i,n,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mp;function bp(t){return(e,i)=>Nl(e,i,{get(){return(this.renderRoot??mp??(mp=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ii(t){return(e,i)=>{const{slot:n,selector:o}=t??{},r="slot"+(n?`[name=${n}]`:":not([name])");return Nl(e,i,{get(){var l;const s=(l=this.renderRoot)==null?void 0:l.querySelector(r),a=(s==null?void 0:s.assignedElements(t))??[];return o===void 0?a:a.filter(d=>d.matches(o))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vl={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Hl=t=>(...e)=>({_$litDirective$:t,values:e});let Ul=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,n){this._$Ct=e,this._$AM=i,this._$Ci=n}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=Hl(class extends Ul{constructor(t){var e;if(super(t),t.type!==Vl.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,o;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((n=this.nt)!=null&&n.has(r))&&this.st.add(r);return this.render(e)}const i=t.element.classList;for(const r of this.st)r in e||(i.remove(r),this.st.delete(r));for(const r in e){const s=!!e[r];s===this.st.has(r)||(o=this.nt)!=null&&o.has(r)||(s?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return Ki}});class Ke extends gi{constructor(){super(...arguments),this._version="1.9.0"}get version(){return this._version}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tu="important",yp=" !"+Tu,Jt=Hl(class extends Ul{constructor(t){var e;if(super(t),t.type!==Vl.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return n==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in e){const o=e[n];if(o!=null){this.ft.add(n);const r=typeof o=="string"&&o.endsWith(yp);n.includes("-")||r?i.setProperty(n,r?o.slice(0,-11):o,r?Tu:""):i[n]=o}}return Ki}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=t=>t??Me,We=Ne`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`,xp=[We,Ne`
    :host {
      color: var(--vscode-icon-foreground);
      display: inline-block;
    }

    .codicon[class*='codicon-'] {
      display: block;
    }

    .icon,
    .button {
      background-color: transparent;
      display: block;
      padding: 0;
    }

    .button {
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      color: currentColor;
      cursor: pointer;
      padding: 2px;
    }

    .button:hover {
      background-color: var(--vscode-toolbar-hoverBackground);
    }

    .button:active {
      background-color: var(--vscode-toolbar-activeBackground);
    }

    .button:focus {
      outline: none;
    }

    .button:focus-visible {
      border-color: var(--vscode-focusBorder);
    }

    @keyframes icon-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation-name: icon-spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `];var Un=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},Ss;let mi=Ss=class extends Ke{constructor(){super(...arguments),this.label="",this.name="",this.size=16,this.spin=!1,this.spinDuration=1.5,this.actionIcon=!1,this._onButtonClick=e=>{this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}}))}}connectedCallback(){super.connectedCallback();const{href:e,nonce:i}=this._getStylesheetConfig();Ss.stylesheetHref=e,Ss.nonce=i}_getStylesheetConfig(){const e=document.getElementById("vscode-codicon-stylesheet"),i=(e==null?void 0:e.getAttribute("href"))||void 0;return{nonce:(e==null?void 0:e.getAttribute("nonce"))||void 0,href:i}}render(){const{stylesheetHref:e,nonce:i}=Ss,n=me`<span
      class="${nt({codicon:!0,["codicon-"+this.name]:!0,spin:this.spin})}"
      style="${Jt({animationDuration:String(this.spinDuration)+"s",fontSize:this.size+"px",height:this.size+"px",width:this.size+"px"})}"
    ></span>`,o=this.actionIcon?me` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${n}
        </button>`:me` <span class="icon" aria-hidden="true" role="presentation"
          >${n}</span
        >`;return me`
      <link
        rel="stylesheet"
        href="${at(e)}"
        nonce="${at(i)}"
      />
      ${o}
    `}};mi.styles=xp;mi.stylesheetHref="";mi.nonce="";Un([K()],mi.prototype,"label",void 0);Un([K({type:String})],mi.prototype,"name",void 0);Un([K({type:Number})],mi.prototype,"size",void 0);Un([K({type:Boolean,reflect:!0})],mi.prototype,"spin",void 0);Un([K({type:Number,attribute:"spin-duration"})],mi.prototype,"spinDuration",void 0);Un([K({type:Boolean,reflect:!0,attribute:"action-icon"})],mi.prototype,"actionIcon",void 0);mi=Ss=Un([Ue("vscode-icon")],mi);const wp=[We,Ne`
    :host {
      background-color: var(--vscode-button-background);
      border-color: var(
        --vscode-button-border,
        var(--vscode-button-background)
      );
      border-style: solid;
      border-radius: 2px;
      border-width: 1px;
      color: var(--vscode-button-foreground);
      cursor: pointer;
      display: inline-block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 22px;
      overflow: hidden;
      padding: 1px 13px;
      user-select: none;
      white-space: nowrap;
    }

    :host([secondary]) {
      color: var(--vscode-button-secondaryForeground);
      background-color: var(--vscode-button-secondaryBackground);
      border-color: var(
        --vscode-button-border,
        var(--vscode-button-secondaryBackground)
      );
    }

    :host([disabled]) {
      cursor: default;
      opacity: 0.4;
      pointer-events: none;
    }

    :host(:hover) {
      background-color: var(--vscode-button-hoverBackground);
    }

    :host([disabled]:hover) {
      background-color: var(--vscode-button-background);
    }

    :host([secondary]:hover) {
      background-color: var(--vscode-button-secondaryHoverBackground);
    }

    :host([secondary][disabled]:hover) {
      background-color: var(--vscode-button-secondaryBackground);
    }

    :host(:focus),
    :host(:active) {
      outline: none;
    }

    :host(:focus) {
      background-color: var(--vscode-button-hoverBackground);
      outline: 1px solid var(--vscode-focusBorder);
      outline-offset: 2px;
    }

    :host([disabled]:focus) {
      background-color: var(--vscode-button-background);
      outline: 0;
    }

    :host([secondary]:focus) {
      background-color: var(--vscode-button-secondaryHoverBackground);
    }

    :host([secondary][disabled]:focus) {
      background-color: var(--vscode-button-secondaryBackground);
    }

    ::slotted(*) {
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
    }

    ::slotted(*:first-child) {
      margin-left: 0;
    }

    ::slotted(vscode-icon) {
      color: inherit;
    }

    .wrapper {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
    }

    slot {
      align-items: center;
      display: flex;
      height: 100%;
    }

    .icon {
      color: inherit;
      display: block;
      margin-right: 3px;
    }

    .icon-after {
      color: inherit;
      display: block;
      margin-left: 3px;
    }
  `];var Ht=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let wt=class extends Ke{get form(){return this._internals.form}constructor(){super(),this.autofocus=!1,this.tabIndex=0,this.secondary=!1,this.role="button",this.disabled=!1,this.icon="",this.iconSpin=!1,this.iconAfter="",this.iconAfterSpin=!1,this.focused=!1,this.name=void 0,this.type="button",this.value="",this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this)),this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.autofocus&&(this.tabIndex<0&&(this.tabIndex=0),this.updateComplete.then(()=>{this.focus(),this.requestUpdate()})),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}update(e){super.update(e),e.has("value")&&this._internals.setFormValue(this.value),e.has("disabled")&&(this.disabled?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):this.tabIndex=this._prevTabindex)}_executeAction(){this.type==="submit"&&this._internals.form&&this._internals.form.requestSubmit(),this.type==="reset"&&this._internals.form&&this._internals.form.reset()}_handleKeyDown(e){(e.key==="Enter"||e.key===" ")&&!this.hasAttribute("disabled")&&(this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:new MouseEvent("click")}})),this._executeAction())}_handleClick(e){this.hasAttribute("disabled")||(this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}})),this._executeAction())}render(){const e=this.icon!=="",i=this.iconAfter!=="",n={wrapper:!0,"has-icon-before":e,"has-icon-after":i},o=e?me`<vscode-icon
          name="${this.icon}"
          ?spin="${this.iconSpin}"
          spin-duration="${at(this.iconSpinDuration)}"
          class="icon"
        ></vscode-icon>`:Me,r=i?me`<vscode-icon
          name="${this.iconAfter}"
          ?spin="${this.iconAfterSpin}"
          spin-duration="${at(this.iconAfterSpinDuration)}"
          class="icon-after"
        ></vscode-icon>`:Me;return me`
      <span class="${nt(n)}">
        ${o}
        <slot></slot>
        ${r}
      </span>
    `}};wt.styles=wp;wt.formAssociated=!0;Ht([K({type:Boolean,reflect:!0})],wt.prototype,"autofocus",void 0);Ht([K({type:Number,reflect:!0})],wt.prototype,"tabIndex",void 0);Ht([K({type:Boolean,reflect:!0})],wt.prototype,"secondary",void 0);Ht([K({reflect:!0})],wt.prototype,"role",void 0);Ht([K({type:Boolean,reflect:!0})],wt.prototype,"disabled",void 0);Ht([K()],wt.prototype,"icon",void 0);Ht([K({type:Boolean,reflect:!0,attribute:"icon-spin"})],wt.prototype,"iconSpin",void 0);Ht([K({type:Number,reflect:!0,attribute:"icon-spin-duration"})],wt.prototype,"iconSpinDuration",void 0);Ht([K({attribute:"icon-after"})],wt.prototype,"iconAfter",void 0);Ht([K({type:Boolean,reflect:!0,attribute:"icon-after-spin"})],wt.prototype,"iconAfterSpin",void 0);Ht([K({type:Number,reflect:!0,attribute:"icon-after-spin-duration"})],wt.prototype,"iconAfterSpinDuration",void 0);Ht([K({type:Boolean,reflect:!0})],wt.prototype,"focused",void 0);Ht([K({type:String,reflect:!0})],wt.prototype,"name",void 0);Ht([K({reflect:!0})],wt.prototype,"type",void 0);Ht([K()],wt.prototype,"value",void 0);wt=Ht([Ue("vscode-button")],wt);const Dc="__vscode-webview-elements_custom-properties__";let _a;const Sp=t=>/rgba\([0-9, .]+\)/g.test(t),Cp=(t,e)=>{const i=parseInt(t.substring(1,3),16),n=parseInt(t.substring(3,5),16),o=parseInt(t.substring(5,7),16);return`rgba(${i}, ${n}, ${o}, ${e})`},kp=()=>{Pu(Iu())},Pu=t=>{var i;const e=document.getElementById(Dc);if(e)e.innerHTML=t;else{const n=document.createElement("style");n.setAttribute("id",Dc),n.innerHTML=t,(i=document.querySelector("head"))==null||i.appendChild(n)}},Iu=()=>{const t=document.documentElement.style.getPropertyValue("--vscode-foreground");let e="";return t?Sp(t)?e=t:e=Cp(t.trim(),.9):e="rgba(0, 0, 0, 0.9)",`:root{--vsc-foreground-translucent: ${e};}`};function Ou(){_a||(_a=new MutationObserver(kp),_a.observe(document.documentElement,{attributes:!0,attributeFilter:["style"]})),Pu(Iu())}var Ep=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};class Gl extends Ke{constructor(){super(),this.focused=!1,this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},Ou()}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),e==="disabled"&&this.hasAttribute("disabled")?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):e==="disabled"&&!this.hasAttribute("disabled")&&(this.tabIndex=this._prevTabindex)}}Ep([K({type:Boolean,reflect:!0})],Gl.prototype,"focused",void 0);var Rp=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const Mu=t=>{class e extends t{constructor(){super(...arguments),this._label="",this._slottedText=""}set label(n){this._label=n,this._slottedText===""&&this.setAttribute("aria-label",n)}get label(){return this._label}_handleSlotChange(){this._slottedText=this.textContent?this.textContent.trim():"",this._slottedText!==""&&this.setAttribute("aria-label",this._slottedText)}_renderLabelAttribute(){return this._slottedText===""?me`<span class="label-attr">${this._label}</span>`:me`${Me}`}}return Rp([K()],e.prototype,"label",null),e},Lu=[Ne`
    :host {
      color: var(--vsc-foreground-translucent);
      display: inline-block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 18px;
    }

    :host(:focus) {
      outline: none;
    }

    :host([disabled]) {
      opacity: 0.4;
    }

    .wrapper {
      cursor: pointer;
      display: block;
      font-size: var(--vscode-font-size);
      margin-bottom: 4px;
      margin-top: 4px;
      min-height: 18px;
      position: relative;
      user-select: none;
    }

    :host([disabled]) .wrapper {
      cursor: default;
    }

    input {
      position: absolute;
      height: 1px;
      left: 9px;
      margin: 0;
      top: 17px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap;
    }

    .icon {
      align-items: center;
      background-color: var(--vscode-settings-checkboxBackground);
      background-size: 16px;
      border: 1px solid var(--vscode-settings-checkboxBorder);
      box-sizing: border-box;
      color: var(--vscode-settings-checkboxForeground);
      display: flex;
      height: 18px;
      justify-content: center;
      left: 0;
      margin-left: 0;
      margin-right: 9px;
      padding: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 18px;
    }

    .icon.before-empty-label {
      margin-right: 0;
    }

    .label {
      cursor: pointer;
      display: block;
      min-height: 18px;
      min-width: 18px;
    }

    .label-inner {
      display: block;
      padding-left: 27px;
    }

    .label-inner.empty {
      padding-left: 0;
    }

    :host([disabled]) .label {
      cursor: default;
    }
  `],jo=Ne`
  ::slotted(*) {
    margin: 0;
  }

  ::slotted(a) {
    color: var(--vscode-textLink-foreground);
    text-decoration: none;
  }

  ::slotted(code) {
    color: var(--vscode-textPreformat-foreground);
    line-height: 15px;
  }

  ::slotted(.error) {
    color: var(--vscode-errorForeground);
  }
`,Ap=[We,Lu,Ne`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 3px;
    }

    .indeterminate-icon {
      background-color: currentColor;
      position: absolute;
      height: 1px;
      width: 12px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--focus-border);
      outline-offset: -1px;
    }
  `,jo];var oi=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let kt=class extends Mu(Gl){set checked(e){this._checked=e,this._manageRequired(),this.requestUpdate()}get checked(){return this._checked}set required(e){this._required=e,this._manageRequired(),this.requestUpdate()}get required(){return this._required}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.autofocus=!1,this._checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name=void 0,this.role="checkbox",this.value="",this.disabled=!1,this.indeterminate=!1,this._required=!1,this.type="checkbox",this._handleClick=e=>{e.preventDefault(),!this.disabled&&this._toggleState()},this._handleKeyDown=e=>{var i;!this.disabled&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key===" "&&this._toggleState(),e.key==="Enter"&&((i=this._internals.form)==null||i.requestSubmit()))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.updateComplete.then(()=>{this._manageRequired(),this._setActualFormValue()})}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeyDown)}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=this.checked?"true":"false")}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(e,i){e&&(this.checked=!0)}_setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null,this._internals.setFormValue(e)}_toggleState(){this.checked=!this.checked,this.indeterminate=!1,this._setActualFormValue(),this._manageRequired(),this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_manageRequired(){!this.checked&&this.required?this._internals.setValidity({valueMissing:!0},"Please check this box if you want to proceed.",this._inputEl??void 0):this._internals.setValidity({})}render(){const e=nt({icon:!0,checked:this.checked,indeterminate:this.indeterminate}),i=nt({"label-inner":!0}),n=me`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="check-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
      />
    </svg>`,o=this.checked&&!this.indeterminate?n:Me,r=this.indeterminate?me`<span class="indeterminate-icon"></span>`:Me;return me`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="checkbox"
          type="checkbox"
          ?checked="${this.checked}"
          value="${this.value}"
        />
        <div class="${e}">${r}${o}</div>
        <label for="input" class="label" @click="${this._handleClick}">
          <span class="${i}">
            ${this._renderLabelAttribute()}
            <slot @slotchange="${this._handleSlotChange}"></slot>
          </span>
        </label>
      </div>
    `}};kt.styles=Ap;kt.formAssociated=!0;kt.shadowRootOptions={...gi.shadowRootOptions,delegatesFocus:!0};oi([K({type:Boolean,reflect:!0})],kt.prototype,"autofocus",void 0);oi([K({type:Boolean,reflect:!0})],kt.prototype,"checked",null);oi([K({type:Boolean,reflect:!0,attribute:"default-checked"})],kt.prototype,"defaultChecked",void 0);oi([K({type:Boolean,reflect:!0})],kt.prototype,"invalid",void 0);oi([K({reflect:!0})],kt.prototype,"name",void 0);oi([K({reflect:!0})],kt.prototype,"role",void 0);oi([K()],kt.prototype,"value",void 0);oi([K({type:Boolean,reflect:!0})],kt.prototype,"disabled",void 0);oi([K({type:Boolean,reflect:!0})],kt.prototype,"indeterminate",void 0);oi([K({type:Boolean,reflect:!0})],kt.prototype,"required",null);oi([K()],kt.prototype,"type",void 0);oi([Mt("#input")],kt.prototype,"_inputEl",void 0);kt=oi([Ue("vscode-checkbox")],kt);const Tp=[We,Ne`
    :host {
      display: block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 1.4em;
      outline: none;
      position: relative;
    }

    .context-menu-item {
      background-color: var(--vscode-menu-background);
      color: var(--vscode-menu-foreground);
      display: flex;
      user-select: none;
      white-space: nowrap;
    }

    .ruler {
      border-bottom: 1px solid var(--vscode-menu-separatorBackground);
      display: block;
      margin: 0 0 4px;
      padding-top: 4px;
      width: 100%;
    }

    .context-menu-item a {
      align-items: center;
      border-color: transparent;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-menu-foreground);
      cursor: default;
      display: flex;
      flex: 1 1 auto;
      height: 2em;
      margin-left: 4px;
      margin-right: 4px;
      outline: none;
      position: relative;
      text-decoration: inherit;
    }

    :host([selected]) .context-menu-item a {
      background-color: var(--vscode-menu-selectionBackground);
      border-color: var(
        --vscode-menu-selectionBorder,
        var(--vscode-menu-selectionBackground)
      );
      color: var(--vscode-menu-selectionForeground);
    }

    .label {
      background: none;
      display: flex;
      flex: 1 1 auto;
      font-size: 12px;
      line-height: 1;
      padding: 0 22px;
      text-decoration: none;
    }

    .keybinding {
      display: block;
      flex: 2 1 auto;
      line-height: 1;
      padding: 0 22px;
      text-align: right;
    }
  `];var Sr=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let un=class extends Ke{constructor(){super(...arguments),this.label="",this.keybinding="",this.value="",this.separator=!1,this.tabindex=0}onItemClick(){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{label:this.label,keybinding:this.keybinding,value:this.value||this.label,separator:this.separator,tabindex:this.tabindex},bubbles:!0,composed:!0}))}render(){return me`
      ${this.separator?me`
            <div class="context-menu-item separator">
              <span class="ruler"></span>
            </div>
          `:me`
            <div class="context-menu-item">
              <a @click="${this.onItemClick}">
                ${this.label?me`<span class="label">${this.label}</span>`:Me}
                ${this.keybinding?me`<span class="keybinding">${this.keybinding}</span>`:Me}
              </a>
            </div>
          `}
    `}};un.styles=Tp;Sr([K({type:String})],un.prototype,"label",void 0);Sr([K({type:String})],un.prototype,"keybinding",void 0);Sr([K({type:String})],un.prototype,"value",void 0);Sr([K({type:Boolean,reflect:!0})],un.prototype,"separator",void 0);Sr([K({type:Number})],un.prototype,"tabindex",void 0);un=Sr([Ue("vscode-context-menu-item")],un);const Pp=[We,Ne`
    :host {
      display: block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 1.4em;
      position: relative;
    }

    .context-menu {
      background-color: var(--vscode-menu-background);
      border-color: var(--vscode-menu-border);
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      box-shadow: 0 2px 8px var(--vscode-widget-shadow);
      color: var(--vscode-menu-foreground);
      padding: 4px 0;
      white-space: nowrap;
    }

    .context-menu:focus {
      outline: 0;
    }
  `];var vn=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Ti=class extends Ke{set data(e){this._data=e;const i=[];e.forEach((n,o)=>{n.separator||i.push(o)}),this._clickableItemIndexes=i}get data(){return this._data}set show(e){this._show=e,this._selectedClickableItemIndex=-1,e&&this.updateComplete.then(()=>{this._wrapperEl&&this._wrapperEl.focus(),requestAnimationFrame(()=>{document.addEventListener("click",this._onClickOutsideBound,{once:!0})})})}get show(){return this._show}constructor(){super(),this.preventClose=!1,this.tabIndex=0,this._selectedClickableItemIndex=-1,this._show=!1,this._data=[],this._clickableItemIndexes=[],this._onClickOutsideBound=this._onClickOutside.bind(this),this.addEventListener("keydown",this._onKeyDown)}_onClickOutside(e){e.composedPath().includes(this)||(this.show=!1)}_onKeyDown(e){const{key:i}=e;switch((i==="ArrowUp"||i==="ArrowDown"||i==="Escape"||i==="Enter")&&e.preventDefault(),i){case"ArrowUp":this._handleArrowUp();break;case"ArrowDown":this._handleArrowDown();break;case"Escape":this._handleEscape();break;case"Enter":this._handleEnter();break}}_handleArrowUp(){this._selectedClickableItemIndex===0?this._selectedClickableItemIndex=this._clickableItemIndexes.length-1:this._selectedClickableItemIndex-=1}_handleArrowDown(){this._selectedClickableItemIndex+1<this._clickableItemIndexes.length?this._selectedClickableItemIndex+=1:this._selectedClickableItemIndex=0}_handleEscape(){this.show=!1,document.removeEventListener("click",this._onClickOutsideBound)}_dispatchSelectEvent(e){const{keybinding:i,label:n,value:o,separator:r,tabindex:s}=e;this.dispatchEvent(new CustomEvent("vsc-context-menu-select",{detail:{keybinding:i,label:n,separator:r,tabindex:s,value:o}}))}_dispatchLegacySelectEvent(e){const{keybinding:i,label:n,value:o,separator:r,tabindex:s}=e,a={keybinding:i,label:n,value:o,separator:r,tabindex:s};this.dispatchEvent(new CustomEvent("vsc-select",{detail:a,bubbles:!0,composed:!0}))}_handleEnter(){if(this._selectedClickableItemIndex===-1)return;const e=this._clickableItemIndexes[this._selectedClickableItemIndex],n=this._wrapperEl.querySelectorAll("vscode-context-menu-item")[e];this._dispatchLegacySelectEvent(n),this._dispatchSelectEvent(n),this.preventClose||(this.show=!1,document.removeEventListener("click",this._onClickOutsideBound))}_onItemClick(e){const i=e.currentTarget;this._dispatchLegacySelectEvent(i),this._dispatchSelectEvent(i),this.preventClose||(this.show=!1)}_onItemMouseOver(e){const i=e.target,n=i.dataset.index?+i.dataset.index:-1,o=this._clickableItemIndexes.findIndex(r=>r===n);o!==-1&&(this._selectedClickableItemIndex=o)}_onItemMouseOut(){this._selectedClickableItemIndex=-1}render(){if(!this._show)return me`${Me}`;const e=this._clickableItemIndexes[this._selectedClickableItemIndex];return me`
      <div class="context-menu" tabindex="0">
        ${this.data?this.data.map(({label:i="",keybinding:n="",value:o="",separator:r=!1,tabindex:s=0},a)=>me`
                <vscode-context-menu-item
                  label="${i}"
                  keybinding="${n}"
                  value="${o}"
                  ?separator="${r}"
                  ?selected="${a===e}"
                  tabindex="${s}"
                  @vsc-click="${this._onItemClick}"
                  @mouseover=${this._onItemMouseOver}
                  @mouseout=${this._onItemMouseOut}
                  data-index=${a}
                ></vscode-context-menu-item>
              `):me`<slot></slot>`}
      </div>
    `}};Ti.styles=Pp;vn([K({type:Array,attribute:!1})],Ti.prototype,"data",null);vn([K({type:Boolean,reflect:!0,attribute:"prevent-close"})],Ti.prototype,"preventClose",void 0);vn([K({type:Boolean,reflect:!0})],Ti.prototype,"show",null);vn([K({type:Number,reflect:!0})],Ti.prototype,"tabIndex",void 0);vn([Fe()],Ti.prototype,"_selectedClickableItemIndex",void 0);vn([Fe()],Ti.prototype,"_show",void 0);vn([Mt(".context-menu")],Ti.prototype,"_wrapperEl",void 0);Ti=vn([Ue("vscode-context-menu")],Ti);const Ip=[We,Ne`
    :host {
      --label-right-margin: 14px;
      --label-width: 150px;

      display: block;
      margin: 15px 0;
    }

    :host([variant='settings-group']) {
      margin: 0;
      padding: 12px 14px 18px;
      max-width: 727px;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper,
    :host([variant='settings-group']) .wrapper {
      display: block;
    }

    :host([variant='horizontal']) ::slotted(vscode-checkbox-group),
    :host([variant='horizontal']) ::slotted(vscode-radio-group) {
      width: calc(100% - calc(var(--label-width) + var(--label-right-margin)));
    }

    :host([variant='horizontal']) ::slotted(vscode-label) {
      margin-right: var(--label-right-margin);
      text-align: right;
      width: var(--label-width);
    }

    :host([variant='settings-group']) ::slotted(vscode-label) {
      height: 18px;
      line-height: 18px;
      margin-bottom: 4px;
      margin-right: 0;
      padding: 0;
    }

    ::slotted(vscode-form-helper) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-form-helper),
    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      display: block;
      margin-left: 0;
    }

    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      margin-bottom: 0;
      margin-top: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-label),
    :host([variant='settings-group']) ::slotted(vscode-label) {
      display: block;
      margin-left: 0;
      text-align: left;
    }

    :host([variant='settings-group']) ::slotted(vscode-inputbox),
    :host([variant='settings-group']) ::slotted(vscode-textfield),
    :host([variant='settings-group']) ::slotted(vscode-textarea),
    :host([variant='settings-group']) ::slotted(vscode-single-select),
    :host([variant='settings-group']) ::slotted(vscode-multi-select) {
      margin-top: 9px;
    }

    ::slotted(vscode-button:first-child) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-button) {
      margin-left: 0;
    }

    ::slotted(vscode-button) {
      margin-right: 4px;
    }
  `];var Du=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Ao=class extends Ke{constructor(){super(...arguments),this.variant="horizontal"}render(){return me`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Ao.styles=Ip;Du([K({reflect:!0})],Ao.prototype,"variant",void 0);Ao=Du([Ue("vscode-form-group")],Ao);let Fc=0;const Fu=(t="")=>(Fc++,`${t}${Fc}`),Op=[We,Ne`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-checkbox) {
      margin-right: 20px;
    }

    ::slotted(vscode-checkbox:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox:last-child) {
      margin-bottom: 0;
    }
  `,jo];var jl=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let fr=class extends Ke{constructor(){super(...arguments),this.role="group",this.variant="horizontal"}render(){return me`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};fr.styles=Op;jl([K({reflect:!0})],fr.prototype,"role",void 0);jl([K({reflect:!0})],fr.prototype,"variant",void 0);fr=jl([Ue("vscode-checkbox-group")],fr);const Mp=[We,Ne`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-radio) {
      margin-right: 20px;
    }

    ::slotted(vscode-radio:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-radio) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-radio:last-child) {
      margin-bottom: 0;
    }
  `];var Cr=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Yi=class extends Ke{constructor(){super(...arguments),this.variant="horizontal",this.role="radiogroup",this._focusedRadio=-1,this._checkedRadio=-1,this._firstContentLoaded=!1,this._onKeyDownBound=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeyDownBound)}_uncheckPreviousChecked(e,i){e!==-1&&(this._radios[e].checked=!1),i!==-1&&(this._radios[i].tabIndex=-1)}_afterCheck(){this._focusedRadio=this._checkedRadio,this._radios[this._checkedRadio].checked=!0,this._radios[this._checkedRadio].tabIndex=0,this._radios[this._checkedRadio].focus()}_checkPrev(){const e=this._radios.findIndex(o=>o.checked),i=this._radios.findIndex(o=>o.focused),n=i!==-1?i:e;this._uncheckPreviousChecked(e,i),n===-1?this._checkedRadio=this._radios.length-1:n-1>=0?this._checkedRadio=n-1:this._checkedRadio=this._radios.length-1,this._afterCheck()}_checkNext(){const e=this._radios.findIndex(o=>o.checked),i=this._radios.findIndex(o=>o.focused),n=i!==-1?i:e;this._uncheckPreviousChecked(e,i),n===-1?this._checkedRadio=0:n+1<this._radios.length?this._checkedRadio=n+1:this._checkedRadio=0,this._afterCheck()}_onKeyDown(e){const{key:i}=e;["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(i)&&e.preventDefault(),(i==="ArrowRight"||i==="ArrowDown")&&this._checkNext(),(i==="ArrowLeft"||i==="ArrowUp")&&this._checkPrev()}_onChange(e){const i=this._radios.findIndex(n=>n===e.target);i!==-1&&(this._focusedRadio!==-1&&(this._radios[this._focusedRadio].tabIndex=-1),this._checkedRadio!==-1&&this._checkedRadio!==i&&(this._radios[this._checkedRadio].checked=!1),this._focusedRadio=i,this._checkedRadio=i,this._radios[i].tabIndex=0)}_onSlotChange(){if(!this._firstContentLoaded){const e=this._radios.findIndex(i=>i.autofocus);e>-1&&(this._focusedRadio=e),this._firstContentLoaded=!0}this._radios.forEach((e,i)=>{this._focusedRadio>-1?e.tabIndex=i===this._focusedRadio?0:-1:e.tabIndex=i===0?0:-1})}render(){return me`
      <div class="wrapper">
        <slot
          @slotchange=${this._onSlotChange}
          @vsc-change=${this._onChange}
        ></slot>
      </div>
    `}};Yi.styles=Mp;Cr([K({reflect:!0})],Yi.prototype,"variant",void 0);Cr([K({reflect:!0})],Yi.prototype,"role",void 0);Cr([Ii({selector:"vscode-radio"})],Yi.prototype,"_radios",void 0);Cr([Fe()],Yi.prototype,"_focusedRadio",void 0);Cr([Fe()],Yi.prototype,"_checkedRadio",void 0);Yi=Cr([Ue("vscode-radio-group")],Yi);const Lp=[We,Ne`
    :host {
      display: inline-block;
      height: 40px;
      position: relative;
      width: 320px;
    }

    :host([cols]) {
      width: auto;
    }

    :host([rows]) {
      height: auto;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow) 0 6px 6px -6px inset;
      display: none;
      inset: 0 0 auto 0;
      height: 6px;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    textarea {
      background-color: var(--vscode-settings-textInputBackground);
      border-color: var(
        --vscode-settings-textInputBorder,
        var(--vscode-settings-textInputBackground)
      );
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground);
      display: block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      height: 100%;
      width: 100%;
    }

    :host([cols]) textarea {
      width: auto;
    }

    :host([rows]) textarea {
      height: auto;
    }

    :host([invalid]) textarea,
    :host(:invalid) textarea {
      background-color: var(--vscode-inputValidation-errorBackground);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    textarea.monospace {
      background-color: var(--vscode-editor-background);
      color: var(--vscode-editor-foreground);
      font-family: var(--vscode-editor-font-family);
      font-size: var(--vscode-editor-font-size);
      font-weight: var(--vscode-editor-font-weight);
    }

    .textarea.monospace::placeholder {
      color: var(--vscode-editor-inlineValuesForeground);
    }

    textarea.cursor-pointer {
      cursor: pointer;
    }

    textarea:focus {
      border-color: var(--vscode-focusBorder);
      outline: none;
    }

    textarea::placeholder {
      color: var(--vscode-input-placeholderForeground);
      opacity: 1;
    }

    textarea::-webkit-scrollbar-track {
      background-color: transparent;
    }

    textarea::-webkit-scrollbar {
      width: 14px;
    }

    textarea::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    textarea:hover::-webkit-scrollbar-thumb {
      background-color: var(--vscode-scrollbarSlider-background);
    }

    textarea::-webkit-scrollbar-thumb:hover {
      background-color: var(--vscode-scrollbarSlider-hoverBackground);
    }

    textarea::-webkit-scrollbar-thumb:active {
      background-color: var(--vscode-scrollbarSlider-activeBackground);
    }

    textarea::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    textarea::-webkit-resizer {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJxjYMAOZuIQZ5j5//9/rJJESczEKYGsG6cEXgAAsEEefMxkua4AAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      background-position: right bottom;
    }
  `];var ht=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let et=class extends Ke{set value(e){this._value=e,this._internals.setFormValue(e)}get value(){return this._value}get wrappedElement(){return this._textareaEl}get form(){return this._internals.form}get type(){return"textarea"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.invalid=!1,this.label="",this.maxLength=void 0,this.minLength=void 0,this.rows=void 0,this.cols=void 0,this.name=void 0,this.placeholder=void 0,this.readonly=!1,this.resize="none",this.required=!1,this.spellcheck=!1,this.monospace=!1,this._value="",this._textareaPointerCursor=!1,this._shadow=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._textareaEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._textareaEl.value)})}updated(e){const i=["maxLength","minLength","required"];for(const n of e.keys())if(i.includes(String(n))){this.updateComplete.then(()=>{this._setValidityFromInput()});break}}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,i){this.updateComplete.then(()=>{this._value=e})}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_setValidityFromInput(){this._internals.setValidity(this._textareaEl.validity,this._textareaEl.validationMessage,this._textareaEl)}_dataChanged(){this._value=this._textareaEl.value,this._internals.setFormValue(this._textareaEl.value)}_handleChange(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:e}}))}_handleInput(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:e.data,originalEvent:e}}))}_handleMouseMove(e){if(this._textareaEl.clientHeight>=this._textareaEl.scrollHeight){this._textareaPointerCursor=!1;return}const i=14,n=1,o=this._textareaEl.getBoundingClientRect(),r=e.clientX;this._textareaPointerCursor=r>=o.left+o.width-i-n*2}_handleScroll(){this._shadow=this._textareaEl.scrollTop>0}render(){return me`
      <div
        class=${nt({shadow:!0,visible:this._shadow})}
      ></div>
      <textarea
        autocomplete=${at(this.autocomplete)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        id="textarea"
        class=${nt({monospace:this.monospace,"cursor-pointer":this._textareaPointerCursor})}
        maxlength=${at(this.maxLength)}
        minlength=${at(this.minLength)}
        rows=${at(this.rows)}
        cols=${at(this.cols)}
        name=${at(this.name)}
        placeholder=${at(this.placeholder)}
        ?readonly=${this.readonly}
        style=${Jt({resize:this.resize})}
        ?required=${this.required}
        spellcheck=${this.spellcheck}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @mousemove=${this._handleMouseMove}
        @scroll=${this._handleScroll}
        .value=${this._value}
      ></textarea>
    `}};et.styles=Lp;et.formAssociated=!0;et.shadowRootOptions={...gi.shadowRootOptions,delegatesFocus:!0};ht([K()],et.prototype,"autocomplete",void 0);ht([K({type:Boolean,reflect:!0})],et.prototype,"autofocus",void 0);ht([K({attribute:"default-value"})],et.prototype,"defaultValue",void 0);ht([K({type:Boolean,reflect:!0})],et.prototype,"disabled",void 0);ht([K({type:Boolean,reflect:!0})],et.prototype,"invalid",void 0);ht([K({attribute:!1})],et.prototype,"label",void 0);ht([K({type:Number})],et.prototype,"maxLength",void 0);ht([K({type:Number})],et.prototype,"minLength",void 0);ht([K({type:Number})],et.prototype,"rows",void 0);ht([K({type:Number})],et.prototype,"cols",void 0);ht([K()],et.prototype,"name",void 0);ht([K()],et.prototype,"placeholder",void 0);ht([K({type:Boolean,reflect:!0})],et.prototype,"readonly",void 0);ht([K()],et.prototype,"resize",void 0);ht([K({type:Boolean,reflect:!0})],et.prototype,"required",void 0);ht([K({type:Boolean})],et.prototype,"spellcheck",void 0);ht([K({type:Boolean,reflect:!0})],et.prototype,"monospace",void 0);ht([K()],et.prototype,"value",null);ht([Mt("#textarea")],et.prototype,"_textareaEl",void 0);ht([Fe()],et.prototype,"_value",void 0);ht([Fe()],et.prototype,"_textareaPointerCursor",void 0);ht([Fe()],et.prototype,"_shadow",void 0);et=ht([Ue("vscode-textarea")],et);const Dp=[We,Ne`
    :host {
      align-items: center;
      background-color: var(--vscode-settings-textInputBackground);
      border-color: var(
        --vscode-settings-textInputBorder,
        var(--vscode-settings-textInputBackground)
      );
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground);
      display: inline-flex;
      max-width: 100%;
      position: relative;
      width: 320px;
    }

    :host([focused]) {
      border-color: var(--vscode-focusBorder);
    }

    :host([invalid]),
    :host(:invalid) {
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    :host([invalid]) input,
    :host(:invalid) input {
      background-color: var(--vscode-inputValidation-errorBackground);
    }

    ::slotted([slot='content-before']) {
      display: block;
      margin-left: 2px;
    }

    ::slotted([slot='content-after']) {
      display: block;
      margin-right: 2px;
    }

    slot[name='content-before'],
    slot[name='content-after'] {
      align-items: center;
      display: flex;
    }

    input {
      background-color: var(--vscode-settings-textInputBackground);
      border: 0;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground);
      display: block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 18px;
      outline: none;
      padding-bottom: 3px;
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 3px;
      width: 100%;
    }

    input:read-only:not([type='file']) {
      cursor: not-allowed;
    }

    input::placeholder {
      color: var(--vscode-input-placeholderForeground);
      opacity: 1;
    }

    input[type='file'] {
      line-height: 24px;
      padding-bottom: 0;
      padding-left: 2px;
      padding-top: 0;
    }

    input[type='file']::file-selector-button {
      background-color: var(--vscode-button-background);
      border: 0;
      border-radius: 2px;
      color: var(--vscode-button-foreground);
      cursor: pointer;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 20px;
      padding: 0 14px;
    }

    input[type='file']::file-selector-button:hover {
      background-color: var(--vscode-button-hoverBackground);
    }
  `];var ct=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Je=class extends Ke{set type(e){const i=["color","date","datetime-local","email","file","month","number","password","search","tel","text","time","url","week"];this._type=i.includes(e)?e:"text"}get type(){return this._type}set value(e){this.type!=="file"&&(this._value=e,this._internals.setFormValue(e)),this.updateComplete.then(()=>{this._setValidityFromInput()})}get value(){return this._value}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._setValidityFromInput(),this._internals.checkValidity()}reportValidity(){return this._setValidityFromInput(),this._internals.reportValidity()}get wrappedElement(){return this._inputEl}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.focused=!1,this.invalid=!1,this.label="",this.max=void 0,this.maxLength=void 0,this.min=void 0,this.minLength=void 0,this.multiple=!1,this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.step=void 0,this._value="",this._type="text",this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._inputEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._inputEl.value)})}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),["max","maxlength","min","minlength","pattern","required","step"].includes(e)&&this.updateComplete.then(()=>{this._setValidityFromInput()})}formResetCallback(){this.value=this.defaultValue,this.requestUpdate()}formStateRestoreCallback(e,i){this.value=e}_dataChanged(){if(this._value=this._inputEl.value,this.type==="file"&&this._inputEl.files)for(const e of this._inputEl.files)this._internals.setFormValue(e);else this._internals.setFormValue(this._inputEl.value)}_setValidityFromInput(){this._inputEl&&this._internals.setValidity(this._inputEl.validity,this._inputEl.validationMessage,this._inputEl)}_onInput(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:e.data,originalEvent:e}}))}_onChange(e){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:e}}))}_onFocus(){this.focused=!0}_onBlur(){this.focused=!1}_onKeyDown(e){var i;e.key==="Enter"&&this._internals.form&&((i=this._internals.form)==null||i.requestSubmit())}render(){return me`
      <slot name="content-before"></slot>
      <input
        id="input"
        type=${this.type}
        ?autofocus=${this.autofocus}
        autocomplete=${at(this.autocomplete)}
        aria-label=${this.label}
        ?disabled=${this.disabled}
        max=${at(this.max)}
        maxlength=${at(this.maxLength)}
        min=${at(this.min)}
        minlength=${at(this.minLength)}
        ?multiple=${this.multiple}
        name=${at(this.name)}
        pattern=${at(this.pattern)}
        placeholder=${at(this.placeholder)}
        ?readonly=${this.readonly}
        ?required=${this.required}
        step=${at(this.step)}
        .value=${at(this.type!=="file"?this._value:void 0)}
        @blur=${this._onBlur}
        @change=${this._onChange}
        @focus=${this._onFocus}
        @input=${this._onInput}
        @keydown=${this._onKeyDown}
      />
      <slot name="content-after"></slot>
    `}};Je.styles=Dp;Je.formAssociated=!0;Je.shadowRootOptions={...gi.shadowRootOptions,delegatesFocus:!0};ct([K()],Je.prototype,"autocomplete",void 0);ct([K({type:Boolean,reflect:!0})],Je.prototype,"autofocus",void 0);ct([K({attribute:"default-value"})],Je.prototype,"defaultValue",void 0);ct([K({type:Boolean,reflect:!0})],Je.prototype,"disabled",void 0);ct([K({type:Boolean,reflect:!0})],Je.prototype,"focused",void 0);ct([K({type:Boolean,reflect:!0})],Je.prototype,"invalid",void 0);ct([K({attribute:!1})],Je.prototype,"label",void 0);ct([K({type:Number})],Je.prototype,"max",void 0);ct([K({type:Number})],Je.prototype,"maxLength",void 0);ct([K({type:Number})],Je.prototype,"min",void 0);ct([K({type:Number})],Je.prototype,"minLength",void 0);ct([K({type:Boolean,reflect:!0})],Je.prototype,"multiple",void 0);ct([K({reflect:!0})],Je.prototype,"name",void 0);ct([K()],Je.prototype,"pattern",void 0);ct([K()],Je.prototype,"placeholder",void 0);ct([K({type:Boolean,reflect:!0})],Je.prototype,"readonly",void 0);ct([K({type:Boolean,reflect:!0})],Je.prototype,"required",void 0);ct([K({type:Number})],Je.prototype,"step",void 0);ct([K({reflect:!0})],Je.prototype,"type",null);ct([K()],Je.prototype,"value",null);ct([Mt("#input")],Je.prototype,"_inputEl",void 0);ct([Fe()],Je.prototype,"_value",void 0);ct([Fe()],Je.prototype,"_type",void 0);Je=ct([Ue("vscode-textfield")],Je);const Fp=16,$p=13,Bp=Fp/$p,zp=[We,Ne`
    :host {
      color: var(--vscode-foreground);
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: 600;
      line-height: ${Bp};
      cursor: default;
      display: block;
      padding: 5px 0;
    }

    .wrapper {
      display: block;
    }

    .wrapper.required:after {
      content: ' *';
    }

    ::slotted(.normal) {
      font-weight: normal;
    }

    ::slotted(.lightened) {
      color: var(--vscode-foreground);
      opacity: 0.9;
    }
  `];var qo=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let pr=class extends Ke{constructor(){super(...arguments),this.required=!1,this._id="",this._htmlFor="",this._connected=!1}set htmlFor(e){this._htmlFor=e,this.setAttribute("for",e),this._connected&&this._connectWithTarget()}get htmlFor(){return this._htmlFor}set id(e){this._id=e}get id(){return this._id}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n)}connectedCallback(){super.connectedCallback(),this._connected=!0,this._id===""&&(this._id=Fu("vscode-label-"),this.setAttribute("id",this._id)),this._connectWithTarget()}_getTarget(){let e=null;if(this._htmlFor){const i=this.getRootNode({composed:!1});i&&(e=i.querySelector(`#${this._htmlFor}`))}return e}async _connectWithTarget(){await this.updateComplete;const e=this._getTarget();(e instanceof Yi||e instanceof fr)&&e.setAttribute("aria-labelledby",this._id);let i="";this.textContent&&(i=this.textContent.trim()),(e instanceof Je||e instanceof et)&&(e.label=i)}_handleClick(){const e=this._getTarget();e&&"focus"in e&&e.focus()}render(){return me`
      <label
        class="${nt({wrapper:!0,required:this.required})}"
        @click=${this._handleClick}
        ><slot></slot
      ></label>
    `}};pr.styles=zp;qo([K({reflect:!0,attribute:"for"})],pr.prototype,"htmlFor",null);qo([K()],pr.prototype,"id",null);qo([K({type:Boolean,reflect:!0})],pr.prototype,"required",void 0);pr=qo([Ue("vscode-label")],pr);const Np=[We,Ne`
    :host {
      --separator-border: var(--vscode-editorWidget-border, transparent);

      border: 1px solid var(--vscode-editorWidget-border);
      display: block;
      overflow: hidden;
      position: relative;
    }

    ::slotted(*) {
      height: 100%;
      width: 100%;
    }

    ::slotted(vscode-split-layout) {
      border: 0;
    }

    .wrapper {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .wrapper.horizontal {
      flex-direction: column;
    }

    .start {
      box-sizing: border-box;
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start {
      border-right: 1px solid var(--separator-border);
    }

    :host([split='horizontal']) .start {
      border-bottom: 1px solid var(--separator-border);
    }

    .end {
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start,
    :host([split='vertical']) .end {
      height: 100%;
    }

    :host([split='horizontal']) .start,
    :host([split='horizontal']) .end {
      width: 100%;
    }

    .handle-overlay {
      display: none;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .handle-overlay.active {
      display: block;
    }

    .handle-overlay.split-vertical {
      cursor: ew-resize;
    }

    .handle-overlay.split-horizontal {
      cursor: ns-resize;
    }

    .handle {
      background-color: transparent;
      position: absolute;
      z-index: 2;
    }

    .handle.hover {
      transition: background-color 0.1s ease-out 0.3s;
      background-color: var(--vscode-sash-hoverBorder);
    }

    .handle.hide {
      background-color: transparent;
      transition: background-color 0.1s ease-out;
    }

    .handle.split-vertical {
      cursor: ew-resize;
      height: 100%;
    }

    .handle.split-horizontal {
      cursor: ns-resize;
      width: 100%;
    }
  `];var qt=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},tl;const $c="50%",Vp=4,uo=t=>{if(!t)return{value:0,unit:"pixel"};let e,i;t.endsWith("%")?(e="percent",i=+t.substring(0,t.length-1)):t.endsWith("px")?(e="pixel",i=+t.substring(0,t.length-2)):(e="pixel",i=+t);const n=isNaN(i)?0:i;return{unit:e,value:n}},fo=(t,e)=>e===0?0:Math.min(100,t/e*100),Bc=(t,e)=>e*(t/100);let It=tl=class extends Ke{set split(e){this._split=e,this.resetHandlePosition()}get split(){return this._split}set handlePosition(e){this._rawHandlePosition=e,this._handlePositionPropChanged()}get handlePosition(){return this._rawHandlePosition}set fixedPane(e){this._fixedPane=e,this._fixedPanePropChanged()}get fixedPane(){return this._fixedPane}constructor(){super(),this._split="vertical",this.resetOnDblClick=!1,this.handleSize=4,this.initialHandlePosition=$c,this._fixedPane="none",this._handlePosition=0,this._isDragActive=!1,this._hover=!1,this._hide=!1,this._boundRect=new DOMRect,this._handleOffset=0,this._wrapperObserved=!1,this._fixedPaneSize=0,this._handleResize=e=>{const i=e[0].contentRect,{width:n,height:o}=i;this._boundRect=i;const r=this.split==="vertical"?n:o;this.fixedPane==="start"&&(this._handlePosition=this._fixedPaneSize),this.fixedPane==="end"&&(this._handlePosition=r-this._fixedPaneSize)},this._handleMouseUp=e=>{this._isDragActive=!1,e.target!==this&&(this._hover=!1,this._hide=!0),window.removeEventListener("mouseup",this._handleMouseUp),window.removeEventListener("mousemove",this._handleMouseMove);const{width:i,height:n}=this._boundRect,o=this.split==="vertical"?i:n,r=fo(this._handlePosition,o);this.dispatchEvent(new CustomEvent("vsc-split-layout-change",{detail:{position:this._handlePosition,positionInPercentage:r},composed:!0}))},this._handleMouseMove=e=>{const{clientX:i,clientY:n}=e,{left:o,top:r,height:s,width:a}=this._boundRect,l=this.split==="vertical",d=l?a:s,h=l?i-o:n-r;this._handlePosition=Math.max(0,Math.min(h-this._handleOffset+this.handleSize/2,d)),this.fixedPane==="start"&&(this._fixedPaneSize=this._handlePosition),this.fixedPane==="end"&&(this._fixedPaneSize=d-this._handlePosition)},this._resizeObserver=new ResizeObserver(this._handleResize)}resetHandlePosition(){if(!this._wrapperEl){this._handlePosition=0;return}const{width:e,height:i}=this._wrapperEl.getBoundingClientRect(),n=this.split==="vertical"?e:i,{value:o,unit:r}=uo(this.initialHandlePosition??$c);r==="percent"?this._handlePosition=Bc(o,n):this._handlePosition=o}connectedCallback(){super.connectedCallback()}firstUpdated(e){this.fixedPane!=="none"&&(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0),this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:i,unit:n}=this.handlePosition?uo(this.handlePosition):uo(this.initialHandlePosition);this._setPosition(i,n),this._initFixedPane()}_handlePositionPropChanged(){if(this.handlePosition&&this._wrapperEl){this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:e,unit:i}=uo(this.handlePosition);this._setPosition(e,i)}}_fixedPanePropChanged(){this._wrapperEl&&this._initFixedPane()}_initFixedPane(){if(this.fixedPane==="none")this._wrapperObserved&&(this._resizeObserver.unobserve(this._wrapperEl),this._wrapperObserved=!1);else{const{width:e,height:i}=this._boundRect,n=this.split==="vertical"?e:i;this._fixedPaneSize=this.fixedPane==="start"?this._handlePosition:n-this._handlePosition,this._wrapperObserved||(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0)}}_setPosition(e,i){const{width:n,height:o}=this._boundRect,r=this.split==="vertical"?n:o;this._handlePosition=i==="percent"?Bc(e,r):e}_handleMouseOver(){this._hover=!0,this._hide=!1}_handleMouseOut(e){e.buttons!==1&&(this._hover=!1,this._hide=!0)}_handleMouseDown(e){e.stopPropagation(),e.preventDefault(),this._boundRect=this._wrapperEl.getBoundingClientRect();const{left:i,top:n}=this._boundRect,{left:o,top:r}=this._handleEl.getBoundingClientRect(),s=e.clientX-i,a=e.clientY-n;this.split==="vertical"&&(this._handleOffset=s-(o-i)),this.split==="horizontal"&&(this._handleOffset=a-(r-n)),this._isDragActive=!0,window.addEventListener("mouseup",this._handleMouseUp),window.addEventListener("mousemove",this._handleMouseMove)}_handleDblClick(){this.resetOnDblClick&&this.resetHandlePosition()}_handleSlotChange(){[...this._nestedLayoutsAtStart,...this._nestedLayoutsAtEnd].forEach(i=>{i instanceof tl&&i.resetHandlePosition()})}render(){const{width:e,height:i}=this._boundRect,n=this.split==="vertical"?e:i,o=this.fixedPane!=="none"?`${this._handlePosition}px`:`${fo(this._handlePosition,n)}%`;let r="";this.fixedPane==="start"?r=`0 0 ${this._fixedPaneSize}px`:r=`1 1 ${fo(this._handlePosition,n)}%`;let s="";this.fixedPane==="end"?s=`0 0 ${this._fixedPaneSize}px`:s=`1 1 ${fo(n-this._handlePosition,n)}%`;const a={left:this.split==="vertical"?o:"0",top:this.split==="vertical"?"0":o},l=this.handleSize??Vp;this.split==="vertical"&&(a.marginLeft=`${0-l/2}px`,a.width=`${l}px`),this.split==="horizontal"&&(a.height=`${l}px`,a.marginTop=`${0-l/2}px`);const d=Jt(a),h=nt({"handle-overlay":!0,active:this._isDragActive,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"}),c=nt({handle:!0,hover:this._hover,hide:this._hide,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"}),g={wrapper:!0,horizontal:this.split==="horizontal"};return me`
      <div class="${nt(g)}">
        <div class="start" style="${Jt({flex:r})}">
          <slot name="start" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="end" style="${Jt({flex:s})}">
          <slot name="end" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="${h}"></div>
        <div
          class="${c}"
          style="${d}"
          @mouseover="${this._handleMouseOver}"
          @mouseout="${this._handleMouseOut}"
          @mousedown="${this._handleMouseDown}"
          @dblclick="${this._handleDblClick}"
        ></div>
      </div>
    `}};It.styles=Np;qt([K({reflect:!0})],It.prototype,"split",null);qt([K({type:Boolean,reflect:!0,attribute:"reset-on-dbl-click"})],It.prototype,"resetOnDblClick",void 0);qt([K({type:Number,reflect:!0,attribute:"handle-size"})],It.prototype,"handleSize",void 0);qt([K({reflect:!0,attribute:"initial-handle-position"})],It.prototype,"initialHandlePosition",void 0);qt([K({attribute:"handle-position"})],It.prototype,"handlePosition",null);qt([K({attribute:"fixed-pane"})],It.prototype,"fixedPane",null);qt([Fe()],It.prototype,"_handlePosition",void 0);qt([Fe()],It.prototype,"_isDragActive",void 0);qt([Fe()],It.prototype,"_hover",void 0);qt([Fe()],It.prototype,"_hide",void 0);qt([Mt(".wrapper")],It.prototype,"_wrapperEl",void 0);qt([Mt(".handle")],It.prototype,"_handleEl",void 0);qt([Ii({slot:"start",selector:"vscode-split-layout"})],It.prototype,"_nestedLayoutsAtStart",void 0);qt([Ii({slot:"end",selector:"vscode-split-layout"})],It.prototype,"_nestedLayoutsAtEnd",void 0);It=tl=qt([Ue("vscode-split-layout")],It);const Hp=[We,Ne`
    :host {
      border-bottom: 1px solid transparent;
      cursor: pointer;
      display: block;
      margin-bottom: -1px;
      overflow: hidden;
      padding: 7px 8px;
      text-overflow: ellipsis;
      user-select: none;
      white-space: nowrap;
    }

    :host([active]) {
      border-bottom-color: var(--vscode-panelTitle-activeForeground);
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) {
      border-bottom: 0;
      margin-bottom: 0;
      padding: 0;
    }

    :host(:focus-visible) {
      outline: none;
    }

    .wrapper {
      align-items: center;
      color: var(--vscode-foreground);
      display: flex;
      min-height: 20px;
      overflow: inherit;
      text-overflow: inherit;
      position: relative;
    }

    .wrapper.panel {
      color: var(--vscode-panelTitle-inactiveForeground);
    }

    .wrapper.panel.active,
    .wrapper.panel:hover {
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) .wrapper {
      display: flex;
      font-size: 11px;
      height: 31px;
      padding: 2px 10px;
      text-transform: uppercase;
    }

    .main {
      overflow: inherit;
      text-overflow: inherit;
    }

    .active-indicator {
      display: none;
    }

    .active-indicator.panel.active {
      border-top: 1px solid var(--vscode-panelTitle-activeBorder);
      bottom: 4px;
      display: block;
      left: 8px;
      pointer-events: none;
      position: absolute;
      right: 8px;
    }

    :host(:focus-visible) .wrapper {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host(:focus-visible) .wrapper.panel {
      outline-offset: -2px;
    }

    slot[name='content-before']::slotted(vscode-badge) {
      margin-right: 8px;
    }

    slot[name='content-after']::slotted(vscode-badge) {
      margin-left: 8px;
    }
  `];var kr=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let vi=class extends Ke{constructor(){super(...arguments),this.active=!1,this.ariaControls="",this.panel=!1,this.role="tab",this.tabId=-1}attributeChangedCallback(e,i,n){if(super.attributeChangedCallback(e,i,n),e==="active"){const o=n!==null;this.ariaSelected=o?"true":"false",this.tabIndex=o?0:-1}}render(){return me`
      <div
        class=${nt({wrapper:!0,active:this.active,panel:this.panel})}
      >
        <div class="before"><slot name="content-before"></slot></div>
        <div class="main"><slot></slot></div>
        <div class="after"><slot name="content-after"></slot></div>
        <span
          class=${nt({"active-indicator":!0,active:this.active,panel:this.panel})}
        ></span>
      </div>
    `}};vi.styles=Hp;kr([K({type:Boolean,reflect:!0})],vi.prototype,"active",void 0);kr([K({reflect:!0,attribute:"aria-controls"})],vi.prototype,"ariaControls",void 0);kr([K({type:Boolean,reflect:!0})],vi.prototype,"panel",void 0);kr([K({reflect:!0})],vi.prototype,"role",void 0);kr([K({type:Number,reflect:!0,attribute:"tab-id"})],vi.prototype,"tabId",void 0);vi=kr([Ue("vscode-tab-header")],vi);const Up=[We,Ne`
    :host {
      display: block;
      overflow: hidden;
    }

    :host(:focus-visible) {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host([panel]) {
      background-color: var(--vscode-panel-background);
    }
  `];var Er=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Xi=class extends Ke{constructor(){super(...arguments),this.hidden=!1,this.ariaLabelledby="",this.panel=!1,this.role="tabpanel",this.tabIndex=0}render(){return me` <slot></slot> `}};Xi.styles=Up;Er([K({type:Boolean,reflect:!0})],Xi.prototype,"hidden",void 0);Er([K({reflect:!0,attribute:"aria-labelledby"})],Xi.prototype,"ariaLabelledby",void 0);Er([K({type:Boolean,reflect:!0})],Xi.prototype,"panel",void 0);Er([K({reflect:!0})],Xi.prototype,"role",void 0);Er([K({type:Number,reflect:!0})],Xi.prototype,"tabIndex",void 0);Xi=Er([Ue("vscode-tab-panel")],Xi);const Gp=[We,Ne`
    :host {
      display: block;
      position: relative;
    }

    .scrollable-container {
      height: 100%;
      overflow: auto;
    }

    .scrollable-container::-webkit-scrollbar {
      cursor: default;
      width: 0;
    }

    .scrollable-container {
      scrollbar-width: none;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow) 0 6px 6px -6px inset;
      display: none;
      height: 3px;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    .scrollbar-track {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 10px;
      z-index: 100;
    }

    .scrollbar-track.hidden {
      display: none;
    }

    .scrollbar-thumb {
      background-color: transparent;
      min-height: var(--min-thumb-height, 20px);
      opacity: 0;
      position: absolute;
      right: 0;
      width: 10px;
    }

    .scrollbar-thumb.visible {
      background-color: var(--vscode-scrollbarSlider-background);
      opacity: 1;
      transition: opacity 100ms;
    }

    .scrollbar-thumb.fade {
      background-color: var(--vscode-scrollbarSlider-background);
      opacity: 0;
      transition: opacity 800ms;
    }

    .scrollbar-thumb.visible:hover {
      background-color: var(--vscode-scrollbarSlider-hoverBackground);
    }

    .scrollbar-thumb.visible.active,
    .scrollbar-thumb.visible.active:hover {
      background-color: var(--vscode-scrollbarSlider-activeBackground);
    }

    .prevent-interaction {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 99;
    }

    .content {
      overflow: hidden;
    }
  `];var Wt=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Ot=class extends Ke{constructor(){super(...arguments),this.shadow=!0,this.scrolled=!1,this._isDragging=!1,this._thumbHeight=0,this._thumbY=0,this._thumbVisible=!1,this._thumbFade=!1,this._thumbActive=!1,this._scrollThumbStartY=0,this._mouseStartY=0,this._scrollbarVisible=!0,this._scrollbarTrackZ=0,this._resizeObserverCallback=()=>{this._updateScrollbar()},this._onScrollThumbMouseMoveBound=this._onScrollThumbMouseMove.bind(this),this._onScrollThumbMouseUpBound=this._onScrollThumbMouseUp.bind(this),this._onComponentMouseOverBound=this._onComponentMouseOver.bind(this),this._onComponentMouseOutBound=this._onComponentMouseOut.bind(this)}set scrollPos(e){this._scrollableContainer.scrollTop=e}get scrollPos(){return this._scrollableContainer?this._scrollableContainer.scrollTop:0}get scrollMax(){return this._scrollableContainer?this._scrollableContainer.scrollHeight:0}connectedCallback(){super.connectedCallback(),this._hostResizeObserver=new ResizeObserver(this._resizeObserverCallback),this._contentResizeObserver=new ResizeObserver(this._resizeObserverCallback),this.requestUpdate(),this.updateComplete.then(()=>{this._scrollableContainer.addEventListener("scroll",this._onScrollableContainerScroll.bind(this)),this._hostResizeObserver.observe(this),this._contentResizeObserver.observe(this._contentElement)}),this.addEventListener("mouseover",this._onComponentMouseOverBound),this.addEventListener("mouseout",this._onComponentMouseOutBound)}disconnectedCallback(){super.disconnectedCallback(),this._hostResizeObserver.unobserve(this),this._hostResizeObserver.disconnect(),this._contentResizeObserver.unobserve(this._contentElement),this._contentResizeObserver.disconnect(),this.removeEventListener("mouseover",this._onComponentMouseOverBound),this.removeEventListener("mouseout",this._onComponentMouseOutBound)}_updateScrollbar(){const e=this.getBoundingClientRect(),i=this._contentElement.getBoundingClientRect();e.height>=i.height?this._scrollbarVisible=!1:(this._scrollbarVisible=!0,this._thumbHeight=e.height*(e.height/i.height)),this.requestUpdate()}_zIndexFix(){let e=0;this._assignedElements.forEach(i=>{if("style"in i){const n=window.getComputedStyle(i).zIndex;/([0-9-])+/g.test(n)&&(e=Number(n)>e?Number(n):e)}}),this._scrollbarTrackZ=e+1,this.requestUpdate()}_onSlotChange(){this._zIndexFix()}_onScrollThumbMouseDown(e){const i=this.getBoundingClientRect(),n=this._scrollThumbElement.getBoundingClientRect();this._mouseStartY=e.screenY,this._scrollThumbStartY=n.top-i.top,this._isDragging=!0,this._thumbActive=!0,document.addEventListener("mousemove",this._onScrollThumbMouseMoveBound),document.addEventListener("mouseup",this._onScrollThumbMouseUpBound)}_onScrollThumbMouseMove(e){const i=this._scrollThumbStartY+(e.screenY-this._mouseStartY);let n=0;const o=this.getBoundingClientRect().height,r=this._scrollThumbElement.getBoundingClientRect().height,s=this._contentElement.getBoundingClientRect().height;i<0?n=0:i>o-r?n=o-r:n=i,this._thumbY=n,this._scrollableContainer.scrollTop=n/(o-r)*(s-o)}_onScrollThumbMouseUp(e){this._isDragging=!1,this._thumbActive=!1;const i=this.getBoundingClientRect(),{x:n,y:o,width:r,height:s}=i,{pageX:a,pageY:l}=e;(a>n+r||a<n||l>o+s||l<o)&&(this._thumbFade=!0,this._thumbVisible=!1),document.removeEventListener("mousemove",this._onScrollThumbMouseMoveBound),document.removeEventListener("mouseup",this._onScrollThumbMouseUpBound)}_onScrollableContainerScroll(){const e=this._scrollableContainer.scrollTop;this.scrolled=e>0;const i=this.getBoundingClientRect().height,n=this._scrollThumbElement.getBoundingClientRect().height,r=this._contentElement.getBoundingClientRect().height-i,s=e/r;this._thumbY=s*(i-n)}_onComponentMouseOver(){this._thumbVisible=!0,this._thumbFade=!1}_onComponentMouseOut(){this._thumbActive||(this._thumbVisible=!1,this._thumbFade=!0)}render(){return me`
      <div
        class="scrollable-container"
        style="${Jt({"user-select":this._isDragging?"none":"auto"})}"
      >
        <div class="${nt({shadow:!0,visible:this.scrolled})}"></div>
        ${this._isDragging?me`<div class="prevent-interaction"></div>`:Me}
        <div
          class="${nt({"scrollbar-track":!0,hidden:!this._scrollbarVisible})}"
          style="${Jt({"z-index":String(this._scrollbarTrackZ)})}"
        >
          <div
            class="${nt({"scrollbar-thumb":!0,visible:this._thumbVisible,fade:this._thumbFade,active:this._thumbActive})}"
            style="${Jt({height:`${this._thumbHeight}px`,top:`${this._thumbY}px`})}"
            @mousedown=${this._onScrollThumbMouseDown}
          ></div>
        </div>
        <div class="content">
          <slot @slotchange="${this._onSlotChange}"></slot>
        </div>
      </div>
    `}};Ot.styles=Gp;Wt([K({type:Boolean,reflect:!0})],Ot.prototype,"shadow",void 0);Wt([K({type:Boolean,reflect:!0})],Ot.prototype,"scrolled",void 0);Wt([K({type:Number,attribute:"scroll-pos"})],Ot.prototype,"scrollPos",null);Wt([K({type:Number,attribute:"scroll-max"})],Ot.prototype,"scrollMax",null);Wt([Fe()],Ot.prototype,"_isDragging",void 0);Wt([Fe()],Ot.prototype,"_thumbHeight",void 0);Wt([Fe()],Ot.prototype,"_thumbY",void 0);Wt([Fe()],Ot.prototype,"_thumbVisible",void 0);Wt([Fe()],Ot.prototype,"_thumbFade",void 0);Wt([Fe()],Ot.prototype,"_thumbActive",void 0);Wt([Mt(".content")],Ot.prototype,"_contentElement",void 0);Wt([Mt(".scrollbar-thumb")],Ot.prototype,"_scrollThumbElement",void 0);Wt([Mt(".scrollable-container")],Ot.prototype,"_scrollableContainer",void 0);Wt([Ii()],Ot.prototype,"_assignedElements",void 0);Ot=Wt([Ue("vscode-scrollable")],Ot);const zc=(t,e)=>typeof t=="number"&&!Number.isNaN(t)?t/e*100:typeof t=="string"&&/^[0-9.]+$/.test(t)?Number(t)/e*100:typeof t=="string"&&/^[0-9.]+%$/.test(t)?Number(t.substring(0,t.length-1)):typeof t=="string"&&/^[0-9.]+px$/.test(t)?Number(t.substring(0,t.length-2))/e*100:null,jp=[We,Ne`
    :host {
      display: block;
      --vsc-row-even-background: transparent;
      --vsc-row-odd-background: transparent;
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 0;
      --vsc-row-display: table-row;
    }

    :host([bordered]),
    :host([bordered-rows]) {
      --vsc-row-border-bottom-width: 1px;
    }

    :host([compact]) {
      --vsc-row-display: block;
    }

    :host([bordered][compact]),
    :host([bordered-rows][compact]) {
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 1px;
    }

    :host([zebra]) {
      --vsc-row-even-background: var(--vscode-keybindingTable-rowsBackground);
    }

    :host([zebra-odd]) {
      --vsc-row-odd-background: var(--vscode-keybindingTable-rowsBackground);
    }

    ::slotted(vscode-table-row) {
      width: 100%;
    }

    .wrapper {
      height: 100%;
      max-width: 100%;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .wrapper.select-disabled {
      user-select: none;
    }

    .wrapper.resize-cursor {
      cursor: ew-resize;
    }

    .wrapper.compact-view .header-slot-wrapper {
      height: 0;
      overflow: hidden;
    }

    .scrollable {
      height: 100%;
    }

    .scrollable:before {
      background-color: transparent;
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
    }

    .wrapper:not(.compact-view) .scrollable:not([scrolled]):before {
      background-color: var(--vscode-editorGroup-border);
    }

    .sash {
      visibility: hidden;
    }

    :host([bordered-columns]) .sash,
    :host([bordered]) .sash {
      visibility: visible;
    }

    :host([resizable]) .wrapper:hover .sash {
      visibility: visible;
    }

    .sash {
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
    }

    .wrapper.compact-view .sash {
      display: none;
    }

    .sash.resizable {
      cursor: ew-resize;
    }

    .sash-visible {
      background-color: var(--vscode-editorGroup-border);
      height: 100%;
      position: absolute;
      top: 30px;
      width: 1px;
    }

    .sash.hover .sash-visible {
      background-color: var(--vscode-sash-hoverBorder);
      transition: background-color 50ms linear 300ms;
    }

    .sash .sash-clickable {
      background-color: transparent;
      height: 100%;
      left: -2px;
      position: absolute;
      width: 5px;
    }
  `];var Lt=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const Nc=100;let St=class extends Ke{constructor(){super(...arguments),this.role="table",this.resizable=!1,this.responsive=!1,this.breakpoint=300,this.minColumnWidth="50px",this.delayedResizing=!1,this.compact=!1,this._sashPositions=[],this._isDragging=!1,this._sashHovers=[],this._columns=[],this._activeSashElementIndex=-1,this._activeSashCursorOffset=0,this._componentX=0,this._componentH=0,this._componentW=0,this._headerCells=[],this._cellsOfFirstRow=[],this._prevHeaderHeight=0,this._prevComponentHeight=0,this._componentResizeObserverCallback=()=>{this._memoizeComponentDimensions(),this._updateResizeHandlersSize(),this.responsive&&this._toggleCompactView()},this._headerResizeObserverCallback=()=>{this._updateResizeHandlersSize()},this._bodyResizeObserverCallback=()=>{let e=0,i=0;const n=this.getBoundingClientRect().height;this._assignedHeaderElements&&this._assignedHeaderElements.length&&(e=this._assignedHeaderElements[0].getBoundingClientRect().height),this._assignedBodyElements&&this._assignedBodyElements.length&&(i=this._assignedBodyElements[0].getBoundingClientRect().height);const o=i-e-n;this._scrollableElement.style.height=o>0?`${n-e}px`:"auto"},this._onResizingMouseMove=e=>{e.stopPropagation(),this._updateActiveSashPosition(e.pageX),this.delayedResizing?this._resizeColumns(!1):this._resizeColumns(!0)},this._onResizingMouseUp=e=>{this._resizeColumns(!0),this._updateActiveSashPosition(e.pageX),this._sashHovers[this._activeSashElementIndex]=!1,this._isDragging=!1,this._activeSashElementIndex=-1,document.removeEventListener("mousemove",this._onResizingMouseMove),document.removeEventListener("mouseup",this._onResizingMouseUp)}}set columns(e){this._columns=e,this.isConnected&&this._initDefaultColumnSizes()}get columns(){return this._columns}connectedCallback(){super.connectedCallback(),this._memoizeComponentDimensions(),this._initDefaultColumnSizes()}disconnectedCallback(){var e;super.disconnectedCallback(),this._componentResizeObserver.unobserve(this),this._componentResizeObserver.disconnect(),(e=this._bodyResizeObserver)==null||e.disconnect()}_px2Percent(e){return e/this._componentW*100}_percent2Px(e){return this._componentW*e/100}_memoizeComponentDimensions(){const e=this.getBoundingClientRect();this._componentH=e.height,this._componentW=e.width,this._componentX=e.x}_queryHeaderCells(){const e=this._assignedHeaderElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-header-cell")):[]}_getHeaderCells(){return this._headerCells.length||(this._headerCells=this._queryHeaderCells()),this._headerCells}_queryCellsOfFirstRow(){const e=this._assignedBodyElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-row:first-child vscode-table-cell")):[]}_getCellsOfFirstRow(){return this._cellsOfFirstRow.length||(this._cellsOfFirstRow=this._queryCellsOfFirstRow()),this._cellsOfFirstRow}_initResizeObserver(){this._componentResizeObserver=new ResizeObserver(this._componentResizeObserverCallback),this._componentResizeObserver.observe(this),this._headerResizeObserver=new ResizeObserver(this._headerResizeObserverCallback),this._headerResizeObserver.observe(this._headerElement)}_calcColWidthPercentages(){const e=this._getHeaderCells().length;let i=this.columns.slice(0,e);const n=i.filter(r=>r==="auto").length+e-i.length;let o=100;if(i=i.map(r=>{const s=zc(r,this._componentW);return s===null?"auto":(o-=s,s)}),i.length<e)for(let r=i.length;r<e;r++)i.push("auto");return i=i.map(r=>r==="auto"?o/n:r),i}_initHeaderCellSizes(e){this._getHeaderCells().forEach((i,n)=>{i.style.width=`${e[n]}%`})}_initBodyColumnSizes(e){this._getCellsOfFirstRow().forEach((i,n)=>{i.style.width=`${e[n]}%`})}_initSashes(e){const i=e.length;let n=0;this._sashPositions=[],e.forEach((o,r)=>{if(r<i-1){const s=n+o;this._sashPositions.push(s),n=s}})}_initDefaultColumnSizes(){const e=this._calcColWidthPercentages();this._initHeaderCellSizes(e),this._initBodyColumnSizes(e),this._initSashes(e)}_updateResizeHandlersSize(){const e=this._headerElement.getBoundingClientRect();if(e.height===this._prevHeaderHeight&&this._componentH===this._prevComponentHeight)return;this._prevHeaderHeight=e.height,this._prevComponentHeight=this._componentH;const i=this._componentH-e.height;this._sashVisibleElements.forEach(n=>{n.style.height=`${i}px`,n.style.top=`${e.height}px`})}_applyCompactViewColumnLabels(){const i=this._getHeaderCells().map(o=>o.innerText);this.querySelectorAll("vscode-table-row").forEach(o=>{o.querySelectorAll("vscode-table-cell").forEach((s,a)=>{s.columnLabel=i[a],s.compact=!0})})}_clearCompactViewColumnLabels(){this.querySelectorAll("vscode-table-cell").forEach(e=>{e.columnLabel="",e.compact=!1})}_toggleCompactView(){const i=this.getBoundingClientRect().width<this.breakpoint;this.compact!==i&&(this.compact=i,i?this._applyCompactViewColumnLabels():this._clearCompactViewColumnLabels())}_onHeaderSlotChange(){this._headerCells=this._queryHeaderCells()}_onBodySlotChange(){if(this._initDefaultColumnSizes(),this._initResizeObserver(),this._updateResizeHandlersSize(),!this._bodyResizeObserver){const e=this._assignedBodyElements[0]??null;e&&(this._bodyResizeObserver=new ResizeObserver(this._bodyResizeObserverCallback),this._bodyResizeObserver.observe(e))}}_onSashMouseOver(e){if(this._isDragging)return;const i=e.currentTarget,n=Number(i.dataset.index);this._sashHovers[n]=!0,this.requestUpdate()}_onSashMouseOut(e){if(e.stopPropagation(),this._isDragging)return;const i=e.currentTarget,n=Number(i.dataset.index);this._sashHovers[n]=!1,this.requestUpdate()}_onSashMouseDown(e){e.stopPropagation();const{pageX:i,currentTarget:n}=e,o=n,r=Number(o.dataset.index),a=o.getBoundingClientRect().x;this._isDragging=!0,this._activeSashElementIndex=r,this._sashHovers[this._activeSashElementIndex]=!0,this._activeSashCursorOffset=this._px2Percent(i-a);const l=this._getHeaderCells();this._headerCellsToResize=[],this._headerCellsToResize.push(l[r]),l[r+1]&&(this._headerCellsToResize[1]=l[r+1]);const h=this._bodySlot.assignedElements()[0].querySelectorAll("vscode-table-row:first-child > vscode-table-cell");this._cellsToResize=[],this._cellsToResize.push(h[r]),h[r+1]&&this._cellsToResize.push(h[r+1]),document.addEventListener("mousemove",this._onResizingMouseMove),document.addEventListener("mouseup",this._onResizingMouseUp)}_updateActiveSashPosition(e){const{prevSashPos:i,nextSashPos:n}=this._getSashPositions();let o=zc(this.minColumnWidth,this._componentW);o===null&&(o=0);const r=i?i+o:o,s=n?n-o:Nc-o;let a=this._px2Percent(e-this._componentX-this._percent2Px(this._activeSashCursorOffset));a=Math.max(a,r),a=Math.min(a,s),this._sashPositions[this._activeSashElementIndex]=a,this.requestUpdate()}_getSashPositions(){const e=this._sashPositions[this._activeSashElementIndex],i=this._sashPositions[this._activeSashElementIndex-1]||0,n=this._sashPositions[this._activeSashElementIndex+1]||Nc;return{sashPos:e,prevSashPos:i,nextSashPos:n}}_resizeColumns(e=!0){const{sashPos:i,prevSashPos:n,nextSashPos:o}=this._getSashPositions(),r=i-n,s=o-i,a=`${r}%`,l=`${s}%`;this._headerCellsToResize[0].style.width=a,this._headerCellsToResize[1]&&(this._headerCellsToResize[1].style.width=l),e&&(this._cellsToResize[0].style.width=a,this._cellsToResize[1]&&(this._cellsToResize[1].style.width=l))}render(){const e=this._sashPositions.map((n,o)=>{const r=nt({sash:!0,hover:this._sashHovers[o],resizable:this.resizable}),s=`${n}%`;return this.resizable?me`
            <div
              class="${r}"
              data-index="${o}"
              style="${Jt({left:s})}"
              @mousedown="${this._onSashMouseDown}"
              @mouseover="${this._onSashMouseOver}"
              @mouseout="${this._onSashMouseOut}"
            >
              <div class="sash-visible"></div>
              <div class="sash-clickable"></div>
            </div>
          `:me`<div
            class="${r}"
            data-index="${o}"
            style="${Jt({left:s})}"
          >
            <div class="sash-visible"></div>
          </div>`}),i=nt({wrapper:!0,"select-disabled":this._isDragging,"resize-cursor":this._isDragging,"compact-view":this.compact});return me`
      <div class="${i}">
        <div class="header" @slotchange="${this._onHeaderSlotChange}">
          <slot name="caption"></slot>
          <div class="header-slot-wrapper">
            <slot name="header"></slot>
          </div>
        </div>
        <vscode-scrollable class="scrollable">
          <div>
            <slot name="body" @slotchange="${this._onBodySlotChange}"></slot>
          </div>
        </vscode-scrollable>
        ${e}
      </div>
    `}};St.styles=jp;Lt([K({reflect:!0})],St.prototype,"role",void 0);Lt([K({type:Boolean,reflect:!0})],St.prototype,"resizable",void 0);Lt([K({type:Boolean,reflect:!0})],St.prototype,"responsive",void 0);Lt([K({type:Number})],St.prototype,"breakpoint",void 0);Lt([K({type:Array})],St.prototype,"columns",null);Lt([K({attribute:"min-column-width"})],St.prototype,"minColumnWidth",void 0);Lt([K({type:Boolean,reflect:!0,attribute:"delayed-resizing"})],St.prototype,"delayedResizing",void 0);Lt([K({type:Boolean,reflect:!0})],St.prototype,"compact",void 0);Lt([Mt('slot[name="body"]')],St.prototype,"_bodySlot",void 0);Lt([Mt(".header")],St.prototype,"_headerElement",void 0);Lt([Mt(".scrollable")],St.prototype,"_scrollableElement",void 0);Lt([bp(".sash-visible")],St.prototype,"_sashVisibleElements",void 0);Lt([Ii({slot:"header",flatten:!0,selector:"vscode-table-header"})],St.prototype,"_assignedHeaderElements",void 0);Lt([Ii({slot:"body",flatten:!0,selector:"vscode-table-body"})],St.prototype,"_assignedBodyElements",void 0);Lt([Fe()],St.prototype,"_sashPositions",void 0);Lt([Fe()],St.prototype,"_isDragging",void 0);St=Lt([Ue("vscode-table")],St);const qp=[We,Ne`
    :host {
      display: table;
      table-layout: fixed;
      width: 100%;
    }

    ::slotted(vscode-table-row:nth-child(even)) {
      background-color: var(--vsc-row-even-background);
    }

    ::slotted(vscode-table-row:nth-child(odd)) {
      background-color: var(--vsc-row-odd-background);
    }
  `];var $u=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let To=class extends Ke{constructor(){super(...arguments),this.role="rowgroup"}render(){return me` <slot></slot> `}};To.styles=qp;$u([K({reflect:!0})],To.prototype,"role",void 0);To=$u([Ue("vscode-table-body")],To);const Wp=[We,Ne`
    :host {
      border-bottom-color: var(--vscode-editorGroup-border);
      border-bottom-style: solid;
      border-bottom-width: var(--vsc-row-border-bottom-width);
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      height: 24px;
      overflow: hidden;
      padding-left: 10px;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: nowrap;
    }

    :host([compact]) {
      display: block;
      height: auto;
      padding-bottom: 5px;
      width: 100% !important;
    }

    :host([compact]:first-child) {
      padding-top: 10px;
    }

    :host([compact]:last-child) {
      padding-bottom: 10px;
    }

    .wrapper {
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }

    .column-label {
      font-weight: bold;
    }
  `];var Wo=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let gr=class extends Ke{constructor(){super(...arguments),this.role="cell",this.columnLabel="",this.compact=!1}render(){const e=this.columnLabel?me`<div class="column-label" role="presentation">
          ${this.columnLabel}
        </div>`:Me;return me`
      <div class="wrapper">
        ${e}
        <slot></slot>
      </div>
    `}};gr.styles=Wp;Wo([K({reflect:!0})],gr.prototype,"role",void 0);Wo([K({attribute:"column-label"})],gr.prototype,"columnLabel",void 0);Wo([K({type:Boolean,reflect:!0})],gr.prototype,"compact",void 0);gr=Wo([Ue("vscode-table-cell")],gr);const Kp=[We,Ne`
    :host {
      background-color: var(--vscode-keybindingTable-headerBackground);
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  `];var Bu=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Po=class extends Ke{constructor(){super(...arguments),this.role="rowgroup"}render(){return me` <slot></slot> `}};Po.styles=Kp;Bu([K({reflect:!0})],Po.prototype,"role",void 0);Po=Bu([Ue("vscode-table-header")],Po);const Yp=[We,Ne`
    :host {
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: bold;
      line-height: 20px;
      overflow: hidden;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 0;
      padding-top: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .wrapper {
      box-sizing: inherit;
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }
  `];var zu=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Io=class extends Ke{constructor(){super(...arguments),this.role="columnheader"}render(){return me`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Io.styles=Yp;zu([K({reflect:!0})],Io.prototype,"role",void 0);Io=zu([Ue("vscode-table-header-cell")],Io);const Xp=[We,Ne`
    :host {
      border-top-color: var(--vscode-editorGroup-border);
      border-top-style: solid;
      border-top-width: var(--vsc-row-border-top-width);
      display: var(--vsc-row-display);
      width: 100%;
    }
  `];var Nu=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Oo=class extends Ke{constructor(){super(...arguments),this.role="row"}render(){return me` <slot></slot> `}};Oo.styles=Xp;Nu([K({reflect:!0})],Oo.prototype,"role",void 0);Oo=Nu([Ue("vscode-table-row")],Oo);const Zp=[We,Ne`
    :host {
      display: block;
    }

    .header {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      width: 100%;
    }

    .header {
      border-bottom-color: var(--vscode-settings-headerBorder);
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    .header.panel {
      background-color: var(--vscode-panel-background);
      border-bottom-width: 0;
      box-sizing: border-box;
      padding-left: 8px;
      padding-right: 8px;
    }

    slot[name='addons'] {
      display: block;
      margin-left: auto;
    }
  `];var Rr=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let fn=class extends Ke{constructor(){super(),this.panel=!1,this.role="tablist",this.selectedIndex=0,this._tabHeaders=[],this._tabPanels=[],this._componentId="",this._tabFocus=0,this._componentId=Fu()}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),e==="selected-index"&&this._setActiveTab(),e==="panel"&&(this._tabHeaders.forEach(o=>o.panel=n!==null),this._tabPanels.forEach(o=>o.panel=n!==null))}_dispatchSelectEvent(){this.dispatchEvent(new CustomEvent("vsc-select",{detail:{selectedIndex:this.selectedIndex},composed:!0})),this.dispatchEvent(new CustomEvent("vsc-tabs-select",{detail:{selectedIndex:this.selectedIndex},composed:!0}))}_setActiveTab(){this._tabFocus=this.selectedIndex,this._tabPanels.forEach((e,i)=>{e.hidden=i!==this.selectedIndex}),this._tabHeaders.forEach((e,i)=>{e.active=i===this.selectedIndex})}_focusPrevTab(){this._tabFocus===0?this._tabFocus=this._tabHeaders.length-1:this._tabFocus-=1}_focusNextTab(){this._tabFocus===this._tabHeaders.length-1?this._tabFocus=0:this._tabFocus+=1}_onHeaderKeyDown(e){(e.key==="ArrowLeft"||e.key==="ArrowRight")&&(e.preventDefault(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","-1"),e.key==="ArrowLeft"?this._focusPrevTab():e.key==="ArrowRight"&&this._focusNextTab(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","0"),this._tabHeaders[this._tabFocus].focus()),e.key==="Enter"&&(e.preventDefault(),this.selectedIndex=this._tabFocus,this._dispatchSelectEvent())}_moveHeadersToHeaderSlot(){const e=this._mainSlotElements.filter(i=>i instanceof vi);e.length>0&&e.forEach(i=>i.setAttribute("slot","header"))}_onMainSlotChange(){this._moveHeadersToHeaderSlot(),this._tabPanels=this._mainSlotElements.filter(e=>e instanceof Xi),this._tabPanels.forEach((e,i)=>{e.ariaLabelledby=`t${this._componentId}-h${i}`,e.id=`t${this._componentId}-p${i}`,e.panel=this.panel}),this._setActiveTab()}_onHeaderSlotChange(){this._tabHeaders=this._headerSlotElements.filter(e=>e instanceof vi),this._tabHeaders.forEach((e,i)=>{e.tabId=i,e.id=`t${this._componentId}-h${i}`,e.ariaControls=`t${this._componentId}-p${i}`,e.panel=this.panel,e.active=i===this.selectedIndex})}_onHeaderClick(e){const n=e.composedPath().find(o=>o instanceof vi);n&&(this.selectedIndex=n.tabId,this._setActiveTab(),this._dispatchSelectEvent())}render(){return me`
      <div
        class=${nt({header:!0,panel:this.panel})}
        @click="${this._onHeaderClick}"
        @keydown=${this._onHeaderKeyDown}
      >
        <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        <slot name="addons"></slot>
      </div>
      <slot @slotchange=${this._onMainSlotChange}></slot>
    `}};fn.styles=Zp;Rr([K({type:Boolean,reflect:!0})],fn.prototype,"panel",void 0);Rr([K({reflect:!0})],fn.prototype,"role",void 0);Rr([K({type:Number,reflect:!0,attribute:"selected-index"})],fn.prototype,"selectedIndex",void 0);Rr([Ii({slot:"header"})],fn.prototype,"_headerSlotElements",void 0);Rr([Ii()],fn.prototype,"_mainSlotElements",void 0);fn=Rr([Ue("vscode-tabs")],fn);const Qp=[We,Ne`
    :host {
      background-color: var(--vscode-badge-background);
      border: 1px solid var(--vscode-contrastBorder, transparent);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-badge-foreground);
      display: inline-block;
      font-family: var(--vscode-font-family);
      font-size: 11px;
      font-weight: 400;
      line-height: 14px;
      min-width: 18px;
      padding: 2px 3px;
      text-align: center;
      white-space: nowrap;
    }

    :host([variant='counter']) {
      border-radius: 11px;
      box-sizing: border-box;
      height: 18px;
      line-height: 1;
      padding: 3px 5px;
    }

    :host([variant='activity-bar-counter']) {
      background-color: var(--vscode-activityBarBadge-background);
      border-radius: 20px;
      color: var(--vscode-activityBarBadge-foreground);
      font-size: 9px;
      font-weight: 600;
      line-height: 16px;
      padding: 0 4px;
    }
  `];var Vu=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Mo=class extends Ke{constructor(){super(...arguments),this.variant="default"}render(){return me` <slot></slot> `}};Mo.styles=Qp;Vu([K({reflect:!0})],Mo.prototype,"variant",void 0);Mo=Vu([Ue("vscode-badge")],Mo);const Jp=[We,Ne`
    .collapsible {
      background-color: var(--vscode-sideBar-background);
    }

    .collapsible-header {
      align-items: center;
      background-color: var(--vscode-sideBarSectionHeader-background);
      cursor: pointer;
      display: flex;
      height: 22px;
      line-height: 22px;
      user-select: none;
    }

    .collapsible-header:focus {
      opacity: 1;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
      outline-color: var(--vscode-focusBorder);
    }

    .title {
      color: var(--vscode-sideBarTitle-foreground);
      display: block;
      font-family: var(--vscode-font-family);
      font-size: 11px;
      font-weight: 700;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .title .description {
      font-weight: 400;
      margin-left: 10px;
      text-transform: none;
      opacity: 0.6;
    }

    .header-icon {
      color: var(--vscode-icon-foreground);
      display: block;
      flex-shrink: 0;
      margin: 0 3px;
    }

    .collapsible.open .header-icon {
      transform: rotate(90deg);
    }

    .header-slots {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: auto;
      margin-right: 4px;
    }

    .actions {
      display: none;
    }

    .collapsible.open .actions {
      display: block;
    }

    .header-slots slot {
      display: flex;
      max-height: 22px;
      overflow: hidden;
    }

    .header-slots slot::slotted(div) {
      align-items: center;
      display: flex;
    }

    .collapsible-body {
      display: none;
      overflow: hidden;
    }

    .collapsible.open .collapsible-body {
      display: block;
    }
  `];var Ko=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let vr=class extends Ke{constructor(){super(...arguments),this.title="",this.description="",this.open=!1}_emitToggleEvent(){this.dispatchEvent(new CustomEvent("vsc-collapsible-toggle",{detail:{open:this.open}}))}_onHeaderClick(){this.open=!this.open,this._emitToggleEvent()}_onHeaderKeyDown(e){e.key==="Enter"&&(this.open=!this.open,this._emitToggleEvent())}render(){const e=nt({collapsible:!0,open:this.open}),i=me`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="header-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
      />
    </svg>`,n=this.description?me`<span class="description">${this.description}</span>`:Me;return me`
      <div class="${e}">
        <div
          class="collapsible-header"
          tabindex="0"
          title="${this.title}"
          @click="${this._onHeaderClick}"
          @keydown="${this._onHeaderKeyDown}"
        >
          ${i}
          <h3 class="title">${this.title}${n}</h3>
          <div class="header-slots">
            <div class="actions"><slot name="actions"></slot></div>
            <div class="decorations"><slot name="decorations"></slot></div>
          </div>
        </div>
        <div class="collapsible-body" part="body">
          <slot></slot>
        </div>
      </div>
    `}};vr.styles=Jp;Ko([K({type:String})],vr.prototype,"title",void 0);Ko([K()],vr.prototype,"description",void 0);Ko([K({type:Boolean,reflect:!0})],vr.prototype,"open",void 0);vr=Ko([Ue("vscode-collapsible")],vr);const e1=[We,Ne`
    :host {
      background-color: var(--vscode-widget-border);
      display: block;
      height: 1px;
      margin-bottom: 10px;
      margin-top: 10px;
    }
  `];var Hu=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Lo=class extends Ke{constructor(){super(...arguments),this.role="separator"}render(){return me``}};Lo.styles=e1;Hu([K({reflect:!0})],Lo.prototype,"role",void 0);Lo=Hu([Ue("vscode-divider")],Lo);const t1=[We,Ne`
    :host {
      display: block;
      max-width: 727px;
    }
  `];var Ar=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},On;(function(t){t.HORIZONTAL="horizontal",t.VERTICAL="vertical"})(On||(On={}));const i1=t=>["vscode-textfield","vscode-textarea"].includes(t.tagName.toLocaleLowerCase()),n1=t=>t.tagName.toLocaleLowerCase()==="vscode-single-select",r1=t=>t.tagName.toLocaleLowerCase()==="vscode-multi-select",Vc=t=>t.tagName.toLocaleLowerCase()==="vscode-checkbox",Hc=t=>t.tagName.toLocaleLowerCase()==="vscode-radio";let pn=class extends Ke{constructor(){super(...arguments),this.breakpoint=490,this._responsive=!1,this._firstUpdateComplete=!1,this._resizeObserverCallbackBound=this._resizeObserverCallback.bind(this)}set responsive(e){this._responsive=e,this._firstUpdateComplete&&(e?this._activateResponsiveLayout():this._deactivateResizeObserver())}get responsive(){return this._responsive}get data(){return this._collectFormData()}_collectFormData(){const e=["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select","vscode-checkbox","vscode-radio"].join(","),i=this.querySelectorAll(e),n={};return i.forEach(o=>{if(!o.hasAttribute("name"))return;const r=o.getAttribute("name");r&&(Vc(o)&&o.checked?n[r]=Array.isArray(n[r])?[...n[r],o.value]:[o.value]:r1(o)?n[r]=o.value:Vc(o)&&!o.checked?n[r]=Array.isArray(n[r])?n[r]:[]:Hc(o)&&o.checked||i1(o)||n1(o)?n[r]=o.value:Hc(o)&&!o.checked&&(n[r]=n[r]?n[r]:""))}),n}_toggleCompactLayout(e){this._assignedFormGroups.forEach(i=>{i.dataset.originalVariant||(i.dataset.originalVariant=i.variant);const n=i.dataset.originalVariant;e===On.VERTICAL&&n==="horizontal"?i.variant="vertical":i.variant=n,i.querySelectorAll("vscode-checkbox-group, vscode-radio-group").forEach(r=>{r.dataset.originalVariant||(r.dataset.originalVariant=r.variant);const s=r.dataset.originalVariant;e===On.HORIZONTAL&&s===On.HORIZONTAL?r.variant="horizontal":r.variant="vertical"})})}_resizeObserverCallback(e){let i=0;for(const o of e)i=o.contentRect.width;const n=i<this.breakpoint?On.VERTICAL:On.HORIZONTAL;n!==this._currentFormGroupLayout&&(this._toggleCompactLayout(n),this._currentFormGroupLayout=n)}_activateResponsiveLayout(){this._resizeObserver=new ResizeObserver(this._resizeObserverCallbackBound),this._resizeObserver.observe(this._wrapperElement)}_deactivateResizeObserver(){var e;(e=this._resizeObserver)==null||e.disconnect(),this._resizeObserver=null}firstUpdated(){this._firstUpdateComplete=!0,this._responsive&&this._activateResponsiveLayout()}render(){return me`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};pn.styles=t1;Ar([K({type:Boolean,reflect:!0})],pn.prototype,"responsive",null);Ar([K({type:Number})],pn.prototype,"breakpoint",void 0);Ar([K({type:Object})],pn.prototype,"data",null);Ar([Mt(".wrapper")],pn.prototype,"_wrapperElement",void 0);Ar([Ii({selector:"vscode-form-group"})],pn.prototype,"_assignedFormGroups",void 0);pn=Ar([Ue("vscode-form-container")],pn);const s1=[We,Ne`
    :host {
      color: var(--vsc-foreground-translucent);
      display: block;
      margin-bottom: 4px;
      margin-top: 4px;
      max-width: 720px;
    }

    :host([vertical]) {
      margin-left: 0;
    }
  `,jo];var o1=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let il=class extends Ke{constructor(){super(),Ou()}render(){return me`<slot></slot>`}};il.styles=s1;il=o1([Ue("vscode-form-helper")],il);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:a1}=pp,Uc=()=>document.createComment(""),Pr=(t,e,i)=>{var r;const n=t._$AA.parentNode,o=e===void 0?t._$AB:e._$AA;if(i===void 0){const s=n.insertBefore(Uc(),o),a=n.insertBefore(Uc(),o);i=new a1(s,a,t,t.options)}else{const s=i._$AB.nextSibling,a=i._$AM,l=a!==t;if(l){let d;(r=i._$AQ)==null||r.call(i,t),i._$AM=t,i._$AP!==void 0&&(d=t._$AU)!==a._$AU&&i._$AP(d)}if(s!==o||l){let d=i._$AA;for(;d!==s;){const h=d.nextSibling;n.insertBefore(d,o),d=h}}}return i},Cn=(t,e,i=t)=>(t._$AI(e,i),t),l1={},c1=(t,e=l1)=>t._$AH=e,h1=t=>t._$AH,ma=t=>{var n;(n=t._$AP)==null||n.call(t,!1,!0);let e=t._$AA;const i=t._$AB.nextSibling;for(;e!==i;){const o=e.nextSibling;e.remove(),e=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gc=(t,e,i)=>{const n=new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},d1=Hl(class extends Ul{constructor(t){if(super(t),t.type!==Vl.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let n;i===void 0?i=e:e!==void 0&&(n=e);const o=[],r=[];let s=0;for(const a of t)o[s]=n?n(a,s):s,r[s]=i(a,s),s++;return{values:r,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,n]){const o=h1(t),{values:r,keys:s}=this.dt(e,i,n);if(!Array.isArray(o))return this.ut=s,r;const a=this.ut??(this.ut=[]),l=[];let d,h,c=0,g=o.length-1,f=0,u=r.length-1;for(;c<=g&&f<=u;)if(o[c]===null)c++;else if(o[g]===null)g--;else if(a[c]===s[f])l[f]=Cn(o[c],r[f]),c++,f++;else if(a[g]===s[u])l[u]=Cn(o[g],r[u]),g--,u--;else if(a[c]===s[u])l[u]=Cn(o[c],r[u]),Pr(t,l[u+1],o[c]),c++,u--;else if(a[g]===s[f])l[f]=Cn(o[g],r[f]),Pr(t,o[c],o[g]),g--,f++;else if(d===void 0&&(d=Gc(s,f,u),h=Gc(a,c,g)),d.has(a[c]))if(d.has(a[g])){const _=h.get(s[f]),w=_!==void 0?o[_]:null;if(w===null){const m=Pr(t,o[c]);Cn(m,r[f]),l[f]=m}else l[f]=Cn(w,r[f]),Pr(t,o[c],w),o[_]=null;f++}else ma(o[g]),g--;else ma(o[c]),c++;for(;f<=u;){const _=Pr(t,l[u+1]);Cn(_,r[f]),l[f++]=_}for(;c<=g;){const _=o[c++];_!==null&&ma(_)}return this.ut=s,c1(t,l),Ki}}),Do=me`
  <span class="icon">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
      />
    </svg>
  </span>
`;var oo=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Nn=class extends Ke{constructor(){super(...arguments),this.value="",this.description="",this.selected=!1,this.disabled=!1}render(){return me`<slot></slot>`}};Nn.styles=We;oo([K({type:String})],Nn.prototype,"value",void 0);oo([K({type:String})],Nn.prototype,"description",void 0);oo([K({type:Boolean,reflect:!0})],Nn.prototype,"selected",void 0);oo([K({type:Boolean,reflect:!0})],Nn.prototype,"disabled",void 0);Nn=oo([Ue("vscode-option")],Nn);const u1=(t,e)=>{const i={match:!1,ranges:[]},n=t.toLowerCase(),o=e.toLowerCase(),r=n.split(" ");let s=0;return r.forEach((a,l)=>{if(l>0&&(s+=r[l-1].length+1),i.match)return;const d=a.indexOf(o),h=o.length;d===0&&(i.match=!0,i.ranges.push([s+d,Math.min(s+d+h,t.length)]))}),i},f1=(t,e)=>{const i={match:!1,ranges:[]};return t.toLowerCase().indexOf(e.toLowerCase())===0&&(i.match=!0,i.ranges=[[0,e.length]]),i},p1=(t,e)=>{const i={match:!1,ranges:[]},n=t.toLowerCase().indexOf(e.toLowerCase());return n>-1&&(i.match=!0,i.ranges=[[n,n+e.length]]),i},g1=(t,e)=>{const i={match:!1,ranges:[]};let n=0,o=0;const r=e.length-1,s=t.toLowerCase(),a=e.toLowerCase();for(let l=0;l<=r;l++){if(o=s.indexOf(a[l],n),o===-1)return{match:!1,ranges:[]};i.match=!0,i.ranges.push([o,o+1]),n=o+1}return i},v1=(t,e,i)=>{const n=[];return t.forEach(o=>{let r;switch(i){case"startsWithPerTerm":r=u1(o.label,e);break;case"startsWith":r=f1(o.label,e);break;case"contains":r=p1(o.label,e);break;default:r=g1(o.label,e)}r.match&&n.push({...o,ranges:r.ranges})}),n},po=t=>{const e=[];return t===" "?(e.push(me`&nbsp;`),e):(t.indexOf(" ")===0&&e.push(me`&nbsp;`),e.push(me`${t.trimStart().trimEnd()}`),t.lastIndexOf(" ")===t.length-1&&e.push(me`&nbsp;`),e)},Uu=(t,e)=>{const i=[],n=e.length;return n<1?me`${t}`:(e.forEach((o,r)=>{const s=t.substring(o[0],o[1]);r===0&&o[0]!==0&&i.push(...po(t.substring(0,e[0][0]))),r>0&&r<n&&o[0]-e[r-1][1]!==0&&i.push(...po(t.substring(e[r-1][1],o[0]))),i.push(me`<b>${po(s)}</b>`),r===n-1&&o[1]<t.length&&i.push(...po(t.substring(o[1],t.length)))}),i)};var dt=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const bo=10,Pn=22,_1=bo+Pn+2;class ot extends Ke{constructor(){super(...arguments),this.ariaExpanded="false",this.combobox=!1,this.invalid=!1,this.focused=!1,this.position="below",this.tabIndex=0,this._activeIndex=-1,this._currentDescription="",this._filter="fuzzy",this._filterPattern="",this._selectedIndex=-1,this._selectedIndexes=[],this._showDropdown=!1,this._options=[],this._value="",this._values=[],this._listScrollTop=0,this._multiple=!1,this._valueOptionIndexMap={},this._isHoverForbidden=!1,this._disabled=!1,this._originalTabIndex=void 0,this._onClickOutside=e=>{e.composedPath().findIndex(o=>o===this)===-1&&(this._toggleDropdown(!1),window.removeEventListener("click",this._onClickOutside))},this._onMouseMove=()=>{this._isHoverForbidden=!1,window.removeEventListener("mousemove",this._onMouseMove)}}set disabled(e){this._disabled=e,this.ariaDisabled=e?"true":"false",e===!0?(this._originalTabIndex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this._originalTabIndex??0,this._originalTabIndex=void 0),this.requestUpdate()}get disabled(){return this._disabled}set filter(e){["contains","fuzzy","startsWith","startsWithPerTerm"].includes(e)?this._filter=e:(this._filter="fuzzy",console.warn(`[VSCode Webview Elements] Invalid filter: "${e}", fallback to default. Valid values are: "contains", "fuzzy", "startsWith", "startsWithPerm".`,this))}get filter(){return this._filter}set options(e){this._options=e.map((i,n)=>({...i,index:n}))}get options(){return this._options.map(({label:e,value:i,description:n,selected:o,disabled:r})=>({label:e,value:i,description:n,selected:o,disabled:r}))}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onComponentKeyDown),this.addEventListener("focus",this._onComponentFocus),this.addEventListener("blur",this._onComponentBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onComponentKeyDown),this.removeEventListener("focus",this._onComponentFocus),this.removeEventListener("blur",this._onComponentBlur)}get _filteredOptions(){return!this.combobox||this._filterPattern===""?this._options:v1(this._options,this._filterPattern,this._filter)}get _currentOptions(){return this.combobox?this._filteredOptions:this._options}_addOptionsFromSlottedElements(){const e=[];let i=0;const n=this._assignedOptions??[],o={selectedIndexes:[],values:[]};return this._valueOptionIndexMap={},n.forEach(r=>{const{innerText:s,description:a,disabled:l}=r,d=r.value??""?r.value:s.trim(),h=r.selected??!1,c={label:s.trim(),value:d,description:a,selected:h,index:i,disabled:l};i=e.push(c),h&&(o.selectedIndexes.push(e.length-1),o.values.push(d)),this._valueOptionIndexMap[c.value]=c.index}),this._options=e,o}async _toggleDropdown(e){this._showDropdown=e,this.ariaExpanded=String(e),e&&!this._multiple&&!this.combobox&&(this._activeIndex=this._selectedIndex,this._activeIndex>bo-1&&(await this.updateComplete,this._listElement.scrollTop=Math.floor(this._activeIndex*Pn))),e?window.addEventListener("click",this._onClickOutside):window.removeEventListener("click",this._onClickOutside)}_dispatchChangeEvent(){this._multiple?this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndexes:this._selectedIndexes,value:this._values}})):this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndex:this._selectedIndex,value:this._value}})),this.dispatchEvent(new Event("change")),this.dispatchEvent(new Event("input"))}_onFaceClick(){this._toggleDropdown(!this._showDropdown),this._multiple&&(this._activeIndex=0)}_toggleComboboxDropdown(){this._filterPattern="",this._toggleDropdown(!this._showDropdown),this._multiple&&(this._activeIndex=-1)}_onComboboxButtonClick(){this._toggleComboboxDropdown()}_onComboboxButtonKeyDown(e){e.key==="Enter"&&this._toggleComboboxDropdown()}_onOptionMouseOver(e){if(this._isHoverForbidden)return;const i=e.target;i.matches(".option")&&(this._activeIndex=Number(this.combobox?i.dataset.filteredIndex:i.dataset.index))}_onEnterKeyDown(){const e=this.combobox?this._filteredOptions:this._options,i=!this._showDropdown;this._toggleDropdown(i),!this._multiple&&!i&&this._selectedIndex!==this._activeIndex&&(this._selectedIndex=e[this._activeIndex].index,this._value=this._options[this._selectedIndex].value,this._dispatchChangeEvent()),this.combobox&&(!this._multiple&&!i&&(this._selectedIndex=this._filteredOptions[this._activeIndex].index),!this._multiple&&i&&this.updateComplete.then(()=>{this._scrollActiveElementToTop()})),this._multiple&&i&&(this._activeIndex=0)}_onSpaceKeyDown(){if(!this._showDropdown){this._toggleDropdown(!0);return}if(this._showDropdown&&this._multiple&&this._activeIndex>-1){const e=this.combobox?this._filteredOptions:this._options,{selected:i}=e[this._activeIndex];e[this._activeIndex].selected=!i,this._selectedIndexes=[],e.forEach(({index:n,selected:o})=>{o&&this._selectedIndexes.push(n)})}}_scrollActiveElementToTop(){this._listElement.scrollTop=Math.floor(this._activeIndex*Pn)}async _adjustOptionListScrollPos(e){if((this.combobox?this._filteredOptions.length:this._options.length)<=bo)return;this._isHoverForbidden=!0,window.addEventListener("mousemove",this._onMouseMove),this._listElement||await this.updateComplete;const n=this._listElement.scrollTop,o=this._activeIndex*Pn;e==="down"&&o+Pn>=_1+n&&(this._listElement.scrollTop=(this._activeIndex-(bo-1))*Pn),e==="up"&&o<=n-Pn&&this._scrollActiveElementToTop()}_onArrowUpKeyDown(){if(this._showDropdown){if(this._activeIndex<=0)return;this._activeIndex-=1,this._adjustOptionListScrollPos("up")}}_onArrowDownKeyDown(){if(this._showDropdown){if(this._activeIndex>=this._currentOptions.length-1)return;this._activeIndex+=1,this._adjustOptionListScrollPos("down")}}_onComponentKeyDown(e){[" ","ArrowUp","ArrowDown","Escape"].includes(e.key)&&(e.stopPropagation(),e.preventDefault()),e.key==="Enter"&&this._onEnterKeyDown(),e.key===" "&&this._onSpaceKeyDown(),e.key==="Escape"&&this._toggleDropdown(!1),e.key==="ArrowUp"&&this._onArrowUpKeyDown(),e.key==="ArrowDown"&&this._onArrowDownKeyDown()}_onComponentFocus(){this.focused=!0}_onComponentBlur(){this.focused=!1}_onSlotChange(){const e=this._addOptionsFromSlottedElements();e.selectedIndexes.length>0&&(this._selectedIndex=e.selectedIndexes[0],this._selectedIndexes=e.selectedIndexes,this._value=e.values[0],this._values=e.values),!this._multiple&&!this.combobox&&e.selectedIndexes.length===0&&(this._selectedIndex=-1),this.requestUpdate()}_onComboboxInputFocus(e){e.target.select()}_onComboboxInputInput(e){this._filterPattern=e.target.value,this._activeIndex=-1,this._toggleDropdown(!0)}_onComboboxInputClick(){this._toggleDropdown(!0)}_renderOptions(){return[]}_renderDescription(){if(!this._options[this._activeIndex])return Me;const{description:e}=this._options[this._activeIndex];return e?me`<div class="description">${e}</div>`:Me}_renderSelectFace(){return me`${Me}`}_renderComboboxFace(){return me`${Me}`}_renderDropdownControls(){return me`${Me}`}_renderDropdown(){const e=nt({dropdown:!0,multiple:this._multiple});return me`
      <div class="${e}">
        ${this.position==="above"?this._renderDescription():Me}
        ${this._renderOptions()} ${this._renderDropdownControls()}
        ${this.position==="below"?this._renderDescription():Me}
      </div>
    `}render(){return me`
      <slot class="main-slot" @slotchange="${this._onSlotChange}"></slot>
      ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
      ${this._showDropdown?this._renderDropdown():Me}
    `}}dt([K({type:String,reflect:!0,attribute:"aria-expanded"})],ot.prototype,"ariaExpanded",void 0);dt([K({type:Boolean,reflect:!0})],ot.prototype,"combobox",void 0);dt([K({type:Boolean,reflect:!0})],ot.prototype,"disabled",null);dt([K({type:Boolean,reflect:!0})],ot.prototype,"invalid",void 0);dt([K()],ot.prototype,"filter",null);dt([K({type:Boolean,reflect:!0})],ot.prototype,"focused",void 0);dt([K({type:Array})],ot.prototype,"options",null);dt([K({reflect:!0})],ot.prototype,"position",void 0);dt([K({type:Number,attribute:!0,reflect:!0})],ot.prototype,"tabIndex",void 0);dt([Ii({flatten:!0,selector:"vscode-option"})],ot.prototype,"_assignedOptions",void 0);dt([Fe()],ot.prototype,"_activeIndex",void 0);dt([Fe()],ot.prototype,"_currentDescription",void 0);dt([Fe()],ot.prototype,"_filter",void 0);dt([Fe()],ot.prototype,"_filteredOptions",null);dt([Fe()],ot.prototype,"_filterPattern",void 0);dt([Fe()],ot.prototype,"_selectedIndex",void 0);dt([Fe()],ot.prototype,"_selectedIndexes",void 0);dt([Fe()],ot.prototype,"_showDropdown",void 0);dt([Fe()],ot.prototype,"_options",void 0);dt([Fe()],ot.prototype,"_value",void 0);dt([Fe()],ot.prototype,"_values",void 0);dt([Fe()],ot.prototype,"_listScrollTop",void 0);dt([Mt(".options")],ot.prototype,"_listElement",void 0);const Gu=[We,Ne`
    :host {
      display: inline-block;
      max-width: 100%;
      outline: none;
      position: relative;
      width: 320px;
    }

    .main-slot {
      display: none;
    }

    .select-face,
    .combobox-face {
      background-color: var(--vscode-settings-dropdownBackground);
      border-color: var(--vscode-settings-dropdownBorder);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-dropdownForeground);
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 18px;
      position: relative;
      user-select: none;
      width: 100%;
    }

    :host([invalid]) .select-face,
    :host(:invalid) .select-face,
    :host([invalid]) .combobox-face,
    :host(:invalid) .combobox-face {
      background-color: var(--vscode-inputValidation-errorBackground);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .select-face {
      cursor: pointer;
      display: block;
      padding: 3px 4px;
    }

    .select-face .text {
      display: block;
      height: 18px;
      overflow: hidden;
    }

    .select-face.multiselect {
      padding: 0;
    }

    .select-face-badge {
      background-color: var(--vscode-badge-background);
      border-radius: 2px;
      color: var(--vscode-badge-foreground);
      display: inline-block;
      flex-shrink: 0;
      font-size: 11px;
      line-height: 16px;
      margin: 2px;
      padding: 2px 3px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .select-face-badge.no-item {
      background-color: transparent;
      color: inherit;
    }

    .combobox-face {
      display: flex;
    }

    :host(:focus) .select-face,
    :host(:focus) .combobox-face,
    :host([focused]) .select-face,
    :host([focused]) .combobox-face {
      border-color: var(--vscode-focusBorder);
      outline: none;
    }

    .combobox-input {
      background-color: transparent;
      box-sizing: border-box;
      border: 0;
      color: var(--vscode-foreground);
      display: block;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      line-height: 16px;
      padding: 4px;
      width: 100%;
    }

    .combobox-input:focus {
      outline: none;
    }

    .combobox-button {
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground);
      cursor: pointer;
      flex-shrink: 0;
      height: 24px;
      margin: 0;
      padding: 0;
      width: 30px;
    }

    .combobox-button:focus,
    .combobox-button:hover {
      background-color: var(--vscode-list-hoverBackground);
    }

    .combobox-button:focus {
      outline: 0;
    }

    .icon {
      color: var(--vscode-foreground);
      display: block;
      height: 14px;
      pointer-events: none;
      position: absolute;
      right: 8px;
      top: 5px;
      width: 14px;
    }

    .icon svg {
      color: var(--vscode-foreground);
      height: 100%;
      width: 100%;
    }

    .dropdown {
      background-color: var(--vscode-settings-dropdownBackground);
      border-color: var(--vscode-settings-dropdownListBorder);
      border-radius: 0 0 3px 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      left: 0;
      padding-bottom: 2px;
      position: absolute;
      top: 100%;
      width: 100%;
      z-index: var(--dropdown-z-index, 2);
    }

    :host([position='above']) .dropdown {
      border-radius: 3px 3px 0 0;
      bottom: 26px;
      padding-bottom: 0;
      padding-top: 2px;
      top: auto;
    }

    :host(:focus) .dropdown,
    :host([focused]) .dropdown {
      border-color: var(--vscode-focusBorder);
    }

    .options {
      box-sizing: border-box;
      cursor: pointer;
      list-style: none;
      margin: 0;
      max-height: 222px;
      overflow: auto;
      padding: 1px;
    }

    .option {
      align-items: center;
      color: var(--vscode-foreground);
      cursor: pointer;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      padding: 1px 3px;
      user-select: none;
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
    }

    .option b {
      color: var(--vscode-list-highlightForeground);
    }

    .option.active b {
      color: var(--vscode-list-focusHighlightForeground);
    }

    .option:hover {
      background-color: var(--vscode-list-hoverBackground);
      color: var(--vscode-list-hoverForeground);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option:hover,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option:hover {
      border-style: dotted;
      border-color: var(--vscode-list-focusOutline);
    }

    .option.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .option.active,
    .option.active:hover {
      background-color: var(--vscode-list-activeSelectionBackground);
      color: var(--vscode-list-activeSelectionForeground);
      border-color: var(--vscode-list-activeSelectionBackground);
      border-style: solid;
      border-width: 1px;
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option.active,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option.active:hover {
      border-color: var(--vscode-list-focusOutline);
      border-style: dashed;
    }

    .option-label {
      display: block;
      pointer-events: none;
      width: 100%;
    }

    .dropdown.multiple .option.selected {
      background-color: var(--vscode-list-hoverBackground);
      border-color: var(--vscode-list-hoverBackground);
    }

    .dropdown.multiple .option.selected.active {
      background-color: var(--vscode-list-activeSelectionBackground);
      color: var(--vscode-list-activeSelectionForeground);
      border-color: var(--vscode-list-activeSelectionBackground);
    }

    .checkbox-icon {
      background-color: var(--vscode-settings-checkboxBackground);
      border: 1px solid currentColor;
      border-radius: 2px;
      box-sizing: border-box;
      height: 14px;
      margin-right: 5px;
      overflow: hidden;
      position: relative;
      width: 14px;
    }

    .checkbox-icon.checked:before,
    .checkbox-icon.checked:after {
      content: '';
      display: block;
      height: 5px;
      position: absolute;
      transform: rotate(-45deg);
      width: 10px;
    }

    .checkbox-icon.checked:before {
      background-color: var(--vscode-foreground);
      left: 1px;
      top: 2.5px;
    }

    .checkbox-icon.checked:after {
      background-color: var(--vscode-settings-checkboxBackground);
      left: 1px;
      top: -0.5px;
    }

    .dropdown-controls {
      display: flex;
      justify-content: flex-end;
      padding: 4px;
    }

    .dropdown-controls :not(:last-child) {
      margin-right: 4px;
    }

    .action-icon {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground);
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      padding: 0;
      width: 24px;
    }

    .action-icon:focus {
      outline: none;
    }

    .action-icon:focus-visible {
      outline: 1px solid var(--vscode-focusBorder);
      outline-offset: -1px;
    }

    .description {
      border-color: var(--vscode-settings-dropdownBorder);
      border-style: solid;
      border-width: 1px 0 0;
      color: var(--vscode-foreground);
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 1.3;
      padding: 6px 4px;
      word-wrap: break-word;
    }

    :host([position='above']) .description {
      border-width: 0 0 1px;
    }
  `];var Gn=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let bi=class extends ot{set selectedIndexes(e){this._selectedIndexes=e}get selectedIndexes(){return this._selectedIndexes}set value(e){const i=Array.isArray(e)?e.map(n=>String(n)):[String(e)];this._values=[],this._selectedIndexes.forEach(n=>{this._options[n].selected=!1}),this._selectedIndexes=[],i.forEach(n=>{typeof this._valueOptionIndexMap[n]=="number"&&(this._selectedIndexes.push(this._valueOptionIndexMap[n]),this._options[this._valueOptionIndexMap[n]].selected=!0,this._values.push(n))}),this._selectedIndexes.length>0?this._requestedValueToSetLater=[]:this._requestedValueToSetLater=Array.isArray(e)?e:[e],this._setFormValue(),this._manageRequired()}get value(){return this._values}get form(){return this._internals.form}get type(){return"select-multiple"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.defaultValue=[],this.required=!1,this.name=void 0,this._requestedValueToSetLater=[],this._multiple=!0,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setDefaultValue(),this._manageRequired()})}formResetCallback(){this.updateComplete.then(()=>{this.value=this.defaultValue})}formStateRestoreCallback(e,i){const n=Array.from(e.entries()).map(o=>String(o[1]));this.updateComplete.then(()=>{this.value=n})}_setDefaultValue(){if(Array.isArray(this.defaultValue)&&this.defaultValue.length>0){const e=this.defaultValue.map(i=>String(i));this.value=e}}_manageRequired(){const{value:e}=this;e.length===0&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._faceElement):this._internals.setValidity({})}_setFormValue(){const e=new FormData;this._values.forEach(i=>{e.append(this.name??"",i)}),this._internals.setFormValue(e)}_onSlotChange(){super._onSlotChange(),this._requestedValueToSetLater.length>0&&this.options.forEach((e,i)=>{this._requestedValueToSetLater.includes(e.value)&&(this._selectedIndexes.push(i),this._values.push(e.value),this._options[i].selected=!0,this._requestedValueToSetLater=this._requestedValueToSetLater.filter(n=>n!==e.value))})}_onOptionClick(e){const n=e.composedPath().find(r=>"matches"in r?r.matches("li.option"):!1);if(!n)return;const o=Number(n.dataset.index);this._options[o]&&(this._options[o].selected=!this._options[o].selected),this._selectedIndexes=[],this._values=[],this._options.forEach(r=>{r.selected&&(this._selectedIndexes.push(r.index),this._values.push(r.value))}),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()}_onMultiAcceptClick(){this._toggleDropdown(!1)}_onMultiDeselectAllClick(){this._selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!1})),this._manageRequired(),this._dispatchChangeEvent()}_onMultiSelectAllClick(){this._selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!0})),this._options.forEach((e,i)=>{this._selectedIndexes.push(i),this._values.push(e.value),this._dispatchChangeEvent()}),this._setFormValue(),this._manageRequired()}_renderLabel(){switch(this._selectedIndexes.length){case 0:return me`<span class="select-face-badge no-item"
          >No items selected</span
        >`;case 1:return me`<span class="select-face-badge">1 item selected</span>`;default:return me`<span class="select-face-badge"
          >${this._selectedIndexes.length} items selected</span
        >`}}_renderSelectFace(){return me`
      <div
        class="select-face face multiselect"
        @click="${this._onFaceClick}"
        tabindex="${this.tabIndex>-1?0:-1}"
      >
        ${this._renderLabel()} ${Do}
      </div>
    `}_renderComboboxFace(){const e=this._selectedIndex>-1?this._options[this._selectedIndex].label:"";return me`
      <div class="combobox-face face">
        ${this._renderLabel()}
        <input
          class="combobox-input"
          spellcheck="false"
          type="text"
          .value="${e}"
          @focus="${this._onComboboxInputFocus}"
          @input="${this._onComboboxInputInput}"
          @click="${this._onComboboxInputClick}"
        />
        <button
          class="combobox-button"
          type="button"
          @click="${this._onComboboxButtonClick}"
          @keydown="${this._onComboboxButtonKeyDown}"
        >
          ${Do}
        </button>
      </div>
    `}_renderOptions(){const e=this.combobox?this._filteredOptions:this._options;return me`
      <ul
        class="options"
        @click="${this._onOptionClick}"
        @mouseover="${this._onOptionMouseOver}"
      >
        ${d1(e,i=>i.index,(i,n)=>{var a;const o=this._selectedIndexes.includes(i.index),r=nt({active:n===this._activeIndex,option:!0,selected:o}),s=nt({"checkbox-icon":!0,checked:o});return me`
              <li
                class="${r}"
                data-index="${i.index}"
                data-filtered-index="${n}"
              >
                <span class="${s}"></span>
                <span class="option-label"
                  >${((a=i.ranges)==null?void 0:a.length)??!1?Uu(i.label,i.ranges??[]):i.label}</span
                >
              </li>
            `})}
      </ul>
    `}_renderDropdownControls(){return me`
      <div class="dropdown-controls">
        <button
          type="button"
          @click="${this._onMultiSelectAllClick}"
          title="Select all"
          class="action-icon"
          id="select-all"
        >
          <vscode-icon name="checklist"></vscode-icon>
        </button>
        <button
          type="button"
          @click="${this._onMultiDeselectAllClick}"
          title="Deselect all"
          class="action-icon"
          id="select-none"
        >
          <vscode-icon name="clear-all"></vscode-icon>
        </button>
        <vscode-button
          class="button-accept"
          @click="${this._onMultiAcceptClick}"
          >OK</vscode-button
        >
      </div>
    `}};bi.styles=Gu;bi.shadowRootOptions={...gi.shadowRootOptions,delegatesFocus:!0};bi.formAssociated=!0;Gn([K({type:Array,attribute:"default-value"})],bi.prototype,"defaultValue",void 0);Gn([K({type:Boolean,reflect:!0})],bi.prototype,"required",void 0);Gn([K({reflect:!0})],bi.prototype,"name",void 0);Gn([K({type:Array,attribute:!1})],bi.prototype,"selectedIndexes",null);Gn([K({type:Array})],bi.prototype,"value",null);Gn([Mt(".face")],bi.prototype,"_faceElement",void 0);bi=Gn([Ue("vscode-multi-select")],bi);const m1=[We,Ne`
    :host {
      align-items: center;
      display: block;
      height: 28px;
      margin: 0;
      outline: none;
      width: 28px;
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke: transparent;
      stroke-width: 2px;
    }

    .indeterminate-indicator-1 {
      fill: none;
      stroke: var(--vscode-progressBar-background);
      stroke-width: 2px;
      stroke-linecap: square;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `];var Yo=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let _r=class extends Ke{constructor(){super(...arguments),this.ariaLabel="Loading",this.ariaLive="assertive",this.role="alert"}render(){return me`<svg class="progress" part="progress" viewBox="0 0 16 16">
      <circle
        class="background"
        part="background"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
      <circle
        class="indeterminate-indicator-1"
        part="indeterminate-indicator-1"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
    </svg>`}};_r.styles=m1;Yo([K({reflect:!0,attribute:"aria-label"})],_r.prototype,"ariaLabel",void 0);Yo([K({reflect:!0,attribute:"aria-live"})],_r.prototype,"ariaLive",void 0);Yo([K({reflect:!0})],_r.prototype,"role",void 0);_r=Yo([Ue("vscode-progress-ring")],_r);const b1=[We,Lu,Ne`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 9px;
    }

    .icon.checked:before {
      background-color: currentColor;
      border-radius: 4px;
      content: '';
      height: 8px;
      left: 50%;
      margin: -4px 0 0 -4px;
      position: absolute;
      top: 50%;
      width: 8px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder);
      outline-offset: -1px;
    }
  `,jo];var ti=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Et=class extends Mu(Gl){constructor(){super(),this.autofocus=!1,this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name="",this.value="",this.disabled=!1,this.required=!1,this.role="radio",this.tabIndex=0,this._slottedText="",this.type="radio",this._handleClick=()=>{this.disabled||this.checked||(this._checkButton(),this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0})))},this._handleKeyDown=e=>{var i;!this.disabled&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key===" "&&!this.checked&&(this.checked=!0,this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0}))),e.key==="Enter"&&((i=this._internals.form)==null||i.requestSubmit()))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("click",this._handleClick),this._handleValueChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeyDown),this.removeEventListener("click",this._handleClick)}update(e){super.update(e),e.has("checked")&&this._handleValueChange(),e.has("required")&&this._handleValueChange()}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formResetCallback(){this._getRadios().forEach(i=>{i.checked=i.defaultChecked}),this.updateComplete.then(()=>{this._handleValueChange()})}formStateRestoreCallback(e,i){this.value===e&&e!==""&&(this.checked=!0)}_dispatchCustomEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_getRadios(){const e=this.getRootNode({composed:!0});if(!e)return[];const i=e.querySelectorAll(`vscode-radio[name="${this.name}"]`);return Array.from(i)}_uncheckOthers(e){e.forEach(i=>{i!==this&&(i.checked=!1)})}_checkButton(){const e=this._getRadios();this.checked=!0,e.forEach(i=>{i!==this&&(i.checked=!1)})}setComponentValidity(e){e?this._internals.setValidity({}):this._internals.setValidity({valueMissing:!0},"Please select one of these options.",this._inputEl)}_setGroupValidity(e,i){this.updateComplete.then(()=>{e.forEach(n=>{n.setComponentValidity(i)})})}_setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null,this._internals.setFormValue(e)}_handleValueChange(){const e=this._getRadios(),i=e.some(n=>n.required);if(this._setActualFormValue(),this.checked)this._uncheckOthers(e),this._setGroupValidity(e,!0);else{const n=!!e.find(r=>r.checked),o=i&&!n;this._setGroupValidity(e,!o)}}render(){const e=nt({icon:!0,checked:this.checked}),i=nt({"label-inner":!0,"is-slot-empty":this._slottedText===""});return me`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="radio"
          type="checkbox"
          ?checked="${this.checked}"
          value="${this.value}"
          tabindex=${this.tabIndex}
        />
        <div class="${e}"></div>
        <label for="input" class="label" @click="${this._handleClick}">
          <span class="${i}">
            ${this._renderLabelAttribute()}
            <slot @slotchange="${this._handleSlotChange}"></slot>
          </span>
        </label>
      </div>
    `}};Et.styles=b1;Et.formAssociated=!0;Et.shadowRootOptions={...gi.shadowRootOptions,delegatesFocus:!0};ti([K({type:Boolean,reflect:!0})],Et.prototype,"autofocus",void 0);ti([K({type:Boolean,reflect:!0})],Et.prototype,"checked",void 0);ti([K({type:Boolean,reflect:!0,attribute:"default-checked"})],Et.prototype,"defaultChecked",void 0);ti([K({type:Boolean,reflect:!0})],Et.prototype,"invalid",void 0);ti([K({reflect:!0})],Et.prototype,"name",void 0);ti([K()],Et.prototype,"value",void 0);ti([K({type:Boolean,reflect:!0})],Et.prototype,"disabled",void 0);ti([K({type:Boolean,reflect:!0})],Et.prototype,"required",void 0);ti([K({reflect:!0})],Et.prototype,"role",void 0);ti([K({type:Number,reflect:!0})],Et.prototype,"tabIndex",void 0);ti([Fe()],Et.prototype,"_slottedText",void 0);ti([Mt("#input")],Et.prototype,"_inputEl",void 0);ti([K()],Et.prototype,"type",void 0);Et=ti([Ue("vscode-radio")],Et);var Zi=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let ri=class extends ot{set selectedIndex(e){this._selectedIndex=e,this._value=this._options[this._selectedIndex]?this._options[this._selectedIndex].value:"",this._labelText=this._options[this._selectedIndex]?this._options[this._selectedIndex].label:""}get selectedIndex(){return this._selectedIndex}set value(e){this._options[this._selectedIndex]&&(this._options[this._selectedIndex].selected=!1),this._selectedIndex=this._options.findIndex(i=>i.value===e),this._selectedIndex>-1?(this._options[this._selectedIndex].selected=!0,this._labelText=this._options[this._selectedIndex].label,this._value=e,this._requestedValueToSetLater=""):(this._labelText="",this._value="",this._requestedValueToSetLater=e)}get value(){var e;return this._options[this._selectedIndex]?((e=this._options[this._selectedIndex])==null?void 0:e.value)??"":""}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}updateInputValue(){if(!this.combobox)return;const e=this.renderRoot.querySelector(".combobox-input");e&&(e.value=this._options[this._selectedIndex]?this._options[this._selectedIndex].label:"")}constructor(){super(),this.defaultValue="",this.role="listbox",this.name=void 0,this.required=!1,this._labelText="",this._requestedValueToSetLater="",this._multiple=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._manageRequired()})}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,i){this.updateComplete.then(()=>{this.value=e})}get type(){return"select-one"}get form(){return this._internals.form}_onSlotChange(){var e;if(super._onSlotChange(),this._requestedValueToSetLater){const i=this._options.findIndex(n=>n.value===this._requestedValueToSetLater);i>0&&(this._selectedIndex=i,this._requestedValueToSetLater="")}this._selectedIndex>-1&&(this._labelText=((e=this._options[this._selectedIndex])==null?void 0:e.label)??""),this._selectedIndex>-1&&this._options.length>0?this._internals.setFormValue(this._options[this._selectedIndex].value):this._internals.setFormValue(null)}_onArrowUpKeyDown(){super._onArrowUpKeyDown(),!(this._showDropdown||this._selectedIndex<=0)&&(this._filterPattern="",this._selectedIndex-=1,this._activeIndex=this._selectedIndex,this._labelText=this._options[this._selectedIndex].label,this._value=this._options[this._selectedIndex].value,this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_onArrowDownKeyDown(){super._onArrowDownKeyDown(),!(this._showDropdown||this._selectedIndex>=this._options.length-1)&&(this._filterPattern="",this._selectedIndex+=1,this._activeIndex=this._selectedIndex,this._labelText=this._options[this._selectedIndex].label,this._value=this._options[this._selectedIndex].value,this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_onEnterKeyDown(){super._onEnterKeyDown(),this._selectedIndex>-1&&(this._labelText=this._options[this._selectedIndex].label),this.updateInputValue(),this._internals.setFormValue(this._value),this._manageRequired()}_onOptionClick(e){const n=e.composedPath().find(o=>o==null?void 0:o.matches("li.option"));!n||n.matches(".disabled")||(this._selectedIndex=Number(n.dataset.index),this._value=this._options[this._selectedIndex].value,this._selectedIndex>-1&&(this._labelText=this._options[this._selectedIndex].label),this._toggleDropdown(!1),this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_manageRequired(){const{value:e}=this;e===""&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._face):this._internals.setValidity({})}_renderSelectFace(){return me`
      <div
        class="select-face face"
        @click="${this._onFaceClick}"
        tabindex="${this.tabIndex>-1?0:-1}"
      >
        <span class="text">${this._labelText}</span> ${Do}
      </div>
    `}_renderComboboxFace(){const e=this._selectedIndex>-1?this._options[this._selectedIndex].label:"";return me`
      <div class="combobox-face face">
        <input
          class="combobox-input"
          spellcheck="false"
          type="text"
          .value="${e}"
          @focus="${this._onComboboxInputFocus}"
          @input="${this._onComboboxInputInput}"
          @click=${this._onComboboxInputClick}
        />
        <button
          class="combobox-button"
          type="button"
          @click="${this._onComboboxButtonClick}"
          @keydown="${this._onComboboxButtonKeyDown}"
        >
          ${Do}
        </button>
      </div>
    `}_renderOptions(){const i=(this.combobox?this._filteredOptions:this._options).map((n,o)=>{var s;const r=nt({option:!0,active:o===this._activeIndex&&!n.disabled,disabled:n.disabled});return me`
        <li
          class="${r}"
          data-index="${n.index}"
          data-filtered-index="${o}"
        >
          ${((s=n.ranges)==null?void 0:s.length)??!1?Uu(n.label,n.ranges??[]):n.label}
        </li>
      `});return me`
      <ul
        class="options"
        @mouseover="${this._onOptionMouseOver}"
        @click="${this._onOptionClick}"
      >
        ${i}
      </ul>
    `}};ri.styles=Gu;ri.shadowRootOptions={...gi.shadowRootOptions,delegatesFocus:!0};ri.formAssociated=!0;Zi([K({attribute:"default-value"})],ri.prototype,"defaultValue",void 0);Zi([K({type:String,attribute:!0,reflect:!0})],ri.prototype,"role",void 0);Zi([K({reflect:!0})],ri.prototype,"name",void 0);Zi([K({type:Number,attribute:"selected-index"})],ri.prototype,"selectedIndex",null);Zi([K({type:String})],ri.prototype,"value",null);Zi([K({type:Boolean,reflect:!0})],ri.prototype,"required",void 0);Zi([Fe()],ri.prototype,"_labelText",void 0);Zi([Mt(".face")],ri.prototype,"_face",void 0);ri=Zi([Ue("vscode-single-select")],ri);const y1=[We,Ne`
    :host {
      --hover-outline-color: transparent;
      --hover-outline-style: solid;
      --hover-outline-width: 0;
      --selected-outline-color: transparent;
      --selected-outline-style: solid;
      --selected-outline-width: 0;

      display: block;
      outline: none;
      user-select: none;
    }

    .wrapper {
      height: 100%;
    }

    li {
      list-style: none;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
    }

    ul {
      position: relative;
    }

    :host([indent-guides]) ul ul:before {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: var(--indent-guide-pos);
      top: 0;
      pointer-events: none;
      width: 1px;
      z-index: 1;
    }

    .contents {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      outline-offset: -1px;
      padding-right: 12px;
    }

    .multi .contents {
      align-items: flex-start;
    }

    .contents:hover {
      cursor: pointer;
    }

    .arrow-container {
      align-items: center;
      display: flex;
      height: 22px;
      justify-content: center;
      padding-left: 8px;
      padding-right: 6px;
      width: 16px;
    }

    .icon-arrow {
      color: currentColor;
      display: block;
    }

    .theme-icon {
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
    }

    .image-icon {
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: 16px;
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
      height: 22px;
      width: 16px;
    }

    .multi .contents .theme-icon {
      margin-top: 3px;
    }

    .text-content {
      display: flex;
      line-height: 22px;
    }

    .single .text-content {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .description {
      font-size: 0.9em;
      line-height: 22px;
      margin-left: 0.5em;
      opacity: 0.95;
      white-space: pre;
    }

    .actions {
      display: none;
    }

    .contents.selected > .actions,
    .contents.focused > .actions,
    .contents:hover > .actions {
      display: flex;
    }

    .decorations {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: 5px;
    }

    .filled-circle {
      margin-right: 3px;
      opacity: 0.4;
    }

    .decoration-text {
      font-size: 90%;
      font-weight: 600;
      margin-right: 3px;
      opacity: 0.75;
    }

    .filled-circle,
    .decoration-text {
      color: var(--color, currentColor);
    }

    .contents:hover .filled-circle,
    .contents:hover .decoration-text {
      color: var(--hover-color, var(--color));
    }

    .contents.focused .filled-circle,
    .contents.focused .decoration-text {
      color: var(--focused-color, var(--color));
    }

    .contents.selected .filled-circle,
    .contents.selected .decoration-text {
      color: var(--selected-color, var(--color));
    }

    /* Theme colors */
    :host(:focus) .wrapper.has-not-focused-item {
      outline: 1px solid var(--vscode-focusBorder);
    }

    :host(:focus) .contents.selected,
    :host(:focus) .contents.focused.selected {
      color: var(--vscode-list-activeSelectionForeground);
      background-color: var(--vscode-list-activeSelectionBackground);
    }

    :host(:focus) .contents.selected .icon-arrow,
    :host(:focus) .contents.selected.focused .icon-arrow,
    :host(:focus) .contents.selected .theme-icon,
    :host(:focus) .contents.selected.focused .theme-icon,
    :host(:focus) .contents.selected .action-icon,
    :host(:focus) .contents.selected.focused .action-icon {
      color: var(--vscode-list-activeSelectionIconForeground);
    }

    :host(:focus) .contents.focused {
      color: var(--vscode-list-focusForeground);
      background-color: var(--vscode-list-focusBackground);
    }

    :host(:focus) .contents.selected.focused {
      outline-color: var(
        --vscode-list-focusAndSelectionOutline,
        var(--vscode-list-focusOutline)
      );
    }

    .contents:hover {
      background-color: var(--vscode-list-hoverBackground);
      color: var(--vscode-list-hoverForeground);
    }

    .contents:hover,
    .contents.selected:hover {
      outline-color: var(--hover-outline-color);
      outline-style: var(--hover-outline-style);
      outline-width: var(--hover-outline-width);
    }

    .contents.selected,
    .contents.selected.focused {
      background-color: var(--vscode-list-inactiveSelectionBackground);
      color: var(--vscode-list-inactiveSelectionForeground);
    }

    .contents.selected,
    .contents.selected.focused {
      outline-color: var(--selected-outline-color);
      outline-style: var(--selected-outline-style);
      outline-width: var(--selected-outline-width);
    }

    .contents.selected .theme-icon {
      color: var(--vscode-list-inactiveSelectionIconForeground);
    }

    .contents.focused {
      background-color: var(--vscode-list-inactiveFocusBackground);
      outline: 1px dotted var(--vscode-list-inactiveFocusOutline);
    }

    :host(:focus) .contents.focused {
      outline: 1px solid var(--vscode-list-focusOutline);
    }

    :host([indent-guides]) ul ul:before {
      background-color: var(--vscode-tree-inactiveIndentGuidesStroke);
    }

    :host([indent-guides]) ul ul.has-active-item:before {
      background-color: var(--vscode-tree-indentGuidesStroke);
    }
  `];var xi=function(t,e,i,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const x1=30,w1=16,jc=3,ju=(t,e=[])=>{const i=[];return t.forEach((n,o)=>{const r=[...e,o],s={...n,path:r};n.subItems&&(s.subItems=ju(n.subItems,r)),i.push(s)}),i},Ir=t=>{var e;return!!(t.subItems&&Array.isArray(t.subItems)&&((e=t==null?void 0:t.subItems)==null?void 0:e.length)>0)};let si=class extends Ke{constructor(){super(...arguments),this.indent=8,this.arrows=!1,this.multiline=!1,this.tabindex=0,this.indentGuides=!1,this._data=[],this._selectedItem=null,this._focusedItem=null,this._selectedBranch=null,this._focusedBranch=null,this._handleComponentKeyDownBound=this._handleComponentKeyDown.bind(this)}set data(e){const i=this._data;this._data=ju(e),this.requestUpdate("data",i)}get data(){return this._data}closeAll(){this._closeSubTreeRecursively(this.data),this.requestUpdate()}deselectAll(){this._deselectItemsRecursively(this.data),this.requestUpdate()}getItemByPath(e){return this._getItemByPath(e)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleComponentKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleComponentKeyDownBound)}_getItemByPath(e){let i=this._data,n=null;return e.forEach((o,r)=>{r===e.length-1?n=i[o]:i=i[o].subItems}),n}_handleActionClick(e){e.stopPropagation();const i=e.target,n=i.dataset.itemPath,o=i.dataset.index;let r=null,s="",a="";if(n){const l=n.split("/").map(d=>Number(d));if(r=this._getItemByPath(l),r!=null&&r.actions){const d=Number(o);r.actions[d]&&(s=r.actions[d].actionId)}r!=null&&r.value&&(a=r.value)}this.dispatchEvent(new CustomEvent("vsc-run-action",{detail:{actionId:s,item:r,value:a}})),this.dispatchEvent(new CustomEvent("vsc-tree-action",{detail:{actionId:s,item:r,value:a}}))}_renderIconVariant(e){const{type:i,value:n}=e;return i==="themeicon"?me`<vscode-icon name=${n} class="theme-icon"></vscode-icon>`:me`<span
        class="image-icon"
        style="background-image: url(${n});"
      ></span>`}_renderIcon(e){const i={branch:{value:"folder",type:"themeicon"},open:{value:"folder-opened",type:"themeicon"},leaf:{value:"file",type:"themeicon"}};if(e.iconUrls)e.iconUrls.branch&&(i.branch={value:e.iconUrls.branch,type:"image"}),e.iconUrls.leaf&&(i.leaf={value:e.iconUrls.leaf,type:"image"}),e.iconUrls.open&&(i.open={value:e.iconUrls.open,type:"image"});else if(typeof e.icons=="object")e.icons.branch&&(i.branch={value:e.icons.branch,type:"themeicon"}),e.icons.leaf&&(i.leaf={value:e.icons.leaf,type:"themeicon"}),e.icons.open&&(i.open={value:e.icons.open,type:"themeicon"});else if(!e.icons)return me`${Me}`;return Ir(e)?e.open?this._renderIconVariant(i.open):this._renderIconVariant(i.branch):this._renderIconVariant(i.leaf)}_renderArrow(e){if(!this.arrows||!Ir(e))return me`${Me}`;const{open:i=!1}=e;return me`
      <div class="arrow-container">
        <vscode-icon name="${i?"chevron-down":"chevron-right"}" class="icon-arrow"></vscode-icon>
      </div>
    `}_renderActions(e){const i=[];return e.actions&&Array.isArray(e.actions)&&e.actions.forEach((n,o)=>{var r;if(n.icon){const s=me`<vscode-icon
            name=${n.icon}
            action-icon
            title=${at(n.tooltip)}
            data-item-path=${at((r=e.path)==null?void 0:r.join("/"))}
            data-index=${o}
            class="action-icon"
            @click=${this._handleActionClick}
          ></vscode-icon>`;i.push(s)}}),i.length>0?me`<div class="actions">${i}</div>`:me`${Me}`}_renderDecorations(e){const i=[];return e.decorations&&Array.isArray(e.decorations)&&e.decorations.forEach(n=>{const{appearance:o="text",visibleWhen:r="always",content:s="",color:a="",focusedColor:l="",hoverColor:d="",selectedColor:h=""}=n,c=`visible-when-${r}`,g={};switch(a&&(g["--color"]=a),l&&(g["--focused-color"]=l),d&&(g["--hover-color"]=d),h&&(g["--selected-color"]=h),o){case"counter-badge":i.push(me`<vscode-badge
                variant="counter"
                class=${["counter-badge",c].join(" ")}
                part="counter-badge-decoration"
                >${s}</vscode-badge
              >`);break;case"filled-circle":i.push(me`<vscode-icon
                name="circle-filled"
                size="14"
                class=${["filled-circle",c].join(" ")}
                part="filled-circle-decoration"
                style=${Jt(g)}
              ></vscode-icon>`);break;case"text":i.push(me`<div
                class=${["decoration-text",c].join(" ")}
                part="caption-decoration"
                style=${Jt(g)}
              >
                ${s}
              </div>`);break}}),i.length>0?me`<div class="decorations" part="decorations">
        ${i}
      </div>`:me`${Me}`}_renderTreeItem(e,i){const{open:n=!1,label:o,description:r="",tooltip:s,selected:a=!1,focused:l=!1,subItems:d=[]}=e,{path:h,itemType:c,hasFocusedItem:g=!1,hasSelectedItem:f=!1}=i,u=h.length-1,_=["contents"],w=n?["open"]:[],m=u*this.indent,p=this.arrows&&c==="leaf"?x1+m:m,v=this._renderArrow(e),b=this._renderIcon(e),S=this.arrows?m+w1:m+jc,T=n&&c==="branch"?me`<ul
            style=${Jt({"--indent-guide-pos":`${S}px`})}
            class=${nt({"has-active-item":g||f})}
          >
            ${this._renderTree(d,h)}
          </ul>`:Me,E=r?me`<span class="description" part="description">${r}</span>`:Me,A=this._renderActions(e),M=this._renderDecorations(e);return w.push(c),a&&_.push("selected"),l&&_.push("focused"),me`
      <li data-path="${h.join("/")}" class="${w.join(" ")}">
        <div
          class="${_.join(" ")}"
          style="${Jt({paddingLeft:`${p+jc}px`})}"
        >
          ${v}${b}<span
            class="text-content"
            part="text-content"
            title="${at(s)}"
            >${o}${E}</span
          >
          ${A} ${M}
        </div>
        ${T}
      </li>
    `}_renderTree(e,i=[]){const n=[];return e?(e.forEach((o,r)=>{const s=[...i,r],a=Ir(o)?"branch":"leaf",{selected:l=!1,focused:d=!1,hasFocusedItem:h=!1,hasSelectedItem:c=!1}=o;l&&(this._selectedItem=o),d&&(this._focusedItem=o),n.push(this._renderTreeItem(o,{path:s,itemType:a,hasFocusedItem:h,hasSelectedItem:c}))}),n):Me}_selectItem(e){var n,o;this._selectedItem&&(this._selectedItem.selected=!1),this._focusedItem&&(this._focusedItem.focused=!1),this._selectedItem=e,e.selected=!0,this._focusedItem=e,e.focused=!0,this._selectedBranch&&(this._selectedBranch.hasSelectedItem=!1);let i=null;if((n=e.path)!=null&&n.length&&e.path.length>1&&(i=this._getItemByPath(e.path.slice(0,-1))),Ir(e))this._selectedBranch=e,e.hasSelectedItem=!0,e.open=!e.open,e.open?(this._selectedBranch=e,e.hasSelectedItem=!0):i&&(this._selectedBranch=i,i.hasSelectedItem=!0);else if((o=e.path)!=null&&o.length&&e.path.length>1){const r=this._getItemByPath(e.path.slice(0,-1));r&&(this._selectedBranch=r,r.hasSelectedItem=!0)}else this._selectedBranch=e,e.hasSelectedItem=!0;this._emitSelectEvent(this._selectedItem,this._selectedItem.path.join("/")),this.requestUpdate()}_focusItem(e){var o,r;this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=e,e.focused=!0;const i=!!((o=e==null?void 0:e.subItems)!=null&&o.length);this._focusedBranch&&(this._focusedBranch.hasFocusedItem=!1);let n=null;(r=e.path)!=null&&r.length&&e.path.length>1&&(n=this._getItemByPath(e.path.slice(0,-1))),i?e.open?(this._focusedBranch=e,e.hasFocusedItem=!0):!e.open&&n&&(this._focusedBranch=n,n.hasFocusedItem=!0):n&&(this._focusedBranch=n,n.hasFocusedItem=!0)}_closeSubTreeRecursively(e){e.forEach(i=>{i.open=!1,i.subItems&&i.subItems.length>0&&this._closeSubTreeRecursively(i.subItems)})}_deselectItemsRecursively(e){e.forEach(i=>{i.selected&&(i.selected=!1),i.subItems&&i.subItems.length>0&&this._deselectItemsRecursively(i.subItems)})}_emitSelectEvent(e,i){const{icons:n,label:o,open:r,value:s}=e,a={icons:n,itemType:Ir(e)?"branch":"leaf",label:o,open:r||!1,value:s||o,path:i};this.dispatchEvent(new CustomEvent("vsc-select",{bubbles:!0,composed:!0,detail:a})),this.dispatchEvent(new CustomEvent("vsc-tree-select",{detail:a}))}_focusPrevItem(){var i;if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:e}=this._focusedItem;if(e&&(e==null?void 0:e.length)>0){const n=e[e.length-1],o=e.length>1;if(n>0){const r=[...e];r[r.length-1]=n-1;const s=this._getItemByPath(r);let a=s;if(s!=null&&s.open&&((i=s.subItems)!=null&&i.length)){const{subItems:l}=s;a=l[l.length-1]}this._focusItem(a)}else if(o){const r=[...e];r.pop(),this._focusItem(this._getItemByPath(r))}}else this._focusItem(this._data[0])}_focusNextItem(){if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:e,open:i}=this._focusedItem;if(i&&Array.isArray(this._focusedItem.subItems)&&this._focusedItem.subItems.length>0){this._focusItem(this._focusedItem.subItems[0]);return}const n=[...e];n[n.length-1]+=1;let o=this._getItemByPath(n);o?this._focusItem(o):(n.pop(),n.length>0&&(n[n.length-1]+=1,o=this._getItemByPath(n),o&&this._focusItem(o)))}_handleClick(e){const n=e.composedPath().find(o=>o.tagName&&o.tagName.toUpperCase()==="LI");if(n){const r=(n.dataset.path||"").split("/").map(a=>Number(a)),s=this._getItemByPath(r);this._selectItem(s)}else this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=null}_handleComponentKeyDown(e){const i=[" ","ArrowDown","ArrowUp","Enter","Escape"],n=e.key;i.includes(e.key)&&(e.stopPropagation(),e.preventDefault()),n==="Escape"&&(this._focusedItem=null),n==="ArrowUp"&&this._focusPrevItem(),n==="ArrowDown"&&this._focusNextItem(),(n==="Enter"||n===" ")&&this._focusedItem&&this._selectItem(this._focusedItem)}render(){const e=nt({multi:this.multiline,single:!this.multiline,wrapper:!0,"has-not-focused-item":!this._focusedItem,"selection-none":!this._selectedItem,"selection-single":this._selectedItem!==null});return me`
      <div @click="${this._handleClick}" class="${e}">
        <ul>
          ${this._renderTree(this._data)}
        </ul>
      </div>
    `}};si.styles=y1;xi([K({type:Array,reflect:!1})],si.prototype,"data",null);xi([K({type:Number})],si.prototype,"indent",void 0);xi([K({type:Boolean,reflect:!0})],si.prototype,"arrows",void 0);xi([K({type:Boolean,reflect:!0})],si.prototype,"multiline",void 0);xi([K({type:Number,reflect:!0})],si.prototype,"tabindex",void 0);xi([K({type:Boolean,reflect:!0,attribute:"indent-guides"})],si.prototype,"indentGuides",void 0);xi([Fe()],si.prototype,"_selectedItem",void 0);xi([Fe()],si.prototype,"_focusedItem",void 0);xi([Fe()],si.prototype,"_selectedBranch",void 0);xi([Fe()],si.prototype,"_focusedBranch",void 0);si=xi([Ue("vscode-tree")],si);const Ds=class Ds extends kt{};mt(Ds,"styles",[...ua(Ds,Ds,"styles"),Ne`
      :host {
        font-family: var(--vscode-editor-font-family);
      }
      :host(:focus) .icon {
        border: 1px solid var(--vscode-focusBorder);
      }
    `]);let nl=Ds;customElements.define("lt-checkbox",nl);const Fs=class Fs extends Je{};mt(Fs,"styles",[...ua(Fs,Fs,"styles"),Ne`
      :host {
        background-color: transparent;
      }
      input {
        font-family: var(--vscode-editor-font-family);
        padding: 1px 2px;
        background-color: transparent;
      }
    `]);let rl=Fs;customElements.define("lt-textfield",rl);const qc=String.raw;function qu(t=""){const e=qc`
    html {
      scrollbar-color: var(--vscode-scrollbarSlider-background)
        var(--vscode-editor-background);
    }

    body {
      overscroll-behavior-x: none;
      background-color: var(--playground-body-background);
      color: var(--vscode-editor-foreground);
      font-family: var(--vscode-font-family);
      font-weight: var(--vscode-font-weight);
      font-size: var(--vscode-font-size);
      margin: 0;
      padding: 0 20px;
    }
  `;return qc`
    ${t?"":e}

    ${t}img,
    ${t}video {
      max-width: 100%;
      max-height: 100%;
    }

    ${t}a,
    ${t}a code {
      color: var(--vscode-textLink-foreground);
    }

    ${t}p > a {
      text-decoration: var(--text-link-decoration);
    }

    ${t}a:hover {
      color: var(--vscode-textLink-activeForeground);
    }

    ${t}a:focus,
    input:focus,
    select:focus,
    textarea:focus {
      outline: 1px solid -webkit-focus-ring-color;
      outline-offset: -1px;
    }

    ${t}code {
      font-family: var(--monaco-monospace-font);
      color: var(--vscode-textPreformat-foreground);
      background-color: var(--vscode-textPreformat-background);
      padding: 1px 3px;
      border-radius: 4px;
    }

    ${t}pre code {
      padding: 0;
    }

    ${t}blockquote {
      background: var(--vscode-textBlockQuote-background);
      border-color: var(--vscode-textBlockQuote-border);
    }

    ${t}kbd {
      background-color: var(--vscode-keybindingLabel-background);
      color: var(--vscode-keybindingLabel-foreground);
      border-style: solid;
      border-width: 1px;
      border-radius: 3px;
      border-color: var(--vscode-keybindingLabel-border);
      border-bottom-color: var(--vscode-keybindingLabel-bottomBorder);
      box-shadow: inset 0 -1px 0 var(--vscode-widget-shadow);
      vertical-align: middle;
      padding: 1px 3px;
    }

    ${t}::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ${t}::-webkit-scrollbar-corner {
      background-color: var(--vscode-editor-background);
    }

    ${t}::-webkit-scrollbar-thumb {
      background-color: var(--vscode-scrollbarSlider-background);
    }
    ${t}::-webkit-scrollbar-thumb:hover {
      background-color: var(--vscode-scrollbarSlider-hoverBackground);
    }
    ${t}::-webkit-scrollbar-thumb:active {
      background-color: var(--vscode-scrollbarSlider-activeBackground);
    }
    ${t}::highlight(find-highlight) {
      background-color: var(--vscode-editor-findMatchHighlightBackground);
    }
    ${t}::highlight(current-find-highlight) {
      background-color: var(--vscode-editor-findMatchBackground);
    }
  `}const S1=String.raw,C1=String.raw,Wc="_vscodeDemoStyles",Wu=new CSSStyleSheet;Wu.replaceSync(C1`
  :host {
    all: initial;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    display: block;
    margin: 32px 0;
  }

  :host([fullscreen]) {
    bottom: 0;
    left: 0;
    margin: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
  }

  .canvas {
    all: initial;
    background-color: var(--playground-body-background);
    color: var(--vscode-foreground);
    display: block;
    font-family: var(--vscode-font-family);
    font-size: var(--vscode-font-size);
    font-weight: var(--vscode-font-weight);
    padding: 20px;
  }

  :host([fullscreen]) .canvas {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 35px;
  }

  .header-wrapper {
    position: relative;
  }

  .header {
    align-items: center;
    background-color: var(--playground-body-background);
    box-sizing: border-box;
    color: var(--vscode-editor-foreground);
    display: flex;
    font-family: var(--vscode-font-family, sans-serif);
    font-size: 13px;
    flex-wrap: wrap;
    height: 35px;
    padding: 0 10px;
    position: relative;
    width: 100%;
  }

  .menu-wrapper {
    position: relative;
  }

  .toggle-menu-button {
    background-color: transparent;
    border: 0;
    border-radius: 5px;
    box-sizing: content-box;
    color: var(--vscode-editor-foreground);
    cursor: pointer;
    display: block;
    height: 16px;
    margin: 0 0 0 2px;
    padding: 3px;
    width: 16px;
  }

  .toggle-menu-button:focus {
    outline: 1px solid var(--vscode-focusBorder);
  }

  .toggle-menu-button:hover {
    background-color: var(--vscode-toolbar-hoverBackground);
  }

  .toggle-menu-button.active {
    background-color: var(--vscode-toolbar-activeBackground);
  }

  .toggle-menu-button svg {
    display: block;
    height: 16px;
    width: 16px;
  }

  .menu {
    background-color: #fff;
    border: 1px solid #cdcdcd;
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
    color: #000;
    display: none;
    left: 1px;
    padding: 10px;
    position: absolute;
    top: 24px;
    z-index: 100;
  }

  .menu.open {
    display: block;
  }

  fieldset {
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    margin-top: 5px;
    padding: 10px;
  }

  .row {
    align-items: center;
    display: flex;
    margin: 0 0 10px 0;
  }

  .row:last-child {
    margin-bottom: 0;
  }

  .header .toggle-fullscreen-button {
    align-items: center;
    background-color: transparent;
    border: 0;
    border-radius: 5px;
    color: var(--vscode-editor-foreground);
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-left: auto;
    padding: 5px;
  }

  .header .toggle-fullscreen-button .normal {
    display: none;
  }

  :host([fullscreen]) .toggle-fullscreen-button .normal {
    display: block;
  }

  :host([fullscreen]) .toggle-fullscreen-button .full {
    display: none;
  }

  .header .toggle-fullscreen-button:focus {
    outline: none;
  }

  .header .toggle-fullscreen-button:focus {
    outline: 1px solid var(--vscode-focusBorder);
  }
`);function k1(){return S1`
    <div class="header-wrapper">
      <div id="header" class="header" part="header">
        <vscode-theme-selector></vscode-theme-selector>
        <div class="menu-wrapper">
          <button
            type="button"
            class="toggle-menu-button"
            id="toggle-menu"
            title="Open menu"
            part="toggle-menu"
          >
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.444 13.832a1 1 0 1 0 1.111-1.663 1 1 0 0 0-1.11 1.662zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              />
            </svg>
          </button>
          <div id="menu" class="menu" part="menu">
            <vscode-view-container-selector></vscode-view-container-selector>
            <fieldset>
              <legend>User preferences</legend>
              <div class="row">
                <vscode-toggle-underline></vscode-toggle-underline>
              </div>
              <div class="row">
                <vscode-toggle-motion></vscode-toggle-motion>
              </div>
            </fieldset>
          </div>
        </div>
        <button
          type="button"
          class="toggle-fullscreen-button"
          id="toggle-fullscreen"
          title="toggle fullscreen"
          part="toggle-fullscreen"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="full"
          >
            <path
              d="M3 12h10V4H3v8zm2-6h6v4H5V6zM2 6H1V2.5l.5-.5H5v1H2v3zm13-3.5V6h-1V3h-3V2h3.5l.5.5zM14 10h1v3.5l-.5.5H11v-1h3v-3zM2 13h3v1H1.5l-.5-.5V10h1v3z"
            />
          </svg>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="normal"
          >
            <path
              d="M3.5 4H1V3h2V1h1v2.5l-.5.5zM13 3V1h-1v2.5l.5.5H15V3h-2zm-1 9.5V15h1v-2h2v-1h-2.5l-.5.5zM1 12v1h2v2h1v-2.5l-.5-.5H1zm11-1.5l-.5.5h-7l-.5-.5v-5l.5-.5h7l.5.5v5zM10 7H6v2h4V7z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="canvas" part="canvas">
      <slot></slot>
    </div>
  `}var Ks,Ni,hr,ki,Go,Ku,Ys,Xs,dr;const Mn=class Mn extends HTMLElement{constructor(){var n;super();st(this,Go);st(this,Ks,null);st(this,Ni,null);st(this,hr,null);st(this,ki,null);st(this,Ys,()=>{this.hasAttribute("fullscreen")?this.removeAttribute("fullscreen"):this.setAttribute("fullscreen","")});st(this,Xs,i=>{var n,o,r,s,a;i.stopPropagation(),(n=Re(this,Ni))!=null&&n.classList.contains("open")?((o=Re(this,Ni))==null||o.classList.toggle("open",!1),(r=Re(this,ki))==null||r.classList.toggle("active",!1),window.removeEventListener("click",Re(this,dr))):((s=Re(this,Ni))==null||s.classList.toggle("open",!0),(a=Re(this,ki))==null||a.classList.toggle("active",!0),window.addEventListener("click",Re(this,dr)))});st(this,dr,i=>{var n,o;if(i.target){const r=i.composedPath(),s=!!r.find(l=>l===Re(this,Ni)),a=!!r.find(l=>l===Re(this,ki));(!s||a)&&(i.stopPropagation(),(n=Re(this,Ni))==null||n.classList.toggle("open",!1),(o=Re(this,ki))==null||o.classList.toggle("active",!1),window.removeEventListener("click",Re(this,dr)))}});Mn.template||(Mn.template=document.createElement("template"),Mn.template.innerHTML=k1());let i=this.attachShadow({mode:"open"});i.adoptedStyleSheets.push(Wu),i.appendChild(Mn.template.content.cloneNode(!0)),Li(this,Ks,i.querySelector("#header")),Li(this,Ni,i.querySelector(".menu")),Li(this,hr,((n=Re(this,Ks))==null?void 0:n.querySelector("#toggle-fullscreen"))??null),Li(this,ki,i.querySelector("#toggle-menu")),this.dataset.vscodeDemo=""}connectedCallback(){var i,n;(i=Re(this,hr))==null||i.addEventListener("click",Re(this,Ys)),(n=Re(this,ki))==null||n.addEventListener("click",Re(this,Xs)),ft(this,Go,Ku).call(this)}disconnectedCallback(){var i,n;(i=Re(this,hr))==null||i.removeEventListener("click",Re(this,Ys)),(n=Re(this,ki))==null||n.removeEventListener("click",Re(this,Xs))}};Ks=new WeakMap,Ni=new WeakMap,hr=new WeakMap,ki=new WeakMap,Go=new WeakSet,Ku=function(){if(!document.getElementById(Wc)){const i=document.createElement("style");i.setAttribute("id",Wc),i.innerHTML=qu("vscode-demo[data-vscode-demo] "),window!=null&&window.vscodeWebviewPlaygroundNonce&&i.setAttribute("nonce",window.vscodeWebviewPlaygroundNonce),document.head.appendChild(i)}},Ys=new WeakMap,Xs=new WeakMap,dr=new WeakMap,mt(Mn,"template");let sl=Mn;const E1=String.raw,R1=String.raw,Kc="_defaultStyles",Wn="hidden",Yc="vscode-playground:dev-toolbar-hidden",Yu=new CSSStyleSheet;Yu.replaceSync(R1`
  :host {
    bottom: 30px;
    font-family: sans-serif;
    font-size: 14px;
    position: fixed;
    right: 30px;
    z-index: 1000;
  }

  .ui {
    display: block;
  }

  .ui.hidden {
    display: none;
  }

  label {
    user-select: none;
  }

  .open-toolbar-button {
    background-color: #fff;
    border: 1px solid #cdcdcd;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    height: 42px;
    padding: 4px;
    width: 42px;
  }

  .open-toolbar-button.open {
    display: none;
  }

  .open-toolbar-button svg {
    display: block;
    height: 100%;
    width: 100%;
  }

  .close-toolbar-button {
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    padding: 4px;
    position: absolute;
    right: 3px;
    top: 3px;
  }

  .close-toolbar-button svg {
    display: block;
    height: 16px;
    width: 16px;
  }

  .panel {
    background-color: #fff;
    border: 1px solid #cdcdcd;
    border-radius: 12px;
    color: #000;
    display: none;
    padding: 10px;
    position: relative;
  }

  fieldset {
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    padding: 10px;
  }

  vscode-toggle-underline::part(checkbox),
  vscode-toggle-motion::part(checkbox) {
    margin-top: 0;
  }

  .row {
    align-items: center;
    display: flex;
    margin: 0 0 10px;
  }

  .row:last-child {
    margin-bottom: 0;
  }

  .row.select label {
    text-align: right;
    width: 80px;
  }

  .row.select select {
    width: 150px;
  }

  select {
    margin-left: 5px;
  }

  input[type="checkbox"] {
    margin: 0 5px 0 0;
  }

  .panel.open {
    display: block;
  }
`);function A1(){return E1`
    <div class="ui">
      <button type="button" title="Open toolbar" class="open-toolbar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 167.435 73.998"
          role="img"
        >
          <title>Open toolbar</title>
          <g fill="#007acc">
            <path
              d="M115.89 8.141L100.762.857a4.574 4.574 0 00-5.23.89L66.537 28.2l-12.63-9.584a3.042 3.042 0 00-3.908.173l-4.051 3.678a3.067 3.067 0 00-.015 4.526l10.963 10-10.963 10a3.067 3.067 0 00.015 4.526l4.051 3.692c1.107.992 2.745 1.064 3.908.173l12.63-9.584L95.53 72.251a4.552 4.552 0 005.216.89l15.144-7.284a4.576 4.576 0 002.6-4.138V12.28a4.552 4.552 0 00-2.6-4.138zm-15.761 45.56l-22.012-16.71 22.012-16.709zM134.34 0l-7.81 7.81L155.73 37l-29.2 29.188 7.81 7.81 33.095-33.094v-7.81zM40.904 7.81L11.704 37l29.2 29.188-7.81 7.81L0 40.904v-7.81L33.094 0z"
            ></path>
          </g>
        </svg>
      </button>
      <div class="panel">
        <div class="row select">
          <vscode-theme-selector></vscode-theme-selector>
        </div>
        <div class="row select">
          <vscode-view-container-selector></vscode-view-container-selector>
        </div>
        <fieldset>
          <legend>User preferences</legend>
          <div>
            <div class="row">
              <vscode-toggle-underline></vscode-toggle-underline>
            </div>
            <div class="row">
              <vscode-toggle-motion></vscode-toggle-motion>
            </div>
          </div>
        </fieldset>
        <button
          type="button"
          class="close-toolbar-button"
          title="Close toolbar"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <title>Close toolbar</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  `}var dn,yo,Xu,Zs,Qs,ur;const ui=class ui extends HTMLElement{constructor(){super();st(this,dn);st(this,Zs,i=>{var n,o;i.stopPropagation(),(n=this._panel)==null||n.classList.add("open"),(o=this._openButton)==null||o.classList.add("open"),window.addEventListener("click",Re(this,ur))});st(this,Qs,()=>{var i,n;(i=this._panel)==null||i.classList.remove("open"),(n=this._openButton)==null||n.classList.remove("open"),window.removeEventListener("click",Re(this,ur))});st(this,ur,i=>{var n,o;i.target&&(i.composedPath().find(a=>a===this._panel)||((n=this._panel)==null||n.classList.remove("open"),(o=this._openButton)==null||o.classList.remove("open"),window.removeEventListener("click",Re(this,ur))))});if(ui.activeInstance)return;ui.activeInstance=this,ui.template||(ui.template=document.createElement("template"),ui.template.innerHTML=A1());let i=this.attachShadow({mode:"open"});i.appendChild(ui.template.content.cloneNode(!0)),i.adoptedStyleSheets.push(Yu)}connectedCallback(){var i,n,o,r,s;this.shadowRoot&&(this._openButton=(i=this.shadowRoot)==null?void 0:i.querySelector(".open-toolbar-button"),this._closeButton=(n=this.shadowRoot)==null?void 0:n.querySelector(".close-toolbar-button"),this._panel=(o=this.shadowRoot)==null?void 0:o.querySelector(".panel"),(r=this._openButton)==null||r.addEventListener("click",Re(this,Zs)),(s=this._closeButton)==null||s.addEventListener("click",Re(this,Qs)),ft(this,dn,Xu).call(this),ft(this,dn,yo).call(this,localStorage.getItem(Yc)==="true"))}disconnectedCallback(){var i,n;(i=this._openButton)==null||i.removeEventListener("click",Re(this,Zs)),(n=this._closeButton)==null||n.removeEventListener("click",Re(this,Qs))}attributeChangedCallback(i,n,o){i===Wn&&ft(this,dn,yo).call(this,this.hasAttribute(Wn))}set hidden(i){i?this.setAttribute(Wn,""):this.removeAttribute(Wn),ft(this,dn,yo).call(this,!!i)}get hidden(){return this.hasAttribute(Wn)}};dn=new WeakSet,yo=function(i){var o;const n=(o=this.shadowRoot)==null?void 0:o.querySelector(".ui");n==null||n.classList.toggle("hidden",i),localStorage.setItem(Yc,i.toString())},Xu=function(){if(!document.getElementById(Kc)){const n=document.createElement("style");n.setAttribute("id",Kc),n.innerHTML=qu(),window!=null&&window.vscodeWebviewPlaygroundNonce&&n.setAttribute("nonce",window.vscodeWebviewPlaygroundNonce),document.head.appendChild(n)}},Zs=new WeakMap,Qs=new WeakMap,ur=new WeakMap,mt(ui,"observedAttributes",[Wn]),mt(ui,"template"),mt(ui,"activeInstance",null);let ol=ui;const T1="modulepreload",P1=function(t){return"/"+t},Xc={},ci=function(e,i,n){let o=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(i.map(l=>{if(l=P1(l),l in Xc)return;Xc[l]=!0;const d=l.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":T1,d||(c.as="script"),c.crossOrigin="",c.href=l,a&&c.setAttribute("nonce",a),document.head.appendChild(c),d)return new Promise((g,f)=>{c.addEventListener("load",g),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},Zu=String.raw,I1=String.raw,Zc="vscode-playground:theme",Qu=new CSSStyleSheet;Qu.replaceSync(I1`
  :host {
    align-items: center;
    display: flex;
    font-family: var(--vscode-font-family, sans-serif);
    font-size: 13px;
  }

  label {
    margin-right: 5px;
  }

  select {
    background-color: var(--vscode-editor-background);
    border: 1px solid var(--vscode-foreground);
    color: var(--vscode-foreground);
    font-family: var(--vscode-font-family, sans-serif);
  }

  select:focus-visible {
    outline: 1px solid var(--vscode-focusBorder);
  }
`);function O1(t){let e="";return Object.keys(t).forEach(n=>{e+=Zu`<option value="${n}">${t[n].name}</option>`}),e}function M1(t){return Zu`
    <label for="theme-selector">Theme</label>
    <select id="theme-selector">
      ${O1(t)}
    </select>
  `}var Vi,Rt,Ju,ll,ef,tf,cl,nf,rf,Js;const je=class je extends HTMLElement{constructor(){var n;super();st(this,Rt);st(this,Vi);st(this,Js,()=>{const i=Re(this,Vi).value;ft(this,Rt,ll).call(this,i).then(()=>{ft(this,Rt,rf).call(this,i)})});je.template||(je.template=document.createElement("template"),je.template.innerHTML=M1(je.themeInfo));let i=this.attachShadow({mode:"open"});i.adoptedStyleSheets.push(Qu),i.appendChild(je.template.content.cloneNode(!0)),Li(this,Vi,(n=this.shadowRoot)==null?void 0:n.querySelector("#theme-selector"))}connectedCallback(){var n;je.instances.add(this),(n=Re(this,Vi))==null||n.addEventListener("change",Re(this,Js));const i=ft(this,Rt,nf).call(this);ft(this,Rt,ll).call(this,i),this.setSelectedOption(i)}disconnectedCallback(){var i;(i=Re(this,Vi))==null||i.removeEventListener("change",Re(this,Js)),je.instances.delete(this)}setSelectedOption(i){Re(this,Vi).value=i}disableSelector(i){Re(this,Vi).disabled=i}};Vi=new WeakMap,Rt=new WeakSet,Ju=async function(i){switch(i){case"light":return await ci(()=>import("./light-XoZZdbZR.js"),[]);case"light-v2":return await ci(()=>import("./light-v2-B7PYStdH.js"),[]);case"light-quiet":return await ci(()=>import("./light-quiet-0MdpH9Yh.js"),[]);case"light-solarized":return await ci(()=>import("./light-solarized-BGDWjaXo.js"),[]);case"dark":return await ci(()=>import("./dark-CfPmV_5f.js"),[]);case"dark-v2":return await ci(()=>import("./dark-v2-CHB_E5YL.js"),[]);case"dark-monokai":return await ci(()=>import("./dark-monokai-DV4q0i9H.js"),[]);case"dark-solarized":return await ci(()=>import("./dark-solarized-LlJ1nf07.js"),[]);case"hc-dark":return await ci(()=>import("./hc-dark-CDKXfsX3.js"),[]);case"hc-light":return await ci(()=>import("./hc-light-BulFNsz-.js"),[]);default:return await ci(()=>import("./dark-v2-CHB_E5YL.js"),[])}},ll=async function(i){var a,l;if(localStorage.setItem(Zc,i),i===je.appliedTheme)return;(l=(a=je.themes[je.appliedTheme])==null?void 0:a.data)==null||l.forEach(d=>{document.documentElement.style.removeProperty(d[0])}),je.appliedTheme=i;const{themeKind:n,name:o,longName:r}=je.themeInfo[i],s=n==="vscode-high-contrast-light"?["vscode-high-contrast","vscode-high-contrast-light"]:[n];if(document.body.classList.remove("vscode-light","vscode-dark","vscode-high-contrast","vscode-high-contrast-light"),document.body.classList.add(...s),document.body.dataset.vscodeThemeKind=n,document.body.dataset.vscodeThemeName=o,document.body.dataset.vscodeThemeId=r,je.themes[i]=je.themes[i]||{},je.themes[i].data){ft(this,Rt,cl).call(this,i);return}if(!je.themes[i].isFetching){je.themes[i].isFetching=!0;const d=await ft(this,Rt,Ju).call(this,i);je.themes[i].isFetching=!1,je.themes[i].data=d.theme,ft(this,Rt,cl).call(this,i)}},ef=function(){return navigator.userAgent.indexOf("Linux")>-1?'system-ui, "Ubuntu", "Droid Sans", sans-serif':navigator.userAgent.indexOf("Mac")>-1?"-apple-system, BlinkMacSystemFont, sans-serif":navigator.userAgent.indexOf("Windows")>-1?'"Segoe WPC", "Segoe UI", sans-serif':"sans-serif"},tf=function(){return navigator.userAgent.indexOf("Linux")>-1?'"Droid Sans Mono", "monospace", monospace':navigator.userAgent.indexOf("Mac")>-1?'Menlo, Monaco, "Courier New", monospace':navigator.userAgent.indexOf("Windows")>-1?'Consolas, "Courier New", monospace':"monospace"},cl=function(i){je.themes[i].data&&je.themes[i].data.forEach(n=>{document.documentElement.style.setProperty(n[0],n[1])}),document.documentElement.style.setProperty("--vscode-font-family",ft(this,Rt,ef).call(this)),document.documentElement.style.setProperty("--vscode-editor-font-family",ft(this,Rt,tf).call(this))},nf=function(){let n=Object.keys(je.themeInfo)[0];const o=localStorage.getItem(Zc);return o&&o in je.themeInfo&&(n=o),n},rf=function(i){je.instances.forEach(n=>{n!==this&&n.setSelectedOption(i)})},Js=new WeakMap,mt(je,"template"),mt(je,"instances",new Set),mt(je,"themeInfo",{light:{themeKind:"vscode-light",name:"Light+",longName:"Default Light+"},"light-v2":{themeKind:"vscode-light",name:"Light Modern",longName:"Default Light Modern"},"light-quiet":{themeKind:"vscode-light",name:"Quiet Light",longName:"Quiet Light"},"light-solarized":{themeKind:"vscode-light",name:"Solarized Light",longName:"Solarized Light"},dark:{themeKind:"vscode-dark",name:"Dark+",longName:"Default Dark+"},"dark-v2":{themeKind:"vscode-dark",name:"Dark Modern",longName:"Default Dark Modern"},"dark-solarized":{themeKind:"vscode-dark",name:"Solarized Dark",longName:"Solarized Dark"},"dark-monokai":{themeKind:"vscode-dark",name:"Monokai",longName:"Monokai"},"hc-light":{themeKind:"vscode-high-contrast-light",name:"Light High Contrast",longName:"Default High Contrast Light"},"hc-dark":{themeKind:"vscode-high-contrast",name:"Dark High Contrast",longName:"Default High Contrast"}}),mt(je,"directoryUrl"),mt(je,"appliedTheme"),mt(je,"themes",{light:{},"light-v2":{},"light-quiet":{},"light-solarized":{},dark:{},"dark-v2":{},"dark-monokai":{},"dark-solarized":{},"hc-light":{},"hc-dark":{}});let al=je;const L1=String.raw,D1=String.raw,Qc="vscode-playground:reduce-motion",sf=new CSSStyleSheet;sf.replaceSync(D1`
  :host {
    align-items: flex-start;
    display: flex;
    font-size: 13px;
    white-space: nowrap;
  }

  input {
    display: block;
    margin: 3px 4px 0 0;
  }

  label {
    user-select: none;
  }
`);function F1(){return L1`
    <input type="checkbox" id="toggle-motion" part="checkbox" />
    <label for="toggle-motion" part="label">Workbench: Reduce Motion</label>
  `}var Hi,eo,dl,to;const fi=class fi extends HTMLElement{constructor(){var n;super();st(this,eo);st(this,Hi);st(this,to,()=>{var n;const i=((n=Re(this,Hi))==null?void 0:n.checked)??!1;ft(this,eo,dl).call(this,i),localStorage.setItem(Qc,i.toString()),fi.instances.forEach(o=>{o.setChecked(i)})});fi.template||(fi.template=document.createElement("template"),fi.template.innerHTML=F1());let i=this.attachShadow({mode:"open"});i.adoptedStyleSheets.push(sf),i.appendChild(fi.template.content.cloneNode(!0)),Li(this,Hi,(n=this.shadowRoot)==null?void 0:n.querySelector("#toggle-motion"))}connectedCallback(){const i=localStorage.getItem(Qc)==="true";Re(this,Hi).addEventListener("change",Re(this,to)),Re(this,Hi).checked=i,ft(this,eo,dl).call(this,i),fi.instances.add(this)}disconnectedCallback(){Re(this,Hi).removeEventListener("change",Re(this,to)),fi.instances.delete(this)}setChecked(i){Re(this,Hi).checked=i}};Hi=new WeakMap,eo=new WeakSet,dl=function(i){document.body.classList.toggle("vscode-reduce-motion",i)},to=new WeakMap,mt(fi,"template"),mt(fi,"instances",new Set);let hl=fi;const $1=String.raw,B1=String.raw,Jc="vscode-playground:underline",of=new CSSStyleSheet;of.replaceSync(B1`
  :host {
    align-items: flex-start;
    display: flex;
    font-size: 13px;
    white-space: nowrap;
  }

  input {
    display: block;
    margin: 3px 4px 0 0;
  }

  label {
    user-select: none;
  }
`);function z1(){return $1`
    <input type="checkbox" id="toggle-underline" part="checkbox">
    <label for="toggle-underline" part="label"
      >Accessibility: Underline Links</span></label
    >
  `}var Ui,io,fl,no;const pi=class pi extends HTMLElement{constructor(){var n;super();st(this,io);st(this,Ui);st(this,no,()=>{var n;const i=((n=Re(this,Ui))==null?void 0:n.checked)??!1;ft(this,io,fl).call(this,i),localStorage.setItem(Jc,i.toString()),pi.instances.forEach(o=>{o!==this&&o.setChecked(i)})});pi.template||(pi.template=document.createElement("template"),pi.template.innerHTML=z1());let i=this.attachShadow({mode:"open"});i.adoptedStyleSheets.push(of),i.appendChild(pi.template.content.cloneNode(!0)),Li(this,Ui,(n=this.shadowRoot)==null?void 0:n.querySelector("#toggle-underline"))}connectedCallback(){const i=localStorage.getItem(Jc)==="true";Re(this,Ui).addEventListener("change",Re(this,no)),Re(this,Ui).checked=i,ft(this,io,fl).call(this,i),pi.instances.add(this)}disconnectedCallback(){Re(this,Ui).removeEventListener("change",Re(this,no)),pi.instances.delete(this)}setChecked(i){Re(this,Ui).checked=i}};Ui=new WeakMap,io=new WeakSet,fl=function(i){const n=i?"underline":"none";document.documentElement.style.getPropertyValue("--text-link-decoration")!==n&&document.documentElement.style.setProperty("--text-link-decoration",n)},no=new WeakMap,mt(pi,"template"),mt(pi,"instances",new Set);let ul=pi;const N1=String.raw,V1=String.raw,eh="vscode-playground:view-container",af=new CSSStyleSheet;af.replaceSync(V1`
  :host {
    align-items: center;
    display: flex;
    font-family: var(--vscode-font-family, sans-serif);
    font-size: 13px;
  }

  label {
    margin-right: 5px;
  }

  select {
    background-color: var(--vscode-editor-background);
    border: 1px solid var(--vscode-foreground);
    color: var(--vscode-foreground);
    font-family: var(--vscode-font-family, sans-serif);
  }

  select:focus {
    outline: 1px solid var(--vscode-focusBorder);
  }
`);function H1(){return N1`
    <label for="container-selector">View container</label>
    <select id="container-selector">
      <option value="editor">Editor</option>
      <option value="sidebar">Sidebar</option>
      <option value="panel">Panel</option>
    </select>
  `}var Gi,ro,Hn,gl,lf;const Zt=class Zt extends HTMLElement{constructor(){var n;super();st(this,Hn);st(this,Gi);st(this,ro,()=>{const i=Re(this,Gi).value;i&&(ft(this,Hn,gl).call(this,i),ft(this,Hn,lf).call(this,i),localStorage.setItem(eh,i))});Zt.template||(Zt.template=document.createElement("template"),Zt.template.innerHTML=H1());let i=this.attachShadow({mode:"open"});i.adoptedStyleSheets.push(af),i.appendChild(Zt.template.content.cloneNode(!0)),Li(this,Gi,(n=this.shadowRoot)==null?void 0:n.querySelector("#container-selector"))}setSelectedOption(i){Re(this,Gi).value=i}connectedCallback(){Re(this,Gi).addEventListener("change",Re(this,ro)),Zt.instances.add(this);const i=localStorage.getItem(eh)??"editor";Zt.appliedViewContainer!==i&&ft(this,Hn,gl).call(this,i),Re(this,Gi).value=i}disconnectedCallback(){Re(this,Gi).removeEventListener("change",Re(this,ro)),Zt.instances.delete(this)}};Gi=new WeakMap,ro=new WeakMap,Hn=new WeakSet,gl=function(i){let n;switch(i){case"sidebar":n="var(--vscode-sideBar-background)";break;case"panel":n="var(--vscode-panel-background)";break;case"editor":default:n="var(--vscode-editor-background)"}document.body.style.setProperty("--playground-body-background",n),Zt.appliedViewContainer=i},lf=function(i){Zt.instances.forEach(n=>{n!==this&&n.setSelectedOption(i)})},mt(Zt,"template"),mt(Zt,"instances",new Set),mt(Zt,"appliedViewContainer");let pl=Zt;customElements.define("vscode-demo",sl);customElements.define("vscode-dev-toolbar",ol);customElements.define("vscode-theme-selector",al);customElements.define("vscode-toggle-motion",hl);customElements.define("vscode-toggle-underline",ul);customElements.define("vscode-view-container-selector",pl);/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ql(t){const e=Object.create(null);for(const i of t.split(","))e[i]=1;return i=>i in e}const it={},or=[],Ri=()=>{},U1=()=>!1,Xo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Wl=t=>t.startsWith("onUpdate:"),Vt=Object.assign,Kl=(t,e)=>{const i=t.indexOf(e);i>-1&&t.splice(i,1)},G1=Object.prototype.hasOwnProperty,Qe=(t,e)=>G1.call(t,e),Oe=Array.isArray,ar=t=>Zo(t)==="[object Map]",cf=t=>Zo(t)==="[object Set]",De=t=>typeof t=="function",bt=t=>typeof t=="string",Qi=t=>typeof t=="symbol",lt=t=>t!==null&&typeof t=="object",hf=t=>(lt(t)||De(t))&&De(t.then)&&De(t.catch),df=Object.prototype.toString,Zo=t=>df.call(t),j1=t=>Zo(t).slice(8,-1),uf=t=>Zo(t)==="[object Object]",Yl=t=>bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Rs=ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return i=>e[i]||(e[i]=t(i))},q1=/-(\w)/g,gn=Qo(t=>t.replace(q1,(e,i)=>i?i.toUpperCase():"")),W1=/\B([A-Z])/g,jn=Qo(t=>t.replace(W1,"-$1").toLowerCase()),ff=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ba=Qo(t=>t?`on${ff(t)}`:""),ln=(t,e)=>!Object.is(t,e),xo=(t,...e)=>{for(let i=0;i<t.length;i++)t[i](...e)},pf=(t,e,i,n=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:n,value:i})},vl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let th;const Jo=()=>th||(th=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ea(t){if(Oe(t)){const e={};for(let i=0;i<t.length;i++){const n=t[i],o=bt(n)?Z1(n):ea(n);if(o)for(const r in o)e[r]=o[r]}return e}else if(bt(t)||lt(t))return t}const K1=/;(?![^(]*\))/g,Y1=/:([^]+)/,X1=/\/\*[^]*?\*\//g;function Z1(t){const e={};return t.replace(X1,"").split(K1).forEach(i=>{if(i){const n=i.split(Y1);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Xl(t){let e="";if(bt(t))e=t;else if(Oe(t))for(let i=0;i<t.length;i++){const n=Xl(t[i]);n&&(e+=n+" ")}else if(lt(t))for(const i in t)t[i]&&(e+=i+" ");return e.trim()}const Q1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",J1=ql(Q1);function gf(t){return!!t||t===""}const vf=t=>!!(t&&t.__v_isRef===!0),sr=t=>bt(t)?t:t==null?"":Oe(t)||lt(t)&&(t.toString===df||!De(t.toString))?vf(t)?sr(t.value):JSON.stringify(t,_f,2):String(t),_f=(t,e)=>vf(e)?_f(t,e.value):ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((i,[n,o],r)=>(i[ya(n,r)+" =>"]=o,i),{})}:cf(e)?{[`Set(${e.size})`]:[...e.values()].map(i=>ya(i))}:Qi(e)?ya(e):lt(e)&&!Oe(e)&&!uf(e)?String(e):e,ya=(t,e="")=>{var i;return Qi(t)?`Symbol(${(i=t.description)!=null?i:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gt;class mf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,i;if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].pause();for(e=0,i=this.effects.length;e<i;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,i;if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].resume();for(e=0,i=this.effects.length;e<i;e++)this.effects[e].resume()}}run(e){if(this._active){const i=Gt;try{return Gt=this,e()}finally{Gt=i}}}on(){Gt=this}off(){Gt=this.parent}stop(e){if(this._active){this._active=!1;let i,n;for(i=0,n=this.effects.length;i<n;i++)this.effects[i].stop();for(this.effects.length=0,i=0,n=this.cleanups.length;i<n;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){for(i=0,n=this.scopes.length;i<n;i++)this.scopes[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function bf(t){return new mf(t)}function Zl(){return Gt}function yf(t,e=!1){Gt&&Gt.cleanups.push(t)}let rt;const xa=new WeakSet;class xf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gt&&Gt.active&&Gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xa.has(this)&&(xa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ih(this),Cf(this);const e=rt,i=_i;rt=this,_i=!0;try{return this.fn()}finally{kf(this),rt=e,_i=i,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ec(e);this.deps=this.depsTail=void 0,ih(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_l(this)&&this.run()}get dirty(){return _l(this)}}let wf=0,As,Ts;function Sf(t,e=!1){if(t.flags|=8,e){t.next=Ts,Ts=t;return}t.next=As,As=t}function Ql(){wf++}function Jl(){if(--wf>0)return;if(Ts){let e=Ts;for(Ts=void 0;e;){const i=e.next;e.next=void 0,e.flags&=-9,e=i}}let t;for(;As;){let e=As;for(As=void 0;e;){const i=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){t||(t=n)}e=i}}if(t)throw t}function Cf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kf(t){let e,i=t.depsTail,n=i;for(;n;){const o=n.prevDep;n.version===-1?(n===i&&(i=o),ec(n),eg(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=o}t.deps=e,t.depsTail=i}function _l(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ef(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ef(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ns))return;t.globalVersion=Ns;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!_l(t)){t.flags&=-3;return}const i=rt,n=_i;rt=t,_i=!0;try{Cf(t);const o=t.fn(t._value);(e.version===0||ln(o,t._value))&&(t._value=o,e.version++)}catch(o){throw e.version++,o}finally{rt=i,_i=n,kf(t),t.flags&=-3}}function ec(t,e=!1){const{dep:i,prevSub:n,nextSub:o}=t;if(n&&(n.nextSub=o,t.prevSub=void 0),o&&(o.prevSub=n,t.nextSub=void 0),i.subs===t&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let r=i.computed.deps;r;r=r.nextDep)ec(r,!0)}!e&&!--i.sc&&i.map&&i.map.delete(i.key)}function eg(t){const{prevDep:e,nextDep:i}=t;e&&(e.nextDep=i,t.prevDep=void 0),i&&(i.prevDep=e,t.nextDep=void 0)}let _i=!0;const Rf=[];function _n(){Rf.push(_i),_i=!1}function mn(){const t=Rf.pop();_i=t===void 0?!0:t}function ih(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const i=rt;rt=void 0;try{e()}finally{rt=i}}}let Ns=0;class tg{constructor(e,i){this.sub=e,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!rt||!_i||rt===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==rt)i=this.activeLink=new tg(rt,this),rt.deps?(i.prevDep=rt.depsTail,rt.depsTail.nextDep=i,rt.depsTail=i):rt.deps=rt.depsTail=i,Af(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const n=i.nextDep;n.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=n),i.prevDep=rt.depsTail,i.nextDep=void 0,rt.depsTail.nextDep=i,rt.depsTail=i,rt.deps===i&&(rt.deps=n)}return i}trigger(e){this.version++,Ns++,this.notify(e)}notify(e){Ql();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{Jl()}}}function Af(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)Af(n)}const i=t.dep.subs;i!==t&&(t.prevSub=i,i&&(i.nextSub=t)),t.dep.subs=t}}const Fo=new WeakMap,Fn=Symbol(""),ml=Symbol(""),Vs=Symbol("");function $t(t,e,i){if(_i&&rt){let n=Fo.get(t);n||Fo.set(t,n=new Map);let o=n.get(i);o||(n.set(i,o=new tc),o.map=n,o.key=i),o.track()}}function qi(t,e,i,n,o,r){const s=Fo.get(t);if(!s){Ns++;return}const a=l=>{l&&l.trigger()};if(Ql(),e==="clear")s.forEach(a);else{const l=Oe(t),d=l&&Yl(i);if(l&&i==="length"){const h=Number(n);s.forEach((c,g)=>{(g==="length"||g===Vs||!Qi(g)&&g>=h)&&a(c)})}else switch((i!==void 0||s.has(void 0))&&a(s.get(i)),d&&a(s.get(Vs)),e){case"add":l?d&&a(s.get("length")):(a(s.get(Fn)),ar(t)&&a(s.get(ml)));break;case"delete":l||(a(s.get(Fn)),ar(t)&&a(s.get(ml)));break;case"set":ar(t)&&a(s.get(Fn));break}}Jl()}function ig(t,e){const i=Fo.get(t);return i&&i.get(e)}function Kn(t){const e=qe(t);return e===t?e:($t(e,"iterate",Vs),hi(t)?e:e.map(Bt))}function ta(t){return $t(t=qe(t),"iterate",Vs),t}const ng={__proto__:null,[Symbol.iterator](){return wa(this,Symbol.iterator,Bt)},concat(...t){return Kn(this).concat(...t.map(e=>Oe(e)?Kn(e):e))},entries(){return wa(this,"entries",t=>(t[1]=Bt(t[1]),t))},every(t,e){return Di(this,"every",t,e,void 0,arguments)},filter(t,e){return Di(this,"filter",t,e,i=>i.map(Bt),arguments)},find(t,e){return Di(this,"find",t,e,Bt,arguments)},findIndex(t,e){return Di(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Di(this,"findLast",t,e,Bt,arguments)},findLastIndex(t,e){return Di(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Di(this,"forEach",t,e,void 0,arguments)},includes(...t){return Sa(this,"includes",t)},indexOf(...t){return Sa(this,"indexOf",t)},join(t){return Kn(this).join(t)},lastIndexOf(...t){return Sa(this,"lastIndexOf",t)},map(t,e){return Di(this,"map",t,e,void 0,arguments)},pop(){return Or(this,"pop")},push(...t){return Or(this,"push",t)},reduce(t,...e){return nh(this,"reduce",t,e)},reduceRight(t,...e){return nh(this,"reduceRight",t,e)},shift(){return Or(this,"shift")},some(t,e){return Di(this,"some",t,e,void 0,arguments)},splice(...t){return Or(this,"splice",t)},toReversed(){return Kn(this).toReversed()},toSorted(t){return Kn(this).toSorted(t)},toSpliced(...t){return Kn(this).toSpliced(...t)},unshift(...t){return Or(this,"unshift",t)},values(){return wa(this,"values",Bt)}};function wa(t,e,i){const n=ta(t),o=n[e]();return n!==t&&!hi(t)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.value&&(r.value=i(r.value)),r}),o}const rg=Array.prototype;function Di(t,e,i,n,o,r){const s=ta(t),a=s!==t&&!hi(t),l=s[e];if(l!==rg[e]){const c=l.apply(t,r);return a?Bt(c):c}let d=i;s!==t&&(a?d=function(c,g){return i.call(this,Bt(c),g,t)}:i.length>2&&(d=function(c,g){return i.call(this,c,g,t)}));const h=l.call(s,d,n);return a&&o?o(h):h}function nh(t,e,i,n){const o=ta(t);let r=i;return o!==t&&(hi(t)?i.length>3&&(r=function(s,a,l){return i.call(this,s,a,l,t)}):r=function(s,a,l){return i.call(this,s,Bt(a),l,t)}),o[e](r,...n)}function Sa(t,e,i){const n=qe(t);$t(n,"iterate",Vs);const o=n[e](...i);return(o===-1||o===!1)&&rc(i[0])?(i[0]=qe(i[0]),n[e](...i)):o}function Or(t,e,i=[]){_n(),Ql();const n=qe(t)[e].apply(t,i);return Jl(),mn(),n}const sg=ql("__proto__,__v_isRef,__isVue"),Tf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qi));function og(t){Qi(t)||(t=String(t));const e=qe(this);return $t(e,"has",t),e.hasOwnProperty(t)}class Pf{constructor(e=!1,i=!1){this._isReadonly=e,this._isShallow=i}get(e,i,n){if(i==="__v_skip")return e.__v_skip;const o=this._isReadonly,r=this._isShallow;if(i==="__v_isReactive")return!o;if(i==="__v_isReadonly")return o;if(i==="__v_isShallow")return r;if(i==="__v_raw")return n===(o?r?vg:Lf:r?Mf:Of).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=Oe(e);if(!o){let l;if(s&&(l=ng[i]))return l;if(i==="hasOwnProperty")return og}const a=Reflect.get(e,i,gt(e)?e:n);return(Qi(i)?Tf.has(i):sg(i))||(o||$t(e,"get",i),r)?a:gt(a)?s&&Yl(i)?a:a.value:lt(a)?o?Ff(a):qn(a):a}}class If extends Pf{constructor(e=!1){super(!1,e)}set(e,i,n,o){let r=e[i];if(!this._isShallow){const l=Vn(r);if(!hi(n)&&!Vn(n)&&(r=qe(r),n=qe(n)),!Oe(e)&&gt(r)&&!gt(n))return l?!1:(r.value=n,!0)}const s=Oe(e)&&Yl(i)?Number(i)<e.length:Qe(e,i),a=Reflect.set(e,i,n,gt(e)?e:o);return e===qe(o)&&(s?ln(n,r)&&qi(e,"set",i,n):qi(e,"add",i,n)),a}deleteProperty(e,i){const n=Qe(e,i);e[i];const o=Reflect.deleteProperty(e,i);return o&&n&&qi(e,"delete",i,void 0),o}has(e,i){const n=Reflect.has(e,i);return(!Qi(i)||!Tf.has(i))&&$t(e,"has",i),n}ownKeys(e){return $t(e,"iterate",Oe(e)?"length":Fn),Reflect.ownKeys(e)}}class ag extends Pf{constructor(e=!1){super(!0,e)}set(e,i){return!0}deleteProperty(e,i){return!0}}const lg=new If,cg=new ag,hg=new If(!0);const bl=t=>t,go=t=>Reflect.getPrototypeOf(t);function dg(t,e,i){return function(...n){const o=this.__v_raw,r=qe(o),s=ar(r),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,d=o[t](...n),h=i?bl:e?yl:Bt;return!e&&$t(r,"iterate",l?ml:Fn),{next(){const{value:c,done:g}=d.next();return g?{value:c,done:g}:{value:a?[h(c[0]),h(c[1])]:h(c),done:g}},[Symbol.iterator](){return this}}}}function vo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ug(t,e){const i={get(o){const r=this.__v_raw,s=qe(r),a=qe(o);t||(ln(o,a)&&$t(s,"get",o),$t(s,"get",a));const{has:l}=go(s),d=e?bl:t?yl:Bt;if(l.call(s,o))return d(r.get(o));if(l.call(s,a))return d(r.get(a));r!==s&&r.get(o)},get size(){const o=this.__v_raw;return!t&&$t(qe(o),"iterate",Fn),Reflect.get(o,"size",o)},has(o){const r=this.__v_raw,s=qe(r),a=qe(o);return t||(ln(o,a)&&$t(s,"has",o),$t(s,"has",a)),o===a?r.has(o):r.has(o)||r.has(a)},forEach(o,r){const s=this,a=s.__v_raw,l=qe(a),d=e?bl:t?yl:Bt;return!t&&$t(l,"iterate",Fn),a.forEach((h,c)=>o.call(r,d(h),d(c),s))}};return Vt(i,t?{add:vo("add"),set:vo("set"),delete:vo("delete"),clear:vo("clear")}:{add(o){!e&&!hi(o)&&!Vn(o)&&(o=qe(o));const r=qe(this);return go(r).has.call(r,o)||(r.add(o),qi(r,"add",o,o)),this},set(o,r){!e&&!hi(r)&&!Vn(r)&&(r=qe(r));const s=qe(this),{has:a,get:l}=go(s);let d=a.call(s,o);d||(o=qe(o),d=a.call(s,o));const h=l.call(s,o);return s.set(o,r),d?ln(r,h)&&qi(s,"set",o,r):qi(s,"add",o,r),this},delete(o){const r=qe(this),{has:s,get:a}=go(r);let l=s.call(r,o);l||(o=qe(o),l=s.call(r,o)),a&&a.call(r,o);const d=r.delete(o);return l&&qi(r,"delete",o,void 0),d},clear(){const o=qe(this),r=o.size!==0,s=o.clear();return r&&qi(o,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(o=>{i[o]=dg(o,t,e)}),i}function ic(t,e){const i=ug(t,e);return(n,o,r)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?n:Reflect.get(Qe(i,o)&&o in n?i:n,o,r)}const fg={get:ic(!1,!1)},pg={get:ic(!1,!0)},gg={get:ic(!0,!1)};const Of=new WeakMap,Mf=new WeakMap,Lf=new WeakMap,vg=new WeakMap;function _g(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mg(t){return t.__v_skip||!Object.isExtensible(t)?0:_g(j1(t))}function qn(t){return Vn(t)?t:nc(t,!1,lg,fg,Of)}function Df(t){return nc(t,!1,hg,pg,Mf)}function Ff(t){return nc(t,!0,cg,gg,Lf)}function nc(t,e,i,n,o){if(!lt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=o.get(t);if(r)return r;const s=mg(t);if(s===0)return t;const a=new Proxy(t,s===2?n:i);return o.set(t,a),a}function cn(t){return Vn(t)?cn(t.__v_raw):!!(t&&t.__v_isReactive)}function Vn(t){return!!(t&&t.__v_isReadonly)}function hi(t){return!!(t&&t.__v_isShallow)}function rc(t){return t?!!t.__v_raw:!1}function qe(t){const e=t&&t.__v_raw;return e?qe(e):t}function sc(t){return!Qe(t,"__v_skip")&&Object.isExtensible(t)&&pf(t,"__v_skip",!0),t}const Bt=t=>lt(t)?qn(t):t,yl=t=>lt(t)?Ff(t):t;function gt(t){return t?t.__v_isRef===!0:!1}function bn(t){return Bf(t,!1)}function $f(t){return Bf(t,!0)}function Bf(t,e){return gt(t)?t:new bg(t,e)}class bg{constructor(e,i){this.dep=new tc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?e:qe(e),this._value=i?e:Bt(e),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(e){const i=this._rawValue,n=this.__v_isShallow||hi(e)||Vn(e);e=n?e:qe(e),ln(e,i)&&(this._rawValue=e,this._value=n?e:Bt(e),this.dep.trigger())}}function xt(t){return gt(t)?t.value:t}const yg={get:(t,e,i)=>e==="__v_raw"?t:xt(Reflect.get(t,e,i)),set:(t,e,i,n)=>{const o=t[e];return gt(o)&&!gt(i)?(o.value=i,!0):Reflect.set(t,e,i,n)}};function zf(t){return cn(t)?t:new Proxy(t,yg)}function xg(t){const e=Oe(t)?new Array(t.length):{};for(const i in t)e[i]=Sg(t,i);return e}class wg{constructor(e,i,n){this._object=e,this._key=i,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ig(qe(this._object),this._key)}}function Sg(t,e,i){const n=t[e];return gt(n)?n:new wg(t,e,i)}class Cg{constructor(e,i,n){this.fn=e,this.setter=i,this._value=void 0,this.dep=new tc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&rt!==this)return Sf(this,!0),!0}get value(){const e=this.dep.track();return Ef(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function kg(t,e,i=!1){let n,o;return De(t)?n=t:(n=t.get,o=t.set),new Cg(n,o,i)}const _o={},$o=new WeakMap;let In;function Eg(t,e=!1,i=In){if(i){let n=$o.get(i);n||$o.set(i,n=[]),n.push(t)}}function Rg(t,e,i=it){const{immediate:n,deep:o,once:r,scheduler:s,augmentJob:a,call:l}=i,d=b=>o?b:hi(b)||o===!1||o===0?Wi(b,1):Wi(b);let h,c,g,f,u=!1,_=!1;if(gt(t)?(c=()=>t.value,u=hi(t)):cn(t)?(c=()=>d(t),u=!0):Oe(t)?(_=!0,u=t.some(b=>cn(b)||hi(b)),c=()=>t.map(b=>{if(gt(b))return b.value;if(cn(b))return d(b);if(De(b))return l?l(b,2):b()})):De(t)?e?c=l?()=>l(t,2):t:c=()=>{if(g){_n();try{g()}finally{mn()}}const b=In;In=h;try{return l?l(t,3,[f]):t(f)}finally{In=b}}:c=Ri,e&&o){const b=c,S=o===!0?1/0:o;c=()=>Wi(b(),S)}const w=Zl(),m=()=>{h.stop(),w&&w.active&&Kl(w.effects,h)};if(r&&e){const b=e;e=(...S)=>{b(...S),m()}}let p=_?new Array(t.length).fill(_o):_o;const v=b=>{if(!(!(h.flags&1)||!h.dirty&&!b))if(e){const S=h.run();if(o||u||(_?S.some((T,E)=>ln(T,p[E])):ln(S,p))){g&&g();const T=In;In=h;try{const E=[S,p===_o?void 0:_&&p[0]===_o?[]:p,f];l?l(e,3,E):e(...E),p=S}finally{In=T}}}else h.run()};return a&&a(v),h=new xf(c),h.scheduler=s?()=>s(v,!1):v,f=b=>Eg(b,!1,h),g=h.onStop=()=>{const b=$o.get(h);if(b){if(l)l(b,4);else for(const S of b)S();$o.delete(h)}},e?n?v(!0):p=h.run():s?s(v.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function Wi(t,e=1/0,i){if(e<=0||!lt(t)||t.__v_skip||(i=i||new Set,i.has(t)))return t;if(i.add(t),e--,gt(t))Wi(t.value,e,i);else if(Oe(t))for(let n=0;n<t.length;n++)Wi(t[n],e,i);else if(cf(t)||ar(t))t.forEach(n=>{Wi(n,e,i)});else if(uf(t)){for(const n in t)Wi(t[n],e,i);for(const n of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,n)&&Wi(t[n],e,i)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ao(t,e,i,n){try{return n?t(...n):t()}catch(o){ia(o,e,i)}}function Pi(t,e,i,n){if(De(t)){const o=ao(t,e,i,n);return o&&hf(o)&&o.catch(r=>{ia(r,e,i)}),o}if(Oe(t)){const o=[];for(let r=0;r<t.length;r++)o.push(Pi(t[r],e,i,n));return o}}function ia(t,e,i,n=!0){const o=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||it;if(e){let a=e.parent;const l=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${i}`;for(;a;){const h=a.ec;if(h){for(let c=0;c<h.length;c++)if(h[c](t,l,d)===!1)return}a=a.parent}if(r){_n(),ao(r,null,10,[t,l,d]),mn();return}}Ag(t,i,o,n,s)}function Ag(t,e,i,n=!0,o=!1){if(o)throw t;console.error(t)}const jt=[];let Ci=-1;const lr=[];let rn=null,tr=0;const Nf=Promise.resolve();let Bo=null;function oc(t){const e=Bo||Nf;return t?e.then(this?t.bind(this):t):e}function Tg(t){let e=Ci+1,i=jt.length;for(;e<i;){const n=e+i>>>1,o=jt[n],r=Hs(o);r<t||r===t&&o.flags&2?e=n+1:i=n}return e}function ac(t){if(!(t.flags&1)){const e=Hs(t),i=jt[jt.length-1];!i||!(t.flags&2)&&e>=Hs(i)?jt.push(t):jt.splice(Tg(e),0,t),t.flags|=1,Vf()}}function Vf(){Bo||(Bo=Nf.then(Uf))}function Pg(t){Oe(t)?lr.push(...t):rn&&t.id===-1?rn.splice(tr+1,0,t):t.flags&1||(lr.push(t),t.flags|=1),Vf()}function rh(t,e,i=Ci+1){for(;i<jt.length;i++){const n=jt[i];if(n&&n.flags&2){if(t&&n.id!==t.uid)continue;jt.splice(i,1),i--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Hf(t){if(lr.length){const e=[...new Set(lr)].sort((i,n)=>Hs(i)-Hs(n));if(lr.length=0,rn){rn.push(...e);return}for(rn=e,tr=0;tr<rn.length;tr++){const i=rn[tr];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}rn=null,tr=0}}const Hs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Uf(t){try{for(Ci=0;Ci<jt.length;Ci++){const e=jt[Ci];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ao(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ci<jt.length;Ci++){const e=jt[Ci];e&&(e.flags&=-2)}Ci=-1,jt.length=0,Hf(),Bo=null,(jt.length||lr.length)&&Uf()}}let Ct=null,Gf=null;function zo(t){const e=Ct;return Ct=t,Gf=t&&t.type.__scopeId||null,e}function Ft(t,e=Ct,i){if(!e||t._n)return t;const n=(...o)=>{n._d&&fh(-1);const r=zo(e);let s;try{s=t(...o)}finally{zo(r),n._d&&fh(1)}return s};return n._n=!0,n._c=!0,n._d=!0,n}function Ig(t,e){if(Ct===null)return t;const i=oa(Ct),n=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[r,s,a,l=it]=e[o];r&&(De(r)&&(r={mounted:r,updated:r}),r.deep&&Wi(s),n.push({dir:r,instance:i,value:s,oldValue:void 0,arg:a,modifiers:l}))}return t}function kn(t,e,i,n){const o=t.dirs,r=e&&e.dirs;for(let s=0;s<o.length;s++){const a=o[s];r&&(a.oldValue=r[s].value);let l=a.dir[n];l&&(_n(),Pi(l,i,8,[t.el,a,t,e]),mn())}}const Og=Symbol("_vte"),Mg=t=>t.__isTeleport;function lc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function yn(t,e){return De(t)?Vt({name:t.name},e,{setup:t}):t}function jf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function No(t,e,i,n,o=!1){if(Oe(t)){t.forEach((u,_)=>No(u,e&&(Oe(e)?e[_]:e),i,n,o));return}if(cr(n)&&!o){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&No(t,e,i,n.component.subTree);return}const r=n.shapeFlag&4?oa(n.component):n.el,s=o?null:r,{i:a,r:l}=t,d=e&&e.r,h=a.refs===it?a.refs={}:a.refs,c=a.setupState,g=qe(c),f=c===it?()=>!1:u=>Qe(g,u);if(d!=null&&d!==l&&(bt(d)?(h[d]=null,f(d)&&(c[d]=null)):gt(d)&&(d.value=null)),De(l))ao(l,a,12,[s,h]);else{const u=bt(l),_=gt(l);if(u||_){const w=()=>{if(t.f){const m=u?f(l)?c[l]:h[l]:l.value;o?Oe(m)&&Kl(m,r):Oe(m)?m.includes(r)||m.push(r):u?(h[l]=[r],f(l)&&(c[l]=h[l])):(l.value=[r],t.k&&(h[t.k]=l.value))}else u?(h[l]=s,f(l)&&(c[l]=s)):_&&(l.value=s,t.k&&(h[t.k]=s))};s?(w.id=-1,ii(w,i)):w()}}}Jo().requestIdleCallback;Jo().cancelIdleCallback;const cr=t=>!!t.type.__asyncLoader,qf=t=>t.type.__isKeepAlive;function Lg(t,e){Wf(t,"a",e)}function Dg(t,e){Wf(t,"da",e)}function Wf(t,e,i=Pt){const n=t.__wdc||(t.__wdc=()=>{let o=i;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(na(e,n,i),i){let o=i.parent;for(;o&&o.parent;)qf(o.parent.vnode)&&Fg(n,e,i,o),o=o.parent}}function Fg(t,e,i,n){const o=na(e,t,n,!0);Kf(()=>{Kl(n[e],o)},i)}function na(t,e,i=Pt,n=!1){if(i){const o=i[t]||(i[t]=[]),r=e.__weh||(e.__weh=(...s)=>{_n();const a=lo(i),l=Pi(e,i,t,s);return a(),mn(),l});return n?o.unshift(r):o.push(r),r}}const Ji=t=>(e,i=Pt)=>{(!js||t==="sp")&&na(t,(...n)=>e(...n),i)},$g=Ji("bm"),cc=Ji("m"),Bg=Ji("bu"),zg=Ji("u"),Ng=Ji("bum"),Kf=Ji("um"),Vg=Ji("sp"),Hg=Ji("rtg"),Ug=Ji("rtc");function Gg(t,e=Pt){na("ec",t,e)}const jg=Symbol.for("v-ndc");function qg(t,e,i,n){let o;const r=i,s=Oe(t);if(s||bt(t)){const a=s&&cn(t);let l=!1;a&&(l=!hi(t),t=ta(t)),o=new Array(t.length);for(let d=0,h=t.length;d<h;d++)o[d]=e(l?Bt(t[d]):t[d],d,void 0,r)}else if(typeof t=="number"){o=new Array(t);for(let a=0;a<t;a++)o[a]=e(a+1,a,void 0,r)}else if(lt(t))if(t[Symbol.iterator])o=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);o=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const h=a[l];o[l]=e(t[h],h,l,r)}}else o=[];return o}function Ca(t,e,i={},n,o){if(Ct.ce||Ct.parent&&cr(Ct.parent)&&Ct.parent.ce)return e!=="default"&&(i.name=e),Nt(),ph(Qt,null,[tt("slot",i,n)],64);let r=t[e];r&&r._c&&(r._d=!1),Nt();const s=r&&Yf(r(i)),a=i.key||s&&s.key,l=ph(Qt,{key:(a&&!Qi(a)?a:`_${e}`)+""},s||[],s&&t._===1?64:-2);return r&&r._c&&(r._d=!0),l}function Yf(t){return t.some(e=>Gs(e)?!(e.type===mr||e.type===Qt&&!Yf(e.children)):!0)?t:null}const xl=t=>t?v0(t)?oa(t):xl(t.parent):null,Ps=Vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xl(t.parent),$root:t=>xl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zf(t),$forceUpdate:t=>t.f||(t.f=()=>{ac(t.update)}),$nextTick:t=>t.n||(t.n=oc.bind(t.proxy)),$watch:t=>pv.bind(t)}),ka=(t,e)=>t!==it&&!t.__isScriptSetup&&Qe(t,e),Wg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:i,setupState:n,data:o,props:r,accessCache:s,type:a,appContext:l}=t;let d;if(e[0]!=="$"){const f=s[e];if(f!==void 0)switch(f){case 1:return n[e];case 2:return o[e];case 4:return i[e];case 3:return r[e]}else{if(ka(n,e))return s[e]=1,n[e];if(o!==it&&Qe(o,e))return s[e]=2,o[e];if((d=t.propsOptions[0])&&Qe(d,e))return s[e]=3,r[e];if(i!==it&&Qe(i,e))return s[e]=4,i[e];wl&&(s[e]=0)}}const h=Ps[e];let c,g;if(h)return e==="$attrs"&&$t(t.attrs,"get",""),h(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(i!==it&&Qe(i,e))return s[e]=4,i[e];if(g=l.config.globalProperties,Qe(g,e))return g[e]},set({_:t},e,i){const{data:n,setupState:o,ctx:r}=t;return ka(o,e)?(o[e]=i,!0):n!==it&&Qe(n,e)?(n[e]=i,!0):Qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=i,!0)},has({_:{data:t,setupState:e,accessCache:i,ctx:n,appContext:o,propsOptions:r}},s){let a;return!!i[s]||t!==it&&Qe(t,s)||ka(e,s)||(a=r[0])&&Qe(a,s)||Qe(n,s)||Qe(Ps,s)||Qe(o.config.globalProperties,s)},defineProperty(t,e,i){return i.get!=null?t._.accessCache[e]=0:Qe(i,"value")&&this.set(t,e,i.value,null),Reflect.defineProperty(t,e,i)}};function sh(t){return Oe(t)?t.reduce((e,i)=>(e[i]=null,e),{}):t}let wl=!0;function Kg(t){const e=Zf(t),i=t.proxy,n=t.ctx;wl=!1,e.beforeCreate&&oh(e.beforeCreate,t,"bc");const{data:o,computed:r,methods:s,watch:a,provide:l,inject:d,created:h,beforeMount:c,mounted:g,beforeUpdate:f,updated:u,activated:_,deactivated:w,beforeDestroy:m,beforeUnmount:p,destroyed:v,unmounted:b,render:S,renderTracked:T,renderTriggered:E,errorCaptured:A,serverPrefetch:M,expose:C,inheritAttrs:P,components:z,directives:y,filters:k}=e;if(d&&Yg(d,n,null),s)for(const O in s){const H=s[O];De(H)&&(n[O]=H.bind(i))}if(o){const O=o.call(i,i);lt(O)&&(t.data=qn(O))}if(wl=!0,r)for(const O in r){const H=r[O],W=De(H)?H.bind(i,i):De(H.get)?H.get.bind(i,i):Ri,se=!De(H)&&De(H.set)?H.set.bind(i):Ri,te=zt({get:W,set:se});Object.defineProperty(n,O,{enumerable:!0,configurable:!0,get:()=>te.value,set:oe=>te.value=oe})}if(a)for(const O in a)Xf(a[O],n,i,O);if(l){const O=De(l)?l.call(i):l;Reflect.ownKeys(O).forEach(H=>{wo(H,O[H])})}h&&oh(h,t,"c");function L(O,H){Oe(H)?H.forEach(W=>O(W.bind(i))):H&&O(H.bind(i))}if(L($g,c),L(cc,g),L(Bg,f),L(zg,u),L(Lg,_),L(Dg,w),L(Gg,A),L(Ug,T),L(Hg,E),L(Ng,p),L(Kf,b),L(Vg,M),Oe(C))if(C.length){const O=t.exposed||(t.exposed={});C.forEach(H=>{Object.defineProperty(O,H,{get:()=>i[H],set:W=>i[H]=W})})}else t.exposed||(t.exposed={});S&&t.render===Ri&&(t.render=S),P!=null&&(t.inheritAttrs=P),z&&(t.components=z),y&&(t.directives=y),M&&jf(t)}function Yg(t,e,i=Ri){Oe(t)&&(t=Sl(t));for(const n in t){const o=t[n];let r;lt(o)?"default"in o?r=Ai(o.from||n,o.default,!0):r=Ai(o.from||n):r=Ai(o),gt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:s=>r.value=s}):e[n]=r}}function oh(t,e,i){Pi(Oe(t)?t.map(n=>n.bind(e.proxy)):t.bind(e.proxy),e,i)}function Xf(t,e,i,n){let o=n.includes(".")?d0(i,n):()=>i[n];if(bt(t)){const r=e[t];De(r)&&hn(o,r)}else if(De(t))hn(o,t.bind(i));else if(lt(t))if(Oe(t))t.forEach(r=>Xf(r,e,i,n));else{const r=De(t.handler)?t.handler.bind(i):e[t.handler];De(r)&&hn(o,r,t)}}function Zf(t){const e=t.type,{mixins:i,extends:n}=e,{mixins:o,optionsCache:r,config:{optionMergeStrategies:s}}=t.appContext,a=r.get(e);let l;return a?l=a:!o.length&&!i&&!n?l=e:(l={},o.length&&o.forEach(d=>Vo(l,d,s,!0)),Vo(l,e,s)),lt(e)&&r.set(e,l),l}function Vo(t,e,i,n=!1){const{mixins:o,extends:r}=e;r&&Vo(t,r,i,!0),o&&o.forEach(s=>Vo(t,s,i,!0));for(const s in e)if(!(n&&s==="expose")){const a=Xg[s]||i&&i[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const Xg={data:ah,props:lh,emits:lh,methods:Cs,computed:Cs,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Cs,directives:Cs,watch:Qg,provide:ah,inject:Zg};function ah(t,e){return e?t?function(){return Vt(De(t)?t.call(this,this):t,De(e)?e.call(this,this):e)}:e:t}function Zg(t,e){return Cs(Sl(t),Sl(e))}function Sl(t){if(Oe(t)){const e={};for(let i=0;i<t.length;i++)e[t[i]]=t[i];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function Cs(t,e){return t?Vt(Object.create(null),t,e):e}function lh(t,e){return t?Oe(t)&&Oe(e)?[...new Set([...t,...e])]:Vt(Object.create(null),sh(t),sh(e??{})):e}function Qg(t,e){if(!t)return e;if(!e)return t;const i=Vt(Object.create(null),t);for(const n in e)i[n]=Ut(t[n],e[n]);return i}function Qf(){return{app:null,config:{isNativeTag:U1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jg=0;function ev(t,e){return function(n,o=null){De(n)||(n=Vt({},n)),o!=null&&!lt(o)&&(o=null);const r=Qf(),s=new WeakSet,a=[];let l=!1;const d=r.app={_uid:Jg++,_component:n,_props:o,_container:null,_context:r,_instance:null,version:Dv,get config(){return r.config},set config(h){},use(h,...c){return s.has(h)||(h&&De(h.install)?(s.add(h),h.install(d,...c)):De(h)&&(s.add(h),h(d,...c))),d},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),d},component(h,c){return c?(r.components[h]=c,d):r.components[h]},directive(h,c){return c?(r.directives[h]=c,d):r.directives[h]},mount(h,c,g){if(!l){const f=d._ceVNode||tt(n,o);return f.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(f,h,g),l=!0,d._container=h,h.__vue_app__=d,oa(f.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Pi(a,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(h,c){return r.provides[h]=c,d},runWithContext(h){const c=$n;$n=d;try{return h()}finally{$n=c}}};return d}}let $n=null;function wo(t,e){if(Pt){let i=Pt.provides;const n=Pt.parent&&Pt.parent.provides;n===i&&(i=Pt.provides=Object.create(n)),i[t]=e}}function Ai(t,e,i=!1){const n=Pt||Ct;if(n||$n){const o=$n?$n._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return i&&De(e)?e.call(n&&n.proxy):e}}function tv(){return!!(Pt||Ct||$n)}const Jf={},e0=()=>Object.create(Jf),t0=t=>Object.getPrototypeOf(t)===Jf;function iv(t,e,i,n=!1){const o={},r=e0();t.propsDefaults=Object.create(null),i0(t,e,o,r);for(const s in t.propsOptions[0])s in o||(o[s]=void 0);i?t.props=n?o:Df(o):t.type.props?t.props=o:t.props=r,t.attrs=r}function nv(t,e,i,n){const{props:o,attrs:r,vnode:{patchFlag:s}}=t,a=qe(o),[l]=t.propsOptions;let d=!1;if((n||s>0)&&!(s&16)){if(s&8){const h=t.vnode.dynamicProps;for(let c=0;c<h.length;c++){let g=h[c];if(ra(t.emitsOptions,g))continue;const f=e[g];if(l)if(Qe(r,g))f!==r[g]&&(r[g]=f,d=!0);else{const u=gn(g);o[u]=Cl(l,a,u,f,t,!1)}else f!==r[g]&&(r[g]=f,d=!0)}}}else{i0(t,e,o,r)&&(d=!0);let h;for(const c in a)(!e||!Qe(e,c)&&((h=jn(c))===c||!Qe(e,h)))&&(l?i&&(i[c]!==void 0||i[h]!==void 0)&&(o[c]=Cl(l,a,c,void 0,t,!0)):delete o[c]);if(r!==a)for(const c in r)(!e||!Qe(e,c))&&(delete r[c],d=!0)}d&&qi(t.attrs,"set","")}function i0(t,e,i,n){const[o,r]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Rs(l))continue;const d=e[l];let h;o&&Qe(o,h=gn(l))?!r||!r.includes(h)?i[h]=d:(a||(a={}))[h]=d:ra(t.emitsOptions,l)||(!(l in n)||d!==n[l])&&(n[l]=d,s=!0)}if(r){const l=qe(i),d=a||it;for(let h=0;h<r.length;h++){const c=r[h];i[c]=Cl(o,l,c,d[c],t,!Qe(d,c))}}return s}function Cl(t,e,i,n,o,r){const s=t[i];if(s!=null){const a=Qe(s,"default");if(a&&n===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&De(l)){const{propsDefaults:d}=o;if(i in d)n=d[i];else{const h=lo(o);n=d[i]=l.call(null,e),h()}}else n=l;o.ce&&o.ce._setProp(i,n)}s[0]&&(r&&!a?n=!1:s[1]&&(n===""||n===jn(i))&&(n=!0))}return n}const rv=new WeakMap;function n0(t,e,i=!1){const n=i?rv:e.propsCache,o=n.get(t);if(o)return o;const r=t.props,s={},a=[];let l=!1;if(!De(t)){const h=c=>{l=!0;const[g,f]=n0(c,e,!0);Vt(s,g),f&&a.push(...f)};!i&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!l)return lt(t)&&n.set(t,or),or;if(Oe(r))for(let h=0;h<r.length;h++){const c=gn(r[h]);ch(c)&&(s[c]=it)}else if(r)for(const h in r){const c=gn(h);if(ch(c)){const g=r[h],f=s[c]=Oe(g)||De(g)?{type:g}:Vt({},g),u=f.type;let _=!1,w=!0;if(Oe(u))for(let m=0;m<u.length;++m){const p=u[m],v=De(p)&&p.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(w=!1)}else _=De(u)&&u.name==="Boolean";f[0]=_,f[1]=w,(_||Qe(f,"default"))&&a.push(c)}}const d=[s,a];return lt(t)&&n.set(t,d),d}function ch(t){return t[0]!=="$"&&!Rs(t)}const r0=t=>t[0]==="_"||t==="$stable",hc=t=>Oe(t)?t.map(Ei):[Ei(t)],sv=(t,e,i)=>{if(e._n)return e;const n=Ft((...o)=>hc(e(...o)),i);return n._c=!1,n},s0=(t,e,i)=>{const n=t._ctx;for(const o in t){if(r0(o))continue;const r=t[o];if(De(r))e[o]=sv(o,r,n);else if(r!=null){const s=hc(r);e[o]=()=>s}}},o0=(t,e)=>{const i=hc(e);t.slots.default=()=>i},a0=(t,e,i)=>{for(const n in e)(i||n!=="_")&&(t[n]=e[n])},ov=(t,e,i)=>{const n=t.slots=e0();if(t.vnode.shapeFlag&32){const o=e._;o?(a0(n,e,i),i&&pf(n,"_",o,!0)):s0(e,n)}else e&&o0(t,e)},av=(t,e,i)=>{const{vnode:n,slots:o}=t;let r=!0,s=it;if(n.shapeFlag&32){const a=e._;a?i&&a===1?r=!1:a0(o,e,i):(r=!e.$stable,s0(e,o)),s=e}else e&&(o0(t,e),s={default:1});if(r)for(const a in o)!r0(a)&&s[a]==null&&delete o[a]},ii=xv;function lv(t){return cv(t)}function cv(t,e){const i=Jo();i.__VUE__=!0;const{insert:n,remove:o,patchProp:r,createElement:s,createText:a,createComment:l,setText:d,setElementText:h,parentNode:c,nextSibling:g,setScopeId:f=Ri,insertStaticContent:u}=t,_=($,N,G,Y=null,ie=null,X=null,ae=void 0,ve=null,pe=!!N.dynamicChildren)=>{if($===N)return;$&&!Mr($,N)&&(Y=D($),oe($,ie,X,!0),$=null),N.patchFlag===-2&&(pe=!1,N.dynamicChildren=null);const{type:ue,ref:ye,shapeFlag:be}=N;switch(ue){case sa:w($,N,G,Y);break;case mr:m($,N,G,Y);break;case Ra:$==null&&p(N,G,Y,ae);break;case Qt:z($,N,G,Y,ie,X,ae,ve,pe);break;default:be&1?S($,N,G,Y,ie,X,ae,ve,pe):be&6?y($,N,G,Y,ie,X,ae,ve,pe):(be&64||be&128)&&ue.process($,N,G,Y,ie,X,ae,ve,pe,Z)}ye!=null&&ie&&No(ye,$&&$.ref,X,N||$,!N)},w=($,N,G,Y)=>{if($==null)n(N.el=a(N.children),G,Y);else{const ie=N.el=$.el;N.children!==$.children&&d(ie,N.children)}},m=($,N,G,Y)=>{$==null?n(N.el=l(N.children||""),G,Y):N.el=$.el},p=($,N,G,Y)=>{[$.el,$.anchor]=u($.children,N,G,Y,$.el,$.anchor)},v=({el:$,anchor:N},G,Y)=>{let ie;for(;$&&$!==N;)ie=g($),n($,G,Y),$=ie;n(N,G,Y)},b=({el:$,anchor:N})=>{let G;for(;$&&$!==N;)G=g($),o($),$=G;o(N)},S=($,N,G,Y,ie,X,ae,ve,pe)=>{N.type==="svg"?ae="svg":N.type==="math"&&(ae="mathml"),$==null?T(N,G,Y,ie,X,ae,ve,pe):M($,N,ie,X,ae,ve,pe)},T=($,N,G,Y,ie,X,ae,ve)=>{let pe,ue;const{props:ye,shapeFlag:be,transition:we,dirs:Ce}=$;if(pe=$.el=s($.type,X,ye&&ye.is,ye),be&8?h(pe,$.children):be&16&&A($.children,pe,null,Y,ie,Ea($,X),ae,ve),Ce&&kn($,null,Y,"created"),E(pe,$,$.scopeId,ae,Y),ye){for(const Le in ye)Le!=="value"&&!Rs(Le)&&r(pe,Le,null,ye[Le],X,Y);"value"in ye&&r(pe,"value",null,ye.value,X),(ue=ye.onVnodeBeforeMount)&&Si(ue,Y,$)}Ce&&kn($,null,Y,"beforeMount");const Ae=hv(ie,we);Ae&&we.beforeEnter(pe),n(pe,N,G),((ue=ye&&ye.onVnodeMounted)||Ae||Ce)&&ii(()=>{ue&&Si(ue,Y,$),Ae&&we.enter(pe),Ce&&kn($,null,Y,"mounted")},ie)},E=($,N,G,Y,ie)=>{if(G&&f($,G),Y)for(let X=0;X<Y.length;X++)f($,Y[X]);if(ie){let X=ie.subTree;if(N===X||f0(X.type)&&(X.ssContent===N||X.ssFallback===N)){const ae=ie.vnode;E($,ae,ae.scopeId,ae.slotScopeIds,ie.parent)}}},A=($,N,G,Y,ie,X,ae,ve,pe=0)=>{for(let ue=pe;ue<$.length;ue++){const ye=$[ue]=ve?sn($[ue]):Ei($[ue]);_(null,ye,N,G,Y,ie,X,ae,ve)}},M=($,N,G,Y,ie,X,ae)=>{const ve=N.el=$.el;let{patchFlag:pe,dynamicChildren:ue,dirs:ye}=N;pe|=$.patchFlag&16;const be=$.props||it,we=N.props||it;let Ce;if(G&&En(G,!1),(Ce=we.onVnodeBeforeUpdate)&&Si(Ce,G,N,$),ye&&kn(N,$,G,"beforeUpdate"),G&&En(G,!0),(be.innerHTML&&we.innerHTML==null||be.textContent&&we.textContent==null)&&h(ve,""),ue?C($.dynamicChildren,ue,ve,G,Y,Ea(N,ie),X):ae||H($,N,ve,null,G,Y,Ea(N,ie),X,!1),pe>0){if(pe&16)P(ve,be,we,G,ie);else if(pe&2&&be.class!==we.class&&r(ve,"class",null,we.class,ie),pe&4&&r(ve,"style",be.style,we.style,ie),pe&8){const Ae=N.dynamicProps;for(let Le=0;Le<Ae.length;Le++){const Te=Ae[Le],Ge=be[Te],Ye=we[Te];(Ye!==Ge||Te==="value")&&r(ve,Te,Ge,Ye,ie,G)}}pe&1&&$.children!==N.children&&h(ve,N.children)}else!ae&&ue==null&&P(ve,be,we,G,ie);((Ce=we.onVnodeUpdated)||ye)&&ii(()=>{Ce&&Si(Ce,G,N,$),ye&&kn(N,$,G,"updated")},Y)},C=($,N,G,Y,ie,X,ae)=>{for(let ve=0;ve<N.length;ve++){const pe=$[ve],ue=N[ve],ye=pe.el&&(pe.type===Qt||!Mr(pe,ue)||pe.shapeFlag&70)?c(pe.el):G;_(pe,ue,ye,null,Y,ie,X,ae,!0)}},P=($,N,G,Y,ie)=>{if(N!==G){if(N!==it)for(const X in N)!Rs(X)&&!(X in G)&&r($,X,N[X],null,ie,Y);for(const X in G){if(Rs(X))continue;const ae=G[X],ve=N[X];ae!==ve&&X!=="value"&&r($,X,ve,ae,ie,Y)}"value"in G&&r($,"value",N.value,G.value,ie)}},z=($,N,G,Y,ie,X,ae,ve,pe)=>{const ue=N.el=$?$.el:a(""),ye=N.anchor=$?$.anchor:a("");let{patchFlag:be,dynamicChildren:we,slotScopeIds:Ce}=N;Ce&&(ve=ve?ve.concat(Ce):Ce),$==null?(n(ue,G,Y),n(ye,G,Y),A(N.children||[],G,ye,ie,X,ae,ve,pe)):be>0&&be&64&&we&&$.dynamicChildren?(C($.dynamicChildren,we,G,ie,X,ae,ve),(N.key!=null||ie&&N===ie.subTree)&&l0($,N,!0)):H($,N,G,ye,ie,X,ae,ve,pe)},y=($,N,G,Y,ie,X,ae,ve,pe)=>{N.slotScopeIds=ve,$==null?N.shapeFlag&512?ie.ctx.activate(N,G,Y,ae,pe):k(N,G,Y,ie,X,ae,pe):R($,N,pe)},k=($,N,G,Y,ie,X,ae)=>{const ve=$.component=Av($,Y,ie);if(qf($)&&(ve.ctx.renderer=Z),Pv(ve,!1,ae),ve.asyncDep){if(ie&&ie.registerDep(ve,L,ae),!$.el){const pe=ve.subTree=tt(mr);m(null,pe,N,G)}}else L(ve,$,N,G,ie,X,ae)},R=($,N,G)=>{const Y=N.component=$.component;if(bv($,N,G))if(Y.asyncDep&&!Y.asyncResolved){O(Y,N,G);return}else Y.next=N,Y.update();else N.el=$.el,Y.vnode=N},L=($,N,G,Y,ie,X,ae)=>{const ve=()=>{if($.isMounted){let{next:be,bu:we,u:Ce,parent:Ae,vnode:Le}=$;{const le=c0($);if(le){be&&(be.el=Le.el,O($,be,ae)),le.asyncDep.then(()=>{$.isUnmounted||ve()});return}}let Te=be,Ge;En($,!1),be?(be.el=Le.el,O($,be,ae)):be=Le,we&&xo(we),(Ge=be.props&&be.props.onVnodeBeforeUpdate)&&Si(Ge,Ae,be,Le),En($,!0);const Ye=dh($),B=$.subTree;$.subTree=Ye,_(B,Ye,c(B.el),D(B),$,ie,X),be.el=Ye.el,Te===null&&yv($,Ye.el),Ce&&ii(Ce,ie),(Ge=be.props&&be.props.onVnodeUpdated)&&ii(()=>Si(Ge,Ae,be,Le),ie)}else{let be;const{el:we,props:Ce}=N,{bm:Ae,m:Le,parent:Te,root:Ge,type:Ye}=$,B=cr(N);En($,!1),Ae&&xo(Ae),!B&&(be=Ce&&Ce.onVnodeBeforeMount)&&Si(be,Te,N),En($,!0);{Ge.ce&&Ge.ce._injectChildStyle(Ye);const le=$.subTree=dh($);_(null,le,G,Y,$,ie,X),N.el=le.el}if(Le&&ii(Le,ie),!B&&(be=Ce&&Ce.onVnodeMounted)){const le=N;ii(()=>Si(be,Te,le),ie)}(N.shapeFlag&256||Te&&cr(Te.vnode)&&Te.vnode.shapeFlag&256)&&$.a&&ii($.a,ie),$.isMounted=!0,N=G=Y=null}};$.scope.on();const pe=$.effect=new xf(ve);$.scope.off();const ue=$.update=pe.run.bind(pe),ye=$.job=pe.runIfDirty.bind(pe);ye.i=$,ye.id=$.uid,pe.scheduler=()=>ac(ye),En($,!0),ue()},O=($,N,G)=>{N.component=$;const Y=$.vnode.props;$.vnode=N,$.next=null,nv($,N.props,Y,G),av($,N.children,G),_n(),rh($),mn()},H=($,N,G,Y,ie,X,ae,ve,pe=!1)=>{const ue=$&&$.children,ye=$?$.shapeFlag:0,be=N.children,{patchFlag:we,shapeFlag:Ce}=N;if(we>0){if(we&128){se(ue,be,G,Y,ie,X,ae,ve,pe);return}else if(we&256){W(ue,be,G,Y,ie,X,ae,ve,pe);return}}Ce&8?(ye&16&&he(ue,ie,X),be!==ue&&h(G,be)):ye&16?Ce&16?se(ue,be,G,Y,ie,X,ae,ve,pe):he(ue,ie,X,!0):(ye&8&&h(G,""),Ce&16&&A(be,G,Y,ie,X,ae,ve,pe))},W=($,N,G,Y,ie,X,ae,ve,pe)=>{$=$||or,N=N||or;const ue=$.length,ye=N.length,be=Math.min(ue,ye);let we;for(we=0;we<be;we++){const Ce=N[we]=pe?sn(N[we]):Ei(N[we]);_($[we],Ce,G,null,ie,X,ae,ve,pe)}ue>ye?he($,ie,X,!0,!1,be):A(N,G,Y,ie,X,ae,ve,pe,be)},se=($,N,G,Y,ie,X,ae,ve,pe)=>{let ue=0;const ye=N.length;let be=$.length-1,we=ye-1;for(;ue<=be&&ue<=we;){const Ce=$[ue],Ae=N[ue]=pe?sn(N[ue]):Ei(N[ue]);if(Mr(Ce,Ae))_(Ce,Ae,G,null,ie,X,ae,ve,pe);else break;ue++}for(;ue<=be&&ue<=we;){const Ce=$[be],Ae=N[we]=pe?sn(N[we]):Ei(N[we]);if(Mr(Ce,Ae))_(Ce,Ae,G,null,ie,X,ae,ve,pe);else break;be--,we--}if(ue>be){if(ue<=we){const Ce=we+1,Ae=Ce<ye?N[Ce].el:Y;for(;ue<=we;)_(null,N[ue]=pe?sn(N[ue]):Ei(N[ue]),G,Ae,ie,X,ae,ve,pe),ue++}}else if(ue>we)for(;ue<=be;)oe($[ue],ie,X,!0),ue++;else{const Ce=ue,Ae=ue,Le=new Map;for(ue=Ae;ue<=we;ue++){const j=N[ue]=pe?sn(N[ue]):Ei(N[ue]);j.key!=null&&Le.set(j.key,ue)}let Te,Ge=0;const Ye=we-Ae+1;let B=!1,le=0;const fe=new Array(Ye);for(ue=0;ue<Ye;ue++)fe[ue]=0;for(ue=Ce;ue<=be;ue++){const j=$[ue];if(Ge>=Ye){oe(j,ie,X,!0);continue}let ne;if(j.key!=null)ne=Le.get(j.key);else for(Te=Ae;Te<=we;Te++)if(fe[Te-Ae]===0&&Mr(j,N[Te])){ne=Te;break}ne===void 0?oe(j,ie,X,!0):(fe[ne-Ae]=ue+1,ne>=le?le=ne:B=!0,_(j,N[ne],G,null,ie,X,ae,ve,pe),Ge++)}const xe=B?dv(fe):or;for(Te=xe.length-1,ue=Ye-1;ue>=0;ue--){const j=Ae+ue,ne=N[j],I=j+1<ye?N[j+1].el:Y;fe[ue]===0?_(null,ne,G,I,ie,X,ae,ve,pe):B&&(Te<0||ue!==xe[Te]?te(ne,G,I,2):Te--)}}},te=($,N,G,Y,ie=null)=>{const{el:X,type:ae,transition:ve,children:pe,shapeFlag:ue}=$;if(ue&6){te($.component.subTree,N,G,Y);return}if(ue&128){$.suspense.move(N,G,Y);return}if(ue&64){ae.move($,N,G,Z);return}if(ae===Qt){n(X,N,G);for(let be=0;be<pe.length;be++)te(pe[be],N,G,Y);n($.anchor,N,G);return}if(ae===Ra){v($,N,G);return}if(Y!==2&&ue&1&&ve)if(Y===0)ve.beforeEnter(X),n(X,N,G),ii(()=>ve.enter(X),ie);else{const{leave:be,delayLeave:we,afterLeave:Ce}=ve,Ae=()=>n(X,N,G),Le=()=>{be(X,()=>{Ae(),Ce&&Ce()})};we?we(X,Ae,Le):Le()}else n(X,N,G)},oe=($,N,G,Y=!1,ie=!1)=>{const{type:X,props:ae,ref:ve,children:pe,dynamicChildren:ue,shapeFlag:ye,patchFlag:be,dirs:we,cacheIndex:Ce}=$;if(be===-2&&(ie=!1),ve!=null&&No(ve,null,G,$,!0),Ce!=null&&(N.renderCache[Ce]=void 0),ye&256){N.ctx.deactivate($);return}const Ae=ye&1&&we,Le=!cr($);let Te;if(Le&&(Te=ae&&ae.onVnodeBeforeUnmount)&&Si(Te,N,$),ye&6)_e($.component,G,Y);else{if(ye&128){$.suspense.unmount(G,Y);return}Ae&&kn($,null,N,"beforeUnmount"),ye&64?$.type.remove($,N,G,Z,Y):ue&&!ue.hasOnce&&(X!==Qt||be>0&&be&64)?he(ue,N,G,!1,!0):(X===Qt&&be&384||!ie&&ye&16)&&he(pe,N,G),Y&&Q($)}(Le&&(Te=ae&&ae.onVnodeUnmounted)||Ae)&&ii(()=>{Te&&Si(Te,N,$),Ae&&kn($,null,N,"unmounted")},G)},Q=$=>{const{type:N,el:G,anchor:Y,transition:ie}=$;if(N===Qt){ce(G,Y);return}if(N===Ra){b($);return}const X=()=>{o(G),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if($.shapeFlag&1&&ie&&!ie.persisted){const{leave:ae,delayLeave:ve}=ie,pe=()=>ae(G,X);ve?ve($.el,X,pe):pe()}else X()},ce=($,N)=>{let G;for(;$!==N;)G=g($),o($),$=G;o(N)},_e=($,N,G)=>{const{bum:Y,scope:ie,job:X,subTree:ae,um:ve,m:pe,a:ue}=$;hh(pe),hh(ue),Y&&xo(Y),ie.stop(),X&&(X.flags|=8,oe(ae,$,N,G)),ve&&ii(ve,N),ii(()=>{$.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&$.asyncDep&&!$.asyncResolved&&$.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},he=($,N,G,Y=!1,ie=!1,X=0)=>{for(let ae=X;ae<$.length;ae++)oe($[ae],N,G,Y,ie)},D=$=>{if($.shapeFlag&6)return D($.component.subTree);if($.shapeFlag&128)return $.suspense.next();const N=g($.anchor||$.el),G=N&&N[Og];return G?g(G):N};let V=!1;const q=($,N,G)=>{$==null?N._vnode&&oe(N._vnode,null,null,!0):_(N._vnode||null,$,N,null,null,null,G),N._vnode=$,V||(V=!0,rh(),Hf(),V=!1)},Z={p:_,um:oe,m:te,r:Q,mt:k,mc:A,pc:H,pbc:C,n:D,o:t};return{render:q,hydrate:void 0,createApp:ev(q)}}function Ea({type:t,props:e},i){return i==="svg"&&t==="foreignObject"||i==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:i}function En({effect:t,job:e},i){i?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function hv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function l0(t,e,i=!1){const n=t.children,o=e.children;if(Oe(n)&&Oe(o))for(let r=0;r<n.length;r++){const s=n[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=sn(o[r]),a.el=s.el),!i&&a.patchFlag!==-2&&l0(s,a)),a.type===sa&&(a.el=s.el)}}function dv(t){const e=t.slice(),i=[0];let n,o,r,s,a;const l=t.length;for(n=0;n<l;n++){const d=t[n];if(d!==0){if(o=i[i.length-1],t[o]<d){e[n]=o,i.push(n);continue}for(r=0,s=i.length-1;r<s;)a=r+s>>1,t[i[a]]<d?r=a+1:s=a;d<t[i[r]]&&(r>0&&(e[n]=i[r-1]),i[r]=n)}}for(r=i.length,s=i[r-1];r-- >0;)i[r]=s,s=e[s];return i}function c0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:c0(e)}function hh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const uv=Symbol.for("v-scx"),fv=()=>Ai(uv);function hn(t,e,i){return h0(t,e,i)}function h0(t,e,i=it){const{immediate:n,deep:o,flush:r,once:s}=i,a=Vt({},i),l=e&&n||!e&&r!=="post";let d;if(js){if(r==="sync"){const f=fv();d=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Ri,f.resume=Ri,f.pause=Ri,f}}const h=Pt;a.call=(f,u,_)=>Pi(f,h,u,_);let c=!1;r==="post"?a.scheduler=f=>{ii(f,h&&h.suspense)}:r!=="sync"&&(c=!0,a.scheduler=(f,u)=>{u?f():ac(f)}),a.augmentJob=f=>{e&&(f.flags|=4),c&&(f.flags|=2,h&&(f.id=h.uid,f.i=h))};const g=Rg(t,e,a);return js&&(d?d.push(g):l&&g()),g}function pv(t,e,i){const n=this.proxy,o=bt(t)?t.includes(".")?d0(n,t):()=>n[t]:t.bind(n,n);let r;De(e)?r=e:(r=e.handler,i=e);const s=lo(this),a=h0(o,r.bind(n),i);return s(),a}function d0(t,e){const i=e.split(".");return()=>{let n=t;for(let o=0;o<i.length&&n;o++)n=n[i[o]];return n}}const gv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${gn(e)}Modifiers`]||t[`${jn(e)}Modifiers`];function vv(t,e,...i){if(t.isUnmounted)return;const n=t.vnode.props||it;let o=i;const r=e.startsWith("update:"),s=r&&gv(n,e.slice(7));s&&(s.trim&&(o=i.map(h=>bt(h)?h.trim():h)),s.number&&(o=i.map(vl)));let a,l=n[a=ba(e)]||n[a=ba(gn(e))];!l&&r&&(l=n[a=ba(jn(e))]),l&&Pi(l,t,6,o);const d=n[a+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pi(d,t,6,o)}}function u0(t,e,i=!1){const n=e.emitsCache,o=n.get(t);if(o!==void 0)return o;const r=t.emits;let s={},a=!1;if(!De(t)){const l=d=>{const h=u0(d,e,!0);h&&(a=!0,Vt(s,h))};!i&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(lt(t)&&n.set(t,null),null):(Oe(r)?r.forEach(l=>s[l]=null):Vt(s,r),lt(t)&&n.set(t,s),s)}function ra(t,e){return!t||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(t,e[0].toLowerCase()+e.slice(1))||Qe(t,jn(e))||Qe(t,e))}function dh(t){const{type:e,vnode:i,proxy:n,withProxy:o,propsOptions:[r],slots:s,attrs:a,emit:l,render:d,renderCache:h,props:c,data:g,setupState:f,ctx:u,inheritAttrs:_}=t,w=zo(t);let m,p;try{if(i.shapeFlag&4){const b=o||n,S=b;m=Ei(d.call(S,b,h,c,f,g,u)),p=a}else{const b=e;m=Ei(b.length>1?b(c,{attrs:a,slots:s,emit:l}):b(c,null)),p=e.props?a:_v(a)}}catch(b){Is.length=0,ia(b,t,1),m=tt(mr)}let v=m;if(p&&_!==!1){const b=Object.keys(p),{shapeFlag:S}=v;b.length&&S&7&&(r&&b.some(Wl)&&(p=mv(p,r)),v=br(v,p,!1,!0))}return i.dirs&&(v=br(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(i.dirs):i.dirs),i.transition&&lc(v,i.transition),m=v,zo(w),m}const _v=t=>{let e;for(const i in t)(i==="class"||i==="style"||Xo(i))&&((e||(e={}))[i]=t[i]);return e},mv=(t,e)=>{const i={};for(const n in t)(!Wl(n)||!(n.slice(9)in e))&&(i[n]=t[n]);return i};function bv(t,e,i){const{props:n,children:o,component:r}=t,{props:s,children:a,patchFlag:l}=e,d=r.emitsOptions;if(e.dirs||e.transition)return!0;if(i&&l>=0){if(l&1024)return!0;if(l&16)return n?uh(n,s,d):!!s;if(l&8){const h=e.dynamicProps;for(let c=0;c<h.length;c++){const g=h[c];if(s[g]!==n[g]&&!ra(d,g))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:n===s?!1:n?s?uh(n,s,d):!0:!!s;return!1}function uh(t,e,i){const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(let o=0;o<n.length;o++){const r=n[o];if(e[r]!==t[r]&&!ra(i,r))return!0}return!1}function yv({vnode:t,parent:e},i){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.el=t.el),n===t)(t=e.vnode).el=i,e=e.parent;else break}}const f0=t=>t.__isSuspense;function xv(t,e){e&&e.pendingBranch?Oe(t)?e.effects.push(...t):e.effects.push(t):Pg(t)}const Qt=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),mr=Symbol.for("v-cmt"),Ra=Symbol.for("v-stc"),Is=[];let ni=null;function Nt(t=!1){Is.push(ni=t?null:[])}function wv(){Is.pop(),ni=Is[Is.length-1]||null}let Us=1;function fh(t,e=!1){Us+=t,t<0&&ni&&e&&(ni.hasOnce=!0)}function p0(t){return t.dynamicChildren=Us>0?ni||or:null,wv(),Us>0&&ni&&ni.push(t),t}function ei(t,e,i,n,o,r){return p0(Ie(t,e,i,n,o,r,!0))}function ph(t,e,i,n,o){return p0(tt(t,e,i,n,o,!0))}function Gs(t){return t?t.__v_isVNode===!0:!1}function Mr(t,e){return t.type===e.type&&t.key===e.key}const g0=({key:t})=>t??null,So=({ref:t,ref_key:e,ref_for:i})=>(typeof t=="number"&&(t=""+t),t!=null?bt(t)||gt(t)||De(t)?{i:Ct,r:t,k:e,f:!!i}:t:null);function Ie(t,e=null,i=null,n=0,o=null,r=t===Qt?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&g0(e),ref:e&&So(e),scopeId:Gf,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ct};return a?(dc(l,i),r&128&&t.normalize(l)):i&&(l.shapeFlag|=bt(i)?8:16),Us>0&&!s&&ni&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ni.push(l),l}const tt=Sv;function Sv(t,e=null,i=null,n=0,o=null,r=!1){if((!t||t===jg)&&(t=mr),Gs(t)){const a=br(t,e,!0);return i&&dc(a,i),Us>0&&!r&&ni&&(a.shapeFlag&6?ni[ni.indexOf(t)]=a:ni.push(a)),a.patchFlag=-2,a}if(Lv(t)&&(t=t.__vccOpts),e){e=Cv(e);let{class:a,style:l}=e;a&&!bt(a)&&(e.class=Xl(a)),lt(l)&&(rc(l)&&!Oe(l)&&(l=Vt({},l)),e.style=ea(l))}const s=bt(t)?1:f0(t)?128:Mg(t)?64:lt(t)?4:De(t)?2:0;return Ie(t,e,i,n,o,s,r,!0)}function Cv(t){return t?rc(t)||t0(t)?Vt({},t):t:null}function br(t,e,i=!1,n=!1){const{props:o,ref:r,patchFlag:s,children:a,transition:l}=t,d=e?kv(o||{},e):o,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&g0(d),ref:e&&e.ref?i&&r?Oe(r)?r.concat(So(e)):[r,So(e)]:So(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&br(t.ssContent),ssFallback:t.ssFallback&&br(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&n&&lc(h,l.clone(h)),h}function Xe(t=" ",e=0){return tt(sa,null,t,e)}function Ei(t){return t==null||typeof t=="boolean"?tt(mr):Oe(t)?tt(Qt,null,t.slice()):Gs(t)?sn(t):tt(sa,null,String(t))}function sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:br(t)}function dc(t,e){let i=0;const{shapeFlag:n}=t;if(e==null)e=null;else if(Oe(e))i=16;else if(typeof e=="object")if(n&65){const o=e.default;o&&(o._c&&(o._d=!1),dc(t,o()),o._c&&(o._d=!0));return}else{i=32;const o=e._;!o&&!t0(e)?e._ctx=Ct:o===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else De(e)?(e={default:e,_ctx:Ct},i=32):(e=String(e),n&64?(i=16,e=[Xe(e)]):i=8);t.children=e,t.shapeFlag|=i}function kv(...t){const e={};for(let i=0;i<t.length;i++){const n=t[i];for(const o in n)if(o==="class")e.class!==n.class&&(e.class=Xl([e.class,n.class]));else if(o==="style")e.style=ea([e.style,n.style]);else if(Xo(o)){const r=e[o],s=n[o];s&&r!==s&&!(Oe(r)&&r.includes(s))&&(e[o]=r?[].concat(r,s):s)}else o!==""&&(e[o]=n[o])}return e}function Si(t,e,i,n=null){Pi(t,e,7,[i,n])}const Ev=Qf();let Rv=0;function Av(t,e,i){const n=t.type,o=(e?e.appContext:t.appContext)||Ev,r={uid:Rv++,vnode:t,type:n,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new mf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:n0(n,o),emitsOptions:u0(n,o),emit:null,emitted:null,propsDefaults:it,inheritAttrs:n.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=vv.bind(null,r),t.ce&&t.ce(r),r}let Pt=null;const Tv=()=>Pt||Ct;let Ho,kl;{const t=Jo(),e=(i,n)=>{let o;return(o=t[i])||(o=t[i]=[]),o.push(n),r=>{o.length>1?o.forEach(s=>s(r)):o[0](r)}};Ho=e("__VUE_INSTANCE_SETTERS__",i=>Pt=i),kl=e("__VUE_SSR_SETTERS__",i=>js=i)}const lo=t=>{const e=Pt;return Ho(t),t.scope.on(),()=>{t.scope.off(),Ho(e)}},gh=()=>{Pt&&Pt.scope.off(),Ho(null)};function v0(t){return t.vnode.shapeFlag&4}let js=!1;function Pv(t,e=!1,i=!1){e&&kl(e);const{props:n,children:o}=t.vnode,r=v0(t);iv(t,n,r,e),ov(t,o,i);const s=r?Iv(t,e):void 0;return e&&kl(!1),s}function Iv(t,e){const i=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Wg);const{setup:n}=i;if(n){_n();const o=t.setupContext=n.length>1?Mv(t):null,r=lo(t),s=ao(n,t,0,[t.props,o]),a=hf(s);if(mn(),r(),(a||t.sp)&&!cr(t)&&jf(t),a){if(s.then(gh,gh),e)return s.then(l=>{vh(t,l)}).catch(l=>{ia(l,t,0)});t.asyncDep=s}else vh(t,s)}else _0(t)}function vh(t,e,i){De(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:lt(e)&&(t.setupState=zf(e)),_0(t)}function _0(t,e,i){const n=t.type;t.render||(t.render=n.render||Ri);{const o=lo(t);_n();try{Kg(t)}finally{mn(),o()}}}const Ov={get(t,e){return $t(t,"get",""),t[e]}};function Mv(t){const e=i=>{t.exposed=i||{}};return{attrs:new Proxy(t.attrs,Ov),slots:t.slots,emit:t.emit,expose:e}}function oa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(zf(sc(t.exposed)),{get(e,i){if(i in e)return e[i];if(i in Ps)return Ps[i](t)},has(e,i){return i in e||i in Ps}})):t.proxy}function Lv(t){return De(t)&&"__vccOpts"in t}const zt=(t,e)=>kg(t,e,js);function m0(t,e,i){const n=arguments.length;return n===2?lt(e)&&!Oe(e)?Gs(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(n>3?i=Array.prototype.slice.call(arguments,2):n===3&&Gs(i)&&(i=[i]),tt(t,e,i))}const Dv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let El;const _h=typeof window<"u"&&window.trustedTypes;if(_h)try{El=_h.createPolicy("vue",{createHTML:t=>t})}catch{}const b0=El?t=>El.createHTML(t):t=>t,Fv="http://www.w3.org/2000/svg",$v="http://www.w3.org/1998/Math/MathML",zi=typeof document<"u"?document:null,mh=zi&&zi.createElement("template"),Bv={insert:(t,e,i)=>{e.insertBefore(t,i||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,i,n)=>{const o=e==="svg"?zi.createElementNS(Fv,t):e==="mathml"?zi.createElementNS($v,t):i?zi.createElement(t,{is:i}):zi.createElement(t);return t==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:t=>zi.createTextNode(t),createComment:t=>zi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,i,n,o,r){const s=i?i.previousSibling:e.lastChild;if(o&&(o===r||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),i),!(o===r||!(o=o.nextSibling)););else{mh.innerHTML=b0(n==="svg"?`<svg>${t}</svg>`:n==="mathml"?`<math>${t}</math>`:t);const a=mh.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,i)}return[s?s.nextSibling:e.firstChild,i?i.previousSibling:e.lastChild]}},zv=Symbol("_vtc");function Nv(t,e,i){const n=t[zv];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?t.removeAttribute("class"):i?t.setAttribute("class",e):t.className=e}const bh=Symbol("_vod"),Vv=Symbol("_vsh"),Hv=Symbol(""),Uv=/(^|;)\s*display\s*:/;function Gv(t,e,i){const n=t.style,o=bt(i);let r=!1;if(i&&!o){if(e)if(bt(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();i[a]==null&&Co(n,a,"")}else for(const s in e)i[s]==null&&Co(n,s,"");for(const s in i)s==="display"&&(r=!0),Co(n,s,i[s])}else if(o){if(e!==i){const s=n[Hv];s&&(i+=";"+s),n.cssText=i,r=Uv.test(i)}}else e&&t.removeAttribute("style");bh in t&&(t[bh]=r?n.display:"",t[Vv]&&(n.display="none"))}const yh=/\s*!important$/;function Co(t,e,i){if(Oe(i))i.forEach(n=>Co(t,e,n));else if(i==null&&(i=""),e.startsWith("--"))t.setProperty(e,i);else{const n=jv(t,e);yh.test(i)?t.setProperty(jn(n),i.replace(yh,""),"important"):t[n]=i}}const xh=["Webkit","Moz","ms"],Aa={};function jv(t,e){const i=Aa[e];if(i)return i;let n=gn(e);if(n!=="filter"&&n in t)return Aa[e]=n;n=ff(n);for(let o=0;o<xh.length;o++){const r=xh[o]+n;if(r in t)return Aa[e]=r}return e}const wh="http://www.w3.org/1999/xlink";function Sh(t,e,i,n,o,r=J1(e)){n&&e.startsWith("xlink:")?i==null?t.removeAttributeNS(wh,e.slice(6,e.length)):t.setAttributeNS(wh,e,i):i==null||r&&!gf(i)?t.removeAttribute(e):t.setAttribute(e,r?"":Qi(i)?String(i):i)}function Ch(t,e,i,n,o){if(e==="innerHTML"||e==="textContent"){i!=null&&(t[e]=e==="innerHTML"?b0(i):i);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=i==null?t.type==="checkbox"?"on":"":String(i);(a!==l||!("_value"in t))&&(t.value=l),i==null&&t.removeAttribute(e),t._value=i;return}let s=!1;if(i===""||i==null){const a=typeof t[e];a==="boolean"?i=gf(i):i==null&&a==="string"?(i="",s=!0):a==="number"&&(i=0,s=!0)}try{t[e]=i}catch{}s&&t.removeAttribute(o||e)}function ir(t,e,i,n){t.addEventListener(e,i,n)}function qv(t,e,i,n){t.removeEventListener(e,i,n)}const kh=Symbol("_vei");function Wv(t,e,i,n,o=null){const r=t[kh]||(t[kh]={}),s=r[e];if(n&&s)s.value=n;else{const[a,l]=Kv(e);if(n){const d=r[e]=Zv(n,o);ir(t,a,d,l)}else s&&(qv(t,a,s,l),r[e]=void 0)}}const Eh=/(?:Once|Passive|Capture)$/;function Kv(t){let e;if(Eh.test(t)){e={};let n;for(;n=t.match(Eh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):jn(t.slice(2)),e]}let Ta=0;const Yv=Promise.resolve(),Xv=()=>Ta||(Yv.then(()=>Ta=0),Ta=Date.now());function Zv(t,e){const i=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=i.attached)return;Pi(Qv(n,i.value),e,5,[n])};return i.value=t,i.attached=Xv(),i}function Qv(t,e){if(Oe(e)){const i=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{i.call(t),t._stopped=!0},e.map(n=>o=>!o._stopped&&n&&n(o))}else return e}const Rh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Jv=(t,e,i,n,o,r)=>{const s=o==="svg";e==="class"?Nv(t,n,s):e==="style"?Gv(t,i,n):Xo(e)?Wl(e)||Wv(t,e,i,n,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):e_(t,e,n,s))?(Ch(t,e,n),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sh(t,e,n,s,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!bt(n))?Ch(t,gn(e),n,r,e):(e==="true-value"?t._trueValue=n:e==="false-value"&&(t._falseValue=n),Sh(t,e,n,s))};function e_(t,e,i,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in t&&Rh(e)&&De(i));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Rh(e)&&bt(i)?!1:e in t}const Ah=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Oe(e)?i=>xo(e,i):e};function t_(t){t.target.composing=!0}function Th(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Pa=Symbol("_assign"),i_={created(t,{modifiers:{lazy:e,trim:i,number:n}},o){t[Pa]=Ah(o);const r=n||o.props&&o.props.type==="number";ir(t,e?"change":"input",s=>{if(s.target.composing)return;let a=t.value;i&&(a=a.trim()),r&&(a=vl(a)),t[Pa](a)}),i&&ir(t,"change",()=>{t.value=t.value.trim()}),e||(ir(t,"compositionstart",t_),ir(t,"compositionend",Th),ir(t,"change",Th))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:i,modifiers:{lazy:n,trim:o,number:r}},s){if(t[Pa]=Ah(s),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?vl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(n&&e===i||o&&t.value.trim()===l)||(t.value=l))}},n_=Vt({patchProp:Jv},Bv);let Ph;function r_(){return Ph||(Ph=lv(n_))}const s_=(...t)=>{const e=r_().createApp(...t),{mount:i}=e;return e.mount=n=>{const o=a_(n);if(!o)return;const r=e._component;!De(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const s=i(o,!1,o_(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e};function o_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function a_(t){return bt(t)?document.querySelector(t):t}var l_=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let y0;const aa=t=>y0=t,x0=Symbol();function Rl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Os;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Os||(Os={}));function c_(){const t=bf(!0),e=t.run(()=>bn({}));let i=[],n=[];const o=sc({install(r){aa(o),o._a=r,r.provide(x0,o),r.config.globalProperties.$pinia=o,n.forEach(s=>i.push(s)),n=[]},use(r){return!this._a&&!l_?n.push(r):i.push(r),this},_p:i,_a:null,_e:t,_s:new Map,state:e});return o}const w0=()=>{};function Ih(t,e,i,n=w0){t.push(e);const o=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),n())};return!i&&Zl()&&yf(o),o}function Yn(t,...e){t.slice().forEach(i=>{i(...e)})}const h_=t=>t(),Oh=Symbol(),Ia=Symbol();function Al(t,e){t instanceof Map&&e instanceof Map?e.forEach((i,n)=>t.set(n,i)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const i in e){if(!e.hasOwnProperty(i))continue;const n=e[i],o=t[i];Rl(o)&&Rl(n)&&t.hasOwnProperty(i)&&!gt(n)&&!cn(n)?t[i]=Al(o,n):t[i]=n}return t}const d_=Symbol();function u_(t){return!Rl(t)||!t.hasOwnProperty(d_)}const{assign:nn}=Object;function f_(t){return!!(gt(t)&&t.effect)}function p_(t,e,i,n){const{state:o,actions:r,getters:s}=e,a=i.state.value[t];let l;function d(){a||(i.state.value[t]=o?o():{});const h=xg(i.state.value[t]);return nn(h,r,Object.keys(s||{}).reduce((c,g)=>(c[g]=sc(zt(()=>{aa(i);const f=i._s.get(t);return s[g].call(f,f)})),c),{}))}return l=S0(t,d,e,i,n,!0),l}function S0(t,e,i={},n,o,r){let s;const a=nn({actions:{}},i),l={deep:!0};let d,h,c=[],g=[],f;const u=n.state.value[t];!r&&!u&&(n.state.value[t]={}),bn({});let _;function w(A){let M;d=h=!1,typeof A=="function"?(A(n.state.value[t]),M={type:Os.patchFunction,storeId:t,events:f}):(Al(n.state.value[t],A),M={type:Os.patchObject,payload:A,storeId:t,events:f});const C=_=Symbol();oc().then(()=>{_===C&&(d=!0)}),h=!0,Yn(c,M,n.state.value[t])}const m=r?function(){const{state:M}=i,C=M?M():{};this.$patch(P=>{nn(P,C)})}:w0;function p(){s.stop(),c=[],g=[],n._s.delete(t)}const v=(A,M="")=>{if(Oh in A)return A[Ia]=M,A;const C=function(){aa(n);const P=Array.from(arguments),z=[],y=[];function k(O){z.push(O)}function R(O){y.push(O)}Yn(g,{args:P,name:C[Ia],store:S,after:k,onError:R});let L;try{L=A.apply(this&&this.$id===t?this:S,P)}catch(O){throw Yn(y,O),O}return L instanceof Promise?L.then(O=>(Yn(z,O),O)).catch(O=>(Yn(y,O),Promise.reject(O))):(Yn(z,L),L)};return C[Oh]=!0,C[Ia]=M,C},b={_p:n,$id:t,$onAction:Ih.bind(null,g),$patch:w,$reset:m,$subscribe(A,M={}){const C=Ih(c,A,M.detached,()=>P()),P=s.run(()=>hn(()=>n.state.value[t],z=>{(M.flush==="sync"?h:d)&&A({storeId:t,type:Os.direct,events:f},z)},nn({},l,M)));return C},$dispose:p},S=qn(b);n._s.set(t,S);const E=(n._a&&n._a.runWithContext||h_)(()=>n._e.run(()=>(s=bf()).run(()=>e({action:v}))));for(const A in E){const M=E[A];if(gt(M)&&!f_(M)||cn(M))r||(u&&u_(M)&&(gt(M)?M.value=u[A]:Al(M,u[A])),n.state.value[t][A]=M);else if(typeof M=="function"){const C=v(M,A);E[A]=C,a.actions[A]=M}}return nn(S,E),nn(qe(S),E),Object.defineProperty(S,"$state",{get:()=>n.state.value[t],set:A=>{w(M=>{nn(M,A)})}}),n._p.forEach(A=>{nn(S,s.run(()=>A({store:S,app:n._a,pinia:n,options:a})))}),u&&r&&i.hydrate&&i.hydrate(S.$state,u),d=!0,h=!0,S}/*! #__NO_SIDE_EFFECTS__ */function C0(t,e,i){let n,o;const r=typeof e=="function";typeof t=="string"?(n=t,o=r?i:e):(o=t,n=t.id);function s(a,l){const d=tv();return a=a||(d?Ai(x0,null):null),a&&aa(a),a=y0,a._s.has(n)||(r?S0(n,e,o,a):p_(n,o,a)),a._s.get(n)}return s.$id=n,s}function k0(t){return Zl()?(yf(t),!0):!1}function uc(t){return typeof t=="function"?t():xt(t)}const E0=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const g_=Object.prototype.toString,v_=t=>g_.call(t)==="[object Object]",__=()=>{},R0=E0?window:void 0;function Tl(t){var e;const i=uc(t);return(e=i==null?void 0:i.$el)!=null?e:i}function Dn(...t){let e,i,n,o;if(typeof t[0]=="string"||Array.isArray(t[0])?([i,n,o]=t,e=R0):[e,i,n,o]=t,!e)return __;Array.isArray(i)||(i=[i]),Array.isArray(n)||(n=[n]);const r=[],s=()=>{r.forEach(h=>h()),r.length=0},a=(h,c,g,f)=>(h.addEventListener(c,g,f),()=>h.removeEventListener(c,g,f)),l=hn(()=>[Tl(e),uc(o)],([h,c])=>{if(s(),!h)return;const g=v_(c)?{...c}:c;r.push(...i.flatMap(f=>n.map(u=>a(h,f,u,g))))},{immediate:!0,flush:"post"}),d=()=>{l(),s()};return k0(d),d}function m_(){const t=bn(!1),e=Tv();return e&&cc(()=>{t.value=!0},e),t}function b_(t){const e=m_();return zt(()=>(e.value,!!t()))}function y_(t,e={}){var i,n;const o=bn(!1),r=$f(null);let s=0,a=!0;if(E0){const l=typeof e=="function"?{onDrop:e}:e,d=(i=l.multiple)!=null?i:!0,h=(n=l.preventDefaultForUnhandled)!=null?n:!1,c=_=>{var w,m;const p=Array.from((m=(w=_.dataTransfer)==null?void 0:w.files)!=null?m:[]);return p.length===0?null:d?p:[p[0]]},g=_=>{if(l.dataTypes){const w=xt(l.dataTypes);return typeof w=="function"?w(_):w?w.some(m=>_.includes(m)):!0}return!0},f=_=>{var w,m;const p=Array.from((m=(w=_.dataTransfer)==null?void 0:w.items)!=null?m:[]),v=p.map(T=>T.type),b=g(v),S=d||p.length<=1;return b&&S},u=(_,w)=>{var m,p,v,b;if(a=f(_),!a){h&&_.preventDefault(),_.dataTransfer&&(_.dataTransfer.dropEffect="none");return}_.preventDefault(),_.dataTransfer&&(_.dataTransfer.dropEffect="copy");const S=c(_);switch(w){case"enter":s+=1,o.value=!0,(m=l.onEnter)==null||m.call(l,null,_);break;case"over":(p=l.onOver)==null||p.call(l,null,_);break;case"leave":s-=1,s===0&&(o.value=!1),(v=l.onLeave)==null||v.call(l,null,_);break;case"drop":s=0,o.value=!1,a&&(r.value=S,(b=l.onDrop)==null||b.call(l,S,_));break}};Dn(t,"dragenter",_=>u(_,"enter")),Dn(t,"dragover",_=>u(_,"over")),Dn(t,"dragleave",_=>u(_,"leave")),Dn(t,"drop",_=>u(_,"drop"))}return{files:r,isOverDropZone:o}}function x_(t,e,i={}){const{window:n=R0,...o}=i;let r;const s=b_(()=>n&&"ResizeObserver"in n),a=()=>{r&&(r.disconnect(),r=void 0)},l=zt(()=>{const c=uc(t);return Array.isArray(c)?c.map(g=>Tl(g)):[Tl(c)]}),d=hn(l,c=>{if(a(),s.value&&n){r=new ResizeObserver(e);for(const g of c)g&&r.observe(g,o)}},{immediate:!0,flush:"post"}),h=()=>{a(),d()};return k0(h),{isSupported:s,stop:h}}var Mh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function A0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ko={exports:{}},Lr={},Oa={},Ma={},Lh;function $e(){return Lh||(Lh=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t._registerNode=t.Konva=t.glob=void 0;const e=Math.PI/180;function i(){return typeof window<"u"&&({}.toString.call(window)==="[object Window]"||{}.toString.call(window)==="[object global]")}t.glob=typeof Mh<"u"?Mh:typeof window<"u"?window:typeof WorkerGlobalScope<"u"?self:{},t.Konva={_global:t.glob,version:"9.3.18",isBrowser:i(),isUnminified:/param/.test((function(o){}).toString()),dblClickWindow:400,getAngle(o){return t.Konva.angleDeg?o*e:o},enableTrace:!1,pointerEventsEnabled:!0,autoDrawEnabled:!0,hitOnDragEnabled:!1,capturePointerEventsEnabled:!1,_mouseListenClick:!1,_touchListenClick:!1,_pointerListenClick:!1,_mouseInDblClickWindow:!1,_touchInDblClickWindow:!1,_pointerInDblClickWindow:!1,_mouseDblClickPointerId:null,_touchDblClickPointerId:null,_pointerDblClickPointerId:null,_fixTextRendering:!1,pixelRatio:typeof window<"u"&&window.devicePixelRatio||1,dragDistance:3,angleDeg:!0,showWarnings:!0,dragButtons:[0,1],isDragging(){return t.Konva.DD.isDragging},isTransforming(){var o;return(o=t.Konva.Transformer)===null||o===void 0?void 0:o.isTransforming()},isDragReady(){return!!t.Konva.DD.node},releaseCanvasOnDestroy:!0,document:t.glob.document,_injectGlobal(o){t.glob.Konva=o}};const n=o=>{t.Konva[o.prototype.getClassName()]=o};t._registerNode=n,t.Konva._injectGlobal(t.Konva)}(Ma)),Ma}var La={},Dh;function pt(){return Dh||(Dh=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Util=t.Transform=void 0;const e=$e();class i{constructor(b=[1,0,0,1,0,0]){this.dirty=!1,this.m=b&&b.slice()||[1,0,0,1,0,0]}reset(){this.m[0]=1,this.m[1]=0,this.m[2]=0,this.m[3]=1,this.m[4]=0,this.m[5]=0}copy(){return new i(this.m)}copyInto(b){b.m[0]=this.m[0],b.m[1]=this.m[1],b.m[2]=this.m[2],b.m[3]=this.m[3],b.m[4]=this.m[4],b.m[5]=this.m[5]}point(b){const S=this.m;return{x:S[0]*b.x+S[2]*b.y+S[4],y:S[1]*b.x+S[3]*b.y+S[5]}}translate(b,S){return this.m[4]+=this.m[0]*b+this.m[2]*S,this.m[5]+=this.m[1]*b+this.m[3]*S,this}scale(b,S){return this.m[0]*=b,this.m[1]*=b,this.m[2]*=S,this.m[3]*=S,this}rotate(b){const S=Math.cos(b),T=Math.sin(b),E=this.m[0]*S+this.m[2]*T,A=this.m[1]*S+this.m[3]*T,M=this.m[0]*-T+this.m[2]*S,C=this.m[1]*-T+this.m[3]*S;return this.m[0]=E,this.m[1]=A,this.m[2]=M,this.m[3]=C,this}getTranslation(){return{x:this.m[4],y:this.m[5]}}skew(b,S){const T=this.m[0]+this.m[2]*S,E=this.m[1]+this.m[3]*S,A=this.m[2]+this.m[0]*b,M=this.m[3]+this.m[1]*b;return this.m[0]=T,this.m[1]=E,this.m[2]=A,this.m[3]=M,this}multiply(b){const S=this.m[0]*b.m[0]+this.m[2]*b.m[1],T=this.m[1]*b.m[0]+this.m[3]*b.m[1],E=this.m[0]*b.m[2]+this.m[2]*b.m[3],A=this.m[1]*b.m[2]+this.m[3]*b.m[3],M=this.m[0]*b.m[4]+this.m[2]*b.m[5]+this.m[4],C=this.m[1]*b.m[4]+this.m[3]*b.m[5]+this.m[5];return this.m[0]=S,this.m[1]=T,this.m[2]=E,this.m[3]=A,this.m[4]=M,this.m[5]=C,this}invert(){const b=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),S=this.m[3]*b,T=-this.m[1]*b,E=-this.m[2]*b,A=this.m[0]*b,M=b*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),C=b*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);return this.m[0]=S,this.m[1]=T,this.m[2]=E,this.m[3]=A,this.m[4]=M,this.m[5]=C,this}getMatrix(){return this.m}decompose(){const b=this.m[0],S=this.m[1],T=this.m[2],E=this.m[3],A=this.m[4],M=this.m[5],C=b*E-S*T,P={x:A,y:M,rotation:0,scaleX:0,scaleY:0,skewX:0,skewY:0};if(b!=0||S!=0){const z=Math.sqrt(b*b+S*S);P.rotation=S>0?Math.acos(b/z):-Math.acos(b/z),P.scaleX=z,P.scaleY=C/z,P.skewX=(b*T+S*E)/C,P.skewY=0}else if(T!=0||E!=0){const z=Math.sqrt(T*T+E*E);P.rotation=Math.PI/2-(E>0?Math.acos(-T/z):-Math.acos(T/z)),P.scaleX=C/z,P.scaleY=z,P.skewX=0,P.skewY=(b*T+S*E)/C}return P.rotation=t.Util._getRotation(P.rotation),P}}t.Transform=i;const n="[object Array]",o="[object Number]",r="[object String]",s="[object Boolean]",a=Math.PI/180,l=180/Math.PI,d="#",h="",c="0",g="Konva warning: ",f="Konva error: ",u="rgb(",_={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,132,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,255,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,203],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[119,128,144],slategrey:[119,128,144],snow:[255,255,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],transparent:[255,255,255,0],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,5]},w=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;let m=[];const p=typeof requestAnimationFrame<"u"&&requestAnimationFrame||function(v){setTimeout(v,60)};t.Util={_isElement(v){return!!(v&&v.nodeType==1)},_isFunction(v){return!!(v&&v.constructor&&v.call&&v.apply)},_isPlainObject(v){return!!v&&v.constructor===Object},_isArray(v){return Object.prototype.toString.call(v)===n},_isNumber(v){return Object.prototype.toString.call(v)===o&&!isNaN(v)&&isFinite(v)},_isString(v){return Object.prototype.toString.call(v)===r},_isBoolean(v){return Object.prototype.toString.call(v)===s},isObject(v){return v instanceof Object},isValidSelector(v){if(typeof v!="string")return!1;const b=v[0];return b==="#"||b==="."||b===b.toUpperCase()},_sign(v){return v===0||v>0?1:-1},requestAnimFrame(v){m.push(v),m.length===1&&p(function(){const b=m;m=[],b.forEach(function(S){S()})})},createCanvasElement(){const v=document.createElement("canvas");try{v.style=v.style||{}}catch{}return v},createImageElement(){return document.createElement("img")},_isInDocument(v){for(;v=v.parentNode;)if(v==document)return!0;return!1},_urlToImage(v,b){const S=t.Util.createImageElement();S.onload=function(){b(S)},S.src=v},_rgbToHex(v,b,S){return((1<<24)+(v<<16)+(b<<8)+S).toString(16).slice(1)},_hexToRgb(v){v=v.replace(d,h);const b=parseInt(v,16);return{r:b>>16&255,g:b>>8&255,b:b&255}},getRandomColor(){let v=(Math.random()*16777215<<0).toString(16);for(;v.length<6;)v=c+v;return d+v},getRGB(v){let b;return v in _?(b=_[v],{r:b[0],g:b[1],b:b[2]}):v[0]===d?this._hexToRgb(v.substring(1)):v.substr(0,4)===u?(b=w.exec(v.replace(/ /g,"")),{r:parseInt(b[1],10),g:parseInt(b[2],10),b:parseInt(b[3],10)}):{r:0,g:0,b:0}},colorToRGBA(v){return v=v||"black",t.Util._namedColorToRBA(v)||t.Util._hex3ColorToRGBA(v)||t.Util._hex4ColorToRGBA(v)||t.Util._hex6ColorToRGBA(v)||t.Util._hex8ColorToRGBA(v)||t.Util._rgbColorToRGBA(v)||t.Util._rgbaColorToRGBA(v)||t.Util._hslColorToRGBA(v)},_namedColorToRBA(v){const b=_[v.toLowerCase()];return b?{r:b[0],g:b[1],b:b[2],a:1}:null},_rgbColorToRGBA(v){if(v.indexOf("rgb(")===0){v=v.match(/rgb\(([^)]+)\)/)[1];const b=v.split(/ *, */).map(Number);return{r:b[0],g:b[1],b:b[2],a:1}}},_rgbaColorToRGBA(v){if(v.indexOf("rgba(")===0){v=v.match(/rgba\(([^)]+)\)/)[1];const b=v.split(/ *, */).map((S,T)=>S.slice(-1)==="%"?T===3?parseInt(S)/100:parseInt(S)/100*255:Number(S));return{r:b[0],g:b[1],b:b[2],a:b[3]}}},_hex8ColorToRGBA(v){if(v[0]==="#"&&v.length===9)return{r:parseInt(v.slice(1,3),16),g:parseInt(v.slice(3,5),16),b:parseInt(v.slice(5,7),16),a:parseInt(v.slice(7,9),16)/255}},_hex6ColorToRGBA(v){if(v[0]==="#"&&v.length===7)return{r:parseInt(v.slice(1,3),16),g:parseInt(v.slice(3,5),16),b:parseInt(v.slice(5,7),16),a:1}},_hex4ColorToRGBA(v){if(v[0]==="#"&&v.length===5)return{r:parseInt(v[1]+v[1],16),g:parseInt(v[2]+v[2],16),b:parseInt(v[3]+v[3],16),a:parseInt(v[4]+v[4],16)/255}},_hex3ColorToRGBA(v){if(v[0]==="#"&&v.length===4)return{r:parseInt(v[1]+v[1],16),g:parseInt(v[2]+v[2],16),b:parseInt(v[3]+v[3],16),a:1}},_hslColorToRGBA(v){if(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(v)){const[b,...S]=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(v),T=Number(S[0])/360,E=Number(S[1])/100,A=Number(S[2])/100;let M,C,P;if(E===0)return P=A*255,{r:Math.round(P),g:Math.round(P),b:Math.round(P),a:1};A<.5?M=A*(1+E):M=A+E-A*E;const z=2*A-M,y=[0,0,0];for(let k=0;k<3;k++)C=T+1/3*-(k-1),C<0&&C++,C>1&&C--,6*C<1?P=z+(M-z)*6*C:2*C<1?P=M:3*C<2?P=z+(M-z)*(2/3-C)*6:P=z,y[k]=P*255;return{r:Math.round(y[0]),g:Math.round(y[1]),b:Math.round(y[2]),a:1}}},haveIntersection(v,b){return!(b.x>v.x+v.width||b.x+b.width<v.x||b.y>v.y+v.height||b.y+b.height<v.y)},cloneObject(v){const b={};for(const S in v)this._isPlainObject(v[S])?b[S]=this.cloneObject(v[S]):this._isArray(v[S])?b[S]=this.cloneArray(v[S]):b[S]=v[S];return b},cloneArray(v){return v.slice(0)},degToRad(v){return v*a},radToDeg(v){return v*l},_degToRad(v){return t.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."),t.Util.degToRad(v)},_radToDeg(v){return t.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."),t.Util.radToDeg(v)},_getRotation(v){return e.Konva.angleDeg?t.Util.radToDeg(v):v},_capitalize(v){return v.charAt(0).toUpperCase()+v.slice(1)},throw(v){throw new Error(f+v)},error(v){console.error(f+v)},warn(v){e.Konva.showWarnings&&console.warn(g+v)},each(v,b){for(const S in v)b(S,v[S])},_inRange(v,b,S){return b<=v&&v<S},_getProjectionToSegment(v,b,S,T,E,A){let M,C,P;const z=(v-S)*(v-S)+(b-T)*(b-T);if(z==0)M=v,C=b,P=(E-S)*(E-S)+(A-T)*(A-T);else{const y=((E-v)*(S-v)+(A-b)*(T-b))/z;y<0?(M=v,C=b,P=(v-E)*(v-E)+(b-A)*(b-A)):y>1?(M=S,C=T,P=(S-E)*(S-E)+(T-A)*(T-A)):(M=v+y*(S-v),C=b+y*(T-b),P=(M-E)*(M-E)+(C-A)*(C-A))}return[M,C,P]},_getProjectionToLine(v,b,S){const T=t.Util.cloneObject(v);let E=Number.MAX_VALUE;return b.forEach(function(A,M){if(!S&&M===b.length-1)return;const C=b[(M+1)%b.length],P=t.Util._getProjectionToSegment(A.x,A.y,C.x,C.y,v.x,v.y),z=P[0],y=P[1],k=P[2];k<E&&(T.x=z,T.y=y,E=k)}),T},_prepareArrayForTween(v,b,S){const T=[],E=[];if(v.length>b.length){const M=b;b=v,v=M}for(let M=0;M<v.length;M+=2)T.push({x:v[M],y:v[M+1]});for(let M=0;M<b.length;M+=2)E.push({x:b[M],y:b[M+1]});const A=[];return E.forEach(function(M){const C=t.Util._getProjectionToLine(M,T,S);A.push(C.x),A.push(C.y)}),A},_prepareToStringify(v){let b;v.visitedByCircularReferenceRemoval=!0;for(const S in v)if(v.hasOwnProperty(S)&&v[S]&&typeof v[S]=="object"){if(b=Object.getOwnPropertyDescriptor(v,S),v[S].visitedByCircularReferenceRemoval||t.Util._isElement(v[S]))if(b.configurable)delete v[S];else return null;else if(t.Util._prepareToStringify(v[S])===null)if(b.configurable)delete v[S];else return null}return delete v.visitedByCircularReferenceRemoval,v},_assign(v,b){for(const S in b)v[S]=b[S];return v},_getFirstPointerId(v){return v.touches?v.changedTouches[0].identifier:v.pointerId||999},releaseCanvas(...v){e.Konva.releaseCanvasOnDestroy&&v.forEach(b=>{b.width=0,b.height=0})},drawRoundedRectPath(v,b,S,T){let E=0,A=0,M=0,C=0;typeof T=="number"?E=A=M=C=Math.min(T,b/2,S/2):(E=Math.min(T[0]||0,b/2,S/2),A=Math.min(T[1]||0,b/2,S/2),C=Math.min(T[2]||0,b/2,S/2),M=Math.min(T[3]||0,b/2,S/2)),v.moveTo(E,0),v.lineTo(b-A,0),v.arc(b-A,A,A,Math.PI*3/2,0,!1),v.lineTo(b,S-C),v.arc(b-C,S-C,C,0,Math.PI/2,!1),v.lineTo(M,S),v.arc(M,S-M,M,Math.PI/2,Math.PI,!1),v.lineTo(0,E),v.arc(E,E,E,Math.PI,Math.PI*3/2,!1)}}}(La)),La}var Dr={},Da={},Yt={},Fh;function ze(){if(Fh)return Yt;Fh=1,Object.defineProperty(Yt,"__esModule",{value:!0}),Yt.RGBComponent=n,Yt.alphaComponent=o,Yt.getNumberValidator=r,Yt.getNumberOrArrayOfNumbersValidator=s,Yt.getNumberOrAutoValidator=a,Yt.getStringValidator=l,Yt.getStringOrGradientValidator=d,Yt.getFunctionValidator=h,Yt.getNumberArrayValidator=c,Yt.getBooleanValidator=g,Yt.getComponentValidator=f;const t=$e(),e=pt();function i(u){return e.Util._isString(u)?'"'+u+'"':Object.prototype.toString.call(u)==="[object Number]"||e.Util._isBoolean(u)?u:Object.prototype.toString.call(u)}function n(u){return u>255?255:u<0?0:Math.round(u)}function o(u){return u>1?1:u<1e-4?1e-4:u}function r(){if(t.Konva.isUnminified)return function(u,_){return e.Util._isNumber(u)||e.Util.warn(i(u)+' is a not valid value for "'+_+'" attribute. The value should be a number.'),u}}function s(u){if(t.Konva.isUnminified)return function(_,w){let m=e.Util._isNumber(_),p=e.Util._isArray(_)&&_.length==u;return!m&&!p&&e.Util.warn(i(_)+' is a not valid value for "'+w+'" attribute. The value should be a number or Array<number>('+u+")"),_}}function a(){if(t.Konva.isUnminified)return function(u,_){var w=e.Util._isNumber(u),m=u==="auto";return w||m||e.Util.warn(i(u)+' is a not valid value for "'+_+'" attribute. The value should be a number or "auto".'),u}}function l(){if(t.Konva.isUnminified)return function(u,_){return e.Util._isString(u)||e.Util.warn(i(u)+' is a not valid value for "'+_+'" attribute. The value should be a string.'),u}}function d(){if(t.Konva.isUnminified)return function(u,_){const w=e.Util._isString(u),m=Object.prototype.toString.call(u)==="[object CanvasGradient]"||u&&u.addColorStop;return w||m||e.Util.warn(i(u)+' is a not valid value for "'+_+'" attribute. The value should be a string or a native gradient.'),u}}function h(){if(t.Konva.isUnminified)return function(u,_){return e.Util._isFunction(u)||e.Util.warn(i(u)+' is a not valid value for "'+_+'" attribute. The value should be a function.'),u}}function c(){if(t.Konva.isUnminified)return function(u,_){const w=Int8Array?Object.getPrototypeOf(Int8Array):null;return w&&u instanceof w||(e.Util._isArray(u)?u.forEach(function(m){e.Util._isNumber(m)||e.Util.warn('"'+_+'" attribute has non numeric element '+m+". Make sure that all elements are numbers.")}):e.Util.warn(i(u)+' is a not valid value for "'+_+'" attribute. The value should be a array of numbers.')),u}}function g(){if(t.Konva.isUnminified)return function(u,_){var w=u===!0||u===!1;return w||e.Util.warn(i(u)+' is a not valid value for "'+_+'" attribute. The value should be a boolean.'),u}}function f(u){if(t.Konva.isUnminified)return function(_,w){return _==null||e.Util.isObject(_)||e.Util.warn(i(_)+' is a not valid value for "'+w+'" attribute. The value should be an object with properties '+u),_}}return Yt}var $h;function Be(){return $h||($h=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Factory=void 0;const e=pt(),i=ze(),n="get",o="set";t.Factory={addGetterSetter(r,s,a,l,d){t.Factory.addGetter(r,s,a),t.Factory.addSetter(r,s,l,d),t.Factory.addOverloadedGetterSetter(r,s)},addGetter(r,s,a){var l=n+e.Util._capitalize(s);r.prototype[l]=r.prototype[l]||function(){const d=this.attrs[s];return d===void 0?a:d}},addSetter(r,s,a,l){var d=o+e.Util._capitalize(s);r.prototype[d]||t.Factory.overWriteSetter(r,s,a,l)},overWriteSetter(r,s,a,l){var d=o+e.Util._capitalize(s);r.prototype[d]=function(h){return a&&h!==void 0&&h!==null&&(h=a.call(this,h,s)),this._setAttr(s,h),l&&l.call(this),this}},addComponentsGetterSetter(r,s,a,l,d){const h=a.length,c=e.Util._capitalize,g=n+c(s),f=o+c(s);r.prototype[g]=function(){const _={};for(let w=0;w<h;w++){const m=a[w];_[m]=this.getAttr(s+c(m))}return _};const u=(0,i.getComponentValidator)(a);r.prototype[f]=function(_){const w=this.attrs[s];l&&(_=l.call(this,_,s)),u&&u.call(this,_,s);for(const m in _)_.hasOwnProperty(m)&&this._setAttr(s+c(m),_[m]);return _||a.forEach(m=>{this._setAttr(s+c(m),void 0)}),this._fireChangeEvent(s,w,_),d&&d.call(this),this},t.Factory.addOverloadedGetterSetter(r,s)},addOverloadedGetterSetter(r,s){var a=e.Util._capitalize(s),l=o+a,d=n+a;r.prototype[s]=function(){return arguments.length?(this[l](arguments[0]),this):this[d]()}},addDeprecatedGetterSetter(r,s,a,l){e.Util.error("Adding deprecated "+s);const d=n+e.Util._capitalize(s),h=s+" property is deprecated and will be removed soon. Look at Konva change log for more information.";r.prototype[d]=function(){e.Util.error(h);const c=this.attrs[s];return c===void 0?a:c},t.Factory.addSetter(r,s,l,function(){e.Util.error(h)}),t.Factory.addOverloadedGetterSetter(r,s)},backCompat(r,s){e.Util.each(s,function(a,l){const d=r.prototype[l],h=n+e.Util._capitalize(a),c=o+e.Util._capitalize(a);function g(){d.apply(this,arguments),e.Util.error('"'+a+'" method is deprecated and will be removed soon. Use ""'+l+'" instead.')}r.prototype[a]=g,r.prototype[h]=g,r.prototype[c]=g})},afterSetFilter(){this._filterUpToDate=!1}}}(Da)),Da}var Fi={},$i={},Bh;function T0(){if(Bh)return $i;Bh=1,Object.defineProperty($i,"__esModule",{value:!0}),$i.HitContext=$i.SceneContext=$i.Context=void 0;const t=pt(),e=$e();function i(m){const p=[],v=m.length,b=t.Util;for(let S=0;S<v;S++){let T=m[S];b._isNumber(T)?T=Math.round(T*1e3)/1e3:b._isString(T)||(T=T+""),p.push(T)}return p}const n=",",o="(",r=")",s="([",a="])",l=";",d="()",h="=",c=["arc","arcTo","beginPath","bezierCurveTo","clearRect","clip","closePath","createLinearGradient","createPattern","createRadialGradient","drawImage","ellipse","fill","fillText","getImageData","createImageData","lineTo","moveTo","putImageData","quadraticCurveTo","rect","roundRect","restore","rotate","save","scale","setLineDash","setTransform","stroke","strokeText","transform","translate"],g=["fillStyle","strokeStyle","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","letterSpacing","lineCap","lineDashOffset","lineJoin","lineWidth","miterLimit","direction","font","textAlign","textBaseline","globalAlpha","globalCompositeOperation","imageSmoothingEnabled"],f=100;let u=class{constructor(p){this.canvas=p,e.Konva.enableTrace&&(this.traceArr=[],this._enableTrace())}fillShape(p){p.fillEnabled()&&this._fill(p)}_fill(p){}strokeShape(p){p.hasStroke()&&this._stroke(p)}_stroke(p){}fillStrokeShape(p){p.attrs.fillAfterStrokeEnabled?(this.strokeShape(p),this.fillShape(p)):(this.fillShape(p),this.strokeShape(p))}getTrace(p,v){let b=this.traceArr,S=b.length,T="",E,A,M,C;for(E=0;E<S;E++)A=b[E],M=A.method,M?(C=A.args,T+=M,p?T+=d:t.Util._isArray(C[0])?T+=s+C.join(n)+a:(v&&(C=C.map(P=>typeof P=="number"?Math.floor(P):P)),T+=o+C.join(n)+r)):(T+=A.property,p||(T+=h+A.val)),T+=l;return T}clearTrace(){this.traceArr=[]}_trace(p){let v=this.traceArr,b;v.push(p),b=v.length,b>=f&&v.shift()}reset(){const p=this.getCanvas().getPixelRatio();this.setTransform(1*p,0,0,1*p,0,0)}getCanvas(){return this.canvas}clear(p){const v=this.getCanvas();p?this.clearRect(p.x||0,p.y||0,p.width||0,p.height||0):this.clearRect(0,0,v.getWidth()/v.pixelRatio,v.getHeight()/v.pixelRatio)}_applyLineCap(p){const v=p.attrs.lineCap;v&&this.setAttr("lineCap",v)}_applyOpacity(p){const v=p.getAbsoluteOpacity();v!==1&&this.setAttr("globalAlpha",v)}_applyLineJoin(p){const v=p.attrs.lineJoin;v&&this.setAttr("lineJoin",v)}setAttr(p,v){this._context[p]=v}arc(p,v,b,S,T,E){this._context.arc(p,v,b,S,T,E)}arcTo(p,v,b,S,T){this._context.arcTo(p,v,b,S,T)}beginPath(){this._context.beginPath()}bezierCurveTo(p,v,b,S,T,E){this._context.bezierCurveTo(p,v,b,S,T,E)}clearRect(p,v,b,S){this._context.clearRect(p,v,b,S)}clip(...p){this._context.clip.apply(this._context,p)}closePath(){this._context.closePath()}createImageData(p,v){const b=arguments;if(b.length===2)return this._context.createImageData(p,v);if(b.length===1)return this._context.createImageData(p)}createLinearGradient(p,v,b,S){return this._context.createLinearGradient(p,v,b,S)}createPattern(p,v){return this._context.createPattern(p,v)}createRadialGradient(p,v,b,S,T,E){return this._context.createRadialGradient(p,v,b,S,T,E)}drawImage(p,v,b,S,T,E,A,M,C){const P=arguments,z=this._context;P.length===3?z.drawImage(p,v,b):P.length===5?z.drawImage(p,v,b,S,T):P.length===9&&z.drawImage(p,v,b,S,T,E,A,M,C)}ellipse(p,v,b,S,T,E,A,M){this._context.ellipse(p,v,b,S,T,E,A,M)}isPointInPath(p,v,b,S){return b?this._context.isPointInPath(b,p,v,S):this._context.isPointInPath(p,v,S)}fill(...p){this._context.fill.apply(this._context,p)}fillRect(p,v,b,S){this._context.fillRect(p,v,b,S)}strokeRect(p,v,b,S){this._context.strokeRect(p,v,b,S)}fillText(p,v,b,S){S?this._context.fillText(p,v,b,S):this._context.fillText(p,v,b)}measureText(p){return this._context.measureText(p)}getImageData(p,v,b,S){return this._context.getImageData(p,v,b,S)}lineTo(p,v){this._context.lineTo(p,v)}moveTo(p,v){this._context.moveTo(p,v)}rect(p,v,b,S){this._context.rect(p,v,b,S)}roundRect(p,v,b,S,T){this._context.roundRect(p,v,b,S,T)}putImageData(p,v,b){this._context.putImageData(p,v,b)}quadraticCurveTo(p,v,b,S){this._context.quadraticCurveTo(p,v,b,S)}restore(){this._context.restore()}rotate(p){this._context.rotate(p)}save(){this._context.save()}scale(p,v){this._context.scale(p,v)}setLineDash(p){this._context.setLineDash?this._context.setLineDash(p):"mozDash"in this._context?this._context.mozDash=p:"webkitLineDash"in this._context&&(this._context.webkitLineDash=p)}getLineDash(){return this._context.getLineDash()}setTransform(p,v,b,S,T,E){this._context.setTransform(p,v,b,S,T,E)}stroke(p){p?this._context.stroke(p):this._context.stroke()}strokeText(p,v,b,S){this._context.strokeText(p,v,b,S)}transform(p,v,b,S,T,E){this._context.transform(p,v,b,S,T,E)}translate(p,v){this._context.translate(p,v)}_enableTrace(){let p=this,v=c.length,b=this.setAttr,S,T;const E=function(A){let M=p[A],C;p[A]=function(){return T=i(Array.prototype.slice.call(arguments,0)),C=M.apply(p,arguments),p._trace({method:A,args:T}),C}};for(S=0;S<v;S++)E(c[S]);p.setAttr=function(){b.apply(p,arguments);const A=arguments[0];let M=arguments[1];(A==="shadowOffsetX"||A==="shadowOffsetY"||A==="shadowBlur")&&(M=M/this.canvas.getPixelRatio()),p._trace({property:A,val:M})}}_applyGlobalCompositeOperation(p){const v=p.attrs.globalCompositeOperation;!v||v==="source-over"||this.setAttr("globalCompositeOperation",v)}};$i.Context=u,g.forEach(function(m){Object.defineProperty(u.prototype,m,{get(){return this._context[m]},set(p){this._context[m]=p}})});class _ extends u{constructor(p,{willReadFrequently:v=!1}={}){super(p),this._context=p._canvas.getContext("2d",{willReadFrequently:v})}_fillColor(p){const v=p.fill();this.setAttr("fillStyle",v),p._fillFunc(this)}_fillPattern(p){this.setAttr("fillStyle",p._getFillPattern()),p._fillFunc(this)}_fillLinearGradient(p){const v=p._getLinearGradient();v&&(this.setAttr("fillStyle",v),p._fillFunc(this))}_fillRadialGradient(p){const v=p._getRadialGradient();v&&(this.setAttr("fillStyle",v),p._fillFunc(this))}_fill(p){const v=p.fill(),b=p.getFillPriority();if(v&&b==="color"){this._fillColor(p);return}const S=p.getFillPatternImage();if(S&&b==="pattern"){this._fillPattern(p);return}const T=p.getFillLinearGradientColorStops();if(T&&b==="linear-gradient"){this._fillLinearGradient(p);return}const E=p.getFillRadialGradientColorStops();if(E&&b==="radial-gradient"){this._fillRadialGradient(p);return}v?this._fillColor(p):S?this._fillPattern(p):T?this._fillLinearGradient(p):E&&this._fillRadialGradient(p)}_strokeLinearGradient(p){const v=p.getStrokeLinearGradientStartPoint(),b=p.getStrokeLinearGradientEndPoint(),S=p.getStrokeLinearGradientColorStops(),T=this.createLinearGradient(v.x,v.y,b.x,b.y);if(S){for(let E=0;E<S.length;E+=2)T.addColorStop(S[E],S[E+1]);this.setAttr("strokeStyle",T)}}_stroke(p){const v=p.dash(),b=p.getStrokeScaleEnabled();if(p.hasStroke()){if(!b){this.save();const T=this.getCanvas().getPixelRatio();this.setTransform(T,0,0,T,0,0)}this._applyLineCap(p),v&&p.dashEnabled()&&(this.setLineDash(v),this.setAttr("lineDashOffset",p.dashOffset())),this.setAttr("lineWidth",p.strokeWidth()),p.getShadowForStrokeEnabled()||this.setAttr("shadowColor","rgba(0,0,0,0)"),p.getStrokeLinearGradientColorStops()?this._strokeLinearGradient(p):this.setAttr("strokeStyle",p.stroke()),p._strokeFunc(this),b||this.restore()}}_applyShadow(p){var v,b,S;const T=(v=p.getShadowRGBA())!==null&&v!==void 0?v:"black",E=(b=p.getShadowBlur())!==null&&b!==void 0?b:5,A=(S=p.getShadowOffset())!==null&&S!==void 0?S:{x:0,y:0},M=p.getAbsoluteScale(),C=this.canvas.getPixelRatio(),P=M.x*C,z=M.y*C;this.setAttr("shadowColor",T),this.setAttr("shadowBlur",E*Math.min(Math.abs(P),Math.abs(z))),this.setAttr("shadowOffsetX",A.x*P),this.setAttr("shadowOffsetY",A.y*z)}}$i.SceneContext=_;class w extends u{constructor(p){super(p),this._context=p._canvas.getContext("2d",{willReadFrequently:!0})}_fill(p){this.save(),this.setAttr("fillStyle",p.colorKey),p._fillFuncHit(this),this.restore()}strokeShape(p){p.hasHitStroke()&&this._stroke(p)}_stroke(p){if(p.hasHitStroke()){const v=p.getStrokeScaleEnabled();if(!v){this.save();const T=this.getCanvas().getPixelRatio();this.setTransform(T,0,0,T,0,0)}this._applyLineCap(p);const b=p.hitStrokeWidth(),S=b==="auto"?p.strokeWidth():b;this.setAttr("lineWidth",S),this.setAttr("strokeStyle",p.colorKey),p._strokeFuncHit(this),v||this.restore()}}}return $i.HitContext=w,$i}var zh;function la(){if(zh)return Fi;zh=1,Object.defineProperty(Fi,"__esModule",{value:!0}),Fi.HitCanvas=Fi.SceneCanvas=Fi.Canvas=void 0;const t=pt(),e=T0(),i=$e(),n=Be(),o=ze();let r;function s(){if(r)return r;const h=t.Util.createCanvasElement(),c=h.getContext("2d");return r=function(){const g=i.Konva._global.devicePixelRatio||1,f=c.webkitBackingStorePixelRatio||c.mozBackingStorePixelRatio||c.msBackingStorePixelRatio||c.oBackingStorePixelRatio||c.backingStorePixelRatio||1;return g/f}(),t.Util.releaseCanvas(h),r}let a=class{constructor(c){this.pixelRatio=1,this.width=0,this.height=0,this.isCache=!1;const f=(c||{}).pixelRatio||i.Konva.pixelRatio||s();this.pixelRatio=f,this._canvas=t.Util.createCanvasElement(),this._canvas.style.padding="0",this._canvas.style.margin="0",this._canvas.style.border="0",this._canvas.style.background="transparent",this._canvas.style.position="absolute",this._canvas.style.top="0",this._canvas.style.left="0"}getContext(){return this.context}getPixelRatio(){return this.pixelRatio}setPixelRatio(c){const g=this.pixelRatio;this.pixelRatio=c,this.setSize(this.getWidth()/g,this.getHeight()/g)}setWidth(c){this.width=this._canvas.width=c*this.pixelRatio,this._canvas.style.width=c+"px";const g=this.pixelRatio;this.getContext()._context.scale(g,g)}setHeight(c){this.height=this._canvas.height=c*this.pixelRatio,this._canvas.style.height=c+"px";const g=this.pixelRatio;this.getContext()._context.scale(g,g)}getWidth(){return this.width}getHeight(){return this.height}setSize(c,g){this.setWidth(c||0),this.setHeight(g||0)}toDataURL(c,g){try{return this._canvas.toDataURL(c,g)}catch{try{return this._canvas.toDataURL()}catch(u){return t.Util.error("Unable to get data URL. "+u.message+" For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."),""}}}};Fi.Canvas=a,n.Factory.addGetterSetter(a,"pixelRatio",void 0,(0,o.getNumberValidator)());class l extends a{constructor(c={width:0,height:0,willReadFrequently:!1}){super(c),this.context=new e.SceneContext(this,{willReadFrequently:c.willReadFrequently}),this.setSize(c.width,c.height)}}Fi.SceneCanvas=l;class d extends a{constructor(c={width:0,height:0}){super(c),this.hitCanvas=!0,this.context=new e.HitContext(this),this.setSize(c.width,c.height)}}return Fi.HitCanvas=d,Fi}var Fa={},Nh;function fc(){return Nh||(Nh=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.DD=void 0;const e=$e(),i=pt();t.DD={get isDragging(){let n=!1;return t.DD._dragElements.forEach(o=>{o.dragStatus==="dragging"&&(n=!0)}),n},justDragged:!1,get node(){let n;return t.DD._dragElements.forEach(o=>{n=o.node}),n},_dragElements:new Map,_drag(n){const o=[];t.DD._dragElements.forEach((r,s)=>{const{node:a}=r,l=a.getStage();l.setPointersPositions(n),r.pointerId===void 0&&(r.pointerId=i.Util._getFirstPointerId(n));const d=l._changedPointerPositions.find(h=>h.id===r.pointerId);if(d){if(r.dragStatus!=="dragging"){const h=a.dragDistance();if(Math.max(Math.abs(d.x-r.startPointerPos.x),Math.abs(d.y-r.startPointerPos.y))<h||(a.startDrag({evt:n}),!a.isDragging()))return}a._setDragPosition(n,r),o.push(a)}}),o.forEach(r=>{r.fire("dragmove",{type:"dragmove",target:r,evt:n},!0)})},_endDragBefore(n){const o=[];t.DD._dragElements.forEach(r=>{const{node:s}=r,a=s.getStage();if(n&&a.setPointersPositions(n),!a._changedPointerPositions.find(h=>h.id===r.pointerId))return;(r.dragStatus==="dragging"||r.dragStatus==="stopped")&&(t.DD.justDragged=!0,e.Konva._mouseListenClick=!1,e.Konva._touchListenClick=!1,e.Konva._pointerListenClick=!1,r.dragStatus="stopped");const d=r.node.getLayer()||r.node instanceof e.Konva.Stage&&r.node;d&&o.indexOf(d)===-1&&o.push(d)}),o.forEach(r=>{r.draw()})},_endDragAfter(n){t.DD._dragElements.forEach((o,r)=>{o.dragStatus==="stopped"&&o.node.fire("dragend",{type:"dragend",target:o.node,evt:n},!0),o.dragStatus!=="dragging"&&t.DD._dragElements.delete(r)})}},e.Konva.isBrowser&&(window.addEventListener("mouseup",t.DD._endDragBefore,!0),window.addEventListener("touchend",t.DD._endDragBefore,!0),window.addEventListener("touchcancel",t.DD._endDragBefore,!0),window.addEventListener("mousemove",t.DD._drag),window.addEventListener("touchmove",t.DD._drag),window.addEventListener("mouseup",t.DD._endDragAfter,!1),window.addEventListener("touchend",t.DD._endDragAfter,!1),window.addEventListener("touchcancel",t.DD._endDragAfter,!1))}(Fa)),Fa}var Vh;function vt(){if(Vh)return Dr;Vh=1,Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.Node=void 0;const t=pt(),e=Be(),i=la(),n=$e(),o=fc(),r=ze(),s="absoluteOpacity",a="allEventListeners",l="absoluteTransform",d="absoluteScale",h="canvas",c="Change",g="children",f="konva",u="listening",_="mouseenter",w="mouseleave",m="set",p="Shape",v=" ",b="stage",S="transform",T="Stage",E="visible",A=["xChange.konva","yChange.konva","scaleXChange.konva","scaleYChange.konva","skewXChange.konva","skewYChange.konva","rotationChange.konva","offsetXChange.konva","offsetYChange.konva","transformsEnabledChange.konva"].join(v);let M=1,C=class Pl{constructor(y){this._id=M++,this.eventListeners={},this.attrs={},this.index=0,this._allEventListeners=null,this.parent=null,this._cache=new Map,this._attachedDepsListeners=new Map,this._lastPos=null,this._batchingTransformChange=!1,this._needClearTransformCache=!1,this._filterUpToDate=!1,this._isUnderCache=!1,this._dragEventId=null,this._shouldFireChangeEvents=!1,this.setAttrs(y),this._shouldFireChangeEvents=!0}hasChildren(){return!1}_clearCache(y){(y===S||y===l)&&this._cache.get(y)?this._cache.get(y).dirty=!0:y?this._cache.delete(y):this._cache.clear()}_getCache(y,k){let R=this._cache.get(y);return(R===void 0||(y===S||y===l)&&R.dirty===!0)&&(R=k.call(this),this._cache.set(y,R)),R}_calculate(y,k,R){if(!this._attachedDepsListeners.get(y)){const L=k.map(O=>O+"Change.konva").join(v);this.on(L,()=>{this._clearCache(y)}),this._attachedDepsListeners.set(y,!0)}return this._getCache(y,R)}_getCanvasCache(){return this._cache.get(h)}_clearSelfAndDescendantCache(y){this._clearCache(y),y===l&&this.fire("absoluteTransformChange")}clearCache(){if(this._cache.has(h)){const{scene:y,filter:k,hit:R}=this._cache.get(h);t.Util.releaseCanvas(y,k,R),this._cache.delete(h)}return this._clearSelfAndDescendantCache(),this._requestDraw(),this}cache(y){const k=y||{};let R={};(k.x===void 0||k.y===void 0||k.width===void 0||k.height===void 0)&&(R=this.getClientRect({skipTransform:!0,relativeTo:this.getParent()||void 0}));let L=Math.ceil(k.width||R.width),O=Math.ceil(k.height||R.height),H=k.pixelRatio,W=k.x===void 0?Math.floor(R.x):k.x,se=k.y===void 0?Math.floor(R.y):k.y,te=k.offset||0,oe=k.drawBorder||!1,Q=k.hitCanvasPixelRatio||1;if(!L||!O){t.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");return}const ce=Math.abs(Math.round(R.x)-W)>.5?1:0,_e=Math.abs(Math.round(R.y)-se)>.5?1:0;L+=te*2+ce,O+=te*2+_e,W-=te,se-=te;const he=new i.SceneCanvas({pixelRatio:H,width:L,height:O}),D=new i.SceneCanvas({pixelRatio:H,width:0,height:0,willReadFrequently:!0}),V=new i.HitCanvas({pixelRatio:Q,width:L,height:O}),q=he.getContext(),Z=V.getContext();return V.isCache=!0,he.isCache=!0,this._cache.delete(h),this._filterUpToDate=!1,k.imageSmoothingEnabled===!1&&(he.getContext()._context.imageSmoothingEnabled=!1,D.getContext()._context.imageSmoothingEnabled=!1),q.save(),Z.save(),q.translate(-W,-se),Z.translate(-W,-se),this._isUnderCache=!0,this._clearSelfAndDescendantCache(s),this._clearSelfAndDescendantCache(d),this.drawScene(he,this),this.drawHit(V,this),this._isUnderCache=!1,q.restore(),Z.restore(),oe&&(q.save(),q.beginPath(),q.rect(0,0,L,O),q.closePath(),q.setAttr("strokeStyle","red"),q.setAttr("lineWidth",5),q.stroke(),q.restore()),this._cache.set(h,{scene:he,filter:D,hit:V,x:W,y:se}),this._requestDraw(),this}isCached(){return this._cache.has(h)}getClientRect(y){throw new Error('abstract "getClientRect" method call')}_transformedRect(y,k){const R=[{x:y.x,y:y.y},{x:y.x+y.width,y:y.y},{x:y.x+y.width,y:y.y+y.height},{x:y.x,y:y.y+y.height}];let L=1/0,O=1/0,H=-1/0,W=-1/0;const se=this.getAbsoluteTransform(k);return R.forEach(function(te){const oe=se.point(te);L===void 0&&(L=H=oe.x,O=W=oe.y),L=Math.min(L,oe.x),O=Math.min(O,oe.y),H=Math.max(H,oe.x),W=Math.max(W,oe.y)}),{x:L,y:O,width:H-L,height:W-O}}_drawCachedSceneCanvas(y){y.save(),y._applyOpacity(this),y._applyGlobalCompositeOperation(this);const k=this._getCanvasCache();y.translate(k.x,k.y);const R=this._getCachedSceneCanvas(),L=R.pixelRatio;y.drawImage(R._canvas,0,0,R.width/L,R.height/L),y.restore()}_drawCachedHitCanvas(y){const k=this._getCanvasCache(),R=k.hit;y.save(),y.translate(k.x,k.y),y.drawImage(R._canvas,0,0,R.width/R.pixelRatio,R.height/R.pixelRatio),y.restore()}_getCachedSceneCanvas(){let y=this.filters(),k=this._getCanvasCache(),R=k.scene,L=k.filter,O=L.getContext(),H,W,se,te;if(y){if(!this._filterUpToDate){const oe=R.pixelRatio;L.setSize(R.width/R.pixelRatio,R.height/R.pixelRatio);try{for(H=y.length,O.clear(),O.drawImage(R._canvas,0,0,R.getWidth()/oe,R.getHeight()/oe),W=O.getImageData(0,0,L.getWidth(),L.getHeight()),se=0;se<H;se++){if(te=y[se],typeof te!="function"){t.Util.error("Filter should be type of function, but got "+typeof te+" instead. Please check correct filters");continue}te.call(this,W),O.putImageData(W,0,0)}}catch(Q){t.Util.error("Unable to apply filter. "+Q.message+" This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.")}this._filterUpToDate=!0}return L}return R}on(y,k){if(this._cache&&this._cache.delete(a),arguments.length===3)return this._delegate.apply(this,arguments);let R=y.split(v),L=R.length,O,H,W,se,te;for(O=0;O<L;O++)H=R[O],W=H.split("."),se=W[0],te=W[1]||"",this.eventListeners[se]||(this.eventListeners[se]=[]),this.eventListeners[se].push({name:te,handler:k});return this}off(y,k){let R=(y||"").split(v),L=R.length,O,H,W,se,te,oe;if(this._cache&&this._cache.delete(a),!y)for(H in this.eventListeners)this._off(H);for(O=0;O<L;O++)if(W=R[O],se=W.split("."),te=se[0],oe=se[1],te)this.eventListeners[te]&&this._off(te,oe,k);else for(H in this.eventListeners)this._off(H,oe,k);return this}dispatchEvent(y){const k={target:this,type:y.type,evt:y};return this.fire(y.type,k),this}addEventListener(y,k){return this.on(y,function(R){k.call(this,R.evt)}),this}removeEventListener(y){return this.off(y),this}_delegate(y,k,R){const L=this;this.on(y,function(O){const H=O.target.findAncestors(k,!0,L);for(let W=0;W<H.length;W++)O=t.Util.cloneObject(O),O.currentTarget=H[W],R.call(H[W],O)})}remove(){return this.isDragging()&&this.stopDrag(),o.DD._dragElements.delete(this._id),this._remove(),this}_clearCaches(){this._clearSelfAndDescendantCache(l),this._clearSelfAndDescendantCache(s),this._clearSelfAndDescendantCache(d),this._clearSelfAndDescendantCache(b),this._clearSelfAndDescendantCache(E),this._clearSelfAndDescendantCache(u)}_remove(){this._clearCaches();const y=this.getParent();y&&y.children&&(y.children.splice(this.index,1),y._setChildrenIndices(),this.parent=null)}destroy(){return this.remove(),this.clearCache(),this}getAttr(y){const k="get"+t.Util._capitalize(y);return t.Util._isFunction(this[k])?this[k]():this.attrs[y]}getAncestors(){let y=this.getParent(),k=[];for(;y;)k.push(y),y=y.getParent();return k}getAttrs(){return this.attrs||{}}setAttrs(y){return this._batchTransformChanges(()=>{let k,R;if(!y)return this;for(k in y)k!==g&&(R=m+t.Util._capitalize(k),t.Util._isFunction(this[R])?this[R](y[k]):this._setAttr(k,y[k]))}),this}isListening(){return this._getCache(u,this._isListening)}_isListening(y){if(!this.listening())return!1;const R=this.getParent();return R&&R!==y&&this!==y?R._isListening(y):!0}isVisible(){return this._getCache(E,this._isVisible)}_isVisible(y){if(!this.visible())return!1;const R=this.getParent();return R&&R!==y&&this!==y?R._isVisible(y):!0}shouldDrawHit(y,k=!1){if(y)return this._isVisible(y)&&this._isListening(y);const R=this.getLayer();let L=!1;o.DD._dragElements.forEach(H=>{H.dragStatus==="dragging"&&(H.node.nodeType==="Stage"||H.node.getLayer()===R)&&(L=!0)});const O=!k&&!n.Konva.hitOnDragEnabled&&(L||n.Konva.isTransforming());return this.isListening()&&this.isVisible()&&!O}show(){return this.visible(!0),this}hide(){return this.visible(!1),this}getZIndex(){return this.index||0}getAbsoluteZIndex(){let y=this.getDepth(),k=this,R=0,L,O,H,W;function se(oe){for(L=[],O=oe.length,H=0;H<O;H++)W=oe[H],R++,W.nodeType!==p&&(L=L.concat(W.getChildren().slice())),W._id===k._id&&(H=O);L.length>0&&L[0].getDepth()<=y&&se(L)}const te=this.getStage();return k.nodeType!==T&&te&&se(te.getChildren()),R}getDepth(){let y=0,k=this.parent;for(;k;)y++,k=k.parent;return y}_batchTransformChanges(y){this._batchingTransformChange=!0,y(),this._batchingTransformChange=!1,this._needClearTransformCache&&(this._clearCache(S),this._clearSelfAndDescendantCache(l)),this._needClearTransformCache=!1}setPosition(y){return this._batchTransformChanges(()=>{this.x(y.x),this.y(y.y)}),this}getPosition(){return{x:this.x(),y:this.y()}}getRelativePointerPosition(){const y=this.getStage();if(!y)return null;const k=y.getPointerPosition();if(!k)return null;const R=this.getAbsoluteTransform().copy();return R.invert(),R.point(k)}getAbsolutePosition(y){let k=!1,R=this.parent;for(;R;){if(R.isCached()){k=!0;break}R=R.parent}k&&!y&&(y=!0);const L=this.getAbsoluteTransform(y).getMatrix(),O=new t.Transform,H=this.offset();return O.m=L.slice(),O.translate(H.x,H.y),O.getTranslation()}setAbsolutePosition(y){const{x:k,y:R,...L}=this._clearTransform();this.attrs.x=k,this.attrs.y=R,this._clearCache(S);const O=this._getAbsoluteTransform().copy();return O.invert(),O.translate(y.x,y.y),y={x:this.attrs.x+O.getTranslation().x,y:this.attrs.y+O.getTranslation().y},this._setTransform(L),this.setPosition({x:y.x,y:y.y}),this._clearCache(S),this._clearSelfAndDescendantCache(l),this}_setTransform(y){let k;for(k in y)this.attrs[k]=y[k]}_clearTransform(){const y={x:this.x(),y:this.y(),rotation:this.rotation(),scaleX:this.scaleX(),scaleY:this.scaleY(),offsetX:this.offsetX(),offsetY:this.offsetY(),skewX:this.skewX(),skewY:this.skewY()};return this.attrs.x=0,this.attrs.y=0,this.attrs.rotation=0,this.attrs.scaleX=1,this.attrs.scaleY=1,this.attrs.offsetX=0,this.attrs.offsetY=0,this.attrs.skewX=0,this.attrs.skewY=0,y}move(y){let k=y.x,R=y.y,L=this.x(),O=this.y();return k!==void 0&&(L+=k),R!==void 0&&(O+=R),this.setPosition({x:L,y:O}),this}_eachAncestorReverse(y,k){let R=[],L=this.getParent(),O,H;if(!(k&&k._id===this._id)){for(R.unshift(this);L&&(!k||L._id!==k._id);)R.unshift(L),L=L.parent;for(O=R.length,H=0;H<O;H++)y(R[H])}}rotate(y){return this.rotation(this.rotation()+y),this}moveToTop(){if(!this.parent)return t.Util.warn("Node has no parent. moveToTop function is ignored."),!1;const y=this.index,k=this.parent.getChildren().length;return y<k-1?(this.parent.children.splice(y,1),this.parent.children.push(this),this.parent._setChildrenIndices(),!0):!1}moveUp(){if(!this.parent)return t.Util.warn("Node has no parent. moveUp function is ignored."),!1;const y=this.index,k=this.parent.getChildren().length;return y<k-1?(this.parent.children.splice(y,1),this.parent.children.splice(y+1,0,this),this.parent._setChildrenIndices(),!0):!1}moveDown(){if(!this.parent)return t.Util.warn("Node has no parent. moveDown function is ignored."),!1;const y=this.index;return y>0?(this.parent.children.splice(y,1),this.parent.children.splice(y-1,0,this),this.parent._setChildrenIndices(),!0):!1}moveToBottom(){if(!this.parent)return t.Util.warn("Node has no parent. moveToBottom function is ignored."),!1;const y=this.index;return y>0?(this.parent.children.splice(y,1),this.parent.children.unshift(this),this.parent._setChildrenIndices(),!0):!1}setZIndex(y){if(!this.parent)return t.Util.warn("Node has no parent. zIndex parameter is ignored."),this;(y<0||y>=this.parent.children.length)&&t.Util.warn("Unexpected value "+y+" for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to "+(this.parent.children.length-1)+".");const k=this.index;return this.parent.children.splice(k,1),this.parent.children.splice(y,0,this),this.parent._setChildrenIndices(),this}getAbsoluteOpacity(){return this._getCache(s,this._getAbsoluteOpacity)}_getAbsoluteOpacity(){let y=this.opacity();const k=this.getParent();return k&&!k._isUnderCache&&(y*=k.getAbsoluteOpacity()),y}moveTo(y){return this.getParent()!==y&&(this._remove(),y.add(this)),this}toObject(){let y=this.getAttrs(),k,R,L,O,H;const W={attrs:{},className:this.getClassName()};for(k in y)R=y[k],H=t.Util.isObject(R)&&!t.Util._isPlainObject(R)&&!t.Util._isArray(R),!H&&(L=typeof this[k]=="function"&&this[k],delete y[k],O=L?L.call(this):null,y[k]=R,O!==R&&(W.attrs[k]=R));return t.Util._prepareToStringify(W)}toJSON(){return JSON.stringify(this.toObject())}getParent(){return this.parent}findAncestors(y,k,R){const L=[];k&&this._isMatch(y)&&L.push(this);let O=this.parent;for(;O;){if(O===R)return L;O._isMatch(y)&&L.push(O),O=O.parent}return L}isAncestorOf(y){return!1}findAncestor(y,k,R){return this.findAncestors(y,k,R)[0]}_isMatch(y){if(!y)return!1;if(typeof y=="function")return y(this);let k=y.replace(/ /g,"").split(","),R=k.length,L,O;for(L=0;L<R;L++)if(O=k[L],t.Util.isValidSelector(O)||(t.Util.warn('Selector "'+O+'" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'),t.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'),t.Util.warn("Konva is awesome, right?")),O.charAt(0)==="#"){if(this.id()===O.slice(1))return!0}else if(O.charAt(0)==="."){if(this.hasName(O.slice(1)))return!0}else if(this.className===O||this.nodeType===O)return!0;return!1}getLayer(){const y=this.getParent();return y?y.getLayer():null}getStage(){return this._getCache(b,this._getStage)}_getStage(){const y=this.getParent();return y?y.getStage():null}fire(y,k={},R){return k.target=k.target||this,R?this._fireAndBubble(y,k):this._fire(y,k),this}getAbsoluteTransform(y){return y?this._getAbsoluteTransform(y):this._getCache(l,this._getAbsoluteTransform)}_getAbsoluteTransform(y){let k;if(y)return k=new t.Transform,this._eachAncestorReverse(function(R){const L=R.transformsEnabled();L==="all"?k.multiply(R.getTransform()):L==="position"&&k.translate(R.x()-R.offsetX(),R.y()-R.offsetY())},y),k;{k=this._cache.get(l)||new t.Transform,this.parent?this.parent.getAbsoluteTransform().copyInto(k):k.reset();const R=this.transformsEnabled();if(R==="all")k.multiply(this.getTransform());else if(R==="position"){const L=this.attrs.x||0,O=this.attrs.y||0,H=this.attrs.offsetX||0,W=this.attrs.offsetY||0;k.translate(L-H,O-W)}return k.dirty=!1,k}}getAbsoluteScale(y){let k=this;for(;k;)k._isUnderCache&&(y=k),k=k.getParent();const L=this.getAbsoluteTransform(y).decompose();return{x:L.scaleX,y:L.scaleY}}getAbsoluteRotation(){return this.getAbsoluteTransform().decompose().rotation}getTransform(){return this._getCache(S,this._getTransform)}_getTransform(){var y,k;const R=this._cache.get(S)||new t.Transform;R.reset();const L=this.x(),O=this.y(),H=n.Konva.getAngle(this.rotation()),W=(y=this.attrs.scaleX)!==null&&y!==void 0?y:1,se=(k=this.attrs.scaleY)!==null&&k!==void 0?k:1,te=this.attrs.skewX||0,oe=this.attrs.skewY||0,Q=this.attrs.offsetX||0,ce=this.attrs.offsetY||0;return(L!==0||O!==0)&&R.translate(L,O),H!==0&&R.rotate(H),(te!==0||oe!==0)&&R.skew(te,oe),(W!==1||se!==1)&&R.scale(W,se),(Q!==0||ce!==0)&&R.translate(-1*Q,-1*ce),R.dirty=!1,R}clone(y){let k=t.Util.cloneObject(this.attrs),R,L,O,H,W;for(R in y)k[R]=y[R];const se=new this.constructor(k);for(R in this.eventListeners)for(L=this.eventListeners[R],O=L.length,H=0;H<O;H++)W=L[H],W.name.indexOf(f)<0&&(se.eventListeners[R]||(se.eventListeners[R]=[]),se.eventListeners[R].push(W));return se}_toKonvaCanvas(y){y=y||{};const k=this.getClientRect(),R=this.getStage(),L=y.x!==void 0?y.x:Math.floor(k.x),O=y.y!==void 0?y.y:Math.floor(k.y),H=y.pixelRatio||1,W=new i.SceneCanvas({width:y.width||Math.ceil(k.width)||(R?R.width():0),height:y.height||Math.ceil(k.height)||(R?R.height():0),pixelRatio:H}),se=W.getContext(),te=new i.SceneCanvas({width:W.width/W.pixelRatio+Math.abs(L),height:W.height/W.pixelRatio+Math.abs(O),pixelRatio:W.pixelRatio});return y.imageSmoothingEnabled===!1&&(se._context.imageSmoothingEnabled=!1),se.save(),(L||O)&&se.translate(-1*L,-1*O),this.drawScene(W,void 0,te),se.restore(),W}toCanvas(y){return this._toKonvaCanvas(y)._canvas}toDataURL(y){y=y||{};const k=y.mimeType||null,R=y.quality||null,L=this._toKonvaCanvas(y).toDataURL(k,R);return y.callback&&y.callback(L),L}toImage(y){return new Promise((k,R)=>{try{const L=y==null?void 0:y.callback;L&&delete y.callback,t.Util._urlToImage(this.toDataURL(y),function(O){k(O),L==null||L(O)})}catch(L){R(L)}})}toBlob(y){return new Promise((k,R)=>{try{const L=y==null?void 0:y.callback;L&&delete y.callback,this.toCanvas(y).toBlob(O=>{k(O),L==null||L(O)},y==null?void 0:y.mimeType,y==null?void 0:y.quality)}catch(L){R(L)}})}setSize(y){return this.width(y.width),this.height(y.height),this}getSize(){return{width:this.width(),height:this.height()}}getClassName(){return this.className||this.nodeType}getType(){return this.nodeType}getDragDistance(){return this.attrs.dragDistance!==void 0?this.attrs.dragDistance:this.parent?this.parent.getDragDistance():n.Konva.dragDistance}_off(y,k,R){let L=this.eventListeners[y],O,H,W;for(O=0;O<L.length;O++)if(H=L[O].name,W=L[O].handler,(H!=="konva"||k==="konva")&&(!k||H===k)&&(!R||R===W)){if(L.splice(O,1),L.length===0){delete this.eventListeners[y];break}O--}}_fireChangeEvent(y,k,R){this._fire(y+c,{oldVal:k,newVal:R})}addName(y){if(!this.hasName(y)){const k=this.name(),R=k?k+" "+y:y;this.name(R)}return this}hasName(y){if(!y)return!1;const k=this.name();return k?(k||"").split(/\s/g).indexOf(y)!==-1:!1}removeName(y){const k=(this.name()||"").split(/\s/g),R=k.indexOf(y);return R!==-1&&(k.splice(R,1),this.name(k.join(" "))),this}setAttr(y,k){const R=this[m+t.Util._capitalize(y)];return t.Util._isFunction(R)?R.call(this,k):this._setAttr(y,k),this}_requestDraw(){if(n.Konva.autoDrawEnabled){const y=this.getLayer()||this.getStage();y==null||y.batchDraw()}}_setAttr(y,k){const R=this.attrs[y];R===k&&!t.Util.isObject(k)||(k==null?delete this.attrs[y]:this.attrs[y]=k,this._shouldFireChangeEvents&&this._fireChangeEvent(y,R,k),this._requestDraw())}_setComponentAttr(y,k,R){let L;R!==void 0&&(L=this.attrs[y],L||(this.attrs[y]=this.getAttr(y)),this.attrs[y][k]=R,this._fireChangeEvent(y,L,R))}_fireAndBubble(y,k,R){if(k&&this.nodeType===p&&(k.target=this),!((y===_||y===w)&&(R&&(this===R||this.isAncestorOf&&this.isAncestorOf(R))||this.nodeType==="Stage"&&!R))){this._fire(y,k);const O=(y===_||y===w)&&R&&R.isAncestorOf&&R.isAncestorOf(this)&&!R.isAncestorOf(this.parent);(k&&!k.cancelBubble||!k)&&this.parent&&this.parent.isListening()&&!O&&(R&&R.parent?this._fireAndBubble.call(this.parent,y,k,R):this._fireAndBubble.call(this.parent,y,k))}}_getProtoListeners(y){var k,R,L;const O=(k=this._cache.get(a))!==null&&k!==void 0?k:{};let H=O==null?void 0:O[y];if(H===void 0){H=[];let W=Object.getPrototypeOf(this);for(;W;){const se=(L=(R=W.eventListeners)===null||R===void 0?void 0:R[y])!==null&&L!==void 0?L:[];H.push(...se),W=Object.getPrototypeOf(W)}O[y]=H,this._cache.set(a,O)}return H}_fire(y,k){k=k||{},k.currentTarget=this,k.type=y;const R=this._getProtoListeners(y);if(R)for(var L=0;L<R.length;L++)R[L].handler.call(this,k);const O=this.eventListeners[y];if(O)for(var L=0;L<O.length;L++)O[L].handler.call(this,k)}draw(){return this.drawScene(),this.drawHit(),this}_createDragElement(y){const k=y?y.pointerId:void 0,R=this.getStage(),L=this.getAbsolutePosition();if(!R)return;const O=R._getPointerById(k)||R._changedPointerPositions[0]||L;o.DD._dragElements.set(this._id,{node:this,startPointerPos:O,offset:{x:O.x-L.x,y:O.y-L.y},dragStatus:"ready",pointerId:k})}startDrag(y,k=!0){o.DD._dragElements.has(this._id)||this._createDragElement(y);const R=o.DD._dragElements.get(this._id);R.dragStatus="dragging",this.fire("dragstart",{type:"dragstart",target:this,evt:y&&y.evt},k)}_setDragPosition(y,k){const R=this.getStage()._getPointerById(k.pointerId);if(!R)return;let L={x:R.x-k.offset.x,y:R.y-k.offset.y};const O=this.dragBoundFunc();if(O!==void 0){const H=O.call(this,L,y);H?L=H:t.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.")}(!this._lastPos||this._lastPos.x!==L.x||this._lastPos.y!==L.y)&&(this.setAbsolutePosition(L),this._requestDraw()),this._lastPos=L}stopDrag(y){const k=o.DD._dragElements.get(this._id);k&&(k.dragStatus="stopped"),o.DD._endDragBefore(y),o.DD._endDragAfter(y)}setDraggable(y){this._setAttr("draggable",y),this._dragChange()}isDragging(){const y=o.DD._dragElements.get(this._id);return y?y.dragStatus==="dragging":!1}_listenDrag(){this._dragCleanup(),this.on("mousedown.konva touchstart.konva",function(y){if(!(!(y.evt.button!==void 0)||n.Konva.dragButtons.indexOf(y.evt.button)>=0)||this.isDragging())return;let L=!1;o.DD._dragElements.forEach(O=>{this.isAncestorOf(O.node)&&(L=!0)}),L||this._createDragElement(y)})}_dragChange(){if(this.attrs.draggable)this._listenDrag();else{if(this._dragCleanup(),!this.getStage())return;const k=o.DD._dragElements.get(this._id),R=k&&k.dragStatus==="dragging",L=k&&k.dragStatus==="ready";R?this.stopDrag():L&&o.DD._dragElements.delete(this._id)}}_dragCleanup(){this.off("mousedown.konva"),this.off("touchstart.konva")}isClientRectOnScreen(y={x:0,y:0}){const k=this.getStage();if(!k)return!1;const R={x:-y.x,y:-y.y,width:k.width()+2*y.x,height:k.height()+2*y.y};return t.Util.haveIntersection(R,this.getClientRect())}static create(y,k){return t.Util._isString(y)&&(y=JSON.parse(y)),this._createNode(y,k)}static _createNode(y,k){let R=Pl.prototype.getClassName.call(y),L=y.children,O,H,W;k&&(y.attrs.container=k),n.Konva[R]||(t.Util.warn('Can not find a node with class name "'+R+'". Fallback to "Shape".'),R="Shape");const se=n.Konva[R];if(O=new se(y.attrs),L)for(H=L.length,W=0;W<H;W++)O.add(Pl._createNode(L[W]));return O}};Dr.Node=C,C.prototype.nodeType="Node",C.prototype._attrsAffectingSize=[],C.prototype.eventListeners={},C.prototype.on.call(C.prototype,A,function(){if(this._batchingTransformChange){this._needClearTransformCache=!0;return}this._clearCache(S),this._clearSelfAndDescendantCache(l)}),C.prototype.on.call(C.prototype,"visibleChange.konva",function(){this._clearSelfAndDescendantCache(E)}),C.prototype.on.call(C.prototype,"listeningChange.konva",function(){this._clearSelfAndDescendantCache(u)}),C.prototype.on.call(C.prototype,"opacityChange.konva",function(){this._clearSelfAndDescendantCache(s)});const P=e.Factory.addGetterSetter;return P(C,"zIndex"),P(C,"absolutePosition"),P(C,"position"),P(C,"x",0,(0,r.getNumberValidator)()),P(C,"y",0,(0,r.getNumberValidator)()),P(C,"globalCompositeOperation","source-over",(0,r.getStringValidator)()),P(C,"opacity",1,(0,r.getNumberValidator)()),P(C,"name","",(0,r.getStringValidator)()),P(C,"id","",(0,r.getStringValidator)()),P(C,"rotation",0,(0,r.getNumberValidator)()),e.Factory.addComponentsGetterSetter(C,"scale",["x","y"]),P(C,"scaleX",1,(0,r.getNumberValidator)()),P(C,"scaleY",1,(0,r.getNumberValidator)()),e.Factory.addComponentsGetterSetter(C,"skew",["x","y"]),P(C,"skewX",0,(0,r.getNumberValidator)()),P(C,"skewY",0,(0,r.getNumberValidator)()),e.Factory.addComponentsGetterSetter(C,"offset",["x","y"]),P(C,"offsetX",0,(0,r.getNumberValidator)()),P(C,"offsetY",0,(0,r.getNumberValidator)()),P(C,"dragDistance",void 0,(0,r.getNumberValidator)()),P(C,"width",0,(0,r.getNumberValidator)()),P(C,"height",0,(0,r.getNumberValidator)()),P(C,"listening",!0,(0,r.getBooleanValidator)()),P(C,"preventDefault",!0,(0,r.getBooleanValidator)()),P(C,"filters",void 0,function(z){return this._filterUpToDate=!1,z}),P(C,"visible",!0,(0,r.getBooleanValidator)()),P(C,"transformsEnabled","all",(0,r.getStringValidator)()),P(C,"size"),P(C,"dragBoundFunc"),P(C,"draggable",!1,(0,r.getBooleanValidator)()),e.Factory.backCompat(C,{rotateDeg:"rotate",setRotationDeg:"setRotation",getRotationDeg:"getRotation"}),Dr}var Fr={},Hh;function ca(){if(Hh)return Fr;Hh=1,Object.defineProperty(Fr,"__esModule",{value:!0}),Fr.Container=void 0;const t=Be(),e=vt(),i=ze();let n=class extends e.Node{constructor(){super(...arguments),this.children=[]}getChildren(r){if(!r)return this.children||[];const s=this.children||[],a=[];return s.forEach(function(l){r(l)&&a.push(l)}),a}hasChildren(){return this.getChildren().length>0}removeChildren(){return this.getChildren().forEach(r=>{r.parent=null,r.index=0,r.remove()}),this.children=[],this._requestDraw(),this}destroyChildren(){return this.getChildren().forEach(r=>{r.parent=null,r.index=0,r.destroy()}),this.children=[],this._requestDraw(),this}add(...r){if(r.length===0)return this;if(r.length>1){for(let a=0;a<r.length;a++)this.add(r[a]);return this}const s=r[0];return s.getParent()?(s.moveTo(this),this):(this._validateAdd(s),s.index=this.getChildren().length,s.parent=this,s._clearCaches(),this.getChildren().push(s),this._fire("add",{child:s}),this._requestDraw(),this)}destroy(){return this.hasChildren()&&this.destroyChildren(),super.destroy(),this}find(r){return this._generalFind(r,!1)}findOne(r){const s=this._generalFind(r,!0);return s.length>0?s[0]:void 0}_generalFind(r,s){const a=[];return this._descendants(l=>{const d=l._isMatch(r);return d&&a.push(l),!!(d&&s)}),a}_descendants(r){let s=!1;const a=this.getChildren();for(const l of a){if(s=r(l),s)return!0;if(l.hasChildren()&&(s=l._descendants(r),s))return!0}return!1}toObject(){const r=e.Node.prototype.toObject.call(this);return r.children=[],this.getChildren().forEach(s=>{r.children.push(s.toObject())}),r}isAncestorOf(r){let s=r.getParent();for(;s;){if(s._id===this._id)return!0;s=s.getParent()}return!1}clone(r){const s=e.Node.prototype.clone.call(this,r);return this.getChildren().forEach(function(a){s.add(a.clone())}),s}getAllIntersections(r){const s=[];return this.find("Shape").forEach(a=>{a.isVisible()&&a.intersects(r)&&s.push(a)}),s}_clearSelfAndDescendantCache(r){var s;super._clearSelfAndDescendantCache(r),!this.isCached()&&((s=this.children)===null||s===void 0||s.forEach(function(a){a._clearSelfAndDescendantCache(r)}))}_setChildrenIndices(){var r;(r=this.children)===null||r===void 0||r.forEach(function(s,a){s.index=a}),this._requestDraw()}drawScene(r,s,a){const l=this.getLayer(),d=r||l&&l.getCanvas(),h=d&&d.getContext(),c=this._getCanvasCache(),g=c&&c.scene,f=d&&d.isCache;if(!this.isVisible()&&!f)return this;if(g){h.save();const u=this.getAbsoluteTransform(s).getMatrix();h.transform(u[0],u[1],u[2],u[3],u[4],u[5]),this._drawCachedSceneCanvas(h),h.restore()}else this._drawChildren("drawScene",d,s,a);return this}drawHit(r,s){if(!this.shouldDrawHit(s))return this;const a=this.getLayer(),l=r||a&&a.hitCanvas,d=l&&l.getContext(),h=this._getCanvasCache();if(h&&h.hit){d.save();const g=this.getAbsoluteTransform(s).getMatrix();d.transform(g[0],g[1],g[2],g[3],g[4],g[5]),this._drawCachedHitCanvas(d),d.restore()}else this._drawChildren("drawHit",l,s);return this}_drawChildren(r,s,a,l){var d;const h=s&&s.getContext(),c=this.clipWidth(),g=this.clipHeight(),f=this.clipFunc(),u=typeof c=="number"&&typeof g=="number"||f,_=a===this;if(u){h.save();const m=this.getAbsoluteTransform(a);let p=m.getMatrix();h.transform(p[0],p[1],p[2],p[3],p[4],p[5]),h.beginPath();let v;if(f)v=f.call(this,h,this);else{const b=this.clipX(),S=this.clipY();h.rect(b||0,S||0,c,g)}h.clip.apply(h,v),p=m.copy().invert().getMatrix(),h.transform(p[0],p[1],p[2],p[3],p[4],p[5])}const w=!_&&this.globalCompositeOperation()!=="source-over"&&r==="drawScene";w&&(h.save(),h._applyGlobalCompositeOperation(this)),(d=this.children)===null||d===void 0||d.forEach(function(m){m[r](s,a,l)}),w&&h.restore(),u&&h.restore()}getClientRect(r={}){var s;const a=r.skipTransform,l=r.relativeTo;let d,h,c,g,f={x:1/0,y:1/0,width:0,height:0};const u=this;(s=this.children)===null||s===void 0||s.forEach(function(m){if(!m.visible())return;const p=m.getClientRect({relativeTo:u,skipShadow:r.skipShadow,skipStroke:r.skipStroke});p.width===0&&p.height===0||(d===void 0?(d=p.x,h=p.y,c=p.x+p.width,g=p.y+p.height):(d=Math.min(d,p.x),h=Math.min(h,p.y),c=Math.max(c,p.x+p.width),g=Math.max(g,p.y+p.height)))});const _=this.find("Shape");let w=!1;for(let m=0;m<_.length;m++)if(_[m]._isVisible(this)){w=!0;break}return w&&d!==void 0?f={x:d,y:h,width:c-d,height:g-h}:f={x:0,y:0,width:0,height:0},a?f:this._transformedRect(f,l)}};return Fr.Container=n,t.Factory.addComponentsGetterSetter(n,"clip",["x","y","width","height"]),t.Factory.addGetterSetter(n,"clipX",void 0,(0,i.getNumberValidator)()),t.Factory.addGetterSetter(n,"clipY",void 0,(0,i.getNumberValidator)()),t.Factory.addGetterSetter(n,"clipWidth",void 0,(0,i.getNumberValidator)()),t.Factory.addGetterSetter(n,"clipHeight",void 0,(0,i.getNumberValidator)()),t.Factory.addGetterSetter(n,"clipFunc"),Fr}var $a={},en={},Uh;function P0(){if(Uh)return en;Uh=1,Object.defineProperty(en,"__esModule",{value:!0}),en.getCapturedShape=n,en.createEvent=o,en.hasPointerCapture=r,en.setPointerCapture=s,en.releaseCapture=a;const t=$e(),e=new Map,i=t.Konva._global.PointerEvent!==void 0;function n(l){return e.get(l)}function o(l){return{evt:l,pointerId:l.pointerId}}function r(l,d){return e.get(l)===d}function s(l,d){a(l),d.getStage()&&(e.set(l,d),i&&d._fire("gotpointercapture",o(new PointerEvent("gotpointercapture"))))}function a(l,d){const h=e.get(l);if(!h)return;const c=h.getStage();c&&c.content,e.delete(l),i&&h._fire("lostpointercapture",o(new PointerEvent("lostpointercapture")))}return en}var Gh;function w_(){return Gh||(Gh=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Stage=t.stages=void 0;const e=pt(),i=Be(),n=ca(),o=$e(),r=la(),s=fc(),a=$e(),l=P0(),d="Stage",h="string",c="px",g="mouseout",f="mouseleave",u="mouseover",_="mouseenter",w="mousemove",m="mousedown",p="mouseup",v="pointermove",b="pointerdown",S="pointerup",T="pointercancel",E="lostpointercapture",A="pointerout",M="pointerleave",C="pointerover",P="pointerenter",z="contextmenu",y="touchstart",k="touchend",R="touchmove",L="touchcancel",O="wheel",H=5,W=[[_,"_pointerenter"],[m,"_pointerdown"],[w,"_pointermove"],[p,"_pointerup"],[f,"_pointerleave"],[y,"_pointerdown"],[R,"_pointermove"],[k,"_pointerup"],[L,"_pointercancel"],[u,"_pointerover"],[O,"_wheel"],[z,"_contextmenu"],[b,"_pointerdown"],[v,"_pointermove"],[S,"_pointerup"],[T,"_pointercancel"],[E,"_lostpointercapture"]],se={mouse:{[A]:g,[M]:f,[C]:u,[P]:_,[v]:w,[b]:m,[S]:p,[T]:"mousecancel",pointerclick:"click",pointerdblclick:"dblclick"},touch:{[A]:"touchout",[M]:"touchleave",[C]:"touchover",[P]:"touchenter",[v]:R,[b]:y,[S]:k,[T]:L,pointerclick:"tap",pointerdblclick:"dbltap"},pointer:{[A]:A,[M]:M,[C]:C,[P]:P,[v]:v,[b]:b,[S]:S,[T]:T,pointerclick:"pointerclick",pointerdblclick:"pointerdblclick"}},te=he=>he.indexOf("pointer")>=0?"pointer":he.indexOf("touch")>=0?"touch":"mouse",oe=he=>{const D=te(he);if(D==="pointer")return o.Konva.pointerEventsEnabled&&se.pointer;if(D==="touch")return se.touch;if(D==="mouse")return se.mouse};function Q(he={}){return(he.clipFunc||he.clipWidth||he.clipHeight)&&e.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."),he}const ce="Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";t.stages=[];class _e extends n.Container{constructor(D){super(Q(D)),this._pointerPositions=[],this._changedPointerPositions=[],this._buildDOM(),this._bindContentEvents(),t.stages.push(this),this.on("widthChange.konva heightChange.konva",this._resizeDOM),this.on("visibleChange.konva",this._checkVisibility),this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva",()=>{Q(this.attrs)}),this._checkVisibility()}_validateAdd(D){const V=D.getType()==="Layer",q=D.getType()==="FastLayer";V||q||e.Util.throw("You may only add layers to the stage.")}_checkVisibility(){if(!this.content)return;const D=this.visible()?"":"none";this.content.style.display=D}setContainer(D){if(typeof D===h){if(D.charAt(0)==="."){const q=D.slice(1);D=document.getElementsByClassName(q)[0]}else{var V;D.charAt(0)!=="#"?V=D:V=D.slice(1),D=document.getElementById(V)}if(!D)throw"Can not find container in document with id "+V}return this._setAttr("container",D),this.content&&(this.content.parentElement&&this.content.parentElement.removeChild(this.content),D.appendChild(this.content)),this}shouldDrawHit(){return!0}clear(){const D=this.children,V=D.length;for(let q=0;q<V;q++)D[q].clear();return this}clone(D){return D||(D={}),D.container=typeof document<"u"&&document.createElement("div"),n.Container.prototype.clone.call(this,D)}destroy(){super.destroy();const D=this.content;D&&e.Util._isInDocument(D)&&this.container().removeChild(D);const V=t.stages.indexOf(this);return V>-1&&t.stages.splice(V,1),e.Util.releaseCanvas(this.bufferCanvas._canvas,this.bufferHitCanvas._canvas),this}getPointerPosition(){const D=this._pointerPositions[0]||this._changedPointerPositions[0];return D?{x:D.x,y:D.y}:(e.Util.warn(ce),null)}_getPointerById(D){return this._pointerPositions.find(V=>V.id===D)}getPointersPositions(){return this._pointerPositions}getStage(){return this}getContent(){return this.content}_toKonvaCanvas(D){D=D||{},D.x=D.x||0,D.y=D.y||0,D.width=D.width||this.width(),D.height=D.height||this.height();const V=new r.SceneCanvas({width:D.width,height:D.height,pixelRatio:D.pixelRatio||1}),q=V.getContext()._context,Z=this.children;return(D.x||D.y)&&q.translate(-1*D.x,-1*D.y),Z.forEach(function(de){if(!de.isVisible())return;const $=de._toKonvaCanvas(D);q.drawImage($._canvas,D.x,D.y,$.getWidth()/$.getPixelRatio(),$.getHeight()/$.getPixelRatio())}),V}getIntersection(D){if(!D)return null;const V=this.children,q=V.length,Z=q-1;for(let de=Z;de>=0;de--){const $=V[de].getIntersection(D);if($)return $}return null}_resizeDOM(){const D=this.width(),V=this.height();this.content&&(this.content.style.width=D+c,this.content.style.height=V+c),this.bufferCanvas.setSize(D,V),this.bufferHitCanvas.setSize(D,V),this.children.forEach(q=>{q.setSize({width:D,height:V}),q.draw()})}add(D,...V){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.add(arguments[Z]);return this}super.add(D);const q=this.children.length;return q>H&&e.Util.warn("The stage has "+q+" layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."),D.setSize({width:this.width(),height:this.height()}),D.draw(),o.Konva.isBrowser&&this.content.appendChild(D.canvas._canvas),this}getParent(){return null}getLayer(){return null}hasPointerCapture(D){return l.hasPointerCapture(D,this)}setPointerCapture(D){l.setPointerCapture(D,this)}releaseCapture(D){l.releaseCapture(D,this)}getLayers(){return this.children}_bindContentEvents(){o.Konva.isBrowser&&W.forEach(([D,V])=>{this.content.addEventListener(D,q=>{this[V](q)},{passive:!1})})}_pointerenter(D){this.setPointersPositions(D);const V=oe(D.type);V&&this._fire(V.pointerenter,{evt:D,target:this,currentTarget:this})}_pointerover(D){this.setPointersPositions(D);const V=oe(D.type);V&&this._fire(V.pointerover,{evt:D,target:this,currentTarget:this})}_getTargetShape(D){let V=this[D+"targetShape"];return V&&!V.getStage()&&(V=null),V}_pointerleave(D){const V=oe(D.type),q=te(D.type);if(!V)return;this.setPointersPositions(D);const Z=this._getTargetShape(q),de=!(o.Konva.isDragging()||o.Konva.isTransforming())||o.Konva.hitOnDragEnabled;Z&&de?(Z._fireAndBubble(V.pointerout,{evt:D}),Z._fireAndBubble(V.pointerleave,{evt:D}),this._fire(V.pointerleave,{evt:D,target:this,currentTarget:this}),this[q+"targetShape"]=null):de&&(this._fire(V.pointerleave,{evt:D,target:this,currentTarget:this}),this._fire(V.pointerout,{evt:D,target:this,currentTarget:this})),this.pointerPos=null,this._pointerPositions=[]}_pointerdown(D){const V=oe(D.type),q=te(D.type);if(!V)return;this.setPointersPositions(D);let Z=!1;this._changedPointerPositions.forEach(de=>{const $=this.getIntersection(de);if(s.DD.justDragged=!1,o.Konva["_"+q+"ListenClick"]=!0,!$||!$.isListening()){this[q+"ClickStartShape"]=void 0;return}o.Konva.capturePointerEventsEnabled&&$.setPointerCapture(de.id),this[q+"ClickStartShape"]=$,$._fireAndBubble(V.pointerdown,{evt:D,pointerId:de.id}),Z=!0;const N=D.type.indexOf("touch")>=0;$.preventDefault()&&D.cancelable&&N&&D.preventDefault()}),Z||this._fire(V.pointerdown,{evt:D,target:this,currentTarget:this,pointerId:this._pointerPositions[0].id})}_pointermove(D){const V=oe(D.type),q=te(D.type);if(!V||(o.Konva.isDragging()&&s.DD.node.preventDefault()&&D.cancelable&&D.preventDefault(),this.setPointersPositions(D),!(!(o.Konva.isDragging()||o.Konva.isTransforming())||o.Konva.hitOnDragEnabled)))return;const de={};let $=!1;const N=this._getTargetShape(q);this._changedPointerPositions.forEach(G=>{const Y=l.getCapturedShape(G.id)||this.getIntersection(G),ie=G.id,X={evt:D,pointerId:ie},ae=N!==Y;if(ae&&N&&(N._fireAndBubble(V.pointerout,{...X},Y),N._fireAndBubble(V.pointerleave,{...X},Y)),Y){if(de[Y._id])return;de[Y._id]=!0}Y&&Y.isListening()?($=!0,ae&&(Y._fireAndBubble(V.pointerover,{...X},N),Y._fireAndBubble(V.pointerenter,{...X},N),this[q+"targetShape"]=Y),Y._fireAndBubble(V.pointermove,{...X})):N&&(this._fire(V.pointerover,{evt:D,target:this,currentTarget:this,pointerId:ie}),this[q+"targetShape"]=null)}),$||this._fire(V.pointermove,{evt:D,target:this,currentTarget:this,pointerId:this._changedPointerPositions[0].id})}_pointerup(D){const V=oe(D.type),q=te(D.type);if(!V)return;this.setPointersPositions(D);const Z=this[q+"ClickStartShape"],de=this[q+"ClickEndShape"],$={};let N=!1;this._changedPointerPositions.forEach(G=>{const Y=l.getCapturedShape(G.id)||this.getIntersection(G);if(Y){if(Y.releaseCapture(G.id),$[Y._id])return;$[Y._id]=!0}const ie=G.id,X={evt:D,pointerId:ie};let ae=!1;o.Konva["_"+q+"InDblClickWindow"]?(ae=!0,clearTimeout(this[q+"DblTimeout"])):s.DD.justDragged||(o.Konva["_"+q+"InDblClickWindow"]=!0,clearTimeout(this[q+"DblTimeout"])),this[q+"DblTimeout"]=setTimeout(function(){o.Konva["_"+q+"InDblClickWindow"]=!1},o.Konva.dblClickWindow),Y&&Y.isListening()?(N=!0,this[q+"ClickEndShape"]=Y,Y._fireAndBubble(V.pointerup,{...X}),o.Konva["_"+q+"ListenClick"]&&Z&&Z===Y&&(Y._fireAndBubble(V.pointerclick,{...X}),ae&&de&&de===Y&&Y._fireAndBubble(V.pointerdblclick,{...X}))):(this[q+"ClickEndShape"]=null,o.Konva["_"+q+"ListenClick"]&&this._fire(V.pointerclick,{evt:D,target:this,currentTarget:this,pointerId:ie}),ae&&this._fire(V.pointerdblclick,{evt:D,target:this,currentTarget:this,pointerId:ie}))}),N||this._fire(V.pointerup,{evt:D,target:this,currentTarget:this,pointerId:this._changedPointerPositions[0].id}),o.Konva["_"+q+"ListenClick"]=!1,D.cancelable&&q!=="touch"&&q!=="pointer"&&D.preventDefault()}_contextmenu(D){this.setPointersPositions(D);const V=this.getIntersection(this.getPointerPosition());V&&V.isListening()?V._fireAndBubble(z,{evt:D}):this._fire(z,{evt:D,target:this,currentTarget:this})}_wheel(D){this.setPointersPositions(D);const V=this.getIntersection(this.getPointerPosition());V&&V.isListening()?V._fireAndBubble(O,{evt:D}):this._fire(O,{evt:D,target:this,currentTarget:this})}_pointercancel(D){this.setPointersPositions(D);const V=l.getCapturedShape(D.pointerId)||this.getIntersection(this.getPointerPosition());V&&V._fireAndBubble(S,l.createEvent(D)),l.releaseCapture(D.pointerId)}_lostpointercapture(D){l.releaseCapture(D.pointerId)}setPointersPositions(D){const V=this._getContentPosition();let q=null,Z=null;D=D||window.event,D.touches!==void 0?(this._pointerPositions=[],this._changedPointerPositions=[],Array.prototype.forEach.call(D.touches,de=>{this._pointerPositions.push({id:de.identifier,x:(de.clientX-V.left)/V.scaleX,y:(de.clientY-V.top)/V.scaleY})}),Array.prototype.forEach.call(D.changedTouches||D.touches,de=>{this._changedPointerPositions.push({id:de.identifier,x:(de.clientX-V.left)/V.scaleX,y:(de.clientY-V.top)/V.scaleY})})):(q=(D.clientX-V.left)/V.scaleX,Z=(D.clientY-V.top)/V.scaleY,this.pointerPos={x:q,y:Z},this._pointerPositions=[{x:q,y:Z,id:e.Util._getFirstPointerId(D)}],this._changedPointerPositions=[{x:q,y:Z,id:e.Util._getFirstPointerId(D)}])}_setPointerPosition(D){e.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'),this.setPointersPositions(D)}_getContentPosition(){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};const D=this.content.getBoundingClientRect();return{top:D.top,left:D.left,scaleX:D.width/this.content.clientWidth||1,scaleY:D.height/this.content.clientHeight||1}}_buildDOM(){if(this.bufferCanvas=new r.SceneCanvas({width:this.width(),height:this.height()}),this.bufferHitCanvas=new r.HitCanvas({pixelRatio:1,width:this.width(),height:this.height()}),!o.Konva.isBrowser)return;const D=this.container();if(!D)throw"Stage has no container. A container is required.";D.innerHTML="",this.content=document.createElement("div"),this.content.style.position="relative",this.content.style.userSelect="none",this.content.className="konvajs-content",this.content.setAttribute("role","presentation"),D.appendChild(this.content),this._resizeDOM()}cache(){return e.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."),this}clearCache(){return this}batchDraw(){return this.getChildren().forEach(function(D){D.batchDraw()}),this}}t.Stage=_e,_e.prototype.nodeType=d,(0,a._registerNode)(_e),i.Factory.addGetterSetter(_e,"container"),o.Konva.isBrowser&&document.addEventListener("visibilitychange",()=>{t.stages.forEach(he=>{he.batchDraw()})})}($a)),$a}var $r={},Ba={},jh;function At(){return jh||(jh=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Shape=t.shapes=void 0;const e=$e(),i=pt(),n=Be(),o=vt(),r=ze(),s=$e(),a=P0(),l="hasShadow",d="shadowRGBA",h="patternImage",c="linearGradient",g="radialGradient";let f;function u(){return f||(f=i.Util.createCanvasElement().getContext("2d"),f)}t.shapes={};function _(M){const C=this.attrs.fillRule;C?M.fill(C):M.fill()}function w(M){M.stroke()}function m(M){const C=this.attrs.fillRule;C?M.fill(C):M.fill()}function p(M){M.stroke()}function v(){this._clearCache(l)}function b(){this._clearCache(d)}function S(){this._clearCache(h)}function T(){this._clearCache(c)}function E(){this._clearCache(g)}class A extends o.Node{constructor(C){super(C);let P;for(;P=i.Util.getRandomColor(),!(P&&!(P in t.shapes)););this.colorKey=P,t.shapes[P]=this}getContext(){return i.Util.warn("shape.getContext() method is deprecated. Please do not use it."),this.getLayer().getContext()}getCanvas(){return i.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."),this.getLayer().getCanvas()}getSceneFunc(){return this.attrs.sceneFunc||this._sceneFunc}getHitFunc(){return this.attrs.hitFunc||this._hitFunc}hasShadow(){return this._getCache(l,this._hasShadow)}_hasShadow(){return this.shadowEnabled()&&this.shadowOpacity()!==0&&!!(this.shadowColor()||this.shadowBlur()||this.shadowOffsetX()||this.shadowOffsetY())}_getFillPattern(){return this._getCache(h,this.__getFillPattern)}__getFillPattern(){if(this.fillPatternImage()){const P=u().createPattern(this.fillPatternImage(),this.fillPatternRepeat()||"repeat");if(P&&P.setTransform){const z=new i.Transform;z.translate(this.fillPatternX(),this.fillPatternY()),z.rotate(e.Konva.getAngle(this.fillPatternRotation())),z.scale(this.fillPatternScaleX(),this.fillPatternScaleY()),z.translate(-1*this.fillPatternOffsetX(),-1*this.fillPatternOffsetY());const y=z.getMatrix(),k=typeof DOMMatrix>"u"?{a:y[0],b:y[1],c:y[2],d:y[3],e:y[4],f:y[5]}:new DOMMatrix(y);P.setTransform(k)}return P}}_getLinearGradient(){return this._getCache(c,this.__getLinearGradient)}__getLinearGradient(){const C=this.fillLinearGradientColorStops();if(C){const P=u(),z=this.fillLinearGradientStartPoint(),y=this.fillLinearGradientEndPoint(),k=P.createLinearGradient(z.x,z.y,y.x,y.y);for(let R=0;R<C.length;R+=2)k.addColorStop(C[R],C[R+1]);return k}}_getRadialGradient(){return this._getCache(g,this.__getRadialGradient)}__getRadialGradient(){const C=this.fillRadialGradientColorStops();if(C){const P=u(),z=this.fillRadialGradientStartPoint(),y=this.fillRadialGradientEndPoint(),k=P.createRadialGradient(z.x,z.y,this.fillRadialGradientStartRadius(),y.x,y.y,this.fillRadialGradientEndRadius());for(let R=0;R<C.length;R+=2)k.addColorStop(C[R],C[R+1]);return k}}getShadowRGBA(){return this._getCache(d,this._getShadowRGBA)}_getShadowRGBA(){if(!this.hasShadow())return;const C=i.Util.colorToRGBA(this.shadowColor());if(C)return"rgba("+C.r+","+C.g+","+C.b+","+C.a*(this.shadowOpacity()||1)+")"}hasFill(){return this._calculate("hasFill",["fillEnabled","fill","fillPatternImage","fillLinearGradientColorStops","fillRadialGradientColorStops"],()=>this.fillEnabled()&&!!(this.fill()||this.fillPatternImage()||this.fillLinearGradientColorStops()||this.fillRadialGradientColorStops()))}hasStroke(){return this._calculate("hasStroke",["strokeEnabled","strokeWidth","stroke","strokeLinearGradientColorStops"],()=>this.strokeEnabled()&&this.strokeWidth()&&!!(this.stroke()||this.strokeLinearGradientColorStops()))}hasHitStroke(){const C=this.hitStrokeWidth();return C==="auto"?this.hasStroke():this.strokeEnabled()&&!!C}intersects(C){const P=this.getStage();if(!P)return!1;const z=P.bufferHitCanvas;return z.getContext().clear(),this.drawHit(z,void 0,!0),z.context.getImageData(Math.round(C.x),Math.round(C.y),1,1).data[3]>0}destroy(){return o.Node.prototype.destroy.call(this),delete t.shapes[this.colorKey],delete this.colorKey,this}_useBufferCanvas(C){var P;if(!((P=this.attrs.perfectDrawEnabled)!==null&&P!==void 0?P:!0))return!1;const y=C||this.hasFill(),k=this.hasStroke(),R=this.getAbsoluteOpacity()!==1;if(y&&k&&R)return!0;const L=this.hasShadow(),O=this.shadowForStrokeEnabled();return!!(y&&k&&L&&O)}setStrokeHitEnabled(C){i.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."),C?this.hitStrokeWidth("auto"):this.hitStrokeWidth(0)}getStrokeHitEnabled(){return this.hitStrokeWidth()!==0}getSelfRect(){const C=this.size();return{x:this._centroid?-C.width/2:0,y:this._centroid?-C.height/2:0,width:C.width,height:C.height}}getClientRect(C={}){let P=!1,z=this.getParent();for(;z;){if(z.isCached()){P=!0;break}z=z.getParent()}const y=C.skipTransform,k=C.relativeTo||P&&this.getStage()||void 0,R=this.getSelfRect(),O=!C.skipStroke&&this.hasStroke()&&this.strokeWidth()||0,H=R.width+O,W=R.height+O,se=!C.skipShadow&&this.hasShadow(),te=se?this.shadowOffsetX():0,oe=se?this.shadowOffsetY():0,Q=H+Math.abs(te),ce=W+Math.abs(oe),_e=se&&this.shadowBlur()||0,he=Q+_e*2,D=ce+_e*2,V={width:he,height:D,x:-(O/2+_e)+Math.min(te,0)+R.x,y:-(O/2+_e)+Math.min(oe,0)+R.y};return y?V:this._transformedRect(V,k)}drawScene(C,P,z){const y=this.getLayer();let k=C||y.getCanvas(),R=k.getContext(),L=this._getCanvasCache(),O=this.getSceneFunc(),H=this.hasShadow(),W,se;const te=k.isCache,oe=P===this;if(!this.isVisible()&&!oe)return this;if(L){R.save();const ce=this.getAbsoluteTransform(P).getMatrix();return R.transform(ce[0],ce[1],ce[2],ce[3],ce[4],ce[5]),this._drawCachedSceneCanvas(R),R.restore(),this}if(!O)return this;if(R.save(),this._useBufferCanvas()&&!te){W=this.getStage();const ce=z||W.bufferCanvas;se=ce.getContext(),se.clear(),se.save(),se._applyLineJoin(this);var Q=this.getAbsoluteTransform(P).getMatrix();se.transform(Q[0],Q[1],Q[2],Q[3],Q[4],Q[5]),O.call(this,se,this),se.restore();const _e=ce.pixelRatio;H&&R._applyShadow(this),R._applyOpacity(this),R._applyGlobalCompositeOperation(this),R.drawImage(ce._canvas,0,0,ce.width/_e,ce.height/_e)}else{if(R._applyLineJoin(this),!oe){var Q=this.getAbsoluteTransform(P).getMatrix();R.transform(Q[0],Q[1],Q[2],Q[3],Q[4],Q[5]),R._applyOpacity(this),R._applyGlobalCompositeOperation(this)}H&&R._applyShadow(this),O.call(this,R,this)}return R.restore(),this}drawHit(C,P,z=!1){if(!this.shouldDrawHit(P,z))return this;const y=this.getLayer(),k=C||y.hitCanvas,R=k&&k.getContext(),L=this.hitFunc()||this.sceneFunc(),O=this._getCanvasCache(),H=O&&O.hit;if(this.colorKey||i.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"),H){R.save();const se=this.getAbsoluteTransform(P).getMatrix();return R.transform(se[0],se[1],se[2],se[3],se[4],se[5]),this._drawCachedHitCanvas(R),R.restore(),this}if(!L)return this;if(R.save(),R._applyLineJoin(this),!(this===P)){const se=this.getAbsoluteTransform(P).getMatrix();R.transform(se[0],se[1],se[2],se[3],se[4],se[5])}return L.call(this,R,this),R.restore(),this}drawHitFromCache(C=0){const P=this._getCanvasCache(),z=this._getCachedSceneCanvas(),y=P.hit,k=y.getContext(),R=y.getWidth(),L=y.getHeight();k.clear(),k.drawImage(z._canvas,0,0,R,L);try{const O=k.getImageData(0,0,R,L),H=O.data,W=H.length,se=i.Util._hexToRgb(this.colorKey);for(let te=0;te<W;te+=4)H[te+3]>C?(H[te]=se.r,H[te+1]=se.g,H[te+2]=se.b,H[te+3]=255):H[te+3]=0;k.putImageData(O,0,0)}catch(O){i.Util.error("Unable to draw hit graph from cached scene canvas. "+O.message)}return this}hasPointerCapture(C){return a.hasPointerCapture(C,this)}setPointerCapture(C){a.setPointerCapture(C,this)}releaseCapture(C){a.releaseCapture(C,this)}}t.Shape=A,A.prototype._fillFunc=_,A.prototype._strokeFunc=w,A.prototype._fillFuncHit=m,A.prototype._strokeFuncHit=p,A.prototype._centroid=!1,A.prototype.nodeType="Shape",(0,s._registerNode)(A),A.prototype.eventListeners={},A.prototype.on.call(A.prototype,"shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",v),A.prototype.on.call(A.prototype,"shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",b),A.prototype.on.call(A.prototype,"fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva",S),A.prototype.on.call(A.prototype,"fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva",T),A.prototype.on.call(A.prototype,"fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva",E),n.Factory.addGetterSetter(A,"stroke",void 0,(0,r.getStringOrGradientValidator)()),n.Factory.addGetterSetter(A,"strokeWidth",2,(0,r.getNumberValidator)()),n.Factory.addGetterSetter(A,"fillAfterStrokeEnabled",!1),n.Factory.addGetterSetter(A,"hitStrokeWidth","auto",(0,r.getNumberOrAutoValidator)()),n.Factory.addGetterSetter(A,"strokeHitEnabled",!0,(0,r.getBooleanValidator)()),n.Factory.addGetterSetter(A,"perfectDrawEnabled",!0,(0,r.getBooleanValidator)()),n.Factory.addGetterSetter(A,"shadowForStrokeEnabled",!0,(0,r.getBooleanValidator)()),n.Factory.addGetterSetter(A,"lineJoin"),n.Factory.addGetterSetter(A,"lineCap"),n.Factory.addGetterSetter(A,"sceneFunc"),n.Factory.addGetterSetter(A,"hitFunc"),n.Factory.addGetterSetter(A,"dash"),n.Factory.addGetterSetter(A,"dashOffset",0,(0,r.getNumberValidator)()),n.Factory.addGetterSetter(A,"shadowColor",void 0,(0,r.getStringValidator)()),n.Factory.addGetterSetter(A,"shadowBlur",0,(0,r.getNumberValidator)()),n.Factory.addGetterSetter(A,"shadowOpacity",1,(0,r.getNumberValidator)()),n.Factory.addComponentsGetterSetter(A,"shadowOffset",["x","y"]),n.Factory.addGetterSetter(A,"shadowOffsetX",0,(0,r.getNumberValidator)()),n.Factory.addGetterSetter(A,"shadowOffsetY",0,(0,r.getNumberValidator)()),n.Factory.addGetterSetter(A,"fillPatternImage"),n.Factory.addGetterSetter(A,"fill",void 0,(0,r.getStringOrGradientValidator)()),n.Factory.addGetterSetter(A,"fillPatternX",0,(0,r.getNumberValidator)()),n.Factory.addGetterSetter(A,"fillPatternY",0,(0,r.getNumberValidator)()),n.Factory.addGetterSetter(A,"fillLinearGradientColorStops"),n.Factory.addGetterSetter(A,"strokeLinearGradientColorStops"),n.Factory.addGetterSetter(A,"fillRadialGradientStartRadius",0),n.Factory.addGetterSetter(A,"fillRadialGradientEndRadius",0),n.Factory.addGetterSetter(A,"fillRadialGradientColorStops"),n.Factory.addGetterSetter(A,"fillPatternRepeat","repeat"),n.Factory.addGetterSetter(A,"fillEnabled",!0),n.Factory.addGetterSetter(A,"strokeEnabled",!0),n.Factory.addGetterSetter(A,"shadowEnabled",!0),n.Factory.addGetterSetter(A,"dashEnabled",!0),n.Factory.addGetterSetter(A,"strokeScaleEnabled",!0),n.Factory.addGetterSetter(A,"fillPriority","color"),n.Factory.addComponentsGetterSetter(A,"fillPatternOffset",["x","y"]),n.Factory.addGetterSetter(A,"fillPatternOffsetX",0,(0,r.getNumberValidator)()),n.Factory.addGetterSetter(A,"fillPatternOffsetY",0,(0,r.getNumberValidator)()),n.Factory.addComponentsGetterSetter(A,"fillPatternScale",["x","y"]),n.Factory.addGetterSetter(A,"fillPatternScaleX",1,(0,r.getNumberValidator)()),n.Factory.addGetterSetter(A,"fillPatternScaleY",1,(0,r.getNumberValidator)()),n.Factory.addComponentsGetterSetter(A,"fillLinearGradientStartPoint",["x","y"]),n.Factory.addComponentsGetterSetter(A,"strokeLinearGradientStartPoint",["x","y"]),n.Factory.addGetterSetter(A,"fillLinearGradientStartPointX",0),n.Factory.addGetterSetter(A,"strokeLinearGradientStartPointX",0),n.Factory.addGetterSetter(A,"fillLinearGradientStartPointY",0),n.Factory.addGetterSetter(A,"strokeLinearGradientStartPointY",0),n.Factory.addComponentsGetterSetter(A,"fillLinearGradientEndPoint",["x","y"]),n.Factory.addComponentsGetterSetter(A,"strokeLinearGradientEndPoint",["x","y"]),n.Factory.addGetterSetter(A,"fillLinearGradientEndPointX",0),n.Factory.addGetterSetter(A,"strokeLinearGradientEndPointX",0),n.Factory.addGetterSetter(A,"fillLinearGradientEndPointY",0),n.Factory.addGetterSetter(A,"strokeLinearGradientEndPointY",0),n.Factory.addComponentsGetterSetter(A,"fillRadialGradientStartPoint",["x","y"]),n.Factory.addGetterSetter(A,"fillRadialGradientStartPointX",0),n.Factory.addGetterSetter(A,"fillRadialGradientStartPointY",0),n.Factory.addComponentsGetterSetter(A,"fillRadialGradientEndPoint",["x","y"]),n.Factory.addGetterSetter(A,"fillRadialGradientEndPointX",0),n.Factory.addGetterSetter(A,"fillRadialGradientEndPointY",0),n.Factory.addGetterSetter(A,"fillPatternRotation",0),n.Factory.addGetterSetter(A,"fillRule",void 0,(0,r.getStringValidator)()),n.Factory.backCompat(A,{dashArray:"dash",getDashArray:"getDash",setDashArray:"getDash",drawFunc:"sceneFunc",getDrawFunc:"getSceneFunc",setDrawFunc:"setSceneFunc",drawHitFunc:"hitFunc",getDrawHitFunc:"getHitFunc",setDrawHitFunc:"setHitFunc"})}(Ba)),Ba}var qh;function I0(){if(qh)return $r;qh=1,Object.defineProperty($r,"__esModule",{value:!0}),$r.Layer=void 0;const t=pt(),e=ca(),i=vt(),n=Be(),o=la(),r=ze(),s=At(),a=$e(),l="#",d="beforeDraw",h="draw",c=[{x:0,y:0},{x:-1,y:-1},{x:1,y:-1},{x:1,y:1},{x:-1,y:1}],g=c.length;let f=class extends e.Container{constructor(_){super(_),this.canvas=new o.SceneCanvas,this.hitCanvas=new o.HitCanvas({pixelRatio:1}),this._waitingForDraw=!1,this.on("visibleChange.konva",this._checkVisibility),this._checkVisibility(),this.on("imageSmoothingEnabledChange.konva",this._setSmoothEnabled),this._setSmoothEnabled()}createPNGStream(){return this.canvas._canvas.createPNGStream()}getCanvas(){return this.canvas}getNativeCanvasElement(){return this.canvas._canvas}getHitCanvas(){return this.hitCanvas}getContext(){return this.getCanvas().getContext()}clear(_){return this.getContext().clear(_),this.getHitCanvas().getContext().clear(_),this}setZIndex(_){super.setZIndex(_);const w=this.getStage();return w&&w.content&&(w.content.removeChild(this.getNativeCanvasElement()),_<w.children.length-1?w.content.insertBefore(this.getNativeCanvasElement(),w.children[_+1].getCanvas()._canvas):w.content.appendChild(this.getNativeCanvasElement())),this}moveToTop(){i.Node.prototype.moveToTop.call(this);const _=this.getStage();return _&&_.content&&(_.content.removeChild(this.getNativeCanvasElement()),_.content.appendChild(this.getNativeCanvasElement())),!0}moveUp(){if(!i.Node.prototype.moveUp.call(this))return!1;const w=this.getStage();return!w||!w.content?!1:(w.content.removeChild(this.getNativeCanvasElement()),this.index<w.children.length-1?w.content.insertBefore(this.getNativeCanvasElement(),w.children[this.index+1].getCanvas()._canvas):w.content.appendChild(this.getNativeCanvasElement()),!0)}moveDown(){if(i.Node.prototype.moveDown.call(this)){const _=this.getStage();if(_){const w=_.children;_.content&&(_.content.removeChild(this.getNativeCanvasElement()),_.content.insertBefore(this.getNativeCanvasElement(),w[this.index+1].getCanvas()._canvas))}return!0}return!1}moveToBottom(){if(i.Node.prototype.moveToBottom.call(this)){const _=this.getStage();if(_){const w=_.children;_.content&&(_.content.removeChild(this.getNativeCanvasElement()),_.content.insertBefore(this.getNativeCanvasElement(),w[1].getCanvas()._canvas))}return!0}return!1}getLayer(){return this}remove(){const _=this.getNativeCanvasElement();return i.Node.prototype.remove.call(this),_&&_.parentNode&&t.Util._isInDocument(_)&&_.parentNode.removeChild(_),this}getStage(){return this.parent}setSize({width:_,height:w}){return this.canvas.setSize(_,w),this.hitCanvas.setSize(_,w),this._setSmoothEnabled(),this}_validateAdd(_){const w=_.getType();w!=="Group"&&w!=="Shape"&&t.Util.throw("You may only add groups and shapes to a layer.")}_toKonvaCanvas(_){return _=_||{},_.width=_.width||this.getWidth(),_.height=_.height||this.getHeight(),_.x=_.x!==void 0?_.x:this.x(),_.y=_.y!==void 0?_.y:this.y(),i.Node.prototype._toKonvaCanvas.call(this,_)}_checkVisibility(){this.visible()?this.canvas._canvas.style.display="block":this.canvas._canvas.style.display="none"}_setSmoothEnabled(){this.getContext()._context.imageSmoothingEnabled=this.imageSmoothingEnabled()}getWidth(){if(this.parent)return this.parent.width()}setWidth(){t.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.')}getHeight(){if(this.parent)return this.parent.height()}setHeight(){t.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.')}batchDraw(){return this._waitingForDraw||(this._waitingForDraw=!0,t.Util.requestAnimFrame(()=>{this.draw(),this._waitingForDraw=!1})),this}getIntersection(_){if(!this.isListening()||!this.isVisible())return null;let w=1,m=!1;for(;;){for(let p=0;p<g;p++){const v=c[p],b=this._getIntersection({x:_.x+v.x*w,y:_.y+v.y*w}),S=b.shape;if(S)return S;if(m=!!b.antialiased,!b.antialiased)break}if(m)w+=1;else return null}}_getIntersection(_){const w=this.hitCanvas.pixelRatio,m=this.hitCanvas.context.getImageData(Math.round(_.x*w),Math.round(_.y*w),1,1).data,p=m[3];if(p===255){const v=t.Util._rgbToHex(m[0],m[1],m[2]),b=s.shapes[l+v];return b?{shape:b}:{antialiased:!0}}else if(p>0)return{antialiased:!0};return{}}drawScene(_,w){const m=this.getLayer(),p=_||m&&m.getCanvas();return this._fire(d,{node:this}),this.clearBeforeDraw()&&p.getContext().clear(),e.Container.prototype.drawScene.call(this,p,w),this._fire(h,{node:this}),this}drawHit(_,w){const m=this.getLayer(),p=_||m&&m.hitCanvas;return m&&m.clearBeforeDraw()&&m.getHitCanvas().getContext().clear(),e.Container.prototype.drawHit.call(this,p,w),this}enableHitGraph(){return this.hitGraphEnabled(!0),this}disableHitGraph(){return this.hitGraphEnabled(!1),this}setHitGraphEnabled(_){t.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."),this.listening(_)}getHitGraphEnabled(_){return t.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."),this.listening()}toggleHitCanvas(){if(!this.parent||!this.parent.content)return;const _=this.parent;!!this.hitCanvas._canvas.parentNode?_.content.removeChild(this.hitCanvas._canvas):_.content.appendChild(this.hitCanvas._canvas)}destroy(){return t.Util.releaseCanvas(this.getNativeCanvasElement(),this.getHitCanvas()._canvas),super.destroy()}};return $r.Layer=f,f.prototype.nodeType="Layer",(0,a._registerNode)(f),n.Factory.addGetterSetter(f,"imageSmoothingEnabled",!0),n.Factory.addGetterSetter(f,"clearBeforeDraw",!0),n.Factory.addGetterSetter(f,"hitGraphEnabled",!0,(0,r.getBooleanValidator)()),$r}var Br={},Wh;function S_(){if(Wh)return Br;Wh=1,Object.defineProperty(Br,"__esModule",{value:!0}),Br.FastLayer=void 0;const t=pt(),e=I0(),i=$e();let n=class extends e.Layer{constructor(r){super(r),this.listening(!1),t.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.')}};return Br.FastLayer=n,n.prototype.nodeType="FastLayer",(0,i._registerNode)(n),Br}var zr={},Kh;function pc(){if(Kh)return zr;Kh=1,Object.defineProperty(zr,"__esModule",{value:!0}),zr.Group=void 0;const t=pt(),e=ca(),i=$e();let n=class extends e.Container{_validateAdd(r){const s=r.getType();s!=="Group"&&s!=="Shape"&&t.Util.throw("You may only add groups and shapes to groups.")}};return zr.Group=n,n.prototype.nodeType="Group",(0,i._registerNode)(n),zr}var Nr={},Yh;function gc(){if(Yh)return Nr;Yh=1,Object.defineProperty(Nr,"__esModule",{value:!0}),Nr.Animation=void 0;const t=$e(),e=pt(),i=function(){return t.glob.performance&&t.glob.performance.now?function(){return t.glob.performance.now()}:function(){return new Date().getTime()}}();let n=class nr{constructor(r,s){this.id=nr.animIdCounter++,this.frame={time:0,timeDiff:0,lastTime:i(),frameRate:0},this.func=r,this.setLayers(s)}setLayers(r){let s=[];return r&&(s=Array.isArray(r)?r:[r]),this.layers=s,this}getLayers(){return this.layers}addLayer(r){const s=this.layers,a=s.length;for(let l=0;l<a;l++)if(s[l]._id===r._id)return!1;return this.layers.push(r),!0}isRunning(){const s=nr.animations,a=s.length;for(let l=0;l<a;l++)if(s[l].id===this.id)return!0;return!1}start(){return this.stop(),this.frame.timeDiff=0,this.frame.lastTime=i(),nr._addAnimation(this),this}stop(){return nr._removeAnimation(this),this}_updateFrameObject(r){this.frame.timeDiff=r-this.frame.lastTime,this.frame.lastTime=r,this.frame.time+=this.frame.timeDiff,this.frame.frameRate=1e3/this.frame.timeDiff}static _addAnimation(r){this.animations.push(r),this._handleAnimation()}static _removeAnimation(r){const s=r.id,a=this.animations,l=a.length;for(let d=0;d<l;d++)if(a[d].id===s){this.animations.splice(d,1);break}}static _runFrames(){const r={},s=this.animations;for(let a=0;a<s.length;a++){const l=s[a],d=l.layers,h=l.func;l._updateFrameObject(i());const c=d.length;let g;if(h?g=h.call(l,l.frame)!==!1:g=!0,!!g)for(let f=0;f<c;f++){const u=d[f];u._id!==void 0&&(r[u._id]=u)}}for(const a in r)r.hasOwnProperty(a)&&r[a].batchDraw()}static _animationLoop(){const r=nr;r.animations.length?(r._runFrames(),e.Util.requestAnimFrame(r._animationLoop)):r.animRunning=!1}static _handleAnimation(){this.animRunning||(this.animRunning=!0,e.Util.requestAnimFrame(this._animationLoop))}};return Nr.Animation=n,n.animations=[],n.animIdCounter=0,n.animRunning=!1,Nr}var za={},Xh;function C_(){return Xh||(Xh=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Easings=t.Tween=void 0;const e=pt(),i=gc(),n=vt(),o=$e(),r={node:1,duration:1,easing:1,onFinish:1,yoyo:1},s=1,a=2,l=3,d=["fill","stroke","shadowColor"];let h=0;class c{constructor(u,_,w,m,p,v,b){this.prop=u,this.propFunc=_,this.begin=m,this._pos=m,this.duration=v,this._change=0,this.prevPos=0,this.yoyo=b,this._time=0,this._position=0,this._startTime=0,this._finish=0,this.func=w,this._change=p-this.begin,this.pause()}fire(u){const _=this[u];_&&_()}setTime(u){u>this.duration?this.yoyo?(this._time=this.duration,this.reverse()):this.finish():u<0?this.yoyo?(this._time=0,this.play()):this.reset():(this._time=u,this.update())}getTime(){return this._time}setPosition(u){this.prevPos=this._pos,this.propFunc(u),this._pos=u}getPosition(u){return u===void 0&&(u=this._time),this.func(u,this.begin,this._change,this.duration)}play(){this.state=a,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onPlay")}reverse(){this.state=l,this._time=this.duration-this._time,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onReverse")}seek(u){this.pause(),this._time=u,this.update(),this.fire("onSeek")}reset(){this.pause(),this._time=0,this.update(),this.fire("onReset")}finish(){this.pause(),this._time=this.duration,this.update(),this.fire("onFinish")}update(){this.setPosition(this.getPosition(this._time)),this.fire("onUpdate")}onEnterFrame(){const u=this.getTimer()-this._startTime;this.state===a?this.setTime(u):this.state===l&&this.setTime(this.duration-u)}pause(){this.state=s,this.fire("onPause")}getTimer(){return new Date().getTime()}}class g{constructor(u){const _=this,w=u.node,m=w._id,p=u.easing||t.Easings.Linear,v=!!u.yoyo;let b,S;typeof u.duration>"u"?b=.3:u.duration===0?b=.001:b=u.duration,this.node=w,this._id=h++;const T=w.getLayer()||(w instanceof o.Konva.Stage?w.getLayers():null);T||e.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."),this.anim=new i.Animation(function(){_.tween.onEnterFrame()},T),this.tween=new c(S,function(E){_._tweenFunc(E)},p,0,1,b*1e3,v),this._addListeners(),g.attrs[m]||(g.attrs[m]={}),g.attrs[m][this._id]||(g.attrs[m][this._id]={}),g.tweens[m]||(g.tweens[m]={});for(S in u)r[S]===void 0&&this._addAttr(S,u[S]);this.reset(),this.onFinish=u.onFinish,this.onReset=u.onReset,this.onUpdate=u.onUpdate}_addAttr(u,_){const w=this.node,m=w._id;let p,v,b,S,T;const E=g.tweens[m][u];E&&delete g.attrs[m][E][u];let A=w.getAttr(u);if(e.Util._isArray(_))if(p=[],v=Math.max(_.length,A.length),u==="points"&&_.length!==A.length&&(_.length>A.length?(S=A,A=e.Util._prepareArrayForTween(A,_,w.closed())):(b=_,_=e.Util._prepareArrayForTween(_,A,w.closed()))),u.indexOf("fill")===0)for(let M=0;M<v;M++)if(M%2===0)p.push(_[M]-A[M]);else{const C=e.Util.colorToRGBA(A[M]);T=e.Util.colorToRGBA(_[M]),A[M]=C,p.push({r:T.r-C.r,g:T.g-C.g,b:T.b-C.b,a:T.a-C.a})}else for(let M=0;M<v;M++)p.push(_[M]-A[M]);else d.indexOf(u)!==-1?(A=e.Util.colorToRGBA(A),T=e.Util.colorToRGBA(_),p={r:T.r-A.r,g:T.g-A.g,b:T.b-A.b,a:T.a-A.a}):p=_-A;g.attrs[m][this._id][u]={start:A,diff:p,end:_,trueEnd:b,trueStart:S},g.tweens[m][u]=this._id}_tweenFunc(u){const _=this.node,w=g.attrs[_._id][this._id];let m,p,v,b,S,T,E,A;for(m in w){if(p=w[m],v=p.start,b=p.diff,A=p.end,e.Util._isArray(v))if(S=[],E=Math.max(v.length,A.length),m.indexOf("fill")===0)for(T=0;T<E;T++)T%2===0?S.push((v[T]||0)+b[T]*u):S.push("rgba("+Math.round(v[T].r+b[T].r*u)+","+Math.round(v[T].g+b[T].g*u)+","+Math.round(v[T].b+b[T].b*u)+","+(v[T].a+b[T].a*u)+")");else for(T=0;T<E;T++)S.push((v[T]||0)+b[T]*u);else d.indexOf(m)!==-1?S="rgba("+Math.round(v.r+b.r*u)+","+Math.round(v.g+b.g*u)+","+Math.round(v.b+b.b*u)+","+(v.a+b.a*u)+")":S=v+b*u;_.setAttr(m,S)}}_addListeners(){this.tween.onPlay=()=>{this.anim.start()},this.tween.onReverse=()=>{this.anim.start()},this.tween.onPause=()=>{this.anim.stop()},this.tween.onFinish=()=>{const u=this.node,_=g.attrs[u._id][this._id];_.points&&_.points.trueEnd&&u.setAttr("points",_.points.trueEnd),this.onFinish&&this.onFinish.call(this)},this.tween.onReset=()=>{const u=this.node,_=g.attrs[u._id][this._id];_.points&&_.points.trueStart&&u.points(_.points.trueStart),this.onReset&&this.onReset()},this.tween.onUpdate=()=>{this.onUpdate&&this.onUpdate.call(this)}}play(){return this.tween.play(),this}reverse(){return this.tween.reverse(),this}reset(){return this.tween.reset(),this}seek(u){return this.tween.seek(u*1e3),this}pause(){return this.tween.pause(),this}finish(){return this.tween.finish(),this}destroy(){const u=this.node._id,_=this._id,w=g.tweens[u];this.pause();for(const m in w)delete g.tweens[u][m];delete g.attrs[u][_]}}t.Tween=g,g.attrs={},g.tweens={},n.Node.prototype.to=function(f){const u=f.onFinish;f.node=this,f.onFinish=function(){this.destroy(),u&&u()},new g(f).play()},t.Easings={BackEaseIn(f,u,_,w){return _*(f/=w)*f*((1.70158+1)*f-1.70158)+u},BackEaseOut(f,u,_,w){return _*((f=f/w-1)*f*((1.70158+1)*f+1.70158)+1)+u},BackEaseInOut(f,u,_,w){let m=1.70158;return(f/=w/2)<1?_/2*(f*f*(((m*=1.525)+1)*f-m))+u:_/2*((f-=2)*f*(((m*=1.525)+1)*f+m)+2)+u},ElasticEaseIn(f,u,_,w,m,p){let v=0;return f===0?u:(f/=w)===1?u+_:(p||(p=w*.3),!m||m<Math.abs(_)?(m=_,v=p/4):v=p/(2*Math.PI)*Math.asin(_/m),-(m*Math.pow(2,10*(f-=1))*Math.sin((f*w-v)*(2*Math.PI)/p))+u)},ElasticEaseOut(f,u,_,w,m,p){let v=0;return f===0?u:(f/=w)===1?u+_:(p||(p=w*.3),!m||m<Math.abs(_)?(m=_,v=p/4):v=p/(2*Math.PI)*Math.asin(_/m),m*Math.pow(2,-10*f)*Math.sin((f*w-v)*(2*Math.PI)/p)+_+u)},ElasticEaseInOut(f,u,_,w,m,p){let v=0;return f===0?u:(f/=w/2)===2?u+_:(p||(p=w*(.3*1.5)),!m||m<Math.abs(_)?(m=_,v=p/4):v=p/(2*Math.PI)*Math.asin(_/m),f<1?-.5*(m*Math.pow(2,10*(f-=1))*Math.sin((f*w-v)*(2*Math.PI)/p))+u:m*Math.pow(2,-10*(f-=1))*Math.sin((f*w-v)*(2*Math.PI)/p)*.5+_+u)},BounceEaseOut(f,u,_,w){return(f/=w)<1/2.75?_*(7.5625*f*f)+u:f<2/2.75?_*(7.5625*(f-=1.5/2.75)*f+.75)+u:f<2.5/2.75?_*(7.5625*(f-=2.25/2.75)*f+.9375)+u:_*(7.5625*(f-=2.625/2.75)*f+.984375)+u},BounceEaseIn(f,u,_,w){return _-t.Easings.BounceEaseOut(w-f,0,_,w)+u},BounceEaseInOut(f,u,_,w){return f<w/2?t.Easings.BounceEaseIn(f*2,0,_,w)*.5+u:t.Easings.BounceEaseOut(f*2-w,0,_,w)*.5+_*.5+u},EaseIn(f,u,_,w){return _*(f/=w)*f+u},EaseOut(f,u,_,w){return-_*(f/=w)*(f-2)+u},EaseInOut(f,u,_,w){return(f/=w/2)<1?_/2*f*f+u:-_/2*(--f*(f-2)-1)+u},StrongEaseIn(f,u,_,w){return _*(f/=w)*f*f*f*f+u},StrongEaseOut(f,u,_,w){return _*((f=f/w-1)*f*f*f*f+1)+u},StrongEaseInOut(f,u,_,w){return(f/=w/2)<1?_/2*f*f*f*f*f+u:_/2*((f-=2)*f*f*f*f+2)+u},Linear(f,u,_,w){return _*f/w+u}}}(za)),za}var Zh;function k_(){return Zh||(Zh=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Konva=void 0;const e=$e(),i=pt(),n=vt(),o=ca(),r=w_(),s=I0(),a=S_(),l=pc(),d=fc(),h=At(),c=gc(),g=C_(),f=T0(),u=la();t.Konva=i.Util._assign(e.Konva,{Util:i.Util,Transform:i.Transform,Node:n.Node,Container:o.Container,Stage:r.Stage,stages:r.stages,Layer:s.Layer,FastLayer:a.FastLayer,Group:l.Group,DD:d.DD,Shape:h.Shape,shapes:h.shapes,Animation:c.Animation,Tween:g.Tween,Easings:g.Easings,Context:f.Context,Canvas:u.Canvas}),t.default=t.Konva}(Oa)),Oa}var Vr={},Qh;function E_(){if(Qh)return Vr;Qh=1,Object.defineProperty(Vr,"__esModule",{value:!0}),Vr.Arc=void 0;const t=Be(),e=At(),i=$e(),n=ze(),o=$e();let r=class extends e.Shape{_sceneFunc(a){const l=i.Konva.getAngle(this.angle()),d=this.clockwise();a.beginPath(),a.arc(0,0,this.outerRadius(),0,l,d),a.arc(0,0,this.innerRadius(),l,0,!d),a.closePath(),a.fillStrokeShape(this)}getWidth(){return this.outerRadius()*2}getHeight(){return this.outerRadius()*2}setWidth(a){this.outerRadius(a/2)}setHeight(a){this.outerRadius(a/2)}getSelfRect(){const a=this.innerRadius(),l=this.outerRadius(),d=this.clockwise(),h=i.Konva.getAngle(d?360-this.angle():this.angle()),c=Math.cos(Math.min(h,Math.PI)),g=1,f=Math.sin(Math.min(Math.max(Math.PI,h),3*Math.PI/2)),u=Math.sin(Math.min(h,Math.PI/2)),_=c*(c>0?a:l),w=g*l,m=f*(f>0?a:l),p=u*(u>0?l:a);return{x:_,y:d?-1*p:m,width:w-_,height:p-m}}};return Vr.Arc=r,r.prototype._centroid=!0,r.prototype.className="Arc",r.prototype._attrsAffectingSize=["innerRadius","outerRadius"],(0,o._registerNode)(r),t.Factory.addGetterSetter(r,"innerRadius",0,(0,n.getNumberValidator)()),t.Factory.addGetterSetter(r,"outerRadius",0,(0,n.getNumberValidator)()),t.Factory.addGetterSetter(r,"angle",0,(0,n.getNumberValidator)()),t.Factory.addGetterSetter(r,"clockwise",!1,(0,n.getBooleanValidator)()),Vr}var Hr={},Ur={},Jh;function O0(){if(Jh)return Ur;Jh=1,Object.defineProperty(Ur,"__esModule",{value:!0}),Ur.Line=void 0;const t=Be(),e=$e(),i=At(),n=ze();function o(a,l,d,h,c,g,f){const u=Math.sqrt(Math.pow(d-a,2)+Math.pow(h-l,2)),_=Math.sqrt(Math.pow(c-d,2)+Math.pow(g-h,2)),w=f*u/(u+_),m=f*_/(u+_),p=d-w*(c-a),v=h-w*(g-l),b=d+m*(c-a),S=h+m*(g-l);return[p,v,b,S]}function r(a,l){const d=a.length,h=[];for(let c=2;c<d-2;c+=2){const g=o(a[c-2],a[c-1],a[c],a[c+1],a[c+2],a[c+3],l);isNaN(g[0])||(h.push(g[0]),h.push(g[1]),h.push(a[c]),h.push(a[c+1]),h.push(g[2]),h.push(g[3]))}return h}let s=class extends i.Shape{constructor(l){super(l),this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva",function(){this._clearCache("tensionPoints")})}_sceneFunc(l){let d=this.points(),h=d.length,c=this.tension(),g=this.closed(),f=this.bezier(),u,_,w;if(h){if(l.beginPath(),l.moveTo(d[0],d[1]),c!==0&&h>4){for(u=this.getTensionPoints(),_=u.length,w=g?0:4,g||l.quadraticCurveTo(u[0],u[1],u[2],u[3]);w<_-2;)l.bezierCurveTo(u[w++],u[w++],u[w++],u[w++],u[w++],u[w++]);g||l.quadraticCurveTo(u[_-2],u[_-1],d[h-2],d[h-1])}else if(f)for(w=2;w<h;)l.bezierCurveTo(d[w++],d[w++],d[w++],d[w++],d[w++],d[w++]);else for(w=2;w<h;w+=2)l.lineTo(d[w],d[w+1]);g?(l.closePath(),l.fillStrokeShape(this)):l.strokeShape(this)}}getTensionPoints(){return this._getCache("tensionPoints",this._getTensionPoints)}_getTensionPoints(){return this.closed()?this._getTensionPointsClosed():r(this.points(),this.tension())}_getTensionPointsClosed(){const l=this.points(),d=l.length,h=this.tension(),c=o(l[d-2],l[d-1],l[0],l[1],l[2],l[3],h),g=o(l[d-4],l[d-3],l[d-2],l[d-1],l[0],l[1],h),f=r(l,h);return[c[2],c[3]].concat(f).concat([g[0],g[1],l[d-2],l[d-1],g[2],g[3],c[0],c[1],l[0],l[1]])}getWidth(){return this.getSelfRect().width}getHeight(){return this.getSelfRect().height}getSelfRect(){let l=this.points();if(l.length<4)return{x:l[0]||0,y:l[1]||0,width:0,height:0};this.tension()!==0?l=[l[0],l[1],...this._getTensionPoints(),l[l.length-2],l[l.length-1]]:l=this.points();let d=l[0],h=l[0],c=l[1],g=l[1],f,u;for(let _=0;_<l.length/2;_++)f=l[_*2],u=l[_*2+1],d=Math.min(d,f),h=Math.max(h,f),c=Math.min(c,u),g=Math.max(g,u);return{x:d,y:c,width:h-d,height:g-c}}};return Ur.Line=s,s.prototype.className="Line",s.prototype._attrsAffectingSize=["points","bezier","tension"],(0,e._registerNode)(s),t.Factory.addGetterSetter(s,"closed",!1),t.Factory.addGetterSetter(s,"bezier",!1),t.Factory.addGetterSetter(s,"tension",0,(0,n.getNumberValidator)()),t.Factory.addGetterSetter(s,"points",[],(0,n.getNumberArrayValidator)()),Ur}var Gr={},Na={},ed;function R_(){return ed||(ed=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.t2length=t.getQuadraticArcLength=t.getCubicArcLength=t.binomialCoefficients=t.cValues=t.tValues=void 0,t.tValues=[[],[],[-.5773502691896257,.5773502691896257],[0,-.7745966692414834,.7745966692414834],[-.33998104358485626,.33998104358485626,-.8611363115940526,.8611363115940526],[0,-.5384693101056831,.5384693101056831,-.906179845938664,.906179845938664],[.6612093864662645,-.6612093864662645,-.2386191860831969,.2386191860831969,-.932469514203152,.932469514203152],[0,.4058451513773972,-.4058451513773972,-.7415311855993945,.7415311855993945,-.9491079123427585,.9491079123427585],[-.1834346424956498,.1834346424956498,-.525532409916329,.525532409916329,-.7966664774136267,.7966664774136267,-.9602898564975363,.9602898564975363],[0,-.8360311073266358,.8360311073266358,-.9681602395076261,.9681602395076261,-.3242534234038089,.3242534234038089,-.6133714327005904,.6133714327005904],[-.14887433898163122,.14887433898163122,-.4333953941292472,.4333953941292472,-.6794095682990244,.6794095682990244,-.8650633666889845,.8650633666889845,-.9739065285171717,.9739065285171717],[0,-.26954315595234496,.26954315595234496,-.5190961292068118,.5190961292068118,-.7301520055740494,.7301520055740494,-.8870625997680953,.8870625997680953,-.978228658146057,.978228658146057],[-.1252334085114689,.1252334085114689,-.3678314989981802,.3678314989981802,-.5873179542866175,.5873179542866175,-.7699026741943047,.7699026741943047,-.9041172563704749,.9041172563704749,-.9815606342467192,.9815606342467192],[0,-.2304583159551348,.2304583159551348,-.44849275103644687,.44849275103644687,-.6423493394403402,.6423493394403402,-.8015780907333099,.8015780907333099,-.9175983992229779,.9175983992229779,-.9841830547185881,.9841830547185881],[-.10805494870734367,.10805494870734367,-.31911236892788974,.31911236892788974,-.5152486363581541,.5152486363581541,-.6872929048116855,.6872929048116855,-.827201315069765,.827201315069765,-.9284348836635735,.9284348836635735,-.9862838086968123,.9862838086968123],[0,-.20119409399743451,.20119409399743451,-.3941513470775634,.3941513470775634,-.5709721726085388,.5709721726085388,-.7244177313601701,.7244177313601701,-.8482065834104272,.8482065834104272,-.937273392400706,.937273392400706,-.9879925180204854,.9879925180204854],[-.09501250983763744,.09501250983763744,-.2816035507792589,.2816035507792589,-.45801677765722737,.45801677765722737,-.6178762444026438,.6178762444026438,-.755404408355003,.755404408355003,-.8656312023878318,.8656312023878318,-.9445750230732326,.9445750230732326,-.9894009349916499,.9894009349916499],[0,-.17848418149584785,.17848418149584785,-.3512317634538763,.3512317634538763,-.5126905370864769,.5126905370864769,-.6576711592166907,.6576711592166907,-.7815140038968014,.7815140038968014,-.8802391537269859,.8802391537269859,-.9506755217687678,.9506755217687678,-.9905754753144174,.9905754753144174],[-.0847750130417353,.0847750130417353,-.2518862256915055,.2518862256915055,-.41175116146284263,.41175116146284263,-.5597708310739475,.5597708310739475,-.6916870430603532,.6916870430603532,-.8037049589725231,.8037049589725231,-.8926024664975557,.8926024664975557,-.9558239495713977,.9558239495713977,-.9915651684209309,.9915651684209309],[0,-.16035864564022537,.16035864564022537,-.31656409996362983,.31656409996362983,-.46457074137596094,.46457074137596094,-.600545304661681,.600545304661681,-.7209661773352294,.7209661773352294,-.8227146565371428,.8227146565371428,-.9031559036148179,.9031559036148179,-.96020815213483,.96020815213483,-.9924068438435844,.9924068438435844],[-.07652652113349734,.07652652113349734,-.22778585114164507,.22778585114164507,-.37370608871541955,.37370608871541955,-.5108670019508271,.5108670019508271,-.636053680726515,.636053680726515,-.7463319064601508,.7463319064601508,-.8391169718222188,.8391169718222188,-.912234428251326,.912234428251326,-.9639719272779138,.9639719272779138,-.9931285991850949,.9931285991850949],[0,-.1455618541608951,.1455618541608951,-.2880213168024011,.2880213168024011,-.4243421202074388,.4243421202074388,-.5516188358872198,.5516188358872198,-.6671388041974123,.6671388041974123,-.7684399634756779,.7684399634756779,-.8533633645833173,.8533633645833173,-.9200993341504008,.9200993341504008,-.9672268385663063,.9672268385663063,-.9937521706203895,.9937521706203895],[-.06973927331972223,.06973927331972223,-.20786042668822127,.20786042668822127,-.34193582089208424,.34193582089208424,-.469355837986757,.469355837986757,-.5876404035069116,.5876404035069116,-.6944872631866827,.6944872631866827,-.7878168059792081,.7878168059792081,-.8658125777203002,.8658125777203002,-.926956772187174,.926956772187174,-.9700604978354287,.9700604978354287,-.9942945854823992,.9942945854823992],[0,-.1332568242984661,.1332568242984661,-.26413568097034495,.26413568097034495,-.3903010380302908,.3903010380302908,-.5095014778460075,.5095014778460075,-.6196098757636461,.6196098757636461,-.7186613631319502,.7186613631319502,-.8048884016188399,.8048884016188399,-.8767523582704416,.8767523582704416,-.9329710868260161,.9329710868260161,-.9725424712181152,.9725424712181152,-.9947693349975522,.9947693349975522],[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213]],t.cValues=[[],[],[1,1],[.8888888888888888,.5555555555555556,.5555555555555556],[.6521451548625461,.6521451548625461,.34785484513745385,.34785484513745385],[.5688888888888889,.47862867049936647,.47862867049936647,.23692688505618908,.23692688505618908],[.3607615730481386,.3607615730481386,.46791393457269104,.46791393457269104,.17132449237917036,.17132449237917036],[.4179591836734694,.3818300505051189,.3818300505051189,.27970539148927664,.27970539148927664,.1294849661688697,.1294849661688697],[.362683783378362,.362683783378362,.31370664587788727,.31370664587788727,.22238103445337448,.22238103445337448,.10122853629037626,.10122853629037626],[.3302393550012598,.1806481606948574,.1806481606948574,.08127438836157441,.08127438836157441,.31234707704000286,.31234707704000286,.26061069640293544,.26061069640293544],[.29552422471475287,.29552422471475287,.26926671930999635,.26926671930999635,.21908636251598204,.21908636251598204,.1494513491505806,.1494513491505806,.06667134430868814,.06667134430868814],[.2729250867779006,.26280454451024665,.26280454451024665,.23319376459199048,.23319376459199048,.18629021092773426,.18629021092773426,.1255803694649046,.1255803694649046,.05566856711617366,.05566856711617366],[.24914704581340277,.24914704581340277,.2334925365383548,.2334925365383548,.20316742672306592,.20316742672306592,.16007832854334622,.16007832854334622,.10693932599531843,.10693932599531843,.04717533638651183,.04717533638651183],[.2325515532308739,.22628318026289723,.22628318026289723,.2078160475368885,.2078160475368885,.17814598076194574,.17814598076194574,.13887351021978725,.13887351021978725,.09212149983772845,.09212149983772845,.04048400476531588,.04048400476531588],[.2152638534631578,.2152638534631578,.2051984637212956,.2051984637212956,.18553839747793782,.18553839747793782,.15720316715819355,.15720316715819355,.12151857068790319,.12151857068790319,.08015808715976021,.08015808715976021,.03511946033175186,.03511946033175186],[.2025782419255613,.19843148532711158,.19843148532711158,.1861610000155622,.1861610000155622,.16626920581699392,.16626920581699392,.13957067792615432,.13957067792615432,.10715922046717194,.10715922046717194,.07036604748810812,.07036604748810812,.03075324199611727,.03075324199611727],[.1894506104550685,.1894506104550685,.18260341504492358,.18260341504492358,.16915651939500254,.16915651939500254,.14959598881657674,.14959598881657674,.12462897125553388,.12462897125553388,.09515851168249279,.09515851168249279,.062253523938647894,.062253523938647894,.027152459411754096,.027152459411754096],[.17944647035620653,.17656270536699264,.17656270536699264,.16800410215645004,.16800410215645004,.15404576107681028,.15404576107681028,.13513636846852548,.13513636846852548,.11188384719340397,.11188384719340397,.08503614831717918,.08503614831717918,.0554595293739872,.0554595293739872,.02414830286854793,.02414830286854793],[.1691423829631436,.1691423829631436,.16427648374583273,.16427648374583273,.15468467512626524,.15468467512626524,.14064291467065065,.14064291467065065,.12255520671147846,.12255520671147846,.10094204410628717,.10094204410628717,.07642573025488905,.07642573025488905,.0497145488949698,.0497145488949698,.02161601352648331,.02161601352648331],[.1610544498487837,.15896884339395434,.15896884339395434,.15276604206585967,.15276604206585967,.1426067021736066,.1426067021736066,.12875396253933621,.12875396253933621,.11156664554733399,.11156664554733399,.09149002162245,.09149002162245,.06904454273764123,.06904454273764123,.0448142267656996,.0448142267656996,.019461788229726478,.019461788229726478],[.15275338713072584,.15275338713072584,.14917298647260374,.14917298647260374,.14209610931838204,.14209610931838204,.13168863844917664,.13168863844917664,.11819453196151841,.11819453196151841,.10193011981724044,.10193011981724044,.08327674157670475,.08327674157670475,.06267204833410907,.06267204833410907,.04060142980038694,.04060142980038694,.017614007139152118,.017614007139152118],[.14608113364969041,.14452440398997005,.14452440398997005,.13988739479107315,.13988739479107315,.13226893863333747,.13226893863333747,.12183141605372853,.12183141605372853,.10879729916714838,.10879729916714838,.09344442345603386,.09344442345603386,.0761001136283793,.0761001136283793,.057134425426857205,.057134425426857205,.036953789770852494,.036953789770852494,.016017228257774335,.016017228257774335],[.13925187285563198,.13925187285563198,.13654149834601517,.13654149834601517,.13117350478706238,.13117350478706238,.12325237681051242,.12325237681051242,.11293229608053922,.11293229608053922,.10041414444288096,.10041414444288096,.08594160621706773,.08594160621706773,.06979646842452049,.06979646842452049,.052293335152683286,.052293335152683286,.03377490158481415,.03377490158481415,.0146279952982722,.0146279952982722],[.13365457218610619,.1324620394046966,.1324620394046966,.12890572218808216,.12890572218808216,.12304908430672953,.12304908430672953,.11499664022241136,.11499664022241136,.10489209146454141,.10489209146454141,.09291576606003515,.09291576606003515,.07928141177671895,.07928141177671895,.06423242140852585,.06423242140852585,.04803767173108467,.04803767173108467,.030988005856979445,.030988005856979445,.013411859487141771,.013411859487141771],[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872]],t.binomialCoefficients=[[1],[1,1],[1,2,1],[1,3,3,1]];const e=(s,a,l)=>{let d,h;const g=l/2;d=0;for(let f=0;f<20;f++)h=g*t.tValues[20][f]+g,d+=t.cValues[20][f]*n(s,a,h);return g*d};t.getCubicArcLength=e;const i=(s,a,l)=>{l===void 0&&(l=1);const d=s[0]-2*s[1]+s[2],h=a[0]-2*a[1]+a[2],c=2*s[1]-2*s[0],g=2*a[1]-2*a[0],f=4*(d*d+h*h),u=4*(d*c+h*g),_=c*c+g*g;if(f===0)return l*Math.sqrt(Math.pow(s[2]-s[0],2)+Math.pow(a[2]-a[0],2));const w=u/(2*f),m=_/f,p=l+w,v=m-w*w,b=p*p+v>0?Math.sqrt(p*p+v):0,S=w*w+v>0?Math.sqrt(w*w+v):0,T=w+Math.sqrt(w*w+v)!==0?v*Math.log(Math.abs((p+b)/(w+S))):0;return Math.sqrt(f)/2*(p*b-w*S+T)};t.getQuadraticArcLength=i;function n(s,a,l){const d=o(1,l,s),h=o(1,l,a),c=d*d+h*h;return Math.sqrt(c)}const o=(s,a,l)=>{const d=l.length-1;let h,c;if(d===0)return 0;if(s===0){c=0;for(let g=0;g<=d;g++)c+=t.binomialCoefficients[d][g]*Math.pow(1-a,d-g)*Math.pow(a,g)*l[g];return c}else{h=new Array(d);for(let g=0;g<d;g++)h[g]=d*(l[g+1]-l[g]);return o(s-1,a,h)}},r=(s,a,l)=>{let d=1,h=s/a,c=(s-l(h))/a,g=0;for(;d>.001;){const f=l(h+c),u=Math.abs(s-f)/a;if(u<d)d=u,h+=c;else{const _=l(h-c),w=Math.abs(s-_)/a;w<d?(d=w,h-=c):c/=2}if(g++,g>500)break}return h};t.t2length=r}(Na)),Na}var td;function vc(){if(td)return Gr;td=1,Object.defineProperty(Gr,"__esModule",{value:!0}),Gr.Path=void 0;const t=Be(),e=At(),i=$e(),n=R_();let o=class Xt extends e.Shape{constructor(s){super(s),this.dataArray=[],this.pathLength=0,this._readDataAttribute(),this.on("dataChange.konva",function(){this._readDataAttribute()})}_readDataAttribute(){this.dataArray=Xt.parsePathData(this.data()),this.pathLength=Xt.getPathLength(this.dataArray)}_sceneFunc(s){const a=this.dataArray;s.beginPath();let l=!1;for(let b=0;b<a.length;b++){const S=a[b].command,T=a[b].points;switch(S){case"L":s.lineTo(T[0],T[1]);break;case"M":s.moveTo(T[0],T[1]);break;case"C":s.bezierCurveTo(T[0],T[1],T[2],T[3],T[4],T[5]);break;case"Q":s.quadraticCurveTo(T[0],T[1],T[2],T[3]);break;case"A":var d=T[0],h=T[1],c=T[2],g=T[3],f=T[4],u=T[5],_=T[6],w=T[7],m=c>g?c:g,p=c>g?1:c/g,v=c>g?g/c:1;s.translate(d,h),s.rotate(_),s.scale(p,v),s.arc(0,0,m,f,f+u,1-w),s.scale(1/p,1/v),s.rotate(-_),s.translate(-d,-h);break;case"z":l=!0,s.closePath();break}}!l&&!this.hasFill()?s.strokeShape(this):s.fillStrokeShape(this)}getSelfRect(){let s=[];this.dataArray.forEach(function(f){if(f.command==="A"){const u=f.points[4],_=f.points[5],w=f.points[4]+_;let m=Math.PI/180;if(Math.abs(u-w)<m&&(m=Math.abs(u-w)),_<0)for(let p=u-m;p>w;p-=m){const v=Xt.getPointOnEllipticalArc(f.points[0],f.points[1],f.points[2],f.points[3],p,0);s.push(v.x,v.y)}else for(let p=u+m;p<w;p+=m){const v=Xt.getPointOnEllipticalArc(f.points[0],f.points[1],f.points[2],f.points[3],p,0);s.push(v.x,v.y)}}else if(f.command==="C")for(let u=0;u<=1;u+=.01){const _=Xt.getPointOnCubicBezier(u,f.start.x,f.start.y,f.points[0],f.points[1],f.points[2],f.points[3],f.points[4],f.points[5]);s.push(_.x,_.y)}else s=s.concat(f.points)});let a=s[0],l=s[0],d=s[1],h=s[1],c,g;for(let f=0;f<s.length/2;f++)c=s[f*2],g=s[f*2+1],isNaN(c)||(a=Math.min(a,c),l=Math.max(l,c)),isNaN(g)||(d=Math.min(d,g),h=Math.max(h,g));return{x:a,y:d,width:l-a,height:h-d}}getLength(){return this.pathLength}getPointAtLength(s){return Xt.getPointAtLengthOfDataArray(s,this.dataArray)}static getLineLength(s,a,l,d){return Math.sqrt((l-s)*(l-s)+(d-a)*(d-a))}static getPathLength(s){let a=0;for(let l=0;l<s.length;++l)a+=s[l].pathLength;return a}static getPointAtLengthOfDataArray(s,a){let l,d=0,h=a.length;if(!h)return null;for(;d<h&&s>a[d].pathLength;)s-=a[d].pathLength,++d;if(d===h)return l=a[d-1].points.slice(-2),{x:l[0],y:l[1]};if(s<.01)return l=a[d].points.slice(0,2),{x:l[0],y:l[1]};const c=a[d],g=c.points;switch(c.command){case"L":return Xt.getPointOnLine(s,c.start.x,c.start.y,g[0],g[1]);case"C":return Xt.getPointOnCubicBezier((0,n.t2length)(s,Xt.getPathLength(a),b=>(0,n.getCubicArcLength)([c.start.x,g[0],g[2],g[4]],[c.start.y,g[1],g[3],g[5]],b)),c.start.x,c.start.y,g[0],g[1],g[2],g[3],g[4],g[5]);case"Q":return Xt.getPointOnQuadraticBezier((0,n.t2length)(s,Xt.getPathLength(a),b=>(0,n.getQuadraticArcLength)([c.start.x,g[0],g[2]],[c.start.y,g[1],g[3]],b)),c.start.x,c.start.y,g[0],g[1],g[2],g[3]);case"A":var f=g[0],u=g[1],_=g[2],w=g[3],m=g[4],p=g[5],v=g[6];return m+=p*s/c.pathLength,Xt.getPointOnEllipticalArc(f,u,_,w,m,v)}return null}static getPointOnLine(s,a,l,d,h,c,g){c=c??a,g=g??l;const f=this.getLineLength(a,l,d,h);if(f<1e-10)return{x:a,y:l};if(d===a)return{x:c,y:g+(h>l?s:-s)};const u=(h-l)/(d-a),_=Math.sqrt(s*s/(1+u*u))*(d<a?-1:1),w=u*_;if(Math.abs(g-l-u*(c-a))<1e-10)return{x:c+_,y:g+w};const m=((c-a)*(d-a)+(g-l)*(h-l))/(f*f),p=a+m*(d-a),v=l+m*(h-l),b=this.getLineLength(c,g,p,v),S=Math.sqrt(s*s-b*b),T=Math.sqrt(S*S/(1+u*u))*(d<a?-1:1),E=u*T;return{x:p+T,y:v+E}}static getPointOnCubicBezier(s,a,l,d,h,c,g,f,u){function _(S){return S*S*S}function w(S){return 3*S*S*(1-S)}function m(S){return 3*S*(1-S)*(1-S)}function p(S){return(1-S)*(1-S)*(1-S)}const v=f*_(s)+c*w(s)+d*m(s)+a*p(s),b=u*_(s)+g*w(s)+h*m(s)+l*p(s);return{x:v,y:b}}static getPointOnQuadraticBezier(s,a,l,d,h,c,g){function f(p){return p*p}function u(p){return 2*p*(1-p)}function _(p){return(1-p)*(1-p)}const w=c*f(s)+d*u(s)+a*_(s),m=g*f(s)+h*u(s)+l*_(s);return{x:w,y:m}}static getPointOnEllipticalArc(s,a,l,d,h,c){const g=Math.cos(c),f=Math.sin(c),u={x:l*Math.cos(h),y:d*Math.sin(h)};return{x:s+(u.x*g-u.y*f),y:a+(u.x*f+u.y*g)}}static parsePathData(s){if(!s)return[];let a=s;const l=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"];a=a.replace(new RegExp(" ","g"),",");for(var d=0;d<l.length;d++)a=a.replace(new RegExp(l[d],"g"),"|"+l[d]);const h=a.split("|"),c=[],g=[];let f=0,u=0;const _=/([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;let w;for(d=1;d<h.length;d++){let y=h[d],k=y.charAt(0);for(y=y.slice(1),g.length=0;w=_.exec(y);)g.push(w[0]);const R=[];for(let L=0,O=g.length;L<O;L++){if(g[L]==="00"){R.push(0,0);continue}const H=parseFloat(g[L]);isNaN(H)?R.push(0):R.push(H)}for(;R.length>0&&!isNaN(R[0]);){let L="",O=[];const H=f,W=u;var m,p,v,b,S,T,E,A,M,C;switch(k){case"l":f+=R.shift(),u+=R.shift(),L="L",O.push(f,u);break;case"L":f=R.shift(),u=R.shift(),O.push(f,u);break;case"m":var P=R.shift(),z=R.shift();if(f+=P,u+=z,L="M",c.length>2&&c[c.length-1].command==="z"){for(let se=c.length-2;se>=0;se--)if(c[se].command==="M"){f=c[se].points[0]+P,u=c[se].points[1]+z;break}}O.push(f,u),k="l";break;case"M":f=R.shift(),u=R.shift(),L="M",O.push(f,u),k="L";break;case"h":f+=R.shift(),L="L",O.push(f,u);break;case"H":f=R.shift(),L="L",O.push(f,u);break;case"v":u+=R.shift(),L="L",O.push(f,u);break;case"V":u=R.shift(),L="L",O.push(f,u);break;case"C":O.push(R.shift(),R.shift(),R.shift(),R.shift()),f=R.shift(),u=R.shift(),O.push(f,u);break;case"c":O.push(f+R.shift(),u+R.shift(),f+R.shift(),u+R.shift()),f+=R.shift(),u+=R.shift(),L="C",O.push(f,u);break;case"S":p=f,v=u,m=c[c.length-1],m.command==="C"&&(p=f+(f-m.points[2]),v=u+(u-m.points[3])),O.push(p,v,R.shift(),R.shift()),f=R.shift(),u=R.shift(),L="C",O.push(f,u);break;case"s":p=f,v=u,m=c[c.length-1],m.command==="C"&&(p=f+(f-m.points[2]),v=u+(u-m.points[3])),O.push(p,v,f+R.shift(),u+R.shift()),f+=R.shift(),u+=R.shift(),L="C",O.push(f,u);break;case"Q":O.push(R.shift(),R.shift()),f=R.shift(),u=R.shift(),O.push(f,u);break;case"q":O.push(f+R.shift(),u+R.shift()),f+=R.shift(),u+=R.shift(),L="Q",O.push(f,u);break;case"T":p=f,v=u,m=c[c.length-1],m.command==="Q"&&(p=f+(f-m.points[0]),v=u+(u-m.points[1])),f=R.shift(),u=R.shift(),L="Q",O.push(p,v,f,u);break;case"t":p=f,v=u,m=c[c.length-1],m.command==="Q"&&(p=f+(f-m.points[0]),v=u+(u-m.points[1])),f+=R.shift(),u+=R.shift(),L="Q",O.push(p,v,f,u);break;case"A":b=R.shift(),S=R.shift(),T=R.shift(),E=R.shift(),A=R.shift(),M=f,C=u,f=R.shift(),u=R.shift(),L="A",O=this.convertEndpointToCenterParameterization(M,C,f,u,E,A,b,S,T);break;case"a":b=R.shift(),S=R.shift(),T=R.shift(),E=R.shift(),A=R.shift(),M=f,C=u,f+=R.shift(),u+=R.shift(),L="A",O=this.convertEndpointToCenterParameterization(M,C,f,u,E,A,b,S,T);break}c.push({command:L||k,points:O,start:{x:H,y:W},pathLength:this.calcLength(H,W,L||k,O)})}(k==="z"||k==="Z")&&c.push({command:"z",points:[],start:void 0,pathLength:0})}return c}static calcLength(s,a,l,d){let h,c,g,f;const u=Xt;switch(l){case"L":return u.getLineLength(s,a,d[0],d[1]);case"C":return(0,n.getCubicArcLength)([s,d[0],d[2],d[4]],[a,d[1],d[3],d[5]],1);case"Q":return(0,n.getQuadraticArcLength)([s,d[0],d[2]],[a,d[1],d[3]],1);case"A":h=0;var _=d[4],w=d[5],m=d[4]+w,p=Math.PI/180;if(Math.abs(_-m)<p&&(p=Math.abs(_-m)),c=u.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],_,0),w<0)for(f=_-p;f>m;f-=p)g=u.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],f,0),h+=u.getLineLength(c.x,c.y,g.x,g.y),c=g;else for(f=_+p;f<m;f+=p)g=u.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],f,0),h+=u.getLineLength(c.x,c.y,g.x,g.y),c=g;return g=u.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],m,0),h+=u.getLineLength(c.x,c.y,g.x,g.y),h}return 0}static convertEndpointToCenterParameterization(s,a,l,d,h,c,g,f,u){const _=u*(Math.PI/180),w=Math.cos(_)*(s-l)/2+Math.sin(_)*(a-d)/2,m=-1*Math.sin(_)*(s-l)/2+Math.cos(_)*(a-d)/2,p=w*w/(g*g)+m*m/(f*f);p>1&&(g*=Math.sqrt(p),f*=Math.sqrt(p));let v=Math.sqrt((g*g*(f*f)-g*g*(m*m)-f*f*(w*w))/(g*g*(m*m)+f*f*(w*w)));h===c&&(v*=-1),isNaN(v)&&(v=0);const b=v*g*m/f,S=v*-f*w/g,T=(s+l)/2+Math.cos(_)*b-Math.sin(_)*S,E=(a+d)/2+Math.sin(_)*b+Math.cos(_)*S,A=function(R){return Math.sqrt(R[0]*R[0]+R[1]*R[1])},M=function(R,L){return(R[0]*L[0]+R[1]*L[1])/(A(R)*A(L))},C=function(R,L){return(R[0]*L[1]<R[1]*L[0]?-1:1)*Math.acos(M(R,L))},P=C([1,0],[(w-b)/g,(m-S)/f]),z=[(w-b)/g,(m-S)/f],y=[(-1*w-b)/g,(-1*m-S)/f];let k=C(z,y);return M(z,y)<=-1&&(k=Math.PI),M(z,y)>=1&&(k=0),c===0&&k>0&&(k=k-2*Math.PI),c===1&&k<0&&(k=k+2*Math.PI),[T,E,g,f,P,k,_,c]}};return Gr.Path=o,o.prototype.className="Path",o.prototype._attrsAffectingSize=["data"],(0,i._registerNode)(o),t.Factory.addGetterSetter(o,"data"),Gr}var id;function A_(){if(id)return Hr;id=1,Object.defineProperty(Hr,"__esModule",{value:!0}),Hr.Arrow=void 0;const t=Be(),e=O0(),i=ze(),n=$e(),o=vc();let r=class extends e.Line{_sceneFunc(a){super._sceneFunc(a);const l=Math.PI*2,d=this.points();let h=d;const c=this.tension()!==0&&d.length>4;c&&(h=this.getTensionPoints());const g=this.pointerLength(),f=d.length;let u,_;if(c){const p=[h[h.length-4],h[h.length-3],h[h.length-2],h[h.length-1],d[f-2],d[f-1]],v=o.Path.calcLength(h[h.length-4],h[h.length-3],"C",p),b=o.Path.getPointOnQuadraticBezier(Math.min(1,1-g/v),p[0],p[1],p[2],p[3],p[4],p[5]);u=d[f-2]-b.x,_=d[f-1]-b.y}else u=d[f-2]-d[f-4],_=d[f-1]-d[f-3];const w=(Math.atan2(_,u)+l)%l,m=this.pointerWidth();this.pointerAtEnding()&&(a.save(),a.beginPath(),a.translate(d[f-2],d[f-1]),a.rotate(w),a.moveTo(0,0),a.lineTo(-g,m/2),a.lineTo(-g,-m/2),a.closePath(),a.restore(),this.__fillStroke(a)),this.pointerAtBeginning()&&(a.save(),a.beginPath(),a.translate(d[0],d[1]),c?(u=(h[0]+h[2])/2-d[0],_=(h[1]+h[3])/2-d[1]):(u=d[2]-d[0],_=d[3]-d[1]),a.rotate((Math.atan2(-_,-u)+l)%l),a.moveTo(0,0),a.lineTo(-g,m/2),a.lineTo(-g,-m/2),a.closePath(),a.restore(),this.__fillStroke(a))}__fillStroke(a){const l=this.dashEnabled();l&&(this.attrs.dashEnabled=!1,a.setLineDash([])),a.fillStrokeShape(this),l&&(this.attrs.dashEnabled=!0)}getSelfRect(){const a=super.getSelfRect(),l=this.pointerWidth()/2;return{x:a.x,y:a.y-l,width:a.width,height:a.height+l*2}}};return Hr.Arrow=r,r.prototype.className="Arrow",(0,n._registerNode)(r),t.Factory.addGetterSetter(r,"pointerLength",10,(0,i.getNumberValidator)()),t.Factory.addGetterSetter(r,"pointerWidth",10,(0,i.getNumberValidator)()),t.Factory.addGetterSetter(r,"pointerAtBeginning",!1),t.Factory.addGetterSetter(r,"pointerAtEnding",!0),Hr}var jr={},nd;function T_(){if(nd)return jr;nd=1,Object.defineProperty(jr,"__esModule",{value:!0}),jr.Circle=void 0;const t=Be(),e=At(),i=ze(),n=$e();let o=class extends e.Shape{_sceneFunc(s){s.beginPath(),s.arc(0,0,this.attrs.radius||0,0,Math.PI*2,!1),s.closePath(),s.fillStrokeShape(this)}getWidth(){return this.radius()*2}getHeight(){return this.radius()*2}setWidth(s){this.radius()!==s/2&&this.radius(s/2)}setHeight(s){this.radius()!==s/2&&this.radius(s/2)}};return jr.Circle=o,o.prototype._centroid=!0,o.prototype.className="Circle",o.prototype._attrsAffectingSize=["radius"],(0,n._registerNode)(o),t.Factory.addGetterSetter(o,"radius",0,(0,i.getNumberValidator)()),jr}var qr={},rd;function P_(){if(rd)return qr;rd=1,Object.defineProperty(qr,"__esModule",{value:!0}),qr.Ellipse=void 0;const t=Be(),e=At(),i=ze(),n=$e();let o=class extends e.Shape{_sceneFunc(s){const a=this.radiusX(),l=this.radiusY();s.beginPath(),s.save(),a!==l&&s.scale(1,l/a),s.arc(0,0,a,0,Math.PI*2,!1),s.restore(),s.closePath(),s.fillStrokeShape(this)}getWidth(){return this.radiusX()*2}getHeight(){return this.radiusY()*2}setWidth(s){this.radiusX(s/2)}setHeight(s){this.radiusY(s/2)}};return qr.Ellipse=o,o.prototype.className="Ellipse",o.prototype._centroid=!0,o.prototype._attrsAffectingSize=["radiusX","radiusY"],(0,n._registerNode)(o),t.Factory.addComponentsGetterSetter(o,"radius",["x","y"]),t.Factory.addGetterSetter(o,"radiusX",0,(0,i.getNumberValidator)()),t.Factory.addGetterSetter(o,"radiusY",0,(0,i.getNumberValidator)()),qr}var Wr={},sd;function I_(){if(sd)return Wr;sd=1,Object.defineProperty(Wr,"__esModule",{value:!0}),Wr.Image=void 0;const t=pt(),e=Be(),i=At(),n=$e(),o=ze();class r extends i.Shape{constructor(a){super(a),this.on("imageChange.konva",()=>{this._setImageLoad()}),this._setImageLoad()}_setImageLoad(){const a=this.image();a&&a.complete||a&&a.readyState===4||a&&a.addEventListener&&a.addEventListener("load",()=>{this._requestDraw()})}_useBufferCanvas(){const a=!!this.cornerRadius(),l=this.hasShadow();return a&&l?!0:super._useBufferCanvas(!0)}_sceneFunc(a){const l=this.getWidth(),d=this.getHeight(),h=this.cornerRadius(),c=this.attrs.image;let g;if(c){const f=this.attrs.cropWidth,u=this.attrs.cropHeight;f&&u?g=[c,this.cropX(),this.cropY(),f,u,0,0,l,d]:g=[c,0,0,l,d]}(this.hasFill()||this.hasStroke()||h)&&(a.beginPath(),h?t.Util.drawRoundedRectPath(a,l,d,h):a.rect(0,0,l,d),a.closePath(),a.fillStrokeShape(this)),c&&(h&&a.clip(),a.drawImage.apply(a,g))}_hitFunc(a){const l=this.width(),d=this.height(),h=this.cornerRadius();a.beginPath(),h?t.Util.drawRoundedRectPath(a,l,d,h):a.rect(0,0,l,d),a.closePath(),a.fillStrokeShape(this)}getWidth(){var a,l;return(a=this.attrs.width)!==null&&a!==void 0?a:(l=this.image())===null||l===void 0?void 0:l.width}getHeight(){var a,l;return(a=this.attrs.height)!==null&&a!==void 0?a:(l=this.image())===null||l===void 0?void 0:l.height}static fromURL(a,l,d=null){const h=t.Util.createImageElement();h.onload=function(){const c=new r({image:h});l(c)},h.onerror=d,h.crossOrigin="Anonymous",h.src=a}}return Wr.Image=r,r.prototype.className="Image",(0,n._registerNode)(r),e.Factory.addGetterSetter(r,"cornerRadius",0,(0,o.getNumberOrArrayOfNumbersValidator)(4)),e.Factory.addGetterSetter(r,"image"),e.Factory.addComponentsGetterSetter(r,"crop",["x","y","width","height"]),e.Factory.addGetterSetter(r,"cropX",0,(0,o.getNumberValidator)()),e.Factory.addGetterSetter(r,"cropY",0,(0,o.getNumberValidator)()),e.Factory.addGetterSetter(r,"cropWidth",0,(0,o.getNumberValidator)()),e.Factory.addGetterSetter(r,"cropHeight",0,(0,o.getNumberValidator)()),Wr}var Rn={},od;function O_(){if(od)return Rn;od=1,Object.defineProperty(Rn,"__esModule",{value:!0}),Rn.Tag=Rn.Label=void 0;const t=Be(),e=At(),i=pc(),n=ze(),o=$e(),r=["fontFamily","fontSize","fontStyle","padding","lineHeight","text","width","height","pointerDirection","pointerWidth","pointerHeight"],s="Change.konva",a="none",l="up",d="right",h="down",c="left",g=r.length;let f=class extends i.Group{constructor(w){super(w),this.on("add.konva",function(m){this._addListeners(m.child),this._sync()})}getText(){return this.find("Text")[0]}getTag(){return this.find("Tag")[0]}_addListeners(w){let m=this,p;const v=function(){m._sync()};for(p=0;p<g;p++)w.on(r[p]+s,v)}getWidth(){return this.getText().width()}getHeight(){return this.getText().height()}_sync(){let w=this.getText(),m=this.getTag(),p,v,b,S,T,E,A;if(w&&m){switch(p=w.width(),v=w.height(),b=m.pointerDirection(),S=m.pointerWidth(),A=m.pointerHeight(),T=0,E=0,b){case l:T=p/2,E=-1*A;break;case d:T=p+S,E=v/2;break;case h:T=p/2,E=v+A;break;case c:T=-1*S,E=v/2;break}m.setAttrs({x:-1*T,y:-1*E,width:p,height:v}),w.setAttrs({x:-1*T,y:-1*E})}}};Rn.Label=f,f.prototype.className="Label",(0,o._registerNode)(f);class u extends e.Shape{_sceneFunc(w){const m=this.width(),p=this.height(),v=this.pointerDirection(),b=this.pointerWidth(),S=this.pointerHeight(),T=this.cornerRadius();let E=0,A=0,M=0,C=0;typeof T=="number"?E=A=M=C=Math.min(T,m/2,p/2):(E=Math.min(T[0]||0,m/2,p/2),A=Math.min(T[1]||0,m/2,p/2),C=Math.min(T[2]||0,m/2,p/2),M=Math.min(T[3]||0,m/2,p/2)),w.beginPath(),w.moveTo(E,0),v===l&&(w.lineTo((m-b)/2,0),w.lineTo(m/2,-1*S),w.lineTo((m+b)/2,0)),w.lineTo(m-A,0),w.arc(m-A,A,A,Math.PI*3/2,0,!1),v===d&&(w.lineTo(m,(p-S)/2),w.lineTo(m+b,p/2),w.lineTo(m,(p+S)/2)),w.lineTo(m,p-C),w.arc(m-C,p-C,C,0,Math.PI/2,!1),v===h&&(w.lineTo((m+b)/2,p),w.lineTo(m/2,p+S),w.lineTo((m-b)/2,p)),w.lineTo(M,p),w.arc(M,p-M,M,Math.PI/2,Math.PI,!1),v===c&&(w.lineTo(0,(p+S)/2),w.lineTo(-1*b,p/2),w.lineTo(0,(p-S)/2)),w.lineTo(0,E),w.arc(E,E,E,Math.PI,Math.PI*3/2,!1),w.closePath(),w.fillStrokeShape(this)}getSelfRect(){let w=0,m=0,p=this.pointerWidth(),v=this.pointerHeight(),b=this.pointerDirection(),S=this.width(),T=this.height();return b===l?(m-=v,T+=v):b===h?T+=v:b===c?(w-=p*1.5,S+=p):b===d&&(S+=p*1.5),{x:w,y:m,width:S,height:T}}}return Rn.Tag=u,u.prototype.className="Tag",(0,o._registerNode)(u),t.Factory.addGetterSetter(u,"pointerDirection",a),t.Factory.addGetterSetter(u,"pointerWidth",0,(0,n.getNumberValidator)()),t.Factory.addGetterSetter(u,"pointerHeight",0,(0,n.getNumberValidator)()),t.Factory.addGetterSetter(u,"cornerRadius",0,(0,n.getNumberOrArrayOfNumbersValidator)(4)),Rn}var Kr={},ad;function M0(){if(ad)return Kr;ad=1,Object.defineProperty(Kr,"__esModule",{value:!0}),Kr.Rect=void 0;const t=Be(),e=At(),i=$e(),n=pt(),o=ze();let r=class extends e.Shape{_sceneFunc(a){const l=this.cornerRadius(),d=this.width(),h=this.height();a.beginPath(),l?n.Util.drawRoundedRectPath(a,d,h,l):a.rect(0,0,d,h),a.closePath(),a.fillStrokeShape(this)}};return Kr.Rect=r,r.prototype.className="Rect",(0,i._registerNode)(r),t.Factory.addGetterSetter(r,"cornerRadius",0,(0,o.getNumberOrArrayOfNumbersValidator)(4)),Kr}var Yr={},ld;function M_(){if(ld)return Yr;ld=1,Object.defineProperty(Yr,"__esModule",{value:!0}),Yr.RegularPolygon=void 0;const t=Be(),e=At(),i=ze(),n=$e();let o=class extends e.Shape{_sceneFunc(s){const a=this._getPoints();s.beginPath(),s.moveTo(a[0].x,a[0].y);for(let l=1;l<a.length;l++)s.lineTo(a[l].x,a[l].y);s.closePath(),s.fillStrokeShape(this)}_getPoints(){const s=this.attrs.sides,a=this.attrs.radius||0,l=[];for(let d=0;d<s;d++)l.push({x:a*Math.sin(d*2*Math.PI/s),y:-1*a*Math.cos(d*2*Math.PI/s)});return l}getSelfRect(){const s=this._getPoints();let a=s[0].x,l=s[0].y,d=s[0].x,h=s[0].y;return s.forEach(c=>{a=Math.min(a,c.x),l=Math.max(l,c.x),d=Math.min(d,c.y),h=Math.max(h,c.y)}),{x:a,y:d,width:l-a,height:h-d}}getWidth(){return this.radius()*2}getHeight(){return this.radius()*2}setWidth(s){this.radius(s/2)}setHeight(s){this.radius(s/2)}};return Yr.RegularPolygon=o,o.prototype.className="RegularPolygon",o.prototype._centroid=!0,o.prototype._attrsAffectingSize=["radius"],(0,n._registerNode)(o),t.Factory.addGetterSetter(o,"radius",0,(0,i.getNumberValidator)()),t.Factory.addGetterSetter(o,"sides",0,(0,i.getNumberValidator)()),Yr}var Xr={},cd;function L_(){if(cd)return Xr;cd=1,Object.defineProperty(Xr,"__esModule",{value:!0}),Xr.Ring=void 0;const t=Be(),e=At(),i=ze(),n=$e(),o=Math.PI*2;let r=class extends e.Shape{_sceneFunc(a){a.beginPath(),a.arc(0,0,this.innerRadius(),0,o,!1),a.moveTo(this.outerRadius(),0),a.arc(0,0,this.outerRadius(),o,0,!0),a.closePath(),a.fillStrokeShape(this)}getWidth(){return this.outerRadius()*2}getHeight(){return this.outerRadius()*2}setWidth(a){this.outerRadius(a/2)}setHeight(a){this.outerRadius(a/2)}};return Xr.Ring=r,r.prototype.className="Ring",r.prototype._centroid=!0,r.prototype._attrsAffectingSize=["innerRadius","outerRadius"],(0,n._registerNode)(r),t.Factory.addGetterSetter(r,"innerRadius",0,(0,i.getNumberValidator)()),t.Factory.addGetterSetter(r,"outerRadius",0,(0,i.getNumberValidator)()),Xr}var Zr={},hd;function D_(){if(hd)return Zr;hd=1,Object.defineProperty(Zr,"__esModule",{value:!0}),Zr.Sprite=void 0;const t=Be(),e=At(),i=gc(),n=ze(),o=$e();let r=class extends e.Shape{constructor(a){super(a),this._updated=!0,this.anim=new i.Animation(()=>{const l=this._updated;return this._updated=!1,l}),this.on("animationChange.konva",function(){this.frameIndex(0)}),this.on("frameIndexChange.konva",function(){this._updated=!0}),this.on("frameRateChange.konva",function(){this.anim.isRunning()&&(clearInterval(this.interval),this._setInterval())})}_sceneFunc(a){const l=this.animation(),d=this.frameIndex(),h=d*4,c=this.animations()[l],g=this.frameOffsets(),f=c[h+0],u=c[h+1],_=c[h+2],w=c[h+3],m=this.image();if((this.hasFill()||this.hasStroke())&&(a.beginPath(),a.rect(0,0,_,w),a.closePath(),a.fillStrokeShape(this)),m)if(g){const p=g[l],v=d*2;a.drawImage(m,f,u,_,w,p[v+0],p[v+1],_,w)}else a.drawImage(m,f,u,_,w,0,0,_,w)}_hitFunc(a){const l=this.animation(),d=this.frameIndex(),h=d*4,c=this.animations()[l],g=this.frameOffsets(),f=c[h+2],u=c[h+3];if(a.beginPath(),g){const _=g[l],w=d*2;a.rect(_[w+0],_[w+1],f,u)}else a.rect(0,0,f,u);a.closePath(),a.fillShape(this)}_useBufferCanvas(){return super._useBufferCanvas(!0)}_setInterval(){const a=this;this.interval=setInterval(function(){a._updateIndex()},1e3/this.frameRate())}start(){if(this.isRunning())return;const a=this.getLayer();this.anim.setLayers(a),this._setInterval(),this.anim.start()}stop(){this.anim.stop(),clearInterval(this.interval)}isRunning(){return this.anim.isRunning()}_updateIndex(){const a=this.frameIndex(),l=this.animation(),d=this.animations(),h=d[l],c=h.length/4;a<c-1?this.frameIndex(a+1):this.frameIndex(0)}};return Zr.Sprite=r,r.prototype.className="Sprite",(0,o._registerNode)(r),t.Factory.addGetterSetter(r,"animation"),t.Factory.addGetterSetter(r,"animations"),t.Factory.addGetterSetter(r,"frameOffsets"),t.Factory.addGetterSetter(r,"image"),t.Factory.addGetterSetter(r,"frameIndex",0,(0,n.getNumberValidator)()),t.Factory.addGetterSetter(r,"frameRate",17,(0,n.getNumberValidator)()),t.Factory.backCompat(r,{index:"frameIndex",getIndex:"getFrameIndex",setIndex:"setFrameIndex"}),Zr}var Qr={},dd;function F_(){if(dd)return Qr;dd=1,Object.defineProperty(Qr,"__esModule",{value:!0}),Qr.Star=void 0;const t=Be(),e=At(),i=ze(),n=$e();let o=class extends e.Shape{_sceneFunc(s){const a=this.innerRadius(),l=this.outerRadius(),d=this.numPoints();s.beginPath(),s.moveTo(0,0-l);for(let h=1;h<d*2;h++){const c=h%2===0?l:a,g=c*Math.sin(h*Math.PI/d),f=-1*c*Math.cos(h*Math.PI/d);s.lineTo(g,f)}s.closePath(),s.fillStrokeShape(this)}getWidth(){return this.outerRadius()*2}getHeight(){return this.outerRadius()*2}setWidth(s){this.outerRadius(s/2)}setHeight(s){this.outerRadius(s/2)}};return Qr.Star=o,o.prototype.className="Star",o.prototype._centroid=!0,o.prototype._attrsAffectingSize=["innerRadius","outerRadius"],(0,n._registerNode)(o),t.Factory.addGetterSetter(o,"numPoints",5,(0,i.getNumberValidator)()),t.Factory.addGetterSetter(o,"innerRadius",0,(0,i.getNumberValidator)()),t.Factory.addGetterSetter(o,"outerRadius",0,(0,i.getNumberValidator)()),Qr}var Xn={},ud;function L0(){if(ud)return Xn;ud=1,Object.defineProperty(Xn,"__esModule",{value:!0}),Xn.Text=void 0,Xn.stringToArray=s;const t=pt(),e=Be(),i=At(),n=$e(),o=ze(),r=$e();function s(oe){return[...oe].reduce((Q,ce,_e,he)=>{if(new RegExp("\\p{Emoji}","u").test(ce)){const D=he[_e+1];D&&new RegExp("\\p{Emoji_Modifier}|\\u200D","u").test(D)?(Q.push(ce+D),he[_e+1]=""):Q.push(ce)}else new RegExp("\\p{Regional_Indicator}{2}","u").test(ce+(he[_e+1]||""))?Q.push(ce+he[_e+1]):_e>0&&new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}","u").test(ce)?Q[Q.length-1]+=ce:ce&&Q.push(ce);return Q},[])}const a="auto",l="center",d="inherit",h="justify",c="Change.konva",g="2d",f="-",u="left",_="text",w="Text",m="top",p="bottom",v="middle",b="normal",S="px ",T=" ",E="right",A="rtl",M="word",C="char",P="none",z="…",y=["direction","fontFamily","fontSize","fontStyle","fontVariant","padding","align","verticalAlign","lineHeight","text","width","height","wrap","ellipsis","letterSpacing"],k=y.length;function R(oe){return oe.split(",").map(Q=>{Q=Q.trim();const ce=Q.indexOf(" ")>=0,_e=Q.indexOf('"')>=0||Q.indexOf("'")>=0;return ce&&!_e&&(Q=`"${Q}"`),Q}).join(", ")}let L;function O(){return L||(L=t.Util.createCanvasElement().getContext(g),L)}function H(oe){oe.fillText(this._partialText,this._partialTextX,this._partialTextY)}function W(oe){oe.setAttr("miterLimit",2),oe.strokeText(this._partialText,this._partialTextX,this._partialTextY)}function se(oe){return oe=oe||{},!oe.fillLinearGradientColorStops&&!oe.fillRadialGradientColorStops&&!oe.fillPatternImage&&(oe.fill=oe.fill||"black"),oe}let te=class extends i.Shape{constructor(Q){super(se(Q)),this._partialTextX=0,this._partialTextY=0;for(let ce=0;ce<k;ce++)this.on(y[ce]+c,this._setTextData);this._setTextData()}_sceneFunc(Q){const ce=this.textArr,_e=ce.length;if(!this.text())return;let he=this.padding(),D=this.fontSize(),V=this.lineHeight()*D,q=this.verticalAlign(),Z=this.direction(),de=0,$=this.align(),N=this.getWidth(),G=this.letterSpacing(),Y=this.fill(),ie=this.textDecoration(),X=ie.indexOf("underline")!==-1,ae=ie.indexOf("line-through")!==-1,ve;Z=Z===d?Q.direction:Z;let pe=V/2,ue=v;if(n.Konva._fixTextRendering){const Ye=this.measureSize("M");ue="alphabetic",pe=(Ye.fontBoundingBoxAscent-Ye.fontBoundingBoxDescent)/2+V/2}var ye=0,be=0;for(Z===A&&Q.setAttr("direction",Z),Q.setAttr("font",this._getContextFont()),Q.setAttr("textBaseline",ue),Q.setAttr("textAlign",u),q===v?de=(this.getHeight()-_e*V-he*2)/2:q===p&&(de=this.getHeight()-_e*V-he*2),Q.translate(he,de+he),ve=0;ve<_e;ve++){var ye=0,be=0,we=ce[ve],Ce=we.text,Ae=we.width,Le=we.lastInParagraph,Te,Ge;if(Q.save(),$===E?ye+=N-Ae-he*2:$===l&&(ye+=(N-Ae-he*2)/2),X){Q.save(),Q.beginPath();const le=n.Konva._fixTextRendering?Math.round(D/4):Math.round(D/2),fe=ye,xe=pe+be+le;Q.moveTo(fe,xe),Te=Ce.split(" ").length-1,Ge=$===h&&!Le?N-he*2:Ae,Q.lineTo(fe+Math.round(Ge),xe),Q.lineWidth=D/15;const j=this._getLinearGradient();Q.strokeStyle=j||Y,Q.stroke(),Q.restore()}if(ae){Q.save(),Q.beginPath();const le=n.Konva._fixTextRendering?-Math.round(D/4):0;Q.moveTo(ye,pe+be+le),Te=Ce.split(" ").length-1,Ge=$===h&&!Le?N-he*2:Ae,Q.lineTo(ye+Math.round(Ge),pe+be+le),Q.lineWidth=D/15;const fe=this._getLinearGradient();Q.strokeStyle=fe||Y,Q.stroke(),Q.restore()}if(Z!==A&&(G!==0||$===h)){Te=Ce.split(" ").length-1;const le=s(Ce);for(let fe=0;fe<le.length;fe++){const xe=le[fe];xe===" "&&!Le&&$===h&&(ye+=(N-he*2-Ae)/Te),this._partialTextX=ye,this._partialTextY=pe+be,this._partialText=xe,Q.fillStrokeShape(this),ye+=this.measureSize(xe).width+G}}else G!==0&&Q.setAttr("letterSpacing",`${G}px`),this._partialTextX=ye,this._partialTextY=pe+be,this._partialText=Ce,Q.fillStrokeShape(this);Q.restore(),_e>1&&(pe+=V)}}_hitFunc(Q){const ce=this.getWidth(),_e=this.getHeight();Q.beginPath(),Q.rect(0,0,ce,_e),Q.closePath(),Q.fillStrokeShape(this)}setText(Q){const ce=t.Util._isString(Q)?Q:Q==null?"":Q+"";return this._setAttr(_,ce),this}getWidth(){return this.attrs.width===a||this.attrs.width===void 0?this.getTextWidth()+this.padding()*2:this.attrs.width}getHeight(){return this.attrs.height===a||this.attrs.height===void 0?this.fontSize()*this.textArr.length*this.lineHeight()+this.padding()*2:this.attrs.height}getTextWidth(){return this.textWidth}getTextHeight(){return t.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."),this.textHeight}measureSize(Q){var ce,_e,he,D,V,q,Z,de,$,N,G;let Y=O(),ie=this.fontSize(),X;Y.save(),Y.font=this._getContextFont(),X=Y.measureText(Q),Y.restore();const ae=ie/100;return{actualBoundingBoxAscent:(ce=X.actualBoundingBoxAscent)!==null&&ce!==void 0?ce:71.58203125*ae,actualBoundingBoxDescent:(_e=X.actualBoundingBoxDescent)!==null&&_e!==void 0?_e:0,actualBoundingBoxLeft:(he=X.actualBoundingBoxLeft)!==null&&he!==void 0?he:-7.421875*ae,actualBoundingBoxRight:(D=X.actualBoundingBoxRight)!==null&&D!==void 0?D:75.732421875*ae,alphabeticBaseline:(V=X.alphabeticBaseline)!==null&&V!==void 0?V:0,emHeightAscent:(q=X.emHeightAscent)!==null&&q!==void 0?q:100*ae,emHeightDescent:(Z=X.emHeightDescent)!==null&&Z!==void 0?Z:-20*ae,fontBoundingBoxAscent:(de=X.fontBoundingBoxAscent)!==null&&de!==void 0?de:91*ae,fontBoundingBoxDescent:($=X.fontBoundingBoxDescent)!==null&&$!==void 0?$:21*ae,hangingBaseline:(N=X.hangingBaseline)!==null&&N!==void 0?N:72.80000305175781*ae,ideographicBaseline:(G=X.ideographicBaseline)!==null&&G!==void 0?G:-21*ae,width:X.width,height:ie}}_getContextFont(){return this.fontStyle()+T+this.fontVariant()+T+(this.fontSize()+S)+R(this.fontFamily())}_addTextLine(Q){this.align()===h&&(Q=Q.trim());const _e=this._getTextWidth(Q);return this.textArr.push({text:Q,width:_e,lastInParagraph:!1})}_getTextWidth(Q){const ce=this.letterSpacing(),_e=Q.length;return O().measureText(Q).width+ce*_e}_setTextData(){let Q=this.text().split(`
`),ce=+this.fontSize(),_e=0,he=this.lineHeight()*ce,D=this.attrs.width,V=this.attrs.height,q=D!==a&&D!==void 0,Z=V!==a&&V!==void 0,de=this.padding(),$=D-de*2,N=V-de*2,G=0,Y=this.wrap(),ie=Y!==P,X=Y!==C&&ie,ae=this.ellipsis();this.textArr=[],O().font=this._getContextFont();const ve=ae?this._getTextWidth(z):0;for(let pe=0,ue=Q.length;pe<ue;++pe){let ye=Q[pe],be=this._getTextWidth(ye);if(q&&be>$)for(;ye.length>0;){let we=0,Ce=s(ye).length,Ae="",Le=0;for(;we<Ce;){const Te=we+Ce>>>1,Ge=s(ye),Ye=Ge.slice(0,Te+1).join(""),B=this._getTextWidth(Ye)+ve;B<=$?(we=Te+1,Ae=Ye,Le=B):Ce=Te}if(Ae){if(X){const Ye=s(ye),B=s(Ae),le=Ye[B.length],fe=le===T||le===f;let xe;if(fe&&Le<=$)xe=B.length;else{const j=B.lastIndexOf(T),ne=B.lastIndexOf(f);xe=Math.max(j,ne)+1}xe>0&&(we=xe,Ae=Ye.slice(0,we).join(""),Le=this._getTextWidth(Ae))}if(Ae=Ae.trimRight(),this._addTextLine(Ae),_e=Math.max(_e,Le),G+=he,this._shouldHandleEllipsis(G)){this._tryToAddEllipsisToLastLine();break}if(ye=s(ye).slice(we).join("").trimLeft(),ye.length>0&&(be=this._getTextWidth(ye),be<=$)){this._addTextLine(ye),G+=he,_e=Math.max(_e,be);break}}else break}else this._addTextLine(ye),G+=he,_e=Math.max(_e,be),this._shouldHandleEllipsis(G)&&pe<ue-1&&this._tryToAddEllipsisToLastLine();if(this.textArr[this.textArr.length-1]&&(this.textArr[this.textArr.length-1].lastInParagraph=!0),Z&&G+he>N)break}this.textHeight=ce,this.textWidth=_e}_shouldHandleEllipsis(Q){const ce=+this.fontSize(),_e=this.lineHeight()*ce,he=this.attrs.height,D=he!==a&&he!==void 0,V=this.padding(),q=he-V*2;return!(this.wrap()!==P)||D&&Q+_e>q}_tryToAddEllipsisToLastLine(){const Q=this.attrs.width,ce=Q!==a&&Q!==void 0,_e=this.padding(),he=Q-_e*2,D=this.ellipsis(),V=this.textArr[this.textArr.length-1];!V||!D||(ce&&(this._getTextWidth(V.text+z)<he||(V.text=V.text.slice(0,V.text.length-3))),this.textArr.splice(this.textArr.length-1,1),this._addTextLine(V.text+z))}getStrokeScaleEnabled(){return!0}_useBufferCanvas(){const Q=this.textDecoration().indexOf("underline")!==-1||this.textDecoration().indexOf("line-through")!==-1,ce=this.hasShadow();return Q&&ce?!0:super._useBufferCanvas()}};return Xn.Text=te,te.prototype._fillFunc=H,te.prototype._strokeFunc=W,te.prototype.className=w,te.prototype._attrsAffectingSize=["text","fontSize","padding","wrap","lineHeight","letterSpacing"],(0,r._registerNode)(te),e.Factory.overWriteSetter(te,"width",(0,o.getNumberOrAutoValidator)()),e.Factory.overWriteSetter(te,"height",(0,o.getNumberOrAutoValidator)()),e.Factory.addGetterSetter(te,"direction",d),e.Factory.addGetterSetter(te,"fontFamily","Arial"),e.Factory.addGetterSetter(te,"fontSize",12,(0,o.getNumberValidator)()),e.Factory.addGetterSetter(te,"fontStyle",b),e.Factory.addGetterSetter(te,"fontVariant",b),e.Factory.addGetterSetter(te,"padding",0,(0,o.getNumberValidator)()),e.Factory.addGetterSetter(te,"align",u),e.Factory.addGetterSetter(te,"verticalAlign",m),e.Factory.addGetterSetter(te,"lineHeight",1,(0,o.getNumberValidator)()),e.Factory.addGetterSetter(te,"wrap",M),e.Factory.addGetterSetter(te,"ellipsis",!1,(0,o.getBooleanValidator)()),e.Factory.addGetterSetter(te,"letterSpacing",0,(0,o.getNumberValidator)()),e.Factory.addGetterSetter(te,"text","",(0,o.getStringValidator)()),e.Factory.addGetterSetter(te,"textDecoration",""),Xn}var Jr={},fd;function $_(){if(fd)return Jr;fd=1,Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.TextPath=void 0;const t=pt(),e=Be(),i=At(),n=vc(),o=L0(),r=ze(),s=$e(),a="",l="normal";function d(g){g.fillText(this.partialText,0,0)}function h(g){g.strokeText(this.partialText,0,0)}let c=class extends i.Shape{constructor(f){super(f),this.dummyCanvas=t.Util.createCanvasElement(),this.dataArray=[],this._readDataAttribute(),this.on("dataChange.konva",function(){this._readDataAttribute(),this._setTextData()}),this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva",this._setTextData),this._setTextData()}_getTextPathLength(){return n.Path.getPathLength(this.dataArray)}_getPointAtLength(f){if(!this.attrs.data)return null;const u=this.pathLength;return f-1>u?null:n.Path.getPointAtLengthOfDataArray(f,this.dataArray)}_readDataAttribute(){this.dataArray=n.Path.parsePathData(this.attrs.data),this.pathLength=this._getTextPathLength()}_sceneFunc(f){f.setAttr("font",this._getContextFont()),f.setAttr("textBaseline",this.textBaseline()),f.setAttr("textAlign","left"),f.save();const u=this.textDecoration(),_=this.fill(),w=this.fontSize(),m=this.glyphInfo;u==="underline"&&f.beginPath();for(let p=0;p<m.length;p++){f.save();const v=m[p].p0;f.translate(v.x,v.y),f.rotate(m[p].rotation),this.partialText=m[p].text,f.fillStrokeShape(this),u==="underline"&&(p===0&&f.moveTo(0,w/2+1),f.lineTo(w,w/2+1)),f.restore()}u==="underline"&&(f.strokeStyle=_,f.lineWidth=w/20,f.stroke()),f.restore()}_hitFunc(f){f.beginPath();const u=this.glyphInfo;if(u.length>=1){const _=u[0].p0;f.moveTo(_.x,_.y)}for(let _=0;_<u.length;_++){const w=u[_].p1;f.lineTo(w.x,w.y)}f.setAttr("lineWidth",this.fontSize()),f.setAttr("strokeStyle",this.colorKey),f.stroke()}getTextWidth(){return this.textWidth}getTextHeight(){return t.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."),this.textHeight}setText(f){return o.Text.prototype.setText.call(this,f)}_getContextFont(){return o.Text.prototype._getContextFont.call(this)}_getTextSize(f){const _=this.dummyCanvas.getContext("2d");_.save(),_.font=this._getContextFont();const w=_.measureText(f);return _.restore(),{width:w.width,height:parseInt(`${this.fontSize()}`,10)}}_setTextData(){const{width:f,height:u}=this._getTextSize(this.attrs.text);if(this.textWidth=f,this.textHeight=u,this.glyphInfo=[],!this.attrs.data)return null;const _=this.letterSpacing(),w=this.align(),m=this.kerningFunc(),p=Math.max(this.textWidth+((this.attrs.text||"").length-1)*_,0);let v=0;w==="center"&&(v=Math.max(0,this.pathLength/2-p/2)),w==="right"&&(v=Math.max(0,this.pathLength-p));const b=(0,o.stringToArray)(this.text());let S=v;for(let T=0;T<b.length;T++){const E=this._getPointAtLength(S);if(!E)return;let A=this._getTextSize(b[T]).width+_;if(b[T]===" "&&w==="justify"){const k=this.text().split(" ").length-1;A+=(this.pathLength-p)/k}const M=this._getPointAtLength(S+A);if(!M)return;const C=n.Path.getLineLength(E.x,E.y,M.x,M.y);let P=0;if(m)try{P=m(b[T-1],b[T])*this.fontSize()}catch{P=0}E.x+=P,M.x+=P,this.textWidth+=P;const z=n.Path.getPointOnLine(P+C/2,E.x,E.y,M.x,M.y),y=Math.atan2(M.y-E.y,M.x-E.x);this.glyphInfo.push({transposeX:z.x,transposeY:z.y,text:b[T],rotation:y,p0:E,p1:M}),S+=A}}getSelfRect(){if(!this.glyphInfo.length)return{x:0,y:0,width:0,height:0};const f=[];this.glyphInfo.forEach(function(S){f.push(S.p0.x),f.push(S.p0.y),f.push(S.p1.x),f.push(S.p1.y)});let u=f[0]||0,_=f[0]||0,w=f[1]||0,m=f[1]||0,p,v;for(let S=0;S<f.length/2;S++)p=f[S*2],v=f[S*2+1],u=Math.min(u,p),_=Math.max(_,p),w=Math.min(w,v),m=Math.max(m,v);const b=this.fontSize();return{x:u-b/2,y:w-b/2,width:_-u+b,height:m-w+b}}destroy(){return t.Util.releaseCanvas(this.dummyCanvas),super.destroy()}};return Jr.TextPath=c,c.prototype._fillFunc=d,c.prototype._strokeFunc=h,c.prototype._fillFuncHit=d,c.prototype._strokeFuncHit=h,c.prototype.className="TextPath",c.prototype._attrsAffectingSize=["text","fontSize","data"],(0,s._registerNode)(c),e.Factory.addGetterSetter(c,"data"),e.Factory.addGetterSetter(c,"fontFamily","Arial"),e.Factory.addGetterSetter(c,"fontSize",12,(0,r.getNumberValidator)()),e.Factory.addGetterSetter(c,"fontStyle",l),e.Factory.addGetterSetter(c,"align","left"),e.Factory.addGetterSetter(c,"letterSpacing",0,(0,r.getNumberValidator)()),e.Factory.addGetterSetter(c,"textBaseline","middle"),e.Factory.addGetterSetter(c,"fontVariant",l),e.Factory.addGetterSetter(c,"text",a),e.Factory.addGetterSetter(c,"textDecoration",""),e.Factory.addGetterSetter(c,"kerningFunc",void 0),Jr}var es={},pd;function B_(){if(pd)return es;pd=1,Object.defineProperty(es,"__esModule",{value:!0}),es.Transformer=void 0;const t=pt(),e=Be(),i=vt(),n=At(),o=M0(),r=pc(),s=$e(),a=ze(),l=$e(),d="tr-konva",h=["resizeEnabledChange","rotateAnchorOffsetChange","rotateEnabledChange","enabledAnchorsChange","anchorSizeChange","borderEnabledChange","borderStrokeChange","borderStrokeWidthChange","borderDashChange","anchorStrokeChange","anchorStrokeWidthChange","anchorFillChange","anchorCornerRadiusChange","ignoreStrokeChange","anchorStyleFuncChange"].map(M=>M+`.${d}`).join(" "),c="nodesRect",g=["widthChange","heightChange","scaleXChange","scaleYChange","skewXChange","skewYChange","rotationChange","offsetXChange","offsetYChange","transformsEnabledChange","strokeWidthChange"],f={"top-left":-45,"top-center":0,"top-right":45,"middle-right":-90,"middle-left":90,"bottom-left":-135,"bottom-center":180,"bottom-right":135},u="ontouchstart"in s.Konva._global;function _(M,C,P){if(M==="rotater")return P;C+=t.Util.degToRad(f[M]||0);const z=(t.Util.radToDeg(C)%360+360)%360;return t.Util._inRange(z,315+22.5,360)||t.Util._inRange(z,0,22.5)?"ns-resize":t.Util._inRange(z,45-22.5,45+22.5)?"nesw-resize":t.Util._inRange(z,90-22.5,90+22.5)?"ew-resize":t.Util._inRange(z,135-22.5,135+22.5)?"nwse-resize":t.Util._inRange(z,180-22.5,180+22.5)?"ns-resize":t.Util._inRange(z,225-22.5,225+22.5)?"nesw-resize":t.Util._inRange(z,270-22.5,270+22.5)?"ew-resize":t.Util._inRange(z,315-22.5,315+22.5)?"nwse-resize":(t.Util.error("Transformer has unknown angle for cursor detection: "+z),"pointer")}const w=["top-left","top-center","top-right","middle-right","middle-left","bottom-left","bottom-center","bottom-right"],m=1e8;function p(M){return{x:M.x+M.width/2*Math.cos(M.rotation)+M.height/2*Math.sin(-M.rotation),y:M.y+M.height/2*Math.cos(M.rotation)+M.width/2*Math.sin(M.rotation)}}function v(M,C,P){const z=P.x+(M.x-P.x)*Math.cos(C)-(M.y-P.y)*Math.sin(C),y=P.y+(M.x-P.x)*Math.sin(C)+(M.y-P.y)*Math.cos(C);return{...M,rotation:M.rotation+C,x:z,y}}function b(M,C){const P=p(M);return v(M,C,P)}function S(M,C,P){let z=C;for(let y=0;y<M.length;y++){const k=s.Konva.getAngle(M[y]),R=Math.abs(k-C)%(Math.PI*2);Math.min(R,Math.PI*2-R)<P&&(z=k)}return z}let T=0,E=class extends r.Group{constructor(C){super(C),this._movingAnchorName=null,this._transforming=!1,this._createElements(),this._handleMouseMove=this._handleMouseMove.bind(this),this._handleMouseUp=this._handleMouseUp.bind(this),this.update=this.update.bind(this),this.on(h,this.update),this.getNode()&&this.update()}attachTo(C){return this.setNode(C),this}setNode(C){return t.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."),this.setNodes([C])}getNode(){return this._nodes&&this._nodes[0]}_getEventNamespace(){return d+this._id}setNodes(C=[]){this._nodes&&this._nodes.length&&this.detach();const P=C.filter(y=>y.isAncestorOf(this)?(t.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"),!1):!0);return this._nodes=C=P,C.length===1&&this.useSingleNodeRotation()?this.rotation(C[0].getAbsoluteRotation()):this.rotation(0),this._nodes.forEach(y=>{const k=()=>{this.nodes().length===1&&this.useSingleNodeRotation()&&this.rotation(this.nodes()[0].getAbsoluteRotation()),this._resetTransformCache(),!this._transforming&&!this.isDragging()&&this.update()},R=y._attrsAffectingSize.map(L=>L+"Change."+this._getEventNamespace()).join(" ");y.on(R,k),y.on(g.map(L=>L+`.${this._getEventNamespace()}`).join(" "),k),y.on(`absoluteTransformChange.${this._getEventNamespace()}`,k),this._proxyDrag(y)}),this._resetTransformCache(),!!this.findOne(".top-left")&&this.update(),this}_proxyDrag(C){let P;C.on(`dragstart.${this._getEventNamespace()}`,z=>{P=C.getAbsolutePosition(),!this.isDragging()&&C!==this.findOne(".back")&&this.startDrag(z,!1)}),C.on(`dragmove.${this._getEventNamespace()}`,z=>{if(!P)return;const y=C.getAbsolutePosition(),k=y.x-P.x,R=y.y-P.y;this.nodes().forEach(L=>{if(L===C||L.isDragging())return;const O=L.getAbsolutePosition();L.setAbsolutePosition({x:O.x+k,y:O.y+R}),L.startDrag(z)}),P=null})}getNodes(){return this._nodes||[]}getActiveAnchor(){return this._movingAnchorName}detach(){this._nodes&&this._nodes.forEach(C=>{C.off("."+this._getEventNamespace())}),this._nodes=[],this._resetTransformCache()}_resetTransformCache(){this._clearCache(c),this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform")}_getNodeRect(){return this._getCache(c,this.__getNodeRect)}__getNodeShape(C,P=this.rotation(),z){const y=C.getClientRect({skipTransform:!0,skipShadow:!0,skipStroke:this.ignoreStroke()}),k=C.getAbsoluteScale(z),R=C.getAbsolutePosition(z),L=y.x*k.x-C.offsetX()*k.x,O=y.y*k.y-C.offsetY()*k.y,H=(s.Konva.getAngle(C.getAbsoluteRotation())+Math.PI*2)%(Math.PI*2),W={x:R.x+L*Math.cos(H)+O*Math.sin(-H),y:R.y+O*Math.cos(H)+L*Math.sin(H),width:y.width*k.x,height:y.height*k.y,rotation:H};return v(W,-s.Konva.getAngle(P),{x:0,y:0})}__getNodeRect(){if(!this.getNode())return{x:-m,y:-m,width:0,height:0,rotation:0};const P=[];this.nodes().map(H=>{const W=H.getClientRect({skipTransform:!0,skipShadow:!0,skipStroke:this.ignoreStroke()}),se=[{x:W.x,y:W.y},{x:W.x+W.width,y:W.y},{x:W.x+W.width,y:W.y+W.height},{x:W.x,y:W.y+W.height}],te=H.getAbsoluteTransform();se.forEach(function(oe){const Q=te.point(oe);P.push(Q)})});const z=new t.Transform;z.rotate(-s.Konva.getAngle(this.rotation()));let y=1/0,k=1/0,R=-1/0,L=-1/0;P.forEach(function(H){const W=z.point(H);y===void 0&&(y=R=W.x,k=L=W.y),y=Math.min(y,W.x),k=Math.min(k,W.y),R=Math.max(R,W.x),L=Math.max(L,W.y)}),z.invert();const O=z.point({x:y,y:k});return{x:O.x,y:O.y,width:R-y,height:L-k,rotation:s.Konva.getAngle(this.rotation())}}getX(){return this._getNodeRect().x}getY(){return this._getNodeRect().y}getWidth(){return this._getNodeRect().width}getHeight(){return this._getNodeRect().height}_createElements(){this._createBack(),w.forEach(C=>{this._createAnchor(C)}),this._createAnchor("rotater")}_createAnchor(C){const P=new o.Rect({stroke:"rgb(0, 161, 255)",fill:"white",strokeWidth:1,name:C+" _anchor",dragDistance:0,draggable:!0,hitStrokeWidth:u?10:"auto"}),z=this;P.on("mousedown touchstart",function(y){z._handleMouseDown(y)}),P.on("dragstart",y=>{P.stopDrag(),y.cancelBubble=!0}),P.on("dragend",y=>{y.cancelBubble=!0}),P.on("mouseenter",()=>{const y=s.Konva.getAngle(this.rotation()),k=this.rotateAnchorCursor(),R=_(C,y,k);P.getStage().content&&(P.getStage().content.style.cursor=R),this._cursorChange=!0}),P.on("mouseout",()=>{P.getStage().content&&(P.getStage().content.style.cursor=""),this._cursorChange=!1}),this.add(P)}_createBack(){const C=new n.Shape({name:"back",width:0,height:0,draggable:!0,sceneFunc(P,z){const y=z.getParent(),k=y.padding();P.beginPath(),P.rect(-k,-k,z.width()+k*2,z.height()+k*2),P.moveTo(z.width()/2,-k),y.rotateEnabled()&&y.rotateLineVisible()&&P.lineTo(z.width()/2,-y.rotateAnchorOffset()*t.Util._sign(z.height())-k),P.fillStrokeShape(z)},hitFunc:(P,z)=>{if(!this.shouldOverdrawWholeArea())return;const y=this.padding();P.beginPath(),P.rect(-y,-y,z.width()+y*2,z.height()+y*2),P.fillStrokeShape(z)}});this.add(C),this._proxyDrag(C),C.on("dragstart",P=>{P.cancelBubble=!0}),C.on("dragmove",P=>{P.cancelBubble=!0}),C.on("dragend",P=>{P.cancelBubble=!0}),this.on("dragmove",P=>{this.update()})}_handleMouseDown(C){if(this._transforming)return;this._movingAnchorName=C.target.name().split(" ")[0];const P=this._getNodeRect(),z=P.width,y=P.height,k=Math.sqrt(Math.pow(z,2)+Math.pow(y,2));this.sin=Math.abs(y/k),this.cos=Math.abs(z/k),typeof window<"u"&&(window.addEventListener("mousemove",this._handleMouseMove),window.addEventListener("touchmove",this._handleMouseMove),window.addEventListener("mouseup",this._handleMouseUp,!0),window.addEventListener("touchend",this._handleMouseUp,!0)),this._transforming=!0;const R=C.target.getAbsolutePosition(),L=C.target.getStage().getPointerPosition();this._anchorDragOffset={x:L.x-R.x,y:L.y-R.y},T++,this._fire("transformstart",{evt:C.evt,target:this.getNode()}),this._nodes.forEach(O=>{O._fire("transformstart",{evt:C.evt,target:O})})}_handleMouseMove(C){let P,z,y;const k=this.findOne("."+this._movingAnchorName),R=k.getStage();R.setPointersPositions(C);const L=R.getPointerPosition();let O={x:L.x-this._anchorDragOffset.x,y:L.y-this._anchorDragOffset.y};const H=k.getAbsolutePosition();this.anchorDragBoundFunc()&&(O=this.anchorDragBoundFunc()(H,O,C)),k.setAbsolutePosition(O);const W=k.getAbsolutePosition();if(H.x===W.x&&H.y===W.y)return;if(this._movingAnchorName==="rotater"){const Z=this._getNodeRect();P=k.x()-Z.width/2,z=-k.y()+Z.height/2;let de=Math.atan2(-z,P)+Math.PI/2;Z.height<0&&(de-=Math.PI);const N=s.Konva.getAngle(this.rotation())+de,G=s.Konva.getAngle(this.rotationSnapTolerance()),ie=S(this.rotationSnaps(),N,G)-Z.rotation,X=b(Z,ie);this._fitNodesInto(X,C);return}const se=this.shiftBehavior();let te;se==="inverted"?te=this.keepRatio()&&!C.shiftKey:se==="none"?te=this.keepRatio():te=this.keepRatio()||C.shiftKey;var he=this.centeredScaling()||C.altKey;if(this._movingAnchorName==="top-left"){if(te){var oe=he?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".bottom-right").x(),y:this.findOne(".bottom-right").y()};y=Math.sqrt(Math.pow(oe.x-k.x(),2)+Math.pow(oe.y-k.y(),2));var Q=this.findOne(".top-left").x()>oe.x?-1:1,ce=this.findOne(".top-left").y()>oe.y?-1:1;P=y*this.cos*Q,z=y*this.sin*ce,this.findOne(".top-left").x(oe.x-P),this.findOne(".top-left").y(oe.y-z)}}else if(this._movingAnchorName==="top-center")this.findOne(".top-left").y(k.y());else if(this._movingAnchorName==="top-right"){if(te){var oe=he?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".bottom-left").x(),y:this.findOne(".bottom-left").y()};y=Math.sqrt(Math.pow(k.x()-oe.x,2)+Math.pow(oe.y-k.y(),2));var Q=this.findOne(".top-right").x()<oe.x?-1:1,ce=this.findOne(".top-right").y()>oe.y?-1:1;P=y*this.cos*Q,z=y*this.sin*ce,this.findOne(".top-right").x(oe.x+P),this.findOne(".top-right").y(oe.y-z)}var _e=k.position();this.findOne(".top-left").y(_e.y),this.findOne(".bottom-right").x(_e.x)}else if(this._movingAnchorName==="middle-left")this.findOne(".top-left").x(k.x());else if(this._movingAnchorName==="middle-right")this.findOne(".bottom-right").x(k.x());else if(this._movingAnchorName==="bottom-left"){if(te){var oe=he?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".top-right").x(),y:this.findOne(".top-right").y()};y=Math.sqrt(Math.pow(oe.x-k.x(),2)+Math.pow(k.y()-oe.y,2));var Q=oe.x<k.x()?-1:1,ce=k.y()<oe.y?-1:1;P=y*this.cos*Q,z=y*this.sin*ce,k.x(oe.x-P),k.y(oe.y+z)}_e=k.position(),this.findOne(".top-left").x(_e.x),this.findOne(".bottom-right").y(_e.y)}else if(this._movingAnchorName==="bottom-center")this.findOne(".bottom-right").y(k.y());else if(this._movingAnchorName==="bottom-right"){if(te){var oe=he?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".top-left").x(),y:this.findOne(".top-left").y()};y=Math.sqrt(Math.pow(k.x()-oe.x,2)+Math.pow(k.y()-oe.y,2));var Q=this.findOne(".bottom-right").x()<oe.x?-1:1,ce=this.findOne(".bottom-right").y()<oe.y?-1:1;P=y*this.cos*Q,z=y*this.sin*ce,this.findOne(".bottom-right").x(oe.x+P),this.findOne(".bottom-right").y(oe.y+z)}}else console.error(new Error("Wrong position argument of selection resizer: "+this._movingAnchorName));var he=this.centeredScaling()||C.altKey;if(he){const Z=this.findOne(".top-left"),de=this.findOne(".bottom-right"),$=Z.x(),N=Z.y(),G=this.getWidth()-de.x(),Y=this.getHeight()-de.y();de.move({x:-$,y:-N}),Z.move({x:G,y:Y})}const D=this.findOne(".top-left").getAbsolutePosition();P=D.x,z=D.y;const V=this.findOne(".bottom-right").x()-this.findOne(".top-left").x(),q=this.findOne(".bottom-right").y()-this.findOne(".top-left").y();this._fitNodesInto({x:P,y:z,width:V,height:q,rotation:s.Konva.getAngle(this.rotation())},C)}_handleMouseUp(C){this._removeEvents(C)}getAbsoluteTransform(){return this.getTransform()}_removeEvents(C){var P;if(this._transforming){this._transforming=!1,typeof window<"u"&&(window.removeEventListener("mousemove",this._handleMouseMove),window.removeEventListener("touchmove",this._handleMouseMove),window.removeEventListener("mouseup",this._handleMouseUp,!0),window.removeEventListener("touchend",this._handleMouseUp,!0));const z=this.getNode();T--,this._fire("transformend",{evt:C,target:z}),(P=this.getLayer())===null||P===void 0||P.batchDraw(),z&&this._nodes.forEach(y=>{var k;y._fire("transformend",{evt:C,target:y}),(k=y.getLayer())===null||k===void 0||k.batchDraw()}),this._movingAnchorName=null}}_fitNodesInto(C,P){const z=this._getNodeRect(),y=1;if(t.Util._inRange(C.width,-this.padding()*2-y,y)){this.update();return}if(t.Util._inRange(C.height,-this.padding()*2-y,y)){this.update();return}const k=new t.Transform;if(k.rotate(s.Konva.getAngle(this.rotation())),this._movingAnchorName&&C.width<0&&this._movingAnchorName.indexOf("left")>=0){const te=k.point({x:-this.padding()*2,y:0});C.x+=te.x,C.y+=te.y,C.width+=this.padding()*2,this._movingAnchorName=this._movingAnchorName.replace("left","right"),this._anchorDragOffset.x-=te.x,this._anchorDragOffset.y-=te.y}else if(this._movingAnchorName&&C.width<0&&this._movingAnchorName.indexOf("right")>=0){const te=k.point({x:this.padding()*2,y:0});this._movingAnchorName=this._movingAnchorName.replace("right","left"),this._anchorDragOffset.x-=te.x,this._anchorDragOffset.y-=te.y,C.width+=this.padding()*2}if(this._movingAnchorName&&C.height<0&&this._movingAnchorName.indexOf("top")>=0){const te=k.point({x:0,y:-this.padding()*2});C.x+=te.x,C.y+=te.y,this._movingAnchorName=this._movingAnchorName.replace("top","bottom"),this._anchorDragOffset.x-=te.x,this._anchorDragOffset.y-=te.y,C.height+=this.padding()*2}else if(this._movingAnchorName&&C.height<0&&this._movingAnchorName.indexOf("bottom")>=0){const te=k.point({x:0,y:this.padding()*2});this._movingAnchorName=this._movingAnchorName.replace("bottom","top"),this._anchorDragOffset.x-=te.x,this._anchorDragOffset.y-=te.y,C.height+=this.padding()*2}if(this.boundBoxFunc()){const te=this.boundBoxFunc()(z,C);te?C=te:t.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!")}const R=1e7,L=new t.Transform;L.translate(z.x,z.y),L.rotate(z.rotation),L.scale(z.width/R,z.height/R);const O=new t.Transform,H=C.width/R,W=C.height/R;this.flipEnabled()===!1?(O.translate(C.x,C.y),O.rotate(C.rotation),O.translate(C.width<0?C.width:0,C.height<0?C.height:0),O.scale(Math.abs(H),Math.abs(W))):(O.translate(C.x,C.y),O.rotate(C.rotation),O.scale(H,W));const se=O.multiply(L.invert());this._nodes.forEach(te=>{var oe;const Q=te.getParent().getAbsoluteTransform(),ce=te.getTransform().copy();ce.translate(te.offsetX(),te.offsetY());const _e=new t.Transform;_e.multiply(Q.copy().invert()).multiply(se).multiply(Q).multiply(ce);const he=_e.decompose();te.setAttrs(he),(oe=te.getLayer())===null||oe===void 0||oe.batchDraw()}),this.rotation(t.Util._getRotation(C.rotation)),this._nodes.forEach(te=>{this._fire("transform",{evt:P,target:te}),te._fire("transform",{evt:P,target:te})}),this._resetTransformCache(),this.update(),this.getLayer().batchDraw()}forceUpdate(){this._resetTransformCache(),this.update()}_batchChangeChild(C,P){this.findOne(C).setAttrs(P)}update(){var C;const P=this._getNodeRect();this.rotation(t.Util._getRotation(P.rotation));const z=P.width,y=P.height,k=this.enabledAnchors(),R=this.resizeEnabled(),L=this.padding(),O=this.anchorSize(),H=this.find("._anchor");H.forEach(se=>{se.setAttrs({width:O,height:O,offsetX:O/2,offsetY:O/2,stroke:this.anchorStroke(),strokeWidth:this.anchorStrokeWidth(),fill:this.anchorFill(),cornerRadius:this.anchorCornerRadius()})}),this._batchChangeChild(".top-left",{x:0,y:0,offsetX:O/2+L,offsetY:O/2+L,visible:R&&k.indexOf("top-left")>=0}),this._batchChangeChild(".top-center",{x:z/2,y:0,offsetY:O/2+L,visible:R&&k.indexOf("top-center")>=0}),this._batchChangeChild(".top-right",{x:z,y:0,offsetX:O/2-L,offsetY:O/2+L,visible:R&&k.indexOf("top-right")>=0}),this._batchChangeChild(".middle-left",{x:0,y:y/2,offsetX:O/2+L,visible:R&&k.indexOf("middle-left")>=0}),this._batchChangeChild(".middle-right",{x:z,y:y/2,offsetX:O/2-L,visible:R&&k.indexOf("middle-right")>=0}),this._batchChangeChild(".bottom-left",{x:0,y,offsetX:O/2+L,offsetY:O/2-L,visible:R&&k.indexOf("bottom-left")>=0}),this._batchChangeChild(".bottom-center",{x:z/2,y,offsetY:O/2-L,visible:R&&k.indexOf("bottom-center")>=0}),this._batchChangeChild(".bottom-right",{x:z,y,offsetX:O/2-L,offsetY:O/2-L,visible:R&&k.indexOf("bottom-right")>=0}),this._batchChangeChild(".rotater",{x:z/2,y:-this.rotateAnchorOffset()*t.Util._sign(y)-L,visible:this.rotateEnabled()}),this._batchChangeChild(".back",{width:z,height:y,visible:this.borderEnabled(),stroke:this.borderStroke(),strokeWidth:this.borderStrokeWidth(),dash:this.borderDash(),x:0,y:0});const W=this.anchorStyleFunc();W&&H.forEach(se=>{W(se)}),(C=this.getLayer())===null||C===void 0||C.batchDraw()}isTransforming(){return this._transforming}stopTransform(){if(this._transforming){this._removeEvents();const C=this.findOne("."+this._movingAnchorName);C&&C.stopDrag()}}destroy(){return this.getStage()&&this._cursorChange&&this.getStage().content&&(this.getStage().content.style.cursor=""),r.Group.prototype.destroy.call(this),this.detach(),this._removeEvents(),this}toObject(){return i.Node.prototype.toObject.call(this)}clone(C){return i.Node.prototype.clone.call(this,C)}getClientRect(){return this.nodes().length>0?super.getClientRect():{x:0,y:0,width:0,height:0}}};es.Transformer=E,E.isTransforming=()=>T>0;function A(M){return M instanceof Array||t.Util.warn("enabledAnchors value should be an array"),M instanceof Array&&M.forEach(function(C){w.indexOf(C)===-1&&t.Util.warn("Unknown anchor name: "+C+". Available names are: "+w.join(", "))}),M||[]}return E.prototype.className="Transformer",(0,l._registerNode)(E),e.Factory.addGetterSetter(E,"enabledAnchors",w,A),e.Factory.addGetterSetter(E,"flipEnabled",!0,(0,a.getBooleanValidator)()),e.Factory.addGetterSetter(E,"resizeEnabled",!0),e.Factory.addGetterSetter(E,"anchorSize",10,(0,a.getNumberValidator)()),e.Factory.addGetterSetter(E,"rotateEnabled",!0),e.Factory.addGetterSetter(E,"rotateLineVisible",!0),e.Factory.addGetterSetter(E,"rotationSnaps",[]),e.Factory.addGetterSetter(E,"rotateAnchorOffset",50,(0,a.getNumberValidator)()),e.Factory.addGetterSetter(E,"rotateAnchorCursor","crosshair"),e.Factory.addGetterSetter(E,"rotationSnapTolerance",5,(0,a.getNumberValidator)()),e.Factory.addGetterSetter(E,"borderEnabled",!0),e.Factory.addGetterSetter(E,"anchorStroke","rgb(0, 161, 255)"),e.Factory.addGetterSetter(E,"anchorStrokeWidth",1,(0,a.getNumberValidator)()),e.Factory.addGetterSetter(E,"anchorFill","white"),e.Factory.addGetterSetter(E,"anchorCornerRadius",0,(0,a.getNumberValidator)()),e.Factory.addGetterSetter(E,"borderStroke","rgb(0, 161, 255)"),e.Factory.addGetterSetter(E,"borderStrokeWidth",1,(0,a.getNumberValidator)()),e.Factory.addGetterSetter(E,"borderDash"),e.Factory.addGetterSetter(E,"keepRatio",!0),e.Factory.addGetterSetter(E,"shiftBehavior","default"),e.Factory.addGetterSetter(E,"centeredScaling",!1),e.Factory.addGetterSetter(E,"ignoreStroke",!1),e.Factory.addGetterSetter(E,"padding",0,(0,a.getNumberValidator)()),e.Factory.addGetterSetter(E,"nodes"),e.Factory.addGetterSetter(E,"node"),e.Factory.addGetterSetter(E,"boundBoxFunc"),e.Factory.addGetterSetter(E,"anchorDragBoundFunc"),e.Factory.addGetterSetter(E,"anchorStyleFunc"),e.Factory.addGetterSetter(E,"shouldOverdrawWholeArea",!1),e.Factory.addGetterSetter(E,"useSingleNodeRotation",!0),e.Factory.backCompat(E,{lineEnabled:"borderEnabled",rotateHandlerOffset:"rotateAnchorOffset",enabledHandlers:"enabledAnchors"}),es}var ts={},gd;function z_(){if(gd)return ts;gd=1,Object.defineProperty(ts,"__esModule",{value:!0}),ts.Wedge=void 0;const t=Be(),e=At(),i=$e(),n=ze(),o=$e();let r=class extends e.Shape{_sceneFunc(a){a.beginPath(),a.arc(0,0,this.radius(),0,i.Konva.getAngle(this.angle()),this.clockwise()),a.lineTo(0,0),a.closePath(),a.fillStrokeShape(this)}getWidth(){return this.radius()*2}getHeight(){return this.radius()*2}setWidth(a){this.radius(a/2)}setHeight(a){this.radius(a/2)}};return ts.Wedge=r,r.prototype.className="Wedge",r.prototype._centroid=!0,r.prototype._attrsAffectingSize=["radius"],(0,o._registerNode)(r),t.Factory.addGetterSetter(r,"radius",0,(0,n.getNumberValidator)()),t.Factory.addGetterSetter(r,"angle",0,(0,n.getNumberValidator)()),t.Factory.addGetterSetter(r,"clockwise",!1),t.Factory.backCompat(r,{angleDeg:"angle",getAngleDeg:"getAngle",setAngleDeg:"setAngle"}),ts}var is={},vd;function N_(){if(vd)return is;vd=1,Object.defineProperty(is,"__esModule",{value:!0}),is.Blur=void 0;const t=Be(),e=vt(),i=ze();function n(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}const o=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],r=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function s(l,d){const h=l.data,c=l.width,g=l.height;let f,u,_,w,m,p,v,b,S,T,E,A,M,C,P,z,y,k,R,L,O,H,W,se;const te=d+d+1,oe=c-1,Q=g-1,ce=d+1,_e=ce*(ce+1)/2,he=new n,D=o[d],V=r[d];let q=null,Z=he,de=null,$=null;for(_=1;_<te;_++)Z=Z.next=new n,_===ce&&(q=Z);for(Z.next=he,v=p=0,u=0;u<g;u++){for(z=y=k=R=b=S=T=E=0,A=ce*(L=h[p]),M=ce*(O=h[p+1]),C=ce*(H=h[p+2]),P=ce*(W=h[p+3]),b+=_e*L,S+=_e*O,T+=_e*H,E+=_e*W,Z=he,_=0;_<ce;_++)Z.r=L,Z.g=O,Z.b=H,Z.a=W,Z=Z.next;for(_=1;_<ce;_++)w=p+((oe<_?oe:_)<<2),b+=(Z.r=L=h[w])*(se=ce-_),S+=(Z.g=O=h[w+1])*se,T+=(Z.b=H=h[w+2])*se,E+=(Z.a=W=h[w+3])*se,z+=L,y+=O,k+=H,R+=W,Z=Z.next;for(de=he,$=q,f=0;f<c;f++)h[p+3]=W=E*D>>V,W!==0?(W=255/W,h[p]=(b*D>>V)*W,h[p+1]=(S*D>>V)*W,h[p+2]=(T*D>>V)*W):h[p]=h[p+1]=h[p+2]=0,b-=A,S-=M,T-=C,E-=P,A-=de.r,M-=de.g,C-=de.b,P-=de.a,w=v+((w=f+d+1)<oe?w:oe)<<2,z+=de.r=h[w],y+=de.g=h[w+1],k+=de.b=h[w+2],R+=de.a=h[w+3],b+=z,S+=y,T+=k,E+=R,de=de.next,A+=L=$.r,M+=O=$.g,C+=H=$.b,P+=W=$.a,z-=L,y-=O,k-=H,R-=W,$=$.next,p+=4;v+=c}for(f=0;f<c;f++){for(y=k=R=z=S=T=E=b=0,p=f<<2,A=ce*(L=h[p]),M=ce*(O=h[p+1]),C=ce*(H=h[p+2]),P=ce*(W=h[p+3]),b+=_e*L,S+=_e*O,T+=_e*H,E+=_e*W,Z=he,_=0;_<ce;_++)Z.r=L,Z.g=O,Z.b=H,Z.a=W,Z=Z.next;for(m=c,_=1;_<=d;_++)p=m+f<<2,b+=(Z.r=L=h[p])*(se=ce-_),S+=(Z.g=O=h[p+1])*se,T+=(Z.b=H=h[p+2])*se,E+=(Z.a=W=h[p+3])*se,z+=L,y+=O,k+=H,R+=W,Z=Z.next,_<Q&&(m+=c);for(p=f,de=he,$=q,u=0;u<g;u++)w=p<<2,h[w+3]=W=E*D>>V,W>0?(W=255/W,h[w]=(b*D>>V)*W,h[w+1]=(S*D>>V)*W,h[w+2]=(T*D>>V)*W):h[w]=h[w+1]=h[w+2]=0,b-=A,S-=M,T-=C,E-=P,A-=de.r,M-=de.g,C-=de.b,P-=de.a,w=f+((w=u+ce)<Q?w:Q)*c<<2,b+=z+=de.r=h[w],S+=y+=de.g=h[w+1],T+=k+=de.b=h[w+2],E+=R+=de.a=h[w+3],de=de.next,A+=L=$.r,M+=O=$.g,C+=H=$.b,P+=W=$.a,z-=L,y-=O,k-=H,R-=W,$=$.next,p+=c}}const a=function(d){const h=Math.round(this.blurRadius());h>0&&s(d,h)};return is.Blur=a,t.Factory.addGetterSetter(e.Node,"blurRadius",0,(0,i.getNumberValidator)(),t.Factory.afterSetFilter),is}var ns={},_d;function V_(){if(_d)return ns;_d=1,Object.defineProperty(ns,"__esModule",{value:!0}),ns.Brighten=void 0;const t=Be(),e=vt(),i=ze(),n=function(o){const r=this.brightness()*255,s=o.data,a=s.length;for(let l=0;l<a;l+=4)s[l]+=r,s[l+1]+=r,s[l+2]+=r};return ns.Brighten=n,t.Factory.addGetterSetter(e.Node,"brightness",0,(0,i.getNumberValidator)(),t.Factory.afterSetFilter),ns}var rs={},md;function H_(){if(md)return rs;md=1,Object.defineProperty(rs,"__esModule",{value:!0}),rs.Contrast=void 0;const t=Be(),e=vt(),i=ze(),n=function(o){const r=Math.pow((this.contrast()+100)/100,2),s=o.data,a=s.length;let l=150,d=150,h=150;for(let c=0;c<a;c+=4)l=s[c],d=s[c+1],h=s[c+2],l/=255,l-=.5,l*=r,l+=.5,l*=255,d/=255,d-=.5,d*=r,d+=.5,d*=255,h/=255,h-=.5,h*=r,h+=.5,h*=255,l=l<0?0:l>255?255:l,d=d<0?0:d>255?255:d,h=h<0?0:h>255?255:h,s[c]=l,s[c+1]=d,s[c+2]=h};return rs.Contrast=n,t.Factory.addGetterSetter(e.Node,"contrast",0,(0,i.getNumberValidator)(),t.Factory.afterSetFilter),rs}var ss={},bd;function U_(){if(bd)return ss;bd=1,Object.defineProperty(ss,"__esModule",{value:!0}),ss.Emboss=void 0;const t=Be(),e=vt(),i=pt(),n=ze(),o=function(r){const s=this.embossStrength()*10,a=this.embossWhiteLevel()*255,l=this.embossDirection(),d=this.embossBlend(),h=r.data,c=r.width,g=r.height,f=c*4;let u=0,_=0,w=g;switch(l){case"top-left":u=-1,_=-1;break;case"top":u=-1,_=0;break;case"top-right":u=-1,_=1;break;case"right":u=0,_=1;break;case"bottom-right":u=1,_=1;break;case"bottom":u=1,_=0;break;case"bottom-left":u=1,_=-1;break;case"left":u=0,_=-1;break;default:i.Util.error("Unknown emboss direction: "+l)}do{const m=(w-1)*f;let p=u;w+p<1&&(p=0),w+p>g&&(p=0);const v=(w-1+p)*c*4;let b=c;do{const S=m+(b-1)*4;let T=_;b+T<1&&(T=0),b+T>c&&(T=0);const E=v+(b-1+T)*4,A=h[S]-h[E],M=h[S+1]-h[E+1],C=h[S+2]-h[E+2];let P=A;const z=P>0?P:-P,y=M>0?M:-M,k=C>0?C:-C;if(y>z&&(P=M),k>z&&(P=C),P*=s,d){const R=h[S]+P,L=h[S+1]+P,O=h[S+2]+P;h[S]=R>255?255:R<0?0:R,h[S+1]=L>255?255:L<0?0:L,h[S+2]=O>255?255:O<0?0:O}else{let R=a-P;R<0?R=0:R>255&&(R=255),h[S]=h[S+1]=h[S+2]=R}}while(--b)}while(--w)};return ss.Emboss=o,t.Factory.addGetterSetter(e.Node,"embossStrength",.5,(0,n.getNumberValidator)(),t.Factory.afterSetFilter),t.Factory.addGetterSetter(e.Node,"embossWhiteLevel",.5,(0,n.getNumberValidator)(),t.Factory.afterSetFilter),t.Factory.addGetterSetter(e.Node,"embossDirection","top-left",void 0,t.Factory.afterSetFilter),t.Factory.addGetterSetter(e.Node,"embossBlend",!1,void 0,t.Factory.afterSetFilter),ss}var os={},yd;function G_(){if(yd)return os;yd=1,Object.defineProperty(os,"__esModule",{value:!0}),os.Enhance=void 0;const t=Be(),e=vt(),i=ze();function n(r,s,a,l,d){const h=a-s,c=d-l;if(h===0)return l+c/2;if(c===0)return l;let g=(r-s)/h;return g=c*g+l,g}const o=function(r){const s=r.data,a=s.length;let l=s[0],d=l,h,c=s[1],g=c,f,u=s[2],_=u,w;const m=this.enhance();if(m===0)return;for(let P=0;P<a;P+=4)h=s[P+0],h<l?l=h:h>d&&(d=h),f=s[P+1],f<c?c=f:f>g&&(g=f),w=s[P+2],w<u?u=w:w>_&&(_=w);d===l&&(d=255,l=0),g===c&&(g=255,c=0),_===u&&(_=255,u=0);let p,v,b,S,T,E,A,M,C;m>0?(v=d+m*(255-d),b=l-m*(l-0),T=g+m*(255-g),E=c-m*(c-0),M=_+m*(255-_),C=u-m*(u-0)):(p=(d+l)*.5,v=d+m*(d-p),b=l+m*(l-p),S=(g+c)*.5,T=g+m*(g-S),E=c+m*(c-S),A=(_+u)*.5,M=_+m*(_-A),C=u+m*(u-A));for(let P=0;P<a;P+=4)s[P+0]=n(s[P+0],l,d,b,v),s[P+1]=n(s[P+1],c,g,E,T),s[P+2]=n(s[P+2],u,_,C,M)};return os.Enhance=o,t.Factory.addGetterSetter(e.Node,"enhance",0,(0,i.getNumberValidator)(),t.Factory.afterSetFilter),os}var as={},xd;function j_(){if(xd)return as;xd=1,Object.defineProperty(as,"__esModule",{value:!0}),as.Grayscale=void 0;const t=function(e){const i=e.data,n=i.length;for(let o=0;o<n;o+=4){const r=.34*i[o]+.5*i[o+1]+.16*i[o+2];i[o]=r,i[o+1]=r,i[o+2]=r}};return as.Grayscale=t,as}var ls={},wd;function q_(){if(wd)return ls;wd=1,Object.defineProperty(ls,"__esModule",{value:!0}),ls.HSL=void 0;const t=Be(),e=vt(),i=ze();t.Factory.addGetterSetter(e.Node,"hue",0,(0,i.getNumberValidator)(),t.Factory.afterSetFilter),t.Factory.addGetterSetter(e.Node,"saturation",0,(0,i.getNumberValidator)(),t.Factory.afterSetFilter),t.Factory.addGetterSetter(e.Node,"luminance",0,(0,i.getNumberValidator)(),t.Factory.afterSetFilter);const n=function(o){const r=o.data,s=r.length,a=1,l=Math.pow(2,this.saturation()),d=Math.abs(this.hue()+360)%360,h=this.luminance()*127,c=a*l*Math.cos(d*Math.PI/180),g=a*l*Math.sin(d*Math.PI/180),f=.299*a+.701*c+.167*g,u=.587*a-.587*c+.33*g,_=.114*a-.114*c-.497*g,w=.299*a-.299*c-.328*g,m=.587*a+.413*c+.035*g,p=.114*a-.114*c+.293*g,v=.299*a-.3*c+1.25*g,b=.587*a-.586*c-1.05*g,S=.114*a+.886*c-.2*g;let T,E,A,M;for(let C=0;C<s;C+=4)T=r[C+0],E=r[C+1],A=r[C+2],M=r[C+3],r[C+0]=f*T+u*E+_*A+h,r[C+1]=w*T+m*E+p*A+h,r[C+2]=v*T+b*E+S*A+h,r[C+3]=M};return ls.HSL=n,ls}var cs={},Sd;function W_(){if(Sd)return cs;Sd=1,Object.defineProperty(cs,"__esModule",{value:!0}),cs.HSV=void 0;const t=Be(),e=vt(),i=ze(),n=function(o){const r=o.data,s=r.length,a=Math.pow(2,this.value()),l=Math.pow(2,this.saturation()),d=Math.abs(this.hue()+360)%360,h=a*l*Math.cos(d*Math.PI/180),c=a*l*Math.sin(d*Math.PI/180),g=.299*a+.701*h+.167*c,f=.587*a-.587*h+.33*c,u=.114*a-.114*h-.497*c,_=.299*a-.299*h-.328*c,w=.587*a+.413*h+.035*c,m=.114*a-.114*h+.293*c,p=.299*a-.3*h+1.25*c,v=.587*a-.586*h-1.05*c,b=.114*a+.886*h-.2*c;let S,T,E,A;for(let M=0;M<s;M+=4)S=r[M+0],T=r[M+1],E=r[M+2],A=r[M+3],r[M+0]=g*S+f*T+u*E,r[M+1]=_*S+w*T+m*E,r[M+2]=p*S+v*T+b*E,r[M+3]=A};return cs.HSV=n,t.Factory.addGetterSetter(e.Node,"hue",0,(0,i.getNumberValidator)(),t.Factory.afterSetFilter),t.Factory.addGetterSetter(e.Node,"saturation",0,(0,i.getNumberValidator)(),t.Factory.afterSetFilter),t.Factory.addGetterSetter(e.Node,"value",0,(0,i.getNumberValidator)(),t.Factory.afterSetFilter),cs}var hs={},Cd;function K_(){if(Cd)return hs;Cd=1,Object.defineProperty(hs,"__esModule",{value:!0}),hs.Invert=void 0;const t=function(e){const i=e.data,n=i.length;for(let o=0;o<n;o+=4)i[o]=255-i[o],i[o+1]=255-i[o+1],i[o+2]=255-i[o+2]};return hs.Invert=t,hs}var ds={},kd;function Y_(){if(kd)return ds;kd=1,Object.defineProperty(ds,"__esModule",{value:!0}),ds.Kaleidoscope=void 0;const t=Be(),e=vt(),i=pt(),n=ze(),o=function(a,l,d){const h=a.data,c=l.data,g=a.width,f=a.height,u=d.polarCenterX||g/2,_=d.polarCenterY||f/2;let w=Math.sqrt(u*u+_*_),m=g-u,p=f-_;const v=Math.sqrt(m*m+p*p);w=v>w?v:w;const b=f,S=g,T=360/S*Math.PI/180;for(let E=0;E<S;E+=1){const A=Math.sin(E*T),M=Math.cos(E*T);for(let C=0;C<b;C+=1){m=Math.floor(u+w*C/b*M),p=Math.floor(_+w*C/b*A);let P=(p*g+m)*4;const z=h[P+0],y=h[P+1],k=h[P+2],R=h[P+3];P=(E+C*g)*4,c[P+0]=z,c[P+1]=y,c[P+2]=k,c[P+3]=R}}},r=function(a,l,d){const h=a.data,c=l.data,g=a.width,f=a.height,u=d.polarCenterX||g/2,_=d.polarCenterY||f/2;let w=Math.sqrt(u*u+_*_),m=g-u,p=f-_;const v=Math.sqrt(m*m+p*p);w=v>w?v:w;const b=f,S=g,T=0;let E,A;for(m=0;m<g;m+=1)for(p=0;p<f;p+=1){const M=m-u,C=p-_,P=Math.sqrt(M*M+C*C)*b/w;let z=(Math.atan2(C,M)*180/Math.PI+360+T)%360;z=z*S/360,E=Math.floor(z),A=Math.floor(P);let y=(A*g+E)*4;const k=h[y+0],R=h[y+1],L=h[y+2],O=h[y+3];y=(p*g+m)*4,c[y+0]=k,c[y+1]=R,c[y+2]=L,c[y+3]=O}},s=function(a){const l=a.width,d=a.height;let h,c,g,f,u,_,w,m,p,v,b=Math.round(this.kaleidoscopePower());const S=Math.round(this.kaleidoscopeAngle()),T=Math.floor(l*(S%360)/360);if(b<1)return;const E=i.Util.createCanvasElement();E.width=l,E.height=d;const A=E.getContext("2d").getImageData(0,0,l,d);i.Util.releaseCanvas(E),o(a,A,{polarCenterX:l/2,polarCenterY:d/2});let M=l/Math.pow(2,b);for(;M<=8;)M=M*2,b-=1;M=Math.ceil(M);let C=M,P=0,z=C,y=1;for(T+M>l&&(P=C,z=0,y=-1),c=0;c<d;c+=1)for(h=P;h!==z;h+=y)g=Math.round(h+T)%l,p=(l*c+g)*4,u=A.data[p+0],_=A.data[p+1],w=A.data[p+2],m=A.data[p+3],v=(l*c+h)*4,A.data[v+0]=u,A.data[v+1]=_,A.data[v+2]=w,A.data[v+3]=m;for(c=0;c<d;c+=1)for(C=Math.floor(M),f=0;f<b;f+=1){for(h=0;h<C+1;h+=1)p=(l*c+h)*4,u=A.data[p+0],_=A.data[p+1],w=A.data[p+2],m=A.data[p+3],v=(l*c+C*2-h-1)*4,A.data[v+0]=u,A.data[v+1]=_,A.data[v+2]=w,A.data[v+3]=m;C*=2}r(A,a,{polarRotation:0})};return ds.Kaleidoscope=s,t.Factory.addGetterSetter(e.Node,"kaleidoscopePower",2,(0,n.getNumberValidator)(),t.Factory.afterSetFilter),t.Factory.addGetterSetter(e.Node,"kaleidoscopeAngle",0,(0,n.getNumberValidator)(),t.Factory.afterSetFilter),ds}var us={},Ed;function X_(){if(Ed)return us;Ed=1,Object.defineProperty(us,"__esModule",{value:!0}),us.Mask=void 0;const t=Be(),e=vt(),i=ze();function n(g,f,u){let _=(u*g.width+f)*4;const w=[];return w.push(g.data[_++],g.data[_++],g.data[_++],g.data[_++]),w}function o(g,f){return Math.sqrt(Math.pow(g[0]-f[0],2)+Math.pow(g[1]-f[1],2)+Math.pow(g[2]-f[2],2))}function r(g){const f=[0,0,0];for(let u=0;u<g.length;u++)f[0]+=g[u][0],f[1]+=g[u][1],f[2]+=g[u][2];return f[0]/=g.length,f[1]/=g.length,f[2]/=g.length,f}function s(g,f){const u=n(g,0,0),_=n(g,g.width-1,0),w=n(g,0,g.height-1),m=n(g,g.width-1,g.height-1),p=f||10;if(o(u,_)<p&&o(_,m)<p&&o(m,w)<p&&o(w,u)<p){const v=r([_,u,m,w]),b=[];for(let S=0;S<g.width*g.height;S++){const T=o(v,[g.data[S*4],g.data[S*4+1],g.data[S*4+2]]);b[S]=T<p?0:255}return b}}function a(g,f){for(let u=0;u<g.width*g.height;u++)g.data[4*u+3]=f[u]}function l(g,f,u){const _=[1,1,1,1,0,1,1,1,1],w=Math.round(Math.sqrt(_.length)),m=Math.floor(w/2),p=[];for(let v=0;v<u;v++)for(let b=0;b<f;b++){const S=v*f+b;let T=0;for(let E=0;E<w;E++)for(let A=0;A<w;A++){const M=v+E-m,C=b+A-m;if(M>=0&&M<u&&C>=0&&C<f){const P=M*f+C,z=_[E*w+A];T+=g[P]*z}}p[S]=T===255*8?255:0}return p}function d(g,f,u){const _=[1,1,1,1,1,1,1,1,1],w=Math.round(Math.sqrt(_.length)),m=Math.floor(w/2),p=[];for(let v=0;v<u;v++)for(let b=0;b<f;b++){const S=v*f+b;let T=0;for(let E=0;E<w;E++)for(let A=0;A<w;A++){const M=v+E-m,C=b+A-m;if(M>=0&&M<u&&C>=0&&C<f){const P=M*f+C,z=_[E*w+A];T+=g[P]*z}}p[S]=T>=255*4?255:0}return p}function h(g,f,u){const _=[.1111111111111111,.1111111111111111,.1111111111111111,.1111111111111111,.1111111111111111,.1111111111111111,.1111111111111111,.1111111111111111,.1111111111111111],w=Math.round(Math.sqrt(_.length)),m=Math.floor(w/2),p=[];for(let v=0;v<u;v++)for(let b=0;b<f;b++){const S=v*f+b;let T=0;for(let E=0;E<w;E++)for(let A=0;A<w;A++){const M=v+E-m,C=b+A-m;if(M>=0&&M<u&&C>=0&&C<f){const P=M*f+C,z=_[E*w+A];T+=g[P]*z}}p[S]=T}return p}const c=function(g){const f=this.threshold();let u=s(g,f);return u&&(u=l(u,g.width,g.height),u=d(u,g.width,g.height),u=h(u,g.width,g.height),a(g,u)),g};return us.Mask=c,t.Factory.addGetterSetter(e.Node,"threshold",0,(0,i.getNumberValidator)(),t.Factory.afterSetFilter),us}var fs={},Rd;function Z_(){if(Rd)return fs;Rd=1,Object.defineProperty(fs,"__esModule",{value:!0}),fs.Noise=void 0;const t=Be(),e=vt(),i=ze(),n=function(o){const r=this.noise()*255,s=o.data,a=s.length,l=r/2;for(let d=0;d<a;d+=4)s[d+0]+=l-2*l*Math.random(),s[d+1]+=l-2*l*Math.random(),s[d+2]+=l-2*l*Math.random()};return fs.Noise=n,t.Factory.addGetterSetter(e.Node,"noise",.2,(0,i.getNumberValidator)(),t.Factory.afterSetFilter),fs}var ps={},Ad;function Q_(){if(Ad)return ps;Ad=1,Object.defineProperty(ps,"__esModule",{value:!0}),ps.Pixelate=void 0;const t=Be(),e=pt(),i=vt(),n=ze(),o=function(r){let s=Math.ceil(this.pixelSize()),a=r.width,l=r.height,d,h,c,g,f,u,_,w=Math.ceil(a/s),m=Math.ceil(l/s),p,v,b,S,T,E,A,M=r.data;if(s<=0){e.Util.error("pixelSize value can not be <= 0");return}for(T=0;T<w;T+=1)for(E=0;E<m;E+=1){for(g=0,f=0,u=0,_=0,p=T*s,v=p+s,b=E*s,S=b+s,A=0,d=p;d<v;d+=1)if(!(d>=a))for(h=b;h<S;h+=1)h>=l||(c=(a*h+d)*4,g+=M[c+0],f+=M[c+1],u+=M[c+2],_+=M[c+3],A+=1);for(g=g/A,f=f/A,u=u/A,_=_/A,d=p;d<v;d+=1)if(!(d>=a))for(h=b;h<S;h+=1)h>=l||(c=(a*h+d)*4,M[c+0]=g,M[c+1]=f,M[c+2]=u,M[c+3]=_)}};return ps.Pixelate=o,t.Factory.addGetterSetter(i.Node,"pixelSize",8,(0,n.getNumberValidator)(),t.Factory.afterSetFilter),ps}var gs={},Td;function J_(){if(Td)return gs;Td=1,Object.defineProperty(gs,"__esModule",{value:!0}),gs.Posterize=void 0;const t=Be(),e=vt(),i=ze(),n=function(o){const r=Math.round(this.levels()*254)+1,s=o.data,a=s.length,l=255/r;for(let d=0;d<a;d+=1)s[d]=Math.floor(s[d]/l)*l};return gs.Posterize=n,t.Factory.addGetterSetter(e.Node,"levels",.5,(0,i.getNumberValidator)(),t.Factory.afterSetFilter),gs}var vs={},Pd;function e2(){if(Pd)return vs;Pd=1,Object.defineProperty(vs,"__esModule",{value:!0}),vs.RGB=void 0;const t=Be(),e=vt(),i=ze(),n=function(o){const r=o.data,s=r.length,a=this.red(),l=this.green(),d=this.blue();for(let h=0;h<s;h+=4){const c=(.34*r[h]+.5*r[h+1]+.16*r[h+2])/255;r[h]=c*a,r[h+1]=c*l,r[h+2]=c*d,r[h+3]=r[h+3]}};return vs.RGB=n,t.Factory.addGetterSetter(e.Node,"red",0,function(o){return this._filterUpToDate=!1,o>255?255:o<0?0:Math.round(o)}),t.Factory.addGetterSetter(e.Node,"green",0,function(o){return this._filterUpToDate=!1,o>255?255:o<0?0:Math.round(o)}),t.Factory.addGetterSetter(e.Node,"blue",0,i.RGBComponent,t.Factory.afterSetFilter),vs}var _s={},Id;function t2(){if(Id)return _s;Id=1,Object.defineProperty(_s,"__esModule",{value:!0}),_s.RGBA=void 0;const t=Be(),e=vt(),i=ze(),n=function(o){const r=o.data,s=r.length,a=this.red(),l=this.green(),d=this.blue(),h=this.alpha();for(let c=0;c<s;c+=4){const g=1-h;r[c]=a*h+r[c]*g,r[c+1]=l*h+r[c+1]*g,r[c+2]=d*h+r[c+2]*g}};return _s.RGBA=n,t.Factory.addGetterSetter(e.Node,"red",0,function(o){return this._filterUpToDate=!1,o>255?255:o<0?0:Math.round(o)}),t.Factory.addGetterSetter(e.Node,"green",0,function(o){return this._filterUpToDate=!1,o>255?255:o<0?0:Math.round(o)}),t.Factory.addGetterSetter(e.Node,"blue",0,i.RGBComponent,t.Factory.afterSetFilter),t.Factory.addGetterSetter(e.Node,"alpha",1,function(o){return this._filterUpToDate=!1,o>1?1:o<0?0:o}),_s}var ms={},Od;function i2(){if(Od)return ms;Od=1,Object.defineProperty(ms,"__esModule",{value:!0}),ms.Sepia=void 0;const t=function(e){const i=e.data,n=i.length;for(let o=0;o<n;o+=4){const r=i[o+0],s=i[o+1],a=i[o+2];i[o+0]=Math.min(255,r*.393+s*.769+a*.189),i[o+1]=Math.min(255,r*.349+s*.686+a*.168),i[o+2]=Math.min(255,r*.272+s*.534+a*.131)}};return ms.Sepia=t,ms}var bs={},Md;function n2(){if(Md)return bs;Md=1,Object.defineProperty(bs,"__esModule",{value:!0}),bs.Solarize=void 0;const t=function(e){const i=e.data,n=e.width,o=e.height,r=n*4;let s=o;do{const a=(s-1)*r;let l=n;do{const d=a+(l-1)*4;let h=i[d],c=i[d+1],g=i[d+2];h>127&&(h=255-h),c>127&&(c=255-c),g>127&&(g=255-g),i[d]=h,i[d+1]=c,i[d+2]=g}while(--l)}while(--s)};return bs.Solarize=t,bs}var ys={},Ld;function r2(){if(Ld)return ys;Ld=1,Object.defineProperty(ys,"__esModule",{value:!0}),ys.Threshold=void 0;const t=Be(),e=vt(),i=ze(),n=function(o){const r=this.threshold()*255,s=o.data,a=s.length;for(let l=0;l<a;l+=1)s[l]=s[l]<r?0:255};return ys.Threshold=n,t.Factory.addGetterSetter(e.Node,"threshold",.5,(0,i.getNumberValidator)(),t.Factory.afterSetFilter),ys}var Dd;function s2(){if(Dd)return Lr;Dd=1,Object.defineProperty(Lr,"__esModule",{value:!0}),Lr.Konva=void 0;const t=k_(),e=E_(),i=A_(),n=T_(),o=P_(),r=I_(),s=O_(),a=O0(),l=vc(),d=M0(),h=M_(),c=L_(),g=D_(),f=F_(),u=L0(),_=$_(),w=B_(),m=z_(),p=N_(),v=V_(),b=H_(),S=U_(),T=G_(),E=j_(),A=q_(),M=W_(),C=K_(),P=Y_(),z=X_(),y=Z_(),k=Q_(),R=J_(),L=e2(),O=t2(),H=i2(),W=n2(),se=r2();return Lr.Konva=t.Konva.Util._assign(t.Konva,{Arc:e.Arc,Arrow:i.Arrow,Circle:n.Circle,Ellipse:o.Ellipse,Image:r.Image,Label:s.Label,Tag:s.Tag,Line:a.Line,Path:l.Path,Rect:d.Rect,RegularPolygon:h.RegularPolygon,Ring:c.Ring,Sprite:g.Sprite,Star:f.Star,Text:u.Text,TextPath:_.TextPath,Transformer:w.Transformer,Wedge:m.Wedge,Filters:{Blur:p.Blur,Brighten:v.Brighten,Contrast:b.Contrast,Emboss:S.Emboss,Enhance:T.Enhance,Grayscale:E.Grayscale,HSL:A.HSL,HSV:M.HSV,Invert:C.Invert,Kaleidoscope:P.Kaleidoscope,Mask:z.Mask,Noise:y.Noise,Pixelate:k.Pixelate,Posterize:R.Posterize,RGB:L.RGB,RGBA:O.RGBA,Sepia:H.Sepia,Solarize:W.Solarize,Threshold:se.Threshold}}),Lr}var o2=ko.exports,Fd;function a2(){if(Fd)return ko.exports;Fd=1,Object.defineProperty(o2,"__esModule",{value:!0});const t=s2();return ko.exports=t.Konva,ko.exports}var l2=a2();const Zn=A0(l2);function c2(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Va={exports:{}},Ha={},$d;function xn(){return $d||($d=1,function(t){var e=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";function i(r,s){return Object.prototype.hasOwnProperty.call(r,s)}t.assign=function(r){for(var s=Array.prototype.slice.call(arguments,1);s.length;){var a=s.shift();if(a){if(typeof a!="object")throw new TypeError(a+"must be non-object");for(var l in a)i(a,l)&&(r[l]=a[l])}}return r},t.shrinkBuf=function(r,s){return r.length===s?r:r.subarray?r.subarray(0,s):(r.length=s,r)};var n={arraySet:function(r,s,a,l,d){if(s.subarray&&r.subarray){r.set(s.subarray(a,a+l),d);return}for(var h=0;h<l;h++)r[d+h]=s[a+h]},flattenChunks:function(r){var s,a,l,d,h,c;for(l=0,s=0,a=r.length;s<a;s++)l+=r[s].length;for(c=new Uint8Array(l),d=0,s=0,a=r.length;s<a;s++)h=r[s],c.set(h,d),d+=h.length;return c}},o={arraySet:function(r,s,a,l,d){for(var h=0;h<l;h++)r[d+h]=s[a+h]},flattenChunks:function(r){return[].concat.apply([],r)}};t.setTyped=function(r){r?(t.Buf8=Uint8Array,t.Buf16=Uint16Array,t.Buf32=Int32Array,t.assign(t,n)):(t.Buf8=Array,t.Buf16=Array,t.Buf32=Array,t.assign(t,o))},t.setTyped(e)}(Ha)),Ha}var Qn={},di={},An={},Bd;function h2(){if(Bd)return An;Bd=1;var t=xn(),e=4,i=0,n=1,o=2;function r(B){for(var le=B.length;--le>=0;)B[le]=0}var s=0,a=1,l=2,d=3,h=258,c=29,g=256,f=g+1+c,u=30,_=19,w=2*f+1,m=15,p=16,v=7,b=256,S=16,T=17,E=18,A=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],M=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=512,y=new Array((f+2)*2);r(y);var k=new Array(u*2);r(k);var R=new Array(z);r(R);var L=new Array(h-d+1);r(L);var O=new Array(c);r(O);var H=new Array(u);r(H);function W(B,le,fe,xe,j){this.static_tree=B,this.extra_bits=le,this.extra_base=fe,this.elems=xe,this.max_length=j,this.has_stree=B&&B.length}var se,te,oe;function Q(B,le){this.dyn_tree=B,this.max_code=0,this.stat_desc=le}function ce(B){return B<256?R[B]:R[256+(B>>>7)]}function _e(B,le){B.pending_buf[B.pending++]=le&255,B.pending_buf[B.pending++]=le>>>8&255}function he(B,le,fe){B.bi_valid>p-fe?(B.bi_buf|=le<<B.bi_valid&65535,_e(B,B.bi_buf),B.bi_buf=le>>p-B.bi_valid,B.bi_valid+=fe-p):(B.bi_buf|=le<<B.bi_valid&65535,B.bi_valid+=fe)}function D(B,le,fe){he(B,fe[le*2],fe[le*2+1])}function V(B,le){var fe=0;do fe|=B&1,B>>>=1,fe<<=1;while(--le>0);return fe>>>1}function q(B){B.bi_valid===16?(_e(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):B.bi_valid>=8&&(B.pending_buf[B.pending++]=B.bi_buf&255,B.bi_buf>>=8,B.bi_valid-=8)}function Z(B,le){var fe=le.dyn_tree,xe=le.max_code,j=le.stat_desc.static_tree,ne=le.stat_desc.has_stree,I=le.stat_desc.extra_bits,ge=le.stat_desc.extra_base,Pe=le.stat_desc.max_length,x,ee,re,F,U,J,Ee=0;for(F=0;F<=m;F++)B.bl_count[F]=0;for(fe[B.heap[B.heap_max]*2+1]=0,x=B.heap_max+1;x<w;x++)ee=B.heap[x],F=fe[fe[ee*2+1]*2+1]+1,F>Pe&&(F=Pe,Ee++),fe[ee*2+1]=F,!(ee>xe)&&(B.bl_count[F]++,U=0,ee>=ge&&(U=I[ee-ge]),J=fe[ee*2],B.opt_len+=J*(F+U),ne&&(B.static_len+=J*(j[ee*2+1]+U)));if(Ee!==0){do{for(F=Pe-1;B.bl_count[F]===0;)F--;B.bl_count[F]--,B.bl_count[F+1]+=2,B.bl_count[Pe]--,Ee-=2}while(Ee>0);for(F=Pe;F!==0;F--)for(ee=B.bl_count[F];ee!==0;)re=B.heap[--x],!(re>xe)&&(fe[re*2+1]!==F&&(B.opt_len+=(F-fe[re*2+1])*fe[re*2],fe[re*2+1]=F),ee--)}}function de(B,le,fe){var xe=new Array(m+1),j=0,ne,I;for(ne=1;ne<=m;ne++)xe[ne]=j=j+fe[ne-1]<<1;for(I=0;I<=le;I++){var ge=B[I*2+1];ge!==0&&(B[I*2]=V(xe[ge]++,ge))}}function $(){var B,le,fe,xe,j,ne=new Array(m+1);for(fe=0,xe=0;xe<c-1;xe++)for(O[xe]=fe,B=0;B<1<<A[xe];B++)L[fe++]=xe;for(L[fe-1]=xe,j=0,xe=0;xe<16;xe++)for(H[xe]=j,B=0;B<1<<M[xe];B++)R[j++]=xe;for(j>>=7;xe<u;xe++)for(H[xe]=j<<7,B=0;B<1<<M[xe]-7;B++)R[256+j++]=xe;for(le=0;le<=m;le++)ne[le]=0;for(B=0;B<=143;)y[B*2+1]=8,B++,ne[8]++;for(;B<=255;)y[B*2+1]=9,B++,ne[9]++;for(;B<=279;)y[B*2+1]=7,B++,ne[7]++;for(;B<=287;)y[B*2+1]=8,B++,ne[8]++;for(de(y,f+1,ne),B=0;B<u;B++)k[B*2+1]=5,k[B*2]=V(B,5);se=new W(y,A,g+1,f,m),te=new W(k,M,0,u,m),oe=new W(new Array(0),C,0,_,v)}function N(B){var le;for(le=0;le<f;le++)B.dyn_ltree[le*2]=0;for(le=0;le<u;le++)B.dyn_dtree[le*2]=0;for(le=0;le<_;le++)B.bl_tree[le*2]=0;B.dyn_ltree[b*2]=1,B.opt_len=B.static_len=0,B.last_lit=B.matches=0}function G(B){B.bi_valid>8?_e(B,B.bi_buf):B.bi_valid>0&&(B.pending_buf[B.pending++]=B.bi_buf),B.bi_buf=0,B.bi_valid=0}function Y(B,le,fe,xe){G(B),_e(B,fe),_e(B,~fe),t.arraySet(B.pending_buf,B.window,le,fe,B.pending),B.pending+=fe}function ie(B,le,fe,xe){var j=le*2,ne=fe*2;return B[j]<B[ne]||B[j]===B[ne]&&xe[le]<=xe[fe]}function X(B,le,fe){for(var xe=B.heap[fe],j=fe<<1;j<=B.heap_len&&(j<B.heap_len&&ie(le,B.heap[j+1],B.heap[j],B.depth)&&j++,!ie(le,xe,B.heap[j],B.depth));)B.heap[fe]=B.heap[j],fe=j,j<<=1;B.heap[fe]=xe}function ae(B,le,fe){var xe,j,ne=0,I,ge;if(B.last_lit!==0)do xe=B.pending_buf[B.d_buf+ne*2]<<8|B.pending_buf[B.d_buf+ne*2+1],j=B.pending_buf[B.l_buf+ne],ne++,xe===0?D(B,j,le):(I=L[j],D(B,I+g+1,le),ge=A[I],ge!==0&&(j-=O[I],he(B,j,ge)),xe--,I=ce(xe),D(B,I,fe),ge=M[I],ge!==0&&(xe-=H[I],he(B,xe,ge)));while(ne<B.last_lit);D(B,b,le)}function ve(B,le){var fe=le.dyn_tree,xe=le.stat_desc.static_tree,j=le.stat_desc.has_stree,ne=le.stat_desc.elems,I,ge,Pe=-1,x;for(B.heap_len=0,B.heap_max=w,I=0;I<ne;I++)fe[I*2]!==0?(B.heap[++B.heap_len]=Pe=I,B.depth[I]=0):fe[I*2+1]=0;for(;B.heap_len<2;)x=B.heap[++B.heap_len]=Pe<2?++Pe:0,fe[x*2]=1,B.depth[x]=0,B.opt_len--,j&&(B.static_len-=xe[x*2+1]);for(le.max_code=Pe,I=B.heap_len>>1;I>=1;I--)X(B,fe,I);x=ne;do I=B.heap[1],B.heap[1]=B.heap[B.heap_len--],X(B,fe,1),ge=B.heap[1],B.heap[--B.heap_max]=I,B.heap[--B.heap_max]=ge,fe[x*2]=fe[I*2]+fe[ge*2],B.depth[x]=(B.depth[I]>=B.depth[ge]?B.depth[I]:B.depth[ge])+1,fe[I*2+1]=fe[ge*2+1]=x,B.heap[1]=x++,X(B,fe,1);while(B.heap_len>=2);B.heap[--B.heap_max]=B.heap[1],Z(B,le),de(fe,Pe,B.bl_count)}function pe(B,le,fe){var xe,j=-1,ne,I=le[0*2+1],ge=0,Pe=7,x=4;for(I===0&&(Pe=138,x=3),le[(fe+1)*2+1]=65535,xe=0;xe<=fe;xe++)ne=I,I=le[(xe+1)*2+1],!(++ge<Pe&&ne===I)&&(ge<x?B.bl_tree[ne*2]+=ge:ne!==0?(ne!==j&&B.bl_tree[ne*2]++,B.bl_tree[S*2]++):ge<=10?B.bl_tree[T*2]++:B.bl_tree[E*2]++,ge=0,j=ne,I===0?(Pe=138,x=3):ne===I?(Pe=6,x=3):(Pe=7,x=4))}function ue(B,le,fe){var xe,j=-1,ne,I=le[0*2+1],ge=0,Pe=7,x=4;for(I===0&&(Pe=138,x=3),xe=0;xe<=fe;xe++)if(ne=I,I=le[(xe+1)*2+1],!(++ge<Pe&&ne===I)){if(ge<x)do D(B,ne,B.bl_tree);while(--ge!==0);else ne!==0?(ne!==j&&(D(B,ne,B.bl_tree),ge--),D(B,S,B.bl_tree),he(B,ge-3,2)):ge<=10?(D(B,T,B.bl_tree),he(B,ge-3,3)):(D(B,E,B.bl_tree),he(B,ge-11,7));ge=0,j=ne,I===0?(Pe=138,x=3):ne===I?(Pe=6,x=3):(Pe=7,x=4)}}function ye(B){var le;for(pe(B,B.dyn_ltree,B.l_desc.max_code),pe(B,B.dyn_dtree,B.d_desc.max_code),ve(B,B.bl_desc),le=_-1;le>=3&&B.bl_tree[P[le]*2+1]===0;le--);return B.opt_len+=3*(le+1)+5+5+4,le}function be(B,le,fe,xe){var j;for(he(B,le-257,5),he(B,fe-1,5),he(B,xe-4,4),j=0;j<xe;j++)he(B,B.bl_tree[P[j]*2+1],3);ue(B,B.dyn_ltree,le-1),ue(B,B.dyn_dtree,fe-1)}function we(B){var le=4093624447,fe;for(fe=0;fe<=31;fe++,le>>>=1)if(le&1&&B.dyn_ltree[fe*2]!==0)return i;if(B.dyn_ltree[9*2]!==0||B.dyn_ltree[10*2]!==0||B.dyn_ltree[13*2]!==0)return n;for(fe=32;fe<g;fe++)if(B.dyn_ltree[fe*2]!==0)return n;return i}var Ce=!1;function Ae(B){Ce||($(),Ce=!0),B.l_desc=new Q(B.dyn_ltree,se),B.d_desc=new Q(B.dyn_dtree,te),B.bl_desc=new Q(B.bl_tree,oe),B.bi_buf=0,B.bi_valid=0,N(B)}function Le(B,le,fe,xe){he(B,(s<<1)+(xe?1:0),3),Y(B,le,fe)}function Te(B){he(B,a<<1,3),D(B,b,y),q(B)}function Ge(B,le,fe,xe){var j,ne,I=0;B.level>0?(B.strm.data_type===o&&(B.strm.data_type=we(B)),ve(B,B.l_desc),ve(B,B.d_desc),I=ye(B),j=B.opt_len+3+7>>>3,ne=B.static_len+3+7>>>3,ne<=j&&(j=ne)):j=ne=fe+5,fe+4<=j&&le!==-1?Le(B,le,fe,xe):B.strategy===e||ne===j?(he(B,(a<<1)+(xe?1:0),3),ae(B,y,k)):(he(B,(l<<1)+(xe?1:0),3),be(B,B.l_desc.max_code+1,B.d_desc.max_code+1,I+1),ae(B,B.dyn_ltree,B.dyn_dtree)),N(B),xe&&G(B)}function Ye(B,le,fe){return B.pending_buf[B.d_buf+B.last_lit*2]=le>>>8&255,B.pending_buf[B.d_buf+B.last_lit*2+1]=le&255,B.pending_buf[B.l_buf+B.last_lit]=fe&255,B.last_lit++,le===0?B.dyn_ltree[fe*2]++:(B.matches++,le--,B.dyn_ltree[(L[fe]+g+1)*2]++,B.dyn_dtree[ce(le)*2]++),B.last_lit===B.lit_bufsize-1}return An._tr_init=Ae,An._tr_stored_block=Le,An._tr_flush_block=Ge,An._tr_tally=Ye,An._tr_align=Te,An}var Ua,zd;function D0(){if(zd)return Ua;zd=1;function t(e,i,n,o){for(var r=e&65535|0,s=e>>>16&65535|0,a=0;n!==0;){a=n>2e3?2e3:n,n-=a;do r=r+i[o++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0}return Ua=t,Ua}var Ga,Nd;function F0(){if(Nd)return Ga;Nd=1;function t(){for(var n,o=[],r=0;r<256;r++){n=r;for(var s=0;s<8;s++)n=n&1?3988292384^n>>>1:n>>>1;o[r]=n}return o}var e=t();function i(n,o,r,s){var a=e,l=s+r;n^=-1;for(var d=s;d<l;d++)n=n>>>8^a[(n^o[d])&255];return n^-1}return Ga=i,Ga}var ja,Vd;function _c(){return Vd||(Vd=1,ja={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}),ja}var Hd;function d2(){if(Hd)return di;Hd=1;var t=xn(),e=h2(),i=D0(),n=F0(),o=_c(),r=0,s=1,a=3,l=4,d=5,h=0,c=1,g=-2,f=-3,u=-5,_=-1,w=1,m=2,p=3,v=4,b=0,S=2,T=8,E=9,A=15,M=8,C=29,P=256,z=P+1+C,y=30,k=19,R=2*z+1,L=15,O=3,H=258,W=H+O+1,se=32,te=42,oe=69,Q=73,ce=91,_e=103,he=113,D=666,V=1,q=2,Z=3,de=4,$=3;function N(x,ee){return x.msg=o[ee],ee}function G(x){return(x<<1)-(x>4?9:0)}function Y(x){for(var ee=x.length;--ee>=0;)x[ee]=0}function ie(x){var ee=x.state,re=ee.pending;re>x.avail_out&&(re=x.avail_out),re!==0&&(t.arraySet(x.output,ee.pending_buf,ee.pending_out,re,x.next_out),x.next_out+=re,ee.pending_out+=re,x.total_out+=re,x.avail_out-=re,ee.pending-=re,ee.pending===0&&(ee.pending_out=0))}function X(x,ee){e._tr_flush_block(x,x.block_start>=0?x.block_start:-1,x.strstart-x.block_start,ee),x.block_start=x.strstart,ie(x.strm)}function ae(x,ee){x.pending_buf[x.pending++]=ee}function ve(x,ee){x.pending_buf[x.pending++]=ee>>>8&255,x.pending_buf[x.pending++]=ee&255}function pe(x,ee,re,F){var U=x.avail_in;return U>F&&(U=F),U===0?0:(x.avail_in-=U,t.arraySet(ee,x.input,x.next_in,U,re),x.state.wrap===1?x.adler=i(x.adler,ee,U,re):x.state.wrap===2&&(x.adler=n(x.adler,ee,U,re)),x.next_in+=U,x.total_in+=U,U)}function ue(x,ee){var re=x.max_chain_length,F=x.strstart,U,J,Ee=x.prev_length,Se=x.nice_match,ke=x.strstart>x.w_size-W?x.strstart-(x.w_size-W):0,Ve=x.window,Oi=x.w_mask,ut=x.prev,He=x.strstart+H,yt=Ve[F+Ee-1],Dt=Ve[F+Ee];x.prev_length>=x.good_match&&(re>>=2),Se>x.lookahead&&(Se=x.lookahead);do if(U=ee,!(Ve[U+Ee]!==Dt||Ve[U+Ee-1]!==yt||Ve[U]!==Ve[F]||Ve[++U]!==Ve[F+1])){F+=2,U++;do;while(Ve[++F]===Ve[++U]&&Ve[++F]===Ve[++U]&&Ve[++F]===Ve[++U]&&Ve[++F]===Ve[++U]&&Ve[++F]===Ve[++U]&&Ve[++F]===Ve[++U]&&Ve[++F]===Ve[++U]&&Ve[++F]===Ve[++U]&&F<He);if(J=H-(He-F),F=He-H,J>Ee){if(x.match_start=ee,Ee=J,J>=Se)break;yt=Ve[F+Ee-1],Dt=Ve[F+Ee]}}while((ee=ut[ee&Oi])>ke&&--re!==0);return Ee<=x.lookahead?Ee:x.lookahead}function ye(x){var ee=x.w_size,re,F,U,J,Ee;do{if(J=x.window_size-x.lookahead-x.strstart,x.strstart>=ee+(ee-W)){t.arraySet(x.window,x.window,ee,ee,0),x.match_start-=ee,x.strstart-=ee,x.block_start-=ee,F=x.hash_size,re=F;do U=x.head[--re],x.head[re]=U>=ee?U-ee:0;while(--F);F=ee,re=F;do U=x.prev[--re],x.prev[re]=U>=ee?U-ee:0;while(--F);J+=ee}if(x.strm.avail_in===0)break;if(F=pe(x.strm,x.window,x.strstart+x.lookahead,J),x.lookahead+=F,x.lookahead+x.insert>=O)for(Ee=x.strstart-x.insert,x.ins_h=x.window[Ee],x.ins_h=(x.ins_h<<x.hash_shift^x.window[Ee+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[Ee+O-1])&x.hash_mask,x.prev[Ee&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=Ee,Ee++,x.insert--,!(x.lookahead+x.insert<O)););}while(x.lookahead<W&&x.strm.avail_in!==0)}function be(x,ee){var re=65535;for(re>x.pending_buf_size-5&&(re=x.pending_buf_size-5);;){if(x.lookahead<=1){if(ye(x),x.lookahead===0&&ee===r)return V;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var F=x.block_start+re;if((x.strstart===0||x.strstart>=F)&&(x.lookahead=x.strstart-F,x.strstart=F,X(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-W&&(X(x,!1),x.strm.avail_out===0))return V}return x.insert=0,ee===l?(X(x,!0),x.strm.avail_out===0?Z:de):(x.strstart>x.block_start&&(X(x,!1),x.strm.avail_out===0),V)}function we(x,ee){for(var re,F;;){if(x.lookahead<W){if(ye(x),x.lookahead<W&&ee===r)return V;if(x.lookahead===0)break}if(re=0,x.lookahead>=O&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+O-1])&x.hash_mask,re=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),re!==0&&x.strstart-re<=x.w_size-W&&(x.match_length=ue(x,re)),x.match_length>=O)if(F=e._tr_tally(x,x.strstart-x.match_start,x.match_length-O),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=O){x.match_length--;do x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+O-1])&x.hash_mask,re=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart;while(--x.match_length!==0);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else F=e._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(F&&(X(x,!1),x.strm.avail_out===0))return V}return x.insert=x.strstart<O-1?x.strstart:O-1,ee===l?(X(x,!0),x.strm.avail_out===0?Z:de):x.last_lit&&(X(x,!1),x.strm.avail_out===0)?V:q}function Ce(x,ee){for(var re,F,U;;){if(x.lookahead<W){if(ye(x),x.lookahead<W&&ee===r)return V;if(x.lookahead===0)break}if(re=0,x.lookahead>=O&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+O-1])&x.hash_mask,re=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=O-1,re!==0&&x.prev_length<x.max_lazy_match&&x.strstart-re<=x.w_size-W&&(x.match_length=ue(x,re),x.match_length<=5&&(x.strategy===w||x.match_length===O&&x.strstart-x.match_start>4096)&&(x.match_length=O-1)),x.prev_length>=O&&x.match_length<=x.prev_length){U=x.strstart+x.lookahead-O,F=e._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-O),x.lookahead-=x.prev_length-1,x.prev_length-=2;do++x.strstart<=U&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+O-1])&x.hash_mask,re=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart);while(--x.prev_length!==0);if(x.match_available=0,x.match_length=O-1,x.strstart++,F&&(X(x,!1),x.strm.avail_out===0))return V}else if(x.match_available){if(F=e._tr_tally(x,0,x.window[x.strstart-1]),F&&X(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return V}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(F=e._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<O-1?x.strstart:O-1,ee===l?(X(x,!0),x.strm.avail_out===0?Z:de):x.last_lit&&(X(x,!1),x.strm.avail_out===0)?V:q}function Ae(x,ee){for(var re,F,U,J,Ee=x.window;;){if(x.lookahead<=H){if(ye(x),x.lookahead<=H&&ee===r)return V;if(x.lookahead===0)break}if(x.match_length=0,x.lookahead>=O&&x.strstart>0&&(U=x.strstart-1,F=Ee[U],F===Ee[++U]&&F===Ee[++U]&&F===Ee[++U])){J=x.strstart+H;do;while(F===Ee[++U]&&F===Ee[++U]&&F===Ee[++U]&&F===Ee[++U]&&F===Ee[++U]&&F===Ee[++U]&&F===Ee[++U]&&F===Ee[++U]&&U<J);x.match_length=H-(J-U),x.match_length>x.lookahead&&(x.match_length=x.lookahead)}if(x.match_length>=O?(re=e._tr_tally(x,1,x.match_length-O),x.lookahead-=x.match_length,x.strstart+=x.match_length,x.match_length=0):(re=e._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++),re&&(X(x,!1),x.strm.avail_out===0))return V}return x.insert=0,ee===l?(X(x,!0),x.strm.avail_out===0?Z:de):x.last_lit&&(X(x,!1),x.strm.avail_out===0)?V:q}function Le(x,ee){for(var re;;){if(x.lookahead===0&&(ye(x),x.lookahead===0)){if(ee===r)return V;break}if(x.match_length=0,re=e._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++,re&&(X(x,!1),x.strm.avail_out===0))return V}return x.insert=0,ee===l?(X(x,!0),x.strm.avail_out===0?Z:de):x.last_lit&&(X(x,!1),x.strm.avail_out===0)?V:q}function Te(x,ee,re,F,U){this.good_length=x,this.max_lazy=ee,this.nice_length=re,this.max_chain=F,this.func=U}var Ge;Ge=[new Te(0,0,0,0,be),new Te(4,4,8,4,we),new Te(4,5,16,8,we),new Te(4,6,32,32,we),new Te(4,4,16,16,Ce),new Te(8,16,32,32,Ce),new Te(8,16,128,128,Ce),new Te(8,32,128,256,Ce),new Te(32,128,258,1024,Ce),new Te(32,258,258,4096,Ce)];function Ye(x){x.window_size=2*x.w_size,Y(x.head),x.max_lazy_match=Ge[x.level].max_lazy,x.good_match=Ge[x.level].good_length,x.nice_match=Ge[x.level].nice_length,x.max_chain_length=Ge[x.level].max_chain,x.strstart=0,x.block_start=0,x.lookahead=0,x.insert=0,x.match_length=x.prev_length=O-1,x.match_available=0,x.ins_h=0}function B(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=T,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new t.Buf16(R*2),this.dyn_dtree=new t.Buf16((2*y+1)*2),this.bl_tree=new t.Buf16((2*k+1)*2),Y(this.dyn_ltree),Y(this.dyn_dtree),Y(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new t.Buf16(L+1),this.heap=new t.Buf16(2*z+1),Y(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new t.Buf16(2*z+1),Y(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function le(x){var ee;return!x||!x.state?N(x,g):(x.total_in=x.total_out=0,x.data_type=S,ee=x.state,ee.pending=0,ee.pending_out=0,ee.wrap<0&&(ee.wrap=-ee.wrap),ee.status=ee.wrap?te:he,x.adler=ee.wrap===2?0:1,ee.last_flush=r,e._tr_init(ee),h)}function fe(x){var ee=le(x);return ee===h&&Ye(x.state),ee}function xe(x,ee){return!x||!x.state||x.state.wrap!==2?g:(x.state.gzhead=ee,h)}function j(x,ee,re,F,U,J){if(!x)return g;var Ee=1;if(ee===_&&(ee=6),F<0?(Ee=0,F=-F):F>15&&(Ee=2,F-=16),U<1||U>E||re!==T||F<8||F>15||ee<0||ee>9||J<0||J>v)return N(x,g);F===8&&(F=9);var Se=new B;return x.state=Se,Se.strm=x,Se.wrap=Ee,Se.gzhead=null,Se.w_bits=F,Se.w_size=1<<Se.w_bits,Se.w_mask=Se.w_size-1,Se.hash_bits=U+7,Se.hash_size=1<<Se.hash_bits,Se.hash_mask=Se.hash_size-1,Se.hash_shift=~~((Se.hash_bits+O-1)/O),Se.window=new t.Buf8(Se.w_size*2),Se.head=new t.Buf16(Se.hash_size),Se.prev=new t.Buf16(Se.w_size),Se.lit_bufsize=1<<U+6,Se.pending_buf_size=Se.lit_bufsize*4,Se.pending_buf=new t.Buf8(Se.pending_buf_size),Se.d_buf=1*Se.lit_bufsize,Se.l_buf=3*Se.lit_bufsize,Se.level=ee,Se.strategy=J,Se.method=re,fe(x)}function ne(x,ee){return j(x,ee,T,A,M,b)}function I(x,ee){var re,F,U,J;if(!x||!x.state||ee>d||ee<0)return x?N(x,g):g;if(F=x.state,!x.output||!x.input&&x.avail_in!==0||F.status===D&&ee!==l)return N(x,x.avail_out===0?u:g);if(F.strm=x,re=F.last_flush,F.last_flush=ee,F.status===te)if(F.wrap===2)x.adler=0,ae(F,31),ae(F,139),ae(F,8),F.gzhead?(ae(F,(F.gzhead.text?1:0)+(F.gzhead.hcrc?2:0)+(F.gzhead.extra?4:0)+(F.gzhead.name?8:0)+(F.gzhead.comment?16:0)),ae(F,F.gzhead.time&255),ae(F,F.gzhead.time>>8&255),ae(F,F.gzhead.time>>16&255),ae(F,F.gzhead.time>>24&255),ae(F,F.level===9?2:F.strategy>=m||F.level<2?4:0),ae(F,F.gzhead.os&255),F.gzhead.extra&&F.gzhead.extra.length&&(ae(F,F.gzhead.extra.length&255),ae(F,F.gzhead.extra.length>>8&255)),F.gzhead.hcrc&&(x.adler=n(x.adler,F.pending_buf,F.pending,0)),F.gzindex=0,F.status=oe):(ae(F,0),ae(F,0),ae(F,0),ae(F,0),ae(F,0),ae(F,F.level===9?2:F.strategy>=m||F.level<2?4:0),ae(F,$),F.status=he);else{var Ee=T+(F.w_bits-8<<4)<<8,Se=-1;F.strategy>=m||F.level<2?Se=0:F.level<6?Se=1:F.level===6?Se=2:Se=3,Ee|=Se<<6,F.strstart!==0&&(Ee|=se),Ee+=31-Ee%31,F.status=he,ve(F,Ee),F.strstart!==0&&(ve(F,x.adler>>>16),ve(F,x.adler&65535)),x.adler=1}if(F.status===oe)if(F.gzhead.extra){for(U=F.pending;F.gzindex<(F.gzhead.extra.length&65535)&&!(F.pending===F.pending_buf_size&&(F.gzhead.hcrc&&F.pending>U&&(x.adler=n(x.adler,F.pending_buf,F.pending-U,U)),ie(x),U=F.pending,F.pending===F.pending_buf_size));)ae(F,F.gzhead.extra[F.gzindex]&255),F.gzindex++;F.gzhead.hcrc&&F.pending>U&&(x.adler=n(x.adler,F.pending_buf,F.pending-U,U)),F.gzindex===F.gzhead.extra.length&&(F.gzindex=0,F.status=Q)}else F.status=Q;if(F.status===Q)if(F.gzhead.name){U=F.pending;do{if(F.pending===F.pending_buf_size&&(F.gzhead.hcrc&&F.pending>U&&(x.adler=n(x.adler,F.pending_buf,F.pending-U,U)),ie(x),U=F.pending,F.pending===F.pending_buf_size)){J=1;break}F.gzindex<F.gzhead.name.length?J=F.gzhead.name.charCodeAt(F.gzindex++)&255:J=0,ae(F,J)}while(J!==0);F.gzhead.hcrc&&F.pending>U&&(x.adler=n(x.adler,F.pending_buf,F.pending-U,U)),J===0&&(F.gzindex=0,F.status=ce)}else F.status=ce;if(F.status===ce)if(F.gzhead.comment){U=F.pending;do{if(F.pending===F.pending_buf_size&&(F.gzhead.hcrc&&F.pending>U&&(x.adler=n(x.adler,F.pending_buf,F.pending-U,U)),ie(x),U=F.pending,F.pending===F.pending_buf_size)){J=1;break}F.gzindex<F.gzhead.comment.length?J=F.gzhead.comment.charCodeAt(F.gzindex++)&255:J=0,ae(F,J)}while(J!==0);F.gzhead.hcrc&&F.pending>U&&(x.adler=n(x.adler,F.pending_buf,F.pending-U,U)),J===0&&(F.status=_e)}else F.status=_e;if(F.status===_e&&(F.gzhead.hcrc?(F.pending+2>F.pending_buf_size&&ie(x),F.pending+2<=F.pending_buf_size&&(ae(F,x.adler&255),ae(F,x.adler>>8&255),x.adler=0,F.status=he)):F.status=he),F.pending!==0){if(ie(x),x.avail_out===0)return F.last_flush=-1,h}else if(x.avail_in===0&&G(ee)<=G(re)&&ee!==l)return N(x,u);if(F.status===D&&x.avail_in!==0)return N(x,u);if(x.avail_in!==0||F.lookahead!==0||ee!==r&&F.status!==D){var ke=F.strategy===m?Le(F,ee):F.strategy===p?Ae(F,ee):Ge[F.level].func(F,ee);if((ke===Z||ke===de)&&(F.status=D),ke===V||ke===Z)return x.avail_out===0&&(F.last_flush=-1),h;if(ke===q&&(ee===s?e._tr_align(F):ee!==d&&(e._tr_stored_block(F,0,0,!1),ee===a&&(Y(F.head),F.lookahead===0&&(F.strstart=0,F.block_start=0,F.insert=0))),ie(x),x.avail_out===0))return F.last_flush=-1,h}return ee!==l?h:F.wrap<=0?c:(F.wrap===2?(ae(F,x.adler&255),ae(F,x.adler>>8&255),ae(F,x.adler>>16&255),ae(F,x.adler>>24&255),ae(F,x.total_in&255),ae(F,x.total_in>>8&255),ae(F,x.total_in>>16&255),ae(F,x.total_in>>24&255)):(ve(F,x.adler>>>16),ve(F,x.adler&65535)),ie(x),F.wrap>0&&(F.wrap=-F.wrap),F.pending!==0?h:c)}function ge(x){var ee;return!x||!x.state?g:(ee=x.state.status,ee!==te&&ee!==oe&&ee!==Q&&ee!==ce&&ee!==_e&&ee!==he&&ee!==D?N(x,g):(x.state=null,ee===he?N(x,f):h))}function Pe(x,ee){var re=ee.length,F,U,J,Ee,Se,ke,Ve,Oi;if(!x||!x.state||(F=x.state,Ee=F.wrap,Ee===2||Ee===1&&F.status!==te||F.lookahead))return g;for(Ee===1&&(x.adler=i(x.adler,ee,re,0)),F.wrap=0,re>=F.w_size&&(Ee===0&&(Y(F.head),F.strstart=0,F.block_start=0,F.insert=0),Oi=new t.Buf8(F.w_size),t.arraySet(Oi,ee,re-F.w_size,F.w_size,0),ee=Oi,re=F.w_size),Se=x.avail_in,ke=x.next_in,Ve=x.input,x.avail_in=re,x.next_in=0,x.input=ee,ye(F);F.lookahead>=O;){U=F.strstart,J=F.lookahead-(O-1);do F.ins_h=(F.ins_h<<F.hash_shift^F.window[U+O-1])&F.hash_mask,F.prev[U&F.w_mask]=F.head[F.ins_h],F.head[F.ins_h]=U,U++;while(--J);F.strstart=U,F.lookahead=O-1,ye(F)}return F.strstart+=F.lookahead,F.block_start=F.strstart,F.insert=F.lookahead,F.lookahead=0,F.match_length=F.prev_length=O-1,F.match_available=0,x.next_in=ke,x.input=Ve,x.avail_in=Se,F.wrap=Ee,h}return di.deflateInit=ne,di.deflateInit2=j,di.deflateReset=fe,di.deflateResetKeep=le,di.deflateSetHeader=xe,di.deflate=I,di.deflateEnd=ge,di.deflateSetDictionary=Pe,di.deflateInfo="pako deflate (from Nodeca project)",di}var Tn={},Ud;function $0(){if(Ud)return Tn;Ud=1;var t=xn(),e=!0,i=!0;try{String.fromCharCode.apply(null,[0])}catch{e=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{i=!1}for(var n=new t.Buf8(256),o=0;o<256;o++)n[o]=o>=252?6:o>=248?5:o>=240?4:o>=224?3:o>=192?2:1;n[254]=n[254]=1,Tn.string2buf=function(s){var a,l,d,h,c,g=s.length,f=0;for(h=0;h<g;h++)l=s.charCodeAt(h),(l&64512)===55296&&h+1<g&&(d=s.charCodeAt(h+1),(d&64512)===56320&&(l=65536+(l-55296<<10)+(d-56320),h++)),f+=l<128?1:l<2048?2:l<65536?3:4;for(a=new t.Buf8(f),c=0,h=0;c<f;h++)l=s.charCodeAt(h),(l&64512)===55296&&h+1<g&&(d=s.charCodeAt(h+1),(d&64512)===56320&&(l=65536+(l-55296<<10)+(d-56320),h++)),l<128?a[c++]=l:l<2048?(a[c++]=192|l>>>6,a[c++]=128|l&63):l<65536?(a[c++]=224|l>>>12,a[c++]=128|l>>>6&63,a[c++]=128|l&63):(a[c++]=240|l>>>18,a[c++]=128|l>>>12&63,a[c++]=128|l>>>6&63,a[c++]=128|l&63);return a};function r(s,a){if(a<65534&&(s.subarray&&i||!s.subarray&&e))return String.fromCharCode.apply(null,t.shrinkBuf(s,a));for(var l="",d=0;d<a;d++)l+=String.fromCharCode(s[d]);return l}return Tn.buf2binstring=function(s){return r(s,s.length)},Tn.binstring2buf=function(s){for(var a=new t.Buf8(s.length),l=0,d=a.length;l<d;l++)a[l]=s.charCodeAt(l);return a},Tn.buf2string=function(s,a){var l,d,h,c,g=a||s.length,f=new Array(g*2);for(d=0,l=0;l<g;){if(h=s[l++],h<128){f[d++]=h;continue}if(c=n[h],c>4){f[d++]=65533,l+=c-1;continue}for(h&=c===2?31:c===3?15:7;c>1&&l<g;)h=h<<6|s[l++]&63,c--;if(c>1){f[d++]=65533;continue}h<65536?f[d++]=h:(h-=65536,f[d++]=55296|h>>10&1023,f[d++]=56320|h&1023)}return r(f,d)},Tn.utf8border=function(s,a){var l;for(a=a||s.length,a>s.length&&(a=s.length),l=a-1;l>=0&&(s[l]&192)===128;)l--;return l<0||l===0?a:l+n[s[l]]>a?l:a},Tn}var qa,Gd;function B0(){if(Gd)return qa;Gd=1;function t(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}return qa=t,qa}var jd;function u2(){if(jd)return Qn;jd=1;var t=d2(),e=xn(),i=$0(),n=_c(),o=B0(),r=Object.prototype.toString,s=0,a=4,l=0,d=1,h=2,c=-1,g=0,f=8;function u(p){if(!(this instanceof u))return new u(p);this.options=e.assign({level:c,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},p||{});var v=this.options;v.raw&&v.windowBits>0?v.windowBits=-v.windowBits:v.gzip&&v.windowBits>0&&v.windowBits<16&&(v.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new o,this.strm.avail_out=0;var b=t.deflateInit2(this.strm,v.level,v.method,v.windowBits,v.memLevel,v.strategy);if(b!==l)throw new Error(n[b]);if(v.header&&t.deflateSetHeader(this.strm,v.header),v.dictionary){var S;if(typeof v.dictionary=="string"?S=i.string2buf(v.dictionary):r.call(v.dictionary)==="[object ArrayBuffer]"?S=new Uint8Array(v.dictionary):S=v.dictionary,b=t.deflateSetDictionary(this.strm,S),b!==l)throw new Error(n[b]);this._dict_set=!0}}u.prototype.push=function(p,v){var b=this.strm,S=this.options.chunkSize,T,E;if(this.ended)return!1;E=v===~~v?v:v===!0?a:s,typeof p=="string"?b.input=i.string2buf(p):r.call(p)==="[object ArrayBuffer]"?b.input=new Uint8Array(p):b.input=p,b.next_in=0,b.avail_in=b.input.length;do{if(b.avail_out===0&&(b.output=new e.Buf8(S),b.next_out=0,b.avail_out=S),T=t.deflate(b,E),T!==d&&T!==l)return this.onEnd(T),this.ended=!0,!1;(b.avail_out===0||b.avail_in===0&&(E===a||E===h))&&(this.options.to==="string"?this.onData(i.buf2binstring(e.shrinkBuf(b.output,b.next_out))):this.onData(e.shrinkBuf(b.output,b.next_out)))}while((b.avail_in>0||b.avail_out===0)&&T!==d);return E===a?(T=t.deflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===l):(E===h&&(this.onEnd(l),b.avail_out=0),!0)},u.prototype.onData=function(p){this.chunks.push(p)},u.prototype.onEnd=function(p){p===l&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=e.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg};function _(p,v){var b=new u(v);if(b.push(p,!0),b.err)throw b.msg||n[b.err];return b.result}function w(p,v){return v=v||{},v.raw=!0,_(p,v)}function m(p,v){return v=v||{},v.gzip=!0,_(p,v)}return Qn.Deflate=u,Qn.deflate=_,Qn.deflateRaw=w,Qn.gzip=m,Qn}var Jn={},li={},Wa,qd;function f2(){if(qd)return Wa;qd=1;var t=30,e=12;return Wa=function(n,o){var r,s,a,l,d,h,c,g,f,u,_,w,m,p,v,b,S,T,E,A,M,C,P,z,y;r=n.state,s=n.next_in,z=n.input,a=s+(n.avail_in-5),l=n.next_out,y=n.output,d=l-(o-n.avail_out),h=l+(n.avail_out-257),c=r.dmax,g=r.wsize,f=r.whave,u=r.wnext,_=r.window,w=r.hold,m=r.bits,p=r.lencode,v=r.distcode,b=(1<<r.lenbits)-1,S=(1<<r.distbits)-1;e:do{m<15&&(w+=z[s++]<<m,m+=8,w+=z[s++]<<m,m+=8),T=p[w&b];t:for(;;){if(E=T>>>24,w>>>=E,m-=E,E=T>>>16&255,E===0)y[l++]=T&65535;else if(E&16){A=T&65535,E&=15,E&&(m<E&&(w+=z[s++]<<m,m+=8),A+=w&(1<<E)-1,w>>>=E,m-=E),m<15&&(w+=z[s++]<<m,m+=8,w+=z[s++]<<m,m+=8),T=v[w&S];i:for(;;){if(E=T>>>24,w>>>=E,m-=E,E=T>>>16&255,E&16){if(M=T&65535,E&=15,m<E&&(w+=z[s++]<<m,m+=8,m<E&&(w+=z[s++]<<m,m+=8)),M+=w&(1<<E)-1,M>c){n.msg="invalid distance too far back",r.mode=t;break e}if(w>>>=E,m-=E,E=l-d,M>E){if(E=M-E,E>f&&r.sane){n.msg="invalid distance too far back",r.mode=t;break e}if(C=0,P=_,u===0){if(C+=g-E,E<A){A-=E;do y[l++]=_[C++];while(--E);C=l-M,P=y}}else if(u<E){if(C+=g+u-E,E-=u,E<A){A-=E;do y[l++]=_[C++];while(--E);if(C=0,u<A){E=u,A-=E;do y[l++]=_[C++];while(--E);C=l-M,P=y}}}else if(C+=u-E,E<A){A-=E;do y[l++]=_[C++];while(--E);C=l-M,P=y}for(;A>2;)y[l++]=P[C++],y[l++]=P[C++],y[l++]=P[C++],A-=3;A&&(y[l++]=P[C++],A>1&&(y[l++]=P[C++]))}else{C=l-M;do y[l++]=y[C++],y[l++]=y[C++],y[l++]=y[C++],A-=3;while(A>2);A&&(y[l++]=y[C++],A>1&&(y[l++]=y[C++]))}}else if(E&64){n.msg="invalid distance code",r.mode=t;break e}else{T=v[(T&65535)+(w&(1<<E)-1)];continue i}break}}else if(E&64)if(E&32){r.mode=e;break e}else{n.msg="invalid literal/length code",r.mode=t;break e}else{T=p[(T&65535)+(w&(1<<E)-1)];continue t}break}}while(s<a&&l<h);A=m>>3,s-=A,m-=A<<3,w&=(1<<m)-1,n.next_in=s,n.next_out=l,n.avail_in=s<a?5+(a-s):5-(s-a),n.avail_out=l<h?257+(h-l):257-(l-h),r.hold=w,r.bits=m},Wa}var Ka,Wd;function p2(){if(Wd)return Ka;Wd=1;var t=xn(),e=15,i=852,n=592,o=0,r=1,s=2,a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];return Ka=function(g,f,u,_,w,m,p,v){var b=v.bits,S=0,T=0,E=0,A=0,M=0,C=0,P=0,z=0,y=0,k=0,R,L,O,H,W,se=null,te=0,oe,Q=new t.Buf16(e+1),ce=new t.Buf16(e+1),_e=null,he=0,D,V,q;for(S=0;S<=e;S++)Q[S]=0;for(T=0;T<_;T++)Q[f[u+T]]++;for(M=b,A=e;A>=1&&Q[A]===0;A--);if(M>A&&(M=A),A===0)return w[m++]=1<<24|64<<16|0,w[m++]=1<<24|64<<16|0,v.bits=1,0;for(E=1;E<A&&Q[E]===0;E++);for(M<E&&(M=E),z=1,S=1;S<=e;S++)if(z<<=1,z-=Q[S],z<0)return-1;if(z>0&&(g===o||A!==1))return-1;for(ce[1]=0,S=1;S<e;S++)ce[S+1]=ce[S]+Q[S];for(T=0;T<_;T++)f[u+T]!==0&&(p[ce[f[u+T]]++]=T);if(g===o?(se=_e=p,oe=19):g===r?(se=a,te-=257,_e=l,he-=257,oe=256):(se=d,_e=h,oe=-1),k=0,T=0,S=E,W=m,C=M,P=0,O=-1,y=1<<M,H=y-1,g===r&&y>i||g===s&&y>n)return 1;for(;;){D=S-P,p[T]<oe?(V=0,q=p[T]):p[T]>oe?(V=_e[he+p[T]],q=se[te+p[T]]):(V=96,q=0),R=1<<S-P,L=1<<C,E=L;do L-=R,w[W+(k>>P)+L]=D<<24|V<<16|q|0;while(L!==0);for(R=1<<S-1;k&R;)R>>=1;if(R!==0?(k&=R-1,k+=R):k=0,T++,--Q[S]===0){if(S===A)break;S=f[u+p[T]]}if(S>M&&(k&H)!==O){for(P===0&&(P=M),W+=E,C=S-P,z=1<<C;C+P<A&&(z-=Q[C+P],!(z<=0));)C++,z<<=1;if(y+=1<<C,g===r&&y>i||g===s&&y>n)return 1;O=k&H,w[O]=M<<24|C<<16|W-m|0}}return k!==0&&(w[W+k]=S-P<<24|64<<16|0),v.bits=M,0},Ka}var Kd;function g2(){if(Kd)return li;Kd=1;var t=xn(),e=D0(),i=F0(),n=f2(),o=p2(),r=0,s=1,a=2,l=4,d=5,h=6,c=0,g=1,f=2,u=-2,_=-3,w=-4,m=-5,p=8,v=1,b=2,S=3,T=4,E=5,A=6,M=7,C=8,P=9,z=10,y=11,k=12,R=13,L=14,O=15,H=16,W=17,se=18,te=19,oe=20,Q=21,ce=22,_e=23,he=24,D=25,V=26,q=27,Z=28,de=29,$=30,N=31,G=32,Y=852,ie=592,X=15,ae=X;function ve(j){return(j>>>24&255)+(j>>>8&65280)+((j&65280)<<8)+((j&255)<<24)}function pe(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new t.Buf16(320),this.work=new t.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function ue(j){var ne;return!j||!j.state?u:(ne=j.state,j.total_in=j.total_out=ne.total=0,j.msg="",ne.wrap&&(j.adler=ne.wrap&1),ne.mode=v,ne.last=0,ne.havedict=0,ne.dmax=32768,ne.head=null,ne.hold=0,ne.bits=0,ne.lencode=ne.lendyn=new t.Buf32(Y),ne.distcode=ne.distdyn=new t.Buf32(ie),ne.sane=1,ne.back=-1,c)}function ye(j){var ne;return!j||!j.state?u:(ne=j.state,ne.wsize=0,ne.whave=0,ne.wnext=0,ue(j))}function be(j,ne){var I,ge;return!j||!j.state||(ge=j.state,ne<0?(I=0,ne=-ne):(I=(ne>>4)+1,ne<48&&(ne&=15)),ne&&(ne<8||ne>15))?u:(ge.window!==null&&ge.wbits!==ne&&(ge.window=null),ge.wrap=I,ge.wbits=ne,ye(j))}function we(j,ne){var I,ge;return j?(ge=new pe,j.state=ge,ge.window=null,I=be(j,ne),I!==c&&(j.state=null),I):u}function Ce(j){return we(j,ae)}var Ae=!0,Le,Te;function Ge(j){if(Ae){var ne;for(Le=new t.Buf32(512),Te=new t.Buf32(32),ne=0;ne<144;)j.lens[ne++]=8;for(;ne<256;)j.lens[ne++]=9;for(;ne<280;)j.lens[ne++]=7;for(;ne<288;)j.lens[ne++]=8;for(o(s,j.lens,0,288,Le,0,j.work,{bits:9}),ne=0;ne<32;)j.lens[ne++]=5;o(a,j.lens,0,32,Te,0,j.work,{bits:5}),Ae=!1}j.lencode=Le,j.lenbits=9,j.distcode=Te,j.distbits=5}function Ye(j,ne,I,ge){var Pe,x=j.state;return x.window===null&&(x.wsize=1<<x.wbits,x.wnext=0,x.whave=0,x.window=new t.Buf8(x.wsize)),ge>=x.wsize?(t.arraySet(x.window,ne,I-x.wsize,x.wsize,0),x.wnext=0,x.whave=x.wsize):(Pe=x.wsize-x.wnext,Pe>ge&&(Pe=ge),t.arraySet(x.window,ne,I-ge,Pe,x.wnext),ge-=Pe,ge?(t.arraySet(x.window,ne,I-ge,ge,0),x.wnext=ge,x.whave=x.wsize):(x.wnext+=Pe,x.wnext===x.wsize&&(x.wnext=0),x.whave<x.wsize&&(x.whave+=Pe))),0}function B(j,ne){var I,ge,Pe,x,ee,re,F,U,J,Ee,Se,ke,Ve,Oi,ut=0,He,yt,Dt,Kt,co,ho,_t,ai,Tt=new t.Buf8(4),Mi,wi,Sc=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!j||!j.state||!j.output||!j.input&&j.avail_in!==0)return u;I=j.state,I.mode===k&&(I.mode=R),ee=j.next_out,Pe=j.output,F=j.avail_out,x=j.next_in,ge=j.input,re=j.avail_in,U=I.hold,J=I.bits,Ee=re,Se=F,ai=c;e:for(;;)switch(I.mode){case v:if(I.wrap===0){I.mode=R;break}for(;J<16;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}if(I.wrap&2&&U===35615){I.check=0,Tt[0]=U&255,Tt[1]=U>>>8&255,I.check=i(I.check,Tt,2,0),U=0,J=0,I.mode=b;break}if(I.flags=0,I.head&&(I.head.done=!1),!(I.wrap&1)||(((U&255)<<8)+(U>>8))%31){j.msg="incorrect header check",I.mode=$;break}if((U&15)!==p){j.msg="unknown compression method",I.mode=$;break}if(U>>>=4,J-=4,_t=(U&15)+8,I.wbits===0)I.wbits=_t;else if(_t>I.wbits){j.msg="invalid window size",I.mode=$;break}I.dmax=1<<_t,j.adler=I.check=1,I.mode=U&512?z:k,U=0,J=0;break;case b:for(;J<16;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}if(I.flags=U,(I.flags&255)!==p){j.msg="unknown compression method",I.mode=$;break}if(I.flags&57344){j.msg="unknown header flags set",I.mode=$;break}I.head&&(I.head.text=U>>8&1),I.flags&512&&(Tt[0]=U&255,Tt[1]=U>>>8&255,I.check=i(I.check,Tt,2,0)),U=0,J=0,I.mode=S;case S:for(;J<32;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}I.head&&(I.head.time=U),I.flags&512&&(Tt[0]=U&255,Tt[1]=U>>>8&255,Tt[2]=U>>>16&255,Tt[3]=U>>>24&255,I.check=i(I.check,Tt,4,0)),U=0,J=0,I.mode=T;case T:for(;J<16;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}I.head&&(I.head.xflags=U&255,I.head.os=U>>8),I.flags&512&&(Tt[0]=U&255,Tt[1]=U>>>8&255,I.check=i(I.check,Tt,2,0)),U=0,J=0,I.mode=E;case E:if(I.flags&1024){for(;J<16;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}I.length=U,I.head&&(I.head.extra_len=U),I.flags&512&&(Tt[0]=U&255,Tt[1]=U>>>8&255,I.check=i(I.check,Tt,2,0)),U=0,J=0}else I.head&&(I.head.extra=null);I.mode=A;case A:if(I.flags&1024&&(ke=I.length,ke>re&&(ke=re),ke&&(I.head&&(_t=I.head.extra_len-I.length,I.head.extra||(I.head.extra=new Array(I.head.extra_len)),t.arraySet(I.head.extra,ge,x,ke,_t)),I.flags&512&&(I.check=i(I.check,ge,ke,x)),re-=ke,x+=ke,I.length-=ke),I.length))break e;I.length=0,I.mode=M;case M:if(I.flags&2048){if(re===0)break e;ke=0;do _t=ge[x+ke++],I.head&&_t&&I.length<65536&&(I.head.name+=String.fromCharCode(_t));while(_t&&ke<re);if(I.flags&512&&(I.check=i(I.check,ge,ke,x)),re-=ke,x+=ke,_t)break e}else I.head&&(I.head.name=null);I.length=0,I.mode=C;case C:if(I.flags&4096){if(re===0)break e;ke=0;do _t=ge[x+ke++],I.head&&_t&&I.length<65536&&(I.head.comment+=String.fromCharCode(_t));while(_t&&ke<re);if(I.flags&512&&(I.check=i(I.check,ge,ke,x)),re-=ke,x+=ke,_t)break e}else I.head&&(I.head.comment=null);I.mode=P;case P:if(I.flags&512){for(;J<16;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}if(U!==(I.check&65535)){j.msg="header crc mismatch",I.mode=$;break}U=0,J=0}I.head&&(I.head.hcrc=I.flags>>9&1,I.head.done=!0),j.adler=I.check=0,I.mode=k;break;case z:for(;J<32;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}j.adler=I.check=ve(U),U=0,J=0,I.mode=y;case y:if(I.havedict===0)return j.next_out=ee,j.avail_out=F,j.next_in=x,j.avail_in=re,I.hold=U,I.bits=J,f;j.adler=I.check=1,I.mode=k;case k:if(ne===d||ne===h)break e;case R:if(I.last){U>>>=J&7,J-=J&7,I.mode=q;break}for(;J<3;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}switch(I.last=U&1,U>>>=1,J-=1,U&3){case 0:I.mode=L;break;case 1:if(Ge(I),I.mode=oe,ne===h){U>>>=2,J-=2;break e}break;case 2:I.mode=W;break;case 3:j.msg="invalid block type",I.mode=$}U>>>=2,J-=2;break;case L:for(U>>>=J&7,J-=J&7;J<32;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}if((U&65535)!==(U>>>16^65535)){j.msg="invalid stored block lengths",I.mode=$;break}if(I.length=U&65535,U=0,J=0,I.mode=O,ne===h)break e;case O:I.mode=H;case H:if(ke=I.length,ke){if(ke>re&&(ke=re),ke>F&&(ke=F),ke===0)break e;t.arraySet(Pe,ge,x,ke,ee),re-=ke,x+=ke,F-=ke,ee+=ke,I.length-=ke;break}I.mode=k;break;case W:for(;J<14;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}if(I.nlen=(U&31)+257,U>>>=5,J-=5,I.ndist=(U&31)+1,U>>>=5,J-=5,I.ncode=(U&15)+4,U>>>=4,J-=4,I.nlen>286||I.ndist>30){j.msg="too many length or distance symbols",I.mode=$;break}I.have=0,I.mode=se;case se:for(;I.have<I.ncode;){for(;J<3;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}I.lens[Sc[I.have++]]=U&7,U>>>=3,J-=3}for(;I.have<19;)I.lens[Sc[I.have++]]=0;if(I.lencode=I.lendyn,I.lenbits=7,Mi={bits:I.lenbits},ai=o(r,I.lens,0,19,I.lencode,0,I.work,Mi),I.lenbits=Mi.bits,ai){j.msg="invalid code lengths set",I.mode=$;break}I.have=0,I.mode=te;case te:for(;I.have<I.nlen+I.ndist;){for(;ut=I.lencode[U&(1<<I.lenbits)-1],He=ut>>>24,yt=ut>>>16&255,Dt=ut&65535,!(He<=J);){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}if(Dt<16)U>>>=He,J-=He,I.lens[I.have++]=Dt;else{if(Dt===16){for(wi=He+2;J<wi;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}if(U>>>=He,J-=He,I.have===0){j.msg="invalid bit length repeat",I.mode=$;break}_t=I.lens[I.have-1],ke=3+(U&3),U>>>=2,J-=2}else if(Dt===17){for(wi=He+3;J<wi;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}U>>>=He,J-=He,_t=0,ke=3+(U&7),U>>>=3,J-=3}else{for(wi=He+7;J<wi;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}U>>>=He,J-=He,_t=0,ke=11+(U&127),U>>>=7,J-=7}if(I.have+ke>I.nlen+I.ndist){j.msg="invalid bit length repeat",I.mode=$;break}for(;ke--;)I.lens[I.have++]=_t}}if(I.mode===$)break;if(I.lens[256]===0){j.msg="invalid code -- missing end-of-block",I.mode=$;break}if(I.lenbits=9,Mi={bits:I.lenbits},ai=o(s,I.lens,0,I.nlen,I.lencode,0,I.work,Mi),I.lenbits=Mi.bits,ai){j.msg="invalid literal/lengths set",I.mode=$;break}if(I.distbits=6,I.distcode=I.distdyn,Mi={bits:I.distbits},ai=o(a,I.lens,I.nlen,I.ndist,I.distcode,0,I.work,Mi),I.distbits=Mi.bits,ai){j.msg="invalid distances set",I.mode=$;break}if(I.mode=oe,ne===h)break e;case oe:I.mode=Q;case Q:if(re>=6&&F>=258){j.next_out=ee,j.avail_out=F,j.next_in=x,j.avail_in=re,I.hold=U,I.bits=J,n(j,Se),ee=j.next_out,Pe=j.output,F=j.avail_out,x=j.next_in,ge=j.input,re=j.avail_in,U=I.hold,J=I.bits,I.mode===k&&(I.back=-1);break}for(I.back=0;ut=I.lencode[U&(1<<I.lenbits)-1],He=ut>>>24,yt=ut>>>16&255,Dt=ut&65535,!(He<=J);){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}if(yt&&!(yt&240)){for(Kt=He,co=yt,ho=Dt;ut=I.lencode[ho+((U&(1<<Kt+co)-1)>>Kt)],He=ut>>>24,yt=ut>>>16&255,Dt=ut&65535,!(Kt+He<=J);){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}U>>>=Kt,J-=Kt,I.back+=Kt}if(U>>>=He,J-=He,I.back+=He,I.length=Dt,yt===0){I.mode=V;break}if(yt&32){I.back=-1,I.mode=k;break}if(yt&64){j.msg="invalid literal/length code",I.mode=$;break}I.extra=yt&15,I.mode=ce;case ce:if(I.extra){for(wi=I.extra;J<wi;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}I.length+=U&(1<<I.extra)-1,U>>>=I.extra,J-=I.extra,I.back+=I.extra}I.was=I.length,I.mode=_e;case _e:for(;ut=I.distcode[U&(1<<I.distbits)-1],He=ut>>>24,yt=ut>>>16&255,Dt=ut&65535,!(He<=J);){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}if(!(yt&240)){for(Kt=He,co=yt,ho=Dt;ut=I.distcode[ho+((U&(1<<Kt+co)-1)>>Kt)],He=ut>>>24,yt=ut>>>16&255,Dt=ut&65535,!(Kt+He<=J);){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}U>>>=Kt,J-=Kt,I.back+=Kt}if(U>>>=He,J-=He,I.back+=He,yt&64){j.msg="invalid distance code",I.mode=$;break}I.offset=Dt,I.extra=yt&15,I.mode=he;case he:if(I.extra){for(wi=I.extra;J<wi;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}I.offset+=U&(1<<I.extra)-1,U>>>=I.extra,J-=I.extra,I.back+=I.extra}if(I.offset>I.dmax){j.msg="invalid distance too far back",I.mode=$;break}I.mode=D;case D:if(F===0)break e;if(ke=Se-F,I.offset>ke){if(ke=I.offset-ke,ke>I.whave&&I.sane){j.msg="invalid distance too far back",I.mode=$;break}ke>I.wnext?(ke-=I.wnext,Ve=I.wsize-ke):Ve=I.wnext-ke,ke>I.length&&(ke=I.length),Oi=I.window}else Oi=Pe,Ve=ee-I.offset,ke=I.length;ke>F&&(ke=F),F-=ke,I.length-=ke;do Pe[ee++]=Oi[Ve++];while(--ke);I.length===0&&(I.mode=Q);break;case V:if(F===0)break e;Pe[ee++]=I.length,F--,I.mode=Q;break;case q:if(I.wrap){for(;J<32;){if(re===0)break e;re--,U|=ge[x++]<<J,J+=8}if(Se-=F,j.total_out+=Se,I.total+=Se,Se&&(j.adler=I.check=I.flags?i(I.check,Pe,Se,ee-Se):e(I.check,Pe,Se,ee-Se)),Se=F,(I.flags?U:ve(U))!==I.check){j.msg="incorrect data check",I.mode=$;break}U=0,J=0}I.mode=Z;case Z:if(I.wrap&&I.flags){for(;J<32;){if(re===0)break e;re--,U+=ge[x++]<<J,J+=8}if(U!==(I.total&4294967295)){j.msg="incorrect length check",I.mode=$;break}U=0,J=0}I.mode=de;case de:ai=g;break e;case $:ai=_;break e;case N:return w;case G:default:return u}return j.next_out=ee,j.avail_out=F,j.next_in=x,j.avail_in=re,I.hold=U,I.bits=J,(I.wsize||Se!==j.avail_out&&I.mode<$&&(I.mode<q||ne!==l))&&Ye(j,j.output,j.next_out,Se-j.avail_out),Ee-=j.avail_in,Se-=j.avail_out,j.total_in+=Ee,j.total_out+=Se,I.total+=Se,I.wrap&&Se&&(j.adler=I.check=I.flags?i(I.check,Pe,Se,j.next_out-Se):e(I.check,Pe,Se,j.next_out-Se)),j.data_type=I.bits+(I.last?64:0)+(I.mode===k?128:0)+(I.mode===oe||I.mode===O?256:0),(Ee===0&&Se===0||ne===l)&&ai===c&&(ai=m),ai}function le(j){if(!j||!j.state)return u;var ne=j.state;return ne.window&&(ne.window=null),j.state=null,c}function fe(j,ne){var I;return!j||!j.state||(I=j.state,!(I.wrap&2))?u:(I.head=ne,ne.done=!1,c)}function xe(j,ne){var I=ne.length,ge,Pe,x;return!j||!j.state||(ge=j.state,ge.wrap!==0&&ge.mode!==y)?u:ge.mode===y&&(Pe=1,Pe=e(Pe,ne,I,0),Pe!==ge.check)?_:(x=Ye(j,ne,I,I),x?(ge.mode=N,w):(ge.havedict=1,c))}return li.inflateReset=ye,li.inflateReset2=be,li.inflateResetKeep=ue,li.inflateInit=Ce,li.inflateInit2=we,li.inflate=B,li.inflateEnd=le,li.inflateGetHeader=fe,li.inflateSetDictionary=xe,li.inflateInfo="pako inflate (from Nodeca project)",li}var Ya,Yd;function z0(){return Yd||(Yd=1,Ya={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}),Ya}var Xa,Xd;function v2(){if(Xd)return Xa;Xd=1;function t(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}return Xa=t,Xa}var Zd;function _2(){if(Zd)return Jn;Zd=1;var t=g2(),e=xn(),i=$0(),n=z0(),o=_c(),r=B0(),s=v2(),a=Object.prototype.toString;function l(c){if(!(this instanceof l))return new l(c);this.options=e.assign({chunkSize:16384,windowBits:0,to:""},c||{});var g=this.options;g.raw&&g.windowBits>=0&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),g.windowBits>=0&&g.windowBits<16&&!(c&&c.windowBits)&&(g.windowBits+=32),g.windowBits>15&&g.windowBits<48&&(g.windowBits&15||(g.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new r,this.strm.avail_out=0;var f=t.inflateInit2(this.strm,g.windowBits);if(f!==n.Z_OK)throw new Error(o[f]);if(this.header=new s,t.inflateGetHeader(this.strm,this.header),g.dictionary&&(typeof g.dictionary=="string"?g.dictionary=i.string2buf(g.dictionary):a.call(g.dictionary)==="[object ArrayBuffer]"&&(g.dictionary=new Uint8Array(g.dictionary)),g.raw&&(f=t.inflateSetDictionary(this.strm,g.dictionary),f!==n.Z_OK)))throw new Error(o[f])}l.prototype.push=function(c,g){var f=this.strm,u=this.options.chunkSize,_=this.options.dictionary,w,m,p,v,b,S=!1;if(this.ended)return!1;m=g===~~g?g:g===!0?n.Z_FINISH:n.Z_NO_FLUSH,typeof c=="string"?f.input=i.binstring2buf(c):a.call(c)==="[object ArrayBuffer]"?f.input=new Uint8Array(c):f.input=c,f.next_in=0,f.avail_in=f.input.length;do{if(f.avail_out===0&&(f.output=new e.Buf8(u),f.next_out=0,f.avail_out=u),w=t.inflate(f,n.Z_NO_FLUSH),w===n.Z_NEED_DICT&&_&&(w=t.inflateSetDictionary(this.strm,_)),w===n.Z_BUF_ERROR&&S===!0&&(w=n.Z_OK,S=!1),w!==n.Z_STREAM_END&&w!==n.Z_OK)return this.onEnd(w),this.ended=!0,!1;f.next_out&&(f.avail_out===0||w===n.Z_STREAM_END||f.avail_in===0&&(m===n.Z_FINISH||m===n.Z_SYNC_FLUSH))&&(this.options.to==="string"?(p=i.utf8border(f.output,f.next_out),v=f.next_out-p,b=i.buf2string(f.output,p),f.next_out=v,f.avail_out=u-v,v&&e.arraySet(f.output,f.output,p,v,0),this.onData(b)):this.onData(e.shrinkBuf(f.output,f.next_out))),f.avail_in===0&&f.avail_out===0&&(S=!0)}while((f.avail_in>0||f.avail_out===0)&&w!==n.Z_STREAM_END);return w===n.Z_STREAM_END&&(m=n.Z_FINISH),m===n.Z_FINISH?(w=t.inflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===n.Z_OK):(m===n.Z_SYNC_FLUSH&&(this.onEnd(n.Z_OK),f.avail_out=0),!0)},l.prototype.onData=function(c){this.chunks.push(c)},l.prototype.onEnd=function(c){c===n.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=e.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg};function d(c,g){var f=new l(g);if(f.push(c,!0),f.err)throw f.msg||o[f.err];return f.result}function h(c,g){return g=g||{},g.raw=!0,d(c,g)}return Jn.Inflate=l,Jn.inflate=d,Jn.inflateRaw=h,Jn.ungzip=d,Jn}var Za,Qd;function m2(){if(Qd)return Za;Qd=1;var t=xn().assign,e=u2(),i=_2(),n=z0(),o={};return t(o,e,i,n),Za=o,Za}var Jd;function b2(){return Jd||(Jd=1,function(t){(function(){var e={},i;t.exports=e,typeof c2=="function"?i=m2():i=window.pako,function(n,o){n.toRGBA8=function(r){var s=r.width,a=r.height;if(r.tabs.acTL==null)return[n.toRGBA8.decodeImage(r.data,s,a,r).buffer];var l=[];r.frames[0].data==null&&(r.frames[0].data=r.data);for(var d,h=new Uint8Array(s*a*4),c=0;c<r.frames.length;c++){var g=r.frames[c],f=g.rect.x,u=g.rect.y,_=g.rect.width,w=g.rect.height,m=n.toRGBA8.decodeImage(g.data,_,w,r);if(c==0?d=m:g.blend==0?n._copyTile(m,_,w,d,s,a,f,u,0):g.blend==1&&n._copyTile(m,_,w,d,s,a,f,u,1),l.push(d.buffer),d=d.slice(0),g.dispose!=0){if(g.dispose==1)n._copyTile(h,_,w,d,s,a,f,u,0);else if(g.dispose==2){for(var p=c-1;r.frames[p].dispose==2;)p--;d=new Uint8Array(l[p]).slice(0)}}}return l},n.toRGBA8.decodeImage=function(r,s,a,l){var d=s*a,h=n.decode._getBPP(l),c=Math.ceil(s*h/8),g=new Uint8Array(d*4),f=new Uint32Array(g.buffer),u=l.ctype,_=l.depth,w=n._bin.readUshort;if(u==6){var m=d<<2;if(_==8)for(var p=0;p<m;p++)g[p]=r[p];if(_==16)for(var p=0;p<m;p++)g[p]=r[p<<1]}else if(u==2){var v=l.tabs.tRNS,b=-1,S=-1,T=-1;if(v&&(b=v[0],S=v[1],T=v[2]),_==8)for(var p=0;p<d;p++){var E=p<<2,A=p*3;g[E]=r[A],g[E+1]=r[A+1],g[E+2]=r[A+2],g[E+3]=255,b!=-1&&r[A]==b&&r[A+1]==S&&r[A+2]==T&&(g[E+3]=0)}if(_==16)for(var p=0;p<d;p++){var E=p<<2,A=p*6;g[E]=r[A],g[E+1]=r[A+2],g[E+2]=r[A+4],g[E+3]=255,b!=-1&&w(r,A)==b&&w(r,A+2)==S&&w(r,A+4)==T&&(g[E+3]=0)}}else if(u==3){var M=l.tabs.PLTE,C=l.tabs.tRNS,P=C?C.length:0;if(_==1)for(var z=0;z<a;z++)for(var y=z*c,k=z*s,p=0;p<s;p++){var E=k+p<<2,R=r[y+(p>>3)]>>7-((p&7)<<0)&1,L=3*R;g[E]=M[L],g[E+1]=M[L+1],g[E+2]=M[L+2],g[E+3]=R<P?C[R]:255}if(_==2)for(var z=0;z<a;z++)for(var y=z*c,k=z*s,p=0;p<s;p++){var E=k+p<<2,R=r[y+(p>>2)]>>6-((p&3)<<1)&3,L=3*R;g[E]=M[L],g[E+1]=M[L+1],g[E+2]=M[L+2],g[E+3]=R<P?C[R]:255}if(_==4)for(var z=0;z<a;z++)for(var y=z*c,k=z*s,p=0;p<s;p++){var E=k+p<<2,R=r[y+(p>>1)]>>4-((p&1)<<2)&15,L=3*R;g[E]=M[L],g[E+1]=M[L+1],g[E+2]=M[L+2],g[E+3]=R<P?C[R]:255}if(_==8)for(var p=0;p<d;p++){var E=p<<2,R=r[p],L=3*R;g[E]=M[L],g[E+1]=M[L+1],g[E+2]=M[L+2],g[E+3]=R<P?C[R]:255}}else if(u==4){if(_==8)for(var p=0;p<d;p++){var E=p<<2,O=p<<1,H=r[O];g[E]=H,g[E+1]=H,g[E+2]=H,g[E+3]=r[O+1]}if(_==16)for(var p=0;p<d;p++){var E=p<<2,O=p<<2,H=r[O];g[E]=H,g[E+1]=H,g[E+2]=H,g[E+3]=r[O+2]}}else if(u==0){var b=l.tabs.tRNS?l.tabs.tRNS:-1;if(_==1)for(var p=0;p<d;p++){var H=255*(r[p>>3]>>7-(p&7)&1),W=H==b*255?0:255;f[p]=W<<24|H<<16|H<<8|H}if(_==2)for(var p=0;p<d;p++){var H=85*(r[p>>2]>>6-((p&3)<<1)&3),W=H==b*85?0:255;f[p]=W<<24|H<<16|H<<8|H}if(_==4)for(var p=0;p<d;p++){var H=17*(r[p>>1]>>4-((p&1)<<2)&15),W=H==b*17?0:255;f[p]=W<<24|H<<16|H<<8|H}if(_==8)for(var p=0;p<d;p++){var H=r[p],W=H==b?0:255;f[p]=W<<24|H<<16|H<<8|H}if(_==16)for(var p=0;p<d;p++){var H=r[p<<1],W=w(r,p<<1)==b?0:255;f[p]=W<<24|H<<16|H<<8|H}}return g},n.decode=function(r){for(var s=new Uint8Array(r),a=8,l=n._bin,d=l.readUshort,h=l.readUint,c={tabs:{},frames:[]},g=new Uint8Array(s.length),f=0,u,_=0,w=[137,80,78,71,13,10,26,10],m=0;m<8;m++)if(s[m]!=w[m])throw"The input is not a PNG file!";for(;a<s.length;){var p=l.readUint(s,a);a+=4;var v=l.readASCII(s,a,4);if(a+=4,v=="IHDR")n.decode._IHDR(s,a,c);else if(v=="IDAT"){for(var m=0;m<p;m++)g[f+m]=s[a+m];f+=p}else if(v=="acTL")c.tabs[v]={num_frames:h(s,a),num_plays:h(s,a+4)},u=new Uint8Array(s.length);else if(v=="fcTL"){if(_!=0){var b=c.frames[c.frames.length-1];b.data=n.decode._decompress(c,u.slice(0,_),b.rect.width,b.rect.height),_=0}var S={x:h(s,a+12),y:h(s,a+16),width:h(s,a+4),height:h(s,a+8)},T=d(s,a+22);T=d(s,a+20)/(T==0?100:T);var E={rect:S,delay:Math.round(T*1e3),dispose:s[a+24],blend:s[a+25]};c.frames.push(E)}else if(v=="fdAT"){for(var m=0;m<p-4;m++)u[_+m]=s[a+m+4];_+=p-4}else if(v=="pHYs")c.tabs[v]=[l.readUint(s,a),l.readUint(s,a+4),s[a+8]];else if(v=="cHRM"){c.tabs[v]=[];for(var m=0;m<8;m++)c.tabs[v].push(l.readUint(s,a+m*4))}else if(v=="tEXt"){c.tabs[v]==null&&(c.tabs[v]={});var A=l.nextZero(s,a),M=l.readASCII(s,a,A-a),C=l.readASCII(s,A+1,a+p-A-1);c.tabs[v][M]=C}else if(v=="iTXt"){c.tabs[v]==null&&(c.tabs[v]={});var A=0,P=a;A=l.nextZero(s,P);var M=l.readASCII(s,P,A-P);P=A+1,s[P],s[P+1],P+=2,A=l.nextZero(s,P),l.readASCII(s,P,A-P),P=A+1,A=l.nextZero(s,P),l.readUTF8(s,P,A-P),P=A+1;var C=l.readUTF8(s,P,p-(P-a));c.tabs[v][M]=C}else if(v=="PLTE")c.tabs[v]=l.readBytes(s,a,p);else if(v=="hIST"){var z=c.tabs.PLTE.length/3;c.tabs[v]=[];for(var m=0;m<z;m++)c.tabs[v].push(d(s,a+m*2))}else if(v=="tRNS")c.ctype==3?c.tabs[v]=l.readBytes(s,a,p):c.ctype==0?c.tabs[v]=d(s,a):c.ctype==2&&(c.tabs[v]=[d(s,a),d(s,a+2),d(s,a+4)]);else if(v=="gAMA")c.tabs[v]=l.readUint(s,a)/1e5;else if(v=="sRGB")c.tabs[v]=s[a];else if(v=="bKGD")c.ctype==0||c.ctype==4?c.tabs[v]=[d(s,a)]:c.ctype==2||c.ctype==6?c.tabs[v]=[d(s,a),d(s,a+2),d(s,a+4)]:c.ctype==3&&(c.tabs[v]=s[a]);else if(v=="IEND"){if(_!=0){var b=c.frames[c.frames.length-1];b.data=n.decode._decompress(c,u.slice(0,_),b.rect.width,b.rect.height),_=0}c.data=n.decode._decompress(c,g,c.width,c.height);break}a+=p,l.readUint(s,a),a+=4}return delete c.compress,delete c.interlace,delete c.filter,c},n.decode._decompress=function(r,s,a,l){return r.compress==0&&(s=n.decode._inflate(s)),r.interlace==0?s=n.decode._filterZero(s,r,0,a,l):r.interlace==1&&(s=n.decode._readInterlace(s,r)),s},n.decode._inflate=function(r){return o.inflate(r)},n.decode._readInterlace=function(r,s){for(var a=s.width,l=s.height,d=n.decode._getBPP(s),h=d>>3,c=Math.ceil(a*d/8),g=new Uint8Array(l*c),f=0,u=[0,0,4,0,2,0,1],_=[0,4,0,2,0,1,0],w=[8,8,8,4,4,2,2],m=[8,8,4,4,2,2,1],p=0;p<7;){for(var v=w[p],b=m[p],S=0,T=0,E=u[p];E<l;)E+=v,T++;for(var A=_[p];A<a;)A+=b,S++;var M=Math.ceil(S*d/8);n.decode._filterZero(r,s,f,S,T);for(var C=0,P=u[p];P<l;){for(var z=_[p],y=f+C*M<<3;z<a;){if(d==1){var k=r[y>>3];k=k>>7-(y&7)&1,g[P*c+(z>>3)]|=k<<7-((z&3)<<0)}if(d==2){var k=r[y>>3];k=k>>6-(y&7)&3,g[P*c+(z>>2)]|=k<<6-((z&3)<<1)}if(d==4){var k=r[y>>3];k=k>>4-(y&7)&15,g[P*c+(z>>1)]|=k<<4-((z&1)<<2)}if(d>=8)for(var R=P*c+z*h,L=0;L<h;L++)g[R+L]=r[(y>>3)+L];y+=d,z+=b}C++,P+=v}S*T!=0&&(f+=T*(1+M)),p=p+1}return g},n.decode._getBPP=function(r){var s=[1,null,3,1,2,null,4][r.ctype];return s*r.depth},n.decode._filterZero=function(r,s,a,l,d){var h=n.decode._getBPP(s),c=Math.ceil(l*h/8),g=n.decode._paeth;h=Math.ceil(h/8);for(var f=0;f<d;f++){var u=a+f*c,_=u+f+1,w=r[_-1];if(w==0)for(var m=0;m<c;m++)r[u+m]=r[_+m];else if(w==1){for(var m=0;m<h;m++)r[u+m]=r[_+m];for(var m=h;m<c;m++)r[u+m]=r[_+m]+r[u+m-h]&255}else if(f==0){for(var m=0;m<h;m++)r[u+m]=r[_+m];if(w==2)for(var m=h;m<c;m++)r[u+m]=r[_+m]&255;if(w==3)for(var m=h;m<c;m++)r[u+m]=r[_+m]+(r[u+m-h]>>1)&255;if(w==4)for(var m=h;m<c;m++)r[u+m]=r[_+m]+g(r[u+m-h],0,0)&255}else{if(w==2)for(var m=0;m<c;m++)r[u+m]=r[_+m]+r[u+m-c]&255;if(w==3){for(var m=0;m<h;m++)r[u+m]=r[_+m]+(r[u+m-c]>>1)&255;for(var m=h;m<c;m++)r[u+m]=r[_+m]+(r[u+m-c]+r[u+m-h]>>1)&255}if(w==4){for(var m=0;m<h;m++)r[u+m]=r[_+m]+g(0,r[u+m-c],0)&255;for(var m=h;m<c;m++)r[u+m]=r[_+m]+g(r[u+m-h],r[u+m-c],r[u+m-h-c])&255}}}return r},n.decode._paeth=function(r,s,a){var l=r+s-a,d=Math.abs(l-r),h=Math.abs(l-s),c=Math.abs(l-a);return d<=h&&d<=c?r:h<=c?s:a},n.decode._IHDR=function(r,s,a){var l=n._bin;a.width=l.readUint(r,s),s+=4,a.height=l.readUint(r,s),s+=4,a.depth=r[s],s++,a.ctype=r[s],s++,a.compress=r[s],s++,a.filter=r[s],s++,a.interlace=r[s],s++},n._bin={nextZero:function(r,s){for(;r[s]!=0;)s++;return s},readUshort:function(r,s){return r[s]<<8|r[s+1]},writeUshort:function(r,s,a){r[s]=a>>8&255,r[s+1]=a&255},readUint:function(r,s){return r[s]*(256*256*256)+(r[s+1]<<16|r[s+2]<<8|r[s+3])},writeUint:function(r,s,a){r[s]=a>>24&255,r[s+1]=a>>16&255,r[s+2]=a>>8&255,r[s+3]=a&255},readASCII:function(r,s,a){for(var l="",d=0;d<a;d++)l+=String.fromCharCode(r[s+d]);return l},writeASCII:function(r,s,a){for(var l=0;l<a.length;l++)r[s+l]=a.charCodeAt(l)},readBytes:function(r,s,a){for(var l=[],d=0;d<a;d++)l.push(r[s+d]);return l},pad:function(r){return r.length<2?"0"+r:r},readUTF8:function(r,s,a){for(var l="",d,h=0;h<a;h++)l+="%"+n._bin.pad(r[s+h].toString(16));try{d=decodeURIComponent(l)}catch{return n._bin.readASCII(r,s,a)}return d}},n._copyTile=function(r,s,a,l,d,h,c,g,f){for(var u=Math.min(s,d),_=Math.min(a,h),w=0,m=0,p=0;p<_;p++)for(var v=0;v<u;v++)if(c>=0&&g>=0?(w=p*s+v<<2,m=(g+p)*d+c+v<<2):(w=(-g+p)*s-c+v<<2,m=p*d+v<<2),f==0)l[m]=r[w],l[m+1]=r[w+1],l[m+2]=r[w+2],l[m+3]=r[w+3];else if(f==1){var b=r[w+3]*.00392156862745098,S=r[w]*b,T=r[w+1]*b,E=r[w+2]*b,A=l[m+3]*(1/255),M=l[m]*A,C=l[m+1]*A,P=l[m+2]*A,z=1-b,y=b+A*z,k=y==0?0:1/y;l[m+3]=255*y,l[m+0]=(S+M*z)*k,l[m+1]=(T+C*z)*k,l[m+2]=(E+P*z)*k}else if(f==2){var b=r[w+3],S=r[w],T=r[w+1],E=r[w+2],A=l[m+3],M=l[m],C=l[m+1],P=l[m+2];b==A&&S==M&&T==C&&E==P?(l[m]=0,l[m+1]=0,l[m+2]=0,l[m+3]=0):(l[m]=S,l[m+1]=T,l[m+2]=E,l[m+3]=b)}else if(f==3){var b=r[w+3],S=r[w],T=r[w+1],E=r[w+2],A=l[m+3],M=l[m],C=l[m+1],P=l[m+2];if(b==A&&S==M&&T==C&&E==P)continue;if(b<220&&A>20)return!1}return!0},n.encode=function(r,s,a,l,d,h){l==null&&(l=0),h==null&&(h=!1);for(var c=new Uint8Array(r[0].byteLength*r.length+100),g=[137,80,78,71,13,10,26,10],f=0;f<8;f++)c[f]=g[f];var u=8,_=n._bin,w=n.crc.crc,m=_.writeUint,p=_.writeUshort,v=_.writeASCII,b=n.encode.compressPNG(r,s,a,l,h);m(c,u,13),u+=4,v(c,u,"IHDR"),u+=4,m(c,u,s),u+=4,m(c,u,a),u+=4,c[u]=b.depth,u++,c[u]=b.ctype,u++,c[u]=0,u++,c[u]=0,u++,c[u]=0,u++,m(c,u,w(c,u-17,17)),u+=4,m(c,u,1),u+=4,v(c,u,"sRGB"),u+=4,c[u]=1,u++,m(c,u,w(c,u-5,5)),u+=4;var S=r.length>1;if(S&&(m(c,u,8),u+=4,v(c,u,"acTL"),u+=4,m(c,u,r.length),u+=4,m(c,u,0),u+=4,m(c,u,w(c,u-12,12)),u+=4),b.ctype==3){var T=b.plte.length;m(c,u,T*3),u+=4,v(c,u,"PLTE"),u+=4;for(var f=0;f<T;f++){var E=f*3,A=b.plte[f],M=A&255,C=A>>8&255,P=A>>16&255;c[u+E+0]=M,c[u+E+1]=C,c[u+E+2]=P}if(u+=T*3,m(c,u,w(c,u-T*3-4,T*3+4)),u+=4,b.gotAlpha){m(c,u,T),u+=4,v(c,u,"tRNS"),u+=4;for(var f=0;f<T;f++)c[u+f]=b.plte[f]>>24&255;u+=T,m(c,u,w(c,u-T-4,T+4)),u+=4}}for(var z=0,y=0;y<b.frames.length;y++){var k=b.frames[y];S&&(m(c,u,26),u+=4,v(c,u,"fcTL"),u+=4,m(c,u,z++),u+=4,m(c,u,k.rect.width),u+=4,m(c,u,k.rect.height),u+=4,m(c,u,k.rect.x),u+=4,m(c,u,k.rect.y),u+=4,p(c,u,d[y]),u+=2,p(c,u,1e3),u+=2,c[u]=k.dispose,u++,c[u]=k.blend,u++,m(c,u,w(c,u-30,30)),u+=4);var R=k.cimg,T=R.length;m(c,u,T+(y==0?0:4)),u+=4;var L=u;v(c,u,y==0?"IDAT":"fdAT"),u+=4,y!=0&&(m(c,u,z++),u+=4);for(var f=0;f<T;f++)c[u+f]=R[f];u+=T,m(c,u,w(c,L,u-L)),u+=4}return m(c,u,0),u+=4,v(c,u,"IEND"),u+=4,m(c,u,w(c,u-4,4)),u+=4,c.buffer.slice(0,u)},n.encode.compressPNG=function(r,s,a,l,d){for(var h=n.encode.compress(r,s,a,l,!1,d),c=0;c<r.length;c++){var g=h.frames[c];g.rect.width;var f=g.rect.height,u=g.bpl,_=g.bpp,w=new Uint8Array(f*u+f);g.cimg=n.encode._filterZero(g.img,f,_,u,w)}return h},n.encode.compress=function(r,s,a,l,d,h){h==null&&(h=!1);for(var c=6,g=8,f=4,u=255,_=0;_<r.length;_++)for(var w=new Uint8Array(r[_]),m=w.length,p=0;p<m;p+=4)u&=w[p+3];var v=u!=255,b={},S=[];if(r.length!=0&&(b[0]=0,S.push(0),l!=0&&l--),l!=0){var T=n.quantize(r,l,d);r=T.bufs;for(var p=0;p<T.plte.length;p++){var E=T.plte[p].est.rgba;b[E]==null&&(b[E]=S.length,S.push(E))}}else for(var _=0;_<r.length;_++)for(var A=new Uint32Array(r[_]),m=A.length,p=0;p<m;p++){var E=A[p];if((p<s||E!=A[p-1]&&E!=A[p-s])&&b[E]==null&&(b[E]=S.length,S.push(E),S.length>=300))break}var M=v?d:!1,C=S.length;C<=256&&h==!1&&(C<=2?g=1:C<=4?g=2:C<=16?g=4:g=8,d&&(g=8),v=!0);for(var P=[],_=0;_<r.length;_++){var z=new Uint8Array(r[_]),y=new Uint32Array(z.buffer),k=0,R=0,L=s,O=a,H=0;if(_!=0&&!M){for(var W=d||_==1||P[P.length-2].dispose==2?1:2,se=0,te=1e9,oe=0;oe<W;oe++){for(var de=new Uint8Array(r[_-1-oe]),Q=new Uint32Array(r[_-1-oe]),ce=s,_e=a,he=-1,D=-1,V=0;V<a;V++)for(var q=0;q<s;q++){var p=V*s+q;y[p]!=Q[p]&&(q<ce&&(ce=q),q>he&&(he=q),V<_e&&(_e=V),V>D&&(D=V))}var Z=he==-1?1:(he-ce+1)*(D-_e+1);Z<te&&(te=Z,se=oe,he==-1?(k=R=0,L=O=1):(k=ce,R=_e,L=he-ce+1,O=D-_e+1))}var de=new Uint8Array(r[_-1-se]);se==1&&(P[P.length-1].dispose=2);var $=new Uint8Array(L*O*4);new Uint32Array($.buffer),n._copyTile(de,s,a,$,L,O,-k,-R,0),n._copyTile(z,s,a,$,L,O,-k,-R,3)?(n._copyTile(z,s,a,$,L,O,-k,-R,2),H=1):(n._copyTile(z,s,a,$,L,O,-k,-R,0),H=0),z=$,y=new Uint32Array(z.buffer)}var N=4*L;if(C<=256&&h==!1){N=Math.ceil(g*L/8);for(var $=new Uint8Array(N*O),V=0;V<O;V++){var p=V*N,G=V*L;if(g==8)for(var q=0;q<L;q++)$[p+q]=b[y[G+q]];else if(g==4)for(var q=0;q<L;q++)$[p+(q>>1)]|=b[y[G+q]]<<4-(q&1)*4;else if(g==2)for(var q=0;q<L;q++)$[p+(q>>2)]|=b[y[G+q]]<<6-(q&3)*2;else if(g==1)for(var q=0;q<L;q++)$[p+(q>>3)]|=b[y[G+q]]<<7-(q&7)*1}z=$,c=3,f=1}else if(v==!1&&r.length==1){for(var $=new Uint8Array(L*O*3),Y=L*O,p=0;p<Y;p++){var ie=p*3,X=p*4;$[ie]=z[X],$[ie+1]=z[X+1],$[ie+2]=z[X+2]}z=$,c=2,f=3,N=3*L}P.push({rect:{x:k,y:R,width:L,height:O},img:z,bpl:N,bpp:f,blend:H,dispose:M?1:0})}return{ctype:c,depth:g,plte:S,gotAlpha:v,frames:P}},n.encode._filterZero=function(r,s,a,l,d){for(var h=[],c=0;c<5;c++)if(!(s*l>5e5&&(c==2||c==3||c==4))){for(var g=0;g<s;g++)n.encode._filterLine(d,r,g,l,a,c);if(h.push(o.deflate(d)),a==1)break}for(var f,u=1e9,_=0;_<h.length;_++)h[_].length<u&&(f=_,u=h[_].length);return h[f]},n.encode._filterLine=function(r,s,a,l,d,h){var c=a*l,g=c+a,f=n.decode._paeth;if(r[g]=h,g++,h==0)for(var u=0;u<l;u++)r[g+u]=s[c+u];else if(h==1){for(var u=0;u<d;u++)r[g+u]=s[c+u];for(var u=d;u<l;u++)r[g+u]=s[c+u]-s[c+u-d]+256&255}else if(a==0){for(var u=0;u<d;u++)r[g+u]=s[c+u];if(h==2)for(var u=d;u<l;u++)r[g+u]=s[c+u];if(h==3)for(var u=d;u<l;u++)r[g+u]=s[c+u]-(s[c+u-d]>>1)+256&255;if(h==4)for(var u=d;u<l;u++)r[g+u]=s[c+u]-f(s[c+u-d],0,0)+256&255}else{if(h==2)for(var u=0;u<l;u++)r[g+u]=s[c+u]+256-s[c+u-l]&255;if(h==3){for(var u=0;u<d;u++)r[g+u]=s[c+u]+256-(s[c+u-l]>>1)&255;for(var u=d;u<l;u++)r[g+u]=s[c+u]+256-(s[c+u-l]+s[c+u-d]>>1)&255}if(h==4){for(var u=0;u<d;u++)r[g+u]=s[c+u]+256-f(0,s[c+u-l],0)&255;for(var u=d;u<l;u++)r[g+u]=s[c+u]+256-f(s[c+u-d],s[c+u-l],s[c+u-d-l])&255}}},n.crc={table:function(){for(var r=new Uint32Array(256),s=0;s<256;s++){for(var a=s,l=0;l<8;l++)a&1?a=3988292384^a>>>1:a=a>>>1;r[s]=a}return r}(),update:function(r,s,a,l){for(var d=0;d<l;d++)r=n.crc.table[(r^s[a+d])&255]^r>>>8;return r},crc:function(r,s,a){return n.crc.update(4294967295,r,s,a)^4294967295}},n.quantize=function(r,s,a){for(var l=[],d=0,h=0;h<r.length;h++)l.push(n.encode.alphaMul(new Uint8Array(r[h]),a)),d+=r[h].byteLength;for(var c=new Uint8Array(d),g=new Uint32Array(c.buffer),f=0,h=0;h<l.length;h++){for(var u=l[h],_=u.length,w=0;w<_;w++)c[f+w]=u[w];f+=_}var m={i0:0,i1:c.length,bst:null,est:null,tdst:0,left:null,right:null};m.bst=n.quantize.stats(c,m.i0,m.i1),m.est=n.quantize.estats(m.bst);for(var p=[m];p.length<s;){for(var v=0,b=0,h=0;h<p.length;h++)p[h].est.L>v&&(v=p[h].est.L,b=h);if(v<.001)break;var S=p[b],T=n.quantize.splitPixels(c,g,S.i0,S.i1,S.est.e,S.est.eMq255),E={i0:S.i0,i1:T,bst:null,est:null,tdst:0,left:null,right:null};E.bst=n.quantize.stats(c,E.i0,E.i1),E.est=n.quantize.estats(E.bst);var A={i0:T,i1:S.i1,bst:null,est:null,tdst:0,left:null,right:null};A.bst={R:[],m:[],N:S.bst.N-E.bst.N};for(var h=0;h<16;h++)A.bst.R[h]=S.bst.R[h]-E.bst.R[h];for(var h=0;h<4;h++)A.bst.m[h]=S.bst.m[h]-E.bst.m[h];A.est=n.quantize.estats(A.bst),S.left=E,S.right=A,p[b]=E,p.push(A)}p.sort(function(W,se){return se.bst.N-W.bst.N});for(var M=0;M<l.length;M++){for(var C=n.quantize.planeDst,P=new Uint8Array(l[M].buffer),z=new Uint32Array(l[M].buffer),y=P.length,h=0;h<y;h+=4){for(var k=P[h]*.00392156862745098,R=P[h+1]*(1/255),L=P[h+2]*(1/255),O=P[h+3]*(1/255),H=m;H.left;)H=C(H.est,k,R,L,O)<=0?H.left:H.right;z[h>>2]=H.est.rgba}l[M]=z.buffer}return{bufs:l,plte:p}},n.quantize.getNearest=function(r,s,a,l,d){if(r.left==null)return r.tdst=n.quantize.dist(r.est.q,s,a,l,d),r;var h=n.quantize.planeDst(r.est,s,a,l,d),c=r.left,g=r.right;h>0&&(c=r.right,g=r.left);var f=n.quantize.getNearest(c,s,a,l,d);if(f.tdst<=h*h)return f;var u=n.quantize.getNearest(g,s,a,l,d);return u.tdst<f.tdst?u:f},n.quantize.planeDst=function(r,s,a,l,d){var h=r.e;return h[0]*s+h[1]*a+h[2]*l+h[3]*d-r.eMq},n.quantize.dist=function(r,s,a,l,d){var h=s-r[0],c=a-r[1],g=l-r[2],f=d-r[3];return h*h+c*c+g*g+f*f},n.quantize.splitPixels=function(r,s,a,l,d,h){var c=n.quantize.vecDot;for(l-=4;a<l;){for(;c(r,a,d)<=h;)a+=4;for(;c(r,l,d)>h;)l-=4;if(a>=l)break;var g=s[a>>2];s[a>>2]=s[l>>2],s[l>>2]=g,a+=4,l-=4}for(;c(r,a,d)>h;)a-=4;return a+4},n.quantize.vecDot=function(r,s,a){return r[s]*a[0]+r[s+1]*a[1]+r[s+2]*a[2]+r[s+3]*a[3]},n.quantize.stats=function(r,s,a){for(var l=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=[0,0,0,0],h=a-s>>2,c=s;c<a;c+=4){var g=r[c]*.00392156862745098,f=r[c+1]*(1/255),u=r[c+2]*(1/255),_=r[c+3]*(1/255);d[0]+=g,d[1]+=f,d[2]+=u,d[3]+=_,l[0]+=g*g,l[1]+=g*f,l[2]+=g*u,l[3]+=g*_,l[5]+=f*f,l[6]+=f*u,l[7]+=f*_,l[10]+=u*u,l[11]+=u*_,l[15]+=_*_}return l[4]=l[1],l[8]=l[2],l[12]=l[3],l[9]=l[6],l[13]=l[7],l[14]=l[11],{R:l,m:d,N:h}},n.quantize.estats=function(r){var s=r.R,a=r.m,l=r.N,d=a[0],h=a[1],c=a[2],g=a[3],f=l==0?0:1/l,u=[s[0]-d*d*f,s[1]-d*h*f,s[2]-d*c*f,s[3]-d*g*f,s[4]-h*d*f,s[5]-h*h*f,s[6]-h*c*f,s[7]-h*g*f,s[8]-c*d*f,s[9]-c*h*f,s[10]-c*c*f,s[11]-c*g*f,s[12]-g*d*f,s[13]-g*h*f,s[14]-g*c*f,s[15]-g*g*f],_=u,w=n.M4,m=[.5,.5,.5,.5],p=0,v=0;if(l!=0)for(var b=0;b<10&&(m=w.multVec(_,m),v=Math.sqrt(w.dot(m,m)),m=w.sml(1/v,m),!(Math.abs(v-p)<1e-9));b++)p=v;var S=[d*f,h*f,c*f,g*f],T=w.dot(w.sml(255,S),m),E=S[3]<.001?0:1/S[3];return{Cov:u,q:S,e:m,L:p,eMq255:T,eMq:w.dot(m,S),rgba:(Math.round(255*S[3])<<24|Math.round(255*S[2]*E)<<16|Math.round(255*S[1]*E)<<8|Math.round(255*S[0]*E)<<0)>>>0}},n.M4={multVec:function(r,s){return[r[0]*s[0]+r[1]*s[1]+r[2]*s[2]+r[3]*s[3],r[4]*s[0]+r[5]*s[1]+r[6]*s[2]+r[7]*s[3],r[8]*s[0]+r[9]*s[1]+r[10]*s[2]+r[11]*s[3],r[12]*s[0]+r[13]*s[1]+r[14]*s[2]+r[15]*s[3]]},dot:function(r,s){return r[0]*s[0]+r[1]*s[1]+r[2]*s[2]+r[3]*s[3]},sml:function(r,s){return[r*s[0],r*s[1],r*s[2],r*s[3]]}},n.encode.alphaMul=function(r,s){for(var a=new Uint8Array(r.length),l=r.length>>2,d=0;d<l;d++){var h=d<<2,c=r[h+3];s&&(c=c<128?0:255);var g=c*(1/255);a[h+0]=r[h+0]*g,a[h+1]=r[h+1]*g,a[h+2]=r[h+2]*g,a[h+3]=c}return a}}(e,i)})()}(Va)),Va.exports}var y2=b2();const Uo=A0(y2);let eu=0;const x2=(t,e)=>{for(let i=t.length-1;i>=0;i--)if(e(t[i],i,t))return i;return-1},mc=C0("colors",()=>{const e=qn([]),i=()=>({id:eu++,选中:!1,x:0,y:0,颜色:"000000",偏色:"000000"}),n=d=>!d.选中&&d.x===0&&d.y===0&&d.颜色==="000000"&&d.偏色==="000000",o=d=>!n(d),r=(d,h,c,g)=>{const f={id:eu++,选中:!0,x:d,y:h,颜色:c,偏色:"000000"},u=g??e.findIndex(n);u===-1?e.push(f):e[u]=f},s=d=>{if(!(d===void 0&&(d=x2(e,o),d===-1))){e.splice(d,1);for(let h=e.length;h<10;h++)e[h]=i()}},a=()=>{e.length=10;for(let d=0;d<10;d++)e[d]=i()};return a(),{colors:e,addColor:r,removeColor:s,resetColors:a,生成多点比色:()=>{const d=`"${e.filter(h=>h.选中).map(h=>`${h.x}|${h.y}|${h.颜色}`).join(",")}"`;navigator.clipboard.writeText(d).then(()=>{console.log("复制成功, 复制内容: ",d)},()=>{console.log("复制失败")})}}}),bc=C0("image",()=>{const t=new Image;let e;t.addEventListener("load",()=>{const d=document.createElement("canvas");d.width=t.width,d.height=t.height;const h=d.getContext("2d");h&&(h.drawImage(t,0,0),e=h.getImageData(0,0,t.width,t.height))});const i=bn("http://192.168.0.193:52613/snapshot"),n=(d,h,c)=>{if(c=c||e,!c||d<0||d>=c.width||h<0||h>=c.height)return"000000";const g=(h*c.width+d)*4,f=c.data[g].toString(16).toLocaleUpperCase().padStart(2,"0"),u=c.data[g+1].toString(16).toLocaleUpperCase().padStart(2,"0"),_=c.data[g+2].toString(16).toLocaleUpperCase().padStart(2,"0");return`${f}${u}${_}`},o=()=>{fetch(i.value).then(d=>{if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);d.arrayBuffer().then(h=>{t.src=URL.createObjectURL(new Blob([h])),console.log(h);const c=Uo.decode(h),g=new Uint8ClampedArray(Uo.toRGBA8(c)[0]);e=new ImageData(g,c.width,c.height)})}).catch(d=>{console.error("请求图片失败:",d)})};o();const r=qn({x1:0,y1:0,x2:0,y2:0}),s=zt(()=>`${r.x1},${r.y1},${r.x2},${r.y2}`),a=zt(()=>`${r.x2-r.x1+1} x ${r.y2-r.y1+1}`);return{image:t,snapshotURL:i,updateImage:o,getColor:n,range:r,rangeString:s,rangeSize:a,setRangePoint:(d,h,c)=>{const g=(c==null?void 0:c.width)||t.width,f=(c==null?void 0:c.height)||t.height;r.x1=Math.max(0,Math.floor(Math.min(d.x,h.x))),r.y1=Math.max(0,Math.floor(Math.min(d.y,h.y))),r.x2=Math.min(g-1,Math.floor(Math.max(d.x,h.x))),r.y2=Math.min(f-1,Math.floor(Math.max(d.y,h.y)));const u=s.value;navigator.clipboard.writeText(u).then(()=>{console.log("复制成功, 复制内容: ",u)},()=>{console.log("复制失败")})}}}),w2=yn({__name:"ColorPicker",props:{src:{}},setup(t){const e=t,i=mc(),n=bc(),o=window.getComputedStyle(document.documentElement),r=(p,v,b)=>p<=v?v:p>=b?b:p,s=p=>{var z;const{currentTarget:v,evt:b}=p;b.preventDefault();const S=(z=v.getLayer())==null?void 0:z.getRelativePointerPosition();if(!S)return;const T=v.scaleX(),E=r(T*(b.deltaY>0?.8:1.2),.2,20),A=v.position(),M=(S.x-A.x)/T,C=(S.y-A.y)/T,P={x:S.x-M*E,y:S.y-C*E};v.scale({x:E,y:E}),v.position(P)},a=p=>{const v=p.getStage();if(!v)return;const{width:b,height:S}=v.size(),{width:T,height:E}=p.size(),A=Math.min(b/T,S/E);p.scale({x:A,y:A}),p.position({x:(b-T*A)/2,y:(S-E*A)/2})},l=p=>{const{currentTarget:v,evt:b}=p;if(b.shiftKey||b.button!==0)return;const S=v.getStage();if(!S)return;const T=S.getPointerPosition();if(!T)return;const E=v.position(),A=T.x-E.x,M=T.y-E.y,C=S.findOne("#zoomLayer"),P=y=>{C==null||C.visible(!1),S.setPointersPositions(y);const k=S.getPointerPosition();k.x-=A,k.y-=M,v.position(k)},z=()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",z)};window.addEventListener("mousemove",P),window.addEventListener("mouseup",z)},d=p=>{const{currentTarget:v,evt:b}=p;if(!b.shiftKey||b.button!==0)return;const S=v.getStage();if(!S)return;const T=v.getLayer();if(!T)return;const E=T.getRelativePointerPosition();if(!E)return;const A=new Zn.Rect({x:E.x,y:E.y,stroke:o.getPropertyValue("--vscode-focusBorder"),strokeWidth:2,draggable:!0,listening:!1});T.add(A);const M=P=>{S.setPointersPositions(P);const z=T.getRelativePointerPosition();z&&(A.width(z.x-E.x),A.height(z.y-E.y))},C=()=>{const P=T.getRelativePointerPosition(),z=v.getAbsoluteTransform().copy().invert().point(E),y=v.getAbsoluteTransform().copy().invert().point(P);n.setRangePoint(z,y),A.destroy(),window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",C)};window.addEventListener("mousemove",M),window.addEventListener("mouseup",C)},h=new Image;hn(()=>e.src,p=>{h.src=p},{immediate:!0}),Dn(h,"load",()=>{a(f)});let c;Dn(h,"load",()=>{const p=document.createElement("canvas");p.width=h.width,p.height=h.height;const v=p.getContext("2d");v&&(v.drawImage(h,0,0),c=v.getImageData(0,0,h.width,h.height))});const g=new Zn.Layer({}),f=new Zn.Image({id:"image",image:h});g.add(f),f.on("scaleChange",p=>{var b;const{currentTarget:v}=p;(b=v.getLayer())==null||b.imageSmoothingEnabled(v.scaleX()<3)});const u=new Zn.Layer({id:"zoomLayer",visible:!1,listening:!1,imageSmoothingEnabled:!1}),_=new Zn.Shape({image:h,showX:0,showY:0,showWH:15,zoomScale:16,id:"zoomImage",sceneFunc:(p,v)=>{const{image:b,showX:S,showY:T,showWH:E,zoomScale:A}=v.attrs,M=S-(E-1)/2,C=T-(E-1)/2,P=E*A,z=30,y=o.getPropertyValue("--vscode-editor-background"),k=o.getPropertyValue("--vscode-editor-foreground"),R=o.getPropertyValue("--vscode-editor-font-family"),L=o.getPropertyValue("--vscode-editorWidget-border");p.fillStyle=y,p.fillRect(0,0,P,P+z),p.drawImage(b,M,C,E,E,0,0,P,P);const O=n.getColor(S,T,c);p.fillStyle="#"+O,p.fillRect(0,P,z,z),p.font="24px "+R,p.fillStyle=k,p.fillText(`${S}|${T}|${O}`,z+5,P+z-7,P-4),p.strokeStyle=L,p.lineWidth=2;const H=new Path2D;H.rect(0,0,P,P),H.rect(0,(E-1)/2*A,P,A),H.rect((E-1)/2*A,0,A,P),H.rect(0,P,P,z),p.stroke(H)}});u.add(_),f.on("wheel",s),f.on("mousedown",l),f.on("mousedown",d),f.on("mousemove",p=>{u.visible(!0);const{currentTarget:v}=p,b=v.getRelativePointerPosition();_.attrs.showX=Math.floor(b.x),_.attrs.showY=Math.floor(b.y);const S=v.getLayer().getRelativePointerPosition();S.x+=20,S.y+=20,_.position(S)}),f.on("mouseleave",()=>{u.visible(!1)});const w={ArrowLeft:[1,0],ArrowUp:[0,1],ArrowRight:[-1,0],ArrowDown:[0,-1]},m=bn(null);return y_(m,{onDrop(p){const v=p[0],b=new FileReader;b.onload=T=>{h.src=T.target.result},b.readAsDataURL(v);const S=new FileReader;S.onload=T=>{const E=Uo.decode(T.target.result),A=new Uint8ClampedArray(Uo.toRGBA8(E)[0]),M=new ImageData(A,E.width,E.height),C=(22*M.width+13)*4,P=M.data[C].toString(16).toLocaleUpperCase().padStart(2,"0"),z=M.data[C+1].toString(16).toLocaleUpperCase().padStart(2,"0"),y=M.data[C+2].toString(16).toLocaleUpperCase().padStart(2,"0"),k=M.data[C+3].toString(16).toLocaleUpperCase().padStart(2,"0");console.log(P,z,y,k)},S.readAsArrayBuffer(v)},dataTypes:["image/png"],multiple:!0,preventDefaultForUnhandled:!0}),cc(()=>{const p=m.value,v=new Zn.Stage({container:p});x_(p,S=>{v.size(S[0].contentRect)}),v.on("wheel",S=>{if(S.target!==S.currentTarget)return;const T=S.currentTarget.findOne("#image");if(!T)return;const E=T.position();S.evt.shiftKey?E.x-=S.evt.deltaY:E.y-=S.evt.deltaY,T.position(E)}),v.on("mousedown",S=>{const{currentTarget:T,evt:E}=S;if(E.button!==1)return;const A=T.findOne("#image");A&&(E.preventDefault(),a(A))}),v.add(g).add(u),p.addEventListener("keydown",S=>{var P;if(!(S.key in w))return;let[T,E]=w[S.key];S.shiftKey&&(T*=10,E*=10);const A=f.position(),M=f.scaleX();A.x+=T*M,A.y+=E*M,f.position(A);const C=f.getRelativePointerPosition();C&&(_.attrs.showX=Math.floor(C.x),_.attrs.showY=Math.floor(C.y),(P=_.getLayer())==null||P.batchDraw())});const b=S=>{const T=f.getRelativePointerPosition();if(!T||T.x<0||T.y<0||T.x>=f.width()||T.y>=f.height())return;const E=Math.floor(T.x),A=Math.floor(T.y),M=n.getColor(E,A,c);i.addColor(E,A,M,S)};p.addEventListener("keydown",S=>{switch(console.log(S.key,S.code),S.key){case"Enter":b();return;case"Backspace":i.removeColor();return}switch(S.code){case"KeyC":i.resetColors();return;case"KeyR":n.updateImage();return;case"KeyD":i.生成多点比色();return;case"Space":b();return;case"KeyS":console.log(v.toJSON());return}if(S.code.startsWith("Digit")){const T=Number(S.code[5]);b(T===0?9:T-1);return}})}),(p,v)=>(Nt(),ei("div",{ref_key:"container",ref:m,tabindex:"1",style:{outline:"none"}},null,512))}}),S2={style:{display:"flex"}},C2={class:"按钮数量"},k2={style:{display:"flex"}},E2=["value"],R2={slot:"content-after"},A2=yn({__name:"ColorTool",setup(t){const e=mc(),i=bc(),n=()=>{e.colors.forEach(r=>{r.选中&&(r.颜色=i.getColor(r.x,r.y))})},o=()=>{const r=e.colors.map(s=>`${s.x}|${s.y}|${s.颜色}`).join(",");navigator.clipboard.writeText(r).then(()=>{console.log("复制成功, 复制内容: ",r)},()=>{console.log("复制失败")})};return(r,s)=>(Nt(),ei("div",null,[Ie("div",S2,[Ig(Ie("vscode-textfield",{"onUpdate:modelValue":s[0]||(s[0]=a=>xt(i).snapshotURL=a)},s[4]||(s[4]=[Ie("vscode-badge",{slot:"content-before"},"截图URL",-1)]),512),[[i_,xt(i).snapshotURL]])]),Ie("div",C2,[Ie("vscode-button",{onClick:s[1]||(s[1]=(...a)=>xt(i).updateImage&&xt(i).updateImage(...a))},"设备截图"),Ie("vscode-button",{onClick:n},"刷新颜色"),Ie("vscode-button",{onClick:s[2]||(s[2]=(...a)=>xt(e).resetColors&&xt(e).resetColors(...a))},"清除颜色"),Ie("vscode-button",{onClick:s[3]||(s[3]=(...a)=>xt(e).生成多点比色&&xt(e).生成多点比色(...a))},"生成多点比色"),Ie("vscode-button",{onClick:o},"生成多点找色")]),Ie("div",k2,[Ie("vscode-textfield",{value:xt(i).rangeString,style:{width:"200px"}},[s[5]||(s[5]=Ie("vscode-badge",{slot:"content-before"},"范围",-1)),Ie("vscode-badge",R2,sr(xt(i).rangeSize),1)],8,E2)])]))}}),wn=(t,e)=>{const i=t.__vccOpts||t;for(const[n,o]of e)i[n]=o;return i},T2=wn(A2,[["__scopeId","data-v-6b3da444"]]),P2={style:{height:"100%"}},I2=["checked","onChange"],O2=yn({__name:"ColorList",setup(t){const e=mc();return(i,n)=>(Nt(),ei("vscode-scrollable",P2,[(Nt(!0),ei(Qt,null,qg(xt(e).colors,(o,r)=>(Nt(),ei("div",{class:"list-row",key:o.id},[Ie("lt-checkbox",{checked:o.选中,onChange:s=>o.选中=!o.选中},sr(r+1),41,I2),Ie("div",null,sr(`${o.x},${o.y}`),1),Ie("div",{class:"showColor",style:ea({backgroundColor:`#${o.颜色}`})},null,4),Ie("div",null,sr(o.颜色),1),Ie("div",null,sr(o.偏色),1)]))),128))]))}}),M2=wn(O2,[["__scopeId","data-v-9dcece9f"]]),L2={initialHandlePosition:"80%",style:{height:"100vh","box-sizing":"border-box"}},D2={initialHandlePosition:"30%",split:"horizontal",slot:"end"},F2=yn({__name:"App",setup(t){const e=bc(),i=bn(e.image.src);return Dn(e.image,"load",()=>{i.value=e.image.src}),(n,o)=>(Nt(),ei("vscode-split-layout",L2,[tt(w2,{src:i.value,style:{height:"100%"},slot:"start"},null,8,["src"]),Ie("vscode-split-layout",D2,[tt(T2,{slot:"start"}),tt(M2,{slot:"end"})])]))}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const rr=typeof document<"u";function N0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $2(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&N0(t.default)}const Ze=Object.assign;function Qa(t,e){const i={};for(const n in e){const o=e[n];i[n]=yi(o)?o.map(t):t(o)}return i}const Ms=()=>{},yi=Array.isArray,V0=/#/g,B2=/&/g,z2=/\//g,N2=/=/g,V2=/\?/g,H0=/\+/g,H2=/%5B/g,U2=/%5D/g,U0=/%5E/g,G2=/%60/g,G0=/%7B/g,j2=/%7C/g,j0=/%7D/g,q2=/%20/g;function yc(t){return encodeURI(""+t).replace(j2,"|").replace(H2,"[").replace(U2,"]")}function W2(t){return yc(t).replace(G0,"{").replace(j0,"}").replace(U0,"^")}function Il(t){return yc(t).replace(H0,"%2B").replace(q2,"+").replace(V0,"%23").replace(B2,"%26").replace(G2,"`").replace(G0,"{").replace(j0,"}").replace(U0,"^")}function K2(t){return Il(t).replace(N2,"%3D")}function Y2(t){return yc(t).replace(V0,"%23").replace(V2,"%3F")}function X2(t){return t==null?"":Y2(t).replace(z2,"%2F")}function qs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Z2=/\/$/,Q2=t=>t.replace(Z2,"");function Ja(t,e,i="/"){let n,o={},r="",s="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),o=t(r)),a>-1&&(n=n||e.slice(0,a),s=e.slice(a,e.length)),n=im(n??e,i),{fullPath:n+(r&&"?")+r+s,path:n,query:o,hash:qs(s)}}function J2(t,e){const i=e.query?t(e.query):"";return e.path+(i&&"?")+i+(e.hash||"")}function tu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function em(t,e,i){const n=e.matched.length-1,o=i.matched.length-1;return n>-1&&n===o&&yr(e.matched[n],i.matched[o])&&q0(e.params,i.params)&&t(e.query)===t(i.query)&&e.hash===i.hash}function yr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function q0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const i in t)if(!tm(t[i],e[i]))return!1;return!0}function tm(t,e){return yi(t)?iu(t,e):yi(e)?iu(e,t):t===e}function iu(t,e){return yi(e)?t.length===e.length&&t.every((i,n)=>i===e[n]):t.length===1&&t[0]===e}function im(t,e){if(t.startsWith("/"))return t;if(!t)return e;const i=e.split("/"),n=t.split("/"),o=n[n.length-1];(o===".."||o===".")&&n.push("");let r=i.length-1,s,a;for(s=0;s<n.length;s++)if(a=n[s],a!==".")if(a==="..")r>1&&r--;else break;return i.slice(0,r).join("/")+"/"+n.slice(s).join("/")}const tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ws;(function(t){t.pop="pop",t.push="push"})(Ws||(Ws={}));var Ls;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ls||(Ls={}));function nm(t){if(!t)if(rr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Q2(t)}const rm=/^[^#]+#/;function sm(t,e){return t.replace(rm,"#")+e}function om(t,e){const i=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{behavior:e.behavior,left:n.left-i.left-(e.left||0),top:n.top-i.top-(e.top||0)}}const ha=()=>({left:window.scrollX,top:window.scrollY});function am(t){let e;if("el"in t){const i=t.el,n=typeof i=="string"&&i.startsWith("#"),o=typeof i=="string"?n?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!o)return;e=om(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function nu(t,e){return(history.state?history.state.position-e:-1)+t}const Ol=new Map;function lm(t,e){Ol.set(t,e)}function cm(t){const e=Ol.get(t);return Ol.delete(t),e}let hm=()=>location.protocol+"//"+location.host;function W0(t,e){const{pathname:i,search:n,hash:o}=e,r=t.indexOf("#");if(r>-1){let a=o.includes(t.slice(r))?t.slice(r).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),tu(l,"")}return tu(i,t)+n+o}function dm(t,e,i,n){let o=[],r=[],s=null;const a=({state:g})=>{const f=W0(t,location),u=i.value,_=e.value;let w=0;if(g){if(i.value=f,e.value=g,s&&s===u){s=null;return}w=_?g.position-_.position:0}else n(f);o.forEach(m=>{m(i.value,u,{delta:w,type:Ws.pop,direction:w?w>0?Ls.forward:Ls.back:Ls.unknown})})};function l(){s=i.value}function d(g){o.push(g);const f=()=>{const u=o.indexOf(g);u>-1&&o.splice(u,1)};return r.push(f),f}function h(){const{history:g}=window;g.state&&g.replaceState(Ze({},g.state,{scroll:ha()}),"")}function c(){for(const g of r)g();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:d,destroy:c}}function ru(t,e,i,n=!1,o=!1){return{back:t,current:e,forward:i,replaced:n,position:window.history.length,scroll:o?ha():null}}function um(t){const{history:e,location:i}=window,n={value:W0(t,i)},o={value:e.state};o.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,d,h){const c=t.indexOf("#"),g=c>-1?(i.host&&document.querySelector("base")?t:t.slice(c))+l:hm()+t+l;try{e[h?"replaceState":"pushState"](d,"",g),o.value=d}catch(f){console.error(f),i[h?"replace":"assign"](g)}}function s(l,d){const h=Ze({},e.state,ru(o.value.back,l,o.value.forward,!0),d,{position:o.value.position});r(l,h,!0),n.value=l}function a(l,d){const h=Ze({},o.value,e.state,{forward:l,scroll:ha()});r(h.current,h,!0);const c=Ze({},ru(n.value,l,null),{position:h.position+1},d);r(l,c,!1),n.value=l}return{location:n,state:o,push:a,replace:s}}function fm(t){t=nm(t);const e=um(t),i=dm(t,e.state,e.location,e.replace);function n(r,s=!0){s||i.pauseListeners(),history.go(r)}const o=Ze({location:"",base:t,go:n,createHref:sm.bind(null,t)},e,i);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function pm(t){return typeof t=="string"||t&&typeof t=="object"}function K0(t){return typeof t=="string"||typeof t=="symbol"}const Y0=Symbol("");var su;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(su||(su={}));function xr(t,e){return Ze(new Error,{type:t,[Y0]:!0},e)}function Bi(t,e){return t instanceof Error&&Y0 in t&&(e==null||!!(t.type&e))}const ou="[^/]+?",gm={sensitive:!1,strict:!1,start:!0,end:!0},vm=/[.+*?^${}()[\]/\\]/g;function _m(t,e){const i=Ze({},gm,e),n=[];let o=i.start?"^":"";const r=[];for(const d of t){const h=d.length?[]:[90];i.strict&&!d.length&&(o+="/");for(let c=0;c<d.length;c++){const g=d[c];let f=40+(i.sensitive?.25:0);if(g.type===0)c||(o+="/"),o+=g.value.replace(vm,"\\$&"),f+=40;else if(g.type===1){const{value:u,repeatable:_,optional:w,regexp:m}=g;r.push({name:u,repeatable:_,optional:w});const p=m||ou;if(p!==ou){f+=10;try{new RegExp(`(${p})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${u}" (${p}): `+b.message)}}let v=_?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;c||(v=w&&d.length<2?`(?:/${v})`:"/"+v),w&&(v+="?"),o+=v,f+=20,w&&(f+=-8),_&&(f+=-20),p===".*"&&(f+=-50)}h.push(f)}n.push(h)}if(i.strict&&i.end){const d=n.length-1;n[d][n[d].length-1]+=.7000000000000001}i.strict||(o+="/?"),i.end?o+="$":i.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const s=new RegExp(o,i.sensitive?"":"i");function a(d){const h=d.match(s),c={};if(!h)return null;for(let g=1;g<h.length;g++){const f=h[g]||"",u=r[g-1];c[u.name]=f&&u.repeatable?f.split("/"):f}return c}function l(d){let h="",c=!1;for(const g of t){(!c||!h.endsWith("/"))&&(h+="/"),c=!1;for(const f of g)if(f.type===0)h+=f.value;else if(f.type===1){const{value:u,repeatable:_,optional:w}=f,m=u in d?d[u]:"";if(yi(m)&&!_)throw new Error(`Provided param "${u}" is an array but it is not repeatable (* or + modifiers)`);const p=yi(m)?m.join("/"):m;if(!p)if(w)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):c=!0);else throw new Error(`Missing required param "${u}"`);h+=p}}return h||"/"}return{re:s,score:n,keys:r,parse:a,stringify:l}}function mm(t,e){let i=0;for(;i<t.length&&i<e.length;){const n=e[i]-t[i];if(n)return n;i++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function X0(t,e){let i=0;const n=t.score,o=e.score;for(;i<n.length&&i<o.length;){const r=mm(n[i],o[i]);if(r)return r;i++}if(Math.abs(o.length-n.length)===1){if(au(n))return 1;if(au(o))return-1}return o.length-n.length}function au(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bm={type:0,value:""},ym=/[a-zA-Z0-9_]/;function xm(t){if(!t)return[[]];if(t==="/")return[[bm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${i})/"${d}": ${f}`)}let i=0,n=i;const o=[];let r;function s(){r&&o.push(r),r=[]}let a=0,l,d="",h="";function c(){d&&(i===0?r.push({type:0,value:d}):i===1||i===2||i===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:d,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),d="")}function g(){d+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&i!==2){n=i,i=4;continue}switch(i){case 0:l==="/"?(d&&c(),s()):l===":"?(c(),i=1):g();break;case 4:g(),i=n;break;case 1:l==="("?i=2:ym.test(l)?g():(c(),i=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:i=3:h+=l;break;case 3:c(),i=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return i===2&&e(`Unfinished custom RegExp for param "${d}"`),c(),s(),o}function wm(t,e,i){const n=_m(xm(t.path),i),o=Ze(n,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf==!e.record.aliasOf&&e.children.push(o),o}function Sm(t,e){const i=[],n=new Map;e=du({strict:!1,end:!0,sensitive:!1},e);function o(c){return n.get(c)}function r(c,g,f){const u=!f,_=cu(c);_.aliasOf=f&&f.record;const w=du(e,c),m=[_];if("alias"in c){const b=typeof c.alias=="string"?[c.alias]:c.alias;for(const S of b)m.push(cu(Ze({},_,{components:f?f.record.components:_.components,path:S,aliasOf:f?f.record:_})))}let p,v;for(const b of m){const{path:S}=b;if(g&&S[0]!=="/"){const T=g.record.path,E=T[T.length-1]==="/"?"":"/";b.path=g.record.path+(S&&E+S)}if(p=wm(b,g,w),f?f.alias.push(p):(v=v||p,v!==p&&v.alias.push(p),u&&c.name&&!hu(p)&&s(c.name)),Z0(p)&&l(p),_.children){const T=_.children;for(let E=0;E<T.length;E++)r(T[E],p,f&&f.children[E])}f=f||p}return v?()=>{s(v)}:Ms}function s(c){if(K0(c)){const g=n.get(c);g&&(n.delete(c),i.splice(i.indexOf(g),1),g.children.forEach(s),g.alias.forEach(s))}else{const g=i.indexOf(c);g>-1&&(i.splice(g,1),c.record.name&&n.delete(c.record.name),c.children.forEach(s),c.alias.forEach(s))}}function a(){return i}function l(c){const g=Em(c,i);i.splice(g,0,c),c.record.name&&!hu(c)&&n.set(c.record.name,c)}function d(c,g){let f,u={},_,w;if("name"in c&&c.name){if(f=n.get(c.name),!f)throw xr(1,{location:c});w=f.record.name,u=Ze(lu(g.params,f.keys.filter(v=>!v.optional).concat(f.parent?f.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),c.params&&lu(c.params,f.keys.map(v=>v.name))),_=f.stringify(u)}else if(c.path!=null)_=c.path,f=i.find(v=>v.re.test(_)),f&&(u=f.parse(_),w=f.record.name);else{if(f=g.name?n.get(g.name):i.find(v=>v.re.test(g.path)),!f)throw xr(1,{location:c,currentLocation:g});w=f.record.name,u=Ze({},g.params,c.params),_=f.stringify(u)}const m=[];let p=f;for(;p;)m.unshift(p.record),p=p.parent;return{name:w,path:_,params:u,matched:m,meta:km(m)}}t.forEach(c=>r(c));function h(){i.length=0,n.clear()}return{addRoute:r,resolve:d,removeRoute:s,clearRoutes:h,getRoutes:a,getRecordMatcher:o}}function lu(t,e){const i={};for(const n of e)n in t&&(i[n]=t[n]);return i}function cu(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Cm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Cm(t){const e={},i=t.props||!1;if("component"in t)e.default=i;else for(const n in t.components)e[n]=typeof i=="object"?i[n]:i;return e}function hu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function km(t){return t.reduce((e,i)=>Ze(e,i.meta),{})}function du(t,e){const i={};for(const n in t)i[n]=n in e?e[n]:t[n];return i}function Em(t,e){let i=0,n=e.length;for(;i!==n;){const r=i+n>>1;X0(t,e[r])<0?n=r:i=r+1}const o=Rm(t);return o&&(n=e.lastIndexOf(o,n-1)),n}function Rm(t){let e=t;for(;e=e.parent;)if(Z0(e)&&X0(t,e)===0)return e}function Z0({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Am(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<n.length;++o){const r=n[o].replace(H0," "),s=r.indexOf("="),a=qs(s<0?r:r.slice(0,s)),l=s<0?null:qs(r.slice(s+1));if(a in e){let d=e[a];yi(d)||(d=e[a]=[d]),d.push(l)}else e[a]=l}return e}function uu(t){let e="";for(let i in t){const n=t[i];if(i=K2(i),n==null){n!==void 0&&(e+=(e.length?"&":"")+i);continue}(yi(n)?n.map(r=>r&&Il(r)):[n&&Il(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+i,r!=null&&(e+="="+r))})}return e}function Tm(t){const e={};for(const i in t){const n=t[i];n!==void 0&&(e[i]=yi(n)?n.map(o=>o==null?null:""+o):n==null?n:""+n)}return e}const Pm=Symbol(""),fu=Symbol(""),xc=Symbol(""),Q0=Symbol(""),Ml=Symbol("");function xs(){let t=[];function e(n){return t.push(n),()=>{const o=t.indexOf(n);o>-1&&t.splice(o,1)}}function i(){t=[]}return{add:e,list:()=>t.slice(),reset:i}}function on(t,e,i,n,o,r=s=>s()){const s=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise((a,l)=>{const d=g=>{g===!1?l(xr(4,{from:i,to:e})):g instanceof Error?l(g):pm(g)?l(xr(2,{from:e,to:g})):(s&&n.enterCallbacks[o]===s&&typeof g=="function"&&s.push(g),a())},h=r(()=>t.call(n&&n.instances[o],e,i,d));let c=Promise.resolve(h);t.length<3&&(c=c.then(d)),c.catch(g=>l(g))})}function el(t,e,i,n,o=r=>r()){const r=[];for(const s of t)for(const a in s.components){let l=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(N0(l)){const h=(l.__vccOpts||l)[e];h&&r.push(on(h,i,n,s,a,o))}else{let d=l();r.push(()=>d.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);const c=$2(h)?h.default:h;s.mods[a]=h,s.components[a]=c;const f=(c.__vccOpts||c)[e];return f&&on(f,i,n,s,a,o)()}))}}return r}function pu(t){const e=Ai(xc),i=Ai(Q0),n=zt(()=>{const l=xt(t.to);return e.resolve(l)}),o=zt(()=>{const{matched:l}=n.value,{length:d}=l,h=l[d-1],c=i.matched;if(!h||!c.length)return-1;const g=c.findIndex(yr.bind(null,h));if(g>-1)return g;const f=gu(l[d-2]);return d>1&&gu(h)===f&&c[c.length-1].path!==f?c.findIndex(yr.bind(null,l[d-2])):g}),r=zt(()=>o.value>-1&&Dm(i.params,n.value.params)),s=zt(()=>o.value>-1&&o.value===i.matched.length-1&&q0(i.params,n.value.params));function a(l={}){if(Lm(l)){const d=e[xt(t.replace)?"replace":"push"](xt(t.to)).catch(Ms);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:n,href:zt(()=>n.value.href),isActive:r,isExactActive:s,navigate:a}}function Im(t){return t.length===1?t[0]:t}const Om=yn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pu,setup(t,{slots:e}){const i=qn(pu(t)),{options:n}=Ai(xc),o=zt(()=>({[vu(t.activeClass,n.linkActiveClass,"router-link-active")]:i.isActive,[vu(t.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const r=e.default&&Im(e.default(i));return t.custom?r:m0("a",{"aria-current":i.isExactActive?t.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:o.value},r)}}}),Mm=Om;function Lm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Dm(t,e){for(const i in e){const n=e[i],o=t[i];if(typeof n=="string"){if(n!==o)return!1}else if(!yi(o)||o.length!==n.length||n.some((r,s)=>r!==o[s]))return!1}return!0}function gu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vu=(t,e,i)=>t??e??i,Fm=yn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:i}){const n=Ai(Ml),o=zt(()=>t.route||n.value),r=Ai(fu,0),s=zt(()=>{let d=xt(r);const{matched:h}=o.value;let c;for(;(c=h[d])&&!c.components;)d++;return d}),a=zt(()=>o.value.matched[s.value]);wo(fu,zt(()=>s.value+1)),wo(Pm,a),wo(Ml,o);const l=bn();return hn(()=>[l.value,a.value,t.name],([d,h,c],[g,f,u])=>{h&&(h.instances[c]=d,f&&f!==h&&d&&d===g&&(h.leaveGuards.size||(h.leaveGuards=f.leaveGuards),h.updateGuards.size||(h.updateGuards=f.updateGuards))),d&&h&&(!f||!yr(h,f)||!g)&&(h.enterCallbacks[c]||[]).forEach(_=>_(d))},{flush:"post"}),()=>{const d=o.value,h=t.name,c=a.value,g=c&&c.components[h];if(!g)return _u(i.default,{Component:g,route:d});const f=c.props[h],u=f?f===!0?d.params:typeof f=="function"?f(d):f:null,w=m0(g,Ze({},u,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(c.instances[h]=null)},ref:l}));return _u(i.default,{Component:w,route:d})||w}}});function _u(t,e){if(!t)return null;const i=t(e);return i.length===1?i[0]:i}const $m=Fm;function Bm(t){const e=Sm(t.routes,t),i=t.parseQuery||Am,n=t.stringifyQuery||uu,o=t.history,r=xs(),s=xs(),a=xs(),l=$f(tn);let d=tn;rr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Qa.bind(null,D=>""+D),c=Qa.bind(null,X2),g=Qa.bind(null,qs);function f(D,V){let q,Z;return K0(D)?(q=e.getRecordMatcher(D),Z=V):Z=D,e.addRoute(Z,q)}function u(D){const V=e.getRecordMatcher(D);V&&e.removeRoute(V)}function _(){return e.getRoutes().map(D=>D.record)}function w(D){return!!e.getRecordMatcher(D)}function m(D,V){if(V=Ze({},V||l.value),typeof D=="string"){const G=Ja(i,D,V.path),Y=e.resolve({path:G.path},V),ie=o.createHref(G.fullPath);return Ze(G,Y,{params:g(Y.params),hash:qs(G.hash),redirectedFrom:void 0,href:ie})}let q;if(D.path!=null)q=Ze({},D,{path:Ja(i,D.path,V.path).path});else{const G=Ze({},D.params);for(const Y in G)G[Y]==null&&delete G[Y];q=Ze({},D,{params:c(G)}),V.params=c(V.params)}const Z=e.resolve(q,V),de=D.hash||"";Z.params=h(g(Z.params));const $=J2(n,Ze({},D,{hash:W2(de),path:Z.path})),N=o.createHref($);return Ze({fullPath:$,hash:de,query:n===uu?Tm(D.query):D.query||{}},Z,{redirectedFrom:void 0,href:N})}function p(D){return typeof D=="string"?Ja(i,D,l.value.path):Ze({},D)}function v(D,V){if(d!==D)return xr(8,{from:V,to:D})}function b(D){return E(D)}function S(D){return b(Ze(p(D),{replace:!0}))}function T(D){const V=D.matched[D.matched.length-1];if(V&&V.redirect){const{redirect:q}=V;let Z=typeof q=="function"?q(D):q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=p(Z):{path:Z},Z.params={}),Ze({query:D.query,hash:D.hash,params:Z.path!=null?{}:D.params},Z)}}function E(D,V){const q=d=m(D),Z=l.value,de=D.state,$=D.force,N=D.replace===!0,G=T(q);if(G)return E(Ze(p(G),{state:typeof G=="object"?Ze({},de,G.state):de,force:$,replace:N}),V||q);const Y=q;Y.redirectedFrom=V;let ie;return!$&&em(n,Z,q)&&(ie=xr(16,{to:Y,from:Z}),te(Z,Z,!0,!1)),(ie?Promise.resolve(ie):C(Y,Z)).catch(X=>Bi(X)?Bi(X,2)?X:se(X):H(X,Y,Z)).then(X=>{if(X){if(Bi(X,2))return E(Ze({replace:N},p(X.to),{state:typeof X.to=="object"?Ze({},de,X.to.state):de,force:$}),V||Y)}else X=z(Y,Z,!0,N,de);return P(Y,Z,X),X})}function A(D,V){const q=v(D,V);return q?Promise.reject(q):Promise.resolve()}function M(D){const V=ce.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(D):D()}function C(D,V){let q;const[Z,de,$]=zm(D,V);q=el(Z.reverse(),"beforeRouteLeave",D,V);for(const G of Z)G.leaveGuards.forEach(Y=>{q.push(on(Y,D,V))});const N=A.bind(null,D,V);return q.push(N),he(q).then(()=>{q=[];for(const G of r.list())q.push(on(G,D,V));return q.push(N),he(q)}).then(()=>{q=el(de,"beforeRouteUpdate",D,V);for(const G of de)G.updateGuards.forEach(Y=>{q.push(on(Y,D,V))});return q.push(N),he(q)}).then(()=>{q=[];for(const G of $)if(G.beforeEnter)if(yi(G.beforeEnter))for(const Y of G.beforeEnter)q.push(on(Y,D,V));else q.push(on(G.beforeEnter,D,V));return q.push(N),he(q)}).then(()=>(D.matched.forEach(G=>G.enterCallbacks={}),q=el($,"beforeRouteEnter",D,V,M),q.push(N),he(q))).then(()=>{q=[];for(const G of s.list())q.push(on(G,D,V));return q.push(N),he(q)}).catch(G=>Bi(G,8)?G:Promise.reject(G))}function P(D,V,q){a.list().forEach(Z=>M(()=>Z(D,V,q)))}function z(D,V,q,Z,de){const $=v(D,V);if($)return $;const N=V===tn,G=rr?history.state:{};q&&(Z||N?o.replace(D.fullPath,Ze({scroll:N&&G&&G.scroll},de)):o.push(D.fullPath,de)),l.value=D,te(D,V,q,N),se()}let y;function k(){y||(y=o.listen((D,V,q)=>{if(!_e.listening)return;const Z=m(D),de=T(Z);if(de){E(Ze(de,{replace:!0,force:!0}),Z).catch(Ms);return}d=Z;const $=l.value;rr&&lm(nu($.fullPath,q.delta),ha()),C(Z,$).catch(N=>Bi(N,12)?N:Bi(N,2)?(E(Ze(p(N.to),{force:!0}),Z).then(G=>{Bi(G,20)&&!q.delta&&q.type===Ws.pop&&o.go(-1,!1)}).catch(Ms),Promise.reject()):(q.delta&&o.go(-q.delta,!1),H(N,Z,$))).then(N=>{N=N||z(Z,$,!1),N&&(q.delta&&!Bi(N,8)?o.go(-q.delta,!1):q.type===Ws.pop&&Bi(N,20)&&o.go(-1,!1)),P(Z,$,N)}).catch(Ms)}))}let R=xs(),L=xs(),O;function H(D,V,q){se(D);const Z=L.list();return Z.length?Z.forEach(de=>de(D,V,q)):console.error(D),Promise.reject(D)}function W(){return O&&l.value!==tn?Promise.resolve():new Promise((D,V)=>{R.add([D,V])})}function se(D){return O||(O=!D,k(),R.list().forEach(([V,q])=>D?q(D):V()),R.reset()),D}function te(D,V,q,Z){const{scrollBehavior:de}=t;if(!rr||!de)return Promise.resolve();const $=!q&&cm(nu(D.fullPath,0))||(Z||!q)&&history.state&&history.state.scroll||null;return oc().then(()=>de(D,V,$)).then(N=>N&&am(N)).catch(N=>H(N,D,V))}const oe=D=>o.go(D);let Q;const ce=new Set,_e={currentRoute:l,listening:!0,addRoute:f,removeRoute:u,clearRoutes:e.clearRoutes,hasRoute:w,getRoutes:_,resolve:m,options:t,push:b,replace:S,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:r.add,beforeResolve:s.add,afterEach:a.add,onError:L.add,isReady:W,install(D){const V=this;D.component("RouterLink",Mm),D.component("RouterView",$m),D.config.globalProperties.$router=V,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>xt(l)}),rr&&!Q&&l.value===tn&&(Q=!0,b(o.location).catch(de=>{}));const q={};for(const de in tn)Object.defineProperty(q,de,{get:()=>l.value[de],enumerable:!0});D.provide(xc,V),D.provide(Q0,Df(q)),D.provide(Ml,l);const Z=D.unmount;ce.add(D),D.unmount=function(){ce.delete(D),ce.size<1&&(d=tn,y&&y(),y=null,l.value=tn,Q=!1,O=!1),Z()}}};function he(D){return D.reduce((V,q)=>V.then(()=>M(q)),Promise.resolve())}return _e}function zm(t,e){const i=[],n=[],o=[],r=Math.max(e.matched.length,t.matched.length);for(let s=0;s<r;s++){const a=e.matched[s];a&&(t.matched.find(d=>yr(d,a))?n.push(a):i.push(a));const l=t.matched[s];l&&(e.matched.find(d=>yr(d,l))||o.push(l))}return[i,n,o]}const Nm={},Vm={class:"item"},Hm={class:"details"};function Um(t,e){return Nt(),ei("div",Vm,[Ie("i",null,[Ca(t.$slots,"icon",{},void 0)]),Ie("div",Hm,[Ie("h3",null,[Ca(t.$slots,"heading",{},void 0)]),Ca(t.$slots,"default",{},void 0)])])}const ws=wn(Nm,[["render",Um],["__scopeId","data-v-fd0742eb"]]),Gm={},jm={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"};function qm(t,e){return Nt(),ei("svg",jm,e[0]||(e[0]=[Ie("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1)]))}const Wm=wn(Gm,[["render",qm]]),Km={},Ym={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"};function Xm(t,e){return Nt(),ei("svg",Ym,e[0]||(e[0]=[Ie("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1)]))}const Zm=wn(Km,[["render",Xm]]),Qm={},Jm={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"};function eb(t,e){return Nt(),ei("svg",Jm,e[0]||(e[0]=[Ie("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1)]))}const tb=wn(Qm,[["render",eb]]),ib={},nb={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"};function rb(t,e){return Nt(),ei("svg",nb,e[0]||(e[0]=[Ie("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1)]))}const sb=wn(ib,[["render",rb]]),ob={},ab={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"};function lb(t,e){return Nt(),ei("svg",ab,e[0]||(e[0]=[Ie("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1)]))}const cb=wn(ob,[["render",lb]]),hb=yn({__name:"TheWelcome",setup(t){const e=()=>fetch("/__open-in-editor?file=README.md");return(i,n)=>(Nt(),ei(Qt,null,[tt(ws,null,{icon:Ft(()=>[tt(Wm)]),heading:Ft(()=>n[0]||(n[0]=[Xe("Documentation")])),default:Ft(()=>[n[1]||(n[1]=Xe(" Vue’s ")),n[2]||(n[2]=Ie("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1)),n[3]||(n[3]=Xe(" provides you with all information you need to get started. "))]),_:1}),tt(ws,null,{icon:Ft(()=>[tt(Zm)]),heading:Ft(()=>n[4]||(n[4]=[Xe("Tooling")])),default:Ft(()=>[n[6]||(n[6]=Xe(" This project is served and bundled with ")),n[7]||(n[7]=Ie("a",{href:"https://vite.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1)),n[8]||(n[8]=Xe(". The recommended IDE setup is ")),n[9]||(n[9]=Ie("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1)),n[10]||(n[10]=Xe(" + ")),n[11]||(n[11]=Ie("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1)),n[12]||(n[12]=Xe(". If you need to test your components and web pages, check out ")),n[13]||(n[13]=Ie("a",{href:"https://vitest.dev/",target:"_blank",rel:"noopener"},"Vite",-1)),n[14]||(n[14]=Xe(" and ")),n[15]||(n[15]=Ie("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1)),n[16]||(n[16]=Xe(" / ")),n[17]||(n[17]=Ie("a",{href:"https://playwright.dev/",target:"_blank",rel:"noopener"},"Playwright",-1)),n[18]||(n[18]=Xe(". ")),n[19]||(n[19]=Ie("br",null,null,-1)),n[20]||(n[20]=Xe(" More instructions are available in ")),Ie("a",{href:"javascript:void(0)",onClick:e},n[5]||(n[5]=[Ie("code",null,"README.md",-1)])),n[21]||(n[21]=Xe(". "))]),_:1}),tt(ws,null,{icon:Ft(()=>[tt(tb)]),heading:Ft(()=>n[22]||(n[22]=[Xe("Ecosystem")])),default:Ft(()=>[n[23]||(n[23]=Xe(" Get official tools and libraries for your project: ")),n[24]||(n[24]=Ie("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1)),n[25]||(n[25]=Xe(", ")),n[26]||(n[26]=Ie("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1)),n[27]||(n[27]=Xe(", ")),n[28]||(n[28]=Ie("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1)),n[29]||(n[29]=Xe(", and ")),n[30]||(n[30]=Ie("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1)),n[31]||(n[31]=Xe(". If you need more resources, we suggest paying ")),n[32]||(n[32]=Ie("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1)),n[33]||(n[33]=Xe(" a visit. "))]),_:1}),tt(ws,null,{icon:Ft(()=>[tt(sb)]),heading:Ft(()=>n[34]||(n[34]=[Xe("Community")])),default:Ft(()=>[n[35]||(n[35]=Xe(" Got stuck? Ask your question on ")),n[36]||(n[36]=Ie("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1)),n[37]||(n[37]=Xe(" (our official Discord server), or ")),n[38]||(n[38]=Ie("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1)),n[39]||(n[39]=Xe(". You should also follow the official ")),n[40]||(n[40]=Ie("a",{href:"https://bsky.app/profile/vuejs.org",target:"_blank",rel:"noopener"},"@vuejs.org",-1)),n[41]||(n[41]=Xe(" Bluesky account or the ")),n[42]||(n[42]=Ie("a",{href:"https://x.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1)),n[43]||(n[43]=Xe(" X account for latest news in the Vue world. "))]),_:1}),tt(ws,null,{icon:Ft(()=>[tt(cb)]),heading:Ft(()=>n[44]||(n[44]=[Xe("Support Vue")])),default:Ft(()=>[n[45]||(n[45]=Xe(" As an independent project, Vue relies on community backing for its sustainability. You can help us by ")),n[46]||(n[46]=Ie("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1)),n[47]||(n[47]=Xe(". "))]),_:1})],64))}}),db=yn({__name:"HomeView",setup(t){return(e,i)=>(Nt(),ei("main",null,[tt(hb)]))}}),ub=Bm({history:fm("/"),routes:[{path:"/",name:"home",component:db},{path:"/about",name:"about",component:()=>ci(()=>import("./AboutView-BsJiAZ6A.js"),__vite__mapDeps([0,1]))}]}),wc=s_(F2);wc.use(c_());wc.use(ub);wc.mount("#app");export{wn as _,Ie as a,ei as c,Nt as o};
