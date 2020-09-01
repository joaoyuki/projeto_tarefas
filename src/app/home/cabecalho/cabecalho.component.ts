import { UsuarioModel } from './../../shared/model/usuarioModel';
import { UsuarioService } from './../../shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  items: MenuItem[];
  usuarioModel$: Observable<UsuarioModel>;
  usuarioModel: UsuarioModel;

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.usuarioService.getUser().subscribe(usuario => {
      console.log('---- ' + usuario);
      this.usuarioModel = usuario;
    })
  }

  ngOnInit(): void {




    this.items = [
      {
          label: 'Terefas',
          items: [{
                  label: 'Novas',
                  icon: 'pi pi-fw pi-plus',
                  routerLink: 'tarefas'

              },
              {label: ''},
              {label: ''}
          ]
      },
      {
          label: 'Sair',
          icon: 'pi pi-fw pi-power-off'
      }
  ];

  }

}
