import { RestApiService } from './rest-api.service';
import { Injectable } from '@angular/core';

import { HttpResponse } from '@angular/common/http';
import { Pageable } from '../entidade/pageable';
import { DataTable } from '../entidade/data-table';



@Injectable()
export class AbstractService<T> {
    http: RestApiService;
    protected headers = new Headers({ 'Content-Type': 'application/json' });
    api: string;
    constructor(http: RestApiService, api: string) {
        this.http = http;
        this.api = api;
    }
    findByEntity(obj: T): Promise<T[]> {

        return this.http.sendGetByEntity(this.api + 'enity', obj)
            .toPromise()
            .then(response => {
                return response as T[];
            });
    }
    findByEntityPageAble(obj: any, pageable: Pageable): Promise<DataTable<T>> {

        return this.http.sendGetByEntityPageAble(this.api + '/entity/paginator', obj, pageable)
            .toPromise()
            .then(response => {
                return response as DataTable<T>;
            });
    }
    findAll(): Promise<T[]> {
        return this.http.sendGet(this.api)
            .toPromise()
            .then(response => {
                return response as T[];
            });
    }
    findPageable(page: Pageable): Promise<DataTable<T>> {
        return this.http.sendGetByEntity(this.api + '/paginator/', page)
            .toPromise()
            .then(response => {
                return response as DataTable<T>;
            });
    }


    findById(id: number): Promise<T> {
        return this.http.sendGet(this.api  +'/'+ id)
            .toPromise()
            .then(response => {
                return response as T;
            });
    }
    public save<O>(obj: O): Promise<O> {
        return this.http
            .sendPost(this.api, obj)
            .toPromise()
            .then(res => {
                return res as O;
            })
            .catch(this.handleError);
    }

    public update<O>(obj: O): Promise<O> {
        return this.http
            .sendPut(this.api+'/'+obj['id'], obj)
            .toPromise()
            .then(res => {
                return res as O;
            })
            .catch(this.handleError);
    }
    public delete(id: string): Promise<any> {
        return this.http
            .sendDelete(this.api + id)
            .toPromise()
            .then(() => {

            })
            .catch(this.handleError);
    }
    public deleteAll(ids: number[]): Promise<any> {
        return this.http
            .sendDelete(this.api + 'all', ids)
            .toPromise()
            .then(resp => {
                return resp as T[];
            })
            .catch(this.handleError);
    }
    protected handleError(error: any): Promise<any> {
        const msg = error.error;
        return Promise.reject(msg || error);
    }

    public dynamicSort(property) {
        let sortOrder = 1;
        if (property[0] === '-') {
            sortOrder = -1;
            property = property.substr(1);
        }
        return (a, b) => {
            if (sortOrder === -1) {
                return b[property].localeCompare(a[property]);
            } else {
                return a[property].localeCompare(b[property]);
            }
        };
    }

    public doUpload(file: File, id: string, progCallBack?: Function): Promise<HttpResponse<T>> {
        const req = this.http.sendFile(this.api + 'upload/' + id, file);
        if (progCallBack) {
            req.subscribe((data: any) => progCallBack(data), err => console.error(err));
        }
        return req.toPromise()
            .then(response => {
                return response as HttpResponse<T>;
            });
    }

}
