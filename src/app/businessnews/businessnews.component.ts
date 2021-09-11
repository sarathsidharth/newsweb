import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  businessnewsDisplay:any=[]
  constructor(private _services:NewsapiserviceService) { }

  ngOnInit(): void {
    this._services.businessNews().subscribe((result)=>{
      this.businessnewsDisplay=result.articles;
    })
  }

}
