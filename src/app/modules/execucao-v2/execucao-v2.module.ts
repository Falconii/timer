import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecucaoV2RoutingModule } from './execucao-v2-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrudExecucaoComponent } from './crud-Execucao/crud-Execucao.component';
import { FacilitadorComponent } from './facilitador/facilitador.component';

@NgModule({
  declarations: [CrudExecucaoComponent, FacilitadorComponent],
  imports: [
    CommonModule,
    ExecucaoV2RoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
  ],
})
export class ExecucaoV2Module {}
