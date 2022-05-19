export class WeatherModel {
  constructor(
    public main: string,
    public description: string,
    public humidity: number,
    public temp: number
  ) {}
}
