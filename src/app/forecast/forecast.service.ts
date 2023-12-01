import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';

import { Observable, interval, throwError } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import { AppService } from '../shared/services/app.service';
//import { WeatherService } from '../weather/weather.service';
//import { HelperService } from '../shared/services/helper.service';
//import { WeatherIconsService } from '../shared/services/weather-icons/weather-icons.service';




import { apiConfig } from './../config';
import { Forecast } from './forecast';
import {AppService} from './../shared/services/app.service';
import { WeatherService } from './../weather/weather.service';
import { HelperService } from './../shared/services/helper.service';
import {WeatherIconsService} from './../shared/services/weather-icons/weather-icons.service';



@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private forecastUpdateInterval = apiConfig.updateInterval.forecast;
  private unitSystem: string;

  constructor(
    private http: HttpClient,
    private appService: AppService,
    private weatherService: WeatherService,
    private weatherIconsService: WeatherIconsService,
    private helperService: HelperService
  ) {
    this.unitSystem = appService.getUnitSystem();
  }

  // getForecastByCity(city: string): Observable<any> {
  //   return Observable.interval(this.forecastUpdateInterval).startWith(0)
  //     .switchMap(() =>
  //       this.http.get(
  //         `${apiConfig.host}/forecast/daily?q=${city}&appid=${apiConfig.appId}&units=${this.unitSystem}&cnt=${apiConfig.amountForecastDays}`
  //       )
  //         .map((response: Response) => response.json())
  //         .map((data) => data.list)
  //         .catch(this.handleError)
  //     );
  // }

  getForecastByCity(city: string): Observable<any> {
    return interval(this.forecastUpdateInterval).pipe(
      startWith(0),
      switchMap(() => 
        this.http.get<any>(`${apiConfig.host}/forecast/daily?q=${city}&appid=${apiConfig.appId}&units=${this.unitSystem}&cnt=${apiConfig.amountForecastDays}`).pipe(
          map(response => response.list),
          catchError(this.handleError)
        )
      )
    );
  }

  handleResponseForecastData(responseData: any): Forecast {
    const { dt, temp, weather } = responseData;
    const currentWeatherTimestamp = this.weatherService.getCurrentWeatherTimestamp();

    const currentDay = this.helperService.isItCurrentDayByTimestamps(dt, currentWeatherTimestamp);
    const date = dt * 1000;
    const iconClassname = this.weatherIconsService.getIconClassNameByCode(weather[0].id);
    const temperatureDay = Math.round(temp.day);
    const temperatureNight = Math.round(temp.night);

    return new Forecast(
      currentDay,
      date,
      iconClassname,
      temperatureDay,
      temperatureNight,
      weather[0].description
    );
  }

  // private handleError(error: any): Observable<any> {
  //   console.error('Error', error);
  //   return Observable.throw(error.message || error);
  // }

  private handleError(error: HttpErrorResponse) {
    // Error handling logic here
    //return throwError(() => new Error(error.message));
    return throwError(() => error);
  }

}




