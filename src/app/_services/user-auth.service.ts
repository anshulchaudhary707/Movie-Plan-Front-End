import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  private isLogged: boolean = false;

  public setRoles(roles: string) {
    localStorage.setItem("roles", roles);
    this.isLogged = true;
  }
  public getRoles(): string | null {
    return localStorage.getItem("roles");
  }
  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }
  public getToken(): string | null {
    return localStorage.getItem("jwtToken");
  }

  //clearing local storage
  public clear() {
    localStorage.clear();
    this.isLogged = false;
  }

  //whether user is logged in or not
  public isLoggedIn() {
    return this.isLogged;
  }
}
