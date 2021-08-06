import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  constructor(private router : Router) { }
  useremail?: string;
  retaileremail?: string;
  adminemail?: string;
  name?: string;
  
  userlogged : boolean = false;

  userprofile : boolean = false;
  retailerprofile : boolean = false;

  ngOnInit(): void {
      }
  userprofilebut(){
    this.router.navigate(['userprofile']);
  }
  logoff(){
    this.userlogged = false;
    this.userprofile = false;
    alert("Successfully logged off");
    sessionStorage.clear();
    this.router.navigate(['home'])
  }
}

