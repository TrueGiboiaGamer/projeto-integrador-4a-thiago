import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  standalone: false,
  templateUrl: './exercicio6.html',
  styleUrl: './exercicio6.css'
})
export class Exercicio6 {

  nomes = ['João', 'Maria', 'Carlos', 'Ana', 'Pedro'];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = ['João', 'Maria', 'Carlos', 'Ana', 'Pedro'];
  }
}