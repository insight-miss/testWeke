import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {LoginComponent} from './login/login.component';
import {KeyupComponent} from './keyup/keyup.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent} ,
  { path: 'dashboard', component: DashboardComponent} ,
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'} ,
  { path: 'detail/:id' , component: HeroDetailComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'form' , component: KeyupComponent}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
