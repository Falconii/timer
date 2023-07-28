import { ProjetosService } from 'src/app/services/projetos.service';
import { AponExecucaoService } from 'src/app/services/apon-execucao.service';
import { AponPlanejamentoService } from 'src/app/services/apon-planejamento.service';
import { UsuarioModel } from 'src/app/Models/usuario-model';
import { MotivoApoModel } from 'src/app/Models/motivo-apo-model';
import { AtividadeQuery_01Model } from 'src/app/Models/atividade-query_01-model';
import { ApoExecucaoModel } from 'src/app/Models/apo-execucao-model';
import { MoviData } from 'src/app/Models/movi-data';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApoExecucaoModel01 } from 'src/app/Models/apo-execucao-model01';
import { ApoPlanejamentoQuery_01Model } from 'src/app/Models/apo-planejamento-query_01-model';
import { Intervalo } from 'src/app/shared/classes/intervalo';
import { RetornoPesquisa } from 'src/app/shared/classes/retorno-pesquisa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AtividadesService } from 'src/app/services/atividades.service';
import { GlobalService } from 'src/app/services/global.service';
import { MotivoApoService } from 'src/app/services/motivo-apo.service';
import { Router } from '@angular/router';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import {
  aaaammddddmmaaaa,
  DataYYYYMMDD,
  DataYYYYMMDDTHHMMSSZ,
  DifHoras,
  getHora,
  getMinuto,
  MensagensBotoes,
  minutostostohorasexagenal,
  populaIntervalo2,
  setDBtoAngular,
  setDBtoAngularGMT,
  setHorario,
  validaIntervalo,
} from 'src/app/shared/classes/util';
import { ParametroAgendaPlanejamento01 } from 'src/app/parametros/parametro-agenda-planejamento01';
import { ParametroAponExecucao01 } from 'src/app/parametros/parametro-apon-execucao01';
import { ParametroAtividade01 } from 'src/app/parametros/parametro-atividade01';
import { ParametroMotivoApo01 } from 'src/app/parametros/parametro-motivo-apo01';
import { ErrorIntervalo } from 'src/app/shared/classes/error-intervalo';
import { ProjetoModel } from 'src/app/Models/projeto-model';
import { ParametroProjeto01 } from 'src/app/parametros/parametro-projeto01';

@Component({
  selector: 'app-crud-Execucao',
  templateUrl: './crud-Execucao.component.html',
  styleUrls: ['./crud-Execucao.component.css'],
})
export class CrudExecucaoComponent implements OnInit {
  durationInSeconds: number = 2;
  agendamento: MoviData = new MoviData();
  inscricaoGetAll!: Subscription;
  inscricaoAcao!: Subscription;
  inscricaoUsuario!: Subscription;
  inscricaoApontamento!: Subscription;
  inscricaoAponExecucao!: Subscription;
  inscricaoAtividades!: Subscription;
  inscricaoMotivos!: Subscription;
  inscricaoCoordenador!: Subscription;
  inscricaoGetContratos!: Subscription;
  idAcao: number = 0;
  acao: string = '';
  labelCadastro: string = '';
  id_empresa: number = 0;
  apontamentos: ApoExecucaoModel01[] = [];
  apontamento: ApoExecucaoModel = new ApoExecucaoModel();
  agendamentos: ApoPlanejamentoQuery_01Model[] = [];
  atividades: AtividadeQuery_01Model[] = [];
  atividade: AtividadeQuery_01Model = new AtividadeQuery_01Model();
  motivos: MotivoApoModel[] = [];
  dados_projetos: string = 'Olá';
  usuario: UsuarioModel = new UsuarioModel();
  filtro: Boolean = false;
  formulario: FormGroup;
  parametro: FormGroup;
  intervalos: Intervalo[] = [];
  readOnly: boolean = true;
  showAtividades: boolean = false;
  retornoAtividades: RetornoPesquisa = new RetornoPesquisa(0, 0, new Date());

  contrato: ProjetoModel = new ProjetoModel();
  contratos: ProjetoModel[] = [];

  grupo: AtividadeQuery_01Model = new AtividadeQuery_01Model();
  grupos: AtividadeQuery_01Model[] = [];

  constructor(
    formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private aponPlanejamentoService: AponPlanejamentoService,
    private aponExecucaoService: AponExecucaoService,
    private atividadesService: AtividadesService,
    private motivoApoService: MotivoApoService,
    private projetosServices: ProjetosService,
    private globalService: GlobalService,
    private router: Router,
    private appSnackBar: AppSnackbar
  ) {
    this.formulario = formBuilder.group({
      entrada: [{ value: '' }, [Validators.required]],
      saida: [{ value: '' }, [Validators.required]],
      atividade: [{ value: '' }, [Validators.required]],
      cliente: [{ value: '' }, [Validators.required]],
      id_motivo: [{ value: '' }, [Validators.required]],
      encerra: [{ value: '' }, [Validators.required]],
      obs: [{ value: '' }, [Validators.maxLength(50)]],
    });
    this.parametro = formBuilder.group({
      usuario: [{ value: '' }],
      data: [{ value: '' }],
      id_contrato: [{ value: '' }, [Validators.required, Validators.min(1)]],
      id_grupo: [{ value: '' }, [Validators.required, Validators.min(1)]],
      id_atividade: [{ value: '' }, [Validators.required, Validators.min(1)]],
    });
    this.getUsuario();
    this.setValue();
    this.idAcao = 99;
    this.setAcao(this.idAcao);
    this.setValue();
    this.setParametro();
  }

  ngOnInit(): void {
    this.getApontamentosExecucao();
  }

  ngOnDestroy(): void {
    this.inscricaoGetAll?.unsubscribe();
    this.inscricaoAcao?.unsubscribe();
    this.inscricaoUsuario?.unsubscribe();
    this.inscricaoApontamento?.unsubscribe();
    this.inscricaoAponExecucao?.unsubscribe();
    this.inscricaoAtividades?.unsubscribe();
    this.inscricaoMotivos?.unsubscribe();
    this.inscricaoCoordenador?.unsubscribe();
    this.inscricaoGetContratos?.unsubscribe();
  }

  getUsuario() {
    this.globalService.setSpin(true);
    this.inscricaoUsuario = this.usuariosService
      .getUsuario(
        this.globalService.getIdEmpresa(),
        this.globalService.getUsuario().id
      )
      .subscribe(
        (data: UsuarioModel) => {
          this.globalService.setSpin(false);
          this.usuario = data;
          this.parametro.patchValue({ usuario: this.usuario.razao });
          this.getProjetos();
          this.getMotivos();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.usuario = new UsuarioModel();
          console.log(error);
          this.appSnackBar.openFailureSnackBar(
            `${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );
  }

  getApontamentosExecucao() {
    let para = new ParametroAponExecucao01();
    para.id_empresa = 1;
    para.id_exec = this.usuario.id;
    para.id_projeto = this.atividade.id_projeto;
    para.data = DataYYYYMMDD(this.parametro.value.data);
    para.orderby = 'Executor';
    this.globalService.setSpin(true);
    this.inscricaoAponExecucao = this.aponExecucaoService
      .getApoExecucoes_01(para)
      .subscribe(
        (data: ApoExecucaoModel01[]) => {
          this.globalService.setSpin(false);
          this.apontamentos = data;
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.apontamentos = [];
          console.log(`Erro getApontamentosExecucao: ${error}`);
        }
      );
  }

  getProjetos() {
    let par = new ParametroProjeto01();

    par.id_empresa = 1;

    par.orderby = 'Código';
    this.globalService.setSpin(true);
    this.inscricaoGetContratos = this.projetosServices
      .getProjetos_01(par)
      .subscribe(
        (data: ProjetoModel[]) => {
          this.globalService.setSpin(false);
          this.contratos = data;
          this.parametro.patchValue({ id_contrato: this.contratos[0].id });
          this.onChangeContrato();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          if (error.error.message == 'Nehuma Informação Para Esta Consulta.') {
            this.contratos = [];
            this.appSnackBar.openSuccessSnackBar(
              'Nenhuma Informação Encontrada Para Esta Consulta!',
              'OK'
            );
          } else {
            this.contratos = [];
          }
        }
      );
  }

  getAtividades(op: string) {
    let para = new ParametroAtividade01();
    para.id_empresa = 1;
    para.id_projeto = this.contrato.id;
    para.orderby = 'projeto';
    if (op == 'G') {
      para.so_abertas_ex = 'S';
      para.conta = '01';
      para.nivel = 2;
      para.tipo = 'S';
    } else {
      para.so_abertas_ex = 'S';
      para.conta = '01';
      para.subconta = this.grupo.subconta.trim();
      para.subconta_nivel = 'S';
      para.nivel_filtro = this.grupo.nivel;
      para.nivel = 3;
      para.tipo = 'O';
    }
    this.globalService.setSpin(true);
    this.inscricaoAtividades = this.atividadesService
      .getAtividades_01(para)
      .subscribe(
        (data: AtividadeQuery_01Model[]) => {
          this.globalService.setSpin(false);
          this.atividades = data;
          if (op == 'G') {
            this.grupos = data;
            this.parametro.patchValue({ id_grupo: this.grupos[0].id });
            this.onChangeGrupos();
          } else {
            this.atividades = data;
            this.parametro.patchValue({ id_atividade: this.atividades[0].id });
            this.atividade = this.atividades.filter(
              (ativ) => ativ.id === this.parametro.value.id_atividade
            )[0];
          }
        },
        (error: any) => {
          this.globalService.setSpin(false);
          if (op == 'G') {
            this.grupos = [];
          } else {
            this.atividades = [];
          }
        }
      );
  }

  getMotivos() {
    let para = new ParametroMotivoApo01();
    para.id_empresa = 1;
    para.analitico = 'S';
    para.orderby = 'Código';
    this.globalService.setSpin(true);
    this.inscricaoAponExecucao = this.motivoApoService
      .getMotivoApos_01(para)
      .subscribe(
        (data: MotivoApoModel[]) => {
          this.globalService.setSpin(false);
          this.motivos = data;
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.motivos = [];
          this.appSnackBar.openFailureSnackBar(
            `${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );
  }

  setValue() {
    this.formulario.setValue({
      entrada: this.apontamento.inicial.substring(
        this.apontamento.inicial.indexOf(' ') + 1,
        16
      ),
      saida: this.apontamento.final.substring(
        this.apontamento.final.indexOf(' ') + 1,
        16
      ),
      atividade: this.apontamento.estru_descricao,
      cliente: this.atividade.subcliente_razao,
      id_motivo: this.apontamento.id_motivo,
      encerra: this.apontamento.encerramento == 'S' ? true : false,
      obs: this.apontamento.obs,
    });
  }

  setParametro() {
    this.parametro.setValue({
      usuario: this.usuario.razao,
      data: new Date(),
      id_contrato: 0,
      id_grupo: 0,
      id_atividade: 0,
    });
  }

  setAcao(op: number) {
    switch (+op) {
      case CadastroAcoes.Inclusao:
        this.acao = 'Gravar';
        this.labelCadastro = `Inclusão - ${aaaammddddmmaaaa(
          this.apontamento.inicial
        )}`;
        this.readOnly = false;
        break;
      case CadastroAcoes.Edicao:
        this.acao = 'Gravar';
        this.labelCadastro = `Alteração - ${aaaammddddmmaaaa(
          this.apontamento.inicial
        )}`;
        this.readOnly = false;
        break;
      case CadastroAcoes.Consulta:
        this.acao = 'Voltar';
        this.labelCadastro = `Consulta - ${aaaammddddmmaaaa(
          this.apontamento.inicial
        )}`;
        this.readOnly = true;
        break;
      case CadastroAcoes.Exclusao:
        this.acao = 'Excluir';
        this.labelCadastro = `Exclusão - ${aaaammddddmmaaaa(
          this.apontamento.inicial
        )}`;
        this.readOnly = true;
        break;
      default:
        this.acao = '';
        this.labelCadastro = '';
        break;
    }
  }

  onRetorno() {
    this.router.navigate(['/']);
  }

  setFiltro() {
    this.filtro = !this.filtro;
  }

  onSubmit() {
    try {
      if (
        this.idAcao == CadastroAcoes.Inclusao ||
        this.idAcao == CadastroAcoes.Edicao
      ) {
        console.log(
          'Edição =>',
          this.intervalos,
          this.formulario.value.entrada,
          this.formulario.value.saida
        );
        validaIntervalo(
          this.intervalos,
          this.formulario.value.entrada,
          this.formulario.value.saida
        );
      }
      if (this.formulario.valid) {
        this.executaAcao();
      } else {
        this.appSnackBar.openSuccessSnackBar(
          `Formulário Com Campos Inválidos.`,
          'OK'
        );
      }
    } catch (err) {
      if (err instanceof ErrorIntervalo) {
        this.appSnackBar.openSuccessSnackBar(
          `Lançamento Conflitando: ${err.message}`,
          'OK'
        );
      } else {
        console.log(err);
      }
    }
  }

  onRefresh() {
    if (this.parametro.valid) {
      this.atividade = this.atividades.filter(
        (ativ) => ativ.id === this.parametro.value.id_atividade
      )[0];
      this.getApontamentosExecucao();
    } else {
      this.appSnackBar.openSuccessSnackBar(
        `Formulário Com Campos Inválidos.`,
        'OK'
      );
    }
  }

  adicao(opcao: number) {
    if (!this.parametro.valid) {
      this.appSnackBar.openSuccessSnackBar(
        `Favor Preencher Os Parâmetros`,
        'OK'
      );
    } else {
      this.idAcao = opcao;
      this.setAcao(this.idAcao);
      this.apontamento = new ApoExecucaoModel();
      const date1 = new Date(
        setDBtoAngularGMT(DataYYYYMMDD(this.parametro.value.data) + ' 00:00:00')
      );
      this.intervalos = populaIntervalo2(
        this.apontamentos,
        this.apontamento.id
      );
      console.log('Intervalos Adicao ==>', this.intervalos);
      this.apontamento.id_empresa = this.usuario.id_empresa;
      this.apontamento.id = 0;
      this.apontamento.id_projeto = this.atividade.id_projeto;
      this.apontamento.id_conta = this.atividade.conta;
      this.apontamento.id_subconta = this.atividade.subconta;
      this.apontamento.id_resp = this.atividade.id_resp;
      this.apontamento.id_exec = this.usuario.id;
      this.apontamento.inicial = setDBtoAngularGMT(
        DataYYYYMMDD(this.parametro.value.data) + ' 00:00:00'
      ); //DataYYYYMMDDTHHMMSSZ(date1);
      this.apontamento.final = setDBtoAngularGMT(
        DataYYYYMMDD(this.parametro.value.data) + ' 00:00:00'
      ); //DataYYYYMMDDTHHMMSSZ(date1);
      this.apontamento.horasapon = 0;
      this.apontamento.obs = '';
      this.apontamento.encerramento = 'N';
      this.apontamento.user_insert = this.usuario.id;
      this.apontamento.user_update = 0;
      this.apontamento.resp_razao = this.atividade.resp_razao;
      this.apontamento.exec_razao = this.atividade.exec_razao;
      this.apontamento.estru_descricao = this.atividade.estru_descri;
      this.idAcao = opcao;
      this.setAcao(this.idAcao);
      this.setValue();
      console.log('inicial', this.apontamento.inicial);
      console.log('final', this.apontamento.final);
    }
  }

  outras(opcao: number, lanca: ApoExecucaoModel) {
    this.apontamento = lanca;
    this.intervalos = populaIntervalo2(this.apontamentos, this.apontamento.id);
    this.idAcao = opcao;
    this.setAcao(this.idAcao);
    this.setValue();
  }

  executaAcao() {
    let dataDia: Date = new Date();
    dataDia.setTime(Date.parse(this.apontamento.inicial));
    this.apontamento.inicial = setHorario(
      dataDia,
      getHora(this.formulario.value.entrada),
      getMinuto(this.formulario.value.entrada)
    );
    this.apontamento.final = setHorario(
      dataDia,
      getHora(this.formulario.value.saida),
      getMinuto(this.formulario.value.saida)
    );
    this.apontamento.horasapon = minutostostohorasexagenal(
      DifHoras(this.apontamento.inicial, this.apontamento.final)
    );
    this.apontamento.id_motivo = this.formulario.value.id_motivo;
    this.apontamento.obs = this.formulario.value.obs;
    this.apontamento.encerramento = this.formulario.value.encerra ? 'S' : 'N';
    switch (+this.idAcao) {
      case CadastroAcoes.Inclusao:
        this.apontamento.user_insert = this.globalService.getUsuario().id;
        this.apontamento.id_conta_versao = '0101';
        this.inscricaoAcao = this.aponExecucaoService
          .ApoExecucaoInsert(this.apontamento)
          .subscribe(
            async (data: ApoExecucaoModel) => {
              this.getApontamentosExecucao();
              this.onCancel();
            },
            (error: any) => {
              console.log('erro=>', error);
              this.appSnackBar.openFailureSnackBar(
                `${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
                'OK'
              );
            }
          );
        break;
      case CadastroAcoes.Edicao:
        this.apontamento.user_update = this.globalService.getUsuario().id;
        this.inscricaoAcao = this.aponExecucaoService
          .ApoExecucaoUpdate(this.apontamento)
          .subscribe(
            async (data: any) => {
              this.getApontamentosExecucao();
              this.onCancel();
            },
            (error: any) => {
              console.log('Error', error.error);
              this.appSnackBar.openFailureSnackBar(
                `${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
                'OK'
              );
            }
          );
        break;
      case CadastroAcoes.Exclusao:
        this.inscricaoAcao = this.aponExecucaoService
          .ApoExecucaoDelete(this.apontamento.id_empresa, this.apontamento.id)
          .subscribe(
            async (data: any) => {
              this.getApontamentosExecucao();
              this.onCancel();
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

  onCancel() {
    this.idAcao = 99;
    this.setAcao(99);
  }

  getLabelCancel() {
    if (this.idAcao == CadastroAcoes.Consulta) {
      return 'Voltar';
    } else {
      return 'Cancelar';
    }
  }

  getAcoes() {
    return CadastroAcoes;
  }

  touchedOrDirty(campo: string): boolean {
    if (
      this.formulario.get(campo)?.touched ||
      this.formulario.get(campo)?.dirty
    ) {
      return true;
    }
    return false;
  }

  getTexto() {
    return MensagensBotoes;
  }

  onParametrosChange() {
    this.onRefresh();
  }

  getTitulo(): string {
    if (this.atividade.id !== 0) {
      return `Projeto: ${this.atividade.id_projeto} Atividade: ${this.atividade.estru_descri}`;
    } else {
      return 'Apontamentos de execução';
    }
  }

  showDadosProjetoAgendamento(lanca: ApoPlanejamentoQuery_01Model): string {
    let retorno = '';

    retorno = `Projeto: ${lanca.id_projeto} Diretor: ${lanca.diretor_razao} Resp.: ${lanca.resp_razao}`;

    return retorno;
  }

  showDadosProjetoApontamento(lanca: ApoExecucaoModel): string {
    let retorno = '';

    retorno = `Projeto: ${lanca.id_projeto} Descricao: ${lanca.proj_descricao} Resp.: ${lanca.resp_razao}`;

    return retorno;
  }

  onShowAtividades() {
    this.showAtividades = !this.showAtividades;
  }

  onCancelarAtividades() {
    console.log(
      'Cancelada consulta',
      this.retornoAtividades?.getId_Atividade()
    );
    this.onShowAtividades();
  }

  onOkAtividades() {
    console.log(
      'Confirmada Consulta',
      this.retornoAtividades?.getId_Atividade()
    );
    this.onShowAtividades();
  }

  onChangeContrato() {
    let idx: number = this.contratos.findIndex(
      (obj) => obj.id === this.parametro.value?.id_contrato
    );
    if (idx >= 0) {
      this.contrato = this.contratos[idx];
      this.getAtividades('G');
    }
  }

  onChangeGrupos() {
    let idx: number = this.grupos.findIndex(
      (obj) => obj.id === this.parametro.value?.id_grupo
    );
    if (idx >= 0) {
      this.grupo = this.grupos[idx];
      this.getAtividades('');
    }
  }

  onManha() {
    this.apontamento.inicial =
      this.apontamento.inicial.substring(
        0,
        this.apontamento.final.indexOf(' ') + 1
      ) + '07:45';
    this.apontamento.final =
      this.apontamento.final.substring(
        0,
        this.apontamento.final.indexOf(' ') + 1
      ) + '12:00';
    this.formulario.patchValue({
      entrada: this.apontamento.inicial.substring(
        this.apontamento.inicial.indexOf(' ') + 1,
        16
      ),
      saida: this.apontamento.final.substring(
        this.apontamento.final.indexOf(' ') + 1,
        16
      ),
    });
  }

  onTarde() {
    this.apontamento.inicial =
      this.apontamento.inicial.substring(
        0,
        this.apontamento.inicial.indexOf(' ') + 1
      ) + '13:00';
    this.apontamento.final =
      this.apontamento.final.substring(
        0,
        this.apontamento.final.indexOf(' ') + 1
      ) + '17:45';
    this.formulario.patchValue({
      entrada: this.apontamento.inicial.substring(
        this.apontamento.inicial.indexOf(' ') + 1,
        16
      ),
      saida: this.apontamento.final.substring(
        this.apontamento.final.indexOf(' ') + 1,
        16
      ),
    });
  }

  onDiaTodo() {}
}