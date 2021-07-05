import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  public loader;
  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}
  async presentLoading() {
    this.loader = await this.loadingController.create({
      spinner: 'bubbles',
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await this.loader.present();
  }
  async dismissLoading() {
    console.log('Loading dismissed!');
    await this.loadingController.dismiss();
  }

  async presentAlert(headerText: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: headerText,
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
