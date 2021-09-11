import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {

  sportsnewsDisplay:any=[];
  constructor(private _services:NewsapiserviceService) { }

  ngOnInit(): void {
    this._services.sportsNews().subscribe((result)=>{
      this.sportsnewsDisplay=result.articles;
    })
  }

}
