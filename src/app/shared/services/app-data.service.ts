import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AppDataService {

  constructor(private http: Http) { }

  getItemData(): Observable<JSON> {
    return this.http.get('assets/sample.json')
        .map((response: Response) => {
            console.log("mock data" + response.json());
            return response.json();
        }
    )
} 


}
