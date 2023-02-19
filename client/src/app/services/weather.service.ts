import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, lastValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { City, SyncResult } from "../model/City";
import { CitiesRepository } from "./cities.repo";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(private httpClient: HttpClient, private citiesRepo: CitiesRepository, private http: HttpClient) {}

    getWeather(city: string, apiKey: string): Promise<any> {
        const params = new HttpParams()
            .set("q", city)
            .set("appid", apiKey);

        return lastValueFrom(this.httpClient.get(
            environment.openweather_api_url, {params: params}
        ))
    }

    addCity(city: City) {
        this.citiesRepo.addCity(city);
    }

}
