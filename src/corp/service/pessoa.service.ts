import { Injectable } from '@angular/core';
import { Pessoa } from '../entidade/pessoa';
import { RestApiService } from './rest-api.service';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends AbstractService<Pessoa>{

  constructor(rest: RestApiService) { 
    super(rest,'/sfp/pessoas');
  }
  
}
