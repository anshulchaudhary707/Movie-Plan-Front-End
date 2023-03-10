import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://localhost:8080";
  requestHeader = new HttpHeaders(
    {
      "No-Auth": "True"
    }
  );
  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

  public login(loginData: any) {
    return this.httpClient.post(this.PATH_OF_API + "/free/login", loginData, { headers: this.requestHeader });
  }

  public roleMatch(allowedRole: string): boolean {
    const userRole = this.userAuthService.getRoles();
    if (userRole == allowedRole) {
      return true;
    }
    return false;
  }
}
