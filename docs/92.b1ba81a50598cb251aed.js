"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[92],{92:(he,C,s)=>{s.r(C),s.d(C,{EmpresaModule:()=>de});var Z=s(8583),f=s(4655),A=s(7117),p=s(3032);class J{constructor(){this.id_empresa=0,this.id=0,this.razao="",this.fantasi="",this.cnpj_cpf="",this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}var e=s(7716),b=s(4590),l=s(3679),V=s(2340),Q=s(1841);let E=(()=>{class r{constructor(t){this.http=t,this.apiURL=V.N.apiURL}getEmpresas(){return this.http.get(`${this.apiURL}empresas`)}getEmpresas_01(t){return this.http.post(`${this.apiURL}empresas`,t)}getEmpresa(t){return this.http.get(`${this.apiURL}empresa/${t}`)}EmpresaInsert(t){return this.http.post(`${this.apiURL}empresa`,t)}EmpresaUpdate(t){return this.http.put(`${this.apiURL}empresa`,t)}EmpresaDelete(t){return this.http.delete(`${this.apiURL}empresa/${t}`)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(Q.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var x=s(789),q=s(2522),U=s(1095),w=s(1436),S=s(6627),d=s(8295),y=s(7441),I=s(9983),O=s(2458),v=s(3738);function Y(r,o){if(1&r&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&r){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function F(r,o){if(1&r&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&r){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function k(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"div",16),e.TgZ(1,"mat-card",17),e.NdJ("click",function(){const n=e.CHM(t).$implicit,m=e.oxw();return m.escolha(m.getAcoes().Consulta,n)}),e.TgZ(2,"mat-card-actions"),e.TgZ(3,"span",18),e.TgZ(4,"button",4),e.NdJ("click",function(){const n=e.CHM(t).$implicit,m=e.oxw();return m.escolha(m.getAcoes().Edicao,n)}),e.TgZ(5,"mat-icon"),e._uU(6,"edit"),e.qZA(),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){const n=e.CHM(t).$implicit,m=e.oxw();return m.escolha(m.getAcoes().Exclusao,n)}),e.TgZ(8,"mat-icon"),e._uU(9,"delete"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"mat-card-content"),e.TgZ(11,"mat-label",19),e._uU(12,"C\xf3digo:"),e.qZA(),e.TgZ(13,"mat-label",20),e._uU(14),e.qZA(),e.TgZ(15,"mat-label",21),e._uU(16,"Social:"),e.qZA(),e.TgZ(17,"mat-label",20),e._uU(18),e.qZA(),e.TgZ(19,"mat-label",21),e._uU(20,"Fantasia:"),e.qZA(),e.TgZ(21,"mat-label",20),e._uU(22),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=o.$implicit,a=e.oxw();e.xp6(4),e.Q6J("matTooltip",a.getTexto().alterar),e.xp6(3),e.Q6J("matTooltip",a.getTexto().incluir),e.xp6(7),e.Oqu(t.id),e.xp6(4),e.Oqu(t.razao),e.xp6(4),e.Oqu(t.fantasi)}}let $=(()=>{class r{constructor(t,a,i,n,m){this.globalService=t,this.formBuilder=a,this.empresaService=i,this.router=n,this.appSnackBar=m,this.empresas=[],this.erro="",this.opcoesOrdenacao=["C\xf3digo","Raz\xe3o"],this.opcoesCampo=["C\xf3digo","Raz\xe3o"],this.parametros=a.group({ordenacao:[null],campo:[null],filtro:[null]}),this.setValues()}ngOnInit(){this.getEmpresas()}setValues(){this.parametros.setValue({ordenacao:"C\xf3digo",campo:"C\xf3digo",filtro:""})}ngOnDestroy(){var t,a;null===(t=this.inscricaoGetAll)||void 0===t||t.unsubscribe(),null===(a=this.inscricaoGetFiltro)||void 0===a||a.unsubscribe()}escolha(t,a){this.router.navigate(void 0!==a?["/empresas/empresa",a.id,t]:["/empresas/empresa",1,t])}getAcoes(){return p.I}getEmpresas(){let t=new J;if(t.id=1,"C\xf3digo"==this.parametros.value.campo){let a=parseInt(this.parametros.value.filtro,10);t.id=isNaN(a)?0:a}"Raz\xe3o"==this.parametros.value.campo&&(t.razao=this.parametros.value.filtro.toUpperCase()),t.orderby=this.parametros.value.ordenacao,this.globalService.setSpin(!0),this.inscricaoGetFiltro=this.empresaService.getEmpresas_01(t).subscribe(a=>{this.empresas=a,this.globalService.setSpin(!1)},a=>{this.empresas=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Nas Empresas ${a.error.tabela} - ${a.error.erro} - ${a.error.message}`,"OK"),this.globalService.setSpin(!1)})}getTexto(){return A.fd}onHome(){this.router.navigate([""])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(b.U),e.Y36(l.qu),e.Y36(E),e.Y36(f.F0),e.Y36(x.W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-crud-empresa"]],decls:31,vars:5,consts:[[1,"div-barra"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Retorno","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Atualizar","matTooltipPosition","above",1,"example-icon",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above",3,"matTooltip","click"],[1,"parametros"],["autocomplete","off",1,"col-med-4",3,"formGroup"],["field","","appearance","outline",1,"col-max"],["formControlName","ordenacao"],[3,"value",4,"ngFor","ngForOf"],["formControlName","campo"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","filtro"],[1,"Browse"],["class","linha",4,"ngFor","ngForOf"],[3,"value"],[1,"linha"],[1,"example-card",3,"click"],[1,"button-container-right"],[1,"labelTitleFirst"],[1,"labelData"],[1,"labelTitle"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"mat-toolbar"),e.TgZ(2,"span",1),e._uU(3,"Empresas:"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return a.onHome()}),e.TgZ(5,"mat-icon"),e._uU(6,"home"),e.qZA(),e.qZA(),e.TgZ(7,"button",3),e.NdJ("click",function(){return a.getEmpresas()}),e.TgZ(8,"mat-icon"),e._uU(9,"rotate_right"),e.qZA(),e.qZA(),e.TgZ(10,"button",4),e.NdJ("click",function(){return a.escolha(a.getAcoes().Inclusao)}),e.TgZ(11,"mat-icon"),e._uU(12,"add_circle_outline"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",5),e.TgZ(14,"form",6),e.TgZ(15,"mat-form-field",7),e.TgZ(16,"mat-label"),e._uU(17,"Ordena\xe7\xe3o"),e.qZA(),e.TgZ(18,"mat-select",8),e.YNc(19,Y,2,2,"mat-option",9),e.qZA(),e.qZA(),e.TgZ(20,"mat-form-field",7),e.TgZ(21,"mat-label"),e._uU(22,"Pesquisar Por"),e.qZA(),e.TgZ(23,"mat-select",10),e.YNc(24,F,2,2,"mat-option",9),e.qZA(),e.qZA(),e.TgZ(25,"mat-form-field",11),e.TgZ(26,"mat-label"),e._uU(27,"Descri\xe7\xe3o"),e.qZA(),e._UZ(28,"input",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(29,"div",13),e.YNc(30,k,23,5,"div",14),e.qZA()),2&t&&(e.xp6(10),e.Q6J("matTooltip",a.getTexto().incluir),e.xp6(4),e.Q6J("formGroup",a.parametros),e.xp6(5),e.Q6J("ngForOf",a.opcoesOrdenacao),e.xp6(5),e.Q6J("ngForOf",a.opcoesCampo),e.xp6(6),e.Q6J("ngForOf",a.empresas))},directives:[q.Ye,U.lW,w.gM,S.Hw,l._Y,l.JL,l.sg,d.KE,d.hX,y.gD,l.JJ,l.u,Z.sg,I.Nt,l.Fj,O.ey,v.a8,v.hq,v.dn],styles:[""]}),r})();var _=s(8239);class T{constructor(){this.id=0,this.cnpj_cpf="",this.razao="",this.fantasi="",this.inscri="",this.cadastr=(0,A.zp)(new Date),this.ruaf="",this.nrof="",this.complementof="",this.bairrof="",this.cidadef="",this.uff="",this.cepf="",this.tel1="",this.tel2="",this.emailf="",this.obs="",this.user_insert=1,this.user_update=0}}var u=s(9267),M=s(2401),z=s(3e3),D=s(2546),B=s(103),N=s(2559);function j(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){return e.CHM(t),e.oxw().onSubmit()}),e.TgZ(1,"mat-icon"),e._uU(2,"check"),e.qZA(),e._uU(3),e.qZA()}if(2&r){const t=e.oxw();e.xp6(3),e.hij(" ",t.acao," ")}}function R(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();let a;e.xp6(1),e.Oqu(null==(a=t.formulario.get("razao"))||null==a.errors?null:a.errors.message)}}function L(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();let a;e.xp6(1),e.Oqu(null==(a=t.formulario.get("cadastr"))||null==a.errors?null:a.errors.message)}}function G(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();let a;e.xp6(1),e.Oqu(null==(a=t.formulario.get("fantasi"))||null==a.errors?null:a.errors.message)}}function P(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();let a;e.xp6(1),e.Oqu(null==(a=t.formulario.get("cnpj_cpf"))||null==a.errors?null:a.errors.message)}}function K(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.getMensafield("inscri"))}}function H(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.getMensafield("ruaf"))}}function X(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.getMensafield("nrof"))}}function W(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.getMensafield("complementof"))}}function ee(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.getMensafield("bairrof"))}}function ae(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.getMensafield("cidadef"))}}function te(r,o){if(1&r&&(e.TgZ(0,"mat-option",33),e._uU(1),e.qZA()),2&r){const t=o.$implicit;e.Q6J("value",t.sigla),e.xp6(1),e.AsE(" ",t.sigla,"-",t.nome," ")}}function re(r,o){if(1&r&&(e.TgZ(0,"mat-form-field",30),e.TgZ(1,"mat-label"),e._uU(2,"Estado:"),e.qZA(),e.TgZ(3,"mat-select",31),e.YNc(4,te,2,3,"mat-option",32),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.ufs)}}function oe(r,o){if(1&r&&(e.TgZ(0,"mat-form-field",30),e.TgZ(1,"mat-label"),e._uU(2,"Estado:"),e.qZA(),e._UZ(3,"input",34),e.qZA()),2&r){const t=e.oxw();e.xp6(3),e.Q6J("readonly",t.readOnly)}}function ie(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"{{formulario.get('cepf)?.errors?.message}}"),e.qZA())}function se(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1,"E-Mail Inv\xe1lido!"),e.qZA())}function le(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.getMensafield("tel1"))}}function ne(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.getMensafield("tel2"))}}function me(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.getMensafield("obs"))}}const pe=[{path:"",redirectTo:"empresas",pathMatch:"full"},{path:"empresas",component:$},{path:"empresa/:id/:acao",component:(()=>{class r{constructor(t,a,i,n,m,h,g){this.formBuilder=t,this.empresasServices=a,this.estadosSrv=i,this.globalService=n,this.route=m,this.router=h,this.appSnackBar=g,this.empresa=new T,this.acao="Sem Defini\xe7\xe3o",this.idAcao=p.I.Inclusao,this.readOnly=!0,this.durationInSeconds=2,this.labelCadastro="",this.ufs=[],this.formulario=t.group({id:[{value:"",disabled:!0}],razao:[{value:""},[(0,u.S)(3,40,!0)]],cadastr:[{value:""},[(0,M.K)(!0)]],fantasi:[{value:""},[(0,u.S)(3,20,!0)]],cnpj_cpf:[{value:""},[(0,z.x)(!0)]],inscri:[{value:""},[(0,u.S)(0,20)]],ruaf:[{value:""},[(0,u.S)(3,80,!0)]],nrof:[{value:""},[(0,u.S)(1,10,!0)]],complementof:[{value:""},[(0,u.S)(0,30)]],bairrof:[{value:""},[(0,u.S)(3,40,!0)]],cidadef:[{value:""},[(0,u.S)(3,40,!0)]],uff:[{value:""},[(0,u.S)(2,2,!0)]],uff_:[{value:""}],cepf:[{value:""},[(0,D.l)(!0)]],tel1:[{value:""},[(0,u.S)(0,23,!0)]],tel2:[{value:""},[(0,u.S)(0,23)]],emailf:[{value:""},[l.kI.email]],obs:[{value:""},[(0,u.S)(0,200)]]}),this.empresa=new T,this.inscricaoRota=m.params.subscribe(c=>{this.empresa.id=c.id,this.idAcao=c.acao,this.setAcao(c.acao)})}ngOnInit(){this.idAcao==p.I.Inclusao?this.empresa=new T:this.getEmpresa(),this.getUfs(),this.setValue()}ngOnDestroy(){var t,a,i,n;null===(t=this.inscricaoGetEmpresa)||void 0===t||t.unsubscribe(),null===(a=this.inscricaoRota)||void 0===a||a.unsubscribe(),null===(i=this.inscricaoAcao)||void 0===i||i.unsubscribe(),null===(n=this.inscricaoUf)||void 0===n||n.unsubscribe()}onSubmit(){console.log(this.formulario),this.formulario.valid?this.executaAcao():this.appSnackBar.openSuccessSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK")}setValue(){this.formulario.setValue({id:this.empresa.id,razao:this.empresa.razao,cadastr:this.empresa.cadastr,cnpj_cpf:this.empresa.cnpj_cpf,inscri:this.empresa.inscri,fantasi:this.empresa.fantasi,ruaf:this.empresa.ruaf,nrof:this.empresa.nrof,complementof:this.empresa.complementof,bairrof:this.empresa.bairrof,cidadef:this.empresa.cidadef,uff:this.empresa.uff,uff_:this.idAcao==p.I.Consulta||this.idAcao==p.I.Exclusao?this.empresa.uff:"",cepf:this.empresa.cepf,tel1:this.empresa.tel1,tel2:this.empresa.tel2,emailf:this.empresa.emailf,obs:this.empresa.obs})}getLabelCancel(){return this.idAcao==p.I.Consulta?"Voltar":"Cancelar"}onCancel(){this.router.navigate(["/empresas"])}getEmpresa(){this.globalService.setSpin(!0),this.inscricaoGetEmpresa=this.empresasServices.getEmpresa(this.empresa.id).subscribe(t=>{this.globalService.setSpin(!1),this.empresa=t,this.setValue()},t=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Pesquisa Nas Empresas ${t.error.tabela} - ${t.error.erro} - ${t.error.message}`,"OK")})}getUfs(){this.globalService.setSpin(!0),this.inscricaoUf=this.estadosSrv.getEstados().subscribe(t=>{this.globalService.setSpin(!1),this.ufs=t},t=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Pesquisa Cadastrado De Estados ${t.error.tabela} - ${t.error.erro} - ${t.error.message}`,"OK")})}setAcao(t){switch(+t){case p.I.Inclusao:this.acao="Gravar",this.labelCadastro="Empresas - Inclus\xe3o.",this.readOnly=!1;break;case p.I.Edicao:this.acao="Gravar",this.labelCadastro="Empresas - Altera\xe7\xe3o.",this.readOnly=!1;break;case p.I.Consulta:this.acao="Voltar",this.labelCadastro="Empresas - Consulta.",this.readOnly=!0;break;case p.I.Exclusao:this.acao="Excluir",this.labelCadastro="Empresas - Exclus\xe3o.",this.readOnly=!0}}executaAcao(){var t=this;switch(this.empresa.cnpj_cpf=this.formulario.value.cnpj_cpf,this.empresa.razao=this.formulario.value.razao,this.empresa.fantasi=this.formulario.value.fantasi,this.empresa.inscri=this.formulario.value.inscri,this.empresa.cadastr=this.formulario.value.cadastr,this.empresa.ruaf=this.formulario.value.ruaf,this.empresa.nrof=this.formulario.value.nrof,this.empresa.complementof=this.formulario.value.complementof,this.empresa.bairrof=this.formulario.value.bairrof,this.empresa.cidadef=this.formulario.value.cidadef,this.empresa.uff=this.formulario.value.uff,this.empresa.cepf=this.formulario.value.cepf,this.empresa.tel1=this.formulario.value.tel1,this.empresa.tel2=this.formulario.value.tel2,this.empresa.emailf=this.formulario.value.emailf,this.empresa.obs=this.formulario.value.obs,+this.idAcao){case p.I.Inclusao:this.empresa.user_insert=this.globalService.getUsuario().id,this.globalService.setSpin(!0),this.inscricaoAcao=this.empresasServices.EmpresaInsert(this.empresa).subscribe(function(){var a=(0,_.Z)(function*(i){t.globalService.setSpin(!1),t.onCancel()});return function(i){return a.apply(this,arguments)}}(),a=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na INclus\xe3o ${a.error.tabela} - ${a.error.erro} - ${a.error.message}`,"OK")});break;case p.I.Edicao:this.globalService.setSpin(!0),this.empresa.user_update=this.globalService.getUsuario().id,this.inscricaoAcao=this.empresasServices.EmpresaUpdate(this.empresa).subscribe(function(){var a=(0,_.Z)(function*(i){t.globalService.setSpin(!1),t.onCancel()});return function(i){return a.apply(this,arguments)}}(),a=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Altera\xe7\xe3o ${a.error.tabela} - ${a.error.erro} - ${a.error.message}`,"OK")});break;case p.I.Exclusao:this.globalService.setSpin(!0),this.inscricaoAcao=this.empresasServices.EmpresaDelete(this.empresa.id).subscribe(function(){var a=(0,_.Z)(function*(i){t.globalService.setSpin(!1),t.onCancel()});return function(i){return a.apply(this,arguments)}}(),a=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Exclusao ${a.error.tabela} - ${a.error.erro} - ${a.error.message}`,"OK")})}}getAcoes(){return p.I}touchedOrDirty(t){var a,i;return!(!(null===(a=this.formulario.get(t))||void 0===a?void 0:a.touched)&&!(null===(i=this.formulario.get(t))||void 0===i?void 0:i.dirty))}getValidfield(t){var a,i;return(null===(i=null===(a=this.formulario.get(t))||void 0===a?void 0:a.errors)||void 0===i?void 0:i.ValidatorStringLen)&&this.touchedOrDirty(t)}getMensafield(t){var a,i;return null===(i=null===(a=this.formulario.get(t))||void 0===a?void 0:a.errors)||void 0===i?void 0:i.message}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(l.qu),e.Y36(E),e.Y36(B.V),e.Y36(b.U),e.Y36(f.gz),e.Y36(f.F0),e.Y36(x.W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-empresa-view"]],decls:100,vars:40,consts:[[1,"example-spacer"],[1,"button-container-right"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],["autocomplete","off",3,"formGroup"],[1,"col-med-4"],["appearance","outline",1,"col-70"],["matInput","","formControlName","id"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","razao","autofocus","","oninput","this.value = this.value.toUpperCase()",3,"readonly"],[4,"ngIf"],["appearance","outline",1,"col-max"],["matInput","","formControlName","cadastr","mask","00/00/0000","placeholder","dd/mm/aaaa",3,"readonly"],[1,"col-med-3"],["matInput","","formControlName","fantasi","oninput","this.value = this.value.toUpperCase()",3,"readonly"],["matInput","","formControlName","cnpj_cpf","mask","00.000.000/0000-00||000.000.000-00",3,"dropSpecialCharacters","readonly"],["matInput","","formControlName","inscri","oninput","this.value = this.value.toUpperCase()",3,"readonly"],["matInput","","formControlName","ruaf","oninput","this.value = this.value.toUpperCase()",3,"readonly"],["matInput","","formControlName","nrof","oninput","this.value = this.value.toUpperCase()",3,"readonly"],[1,"col-med-1"],["matInput","","formControlName","complementof","oninput","this.value = this.value.toUpperCase()",3,"readonly"],["matInput","","formControlName","bairrof","oninput","this.value = this.value.toUpperCase()",3,"readonly"],["matInput","","formControlName","cidadef","oninput","this.value = this.value.toUpperCase()",3,"readonly"],["field","","appearance","outline","class","col-max",4,"ngIf"],["matInput","","formControlName","cepf","mask","99999-999",3,"dropSpecialCharacters","readonly"],["matInput","","formControlName","emailf",3,"readonly"],["matInput","","formControlName","tel1","mask","(00) 0 0000-0000||(00) 0000-0000",3,"dropSpecialCharacters","readonly"],["matInput","","formControlName","tel2","mask","(00) 0 0000-0000||(00) 0000-0000",3,"dropSpecialCharacters","readonly"],["matInput","","formControlName","obs","oninput","this.value = this.value.toUpperCase()",3,"readonly"],["mat-raised-button","","color","primary",3,"click"],["field","","appearance","outline",1,"col-max"],["formControlName","uff"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["matInput","","formControlName","uff_",3,"readonly"]],template:function(t,a){if(1&t&&(e.TgZ(0,"p"),e.TgZ(1,"mat-toolbar"),e.TgZ(2,"span",0),e.TgZ(3,"mat-label"),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"div",1),e.YNc(6,j,4,1,"button",2),e.TgZ(7,"button",3),e.NdJ("click",function(){return a.onCancel()}),e.TgZ(8,"mat-icon"),e._uU(9,"cancel"),e.qZA(),e._uU(10),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"form",4),e.TgZ(12,"div",5),e.TgZ(13,"mat-form-field",6),e.TgZ(14,"mat-label"),e._uU(15,"C\xd3DIGO"),e.qZA(),e._UZ(16,"input",7),e.qZA(),e.TgZ(17,"mat-form-field",8),e.TgZ(18,"mat-label"),e._uU(19,"Raz\xe3o Social"),e.qZA(),e._UZ(20,"input",9),e.YNc(21,R,2,1,"mat-error",10),e.qZA(),e.TgZ(22,"mat-form-field",11),e.TgZ(23,"mat-label"),e._uU(24,"Cadastro"),e.qZA(),e._UZ(25,"input",12),e.YNc(26,L,2,1,"mat-error",10),e.qZA(),e.qZA(),e.TgZ(27,"div",13),e.TgZ(28,"mat-form-field",11),e.TgZ(29,"mat-label"),e._uU(30,"Fantasia"),e.qZA(),e._UZ(31,"input",14),e.YNc(32,G,2,1,"mat-error",10),e.qZA(),e.TgZ(33,"mat-form-field",11),e.TgZ(34,"mat-label"),e._uU(35,"CNPJ/CPF"),e.qZA(),e._UZ(36,"input",15),e.YNc(37,P,2,1,"mat-error",10),e.qZA(),e.TgZ(38,"mat-form-field",11),e.TgZ(39,"mat-label"),e._uU(40,"Inscri\xe7\xe3o Est."),e.qZA(),e._UZ(41,"input",16),e.YNc(42,K,2,1,"mat-error",10),e.qZA(),e.qZA(),e.TgZ(43,"div",13),e.TgZ(44,"mat-form-field",8),e.TgZ(45,"mat-label"),e._uU(46,"Endere\xe7o:"),e.qZA(),e._UZ(47,"input",17),e.YNc(48,H,2,1,"mat-error",10),e.qZA(),e.TgZ(49,"mat-form-field",11),e.TgZ(50,"mat-label"),e._uU(51,"N\xfamero"),e.qZA(),e._UZ(52,"input",18),e.YNc(53,X,2,1,"mat-error",10),e.qZA(),e.qZA(),e.TgZ(54,"div",19),e.TgZ(55,"mat-form-field",11),e.TgZ(56,"mat-label"),e._uU(57,"Complemento:"),e.qZA(),e._UZ(58,"input",20),e.YNc(59,W,2,1,"mat-error",10),e.qZA(),e.qZA(),e.TgZ(60,"div",13),e.TgZ(61,"mat-form-field",11),e.TgZ(62,"mat-label"),e._uU(63,"Bairro:"),e.qZA(),e._UZ(64,"input",21),e.YNc(65,ee,2,1,"mat-error",10),e.qZA(),e.TgZ(66,"mat-form-field",11),e.TgZ(67,"mat-label"),e._uU(68,"Cidade:"),e.qZA(),e._UZ(69,"input",22),e.YNc(70,ae,2,1,"mat-error",10),e.qZA(),e.YNc(71,re,5,1,"mat-form-field",23),e.YNc(72,oe,4,1,"mat-form-field",23),e.TgZ(73,"mat-form-field",11),e.TgZ(74,"mat-label"),e._uU(75,"CEP:"),e.qZA(),e._UZ(76,"input",24),e.YNc(77,ie,2,0,"mat-error",10),e.qZA(),e.qZA(),e.TgZ(78,"div",13),e.TgZ(79,"mat-form-field",11),e.TgZ(80,"mat-label"),e._uU(81,"E-Mail:"),e.qZA(),e._UZ(82,"input",25),e.YNc(83,se,2,0,"mat-error",10),e.qZA(),e.TgZ(84,"mat-form-field",11),e.TgZ(85,"mat-label"),e._uU(86,"Telefone 1:"),e.qZA(),e._UZ(87,"input",26),e.YNc(88,le,2,1,"mat-error",10),e.qZA(),e.TgZ(89,"mat-form-field",11),e.TgZ(90,"mat-label"),e._uU(91,"Telefone 2:"),e.qZA(),e._UZ(92,"input",27),e.YNc(93,ne,2,1,"mat-error",10),e.qZA(),e.qZA(),e.TgZ(94,"div",19),e.TgZ(95,"mat-form-field",11),e.TgZ(96,"mat-label"),e._uU(97,"Observa\xe7\xe3o:"),e.qZA(),e._UZ(98,"input",28),e.YNc(99,me,2,1,"mat-error",10),e.qZA(),e.qZA(),e.qZA()),2&t){let i,n,m,h,g,c;e.xp6(4),e.Oqu(a.labelCadastro),e.xp6(2),e.Q6J("ngIf",3!=a.idAcao),e.xp6(4),e.hij(" ",a.getLabelCancel()," "),e.xp6(1),e.Q6J("formGroup",a.formulario),e.xp6(9),e.Q6J("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",(null==(i=a.formulario.get("razao"))||null==i.errors?null:i.errors.ValidatorStringLen)&&a.touchedOrDirty("razao")),e.xp6(4),e.Q6J("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",(null==(n=a.formulario.get("cadastr"))||null==n.errors?null:n.errors.ValidatorDate)&&a.touchedOrDirty("cadastr")),e.xp6(5),e.Q6J("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",(null==(m=a.formulario.get("fantasi"))||null==m.errors?null:m.errors.ValidatorStringLen)&&a.touchedOrDirty("inscri")),e.xp6(4),e.Q6J("dropSpecialCharacters",!0)("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",(null==(h=a.formulario.get("cnpj_cpf"))||null==h.errors?null:h.errors.ValidadorCnpjCpf)&&a.touchedOrDirty("cnpj_cpf")),e.xp6(4),e.Q6J("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",a.getValidfield("inscri")),e.xp6(5),e.Q6J("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",a.getValidfield("ruaf")),e.xp6(4),e.Q6J("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",a.getValidfield("nrof")),e.xp6(5),e.Q6J("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",a.getValidfield("complementof")),e.xp6(5),e.Q6J("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",a.getValidfield("bairrof")),e.xp6(4),e.Q6J("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",a.getValidfield("cidadef")),e.xp6(1),e.Q6J("ngIf",a.idAcao!=a.getAcoes().Consulta&&a.idAcao!=a.getAcoes().Exclusao),e.xp6(1),e.Q6J("ngIf",a.idAcao==a.getAcoes().Consulta||a.idAcao==a.getAcoes().Exclusao),e.xp6(4),e.Q6J("dropSpecialCharacters",!0)("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",(null==(g=a.formulario.get("cepf"))||null==g.errors?null:g.errors.ValidatorCep)&&a.touchedOrDirty("cepf")),e.xp6(5),e.Q6J("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf","INVALID"==(null==(c=a.formulario.get("emailf"))?null:c.status)&&a.touchedOrDirty("emailf")),e.xp6(4),e.Q6J("dropSpecialCharacters",!0)("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",a.getValidfield("tel1")),e.xp6(4),e.Q6J("dropSpecialCharacters",!0)("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",a.getValidfield("tel2")),e.xp6(5),e.Q6J("readonly",a.readOnly),e.xp6(1),e.Q6J("ngIf",a.getValidfield("obs"))}},directives:[q.Ye,d.hX,Z.O5,U.lW,S.Hw,l._Y,l.JL,l.sg,d.KE,I.Nt,l.Fj,l.JJ,l.u,N.hx,d.TO,y.gD,Z.sg,O.ey],styles:[""]}),r})()}];let ue=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[f.Bz.forChild(pe)],f.Bz]}),r})();var ce=s(3122),fe=s(4466);let de=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[Z.ez,ue,ce.q,l.u5,l.UX,fe.m,N.yI.forChild()]]}),r})()}}]);