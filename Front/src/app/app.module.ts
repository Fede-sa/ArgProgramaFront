import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ACercaDeComponent } from './componentes/a-cerca-de/a-cerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ACercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    FooterComponent,
    PorfolioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
