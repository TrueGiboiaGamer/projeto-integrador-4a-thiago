import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-exercicio14',
  standalone: false,
  templateUrl: './exercicio14.html',
  styleUrl: './exercicio14.css'
})
export class Exercicio14 {

  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Criar página inicial',
      responsavel: 'João',
      prioridade: 'alta',
      concluida: true
    },
    {
      id: 2,
      titulo: 'Cadastrar usuários',
      responsavel: 'Maria',
      prioridade: 'media',
      concluida: false
    },
    {
      id: 3,
      titulo: 'Testar sistema',
      responsavel: 'Carlos',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Corrigir erros',
      responsavel: 'Ana',
      prioridade: 'baixa',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Criar banco de dados',
      responsavel: 'Pedro',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Documentar projeto',
      responsavel: 'Lucas',
      prioridade: 'media',
      concluida: false
    }
  ];

  alterarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

}