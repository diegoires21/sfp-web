import {Load} from '../entidade/load';
import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';

@Injectable()
export class LoadService {
  private subject = new Subject<Load>();
  constructor() {
  }

  getObservadores(): Observable<any> {
    return this.subject.asObservable();
  }
  show(): void {
    this.subject.next(<Load>{load: true});
  }
  hider(): void {
    this.subject.next(<Load>{load: false});
  }

}
