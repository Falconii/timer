import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloAComponent } from './modelo-a/modelo-a.component';

const routes: Routes = [
  { path: '', redirectTo: 'modeloa', pathMatch: 'full' },
  { path: 'modeloa', component: ModeloAComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerencialRoutingModule {}
