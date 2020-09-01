import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsuarioModel } from '../model/usuarioModel';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioSubject = new BehaviorSubject<UsuarioModel>(null);

  constructor() { }

  getUser() {
    return this.usuarioSubject;
  }

  getUsuarioModel(): UsuarioModel {
    return this.usuarioSubject.value;
  }

  setUser(usuario) {
    this.usuarioSubject.next(usuario);
  }

  logout() {
    this.usuarioSubject.next(null);
  }

}
