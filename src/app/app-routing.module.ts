import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PastMayorsComponent } from './pages/past-mayors/past-mayors.component';
import { CurrentMayorsComponent } from './pages/current-mayors/current-mayors.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"past-mayors", component:PastMayorsComponent},
  {path:"current-mayors", component:CurrentMayorsComponent},
  {path:"**", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
