"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[637],{61:(C,v,n)=>{n.d(v,{o:()=>l});class l{constructor(){this.id_empresa=0,this.id=0,this.id_projeto=0,this.id_conta="",this.id_conta_versao="0101",this.id_subconta="",this.id_subcliente=0,this.id_resp=0,this.id_exec=0,this.id_motivo="",this.produtivo="",this.inicial="",this.final="",this.obs="",this.horasapon=0,this.encerramento="N",this.user_insert=0,this.user_update=0,this.estru_descricao="",this.resp_razao="",this.exec_razao="",this.proj_descricao="",this.motivo_descricao="",this.motivo_produtivo="",this.ativ_inicial="",this.ativ_final="",this.cli_razao=""}}},637:(C,v,n)=>{n.r(v),n.d(v,{ExecucaoV2Module:()=>Ct});var l=n(8583),_=n(4655),h=n(8239),Z=n(7438),m=n(3211),g=n(61),d=n(8440);class A{constructor(r,o,a){this.idEmpresa=r,this.idAuditor=o,this.id_atividade=0,this.id_empresa=r,this.id_auditor=o,this.hoje=a}getId_Atividade(){return this.id_atividade}setId_Atividade(r){this.id_atividade=r}}var s=n(3679),p=n(3032),c=n(7117),q=n(9648),B=n(3962),O=n(3914),H=n(98),w=n(3525),L=n(4782),t=n(7716),R=n(1209),V=n(1872),k=n(8059),z=n(9715),M=n(4307),G=n(1843),J=n(7006),N=n(789),F=n(2522),y=n(1095),K=n(1436),W=n(6627),T=n(8295),$=n(9983),U=n(3220),j=n(7441),D=n(2458),I=n(2559),P=n(9930),Q=n(7539),Y=n(1790),X=n(980);function tt(i,r){if(1&i){const o=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).onFacilitador()}),t.TgZ(1,"mat-icon"),t._uU(2,"add_circle_outline"),t.qZA(),t.qZA()}}function ot(i,r){if(1&i){const o=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",3),t.TgZ(2,"mat-toolbar"),t.TgZ(3,"span",4),t._uU(4),t.ALo(5,"horaSexagenal"),t.qZA(),t.YNc(6,tt,3,0,"button",5),t.TgZ(7,"button",6),t.NdJ("click",function(){t.CHM(o);const e=t.oxw();return e.adicao(e.getAcoes().Inclusao)}),t.TgZ(8,"mat-icon"),t._uU(9,"add_circle_outline"),t.qZA(),t.qZA(),t.TgZ(10,"button",7),t.NdJ("click",function(){return t.CHM(o),t.oxw().onRetorno()}),t.TgZ(11,"mat-icon"),t._uU(12,"arrow_back"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const o=t.oxw();t.xp6(4),t.AsE("",o.getTitulo()," Total de Horas ",t.lcZ(5,3,o.totalHoras),""),t.xp6(2),t.Q6J("ngIf",!1)}}function at(i,r){if(1&i&&(t.TgZ(0,"mat-option",23),t._uU(1),t.qZA()),2&i){const o=r.$implicit;t.Q6J("value",o.id),t.xp6(1),t.lnq(" ",o.cliente_razao.trim()," (",o.id,") ",o.descricao," ")}}function it(i,r){if(1&i&&(t.TgZ(0,"mat-option",23),t._uU(1),t.qZA()),2&i){const o=r.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij(" ",o.estru_descri.trim()," ")}}function et(i,r){if(1&i&&(t.TgZ(0,"mat-option",23),t._uU(1),t.qZA()),2&i){const o=r.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij(" ",o.estru_descri," ")}}function nt(i,r){if(1&i&&(t.TgZ(0,"mat-option",23),t._uU(1),t.qZA()),2&i){const o=r.$implicit;t.Q6J("value",o.id),t.xp6(1),t.AsE(" ",o.subconta.substring(4,6),"-",o.estru_descri," ")}}function st(i,r){if(1&i){const o=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"form",9),t.TgZ(2,"div",10),t.TgZ(3,"mat-form-field",11),t.TgZ(4,"mat-label"),t._uU(5,"Usu\xe1rio:"),t.qZA(),t._UZ(6,"input",12),t.qZA(),t.TgZ(7,"mat-form-field",11),t.TgZ(8,"mat-label"),t._uU(9,"Data:"),t.qZA(),t.TgZ(10,"input",13),t.NdJ("dateChange",function(){return t.CHM(o),t.oxw().onChangeData()}),t.qZA(),t._UZ(11,"mat-datepicker-toggle",14),t._UZ(12,"mat-datepicker",null,15),t.qZA(),t.qZA(),t.TgZ(14,"div",16),t.TgZ(15,"mat-form-field",17),t.TgZ(16,"mat-label"),t._uU(17,"Contratos"),t.qZA(),t.TgZ(18,"mat-select",18),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeContrato()}),t.YNc(19,at,2,4,"mat-option",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",16),t.TgZ(21,"mat-form-field",17),t.TgZ(22,"mat-label"),t._uU(23,"Atividades"),t.qZA(),t.TgZ(24,"mat-select",20),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeEstruturas()}),t.YNc(25,it,2,2,"mat-option",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",10),t.TgZ(27,"mat-form-field",17),t.TgZ(28,"mat-label"),t._uU(29,"Grupos"),t.qZA(),t.TgZ(30,"mat-select",21),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onChangeGrupos()}),t.YNc(31,et,2,2,"mat-option",19),t.qZA(),t.qZA(),t.TgZ(32,"mat-form-field",17),t.TgZ(33,"mat-label"),t._uU(34,"Atividades"),t.qZA(),t.TgZ(35,"mat-select",22),t.NdJ("selectionChange",function(){return t.CHM(o),t.oxw().onParametrosChange()}),t.YNc(36,nt,2,3,"mat-option",19),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const o=t.MAs(13),a=t.oxw();t.xp6(1),t.Q6J("formGroup",a.parametro),t.xp6(9),t.Q6J("matDatepicker",o),t.xp6(1),t.Q6J("for",o),t.xp6(8),t.Q6J("ngForOf",a.contratos),t.xp6(6),t.Q6J("ngForOf",a.estruturas),t.xp6(6),t.Q6J("ngForOf",a.grupos),t.xp6(5),t.Q6J("ngForOf",a.atividades)}}function rt(i,r){1&i&&(t.TgZ(0,"div",35),t.TgZ(1,"mat-icon",36),t._uU(2,"check"),t.qZA(),t.qZA())}function ct(i,r){if(1&i){const o=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t.TgZ(2,"div",28),t.TgZ(3,"div",29),t.TgZ(4,"mat-label",30),t._uU(5),t.ALo(6,"date"),t.ALo(7,"date"),t.qZA(),t.TgZ(8,"mat-label",30),t._uU(9),t.ALo(10,"horaSexagenal"),t.qZA(),t.qZA(),t.YNc(11,rt,3,0,"div",31),t.qZA(),t.TgZ(12,"div"),t.TgZ(13,"mat-label",30),t._uU(14),t.ALo(15,"firstName"),t.qZA(),t.qZA(),t.TgZ(16,"div"),t.TgZ(17,"mat-label",30),t._uU(18),t.ALo(19,"firstName"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"td"),t.TgZ(21,"div"),t.TgZ(22,"mat-label",30),t._uU(23),t.qZA(),t.qZA(),t.TgZ(24,"div"),t.TgZ(25,"mat-label",30),t._uU(26),t.qZA(),t.qZA(),t.TgZ(27,"div"),t.TgZ(28,"mat-label",30),t._uU(29),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"td"),t.TgZ(31,"div"),t.TgZ(32,"mat-label",30),t._uU(33),t.qZA(),t.qZA(),t.TgZ(34,"div"),t.TgZ(35,"mat-label",30),t._uU(36),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"td",32),t.TgZ(38,"div"),t.TgZ(39,"button",33),t.NdJ("click",function(){const u=t.CHM(o).$implicit,f=t.oxw(2);return f.outras(f.getAcoes().Edicao,u)}),t.TgZ(40,"mat-icon"),t._uU(41,"edit"),t.qZA(),t.qZA(),t.TgZ(42,"button",34),t.NdJ("click",function(){const u=t.CHM(o).$implicit,f=t.oxw(2);return f.outras(f.getAcoes().Exclusao,u)}),t.TgZ(43,"mat-icon"),t._uU(44,"delete"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const o=r.$implicit;t.xp6(5),t.AsE("",t.xi3(6,12,o.inicial,"HH:mm")," as ",t.xi3(7,15,o.final,"HH:mm")," "),t.xp6(4),t.Oqu(t.lcZ(10,18,o.horasapon)),t.xp6(2),t.Q6J("ngIf","S"==o.encerramento),t.xp6(3),t.hij("Resp:",t.lcZ(15,20,o.resp_razao),""),t.xp6(4),t.hij("Exec:",t.lcZ(19,22,o.exec_razao),""),t.xp6(5),t.AsE("Contr:(",o.id_projeto,") ",o.cli_razao,""),t.xp6(3),t.Oqu(o.proj_descricao),t.xp6(3),t.Oqu(o.estru_descricao),t.xp6(4),t.Oqu(o.motivo_descricao),t.xp6(3),t.Oqu(o.obs)}}function lt(i,r){if(1&i&&(t.TgZ(0,"div",24),t.TgZ(1,"table",25),t.TgZ(2,"tr",26),t.TgZ(3,"th"),t._uU(4,"HOR\xc1RIO"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"CLIENTE/DESCRI\xc7\xc3O/ATIVIDADE"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"MOTIVO/OBS"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"A\xc7\xd5ES"),t.qZA(),t.qZA(),t.YNc(11,ct,45,24,"tr",27),t.qZA(),t.qZA()),2&i){const o=t.oxw();t.xp6(11),t.Q6J("ngForOf",o.apontamentos)}}function ut(i,r){if(1&i){const o=t.EpF();t.TgZ(0,"button",51),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).onManha()}),t._uU(1,"Manh\xe3"),t.qZA()}}function dt(i,r){if(1&i){const o=t.EpF();t.TgZ(0,"button",51),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).onAlmoco()}),t._uU(1,"Almo\xe7o"),t.qZA()}}function mt(i,r){if(1&i){const o=t.EpF();t.TgZ(0,"button",51),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).onTarde()}),t._uU(1,"Tarde"),t.qZA()}}function pt(i,r){if(1&i&&(t.TgZ(0,"mat-option",23),t._uU(1),t.qZA()),2&i){const o=r.$implicit;t.Q6J("value",o.codigo),t.xp6(1),t.hij(" ",o.motivo," ")}}function ht(i,r){if(1&i&&(t.TgZ(0,"mat-form-field",17),t.TgZ(1,"mat-label"),t._uU(2,"Motivo"),t.qZA(),t.TgZ(3,"mat-select",52),t.YNc(4,pt,2,2,"mat-option",19),t.qZA(),t.qZA()),2&i){const o=t.oxw(2);t.xp6(4),t.Q6J("ngForOf",o.motivos)}}function vt(i,r){if(1&i){const o=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",3),t.TgZ(2,"mat-toolbar"),t.TgZ(3,"span",4),t._uU(4),t.qZA(),t.TgZ(5,"div",37),t.YNc(6,ut,2,0,"button",38),t.YNc(7,dt,2,0,"button",38),t.YNc(8,mt,2,0,"button",38),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"form",9),t.TgZ(10,"div",39),t.TgZ(11,"mat-form-field",11),t.TgZ(12,"mat-label"),t._uU(13,"Entrada"),t.qZA(),t._UZ(14,"input",40),t.qZA(),t.TgZ(15,"mat-form-field",11),t.TgZ(16,"mat-label"),t._uU(17,"Sa\xedda"),t.qZA(),t._UZ(18,"input",41),t.qZA(),t.TgZ(19,"mat-form-field",42),t.TgZ(20,"mat-label"),t._uU(21,"Atividade"),t.qZA(),t._UZ(22,"input",43),t.qZA(),t.TgZ(23,"div",44),t.TgZ(24,"mat-checkbox",45),t._uU(25,"Encerrar Atividade "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",16),t.TgZ(27,"mat-form-field",11),t.TgZ(28,"mat-label"),t._uU(29,"Cliente"),t.qZA(),t._UZ(30,"input",46),t.qZA(),t.qZA(),t.TgZ(31,"div",16),t.YNc(32,ht,5,1,"mat-form-field",47),t.qZA(),t.TgZ(33,"div",16),t.TgZ(34,"mat-form-field",11),t.TgZ(35,"mat-label"),t._uU(36,"Observa\xe7\xe3o"),t.qZA(),t._UZ(37,"input",48),t.qZA(),t.qZA(),t.TgZ(38,"div",37),t.TgZ(39,"button",49),t.NdJ("click",function(){return t.CHM(o),t.oxw().onSubmit()}),t._uU(40),t.qZA(),t.TgZ(41,"button",50),t.NdJ("click",function(){return t.CHM(o),t.oxw().onCancel()}),t._uU(42),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const o=t.oxw();t.xp6(4),t.Oqu(o.labelCadastro),t.xp6(2),t.Q6J("ngIf",o.idAcao==o.getAcoes().Inclusao||o.idAcao==o.getAcoes().Edicao),t.xp6(1),t.Q6J("ngIf",o.idAcao==o.getAcoes().Inclusao||o.idAcao==o.getAcoes().Edicao),t.xp6(1),t.Q6J("ngIf",o.idAcao==o.getAcoes().Inclusao||o.idAcao==o.getAcoes().Edicao),t.xp6(1),t.Q6J("formGroup",o.formulario),t.xp6(5),t.Q6J("readonly",o.readOnly)("Setfocus",o.focusEntrada),t.xp6(4),t.Q6J("readonly",o.readOnly),t.xp6(6),t.Q6J("disableRipple",!1),t.xp6(8),t.Q6J("ngIf",o.idAcao!=o.getAcoes().Consulta&&o.idAcao!=o.getAcoes().Exclusao),t.xp6(5),t.Q6J("readonly",o.readOnly),t.xp6(2),t.Q6J("disabled",o.gravando),t.xp6(1),t.Oqu(o.acao),t.xp6(1),t.Q6J("Setfocus",o.focusCancelar),t.xp6(1),t.hij("",o.getLabelCancel()," ")}}let _t=(()=>{class i{constructor(o,a,e,u,f,x,b,S,E,Tt){this.usuariosService=a,this.aponPlanejamentoService=e,this.aponExecucaoService=u,this.atividadesService=f,this.motivoApoService=x,this.projetosServices=b,this.globalService=S,this.router=E,this.appSnackBar=Tt,this.agendamento=new d.Y,this.idAcao=0,this.acao="",this.labelCadastro="",this.id_empresa=0,this.apontamentos=[],this.apontamento=new g.o,this.agendamentos=[],this.atividades=[],this.atividade=new m.o,this.motivos=[],this.dados_projetos="Ol\xe1",this.usuario=new Z.g,this.filtro=!1,this.intervalos=[],this.readOnly=!0,this.showAtividades=!1,this.retornoAtividades=new A(0,0,new Date),this.contrato=new w.w,this.contratos=[],this.contratosFiltrados=[],this.grupo=new m.o,this.grupos=[],this.estrutura=new m.o,this.estruturas=[],this.focusEntrada=!1,this.focusCancelar=!1,this.gravando=!1,this.totalHoras=0,this.formulario=o.group({entrada:[{value:""},[s.kI.required]],saida:[{value:""},[s.kI.required]],atividade:[{value:""},[s.kI.required]],cliente:[{value:""},[s.kI.required]],id_motivo:[{value:""},[s.kI.required]],encerra:[{value:""},[s.kI.required]],obs:[{value:""},[s.kI.maxLength(150)]]}),this.parametro=o.group({usuario:[{value:""}],data:[{value:""}],id_estrutura:[{value:""},[s.kI.required,s.kI.min(1)]],id_contrato:[{value:""},[s.kI.required,s.kI.min(1)]],id_grupo:[{value:""},[s.kI.required,s.kI.min(1)]],id_atividade:[{value:""},[s.kI.required,s.kI.min(1)]]}),this.getUsuario(),this.setValue(),this.idAcao=99,this.setAcao(this.idAcao),this.setValue(),this.setParametro()}ngOnInit(){this.getApontamentosExecucao()}ngOnDestroy(){var o,a,e,u,f,x,b,S,E;null===(o=this.inscricaoGetAll)||void 0===o||o.unsubscribe(),null===(a=this.inscricaoAcao)||void 0===a||a.unsubscribe(),null===(e=this.inscricaoUsuario)||void 0===e||e.unsubscribe(),null===(u=this.inscricaoApontamento)||void 0===u||u.unsubscribe(),null===(f=this.inscricaoAponExecucao)||void 0===f||f.unsubscribe(),null===(x=this.inscricaoAtividades)||void 0===x||x.unsubscribe(),null===(b=this.inscricaoMotivos)||void 0===b||b.unsubscribe(),null===(S=this.inscricaoCoordenador)||void 0===S||S.unsubscribe(),null===(E=this.inscricaoGetContratos)||void 0===E||E.unsubscribe()}getUsuario(){this.globalService.setSpin(!0),this.inscricaoUsuario=this.usuariosService.getUsuario(this.globalService.getIdEmpresa(),this.globalService.getUsuario().id).subscribe(o=>{this.globalService.setSpin(!1),this.usuario=o,this.parametro.patchValue({usuario:this.usuario.razao}),this.getProjetos(),this.getMotivos()},o=>{this.globalService.setSpin(!1),this.usuario=new Z.g,console.log(o),this.appSnackBar.openFailureSnackBar(`${o.error.tabela} - ${o.error.erro} - ${o.error.message}`,"OK")})}getApontamentosExecucao(){let o=new q.W;o.id_empresa=this.globalService.getIdEmpresa(),o.id_exec=this.globalService.getUsuario().id,o.id_projeto=0,o.data=(0,c.JS)(this.parametro.value.data),o.orderby="Executor",this.globalService.setSpin(!0),this.inscricaoAponExecucao=this.aponExecucaoService.getApoExecucoes_01(o).subscribe(a=>{this.globalService.setSpin(!1),this.apontamentos=a,this.totalHoras=0,this.apontamentos.forEach(e=>{console.log(e.horasapon),this.totalHoras=this.totalHoras+Number(e.horasapon)})},a=>{this.globalService.setSpin(!1),this.apontamentos=[],this.totalHoras=0,"Nehuma Informa\xe7\xe3o Para Esta Consulta."!=a.error.message&&this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Apontamentos ${(0,c.bZ)(a)}`,"OK")})}getProjetos(){let o=new L.m;o.id_empresa=1,o.orderby="Fantasia",o.so_ativos="S",o.tem_atividade="S",this.globalService.setSpin(!0),this.inscricaoGetContratos=this.projetosServices.getProjetos_01(o).subscribe(a=>{this.globalService.setSpin(!1),this.contratos=a,this.contratosFiltrados=a,this.parametro.patchValue({id_contrato:this.contratos[0].id}),this.onChangeContrato()},a=>{this.globalService.setSpin(!1),this.appSnackBar.openSuccessSnackBar(`Pesquisa Contratos ${(0,c.bZ)(a)}`,"OK"),this.contratos=[]})}getAtividades(o){let a=new B.l;a.id_empresa=this.globalService.getIdEmpresa(),a.id_projeto=this.contrato.id,a.orderby="projeto","C"==o?(a.so_abertas_ex="S",a.nivel=1,a.tipo="C"):"G"==o?(a.so_abertas_ex="S",a.conta=this.estrutura.conta,a.nivel=2,a.tipo="S"):(a.so_abertas_ex="S",a.conta=this.grupo.conta,a.subconta=this.grupo.subconta.trim(),a.subconta_nivel="S",a.nivel_filtro=this.grupo.nivel,a.nivel=3,a.tipo="O"),this.globalService.setSpin(!0),this.inscricaoAtividades=this.atividadesService.getAtividades_01(a).subscribe(e=>{this.globalService.setSpin(!1),this.atividades=e,"C"==o?(this.estruturas=e,this.parametro.patchValue({id_estrutura:this.estruturas[0].id}),this.onChangeEstruturas(),this.getAtividades("G")):"G"==o?(this.grupos=e,this.parametro.patchValue({id_grupo:this.grupos[0].id}),this.onChangeGrupos()):(this.atividades=e,this.parametro.patchValue({id_atividade:this.atividades[0].id}),this.atividade=this.atividades.filter(u=>u.id===this.parametro.value.id_atividade)[0])},e=>{this.globalService.setSpin(!1),"C"==o?this.estruturas=[]:"G"==o?this.grupos=[]:this.atividades=[]})}getMotivos(){let o=new O.V;o.id_empresa=1,o.analitico="S",o.orderby="C\xf3digo",this.globalService.setSpin(!0),this.inscricaoMotivos=this.motivoApoService.getMotivoApos_01(o).subscribe(a=>{this.globalService.setSpin(!1),this.motivos=a},a=>{this.globalService.setSpin(!1),this.motivos=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Motivos Apontamentos ${(0,c.bZ)(a)}`,"OK")})}setValue(){this.formulario.setValue({entrada:this.apontamento.inicial.substring(this.apontamento.inicial.indexOf(" ")+1,16),saida:this.apontamento.final.substring(this.apontamento.final.indexOf(" ")+1,16),atividade:this.apontamento.estru_descricao,cliente:this.apontamento.cli_razao,id_motivo:this.apontamento.id_motivo,encerra:"S"==this.apontamento.encerramento,obs:this.apontamento.obs})}setParametro(){this.parametro.setValue({usuario:this.usuario.razao,data:new Date,id_estrutura:0,id_contrato:0,id_grupo:0,id_atividade:0})}setAcao(o){switch(this.focusEntrada=!1,this.focusCancelar=!1,+o){case p.I.Inclusao:this.acao="Gravar",this.labelCadastro=`Inclus\xe3o - ${(0,c.qS)(this.apontamento.inicial)}`,this.readOnly=!1,this.focusEntrada=!0;break;case p.I.Edicao:this.acao="Gravar",this.labelCadastro=`Altera\xe7\xe3o - ${(0,c.qS)(this.apontamento.inicial)}`,this.readOnly=!1,this.focusEntrada=!0;break;case p.I.Consulta:this.acao="Voltar",this.labelCadastro=`Consulta - ${(0,c.qS)(this.apontamento.inicial)}`,this.readOnly=!0,this.focusCancelar=!0;break;case p.I.Exclusao:this.acao="Excluir",this.labelCadastro=`Exclus\xe3o - ${(0,c.qS)(this.apontamento.inicial)}`,this.readOnly=!0;break;default:this.acao="",this.labelCadastro=""}}onRetorno(){this.router.navigate(["/"])}setFiltro(){this.filtro=!this.filtro}onSubmit(){this.gravando=!0;try{this.formulario.valid?this.executaAcao():(this.formulario.markAllAsTouched(),this.gravando=!1,this.appSnackBar.openSuccessSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK"))}catch(o){o instanceof H.i?this.appSnackBar.openSuccessSnackBar(`Lan\xe7amento Conflitando: ${o.message}`,"OK"):console.log(o)}}onRefresh(){this.parametro.valid?this.atividade=this.atividades.filter(o=>o.id===this.parametro.value.id_atividade)[0]:this.appSnackBar.openSuccessSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK")}adicao(o){this.gravando=!1;let a="";0==this.apontamentos.length?a="07:45:00":(a=this.apontamentos[this.apontamentos.length-1].final.substring(this.apontamentos[this.apontamentos.length-1].final.indexOf(" ")+1,16),"12:00"===a&&(a="13:00")),this.parametro.valid?(this.atividade=this.atividades.filter(u=>u.id===this.parametro.value.id_atividade)[0],this.idAcao=o,this.setAcao(this.idAcao),this.apontamento=new g.o,new Date((0,c.mu)(`${(0,c.JS)(this.parametro.value.data)} ${a}`)),console.log("Intervalos Adicao ==>",this.intervalos),this.apontamento.id_empresa=this.usuario.id_empresa,this.apontamento.id=0,this.apontamento.id_projeto=this.atividade.id_projeto,this.apontamento.id_conta=this.atividade.conta,this.apontamento.id_subconta=this.atividade.subconta,this.apontamento.id_conta_versao=this.atividade.versao,this.apontamento.id_subcliente=this.atividade.id_subcliente,this.apontamento.cli_razao=this.atividade.subcliente_razao,this.apontamento.id_resp=this.atividade.id_resp,this.apontamento.id_exec=this.usuario.id,this.apontamento.inicial=(0,c.mu)(`${(0,c.JS)(this.parametro.value.data)} ${a}`),this.apontamento.final=(0,c.mu)((0,c.JS)(this.parametro.value.data)+" 00:00:00"),this.apontamento.horasapon=0,this.apontamento.id_motivo=this.globalService.codigoMotivo,this.apontamento.produtivo="S",this.apontamento.obs="",this.apontamento.encerramento="N",this.apontamento.user_insert=this.usuario.id,this.apontamento.user_update=0,this.apontamento.resp_razao=this.atividade.resp_razao,this.apontamento.exec_razao=this.atividade.exec_razao,this.apontamento.estru_descricao=this.atividade.estru_descri,this.idAcao=o,this.setAcao(this.idAcao),this.setValue()):(this.parametro.markAllAsTouched(),this.appSnackBar.openSuccessSnackBar("Favor Preencher Os Par\xe2metros","OK"))}outras(o,a){this.gravando=!1,this.apontamento=new g.o,this.apontamento.id_empresa=this.usuario.id_empresa,this.apontamento.id=a.id,this.apontamento.id_projeto=a.id_projeto,this.apontamento.id_conta=a.id_conta,this.apontamento.id_subconta=a.id_subconta,this.apontamento.id_conta_versao=a.id_conta_versao,this.apontamento.id_subcliente=a.id_subcliente,this.apontamento.cli_razao=a.cli_razao,this.apontamento.id_resp=a.id_resp,this.apontamento.id_exec=a.id_exec,this.apontamento.inicial=a.inicial,this.apontamento.final=a.final,this.apontamento.horasapon=0,this.apontamento.id_motivo=this.globalService.codigoMotivo,this.apontamento.produtivo="S",this.apontamento.obs=a.obs,this.apontamento.encerramento=a.encerramento,this.apontamento.user_insert=a.user_insert,this.apontamento.user_update=a.user_update,this.apontamento.resp_razao=a.resp_razao,this.apontamento.exec_razao=a.exec_razao,this.apontamento.estru_descricao=a.estru_descricao,this.idAcao=o,this.setAcao(this.idAcao),this.setValue()}executaAcao(){var o=this;let a=new Date;switch(a.setTime(Date.parse(this.apontamento.inicial)),this.apontamento.inicial=(0,c.B9)(a,(0,c.Lv)(this.formulario.value.entrada),(0,c.lj)(this.formulario.value.entrada)),this.apontamento.final=(0,c.B9)(a,(0,c.Lv)(this.formulario.value.saida),(0,c.lj)(this.formulario.value.saida)),this.apontamento.horasapon=(0,c.KB)((0,c.Hh)(this.apontamento.inicial,this.apontamento.final)),this.apontamento.id_motivo=this.formulario.value.id_motivo,this.apontamento.obs=this.formulario.value.obs,this.apontamento.encerramento=this.formulario.value.encerra?"S":"N",+this.idAcao){case p.I.Inclusao:this.apontamento.user_insert=this.globalService.getUsuario().id,this.apontamento.id_conta_versao="0101",this.inscricaoAcao=this.aponExecucaoService.ApoExecucaoInsert(this.apontamento).subscribe(function(){var e=(0,h.Z)(function*(u){o.onCancel()});return function(u){return e.apply(this,arguments)}}(),e=>{this.gravando=!1,console.log("erro=>",e),this.appSnackBar.openFailureSnackBar(`${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")});break;case p.I.Edicao:this.apontamento.user_update=this.globalService.getUsuario().id,this.inscricaoAcao=this.aponExecucaoService.ApoExecucaoUpdate(this.apontamento).subscribe(function(){var e=(0,h.Z)(function*(u){o.onCancel()});return function(u){return e.apply(this,arguments)}}(),e=>{this.gravando=!1,console.log("Error",e.error),this.appSnackBar.openFailureSnackBar(`${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")});break;case p.I.Exclusao:this.inscricaoAcao=this.aponExecucaoService.ApoExecucaoDelete(this.apontamento.id_empresa,this.apontamento.id).subscribe(function(){var e=(0,h.Z)(function*(u){o.onCancel()});return function(u){return e.apply(this,arguments)}}(),e=>{this.gravando=!1,this.appSnackBar.openFailureSnackBar(`Erro Na Exclusao ${e.error.tabela} - ${e.error.erro} - ${e.error.message}`,"OK")})}}onCancel(){this.idAcao!=this.getAcoes().Consulta&&this.getApontamentosExecucao(),this.idAcao=99,this.setAcao(99)}getLabelCancel(){return this.idAcao==p.I.Consulta?"Voltar":"Cancelar"}getAcoes(){return p.I}touchedOrDirty(o){var a,e;return!(!(null===(a=this.formulario.get(o))||void 0===a?void 0:a.touched)&&!(null===(e=this.formulario.get(o))||void 0===e?void 0:e.dirty))}getTexto(){return c.fd}onChangeData(){this.getApontamentosExecucao()}onParametrosChange(){this.onRefresh()}getTitulo(){return"Apontamentos de execu\xe7\xe3o "}showDadosProjetoAgendamento(o){let a="";return a=`Projeto: ${o.id_projeto} Diretor: ${o.diretor_razao} Resp.: ${o.resp_razao}`,a}showDadosProjetoApontamento(o){let a="";return a=`Projeto: ${o.id_projeto} Descricao: ${o.proj_descricao} Resp.: ${o.resp_razao}`,a}onShowAtividades(){this.showAtividades=!this.showAtividades}onCancelarAtividades(){var o;console.log("Cancelada consulta",null===(o=this.retornoAtividades)||void 0===o?void 0:o.getId_Atividade()),this.onShowAtividades()}onOkAtividades(){var o;console.log("Confirmada Consulta",null===(o=this.retornoAtividades)||void 0===o?void 0:o.getId_Atividade()),this.onShowAtividades()}onChangeContrato(){let o=this.contratos.findIndex(a=>{var e;return a.id===(null===(e=this.parametro.value)||void 0===e?void 0:e.id_contrato)});o>=0&&(this.contrato=this.contratos[o],this.estruturas=[],this.grupos=[],this.atividades=[],this.getAtividades("C"))}onChangeEstruturas(){let o=this.estruturas.findIndex(a=>{var e;return a.id===(null===(e=this.parametro.value)||void 0===e?void 0:e.id_estrutura)});o>=0&&(this.grupos=[],this.atividades=[],this.estrutura=this.estruturas[o],this.getAtividades("G"))}onChangeGrupos(){let o=this.grupos.findIndex(a=>{var e;return a.id===(null===(e=this.parametro.value)||void 0===e?void 0:e.id_grupo)});o>=0&&(this.atividades=[],this.grupo=this.grupos[o],this.getAtividades(""))}onManha(){this.apontamento.inicial=this.apontamento.inicial.substring(0,this.apontamento.final.indexOf(" ")+1)+this.globalService.getUsuario().man_hora_entrada,this.apontamento.final=this.apontamento.final.substring(0,this.apontamento.final.indexOf(" ")+1)+this.globalService.getUsuario().man_hora_saida,this.formulario.patchValue({entrada:this.apontamento.inicial.substring(this.apontamento.inicial.indexOf(" ")+1,16),saida:this.apontamento.final.substring(this.apontamento.final.indexOf(" ")+1,16)})}onTarde(){let o="";o=5==new Date(this.apontamento.inicial).getDay()?"16:33":this.globalService.getUsuario().tard_hora_saida,this.apontamento.inicial=this.apontamento.inicial.substring(0,this.apontamento.inicial.indexOf(" ")+1)+this.globalService.getUsuario().tard_hora_entrada,this.apontamento.final=this.apontamento.final.substring(0,this.apontamento.final.indexOf(" ")+1)+o,this.formulario.patchValue({entrada:this.apontamento.inicial.substring(this.apontamento.inicial.indexOf(" ")+1,16),saida:this.apontamento.final.substring(this.apontamento.final.indexOf(" ")+1,16)})}onAlmoco(){this.apontamento.inicial=this.apontamento.inicial.substring(0,this.apontamento.inicial.indexOf(" ")+1)+"12:00",this.apontamento.final=this.apontamento.final.substring(0,this.apontamento.final.indexOf(" ")+1)+"13:00",this.formulario.patchValue({entrada:this.apontamento.inicial.substring(this.apontamento.inicial.indexOf(" ")+1,16),saida:this.apontamento.final.substring(this.apontamento.final.indexOf(" ")+1,16)})}onDiaTodo(){}getfirstName(o){return(0,c.S4)(o)}filtroContratos(o){this.contratosFiltrados=this.contratos.filter(a=>a.descricao.indexOf(o)>-1)}onChangeContrato2(o){console.log(o)}onFacilitador(){this.router.navigate(["execucao/facilitador"])}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(s.qu),t.Y36(R.J),t.Y36(V.G),t.Y36(k.A),t.Y36(z.a),t.Y36(M.s),t.Y36(G.T),t.Y36(J.U),t.Y36(_.F0),t.Y36(N.W))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-crud-Execucao"]],decls:5,vars:4,consts:[[4,"ngIf"],["class","box",4,"ngIf"],[1,"rodape"],[1,"div-barra"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Facilitador","matTooltipPosition","above",3,"click",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Novo Apontamento","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Facilitador","matTooltipPosition","above",3,"click"],["autocomplete","off",3,"formGroup"],[1,"col-med-2"],["appearance","outline",1,"col-max"],["matInput","","formControlName","usuario","readonly","true"],["matInput","","formControlName","data",3,"matDatepicker","dateChange"],["matSuffix","",3,"for"],["dataDatePicker",""],[1,"col-med-1"],["field","","appearance","outline",1,"col-max"],["formControlName","id_contrato",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","id_estrutura",3,"selectionChange"],["formControlName","id_grupo",3,"selectionChange"],["formControlName","id_atividade",3,"selectionChange"],[3,"value"],[1,"box"],[1,"Browse_Lanc"],[1,"coluna-cabec"],[4,"ngFor","ngForOf"],[1,"wrapper"],[1,"first"],[1,"Browse_Lanc_td"],["class","second",4,"ngIf"],[1,"acoes"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Alterar Apontamento","matTooltipPosition","above",1,"example-icon",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Excluir Apontamento","matTooltipPosition","above",1,"example-icon",3,"click"],[1,"second"],[1,"green-icon"],[1,"button-container-right"],["mat-button","","class","green-icon",3,"click",4,"ngIf"],[1,"col-med-5"],["matInput","","formControlName","entrada","placeholder","HH:MM","mask","00:00",3,"readonly","Setfocus"],["matInput","","formControlName","saida","placeholder","HH:MM","mask","00:00",3,"readonly"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","atividade","readonly","true","tabindex","-1"],[1,"col-max"],["formControlName","encerra",1,"encerramento",3,"disableRipple"],["matInput","","formControlName","cliente","readonly","true","tabindex","-1"],["field","","appearance","outline","class","col-max",4,"ngIf"],["matInput","","formControlName","obs","oninput","this.value = this.value.toUpperCase()",3,"readonly"],["mat-raised-button","","color","primary",1,"buttons",3,"disabled","click"],["mat-raised-button","","color","accent",1,"buttons",3,"Setfocus","click"],["mat-button","",1,"green-icon",3,"click"],["formControlName","id_motivo"]],template:function(o,a){1&o&&(t.YNc(0,ot,13,5,"div",0),t.YNc(1,st,37,7,"div",0),t.YNc(2,lt,12,1,"div",1),t._UZ(3,"div",2),t.YNc(4,vt,43,15,"div",0)),2&o&&(t.Q6J("ngIf",99==a.idAcao),t.xp6(1),t.Q6J("ngIf",99==a.idAcao),t.xp6(1),t.Q6J("ngIf",99==a.idAcao&&!a.showAtividades),t.xp6(2),t.Q6J("ngIf",99!==a.idAcao))},directives:[l.O5,F.Ye,y.lW,K.gM,W.Hw,s._Y,s.JL,s.sg,T.KE,T.hX,$.Nt,s.Fj,s.JJ,s.u,U.hl,U.nW,T.R9,U.Mq,j.gD,l.sg,D.ey,I.hx,P.b,Q.oG],pipes:[Y.X,l.uU,X.z],styles:["tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2aa}tr[_ngcontent-%COMP%]:hover{background-color:#caa99d}"]}),i})();var gt=n(4436);function ft(i,r){if(1&i&&(t.TgZ(0,"mat-option",22),t._uU(1),t.qZA()),2&i){const o=r.$implicit;t.Q6J("value",o.codigo),t.xp6(1),t.hij(" ",o.motivo," ")}}const Zt=[{path:"",redirectTo:"execucoesv2",pathMatch:"full"},{path:"execucoesv2",component:_t},{path:"facilitador",component:(()=>{class i{constructor(o,a,e,u,f,x,b){this.horasexagenal=a,this.aponExecucaoService=e,this.motivoApoService=u,this.globalService=f,this.router=x,this.appSnackBar=b,this.focusEntrada=!1,this.focusCancelar=!1,this.gravando=!1,this.lsMotivos=[],this.apontamentos=[],this.apontamento=new g.o,this.horaInicial=6,this.horaFinal=23,this.horas=0,this.formulario=o.group({entrada:[{value:""},[s.kI.required]],saida:[{value:""},[s.kI.required]],id_motivo:[{value:""},[s.kI.required]],obs:[{value:""},[s.kI.maxLength(150)]]})}ngOnInit(){this.getMotivos()}ngOnDestroy(){var o;null===(o=this.inscricaoMotivos)||void 0===o||o.unsubscribe()}getMotivos(){let o=new O.V;o.id_empresa=1,o.analitico="S",o.orderby="C\xf3digo",this.globalService.setSpin(!0),this.inscricaoMotivos=this.motivoApoService.getMotivoApos_01(o).subscribe(a=>{this.globalService.setSpin(!1),this.lsMotivos=a},a=>{this.globalService.setSpin(!1),this.lsMotivos=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Motivos Apontamentos ${(0,c.bZ)(a)}`,"OK")})}setValue(){this.formulario.setValue({entrada:this.apontamento.inicial.substring(this.apontamento.inicial.indexOf(" ")+1,16),saida:this.apontamento.final.substring(this.apontamento.final.indexOf(" ")+1,16),id_motivo:this.apontamento.id_motivo,encerra:"S"==this.apontamento.encerramento,obs:this.apontamento.obs})}onSubmit(){}onCancel(){}onPulaAlmo\u00e7o(){}onDiaTodo(){}formatLabel(o){return this.horasexagenal.transform(o)}onPegaHora(){}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(s.qu),t.Y36(Y.X),t.Y36(k.A),t.Y36(M.s),t.Y36(J.U),t.Y36(_.F0),t.Y36(N.W))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-facilitador"]],decls:46,vars:10,consts:[[1,"div-barra"],[1,"example-spacer"],[1,"button-container-right"],[1,"encerramento",3,"disableRipple"],["autocomplete","off",3,"formGroup"],[1,"col-med-5"],["appearance","outline",1,"col-max"],["matInput","","formControlName","entrada","placeholder","HH:MM","mask","00:00",3,"Setfocus"],["matInput","","formControlName","saida","placeholder","HH:MM","mask","00:00"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","atividade","readonly","true","tabindex","-1"],[1,"col-max"],["formControlName","encerra",1,"encerramento",3,"disableRipple"],[1,"col-med-1"],["field","","appearance","outline",1,"col-max"],["formControlName","id_motivo"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","obs","oninput","this.value = this.value.toUpperCase()"],["mat-raised-button","","color","primary",1,"buttons",3,"disabled","click"],["mat-raised-button","","color","accent",1,"buttons",3,"Setfocus","click"],["thumbLabel","","tickInterval","1000","step","0.30","min","4","max","23.99","aria-label","units","showTickMarks","","discrete","",3,"displayWith"],["matSliderThumb",""],[3,"value"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-toolbar"),t.TgZ(2,"span",1),t._uU(3,"Facilitador Lan\xe7amentos Horas"),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"mat-checkbox",3),t._uU(6,"Considera Almo\xe7o"),t.qZA(),t.TgZ(7,"mat-checkbox",3),t._uU(8,"Dia Todo"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"form",4),t.TgZ(10,"div",5),t.TgZ(11,"mat-form-field",6),t.TgZ(12,"mat-label"),t._uU(13,"Entrada"),t.qZA(),t._UZ(14,"input",7),t.qZA(),t.TgZ(15,"mat-form-field",6),t.TgZ(16,"mat-label"),t._uU(17,"Sa\xedda"),t.qZA(),t._UZ(18,"input",8),t.qZA(),t.TgZ(19,"mat-form-field",9),t.TgZ(20,"mat-label"),t._uU(21,"Atividade"),t.qZA(),t._UZ(22,"input",10),t.qZA(),t.TgZ(23,"div",11),t.TgZ(24,"mat-checkbox",12),t._uU(25,"Encerrar Atividade "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",13),t.TgZ(27,"mat-form-field",14),t.TgZ(28,"mat-label"),t._uU(29,"Motivo"),t.qZA(),t.TgZ(30,"mat-select",15),t.YNc(31,ft,2,2,"mat-option",16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",13),t.TgZ(33,"mat-form-field",6),t.TgZ(34,"mat-label"),t._uU(35,"Observa\xe7\xe3o"),t.qZA(),t._UZ(36,"input",17),t.qZA(),t.qZA(),t.TgZ(37,"div",2),t.TgZ(38,"button",18),t.NdJ("click",function(){return a.onSubmit()}),t._uU(39,"Gravar"),t.qZA(),t.TgZ(40,"button",19),t.NdJ("click",function(){return a.onCancel()}),t._uU(41,"Cancelar() "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(42,"mat-slider",20),t._UZ(43,"input",21),t.qZA(),t.TgZ(44,"mat-label"),t._uU(45),t.qZA()),2&o&&(t.xp6(5),t.Q6J("disableRipple",!1),t.xp6(2),t.Q6J("disableRipple",!1),t.xp6(2),t.Q6J("formGroup",a.formulario),t.xp6(5),t.Q6J("Setfocus",a.focusEntrada),t.xp6(10),t.Q6J("disableRipple",!1),t.xp6(7),t.Q6J("ngForOf",a.lsMotivos),t.xp6(7),t.Q6J("disabled",a.gravando),t.xp6(2),t.Q6J("Setfocus",a.focusCancelar),t.xp6(2),t.Q6J("displayWith",a.formatLabel),t.xp6(3),t.Oqu(a.horaInicial))},directives:[F.Ye,Q.oG,s._Y,s.JL,s.sg,T.KE,T.hX,$.Nt,s.Fj,I.hx,s.JJ,s.u,P.b,j.gD,l.sg,y.lW,gt.pH,D.ey],styles:["mat-slider[_ngcontent-%COMP%]{width:300px}"]}),i})()}];let At=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[_.Bz.forChild(Zt)],_.Bz]}),i})();var xt=n(4589),bt=n(4466);let Ct=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.ez,At,xt.q,s.u5,s.UX,bt.m,I.yI.forChild()]]}),i})()},9648:(C,v,n)=>{n.d(v,{W:()=>l});class l{constructor(){this.id_empresa=0,this.id="",this.id_projeto=0,this.id_conta="",this.id_subconta="",this.id_resp=0,this.id_exec=0,this.id_dir=0,this.data="",this.orderby="",this.sharp=!0}}},3914:(C,v,n)=>{n.d(v,{V:()=>l});class l{constructor(){this.id_empresa=0,this.codigo="",this.motivo="",this.sintetico="",this.analitico="",this.pagina=1,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},4307:(C,v,n)=>{n.d(v,{s:()=>Z});var l=n(2340),_=n(7716),h=n(1841);let Z=(()=>{class m{constructor(d){this.http=d,this.apiURL=l.N.apiURL}getMotivoApos(){return this.http.get(`${this.apiURL}motivoapos`)}getMotivoApos_01(d){return this.http.post(`${this.apiURL}motivoapos`,d)}getMotivoApo(d,A){return this.http.get(`${this.apiURL}motivoapo/${d}/${A}`)}MotivoApoInsert(d){return this.http.post(`${this.apiURL}motivoapo`,d)}MotivoApoUpdate(d){return this.http.put(`${this.apiURL}motivoapo`,d)}MotivoApoDelete(d,A){return this.http.delete(`${this.apiURL}motivoapo/${d}/${A}`)}}return m.\u0275fac=function(d){return new(d||m)(_.LFG(h.eN))},m.\u0275prov=_.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},9930:(C,v,n)=>{n.d(v,{b:()=>_});var l=n(7716);let _=(()=>{class h{constructor(m,g){this.hostElement=m,this.renderer=g,this.isFocused=!1}ngOnInit(){this.isFocused&&this.renderer.selectRootElement(this.hostElement.nativeElement).focus()}}return h.\u0275fac=function(m){return new(m||h)(l.Y36(l.SBq),l.Y36(l.Qsj))},h.\u0275dir=l.lG2({type:h,selectors:[["","Setfocus",""]],inputs:{isFocused:["Setfocus","isFocused"]}}),h})()},8239:(C,v,n)=>{function l(h,Z,m,g,d,A,s){try{var p=h[A](s),c=p.value}catch(q){return void m(q)}p.done?Z(c):Promise.resolve(c).then(g,d)}function _(h){return function(){var Z=this,m=arguments;return new Promise(function(g,d){var A=h.apply(Z,m);function s(c){l(A,g,d,s,p,"next",c)}function p(c){l(A,g,d,s,p,"throw",c)}s(void 0)})}}n.d(v,{Z:()=>_})}}]);