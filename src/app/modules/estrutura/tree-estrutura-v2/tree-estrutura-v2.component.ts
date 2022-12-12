import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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

  estruturas: EstruturaModel[] = [];

  estru: EstruturaModel = new EstruturaModel();

  index: number = 0;

  contadores: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];

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
    this.estrutura = new EstruturaModel();
    this.contadores[0] = 1;
    this.contadores[1] = +this.conta;
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
          this.novoTopicoComplemento();
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

  trocaSubRadicais(radical: string, novoRadical: string, nivel: number) {
    for (var i: number = 0; i < this.estruturas.length; i++) {
      if (
        radical == this.estruturas[i].subconta.substring(0, radical.length) &&
        this.estruturas[i].nivel > nivel
      ) {
        console.log(
          'Troquei-sub',
          this.estruturas[i].subconta,
          'por =>',
          novoRadical + this.estruturas[i].subconta.substring(radical.length)
        );

        this.estruturas[i].subconta =
          novoRadical + this.estruturas[i].subconta.substring(radical.length);
        console.log('Trocada =>', this.estruturas[i].subconta);
      }
    }
  }
  showNivel(nivel: number): boolean {
    if (nivel <= 3) {
      return true;
    } else {
      return true;
    }
  }

  setSubItem(index: number) {
    this.estruturas[index].subItem = false;
    if (index == this.estruturas.length) {
      return;
    }
    if (this.estruturas[index].tipo == 'O') {
      this.estruturas[index].subItem = false;
    }
    if (index < this.estruturas.length) {
      console.log(
        'setSubItem ===>',
        this.estruturas[index].subconta.trim(),
        this.estruturas[index + 1].subconta.substring(
          0,
          this.estruturas[index].nivel * 2
        )
      );
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
        if (this.estru.subconta.substring(0, 2) == '01') {
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
          this.trocaSubRadicais(antigoRadical, novoRadical, this.estru.nivel);
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
    this.subOpcao = 0;
    this.estru = estru;
    this.index = index;
    this.idAcao = CadastroAcoes.Inclusao;
    this.setAcao(this.idAcao);
    this.estrutura = new EstruturaModel();
    this.estrutura.id_empresa = estru.id_empresa;
    this.estrutura.conta = estru.conta;
    this.estrutura.subconta =
      estru.subconta.trim() + this.addLeadingZeros(1, 2);
    this.estrutura.nivel = estru.nivel + 1;
    this.estrutura.descricao = 'NOVO SUB-ITEM';
    this.estrutura.subItem = false;
    this.estrutura.tipo = estru.tipo;
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
    this.estruturas[this.index].subItem = true;
    this.estruturas.splice(this.index + 1, 0, this.estrutura);
    this.estruturas[this.index].subItem = true;
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
        if (this.estru.subconta.substring(0, 2) == '01') {
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
        if (i > this.index + 1) {
          this.trocaSubRadicais(antigoRadical, novoRadical, this.estru.nivel);
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
}
