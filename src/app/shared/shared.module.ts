import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinsComponent } from './spins/spins.component';
import { VersaoPipe } from './versao-pipe';
import { CelApontamentosComponent } from './cel-apontamentos/cel-apontamentos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { HoraSexagenalPipe } from './hora-sexagenal.pipe';
import { SimNaoPipe } from './sim-nao.pipe';
import { SituacaoTarefaTrabalhoPipe } from './situacao-Atividade-Projeto.pipe';
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
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
import { JustificativaPeriodoDialogComponent } from './justificativa-periodo-dialog/justificativa-periodo-dialog.component';
import { JustificativaRespexecDialogComponent } from './justificativa-respexec-dialog/justificativa-respexec-dialog.component';
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
  ],
})
export class SharedModule {}
