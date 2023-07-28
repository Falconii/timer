import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudExecucaoComponent } from './crud-Execucao/crud-Execucao.component';

const routes: Routes = [
  { path: '', redirectTo: 'execucoesv2', pathMatch: 'full' },
  { path: 'execucoesv2', component: CrudExecucaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExecucaoV2RoutingModule {}
