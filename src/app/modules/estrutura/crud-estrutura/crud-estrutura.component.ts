import { QuestionDialogComponent } from '../../../shared/components/question-dialog/question-dialog.component';
import { QuestionDialogData } from '../../../shared/components/question-dialog/Question-Dialog-Data';
import { EstruturaModel } from 'src/app/Models/estrutura-model';
import { EstruturasService } from 'src/app/services/estruturas.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensagensBotoes } from 'src/app/shared/classes/util';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import { ParametroEstrutura01 } from 'src/app/parametros/parametro-estrutura01';
import { GlobalService } from 'src/app/services/global.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';

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

  durationInSeconds = 2;

  constructor(
    private formBuilder: FormBuilder,
    public questionDialog: MatDialog,
    private estruturaService: EstruturasService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private globalService: GlobalService
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
    this.globalService.setSpin(true);
    this.inscricaoGetFiltro = this.estruturaService
      .getEstruturas(par)
      .subscribe(
        (data: EstruturaModel[]) => {
          this.globalService.setSpin(false);
          this.estruturas = data;
          console.log(this.estruturas);
        },
        (error: any) => {
          this.globalService.setSpin(false);
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

  inclusaSemControle() {
    this.router.navigate([
      'estruturas/estruturasemcontrole',
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
    const data: QuestionDialogData = new QuestionDialogData();
    data.mensagem01 = 'Confirma Cópia Da Estrutura:';
    data.mensagem02 = estrutura.descricao;
    const dialogConfig = new MatDialogConfig();

    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'question-dialog';
    dialogConfig.width = '600px';
    dialogConfig.data = data;
    const modalDialog = this.questionDialog
      .open(QuestionDialogComponent, dialogConfig)
      .beforeClosed()
      .subscribe((data: QuestionDialogData) => {
        if (data.resposta === 'S') {
          this.Copia(estrutura);
        }
      });
  }

  Copia(estrutura: EstruturaModel) {
    this.globalService.setSpin(true);
    this.inscricaoGetFiltro = this.estruturaService
      .copiaEstrutura(estrutura)
      .subscribe(
        (data: EstruturaModel[]) => {
          this.globalService.setSpin(false);
          this.openSnackBar_OK(`Estrutura Copiada!`, 'OK');
          this.getEstruturas();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.estruturas = [];
          this.openSnackBar_Err(
            `Copia Das Estruturas ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );
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

  addControlControle(): void {
    this.inclusao();
  }

  addControlSemControle(): void {
    this.inclusaSemControle();
  }
}
