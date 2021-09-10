import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }

  newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=910ce3213e9f4c298724f99e26b8a5b6";

  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl)
  }
}
