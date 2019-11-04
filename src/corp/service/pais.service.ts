import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Pais } from '../entidade/pais';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class PaisService  extends AbstractService<Pais>{

  constructor(restApi: RestApiService) {
    super(restApi,'/sfp/paises');
  }
  
}