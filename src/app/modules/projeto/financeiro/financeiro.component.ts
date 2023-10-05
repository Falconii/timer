import { TituloProjetoModel } from './../../../Models/titulo-projetoModel';
import { TituloProjetoService } from './../../../services/titulo-projeto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjetoModel } from 'src/app/Models/projeto-model';
import { ParametroTituloProjeto01 } from 'src/app/parametros/parametro-titulo-projeto01';
import { GlobalService } from 'src/app/services/global.service';
import { ProjetosService } from 'src/app/services/projetos.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import {
  DataDDMMYYYY,
  DataYYYYMMDD,
  MensagensBotoes,
  messageError,
} from 'src/app/shared/classes/util';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css'],
})
export class FinanceiroComponent implements OnInit {
  gerador: FormGroup;
  cadastro: FormGroup;

  inscricaoGetTitulo!: Subscription;
  inscricaoGetTitulos!: Subscription;
  inscricaoGetProjeto!: Subscription;
  inscricaoCrud!: Subscription;
  inscricaoRota!: Subscription;

  titulo: TituloProjetoModel = new TituloProjetoModel();

  titulos: TituloProjetoModel[] = [];

  acao: string = 'Sem Definição';

  idAcao: number = CadastroAcoes.Inclusao;

  readOnly: boolean = true;

  labelCadastro: string = '';

  id_empresa: number = 0;

  id_projeto: number = 0;

  projeto: ProjetoModel = new ProjetoModel();

  dias_mes = [
    { id: -1, desc: 'Primeiro Dia' },
    { id: 0, desc: 'Último Dia' },
    { id: 1, desc: 'Dia 01' },
    { id: 1, desc: 'Dia 02' },
    { id: 1, desc: 'Dia 03' },
    { id: 1, desc: 'Dia 04' },
    { id: 1, desc: 'Dia 05' },
    { id: 1, desc: 'Dia 06' },
    { id: 1, desc: 'Dia 07' },
    { id: 1, desc: 'Dia 08' },
    { id: 1, desc: 'Dia 09' },
    { id: 1, desc: 'Dia 10' },
    { id: 1, desc: 'Dia 11' },
    { id: 1, desc: 'Dia 12' },
    { id: 1, desc: 'Dia 13' },
    { id: 1, desc: 'Dia 14' },
    { id: 1, desc: 'Dia 15' },
    { id: 1, desc: 'Dia 16' },
    { id: 1, desc: 'Dia 17' },
    { id: 1, desc: 'Dia 18' },
    { id: 1, desc: 'Dia 19' },
    { id: 1, desc: 'Dia 20' },
    { id: 1, desc: 'Dia 21' },
    { id: 1, desc: 'Dia 22' },
    { id: 1, desc: 'Dia 23' },
    { id: 1, desc: 'Dia 24' },
    { id: 1, desc: 'Dia 25' },
    { id: 1, desc: 'Dia 26' },
    { id: 1, desc: 'Dia 27' },
    { id: 1, desc: 'Dia 28' },
  ];

  arredondamento = [
    { id: 1, desc: '1ª PARC.' },
    { id: 2, desc: '2ª PARC.' },
    { id: 3, desc: 'NÃO USAR' },
  ];

  pula_fds = [
    { id: 1, desc: 'SIM' },
    { id: 2, desc: 'NÃO' },
  ];

  parcelas = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private tituloProjetoService: TituloProjetoService,
    public appSnackBar: AppSnackbar,
    private route: ActivatedRoute,
    private router: Router,
    private projetosService: ProjetosService
  ) {
    this.inscricaoRota = route.params.subscribe((params: any) => {
      this.id_empresa = params.id_empresa;
      this.id_projeto = params.id_projeto;
    });
    this.idAcao = 97;
    this.setAcao(97);
    this.gerador = formBuilder.group({
      vlr_total: [{ value: 0 }],
      parcelas: [{ value: 0 }],
      dia_mes: [{ value: 0 }],
      tipo_arredondamento: [{ value: 0 }],
      pula_fds: [{ value: 0 }],
      vlr_parcela: [{ value: 0 }],
      vlr_arredondamento: [{ value: 0 }],
    });
    this.setValueGerador();

    this.cadastro = formBuilder.group({
      data_vencto: [{ value: '' }],
      data_pagto: [{ value: '' }],
      valor: [{ value: '' }],
      obs: [{ value: '' }],
    });
    this.setValueCadastro();
  }

  ngOnInit(): void {
    this.getProjeto();
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
    this.inscricaoRota?.unsubscribe();
    this.inscricaoGetProjeto?.unsubscribe();
  }

  setValueGerador() {
    this.gerador.setValue({
      vlr_total: this.projeto.valor,
      parcelas: 1,
      dia_mes: -1,
      tipo_arredondamento: 1,
      pula_fds: 1,
      vlr_parcela: 0,
      vlr_arredondamento: 0,
    });
  }

  setValueCadastro() {
    this.cadastro.setValue({
      data_vencto: this.titulo.data_vencto,
      data_pagto: this.titulo.data_pagto,
      valor: this.titulo.valor,
      obs: this.titulo.obs,
    });
  }

  getProjeto() {
    this.inscricaoGetProjeto = this.projetosService
      .getProjeto(this.id_empresa, this.id_projeto)
      .subscribe(
        (data: ProjetoModel) => {
          this.projeto = data;
          this.getTitulos();
        },
        (error: any) => {
          this.projeto = new ProjetoModel();
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa No Cadastro De Projetos ${messageError(error)}`,
            'OK'
          );
        }
      );
  }
  getTitulos() {
    let para = new ParametroTituloProjeto01();
    para.id_empresa = this.globalService.getIdEmpresa();
    para.id_projeto = this.id_projeto;
    para.orderby = 'Projeto';
    this.globalService.setSpin(true);
    this.inscricaoGetTitulos = this.tituloProjetoService
      .getTitulosProjeto_01(para)
      .subscribe(
        (data: TituloProjetoModel[]) => {
          this.globalService.setSpin(false);
          this.titulos = data;
          console.log(this.titulos);
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.titulos = [];
          console.log(error);
          if (error.error.message != 'Nehuma Informação Para Esta Consulta.') {
            this.appSnackBar.openFailureSnackBar(
              `Pesquisa Nos Titulos ${messageError(error)}`,
              'OK'
            );
          }
        }
      );
  }

  getAcoes() {
    return CadastroAcoes;
  }

  escolha(opcao: number, titulo?: TituloProjetoModel) {
    if (typeof titulo !== 'undefined') {
    }
    if (opcao == 99) {
      this.idAcao = opcao;
      this.setAcao(this.idAcao);
      this.setValueGerador();
    }
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
    if (op > 90) {
      //Gerador
      if (op == 99) {
        this.acao = 'Gerar';
        this.labelCadastro = 'Projetos - Gerador De Parcelas';
      }
      if (op == 98) {
        this.acao = 'Gravar';
        this.labelCadastro = 'Projetos - Cadastro De Parcelas';
      }
    } else {
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

  getTexto() {
    return MensagensBotoes;
  }

  onRetorno() {}

  onHome() {
    this.router.navigate(['']);
  }
  onPosicaoInicial() {
    this.idAcao = 97;
    this.setAcao(97);
  }
}
