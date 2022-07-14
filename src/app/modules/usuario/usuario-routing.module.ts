import { UsuarioViewComponent } from './usuario-view/usuario-view.component';
import { CrudUsuarioComponent } from './crud-usuario/crud-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './usuario.guard';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  {
    path: 'usuarios',
    component: CrudUsuarioComponent,
  },
  {
    path: 'usuario/:id_empresa/:id/:acao',
    component: UsuarioViewComponent,
    canActivate: [UsuarioGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
