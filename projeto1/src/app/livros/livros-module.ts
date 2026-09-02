import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { LivrosRoutingModule } from './livros-routing-module';
import { Cadastro } from './cadastro/cadastro';
import { Listagem } from './listagem/listagem';
import { BrowserModule } from '@angular/platform-browser';


@NgModule ({
  imports: [
    BrowserModule,
    FormsModule
  ]
}
)
@NgModule({
  declarations: [Cadastro, Listagem],
  imports: [CommonModule, LivrosRoutingModule],
})
export class LivrosModule {}
