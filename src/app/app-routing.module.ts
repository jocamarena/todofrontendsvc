import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogginComponent } from './loggin/loggin.component';
import { LandingComponent } from './landing/landing.component';
import { ErrorComponent } from './error/error.component';
import { TodoComponent } from './todo/todo.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
// import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path : '', component: LandingComponent},
  {path : 'home', component: LandingComponent},
  {path : 'welcome/:name', component: WelcomeComponent},
  {path : 'loggin', component: LogginComponent},
  {path : 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path : 'todo', component: TodoComponent},
  {path : '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
