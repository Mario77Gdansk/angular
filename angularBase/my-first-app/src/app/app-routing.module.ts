import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MyOwnComponentNo2 } from './my-own-no2/my-own-no2.component';

const routes: Routes = [{
  path: '',  component: MyFirstComponentComponent},
  {path: 'dashboard', component: MyOwnComponentNo2}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
