import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NormalComponent } from './normal/normal.component';
import { TheatreComponent } from './theatre/theatre.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] } },
  { path: "theatre", component: TheatreComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_THEATRE'] } },
  { path: "normal", component: NormalComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_NORMAL'] } },
  { path: "login", component: LoginComponent },
  { path: "forbidden", component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
