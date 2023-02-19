import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Dexie from "dexie";
import { firstValueFrom } from "rxjs";
import { City, SyncResult } from "../model/City";
import { Weather } from "../model/Weather";

@Injectable()
export class CitiesRepository extends Dexie {
    
    city!: Dexie.Table<City, string>

    constructor(private router: Router, private http: HttpClient) {
        super('citiesdb')
        this.version(1).stores({
            city: 'city'
        })
        this.city = this.table('city')
    }

    addCity(city: City): Promise<string> {
        return this.city.add(city)
    }

    getAllCities(): Promise<City[]> {
        return this.city.orderBy('city').toArray()
    }

    syncAsCityUrl(endpoint: string, city: City) {
        const params = new HttpParams()
            .set("city", city.city)
            .set("country", city.country)
            // .set("weather", weather.description)

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')

        return firstValueFrom(
            this.http.post<any>(endpoint, params.toString(), {headers})
        )
    }

    sync(endoint: string): Promise<void> {
        return this.getAllCities()
            .then(result => firstValueFrom(this.http.post<SyncResult>(endoint, result)))
            .then(result => {
                console.info(">>> after sync: ",result)
            })}
}