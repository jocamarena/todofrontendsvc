import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpringService } from '../service/data/spring.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = 'jose'
  message: string = 'Some Welcome Message';
  localDateTime: string = '';
  constructor(private route: ActivatedRoute,
    private springsvc: SpringService,
    private defaultAuthService: HardcodedAuthenticationService){}
  ngOnInit(): void {
    console.log('welcome component');
    console.log(this.route.snapshot.params['name']);
    // this.name = this.defaultAuthService.getAuthenticatedUser()?.toString();
  }
  springRestSvc(){
    this.springsvc.svcApi1().subscribe(
      response => this.processResonse(response),
      error => this.handleErrorResponse(error)
    );
  }
  springRestSvc2(){
    this.springsvc.svcApi2(this.name).subscribe(
      response => this.processResonse(response)
    );
  }
  processResonse(response: any){
    console.log(response.message);
    // this.name = response.name;
    this.message = response.message;
    this.localDateTime = response.localDateTime;
  }
  handleErrorResponse(error: any){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.message = 'Error Occured';
  }
}
