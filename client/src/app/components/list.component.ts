import { Component, OnInit } from '@angular/core';
import { CitiesRepository } from '../services/cities.repo';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  cities: any

  constructor(private weatherSvc:WeatherService,
    private citiesRepo: CitiesRepository) {}

  async ngOnInit(): Promise<void> {
      this.cities = await this.citiesRepo.getAllCities()
  }
}
