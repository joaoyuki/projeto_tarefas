import { UsuarioModel } from './../../shared/model/usuarioModel';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {

    this.formLogin = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    })

  }

  logar() {
    const usuario = this.formLogin.get('usuario');
    const senha = this.formLogin.get('senha');

    console.log(btoa(usuario.value + ':' + senha.value ));

    if (this.formLogin.invalid) {
      this.messageService.add({severity: 'warn', summary: '', detail: 'Usuário e senha precisam ser preenchidos'});
      return ;
    }
    let usuarioModel: UsuarioModel = new UsuarioModel();
    usuarioModel.usuario = usuario.value;
    usuarioModel.senha = senha.value;
    this.usuarioService.setUser(usuarioModel);
    console.log('Logando com o usuário: ' + this.formLogin.get('usuario').value);
    this.router.navigate(['tarefas']);
  }

}
