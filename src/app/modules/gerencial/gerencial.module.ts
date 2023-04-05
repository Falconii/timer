import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerencialRoutingModule } from './gerencial-routing.module';
import { ModeloAComponent } from './modelo-a/modelo-a.component';


@NgModule({
  declarations: [
    ModeloAComponent
  ],
  imports: [
    CommonModule,
    GerencialRoutingModule
  ]
})
export class GerencialModule { }
