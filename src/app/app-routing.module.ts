import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BusinessServicePageComponent } from './business-service-page/business-service-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'business-services', component: BusinessServicePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
