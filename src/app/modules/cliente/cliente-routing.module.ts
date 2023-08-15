import { ClienteViewComponent } from './cliente-view/cliente-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudClienteComponent } from './crud-cliente/crud-cliente.component';
import { ClienteGuard } from 'src/app/guards/cliente.guard';

const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  {
    path: 'clientes',
    component: CrudClienteComponent,
    canActivateChild: [ClienteGuard],
  },
  {
    path: 'cliente/:id_empresa/:id/:acao',
    component: ClienteViewComponent,
    canActivate: [ClienteGuard],
    canActivateChild: [ClienteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
