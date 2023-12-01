import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityCardComponent } from './city-card/city-card.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { LoaderState } from './loader/loader';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { ClockComponent } from './clock/clock.component';
import { DateComponent } from './date/date.component';
import { ErrorComponent } from './error/error.component';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HeaderComponent } from './header/header.component';
import { NgToggleModule } from 'ng-toggle-button';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CityCardComponent,
    LoaderComponent,
    WeatherComponent,
    ClockComponent,
    DateComponent,
    ErrorComponent,
    ForecastItemComponent,
    ForecastComponent,
    HeaderComponent,
    NotFoundComponent,
    SearchBoxComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgToggleModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
