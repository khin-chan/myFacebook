import { Component, PlatformRef } from '@angular/core';
import { NavController,Platform,ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController,public platform:Platform,public actionsheetCtrl:ActionSheetController) {

  }
  actionHome() {
    let actionSheet = this.actionsheetCtrl.create({
     
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Save post',
          
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'bookmark' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Edit Post',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Edit Privacy',
          icon: !this.platform.is('ios') ? 'lock' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Hide From timeline',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Turn off notifications for this post',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'notifications' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();}
    coverPhoto(){
    let actionSheet1 = this.actionsheetCtrl.create({
     
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'View Profile Cover',
          
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-image-outline' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Upload Photo',
          icon: !this.platform.is('ios') ? 'arrow-up' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Select Photo on Facebook',
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Create Cover Collage',
          icon: !this.platform.is('ios') ? 'grid' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Select Artwork',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'brush' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet1.present();
  }
}


