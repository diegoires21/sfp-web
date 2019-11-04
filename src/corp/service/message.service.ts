import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Message, MessageType } from '../entidade/message';
@Injectable()
export class MessageService {
  private subject = new Subject<Message>();
  private keepAfterRouteChange = false;
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.clear();
        }
      }
    });

  }
  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string, scope = null, keepAfterRouteChange = false) {
    this.alert(MessageType.Success, message, scope, keepAfterRouteChange);
  }

  error(message: string, scope = null, keepAfterRouteChange = false) {
    this.alert(MessageType.Error, message, scope, keepAfterRouteChange);
  }

  info(message: string, scope = null, keepAfterRouteChange = false) {
    this.alert(MessageType.Info, message, scope, keepAfterRouteChange);
  }

  warn(message: string, scope = null, keepAfterRouteChange = false) {
    this.alert(MessageType.Warning, message, scope, keepAfterRouteChange);
  }

  alert(type: MessageType, message: string, scope = null, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<Message>{ type: type, message: message, scope: scope });
  }
  clear() {
    // clear alerts
    this.subject.next();
  }

}
