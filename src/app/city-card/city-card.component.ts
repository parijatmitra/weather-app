import { Weather } from '../weather/weather';

import { Component, Input, OnInit } from '@angular/core';
 import {  apiConfig} from './../config';


@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {
  @Input() weather!: Weather;
  @Input() unitSystem!: string ;

  constructor(
   
  ) { }
  

  measureOfTemp: string = '';
  measureOfWindSpeed: string = '';
  measureOfPressure: string = '';

  ngOnInit() {
    let measurementUnits = apiConfig.measurementUnits[this.unitSystem as keyof typeof apiConfig.measurementUnits];

    this.measureOfTemp = measurementUnits.temperature;
    this.measureOfWindSpeed = measurementUnits.windSpeed;
    this.measureOfPressure = measurementUnits.pressure;
  }
}
