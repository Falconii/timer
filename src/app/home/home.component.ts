import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ParametroProjeto01 } from '../parametros/parametro-projeto01';
import { ProjetosService } from '../services/projetos.service';
import { ProjetoModel } from '../Models/projeto-model';
import { AppSnackbar } from '../shared/classes/app-snackbar';
import { getFirstName } from '../shared/classes/util';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  inscricaoGetContratos!: Subscription;
  lsProjetos: ProjetoModel[] = [];
  displayedColumns: string[] = [
    'situacao',
    'id',
    'razao',
    'descricao',
    'periodo',
    'acao',
  ];

  constructor(
    public globalService: GlobalService,
    private projetosServices: ProjetosService,
    private appSnackBar: AppSnackbar
  ) {
    google.charts.load('current', { packages: ['corechart'] });
  }

  ngOnInit(): void {
    this.getProjetos();
  }

  ngOnDestroy(): void {
    this.inscricaoGetContratos?.unsubscribe();
  }

  getUsuario(): boolean {
    return this.globalService.logado;
  }

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
      this.buidChartContratosAtivos(this.lsProjetos);
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
