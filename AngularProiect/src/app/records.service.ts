import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {

   }
  getData(){
    return [
      {
        name:'Sam',
        online:true
      },
      {
        name: 'Bla',
        online:false
      },
      {
        name: 'Blo',
        online:true
      },
      {
        name: 'Blu',
        online:false
      }
    ]
  }
}
