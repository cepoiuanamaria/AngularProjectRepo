import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../records.service'

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor(private records:RecordsService) { }

  collection={};
  ngOnInit(): void {
    this.records.getData().subscribe((result)=>{
      console.warn(result)
      this.collection=result
    });
  }

}
