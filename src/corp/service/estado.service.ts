import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { RestApiService } from './rest-api.service';
import { Estado } from '../entidade/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService  extends AbstractService<Estado>{

  constructor(restApi: RestApiService) {
      super(restApi,'/sfp/ufs')
   }

   findByPais(idPais: number): Promise<Estado[]>{
     return this.http.sendGet(`/sfp/paises/${idPais}/ufs`).toPromise().then(estados=> estados as Estado[]);
      
   }
   
}
