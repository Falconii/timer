import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecucaoV3RoutingModule } from './execucao-v3-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrudExecucaoComponent } from './crud-execucao/crud-execucao.component';

@NgModule({
  declarations: [
    CrudExecucaoComponent
  ],
  imports: [
    CommonModule,
    ExecucaoV3RoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
  ],
})
export class ExecucaoV3Module {}
