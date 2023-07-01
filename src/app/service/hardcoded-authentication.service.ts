import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    } else {
      return false;
    } 
  }
  isUserLoggedIn() {  
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
  getAuthenticatedUser()  {
    return sessionStorage.getItem('authenticaterUser');
  }
}
