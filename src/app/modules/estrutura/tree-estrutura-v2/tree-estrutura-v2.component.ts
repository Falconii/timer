import { NivelEstrutura } from './../../../shared/nivel-estrutura';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EstruturaModel } from 'src/app/Models/estrutura-model';
import { ParametroEstrutura01 } from 'src/app/parametros/parametro-estrutura01';
import { EstruturasService } from 'src/app/services/estruturas.service';
import { CadastroAcoes } from 'src/app/shared/cadastro-acoes';
import { SimNao } from 'src/app/shared/sim-nao';
import { TipoConta } from 'src/app/shared/tipo-conta';
import { ValidatorStringLen } from 'src/app/shared/Validators/validator-string-len';

@Component({
  selector: 'app-tree-estrutura-v2',
  templateUrl: './tree-estrutura-v2.component.html',
  styleUrls: ['./tree-estrutura-v2.component.css'],
})
export class TreeEstruturaV2Component implements OnInit {
  formulario: FormGroup;

  estrutura: EstruturaModel = new EstruturaModel();

  erro: any;

  acao: string = 'Sem Definição';

  idAcao: number = 99;

  readOnly: boolean = true;

  subOpcao: number = 0;

  tipos: TipoConta[] = [
    { tipo: 'C', descricao: 'CONTA' },
    { tipo: 'S', descricao: 'SUBCONTA' },
    { tipo: 'O', descricao: 'OPERACIONAL' },
  ];

  respostas: SimNao[] = [
    { sigla: 'S', descricao: 'SIM' },
    { sigla: 'N', descricao: 'NÃO' },
  ];
  inscricaoGetEstrutura!: Subscription;
  inscricaoAcao!: Subscription;
  durationInSeconds = 2;

  labelCadastro: string = '';

  inscricaoRota!: Subscription;
  inscricaoGetFiltro!: Subscription;

  id_empresa: number = 0;
  conta: string = '';
  subconta: string = '';
  descricao: string = '';
  nivel: number = 0;

  maxNivel: number = 7;

  estruturas: EstruturaModel[] = [];

  estru: EstruturaModel = new EstruturaModel();

  index: number = 0;

  contadores: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  niveis: NivelEstrutura[] = [
    { nivel: 1, descricao: 'NIvel 01' },
    { nivel: 2, descricao: 'NIvel 02' },
    { nivel: 3, descricao: 'NIvel 03' },
    { nivel: 4, descricao: 'NIvel 04' },
    { nivel: 5, descricao: 'NIvel 05' },
    { nivel: 6, descricao: 'NIvel 06' },
    { nivel: 7, descricao: 'NIvel 07' },
  ];

  parametros: FormGroup;

  log: boolean = false;

  log2: boolean = true;

  lsEstruturas: EstruturaModel[] = [];

  constructor(
    private estruturaService: EstruturasService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {
    this.inscricaoRota = this.route.params.subscribe((params: any) => {
      this.id_empresa = params.id_empresa;
      this.conta = params.conta;
      this.subconta = params.subconta;
      this.descricao = params.descricao;
      this.nivel = params.nivel;
    });
    this.formulario = formBuilder.group({
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
      tipo: [{ value: '' }, [ValidatorStringLen(1, 2, true)]],
      tipo_: [{ value: '' }],
      controle: [{ value: '' }, [ValidatorStringLen(1, 2, true)]],
      controle_: [{ value: '' }],
    });
    this.parametros = formBuilder.group({
      nivel: [null],
    });
    this.estrutura = new EstruturaModel();
    this.contadores[0] = 1;
    this.contadores[1] = +this.conta;
    this.setParametros();
  }

  ngOnInit(): void {
    this.idAcao = 99;
    this.getEstruturas();
  }

  ngOnDestroy(): void {
    this.inscricaoRota?.unsubscribe();
    this.inscricaoGetFiltro?.unsubscribe();
  }

  getEstruturas() {
    let par = new ParametroEstrutura01();

    par.id_empresa = this.id_empresa;

    par.conta = this.conta;

    par.orderby = 'Conta';

    this.inscricaoGetFiltro = this.estruturaService
      .getEstruturas(par)
      .subscribe(
        (data: EstruturaModel[]) => {
          this.estruturas = data;
          for (var x: number = 0; x < this.estruturas.length; x++) {
            this.setSubItem(x);
          }

          console.log(this.estruturas);
        },
        (error: any) => {
          this.estruturas = [];
          this.openSnackBar_Err(
            `Pesquisa Nas Estruturas ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );
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

  onRetorno() {
    this.router.navigate(['/estruturas']);
  }

  setValue() {
    this.formulario.setValue({
      conta: this.estrutura.conta,
      subconta: this.estrutura.subconta,
      descricao: this.estrutura.descricao,
      nivel: this.estrutura.nivel,
      tipo: this.estrutura.tipo,
      tipo_:
        this.idAcao == CadastroAcoes.Consulta ||
        this.idAcao == CadastroAcoes.Exclusao
          ? this.tipos[
              this.tipos.findIndex((data) => data.tipo == this.estrutura.tipo)
            ].descricao
          : '',
      controle: this.estrutura.controle,
      controle_:
        this.idAcao == CadastroAcoes.Consulta ||
        this.idAcao == CadastroAcoes.Exclusao ||
        this.idAcao == CadastroAcoes.Edicao
          ? this.respostas[
              this.respostas.findIndex(
                (data) => data.sigla == this.estrutura.controle
              )
            ].descricao
          : '',
    });
  }

  setParametros() {
    this.parametros.setValue({
      nivel: this.maxNivel,
    });
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

  onSubmit() {
    if (this.formulario.valid) {
      this.executaAcao();
    } else {
      this.openSnackBar_OK(`Formulário Com Campos Inválidos.`, 'OK');
    }
  }

  onCancel() {
    this.idAcao = 99;
  }

  executaAcao() {
    this.estrutura.conta = this.formulario.value.conta;
    this.estrutura.subconta = this.formulario.value.subconta;
    this.estrutura.descricao = this.formulario.value.descricao;
    this.estrutura.nivel = this.formulario.value.nivel;
    this.estrutura.tipo = this.formulario.value.tipo;
    this.estrutura.controle = this.formulario.value.controle;
    console.log('registro', this.estrutura);
    switch (+this.idAcao) {
      case CadastroAcoes.Inclusao:
        if (this.subOpcao == 0) {
          this.IncluirConta();
        } else {
          this.novoSubTopicoComplemento();
        }
        this.idAcao = 99;
        break;
      case CadastroAcoes.Edicao:
        break;
      case CadastroAcoes.Exclusao:
        break;
      case CadastroAcoes.Gravacao:
        break;
      default:
        break;
    }
  }

  onFiltrar() {
    this.maxNivel = this.parametros.value.nivel;
  }
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  getLabelCancel() {
    if (this.idAcao == CadastroAcoes.Consulta) {
      return 'Voltar';
    } else {
      return 'Cancelar';
    }
  }

  escolha(estru: EstruturaModel, opcao: number, index: number) {
    if (opcao == 98) {
      //Novo item mesmo nivel
      this.idAcao = CadastroAcoes.Inclusao;
      this.estrutura = new EstruturaModel();
      this.estrutura.id_empresa = estru.id_empresa;
      this.estrutura.conta = estru.conta;
      this.estrutura.subconta = estru.subconta;
      this.estrutura.nivel = estru.nivel;
      this.estrutura.descricao = '';
      this.estrutura.subItem = false;
      this.estrutura.tipo = estru.tipo;
      this.estruturas.splice(index + 1, 0, this.estrutura);
      var radical: string = estru.subconta.substring(0, (estru.nivel - 1) * 2);
      var radicalInicial: string = estru.subconta.substring(0, estru.nivel * 2);
      var antigoRadical: string = '';
      var novoRadical: string = '';
      var ct: number = 0;
      console.log('==>', this.estruturas);
      for (var i: number = 0; i < this.estruturas.length; i++) {
        if (
          radical ==
          this.estruturas[i].subconta.substring(
            0,
            (this.estruturas[i].nivel - 1) * 2
          )
        ) {
          antigoRadical = this.estruturas[i].subconta.substring(
            0,
            estru.nivel * 2
          );
          this.estruturas[i].subconta = radical + this.addLeadingZeros(++ct, 2);
          novoRadical = this.estruturas[i].subconta.substring(
            0,
            estru.nivel * 2
          );
          if (estru.subconta.substring(0, 2) == '01') {
            console.log(
              'Principal=> ',
              'radical => ',
              radical,
              'radical antigo  =>',
              antigoRadical,
              'radical novo =>',
              novoRadical
            );
          }
          if (i > index + 1 && this.estruturas[i].subItem) {
            this.trocaSubRadicais(antigoRadical, novoRadical, estru.nivel, i);
          }
        }
      }
      this.estruturas = this.estruturas.sort((a, b) => {
        if (a.subconta < b.subconta) {
          return -1;
        }
        if (a.subconta > b.subconta) {
          return 1;
        }
        return 0;
      });
      return;
    }
    if (opcao == 99) {
      this.idAcao = opcao;
      /*
      this.router.navigate([
        'estruturas/subconta',
        estrutura.id_empresa,
        estrutura.conta,
        estrutura.subconta,
        estrutura.descricao,
        estrutura.nivel,
        estrutura.controle,
        opcao,
      ]);*/
    } else {
      this.estrutura.id_empresa = estru.id_empresa;
      this.estrutura.conta = estru.conta;
      this.estrutura.subconta = estru.subconta;
      this.estrutura.nivel = estru.nivel;
      this.estrutura.nivel_maxi = estru.nivel_maxi;
      this.estrutura.tipo = estru.tipo;
      this.estrutura.descricao = estru.descricao;
      this.estrutura.user_insert = estru.user_insert;
      this.estrutura.user_update = estru.user_update;
      this.idAcao = opcao;
      this.setValue();
      this.setAcao(this.idAcao);
      if (this.idAcao == CadastroAcoes.Exclusao) {
        this.estruturas.splice(index, 1);
      }
    }
  }

  setAcao(op: number) {
    switch (+op) {
      case CadastroAcoes.Inclusao:
        this.acao = 'Gravar';
        if (this.subOpcao == 0) {
          this.labelCadastro = 'Estruturas - Inclusão Novo Tópico';
        } else {
          this.labelCadastro = 'Estruturas - Inclusão Novo Sub-Item';
        }
        this.readOnly = false;
        break;
      case CadastroAcoes.Edicao:
        this.acao = 'Gravar';
        this.labelCadastro = 'Estruturas - Alteração.';
        this.readOnly = false;
        break;
      case CadastroAcoes.Consulta:
        this.acao = 'Voltar';
        this.labelCadastro = 'Estruturas - Consulta.';
        this.readOnly = true;
        break;
      case CadastroAcoes.Exclusao:
        this.acao = 'Excluir';
        this.labelCadastro = 'Estruturas - Exclusão.';
        this.readOnly = true;
        break;
      default:
        break;
    }
  }

  addLeadingZeros(num: number, totalLength: number): string {
    return String(num).padStart(totalLength, '0');
  }

  trocaSubRadicais(
    radical: string,
    novoRadical: string,
    nivel: number,
    idx: number
  ) {
    console.log('----------------');
    for (var i: number = idx; i < this.estruturas.length; i++) {
      if (
        radical == this.estruturas[i].subconta.substring(0, radical.length) &&
        this.estruturas[i].nivel > nivel
      ) {
        console.log(
          'Radical',
          radical,
          'Troquei-sub',
          this.estruturas[i].subconta,
          'por =>',
          novoRadical + this.estruturas[i].subconta.substring(radical.length)
        );

        this.estruturas[i].subconta =
          novoRadical + this.estruturas[i].subconta.substring(radical.length);
      }
      console.log('----------------');
    }
  }
  showNivel(nivel: number): boolean {
    var retorno: boolean = false;
    if (nivel <= this.maxNivel) {
      retorno = true;
    } else {
      retorno = false;
    }
    return retorno;
  }

  setSubItem(index: number) {
    this.estruturas[index].subItem = false;
    if (index == this.estruturas.length - 1) {
      return;
    }
    if (this.estruturas[index].tipo == 'O') {
      this.estruturas[index].subItem = false;
    }
    if (index < this.estruturas.length) {
      /*
      console.log(
        'setSubItem ===>',
        this.estruturas[index].subconta.trim(),
        this.estruturas[index + 1].subconta.substring(
          0,
          this.estruturas[index].nivel * 2
        )
      );
      */
    }
    if (
      this.estruturas[index].subconta.trim() ==
      this.estruturas[index + 1].subconta.substring(
        0,
        this.estruturas[index].nivel * 2
      )
    ) {
      this.estruturas[index].subItem = true;
    }
    return;
  }

  novoTopico(estru: EstruturaModel, index: number) {
    this.subOpcao = 0;
    this.estru = estru;
    this.index = index;
    this.idAcao = CadastroAcoes.Inclusao;
    this.setAcao(this.idAcao);
    this.estrutura = new EstruturaModel();
    this.estrutura.id_empresa = estru.id_empresa;
    this.estrutura.conta = estru.conta;
    this.estrutura.subconta = estru.subconta;
    this.estrutura.nivel = estru.nivel;
    this.estrutura.descricao = '';
    this.estrutura.subItem = false;
    this.estrutura.tipo = estru.tipo;
    this.setValue();
    /*
    var radical: string = estru.subconta.substring(0, (estru.nivel - 1) * 2);
    var radicalInicial: string = estru.subconta.substring(0, estru.nivel * 2);
    var antigoRadical: string = '';
    var novoRadical: string = '';
    var ct: number = 0;
    console.log('==>', this.estruturas);
    for (var i: number = 0; i < this.estruturas.length; i++) {
      if (
        radical ==
        this.estruturas[i].subconta.substring(
          0,
          (this.estruturas[i].nivel - 1) * 2
        )
      ) {
        antigoRadical = this.estruturas[i].subconta.substring(
          0,
          estru.nivel * 2
        );
        this.estruturas[i].subconta = radical + this.addLeadingZeros(++ct, 2);
        novoRadical = this.estruturas[i].subconta.substring(0, estru.nivel * 2);
        if (estru.subconta.substring(0, 2) == '01') {
          console.log(
            'Principal=> ',
            'radical => ',
            radical,
            'radical antigo  =>',
            antigoRadical,
            'radical novo =>',
            novoRadical
          );
        }
        if (i > index + 1 && this.estruturas[i].subItem) {
          this.trocaSubRadicais(antigoRadical, novoRadical, estru.nivel);
        }
      }
    }
    this.estruturas = this.estruturas.sort((a, b) => {
      if (a.subconta < b.subconta) {
        return -1;
      }
      if (a.subconta > b.subconta) {
        return 1;
      }
      return 0;
    });
    */
  }

  novoTopicoComplemento() {
    this.estruturas.splice(this.index + 1, 0, this.estrutura);
    var radical: string = this.estru.subconta.substring(
      0,
      (this.estru.nivel - 1) * 2
    );
    var radicalInicial: string = this.estru.subconta.substring(
      0,
      this.estru.nivel * 2
    );
    var antigoRadical: string = '';
    var novoRadical: string = '';
    var ct: number = 0;
    console.log('==>', this.estruturas);
    for (var i: number = 0; i < this.estruturas.length; i++) {
      if (
        radical ==
        this.estruturas[i].subconta.substring(
          0,
          (this.estruturas[i].nivel - 1) * 2
        )
      ) {
        antigoRadical = this.estruturas[i].subconta.substring(
          0,
          this.estru.nivel * 2
        );
        this.estruturas[i].subconta = radical + this.addLeadingZeros(++ct, 2);
        novoRadical = this.estruturas[i].subconta.substring(
          0,
          this.estru.nivel * 2
        );
        if (this.estru.subconta.substring(0, 2) == 'XX') {
          console.log(
            'Principal=> ',
            'radical => ',
            radical,
            'radical antigo  =>',
            antigoRadical,
            'radical novo =>',
            novoRadical
          );
        }
        if (i > this.index + 1 && this.estruturas[i].subItem) {
          console.log(
            'radical antigo',
            antigoRadical,
            'radical novo',
            novoRadical,
            this.estruturas[i].subItem,
            this.estruturas[i].subconta,
            i
          );
          this.trocaSubRadicais(
            antigoRadical,
            novoRadical,
            this.estru.nivel,
            i
          );
        }
      }
    }
    this.estruturas = this.estruturas.sort((a, b) => {
      if (a.subconta < b.subconta) {
        return -1;
      }
      if (a.subconta > b.subconta) {
        return 1;
      }
      return 0;
    });
  }
  novoSubTopico(estru: EstruturaModel, index: number) {
    console.log('subitem PARTE 1');
    this.subOpcao = 1;
    this.estru = estru;
    this.index = index;
    this.idAcao = CadastroAcoes.Inclusao;
    this.setAcao(this.idAcao);
    this.estrutura = new EstruturaModel();
    this.estrutura.id_empresa = estru.id_empresa;
    this.estrutura.conta = estru.conta;
    this.estrutura.subconta =
      estru.subconta.trim() + this.addLeadingZeros(1, 2);
    this.estruturas[this.index].subItem = true;
    this.estrutura.nivel = estru.nivel + 1;
    this.estrutura.descricao = 'NOVO SUB-ITEM';
    this.estrutura.subItem = false;
    this.estrutura.tipo = estru.tipo;
    if (estru.tipo == 'C') {
      this.estrutura.tipo = 'S';
    }
    if (estru.tipo == 'S') {
      this.estrutura.tipo = 'O';
    }
    this.setValue();
    /*
    this.estruturas.splice(index + 1, 0, this.estrutura);
    this.estruturas[index].subItem = true;
    var radical: string = estru.subconta.substring(0, (estru.nivel - 1) * 2);
    var radicalInicial: string = estru.subconta.substring(0, estru.nivel * 2);
    var antigoRadical: string = '';
    var novoRadical: string = '';
    var ct: number = 0;
    console.log('==>', this.estruturas);
    for (var i: number = 0; i < this.estruturas.length; i++) {
      if (
        radical ==
        this.estruturas[i].subconta.substring(
          0,
          (this.estruturas[i].nivel - 1) * 2
        )
      ) {
        antigoRadical = this.estruturas[i].subconta.substring(
          0,
          estru.nivel * 2
        );
        this.estruturas[i].subconta = radical + this.addLeadingZeros(++ct, 2);
        novoRadical = this.estruturas[i].subconta.substring(0, estru.nivel * 2);
        if (estru.subconta.substring(0, 2) == '01') {
          console.log(
            'Principal=> ',
            'radical => ',
            radical,
            'radical antigo  =>',
            antigoRadical,
            'radical novo =>',
            novoRadical
          );
        }
        if (i > index + 1) {
          this.trocaSubRadicais(antigoRadical, novoRadical, estru.nivel);
        }
      }
    }
    this.estruturas = this.estruturas.sort((a, b) => {
      if (a.subconta < b.subconta) {
        return -1;
      }
      if (a.subconta > b.subconta) {
        return 1;
      }
      return 0;
    });
    */
    return;
  }

  novoSubTopicoComplemento() {
    console.log('Vou complementar o subitem');
    this.estruturas.splice(this.index + 1, 0, this.estrutura);
    this.estruturas[this.index].subItem = true;
    var menos = 0;
    if (this.estru.nivel == 1) {
      menos = 0;
    }
    var radical: string = this.estru.subconta.substring(
      0,
      (this.estru.nivel - menos) * 2
    );
    var radicalInicial: string = this.estru.subconta.substring(
      0,
      this.estru.nivel * 2
    );
    var antigoRadical: string = '';
    var novoRadical: string = '';
    var ct: number = 0;
    for (var i: number = 0; i < this.estruturas.length; i++) {
      if (this.estruturas[i].nivel == 1) {
        continue;
      }
      if (
        radical ==
        this.estruturas[i].subconta.substring(
          0,
          (this.estruturas[i].nivel - 1) * 2
        )
      ) {
        antigoRadical = this.estruturas[i].subconta.substring(
          0,
          this.estru.nivel * 2
        );
        console.log('Conta Antiga', this.estruturas[i].subconta);
        this.estruturas[i].subconta = radical + this.addLeadingZeros(++ct, 2);
        console.log('Conta Nova', this.estruturas[i].subconta);
        novoRadical = this.estruturas[i].subconta.substring(
          0,
          this.estru.nivel * 2
        );
        console.log(
          'Nivel',
          'radical antigo  =>',
          antigoRadical,
          'radical novo =>',
          novoRadical
        );
        console.log('I  =>', i, 'Index + 1 =>', this.index + 1);
        if (i > this.index + 1) {
          this.trocaSubRadicais(
            antigoRadical,
            novoRadical,
            this.estru.nivel,
            i
          );
        }
      }
    }
    this.estruturas = this.estruturas.sort((a, b) => {
      if (a.subconta < b.subconta) {
        return -1;
      }
      if (a.subconta > b.subconta) {
        return 1;
      }
      return 0;
    });
  }

  getSpace(nivel: number): string {
    var retorno: string = '';
    for (var x = 0; x < nivel; x++) {
      retorno += '&#160';
    }
    return retorno;
  }

  onIncluirConta(estru: EstruturaModel, index: number) {
    this.subOpcao = 0;
    this.estru = estru;
    this.index = index;
    this.idAcao = CadastroAcoes.Inclusao;
    this.setAcao(this.idAcao);
    this.estrutura = new EstruturaModel();
    this.estrutura.id_empresa = estru.id_empresa;
    this.estrutura.conta = estru.conta;
    this.estrutura.subconta = estru.subconta;
    this.estrutura.nivel = estru.nivel;
    this.estrutura.descricao = '';
    this.estrutura.subItem = false;
    this.estrutura.tipo = estru.tipo;
    this.estrutura.acao = 'S';
    this.setValue();
  }

  IncluirConta() {
    this.lsEstruturas = [];
    this.estruturas.splice(this.index + 1, 0, this.estrutura);
    this.estruturas.forEach((obj) => {
      var novo: EstruturaModel = new EstruturaModel();
      novo.id_empresa = obj.id_empresa;
      novo.conta = obj.conta;
      novo.pai = obj.subconta;
      novo.novo = obj.subconta;
      novo.subconta = obj.subconta;
      novo.acao = obj.acao;
      novo.descricao = obj.descricao;
      novo.nivel = obj.nivel;
      this.lsEstruturas.push(novo);
    });
    this.lsEstruturas.forEach((obj) => {
      console.log(obj.pai, obj.novo, obj.acao, obj.subconta, obj.nivel);
    });
    /*
    var idx: number = 0;
    var ct: number = 0;
    var subNivel: string = this.estru.subconta.substring(
      0,
      (this.estru.nivel - 1) * 2
    );
    //if (subNivel == '0202') this.log = true;
    var masterNivel = this.estru.nivel;
    this.estruturas.splice(this.index + 1, 0, this.estrutura);
    if (this.log) console.log('Sub-Nivel Master', subNivel);
    for (idx = 1; idx < this.estruturas.length; idx++) {
      //if (this.estruturas[idx].subconta.substring(0, 6) != '020202') {
      //  continue;
      //}
      if (
        subNivel ==
          this.estruturas[idx].subconta.substring(0, subNivel.length) &&
        masterNivel == this.estruturas[idx].nivel
      ) {
        this.raiz(this.estruturas[idx].subconta.trim(), subNivel, ++ct, idx);
        if (this.log) console.log('Voltei Principal');
      }
    }
    this.estruturas = this.estruturas.sort((a, b) => {
      if (a.subconta < b.subconta) {
        return -1;
      }
      if (a.subconta > b.subconta) {
        return 1;
      }
      return 0;
    });
    */
  }

  raiz(conta: string, subNivel: string, ct: number, idx: number) {
    var velho: string = conta;
    var novo: string = '';
    velho = conta;
    novo =
      this.estruturas[idx].subconta.substring(0, subNivel.length) +
      this.addLeadingZeros(ct, 2);
    this.estruturas[idx].subconta = novo;
    if (this.log2)
      console.log(
        'Estou no raiz =>',
        'Sub-Nivel:',
        subNivel,
        'velho ou a conta:',
        velho,
        'novo ou a nova conta',
        novo,
        this.estruturas[idx].descricao,
        idx
      );
    if (this.estruturas[idx].subItem) {
      var soma = 0;
      if (this.estruturas[idx + 1].subconta.trim() == velho) soma = 1;
      if (this.log)
        console.log(
          'Raiz Com SubItem',
          'SubItem ',
          'velho',
          velho,
          'novo',
          this.estruturas[idx].subconta,
          this.estruturas[idx].descricao,
          'PROXIMA CONTA',
          this.estruturas[idx + soma].descricao
        );
      this.subItem(velho, novo, idx + soma, velho);
    }
  }

  subItem(velho: string, novo: string, idx: number, subNivel: string) {
    var ct: number = 0;
    for (var i: number = idx + 1; i < this.estruturas.length; i++) {
      if (velho == this.estruturas[i].subconta.substring(0, subNivel.length)) {
        this.estruturas[i].subconta = novo + this.addLeadingZeros(++ct, 2);
        if (this.log2)
          console.log(
            'SubItem ',
            'velho',
            velho,
            'novo',
            this.estruturas[i].subconta,
            this.estruturas[i].descricao
          );
        if (this.estruturas[i].subItem) {
          /*-----------------*/
          if (this.log)
            console.log(
              'Tem Raiz Aqui...',
              this.estruturas[i].descricao,
              'PROXIMA CONTA',
              this.estruturas[i + 1].descricao
            );
          var ct2: number = 0;
          var master: string = this.estruturas[i].subconta.substring(
            0,
            this.estruturas[i].nivel * 2
          );
          var masterNivel = this.estruturas[i].nivel + 1;
          if (this.log) console.log('Raiz Master - 2', master);
          for (var x: number = i; x < this.estruturas.length; x++) {
            if (this.log2)
              console.log(
                'IF Raiz SubItem',
                'Master ',
                master,
                '==',
                this.estruturas[x].subconta.substring(
                  0,
                  this.estruturas[x].nivel * 2
                ),
                this.estruturas[x].descricao,
                'Resultado Da Expressão:',
                master ==
                  this.estruturas[x].subconta.substring(
                    0,
                    (this.estruturas[x].nivel - 1) * 2
                  ) && masterNivel == this.estruturas[x].nivel,
                'TEM SUBTIEM',
                this.estruturas[i].subItem
              );
            if (this.log)
              console.log(
                '------------------INICIO---------------------------'
              );
            if (
              master ==
                this.estruturas[x].subconta.substring(
                  0,
                  (this.estruturas[x].nivel - 1) * 2
                ) &&
              masterNivel == this.estruturas[x].nivel
            ) {
              if (this.log)
                console.log(
                  'Indo para o raiz no subitem: SEM FUNCIONAR!!',
                  this.estruturas[x].subconta,
                  this.estruturas[x].descricao
                );
              //this.raiz(
              //  this.estruturas[x].subconta.trim(),
              //  this.estruturas[x].subconta,
              //  ++ct2,
              //  i
              //);
              if (this.log)
                console.log(
                  '------------------INICIO---------------------------'
                );
              if (this.log) console.log('Voltei 2');
            }
          }
          /*--------------------*/
        }
      } else {
        break;
      }
    }
  }

  subContas(radical: string, passagem: number) {
    var ct: number = 0;
    var oldRadical: string = '';
    var menos: number = 0;
    console.log('Passei ', radical, passagem);
    if (passagem == 1) {
      menos = 1;
    } else {
      menos = 1;
      console.log('Passagem 2', radical);
    }
    for (var i: number = 0; i < this.estruturas.length; i++) {
      if (this.estruturas[i].nivel == 1) {
        continue;
      }
      if (
        radical ==
        this.estruturas[i].subconta.substring(
          0,
          (this.estruturas[i].nivel - menos) * 2
        )
      ) {
        console.log(
          'Estrutura',
          this.estruturas[i].subconta,
          this.estruturas[i].descricao
        );
        oldRadical = this.estruturas[i].subconta.substring(
          0,
          this.estru.nivel * 2
        );
        if (this.estruturas[i].subItem) {
          console.log('Passagem 2 oldRadical e radical', oldRadical, radical);
          this.subContas(oldRadical, 2);
        }
      }
    }
  }
}
