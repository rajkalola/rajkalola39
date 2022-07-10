import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdeshbordComponent } from './empdeshbord/empdeshbord.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: EmpdeshbordComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
