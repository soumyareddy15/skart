import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  //loginForm: FormGroup;
  adminemail?:string;
  adminpassword?:string;

  constructor() {
    
   }

  ngOnInit(): void {
    
  }
 
  
}
