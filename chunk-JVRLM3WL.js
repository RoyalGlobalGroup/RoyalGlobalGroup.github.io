import{l as W,p as st,r as lt,s as ct}from"./chunk-QGGQ36EA.js";import{$ as a,$a as at,Aa as Y,Ba as $,Ca as K,Ea as X,F as j,G as A,H as G,Ha as Z,K as z,L as E,O as u,P as m,Pa as J,Qa as B,Ra as Q,Sa as O,Ta as tt,Ua as et,Va as nt,Wa as T,Ya as it,Za as ot,_a as rt,aa as w,ab as pt,ba as y,ca as I,da as s,ea as l,eb as ut,fa as c,ga as P,ha as U,hb as mt,ia as R,ja as x,ka as M,la as b,m as N,oa as f,pa as q,qa as v,ra as D,ta as _,ua as g,ub as dt,va as h}from"./chunk-OHHLTHIV.js";import"./chunk-6EHZAEAA.js";var ft=(()=>{let n=class n{};n.REGEX=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;let i=n;return i})();function _t(i){return n=>n.value&&!n.value.toString().match(i)?{expression:!0}:null}function H(i){this.message=i}H.prototype=new Error,H.prototype.name="InvalidCharacterError";var gt=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(i){var n=String(i).replace(/=+$/,"");if(n.length%4==1)throw new H("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,t,e=0,o=0,d="";t=n.charAt(o++);~t&&(r=e%4?64*r+t:t,e++%4)?d+=String.fromCharCode(255&r>>(-2*e&6)):0)t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(t);return d};function It(i){var n=i.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return function(r){return decodeURIComponent(gt(r).replace(/(.)/g,function(t,e){var o=e.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}(n)}catch{return gt(n)}}function S(i){this.message=i}function Mt(i,n){if(typeof i!="string")throw new S("Invalid token specified");var r=(n=n||{}).header===!0?0:1;try{return JSON.parse(It(i.split(".")[r]))}catch(t){throw new S("Invalid token specified: "+t.message)}}S.prototype=new Error,S.prototype.name="InvalidTokenError";var ht=Mt;var Ct=(()=>{let n=class n{constructor(t){this.http=t,this.BASE_URL=ct.API_URL}signUp(t){return this.http.post(`${this.BASE_URL}/api/auth/register`,t).pipe(N(e=>e.token))}signIn(t){return this.http.post(`${this.BASE_URL}/api/auth/login`,t).pipe(N(e=>e.token))}};n.\u0275fac=function(e){return new(e||n)(G(Z))},n.\u0275prov=j({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();var F=function(i){return{"invalid-input":i}},V=function(i){return{"label-error":i}},k=function(i){return{visibility:i}};function xt(i,n){if(i&1){let r=x();l(0,"div",4)(1,"span",5)(2,"input",16,17),M("blur",function(){u(r);let e=b(),o;return m((o=e.authForm.get("name"))!=null&&o.invalid?e.invalidInputs.nameInput=!0:e.invalidInputs.nameInput=!1)})("focus",function(){u(r);let e=I(5);return m(e.classList.add("label-focus"))})("focusout",function(){u(r);let e=I(5);return m(e.classList.remove("label-focus"))}),c(),l(4,"label",18,13),f(6),g(7,"translate"),c(),l(8,"span",9),f(9),g(10,"translate"),c()()()}if(i&2){let r=b();a(2),s("ngClass",_(10,F,r.invalidInputs.nameInput)),a(2),s("ngClass",_(12,V,r.invalidInputs.nameInput)),a(2),v(" ",h(7,6,"AUTH.FORM.NAME")," "),a(2),s("ngStyle",_(14,k,r.invalidInputs.nameInput?"visible":"hidden")),a(1),D("",h(10,8,"AUTH.FORM.EMPTY_INPUT.EMPTY")," ",r.invalidInputs.nameInput," ")}}function Ot(i,n){if(i&1){let r=x();l(0,"div",4)(1,"span",5)(2,"input",19,20),M("blur",function(){u(r);let e=b(),o;return m((o=e.authForm.get("phone"))!=null&&o.invalid?e.invalidInputs.phoneInput=!0:e.invalidInputs.phoneInput=!1)})("focus",function(){u(r);let e=I(5);return m(e.classList.add("label-focus"))})("focusout",function(){u(r);let e=I(5);return m(e.classList.remove("label-focus"))}),c(),l(4,"label",21,13),f(6),g(7,"translate"),c(),l(8,"span",9),f(9),g(10,"translate"),c()()()}if(i&2){let r=b();a(2),s("ngClass",_(9,F,r.invalidInputs.phoneInput)),a(2),s("ngClass",_(11,V,r.invalidInputs.phoneInput)),a(2),v(" ",h(7,5,"AUTH.FORM.PHONE")," "),a(2),s("ngStyle",_(13,k,r.invalidInputs.phoneInput?"visible":"hidden")),a(1),v("",h(10,7,"AUTH.FORM.EMPTY_INPUT.PHONE")," ")}}function yt(i,n){if(i&1){let r=x();U(0),l(1,"button",22),M("click",function(){u(r);let e=b();return m(e.signUp())}),f(2),g(3,"translate"),P(4,"div",23),c(),l(5,"button",24),M("click",function(){u(r);let e=b();return m(e.hasAnAccount=!0)}),f(6),g(7,"translate"),P(8,"div",23),c(),R()}if(i&2){let r=b();a(1),s("disabled",r.authForm.invalid),a(1),v(" ",h(3,3,"AUTH.FORM.BUTTONS.REGISTER_BUTTON")," "),a(4),v(" ",h(7,5,"AUTH.FORM.BUTTONS.HAVE_ACCOUNT_BUTTON")," ")}}function Pt(i,n){if(i&1){let r=x();U(0),l(1,"button",22),M("click",function(){u(r);let e=b();return m(e.signIn())}),f(2),g(3,"translate"),P(4,"div",23),c(),l(5,"button",24),M("click",function(){u(r);let e=b();return m(e.hasAnAccount=!1)}),f(6),g(7,"translate"),P(8,"div",23),c(),R()}if(i&2){let r=b(),t;a(1),s("disabled",((t=r.authForm.get("email"))==null?null:t.invalid)||((t=r.authForm.get("password"))==null?null:t.invalid)),a(1),v(" ",h(3,3,"AUTH.FORM.BUTTONS.LOGIN_BUTTON")," "),a(4),v(" ",h(7,5,"AUTH.FORM.BUTTONS.REGISTER_BUTTON")," ")}}var bt=(()=>{let n=class n{constructor(t,e,o,d,C){this.layoutManager=t,this.errorsManager=e,this.store=o,this.authApi=d,this.route=C,this.hasAnAccount=!1,this.invalidInputs={nameInput:!1,phoneInput:!1,emailInput:!1,passwordInput:!1},this.layoutManager.disableAllComponents()}ngOnInit(){this.createForm()}ngOnDestroy(){this.layoutManager.disableAllComponents()}createForm(){this.authForm=new nt({name:new T("",[O.required]),phone:new T("",[O.required]),email:new T("",[O.required,O.email,_t(ft.REGEX)]),password:new T("",[O.required])})}removeSpaces(t){(t.ctrlKey||t.metaKey)&&t.keyCode==86&&setTimeout(()=>{this.removeSpacesInEmailInput()},10)}removeSpacesInEmailInput(){let t=this.authForm.get("email");t&&t.setValue(t.value.replace(/\s+/g,""))}onChangeInput(){this.removeSpacesInEmailInput()}signUp(){if(this.authForm.valid){let t=this.authForm.value,e={name:t.name,email:t.email,phone:t.phone,password:t.password};this.authApi.signUp(e).subscribe({next:o=>this.manageSession(o),error:o=>this.errorsManager.manageError(o)})}}signIn(){let t=this.authForm.get("email"),e=this.authForm.get("password");if(t?.valid&&e?.valid){let o={email:t.value,password:e.value};this.authApi.signIn(o).subscribe({next:d=>this.manageSession(d),error:d=>{this.errorsManager.manageError(d)}})}}manageSession(t){let e=ht(t),o={name:e.name,email:e.email,phone:e.phone,role:e.role,accessToken:t};this.store.dispatch(st({authentication:o})),this.route.navigate(["home"])}};n.\u0275fac=function(e){return new(e||n)(w(pt),w(lt),w(W),w(Ct),w(J))},n.\u0275cmp=z({type:n,selectors:[["appNeo-auth"]],decls:29,vars:35,consts:[[1,"auth-container"],[1,"form-section"],[1,"form-container",3,"formGroup"],["class","input-container",4,"ngIf"],[1,"input-container"],[1,"p-float-label"],["type","text","pInputText","","id","emailInput","formControlName","email",1,"input-element",3,"ngClass","keydown","keyup","keydown.space","blur","focus","focusout","input"],["for","emailInput",1,"label-text",3,"ngClass"],["labelEmail",""],[1,"label-error","label-message",3,"ngStyle"],["type","password","pInputText","","id","passwordInput","formControlName","password",1,"input-element",3,"ngClass","blur","focus","focusout"],["password",""],["for","passwordInput",1,"label-text",3,"ngClass"],["labelName",""],[1,"buttons-actions-container"],[4,"ngIf"],["type","text","pInputText","","id","nameInput","formControlName","name",1,"input-element",3,"ngClass","blur","focus","focusout"],["firstName",""],["for","nameInput",1,"label-text",3,"ngClass"],["type","number","pInputText","","id","phoneInput","formControlName","phone",1,"input-element",3,"ngClass","blur","focus","focusout"],["phone",""],["for","phoneInput",1,"label-text",3,"ngClass"],["type","button",1,"p-button-rounded","btn-app_neo","btn-green-primary",3,"disabled","click"],[1,"btn-overlay"],["type","button",1,"p-button-rounded","btn-app_neo","btn-green-secondary",3,"click"]],template:function(e,o){if(e&1){let d=x();l(0,"section",0)(1,"section",1)(2,"form",2),y(3,xt,11,16,"div",3),l(4,"div",4)(5,"span",5)(6,"input",6),M("keydown",function(p){return o.removeSpaces(p)})("keyup",function(p){return o.removeSpaces(p)})("keydown.space",function(p){return p.preventDefault()})("blur",function(){let p;return(p=o.authForm.get("email"))!=null&&p.invalid?o.invalidInputs.emailInput=!0:o.invalidInputs.emailInput=!1})("focus",function(){u(d);let p=I(8);return m(p.classList.add("label-focus"))})("focusout",function(){u(d);let p=I(8);return m(p.classList.remove("label-focus"))})("input",function(){return o.onChangeInput()}),c(),l(7,"label",7,8),f(9),g(10,"translate"),c(),l(11,"span",9),f(12),g(13,"translate"),c()()(),y(14,Ot,11,15,"div",3),l(15,"div",4)(16,"span",5)(17,"input",10,11),M("blur",function(){let p;return(p=o.authForm.get("password"))!=null&&p.invalid?o.invalidInputs.passwordInput=!0:o.invalidInputs.passwordInput=!1})("focus",function(){u(d);let p=I(20);return m(p.classList.add("label-focus"))})("focusout",function(){u(d);let p=I(20);return m(p.classList.remove("label-focus"))}),c(),l(19,"label",12,13),f(21),g(22,"translate"),c(),l(23,"span",9),f(24),g(25,"translate"),c()()(),l(26,"section",14),y(27,yt,9,7,"ng-container",15),y(28,Pt,9,7,"ng-container",15),c()()()()}e&2&&(a(2),s("formGroup",o.authForm),a(1),s("ngIf",!o.hasAnAccount),a(3),s("ngClass",_(23,F,o.invalidInputs.emailInput)),a(1),s("ngClass",_(25,V,o.invalidInputs.emailInput)),a(2),v("",h(10,15,"AUTH.FORM.EMAIL"),"*"),a(2),s("ngStyle",_(27,k,o.invalidInputs.emailInput?"visible":"hidden")),a(1),q(h(13,17,"AUTH.FORM.EMPTY_INPUT.EMAIL")),a(2),s("ngIf",!o.hasAnAccount),a(3),s("ngClass",_(29,F,o.invalidInputs.passwordInput)),a(2),s("ngClass",_(31,V,o.invalidInputs.passwordInput)),a(2),v(" ",h(22,19,"AUTH.FORM.PASSWORD")," "),a(2),s("ngStyle",_(33,k,o.invalidInputs.passwordInput?"visible":"hidden")),a(1),v("",h(25,21,"AUTH.FORM.EMPTY_INPUT.EMPTY")," "),a(3),s("ngIf",!o.hasAnAccount),a(1),s("ngIf",o.hasAnAccount))},dependencies:[Y,$,K,ut,it,Q,ot,tt,et,rt,at,mt],styles:["button[_ngcontent-%COMP%]{cursor:pointer!important;position:relative!important;letter-spacing:.8px!important}button[_ngcontent-%COMP%]:disabled{background-color:#c1c5cc!important;color:#fff!important;border:none;cursor:not-allowed!important}button[_ngcontent-%COMP%]:hover:not([disabled])   .btn-overlay[_ngcontent-%COMP%]{display:block!important}button[_ngcontent-%COMP%]:hover:not([disabled])   .btn-overlay-default[_ngcontent-%COMP%]{display:block!important}.btn-app_neo[_ngcontent-%COMP%]{border:none;padding:10px 0;line-height:20px;font-style:normal;font-weight:600;font-size:16px;border-radius:100px}.btn-overlay[_ngcontent-%COMP%]{display:none;position:absolute;width:100%;height:100%;inset:0;background-color:#0000001a;border-radius:100px;z-index:2}.btn-overlay-default[_ngcontent-%COMP%]{display:none;position:absolute;width:100%;height:100%;inset:0;background-color:#0000001a;border-radius:5px;z-index:2}.btn-green-primary[_ngcontent-%COMP%]{background-color:#3096fc;color:#fff}.btn-green-secondary[_ngcontent-%COMP%]{background-color:#a0d0eb;color:#3096fc}.btn-gray-primary[_ngcontent-%COMP%]{background-color:#47495e;color:#fff}.auth-container[_ngcontent-%COMP%]{width:100vw;height:100vh;background-color:#4d99b8;display:flex;justify-content:center;align-items:center}.auth-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{background-color:#b9b1b1;padding:2em 1em 1em;width:350px;border-radius:5px;display:flex;justify-content:center}.auth-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;row-gap:17px}.auth-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{height:88px;display:flex;align-items:flex-end}.auth-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .p-float-label[_ngcontent-%COMP%]{width:100%}.auth-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .p-float-label[_ngcontent-%COMP%]   .input-element[_ngcontent-%COMP%]{height:64px;width:100%;border:1px solid rgba(0,0,0,.08);border-radius:10px}.auth-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .p-float-label[_ngcontent-%COMP%]   .input-element[_ngcontent-%COMP%]:focus{border:2px solid #3096fc;outline:none;box-shadow:none}.auth-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .p-float-label[_ngcontent-%COMP%]   .invalid-input[_ngcontent-%COMP%]{border:2px solid #f95f5f}.auth-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .p-float-label[_ngcontent-%COMP%]   .label-text[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:20px;color:#6a696e}.auth-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .p-float-label[_ngcontent-%COMP%]   .label-focus[_ngcontent-%COMP%]{font-size:14px;line-height:16px}.auth-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .p-float-label[_ngcontent-%COMP%]   .label-error[_ngcontent-%COMP%]{color:#f95f5f}.auth-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .p-float-label[_ngcontent-%COMP%]   .label-message[_ngcontent-%COMP%]{margin-top:4px;margin-left:16px;font-style:normal;font-weight:400;font-size:12px;line-height:14px}.auth-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .buttons-actions-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:16px}"]});let i=n;return i})();var Tt=[{path:"",component:bt}],vt=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=E({type:n}),n.\u0275inj=A({imports:[B.forChild(Tt),B]});let i=n;return i})();var ee=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=E({type:n}),n.\u0275inj=A({imports:[X,vt,dt]});let i=n;return i})();export{ee as AuthModule};