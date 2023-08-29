import { JustificativaPeriodoDialogComponent } from '../../../shared/components/justificativa-periodo-dialog/justificativa-periodo-dialog.component';
import { GlobalService } from 'src/app/services/global.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { ParametroCliente01 } from './../../../parametros/parametro-cliente-01';
import { ParametroUsuario01 } from '../../../parametros/parametro-usuario01';
import { UsuariosService } from './../../../services/usuarios.service';
import { ClientesQuery01Model } from './../../../Models/cliente-query_01-model';
import { UsuarioQuery01Model } from './../../../Models/usuario-query_01-model';
import { ProjetosService } from './../../../services/projetos.service';
import { ProjetoModel } from './../../../Models/projeto-model';
import { Component, OnInit } from '@angular/core';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import { Subscription, Subscriber } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { horahexa } from 'src/app/shared/classes/util';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';
import { PeriodoDialogData } from 'src/app/shared/components/periodo-dialog/periodo-dialog-data';
import { PeriodoDialogComponent } from 'src/app/shared/components/periodo-dialog/periodo-dialog.component';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { SituacaoProjetoPipe } from 'src/app/shared/pipes/situacao-projeto.pipe';

@Component({
  selector: 'app-projeto-view',
  templateUrl: './projeto-view.component.html',
  styleUrls: ['./projeto-view.component.css'],
})
export class ProjetoViewComponent implements OnInit {
  formulario: FormGroup;

  projeto: ProjetoModel = new ProjetoModel();

  diretores: UsuarioQuery01Model[] = [];

  clientes: ClientesQuery01Model[] = [];

  erro: any;

  acao: string = 'Sem Definição';

  idAcao: number = CadastroAcoes.Inclusao;

  readOnly: boolean = true;

  inscricaoGet!: Subscription;
  inscricaoGetGrupo!: Subscription;
  inscricaoRota!: Subscription;
  inscricaoAcao!: Subscription;
  inscricaoGetDiretor!: Subscription;
  inscricaoGetClientes!: Subscription;

  durationInSeconds = 2;

  labelCadastro: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private projetosService: ProjetosService,
    private usuariosService: UsuariosService,
    private clientesService: ClientesService,
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
    public justificaticaPeriodoDialog: MatDialog,
    public appSnackBar: AppSnackbar,
    private situacaoProjetoPipe: SituacaoProjetoPipe
  ) {
    this.formulario = formBuilder.group({
      id: [{ value: '', disabled: true }],
      descricao: [
        { value: '' },
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      id_diretor: [],
      diretor_razao: [],
      id_cliente: [],
      cliente_razao: [],
      dataprop: [],
      dataproj: [],
      dataenc: [],
      horasve: [],
      horasplan: [],
      horasexec: [],
      horasdir: [],
      status: [],
    });
    this.projeto = new ProjetoModel();

    this.inscricaoRota = route.params.subscribe((params: any) => {
      this.projeto.id_empresa = params.id_empresa;
      this.projeto.id = params.id;
      this.idAcao = params.acao;
      this.setAcao(params.acao);
      this.load();
    });
  }

  ngOnInit() {
    if (this.idAcao == CadastroAcoes.Inclusao) {
      this.projeto = new ProjetoModel();
      this.projeto.id_empresa = 1;
      this.setValue();
    } else {
      this.getProjeto();
    }
  }

  ngOnDestroy(): void {
    this.inscricaoGet?.unsubscribe();
    this.inscricaoRota?.unsubscribe();
    this.inscricaoAcao?.unsubscribe();
    this.inscricaoGetDiretor?.unsubscribe();
    this.inscricaoGetClientes?.unsubscribe();
  }

  onSubmit() {
    console.log('this.formulario', this.formulario);
    if (this.formulario.valid) {
      this.executaAcao();
    } else {
      this.appSnackBar.openSuccessSnackBar(
        `Formulário Com Campos Inválidos.`,
        'OK'
      );
    }
  }

  onRetorno() {
    const par = this.globalService.estadoFind('projeto');
    if (par != null) {
      let config = par.getParametro();
      Object(config).new = this.idAcao == CadastroAcoes.Inclusao ? true : false;
      Object(config).id_retorno = this.projeto.id;
      par.parametro = JSON.stringify(config);
      this.globalService.estadoSave(par);
    }
    this.router.navigate(['/projetos/projetos', 'SIM']);
  }

  onCancel() {
    const par = this.globalService.estadoFind('projeto');
    if (par != null) {
      let config = par.getParametro();
      Object(config).new = false;
      Object(config).id_retorno =
        this.idAcao == CadastroAcoes.Consulta ? this.projeto.id : 0;
      par.parametro = JSON.stringify(config);
      this.globalService.estadoSave(par);
    }
    this.router.navigate(['/projetos/projetos', 'SIM']);
  }

  getProjeto() {
    this.inscricaoGet = this.projetosService
      .getProjeto(this.projeto.id_empresa, this.projeto.id)
      .subscribe(
        (data: ProjetoModel) => {
          this.projeto = data;
          console.log('Retorno', this.projeto, data);
          this.setValue();
        },
        (error: any) => {
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa No Cadastro De Projetos ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );
  }

  setValue() {
    console.log('this.projeto-tela', this.projeto);
    this.formulario.setValue({
      id: this.projeto.id,
      descricao: this.projeto.descricao,
      id_diretor: this.projeto.id_diretor,
      diretor_razao:
        this.idAcao == CadastroAcoes.Consulta ||
        this.idAcao == CadastroAcoes.Exclusao
          ? this.projeto.diretor_razao
          : '',
      id_cliente: this.projeto.id_cliente,
      cliente_razao:
        this.idAcao == CadastroAcoes.Consulta ||
        this.idAcao == CadastroAcoes.Exclusao
          ? this.projeto.cliente_razao
          : '',
      dataprop: this.projeto.dataprop,
      dataproj: this.projeto.dataproj,
      dataenc: this.projeto.dataenc,
      horasve: this.projeto.horasve,
      horasplan: horahexa(this.projeto.horasplan),
      horasexec: horahexa(this.projeto.horasexec),
      horasdir: horahexa(this.projeto.horasdir),
      status: this.situacaoProjetoPipe.transform(this.projeto.status),
    });
  }

  getLabelCancel() {
    if (this.idAcao == CadastroAcoes.Consulta) {
      return 'Voltar';
    } else {
      return 'Cancelar';
    }
  }

  setAcao(op: number) {
    switch (+op) {
      case CadastroAcoes.Inclusao:
        this.acao = 'Gravar';
        this.labelCadastro = 'Projetos - Inclusão.';
        this.readOnly = false;
        break;
      case CadastroAcoes.Edicao:
        this.acao = 'Gravar';
        this.labelCadastro = 'Projetos - Alteração.';
        this.readOnly = false;
        break;
      case CadastroAcoes.Consulta:
        this.acao = 'Voltar';
        this.labelCadastro = 'Projetos - Consulta.';
        this.readOnly = true;
        break;
      case CadastroAcoes.Exclusao:
        this.acao = 'Excluir';
        this.labelCadastro = 'Projetos - Exclusão.';
        this.readOnly = true;
        break;
      default:
        break;
    }
  }

  executaAcao() {
    this.projeto.descricao = this.formulario.value.descricao;
    this.projeto.id_diretor = this.formulario.value.id_diretor;
    this.projeto.id_cliente = this.formulario.value.id_cliente;
    this.projeto.dataprop = this.formulario.value.dataprop;
    this.projeto.dataproj = this.formulario.value.dataproj;
    this.projeto.dataenc = this.formulario.value.dataenc;
    this.projeto.horasve = this.formulario.value.horasve;
    this.projeto.user_insert = 1;
    this.projeto.user_update = 0;
    switch (+this.idAcao) {
      case CadastroAcoes.Inclusao:
        this.projeto.user_insert = this.globalService.getUsuario().id;
        this.inscricaoAcao = this.projetosService
          .ProjetoInsert(this.projeto)
          .subscribe(
            async (data: ProjetoModel) => {
              this.projeto.id = data.id;
              this.onRetorno();
            },
            (error: any) => {
              this.appSnackBar.openFailureSnackBar(
                `Erro Na INclusão ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
                'OK'
              );
            }
          );
        break;
      case CadastroAcoes.Edicao:
        this.projeto.user_update = this.globalService.getUsuario().id;
        this.inscricaoAcao = this.projetosService
          .ProjetoUpdate(this.projeto)
          .subscribe(
            async (data: any) => {
              this.onRetorno();
            },
            (error: any) => {
              console.log('Error', error.error);
              this.appSnackBar.openFailureSnackBar(
                `Erro Na Alteração ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
                'OK'
              );
            }
          );
        break;
      case CadastroAcoes.Exclusao:
        this.inscricaoAcao = this.projetosService
          .ProjetoDelete(this.projeto.id_empresa, this.projeto.id)
          .subscribe(
            async (data: any) => {
              this.onRetorno();
            },
            (error: any) => {
              this.appSnackBar.openFailureSnackBar(
                `Erro Na Exclusao ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
                'OK'
              );
            }
          );
        break;
      default:
        break;
    }
  }

  getAcoes() {
    return CadastroAcoes;
  }

  touchedOrDirty(campo: string): boolean {
    if (
      this.formulario.get(campo)?.touched ||
      this.formulario.get(campo)?.dirty
    )
      return true;
    return false;
  }

  load() {
    //Diretoria
    let par = new ParametroUsuario01();

    par.id_empresa = 1;

    par.grupo = this.usuariosService.getGruposDiretoria();

    par.orderby = 'Grupo';

    this.inscricaoGetDiretor = this.usuariosService
      .getusuarios_01(par)
      .subscribe(
        (data: UsuarioQuery01Model[]) => {
          this.diretores = data;
        },
        (error: any) => {
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Usuários ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );

    //Clientes
    let par2 = new ParametroCliente01();

    par2.id_empresa = 1;

    par2.orderby = 'Fantasia';

    this.inscricaoGetClientes = this.clientesService
      .getClientes_01(par2)
      .subscribe(
        (data: ClientesQuery01Model[]) => {
          this.clientes = data;
        },
        (error: any) => {
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Clientes ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );
  }

  openJustficativaPeriodoDialog(): void {
    const data: PeriodoDialogData = new PeriodoDialogData();
    data.titulo = `ALTERAÇÃO DO PERÍDO`;
    data.titulo_data1 = 'Data Do Contrato';
    data.dataInicial = this.projeto.dataproj;
    data.titulo_data2 = 'Data Do Encerramento';
    data.dataFinal = this.projeto.dataenc;
    data.justificativa = '';
    data.dataHota = new Date();
    data.usuarioNome = this.globalService.getNomeusuarioLogado();

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = 'question';
    dialogConfig.width = '600px';
    dialogConfig.data = data;
    const modalDialog = this.justificaticaPeriodoDialog
      .open(PeriodoDialogComponent, dialogConfig)
      .beforeClosed()
      .subscribe((data: PeriodoDialogData) => {
        console.log('Retorno data', data);
        if (typeof data !== 'undefined' && data.processar) {
          this.formulario.patchValue({ dataproj: data.dataInicial });
          this.formulario.patchValue({ dataenc: data.dataFinal });
          console.log('Fui....', this.formulario);
          this.onSubmit();
        }
      });
  }

  onDataPeriodo() {
    this.openJustficativaPeriodoDialog();
  }
}
