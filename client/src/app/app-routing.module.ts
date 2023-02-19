import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCityComponent } from './components/add-city.component';
import { ListComponent } from './components/list.component';
import { WeatherDetailsComponent } from './components/weather-details.component';

const routes: Routes = [
  {path:'', component: ListComponent},
  {path:'add-city', component: AddCityComponent},
  {path: 'weather/:city', component: WeatherDetailsComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
