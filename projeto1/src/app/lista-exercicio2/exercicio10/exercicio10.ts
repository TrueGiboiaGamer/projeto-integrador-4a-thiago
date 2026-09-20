import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-exercicio10',
  standalone: false,
  templateUrl: './exercicio10.html',
  styleUrl: './exercicio10.css'
})
export class Exercicio10 {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 100,
      quantidade: 5,
      promocao: false
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 50,
      quantidade: 10,
      promocao: true
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 800,
      quantidade: 3,
      promocao: false
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 150,
      quantidade: 4,
      promocao: true
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 200,
      quantidade: 2,
      promocao: false
    }
  ];

  alternarPromocao(produto: Produto) {
    produto.promocao = !produto.promocao;
  }

}