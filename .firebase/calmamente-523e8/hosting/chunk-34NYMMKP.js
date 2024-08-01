import{a as nt}from"./chunk-QOSEIIAE.js";import{a as st}from"./chunk-XH2HNU42.js";import{a as dt}from"./chunk-UEVRKIQP.js";import{a as it,b as at}from"./chunk-6L7K4AX2.js";import"./chunk-TME7DGTR.js";import{$ as X,Y as q,_ as U,aa as G,ba as K,ca as Q,da as W,ea as Y,fa as Z,ga as tt,ha as et,ia as ot,j as H,k as F,l as P,o as z,p as J,x as L}from"./chunk-R7H7OIXP.js";import{$b as O,Ab as D,Bb as C,Cb as g,Eb as T,Hb as M,Jb as _,Nc as R,Pc as j,Qc as $,Sb as k,Ta as d,Tb as m,Ua as E,Ub as y,Vb as w,Y as S,bc as B,cc as N,fa as I,ga as v,mb as p,oa as b,ob as x,pa as h,tb as V,yb as i,zb as r}from"./chunk-LQB4XSM4.js";import"./chunk-QMQTSFHS.js";import"./chunk-FK6H3RFT.js";import{e as A}from"./chunk-EQDQRRRY.js";var f=A(st()),lt=A(dt());function pt(t,e){t&1&&(i(0,"th",18),m(1,"Tipo"),r())}function _t(t,e){if(t&1&&(i(0,"td",19),m(1),r()),t&2){let a=e.$implicit;d(),w(" ",a.tipo," ")}}function ft(t,e){t&1&&(i(0,"th",18),m(1,"Nombre"),r())}function ut(t,e){if(t&1&&(i(0,"td",19),m(1),r()),t&2){let a=e.$implicit;d(),y(a.nombre)}}function Ct(t,e){t&1&&(i(0,"th",18),m(1,"Fecha de Creaci\xF3n"),r())}function gt(t,e){if(t&1&&(i(0,"td",19),m(1),O(2,"date"),r()),t&2){let a=e.$implicit;d(),w(" ",B(2,1,a.created_at,"longDate")," ")}}function bt(t,e){t&1&&(i(0,"th",18),m(1,"Parametros"),r())}function ht(t,e){if(t&1&&(i(0,"td",20),m(1),r()),t&2){let a=e.$implicit;d(),w(" ",a.parametros," ")}}function Mt(t,e){t&1&&(i(0,"th",18),m(1,"Acciones"),r())}function xt(t,e){if(t&1){let a=T();i(0,"button",28),M("click",function(){b(a);let o=_().$implicit,l=_(2);return h(l.setDefault(o.id))}),i(1,"mat-icon"),m(2,"check"),r()()}}function St(t,e){t&1&&(i(0,"button",27)(1,"mat-icon"),m(2,"check"),r()())}function vt(t,e){if(t&1){let a=T();i(0,"td",21)(1,"button",22),M("click",function(){let o=b(a).$implicit,l=_(2);return h(l.getStats(o.id))}),i(2,"mat-icon"),m(3,"equalizer"),r()(),i(4,"button",23),M("click",function(){let o=b(a).$implicit,l=_(2);return h(l.deleteModel(o.id,o.nombre,o.principal))}),i(5,"mat-icon"),m(6,"delete"),r()(),i(7,"button",24),M("click",function(){let o=b(a).$implicit,l=_(2);return h(l.getColumnas(o.id))}),i(8,"mat-icon"),m(9,"assignment"),r()(),i(10,"button",25)(11,"mat-icon"),m(12,"download"),r()(),p(13,xt,3,0,"button",26)(14,St,3,0,"button",27),r()}if(t&2){let a=e.$implicit;d(13),V(a.principal?14:13)}}function Tt(t,e){t&1&&D(0,"tr",29)}function wt(t,e){t&1&&D(0,"tr",30)}function Et(t,e){if(t&1&&(C(0),i(1,"div",2)(2,"button",3)(3,"mat-icon"),m(4,"add_circle"),r(),i(5,"p",4),m(6,"Nuevo Modelo"),r()(),i(7,"div",5)(8,"table",6),C(9,7),p(10,pt,2,0,"th",8)(11,_t,2,1,"td",9),g(),C(12,10),p(13,ft,2,0,"th",8)(14,ut,2,1,"td",9),g(),C(15,11),p(16,Ct,2,0,"th",8)(17,gt,3,4,"td",9),g(),C(18,12),p(19,bt,2,0,"th",8)(20,ht,2,1,"td",13),g(),C(21,14),p(22,Mt,2,0,"th",8)(23,vt,15,1,"td",15),g(),p(24,Tt,1,0,"tr",16)(25,wt,1,0,"tr",17),r()()(),g()),t&2){let a=_();d(8),x("dataSource",a.modelos),d(16),x("matHeaderRowDef",a.displayedColumns),d(),x("matRowDefColumns",a.displayedColumns)}}function Dt(t,e){if(t&1){let a=T();i(0,"app-charts-model",31),M("isVisibleChart",function(o){b(a);let l=_();return h(l.onVisibleCharts(o))}),r()}}var mt=(()=>{let e=class e{constructor(n,o){this.modelosService=n,this.router=o,this.modelos=[],this.displayedColumns=["tipo","nombre","fecha de creaci\xF3n","parametros","acciones"],this.isVisibleChart=!1,this.idModel=0}ngOnInit(){this.obtenerModelos()}deleteModel(n,o,l){l?f.default.fire({title:"Advertencia",text:"No puedes eliminar el modelo Default.",icon:"info"}):f.default.fire({title:"\xA1Cuidado!",text:`\xBFEstas seguro de eliminar ${o}?`,icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminar!",cancelButtonText:"No",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33"}).then(c=>{c.isConfirmed&&this.modelosService.deleteModel(n).subscribe(s=>{s.mensaje?(f.default.fire({title:s.mensaje,icon:"success"}),this.obtenerModelos()):f.default.fire({title:s.error,icon:"error"})})})}obtenerModelos(){this.modelosService.getModels().subscribe({next:n=>{this.modelos=n},error:n=>console.error("Error al obtener los modelos:",n)})}setDefault(n){this.modelosService.setDefaultModel(n).subscribe(o=>{o.mensaje?(f.default.fire({title:o.mensaje,icon:"success"}),this.obtenerModelos()):f.default.fire({title:o.error,icon:"error"})})}getStats(n){this.modelosService.getStats(n).subscribe(o=>{let l=o.datos.find(u=>u.tipo==="2.1"),c=o.datos.find(u=>u.tipo==="2.2"),s=o.datos.find(u=>u.tipo==="2.3");if(l&&s&&c){let u={nombre:l.nombre,valor:l.valor};localStorage.setItem(l.tipo,JSON.stringify(u)),localStorage.setItem(c.tipo,JSON.stringify({nombre:c.nombre,valor:c.valor})),localStorage.setItem(s.tipo,JSON.stringify({nombre:s.nombre,valor:s.valor})),this.isVisibleChart=!0}else console.log("No se encontr\xF3 un objeto con el tipo '2.1'")})}onVisibleCharts(n){this.isVisibleChart=n}downModel(n,o){f.default.fire({title:"\xA1Cuidado!",text:`\xBFEstas seguro de descargar el modelo ${o}?`,icon:"warning",showCancelButton:!0,confirmButtonText:"Si, descargar!",cancelButtonText:"No",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33"}).then(l=>{l.isConfirmed&&this.modelosService.downModel(n).subscribe(c=>{let s=new Blob([c],{type:"application/octet-stream"});(0,lt.default)(s,o+".pkl")},c=>{console.error("Error al descargar el modelo:",c)})})}getColumnas(n){this.modelosService.getColumnas(n).subscribe(o=>{localStorage.setItem("columnas",o.columnas.toString()),this.router.navigate(["test-model"])},o=>{console.error("Error al descargar el modelo:",o)})}};e.\u0275fac=function(o){return new(o||e)(E(nt),E(H))},e.\u0275cmp=I({type:e,selectors:[["app-admin-models"]],decls:3,vars:2,consts:[["charts",""],[4,"ngIf","ngIfElse"],[1,"contenedor"],["mat-flat-button","","routerLink","newModel",1,"fs-5","p-4","mb-4","animate__animated","animate__flipInX"],[1,"p-2","mt-3"],[1,"table-container","animate__animated","animate__fadeInUp"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","tipo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","fecha de creaci\xF3n"],["matColumnDef","parametros"],["mat-cell","","class","parametros",4,"matCellDef"],["matColumnDef","acciones"],["mat-cell","","class","p-4",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"parametros"],["mat-cell","",1,"p-4"],["mat-icon-button","","matTooltip","Resultados de Entrenamiento","matTooltipPosition","above","matTooltipClass","custom-tooltip",1,"graficas","mx-2",3,"click"],["mat-icon-button","","matTooltip","Eliminar modelo","matTooltipPosition","above","matTooltipClass","custom-tooltip",1,"eliminar","mx-2",3,"click"],["mat-icon-button","","matTooltip","Probar Modelo","matTooltipPosition","above","matTooltipClass","custom-tooltip",1,"mx-2",3,"click"],["mat-icon-button","","matTooltip","Descargar Modelo","matTooltipPosition","above","matTooltipClass","custom-tooltip",1,"downModelo","mx-2"],["mat-icon-button","","matTooltip","Definir Principal","matTooltipPosition","above","matTooltipClass","custom-tooltip",1,"mx-2"],["mat-icon-button","","matTooltip","Modelo Principal","matTooltipPosition","above","matTooltipClass","custom-tooltip",1,"principal","mx-2"],["mat-icon-button","","matTooltip","Definir Principal","matTooltipPosition","above","matTooltipClass","custom-tooltip",1,"mx-2",3,"click"],["mat-header-row",""],["mat-row",""],[3,"isVisibleChart"]],template:function(o,l){if(o&1&&p(0,Et,26,3,"ng-container",1)(1,Dt,1,0,"ng-template",null,0,N),o&2){let c=k(2);x("ngIf",!l.isVisibleChart)("ngIfElse",c)}},dependencies:[R,F,L,z,J,q,U,G,Y,K,X,Z,Q,W,tt,et,it,j],styles:[".contenedor[_ngcontent-%COMP%]{padding:5vh;height:85vh}.table-container[_ngcontent-%COMP%]{position:relative;max-height:65vh;overflow:auto}.parametros[_ngcontent-%COMP%]{max-width:20vw;overflow:auto;word-wrap:break-word}.contenedor[_ngcontent-%COMP%]   button.principal[_ngcontent-%COMP%]{background-color:#00ffff6b}.contenedor[_ngcontent-%COMP%]   button.eliminar[_ngcontent-%COMP%]{color:#e63946}.contenedor[_ngcontent-%COMP%]   button.graficas[_ngcontent-%COMP%]{color:#80ed99}.contenedor[_ngcontent-%COMP%]   button.downModelo[_ngcontent-%COMP%]{color:#07bebe}  .custom-tooltip{transform:scale(1.6)!important;position:relative!important}mat-icon[_ngcontent-%COMP%]{transform:scale(1.8)}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{font-size:20px}"]});let t=e;return t})();var Pt=[{path:"",component:mt}],ct=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=v({type:e}),e.\u0275inj=S({imports:[P.forChild(Pt),P]});let t=e;return t})();var Xt=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=v({type:e}),e.\u0275inj=S({imports:[$,ct,ot,at]});let t=e;return t})();export{Xt as AdminModelsModule};
