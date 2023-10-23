import { DisplayPontes } from './../../../shared/classes/DisplayPontes';
import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EstruturaUsuarioModel } from 'src/app/Models/estrutura-usuario-model';
import { FeriadoModel } from 'src/app/Models/feriado-model';
import { FeriadoPonteModel } from 'src/app/Models/feriado-ponte-model';
import { ProjetoModel } from 'src/app/Models/projeto-model';
import { ParametroUsuario01 } from 'src/app/parametros/parametro-usuario01';
import { GlobalService } from 'src/app/services/global.service';
import { TituloProjetoService } from 'src/app/services/titulo-projeto.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ValidatorDate } from 'src/app/shared/Validators/validator-date';
import { ValidatorStringLen } from 'src/app/shared/Validators/validator-string-len';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import { MensagensBotoes, messageError } from 'src/app/shared/classes/util';
import { UsersChoices } from '../../estrutura/crud-estrutura-sem-controle/crud-estrutura-sem-controle.component';
import { UsuarioQuery01Model } from 'src/app/Models/usuario-query_01-model';
import { UsuarioQuery_03Model } from 'src/app/Models/usuario-query_03-model';
import { ParametroFeriado01 } from 'src/app/parametros/parametro-feriado01';
import { FeriadosService } from 'src/app/services/feriados.service';

@Component({
  selector: 'app-ponte-view',
  templateUrl: './ponte-view.component.html',
  styleUrls: ['./ponte-view.component.css'],
})
export class PonteViewComponent implements OnInit {
  gerador: FormGroup;
  cadastro: FormGroup;

  inscricaoGetPontes!: Subscription;
  inscricaoGetPonte!: Subscription;
  inscricaoGetFeriados!: Subscription;
  inscricaoCrud!: Subscription;
  inscricaoRota!: Subscription;
  inscricaoAuditor!: Subscription;

  feriado: FeriadoModel = new FeriadoModel();

  feriados: FeriadoModel[] = [];

  pontes: FeriadoPonteModel[] = [];

  displayPontes: DisplayPontes[] = [];

  acao: string = 'Sem Definição';

  idAcao: number = CadastroAcoes.Inclusao;

  readOnly: boolean = true;

  labelCadastro: string = '';

  id_empresa: number = 0;

  id_projeto: number = 0;

  data: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private usuariosService: UsuariosService,
    private feriadoService: FeriadosService,
    public appSnackBar: AppSnackbar,
    private route: ActivatedRoute,
    private router: Router,
    private decimalPipe: DecimalPipe
  ) {
    this.inscricaoRota = route.params.subscribe((params: any) => {
      this.id_empresa = params.id_empresa;
      this.data = params.data;
      this.idAcao = params.acao;
    });
    this.setAcao(this.idAcao);
    this.gerador = formBuilder.group({
      data_ref: [{ value: 0 }, [ValidatorDate(true)]],
      descricao: [{ value: '' }, [ValidatorStringLen(0, 50, false)]],
    });
    this.setValueGerador();
    this.cadastro = formBuilder.group({
      data: [{ value: '' }, [ValidatorDate(true)]],
      descricao: [{ value: '' }, [ValidatorStringLen(0, 50, false)]],
    });
    this.setValueCadastro();
  }

  ngOnInit(): void {
    this.getFeriados();
  }

  ngOnDestroy(): void {
    this.inscricaoCrud?.unsubscribe();
    this.inscricaoRota?.unsubscribe();
    this.inscricaoGetPontes?.unsubscribe();
    this.inscricaoGetPonte?.unsubscribe();
    this.inscricaoGetFeriados?.unsubscribe();
    this.inscricaoAuditor?.unsubscribe();
  }

  setValueGerador() {
    this.gerador.setValue({
      data_ref: this.feriado.data,
      descricao: this.feriado.descricao,
    });
  }

  setValueCadastro() {
    this.cadastro.setValue({
      data: '',
      descricao: '',
    });
  }

  getFeriados() {
    let par = new ParametroFeriado01();

    par.id_empresa = 1;

    par.id_tipo = 2; //só ponte

    par.data = this.data;

    par.orderby = 'Data';

    par.contador = 'N';

    par.tamPagina = 0;

    par.pagina = 0;

    this.globalService.setSpin(true);

    this.inscricaoGetFeriados = this.feriadoService
      .getFeriados_01(par)
      .subscribe(
        (data: FeriadoModel[]) => {
          this.globalService.setSpin(false);
          this.feriados = data;
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.feriados = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nas Pontes ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  getAuditores() {
    const par = new ParametroUsuario01();

    const coorde = this.usuariosService.getGruposCoordenador();

    const audi = this.usuariosService.getGruposAuditor();

    par.id_empresa = this.globalService.id_empresa;

    coorde.forEach((value) => {
      par.grupo.push(value);
    });

    audi.forEach((value) => {
      par.grupo.push(value);
    });

    par.ativo = 'S';

    par.timer = 'S';

    par.data = this.gerador.value.data_ref;

    par.orderby = 'Razão';

    this.globalService.setSpin(true);

    this.inscricaoAuditor = this.usuariosService
      .getusuarios_01_Ponte(par)
      .subscribe(
        (data: UsuarioQuery_03Model[]) => {
          this.globalService.setSpin(false);
          this.loadDisplayItens(data);
          console.log(this.displayPontes);
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );
  }

  getAcoes() {
    return CadastroAcoes;
  }

  escolha(opcao: number, feriado?: FeriadoModel) {
    if (typeof feriado !== 'undefined') {
      this.feriado = feriado;
      this.setValueCadastro();
      this.idAcao = opcao;
      this.setAcao(opcao);
    }
    if (opcao == CadastroAcoes.Inclusao) {
      this.feriado = new FeriadoModel();
      this.feriado.id_empresa = this.globalService.id_empresa;
      this.feriado.id_tipo = 2;
      this.feriado.id_nivel = 0;
      this.setValueCadastro();
      this.cadastro.markAsUntouched();
      this.idAcao = opcao;
      this.setAcao(opcao);
    }
    if (opcao == 99) {
      this.idAcao = opcao;
      this.setAcao(this.idAcao);
      this.setValueGerador();
    }
  }

  executaAcao() {
    /*
    let valor: string = this.cadastro.value.valor.toString();
    valor = valor.replace('.', '');
    valor = valor.replace(',', '.');
    this.titulo.data_pagto = this.cadastro.value.data_pagto;
    this.titulo.data_vencto = this.cadastro.value.data_vencto;
    if (this.titulo.data_pagto == null) this.titulo.data_pagto = '';
    this.titulo.valor = Number(valor);
    this.titulo.obs = this.cadastro.value.obs;
    this.globalService.setSpin(true);
    switch (+this.idAcao) {
      case CadastroAcoes.Inclusao:
        this.titulo.user_insert = this.globalService.getUsuario().id;
        this.inscricaoCrud = this.tituloProjetoService
          .TituloProjetoInsert(this.titulo)
          .subscribe(
            async (data: TituloProjetoModel) => {
              this.globalService.setSpin(false);
              this.getTitulos();
            },
            (error: any) => {
              this.globalService.setSpin(false);
              this.appSnackBar.openFailureSnackBar(
                `Erro Na Inclusão ${messageError(error)}`,
                'OK'
              );
            }
          );
        break;
      case CadastroAcoes.Edicao:
        this.titulo.user_update = this.globalService.getUsuario().id;
        this.inscricaoCrud = this.tituloProjetoService
          .TituloProjetoUpdate(this.titulo)
          .subscribe(
            async (data: any) => {
              this.globalService.setSpin(false);
              this.getTitulos();
            },
            (error: any) => {
              this.globalService.setSpin(false);
              this.appSnackBar.openFailureSnackBar(
                `Erro Na Alteração ${messageError(error)}`,
                'OK'
              );
            }
          );
        break;
      case CadastroAcoes.Exclusao:
        const searchRegExp = /\//g;
        this.inscricaoCrud = this.tituloProjetoService
          .TituloProjetoDelete(
            this.titulo.id_empresa,
            this.titulo.id_projeto,
            this.titulo.data_vencto.replace(searchRegExp, '_')
          )
          .subscribe(
            async (data: any) => {
              this.globalService.setSpin(false);
              this.getTitulos();
            },
            (error: any) => {
              this.globalService.setSpin(false);
              console.log(error);
              this.appSnackBar.openFailureSnackBar(
                `Erro Na Exclusão ${messageError(error)}`,
                'OK'
              );
            }
          );

        break;

      default:
        this.globalService.setSpin(false);
        break;
    }
    */
  }

  setAcao(op: number) {
    if (op > 90) {
      //Gerador
      if (op == 97) {
        this.acao = 'Gerar';
        this.labelCadastro = 'Pontes';
      }
      if (op == 98) {
        this.acao = 'Gravar';
        this.labelCadastro = 'Títulos -  Cadastro De Pontes';
      }
    } else {
      switch (+op) {
        case CadastroAcoes.Inclusao:
          this.acao = 'Gravar';
          this.labelCadastro = 'Pontes -  Inclusão.';
          this.readOnly = false;
          break;
        case CadastroAcoes.Edicao:
          this.acao = 'Gravar';
          this.labelCadastro = 'Pontes -  Alteração.';
          this.readOnly = false;
          break;
        case CadastroAcoes.Consulta:
          this.acao = 'Voltar';
          this.labelCadastro = 'Pontes -  Consulta.';
          this.readOnly = true;
          break;
        case CadastroAcoes.Exclusao:
          this.acao = 'Excluir';
          this.labelCadastro = 'Pontes -  Exclusão.';
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

  onRetorno() {
    this.router.navigate(['/pontes/pontes']);
  }

  onHome() {
    this.router.navigate(['']);
  }
  onPosicaoInicial() {
    this.idAcao = 97;
    this.setAcao(this.idAcao);
  }

  onGerarPontes() {
    this.getAuditores();
  }

  onGravarPontes() {
    if (this.gerador.valid) {
      this.saveParcelas();
    } else {
      this.gerador.markAllAsTouched();
      this.appSnackBar.openSuccessSnackBar(
        `Formulário Com Campos Inválidos.`,
        'OK'
      );
    }
  }

  saveParcelas() {
    /*
    this.globalService.setSpin(true);
    this.inscricaoCrud = this.tituloProjetoService
      .tituloProjetoSaveAll(this.titulos)
      .subscribe(
        async (data: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openSuccessSnackBar(`${messageError(data)}`, 'OK');
          setTimeout(() => this.getTitulos(), 1500);
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `Erro Na Inclusão ${messageError(error)}`,
            'OK'
          );
        }
      );
      */
  }

  loadPontes() {}

  onSubmit() {
    if (this.cadastro.valid || this.idAcao == CadastroAcoes.Exclusao) {
      this.executaAcao();
    } else {
      this.cadastro.markAllAsTouched();
      this.appSnackBar.openSuccessSnackBar(
        `Formulário Com Campos Inválidos.`,
        'OK'
      );
    }
  }

  onCancelGeracao() {
    this.pontes = [];
    this.onPosicaoInicial();
  }

  getLabelCancel() {
    if (this.idAcao == CadastroAcoes.Consulta) {
      return 'Voltar';
    } else {
      return 'Cancelar';
    }
  }

  NoValidtouchedOrDirtyCd(campo: string): boolean {
    if (
      !this.cadastro.get(campo)?.valid &&
      (this.cadastro.get(campo)?.touched || this.cadastro.get(campo)?.dirty)
    ) {
      return true;
    }
    return false;
  }

  NoValidtouchedOrDirtyGe(campo: string): boolean {
    if (
      !this.gerador.get(campo)?.valid &&
      (this.gerador.get(campo)?.touched || this.gerador.get(campo)?.dirty)
    ) {
      return true;
    }
    return false;
  }

  loadDisplayItens(data: UsuarioQuery_03Model[]): void {
    this.displayPontes = [];
    //adiciona todos
    const disp: DisplayPontes = new DisplayPontes();
    disp.checked = false;
    disp.vazia = true;
    disp.ponte = new UsuarioQuery_03Model();
    this.displayPontes.push(disp);
    data.forEach((obj) => {
      const disp: DisplayPontes = new DisplayPontes();
      disp.checked = false;
      disp.vazia = false;
      disp.ponte = obj;
      this.displayPontes.push(disp);
    });
  }

  setAllItens(value: boolean): void {
    this.displayPontes.forEach((obj) => {
      if (obj.vazia) {
        obj.checked = value;
      } else {
        if (obj.ponte.flag_ponte == 'N') {
          obj.checked = value;
        }
      }
    });
  }

  setItens(value: boolean, ponte: DisplayPontes): void {
    let check: boolean = true;
    ponte.checked = value;
    this.displayPontes.forEach((obj) => {
      if (!obj.vazia && obj.ponte.flag_ponte == 'N')
        check = !obj.checked ? false : check;
    });
    this.displayPontes[0].checked = check;
  }

  getVisiblesAtividades(): DisplayPontes[] {
    return this.displayPontes.filter((disp) => (!disp.vazia ? true : false));
  }
}
