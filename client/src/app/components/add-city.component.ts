import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from '../model/City';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit{

  form!: FormGroup
  countryName?: string
  city?: string
  imageUrl?: string
  cityObj?: City
  constructor(private fb: FormBuilder, private router: Router, private weatherSvc: WeatherService) {}

  ngOnInit(): void {
      this.form = this.createForm()
  }

  add() {
    const countryName = this.form?.value['countryName'];
    const city = this.form?.value['city'];
    const imageUrl = this.form?.value['imageUrl']
    this.cityObj = {country: countryName, city: city, imageUrl: imageUrl}
    this.weatherSvc.addCity(this.cityObj)
    this.router.navigate(['/'])
  }

  private createForm(): FormGroup {
    return this.fb.group({
      countryName: this.fb.control(''),
      city: this.fb.control(''),
      imageUrl: this.fb.control('')
    })
  }
  
}
