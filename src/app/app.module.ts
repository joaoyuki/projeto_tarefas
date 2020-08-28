import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import {ToastModule} from 'primeng/toast';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TarefasComponent } from './tarefas/tarefas.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    TableModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
