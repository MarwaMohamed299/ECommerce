import { NgModule } from '@angular/core';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule ,Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



const routes :Routes = [
  { path: 'LogIn', component: LogInComponent },
  { path: 'Register', component: RegisterComponent}
]
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModuleModule { }
