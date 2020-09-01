import { SignupComponent } from './home/signup/signup.component';
import { SigninComponent } from './home/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './shared/services/authguard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: SigninComponent },
    { path: 'sigup', component: SignupComponent }
  ]},
  { path: 'tarefas', component: TarefasComponent, canActivate: [AuthguardService] }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
