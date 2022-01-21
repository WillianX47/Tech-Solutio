import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TesteComponent } from './pages/teste/teste.component';
import { FormsModule } from '@angular/forms';
import { ExplorarComponent } from './pages/explorar/explorar.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TesteComponent,
    ExplorarComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ExplorarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
