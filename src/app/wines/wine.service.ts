
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class WineService {

  constructor(private http: Http) { }
   private usersUrl = 'http://api.wineta.com/swagger#!/Wine/getWines';

  getWines() {
    return this.http.get(this.usersUrl)
    .map(this.extractData)
  }

  private extractData(res: Response) {
    return res.json();
    
  }
  
}


