import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {  ClockService} from './clock.service';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {
  private _clockSubscription!: Subscription;
  time!: Date;

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    this._clockSubscription = this.clockService.getClock().subscribe(time => this.time = time);
  }

  ngOnDestroy(): void {
    this._clockSubscription.unsubscribe();
  }
}




