import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Cadastroaluno } from './aluno/cadastroaluno/cadastroaluno';
import { FormsModule } from '@angular/forms';
import { Cabecalho } from './cabecalho/cabecalho';
import { CardProduto } from './card-produto/card-produto';

@NgModule({
  declarations: [App, Cadastroaluno, Cabecalho, CardProduto],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
