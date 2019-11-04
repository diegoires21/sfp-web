import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Cidade } from '../entidade/cidade';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class CidadeService extends AbstractService<Cidade>{

  constructor(rest: RestApiService) { 
      super(rest,'/sfp/cidades');
  }
  findByEstado(idUf: number): Promise<Cidade[]>{
      return this.http.sendGet(`/sfp/ufs/${idUf}/cidades`).toPromise().then(e=> e as Cidade[]);
  }
}
