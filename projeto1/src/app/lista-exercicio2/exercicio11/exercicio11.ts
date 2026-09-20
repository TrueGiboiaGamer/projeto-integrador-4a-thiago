import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-exercicio11',
  standalone: false,
  templateUrl: './exercicio11.html',
  styleUrl: './exercicio11.css'
})
export class Exercicio11 {

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
      quantidade: 0,
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
      quantidade: 0,
      promocao: false
    }
  ];

  somenteDisponiveis: boolean = false;

}