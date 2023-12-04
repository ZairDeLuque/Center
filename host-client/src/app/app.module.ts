import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { KeyFilterModule } from 'primeng/keyfilter';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TooltipModule } from 'primeng/tooltip';
import { ChartModule } from 'primeng/chart';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './org/routes/login/login.component';
import { NavbarComponent } from './org/modules/navbar/navbar.component';
import { FooterComponent } from './org/modules/footer/footer.component';
import { HomeComponent } from './org/routes/home/home.component';
import { ProcedimientosComponent } from './org/routes/procedimientos/procedimientos.component';
import { EquipoComponent } from './org/routes/equipo/equipo.component';
import { CrearComponent } from './org/dialogs/crear/crear.component';
import { EditarComponent } from './org/dialogs/editar/editar.component';
import { EliminarComponent } from './org/dialogs/eliminar/eliminar.component';
import { PersonalComponent } from './org/routes/personal/personal.component';
import { DonativosComponent } from './org/routes/donativos/donativos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProcedimientosComponent,
    EquipoComponent,
    CrearComponent,
    EditarComponent,
    EliminarComponent,
    PersonalComponent,
    DonativosComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // PrimeNG
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    RippleModule,
    KeyFilterModule,
    ToastModule,
    TableModule,
    DynamicDialogModule,
    TooltipModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
