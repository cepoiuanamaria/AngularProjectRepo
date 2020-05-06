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
        name:'Doctor1',
        online:true
      },
      {
        name: 'Doctor2',
        online:false
      },
      {
        name: 'Doctor3',
        online:true
      },
      {
        name: 'Doctor4',
        online:false
      }
    ]
  }
}
