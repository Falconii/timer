"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[743],{2743:(X,A,i)=>{i.r(A),i.d(A,{GruEcoScrollModule:()=>L});var q=i(4589),v=i(8583),m=i(4655),n=i(7117),u=i(3032),P=i(1299),b=i(3430),S=i(1441),g=i(9243),N=i(5062),o=i(7716),l=i(3679),T=i(1324),O=i(789),E=i(7006),F=i(5626),_=i(2522),J=i(3968),G=i(1095),j=i(1436),I=i(6627),d=i(8295),U=i(7441),y=i(9983),k=i(2458),w=i(7234);function z(r,c){if(1&r&&(o.TgZ(0,"mat-option",19),o._uU(1),o.qZA()),2&r){const t=c.$implicit;o.Q6J("value",t),o.xp6(1),o.hij(" ",t," ")}}function B(r,c){if(1&r&&(o.TgZ(0,"mat-option",19),o._uU(1),o.qZA()),2&r){const t=c.$implicit;o.Q6J("value",t),o.xp6(1),o.hij(" ",t," ")}}function V(r,c){if(1&r){const t=o.EpF();o.TgZ(0,"tr"),o.TgZ(1,"td"),o.TgZ(2,"div"),o.TgZ(3,"mat-label",20),o._uU(4),o.qZA(),o.qZA(),o.qZA(),o.TgZ(5,"td"),o.TgZ(6,"div"),o.TgZ(7,"mat-label",20),o._uU(8),o.qZA(),o.qZA(),o.qZA(),o.TgZ(9,"td",21),o.TgZ(10,"barra-acoes",22),o.NdJ("changeOpcao",function(a){const p=o.CHM(t).$implicit;return o.oxw().escolha(a,p)}),o.qZA(),o.qZA(),o.qZA()}if(2&r){const t=c.$implicit;o.xp6(4),o.Oqu(t.id),o.xp6(4),o.Oqu(t.razao),o.xp6(2),o.Q6J("BARRA_ATIVIDADES",!1)("EXCLUIR",!1)}}let x=(()=>{class r{constructor(t,e,a,s,p,f,h){this.formBuilder=t,this.grupoEconomicoService=e,this.router=a,this.route=s,this.appSnackBar=p,this.globalService=f,this.parametrosService=h,this.grupos=[],this.erro="",this.opcoesOrdenacao=[],this.opcoesCampo=[],this.tamPagina=50,this.controlePaginas=new b.e(this.tamPagina,0),this.retorno=!1,this.parametro=new S.M,this.parametros=t.group({ordenacao:[null],campo:[null],filtro:[null]}),this.inscricaoRota=s.params.subscribe(H=>{void 0===H.retorno?this.retorno=!1:(this.retorno=!0,this.globalService.estadoFind("economico"))}),this.loadParametros()}ngOnInit(){this.getGruposContador()}ngOnDestroy(){var t,e,a,s;null===(t=this.inscricaoGetAll)||void 0===t||t.unsubscribe(),null===(e=this.inscricaoGetFiltro)||void 0===e||e.unsubscribe(),null===(a=this.inscricaoParametro)||void 0===a||a.unsubscribe(),null===(s=this.inscricaoRota)||void 0===s||s.unsubscribe()}escolha(t,e){if(void 0!==e){let a=this.parametro.getParametro();Object(a).new=!1,Object(a).id_retorno=e.id,Object(a).page=this.controlePaginas.getPaginalAtual(),Object(a).op_ordenacao=this.opcoesOrdenacao.findIndex(s=>this.parametros.value.ordenacao==s),Object(a).op_pesquisar=this.opcoesCampo.findIndex(s=>this.parametros.value.campo==s),Object(a).descricao=this.parametros.value.filtro,this.parametro.parametro=JSON.stringify(a),this.globalService.estadoSave(this.parametro),this.router.navigate(["/economicos-scroll/economico-scroll",e.id_empresa,e.id,t])}else{let a=this.parametro.getParametro();Object(a).new=!1,Object(a).id_retorno=0,Object(a).page=this.controlePaginas.getPaginalAtual(),Object(a).op_ordenacao=this.opcoesOrdenacao.findIndex(s=>this.parametros.value.ordenacao==s),Object(a).op_pesquisar=this.opcoesCampo.findIndex(s=>this.parametros.value.campo==s),Object(a).descricao=this.parametros.value.filtro,this.parametro.parametro=JSON.stringify(a),this.globalService.estadoSave(this.parametro),this.router.navigate(["/economicos-scroll/economico-scroll",1,0,t])}}getAcoes(){return u.I}getGrupos(){let t=new P.y;if(t.id_empresa=1,"C\xf3digo"==this.parametros.value.campo){let e=parseInt(this.parametros.value.filtro,10);console.log("key",e),t.id=isNaN(e)?0:e}"Raz\xe3o"==this.parametros.value.campo&&(t.razao=this.parametros.value.filtro.toUpperCase()),t.orderby=this.parametros.value.ordenacao,t.pagina=this.controlePaginas.getPaginalAtual(),t.contador="N",t.tamPagina=this.tamPagina,this.globalService.setSpin(!0),this.inscricaoGetFiltro=this.grupoEconomicoService.getGrupoEcos_01(t).subscribe(e=>{this.globalService.setSpin(!1),this.grupos=e;const a=this.grupos.findIndex(p=>p.id==(0,n.P0)(this.parametro.getParametro(),"id_retorno"));setTimeout(()=>this.viewPort.scrollToIndex(a),10),this.retorno=!1;let s=this.parametro.getParametro();Object(s).id_retorno=0,Object(s).new=!1,this.parametro.parametro=JSON.stringify(s)},e=>{let a=this.parametro.getParametro();Object(a).id_retorno=0,Object(a).new=!1,this.retorno=!1,this.globalService.setSpin(!1),this.grupos=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Grupos Econ\xf4micos ${(0,n.bZ)(e)}`,"OK")})}getGruposContador(){let t=new P.y;if(t.id_empresa=1,t.orderby="C\xf3digo","C\xf3digo"==this.parametros.value.campo){let e=parseInt(this.parametros.value.filtro,10);t.id=isNaN(e)?0:e}"Raz\xe3o"==this.parametros.value.campo&&(t.razao=this.parametros.value.filtro.toUpperCase()),t.orderby=this.parametros.value.ordenacao,t.contador="S",t.tamPagina=this.tamPagina,this.globalService.setSpin(!0),this.inscricaoGetFiltro=this.grupoEconomicoService.getGrupoEcos_01(t).subscribe(e=>{if(this.globalService.setSpin(!1),this.controlePaginas=new b.e(this.tamPagina,0==e.total?1:e.total),this.retorno)if((0,n.xc)(this.parametro.getParametro(),"new"))this.controlePaginas.goLast();else{let a=this.parametro.getParametro();this.controlePaginas.setPaginaAtual(Object(a).page)}this.getGrupos()},e=>{this.globalService.setSpin(!1),this.controlePaginas=new b.e(this.tamPagina,0),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Grupos Econ\xf4micos ${(0,n.bZ)(e)}`,"OK")})}getParametro(){this.globalService.setSpin(!0);let t=new N.E;t.id_empresa=this.parametro.id_empresa,t.modulo=this.parametro.modulo,t.assinatura=this.parametro.assinatura,t.id_usuario=this.parametro.id_usuario,t.orderby="Usu\xe1rio",this.inscricaoParametro=this.parametrosService.getParametrosParametro01(t).subscribe(e=>{console.log("achei...",e),this.globalService.setSpin(!1),this.parametro=new S.M,this.parametro.id_empresa=e[0].id_empresa,this.parametro.modulo=e[0].modulo,this.parametro.id_usuario=e[0].id_usuario,this.parametro.assinatura=e[0].assinatura,this.parametro.parametro=e[0].parametro,this.parametro.user_insert=e[0].user_insert,this.parametro.user_update=e[0].user_update,this.opcoesOrdenacao=(0,n.FO)(this.parametro.getParametro(),"ordenacao"),this.opcoesCampo=(0,n.FO)(this.parametro.getParametro(),"pesquisar"),this.setValues()},e=>{this.globalService.setSpin(!1),this.setValues()})}updateParametros(){this.globalService.setSpin(!0),this.parametro.user_insert=this.globalService.usuario.id,this.parametro.user_update=this.globalService.usuario.id;let t=this.parametro.getParametro();Object(t).op_ordenacao=this.opcoesOrdenacao.findIndex(e=>this.parametros.value.ordenacao==e),Object(t).op_pesquisar=this.opcoesCampo.findIndex(e=>this.parametros.value.campo==e),Object(t).descricao=this.parametros.value.filtro,Object(t).page=0,Object(t).new=!1,this.parametro.parametro=JSON.stringify(t),this.inscricaoParametro=this.parametrosService.ParametroAtualiza(this.parametro).subscribe(e=>{this.globalService.setSpin(!1),this.appSnackBar.openSuccessSnackBar("Par\xe2metros Atualizados","OK")},e=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Grava\xe7\xe3o Dos Parametros ${(0,n.bZ)(e)}`,"OK")})}setValues(){this.parametros.setValue({ordenacao:this.opcoesOrdenacao[(0,n.P0)(this.parametro.getParametro(),"op_ordenacao")],campo:this.opcoesCampo[(0,n.P0)(this.parametro.getParametro(),"op_pesquisar")],filtro:(0,n.SL)(this.parametro.getParametro(),"descricao")})}getTexto(){return n.fd}onChangePage(){this.getGrupos()}onChangeParametros(){this.getGruposContador()}onHome(){this.router.navigate([""])}onSaveConfig(){this.updateParametros()}loadParametros(){if(this.parametro=new S.M,this.parametro.id_empresa=this.globalService.getIdEmpresa(),this.parametro.modulo="economico",this.parametro.assinatura="V1.00 26/08/23",this.parametro.id_usuario=this.globalService.usuario.id,this.parametro.parametro='\n    {\n      "op_ordenacao": 0,\n      "ordenacao": ["C\xf3digo", "Raz\xe3o"],\n      "op_pesquisar": 1,\n      "pesquisar": ["C\xf3digo", "Raz\xe3o"],\n      "descricao": "",\n      "page": 1,\n      "new": false,\n      "id_retorno":0\n    }',this.opcoesOrdenacao=(0,n.FO)(this.parametro.getParametro(),"ordenacao"),this.opcoesCampo=(0,n.FO)(this.parametro.getParametro(),"pesquisar"),this.retorno&&null!==this.globalService.estadoFind("economico")){const t=this.globalService.estadoFind("economico");if(null!=t){if((0,n.xc)(t.getParametro(),"new")){let e=this.parametro.getParametro();Object(e).id_retorno=(0,n.P0)(t.getParametro(),"id_retorno"),this.parametro.parametro=JSON.stringify(e),this.setPosicaoInclusao()}else this.controlePaginas.setPaginaAtual((0,n.P0)(t.getParametro(),"page")),this.parametro.setParametro(t.getParametro());this.globalService.estadoDelete(t),this.setValues()}}else this.getParametro()}setPosicaoInclusao(){const t=this.parametro.getParametro();Object(t).op_ordenacao=0,Object(t).op_pesquisar=0,Object(t).descricao="",Object(t).new=!0,this.parametro.setParametro(t)}}return r.\u0275fac=function(t){return new(t||r)(o.Y36(l.qu),o.Y36(T.Z),o.Y36(m.F0),o.Y36(m.gz),o.Y36(O.W),o.Y36(E.U),o.Y36(F.u))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-crud-grupo-eco"]],viewQuery:function(t,e){if(1&t&&o.Gf(g.N7,5),2&t){let a;o.iGM(a=o.CRH())&&(e.viewPort=a.first)}},decls:43,vars:7,consts:[[1,"div-barra"],[1,"example-spacer"],[3,"controle","changePage"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Atualizar","matTooltipPosition","above",1,"example-icon",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Salvar Par\xe2metros","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Retorno","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above",3,"matTooltip","click"],[1,"parametros"],["autocomplete","off",1,"col-med-4",3,"formGroup"],["field","","appearance","outline",1,"col-max"],["formControlName","ordenacao",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","campo",3,"selectionChange"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","filtro"],[1,"content",3,"itemSize"],[1,"Browse-Scroll"],[1,"coluna-cabec"],[4,"cdkVirtualFor","cdkVirtualForOf"],[3,"value"],[1,"Browse_Lanc_td"],[1,"acoes"],[3,"BARRA_ATIVIDADES","EXCLUIR","changeOpcao"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"mat-toolbar"),o.TgZ(2,"span",1),o._uU(3,"Grp Econ\xf4micos: "),o.qZA(),o.TgZ(4,"app-navegator",2),o.NdJ("changePage",function(){return e.onChangePage()}),o.qZA(),o.TgZ(5,"button",3),o.NdJ("click",function(){return e.getGruposContador()}),o.TgZ(6,"mat-icon"),o._uU(7,"rotate_right"),o.qZA(),o.qZA(),o.TgZ(8,"button",4),o.NdJ("click",function(){return e.onSaveConfig()}),o.TgZ(9,"mat-icon"),o._uU(10,"brightness_high"),o.qZA(),o.qZA(),o.TgZ(11,"button",5),o.NdJ("click",function(){return e.onHome()}),o.TgZ(12,"mat-icon"),o._uU(13,"home"),o.qZA(),o.qZA(),o.TgZ(14,"button",6),o.NdJ("click",function(){return e.escolha(e.getAcoes().Inclusao)}),o.TgZ(15,"mat-icon"),o._uU(16,"add_circle_outline"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(17,"div",7),o.TgZ(18,"form",8),o.TgZ(19,"mat-form-field",9),o.TgZ(20,"mat-label"),o._uU(21,"Ordena\xe7\xe3o"),o.qZA(),o.TgZ(22,"mat-select",10),o.NdJ("selectionChange",function(){return e.onChangeParametros()}),o.YNc(23,z,2,2,"mat-option",11),o.qZA(),o.qZA(),o.TgZ(24,"mat-form-field",9),o.TgZ(25,"mat-label"),o._uU(26,"Pesquisar Por"),o.qZA(),o.TgZ(27,"mat-select",12),o.NdJ("selectionChange",function(){return e.onChangeParametros()}),o.YNc(28,B,2,2,"mat-option",11),o.qZA(),o.qZA(),o.TgZ(29,"mat-form-field",13),o.TgZ(30,"mat-label"),o._uU(31,"Descri\xe7\xe3o"),o.qZA(),o._UZ(32,"input",14),o.qZA(),o.qZA(),o.qZA(),o.TgZ(33,"cdk-virtual-scroll-viewport",15),o.TgZ(34,"table",16),o.TgZ(35,"tr",17),o.TgZ(36,"th"),o._uU(37,"C\xf3digo"),o.qZA(),o.TgZ(38,"th"),o._uU(39,"Raz\xe3o"),o.qZA(),o.TgZ(40,"th"),o._uU(41,"A\xc7\xd5ES"),o.qZA(),o.qZA(),o.YNc(42,V,11,4,"tr",18),o.qZA(),o.qZA()),2&t&&(o.xp6(4),o.Q6J("controle",e.controlePaginas),o.xp6(10),o.Q6J("matTooltip",e.getTexto().incluir),o.xp6(4),o.Q6J("formGroup",e.parametros),o.xp6(5),o.Q6J("ngForOf",e.opcoesOrdenacao),o.xp6(5),o.Q6J("ngForOf",e.opcoesCampo),o.xp6(5),o.Q6J("itemSize",50),o.xp6(9),o.Q6J("cdkVirtualForOf",e.grupos))},directives:[_.Ye,J.J,G.lW,j.gM,I.Hw,l._Y,l.JL,l.sg,d.KE,d.hX,U.gD,l.JJ,l.u,v.sg,y.Nt,l.Fj,g.N7,g.xd,g.x0,k.ey,w.C],styles:['.content[_ngcontent-%COMP%]{height:60%;overflow:auto}.Browse-Scroll[_ngcontent-%COMP%]{border-collapse:collapse;margin-left:auto;margin-right:auto;width:100%;height:inherit}td[_ngcontent-%COMP%]{font-size:small;color:#00f;font-family:"Times New Roman",Times,serif}tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2aa}.acoes[_ngcontent-%COMP%]{color:#8b0000;width:100px}.go-up[_ngcontent-%COMP%]{margin-top:-10px}']}),r})();var Z=i(8239),C=i(317),R=i(9267);function M(r,c){if(1&r){const t=o.EpF();o.TgZ(0,"button",12),o.NdJ("click",function(){return o.CHM(t),o.oxw().onSubmit()}),o.TgZ(1,"mat-icon"),o._uU(2,"check"),o.qZA(),o._uU(3),o.qZA()}if(2&r){const t=o.oxw();o.xp6(3),o.hij(" ",t.acao," ")}}function Y(r,c){if(1&r&&(o.TgZ(0,"mat-error"),o._uU(1),o.qZA()),2&r){const t=o.oxw();let e;o.xp6(1),o.Oqu(null==(e=t.formulario.get("razao"))||null==e.errors?null:e.errors.message)}}const D=[{path:"",redirectTo:"economicos-scroll",pathMatch:"full"},{path:"economicos-scroll",component:x},{path:"economicos-scroll/:retorno",component:x},{path:"economico-scroll/:id_empresa/:id/:acao",component:(()=>{class r{constructor(t,e,a,s,p,f){this.formBuilder=t,this.grupoEconomicoService=e,this.globalService=a,this.route=s,this.router=p,this.appSnackBar=f,this.grupo=new C.n,this.acao="Sem Defini\xe7\xe3o",this.idAcao=u.I.Inclusao,this.readOnly=!0,this.labelCadastro="",this.formulario=t.group({id:[{value:"",disabled:!0}],razao:[{value:""},[(0,R.S)(3,20,!0)]]}),this.grupo=new C.n,this.inscricaoRota=s.params.subscribe(h=>{this.grupo.id_empresa=h.id_empresa,this.grupo.id=h.id,this.idAcao=h.acao,this.setAcao(h.acao)})}ngOnInit(){this.idAcao==u.I.Inclusao?(this.grupo=new C.n,this.grupo.id_empresa=this.globalService.getIdEmpresa()):this.getGrupo(),this.setValue()}ngOnDestroy(){var t,e,a;null===(t=this.inscricaoGetEmpresa)||void 0===t||t.unsubscribe(),null===(e=this.inscricaoRota)||void 0===e||e.unsubscribe(),null===(a=this.inscricaoAcao)||void 0===a||a.unsubscribe()}onSubmit(){this.formulario.valid?this.executaAcao():this.appSnackBar.openFailureSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK")}setValue(){this.formulario.setValue({id:this.grupo.id,razao:this.grupo.razao})}getLabelCancel(){return this.idAcao==u.I.Consulta?"Voltar":"Cancelar"}onRetorno(){const t=this.globalService.estadoFind("economico");if(null!=t){let e=t.getParametro();Object(e).new=this.idAcao==u.I.Inclusao,Object(e).id_retorno=this.grupo.id,t.parametro=JSON.stringify(e),this.globalService.estadoSave(t)}this.router.navigate(["/economicos-scroll/economicos-scroll","SIM"])}onCancel(){const t=this.globalService.estadoFind("economico");if(null!=t){let e=t.getParametro();Object(e).new=!1,Object(e).id_retorno=this.idAcao==u.I.Consulta?this.grupo.id:0,t.parametro=JSON.stringify(e),this.globalService.estadoSave(t)}this.router.navigate(["/economicos-scroll/economicos-scroll","SIM"])}getGrupo(){this.globalService.setSpin(!0),this.inscricaoGetEmpresa=this.grupoEconomicoService.getGrupoEco(this.grupo.id_empresa,this.grupo.id).subscribe(t=>{this.globalService.setSpin(!1),this.grupo=t,this.setValue()},t=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Pesquisa Grupo Econ\xf4mico ${(0,n.bZ)(t)}`,"OK")})}setAcao(t){switch(+t){case u.I.Inclusao:this.acao="Gravar",this.labelCadastro="Grupos Econ\xf4micos - Inclus\xe3o.",this.readOnly=!1;break;case u.I.Edicao:this.acao="Gravar",this.labelCadastro="Grupos Econ\xf4micos - Altera\xe7\xe3o.",this.readOnly=!1;break;case u.I.Consulta:this.acao="Voltar",this.labelCadastro="Grupos Econ\xf4micos - Consulta.",this.readOnly=!0;break;case u.I.Exclusao:this.acao="Excluir",this.labelCadastro="Grupos Econ\xf4micos - Exclus\xe3o.",this.readOnly=!0}}executaAcao(){var t=this;switch(this.grupo.razao=this.formulario.value.razao,+this.idAcao){case u.I.Inclusao:this.grupo.user_insert=this.globalService.getUsuario().id,this.globalService.setSpin(!0),this.inscricaoAcao=this.grupoEconomicoService.GrupoEcoInsert(this.grupo).subscribe(function(){var e=(0,Z.Z)(function*(a){t.grupo.id=a.id,t.globalService.setSpin(!1),t.onRetorno()});return function(a){return e.apply(this,arguments)}}(),e=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Inclus\xe3o ${(0,n.bZ)(e)}`,"OK")});break;case u.I.Edicao:this.grupo.user_update=this.globalService.getUsuario().id,this.inscricaoAcao=this.grupoEconomicoService.GrupoEcoUpdate(this.grupo).subscribe(function(){var e=(0,Z.Z)(function*(a){t.globalService.setSpin(!1),t.onRetorno()});return function(a){return e.apply(this,arguments)}}(),e=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Altera\xe7\xe3o ${(0,n.bZ)(e)}`,"OK")});break;case u.I.Exclusao:this.globalService.setSpin(!0),this.inscricaoAcao=this.grupoEconomicoService.GrupoEcoDelete(this.grupo.id_empresa,this.grupo.id).subscribe(function(){var e=(0,Z.Z)(function*(a){t.globalService.setSpin(!1),t.onCancel()});return function(a){return e.apply(this,arguments)}}(),e=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Exclusao ${(0,n.bZ)(e)}`,"OK")})}}delay(t){return new Promise(e=>setTimeout(e,t))}getAcoes(){return u.I}touchedOrDirty(t){var e,a;return!(!(null===(e=this.formulario.get(t))||void 0===e?void 0:e.touched)&&!(null===(a=this.formulario.get(t))||void 0===a?void 0:a.dirty))}}return r.\u0275fac=function(t){return new(t||r)(o.Y36(l.qu),o.Y36(T.Z),o.Y36(E.U),o.Y36(m.gz),o.Y36(m.F0),o.Y36(O.W))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-gru-eco-view"]],decls:22,vars:6,consts:[[1,"div-barra"],[1,"example-spacer"],[1,"button-container-right"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],["autocomplete","off",3,"formGroup"],[1,"col-med-3"],["appearance","outline",1,"col-max"],["matInput","","formControlName","id"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","razao","oninput","this.value = this.value.toUpperCase()","autofocus","",3,"readonly"],[4,"ngIf"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){if(1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"mat-toolbar"),o.TgZ(2,"span",1),o.TgZ(3,"mat-label"),o._uU(4),o.qZA(),o.qZA(),o.TgZ(5,"div",2),o.YNc(6,M,4,1,"button",3),o.TgZ(7,"button",4),o.NdJ("click",function(){return e.onCancel()}),o.TgZ(8,"mat-icon"),o._uU(9,"cancel"),o.qZA(),o._uU(10),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"form",5),o.TgZ(12,"div",6),o.TgZ(13,"mat-form-field",7),o.TgZ(14,"mat-label"),o._uU(15,"C\xd3DIGO"),o.qZA(),o._UZ(16,"input",8),o.qZA(),o.TgZ(17,"mat-form-field",9),o.TgZ(18,"mat-label"),o._uU(19,"Raz\xe3o Social"),o.qZA(),o._UZ(20,"input",10),o.YNc(21,Y,2,1,"mat-error",11),o.qZA(),o.qZA(),o.qZA()),2&t){let a;o.xp6(4),o.Oqu(e.labelCadastro),o.xp6(2),o.Q6J("ngIf",3!=e.idAcao),o.xp6(4),o.hij(" ",e.getLabelCancel()," "),o.xp6(1),o.Q6J("formGroup",e.formulario),o.xp6(9),o.Q6J("readonly",e.readOnly),o.xp6(1),o.Q6J("ngIf",(null==(a=e.formulario.get("razao"))||null==a.errors?null:a.errors.ValidatorStringLen)&&e.touchedOrDirty("razao"))}},directives:[_.Ye,d.hX,v.O5,G.lW,I.Hw,l._Y,l.JL,l.sg,d.KE,y.Nt,l.Fj,l.JJ,l.u,d.TO],styles:[""]}),r})(),canActivate:[]}];let Q=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[m.Bz.forChild(D)],m.Bz]}),r})();var K=i(2559),$=i(4466);let L=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[v.ez,Q,q.q,l.u5,g.Cl,l.UX,$.m,K.yI.forChild()]]}),r})()}}]);