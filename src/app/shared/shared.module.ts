import { VersaoPipe } from './versao-pipe';
import { CelApontamentosComponent } from './cel-apontamentos/cel-apontamentos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { HoraSexagenalPipe } from './hora-sexagenal.pipe';
import { SimNaoPipe } from './sim-nao.pipe';
import { SituacaoTarefaTrabalhoPipe } from './situacao-tarefa-trabalho.pipe';
import { SituacaoTrabalhoProjetoPipe } from './situacao-trabalho-projeto.pipe';
import { SituacaoProjetoPipe } from './situacao-projeto.pipe';
import { SubcontaPipe } from './subconta.pipe';
import { TipoContaPipe } from './tipo-conta.pipe';
import { SoHorasPipe } from './so-horas.pipe';
import { SituacaoPadraoPipe } from './situacao-padrao.pipe';
import { SharedNavegatorComponent } from './shared-navegator/shared-navegator.component';
import { MaterialModule } from '../material/material.module';
import { CelCalendarComponent } from './cel-calendar/cel-calendar.component';
import { AtivoPipe } from './ativo.pipe';

@NgModule({
  declarations: [
    FormDebugComponent,
    HoraSexagenalPipe,
    SimNaoPipe,
    SituacaoTarefaTrabalhoPipe,
    SituacaoTrabalhoProjetoPipe,
    SituacaoProjetoPipe,
    SubcontaPipe,
    TipoContaPipe,
    SoHorasPipe,
    VersaoPipe,
    SituacaoPadraoPipe,
    SharedNavegatorComponent,
    CelCalendarComponent,
    CelApontamentosComponent,
    AtivoPipe,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    FormDebugComponent,
    HoraSexagenalPipe,
    SimNaoPipe,
    SituacaoTarefaTrabalhoPipe,
    SituacaoTrabalhoProjetoPipe,
    SituacaoProjetoPipe,
    SubcontaPipe,
    TipoContaPipe,
    VersaoPipe,
    SoHorasPipe,
    AtivoPipe,
    SituacaoPadraoPipe,
    SharedNavegatorComponent,
    CelCalendarComponent,
    CelApontamentosComponent,
  ],
})
export class SharedModule {}
