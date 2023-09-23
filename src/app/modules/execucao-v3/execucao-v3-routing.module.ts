import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudExecucaoComponent } from './crud-execucao/crud-execucao.component';

const routes: Routes = [
  { path: '', redirectTo: 'execucoesv3', pathMatch: 'full' },
  { path: 'execucoesv3', component: CrudExecucaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExecucaoV3RoutingModule {}
