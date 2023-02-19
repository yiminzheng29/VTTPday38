import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { City } from './model/City';
import { CitiesRepository } from './services/cities.repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';

  cities: City[] = []
  sub$!:Subscription

  constructor(private router: Router, private citiesRepo: CitiesRepository) {}

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goAddCity() {
    this.router.navigate(['/add-city']);
  }

}
