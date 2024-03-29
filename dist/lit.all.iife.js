/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var lit=function(t){"use strict";const e=globalThis,s=e.trustedTypes,i=s?s.createPolicy("lit-html",{createHTML:t=>t}):void 0,n="$lit$",r=`lit$${(Math.random()+"").slice(9)}$`,o="?"+r,a=`<${o}>`,h=document,l=()=>h.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,p=t=>d(t)||"function"==typeof t?.[Symbol.iterator],u="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,_=/>/g,g=RegExp(`>|${u}(?:([^\\s"'>=/]+)(${u}*=${u}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),$=/'/g,y=/"/g,v=/^(?:script|style|textarea|title)$/i,A=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),b=A(1),w=A(2),E=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),C=new WeakMap,P=h.createTreeWalker(h,129);function x(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==i?i.createHTML(e):e}const N=(t,e)=>{const s=t.length-1,i=[];let o,h=2===e?"<svg>":"",l=f;for(let e=0;e<s;e++){const s=t[e];let c,d,p=-1,u=0;for(;u<s.length&&(l.lastIndex=u,d=l.exec(s),null!==d);)u=l.lastIndex,l===f?"!--"===d[1]?l=m:void 0!==d[1]?l=_:void 0!==d[2]?(v.test(d[2])&&(o=RegExp("</"+d[2],"g")),l=g):void 0!==d[3]&&(l=g):l===g?">"===d[0]?(l=o??f,p=-1):void 0===d[1]?p=-2:(p=l.lastIndex-d[2].length,c=d[1],l=void 0===d[3]?g:'"'===d[3]?y:$):l===y||l===$?l=g:l===m||l===_?l=f:(l=g,o=void 0);const A=l===g&&t[e+1].startsWith("/>")?" ":"";h+=l===f?s+a:p>=0?(i.push(c),s.slice(0,p)+n+s.slice(p)+r+A):s+r+(-2===p?e:A)}return[x(t,h+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class T{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let h=0,c=0;const d=t.length-1,p=this.parts,[u,f]=N(t,e);if(this.el=T.createElement(u,i),P.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=P.nextNode())&&p.length<d;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(n)){const e=f[c++],s=a.getAttribute(t).split(r),i=/([.?@])?(.*)/.exec(e);p.push({type:1,index:h,name:i[2],strings:s,ctor:"."===i[1]?L:"?"===i[1]?M:"@"===i[1]?R:H}),a.removeAttribute(t)}else t.startsWith(r)&&(p.push({type:6,index:h}),a.removeAttribute(t));if(v.test(a.tagName)){const t=a.textContent.split(r),e=t.length-1;if(e>0){a.textContent=s?s.emptyScript:"";for(let s=0;s<e;s++)a.append(t[s],l()),P.nextNode(),p.push({type:2,index:++h});a.append(t[e],l())}}}else if(8===a.nodeType)if(a.data===o)p.push({type:2,index:h});else{let t=-1;for(;-1!==(t=a.data.indexOf(r,t+1));)p.push({type:7,index:h}),t+=r.length-1}h++}}static createElement(t,e){const s=h.createElement("template");return s.innerHTML=t,s}}function O(t,e,s=t,i){if(e===E)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=c(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=O(t,n._$AS(t,e.values),n,i)),e}class U{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??h).importNode(e,!0);P.currentNode=i;let n=P.nextNode(),r=0,o=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new k(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new I(n,this,t)),this._$AV.push(e),a=s[++o]}r!==a?.index&&(n=P.nextNode(),r++)}return P.currentNode=h,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),c(t)?t===S||null==t||""===t?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):p(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==S&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(h.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=T.createElement(x(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new U(i,this),s=t.u(this.options);t.p(e),this.$(s),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new T(t)),e}T(t){d(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new k(this.k(l()),this.k(l()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=S}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=O(this,t,e,0),r=!c(t)||t!==this._$AH&&t!==E,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=O(this,i[s+o],e,o),a===E&&(a=this._$AH[o]),r||=!c(a)||a!==this._$AH[o],a===S?t=S:t!==S&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class L extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}class M extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}}class R extends H{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??S)===E)return;const s=this._$AH,i=t===S&&s!==S||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==S&&(s===S||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class I{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const j={S:n,A:r,P:o,C:1,M:N,L:U,R:p,V:O,D:k,I:H,H:M,N:R,U:L,B:I};(0,e.litHtmlPolyfillSupport)?.(T,k),(e.litHtmlVersions??=[]).push("3.0.0");const z=(t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new k(e.insertBefore(l(),t),t,void 0,s??{})}return n._$AI(t),n},D=globalThis,B=D.ShadowRoot&&(void 0===D.ShadyCSS||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),W=new WeakMap;class V{constructor(t,e,s){if(this._$cssResult$=!0,s!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(B&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=W.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&W.set(e,t))}return t}toString(){return this.cssText}}const q=t=>new V("string"==typeof t?t:t+"",void 0,F),K=(t,e)=>{if(B)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),i=D.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=s.cssText,t.appendChild(e)}},X=B?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return q(e)})(t):t,{is:Y,defineProperty:J,getOwnPropertyDescriptor:Z,getOwnPropertyNames:G,getOwnPropertySymbols:Q,getPrototypeOf:tt}=Object,et=globalThis,st=et.trustedTypes,it=st?st.emptyScript:"",nt=et.reactiveElementPolyfillSupport,rt=(t,e)=>t,ot={toAttribute(t,e){switch(e){case Boolean:t=t?it:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},at=(t,e)=>!Y(t,e),ht={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:at};Symbol.metadata??=Symbol("metadata"),et.litPropertyMetadata??=new WeakMap;class lt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ht){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&J(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=Z(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const r=i?.call(this);n.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ht}static _$Ei(){if(this.hasOwnProperty(rt("elementProperties")))return;const t=tt(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rt("properties"))){const t=this.properties,e=[...G(t),...Q(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(X(t))}else void 0!==t&&e.push(X(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return K(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:ot).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:ot;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??at)(i?n:this[t],e))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}lt.elementStyles=[],lt.shadowRootOptions={mode:"open"},lt[rt("elementProperties")]=new Map,lt[rt("finalized")]=new Map,nt?.({ReactiveElement:lt}),(et.reactiveElementVersions??=[]).push("2.0.0");class ct extends lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=z(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});(0,globalThis.litElementPolyfillSupport)?.({LitElement:ct});(globalThis.litElementVersions??=[]).push("4.0.0");const dt=(t,...e)=>({strTag:!0,strings:t,values:e}),pt=t=>"string"!=typeof t&&"strTag"in t,ut=(t,e,s)=>{let i=t[0];for(let n=1;n<t.length;n++)i+=e[s?s[n-1]:n-1],i+=t[n];return i},ft=t=>pt(t)?ut(t.strings,t.values):t,mt="lit-localize-status";class _t{constructor(t){this.__litLocalizeEventHandler=t=>{"ready"===t.detail.status&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(mt,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(mt,this.__litLocalizeEventHandler)}}const gt=t=>t.addController(new _t(t));class $t{constructor(){this.settled=!1,this.promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e}))}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}const yt=[];for(let t=0;t<256;t++)yt[t]=(t>>4&15).toString(16)+(15&t).toString(16);function vt(t,e){return(e?"h":"s")+function(t){let e=0,s=8997,i=0,n=33826,r=0,o=40164,a=0,h=52210;for(let l=0;l<t.length;l++)s^=t.charCodeAt(l),e=435*s,i=435*n,r=435*o,a=435*h,r+=s<<8,a+=n<<8,i+=e>>>16,s=65535&e,r+=i>>>16,n=65535&i,h=a+(r>>>16)&65535,o=65535&r;return yt[h>>8]+yt[255&h]+yt[o>>8]+yt[255&o]+yt[n>>8]+yt[255&n]+yt[s>>8]+yt[255&s]}("string"==typeof t?t:t.join(""))}const At=new WeakMap,bt=new Map;function wt(t,e,s){if(t){const i=t[s?.id??function(t){const e="string"==typeof t?t:t.strings;let s=bt.get(e);void 0===s&&(s=vt(e,"string"!=typeof t&&!("strTag"in t)),bt.set(e,s));return s}(e)];if(i){if("string"==typeof i)return i;if("strTag"in i)return ut(i.strings,e.values,i.values);{let t=At.get(i);return void 0===t&&(t=i.values,At.set(i,t)),{...i,values:t.map((t=>e.values[t]))}}}}return ft(e)}function Et(t){window.dispatchEvent(new CustomEvent(mt,{detail:t}))}let St,Ct,Pt,xt,Nt,Tt="",Ot=new $t;Ot.resolve();let Ut=0;const kt=()=>Tt,Ht=t=>{if(t===(St??Tt))return Ot.promise;if(!Pt||!xt)throw new Error("Internal error");if(!Pt.has(t))throw new Error("Invalid locale code");Ut++;const e=Ut;St=t,Ot.settled&&(Ot=new $t),Et({status:"loading",loadingLocale:t});return(t===Ct?Promise.resolve({templates:void 0}):xt(t)).then((s=>{Ut===e&&(Tt=t,St=void 0,Nt=s.templates,Et({status:"ready",readyLocale:t}),Ot.resolve())}),(s=>{Ut===e&&(Et({status:"error",errorLocale:t,errorMessage:s.toString()}),Ot.reject(s))})),Ot.promise};let Lt=ft,Mt=!1;function Rt(t){if(Mt)throw new Error("lit-localize can only be configured once");Lt=t,Mt=!0}var It=Object.freeze({__proto__:null,get msg(){return Lt},_installMsgImplementation:Rt,LOCALE_STATUS_EVENT:mt,str:dt,isStrTagged:pt,joinStringsAndValues:ut,updateWhenLocaleChanges:gt,localized:()=>(t,e)=>(t.addInitializer(gt),t),configureLocalization:t=>(Rt(((t,e)=>wt(Nt,t,e))),Tt=Ct=t.sourceLocale,Pt=new Set(t.targetLocales),Pt.add(t.sourceLocale),xt=t.loadLocale,{getLocale:kt,setLocale:Ht}),configureTransformLocalization:t=>{Rt(ft);const e=t.sourceLocale;return{getLocale:()=>e}}});const jt=1,zt=2,Dt=3,Bt=5,Ft=6,Wt=t=>(...e)=>({_$litDirective$:t,values:e});const Vt=t=>void 0===t.strings,qt=(t,e)=>{const s=t._$AN;if(void 0===s)return!1;for(const t of s)t._$AO?.(e,!1),qt(t,e);return!0},Kt=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===s?.size)},Xt=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Zt(e)}};function Yt(t){void 0!==this._$AN?(Kt(this),this._$AM=t,Xt(this)):this._$AM=t}function Jt(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)qt(i[t],!1),Kt(i[t]);else null!=i&&(qt(i,!1),Kt(i));else qt(this,t)}const Zt=t=>{t.type==zt&&(t._$AP??=Jt,t._$AQ??=Yt)};class Gt extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Xt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(qt(this,t),Kt(this))}setValue(t){if(Vt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const Qt=new WeakMap;let te=0;const ee=new Map,se=new WeakSet,ie=()=>new Promise((t=>requestAnimationFrame(t))),ne=[{opacity:0}],re=ne,oe=(t,e)=>{const s=t-e;return 0===s?void 0:s},ae=(t,e)=>{const s=t/e;return 1===s?void 0:s},he={left:(t,e)=>{const s=oe(t,e);return{value:s,transform:null==s||isNaN(s)?void 0:`translateX(${s}px)`}},top:(t,e)=>{const s=oe(t,e);return{value:s,transform:null==s||isNaN(s)?void 0:`translateY(${s}px)`}},width:(t,e)=>{let s;0===e&&(e=1,s={width:"1px"});const i=ae(t,e);return{value:i,overrideFrom:s,transform:null==i||isNaN(i)?void 0:`scaleX(${i})`}},height:(t,e)=>{let s;0===e&&(e=1,s={height:"1px"});const i=ae(t,e);return{value:i,overrideFrom:s,transform:null==i||isNaN(i)?void 0:`scaleY(${i})`}}},le={duration:333,easing:"ease-in-out"},ce=["left","top","width","height","opacity","color","background"],de=new WeakMap;class pe extends Gt{constructor(t){if(super(t),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,t.type===zt)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){this.resolveFinished?.(),this.finished=new Promise((t=>{this.h=t}))}async resolveFinished(){this.h?.(),this.h=void 0}render(t){return S}getController(){return Qt.get(this.l)}isDisabled(){return this.options.disabled||this.getController()?.disabled}update(t,[e]){const s=void 0===this.l;return s&&(this.l=t.options?.host,this.l.addController(this),this.element=t.element,de.set(this.element,this)),this.optionsOrCallback=e,(s||"function"!=typeof e)&&this.u(e),this.render(e)}u(t){t=t??{};const e=this.getController();void 0!==e&&((t={...e.defaultOptions,...t}).keyframeOptions={...e.defaultOptions.keyframeOptions,...t.keyframeOptions}),t.properties??=ce,this.options=t}p(){const t={},e=this.element.getBoundingClientRect(),s=getComputedStyle(this.element);return this.options.properties.forEach((i=>{const n=e[i]??(he[i]?void 0:s[i]),r=Number(n);t[i]=isNaN(r)?n+"":r})),t}m(){let t,e=!0;return this.options.guard&&(t=this.options.guard(),e=((t,e)=>{if(Array.isArray(t)){if(Array.isArray(e)&&e.length===t.length&&t.every(((t,s)=>t===e[s])))return!1}else if(e===t)return!1;return!0})(t,this.v)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&e&&this.element.isConnected,this.o&&(this.v=Array.isArray(t)?Array.from(t):t),this.o}hostUpdate(){"function"==typeof this.optionsOrCallback&&this.u(this.optionsOrCallback()),this.m()&&(this.g=this.p(),this.t=this.t??this.element.parentNode,this.i=this.element.nextSibling)}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await ie;const e=this._(),s=this.A(this.options.keyframeOptions,e),i=this.p();if(void 0!==this.g){const{from:s,to:n}=this.O(this.g,i,e);this.log("measured",[this.g,i,s,n]),t=this.calculateKeyframes(s,n)}else{const s=ee.get(this.options.inId);if(s){ee.delete(this.options.inId);const{from:n,to:r}=this.O(s,i,e);t=this.calculateKeyframes(n,r),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,te++,t.forEach((t=>t.zIndex=te))}else this.options.in&&(t=[...this.options.in,{}])}this.animate(t,s)}resetStyles(){void 0!==this.j&&(this.element.setAttribute("style",this.j??""),this.j=void 0)}commitStyles(){this.j=this.element.getAttribute("style"),this.webAnimation?.commitStyles(),this.webAnimation?.cancel()}reconnected(){}async disconnected(){if(!this.o)return;if(void 0!==this.options.id&&ee.set(this.options.id,this.g),void 0===this.options.out)return;if(this.prepare(),await ie(),this.t?.isConnected){const t=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,t),this.options.stabilizeOut){const t=this.p();this.log("stabilizing out");const e=this.g.left-t.left,s=this.g.top-t.top;!("static"===getComputedStyle(this.element).position)||0===e&&0===s||(this.element.style.position="relative"),0!==e&&(this.element.style.left=e+"px"),0!==s&&(this.element.style.top=s+"px")}}const t=this.A(this.options.keyframeOptions);await this.animate(this.options.out,t),this.element.remove()}prepare(){this.createFinished()}start(){this.options.onStart?.(this)}didFinish(t){t&&this.options.onComplete?.(this),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}_(){const t=[];for(let e=this.element.parentNode;e;e=e?.parentNode){const s=de.get(e);s&&!s.isDisabled()&&s&&t.push(s)}return t}get isHostRendered(){const t=se.has(this.l);return t||this.l.updateComplete.then((()=>{se.add(this.l)})),t}A(t,e=this._()){const s={...le};return e.forEach((t=>Object.assign(s,t.options.keyframeOptions))),Object.assign(s,t),s}O(t,e,s){t={...t},e={...e};const i=s.map((t=>t.animatingProperties)).filter((t=>void 0!==t));let n=1,r=1;return void 0!==i&&(i.forEach((t=>{t.width&&(n/=t.width),t.height&&(r/=t.height)})),void 0!==t.left&&void 0!==e.left&&(t.left=n*t.left,e.left=n*e.left),void 0!==t.top&&void 0!==e.top&&(t.top=r*t.top,e.top=r*e.top)),{from:t,to:e}}calculateKeyframes(t,e,s=!1){const i={},n={};let r=!1;const o={};for(const s in e){const a=t[s],h=e[s];if(s in he){const t=he[s];if(void 0===a||void 0===h)continue;const e=t(a,h);void 0!==e.transform&&(o[s]=e.value,r=!0,i.transform=`${i.transform??""} ${e.transform}`,void 0!==e.overrideFrom&&Object.assign(i,e.overrideFrom))}else a!==h&&void 0!==a&&void 0!==h&&(r=!0,i[s]=a,n[s]=h)}return i.transformOrigin=n.transformOrigin=s?"center center":"top left",this.animatingProperties=o,r?[i,n]:void 0}async animate(t,e=this.options.keyframeOptions){this.start(),this.frames=t;let s=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),void 0!==t)){this.log("animate",[t,e]),s=!0,this.webAnimation=this.element.animate(t,e);const i=this.getController();i?.add(this);try{await this.webAnimation.finished}catch(t){}i?.remove(this)}return this.didFinish(s),s}isAnimating(){return"running"===this.webAnimation?.playState||this.webAnimation?.pending}log(t,e){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,e)}}const ue=Wt(pe),fe=["top","right","bottom","left"];class me extends Gt{constructor(t){if(super(t),t.type!==Ft)throw Error("The `position` directive must be used in attribute position.")}render(t,e){return S}update(t,[e,s]){return void 0===this.l&&(this.l=t.options?.host,this.l.addController(this)),this.N=t.element,this.P=e,this.S=s??["left","top","width","height"],this.render(e,s)}hostUpdated(){this.C()}C(){const t="function"==typeof this.P?this.P():this.P?.value,e=t.offsetParent;if(void 0===t||!e)return;const s=t.getBoundingClientRect(),i=e.getBoundingClientRect();this.S?.forEach((t=>{const e=fe.includes(t)?s[t]-i[t]:s[t];this.N.style[t]=e+"px"}))}}const _e=Wt(me);var ge=Object.freeze({__proto__:null,Animate:pe,animate:ue,animationFrame:ie,defaultCssProperties:ce,defaultKeyframeOptions:le,fade:re,fadeIn:[{opacity:0},{opacity:1}],fadeInSlow:[{opacity:0},{opacity:.25,offset:.75},{opacity:1}],fadeOut:ne,flyAbove:[{transform:"translateY(-100%) scale(0)",opacity:0}],flyBelow:[{transform:"translateY(100%) scale(0)",opacity:0}],flyLeft:[{transform:"translateX(-100%) scale(0)",opacity:0}],flyRight:[{transform:"translateX(100%) scale(0)",opacity:0}],none:[{}],transformProps:he,AnimateController:class{constructor(t,e){this.startPaused=!1,this.disabled=!1,this.clients=new Set,this.pendingComplete=!1,this.host=t,this.defaultOptions=e.defaultOptions||{},this.startPaused=!!e.startPaused,this.disabled=!!e.disabled,this.onComplete=e.onComplete,Qt.set(this.host,this)}async add(t){this.clients.add(t),this.startPaused&&t.webAnimation?.pause(),this.pendingComplete=!0,await t.finished,this.pendingComplete&&!this.isAnimating&&(this.pendingComplete=!1,this.onComplete?.())}remove(t){this.clients.delete(t)}pause(){this.clients.forEach((t=>t.webAnimation?.pause()))}play(){this.clients.forEach((t=>t.webAnimation?.play()))}cancel(){this.clients.forEach((t=>t.webAnimation?.cancel())),this.clients.clear()}finish(){this.clients.forEach((t=>t.webAnimation?.finish())),this.clients.clear()}togglePlay(){this.isPlaying?this.pause():this.play()}get isAnimating(){return this.clients.size>0}get isPlaying(){return Array.from(this.clients).some((t=>"running"===t.webAnimation?.playState))}async finished(){await Promise.all(Array.from(this.clients).map((t=>t.finished)))}},controllerMap:Qt,Position:me,position:_e});const $e=new Set(["children","localName","ref","style","className"]),ye=new WeakMap,ve=(t,e,s,i,n)=>{const r=n?.[e];void 0===r||s===i?(t[e]=s,null==s&&e in HTMLElement.prototype&&t.removeAttribute(e)):((t,e,s)=>{let i=ye.get(t);void 0===i&&ye.set(t,i=new Map);let n=i.get(e);void 0!==s?void 0===n?(i.set(e,n={handleEvent:s}),t.addEventListener(e,n)):n.handleEvent=s:void 0!==n&&(i.delete(e),t.removeEventListener(e,n))})(t,r,s)};var Ae=Object.freeze({__proto__:null,createComponent:({react:t,tagName:e,elementClass:s,events:i,displayName:n})=>{const r=new Set(Object.keys(i??{})),o=t.forwardRef(((n,o)=>{const a=t.useRef(null),h=t.useRef(null),l={},c={};for(const[t,e]of Object.entries(n))$e.has(t)?l["className"===t?"class":t]=e:r.has(t)||t in s.prototype?c[t]=e:l[t]=e;return t.useLayoutEffect((()=>{if(null!==h.current){for(const t in c)ve(h.current,t,n[t],a.current?a.current[t]:void 0,i);a.current=n}})),t.useLayoutEffect((()=>{h.current?.removeAttribute("defer-hydration")}),[]),l.suppressHydrationWarning=!0,t.createElement(e,{...l,ref:t=>{h.current=t,"function"==typeof o?o(t):null!==o&&(o.current=t)}})}));return o.displayName=n??s.name,o}});const be={boundAttributeSuffix:j.S,marker:j.A,markerMatch:j.P,HTML_RESULT:j.C,getTemplateHtml:j.M,overrideDirectiveResolve:(t,e)=>class extends t{_$AS(t,s){return e(this,s)}},setDirectiveClass(t,e){t._$litDirective$=e},getAttributePartCommittedValue:(t,e,s)=>{let i=E;return t.j=t=>i=t,t._$AI(e,t,s),i},connectedDisconnectable:t=>({...t,_$AU:!0}),resolveDirective:j.V,AttributePart:j.I,PropertyPart:j.U,BooleanAttributePart:j.H,EventPart:j.N,ElementPart:j.B,TemplateInstance:j.L,isIterable:j.R,ChildPart:j.D},{TemplateInstance:we,isIterable:Ee,resolveDirective:Se,ChildPart:Ce,ElementPart:Pe}=be,xe=(t,e,s,i)=>{let n,r;if(0===s.length)r=new Ce(e,null,void 0,i),n=t;else{const t=s[s.length-1];if("template-instance"===t.type)r=new Ce(e,null,t.instance,i),t.instance._$AV.push(r),n=t.result.values[t.instancePartIndex++],t.templatePartIndex++;else if("iterable"===t.type){r=new Ce(e,null,t.part,i);const s=t.iterator.next();if(s.done)throw n=void 0,t.done=!0,Error("Unhandled shorter than expected iterable");n=s.value,t.part._$AH.push(r)}else r=new Ce(e,null,t.part,i)}if(n=Se(r,n),n===E)s.push({part:r,type:"leaf"});else if((t=>null===t||"object"!=typeof t&&"function"!=typeof t)(n))s.push({part:r,type:"leaf"}),r._$AH=n;else if(((t,e)=>void 0===e?void 0!==t?._$litType$:t?._$litType$===e)(n)){if((t=>null!=t?._$litType$?.h)(n))throw Error("compiled templates are not supported");const t="lit-part "+Oe(n);if(e.data!==t)throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part");{const t=Ce.prototype._$AC(n),e=new we(t,r);s.push({type:"template-instance",instance:e,part:r,templatePartIndex:0,instancePartIndex:0,result:n}),r._$AH=e}}else Ee(n)?(s.push({part:r,type:"iterable",value:n,iterator:n[Symbol.iterator](),done:!1}),r._$AH=[]):(s.push({part:r,type:"leaf"}),r._$AH=n??"");return r},Ne=(t,e,s)=>{if(void 0===e)throw Error("unbalanced part marker");e._$AB=t;const i=s.pop();if("iterable"===i.type&&!i.iterator.next().done)throw Error("unexpected longer than expected iterable");if(s.length>0)return s[s.length-1].part},Te=(t,e,s)=>{const i=/lit-node (\d+)/.exec(t.data),n=parseInt(i[1]),r=t.nextElementSibling;if(null===r)throw Error("could not find node for attribute parts");r.removeAttribute("defer-hydration");const o=e[e.length-1];if("template-instance"!==o.type)throw Error("internal error");{const t=o.instance;for(;;){const e=t._$AD.parts[o.templatePartIndex];if(void 0===e||e.type!==jt&&e.type!==Ft||e.index!==n)break;if(e.type===jt){const i=new e.ctor(r,e.name,e.strings,o.instance,s),n=Vt(i)?o.result.values[o.instancePartIndex]:o.result.values,a=!(i.type===Bt||i.type===Dt);i._$AI(n,i,o.instancePartIndex,a),o.instancePartIndex+=e.strings.length-1,t._$AV.push(i)}else{const e=new Pe(r,o.instance,s);Se(e,o.result.values[o.instancePartIndex++]),t._$AV.push(e)}o.templatePartIndex++}}},Oe=t=>{const e=new Uint32Array(2).fill(5381);for(const s of t.strings)for(let t=0;t<s.length;t++)e[t%2]=33*e[t%2]^s.charCodeAt(t);const s=String.fromCharCode(...new Uint8Array(e.buffer));return btoa(s)};var Ue=Object.freeze({__proto__:null,digestForTemplateResult:Oe,hydrate:(t,e,s={})=>{if(void 0!==e._$litPart$)throw Error("container already contains a live render");let i,n,r;const o=[],a=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT);let h;for(;null!==(h=a.nextNode());){const e=h.data;if(e.startsWith("lit-part")){if(0===o.length&&void 0!==i)throw Error(`There must be only one root part per container. Found a part marker (${h}) when we already have a root part marker (${n})`);r=xe(t,h,o,s),i??=r,n??=h}else if(e.startsWith("lit-node"))Te(h,o,s);else if(e.startsWith("/lit-part")){if(1===o.length&&r!==i)throw Error("internal error");r=Ne(h,r,o)}}if(void 0===i){const t=e instanceof ShadowRoot?"{container.host.localName}'s shadow root":e instanceof DocumentFragment?"DocumentFragment":e.localName;console.error(`There should be exactly one root part in a render container, but we didn't find any in ${t}.`)}e._$litPart$=i}});const ke=Symbol();const He=(t,e)=>t===e||t.length===e.length&&t.every(((t,s)=>!at(t,e[s])));const Le={motion:ge,react:Ae,ssrClient:Ue,task:Object.freeze({__proto__:null,Task:class{get taskComplete(){return this.t||(1===this.status?this.t=new Promise(((t,e)=>{this.i=t,this.o=e})):3===this.status?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(t,e,s){this.u=0,this.status=0,(this.p=t).addController(this);const i="object"==typeof e?e:{task:e,args:s};this._=i.task,this.v=i.args,this.j=i.argsEqual??He,this.m=i.onComplete,this.g=i.onError,this.autoRun=i.autoRun??!0,"initialValue"in i&&(this.l=i.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){!0===this.autoRun&&this.O()}hostUpdated(){"afterUpdate"===this.autoRun&&this.O()}A(){if(void 0===this.v)return;const t=this.v();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async O(){const t=this.A(),e=this.k;this.k=t,t===e||void 0===t||void 0!==e&&this.j(e,t)||await this.run(t)}async run(t){let e,s;t??=this.A(),this.k=t,1===this.status?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this.p.requestUpdate())):this.p.requestUpdate();const i=++this.u;this.T=new AbortController;let n=!1;try{e=await this._(t,{signal:this.T.signal})}catch(t){n=!0,s=t}if(this.u===i){if(e===ke)this.status=0;else{if(!1===n){try{this.m?.(e)}catch{}this.status=2,this.i?.(e)}else{try{this.g?.(s)}catch{}this.status=3,this.o?.(s)}this.l=e,this.h=s}this.p.requestUpdate()}}abort(t){1===this.status&&this.T?.abort(t)}get value(){return this.l}get error(){return this.h}render(t){switch(this.status){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}},TaskStatus:{INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},initialState:ke,shallowArrayEquals:He})};return t.CSSResult=V,t.LitElement=ct,t.ReactiveElement=lt,t._$LE={_$AK:(t,e,s)=>{t._$AK(e,s)},_$AL:t=>t._$AL},t._$LH=j,t.adoptStyles=K,t.css=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new V(s,t,F)},t.defaultConverter=ot,t.getCompatibleStyle=X,t.html=b,t.labs=Le,t.locallize=It,t.noChange=E,t.notEqual=at,t.nothing=S,t.render=z,t.supportsAdoptingStyleSheets=B,t.svg=w,t.unsafeCSS=q,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
