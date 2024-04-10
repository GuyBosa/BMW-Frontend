import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AppService {  
    private url!: string;

  constructor(private httpClient: HttpClient) {    
  }

  getAllData(): Observable<{} | any[]> {   
    return this.httpClient.get('/assets/data/model-cart-data.json');
  } 
}
