"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[182],{4182:(L,h,s)=>{s.r(h),s.d(h,{AgendaAuditorModule:()=>$});var p=s(8583),g=s(4655),f=s(7265),v=s(8673),u=s(4453),_=s(6468),T=s(141),C=s(3563),A=s(7117),a=s(7716),c=s(3679),D=s(1209),x=s(1843),S=s(7006),b=s(789),y=s(2522),w=s(1095),J=s(1436),N=s(6627),Z=s(8295),U=s(7441),V=s(2458),q=s(7094),M=s(2225);function Q(o,l){if(1&o&&(a.TgZ(0,"mat-option",14),a._uU(1),a.qZA()),2&o){const e=l.$implicit;a.Q6J("value",e.id),a.xp6(1),a.hij(" ",e.razao," ")}}function j(o,l){if(1&o&&(a.TgZ(0,"mat-option",14),a._uU(1),a.qZA()),2&o){const e=l.$implicit;a.Q6J("value",e),a.xp6(1),a.hij(" ",e," ")}}function O(o,l){if(1&o&&(a.TgZ(0,"mat-option",14),a._uU(1),a.qZA()),2&o){const e=l.$implicit;a.Q6J("value",e.nro),a.xp6(1),a.hij(" ",e.nome," ")}}function Y(o,l){1&o&&(a.TgZ(0,"div"),a.TgZ(1,"div",15),a.TgZ(2,"mat-label",16),a._uU(3,"DOM"),a.qZA(),a.TgZ(4,"mat-label",17),a._uU(5,"SEG"),a.qZA(),a.TgZ(6,"mat-label",17),a._uU(7,"TER"),a.qZA(),a.TgZ(8,"mat-label",17),a._uU(9,"QUA"),a.qZA(),a.TgZ(10,"mat-label",17),a._uU(11,"QUI"),a.qZA(),a.TgZ(12,"mat-label",17),a._uU(13,"SEX"),a.qZA(),a.TgZ(14,"mat-label",17),a._uU(15,"SAB"),a.qZA(),a.qZA(),a.qZA())}function F(o,l){if(1&o){const e=a.EpF();a.TgZ(0,"div",15),a.TgZ(1,"div",16),a.TgZ(2,"app-cel-calendar",19),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.TgZ(3,"div",20),a.TgZ(4,"app-cel-calendar",19),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.TgZ(5,"div",20),a.TgZ(6,"app-cel-calendar",19),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.TgZ(7,"div",20),a.TgZ(8,"app-cel-calendar",19),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.TgZ(9,"div",20),a.TgZ(10,"app-cel-calendar",19),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.TgZ(11,"div",20),a.TgZ(12,"app-cel-calendar",19),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.TgZ(13,"div",20),a.TgZ(14,"app-cel-calendar",19),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.qZA()}if(2&o){const e=l.$implicit;a.xp6(2),a.Q6J("celula",e.line[0]),a.xp6(2),a.Q6J("celula",e.line[1]),a.xp6(2),a.Q6J("celula",e.line[2]),a.xp6(2),a.Q6J("celula",e.line[3]),a.xp6(2),a.Q6J("celula",e.line[4]),a.xp6(2),a.Q6J("celula",e.line[5]),a.xp6(2),a.Q6J("celula",e.line[6])}}function I(o,l){if(1&o&&(a.TgZ(0,"div"),a.YNc(1,F,15,7,"div",18),a.qZA()),2&o){const e=a.oxw();a.xp6(1),a.Q6J("ngForOf",e.linhas)}}function E(o,l){1&o&&a._UZ(0,"app-cel-apontamentos-execucao",21),2&o&&a.Q6J("UNICO",!0)}const B=[{path:"",redirectTo:"agendatrabalhos",pathMatch:"full"},{path:"agendatrabalhos",component:(()=>{class o{constructor(e,n,i,r,d,t){this.usuariosService=n,this.projetosService=i,this.globalService=r,this.router=d,this.appSnackBar=t,this.auditor=0,this.auditores=[],this.agendas=[],this.calendario=[],this.linhas=[],this.anos=[2022,2023,2024],this.meses=new f.Y,this.hoje=new Date,this.showLancamento=!1,this.celulaDia=new u.N,this.globalService.refreshCabec.subscribe(m=>{this.getAgenda()}),this.parametro=e.group({auditores:[{value:""}],ano:[{value:""}],mes:[{value:""}]}),this.setParametro(),this.getAuditores()}ngOnInit(){}ngOnDestroy(){var e,n;null===(e=this.inscricaoAuditor)||void 0===e||e.unsubscribe(),null===(n=this.inscricaoAgenda)||void 0===n||n.unsubscribe()}onSubmit(){this.auditor=this.parametro.value.auditores,this.celulaDia=new u.N,this.showLancamento=!0,this.globalService.setRefreshLan\u00e7amentos(this.celulaDia),this.getAgenda()}setParametro(){this.parametro.setValue({auditores:this.auditor,ano:this.hoje.getFullYear(),mes:this.hoje.getMonth()})}getAuditores(){const e=new _.w;this.usuariosService.getGruposCoordenador(),this.usuariosService.getGruposAuditor(),e.id_empresa=this.globalService.id_empresa,e.id=this.globalService.getUsuario().id,e.orderby="Raz\xe3o",this.globalService.setSpin(!0),this.inscricaoAuditor=this.usuariosService.getusuarios_01(e).subscribe(r=>{this.globalService.setSpin(!1),this.auditor=this.globalService.getUsuario().id,this.auditores=r,this.auditores.forEach(d=>{d.razao=(0,A.S4)(d.razao)}),this.parametro.patchValue({auditores:e.id}),this.onSubmit()},r=>{this.globalService.setSpin(!1),this.auditor=0,this.appSnackBar.openFailureSnackBar(`Tabela De Usu\xe1rios: ${(0,A.bZ)(r)}`,"OK")})}getAgenda(){const e=new C.t;e.id_empresa=this.globalService.id_empresa,e.id_exec=this.auditor,e.id_resp=0,e.ano=this.parametro.value.ano,e.mes=this.adicionaZero(this.parametro.value.mes+1),console.log("Parametros da Agenda:",this.auditor),console.log(e),this.globalService.setSpin(!0),this.inscricaoAgenda=this.projetosService.getParametroAgeHorasAgeHoras01(e).subscribe(n=>{this.globalService.setSpin(!1),this.agendas=[],n.forEach(i=>{const r=new T.n;r.dia=parseInt(i.dia),r.horas_plan=Number(i.horas_plan),r.horas_exec=Number(i.horas_exec),this.agendas.push(r)}),this.loadCalendario(),0==this.agendas.length&&this.appSnackBar.openSuccessSnackBar("Nenhuma Informa\xe7\xe3o Para Esta Consulta!","OK")},n=>{this.globalService.setSpin(!1),this.agendas=[],this.loadCalendario(),this.appSnackBar.openFailureSnackBar(`${n.error.tabela} - ${n.error.erro} - ${n.error.message}`,"OK")})}onRetorno(){this.router.navigate(["/"])}loadCalendario(){var r,e=new Date(this.parametro.value.ano,this.parametro.value.mes,1,0),n=e.getMonth(),i=0;const d=e.getDay();for(this.calendario=[],e.setDate(e.getDate()-e.getDay());e.getDay()<d;){const t=new u.N;t.dia=e.getDate(),t.data=new Date(e),t.semana=e.getDay(),t.tipo=3,t.horasplanejadas=60,t.horasexecutadas=70,t.descricao="Antes",t.id_resp=0,t.id_exec=this.auditor,t.id_projeto=0,this.calendario.push(t),e.setDate(e.getDate()+1)}for(e=new Date(this.parametro.value.ano,this.parametro.value.mes,1,0);n==e.getMonth();){const t=new u.N;t.dia=e.getDate();const m=this.agendas.find(k=>k.dia===t.dia);t.data=new Date(e),t.semana=e.getDay(),t.tipo=0==e.getDay()?0:1,null==m?(t.horasplanejadas=0,t.horasexecutadas=0):(t.horasplanejadas=m.horas_plan,t.horasexecutadas=m.horas_exec),t.descricao="Dias do m\xeas",t.id_resp=0,t.id_exec=this.auditor,t.id_projeto=0,this.calendario.push(t),e.setDate(e.getDate()+1)}if(this.linhas=[],r=new v.u,i=0,this.calendario.forEach(t=>{i>6&&(this.linhas.push(r),i=0,r=new v.u),r.line.push(t),i++}),i>0){for(;i<7;){const t=new u.N;t.dia=e.getDate(),t.data=new Date(e),t.semana=e.getDay(),t.tipo=3,t.horasplanejadas=90,t.horasexecutadas=70,t.descricao="Depois",t.id_resp=0,t.id_exec=this.auditor,t.id_projeto=0,this.calendario.push(t),e.setDate(e.getDate()+1),r.line.push(t),i++}this.linhas.push(r)}}onDay(e){console.log("onDay",e),this.celulaDia=e,this.globalService.setRefreshLan\u00e7amentos(this.celulaDia),this.showLancamento=!0}adicionaZero(e){return e<=9?"0"+e:""+e}onChangeParametros(){this.onSubmit()}}return o.\u0275fac=function(e){return new(e||o)(a.Y36(c.qu),a.Y36(D.J),a.Y36(x.T),a.Y36(S.U),a.Y36(g.F0),a.Y36(b.W))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-agenda-view"]],decls:33,vars:7,consts:[[1,"div-barra"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Atualizar","matTooltipPosition","above",1,"button",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon",3,"click"],["autocomplete","off",3,"formGroup"],[1,"col-med-5"],["field","","appearance","outline",1,"col-max"],["formControlName","auditores"],[3,"value",4,"ngFor","ngForOf"],["formControlName","ano",3,"selectionChange"],["formControlName","mes",3,"selectionChange"],[4,"ngIf"],[3,"UNICO",4,"ngIf"],[1,"rodape"],[3,"value"],[1,"col-med-7"],[1,"col-max","dia-semana","cabec-car-dom"],[1,"col-max","dia-semana","cabec-car"],["class","col-med-7",4,"ngFor","ngForOf"],[3,"celula","onClickDay"],[1,"col-max","dia-semana"],[3,"UNICO"]],template:function(e,n){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"mat-toolbar"),a.TgZ(2,"span",1),a._uU(3,"AGENDA-AUDITOR"),a.qZA(),a.TgZ(4,"button",2),a.NdJ("click",function(){return n.onSubmit()}),a.TgZ(5,"mat-icon"),a._uU(6,"rotate_right"),a.qZA(),a.qZA(),a.TgZ(7,"button",3),a.NdJ("click",function(){return n.onRetorno()}),a.TgZ(8,"mat-icon"),a._uU(9,"arrow_back"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"div"),a.TgZ(11,"form",4),a.TgZ(12,"div",5),a.TgZ(13,"mat-form-field",6),a.TgZ(14,"mat-label"),a._uU(15,"Auditores"),a.qZA(),a.TgZ(16,"mat-select",7),a.YNc(17,Q,2,2,"mat-option",8),a.qZA(),a.qZA(),a.TgZ(18,"mat-form-field",6),a.TgZ(19,"mat-label"),a._uU(20,"Ano"),a.qZA(),a.TgZ(21,"mat-select",9),a.NdJ("selectionChange",function(){return n.onChangeParametros()}),a.YNc(22,j,2,2,"mat-option",8),a.qZA(),a.qZA(),a.TgZ(23,"mat-form-field",6),a.TgZ(24,"mat-label"),a._uU(25,"M\xeas"),a.qZA(),a.TgZ(26,"mat-select",10),a.NdJ("selectionChange",function(){return n.onChangeParametros()}),a.YNc(27,O,2,2,"mat-option",8),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.YNc(28,Y,16,0,"div",11),a.YNc(29,I,2,1,"div",11),a.TgZ(30,"div"),a.YNc(31,E,1,1,"app-cel-apontamentos-execucao",12),a.qZA(),a._UZ(32,"div",13)),2&e&&(a.xp6(11),a.Q6J("formGroup",n.parametro),a.xp6(6),a.Q6J("ngForOf",n.auditores),a.xp6(5),a.Q6J("ngForOf",n.anos),a.xp6(5),a.Q6J("ngForOf",n.meses.meses),a.xp6(1),a.Q6J("ngIf",n.calendario.length>0),a.xp6(1),a.Q6J("ngIf",n.calendario.length>0),a.xp6(2),a.Q6J("ngIf",n.showLancamento))},directives:[y.Ye,w.lW,J.gM,N.Hw,c._Y,c.JL,c.sg,Z.KE,Z.hX,U.gD,c.JJ,c.u,p.sg,p.O5,V.ey,q.H,M.T],styles:[""]}),o})()}];let H=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[g.Bz.forChild(B)],g.Bz]}),o})();var R=s(4589),P=s(4466),z=s(2559);let $=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[p.ez,H,R.q,c.u5,c.UX,P.m,z.yI.forChild()]]}),o})()}}]);