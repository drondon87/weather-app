import { Component, OnInit } from '@angular/core';
import { WeatherModel } from '../../models/weather.model';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public city: string = '';
  public weather: WeatherModel;
  public showTempAlert: boolean = false;
  public showHumAlert: boolean = false;

  public constructor(private _weatherServices: WeatherService) {}

  public ngOnInit(): void {
    //setInterval(() => {
    this.city = this._weatherServices.returnCities();
    this._weatherServices.getWeatherFromCity(this.city).subscribe((w: any) => {
      this.weather = new WeatherModel(
        w.weather[0].main,
        w.weather[0].description,
        w.main.humidity,
        w.main.temp
      );
      this.showTempAlert = this.temperatureAlert(this.weather.temp);
      this.showHumAlert = this.humidityAlert(this.weather.humidity);
    });
    //}, 15000);
  }

  public temperatureAlert(temp: number): boolean {
    let showAlert: boolean = false;

    if (temp < 8 && temp > 28) {
      showAlert = true;
    }

    return showAlert;
  }

  public humidityAlert(humidity: number): boolean {
    let showAlert: boolean = false;

    if (humidity > 70) {
      showAlert = true;
    }

    return showAlert;
  }
}
