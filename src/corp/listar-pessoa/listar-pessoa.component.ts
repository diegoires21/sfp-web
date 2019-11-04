import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../entidade/pessoa';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.scss']
})
export class ListarPessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];
  displayedColumns: string[] = ['id', 'nome','cpf'];
  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoaService.findAll().then(e=>{
      this.pessoas = e;
    }).then(e=>{

    });
  }

}
