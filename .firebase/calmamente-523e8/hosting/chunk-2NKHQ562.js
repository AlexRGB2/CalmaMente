import{a as oe}from"./chunk-QOSEIIAE.js";import{a as se}from"./chunk-XH2HNU42.js";import{B as P,C as p,D as W,E as U,F as z,G as H,H as J,I as K,J as Q,K as X,L as Y,M as Z,Q as $,S as ee,T as te,Z as ie,ia as ne,k as B,l as N,n as L,o as O,x as R}from"./chunk-R7H7OIXP.js";import{Ab as c,Eb as E,Hb as f,Jb as u,Nc as D,Qc as G,Sb as y,Ta as a,Tb as m,Ua as w,Ub as V,Wb as T,Xb as j,Y as b,Yb as q,fa as A,ga as x,mb as v,oa as g,ob as d,pa as h,tb as S,ub as k,wb as F,xb as I,yb as n,zb as e}from"./chunk-LQB4XSM4.js";import{e as de}from"./chunk-EQDQRRRY.js";var C=de(se());function ce(o,i){if(o&1&&(n(0,"mat-option",8),m(1),e()),o&2){let r=i.$implicit;d("value",r),a(),V(r)}}function pe(o,i){o&1&&(n(0,"mat-label",21),m(1,"Archivo Cargado"),e())}function fe(o,i){if(o&1){let r=E();n(0,"form",13)(1,"div",4)(2,"div",5)(3,"mat-form-field",14)(4,"mat-label"),m(5,"n_clusters"),e(),c(6,"input",15),e()(),n(7,"div",5)(8,"mat-form-field",14)(9,"mat-label"),m(10,"random_state"),e(),c(11,"input",16),e()(),n(12,"div",5)(13,"mat-form-field",14)(14,"mat-label"),m(15,"n_init"),e(),c(16,"input",17),e()(),n(17,"div",5)(18,"mat-form-field",14)(19,"mat-label"),m(20,"max_iter"),e(),c(21,"input",18),e()()(),n(22,"div",19)(23,"div",5)(24,"button",20),f("click",function(){g(r);let t=y(30);return h(t.click())}),n(25,"mat-icon"),m(26,"upload"),e(),m(27," Subir Set de Datos "),e(),v(28,pe,2,0,"mat-label",21),n(29,"input",22,0),f("change",function(){g(r);let t=u(2);return h(t.onFileSelected())}),e()(),n(31,"div",23)(32,"button",24),f("click",function(){g(r);let t=u(2);return h(t.newModel())}),n(33,"mat-icon"),m(34,"dynamic_form"),e(),m(35," Entrenar Nuevo Modelo "),e()()()()}if(o&2){let r=u(2);d("formGroup",r.kmeansForm),a(28),S(r.dataset?28:-1),a(4),d("disabled",!r.kmeansForm.valid||!(r.nombreAlgoritmo.length>0)||!r.dataset)}}function ue(o,i){o&1&&(n(0,"mat-label",21),m(1,"Archivo Cargado"),e())}function _e(o,i){if(o&1){let r=E();n(0,"form",13)(1,"div",4)(2,"div",5)(3,"mat-form-field",14)(4,"mat-label"),m(5,"n_components"),e(),c(6,"input",25),e()(),n(7,"div",5)(8,"mat-form-field",14)(9,"mat-label"),m(10,"random_state"),e(),c(11,"input",16),e()(),n(12,"div",5)(13,"mat-form-field",14)(14,"mat-label"),m(15,"n_init"),e(),c(16,"input",17),e()(),n(17,"div",5)(18,"mat-form-field",14)(19,"mat-label"),m(20,"max_iter"),e(),c(21,"input",18),e()()(),n(22,"div",19)(23,"div",5)(24,"button",20),f("click",function(){g(r);let t=y(30);return h(t.click())}),n(25,"mat-icon"),m(26,"upload"),e(),m(27," Subir Set de Datos "),e(),v(28,ue,2,0,"mat-label",21),n(29,"input",22,0),f("change",function(){g(r);let t=u(2);return h(t.onFileSelected())}),e()(),n(31,"div",23)(32,"button",24),f("click",function(){g(r);let t=u(2);return h(t.newModel())}),n(33,"mat-icon"),m(34,"dynamic_form"),e(),m(35," Entrenar Nuevo Modelo "),e()()()()}if(o&2){let r=u(2);d("formGroup",r.gaussForm),a(28),S(r.dataset?28:-1),a(4),d("disabled",!r.gaussForm.valid||!(r.nombreAlgoritmo.length>0)||!r.dataset)}}function ge(o,i){if(o&1&&(n(0,"div"),v(1,fe,36,3,"form",12)(2,_e,36,3,"form",12),e()),o&2){let r=u();a(),d("ngIf",r.selectedAlgorithm==="kmeans"),a(),d("ngIf",r.selectedAlgorithm==="gauss")}}var me=(()=>{let i=class i{constructor(l,t){this.fb=l,this.modelsService=t,this.tipoModelos=["kmeans","gauss"],this.selectedAlgorithm="kmeans",this.nombreAlgoritmo="",this.kmeansForm=this.fb.group({n_clusters:[4,p.required],random_state:[42,p.required],n_init:[10,p.required],max_iter:[3e3,p.required]}),this.gaussForm=this.fb.group({n_components:[4,p.required],random_state:[42,p.required],n_init:[1,p.required],max_iter:[3e3,p.required]})}onFileSelected(){let l=document.querySelector("#file");if(typeof FileReader<"u"){let t=new FileReader;t.onload=s=>{let M=btoa(new Uint8Array(s.target.result).reduce((_,ae)=>_+String.fromCharCode(ae),""));this.dataset={fileName:l.files[0].name,fileType:l.files[0].type,fileContent:M}},t.readAsArrayBuffer(l.files[0])}}onAlgorithmChange(l){this.selectedAlgorithm=l.value}newModel(){let l;this.selectedAlgorithm=="kmeans"?l={tipo:this.selectedAlgorithm,nombre:this.nombreAlgoritmo,parametros:this.kmeansForm.value,dataset:this.dataset||{}}:l={tipo:this.selectedAlgorithm,nombre:this.nombreAlgoritmo,parametros:this.gaussForm.value,dataset:this.dataset||{}},this.modelsService.newModel(l).subscribe(t=>{t.mensaje?(C.default.fire({title:t.mensaje,icon:"success"}),this.dataset=void 0,this.nombreAlgoritmo=""):C.default.fire({title:t.error,icon:"error"})},t=>{C.default.fire({title:"Error",text:t.error,icon:"error"})})}};i.\u0275fac=function(t){return new(t||i)(w(X),w(oe))},i.\u0275cmp=A({type:i,selectors:[["app-new-model"]],decls:23,vars:3,consts:[["fileInput",""],[1,"container","p-5"],[1,"mt-3"],["mat-flat-button","","routerLink","/adminModels",1,"fs-4","p-4","mb-5"],[1,"row"],[1,"col-3"],[1,"full-width"],[3,"selectionChange","value"],[3,"value"],["matInput","","type","text",3,"ngModelChange","ngModel"],[1,"mt-4"],[4,"ngIf"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],["appearance","fill",1,"full-width"],["matInput","","formControlName","n_clusters","type","number"],["matInput","","formControlName","random_state","type","number"],["matInput","","formControlName","n_init","type","number"],["matInput","","formControlName","max_iter","type","number"],[1,"row","mt-4"],["type","button","mat-flat-button","",1,"fs-4","p-4",3,"click"],[1,"fs-5","ms-5","link-success"],["hidden","","type","file","id","file",3,"change"],[1,"col-4"],["type","button","mat-flat-button","",1,"fs-4","p-4",3,"click","disabled"],["matInput","","formControlName","n_components","type","number"]],template:function(t,s){t&1&&(n(0,"div",1)(1,"div",2)(2,"button",3)(3,"mat-icon"),m(4,"arrow_back"),e(),m(5," Volver "),e(),n(6,"div",4)(7,"div",5)(8,"h4"),m(9,"Tipo de Algoritmo"),e(),n(10,"mat-form-field",6)(11,"mat-select",7),f("selectionChange",function(_){return s.onAlgorithmChange(_)}),F(12,ce,2,2,"mat-option",8,k),e()()(),n(14,"div",5)(15,"h4"),m(16,"Nombre"),e(),n(17,"mat-form-field",6)(18,"input",9),q("ngModelChange",function(_){return j(s.nombreAlgoritmo,_)||(s.nombreAlgoritmo=_),_}),e()()()(),n(19,"div",10)(20,"h4"),m(21,"Opciones del algoritmo"),e(),v(22,ge,3,2,"div",11),e()()()),t&2&&(a(11),d("value",s.selectedAlgorithm),a(),I(s.tipoModelos),a(6),T("ngModel",s.nombreAlgoritmo),a(4),d("ngIf",s.selectedAlgorithm))},dependencies:[D,B,R,O,te,ee,$,ie,L,H,P,J,W,U,z,K,Q],styles:[".container[_ngcontent-%COMP%]{height:85vh}mat-icon[_ngcontent-%COMP%]{transform:scale(1.5)}"]});let o=i;return o})();var he=[{path:"",component:me}],le=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=x({type:i}),i.\u0275inj=b({imports:[N.forChild(he),N]});let o=i;return o})();var Le=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=x({type:i}),i.\u0275inj=b({imports:[G,le,ne,Y,Z]});let o=i;return o})();export{Le as NewModelModule};