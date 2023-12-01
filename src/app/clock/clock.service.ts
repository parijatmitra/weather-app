import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private clock: Observable<Date>;

  constructor() {
   // this.clock = Observable.interval(1000).startWith(0).map(tick => new Date()).share();
   this.clock = interval(1000).pipe(
    startWith(0),
    map(tick => new Date()),
    share()
  );
  }

  getClock(): Observable<Date> {
    return this.clock;
  }
}


