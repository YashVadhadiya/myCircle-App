import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Post } from '../models/posts';
import { AppHttpService } from '../services/app-http.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  postListToDisplay: Array<Post>;
  isErrorInAPIres: boolean = false;
  page: number = 0;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private httpServices: AppHttpService
  ) {}

  ngOnInit() {
    this.page = 0;
    this.postListToDisplay = new Array<Post>();
    this.httpServices.getPostsList(this.page).subscribe(
      (data) => {
        this.postListToDisplay = data;
        console.log('USER--', this.postListToDisplay);
      },
      (err) => {
        this.isErrorInAPIres = true;
      }
    );
  }
 
  loadData(event: any) {
    console.log('evem', event);
    this.page = this.page + 1;
    this.httpServices.getPostsList(this.page).subscribe(
      (data) => {
        this.postListToDisplay = this.postListToDisplay.concat(data);
        console.log('USER12--', this.postListToDisplay);
        this.infiniteScroll.complete();
      },
      (err) => {
        this.isErrorInAPIres = true;
        this.infiniteScroll.complete();
      }
    );
  }

}
