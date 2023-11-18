import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudExecucaoComponent } from './crud-Execucao/crud-Execucao.component';
import { CrudProjetoComponent } from '../projeto/crud-projeto/crud-projeto.component';
import { ProjetoViewComponent } from '../projeto/projeto-view/projeto-view.component';
import { FacilitadorComponent } from './facilitador/facilitador.component';

const routes: Routes = [
  { path: '', redirectTo: 'execucoesv2', pathMatch: 'full' },
  { path: 'execucoesv2', component: CrudExecucaoComponent },
  { path: 'execucoesv2/:data', component: CrudExecucaoComponent },
  { path: 'facilitador', component: FacilitadorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExecucaoV2RoutingModule {}
