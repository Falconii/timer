"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[344],{7344:(H,Z,r)=>{r.r(Z),r.d(Z,{MotivoApoModule:()=>G});var v=r(8583),m=r(4655),y=r(3914),l=r(3032),q=r(7117),o=r(7716),s=r(3679),b=r(3073),C=r(789),h=r(4590),T=r(2522),_=r(1095),I=r(1436),M=r(6627),p=r(8295),S=r(7441),x=r(9983),O=r(2458),g=r(3738);function U(e,n){if(1&e&&(o.TgZ(0,"mat-option",15),o._uU(1),o.qZA()),2&e){const i=n.$implicit;o.Q6J("value",i),o.xp6(1),o.hij(" ",i," ")}}function N(e,n){if(1&e&&(o.TgZ(0,"mat-option",15),o._uU(1),o.qZA()),2&e){const i=n.$implicit;o.Q6J("value",i),o.xp6(1),o.hij(" ",i," ")}}function J(e,n){if(1&e){const i=o.EpF();o.TgZ(0,"div",16),o.TgZ(1,"mat-card",17),o.NdJ("click",function(){const u=o.CHM(i).$implicit,c=o.oxw();return c.escolha(c.getAcoes().Consulta,u)}),o.TgZ(2,"mat-card-actions"),o.TgZ(3,"span",18),o.TgZ(4,"button",4),o.NdJ("click",function(){const u=o.CHM(i).$implicit,c=o.oxw();return c.escolha(c.getAcoes().Edicao,u)}),o.TgZ(5,"mat-icon"),o._uU(6,"edit"),o.qZA(),o.qZA(),o.TgZ(7,"button",4),o.NdJ("click",function(){const u=o.CHM(i).$implicit,c=o.oxw();return c.escolha(c.getAcoes().Exclusao,u)}),o.TgZ(8,"mat-icon"),o._uU(9,"delete"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(10,"mat-card-content"),o.TgZ(11,"mat-label",19),o._uU(12,"C\xf3digo:"),o.qZA(),o.TgZ(13,"mat-label",20),o._uU(14),o.qZA(),o.TgZ(15,"mat-label",21),o._uU(16,"Motivo:"),o.qZA(),o.TgZ(17,"mat-label",20),o._uU(18),o.qZA(),o.TgZ(19,"mat-label",21),o._uU(20,"Produtivo:"),o.qZA(),o.TgZ(21,"mat-label",20),o._uU(22),o.qZA(),o.qZA(),o.qZA(),o.qZA()}if(2&e){const i=n.$implicit,t=o.oxw();o.xp6(4),o.Q6J("matTooltip",t.getTexto().alterar),o.xp6(3),o.Q6J("matTooltip",t.getTexto().excluir),o.xp6(7),o.Oqu(i.codigo),o.xp6(4),o.Oqu(i.motivo),o.xp6(4),o.Oqu(i.produtivo)}}let k=(()=>{class e{constructor(i,t,a,u,c){this.formBuilder=i,this.motivoApoService=t,this.router=a,this.appSnackBar=u,this.globalService=c,this.motivos=[],this.erro="",this.opcoesOrdenacao=["C\xf3digo","Motivo"],this.opcoesCampo=["C\xf3digo","Motivo"],this.isSingleClick=!0,this.parametros=i.group({ordenacao:[null],campo:[null],filtro:[null]}),this.setValues()}ngOnInit(){this.getmotivos()}setValues(){this.parametros.setValue({ordenacao:"C\xf3digo",campo:"C\xf3digo",filtro:""})}ngOnDestroy(){var i,t;null===(i=this.inscricaoGetAll)||void 0===i||i.unsubscribe(),null===(t=this.inscricaoGetFiltro)||void 0===t||t.unsubscribe()}escolha(i,t){void 0!==t?(console.log(t),this.router.navigate(["/motivos/motivo",t.id_empresa,t.codigo,i])):this.router.navigate(["/motivos/motivo",1,"",i])}getAcoes(){return l.I}getmotivos(){let i=new y.V;i.id_empresa=1,"C\xf3digo"==this.parametros.value.campo&&(i.codigo=this.parametros.value.filtro.toUpperCase()),"Motivo"==this.parametros.value.campo&&(i.motivo=this.parametros.value.filtro.toUpperCase()),i.orderby=this.parametros.value.ordenacao,this.globalService.setSpin(!0),this.inscricaoGetFiltro=this.motivoApoService.getMotivoApos_01(i).subscribe(t=>{this.globalService.setSpin(!1),this.motivos=t},t=>{this.globalService.setSpin(!1),this.motivos=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Nas motivos ${t.error.tabela} - ${t.error.erro} - ${t.error.message}`,"OK")})}getTexto(){return q.fd}onHome(){this.router.navigate([""])}}return e.\u0275fac=function(i){return new(i||e)(o.Y36(s.qu),o.Y36(b.s),o.Y36(m.F0),o.Y36(C.W),o.Y36(h.U))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-crud-motivo-apo"]],decls:31,vars:5,consts:[[1,"div-barra"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Retorno","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Atualizar","matTooltipPosition","above",1,"example-icon",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above",3,"matTooltip","click"],[1,"parametros"],["autocomplete","off",1,"col-med-4",3,"formGroup"],["field","","appearance","outline",1,"col-max"],["formControlName","ordenacao"],[3,"value",4,"ngFor","ngForOf"],["formControlName","campo"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","filtro"],[1,"Browse"],["class","linha",4,"ngFor","ngForOf"],[3,"value"],[1,"linha"],[1,"example-card",3,"click"],[1,"button-container-right"],[1,"labelTitleFirst"],[1,"labelData"],[1,"labelTitle"]],template:function(i,t){1&i&&(o.TgZ(0,"div",0),o.TgZ(1,"mat-toolbar"),o.TgZ(2,"span",1),o._uU(3,"Motivos De Apontamento: "),o.qZA(),o.TgZ(4,"button",2),o.NdJ("click",function(){return t.onHome()}),o.TgZ(5,"mat-icon"),o._uU(6,"home"),o.qZA(),o.qZA(),o.TgZ(7,"button",3),o.NdJ("click",function(){return t.getmotivos()}),o.TgZ(8,"mat-icon"),o._uU(9,"rotate_right"),o.qZA(),o.qZA(),o.TgZ(10,"button",4),o.NdJ("click",function(){return t.escolha(t.getAcoes().Inclusao)}),o.TgZ(11,"mat-icon"),o._uU(12,"add_circle_outline"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(13,"div",5),o.TgZ(14,"form",6),o.TgZ(15,"mat-form-field",7),o.TgZ(16,"mat-label"),o._uU(17,"Ordena\xe7\xe3o"),o.qZA(),o.TgZ(18,"mat-select",8),o.YNc(19,U,2,2,"mat-option",9),o.qZA(),o.qZA(),o.TgZ(20,"mat-form-field",7),o.TgZ(21,"mat-label"),o._uU(22,"Pesquisar Por"),o.qZA(),o.TgZ(23,"mat-select",10),o.YNc(24,N,2,2,"mat-option",9),o.qZA(),o.qZA(),o.TgZ(25,"mat-form-field",11),o.TgZ(26,"mat-label"),o._uU(27,"Descri\xe7\xe3o"),o.qZA(),o._UZ(28,"input",12),o.qZA(),o.qZA(),o.qZA(),o.TgZ(29,"div",13),o.YNc(30,J,23,5,"div",14),o.qZA()),2&i&&(o.xp6(10),o.Q6J("matTooltip",t.getTexto().incluir),o.xp6(4),o.Q6J("formGroup",t.parametros),o.xp6(5),o.Q6J("ngForOf",t.opcoesOrdenacao),o.xp6(5),o.Q6J("ngForOf",t.opcoesCampo),o.xp6(6),o.Q6J("ngForOf",t.motivos))},directives:[T.Ye,_.lW,I.gM,M.Hw,s._Y,s.JL,s.sg,p.KE,p.hX,S.gD,s.JJ,s.u,v.sg,x.Nt,s.Fj,O.ey,g.a8,g.hq,g.dn],styles:[""]}),e})();var f=r(8239);class A{constructor(){this.id_empresa=0,this.codigo="",this.motivo="",this.produtivo="",this.user_insert=0,this.user_update=0}}var F=r(9267);function E(e,n){if(1&e){const i=o.EpF();o.TgZ(0,"button",12),o.NdJ("click",function(){return o.CHM(i),o.oxw().onSubmit()}),o.TgZ(1,"mat-icon"),o._uU(2,"check"),o.qZA(),o._uU(3),o.qZA()}if(2&e){const i=o.oxw();o.xp6(3),o.hij(" ",i.acao," ")}}function Y(e,n){if(1&e&&(o.TgZ(0,"mat-error"),o._uU(1),o.qZA()),2&e){const i=o.oxw();let t;o.xp6(1),o.Oqu(null==(t=i.formulario.get("motivo"))||null==t.errors?null:t.errors.message)}}function V(e,n){if(1&e&&(o.TgZ(0,"mat-option",16),o._uU(1),o.qZA()),2&e){const i=n.$implicit;o.Q6J("value",i.resp),o.xp6(1),o.hij(" ",i.resposta," ")}}function $(e,n){if(1&e&&(o.TgZ(0,"mat-form-field",13),o.TgZ(1,"mat-label"),o._uU(2,"Produtivo:"),o.qZA(),o.TgZ(3,"mat-select",14),o.YNc(4,V,2,2,"mat-option",15),o.qZA(),o.qZA()),2&e){const i=o.oxw();o.xp6(4),o.Q6J("ngForOf",i.respostas)}}function w(e,n){if(1&e&&(o.TgZ(0,"mat-form-field",13),o.TgZ(1,"mat-label"),o._uU(2,"Produtivo:"),o.qZA(),o._UZ(3,"input",17),o.qZA()),2&e){const i=o.oxw();o.xp6(3),o.Q6J("readonly",i.readOnly)}}const B=[{path:"",redirectTo:"motivos",pathMatch:"full"},{path:"motivos",component:k},{path:"motivo/:id_empresa/:codigo/:acao",component:(()=>{class e{constructor(i,t,a,u,c,R,j){this.formBuilder=i,this.motivoApoService=t,this.globslService=a,this.route=u,this.router=c,this.appSnackBar=R,this.globalService=j,this.motivo=new A,this.acao="Sem Defini\xe7\xe3o",this.idAcao=l.I.Inclusao,this.readOnly=!0,this.ReadOnlyKey=!1,this.respostas=[{resp:"S",resposta:"SIM"},{resp:"N",resposta:"N\xc3O"}],this.durationInSeconds=2,this.labelCadastro="",this.formulario=i.group({codigo:["",[s.kI.required]],motivo:[{value:""},[(0,F.S)(3,20,!0)]],produtivo:[{value:"N"},[s.kI.required]],produtivo_:[{value:"N"}]}),this.motivo=new A,this.inscricaoRota=u.params.subscribe(d=>{this.motivo.id_empresa=d.id_empresa,this.motivo.codigo=d.codigo,this.idAcao=d.acao,this.setAcao(d.acao)})}ngOnInit(){this.idAcao==l.I.Inclusao?(this.motivo=new A,this.motivo.id_empresa=1,this.motivo.produtivo="N"):this.getMotivo(),this.setValue()}ngOnDestroy(){var i,t,a;null===(i=this.inscricaoGet)||void 0===i||i.unsubscribe(),null===(t=this.inscricaoRota)||void 0===t||t.unsubscribe(),null===(a=this.inscricaoAcao)||void 0===a||a.unsubscribe()}onSubmit(){console.log("this.formulario",this.formulario),this.formulario.valid?this.executaAcao():this.appSnackBar.openSuccessSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK")}setValue(){this.formulario.setValue({codigo:this.motivo.codigo,motivo:this.motivo.motivo,produtivo:this.motivo.produtivo,produtivo_:this.idAcao==l.I.Consulta||this.idAcao==l.I.Exclusao?"S"==this.motivo.produtivo?"SIM":"N\xc3O":""})}getLabelCancel(){return this.idAcao==l.I.Consulta?"Voltar":"Cancelar"}onCancel(){this.router.navigate(["/motivos"])}getMotivo(){this.globalService.setSpin(!0),this.inscricaoGet=this.motivoApoService.getMotivoApo(this.motivo.id_empresa,this.motivo.codigo).subscribe(i=>{this.globalService.setSpin(!1),this.motivo=i,this.setValue()},i=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Motivos De Apontamento ${i.error.tabela} - ${i.error.erro} - ${i.error.message}`,"OK")})}setAcao(i){switch(+i){case l.I.Inclusao:this.acao="Gravar",this.labelCadastro="Mot. Apontamento - Inclus\xe3o.",this.readOnly=!1,this.ReadOnlyKey=!1;break;case l.I.Edicao:this.acao="Gravar",this.labelCadastro="Mot. Apontamento - Altera\xe7\xe3o.",this.readOnly=!1,this.ReadOnlyKey=!0;break;case l.I.Consulta:this.acao="Voltar",this.labelCadastro="Mot. Apontamento - Consulta.",this.readOnly=!0,this.ReadOnlyKey=!0;break;case l.I.Exclusao:this.acao="Excluir",this.labelCadastro="Mot. Apontamento - Exclus\xe3o.",this.readOnly=!0,this.ReadOnlyKey=!0}}executaAcao(){var i=this;switch(this.motivo.codigo=this.formulario.value.codigo,this.motivo.motivo=this.formulario.value.motivo,this.motivo.produtivo=this.formulario.value.produtivo,+this.idAcao){case l.I.Inclusao:this.motivo.user_insert=this.globslService.getUsuario().id,this.globalService.setSpin(!0),this.inscricaoAcao=this.motivoApoService.MotivoApoInsert(this.motivo).subscribe(function(){var t=(0,f.Z)(function*(a){i.globalService.setSpin(!1),i.onCancel()});return function(a){return t.apply(this,arguments)}}(),t=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Inclus\xe3o ${t.error.tabela} - ${t.error.erro} - ${t.error.message}`,"OK")});break;case l.I.Edicao:this.motivo.user_update=this.globslService.getUsuario().id,this.globalService.setSpin(!0),this.inscricaoAcao=this.motivoApoService.MotivoApoUpdate(this.motivo).subscribe(function(){var t=(0,f.Z)(function*(a){i.globalService.setSpin(!1),i.onCancel()});return function(a){return t.apply(this,arguments)}}(),t=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Altera\xe7\xe3o ${t.error.tabela} - ${t.error.erro} - ${t.error.message}`,"OK")});break;case l.I.Exclusao:this.globalService.setSpin(!0),this.inscricaoAcao=this.motivoApoService.MotivoApoDelete(this.motivo.id_empresa,this.motivo.codigo).subscribe(function(){var t=(0,f.Z)(function*(a){i.globalService.setSpin(!1),i.onCancel()});return function(a){return t.apply(this,arguments)}}(),t=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Exclusao ${t.error.tabela} - ${t.error.erro} - ${t.error.message}`,"OK")})}}getAcoes(){return l.I}touchedOrDirty(i){var t,a;return!(!(null===(t=this.formulario.get(i))||void 0===t?void 0:t.touched)&&!(null===(a=this.formulario.get(i))||void 0===a?void 0:a.dirty))}}return e.\u0275fac=function(i){return new(i||e)(o.Y36(s.qu),o.Y36(b.s),o.Y36(h.U),o.Y36(m.gz),o.Y36(m.F0),o.Y36(C.W),o.Y36(h.U))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-motivo-apo-view"]],decls:24,vars:9,consts:[[1,"div-barra"],[1,"example-spacer"],[1,"button-container-right"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],["autocomplete","off",3,"formGroup"],[1,"col-med-3"],["appearance","outline",1,"col-max"],["matInput","","formControlName","codigo",3,"readonly"],["matInput","","formControlName","motivo","oninput","this.value = this.value.toUpperCase()","autofocus","",3,"readonly"],[4,"ngIf"],["field","","appearance","outline","class","col-max",4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],["field","","appearance","outline",1,"col-max"],["formControlName","produtivo"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["matInput","","formControlName","produtivo_",3,"readonly"]],template:function(i,t){if(1&i&&(o.TgZ(0,"div",0),o.TgZ(1,"mat-toolbar"),o.TgZ(2,"span",1),o.TgZ(3,"mat-label"),o._uU(4),o.qZA(),o.qZA(),o.TgZ(5,"div",2),o.YNc(6,E,4,1,"button",3),o.TgZ(7,"button",4),o.NdJ("click",function(){return t.onCancel()}),o.TgZ(8,"mat-icon"),o._uU(9,"cancel"),o.qZA(),o._uU(10),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"form",5),o.TgZ(12,"div",6),o.TgZ(13,"mat-form-field",7),o.TgZ(14,"mat-label"),o._uU(15,"C\xd3DIGO"),o.qZA(),o._UZ(16,"input",8),o.qZA(),o.TgZ(17,"mat-form-field",7),o.TgZ(18,"mat-label"),o._uU(19,"Motivo"),o.qZA(),o._UZ(20,"input",9),o.YNc(21,Y,2,1,"mat-error",10),o.qZA(),o.YNc(22,$,5,1,"mat-form-field",11),o.YNc(23,w,4,1,"mat-form-field",11),o.qZA(),o.qZA()),2&i){let a;o.xp6(4),o.Oqu(t.labelCadastro),o.xp6(2),o.Q6J("ngIf",3!=t.idAcao),o.xp6(4),o.hij(" ",t.getLabelCancel()," "),o.xp6(1),o.Q6J("formGroup",t.formulario),o.xp6(5),o.Q6J("readonly",t.ReadOnlyKey),o.xp6(4),o.Q6J("readonly",t.readOnly),o.xp6(1),o.Q6J("ngIf",(null==(a=t.formulario.get("motivo"))||null==a.errors?null:a.errors.ValidatorStringLen)&&t.touchedOrDirty("motivo")),o.xp6(1),o.Q6J("ngIf",t.idAcao!=t.getAcoes().Consulta&&t.idAcao!=t.getAcoes().Exclusao),o.xp6(1),o.Q6J("ngIf",t.idAcao==t.getAcoes().Consulta||t.idAcao==t.getAcoes().Exclusao)}},directives:[T.Ye,p.hX,v.O5,_.lW,M.Hw,s._Y,s.JL,s.sg,p.KE,x.Nt,s.Fj,s.JJ,s.u,p.TO,S.gD,v.sg,O.ey],styles:[".cad-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.button-container-right[_ngcontent-%COMP%]{display:flex;justify-content:right;height:min-content;width:100%}.button-container-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}.SmallWidth[_ngcontent-%COMP%]{width:40px}.MidleWidth[_ngcontent-%COMP%]{width:130px}.LargeWidth[_ngcontent-%COMP%]{width:350px}.LargerWidth[_ngcontent-%COMP%]{width:500px}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[m.Bz.forChild(B)],m.Bz]}),e})();var Q=r(2559),D=r(3122),K=r(4466);let G=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[v.ez,P,D.q,s.u5,s.UX,K.m,Q.yI.forChild()]]}),e})()}}]);