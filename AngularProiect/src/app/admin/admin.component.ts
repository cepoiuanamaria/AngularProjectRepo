import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {RecordsService} from '../records.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  alert:boolean=false;
  addDoctor=new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private records:RecordsService) { }

  ngOnInit(): void {
  }
  collectDoctors(){
    this.records.saveDoctors(this.addDoctor.value)
    this.alert=true
    this.addDoctor.reset({})
  }
  closeAlert(){
    this.alert=false
  }
}
