import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './org/routes/login/login.component';
import { HomeComponent } from './org/routes/home/home.component';
import { ProcedimientosComponent } from './org/routes/procedimientos/procedimientos.component';
import { EquipoComponent } from './org/routes/equipo/equipo.component';
import { PersonalComponent } from './org/routes/personal/personal.component';
import { DonativosComponent } from './org/routes/donativos/donativos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'process', component: ProcedimientosComponent},
  {path: 'stuff', component: EquipoComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'donativos', component: DonativosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
