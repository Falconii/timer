"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[35],{6035:(K,g,r)=>{r.r(g),r.d(g,{AgendaCoordenadorModule:()=>k});var m=r(8583),h=r(4655),v=r(3639),Z=r(6468),A=r(8673),p=r(4453),_=r(7265),T=r(3563),C=r(141),a=r(7716),c=r(3679),D=r(1209),x=r(1843),y=r(4590),w=r(789),S=r(2522),b=r(1095),J=r(1436),N=r(6627),f=r(8295),q=r(7441),V=r(2458),Q=r(7094),U=r(850);function M(t,l){if(1&t&&(a.TgZ(0,"mat-option",13),a._uU(1),a.qZA()),2&t){const e=l.$implicit;a.Q6J("value",e.id),a.xp6(1),a.hij(" ",e.razao," ")}}function O(t,l){if(1&t&&(a.TgZ(0,"mat-option",13),a._uU(1),a.qZA()),2&t){const e=l.$implicit;a.Q6J("value",e.id),a.xp6(1),a.hij(" ",e.razao," ")}}function j(t,l){if(1&t&&(a.TgZ(0,"mat-option",13),a._uU(1),a.qZA()),2&t){const e=l.$implicit;a.Q6J("value",e),a.xp6(1),a.hij(" ",e," ")}}function E(t,l){if(1&t&&(a.TgZ(0,"mat-option",13),a._uU(1),a.qZA()),2&t){const e=l.$implicit;a.Q6J("value",e.nro),a.xp6(1),a.hij(" ",e.nome," ")}}function F(t,l){1&t&&(a.TgZ(0,"div"),a.TgZ(1,"div",14),a.TgZ(2,"mat-label",15),a._uU(3,"DOM"),a.qZA(),a.TgZ(4,"mat-label",16),a._uU(5,"SEG"),a.qZA(),a.TgZ(6,"mat-label",16),a._uU(7,"TER"),a.qZA(),a.TgZ(8,"mat-label",16),a._uU(9,"QUA"),a.qZA(),a.TgZ(10,"mat-label",16),a._uU(11,"QUI"),a.qZA(),a.TgZ(12,"mat-label",16),a._uU(13,"SEX"),a.qZA(),a.TgZ(14,"mat-label",16),a._uU(15,"SAB"),a.qZA(),a.qZA(),a.qZA())}function Y(t,l){if(1&t){const e=a.EpF();a.TgZ(0,"div",14),a.TgZ(1,"div",15),a.TgZ(2,"app-cel-calendar",18),a.NdJ("onClickDay",function(n){return a.CHM(e),a.oxw(2).onDay(n)}),a.qZA(),a.qZA(),a.TgZ(3,"div",19),a.TgZ(4,"app-cel-calendar",18),a.NdJ("onClickDay",function(n){return a.CHM(e),a.oxw(2).onDay(n)}),a.qZA(),a.qZA(),a.TgZ(5,"div",19),a.TgZ(6,"app-cel-calendar",18),a.NdJ("onClickDay",function(n){return a.CHM(e),a.oxw(2).onDay(n)}),a.qZA(),a.qZA(),a.TgZ(7,"div",19),a.TgZ(8,"app-cel-calendar",18),a.NdJ("onClickDay",function(n){return a.CHM(e),a.oxw(2).onDay(n)}),a.qZA(),a.qZA(),a.TgZ(9,"div",19),a.TgZ(10,"app-cel-calendar",18),a.NdJ("onClickDay",function(n){return a.CHM(e),a.oxw(2).onDay(n)}),a.qZA(),a.qZA(),a.TgZ(11,"div",19),a.TgZ(12,"app-cel-calendar",18),a.NdJ("onClickDay",function(n){return a.CHM(e),a.oxw(2).onDay(n)}),a.qZA(),a.qZA(),a.TgZ(13,"div",19),a.TgZ(14,"app-cel-calendar",18),a.NdJ("onClickDay",function(n){return a.CHM(e),a.oxw(2).onDay(n)}),a.qZA(),a.qZA(),a.qZA()}if(2&t){const e=l.$implicit;a.xp6(2),a.Q6J("celula",e.line[0]),a.xp6(2),a.Q6J("celula",e.line[1]),a.xp6(2),a.Q6J("celula",e.line[2]),a.xp6(2),a.Q6J("celula",e.line[3]),a.xp6(2),a.Q6J("celula",e.line[4]),a.xp6(2),a.Q6J("celula",e.line[5]),a.xp6(2),a.Q6J("celula",e.line[6])}}function B(t,l){if(1&t&&(a.TgZ(0,"div"),a.YNc(1,Y,15,7,"div",17),a.qZA()),2&t){const e=a.oxw();a.xp6(1),a.Q6J("ngForOf",e.linhas)}}function $(t,l){1&t&&a._UZ(0,"app-cel-apontamentos")}const R=[{path:"",redirectTo:"agendacoordenador",pathMatch:"full"},{path:"agendacoordenador",component:(()=>{class t{constructor(e,i,n,d,s,o){this.usuariosService=i,this.projetosService=n,this.globalService=d,this.router=s,this.appSnackBar=o,this.coordenador=0,this.coordenadores=[],this.auditor=0,this.auditores=[],this.agendas=[],this.calendario=[],this.linhas=[],this.anos=[2022,2023,2024],this.meses=new _.Y,this.hoje=new Date,this.showLancamento=!1,this.celulaDia=new p.N,this.durationInSeconds=2,this.parametro=e.group({coordenadores:[{value:""}],auditores:[{value:""}],ano:[{value:""}],mes:[{value:""}]}),this.getCoordenadores(),this.getAuditores(),this.setParametro()}ngOnInit(){}ngOnDestroy(){var e,i,n;null===(e=this.inscricaoAuditor)||void 0===e||e.unsubscribe(),null===(i=this.inscricaoCoordenador)||void 0===i||i.unsubscribe(),null===(n=this.inscricaoAgenda)||void 0===n||n.unsubscribe()}onSubmit(){this.coordenador=this.parametro.value.coordenadores,this.auditor=this.parametro.value.auditores,this.celulaDia=new p.N,this.showLancamento=!0,this.globalService.setRefreshLan\u00e7amentos(this.celulaDia),this.getAgenda()}setParametro(){this.parametro.setValue({coordenadores:this.coordenador,auditores:this.auditor,ano:this.hoje.getFullYear(),mes:this.hoje.getMonth()})}getCoordenadores(){const e=new Z.w;e.id_empresa=this.globalService.id_empresa;const i=this.usuariosService.getGruposDiretoria(),n=this.usuariosService.getGruposCoordenador(),d=this.usuariosService.getGruposAuditor();e.id_empresa=this.globalService.id_empresa,i.forEach(s=>{e.grupo.push(s)}),n.forEach(s=>{e.grupo.push(s)}),d.forEach(s=>{e.grupo.push(s)}),e.orderby="Raz\xe3o",this.inscricaoCoordenador=this.usuariosService.getusuarios_01(e).subscribe(s=>{this.coordenador=0;const o=new v.j;o.id=0,o.razao="TODOS",this.coordenadores.push(o),s.forEach(u=>{this.coordenadores.push(u)}),this.parametro.patchValue({coordenadores:this.coordenador})},s=>{this.coordenador=0,this.appSnackBar.openFailureSnackBar(`${s.error.tabela} - ${s.error.erro} - ${s.error.message}`,"OK")})}getAuditores(){const e=new Z.w,i=this.usuariosService.getGruposDiretoria(),n=this.usuariosService.getGruposCoordenador(),d=this.usuariosService.getGruposAuditor();e.id_empresa=this.globalService.id_empresa,i.forEach(s=>{e.grupo.push(s)}),n.forEach(s=>{e.grupo.push(s)}),d.forEach(s=>{e.grupo.push(s)}),e.orderby="Raz\xe3o",console.log("Coordenadores:",e),this.inscricaoAuditor=this.usuariosService.getusuarios_01(e).subscribe(s=>{this.auditor=0;const o=new v.j;o.id=0,o.razao="TODOS",this.auditores.push(o),s.forEach(u=>{this.auditores.push(u)}),this.parametro.patchValue({auditores:this.auditor})},s=>{this.auditor=0,this.appSnackBar.openFailureSnackBar(`${s.error.tabela} - ${s.error.erro} - ${s.error.message}`,"OK")})}getAgenda(){const e=new T.t;e.id_empresa=this.globalService.id_empresa,e.id_exec=this.auditor,e.id_resp=this.coordenador,e.ano=this.parametro.value.ano,e.mes=this.adicionaZero(this.parametro.value.mes+1),console.log("Mes ==>",e.mes),this.inscricaoAgenda=this.projetosService.getParametroAgeHorasAgeHoras01(e).subscribe(i=>{this.agendas=[],i.forEach(n=>{const d=new C.n;d.dia=parseInt(n.dia),d.horas_plan=Number(n.horas_plan),d.horas_exec=Number(n.horas_exec),this.agendas.push(d)}),this.loadCalendario(),0==this.agendas.length&&this.appSnackBar.openWarningnackBar("Nenhuma Informa\xe7\xe3o Para Esta Consulta!","OK")},i=>{this.agendas=[],this.loadCalendario(),this.appSnackBar.openFailureSnackBar(`${i.error.tabela} - ${i.error.erro} - ${i.error.message}`,"OK")})}onRetorno(){this.router.navigate(["/"])}loadCalendario(){var d,e=new Date(this.parametro.value.ano,this.parametro.value.mes,1,0),i=e.getMonth(),n=0;const s=e.getDay();for(this.calendario=[],e.setDate(e.getDate()-e.getDay());e.getDay()<s;){const o=new p.N;o.dia=e.getDate(),o.data=new Date(e),o.semana=e.getDay(),o.tipo=3,o.horasplanejadas=60,o.horasexecutadas=70,o.descricao="Antes",o.id_resp=this.coordenador,o.id_exec=this.auditor,o.id_projeto=0,this.calendario.push(o),e.setDate(e.getDate()+1)}for(e=new Date(this.parametro.value.ano,this.parametro.value.mes,1,0);i==e.getMonth();){const o=new p.N;o.dia=e.getDate();const u=this.agendas.find(L=>L.dia===o.dia);o.data=new Date(e),o.semana=e.getDay(),o.tipo=0==e.getDay()?0:1,null==u?(o.horasplanejadas=0,o.horasexecutadas=0):(o.horasplanejadas=u.horas_plan,o.horasexecutadas=u.horas_exec),o.descricao="Dias do m\xeas",o.id_resp=this.coordenador,o.id_exec=this.auditor,o.id_projeto=0,this.calendario.push(o),e.setDate(e.getDate()+1)}if(this.linhas=[],d=new A.u,n=0,this.calendario.forEach(o=>{n>6&&(this.linhas.push(d),n=0,d=new A.u),d.line.push(o),n++}),n>0){for(;n<7;){const o=new p.N;o.dia=e.getDate(),o.data=new Date(e),o.semana=e.getDay(),o.tipo=3,o.horasplanejadas=90,o.horasexecutadas=70,o.descricao="Depois",o.id_resp=this.coordenador,o.id_exec=this.auditor,o.id_projeto=0,this.calendario.push(o),e.setDate(e.getDate()+1),d.line.push(o),n++}this.linhas.push(d)}console.log("Linha:",this.linhas)}onDay(e){console.log("onDay",e),this.celulaDia=e,this.globalService.setRefreshLan\u00e7amentos(this.celulaDia),this.showLancamento=!0}adicionaZero(e){return e<=9?"0"+e:""+e}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c.qu),a.Y36(D.J),a.Y36(x.T),a.Y36(y.U),a.Y36(h.F0),a.Y36(w.W))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-agenda-view"]],decls:37,vars:8,consts:[[1,"div-barra"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Atualizar","matTooltipPosition","above",1,"button",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon",3,"click"],["autocomplete","off",3,"formGroup"],[1,"col-med-5"],["field","","appearance","outline",1,"col-max"],["formControlName","coordenadores"],[3,"value",4,"ngFor","ngForOf"],["formControlName","auditores"],["formControlName","ano"],["formControlName","mes"],[4,"ngIf"],[3,"value"],[1,"col-med-7"],[1,"col-max","dia-semana","cabec-car-dom"],[1,"col-max","dia-semana","cabec-car"],["class","col-med-7",4,"ngFor","ngForOf"],[3,"celula","onClickDay"],[1,"col-max","dia-semana"]],template:function(e,i){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"mat-toolbar"),a.TgZ(2,"span",1),a._uU(3,"AGENDA-COORDENADOR"),a.qZA(),a.TgZ(4,"button",2),a.NdJ("click",function(){return i.onSubmit()}),a.TgZ(5,"mat-icon"),a._uU(6,"rotate_right"),a.qZA(),a.qZA(),a.TgZ(7,"button",3),a.NdJ("click",function(){return i.onRetorno()}),a.TgZ(8,"mat-icon"),a._uU(9,"arrow_back"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"div"),a.TgZ(11,"form",4),a.TgZ(12,"div",5),a.TgZ(13,"mat-form-field",6),a.TgZ(14,"mat-label"),a._uU(15,"Coordenadores"),a.qZA(),a.TgZ(16,"mat-select",7),a.YNc(17,M,2,2,"mat-option",8),a.qZA(),a.qZA(),a.TgZ(18,"mat-form-field",6),a.TgZ(19,"mat-label"),a._uU(20,"Auditores"),a.qZA(),a.TgZ(21,"mat-select",9),a.YNc(22,O,2,2,"mat-option",8),a.qZA(),a.qZA(),a.TgZ(23,"mat-form-field",6),a.TgZ(24,"mat-label"),a._uU(25,"Ano"),a.qZA(),a.TgZ(26,"mat-select",10),a.YNc(27,j,2,2,"mat-option",8),a.qZA(),a.qZA(),a.TgZ(28,"mat-form-field",6),a.TgZ(29,"mat-label"),a._uU(30,"M\xeas"),a.qZA(),a.TgZ(31,"mat-select",11),a.YNc(32,E,2,2,"mat-option",8),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.YNc(33,F,16,0,"div",12),a.YNc(34,B,2,1,"div",12),a.TgZ(35,"div"),a.YNc(36,$,1,0,"app-cel-apontamentos",12),a.qZA()),2&e&&(a.xp6(11),a.Q6J("formGroup",i.parametro),a.xp6(6),a.Q6J("ngForOf",i.coordenadores),a.xp6(5),a.Q6J("ngForOf",i.auditores),a.xp6(5),a.Q6J("ngForOf",i.anos),a.xp6(5),a.Q6J("ngForOf",i.meses.meses),a.xp6(1),a.Q6J("ngIf",i.calendario.length>0),a.xp6(1),a.Q6J("ngIf",i.calendario.length>0),a.xp6(2),a.Q6J("ngIf",i.showLancamento))},directives:[S.Ye,b.lW,J.gM,N.Hw,c._Y,c.JL,c.sg,f.KE,f.hX,q.gD,c.JJ,c.u,m.sg,m.O5,V.ey,Q.H,U.Q],styles:[""]}),t})()}];let H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[h.Bz.forChild(R)],h.Bz]}),t})();var z=r(3122),G=r(4466),I=r(2559);let k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[m.ez,H,z.q,c.u5,c.UX,G.m,I.yI.forChild()]]}),t})()}}]);