import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../services/app-http.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  tagList:Array<String>;
  constructor(private httpService:AppHttpService) {}

  ngOnInit(){
    this.httpService.getTagsList().subscribe(data=>{
      this.tagList=data;
    })
  } 
}
