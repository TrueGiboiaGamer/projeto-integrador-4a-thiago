import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing-module';
import { Listagem } from './listagem/listagem';

@NgModule({
  declarations: [Listagem],
  imports: [CommonModule, AlunoRoutingModule],
})
export class AlunoModule {}
