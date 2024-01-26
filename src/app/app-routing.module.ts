import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ErrorComponent } from './Components/Error/error/error.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { ProducrDetailsComponent } from './Components/ProductDetails/ProductDetails.component';
import { AddComponent } from './Components/add/add.component';
import { EditProductComponent } from './Components/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'User',
    loadChildren: () =>
      import('./Components/user-module/user-module.module').then(
        (m) => m.UserModuleModule
      ),
  },
  { path: 'ProductDetails/:Id', component: ProducrDetailsComponent },
  { path: 'Edit/:Id', component: EditProductComponent },
  { path: 'Add', component: AddComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
