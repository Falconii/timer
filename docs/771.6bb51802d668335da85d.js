"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[771],{7771:(T,d,i)=>{i.r(d),i.d(d,{ProgramacaoModule:()=>ro});var p=i(8583),g=i(4655),h=i(3639),f=i(6468),P=i(7265),Z=i(4782),S=i(7117),o=i(7716),m=i(3679),A=i(1209),C=i(1843),b=i(7006),x=i(789),_=i(2522),j=i(9692),z=i(1095),y=i(6627),U=i(1436),v=i(8295),N=i(7441),c=i(2789),O=i(2458);function q(a,r){if(1&a&&(o.TgZ(0,"mat-option",27),o._uU(1),o.qZA()),2&a){const t=r.$implicit;o.Q6J("value",t.id),o.xp6(1),o.hij(" ",t.razao," ")}}function D(a,r){if(1&a&&(o.TgZ(0,"mat-option",27),o._uU(1),o.qZA()),2&a){const t=r.$implicit;o.Q6J("value",t.id),o.xp6(1),o.hij(" ",t.razao," ")}}function Y(a,r){if(1&a&&(o.TgZ(0,"mat-option",27),o._uU(1),o.qZA()),2&a){const t=r.$implicit;o.Q6J("value",t.id),o.xp6(1),o.hij(" ",t.razao," ")}}function B(a,r){if(1&a&&(o.TgZ(0,"mat-option",27),o._uU(1),o.qZA()),2&a){const t=r.$implicit;o.Q6J("value",t),o.xp6(1),o.hij(" ",t," ")}}function E(a,r){if(1&a&&(o.TgZ(0,"mat-option",27),o._uU(1),o.qZA()),2&a){const t=r.$implicit;o.Q6J("value",t.nro),o.xp6(1),o.hij(" ",t.nome," ")}}function J(a,r){1&a&&(o.TgZ(0,"th",28),o._uU(1," Resp/Exec "),o.qZA())}function Q(a,r){if(1&a&&(o.TgZ(0,"td",29),o._UZ(1,"div",30),o.qZA()),2&a){const t=o.oxw();o.xp6(1),o.Q6J("ngStyle",t.setStyle())}}function M(a,r){1&a&&(o.TgZ(0,"th",28),o._uU(1," Contrato "),o.qZA())}function w(a,r){if(1&a&&(o.TgZ(0,"td",29),o._uU(1),o.qZA()),2&a){const t=r.$implicit;o.xp6(1),o.hij(" ",t.id," ")}}function F(a,r){1&a&&(o.TgZ(0,"th",28),o._uU(1," Raz\xe3o Social "),o.qZA())}const $=function(){return{color:"blue"}};function R(a,r){if(1&a&&(o.TgZ(0,"td",29),o.TgZ(1,"div",31),o.TgZ(2,"p"),o._uU(3),o.qZA(),o.TgZ(4,"p",32),o._uU(5),o.qZA(),o.qZA(),o.qZA()),2&a){const t=r.$implicit,e=o.oxw();o.xp6(3),o.hij(" ",t.cliente_razao,""),o.xp6(1),o.Q6J("ngStyle",o.DdM(3,$)),o.xp6(1),o.hij(" ",e.htmlFirstName(t.diretor_razao),"")}}function I(a,r){1&a&&(o.TgZ(0,"th",28),o._uU(1," Descri\xe7\xe3o "),o.qZA())}function G(a,r){if(1&a&&(o.TgZ(0,"td",29),o._uU(1),o.qZA()),2&a){const t=r.$implicit;o.xp6(1),o.hij(" ",t.descricao," ")}}function K(a,r){1&a&&(o.TgZ(0,"th",28),o._uU(1," Per\xedodo "),o.qZA())}function L(a,r){if(1&a&&(o.TgZ(0,"td",29),o._uU(1),o.ALo(2,"date"),o.ALo(3,"date"),o.qZA()),2&a){const t=r.$implicit;o.xp6(1),o.AsE(" ",o.xi3(2,2,t.dataproj,"dd/MM/yy"),"-",o.xi3(3,5,t.dataenc,"dd/MM/yy")," ")}}function k(a,r){1&a&&(o.TgZ(0,"th",28),o._uU(1," A\xe7\xf4es "),o.qZA())}function V(a,r){1&a&&(o.TgZ(0,"td",29),o.TgZ(1,"span",33),o.TgZ(2,"button",34),o.TgZ(3,"mat-icon"),o._uU(4,"remove_red_eye"),o.qZA(),o.qZA(),o.qZA(),o.qZA())}function H(a,r){1&a&&o._UZ(0,"tr",35)}function W(a,r){1&a&&o._UZ(0,"tr",36)}const X=function(){return[]},oo=[{path:"",redirectTo:"programacao",pathMatch:"full"},{path:"programacao",component:(()=>{class a{constructor(t,e,n,s,l,u){this.usuariosService=e,this.projetosService=n,this.globalService=s,this.router=l,this.appSnackBar=u,this.diretor=0,this.diretores=[],this.coordenador=0,this.coordenadores=[],this.auditor=0,this.auditores=[],this.anos=[2022,2023,2024],this.meses=new P.Y,this.hoje=new Date,this.lsProjetos=[],this.displayedColumns=["resexec","id","razao","descricao","periodo","acao"],this.length=50,this.pageSize=10,this.pageIndex=0,this.pageSizeOptions=[5,10,25],this.hidePageSize=!1,this.showPageSizeOptions=!0,this.showFirstLastButtons=!0,this.disabled=!1,this.parametro=t.group({diretores:[{value:""}],coordenadores:[{value:""}],auditores:[{value:""}],ano:[{value:""}],mes:[{value:""}]}),this.getDiretores(),this.getCoordenadores(),this.getAuditores(),this.getProjetosContador(),this.setParametro()}ngOnInit(){}ngOnDestroy(){var t,e,n,s,l,u;null===(t=this.inscricaoDiretor)||void 0===t||t.unsubscribe(),null===(e=this.inscricaoAuditor)||void 0===e||e.unsubscribe(),null===(n=this.inscricaoCoordenador)||void 0===n||n.unsubscribe(),null===(s=this.inscricaoAgenda)||void 0===s||s.unsubscribe(),null===(l=this.inscricaoProjetos)||void 0===l||l.unsubscribe(),null===(u=this.inscricaoContador)||void 0===u||u.unsubscribe()}setParametro(){this.parametro.setValue({diretores:this.diretor,coordenadores:this.coordenador,auditores:this.auditor,ano:this.hoje.getFullYear(),mes:this.hoje.getMonth()})}getDiretores(){const t=new f.w;t.id_empresa=this.globalService.id_empresa,t.grupo=this.usuariosService.getGruposDiretoria(),t.orderby="Raz\xe3o",this.inscricaoDiretor=this.usuariosService.getusuarios_01(t).subscribe(e=>{this.diretor=0;const n=new h.j;n.id=0,n.razao="TODOS",this.diretores.push(n),e.forEach(s=>{this.diretores.push(s)}),this.usuariosService.isDiretoria(this.globalService.getUsuario().grupo)?this.parametro.patchValue({diretores:this.globalService.getUsuario().id}):this.parametro.patchValue({diretores:this.diretor})},e=>{this.diretor=0,this.appSnackBar.openFailureSnackBar(`${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")})}getCoordenadores(){const t=new f.w;t.id_empresa=this.globalService.id_empresa,t.grupo=this.usuariosService.getGruposCoordenador(),t.orderby="Raz\xe3o",this.inscricaoCoordenador=this.usuariosService.getusuarios_01(t).subscribe(e=>{this.coordenador=0;const n=new h.j;n.id=0,n.razao="TODOS",this.coordenadores.push(n),e.forEach(s=>{this.coordenadores.push(s)}),this.parametro.patchValue({coordenadores:this.coordenador})},e=>{this.coordenador=0,this.appSnackBar.openFailureSnackBar(`${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")})}getAuditores(){const t=new f.w,e=this.usuariosService.getGruposCoordenador(),n=this.usuariosService.getGruposAuditor();t.id_empresa=this.globalService.id_empresa,e.forEach(s=>{t.grupo.push(s)}),n.forEach(s=>{t.grupo.push(s)}),t.orderby="Raz\xe3o",console.log("Coordenadores:",t),this.inscricaoAuditor=this.usuariosService.getusuarios_01(t).subscribe(s=>{this.auditor=0;const l=new h.j;l.id=0,l.razao="TODOS",this.auditores.push(l),s.forEach(u=>{this.auditores.push(u)}),this.parametro.patchValue({auditores:this.auditor})},s=>{this.auditor=0,this.appSnackBar.openFailureSnackBar(`${s.error.tabela} - ${s.error.erro} - ${s.error.message}`,"OK")})}getProjetos(){let t=new Z.m;t.id_empresa=1,t.contador="N",t.pagina=this.pageIndex+1,t.tamPagina=this.pageSize,this.globalService.setSpin(!0),this.inscricaoProjetos=this.projetosService.getProjetos_01(t).subscribe(e=>{this.globalService.setSpin(!1),this.lsProjetos=e},e=>{this.globalService.setSpin(!1),"Nehuma Informa\xe7\xe3o Para Esta Consulta."==e.error.message?(this.lsProjetos=[],this.appSnackBar.openSuccessSnackBar("Nenhuma Informa\xe7\xe3o Encontrada Para Esta Consulta!","OK")):(this.lsProjetos=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Projetos ${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK"))})}getProjetosContador(){let t=new Z.m;t.id_empresa=1,t.contador="S",this.inscricaoProjetos=this.projetosService.getProjetos_01(t).subscribe(e=>{this.globalService.setSpin(!1),this.length=e.total,this.getProjetos()},e=>{this.globalService.setSpin(!1),this.appSnackBar.openWarningnackBar("Nehum Projeto Encontrado!","OK")})}handlePageEvent(t){console.log(),this.pageIndex=t.pageIndex,this.pageSize=t.pageSize,this.getProjetos()}htmlFirstName(t){return(0,S.S4)(t)}setStyle(){return{"background-color":"blue"}}}return a.\u0275fac=function(t){return new(t||a)(o.Y36(m.qu),o.Y36(A.J),o.Y36(C.T),o.Y36(b.U),o.Y36(g.F0),o.Y36(x.W))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-programacao"]],decls:64,vars:16,consts:[[1,"div-barra"],[1,"example-spacer"],["aria-label","Select page",1,"paginator",3,"length","pageSize","showFirstLastButtons","pageSizeOptions","hidePageSize","pageIndex","page"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Retorno","matTooltipPosition","above"],["mat-icon-button","","aria-label","Example icon-button with share icon "],["autocomplete","off",3,"formGroup"],[1,"col-med-6"],["field","","appearance","outline",1,"col-max"],["formControlName","diretores"],[3,"value",4,"ngFor","ngForOf"],["formControlName","coordenadores"],["formControlName","auditores"],["formControlName","ano"],["formControlName","mes"],[1,"table-wrapper"],["mat-table","",1,"Browse","mat-elevation-z8",3,"dataSource"],["matColumnDef","resexec"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["matColumnDef","razao"],["matColumnDef","descricao"],["matColumnDef","periodo"],["matColumnDef","acao"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"value"],["mat-header-cell",""],["mat-cell",""],[1,"circulo",3,"ngStyle"],[1,"coluna_multipla"],[3,"ngStyle"],[1,"button-container-right"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"mat-toolbar"),o.TgZ(2,"span",1),o._uU(3,"Programa\xe7\xe3o:"),o.qZA(),o.TgZ(4,"mat-paginator",2),o.NdJ("page",function(s){return e.handlePageEvent(s)}),o.qZA(),o.TgZ(5,"button",3),o.TgZ(6,"mat-icon"),o._uU(7,"rotate_right"),o.qZA(),o.qZA(),o.TgZ(8,"button",4),o.TgZ(9,"mat-icon"),o._uU(10,"home"),o.qZA(),o.qZA(),o.TgZ(11,"button",5),o.TgZ(12,"mat-icon"),o._uU(13,"add_circle_outline"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(14,"div"),o.TgZ(15,"form",6),o.TgZ(16,"div",7),o.TgZ(17,"mat-form-field",8),o.TgZ(18,"mat-label"),o._uU(19,"Diretores"),o.qZA(),o.TgZ(20,"mat-select",9),o.YNc(21,q,2,2,"mat-option",10),o.qZA(),o.qZA(),o.TgZ(22,"mat-form-field",8),o.TgZ(23,"mat-label"),o._uU(24,"Coordenadores"),o.qZA(),o.TgZ(25,"mat-select",11),o.YNc(26,D,2,2,"mat-option",10),o.qZA(),o.qZA(),o.TgZ(27,"mat-form-field",8),o.TgZ(28,"mat-label"),o._uU(29,"Auditores"),o.qZA(),o.TgZ(30,"mat-select",12),o.YNc(31,Y,2,2,"mat-option",10),o.qZA(),o.qZA(),o.TgZ(32,"mat-form-field",8),o.TgZ(33,"mat-label"),o._uU(34,"Ano"),o.qZA(),o.TgZ(35,"mat-select",13),o.YNc(36,B,2,2,"mat-option",10),o.qZA(),o.qZA(),o.TgZ(37,"mat-form-field",8),o.TgZ(38,"mat-label"),o._uU(39,"M\xeas"),o.qZA(),o.TgZ(40,"mat-select",14),o.YNc(41,E,2,2,"mat-option",10),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(42,"div",15),o.TgZ(43,"table",16),o.ynx(44,17),o.YNc(45,J,2,0,"th",18),o.YNc(46,Q,2,1,"td",19),o.BQk(),o.ynx(47,20),o.YNc(48,M,2,0,"th",18),o.YNc(49,w,2,1,"td",19),o.BQk(),o.ynx(50,21),o.YNc(51,F,2,0,"th",18),o.YNc(52,R,6,4,"td",19),o.BQk(),o.ynx(53,22),o.YNc(54,I,2,0,"th",18),o.YNc(55,G,2,1,"td",19),o.BQk(),o.ynx(56,23),o.YNc(57,K,2,0,"th",18),o.YNc(58,L,4,8,"td",19),o.BQk(),o.ynx(59,24),o.YNc(60,k,2,0,"th",18),o.YNc(61,V,5,0,"td",19),o.BQk(),o.YNc(62,H,1,0,"tr",25),o.YNc(63,W,1,0,"tr",26),o.qZA(),o.qZA()),2&t&&(o.xp6(4),o.Q6J("length",e.length)("pageSize",e.pageSize)("showFirstLastButtons",!0)("pageSizeOptions",e.showPageSizeOptions?e.pageSizeOptions:o.DdM(15,X))("hidePageSize",e.hidePageSize)("pageIndex",e.pageIndex),o.xp6(11),o.Q6J("formGroup",e.parametro),o.xp6(6),o.Q6J("ngForOf",e.diretores),o.xp6(5),o.Q6J("ngForOf",e.coordenadores),o.xp6(5),o.Q6J("ngForOf",e.auditores),o.xp6(5),o.Q6J("ngForOf",e.anos),o.xp6(5),o.Q6J("ngForOf",e.meses.meses),o.xp6(2),o.Q6J("dataSource",e.lsProjetos),o.xp6(19),o.Q6J("matHeaderRowDef",e.displayedColumns),o.xp6(1),o.Q6J("matRowDefColumns",e.displayedColumns))},directives:[_.Ye,j.NW,z.lW,y.Hw,U.gM,m._Y,m.JL,m.sg,v.KE,v.hX,N.gD,m.JJ,m.u,p.sg,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,O.ey,c.ge,c.ev,p.PC,c.XQ,c.Gk],pipes:[p.uU],styles:["table[_ngcontent-%COMP%]{width:100%}th[_ngcontent-%COMP%]{font-size:22px}td[_ngcontent-%COMP%]{font-size:14px}.table-wrapper[_ngcontent-%COMP%]{overflow:auto;height:75%;padding:15px}.paginator[_ngcontent-%COMP%]{font-size:14px;color:#00f;background-color:inherit}.coluna_multipla[_ngcontent-%COMP%]{display:block;line-height:7px}"]}),a})()}];let to=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[[g.Bz.forChild(oo)],g.Bz]}),a})();var ao=i(4589),eo=i(4466);let ro=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[[p.ez,to,ao.q,m.u5,m.UX,eo.m]]}),a})()},6468:(T,d,i)=>{i.d(d,{w:()=>p});class p{constructor(){this.id_empresa=0,this.id=0,this.ativo="",this.razao="",this.cnpj_cpf="",this.grupo=[],this.timer="",this.ticket="",this.flag_ponte="",this.data="",this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}}}]);