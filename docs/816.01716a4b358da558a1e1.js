"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[816],{4816:(E,A,e)=>{e.r(A),e.d(A,{ExecucaoV2Module:()=>ht});var h=e(8583),v=e(4655),m=e(8239),x=e(7438),u=e(3211);class g{constructor(){this.id_empresa=0,this.id=0,this.id_projeto=0,this.id_conta="",this.id_conta_versao="0101",this.id_subconta="",this.id_resp=0,this.id_exec=0,this.id_motivo="",this.inicial="",this.final="",this.obs="",this.horasapon=0,this.encerramento="N",this.user_insert=0,this.user_update=0,this.estru_descricao="",this.resp_razao="",this.exec_razao="",this.proj_descricao="",this.motivo_descricao="",this.motivo_produtivo="",this.ativ_inicial="",this.ativ_final="",this.cli_razao=""}}var s=e(8440);class d{constructor(r,a,o){this.idEmpresa=r,this.idAuditor=a,this.id_atividade=0,this.id_empresa=r,this.id_auditor=a,this.hoje=o}getId_Atividade(){return this.id_atividade}setId_Atividade(r){this.id_atividade=r}}var l=e(3679),_=e(3032),c=e(7117),q=e(9648),$=e(3962),M=e(3914),P=e(98),j=e(3525),N=e(4782),t=e(7716),y=e(1209),J=e(1872),k=e(8059),L=e(9715),R=e(3073),D=e(1843),B=e(4590),F=e(789),V=e(2522),Y=e(1095),H=e(1436),Q=e(6627),U=e(8295),G=e(9983),I=e(3220),w=e(7441),K=e(2458),S=e(3935),O=e(2559),z=e(7539),W=e(1790);function X(n,r){if(1&n){const a=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",2),t.TgZ(2,"mat-toolbar"),t.TgZ(3,"span",3),t._uU(4),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){t.CHM(a);const i=t.oxw();return i.adicao(i.getAcoes().Inclusao)}),t.TgZ(6,"mat-icon"),t._uU(7,"add_circle_outline"),t.qZA(),t.qZA(),t.TgZ(8,"button",5),t.NdJ("click",function(){return t.CHM(a),t.oxw().onRetorno()}),t.TgZ(9,"mat-icon"),t._uU(10,"arrow_back"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const a=t.oxw();t.xp6(4),t.Oqu(a.getTitulo())}}function tt(n,r){if(1&n&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&n){const a=r.$implicit;t.Q6J("value",a.id),t.xp6(1),t.AsE(" ",a.id,"-",a.cliente_razao," ")}}function at(n,r){if(1&n&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&n){const a=r.$implicit;t.Q6J("value",a.id),t.xp6(1),t.hij(" ",a.estru_descri," ")}}function ot(n,r){if(1&n&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&n){const a=r.$implicit;t.Q6J("value",a.id),t.xp6(1),t.hij(" ",a.estru_descri," ")}}function et(n,r){if(1&n){const a=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"form",6),t.TgZ(2,"div",7),t.TgZ(3,"mat-form-field",8),t.TgZ(4,"mat-label"),t._uU(5,"Usu\xe1rio:"),t.qZA(),t._UZ(6,"input",9),t.qZA(),t.TgZ(7,"mat-form-field",8),t.TgZ(8,"mat-label"),t._uU(9,"Data:"),t.qZA(),t.TgZ(10,"input",10),t.NdJ("dateChange",function(){return t.CHM(a),t.oxw().onParametrosChange()}),t.qZA(),t._UZ(11,"mat-datepicker-toggle",11),t._UZ(12,"mat-datepicker",null,12),t.qZA(),t.qZA(),t.TgZ(14,"div",13),t.TgZ(15,"mat-form-field",14),t.TgZ(16,"mat-label"),t._uU(17,"Contratos"),t.qZA(),t.TgZ(18,"mat-select",15),t.NdJ("selectionChange",function(){return t.CHM(a),t.oxw().onChangeContrato()}),t.YNc(19,tt,2,3,"mat-option",16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",7),t.TgZ(21,"mat-form-field",14),t.TgZ(22,"mat-label"),t._uU(23,"Grupos"),t.qZA(),t.TgZ(24,"mat-select",17),t.NdJ("selectionChange",function(){return t.CHM(a),t.oxw().onChangeGrupos()}),t.YNc(25,at,2,2,"mat-option",16),t.qZA(),t.qZA(),t.TgZ(26,"mat-form-field",14),t.TgZ(27,"mat-label"),t._uU(28,"Atividades"),t.qZA(),t.TgZ(29,"mat-select",18),t.NdJ("selectionChange",function(){return t.CHM(a),t.oxw().onParametrosChange()}),t.YNc(30,ot,2,2,"mat-option",16),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const a=t.MAs(13),o=t.oxw();t.xp6(1),t.Q6J("formGroup",o.parametro),t.xp6(9),t.Q6J("matDatepicker",a),t.xp6(1),t.Q6J("for",a),t.xp6(8),t.Q6J("ngForOf",o.contratos),t.xp6(6),t.Q6J("ngForOf",o.grupos),t.xp6(5),t.Q6J("ngForOf",o.atividades)}}function it(n,r){if(1&n){const a=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t.TgZ(2,"div"),t.TgZ(3,"mat-label",23),t._uU(4),t.ALo(5,"date"),t.ALo(6,"date"),t.qZA(),t.TgZ(7,"mat-label",23),t._uU(8),t.ALo(9,"horaSexagenal"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"td"),t.TgZ(11,"div"),t.TgZ(12,"mat-label",23),t._uU(13),t.qZA(),t.qZA(),t.TgZ(14,"div"),t.TgZ(15,"mat-label",23),t._uU(16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"td"),t.TgZ(18,"div"),t.TgZ(19,"mat-label",23),t._uU(20),t.qZA(),t.qZA(),t.TgZ(21,"div"),t.TgZ(22,"mat-label",23),t._uU(23),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"td"),t.TgZ(25,"div"),t.TgZ(26,"button",24),t.NdJ("click",function(){const p=t.CHM(a).$implicit,f=t.oxw(2);return f.outras(f.getAcoes().Edicao,p)}),t.TgZ(27,"mat-icon"),t._uU(28,"edit"),t.qZA(),t.qZA(),t.TgZ(29,"button",25),t.NdJ("click",function(){const p=t.CHM(a).$implicit,f=t.oxw(2);return f.outras(f.getAcoes().Exclusao,p)}),t.TgZ(30,"mat-icon"),t._uU(31,"delete"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const a=r.$implicit;t.xp6(4),t.AsE("",t.xi3(5,7,a.inicial,"HH:mm")," as ",t.xi3(6,10,a.final,"HH:mm")," "),t.xp6(4),t.Oqu(t.lcZ(9,13,a.horasapon)),t.xp6(5),t.Oqu(a.proj_descricao),t.xp6(3),t.Oqu(a.estru_descricao),t.xp6(4),t.Oqu(a.motivo_descricao),t.xp6(3),t.Oqu(a.obs)}}function nt(n,r){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"table",20),t.TgZ(2,"tr",21),t.TgZ(3,"th"),t._uU(4,"HOR\xc1RIO"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"CLIENTE/ATIVIDADE"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"MOTIVO/OBS"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"A\xc7\xd5ES"),t.qZA(),t.qZA(),t.YNc(11,it,32,15,"tr",22),t.qZA(),t.qZA()),2&n){const a=t.oxw();t.xp6(11),t.Q6J("ngForOf",a.apontamentos)}}function st(n,r){if(1&n){const a=t.EpF();t.TgZ(0,"button",42),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onManha()}),t.TgZ(1,"mat-icon"),t._uU(2,"watch_later"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Manh\xe3"),t.qZA(),t.qZA(),t.TgZ(5,"button",42),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onTarde()}),t.TgZ(6,"mat-icon"),t._uU(7,"watch_later"),t.qZA(),t.TgZ(8,"span"),t._uU(9,"Tarde"),t.qZA(),t.qZA()}}function rt(n,r){if(1&n&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&n){const a=r.$implicit;t.Q6J("value",a.codigo),t.xp6(1),t.hij(" ",a.motivo," ")}}function ct(n,r){if(1&n&&(t.TgZ(0,"mat-form-field",14),t.TgZ(1,"mat-label"),t._uU(2,"Motivo"),t.qZA(),t.TgZ(3,"mat-select",43),t.YNc(4,rt,2,2,"mat-option",16),t.qZA(),t.qZA()),2&n){const a=t.oxw(2);t.xp6(4),t.Q6J("ngForOf",a.motivos)}}function lt(n,r){if(1&n){const a=t.EpF();t.TgZ(0,"form",6),t.TgZ(1,"div",2),t.TgZ(2,"mat-toolbar"),t.TgZ(3,"span",3),t._uU(4),t.qZA(),t.TgZ(5,"button",26),t.TgZ(6,"mat-icon"),t._uU(7,"more_vert"),t.qZA(),t.qZA(),t.TgZ(8,"mat-menu",null,27),t.YNc(10,st,10,0,"ng-template",28),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",29),t.TgZ(12,"mat-form-field",8),t.TgZ(13,"mat-label"),t._uU(14,"Entrada"),t.qZA(),t._UZ(15,"input",30),t.qZA(),t.TgZ(16,"mat-form-field",8),t.TgZ(17,"mat-label"),t._uU(18,"Sa\xedda"),t.qZA(),t._UZ(19,"input",31),t.qZA(),t.TgZ(20,"mat-form-field",32),t.TgZ(21,"mat-label"),t._uU(22,"Atividade"),t.qZA(),t._UZ(23,"input",33),t.qZA(),t.TgZ(24,"div",34),t.TgZ(25,"mat-checkbox",35),t._uU(26,"Encerrar Atividade "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"div",13),t.TgZ(28,"mat-form-field",8),t.TgZ(29,"mat-label"),t._uU(30,"Cliente"),t.qZA(),t._UZ(31,"input",36),t.qZA(),t.qZA(),t.TgZ(32,"div",13),t.YNc(33,ct,5,1,"mat-form-field",37),t.qZA(),t.TgZ(34,"div",13),t.TgZ(35,"mat-form-field",8),t.TgZ(36,"mat-label"),t._uU(37,"Observa\xe7\xe3o"),t.qZA(),t._UZ(38,"input",38),t.qZA(),t.qZA(),t.TgZ(39,"div",39),t.TgZ(40,"button",40),t.NdJ("click",function(){return t.CHM(a),t.oxw().onSubmit()}),t._uU(41),t.qZA(),t.TgZ(42,"button",41),t.NdJ("click",function(){return t.CHM(a),t.oxw().onCancel()}),t._uU(43),t.qZA(),t.qZA(),t.qZA()}if(2&n){const a=t.MAs(9),o=t.oxw();t.Q6J("formGroup",o.formulario),t.xp6(4),t.Oqu(o.labelCadastro),t.xp6(1),t.Q6J("matMenuTriggerFor",a),t.xp6(10),t.Q6J("readonly",o.readOnly),t.xp6(4),t.Q6J("readonly",o.readOnly),t.xp6(6),t.Q6J("disableRipple",!1),t.xp6(8),t.Q6J("ngIf",o.idAcao!=o.getAcoes().Consulta&&o.idAcao!=o.getAcoes().Exclusao),t.xp6(5),t.Q6J("readonly",o.readOnly),t.xp6(3),t.Oqu(o.acao),t.xp6(2),t.Oqu(o.getLabelCancel())}}const ut=[{path:"",redirectTo:"execucoesv2",pathMatch:"full"},{path:"execucoesv2",component:(()=>{class n{constructor(a,o,i,p,f,Z,C,b,T,vt){this.usuariosService=o,this.aponPlanejamentoService=i,this.aponExecucaoService=p,this.atividadesService=f,this.motivoApoService=Z,this.projetosServices=C,this.globalService=b,this.router=T,this.appSnackBar=vt,this.durationInSeconds=2,this.agendamento=new s.Y,this.idAcao=0,this.acao="",this.labelCadastro="",this.id_empresa=0,this.apontamentos=[],this.apontamento=new g,this.agendamentos=[],this.atividades=[],this.atividade=new u.o,this.motivos=[],this.dados_projetos="Ol\xe1",this.usuario=new x.g,this.filtro=!1,this.intervalos=[],this.readOnly=!0,this.showAtividades=!1,this.retornoAtividades=new d(0,0,new Date),this.contrato=new j.w,this.contratos=[],this.grupo=new u.o,this.grupos=[],this.formulario=a.group({entrada:[{value:""},[l.kI.required]],saida:[{value:""},[l.kI.required]],atividade:[{value:""},[l.kI.required]],cliente:[{value:""},[l.kI.required]],id_motivo:[{value:""},[l.kI.required]],encerra:[{value:""},[l.kI.required]],obs:[{value:""},[l.kI.maxLength(50)]]}),this.parametro=a.group({usuario:[{value:""}],data:[{value:""}],id_contrato:[{value:""},[l.kI.required,l.kI.min(1)]],id_grupo:[{value:""},[l.kI.required,l.kI.min(1)]],id_atividade:[{value:""},[l.kI.required,l.kI.min(1)]]}),this.getUsuario(),this.setValue(),this.idAcao=99,this.setAcao(this.idAcao),this.setValue(),this.setParametro()}ngOnInit(){this.getApontamentosExecucao()}ngOnDestroy(){var a,o,i,p,f,Z,C,b,T;null===(a=this.inscricaoGetAll)||void 0===a||a.unsubscribe(),null===(o=this.inscricaoAcao)||void 0===o||o.unsubscribe(),null===(i=this.inscricaoUsuario)||void 0===i||i.unsubscribe(),null===(p=this.inscricaoApontamento)||void 0===p||p.unsubscribe(),null===(f=this.inscricaoAponExecucao)||void 0===f||f.unsubscribe(),null===(Z=this.inscricaoAtividades)||void 0===Z||Z.unsubscribe(),null===(C=this.inscricaoMotivos)||void 0===C||C.unsubscribe(),null===(b=this.inscricaoCoordenador)||void 0===b||b.unsubscribe(),null===(T=this.inscricaoGetContratos)||void 0===T||T.unsubscribe()}getUsuario(){this.globalService.setSpin(!0),this.inscricaoUsuario=this.usuariosService.getUsuario(this.globalService.getIdEmpresa(),this.globalService.getUsuario().id).subscribe(a=>{this.globalService.setSpin(!1),this.usuario=a,this.parametro.patchValue({usuario:this.usuario.razao}),this.getProjetos(),this.getMotivos()},a=>{this.globalService.setSpin(!1),this.usuario=new x.g,console.log(a),this.appSnackBar.openFailureSnackBar(`${a.error.tabela} - ${a.error.erro} - ${a.error.message}`,"OK")})}getApontamentosExecucao(){let a=new q.W;a.id_empresa=1,a.id_exec=this.usuario.id,a.id_projeto=this.atividade.id_projeto,a.data=(0,c.JS)(this.parametro.value.data),a.orderby="Executor",this.globalService.setSpin(!0),this.inscricaoAponExecucao=this.aponExecucaoService.getApoExecucoes_01(a).subscribe(o=>{this.globalService.setSpin(!1),this.apontamentos=o},o=>{this.globalService.setSpin(!1),this.apontamentos=[],console.log(`Erro getApontamentosExecucao: ${o}`)})}getProjetos(){let a=new N.m;a.id_empresa=1,a.orderby="C\xf3digo",this.globalService.setSpin(!0),this.inscricaoGetContratos=this.projetosServices.getProjetos_01(a).subscribe(o=>{this.globalService.setSpin(!1),this.contratos=o,this.parametro.patchValue({id_contrato:this.contratos[0].id}),this.onChangeContrato()},o=>{this.globalService.setSpin(!1),"Nehuma Informa\xe7\xe3o Para Esta Consulta."==o.error.message?(this.contratos=[],this.appSnackBar.openSuccessSnackBar("Nenhuma Informa\xe7\xe3o Encontrada Para Esta Consulta!","OK")):this.contratos=[]})}getAtividades(a){let o=new $.l;o.id_empresa=1,o.id_projeto=this.contrato.id,o.orderby="projeto","G"==a?(o.so_abertas_ex="S",o.conta="01",o.nivel=2,o.tipo="S"):(o.so_abertas_ex="S",o.conta="01",o.subconta=this.grupo.subconta.trim(),o.subconta_nivel="S",o.nivel_filtro=this.grupo.nivel,o.nivel=3,o.tipo="O"),this.globalService.setSpin(!0),this.inscricaoAtividades=this.atividadesService.getAtividades_01(o).subscribe(i=>{this.globalService.setSpin(!1),this.atividades=i,"G"==a?(this.grupos=i,this.parametro.patchValue({id_grupo:this.grupos[0].id}),this.onChangeGrupos()):(this.atividades=i,this.parametro.patchValue({id_atividade:this.atividades[0].id}),this.atividade=this.atividades.filter(p=>p.id===this.parametro.value.id_atividade)[0])},i=>{this.globalService.setSpin(!1),"G"==a?this.grupos=[]:this.atividades=[]})}getMotivos(){let a=new M.V;a.id_empresa=1,a.analitico="S",a.orderby="C\xf3digo",this.globalService.setSpin(!0),this.inscricaoAponExecucao=this.motivoApoService.getMotivoApos_01(a).subscribe(o=>{this.globalService.setSpin(!1),this.motivos=o},o=>{this.globalService.setSpin(!1),this.motivos=[],this.appSnackBar.openFailureSnackBar(`${o.error.tabela} - ${o.error.erro} - ${o.error.message}`,"OK")})}setValue(){this.formulario.setValue({entrada:this.apontamento.inicial.substring(this.apontamento.inicial.indexOf(" ")+1,16),saida:this.apontamento.final.substring(this.apontamento.final.indexOf(" ")+1,16),atividade:this.apontamento.estru_descricao,cliente:this.atividade.subcliente_razao,id_motivo:this.apontamento.id_motivo,encerra:"S"==this.apontamento.encerramento,obs:this.apontamento.obs})}setParametro(){this.parametro.setValue({usuario:this.usuario.razao,data:new Date,id_contrato:0,id_grupo:0,id_atividade:0})}setAcao(a){switch(+a){case _.I.Inclusao:this.acao="Gravar",this.labelCadastro=`Inclus\xe3o - ${(0,c.qS)(this.apontamento.inicial)}`,this.readOnly=!1;break;case _.I.Edicao:this.acao="Gravar",this.labelCadastro=`Altera\xe7\xe3o - ${(0,c.qS)(this.apontamento.inicial)}`,this.readOnly=!1;break;case _.I.Consulta:this.acao="Voltar",this.labelCadastro=`Consulta - ${(0,c.qS)(this.apontamento.inicial)}`,this.readOnly=!0;break;case _.I.Exclusao:this.acao="Excluir",this.labelCadastro=`Exclus\xe3o - ${(0,c.qS)(this.apontamento.inicial)}`,this.readOnly=!0;break;default:this.acao="",this.labelCadastro=""}}onRetorno(){this.router.navigate(["/"])}setFiltro(){this.filtro=!this.filtro}onSubmit(){try{(this.idAcao==_.I.Inclusao||this.idAcao==_.I.Edicao)&&(console.log("Edi\xe7\xe3o =>",this.intervalos,this.formulario.value.entrada,this.formulario.value.saida),(0,c.yQ)(this.intervalos,this.formulario.value.entrada,this.formulario.value.saida)),this.formulario.valid?this.executaAcao():this.appSnackBar.openSuccessSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK")}catch(a){a instanceof P.i?this.appSnackBar.openSuccessSnackBar(`Lan\xe7amento Conflitando: ${a.message}`,"OK"):console.log(a)}}onRefresh(){this.parametro.valid?(this.atividade=this.atividades.filter(a=>a.id===this.parametro.value.id_atividade)[0],this.getApontamentosExecucao()):this.appSnackBar.openSuccessSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK")}adicao(a){this.parametro.valid?(this.idAcao=a,this.setAcao(this.idAcao),this.apontamento=new g,new Date((0,c.mu)((0,c.JS)(this.parametro.value.data)+" 00:00:00")),this.intervalos=(0,c.T7)(this.apontamentos,this.apontamento.id),console.log("Intervalos Adicao ==>",this.intervalos),this.apontamento.id_empresa=this.usuario.id_empresa,this.apontamento.id=0,this.apontamento.id_projeto=this.atividade.id_projeto,this.apontamento.id_conta=this.atividade.conta,this.apontamento.id_subconta=this.atividade.subconta,this.apontamento.id_resp=this.atividade.id_resp,this.apontamento.id_exec=this.usuario.id,this.apontamento.inicial=(0,c.mu)((0,c.JS)(this.parametro.value.data)+" 00:00:00"),this.apontamento.final=(0,c.mu)((0,c.JS)(this.parametro.value.data)+" 00:00:00"),this.apontamento.horasapon=0,this.apontamento.obs="",this.apontamento.encerramento="N",this.apontamento.user_insert=this.usuario.id,this.apontamento.user_update=0,this.apontamento.resp_razao=this.atividade.resp_razao,this.apontamento.exec_razao=this.atividade.exec_razao,this.apontamento.estru_descricao=this.atividade.estru_descri,this.idAcao=a,this.setAcao(this.idAcao),this.setValue(),console.log("inicial",this.apontamento.inicial),console.log("final",this.apontamento.final)):this.appSnackBar.openSuccessSnackBar("Favor Preencher Os Par\xe2metros","OK")}outras(a,o){this.apontamento=o,this.intervalos=(0,c.T7)(this.apontamentos,this.apontamento.id),this.idAcao=a,this.setAcao(this.idAcao),this.setValue()}executaAcao(){var a=this;let o=new Date;switch(o.setTime(Date.parse(this.apontamento.inicial)),this.apontamento.inicial=(0,c.B9)(o,(0,c.Lv)(this.formulario.value.entrada),(0,c.lj)(this.formulario.value.entrada)),this.apontamento.final=(0,c.B9)(o,(0,c.Lv)(this.formulario.value.saida),(0,c.lj)(this.formulario.value.saida)),this.apontamento.horasapon=(0,c.KB)((0,c.Hh)(this.apontamento.inicial,this.apontamento.final)),this.apontamento.id_motivo=this.formulario.value.id_motivo,this.apontamento.obs=this.formulario.value.obs,this.apontamento.encerramento=this.formulario.value.encerra?"S":"N",+this.idAcao){case _.I.Inclusao:this.apontamento.user_insert=this.globalService.getUsuario().id,this.apontamento.id_conta_versao="0101",this.inscricaoAcao=this.aponExecucaoService.ApoExecucaoInsert(this.apontamento).subscribe(function(){var i=(0,m.Z)(function*(p){a.getApontamentosExecucao(),a.onCancel()});return function(p){return i.apply(this,arguments)}}(),i=>{console.log("erro=>",i),this.appSnackBar.openFailureSnackBar(`${i.error.tabela} - ${i.error.erro} - ${i.error.message}`,"OK")});break;case _.I.Edicao:this.apontamento.user_update=this.globalService.getUsuario().id,this.inscricaoAcao=this.aponExecucaoService.ApoExecucaoUpdate(this.apontamento).subscribe(function(){var i=(0,m.Z)(function*(p){a.getApontamentosExecucao(),a.onCancel()});return function(p){return i.apply(this,arguments)}}(),i=>{console.log("Error",i.error),this.appSnackBar.openFailureSnackBar(`${i.error.tabela} - ${i.error.erro} - ${i.error.message}`,"OK")});break;case _.I.Exclusao:this.inscricaoAcao=this.aponExecucaoService.ApoExecucaoDelete(this.apontamento.id_empresa,this.apontamento.id).subscribe(function(){var i=(0,m.Z)(function*(p){a.getApontamentosExecucao(),a.onCancel()});return function(p){return i.apply(this,arguments)}}(),i=>{this.appSnackBar.openFailureSnackBar(`Erro Na Exclusao ${i.error.tabela} - ${i.error.erro} - ${i.error.message}`,"OK")})}}onCancel(){this.idAcao=99,this.setAcao(99)}getLabelCancel(){return this.idAcao==_.I.Consulta?"Voltar":"Cancelar"}getAcoes(){return _.I}touchedOrDirty(a){var o,i;return!(!(null===(o=this.formulario.get(a))||void 0===o?void 0:o.touched)&&!(null===(i=this.formulario.get(a))||void 0===i?void 0:i.dirty))}getTexto(){return c.fd}onParametrosChange(){this.onRefresh()}getTitulo(){return 0!==this.atividade.id?`Projeto: ${this.atividade.id_projeto} Atividade: ${this.atividade.estru_descri}`:"Apontamentos de execu\xe7\xe3o"}showDadosProjetoAgendamento(a){let o="";return o=`Projeto: ${a.id_projeto} Diretor: ${a.diretor_razao} Resp.: ${a.resp_razao}`,o}showDadosProjetoApontamento(a){let o="";return o=`Projeto: ${a.id_projeto} Descricao: ${a.proj_descricao} Resp.: ${a.resp_razao}`,o}onShowAtividades(){this.showAtividades=!this.showAtividades}onCancelarAtividades(){var a;console.log("Cancelada consulta",null===(a=this.retornoAtividades)||void 0===a?void 0:a.getId_Atividade()),this.onShowAtividades()}onOkAtividades(){var a;console.log("Confirmada Consulta",null===(a=this.retornoAtividades)||void 0===a?void 0:a.getId_Atividade()),this.onShowAtividades()}onChangeContrato(){let a=this.contratos.findIndex(o=>{var i;return o.id===(null===(i=this.parametro.value)||void 0===i?void 0:i.id_contrato)});a>=0&&(this.contrato=this.contratos[a],this.getAtividades("G"))}onChangeGrupos(){let a=this.grupos.findIndex(o=>{var i;return o.id===(null===(i=this.parametro.value)||void 0===i?void 0:i.id_grupo)});a>=0&&(this.grupo=this.grupos[a],this.getAtividades(""))}onManha(){this.apontamento.inicial=this.apontamento.inicial.substring(0,this.apontamento.final.indexOf(" ")+1)+"07:45",this.apontamento.final=this.apontamento.final.substring(0,this.apontamento.final.indexOf(" ")+1)+"12:00",this.formulario.patchValue({entrada:this.apontamento.inicial.substring(this.apontamento.inicial.indexOf(" ")+1,16),saida:this.apontamento.final.substring(this.apontamento.final.indexOf(" ")+1,16)})}onTarde(){this.apontamento.inicial=this.apontamento.inicial.substring(0,this.apontamento.inicial.indexOf(" ")+1)+"13:00",this.apontamento.final=this.apontamento.final.substring(0,this.apontamento.final.indexOf(" ")+1)+"17:45",this.formulario.patchValue({entrada:this.apontamento.inicial.substring(this.apontamento.inicial.indexOf(" ")+1,16),saida:this.apontamento.final.substring(this.apontamento.final.indexOf(" ")+1,16)})}onDiaTodo(){}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(l.qu),t.Y36(y.J),t.Y36(J.G),t.Y36(k.A),t.Y36(L.a),t.Y36(R.s),t.Y36(D.T),t.Y36(B.U),t.Y36(v.F0),t.Y36(F.W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-crud-Execucao"]],decls:4,vars:4,consts:[[4,"ngIf"],["autocomplete","off",3,"formGroup",4,"ngIf"],[1,"div-barra"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Novo Apontamento","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon",3,"click"],["autocomplete","off",3,"formGroup"],[1,"col-med-2"],["appearance","outline",1,"col-max"],["matInput","","formControlName","usuario","readonly","true"],["matInput","","formControlName","data",3,"matDatepicker","dateChange"],["matSuffix","",3,"for"],["dataDatePicker",""],[1,"col-med-1"],["field","","appearance","outline",1,"col-max"],["formControlName","id_contrato",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","id_grupo",3,"selectionChange"],["formControlName","id_atividade",3,"selectionChange"],[3,"value"],[1,"Browse_Lanc"],[1,"coluna-cabec"],[4,"ngFor","ngForOf"],[1,"Browse_Lanc_td"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Alterar Apontamento","matTooltipPosition","above",1,"example-icon",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Excluir Apontamento","matTooltipPosition","above",1,"example-icon",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Lan\xe7. Autom\xe1tico","matTooltipPosition","above",3,"matMenuTriggerFor"],["appMenu","matMenu"],["matMenuContent",""],[1,"col-med-5"],["matInput","","autofocus","","formControlName","entrada","placeholder","HH:MM","mask","00:00",3,"readonly"],["matInput","","formControlName","saida","placeholder","HH:MM","mask","00:00",3,"readonly"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","atividade","readonly","true","tabindex","-1"],[1,"col-max"],["formControlName","encerra",1,"encerramento",3,"disableRipple"],["matInput","","formControlName","cliente","readonly","true","tabindex","-1"],["field","","appearance","outline","class","col-max",4,"ngIf"],["matInput","","formControlName","obs","oninput","this.value = this.value.toUpperCase()",3,"readonly"],[1,"button-container-right"],["mat-raised-button","","color","primary",1,"buttons",3,"click"],["mat-raised-button","","color","accent",1,"buttons",3,"click"],["mat-menu-item","",3,"click"],["formControlName","id_motivo"]],template:function(a,o){1&a&&(t.YNc(0,X,11,1,"div",0),t.YNc(1,et,31,6,"div",0),t.YNc(2,nt,12,1,"div",0),t.YNc(3,lt,44,10,"form",1)),2&a&&(t.Q6J("ngIf",99==o.idAcao),t.xp6(1),t.Q6J("ngIf",99==o.idAcao),t.xp6(1),t.Q6J("ngIf",99==o.idAcao&&!o.showAtividades),t.xp6(1),t.Q6J("ngIf",99!==o.idAcao))},directives:[h.O5,V.Ye,Y.lW,H.gM,Q.Hw,l._Y,l.JL,l.sg,U.KE,U.hX,G.Nt,l.Fj,l.JJ,l.u,I.hl,I.nW,U.R9,I.Mq,w.gD,h.sg,K.ey,S.p6,S.VK,S.KA,O.hx,z.oG,S.OP],pipes:[h.uU,W.X],styles:[""]}),n})()}];let dt=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[v.Bz.forChild(ut)],v.Bz]}),n})();var pt=e(3122),mt=e(4466);let ht=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.ez,dt,pt.q,l.u5,l.UX,mt.m,O.yI.forChild()]]}),n})()},9648:(E,A,e)=>{e.d(A,{W:()=>h});class h{constructor(){this.id_empresa=0,this.id="",this.id_projeto=0,this.id_conta="",this.id_subconta="",this.id_resp=0,this.id_exec=0,this.data="",this.orderby="",this.sharp=!0}}},8059:(E,A,e)=>{e.d(A,{A:()=>x});var h=e(2340),v=e(7716),m=e(1841);let x=(()=>{class u{constructor(s){this.http=s,this.apiURL=h.N.apiURL}getApoExecucao(s,d){return this.http.get(`${this.apiURL}aponexec/${s}/${d}`)}getApoExecucaos(){return this.http.get(`${this.apiURL}aponexec`)}getApoExecucoes_01(s){return this.http.post(`${this.apiURL}aponexecs`,s)}ApoExecucaoInsert(s){return this.http.post(`${this.apiURL}aponexec`,s)}ApoExecucaoUpdate(s){return this.http.put(`${this.apiURL}aponexec`,s)}ApoExecucaoDelete(s,d){return this.http.delete(`${this.apiURL}aponexec/${s}/${d}`)}}return u.\u0275fac=function(s){return new(s||u)(v.LFG(m.eN))},u.\u0275prov=v.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},1872:(E,A,e)=>{e.d(A,{G:()=>x});var h=e(2340),v=e(7716),m=e(1841);let x=(()=>{class u{constructor(s){this.http=s,this.apiURL=h.N.apiURL}getApoPlanejamento(s,d){return this.http.get(`${this.apiURL}aponplan/${s}/${d}`)}getApoPlanejamentos(){return this.http.get(`${this.apiURL}aponplans`)}getApoPlanejamentos_01(s){return this.http.post(`${this.apiURL}aponplans`,s)}getAponAgendaPlanejamentos(s){return this.http.post(`${this.apiURL}aponagenda`,s)}getAponAgendaPlanejamentosV2(s){return this.http.post(`${this.apiURL}aponagenda`,s)}postPlanejamento(s){return this.http.post(`${this.apiURL}planejamento`,s)}ApoPlanejamentoInsert(s){return this.http.post(`${this.apiURL}aponplan`,s)}ApoPlanejamentoUpdate(s){return this.http.put(`${this.apiURL}aponplan`,s)}ApoPlanejamentoDelete(s,d){return this.http.delete(`${this.apiURL}aponplan/${s}/${d}`)}}return u.\u0275fac=function(s){return new(s||u)(v.LFG(m.eN))},u.\u0275prov=v.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},1790:(E,A,e)=>{e.d(A,{X:()=>v});var h=e(7716);let v=(()=>{class m{transform(u){let g=Number(u).toFixed(2),s=g.substring(0,g.indexOf(".")),d=g.substring(g.indexOf(".")+1);return d="00"+(Number.parseInt(d)/1.67).toFixed(0).trim(),d=d.substring(d.length-2),d.length<2&&(d="0"+d),s+":"+d}}return m.\u0275fac=function(u){return new(u||m)},m.\u0275pipe=h.Yjl({name:"horaSexagenal",type:m,pure:!0}),m})()}}]);