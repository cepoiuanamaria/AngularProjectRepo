import { Component } from '@angular/core';
import { RecordsService } from './records.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProiect';

  messages = this.http.get<any[]>('http:://localhost:4200');

  constructor(private http: HttpClient) {}
  post() {
    this.http.post<any>('http://localhost:4200/users' , {username: 'Diana', password: 'Diana'})
    .subscribe(next => console.log(next));

  }
  //records={}
  //constructor(private myFirstService: RecordsService){

 // }
 // ngOnInit(){
   // this.records= this.myFirstService.getData()
 // }

}
