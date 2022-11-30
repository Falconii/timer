import { CelulaDia } from 'src/app/shared/celula-dia';
import { Component, Input, OnInit } from '@angular/core';
import { ApoExecucaoModel } from 'src/app/Models/apo-execucao-model';
import { ApoExecucaoModel01 } from 'src/app/Models/apo-execucao-model01';
import { ApoPlanejamentoQuery_01Model } from 'src/app/Models/apo-planejamento-query_01-model';

@Component({
  selector: 'app-cel-apontamentos',
  templateUrl: './cel-apontamentos.component.html',
  styleUrls: ['./cel-apontamentos.component.css'],
})
export class CelApontamentosComponent implements OnInit {
  @Input('Celula') cel: CelulaDia = new CelulaDia();
  apontamentos: ApoExecucaoModel01[] = [];
  agendamentos: ApoPlanejamentoQuery_01Model[] = [];

  constructor() {}

  ngOnInit() {}

  showDadosProjetoAgendamento(lanca: ApoPlanejamentoQuery_01Model): string {
    let retorno = '';

    retorno = `Projeto: ${lanca.id_projeto} Diretor: ${lanca.diretor_razao} Resp.: ${lanca.resp_razao}`;

    return retorno;
  }

  showDadosProjetoApontamento(lanca: ApoExecucaoModel): string {
    let retorno = '';

    retorno = `Projeto: ${lanca.id_projeto} Descricao: ${lanca.proj_descricao} Resp.: ${lanca.resp_razao}`;

    return retorno;
  }
}
