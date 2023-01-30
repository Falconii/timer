import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjetoViewComponent } from './projeto-view/projeto-view.component';
import { CrudProjetoComponent } from './crud-projeto/crud-projeto.component';
import {
  CrudAtividadeProjetoComponent,
  DialogOverviewExampleDialog,
} from './crud-atividade-projeto/crud-atividade-projeto.component';
import { CrudPlanejamentoLancamentoComponent } from './crud-planejamento-lancamento/crud-planejamento-lancamento.component';

@NgModule({
  declarations: [
    CrudProjetoComponent,
    ProjetoViewComponent,
    CrudAtividadeProjetoComponent,
    CrudPlanejamentoLancamentoComponent,
    DialogOverviewExampleDialog,
  ],
  imports: [
    CommonModule,
    ProjetoRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
  ],
})
export class ProjetoModule {}
