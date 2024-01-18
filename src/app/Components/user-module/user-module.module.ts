import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule ,Routes} from '@angular/router';

const routes :Routes = [
  { path: 'LogIn', component: LogInComponent },
  { path: 'Register', component: RegisterComponent}
]
@NgModule({
  declarations: [
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModuleModule { }
