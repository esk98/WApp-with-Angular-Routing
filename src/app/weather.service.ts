import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient ) {
    
  } 

  public getWeatherForCity( city: string ): Observable<any> {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ce8ded3ca4a3134b88d453f83e1e7ba2`
      return this.http.get(URL);
  };

  // public getWeatherForCity( city: string ): Observable<any> {
  //   const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ce8ded3ca4a3134b88d453f83e1e7ba2`
  //     return this.http.get(URL).pipe(
  //       map(data => ({
  //         ...data, 
  //         img: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  //       })),
  //     );
  // };
  // public getWeatherByGeo( lat: number, lon: number): Observable<any> {
  //   return this._http.get(
  //     `${this.geoURL}${lat}&lon=${lon}&units=metric&appid=${this.apiKEY}`
  //   )
  // }; https://api.openweathermap.org/data/2.5/weather?q=f92efd7aedf0c556c1b9edf282678ae6
}
