import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: 'porfolio', component:PorfolioComponent},
  {path: 'login', component:LoginComponent},
  {path: '', redirectTo:'porfolio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
