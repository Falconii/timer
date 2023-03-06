import { ShowClienteDialogComponent } from './components/show-cliente-dialog/show-cliente-dialog.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SpinsComponent } from './spins/spins.component';
import { VersaoPipe } from './pipes/versao-pipe';
import { CelApontamentosComponent } from './components/cel-apontamentos/cel-apontamentos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './components/form-debug/form-debug.component';
import { HoraSexagenalPipe } from './pipes/hora-sexagenal.pipe';
import { SimNaoPipe } from './pipes/sim-nao.pipe';
import { SituacaoTarefaTrabalhoPipe } from './pipes/situacao-Atividade-Projeto.pipe';
import { SituacaoTrabalhoProjetoPipe } from './pipes/situacao-trabalho-projeto.pipe';
import { SituacaoProjetoPipe } from './pipes/situacao-projeto.pipe';
import { SubcontaPipe } from './pipes/subconta.pipe';
import { TipoContaPipe } from './pipes/tipo-conta.pipe';
import { SoHorasPipe } from './pipes/so-horas.pipe';
import { SituacaoPadraoPipe } from './pipes/situacao-padrao.pipe';
import { SharedNavegatorComponent } from './components/shared-navegator/shared-navegator.component';
import { MaterialModule } from '../material/material.module';
import { CelCalendarComponent } from './components/cel-calendar/cel-calendar.component';
import { AtivoPipe } from './pipes/ativo.pipe';
import { QuestionDialogComponent } from './components/question-dialog/question-dialog.component';
import { JustificativaPeriodoDialogComponent } from './components/justificativa-periodo-dialog/justificativa-periodo-dialog.component';
import { JustificativaRespexecDialogComponent } from './components/justificativa-respexec-dialog/justificativa-respexec-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeriodoDialogComponent } from './components/periodo-dialog/periodo-dialog.component';
import { RespExecDialogComponent } from './components/resp-exec-dialog/resp-exec-dialog.component';

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
    SpinsComponent,
    ProgressBarComponent,
    QuestionDialogComponent,
    JustificativaRespexecDialogComponent,
    JustificativaPeriodoDialogComponent,
    PeriodoDialogComponent,
    RespExecDialogComponent,
    ShowClienteDialogComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
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
    SpinsComponent,
    ProgressBarComponent,
    QuestionDialogComponent,
    JustificativaRespexecDialogComponent,
    JustificativaPeriodoDialogComponent,
    PeriodoDialogComponent,
    RespExecDialogComponent,
    ShowClienteDialogComponent,
  ],
})
export class SharedModule {}
