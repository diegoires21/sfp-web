import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpsRequestInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
   ): Observable<HttpEvent<any>> {

   let dupReq =null;

      dupReq = req.clone({
        headers: req.headers.set('authorization','Basic YWRtaW46cGFzc3dvcmQ')
      });

   return next.handle(dupReq);
   }
}
