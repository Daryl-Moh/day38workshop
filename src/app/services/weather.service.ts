import { HttpClient, HttpParams } from "@angular/common/http";
import { City } from "../model/city";
import { lastValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(private httpClient: HttpClient) { }

    getWeather(city: string, apiKey: string): Promise<any> {
        console.log("get weather");
        const params = new HttpParams()
            .set("q", city)
            .set("appid", apiKey);

        return lastValueFrom(this.httpClient
            .get("https://api.openweathermap.org/data/2.5/weather", { params: params }));
    }


}