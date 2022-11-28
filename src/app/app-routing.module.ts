import { AgendaAuditorModule } from './modules/agenda-auditor/agenda-auditor.module';
import { ExecucaoModule } from './modules/execucao/execucao.module';
import { DiganaoGuard } from './guards/diganao.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizacaoCadastralComponent } from './modules/usuario/crud-usuario/atualizacao-cadastral/atualizacao-cadastral.component';

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
    path: 'atualizacao/:id_empresa/:email',
    loadChildren: () =>
      import('./modules/usuario/usuario.module').then((m) => m.UsuarioModule),
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
    path: 'estruturas',
    loadChildren: () =>
      import('./modules/estrutura/estrutura.module').then(
        (m) => m.EstruturaModule
      ),
  },
  {
    path: 'projetos',
    loadChildren: () =>
      import('./modules/projeto/projeto.module').then((m) => m.ProjetoModule),
  },
  {
    path: 'execucao',
    loadChildren: () =>
      import('./modules/execucao/execucao.module').then(
        (m) => m.ExecucaoModule
      ),
  },
  {
    path: 'agendatrabalhos',
    loadChildren: () =>
      import('./modules/agenda-auditor/agenda-auditor.module').then(
        (m) => m.AgendaAuditorModule
      ),
  },
  {
    path: 'agendacoordenador',
    loadChildren: () =>
      import('./modules/agenda-coordenador/agenda-coordenador.module').then(
        (m) => m.AgendaCoordenadorModule
      ),
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('./modules/sobre/sobre.module').then((m) => m.SobreModule),
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
