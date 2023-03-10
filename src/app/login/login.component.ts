import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private userAuthService: UserAuthService, private router: Router) { }

  login(loginForm: any) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setRoles(response.user.roles[0].name);
        this.userAuthService.setToken(response.token);
        const role = response.user.roles[0];
        console.log(role);
        if (role.id == 501) {
          this.router.navigate(['/admin']);
        }
        if (role.id == 502) {
          this.router.navigate(['/normal'])
        }
        if (role.id == 503) {
          this.router.navigate(['/theatre'])
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
