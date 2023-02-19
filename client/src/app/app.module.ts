import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list.component';
import { WeatherDetailsComponent } from './components/weather-details.component';
import { AddCityComponent } from './components/add-city.component';
import { CitiesRepository } from './services/cities.repo';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    WeatherDetailsComponent,
    AddCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CitiesRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
