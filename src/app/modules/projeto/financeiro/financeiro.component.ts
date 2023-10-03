import { TituloProjetoService } from './../../../services/titulo-projeto.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TituloProjetoModel } from 'src/app/Models/titulo-projetoModel';
import { GlobalService } from 'src/app/services/global.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import {
  DataDDMMYYYY,
  DataYYYYMMDD,
  messageError,
} from 'src/app/shared/classes/util';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css'],
})
export class FinanceiroComponent implements OnInit {
  inscricaoGetTitulo!: Subscription;
  inscricaoGetTitulos!: Subscription;
  inscricaoCrud!: Subscription;

  titulo: TituloProjetoModel = new TituloProjetoModel();

  titulos: TituloProjetoModel[] = [];

  acao: string = 'Sem Definição';

  idAcao: number = CadastroAcoes.Inclusao;

  readOnly: boolean = true;

  labelCadastro: string = '';

  constructor(
    private globalService: GlobalService,
    private tituloProjetoService: TituloProjetoService,
    public appSnackBar: AppSnackbar
  ) {}

  ngOnInit(): void {
    /*
    console.log('lixo', DataDDMM(new Date('06/10/2023')));
    this.titulo.id_empresa = 1;
    this.titulo.id_projeto = 100;
    this.titulo.user_insert = this.globalService.getUsuario().id;
    this.titulo.data_vencto = DataDDMMYYYY(new Date());
    this.titulo.data_pagto = DataDDMMYYYY(new Date());
    this.titulo.obs = 'TESTE';
    this.idAcao = CadastroAcoes.Inclusao;
    this.executaAcao();
    */
  }

  ngOnDestroy(): void {
    this.inscricaoGetTitulo?.unsubscribe();
    this.inscricaoGetTitulos?.unsubscribe();
    this.inscricaoCrud?.unsubscribe();
  }

  executaAcao() {
    /*
    this.projeto.id_tipo = this.formulario.value.tipo;
    this.projeto.id_parceira = this.formulario.value.parceira;
    this.projeto.descricao = this.formulario.value.descricao;
    this.projeto.id_diretor = this.formulario.value.id_diretor;
    this.projeto.id_cliente = this.formulario.value.id_cliente;
    this.projeto.dataprop = this.formulario.value.dataprop;
    this.projeto.dataproj = this.formulario.value.dataproj;
    this.projeto.dataenc = this.formulario.value.dataenc;
    this.projeto.horasve = this.formulario.value.horasve;
    this.projeto.objeto = this.formulario.value.objeto;
    this.projeto.obs = this.formulario.value.observacao;
    this.projeto.valor = vlrContrato;
    this.projeto.id_contrato = this.formulario.value.id_contrato;
    this.projeto.assinatura = this.formulario.value.assinatura;
    this.projeto.reajuste = this.formulario.value.reajuste;
    */
    switch (+this.idAcao) {
      case CadastroAcoes.Inclusao:
        this.titulo.user_insert = this.globalService.getUsuario().id;
        this.inscricaoCrud = this.tituloProjetoService
          .TituloProjetoInsert(this.titulo)
          .subscribe(
            async (data: TituloProjetoModel) => {
              console.log('Retorno Titulo: ', data);
            },
            (error: any) => {
              this.appSnackBar.openFailureSnackBar(
                `Erro Na INclusão ${messageError(error)}`,
                'OK'
              );
            }
          );
        break;
      case CadastroAcoes.Edicao:
        /*
        this.projeto.user_update = this.globalService.getUsuario().id;
        this.inscricaoAcao = this.projetosService
          .ProjetoUpdate(this.projeto)
          .subscribe(
            async (data: any) => {
              this.onRetorno();
            },
            (error: any) => {
              this.appSnackBar.openFailureSnackBar(
                `Erro Na Alteração ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
                'OK'
              );
            }
          );*/
        break;
      case CadastroAcoes.Exclusao:
        /*
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
          );*/
        break;
      default:
        break;
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
}
