import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CabecalhoComponent } from './home/cabecalho/cabecalho.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    CabecalhoComponent
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
    AppRoutingModule,
    ReactiveFormsModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
