import { CrudProjetoComponent } from './crud-projeto/crud-projeto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoViewComponent } from './projeto-view/projeto-view.component';
import { CrudAtividadeProjetoComponent } from './crud-atividade-projeto/crud-atividade-projeto.component';
import { CrudPlanejamentoLancamentoComponent } from './crud-planejamento-lancamento/crud-planejamento-lancamento.component';
import { ManutAtividadeLoteComponent } from './manut-atividade-lote/manut-atividade-lote.component';
import { HorasDiretoriaComponent } from './horas-diretoria/horas-diretoria.component';

const routes: Routes = [
  { path: '', redirectTo: 'projetos', pathMatch: 'full' },
  { path: 'projetos', component: CrudProjetoComponent },
  { path: 'projeto/:id_empresa/:id/:acao', component: ProjetoViewComponent },
  {
    path: 'anexaratividade/:id_empresa/:id_projeto/:id_atividade',
    component: CrudAtividadeProjetoComponent,
  },
  {
    path: 'planejamentoagenda/:id_empresa/:id_atividade',
    component: CrudPlanejamentoLancamentoComponent,
  },
  {
    path: 'manuemlote/:id_empresa/:conta/:id_projeto',
    component: ManutAtividadeLoteComponent,
  },
  {
    path: 'horasdiretoria/:id_empresa/:id_projeto',
    component: HorasDiretoriaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetoRoutingModule {}