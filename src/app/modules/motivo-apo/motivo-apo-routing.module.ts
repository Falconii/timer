import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudMotivoApoComponent } from './crud-motivo-apo/crud-motivo-apo.component';
import { MotivoApoViewComponent } from './motivo-apo-view/motivo-apo-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'motivos', pathMatch: 'full' },
  { path: 'motivos', component: CrudMotivoApoComponent },
  {
    path: 'motivo/:id_empresa/:codigo/:acao',
    component: MotivoApoViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotivoApoRoutingModule {}
