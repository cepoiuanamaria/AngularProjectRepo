import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  url="http://localhost:3000/medicalcenter"
  rootUrl="http://localhost:3000/"
  constructor(private http: HttpClient) {

   }
  getData(){
    return this.http.get(this.url);
  }
  saveDoctors(data){
    return this.http.post(this.url,data)
  }
  deleteDoctor(id){
    return this.http.delete('${this.url}/${id}')
  }
  registerUser(data){
    return this.http.post(this.rootUrl+"users",data)
  }
}
