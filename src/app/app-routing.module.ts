import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePgComponent } from './view/home-pg/home-pg.component';
const routes: Routes = [
  {path:"",component:HomePgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
