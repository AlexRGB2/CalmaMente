import{a as B}from"./chunk-5SWLIOPN.js";import"./chunk-UEVRKIQP.js";import{D as N,E as P,I as E,J as O,K as j,L as D,M as T,X as w,ia as q,l as S,o as k,x as I}from"./chunk-R7H7OIXP.js";import{Bb as h,Cb as C,Hb as v,Jb as x,Mc as F,Qc as M,Ta as s,Tb as c,Ua as f,Ub as _,Y as d,fa as y,ga as u,mb as g,ob as l,yb as a,zb as r}from"./chunk-LQB4XSM4.js";import"./chunk-EQDQRRRY.js";function R(n,e){if(n&1&&(h(0),a(1,"div")(2,"mat-checkbox",13),c(3),r()(),C()),n&2){let p=e.$implicit,i=e.index;s(2),l("formControlName",i+1),s(),_(p)}}function $(n,e){if(n&1&&(h(0),a(1,"div")(2,"mat-checkbox",13),c(3),r()(),C()),n&2){let p=e.$implicit,i=e.index,t=x();s(2),l("formControlName",i+t.columnas.length/2),s(),_(p)}}var A=(()=>{let e=class e{constructor(i,t){this.formBuilder=i,this.formularioService=t,this.columnas=[],this.columnas=["Nivel de Ansiedad","Sensacion de agobio de angustia","Sensacion de inquietud nervios intranquilidad","Corazon acelerado o palpitaciones","Sensacion de fatiga","Problemas para descansar y para dormir","Tension muscular o dolores en algunas partes del cuerpo","Presion en el pecho sensacion de ahogo o de que cuesta respirar","Dolor de tripa nauseas o vomitos","Problemas de concentracion incluso en tareas sencillas","Incapacidad de pensar claramente o bloqueo mental","Pensamientos anticipatorios negativos o catastroficos","Faltas de memoria te cuesta recordar cosas","Inseguridad a la hora de tomar decisiones incluso simples","Pensamientos rumiativos le das muchas vueltas a las cosas","Fumar o beber mas de lo habitual","Evitar determinadas situaciones","Cambios en el apetito","Cambios en la conducta sexual","Llorar mas de lo habitual","Cambios de humor irritabilidad","Puntaje Total"];let o=this.columnas.reduce((m,b,V)=>(m[V+1]=!1,m),{});this.columnasForm=this.formBuilder.group(o)}toggleSelectAll(i){let t=i.checked,o=this.columnasForm.controls;for(let m in o)o.hasOwnProperty(m)&&o[m].setValue(t)}getSelectedColumns(){let i=[],t=this.columnasForm.controls;for(let o=1;o<=Object.keys(t).length;o++)t[o].value&&i.push(this.columnas[o-1]);return i}onSubmit(){let t={columnas:this.getSelectedColumns().join(", ")};console.log(t),this.formularioService.descargarCSV(t)}};e.\u0275fac=function(t){return new(t||e)(f(j),f(B))},e.\u0275cmp=y({type:e,selectors:[["app-dataset"]],decls:18,vars:3,consts:[[1,"container"],[1,"example-section",3,"formGroup"],[1,"cont","mb-5","animate__animated","animate__fadeInUp"],[1,"fs-1"],["mat-flat-button","",1,"fs-5","p-4","ms-5",3,"click"],[1,"fs-4"],[1,"row","animate__animated","animate__lightSpeedInLeft"],[1,"col-8"],[3,"change"],[1,"row"],[1,"col-md-8","col-sm-12","animate__animated","animate__lightSpeedInLeft"],[4,"ngFor","ngForOf"],[1,"col-md-4","col-sm-12","animate__animated","animate__lightSpeedInRight"],[3,"formControlName"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"section",1)(2,"div",2)(3,"h4",3),c(4,"Selecciona las columnas del Set de Datos:"),r(),a(5,"button",4),v("click",function(){return o.onSubmit()}),a(6,"mat-icon",5),c(7,"download"),r(),c(8," Descargar CSV "),r()(),a(9,"div",6)(10,"div",7)(11,"mat-checkbox",8),v("change",function(b){return o.toggleSelectAll(b)}),c(12," Seleccionar Todo "),r()()(),a(13,"div",9)(14,"div",10),g(15,R,4,2,"ng-container",11),r(),a(16,"div",12),g(17,$,4,2,"ng-container",11),r()()()()),t&2&&(s(),l("formGroup",o.columnasForm),s(14),l("ngForOf",o.columnas.slice(0,o.columnas.length/2)),s(2),l("ngForOf",o.columnas.slice(o.columnas.length/2,o.columnas.length)))},dependencies:[F,I,k,w,N,P,E,O],styles:[".container[_ngcontent-%COMP%]{margin-top:5vh;margin-bottom:5vh;display:flex;justify-content:center;align-items:center}.example-section[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{display:block;margin-bottom:20px}.cont[_ngcontent-%COMP%]{display:flex}mat-checkbox[_ngcontent-%COMP%]{transform:scale(1.3)}"]});let n=e;return n})();var z=[{path:"",component:A}],L=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({imports:[S.forChild(z),S]});let n=e;return n})();var se=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({imports:[M,L,q,D,T]});let n=e;return n})();export{se as DatasetModule};
