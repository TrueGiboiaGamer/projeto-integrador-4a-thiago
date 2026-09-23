import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto1');


cabecalholoja = "Loja angular"


NomeProduto1 = 'Headseat Gamer';
precoProduto1 = '90';
disponivelProduto1 = 'sim';

NomeProduto2 = 'Teclado Gamer';
precoProduto2 = '250';
disponivelProduto2 = 'sim';

NomeProduto3 = 'Cadeira Gamer 850';
precoProduto3 = '90';
disponivelProduto3 = 'sim';







}
