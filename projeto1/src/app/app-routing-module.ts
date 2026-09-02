import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{

path: 'livros',
loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
},
{  
path: 'aluno',
loadChildren: () => import('./aluno/aluno-module').then(m => m.AlunoModule)
},

{
path: 'listaexc1',
loadChildren: () => import('./listaexc1/listaexc1-module').then(m => m.Listaexc1Module)
},


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

