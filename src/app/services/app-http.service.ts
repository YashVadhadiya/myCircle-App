import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { from, Observable } from 'rxjs';
import { buddyProfile, userList } from '../constants/api-dummy';
import { Buddy } from '../models/buddy';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/posts';

@Injectable({
  providedIn: 'root',
})
export class AppHttpService {
  headers: Headers;
  webHeaders={
    'Accept': 'application/json',
    'Content-Type':'application/json',
    'app-id':'60dc957c9419131bcaa97ab5'
  }
  constructor(private platform: Platform, private httpBrowser:HttpClient) {
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('app-id', '60dc957c9419131bcaa97ab5');
  }

  public getBuddiesList(page:number): Observable<Buddy[]> {
    let buddyList = new Array<Buddy>();
    let promise = new Promise<any>((resolve, reject) => {
      this.httpBrowser.get('https://dummyapi.io/data/api/user?limit=10&page='+page, {headers:this.webHeaders}).subscribe((data:any)=>{
        if(data && data.data.length>0){
          buddyList=data.data;
          resolve(buddyList);
        }
        else{
          reject('err');
        }
      })
    });
    return from(promise);
  }

  public getFullProfileDetail(profileId: string): Observable<Buddy> {
    let buddyInfo= new Buddy();
    let promise = new Promise<any>((resolve, reject) => {
      this.httpBrowser.get('https://dummyapi.io/data/api/user/' + profileId, {headers:this.webHeaders}).subscribe((data:any)=>{
        if(data){
          buddyInfo=data;
          resolve(buddyInfo);
        }
        else{
          reject('err');
        }
      })
    });
    return from(promise);
  }

  public getPostsList(page:number): Observable<Post[]> {
    let postList = new Array<Post>();
    let promise = new Promise<any>((resolve, reject) => {
      this.httpBrowser.get('https://dummyapi.io/data/api/post?limit=10&page='+page, {headers:this.webHeaders}).subscribe((data:any)=>{
        if(data && data.data.length>0){
          postList=data.data;
          resolve(postList);
        }
        else{
          reject('err');
        }
      })
    });
    return from(promise);
  }

  public getTagsList(): Observable<String[]> {
    let tagList = new Array<String>();
    let promise = new Promise<any>((resolve, reject) => {
      this.httpBrowser.get('https://dummyapi.io/data/api/tag?limit=100', {headers:this.webHeaders}).subscribe((data:any)=>{
        if(data && data.data.length>0){
          tagList=data.data;
          resolve(tagList);
        }
        else{
          reject('err');
        }
      })
    });
    return from(promise);
  }
}


