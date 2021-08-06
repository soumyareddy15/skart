
import { Component, OnInit } from '@angular/core';
//import { FormControl,FormGroup,Validators } from '@angular/forms';
//1
import { AbstractControl,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  
  //to represent form group elements
   /*loginform:FormGroup; 

   constructor() { 
     this.loginform=new FormGroup(
      { mailid:new FormControl(null,[Validators.required,Validators.email]),
        pwd:new FormControl(null,Validators.required)
      }
     );
   }*/

   loginform;
   constructor(private fb:FormBuilder) {
    this.loginform=this.fb.group(
      { mailid:['',[Validators.required,Validators.email]],
        pwd:['',[Validators.required]],
        age:['',[this.ageRangeValidator]]
      }
     )
   }
  ngOnInit(): void {
    
  }
 ageRangeValidator(control:AbstractControl):
 {
   [key:string]:boolean}|null
   {
     if(control.value !==undefined && (isNaN(control.value)|| control.value <18 || control.value>45)){
       return{'ageRange':true}
     }
     return null;
   }
 }

