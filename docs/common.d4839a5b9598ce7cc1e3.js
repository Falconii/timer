"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[592],{3211:(m,l,s)=>{s.d(l,{o:()=>i});class i{constructor(){this.id_empresa=0,this.id=0,this.id_projeto=0,this.conta="",this.versao="",this.subconta="",this.nivel=0,this.tipo="",this.controle="",this.id_resp=0,this.id_exec=0,this.id_subcliente=0,this.inicial="",this.final="",this.horasplan=0,this.horasexec=0,this.horasdir=0,this.obs="",this.status="",this.status_pl="",this.status_ex="",this.user_insert=0,this.user_update=0,this.proj_descri="",this.estru_descri="",this.exec_razao="",this.resp_razao="",this.subcliente_razao="",this.gru_econo=0,this.nivelplan=-1,this.nivelexec=-1}}},34:(m,l,s)=>{s.d(l,{c:()=>i});class i{constructor(){this.id_empresa=0,this.conta="",this.versao="",this.subconta="",this.descricao="",this.nivel=0,this.nivel_maxi=7,this.tipo="",this.controle="S",this.user_insert=0,this.user_update=0,this.status=-1,this.id_usuario=0,this.nome_usuario=""}}},3525:(m,l,s)=>{s.d(l,{w:()=>i});class i{constructor(){this.id_empresa=0,this.id=0,this.id_cliente=0,this.id_diretor=0,this.dataprop=new Date,this.dataproj=new Date,this.dataenc=new Date,this.descricao="",this.horasve=0,this.horasplan=0,this.horasexec=0,this.horasdir=0,this.status="",this.status_pl="",this.status_ex="",this.user_insert=0,this.user_update=0,this.diretor_razao="",this.cliente_razao="",this.cliente_gru_econo=0,this.nivelplan=-1,this.nivelexec=-1}}},3962:(m,l,s)=>{s.d(l,{l:()=>i});class i{constructor(){this.id_empresa=0,this.id=0,this.id_projeto=0,this.conta="",this.versao="",this.subconta="",this.tipo="",this.nivel=0,this.id_resp=0,this.id_exec=0,this.id_subcliente=0,this.so_abertas_ex="",this.orderby="",this.sharp=!0,this.subconta_nivel="N",this.nivel_filtro=0}}},6746:(m,l,s)=>{s.d(l,{j:()=>i});class i{constructor(){this.id_empresa=0,this.id=0,this.razao="",this.fantasi="",this.cnpj_cpf="",this.grupo=0,this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},7183:(m,l,s)=>{s.d(l,{W:()=>i});class i{constructor(){this.id_empresa=0,this.conta="",this.versao="",this.subconta="",this.descricao="",this.nivel=0,this.tipo="",this.pagina=0,this.tamPagina=1e3,this.contador="N",this.orderby="",this.sharp=!1,this.subcontas=!1,this.projeto_in="",this.projeto_off="",this.id_projeto=0,this.status=1}}},3914:(m,l,s)=>{s.d(l,{V:()=>i});class i{constructor(){this.id_empresa=0,this.codigo="",this.motivo="",this.sintetico="",this.analitico="",this.pagina=1,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},9715:(m,l,s)=>{s.d(l,{a:()=>u});var i=s(2340),e=s(7716),_=s(1841);let u=(()=>{class n{constructor(t){this.http=t,this.apiURL=i.N.apiURL}getAtividades(){return this.http.get(`${this.apiURL}atividades`)}getAtividades_01(t){return this.http.post(`${this.apiURL}atividades`,t)}getAtividade(t,a){return this.http.get(`${this.apiURL}atividade/${t}/${a}`)}atividadeInsert(t){return this.http.post(`${this.apiURL}atividade`,t)}atividadeUpdate(t){return this.http.put(`${this.apiURL}atividade`,t)}atividadeUpdateHoraDir(t){return this.http.put(`${this.apiURL}updateAtividadehorasdir`,t)}atividadeDelete(t,a,r,p,h){return this.http.delete(`${this.apiURL}atividade/${t}/${a}/${r}/${p}/${h}`)}anexaatividade(t,a,r,p,h,g){return this.http.get(`${this.apiURL}anexaatividade/${t}/${a}/${r}/${p}/${h}/${g}`)}desanexaatividade(t,a,r,p){return this.http.get(`${this.apiURL}desanexaatividade/${t}/${a}/${r}/${p}`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},6940:(m,l,s)=>{s.d(l,{Y:()=>u});var i=s(2340),e=s(7716),_=s(1841);let u=(()=>{class n{constructor(t){this.http=t,this.apiURL=i.N.apiURL}getClientes(){return this.http.get(`${this.apiURL}clientes`)}getClientes_01(t){return this.http.post(`${this.apiURL}clientes`,t)}getClientes_01_C(t){return this.http.post(`${this.apiURL}clientes`,t)}getCliente(t,a){return this.http.get(`${this.apiURL}cliente/${t}/${a}`)}clienteInsert(t){return this.http.post(`${this.apiURL}cliente`,t)}clienteUpdate(t){return this.http.put(`${this.apiURL}cliente`,t)}clienteDelete(t,a){return this.http.delete(`${this.apiURL}cliente/${t}/${a}`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},4343:(m,l,s)=>{s.d(l,{K:()=>n});var i=s(34),e=s(2340),_=s(7716),u=s(1841);let n=(()=>{class o{constructor(a){this.http=a,this.apiURL=e.N.apiURL,this.estruturas=[]}getEstruturas(a){return this.http.post(`${this.apiURL}estruturas`,a)}getEstrutura(a,r,p,h){return this.http.get(`${this.apiURL}estrutura/${a}/${r}/${p}/${h}`)}getConta(a,r,p){return this.http.get(`${this.apiURL}conta/${a}/${r}/${p}`)}EstruturaInsert(a,r){return console.log("Indo para gravar",a,r),this.http.post(`${this.apiURL}estrutura`,{estrutura:a,usuarios:r})}EstruturaUpdate(a){return this.http.put(`${this.apiURL}estrutura`,a)}EstruturaSaveAll(a,r){return this.http.post(`${this.apiURL}saveAllEstrutura`,{estruturas:a,oldVersion:r})}EstruturaUpdateAll(a){return this.http.post(`${this.apiURL}updateAllEstrutura`,{estruturas:a})}EstruturaDelete(a,r,p,h){return this.http.delete(`${this.apiURL}estrutura/${a}/${r}/${p}/${h}`)}EstruturaAllDelete(a,r,p){return this.http.delete(`${this.apiURL}estrutura/${a}/${r}/${p}`)}copiaEstrutura(a){return this.http.post(`${this.apiURL}copiaEstrutura`,{id_empresa:a.id_empresa,conta:a.conta,versao:a.versao,controle:a.controle,descricao:a.descricao})}multiEstrutura(a){return this.http.post(`${this.apiURL}multiEstrutura`,{estruturas:a})}getEstruturasMem(){return this.estruturas}montaMemEstruturas(){let a=0,r=0,p=0,h=0,g=0,f=0,R=0,c="",v="",d="",M="",A="",O="",b="",T="";for(a=1;a<=2;a++){let L=new i.c;for(L.id_empresa=1,c=""+a,1==c.length&&(c="0"+c),L.id_empresa=1,L.conta=c,L.subconta=c,L.descricao=`Conta ${c} - EXEMPLO DE ESTRUTURA !`,L.nivel=1,L.tipo="C",L.user_insert=0,L.user_update=0,this.estruturas.push(L),r=1;r<5;r++){v=c;let E=new i.c;for(E.id_empresa=1,c=""+a,d=""+r,1==c.length&&(c="0"+c),1==d.length&&(d="0"+d),E.id_empresa=1,E.conta=c,E.subconta=v+d,E.descricao=`Conta  ${c} Sub-Conta ${E.subconta} `,E.nivel=2,E.tipo="S",E.user_insert=0,E.user_update=0,this.estruturas.push(E),""==M&&(M=v+d),v=M,p=1;p<4;p++){let P=new i.c;for(P.id_empresa=1,c=""+a,d=""+p,1==c.length&&(c="0"+c),1==d.length&&(d="0"+d),P.id_empresa=1,P.conta=c,P.subconta=v+d,P.descricao=`Conta  ${c} Sub-Conta ${P.subconta} `,P.nivel=3,P.tipo="S",P.user_insert=0,P.user_update=0,this.estruturas.push(P),""==A&&(A=v+d),v=A,h=1;h<5;h++){let U=new i.c;for(U.id_empresa=1,c=""+a,d=""+h,1==c.length&&(c="0"+c),1==d.length&&(d="0"+d),U.id_empresa=1,U.conta=c,U.subconta=v+d,U.descricao=`Conta ${c} Sub-Conta ${U.subconta}`,U.nivel=4,U.tipo="S",U.user_insert=0,U.user_update=0,this.estruturas.push(U),""==O&&(O=v+d),v=O,g=1;g<4;g++){let $=new i.c;for($.id_empresa=1,c=""+a,d=""+g,1==c.length&&(c="0"+c),1==d.length&&(d="0"+d),$.id_empresa=1,$.conta=c,$.subconta=v+d,$.descricao=`Conta ${c} Sub-Conta ${$.subconta}`,$.nivel=5,$.tipo="S",$.user_insert=0,$.user_update=0,this.estruturas.push($),""==b&&(b=v+d),v=b,f=1;f<3;f++){let C=new i.c;for(C.id_empresa=1,c=""+a,d=""+f,1==c.length&&(c="0"+c),1==d.length&&(d="0"+d),C.id_empresa=1,C.conta=c,C.subconta=v+d,C.descricao=`Conta ${c} Sub-Conta ${C.subconta}`,C.nivel=6,C.tipo="S",C.user_insert=0,C.user_update=0,this.estruturas.push(C),""==T&&(T=v+d),v=T,R=1;R<3;R++){let D=new i.c;D.id_empresa=1,c=""+a,d=""+R,1==c.length&&(c="0"+c),1==d.length&&(d="0"+d),D.id_empresa=1,D.conta=c,D.subconta=v+d,D.descricao=`Conta ${c} Sub-Conta ${D.subconta}`,D.nivel=7,D.tipo="O",D.user_insert=0,D.user_update=0,this.estruturas.push(D)}v=b}v=O}v=A}v=M}}}}estrutura_histo(a){return this.http.post(`${this.apiURL}estrutura_histo`,a)}}return o.\u0275fac=function(a){return new(a||o)(_.LFG(u.eN))},o.\u0275prov=_.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},1324:(m,l,s)=>{s.d(l,{Z:()=>u});var i=s(2340),e=s(7716),_=s(1841);let u=(()=>{class n{constructor(t){this.http=t,this.apiURL=i.N.apiURL}getGrupoEcos(){return this.http.get(`${this.apiURL}gruecos`)}getGrupoEcos_01(t){return this.http.post(`${this.apiURL}gruecos`,t)}getGrupoEco(t,a){return this.http.get(`${this.apiURL}grueco/${t}/${a}`)}GrupoEcoInsert(t){return this.http.post(`${this.apiURL}grueco/`,t)}GrupoEcoUpdate(t){return this.http.put(`${this.apiURL}grueco/`,t)}GrupoEcoDelete(t,a){return this.http.delete(`${this.apiURL}grueco/${t}/${a}`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},9189:(m,l,s)=>{s.d(l,{c:()=>u});var i=s(2340),e=s(7716),_=s(1841);let u=(()=>{class n{constructor(t){this.http=t,this.apiURL=i.N.apiURL}getGrupoUsers(){return this.http.get(`${this.apiURL}gruusers`)}getGrupoUsers_01(t){return this.http.post(`${this.apiURL}gruusers`,t)}getGrupoUser(t,a){return this.http.get(`${this.apiURL}gruuser/${t}/${a}`)}GrupoUserInsert(t){return this.http.post(`${this.apiURL}gruuser/`,t)}GrupoUserUpdate(t){return this.http.put(`${this.apiURL}gruuser/`,t)}GrupoUserDelete(t,a){return this.http.delete(`${this.apiURL}gruuser/${t}/${a}`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},3073:(m,l,s)=>{s.d(l,{s:()=>u});var i=s(2340),e=s(7716),_=s(1841);let u=(()=>{class n{constructor(t){this.http=t,this.apiURL=i.N.apiURL}getMotivoApos(){return this.http.get(`${this.apiURL}motivoapos`)}getMotivoApos_01(t){return this.http.post(`${this.apiURL}motivoapos`,t)}getMotivoApo(t,a){return this.http.get(`${this.apiURL}motivoapo/${t}/${a}`)}MotivoApoInsert(t){return this.http.post(`${this.apiURL}motivoapo`,t)}MotivoApoUpdate(t){return this.http.put(`${this.apiURL}motivoapo`,t)}MotivoApoDelete(t,a){return this.http.delete(`${this.apiURL}motivoapo/${t}/${a}`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},3e3:(m,l,s)=>{function i(e=!1){return _=>{let u=_.value;if(!e&&null==u)return null;if(e&&0==u.length)return{ValidadorCnpjCpf:!0,message:"Dado Obrigat\xf3rio"};if(!e&&0==u.length)return null;if(11==u.length){var n=u;n=(n=(n=n.replace(/\./g,"")).replace("-","")).split("");for(var o=0,t=0,a=!1,r=1;n.length>r;r++)n[r-1]!=n[r]&&(a=!0);if(0==a)return{ValidadorCnpjCpf:!0,message:"CPF Inv\xe1lido!"};r=0;for(var p=10;n.length-2>r;r++,p--)o+=n[r]*p;if(10==(o=10*o%11)&&(o=0),o!=n[9])return{ValidadorCnpjCpf:!0,message:"CPF Inv\xe1lido! digito"};for(r=0,p=11;n.length-1>r;r++,p--)t+=n[r]*p;return 10==(t=10*t%11)&&(t=0),t!=n[10]?{ValidadorCnpjCpf:!0,message:"CPF Inv\xe1lido! digito"}:null}if(14==u.length){var h=u;for(h=(h=(h=(h=h.replace(/\./g,"")).replace("-","")).replace("/","")).split(""),o=0,t=0,a=!1,r=1;h.length>r;r++)h[r-1]!=h[r]&&(a=!0);if(0==a)return{ValidadorCnpjCpf:!0,message:"CNPJ Inv\xe1lido!"};r=0;for(var g=5,f=13;h.length-2>r;r++,g--,f--)o+=g>=2?h[r]*g:h[r]*f;if((o=(o%=11)<2?0:11-o)!=h[12])return{ValidadorCnpjCpf:!0,message:"CNPJ Inv\xe1lido!"};for(r=0,g=6,f=14;h.length-1>r;r++,g--,f--)t+=g>=2?h[r]*g:h[r]*f;return(t=(t%=11)<2?0:11-t)!=h[13]?{ValidadorCnpjCpf:!0,message:"CNPJ Inv\xe1lido!"}:null}return{ValidadorCnpjCpf:!0,message:"DOCUMENTO Inv\xe1lido!"}}}s.d(l,{x:()=>i})},2546:(m,l,s)=>{function i(e=!1){return _=>{const u=_.value;return e||null!=u?e&&null==u||e&&0==u.length?{ValidatorCep:!0,message:"Dado Obrigat\xf3rio"}:!e&&0==u.length||!e&&null==u||/^[0-9]{8}$/.test(u)?null:{ValidatorCep:!0,message:"CEP Inv\xe1lido!"}:null}}s.d(l,{l:()=>i})},2401:(m,l,s)=>{s.d(l,{K:()=>e});var i=s(7117);function e(_=!1){return u=>{let n="",o=!0;const t=u.value;if(_&&0==t.length)return{ValidatorDate:!0,message:"Data Obrigat\xf3ria"};if(!_&&0==t.length)return null;try{var a=Date.parse((0,i.kT)(t)+" 00:00:00 GMT-0300");if(isNaN(t)&&!isNaN(a)){var r=new Date(a);(0,i.kT)(t)==(0,i.JS)(r)?o=!0:(o=!1,n="Data Inv\xe1lida")}else o=!1,n="Data Inv\xe1lida"}catch(p){o=!1,n="Data Inv\xe1lida"}return o?null:{ValidatorDate:!0,message:n}}}},9267:(m,l,s)=>{function i(e,_,u=!1){return n=>{let o="",t=!0;const a=n.value;return u||null!=a?u&&null==a||u&&0==a.length?{ValidatorStringLen:!0,message:"Dado Obrigat\xf3rio"}:u||0!=a.length?(e>0&&a.length<e&&(o=`Campo Dever\xe1 Ter No Minimo ${e} Caracteres.`,t=!1),_>0&&a.length>_&&(o=`Campo Dever\xe1 Ter No M\xe1ximo ${_} Caracteres.`,t=!1),t?null:{ValidatorStringLen:!0,message:o}):null:null}}s.d(l,{S:()=>i})},3032:(m,l,s)=>{s.d(l,{I:()=>i});var i=(()=>{return(e=i||(i={}))[e.Inclusao=1]="Inclusao",e[e.Edicao=2]="Edicao",e[e.Consulta=3]="Consulta",e[e.Exclusao=4]="Exclusao",e[e.Atualizacao=5]="Atualizacao",e[e.Gravacao=6]="Gravacao",i;var e})()},3430:(m,l,s)=>{s.d(l,{e:()=>i});class i{constructor(_,u){this.tamPagina=_,this.totalRegistros=u,this.paginaInicial=1,this.paginaFinal=1,this.totalPaginas=1,this.setTamPagina(this.tamPagina),this.paginaAtual=1}goFirst(){return this.paginaAtual=this.paginaInicial,this.paginaAtual}goLast(){return this.paginaAtual=this.paginaFinal,this.paginaAtual}nextPage(){this.paginaAtual++,this.paginaAtual>this.paginaFinal&&(this.paginaAtual=this.paginaFinal)}forwardPage(){this.paginaAtual--,this.paginaAtual<1&&(this.paginaAtual=1)}getPaginalAtual(){return this.paginaAtual}getTotalPaginas(){return this.totalPaginas}setTamPagina(_){this.tamPagina=_,this.totalPaginas=this.totalRegistros%this.tamPagina==0?Math.trunc(this.totalRegistros/this.tamPagina):Math.trunc(this.totalRegistros/this.tamPagina)+1,this.paginaFinal=this.totalPaginas}}},4560:(m,l,s)=>{s.d(l,{Z:()=>i});class i{constructor(){this.titulo="Aten\xe7\xe3o",this.mensagem01="Favor Confirmar O Procedimento",this.mensagem02="",this.labelBottonSim="SIM",this.labelBottomNao="N\xc3O",this.resposta=""}}},4705:(m,l,s)=>{s.d(l,{h:()=>a});var i=s(2238),e=s(7716),_=s(8295),u=s(8583),n=s(1095),o=s(6627);function t(r,p){if(1&r&&(e.TgZ(0,"div",7),e.TgZ(1,"mat-label"),e._uU(2),e.qZA(),e.qZA()),2&r){const h=e.oxw();e.xp6(2),e.Oqu(h.data.mensagem02)}}let a=(()=>{class r{constructor(h,g){this.dialogRef=h,this.data=g}ngOnInit(){this.data.resposta="N"}actionFunction(){this.data.resposta="S",this.closeModal()}closeModal(){this.dialogRef.close()}}return r.\u0275fac=function(h){return new(h||r)(e.Y36(i.so),e.Y36(i.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-question-dialog"]],decls:16,vars:6,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"col-med-1","mensagem01"],["class","col-med-1 mensagem02",4,"ngIf"],[1,"button-container-right"],["mat-raised-button","","color","accent","cdkFocusInitial","",3,"click"],["mat-raised-button","","color","primary",3,"mat-dialog-close","click"],[1,"col-med-1","mensagem02"]],template:function(h,g){1&h&&(e.TgZ(0,"h1",0),e._uU(1),e.qZA(),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e.TgZ(4,"mat-label"),e._uU(5),e.qZA(),e.qZA(),e.YNc(6,t,3,1,"div",3),e.qZA(),e.TgZ(7,"div",4),e.TgZ(8,"button",5),e.NdJ("click",function(){return g.closeModal()}),e.TgZ(9,"mat-icon"),e._uU(10,"cancel"),e.qZA(),e._uU(11),e.qZA(),e.TgZ(12,"button",6),e.NdJ("click",function(){return g.actionFunction()}),e.TgZ(13,"mat-icon"),e._uU(14,"check"),e.qZA(),e._uU(15),e.qZA(),e.qZA()),2&h&&(e.xp6(1),e.Oqu(g.data.titulo),e.xp6(4),e.Oqu(g.data.mensagem01),e.xp6(1),e.Q6J("ngIf",g.data.mensagem02.length>0),e.xp6(5),e.hij(" ",g.data.labelBottomNao," "),e.xp6(1),e.Q6J("mat-dialog-close",g.data),e.xp6(3),e.hij(" ",g.data.labelBottonSim," "))},directives:[i.uh,i.xY,_.hX,u.O5,n.lW,o.Hw,i.ZT],styles:["h1[_ngcontent-%COMP%]{text-align:left;font-family:Arial,Helvetica,sans-serif;font-size:x-large;color:#00f}.mensagem01[_ngcontent-%COMP%]{text-align:justify;font-family:Arial,Helvetica,sans-serif;font-size:large;color:#000;margin-top:10px}.mensagem02[_ngcontent-%COMP%]{text-align:justify;font-family:Arial,Helvetica,sans-serif;font-size:large;color:red;margin-top:10px;margin-bottom:20px}"]}),r})()},3968:(m,l,s)=>{s.d(l,{J:()=>n});var i=s(7716),e=s(1095),_=s(1436),u=s(6627);let n=(()=>{class o{constructor(){this.change=new i.vpe}ngOnInit(){}getAtual(){return`${this.controlePaginas.getPaginalAtual()}/${this.controlePaginas.getTotalPaginas()}`}firstPage(){this.controlePaginas.goFirst(),this.change.emit("")}lastPage(){this.controlePaginas.goLast(),this.change.emit("")}forwardPage(){this.controlePaginas.forwardPage(),this.change.emit("")}nextPage(){this.controlePaginas.nextPage(),this.change.emit("")}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-navegator"]],inputs:{controlePaginas:["controle","controlePaginas"]},outputs:{change:"changePage"},decls:15,vars:1,consts:[[1,"pagina"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","In\xedcio","matTooltipPosition","above",1,"mat-icon-button",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Voltar","matTooltipPosition","above",1,"mat-icon-button",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Avan\xe7ar","matTooltipPosition","above",1,"mat-icon-button",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Final","matTooltipPosition","above",1,"mat-icon-button",3,"click"]],template:function(a,r){1&a&&(i.TgZ(0,"div",0),i.TgZ(1,"button",1),i.NdJ("click",function(){return r.firstPage()}),i.TgZ(2,"mat-icon"),i._uU(3,"first_page"),i.qZA(),i.qZA(),i.TgZ(4,"button",2),i.NdJ("click",function(){return r.forwardPage()}),i.TgZ(5,"mat-icon"),i._uU(6,"chevron_left"),i.qZA(),i.qZA(),i.TgZ(7,"span"),i._uU(8),i.qZA(),i.TgZ(9,"button",3),i.NdJ("click",function(){return r.nextPage()}),i.TgZ(10,"mat-icon"),i._uU(11,"chevron_right"),i.qZA(),i.qZA(),i.TgZ(12,"button",4),i.NdJ("click",function(){return r.lastPage()}),i.TgZ(13,"mat-icon"),i._uU(14,"last_page"),i.qZA(),i.qZA(),i.qZA()),2&a&&(i.xp6(8),i.Oqu(r.getAtual()))},directives:[e.lW,_.gM,u.Hw],styles:[".pagina[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-size:inherit;font-weight:inherit;font:inherit}.pagina[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:2px}"]}),o})()},1488:(m,l,s)=>{s.d(l,{M:()=>e});var i=s(7716);let e=(()=>{class _{transform(n){let o=n.trim(),t="";if(o.length<=2)return o;for(var a=0;a<o.length;a+=2)0!=t.length&&(t+="."),t+=o.substring(a,a+2);return t}}return _.\u0275fac=function(n){return new(n||_)},_.\u0275pipe=i.Yjl({name:"subconta",type:_,pure:!0}),_})()},103:(m,l,s)=>{s.d(l,{V:()=>_});var i=s(7716),e=s(1841);let _=(()=>{class u{constructor(o){this.http=o,this.estados=[]}getEstados(){return this.http.get("assets/dados/estadosbr.json")}}return u.\u0275fac=function(o){return new(o||u)(i.LFG(e.eN))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},8239:(m,l,s)=>{function i(_,u,n,o,t,a,r){try{var p=_[a](r),h=p.value}catch(g){return void n(g)}p.done?u(h):Promise.resolve(h).then(o,t)}function e(_){return function(){var u=this,n=arguments;return new Promise(function(o,t){var a=_.apply(u,n);function r(h){i(a,o,t,r,p,"next",h)}function p(h){i(a,o,t,r,p,"throw",h)}r(void 0)})}}s.d(l,{Z:()=>e})}}]);