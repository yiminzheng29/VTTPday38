import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SyncResult } from '../model/City';
import { Weather } from '../model/Weather';
import { CitiesRepository } from '../services/cities.repo';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy{
  
  OPENWEATHER_API_KEY = environment.openweather_api_key;
  city: string = "Singapore";
  countryName?: string
  imageUrl?: string
  model = new Weather("Singapore", "",0,0,0,"",0,0)
  params$!: Subscription

  constructor(private http: HttpClient, private weatherSvc: WeatherService, private activatedRoute: ActivatedRoute, private router: Router, private citiesRepo: CitiesRepository) {}

  ngOnInit(): void {
      console.log("ngOnInit...")
      this.params$ = this.activatedRoute.params.subscribe(
        (params) => {
          console.log("param val : " + params['city']);
          this.city = params['city']
        }
      )
      console.log(this.city)
      this.getWeatherFromAPI(this.city)
  }

  ngOnDestroy(): void {
      console.log("destroy subscription observable !")
      this.params$.unsubscribe();
  }

  getWeatherFromAPI(city: string) {
    this.weatherSvc.getWeather(city, this.OPENWEATHER_API_KEY)
      .then((result) => {
        this.model = new Weather(
          city,
          result.sys.country,
          result.main.temp,
          result.main.pressure,
          result.main.humidity,
          result.weather[0].description,
          result.wind.degree,
          result.wind.speed
        )
      }).catch((err)=>{
        console.log(err)
      })

  }


  sync() {
    console.log(">>> after sync: ", this.model)
    
    return firstValueFrom(
      this.http.post<any>('/api/weather', this.model)
    )
    }
    
  }

  // for all the results from API
  // sync(endoint: string, city: string, apiKey: string): Promise<void> {
  //       return this.getWeather(city, apiKey)
  //           .then(result => firstValueFrom(this.http.post<SyncResult>(endoint, result)))
  //           .then(result => {
  //               console.info(">>> after sync: ",result)
  //   })}
