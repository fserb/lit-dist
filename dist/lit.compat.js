/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var t=require("../internals/export"),e=require("../internals/is-pure"),r=require("../internals/collection-delete-all");t({target:"Map",proto:!0,real:!0,forced:e},{deleteAll:function(){return r.apply(this,arguments)}});var i=require("../internals/export"),n=require("../internals/is-pure"),s=require("../internals/an-object"),o=require("../internals/function-bind-context"),l=require("../internals/get-map-iterator"),a=require("../internals/iterate");i({target:"Map",proto:!0,real:!0,forced:n},{every:function(t){var e=s(this),r=l(e),i=o(t,arguments.length>1?arguments[1]:void 0,3);return!a(r,(function(t,r,n){if(!i(r,t,e))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}});var u=require("../internals/export"),h=require("../internals/is-pure"),c=require("../internals/get-built-in"),d=require("../internals/an-object"),p=require("../internals/a-function"),v=require("../internals/function-bind-context"),f=require("../internals/species-constructor"),g=require("../internals/get-map-iterator"),q=require("../internals/iterate");u({target:"Map",proto:!0,real:!0,forced:h},{filter:function(t){var e=d(this),r=g(e),i=v(t,arguments.length>1?arguments[1]:void 0,3),n=new(f(e,c("Map"))),s=p(n.set);return q(r,(function(t,r){i(r,t,e)&&s.call(n,t,r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}});var m=require("../internals/export"),A=require("../internals/is-pure"),y=require("../internals/an-object"),S=require("../internals/function-bind-context"),$=require("../internals/get-map-iterator"),b=require("../internals/iterate");m({target:"Map",proto:!0,real:!0,forced:A},{find:function(t){var e=y(this),r=$(e),i=S(t,arguments.length>1?arguments[1]:void 0,3);return b(r,(function(t,r,n){if(i(r,t,e))return n(r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}});var _=require("../internals/export"),T=require("../internals/is-pure"),x=require("../internals/an-object"),E=require("../internals/function-bind-context"),R=require("../internals/get-map-iterator"),I=require("../internals/iterate");_({target:"Map",proto:!0,real:!0,forced:T},{findKey:function(t){var e=x(this),r=R(e),i=E(t,arguments.length>1?arguments[1]:void 0,3);return I(r,(function(t,r,n){if(i(r,t,e))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}});var w=require("../internals/export"),N=require("../internals/is-pure"),C=require("../internals/an-object"),H=require("../internals/get-map-iterator"),U=require("../internals/same-value-zero"),P=require("../internals/iterate");w({target:"Map",proto:!0,real:!0,forced:N},{includes:function(t){return P(H(C(this)),(function(e,r,i){if(U(r,t))return i()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}});var M=require("../internals/export"),O=require("../internals/is-pure"),j=require("../internals/an-object"),k=require("../internals/get-map-iterator"),D=require("../internals/iterate");M({target:"Map",proto:!0,real:!0,forced:O},{keyOf:function(t){return D(k(j(this)),(function(e,r,i){if(r===t)return i(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}});var L=require("../internals/export"),B=require("../internals/is-pure"),z=require("../internals/get-built-in"),W=require("../internals/an-object"),V=require("../internals/a-function"),K=require("../internals/function-bind-context"),Z=require("../internals/species-constructor"),J=require("../internals/get-map-iterator"),F=require("../internals/iterate");L({target:"Map",proto:!0,real:!0,forced:B},{mapKeys:function(t){var e=W(this),r=J(e),i=K(t,arguments.length>1?arguments[1]:void 0,3),n=new(Z(e,z("Map"))),s=V(n.set);return F(r,(function(t,r){s.call(n,i(r,t,e),r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}});var X=require("../internals/export"),Y=require("../internals/is-pure"),G=require("../internals/get-built-in"),Q=require("../internals/an-object"),tt=require("../internals/a-function"),et=require("../internals/function-bind-context"),rt=require("../internals/species-constructor"),it=require("../internals/get-map-iterator"),nt=require("../internals/iterate");X({target:"Map",proto:!0,real:!0,forced:Y},{mapValues:function(t){var e=Q(this),r=it(e),i=et(t,arguments.length>1?arguments[1]:void 0,3),n=new(rt(e,G("Map"))),s=tt(n.set);return nt(r,(function(t,r){s.call(n,t,i(r,t,e))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}});var st=require("../internals/export"),ot=require("../internals/is-pure"),lt=require("../internals/an-object"),at=require("../internals/a-function"),ut=require("../internals/iterate");st({target:"Map",proto:!0,real:!0,forced:ot},{merge:function(t){for(var e=lt(this),r=at(e.set),i=0;i<arguments.length;)ut(arguments[i++],r,{that:e,AS_ENTRIES:!0});return e}});var ht=require("../internals/export"),ct=require("../internals/is-pure"),dt=require("../internals/an-object"),pt=require("../internals/a-function"),vt=require("../internals/get-map-iterator"),ft=require("../internals/iterate");ht({target:"Map",proto:!0,real:!0,forced:ct},{reduce:function(t){var e=dt(this),r=vt(e),i=arguments.length<2,n=i?void 0:arguments[1];if(pt(t),ft(r,(function(r,s){i?(i=!1,n=s):n=t(n,s,r,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),i)throw TypeError("Reduce of empty map with no initial value");return n}});var gt=require("../internals/export"),qt=require("../internals/is-pure"),mt=require("../internals/an-object"),At=require("../internals/function-bind-context"),yt=require("../internals/get-map-iterator"),St=require("../internals/iterate");gt({target:"Map",proto:!0,real:!0,forced:qt},{some:function(t){var e=mt(this),r=yt(e),i=At(t,arguments.length>1?arguments[1]:void 0,3);return St(r,(function(t,r,n){if(i(r,t,e))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}});var $t=require("../internals/export"),bt=require("../internals/is-pure"),_t=require("../internals/an-object"),Tt=require("../internals/a-function");$t({target:"Map",proto:!0,real:!0,forced:bt},{update:function(t,e){var r=_t(this),i=arguments.length;Tt(e);var n=r.has(t);if(!n&&i<3)throw TypeError("Updating absent value");var s=n?r.get(t):Tt(i>2?arguments[2]:void 0)(t,r);return r.set(t,e(s,t,r)),r}});var xt=require("../internals/export"),Et=require("../internals/is-pure"),Rt=require("../internals/collection-add-all");xt({target:"Set",proto:!0,real:!0,forced:Et},{addAll:function(){return Rt.apply(this,arguments)}});var It=require("../internals/export"),wt=require("../internals/is-pure"),Nt=require("../internals/collection-delete-all");It({target:"Set",proto:!0,real:!0,forced:wt},{deleteAll:function(){return Nt.apply(this,arguments)}});var Ct=require("../internals/export"),Ht=require("../internals/is-pure"),Ut=require("../internals/get-built-in"),Pt=require("../internals/an-object"),Mt=require("../internals/a-function"),Ot=require("../internals/species-constructor"),jt=require("../internals/iterate");Ct({target:"Set",proto:!0,real:!0,forced:Ht},{difference:function(t){var e=Pt(this),r=new(Ot(e,Ut("Set")))(e),i=Mt(r.delete);return jt(t,(function(t){i.call(r,t)})),r}});var kt=require("../internals/export"),Dt=require("../internals/is-pure"),Lt=require("../internals/an-object"),Bt=require("../internals/function-bind-context"),zt=require("../internals/get-set-iterator"),Wt=require("../internals/iterate");kt({target:"Set",proto:!0,real:!0,forced:Dt},{every:function(t){var e=Lt(this),r=zt(e),i=Bt(t,arguments.length>1?arguments[1]:void 0,3);return!Wt(r,(function(t,r){if(!i(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}});var Vt=require("../internals/export"),Kt=require("../internals/is-pure"),Zt=require("../internals/get-built-in"),Jt=require("../internals/an-object"),Ft=require("../internals/a-function"),Xt=require("../internals/function-bind-context"),Yt=require("../internals/species-constructor"),Gt=require("../internals/get-set-iterator"),Qt=require("../internals/iterate");Vt({target:"Set",proto:!0,real:!0,forced:Kt},{filter:function(t){var e=Jt(this),r=Gt(e),i=Xt(t,arguments.length>1?arguments[1]:void 0,3),n=new(Yt(e,Zt("Set"))),s=Ft(n.add);return Qt(r,(function(t){i(t,t,e)&&s.call(n,t)}),{IS_ITERATOR:!0}),n}});var te=require("../internals/export"),ee=require("../internals/is-pure"),re=require("../internals/an-object"),ie=require("../internals/function-bind-context"),ne=require("../internals/get-set-iterator"),se=require("../internals/iterate");te({target:"Set",proto:!0,real:!0,forced:ee},{find:function(t){var e=re(this),r=ne(e),i=ie(t,arguments.length>1?arguments[1]:void 0,3);return se(r,(function(t,r){if(i(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}});var oe=require("../internals/export"),le=require("../internals/is-pure"),ae=require("../internals/get-built-in"),ue=require("../internals/an-object"),he=require("../internals/a-function"),ce=require("../internals/species-constructor"),de=require("../internals/iterate");oe({target:"Set",proto:!0,real:!0,forced:le},{intersection:function(t){var e=ue(this),r=new(ce(e,ae("Set"))),i=he(e.has),n=he(r.add);return de(t,(function(t){i.call(e,t)&&n.call(r,t)})),r}});var pe=require("../internals/export"),ve=require("../internals/is-pure"),fe=require("../internals/an-object"),ge=require("../internals/a-function"),qe=require("../internals/iterate");pe({target:"Set",proto:!0,real:!0,forced:ve},{isDisjointFrom:function(t){var e=fe(this),r=ge(e.has);return!qe(t,(function(t,i){if(!0===r.call(e,t))return i()}),{INTERRUPTED:!0}).stopped}});var me=require("../internals/export"),Ae=require("../internals/is-pure"),ye=require("../internals/get-built-in"),Se=require("../internals/an-object"),$e=require("../internals/a-function"),be=require("../internals/get-iterator"),_e=require("../internals/iterate");me({target:"Set",proto:!0,real:!0,forced:Ae},{isSubsetOf:function(t){var e=be(this),r=Se(t),i=r.has;return"function"!=typeof i&&(r=new(ye("Set"))(t),i=$e(r.has)),!_e(e,(function(t,e){if(!1===i.call(r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}});var Te=require("../internals/export"),xe=require("../internals/is-pure"),Ee=require("../internals/an-object"),Re=require("../internals/a-function"),Ie=require("../internals/iterate");Te({target:"Set",proto:!0,real:!0,forced:xe},{isSupersetOf:function(t){var e=Ee(this),r=Re(e.has);return!Ie(t,(function(t,i){if(!1===r.call(e,t))return i()}),{INTERRUPTED:!0}).stopped}});var we=require("../internals/export"),Ne=require("../internals/is-pure"),Ce=require("../internals/an-object"),He=require("../internals/get-set-iterator"),Ue=require("../internals/iterate");we({target:"Set",proto:!0,real:!0,forced:Ne},{join:function(t){var e=Ce(this),r=He(e),i=void 0===t?",":String(t),n=[];return Ue(r,n.push,{that:n,IS_ITERATOR:!0}),n.join(i)}});var Pe=require("../internals/export"),Me=require("../internals/is-pure"),Oe=require("../internals/get-built-in"),je=require("../internals/an-object"),ke=require("../internals/a-function"),De=require("../internals/function-bind-context"),Le=require("../internals/species-constructor"),Be=require("../internals/get-set-iterator"),ze=require("../internals/iterate");Pe({target:"Set",proto:!0,real:!0,forced:Me},{map:function(t){var e=je(this),r=Be(e),i=De(t,arguments.length>1?arguments[1]:void 0,3),n=new(Le(e,Oe("Set"))),s=ke(n.add);return ze(r,(function(t){s.call(n,i(t,t,e))}),{IS_ITERATOR:!0}),n}});var We=require("../internals/export"),Ve=require("../internals/is-pure"),Ke=require("../internals/an-object"),Ze=require("../internals/a-function"),Je=require("../internals/get-set-iterator"),Fe=require("../internals/iterate");We({target:"Set",proto:!0,real:!0,forced:Ve},{reduce:function(t){var e=Ke(this),r=Je(e),i=arguments.length<2,n=i?void 0:arguments[1];if(Ze(t),Fe(r,(function(r){i?(i=!1,n=r):n=t(n,r,r,e)}),{IS_ITERATOR:!0}),i)throw TypeError("Reduce of empty set with no initial value");return n}});var Xe=require("../internals/export"),Ye=require("../internals/is-pure"),Ge=require("../internals/an-object"),Qe=require("../internals/function-bind-context"),tr=require("../internals/get-set-iterator"),er=require("../internals/iterate");Xe({target:"Set",proto:!0,real:!0,forced:Ye},{some:function(t){var e=Ge(this),r=tr(e),i=Qe(t,arguments.length>1?arguments[1]:void 0,3);return er(r,(function(t,r){if(i(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}});var rr=require("../internals/export"),ir=require("../internals/is-pure"),nr=require("../internals/get-built-in"),sr=require("../internals/an-object"),or=require("../internals/a-function"),lr=require("../internals/species-constructor"),ar=require("../internals/iterate");rr({target:"Set",proto:!0,real:!0,forced:ir},{symmetricDifference:function(t){var e=sr(this),r=new(lr(e,nr("Set")))(e),i=or(r.delete),n=or(r.add);return ar(t,(function(t){i.call(r,t)||n.call(r,t)})),r}});var ur=require("../internals/export"),hr=require("../internals/is-pure"),cr=require("../internals/get-built-in"),dr=require("../internals/an-object"),pr=require("../internals/a-function"),vr=require("../internals/species-constructor"),fr=require("../internals/iterate");ur({target:"Set",proto:!0,real:!0,forced:hr},{union:function(t){var e=dr(this),r=new(vr(e,cr("Set")))(e);return fr(t,pr(r.add),{that:r}),r}});const gr=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qr=Symbol();class mr{constructor(t,e){if(e!==qr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return gr&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const Ar=new Map,yr=t=>{let e=Ar.get(t);return void 0===e&&Ar.set(t,e=new mr(t,qr)),e},Sr=t=>yr("string"==typeof t?t:t+""),$r=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,i)=>e+(t=>{if(t instanceof mr)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1]),t[0]);return yr(r)},br=(t,e)=>{gr?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style");r.textContent=e.cssText,t.appendChild(r)}))},_r=gr?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Sr(e)})(t):t;var Tr,xr,Er,Rr;const Ir={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},wr=(t,e)=>e!==t&&(e==e||t==t),Nr={attribute:!0,type:String,converter:Ir,reflect:!1,hasChanged:wr};class Cr extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const i=this.Πp(r,e);void 0!==i&&(this.Πm.set(i,r),t.push(i))})),t}static createProperty(t,e=Nr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Nr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(_r(t))}else void 0!==t&&e.push(_r(t));return e}static"Πp"(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return br(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,r){this.K(t,r)}"Πj"(t,e,r=Nr){var i,n;const s=this.constructor.Πp(t,r);if(void 0!==s&&!0===r.reflect){const o=(null!==(n=null===(i=r.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:Ir.toAttribute)(e,r.type);this.Πh=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this.Πh=null}}K(t,e){var r,i,n;const s=this.constructor,o=s.Πm.get(t);if(void 0!==o&&this.Πh!==o){const t=s.getPropertyOptions(o),l=t.converter,a=null!==(n=null!==(i=null===(r=l)||void 0===r?void 0:r.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==n?n:Ir.fromAttribute;this.Πh=o,this[o]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,r){let i=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||wr)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===r.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const r=this.L;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(r)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}Cr.finalized=!0,Cr.elementProperties=new Map,Cr.elementStyles=[],Cr.shadowRootOptions={mode:"open"},null===(xr=(Tr=globalThis).reactiveElementPlatformSupport)||void 0===xr||xr.call(Tr,{ReactiveElement:Cr}),(null!==(Er=(Rr=globalThis).reactiveElementVersions)&&void 0!==Er?Er:Rr.reactiveElementVersions=[]).push("1.0.0-rc.2");var Hr=require("../internals/export"),Ur=require("../internals/is-pure"),Pr=require("../internals/collection-delete-all");Hr({target:"WeakMap",proto:!0,real:!0,forced:Ur},{deleteAll:function(){return Pr.apply(this,arguments)}});var Mr,Or,jr,kr,Dr=require("../internals/descriptors"),Lr=require("../internals/add-to-unscopables"),Br=require("../internals/to-object"),zr=require("../internals/to-length"),Wr=require("../internals/object-define-property").f;Dr&&!("lastIndex"in[])&&(Wr(Array.prototype,"lastIndex",{configurable:!0,get:function(){var t=Br(this),e=zr(t.length);return 0==e?0:e-1}}),Lr("lastIndex"));const Vr=globalThis.trustedTypes,Kr=Vr?Vr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Zr=`lit$${(Math.random()+"").slice(9)}$`,Jr="?"+Zr,Fr=`<${Jr}>`,Xr=document,Yr=(t="")=>Xr.createComment(t),Gr=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Qr=Array.isArray,ti=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ei=/-->/g,ri=/>/g,ii=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ni=/'/g,si=/"/g,oi=/^(?:script|style|textarea)$/i,li=Symbol.for("lit-noChange"),ai=Symbol.for("lit-nothing"),ui=new WeakMap,hi=Xr.createTreeWalker(Xr,129,null,!1);class ci{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,s=0;const o=t.length-1,l=this.parts,[a,u]=((t,e)=>{const r=t.length-1,i=[];let n,s=2===e?"<svg>":"",o=ti;for(let e=0;e<r;e++){const r=t[e];let l,a,u=-1,h=0;for(;h<r.length&&(o.lastIndex=h,a=o.exec(r),null!==a);)h=o.lastIndex,o===ti?"!--"===a[1]?o=ei:void 0!==a[1]?o=ri:void 0!==a[2]?(oi.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=ii):void 0!==a[3]&&(o=ii):o===ii?">"===a[0]?(o=null!=n?n:ti,u=-1):void 0===a[1]?u=-2:(u=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?ii:'"'===a[3]?si:ni):o===si||o===ni?o=ii:o===ei||o===ri?o=ti:(o=ii,n=void 0);const c=o===ii&&t[e+1].startsWith("/>")?" ":"";s+=o===ti?r+Fr:u>=0?(i.push(l),r.slice(0,u)+"$lit$"+r.slice(u)+Zr+c):r+Zr+(-2===u?(i.push(void 0),e):c)}const l=s+(t[r]||"<?>")+(2===e?"</svg>":"");return[void 0!==Kr?Kr.createHTML(l):l,i]})(t,e);if(this.el=ci.createElement(a,r),hi.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=hi.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(Zr)){const r=u[s++];if(t.push(e),void 0!==r){const t=i.getAttribute(r.toLowerCase()+"$lit$").split(Zr),e=/([.?@])?(.*)/.exec(r);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?gi:"?"===e[1]?qi:"@"===e[1]?mi:fi})}else l.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(oi.test(i.tagName)){const t=i.textContent.split(Zr),e=t.length-1;if(e>0){i.textContent=Vr?Vr.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],Yr()),hi.nextNode(),l.push({type:2,index:++n});i.append(t[e],Yr())}}}else if(8===i.nodeType)if(i.data===Jr)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(Zr,t+1));)l.push({type:7,index:n}),t+=Zr.length-1}n++}}static createElement(t,e){const r=Xr.createElement("template");return r.innerHTML=t,r}}function di(t,e,r=t,i){var n,s,o,l;if(e===li)return e;let a=void 0!==i?null===(n=r._$Cl)||void 0===n?void 0:n[i]:r._$Cu;const u=Gr(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==u&&(null===(s=null==a?void 0:a._$AO)||void 0===s||s.call(a,!1),void 0===u?a=void 0:(a=new u(t),a._$AT(t,r,i)),void 0!==i?(null!==(o=(l=r)._$Cl)&&void 0!==o?o:l._$Cl=[])[i]=a:r._$Cu=a),void 0!==a&&(e=di(t,a._$AS(t,e.values),a,i)),e}class pi{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:Xr).importNode(r,!0);hi.currentNode=n;let s=hi.nextNode(),o=0,l=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new vi(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new Ai(s,this,t)),this.v.push(e),a=i[++l]}o!==(null==a?void 0:a.index)&&(s=hi.nextNode(),o++)}return n}m(t){let e=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class vi{constructor(t,e,r,i){this.type=2,this._$C_=!0,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){return this._$AA.parentNode}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=di(this,t,e),Gr(t)?t===ai||null==t||""===t?(this._$AH!==ai&&this._$AR(),this._$AH=ai):t!==this._$AH&&t!==li&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.A(t):(t=>{var e;return Qr(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}C(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}A(t){this._$AH!==t&&(this._$AR(),this._$AH=this.C(t))}$(t){const e=this._$AA.nextSibling;null!==e&&3===e.nodeType&&(null===this._$AB?null===e.nextSibling:e===this._$AB.previousSibling)?e.data=t:this.A(Xr.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=ci.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(r);else{const t=new pi(n,this),e=t.p(this.options);t.m(r),this.A(e),this._$AH=t}}_$AC(t){let e=ui.get(t.strings);return void 0===e&&ui.set(t.strings,e=new ci(t)),e}M(t){Qr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const n of t)i===e.length?e.push(r=new vi(this.C(Yr()),this.C(Yr()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class fi{constructor(t,e,r,i,n){this.type=1,this._$AH=ai,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(ai),this.strings=r):this._$AH=ai}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){const n=this.strings;let s=!1;if(void 0===n)t=di(this,t,e,0),s=!Gr(t)||t!==this._$AH&&t!==li,s&&(this._$AH=t);else{const i=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=di(this,i[r+o],e,o),l===li&&(l=this._$AH[o]),s||(s=!Gr(l)||l!==this._$AH[o]),l===ai?t=ai:t!==ai&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}s&&!i&&this.P(t)}P(t){t===ai?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class gi extends fi{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===ai?void 0:t}}class qi extends fi{constructor(){super(...arguments),this.type=4}P(t){t&&t!==ai?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class mi extends fi{constructor(){super(...arguments),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=di(this,t,e,0))&&void 0!==r?r:ai)===li)return;const i=this._$AH,n=t===ai&&i!==ai||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==ai&&(i===ai||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class Ai{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){di(this,t)}}var yi,Si,$i,bi;null===(Or=(Mr=globalThis).litHtmlPlatformSupport)||void 0===Or||Or.call(Mr,ci,vi),(null!==(jr=(kr=globalThis).litHtmlVersions)&&void 0!==jr?jr:kr.litHtmlVersions=[]).push("2.0.0-rc.4");const _i=globalThis.trustedTypes,Ti=_i?_i.createPolicy("lit-html",{createHTML:t=>t}):void 0,xi=`lit$${(Math.random()+"").slice(9)}$`,Ei="?"+xi,Ri=`<${Ei}>`,Ii=document,wi=(t="")=>Ii.createComment(t),Ni=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Ci=Array.isArray,Hi=t=>{var e;return Ci(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},Ui=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pi=/-->/g,Mi=/>/g,Oi=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ji=/'/g,ki=/"/g,Di=/^(?:script|style|textarea)$/i,Li=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Bi=Li(1),zi=Li(2),Wi=Symbol.for("lit-noChange"),Vi=Symbol.for("lit-nothing"),Ki=new WeakMap,Zi=(t,e,r)=>{var i,n;const s=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:e;let o=s._$litPart$;if(void 0===o){const t=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:null;s._$litPart$=o=new Qi(e.insertBefore(wi(),t),t,void 0,r)}return o.I(t),o},Ji=Ii.createTreeWalker(Ii,129,null,!1),Fi=(t,e)=>{const r=t.length-1,i=[];let n,s=2===e?"<svg>":"",o=Ui;for(let e=0;e<r;e++){const r=t[e];let l,a,u=-1,h=0;for(;h<r.length&&(o.lastIndex=h,a=o.exec(r),null!==a);)h=o.lastIndex,o===Ui?"!--"===a[1]?o=Pi:void 0!==a[1]?o=Mi:void 0!==a[2]?(Di.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=Oi):void 0!==a[3]&&(o=Oi):o===Oi?">"===a[0]?(o=null!=n?n:Ui,u=-1):void 0===a[1]?u=-2:(u=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?Oi:'"'===a[3]?ki:ji):o===ki||o===ji?o=Oi:o===Pi||o===Mi?o=Ui:(o=Oi,n=void 0);const c=o===Oi&&t[e+1].startsWith("/>")?" ":"";s+=o===Ui?r+Ri:u>=0?(i.push(l),r.slice(0,u)+"$lit$"+r.slice(u)+xi+c):r+xi+(-2===u?(i.push(void 0),e):c)}const l=s+(t[r]||"<?>")+(2===e?"</svg>":"");return[void 0!==Ti?Ti.createHTML(l):l,i]};class Xi{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,s=0;const o=t.length-1,l=this.parts,[a,u]=Fi(t,e);if(this.el=Xi.createElement(a,r),Ji.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=Ji.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(xi)){const r=u[s++];if(t.push(e),void 0!==r){const t=i.getAttribute(r.toLowerCase()+"$lit$").split(xi),e=/([.?@])?(.*)/.exec(r);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?en:"?"===e[1]?rn:"@"===e[1]?nn:tn})}else l.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(Di.test(i.tagName)){const t=i.textContent.split(xi),e=t.length-1;if(e>0){i.textContent=_i?_i.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],wi()),Ji.nextNode(),l.push({type:2,index:++n});i.append(t[e],wi())}}}else if(8===i.nodeType)if(i.data===Ei)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(xi,t+1));)l.push({type:7,index:n}),t+=xi.length-1}n++}}static createElement(t,e){const r=Ii.createElement("template");return r.innerHTML=t,r}}function Yi(t,e,r=t,i){var n,s,o,l;if(e===Wi)return e;let a=void 0!==i?null===(n=r.Σi)||void 0===n?void 0:n[i]:r.Σo;const u=Ni(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==u&&(null===(s=null==a?void 0:a.O)||void 0===s||s.call(a,!1),void 0===u?a=void 0:(a=new u(t),a.T(t,r,i)),void 0!==i?(null!==(o=(l=r).Σi)&&void 0!==o?o:l.Σi=[])[i]=a:r.Σo=a),void 0!==a&&(e=Yi(t,a.S(t,e.values),a,i)),e}class Gi{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:r},parts:i}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:Ii).importNode(r,!0);Ji.currentNode=n;let s=Ji.nextNode(),o=0,l=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Qi(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new sn(s,this,t)),this.l.push(e),a=i[++l]}o!==(null==a?void 0:a.index)&&(s=Ji.nextNode(),o++)}return n}v(t){let e=0;for(const r of this.l)void 0!==r&&(void 0!==r.strings?(r.I(t,r,e),e+=r.strings.length-2):r.I(t[e])),e++}}class Qi{constructor(t,e,r,i){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=r,this.options=i}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=Yi(this,t,e),Ni(t)?t===Vi||null==t||""===t?(this.H!==Vi&&this.R(),this.H=Vi):t!==this.H&&t!==Wi&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):Hi(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(Ii.createTextNode(t)),this.H=t}_(t){var e;const{values:r,_$litType$:i}=t,n="number"==typeof i?this.C(t):(void 0===i.el&&(i.el=Xi.createElement(i.h,this.options)),i);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(r);else{const t=new Gi(n,this),e=t.u(this.options);t.v(r),this.$(e),this.H=t}}C(t){let e=Ki.get(t.strings);return void 0===e&&Ki.set(t.strings,e=new Xi(t)),e}g(t){Ci(this.H)||(this.H=[],this.R());const e=this.H;let r,i=0;for(const n of t)i===e.length?e.push(r=new Qi(this.k(wi()),this.k(wi()),this,this.options)):r=e[i],r.I(n),i++;i<e.length&&(this.R(r&&r.B.nextSibling,i),e.length=i)}R(t=this.A.nextSibling,e){var r;for(null===(r=this.P)||void 0===r||r.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class tn{constructor(t,e,r,i,n){this.type=1,this.H=Vi,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this.H=Array(r.length-1).fill(Vi),this.strings=r):this.H=Vi}get tagName(){return this.element.tagName}I(t,e=this,r,i){const n=this.strings;let s=!1;if(void 0===n)t=Yi(this,t,e,0),s=!Ni(t)||t!==this.H&&t!==Wi,s&&(this.H=t);else{const i=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=Yi(this,i[r+o],e,o),l===Wi&&(l=this.H[o]),s||(s=!Ni(l)||l!==this.H[o]),l===Vi?t=Vi:t!==Vi&&(t+=(null!=l?l:"")+n[o+1]),this.H[o]=l}s&&!i&&this.W(t)}W(t){t===Vi?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class en extends tn{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===Vi?void 0:t}}class rn extends tn{constructor(){super(...arguments),this.type=4}W(t){t&&t!==Vi?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class nn extends tn{constructor(){super(...arguments),this.type=5}I(t,e=this){var r;if((t=null!==(r=Yi(this,t,e,0))&&void 0!==r?r:Vi)===Wi)return;const i=this.H,n=t===Vi&&i!==Vi||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==Vi&&(i===Vi||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,r;"function"==typeof this.H?this.H.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this.H.handleEvent(t)}}class sn{constructor(t,e,r){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=r}I(t){Yi(this,t)}}const on={Z:"$lit$",U:xi,Y:Ei,q:1,X:Fi,tt:Gi,it:Hi,st:Yi,et:Qi,ot:tn,nt:rn,rt:nn,lt:en,ht:sn};var ln,an,un,hn,cn,dn;null===(Si=(yi=globalThis).litHtmlPlatformSupport)||void 0===Si||Si.call(yi,Xi,Qi),(null!==($i=(bi=globalThis).litHtmlVersions)&&void 0!==$i?$i:bi.litHtmlVersions=[]).push("2.0.0-rc.3");const pn=Cr;(null!==(ln=(dn=globalThis).litElementVersions)&&void 0!==ln?ln:dn.litElementVersions=[]).push("3.0.0-rc.2");class vn extends Cr{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();super.update(t),this.Φt=Zi(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return Wi}}vn.finalized=!0,vn._$litElement$=!0,null===(un=(an=globalThis).litElementHydrateSupport)||void 0===un||un.call(an,{LitElement:vn}),null===(cn=(hn=globalThis).litElementPlatformSupport)||void 0===cn||cn.call(hn,{LitElement:vn});const fn={K:(t,e,r)=>{t.K(e,r)},L:t=>t.L};export{mr as CSSResult,vn as LitElement,Cr as ReactiveElement,pn as UpdatingElement,on as _Σ,fn as _Φ,br as adoptStyles,$r as css,Ir as defaultConverter,_r as getCompatibleStyle,Bi as html,Wi as noChange,wr as notEqual,Vi as nothing,Zi as render,gr as supportsAdoptingStyleSheets,zi as svg,Sr as unsafeCSS};
