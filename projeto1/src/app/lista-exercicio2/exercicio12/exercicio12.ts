import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio12',
  standalone: false,
  templateUrl: './exercicio12.html',
  styleUrl: './exercicio12.css'
})
export class Exercicio12 {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      quantidade: 10
    }
  ];

  nome: string = '';
  quantidade: number = 0;
  mensagem: string = '';

  cadastrar() {

    if (this.nome == '' || this.quantidade < 0) {
      this.mensagem = 'Não foi possível realizar o cadastro.';
      return;
    }

    this.produtos.push({
      id: this.produtos.length + 1,
      nome: this.nome,
      quantidade: this.quantidade
    });

    this.nome = '';
    this.quantidade = 0;
    this.mensagem = '';
  }

  excluir(produto: Produto) {
    this.produtos = this.produtos.filter(p => p !== produto);
  }

}