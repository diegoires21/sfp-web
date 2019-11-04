import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManterPessoaComponent } from './manter-pessoa/manter-pessoa.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';


const routes: Routes = [
  {
    path: 'corp/manter-pessoa',
    component: ManterPessoaComponent
  },
  {
    path: 'corp/manter-pessoa/:id',
    component: ManterPessoaComponent
  },
  {
    path: 'corp/listar-pessoas',
    component: ListarPessoaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorpRoutingModule { }
