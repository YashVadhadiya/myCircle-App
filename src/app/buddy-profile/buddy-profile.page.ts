import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Buddy } from '../models/buddy';

@Component({
  selector: 'app-buddy-profile',
  templateUrl: './buddy-profile.page.html',
  styleUrls: ['./buddy-profile.page.scss'],
})
export class BuddyProfilePage implements OnInit {
  @Input() userProfileDetail:Buddy;
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
