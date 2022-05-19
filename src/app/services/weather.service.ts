import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private API_KEY: string = 'aae97860de78632108ecc73036d6d17c';
  private URL_WEATHER: string =
    'https://api.openweathermap.org/data/2.5/weather';
  private UNITS: string = '&units=metric';

  public constructor(private http: HttpClient) {}

  public getWeatherFromCity(city: string) {
    const url = `${this.URL_WEATHER}?q=${city}&appid=${this.API_KEY}${this.UNITS}`;
    return this.http.get<any[]>(url).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  public returnCities(): string {
    const cities = [
      'Madrid',
      'Barcelona',
      'Malaga',
      'Zaragoza',
      'Teruel',
      'Sevilla',
      'Asturias',
      'Valencia',
      'Burgos',
      'Soria',
      'Valladolid',
      'Santander',
      'Caracas',
      'Quito',
      'Roma',
      'Alicante',
      'Huelva',
    ];

    const random = Math.floor(Math.random() * cities.length);
    return cities[random];
  }
}
