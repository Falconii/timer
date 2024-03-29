import { ApiBrasilService } from './../../../services/api-brasil.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrasilApiModel } from 'src/app/Models/brasil-api-model';
import { FeriadoModel } from 'src/app/Models/feriado-model';
import { ParametroModel } from 'src/app/Models/parametro-model';
import { ParametroFeriado01 } from 'src/app/parametros/parametro-feriado01';
import { ParametroParametro01 } from 'src/app/parametros/parametro-parametro01';
import { FeriadosService } from 'src/app/services/feriados.service';
import { GlobalService } from 'src/app/services/global.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';
import {
  GetValueJsonBoolean,
  GetValueJsonNumber,
  GetValueJsonString,
  GetValueJsonStringArray,
  MensagensBotoes,
  messageError,
} from 'src/app/shared/classes/util';

@Component({
  selector: 'app-crud-feriado',
  templateUrl: './crud-feriado.component.html',
  styleUrls: ['./crud-feriado.component.css'],
})
export class CrudFeriadoComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;
  inscricaoGetAll!: Subscription;
  inscricaoParametro!: Subscription;
  inscricaoRota!: Subscription;
  inscricaoApiBrasil!: Subscription;
  inscricaoSaveFeriado!: Subscription;

  lsFeriados: BrasilApiModel[] = [];

  feriados: FeriadoModel[] = [];

  parametros: FormGroup;

  erro: string = '';

  opcoesOrdenacao: string[] = [];

  opcoesCampo: string[] = [];

  tamPagina = 50;

  controlePaginas: ControlePaginas = new ControlePaginas(this.tamPagina, 0);

  retorno: boolean = false;

  parametro: ParametroModel = new ParametroModel();

  constructor(
    private formBuilder: FormBuilder,
    private feriadoService: FeriadosService,
    private router: Router,
    private route: ActivatedRoute,
    private appSnackBar: AppSnackbar,
    private globalService: GlobalService,
    private parametrosService: ParametrosService,
    private apiBrasilService: ApiBrasilService
  ) {
    this.parametros = formBuilder.group({
      ordenacao: [null],
      campo: [null],
      filtro: [null],
    });
    this.inscricaoRota = route.params.subscribe((params: any) => {
      if (typeof params.retorno == 'undefined') {
        this.retorno = false;
      } else {
        this.retorno = true;
        const par = this.globalService.estadoFind('feriado');
      }
    });
    this.loadParametros();
  }

  ngOnInit(): void {
    this.getFeriadosContador();
  }

  ngOnDestroy() {
    this.inscricaoGetAll?.unsubscribe();
    this.inscricaoParametro?.unsubscribe();
    this.inscricaoRota?.unsubscribe();
    this.inscricaoApiBrasil?.unsubscribe();
    this.inscricaoSaveFeriado?.unsubscribe();
  }

  escolha(opcao: number, feriado?: FeriadoModel) {
    if (typeof feriado !== 'undefined') {
      let config = this.parametro.getParametro();
      Object(config).new = false;
      Object(config).id_retorno = feriado.data.toString();
      Object(config).page = this.controlePaginas.getPaginalAtual();
      Object(config).op_ordenacao = this.opcoesOrdenacao.findIndex(
        (op) => this.parametros.value.ordenacao == op
      );
      Object(config).op_pesquisar = this.opcoesCampo.findIndex(
        (op) => this.parametros.value.campo == op
      );
      Object(config).descricao = this.parametros.value.filtro;
      this.parametro.parametro = JSON.stringify(config);
      this.globalService.estadoSave(this.parametro);
      this.router.navigate([
        '/feriados/feriado',
        feriado.id_empresa,
        feriado.id_usuario,
        feriado.id_tipo,
        feriado.data,
        opcao,
      ]);
    } else {
      let config = this.parametro.getParametro();
      Object(config).new = false;
      Object(config).id_retorno = 0;
      Object(config).page = this.controlePaginas.getPaginalAtual();
      Object(config).op_ordenacao = this.opcoesOrdenacao.findIndex(
        (op) => this.parametros.value.ordenacao == op
      );
      Object(config).op_pesquisar = this.opcoesCampo.findIndex(
        (op) => this.parametros.value.campo == op
      );
      Object(config).descricao = this.parametros.value.filtro;
      this.parametro.parametro = JSON.stringify(config);
      this.globalService.estadoSave(this.parametro);
      this.router.navigate(['/feriados/feriado', 1, 0, opcao]);
    }
  }

  getAcoes() {
    return CadastroAcoes;
  }

  getFeriados() {
    let par = new ParametroFeriado01();

    par.id_empresa = 1;

    par.orderby = 'Data';

    if (this.parametros.value.campo == 'Data')
      par.data = this.parametros.value.filtro;

    if (this.parametros.value.campo == 'Descrição')
      par.descricao = this.parametros.value.filtro.toUpperCase();

    par.orderby = this.parametros.value.ordenacao;

    par.contador = 'N';

    par.tamPagina = this.tamPagina;

    par.pagina = this.controlePaginas.getPaginalAtual();

    this.globalService.setSpin(true);

    this.inscricaoGetAll = this.feriadoService.getFeriados_01(par).subscribe(
      (data: FeriadoModel[]) => {
        this.globalService.setSpin(false);
        this.feriados = data;
        const idx = this.feriados.findIndex(
          (fer) =>
            fer.data ==
            GetValueJsonString(this.parametro.getParametro(), 'id_retorno')
        );
        setTimeout(() => this.viewPort.scrollToIndex(idx), 10);
        this.retorno = false;
        let config = this.parametro.getParametro();
        Object(config).id_retorno = 0;
        Object(config).new = false;
        this.parametro.parametro = JSON.stringify(config);
      },
      (error: any) => {
        let config = this.parametro.getParametro();
        Object(config).id_retorno = 0;
        Object(config).new = false;
        this.retorno = false;
        this.globalService.setSpin(false);
        this.feriados = [];
        this.appSnackBar.openFailureSnackBar(
          `Pesquisa Nos Feriados ${messageError(error)}`,
          'OK'
        );
      }
    );
  }

  getFeriadosContador() {
    let par = new ParametroFeriado01();

    par.id_empresa = 1;

    par.orderby = 'Data';

    if (this.parametros.value.campo == 'Data')
      par.data = this.parametros.value.filtro;

    if (this.parametros.value.campo == 'Descrição')
      par.descricao = this.parametros.value.filtro.toUpperCase();

    par.orderby = this.parametros.value.ordenacao;

    par.contador = 'S';

    par.tamPagina = this.tamPagina;

    this.globalService.setSpin(true);
    this.inscricaoGetAll = this.feriadoService.getFeriados_01(par).subscribe(
      (data: any) => {
        this.globalService.setSpin(false);
        this.controlePaginas = new ControlePaginas(
          this.tamPagina,
          data.total == 0 ? 1 : data.total
        );
        //atualiza com o parametro
        if (this.retorno)
          if (!GetValueJsonBoolean(this.parametro.getParametro(), 'new')) {
            let config = this.parametro.getParametro();
            this.controlePaginas.setPaginaAtual(Object(config)['page']);
          } else {
            //'É inclusao ',
            this.controlePaginas.goLast();
          }
        this.getFeriados();
      },
      (error: any) => {
        this.globalService.setSpin(false);
        this.controlePaginas = new ControlePaginas(this.tamPagina, 0);
        this.appSnackBar.openFailureSnackBar(
          `Pesquisa Nos Feriados ${messageError(error)}`,
          'OK'
        );
      }
    );
  }

  getParametro() {
    this.globalService.setSpin(true);
    let par = new ParametroParametro01();
    par.id_empresa = this.parametro.id_empresa;
    par.modulo = this.parametro.modulo;
    par.assinatura = this.parametro.assinatura;
    par.id_usuario = this.parametro.id_usuario;
    par.orderby = 'Usuário';
    this.inscricaoParametro = this.parametrosService
      .getParametrosParametro01(par)
      .subscribe(
        (data: ParametroModel[]) => {
          this.globalService.setSpin(false);
          this.parametro = new ParametroModel();
          this.parametro.id_empresa = data[0].id_empresa;
          this.parametro.modulo = data[0].modulo;
          this.parametro.id_usuario = data[0].id_usuario;
          this.parametro.assinatura = data[0].assinatura;
          this.parametro.parametro = data[0].parametro;
          this.parametro.user_insert = data[0].user_insert;
          this.parametro.user_update = data[0].user_update;
          this.opcoesOrdenacao = GetValueJsonStringArray(
            this.parametro.getParametro(),
            'ordenacao'
          );
          this.opcoesCampo = GetValueJsonStringArray(
            this.parametro.getParametro(),
            'pesquisar'
          );
          this.setValues();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.setValues();
        }
      );
  }

  updateParametros() {
    this.globalService.setSpin(true);
    this.parametro.user_insert = this.globalService.usuario.id;
    this.parametro.user_update = this.globalService.usuario.id;
    let config = this.parametro.getParametro();
    Object(config).op_ordenacao = this.opcoesOrdenacao.findIndex(
      (op) => this.parametros.value.ordenacao == op
    );
    Object(config).op_pesquisar = this.opcoesCampo.findIndex(
      (op) => this.parametros.value.campo == op
    );
    Object(config).descricao = this.parametros.value.filtro;
    Object(config).page = 0;
    Object(config).new = false;
    this.parametro.parametro = JSON.stringify(config);
    this.inscricaoParametro = this.parametrosService
      .ParametroAtualiza(this.parametro)
      .subscribe(
        (data: ParametroModel) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openSuccessSnackBar(`Parâmetros Atualizados`, 'OK');
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `Gravação Dos Parametros ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  setValues() {
    this.parametros.setValue({
      ordenacao:
        this.opcoesOrdenacao[
          GetValueJsonNumber(this.parametro.getParametro(), 'op_ordenacao')
        ],
      campo:
        this.opcoesCampo[
          GetValueJsonNumber(this.parametro.getParametro(), 'op_pesquisar')
        ],
      filtro: GetValueJsonString(this.parametro.getParametro(), 'descricao'),
    });
  }

  getTexto() {
    return MensagensBotoes;
  }

  onChangePage() {
    this.getFeriados();
  }

  onChangeParametros() {
    this.getFeriadosContador();
  }

  onHome() {
    this.getApiBrasilFeriados();
    //this.router.navigate(['']);
  }

  onSaveConfig() {
    this.updateParametros();
  }

  /* rotinas dos parametros */

  loadParametros() {
    this.parametro = new ParametroModel();
    this.parametro.id_empresa = this.globalService.getIdEmpresa();
    this.parametro.modulo = 'feriado';
    this.parametro.assinatura = 'V1.00 18/09/2023';
    this.parametro.id_usuario = this.globalService.usuario.id;
    this.parametro.parametro = `
    {
      "op_ordenacao": 0,
      "ordenacao": ["Data", "Descrição"],
      "op_pesquisar": 1,
      "pesquisar": ["Data", "Descrição"],
      "descricao": "",
      "page": 1,
      "new": false,
      "id_retorno":""
    }`;

    this.opcoesOrdenacao = GetValueJsonStringArray(
      this.parametro.getParametro(),
      'ordenacao'
    );
    this.opcoesCampo = GetValueJsonStringArray(
      this.parametro.getParametro(),
      'pesquisar'
    );
    if (this.retorno && this.globalService.estadoFind('feriado') !== null) {
      const par = this.globalService.estadoFind('feriado');
      if (par != null) {
        if (GetValueJsonBoolean(par.getParametro(), 'new')) {
          let config = this.parametro.getParametro();
          Object(config).id_retorno = GetValueJsonNumber(
            par.getParametro(),
            'id_retorno'
          );
          this.parametro.parametro = JSON.stringify(config);
          this.setPosicaoInclusao();
        } else {
          this.controlePaginas.setPaginaAtual(
            GetValueJsonNumber(par.getParametro(), 'page')
          );
          this.parametro.setParametro(par.getParametro());
        }
        this.globalService.estadoDelete(par);
        this.setValues();
      }
    } else {
      this.getParametro();
    }
  }

  setPosicaoInclusao() {
    const config = this.parametro.getParametro();
    Object(config).op_ordenacao = 0;
    Object(config).op_pesquisar = 0;
    Object(config).descricao = '';
    Object(config).new = true;
    this.parametro.setParametro(config);
  }

  getApiBrasilFeriados() {
    this.globalService.setSpin(true);
    this.inscricaoApiBrasil = this.apiBrasilService
      .getFeriados('2023')
      .subscribe(
        (data: BrasilApiModel[]) => {
          this.globalService.setSpin(false);
          this.lsFeriados = data;
          this.saveFeriados();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa API BRASIL ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  saveFeriados() {
    this.globalService.setSpin(true);
    console.log('feriado para gravar', this.lsFeriados[0]);
    const feriado = new FeriadoModel();
    feriado.id_empresa = this.globalService.id_empresa;
    feriado.id_usuario = 0;
    feriado.id_tipo = 1;
    feriado.id_nivel = 3;
    feriado.data = this.lsFeriados[0].date;
    feriado.descricao = this.lsFeriados[0].name.toUpperCase();
    feriado.user_insert = this.globalService.usuario.id;

    this.inscricaoSaveFeriado = this.feriadoService
      .FeriadoInsert(feriado)
      .subscribe(
        (data: FeriadoModel) => {
          this.globalService.setSpin(false);
          this.lsFeriados.splice(0, 1);
          if (this.lsFeriados.length > 0) {
            this.saveFeriados();
          }
        },
        (error: any) => {
          console.log(error);
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `Inclusão De Feriados ${messageError(error)}`,
            'OK'
          );
        }
      );
  }
}
