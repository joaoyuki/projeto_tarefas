import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/model/tarefa';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  constructor(
    private messageService: MessageService
    ) {}

  title = 'tarefas';
  descricao: string = '';

  tarefas: Tarefa[] = [];
  totalTarefasConcluidas: number = 0;

  ngOnInit(): void {
  }

  adicionar() {
    if (!this.descricao || !this.descricao.trim()) {
      this.messageService.add({severity:'warn', summary:'', detail:'Digite algo!'});
      return;
    }
    this.tarefas.push({ descricao: this.descricao, dataCriacao: new Date(), dataFinalizacao: null });
    this.descricao = '';

  }

  concluir(tarefa: Tarefa) {
    if (tarefa.dataFinalizacao) {
      return;
    }
    tarefa.dataFinalizacao = new Date();
    this.totalTarefasConcluidas = this.tarefas.filter(tarefa => tarefa.dataFinalizacao).length;

    this.verificarTotalTarefasConcluidas();
  }

  verificarTotalTarefasConcluidas() {
    if (this.totalTarefasConcluidas === this.tarefas.length) {
      this.messageService.add({severity:'success', summary:'', detail:'Uhul! Terminou todas as tarefas programadas para hoje! Bora tomar um café ou chá para relexar :)'});
    }
  }

}
