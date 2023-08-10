import { GlobalService } from '../../../services/global.service';
import { ParametroAponExecucao01 } from '../../../parametros/parametro-apon-execucao01';
import { AponExecucaoService } from '../../../services/apon-execucao.service';
import { CelulaDia } from 'src/app/shared/classes/celula-dia';
import { Component, Input, OnInit } from '@angular/core';
import { ApoExecucaoModel } from 'src/app/Models/apo-execucao-model';
import { ApoExecucaoModel01 } from 'src/app/Models/apo-execucao-model01';
import { ApoPlanejamentoQuery_01Model } from 'src/app/Models/apo-planejamento-query_01-model';
import { AponPlanejamentoService } from 'src/app/services/apon-planejamento.service';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';
import { ParametroAgendaPlanejamento01 } from 'src/app/parametros/parametro-agenda-planejamento01';
import { getFirstName } from '../../classes/util';

@Component({
  selector: 'app-cel-apontamentos-execucao',
  templateUrl: './cel-apontamentos-execucao.component.html',
  styleUrls: ['./cel-apontamentos-execucao.component.css'],
  providers: [DatePipe],
})
export class CelApontamentosExecucaoComponent implements OnInit {
  cel: CelulaDia = new CelulaDia();
  apontamentos: ApoExecucaoModel01[] = [];

  inscricaoExecutadas!: Subscription;

  constructor(
    private datePipe: DatePipe,
    private aponExecucaoService: AponExecucaoService,
    private globslService: GlobalService
  ) {
    this.globslService.refreshLançamentos.subscribe((dia) => {
      this.cel = dia;

      if (this.cel.tipo == 3 || this.cel.semana == 0) {
        this.apontamentos = [];
      } else {
        this.getExecutados();
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.inscricaoExecutadas?.unsubscribe();
  }

  showDadosProjetoApontamento(lanca: ApoExecucaoModel): string {
    let retorno = '';

    retorno = `Projeto: ${lanca.id_projeto} Descricao: ${lanca.proj_descricao} Resp.: ${lanca.resp_razao}`;

    return retorno;
  }

  getExecutados() {
    const par = new ParametroAponExecucao01();
    let dt = this.datePipe.transform(this.cel.data, 'yyyy-MM-dd');
    if (!dt) {
      dt = '';
    }
    par.id_empresa = this.globslService.getIdEmpresa();
    par.id_resp = this.cel.id_resp;
    par.id_exec = this.cel.id_exec;
    par.data = dt;
    this.globslService.setSpin(true);
    this.inscricaoExecutadas = this.aponExecucaoService
      .getApoExecucoes_01(par)
      .subscribe(
        (data: ApoExecucaoModel01[]) => {
          this.globslService.setSpin(false);
          this.apontamentos = data;
          console.log(this.apontamentos);
        },
        (error: any) => {
          this.globslService.setSpin(false);
          this.apontamentos = [];
        }
      );
  }

  getfirstName(name: string): string {
    return getFirstName(name);
  }
}