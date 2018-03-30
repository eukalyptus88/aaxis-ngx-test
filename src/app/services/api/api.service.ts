
import { environment } from 'environments/environment';

import { item, itemGroup, apiResult } from "./api.module";

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {

  }

  // API: GET /query/autocomplete?productNameContains={{input}}
  public queryAutoCompleteByProductName(input:string):Observable<any> {
    return this.http
    .get(API_URL + `/query/autocomplete?productNameContains=${input}`)
    .map(response => {
      const apiResult:apiResult = response.json().data;
      console.log(apiResult);
      const itemGroups:itemGroup[] = apiResult.itemsReturned.filter((itemGroup:itemGroup)=>{
        return itemGroup.items.length > 0;
      });
      console.log(itemGroups);
      const items:item[] = [].concat.apply([], itemGroups.map( (itemGroup)=>{ return itemGroup.items } ) );
      console.log(items);
      return items;
    })
    .catch((err) => { return this.handleError(err) });
  }

  // In a real world app, you might use a remote logging infrastructure
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body['error'] || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}