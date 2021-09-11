import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }

  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=910ce3213e9f4c298724f99e26b8a5b6";
  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=910ce3213e9f4c298724f99e26b8a5b6";
  businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=910ce3213e9f4c298724f99e26b8a5b6";
  sportsApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=910ce3213e9f4c298724f99e26b8a5b6";

  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl)
  }
  techNews():Observable<any>{
    return this._http.get(this.techApiUrl)
  }
  businessNews():Observable<any>{
    return this._http.get(this.businessApiUrl)
  }
  sportsNews():Observable<any>{
    return this._http.get(this.sportsApiUrl)
  }

}
