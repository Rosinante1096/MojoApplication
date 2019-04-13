import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';

const routes: Routes = [
  {path:'ingresos',component:IngresosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
