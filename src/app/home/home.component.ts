import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ParametroProjeto01 } from '../parametros/parametro-projeto01';
import { ProjetosService } from '../services/projetos.service';
import { ProjetoModel } from '../Models/projeto-model';
import { AppSnackbar } from '../shared/classes/app-snackbar';
import { getFirstName, messageError } from '../shared/classes/util';
import { AponExecucaoService } from '../services/apon-execucao.service';
import { AponExecutorModel } from '../Models/apon-executor-model';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  inscricaoGetContratos!: Subscription;
  inscricaoAponExecucao!: Subscription;
  lsProjetos: ProjetoModel[] = [];
  displayedColumns: string[] = [
    'situacao',
    'id',
    'razao',
    'descricao',
    'periodo',
    'acao',
  ];

  showDash: boolean = false;

  lsResumoApontamentosExec: AponExecutorModel[] = [];

  constructor(
    public globalService: GlobalService,
    private projetosServices: ProjetosService,
    private aponExecucaoService: AponExecucaoService,
    private appSnackBar: AppSnackbar
  ) {
    //google.charts.load('current', { packages: ['corechart'] });
  }

  ngOnInit(): void {
    this.Atualizar();
  }

  ngOnDestroy(): void {
    this.inscricaoGetContratos?.unsubscribe();
    this.inscricaoAponExecucao?.unsubscribe();
  }

  getUsuario(): boolean {
    return this.globalService.logado;
  }

  getAponExecByExecutor() {
    this.globalService.setSpin(true);
    this.inscricaoAponExecucao = this.aponExecucaoService
      .AponExecByExecutor(
        this.globalService.id_empresa,
        this.globalService.getUsuario().id,
        '09_2023'
      )
      .subscribe(
        (data: AponExecutorModel[]) => {
          this.globalService.setSpin(false);
          this.lsResumoApontamentosExec = data;
          const final: AponExecutorModel = new AponExecutorModel();
          final.data = 'TOTAL';
          let totalFinal: number = 0;
          this.lsResumoApontamentosExec.forEach(
            (obj) => (totalFinal += Number(obj.total))
          );
          final.total = totalFinal;
          this.lsResumoApontamentosExec.push(final);
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.lsResumoApontamentosExec = [];
          if (error.error.message != 'Nehuma Informação Para Esta Consulta.') {
            this.appSnackBar.openFailureSnackBar(
              `Pesquisa Nos Apontamentos ${messageError(error)}`,
              'OK'
            );
          }
        }
      );
  }

  /*
  buidChartContratosAtivos(dados: ProjetoModel[]) {
    var func = (chart: any) => {
      var horas: number = 0;
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      dados.forEach((contrato) => {
        data.addRows([[contrato.descricao, Number(contrato.horasdir)]]);
        horas += Number(contrato.horasdir);
      });
      var options = {
        title: `Contratos Ativos - Total De Horas ${horas}`,
        width: 600,
        height: 500,
      };
      chart().draw(data, options);
    };
    var chart = () =>
      new google.visualization.PieChart(document.getElementById('chart_div'));
    var callBack = () => func(chart);
    google.charts.setOnLoadCallback(callBack);
  }
*/
  getProjetos() {
    let par = new ParametroProjeto01();
    par.id_empresa = 1;
    par.tamPagina = 100;
    par.pagina = 1;
    this.globalService.setSpin(true);
    this.inscricaoGetContratos = this.projetosServices
      .getProjetos_01(par)
      .subscribe(
        (data: ProjetoModel[]) => {
          this.globalService.setSpin(false);
          this.lsProjetos = data;
          this.Atualizar();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          if (error.error.message == 'Nehuma Informação Para Esta Consulta.') {
            this.appSnackBar.openSuccessSnackBar(
              'Nenhuma Informação Encontrada Para Esta Consulta!',
              'OK'
            );
          } else {
            this.lsProjetos = [];
          }
        }
      );
  }

  Atualizar() {
    if (this.globalService.logado) {
      switch (this.globalService.usuario.grupo) {
        case 900:
          this.showDash = true;
          break;
        case 901:
          this.showDash = true;
          break;
        case 902:
          this.showDash = true;
          break;
        case 906:
          this.showDash = true;
          break;
        default:
          this.showDash = false;
      }
    } else {
      this.showDash = false;
    }
    if (this.showDash) {
      this.getAponExecByExecutor();
    }
  }

  htmlFirstName(nome: string): string {
    return getFirstName(nome);
  }

  setStyle(projeto: ProjetoModel, tipo: string) {
    let cor = { 'background-color': 'white' };
    if (tipo == 'P') {
      if (projeto.nivelplan == 1) cor = { 'background-color': 'green' };
      if (projeto.nivelplan == 2) cor = { 'background-color': 'yellow' };
      if (projeto.nivelplan == 3) cor = { 'background-color': 'red' };
      if (projeto.nivelplan == 4) cor = { 'background-color': 'black' };
    } else {
      if (projeto.nivelexec == 1) cor = { 'background-color': 'green' };
      if (projeto.nivelexec == 2) cor = { 'background-color': 'yellow' };
      if (projeto.nivelexec == 3) cor = { 'background-color': 'red' };
      if (projeto.nivelexec == 4) cor = { 'background-color': 'black' };
    }
    return cor;
  }
}
