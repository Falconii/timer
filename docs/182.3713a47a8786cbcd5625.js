"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[182],{4182:(G,h,r)=>{r.r(h),r.d(h,{AgendaAuditorModule:()=>L});var p=r(8583),m=r(4655),Z=r(7265),v=r(8673),u=r(4453),f=r(3639),T=r(6468),_=r(141),D=r(3563),a=r(7716),c=r(3679),x=r(1209),C=r(1843),y=r(4590),S=r(789),w=r(2522),b=r(1095),J=r(1436),N=r(6627),A=r(8295),V=r(7441),q=r(2458),U=r(7094),M=r(7079);function Q(o,l){if(1&o&&(a.TgZ(0,"mat-option",12),a._uU(1),a.qZA()),2&o){const e=l.$implicit;a.Q6J("value",e.id),a.xp6(1),a.hij(" ",e.razao," ")}}function j(o,l){if(1&o&&(a.TgZ(0,"mat-option",12),a._uU(1),a.qZA()),2&o){const e=l.$implicit;a.Q6J("value",e),a.xp6(1),a.hij(" ",e," ")}}function Y(o,l){if(1&o&&(a.TgZ(0,"mat-option",12),a._uU(1),a.qZA()),2&o){const e=l.$implicit;a.Q6J("value",e.nro),a.xp6(1),a.hij(" ",e.nome," ")}}function F(o,l){1&o&&(a.TgZ(0,"div"),a.TgZ(1,"div",13),a.TgZ(2,"mat-label",14),a._uU(3,"DOM"),a.qZA(),a.TgZ(4,"mat-label",15),a._uU(5,"SEG"),a.qZA(),a.TgZ(6,"mat-label",15),a._uU(7,"TER"),a.qZA(),a.TgZ(8,"mat-label",15),a._uU(9,"QUA"),a.qZA(),a.TgZ(10,"mat-label",15),a._uU(11,"QUI"),a.qZA(),a.TgZ(12,"mat-label",15),a._uU(13,"SEX"),a.qZA(),a.TgZ(14,"mat-label",15),a._uU(15,"SAB"),a.qZA(),a.qZA(),a.qZA())}function O(o,l){if(1&o){const e=a.EpF();a.TgZ(0,"div",13),a.TgZ(1,"div",14),a.TgZ(2,"app-cel-calendar",17),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.TgZ(3,"div",18),a.TgZ(4,"app-cel-calendar",17),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.TgZ(5,"div",18),a.TgZ(6,"app-cel-calendar",17),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.TgZ(7,"div",18),a.TgZ(8,"app-cel-calendar",17),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.TgZ(9,"div",18),a.TgZ(10,"app-cel-calendar",17),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.TgZ(11,"div",18),a.TgZ(12,"app-cel-calendar",17),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.TgZ(13,"div",18),a.TgZ(14,"app-cel-calendar",17),a.NdJ("onClickDay",function(i){return a.CHM(e),a.oxw(2).onDay(i)}),a.qZA(),a.qZA(),a.qZA()}if(2&o){const e=l.$implicit;a.xp6(2),a.Q6J("celula",e.line[0]),a.xp6(2),a.Q6J("celula",e.line[1]),a.xp6(2),a.Q6J("celula",e.line[2]),a.xp6(2),a.Q6J("celula",e.line[3]),a.xp6(2),a.Q6J("celula",e.line[4]),a.xp6(2),a.Q6J("celula",e.line[5]),a.xp6(2),a.Q6J("celula",e.line[6])}}function E(o,l){if(1&o&&(a.TgZ(0,"div"),a.YNc(1,O,15,7,"div",16),a.qZA()),2&o){const e=a.oxw();a.xp6(1),a.Q6J("ngForOf",e.linhas)}}function B(o,l){1&o&&a._UZ(0,"app-cel-apontamentos-execucao")}const H=[{path:"",redirectTo:"agendatrabalhos",pathMatch:"full"},{path:"agendatrabalhos",component:(()=>{class o{constructor(e,n,i,s,d,t){this.usuariosService=n,this.projetosService=i,this.globalService=s,this.router=d,this.appSnackBar=t,this.auditor=0,this.auditores=[],this.agendas=[],this.calendario=[],this.linhas=[],this.anos=[2022,2023,2024],this.meses=new Z.Y,this.hoje=new Date,this.showLancamento=!1,this.celulaDia=new u.N,this.durationInSeconds=2,this.parametro=e.group({auditores:[{value:""}],ano:[{value:""}],mes:[{value:""}]}),this.getAuditores(),this.setParametro()}ngOnInit(){}ngOnDestroy(){var e,n;null===(e=this.inscricaoAuditor)||void 0===e||e.unsubscribe(),null===(n=this.inscricaoAgenda)||void 0===n||n.unsubscribe()}ngAfterViewChecked(){}onSubmit(){this.auditor=this.parametro.value.auditores,this.celulaDia=new u.N,this.showLancamento=!0,this.globalService.setRefreshLan\u00e7amentos(this.celulaDia),this.getAgenda()}setParametro(){this.parametro.setValue({auditores:this.auditor,ano:this.hoje.getFullYear(),mes:this.hoje.getMonth()})}getAuditores(){const e=new T.w,n=this.usuariosService.getGruposCoordenador(),i=this.usuariosService.getGruposAuditor();e.id_empresa=this.globalService.id_empresa,n.forEach(s=>{e.grupo.push(s)}),i.forEach(s=>{e.grupo.push(s)}),e.orderby="Raz\xe3o",this.globalService.setSpin(!0),this.inscricaoAuditor=this.usuariosService.getusuarios_01(e).subscribe(s=>{this.globalService.setSpin(!1),this.auditor=this.globalService.getUsuario().id;const d=new f.j;d.id=0,d.razao="TODOS",this.auditores.push(d),s.forEach(t=>{this.auditores.push(t)}),this.parametro.patchValue({auditores:this.auditor}),this.onSubmit()},s=>{this.globalService.setSpin(!1),this.auditor=0,this.appSnackBar.openFailureSnackBar(`${s.error.tabela} - ${s.error.erro} - ${s.error.message}`,"OK")})}getAgenda(){const e=new D.t;e.id_empresa=this.globalService.id_empresa,e.id_exec=this.auditor,e.id_resp=0,e.ano=this.parametro.value.ano,e.mes=this.adicionaZero(this.parametro.value.mes+1),console.log("Mes ==>",e.mes),this.globalService.setSpin(!0),this.inscricaoAgenda=this.projetosService.getParametroAgeHorasAgeHoras01(e).subscribe(n=>{this.globalService.setSpin(!1),this.agendas=[],n.forEach(i=>{const s=new _.n;s.dia=parseInt(i.dia),s.horas_plan=Number(i.horas_plan),s.horas_exec=Number(i.horas_exec),this.agendas.push(s)}),console.log("Agenda:",this.agendas),this.loadCalendario(),0==this.agendas.length&&this.appSnackBar.openSuccessSnackBar("Nenhuma Informa\xe7\xe3o Para Esta Consulta!","OK")},n=>{this.globalService.setSpin(!1),this.agendas=[],this.loadCalendario(),this.appSnackBar.openFailureSnackBar(`${n.error.tabela} - ${n.error.erro} - ${n.error.message}`,"OK")})}onRetorno(){this.router.navigate(["/"])}loadCalendario(){var s,e=new Date(this.parametro.value.ano,this.parametro.value.mes,1,0),n=e.getMonth(),i=0;const d=e.getDay();for(this.calendario=[],e.setDate(e.getDate()-e.getDay());e.getDay()<d;){const t=new u.N;t.dia=e.getDate(),t.data=new Date(e),t.semana=e.getDay(),t.tipo=3,t.horasplanejadas=60,t.horasexecutadas=70,t.descricao="Antes",t.id_resp=0,t.id_exec=this.auditor,t.id_projeto=0,this.calendario.push(t),e.setDate(e.getDate()+1)}for(e=new Date(this.parametro.value.ano,this.parametro.value.mes,1,0);n==e.getMonth();){const t=new u.N;t.dia=e.getDate();const g=this.agendas.find(z=>z.dia===t.dia);t.data=new Date(e),t.semana=e.getDay(),t.tipo=0==e.getDay()?0:1,null==g?(t.horasplanejadas=0,t.horasexecutadas=0):(t.horasplanejadas=g.horas_plan,t.horasexecutadas=g.horas_exec),t.descricao="Dias do m\xeas",t.id_resp=0,t.id_exec=this.auditor,t.id_projeto=0,this.calendario.push(t),e.setDate(e.getDate()+1)}if(this.linhas=[],s=new v.u,i=0,this.calendario.forEach(t=>{i>6&&(this.linhas.push(s),i=0,s=new v.u),s.line.push(t),i++}),i>0){for(;i<7;){const t=new u.N;t.dia=e.getDate(),t.data=new Date(e),t.semana=e.getDay(),t.tipo=3,t.horasplanejadas=90,t.horasexecutadas=70,t.descricao="Depois",t.id_resp=0,t.id_exec=this.auditor,t.id_projeto=0,this.calendario.push(t),e.setDate(e.getDate()+1),s.line.push(t),i++}this.linhas.push(s)}console.log("Linha:",this.linhas)}onDay(e){console.log("onDay",e),this.celulaDia=e,this.globalService.setRefreshLan\u00e7amentos(this.celulaDia),this.showLancamento=!0}adicionaZero(e){return e<=9?"0"+e:""+e}}return o.\u0275fac=function(e){return new(e||o)(a.Y36(c.qu),a.Y36(x.J),a.Y36(C.T),a.Y36(y.U),a.Y36(m.F0),a.Y36(S.W))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-agenda-view"]],decls:32,vars:7,consts:[[1,"div-barra"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Atualizar","matTooltipPosition","above",1,"button",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon",3,"click"],["autocomplete","off",3,"formGroup"],[1,"col-med-5"],["field","","appearance","outline",1,"col-max"],["formControlName","auditores"],[3,"value",4,"ngFor","ngForOf"],["formControlName","ano"],["formControlName","mes"],[4,"ngIf"],[3,"value"],[1,"col-med-7"],[1,"col-max","dia-semana","cabec-car-dom"],[1,"col-max","dia-semana","cabec-car"],["class","col-med-7",4,"ngFor","ngForOf"],[3,"celula","onClickDay"],[1,"col-max","dia-semana"]],template:function(e,n){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"mat-toolbar"),a.TgZ(2,"span",1),a._uU(3,"AGENDA-AUDITOR"),a.qZA(),a.TgZ(4,"button",2),a.NdJ("click",function(){return n.onSubmit()}),a.TgZ(5,"mat-icon"),a._uU(6,"rotate_right"),a.qZA(),a.qZA(),a.TgZ(7,"button",3),a.NdJ("click",function(){return n.onRetorno()}),a.TgZ(8,"mat-icon"),a._uU(9,"arrow_back"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"div"),a.TgZ(11,"form",4),a.TgZ(12,"div",5),a.TgZ(13,"mat-form-field",6),a.TgZ(14,"mat-label"),a._uU(15,"Auditores"),a.qZA(),a.TgZ(16,"mat-select",7),a.YNc(17,Q,2,2,"mat-option",8),a.qZA(),a.qZA(),a.TgZ(18,"mat-form-field",6),a.TgZ(19,"mat-label"),a._uU(20,"Ano"),a.qZA(),a.TgZ(21,"mat-select",9),a.YNc(22,j,2,2,"mat-option",8),a.qZA(),a.qZA(),a.TgZ(23,"mat-form-field",6),a.TgZ(24,"mat-label"),a._uU(25,"M\xeas"),a.qZA(),a.TgZ(26,"mat-select",10),a.YNc(27,Y,2,2,"mat-option",8),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.YNc(28,F,16,0,"div",11),a.YNc(29,E,2,1,"div",11),a.TgZ(30,"div"),a.YNc(31,B,1,0,"app-cel-apontamentos-execucao",11),a.qZA()),2&e&&(a.xp6(11),a.Q6J("formGroup",n.parametro),a.xp6(6),a.Q6J("ngForOf",n.auditores),a.xp6(5),a.Q6J("ngForOf",n.anos),a.xp6(5),a.Q6J("ngForOf",n.meses.meses),a.xp6(1),a.Q6J("ngIf",n.calendario.length>0),a.xp6(1),a.Q6J("ngIf",n.calendario.length>0),a.xp6(2),a.Q6J("ngIf",n.showLancamento))},directives:[w.Ye,b.lW,J.gM,N.Hw,c._Y,c.JL,c.sg,A.KE,A.hX,V.gD,c.JJ,c.u,p.sg,p.O5,q.ey,U.H,M.T],styles:[""]}),o})()}];let I=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[m.Bz.forChild(H)],m.Bz]}),o})();var R=r(3122),$=r(4466),k=r(2559);let L=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[p.ez,I,R.q,c.u5,c.UX,$.m,k.yI.forChild()]]}),o})()}}]);