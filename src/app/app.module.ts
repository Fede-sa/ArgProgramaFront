import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoguinComponent } from './componentes/loguin/loguin.component';
import { ACercaDeComponent } from './componentes/a-cerca-de/a-cerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoguinComponent,
    ACercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
