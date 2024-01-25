import { NgModule } from '@angular/core';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { userGuard } from './AuthGuard/user.guard';
import { JwtModule } from '@auth0/angular-jwt';

const routes: Routes = [
  { path: 'LogIn', component: LogInComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'UserDetails', canActivate:[userGuard],component:UserDetailsComponent}
];
@NgModule({
  declarations: [RegisterComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
      },
    }),
  ],
})
export class UserModuleModule {}
