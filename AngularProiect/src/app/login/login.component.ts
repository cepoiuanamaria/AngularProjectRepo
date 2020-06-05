import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert: boolean = false;
  logging = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private Auth: AuthService) { }

  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault()
    const target=event.target
    const username=target.querySelector('#username').value
    const password=target.querySelector('#password').value
    
    this.Auth.getUserDetails(username,password)
    console.log(username,password)
    this.alert=true;
  }
  
  closeAlert(){
    this.alert=false;
  }

}