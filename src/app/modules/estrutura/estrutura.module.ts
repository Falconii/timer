import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstruturaRoutingModule } from './estrutura-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrudEstruturaComponent } from './crud-estrutura/crud-estrutura.component';
import { CrudViewEstruturaComponent } from './crud-view-estrutura/crud-view-estrutura.component';

@NgModule({
  declarations: [CrudEstruturaComponent, CrudViewEstruturaComponent],
  imports: [
    CommonModule,
    EstruturaRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
  ],
})
export class EstruturaModule {}
