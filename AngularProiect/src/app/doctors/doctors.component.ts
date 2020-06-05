import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../records.service'

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor(private records:RecordsService) { }

  collection:any={};
  ngOnInit(): void {
    this.records.getData().subscribe((result)=>{
      console.warn(result)
      this.collection=result
    });
  }
  deleteDoctor(item){
    this.collection.splice(item-1,1)
    this.records.deleteDoctor(item).subscribe((result)=>{
      console.warn("result",result)
    })
  }
}
