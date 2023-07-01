import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit{
  username = 'myusername'
  password = 'mypassword'
  errorMessage = 'error: check credentials'
  invalidLogin = false
  
  constructor(private router: Router, 
    public defaultAuthService: HardcodedAuthenticationService){}
  ngOnInit(): void {
  }
  logInput(){
    console.log(this.username)
    // if (this.username !== null && this.username.length > 1 && this.password !== null){
    //   console.log('authenticated with valid credentials' + this.username)
    //   this.router.navigate(['welcome', this.username])
    // } else {
    //   console.log('invalid credential')
    //   this.invalidLogin = true
    //   this.router.navigate(['error'])
    // }
    if (this.defaultAuthService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
