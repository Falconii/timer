import { DiganaoGuard } from './guards/diganao.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'empresas',
    loadChildren: () =>
      import('./modules/empresa/empresa.module').then((m) => m.EmpresaModule),
  },
  {
    path: 'clientes',
    loadChildren: () =>
      import('./modules/cliente/cliente.module').then((m) => m.ClienteModule),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./modules/usuario/usuario.module').then((m) => m.UsuarioModule),
    canActivate: [DiganaoGuard],
  },
  {
    path: 'economicos',
    loadChildren: () =>
      import('./modules/gru-eco/gru-eco.module').then((m) => m.GruEcoModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/gru-user/gru-user.module').then((m) => m.GruUserModule),
  },
  {
    path: 'motivos',
    loadChildren: () =>
      import('./modules/motivo-apo/motivo-apo.module').then(
        (m) => m.MotivoApoModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
