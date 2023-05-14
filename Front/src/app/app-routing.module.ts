import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewExpComponent } from './componentes/experiencia/new-exp.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp.component';

const routes: Routes = [
  {path: '', component:PorfolioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'nuevaexp', component:NewExpComponent},
  {path: 'editarexp/:id', component:EditarExpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
