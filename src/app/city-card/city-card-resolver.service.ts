import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { WeatherService } from '../weather/weather.service';
import { EMPTY } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../weather/weather';

@Injectable({
  providedIn: 'root'
})
export class CityCardResolverService implements Resolve<Weather> {

  constructor(
    private weatherService: WeatherService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { 
    let id = activateRoute.snapshot;
    console.log(id);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | Weather {
    return this.weatherService.createResponseWeatherByCity(route.params['city'] || route.paramMap.get('city'))
      .catch((error: any) => {
        if (error.status === 404) {
          this.router.navigate(['/service/search'], { queryParams: { city: route.params['city'] } });
        }
      });
   
  }
}
