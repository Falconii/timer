"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[747],{5747:(P,Z,s)=>{s.r(Z),s.d(Z,{AgendaDiretorModule:()=>L});var p=s(8583),m=s(4655),_=s(141),h=s(3639),A=s(8673),u=s(4453),T=s(7265),g=s(6468),D=s(3563),a=s(7716),d=s(3679),C=s(1209),x=s(1843),w=s(4590),y=s(789),b=s(2522),S=s(1095),J=s(1436),N=s(6627),f=s(8295),q=s(7441),V=s(2458),U=s(7094),j=s(850);function Q(i,l){if(1&i&&(a.TgZ(0,"mat-option",14),a._uU(1),a.qZA()),2&i){const e=l.$implicit;a.Q6J("value",e.id),a.xp6(1),a.hij(" ",e.razao," ")}}function O(i,l){if(1&i&&(a.TgZ(0,"mat-option",14),a._uU(1),a.qZA()),2&i){const e=l.$implicit;a.Q6J("value",e.id),a.xp6(1),a.hij(" ",e.razao," ")}}function M(i,l){if(1&i&&(a.TgZ(0,"mat-option",14),a._uU(1),a.qZA()),2&i){const e=l.$implicit;a.Q6J("value",e.id),a.xp6(1),a.hij(" ",e.razao," ")}}function F(i,l){if(1&i&&(a.TgZ(0,"mat-option",14),a._uU(1),a.qZA()),2&i){const e=l.$implicit;a.Q6J("value",e),a.xp6(1),a.hij(" ",e," ")}}function Y(i,l){if(1&i&&(a.TgZ(0,"mat-option",14),a._uU(1),a.qZA()),2&i){const e=l.$implicit;a.Q6J("value",e.nro),a.xp6(1),a.hij(" ",e.nome," ")}}function E(i,l){1&i&&(a.TgZ(0,"div"),a.TgZ(1,"div",15),a.TgZ(2,"mat-label",16),a._uU(3,"DOM"),a.qZA(),a.TgZ(4,"mat-label",17),a._uU(5,"SEG"),a.qZA(),a.TgZ(6,"mat-label",17),a._uU(7,"TER"),a.qZA(),a.TgZ(8,"mat-label",17),a._uU(9,"QUA"),a.qZA(),a.TgZ(10,"mat-label",17),a._uU(11,"QUI"),a.qZA(),a.TgZ(12,"mat-label",17),a._uU(13,"SEX"),a.qZA(),a.TgZ(14,"mat-label",17),a._uU(15,"SAB"),a.qZA(),a.qZA(),a.qZA())}function $(i,l){if(1&i){const e=a.EpF();a.TgZ(0,"div",15),a.TgZ(1,"div",16),a.TgZ(2,"app-cel-calendar",19),a.NdJ("onClickDay",function(r){return a.CHM(e),a.oxw(2).onDay(r)}),a.qZA(),a.qZA(),a.TgZ(3,"div",20),a.TgZ(4,"app-cel-calendar",19),a.NdJ("onClickDay",function(r){return a.CHM(e),a.oxw(2).onDay(r)}),a.qZA(),a.qZA(),a.TgZ(5,"div",20),a.TgZ(6,"app-cel-calendar",19),a.NdJ("onClickDay",function(r){return a.CHM(e),a.oxw(2).onDay(r)}),a.qZA(),a.qZA(),a.TgZ(7,"div",20),a.TgZ(8,"app-cel-calendar",19),a.NdJ("onClickDay",function(r){return a.CHM(e),a.oxw(2).onDay(r)}),a.qZA(),a.qZA(),a.TgZ(9,"div",20),a.TgZ(10,"app-cel-calendar",19),a.NdJ("onClickDay",function(r){return a.CHM(e),a.oxw(2).onDay(r)}),a.qZA(),a.qZA(),a.TgZ(11,"div",20),a.TgZ(12,"app-cel-calendar",19),a.NdJ("onClickDay",function(r){return a.CHM(e),a.oxw(2).onDay(r)}),a.qZA(),a.qZA(),a.TgZ(13,"div",20),a.TgZ(14,"app-cel-calendar",19),a.NdJ("onClickDay",function(r){return a.CHM(e),a.oxw(2).onDay(r)}),a.qZA(),a.qZA(),a.qZA()}if(2&i){const e=l.$implicit;a.xp6(2),a.Q6J("celula",e.line[0]),a.xp6(2),a.Q6J("celula",e.line[1]),a.xp6(2),a.Q6J("celula",e.line[2]),a.xp6(2),a.Q6J("celula",e.line[3]),a.xp6(2),a.Q6J("celula",e.line[4]),a.xp6(2),a.Q6J("celula",e.line[5]),a.xp6(2),a.Q6J("celula",e.line[6])}}function B(i,l){if(1&i&&(a.TgZ(0,"div"),a.YNc(1,$,15,7,"div",18),a.qZA()),2&i){const e=a.oxw();a.xp6(1),a.Q6J("ngForOf",e.linhas)}}function z(i,l){1&i&&a._UZ(0,"app-cel-apontamentos")}const R=[{path:"",redirectTo:"agendaprojeto",pathMatch:"full"},{path:"agendaprojeto",component:(()=>{class i{constructor(e,o,r,n,c,t){this.usuariosService=o,this.projetosService=r,this.globalService=n,this.router=c,this.appSnackBar=t,this.diretor=0,this.diretores=[],this.coordenador=0,this.coordenadores=[],this.auditor=0,this.auditores=[],this.agendas=[],this.calendario=[],this.linhas=[],this.anos=[2022,2023,2024],this.meses=new T.Y,this.hoje=new Date,this.showLancamento=!1,this.celulaDia=new u.N,this.parametro=e.group({diretores:[{value:""}],coordenadores:[{value:""}],auditores:[{value:""}],ano:[{value:""}],mes:[{value:""}]}),this.getDiretores(),this.getCoordenadores(),this.getAuditores(),this.setParametro()}ngOnInit(){}ngOnDestroy(){var e,o,r,n;null===(e=this.inscricaoDiretor)||void 0===e||e.unsubscribe(),null===(o=this.inscricaoAuditor)||void 0===o||o.unsubscribe(),null===(r=this.inscricaoCoordenador)||void 0===r||r.unsubscribe(),null===(n=this.inscricaoAgenda)||void 0===n||n.unsubscribe()}onSubmit(){this.coordenador=this.parametro.value.coordenadores,this.auditor=this.parametro.value.auditores,this.celulaDia=new u.N,this.showLancamento=!0,this.globalService.setRefreshLan\u00e7amentos(this.celulaDia),this.getAgenda()}setParametro(){this.parametro.setValue({diretores:this.diretor,coordenadores:this.coordenador,auditores:this.auditor,ano:this.hoje.getFullYear(),mes:this.hoje.getMonth()})}getDiretores(){const e=new g.w;e.id_empresa=this.globalService.id_empresa,e.grupo=this.usuariosService.getGruposDiretoria(),e.orderby="Raz\xe3o",this.inscricaoDiretor=this.usuariosService.getusuarios_01(e).subscribe(o=>{this.diretor=0;const r=new h.j;r.id=0,r.razao="TODOS",this.diretores.push(r),o.forEach(n=>{this.diretores.push(n)}),this.usuariosService.isDiretoria(this.globalService.getUsuario().grupo)?this.parametro.patchValue({diretores:this.globalService.getUsuario().id}):this.parametro.patchValue({diretores:this.diretor})},o=>{this.diretor=0,this.appSnackBar.openFailureSnackBar(`${o.error.tabela} - ${o.error.erro} - ${o.error.message}`,"OK")})}getCoordenadores(){const e=new g.w;e.id_empresa=this.globalService.id_empresa,e.grupo=this.usuariosService.getGruposCoordenador(),e.orderby="Raz\xe3o",this.inscricaoCoordenador=this.usuariosService.getusuarios_01(e).subscribe(o=>{this.coordenador=0;const r=new h.j;r.id=0,r.razao="TODOS",this.coordenadores.push(r),o.forEach(n=>{this.coordenadores.push(n)}),this.parametro.patchValue({coordenadores:this.coordenador})},o=>{this.coordenador=0,this.appSnackBar.openFailureSnackBar(`${o.error.tabela} - ${o.error.erro} - ${o.error.message}`,"OK")})}getAuditores(){const e=new g.w,o=this.usuariosService.getGruposCoordenador(),r=this.usuariosService.getGruposAuditor();e.id_empresa=this.globalService.id_empresa,o.forEach(n=>{e.grupo.push(n)}),r.forEach(n=>{e.grupo.push(n)}),e.orderby="Raz\xe3o",console.log("Coordenadores:",e),this.inscricaoAuditor=this.usuariosService.getusuarios_01(e).subscribe(n=>{this.auditor=0;const c=new h.j;c.id=0,c.razao="TODOS",this.auditores.push(c),n.forEach(t=>{this.auditores.push(t)}),this.parametro.patchValue({auditores:this.auditor})},n=>{this.auditor=0,this.appSnackBar.openFailureSnackBar(`${n.error.tabela} - ${n.error.erro} - ${n.error.message}`,"OK")})}getAgenda(){const e=new D.t;e.id_empresa=this.globalService.id_empresa,e.id_exec=this.auditor,e.id_resp=this.coordenador,e.ano=this.parametro.value.ano,e.mes=this.adicionaZero(this.parametro.value.mes+1),console.log("Mes ==>",e.mes),this.inscricaoAgenda=this.projetosService.getParametroAgeHorasAgeHoras01(e).subscribe(o=>{this.agendas=[],o.forEach(r=>{const n=new _.n;n.dia=parseInt(r.dia),n.horas_plan=Number(r.horas_plan),n.horas_exec=Number(r.horas_exec),this.agendas.push(n)}),this.loadCalendario(),0==this.agendas.length&&this.appSnackBar.openSuccessSnackBar("Nenhuma Informa\xe7\xe3o Para Esta Consulta!","OK")},o=>{this.agendas=[],this.loadCalendario(),this.appSnackBar.openFailureSnackBar(`${o.error.tabela} - ${o.error.erro} - ${o.error.message}`,"OK")})}onRetorno(){this.router.navigate(["/"])}loadCalendario(){var n,e=new Date(this.parametro.value.ano,this.parametro.value.mes,1,0),o=e.getMonth(),r=0;const c=e.getDay();for(this.calendario=[],e.setDate(e.getDate()-e.getDay());e.getDay()<c;){const t=new u.N;t.dia=e.getDate(),t.data=new Date(e),t.semana=e.getDay(),t.tipo=3,t.horasplanejadas=60,t.horasexecutadas=70,t.descricao="Antes",t.id_resp=this.coordenador,t.id_exec=this.auditor,t.id_projeto=0,this.calendario.push(t),e.setDate(e.getDate()+1)}for(e=new Date(this.parametro.value.ano,this.parametro.value.mes,1,0);o==e.getMonth();){const t=new u.N;t.dia=e.getDate();const v=this.agendas.find(K=>K.dia===t.dia);t.data=new Date(e),t.semana=e.getDay(),t.tipo=0==e.getDay()?0:1,null==v?(t.horasplanejadas=0,t.horasexecutadas=0):(t.horasplanejadas=v.horas_plan,t.horasexecutadas=v.horas_exec),t.descricao="Dias do m\xeas",t.id_resp=this.coordenador,t.id_exec=this.auditor,t.id_projeto=0,this.calendario.push(t),e.setDate(e.getDate()+1)}if(this.linhas=[],n=new A.u,r=0,this.calendario.forEach(t=>{r>6&&(this.linhas.push(n),r=0,n=new A.u),n.line.push(t),r++}),r>0){for(;r<7;){const t=new u.N;t.dia=e.getDate(),t.data=new Date(e),t.semana=e.getDay(),t.tipo=3,t.horasplanejadas=90,t.horasexecutadas=70,t.descricao="Depois",t.id_resp=this.coordenador,t.id_exec=this.auditor,t.id_projeto=0,this.calendario.push(t),e.setDate(e.getDate()+1),n.line.push(t),r++}this.linhas.push(n)}console.log("Linha:",this.linhas)}onDay(e){console.log("onDay",e),this.celulaDia=e,this.globalService.setRefreshLan\u00e7amentos(this.celulaDia),this.showLancamento=!0}adicionaZero(e){return e<=9?"0"+e:""+e}}return i.\u0275fac=function(e){return new(e||i)(a.Y36(d.qu),a.Y36(C.J),a.Y36(x.T),a.Y36(w.U),a.Y36(m.F0),a.Y36(y.W))},i.\u0275cmp=a.Xpm({type:i,selectors:[["app-agenda-view"]],decls:42,vars:9,consts:[[1,"div-barra"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Atualizar","matTooltipPosition","above",1,"button",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon",3,"click"],["autocomplete","off",3,"formGroup"],[1,"col-med-6"],["field","","appearance","outline",1,"col-max"],["formControlName","diretores"],[3,"value",4,"ngFor","ngForOf"],["formControlName","coordenadores"],["formControlName","auditores"],["formControlName","ano"],["formControlName","mes"],[4,"ngIf"],[3,"value"],[1,"col-med-7"],[1,"col-max","dia-semana","cabec-car-dom"],[1,"col-max","dia-semana","cabec-car"],["class","col-med-7",4,"ngFor","ngForOf"],[3,"celula","onClickDay"],[1,"col-max","dia-semana"]],template:function(e,o){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"mat-toolbar"),a.TgZ(2,"span",1),a._uU(3,"AGENDA-DIRETORIA"),a.qZA(),a.TgZ(4,"button",2),a.NdJ("click",function(){return o.onSubmit()}),a.TgZ(5,"mat-icon"),a._uU(6,"rotate_right"),a.qZA(),a.qZA(),a.TgZ(7,"button",3),a.NdJ("click",function(){return o.onRetorno()}),a.TgZ(8,"mat-icon"),a._uU(9,"arrow_back"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"div"),a.TgZ(11,"form",4),a.TgZ(12,"div",5),a.TgZ(13,"mat-form-field",6),a.TgZ(14,"mat-label"),a._uU(15,"Diretores"),a.qZA(),a.TgZ(16,"mat-select",7),a.YNc(17,Q,2,2,"mat-option",8),a.qZA(),a.qZA(),a.TgZ(18,"mat-form-field",6),a.TgZ(19,"mat-label"),a._uU(20,"Coordenadores"),a.qZA(),a.TgZ(21,"mat-select",9),a.YNc(22,O,2,2,"mat-option",8),a.qZA(),a.qZA(),a.TgZ(23,"mat-form-field",6),a.TgZ(24,"mat-label"),a._uU(25,"Auditores"),a.qZA(),a.TgZ(26,"mat-select",10),a.YNc(27,M,2,2,"mat-option",8),a.qZA(),a.qZA(),a.TgZ(28,"mat-form-field",6),a.TgZ(29,"mat-label"),a._uU(30,"Ano"),a.qZA(),a.TgZ(31,"mat-select",11),a.YNc(32,F,2,2,"mat-option",8),a.qZA(),a.qZA(),a.TgZ(33,"mat-form-field",6),a.TgZ(34,"mat-label"),a._uU(35,"M\xeas"),a.qZA(),a.TgZ(36,"mat-select",12),a.YNc(37,Y,2,2,"mat-option",8),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.YNc(38,E,16,0,"div",13),a.YNc(39,B,2,1,"div",13),a.TgZ(40,"div"),a.YNc(41,z,1,0,"app-cel-apontamentos",13),a.qZA()),2&e&&(a.xp6(11),a.Q6J("formGroup",o.parametro),a.xp6(6),a.Q6J("ngForOf",o.diretores),a.xp6(5),a.Q6J("ngForOf",o.coordenadores),a.xp6(5),a.Q6J("ngForOf",o.auditores),a.xp6(5),a.Q6J("ngForOf",o.anos),a.xp6(5),a.Q6J("ngForOf",o.meses.meses),a.xp6(1),a.Q6J("ngIf",o.calendario.length>0),a.xp6(1),a.Q6J("ngIf",o.calendario.length>0),a.xp6(2),a.Q6J("ngIf",o.showLancamento))},directives:[b.Ye,S.lW,J.gM,N.Hw,d._Y,d.JL,d.sg,f.KE,f.hX,q.gD,d.JJ,d.u,p.sg,p.O5,V.ey,U.H,j.Q],styles:[""]}),i})()}];let k=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[[m.Bz.forChild(R)],m.Bz]}),i})();var H=s(3122),I=s(2559),G=s(4466);let L=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[[p.ez,k,H.q,d.u5,d.UX,G.m,I.yI.forChild()]]}),i})()}}]);