import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  technewsDisplay:any=[];
  constructor(private _services:NewsapiserviceService) { }

  ngOnInit(): void {
    this._services.techNews().subscribe((result)=>{
      this.technewsDisplay=result.articles;
    })
  }

}
