import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { BuddyProfilePage } from '../buddy-profile/buddy-profile.page';
import { Buddy } from '../models/buddy';
import { AppHttpService } from '../services/app-http.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Utils } from '../services/utils.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  userListToDisplay: Array<Buddy>;
  isErrorInAPIres: boolean = false;
  page: number = 0;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private httpServices: AppHttpService,
    private modalController: ModalController,
    private qrScanner: QRScanner,
    private utils:Utils
  ) {}

  ngOnInit() {
    this.page = 0;
    this.userListToDisplay = new Array<Buddy>();
    this.utils.presentLoading();
    this.httpServices.getBuddiesList(this.page).subscribe(
      (data) => {
        this.userListToDisplay = data;
        console.log('USER--', this.userListToDisplay);
        this.utils.dismissLoading();
      },
      (err) => {
        this.isErrorInAPIres = true;
        this.utils.dismissLoading();
      }
    );
  }
  openProfileView(buddy: Buddy) {
    this.utils.presentLoading();
    this.httpServices.getFullProfileDetail(buddy.id).subscribe(info=>{
      this.utils.dismissLoading();
      this.openModal(info);
    },err=>{
      this.utils.dismissLoading();
      this.utils.presentAlert('Error','','Couldn\'t find the buddy with id.' );
    })
  }

  async openModal(buddy: Buddy) {
    const modal = await this.modalController.create({
      component: BuddyProfilePage,
      cssClass: 'buddyProfileClass',
      swipeToClose: true,
      componentProps:{
        userProfileDetail:buddy
      }
    });
    return await modal.present();
  }

  loadData(event: any) {
    console.log('evem', event);
    this.page = this.page + 1;
    this.httpServices.getBuddiesList(this.page).subscribe(
      (data) => {
        this.userListToDisplay = this.userListToDisplay.concat(data);
        console.log('USER12--', this.userListToDisplay);
        this.infiniteScroll.complete();
      },
      (err) => {
        this.isErrorInAPIres = true;
        this.infiniteScroll.complete();
      }
    );
  }

  openScannerToSearchBuddy(){
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      console.log("PREPARED_____",status)
       if (status.authorized) {
         // camera permission was granted
         // start scanning
         let scanSub = this.qrScanner.scan().subscribe((text: string) => {
           console.log('Scanned something', text);
           let bud=new Buddy();
           bud.id=text;
           this.openProfileView(bud);
           this.qrScanner.hide(); // hide camera preview
           window.document.querySelector('ion-app').style.display='block';
           scanSub.unsubscribe(); // stop scanning
         },err=>{
           console.log('errr',err)
         });
         window.document.querySelector('ion-app').style.display='none';
         this.qrScanner.show();
       } else if (status.denied) {
         // camera permission was permanently denied
         // you must use QRScanner.openSettings() method to guide the user to the settings page
         // then they can grant the permission from there
       } else {
         // permission was denied, but not permanently. You can ask for permission again at a later time.
       }
    })
    .catch((e: any) => console.log('Error is', e));
  
  }
}
