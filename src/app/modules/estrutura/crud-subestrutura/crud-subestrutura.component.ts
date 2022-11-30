import { EstruturaModel } from 'src/app/Models/estrutura-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroAcoes } from 'src/app/shared/cadastro-acoes';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensagensBotoes } from 'src/app/shared/util';
import { ParametroEstrutura01 } from 'src/app/parametros/parametro-estrutura01';
import { HistoricoSubconta } from 'src/app/shared/historico-subconta';
import { EstruturasService } from 'src/app/services/estruturas.service';

@Component({
  selector: 'app-crud-subestrutura',
  templateUrl: './crud-subestrutura.component.html',
  styleUrls: ['./crud-subestrutura.component.css'],
})
export class CrudSubestruturaComponent implements OnInit {
  inscricaoGetAll!: Subscription;
  inscricaoGetFiltro!: Subscription;
  inscricaoAcao!: Subscription;
  inscricaoRota!: Subscription;

  subcontas: EstruturaModel[] = [];

  subconta: EstruturaModel = new EstruturaModel();

  formulario: FormGroup;

  erro: string = '';

  id_empresa_pai = 0;

  conta_pai = '';

  subconta_pai = '';

  descricao_pai = '';

  nivel_pai = 1;

  controle_pai = 'S';

  durationInSeconds = 3;

  historico: HistoricoSubconta[] = [];

  tipos: any[] = [
    { id: 'C', descricao: 'CONTA' },
    { id: 'S', descricao: 'SUBCONTA' },
    { id: 'O', descricao: 'OPERACIONAL' },
  ];

  acao: string = 'Sem Definição';

  idAcao: number = CadastroAcoes.Inclusao;

  readOnly: boolean = true;

  readOnlyKey: boolean = true;

  labelCadastro: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private subContasService: EstruturasService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.formulario = this.formBuilder.group({
      conta: [{ value: '' }],
      subconta: [
        { value: '' },
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(14),
        ],
      ],
      descricao: [
        { value: '' },
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(300),
        ],
      ],
      nivel: [{ value: '' }],
      tipo: [{ value: '' }],
      tipo_: [{ value: '' }],
    });
    this.subconta = new EstruturaModel();
    this.inscricaoRota = this.route.params.subscribe((params: any) => {
      this.id_empresa_pai = params.id_empresa;
      this.conta_pai = params.conta;
      this.subconta_pai = params.subconta;
      this.descricao_pai = params.descricao;
      this.nivel_pai = parseInt(params.nivel);
      this.controle_pai = params.controle;
      const histo: HistoricoSubconta = new HistoricoSubconta();
      histo.id_empresa = this.id_empresa_pai;
      histo.conta = this.conta_pai;
      histo.subconta = this.subconta_pai;
      histo.nivel = this.nivel_pai;
      histo.descricao = this.descricao_pai;
      this.setHistorico(histo);
      this.idAcao = params.acao;
      this.setAcao(params.acao);
    });
  }

  ngOnInit(): void {
    this.getSubContas();
  }

  ngOnDestroy(): void {
    this.inscricaoGetAll?.unsubscribe();
    this.inscricaoGetFiltro?.unsubscribe();
    this.inscricaoAcao?.unsubscribe();
    this.inscricaoRota?.unsubscribe();
  }

  getSubContas() {
    let par = new ParametroEstrutura01();

    par.id_empresa = this.id_empresa_pai;

    par.conta = this.conta_pai;

    par.subconta = this.subconta_pai;

    par.descricao = '';

    par.nivel = this.nivel_pai;

    par.tipo = '';

    par.orderby = '';

    par.subcontas = true;

    this.inscricaoGetFiltro = this.subContasService
      .getEstruturas(par)
      .subscribe(
        (data: EstruturaModel[]) => {
          this.subcontas = data;
          console.log(this.subcontas);
        },
        (error: any) => {
          this.subcontas = [];
          this.openSnackBar_OK('Nenhuma SubConta Para Esta Consulta!', 'OK');
        }
      );
  }

  setValue() {
    this.formulario.setValue({
      conta:
        this.idAcao == CadastroAcoes.Inclusao ? 'NOVA' : this.subconta.conta,
      subconta:
        this.idAcao == CadastroAcoes.Inclusao ? 'NOVA' : this.subconta.subconta,
      descricao: this.subconta.descricao,
      nivel: this.subconta.nivel,
      tipo: this.subconta.tipo,
      tipo_: this.getTipo(this.subconta.tipo),
    });
  }

  onSubmit() {
    console.log('this.formulario', this.formulario);
    if (this.formulario.valid) {
      this.executaAcao();
    } else {
      this.openSnackBar_OK(`Formulário Com Campos Inválidos.`, 'OK');
    }
  }

  onCancel() {
    this.idAcao = 99;
    this.setAcao(this.idAcao);
  }

  getLabelCancel() {
    if (this.idAcao == CadastroAcoes.Consulta) {
      return 'Voltar';
    } else {
      return 'Cancelar';
    }
  }

  onRetorno() {
    if (this.nivel_pai - 1 <= 0) {
      this.onHome();
    } else {
      console.log('historico==>', this.historico);
      const estru: HistoricoSubconta = this.getHistorico(this.nivel_pai - 1);
      console.log('estru==>', estru);

      this.id_empresa_pai = estru.id_empresa;
      this.conta_pai = estru.conta;
      this.subconta_pai = estru.subconta;
      this.descricao_pai = estru.descricao;
      this.nivel_pai = estru.nivel;

      this.getSubContas();
      this.idAcao = 99;
      this.setAcao(this.idAcao);
    }
  }

  onHome() {
    this.router.navigate(['estruturas']);
  }

  openSnackBar_Err(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  async openSnackBar_OK(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
    await this.delay(this.durationInSeconds * 1000);
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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

  setAcao(op: number) {
    switch (+op) {
      case CadastroAcoes.Inclusao:
        this.acao = 'Gravar';
        this.labelCadastro = 'SubConta - Inclusão.';
        this.readOnly = false;
        break;
      case CadastroAcoes.Edicao:
        this.acao = 'Gravar';
        this.labelCadastro = 'SubConta - Alteração.';
        this.readOnly = false;
        break;
      case CadastroAcoes.Consulta:
        this.acao = 'Voltar';
        this.labelCadastro = 'SubConta - Consulta.';
        this.readOnly = true;
        break;
      case CadastroAcoes.Exclusao:
        this.acao = 'Excluir';
        this.labelCadastro = 'SubConta - Exclusão.';
        this.readOnly = true;
        break;
      default:
        break;
    }
  }

  executaAcao() {
    this.subconta.conta = this.formulario.value.conta;
    this.subconta.subconta = this.formulario.value.subconta;
    this.subconta.descricao = this.formulario.value.descricao;
    this.subconta.nivel = this.formulario.value.nivel;
    this.subconta.tipo = this.formulario.value.tipo;
    this.subconta.controle = this.controle_pai;
    console.log('registro', this.subconta);
    switch (+this.idAcao) {
      case CadastroAcoes.Inclusao:
        this.subconta.conta = this.conta_pai;
        this.subconta.subconta = this.subconta_pai;
        this.inscricaoAcao = this.subContasService
          .EstruturaInsert(this.subconta)
          .subscribe(
            async (data: EstruturaModel) => {
              this.getSubContas();
              this.onCancel();
            },
            (error: any) => {
              this.openSnackBar_Err(
                `Erro Na Inclusão ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
                'OK'
              );
            }
          );
        break;
      case CadastroAcoes.Edicao:
        this.inscricaoAcao = this.subContasService
          .EstruturaUpdate(this.subconta)
          .subscribe(
            async (data: any) => {
              this.getSubContas();
              this.onCancel();
            },
            (error: any) => {
              console.log('Error', error.error);
              this.openSnackBar_Err(
                `Erro Na Alteração ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
                'OK'
              );
            }
          );
        break;
      case CadastroAcoes.Exclusao:
        this.inscricaoAcao = this.subContasService
          .EstruturaDelete(
            this.subconta.id_empresa,
            this.subconta.conta,
            this.subconta.subconta
          )
          .subscribe(
            async (data: any) => {
              this.getSubContas();
              this.onCancel();
            },
            (error: any) => {
              this.openSnackBar_Err(
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

  escolha(subconta: EstruturaModel, opcao: number) {
    if (opcao == 99) {
      this.id_empresa_pai = subconta.id_empresa;
      this.conta_pai = subconta.conta;
      this.subconta_pai = subconta.subconta;
      this.descricao_pai = subconta.descricao;
      this.nivel_pai = subconta.nivel;

      const histo: HistoricoSubconta = new HistoricoSubconta();
      histo.id_empresa = this.id_empresa_pai;
      histo.conta = this.conta_pai;
      histo.subconta = this.subconta_pai;
      histo.nivel = this.nivel_pai;
      histo.descricao = this.descricao_pai;

      this.setHistorico(histo);
      this.getSubContas();
      this.idAcao = 99;
      this.setAcao(this.idAcao);
    } else {
      if (opcao == CadastroAcoes.Inclusao) {
        this.subconta = new EstruturaModel();
        this.subconta.id_empresa = this.id_empresa_pai;
        this.subconta.conta = this.conta_pai;
        this.subconta.subconta = this.subconta_pai;
        this.subconta.nivel = this.nivel_pai + 1;
        this.subconta.tipo = 'S';
        this.subconta.user_insert = 1;
        this.subconta.user_update = 0;
      } else {
        console.log('subconta', subconta);
        this.subconta = subconta;
      }
      this.idAcao = opcao;
      this.setAcao(this.idAcao);
      this.setValue();
    }
  }

  getTexto() {
    return MensagensBotoes;
  }

  getTipo(id: string): string {
    let retorno: string = '';

    this.tipos.forEach((tp) => {
      if (tp.id == id) retorno = tp.descricao;
    });

    return retorno;
  }

  getHistorico(nivel: number) {
    if (nivel <= HistoricoSubconta.length) {
      console.log(
        'Retorno anterior =>',
        this.historico[nivel - 2],
        'nivel==>',
        nivel
      );
      return this.historico[nivel - 2];
    } else {
      console.log(
        'Retorno pai =>',
        this.historico[this.nivel_pai - 2],
        'nivel==>',
        this.nivel_pai
      );
      return this.historico[this.nivel_pai - 2];
    }
  }

  setHistorico(value: HistoricoSubconta) {
    if (value.nivel > this.historico.length) {
      this.historico.push(value);
      console.log('historico', this.historico);
    }
  }
}
