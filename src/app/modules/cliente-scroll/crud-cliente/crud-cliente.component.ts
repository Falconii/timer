import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientesQuery01Model } from 'src/app/Models/cliente-query_01-model';
import { GrupoEcoModel } from 'src/app/Models/gru-eco-models';
import { ParametroModel } from 'src/app/Models/parametro-model';
import { ParametroCliente01 } from 'src/app/parametros/parametro-cliente-01';
import { ClientesService } from 'src/app/services/clientes.service';
import { GlobalService } from 'src/app/services/global.service';
import { GrupoEconomicoService } from 'src/app/services/grupo-economico.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';
import { MensagensBotoes, messageError } from 'src/app/shared/classes/util';
import { ShowClienteDialogData } from 'src/app/shared/components/show-cliente-dialog/show-cliente-dialog-data';
import { ShowClienteDialogComponent } from 'src/app/shared/components/show-cliente-dialog/show-cliente-dialog.component';

@Component({
  selector: 'app-crud-cliente',
  templateUrl: './crud-cliente.component.html',
  styleUrls: ['./crud-cliente.component.css'],
})
export class CrudClienteComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;

  inscricaoGetAll!: Subscription;
  inscricaoGetFiltro!: Subscription;
  inscricaoGetGrupo!: Subscription;
  inscricaoRota!: Subscription;
  inscricaoParametro!: Subscription;

  clientes: ClientesQuery01Model[] = [];

  grupos: GrupoEcoModel[] = [];

  parametros: FormGroup;

  erro: string = '';

  opcoesOrdenacao: string[] = [];

  opcoesCampo: string[] = [];

  tamPagina = 50;

  controlePaginas: ControlePaginas = new ControlePaginas(this.tamPagina, 0);

  id_retorno: number = 0;

  page_retorno: number = 0;

  inclusao: boolean = false;

  parametro: ParametroModel = new ParametroModel();

  constructor(
    private formBuilder: FormBuilder,
    private clientesServices: ClientesService,
    private grupoEconomicoService: GrupoEconomicoService,
    private globalService: GlobalService,
    private router: Router,
    private appSnackBar: AppSnackbar,
    public showClienteDialog: MatDialog,
    public parametrosService: ParametrosService,
    private route: ActivatedRoute,
    private ngZone: NgZone
  ) {
    this.parametros = formBuilder.group({
      ordenacao: [null],
      campo: [null],
      filtro: [null],
      grupo: [],
    });
    this.inscricaoRota = route.params.subscribe((params: any) => {
      if (typeof params.id_empresa == 'undefined') {
        this.inclusao = false;
      } else {
        this.id_retorno = params.id;
        this.page_retorno = params.page;
        this.inclusao = params.new === 'true';
      }
    });
    this.loadParametros();
    this.getGrupos();
  }

  ngOnInit(): void {
    this.getClientesContador();
  }

  ngAfterViewInit(): void {
    //this.viewPort.scrollToIndex(10, 'smooth');
    /*
    this.viewPort
      .elementScrolled()
      .pipe(
        new Map(() => this.viewPort.measureScrollOffset('bottom')),
        pairwise(),
        filter(([y1, y2]) => y2 < y1 && y2 < 140),
        throttleTime(200)
      )
      .subscribe(() => {
        this.ngZone.run(() => {
          this.fetchMore();
        });
      });
      */
  }

  ngOnDestroy() {
    this.inscricaoGetAll?.unsubscribe();
    this.inscricaoGetFiltro?.unsubscribe();
    this.inscricaoGetGrupo?.unsubscribe();
    this.inscricaoRota?.unsubscribe();
    this.inscricaoParametro?.unsubscribe();
  }

  escolha(opcao: number, cliente?: ClientesQuery01Model) {
    if (typeof cliente !== 'undefined') {
      this.router.navigate([
        '/clientes-scroll/cliente-scroll',
        cliente.id_empresa,
        cliente.id,
        this.controlePaginas.getPaginalAtual(),
        opcao,
      ]);
    } else {
      this.router.navigate([
        '/clientes-scroll/cliente-scroll',
        1,
        0,
        this.controlePaginas.getPaginalAtual(),
        opcao,
      ]);
    }
  }

  getAcoes() {
    return CadastroAcoes;
  }

  getClientes() {
    let par = new ParametroCliente01();

    par.id_empresa = 1;

    if (this.inclusao == true) {
      par.id = 0;
      par.orderby = this.parametros.value.ordenacao;
      par.pagina = this.controlePaginas.goLast();
    } else {
      if (this.parametros.value.campo == 'Código') {
        let key = parseInt(this.parametros.value.filtro, 10);
        if (isNaN(key)) {
          par.id = 0;
        } else {
          par.id = key;
        }
      }
      if (this.parametros.value.campo == 'Razão')
        par.razao = this.parametros.value.filtro.toUpperCase();
      if (this.parametros.value.campo == 'Grupo')
        par.grupo = this.parametros.value.grupo;

      par.orderby = this.parametros.value.ordenacao;

      if (this.page_retorno > 0)
        this.controlePaginas.setPaginaAtual(this.page_retorno);

      par.pagina = this.controlePaginas.getPaginalAtual();
    }

    par.contador = 'N';

    par.tamPagina = this.tamPagina;

    this.globalService.setSpin(true);
    this.inscricaoGetFiltro = this.clientesServices
      .getClientes_01(par)
      .subscribe(
        (data: ClientesQuery01Model[]) => {
          this.inclusao = false;
          this.page_retorno = 0;
          this.globalService.setSpin(false);
          this.clientes = [];
          this.clientes = data;
          const idx = this.clientes.findIndex(
            (cli) => cli.id == this.id_retorno
          );
          setTimeout(() => this.viewPort.scrollToIndex(idx), 10);
          this.id_retorno = 0;
          this.inclusao = false;
        },
        (error: any) => {
          this.inclusao = false;
          this.page_retorno = 0;
          this.globalService.setSpin(false);
          this.clientes = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Clientes ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  getClientesContador() {
    let par = new ParametroCliente01();

    par.id_empresa = 1;

    if (this.inclusao) {
      par.id = 0;

      par.orderby = 'Código';
    } else {
      if (this.parametros.value.campo == 'Código') {
        let key = parseInt(this.parametros.value.filtro, 10);

        if (isNaN(key)) {
          par.id = 0;
        } else {
          par.id = key;
        }
        if (this.parametros.value.campo == 'Razão')
          par.razao = this.parametros.value.filtro.toUpperCase();
        if (this.parametros.value.campo == 'Grupo')
          par.grupo = this.parametros.value.grupo;

        par.orderby = this.parametros.value.ordenacao;
      }
    }

    par.contador = 'S';

    par.tamPagina = this.tamPagina;

    this.globalService.setSpin(true);
    this.inscricaoGetFiltro = this.clientesServices
      .getClientes_01_C(par)
      .subscribe(
        (data: any) => {
          this.globalService.setSpin(false);
          this.controlePaginas = new ControlePaginas(
            this.tamPagina,
            data.total
          );
          this.getClientes();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.controlePaginas = new ControlePaginas(this.tamPagina, 0);
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Clientes ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  getGrupos() {
    this.globalService.setSpin(true);
    this.inscricaoGetGrupo = this.grupoEconomicoService
      .getGrupoEcos()
      .subscribe(
        (data: GrupoEcoModel[]) => {
          this.globalService.setSpin(false);
          this.grupos = data;
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.erro = error;
          this.grupos = [];
        }
      );
  }

  getParametro() {
    this.globalService.setSpin(true);
    this.inscricaoParametro = this.parametrosService
      .getParametro(
        this.parametro.id_empresa,
        this.parametro.modulo,
        this.parametro.assinatura,
        this.parametro.id_usuario
      )
      .subscribe(
        (data: ParametroModel) => {
          this.globalService.setSpin(false);
          this.parametro = data;
          console.log('ACHEI....');
          this.opcoesOrdenacao = this.getOrdenacao();
          this.opcoesCampo = this.getPesquisar();
          this.setValues();
        },
        (error: any) => {
          console.log('NAO ACHEI....');
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
    this.parametro.parametro = JSON.stringify(config);
    this.inscricaoParametro = this.parametrosService
      .ParametroAtualiza(this.parametro)
      .subscribe(
        (data: ParametroModel) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openSuccessSnackBar(`Parâmetros Atualizados`, 'OK');
        },
        (error: any) => {
          this.inclusao = false;
          this.page_retorno = 0;
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `Gravação Dos Parametros ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  isGrupo(): Boolean {
    if (this.parametros.value.campo == 'Grupo') {
      return true;
    } else {
      return false;
    }
  }

  setValues() {
    this.parametros.setValue({
      ordenacao: this.opcoesOrdenacao[this.getOpOrdenacao()],
      campo: this.opcoesCampo[this.getOpPesquisar()],
      filtro: this.getDescricao(),
      grupo: 1,
    });
  }

  getTexto() {
    return MensagensBotoes;
  }

  onChangePage() {
    this.getClientes();
  }

  onHome() {
    this.router.navigate(['']);
  }

  onShowCliente(cliente: any): void {
    this.openShowClienteDialog(cliente);
  }

  openShowClienteDialog(cliente: ClientesQuery01Model) {
    const data: ShowClienteDialogData = new ShowClienteDialogData();
    data.cliente = cliente;

    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = 'show-cliente';
    dialogConfig.data = data;
    const modalDialog = this.showClienteDialog
      .open(ShowClienteDialogComponent, dialogConfig)
      .beforeClosed()
      .subscribe((data: ShowClienteDialogData) => {});
  }

  onSaveConfig() {
    this.updateParametros();
  }

  /* rotinas dos parametros */

  loadParametros() {
    this.parametro = new ParametroModel();
    this.parametro.id_empresa = 1;
    this.parametro.modulo = 'cliente';
    this.parametro.assinatura = 'V1.00 24/08/23';
    this.parametro.id_usuario = this.globalService.usuario.id;
    this.parametro.parametro = `
    {
      "op_ordenacao": 0,
      "ordenacao": ["Código", "Razão", "Grupo"],
      "op_pesquisar": 1,
      "pesquisar": ["Código", "Razão", "Grupo"],
      "descricao": ""
    }`;

    this.opcoesOrdenacao = this.getOrdenacao();
    this.opcoesCampo = this.getPesquisar();
    this.getParametro();
  }

  getOpOrdenacao(): number {
    const retorno = Object(this.parametro.getParametro()).op_ordenacao;
    return retorno;
  }

  getOrdenacao(): string[] {
    console.log(this.parametro.getParametro());
    const retorno = Object(this.parametro.getParametro()).ordenacao;
    return retorno;
  }

  getOpPesquisar(): number {
    const retorno = Object(this.parametro.getParametro()).op_pesquisar;
    return retorno;
  }

  getPesquisar(): string[] {
    const retorno = Object(this.parametro.getParametro()).pesquisar;
    return retorno;
  }

  getDescricao(): string[] {
    const retorno = Object(this.parametro.getParametro()).descricao;
    return retorno;
  }
}
