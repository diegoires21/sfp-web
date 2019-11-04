import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeaderValue } from '../entidade/header-value';
import { Pageable } from '../entidade/pageable';
@Injectable()
export class RestApiService {
  protected headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {

  }

  public sendFile(url: string, file: File, headersValue?: HeaderValue[]): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    let headerReq: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (headersValue != null) {
      headersValue.forEach(e => headerReq = headerReq.set(e.name, e.value));
    }

    const params = new HttpParams();
    const options = {
      params: params,
      reportProgress: true,
    };

    const req = new HttpRequest('POST', url, formData, options);
    return this.http.request(req);
    // return this.http.post(url, formData, { reportProgress: true });
  }
  public sendPost<O>(url: string, obj: O, headersValue?: HeaderValue[]): Observable<Object> {
    let headerReq: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (headersValue != null) {
      headersValue.forEach(e => headerReq = headerReq.set(e.name, e.value));
    }
    return this.http.post(url, JSON.stringify(obj), { headers: headerReq });
  }
  public sendFormUrlEncode<O>(url: string, obj: URLSearchParams, headersValue?: HeaderValue[]): Observable<Object> {
    let headerForm: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    if (headersValue != null) {
      headersValue.forEach(e => headerForm = headerForm.set(e.name, e.value));
    }
    let bodyRequest = '';
    if (obj) {
      bodyRequest = obj.toString();
    }
    return this.http.post(url, bodyRequest, { headers: headerForm });
  }

  public sendPut<O>(url: string, obj: O): Observable<Object> {
    return this.http.put(url, JSON.stringify(obj), { headers: this.headers });
  }
  public sendDelete<O>(url: string, body?): Observable<Object> {
    if (body) {
      // return this.http.delete(url, { headers: this.headers, observe: body });
      return this.http.request('delete', url, { headers: this.headers, body: body });
    } else {
      return this.http.delete(url, { headers: this.headers });
    }
  }
  public sendGetByEntity(url: string, obj?: any, headersValue?: HeaderValue[]) {
    const evilResponseProps = Object.keys(obj);
    let params = new HttpParams();
    for (const prop of evilResponseProps) {
      params = params.set(prop, obj[prop]);
    }
    return this.http.get(url, { params: params });
  }
  public sendGetByEntityPageAble(url: string, obj?: any, pageAble?: Pageable, headersValue?: HeaderValue[]) {
    const evilResponseProps = Object.keys(obj);
    let params = new HttpParams();
    for (const prop of evilResponseProps) {
      const value = obj[prop];
      if (value) {
        params = params.set(prop, obj[prop]);
      }
    }

    const pagesProperties = Object.keys(pageAble);
    for (const prop of pagesProperties) {
      const value = pageAble[prop];
      if (value) {
        params = params.set(prop, pageAble[prop]);
      }
    }
    return this.http.get(url, { params: params });
  }

  public sendGet(url: string, serchParametter?: URLSearchParams, headersValue?: HeaderValue[]): Observable<Object> {
    let headersReq: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (headersValue != null) {
      headersValue.forEach(e => headersReq = headersReq.set(e.name, e.value));
    }
    const parametterQuery: string = (serchParametter != null) ? '?' + serchParametter.toString() : '';
    return this.http.get(url + parametterQuery);
  }

  public sendGetDownload(url: string, serchParametter?: URLSearchParams, headersValue?: HeaderValue[]): Observable<Object> {
    let headersReq: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    if (headersValue != null) {
      headersValue.forEach(e => headersReq = headersReq.set(e.name, e.value));
    }
    const httpOptions = {
      responseType: 'blob' as 'json'
    };
    const parametterQuery: string = (serchParametter != null) ? '?' + serchParametter.toString() : '';
    return this.http.get(url + parametterQuery, httpOptions);
  }

}
