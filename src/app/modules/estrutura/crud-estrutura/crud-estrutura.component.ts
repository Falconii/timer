import { EstruturaModel } from 'src/app/Models/estrutura-model';
import { EstruturasService } from 'src/app/services/estruturas.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensagensBotoes } from 'src/app/shared/util';
import { CadastroAcoes } from 'src/app/shared/cadastro-acoes';
import { ParametroEstrutura01 } from 'src/app/parametros/parametro-estrutura01';

@Component({
  selector: 'app-crud-estrutura',
  templateUrl: './crud-estrutura.component.html',
  styleUrls: ['./crud-estrutura.component.css'],
})
export class CrudEstruturaComponent implements OnInit {
  inscricaoGetAll!: Subscription;
  inscricaoGetFiltro!: Subscription;
  inscricaoCopiaEstrutura!: Subscription;

  estruturas: EstruturaModel[] = [];

  parametros: FormGroup;

  erro: string = '';

  opcoesOrdenacao = ['Conta', 'SubConta', 'Descrição'];

  opcoesCampo = ['Conta', 'SubConta', 'Descrição'];

  statusEstruturas = ['ATIVA', 'INATIVA', 'TODAS'];

  status: number = 1;

  status_descricao: string = 'Ativas';

  constructor(
    private formBuilder: FormBuilder,
    private estruturaService: EstruturasService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.parametros = formBuilder.group({
      ordenacao: [null],
      campo: [null],
      filtro: [null],
    });
    this.setValues();
  }

  ngOnInit(): void {
    this.getEstruturas();
  }

  setValues() {
    this.parametros.setValue({
      ordenacao: 'Conta',
      campo: 'Conta',
      filtro: '',
    });
  }

  ngOnDestroy() {
    this.inscricaoGetAll?.unsubscribe();
    this.inscricaoGetFiltro?.unsubscribe();
    this.inscricaoCopiaEstrutura?.unsubscribe();
  }

  getEstruturas() {
    let par = new ParametroEstrutura01();

    par.id_empresa = 1;

    if (this.parametros.value.campo == 'Conta')
      par.conta = this.parametros.value.filtro.toUpperCase();

    if (this.parametros.value.campo == 'SubConta')
      par.subconta = this.parametros.value.filtro.toUpperCase();

    if (this.parametros.value.campo == 'Descrição')
      par.descricao = this.parametros.value.filtro.toUpperCase();

    par.nivel = 1;

    par.tipo = '';

    par.status = this.status;

    par.orderby = this.parametros.value.ordenacao;

    this.inscricaoGetFiltro = this.estruturaService
      .getEstruturas(par)
      .subscribe(
        (data: EstruturaModel[]) => {
          this.estruturas = data;
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

  getTexto() {
    return MensagensBotoes;
  }

  escolha(estrutura: EstruturaModel, opcao: number) {
    if (opcao == 99) {
      this.router.navigate([
        'estruturas/subconta',
        estrutura.id_empresa,
        estrutura.conta,
        estrutura.versao,
        estrutura.subconta,
        estrutura.descricao,
        estrutura.nivel,
        estrutura.controle,
        opcao,
      ]);
    } else {
      this.router.navigate([
        'estruturas/estrutura',
        estrutura.id_empresa,
        estrutura.conta,
        estrutura.versao,
        estrutura.subconta,
        opcao,
      ]);
    }
  }

  inclusao() {
    this.router.navigate([
      'estruturas/estrutura',
      1,
      '00',
      '0101',
      '00',
      this.getAcoes().Inclusao,
    ]);
  }

  getAcoes() {
    return CadastroAcoes;
  }

  tree(estrutura: EstruturaModel) {
    this.router.navigate([
      'estruturas/treeconta',
      estrutura.id_empresa,
      estrutura.conta,
      estrutura.versao,
      estrutura.subconta,
      estrutura.descricao,
      estrutura.nivel,
    ]);
  }

  onCopia(estrutura: EstruturaModel) {
    this.inscricaoGetFiltro = this.estruturaService
      .copiaEstrutura(estrutura)
      .subscribe(
        (data: EstruturaModel[]) => {
          console.log(data);
          alert('Deu Certo !!!!');
        },
        (error: any) => {
          this.estruturas = [];
          this.openSnackBar_Err(
            `Copia Das Estruturas ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );
  }

  onHome() {
    this.router.navigate(['']);
  }

  getClassAtiva(status: number): string {
    if (status == 1) {
      return 'conta-ativa';
    } else {
      return 'conta-inativa';
    }
  }

  onSetStatus(status: number, descricao: string) {
    this.status = status;
    this.status_descricao = descricao;
    return;
  }
}
