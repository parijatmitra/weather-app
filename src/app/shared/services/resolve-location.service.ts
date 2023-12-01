import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs';

import { WeatherService } from '../../weather/weather.service';
@Injectable({
  providedIn: 'root'
})
export class ResolveLocationService implements Resolve<any> {
  constructor(
    private weatherService: WeatherService,
    private router: Router
  ) { };

  resolve(): Observable<any> { // TODO: I think, It shouldn't be so
    this.weatherService.getWeatherByСurrentLocation()
      .then((city) => {
  
        this.router.navigate([`/${city}`]);
      })
      .catch(error => console.error(error));

    return EMPTY;
  }
}
