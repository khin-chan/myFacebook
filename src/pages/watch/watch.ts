import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { WatchListPage } from '../watch-list/watch-list';
import { SearchPage } from '../search/search';


/**
 * Generated class for the WatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-watch',
  templateUrl: 'watch.html',
})
export class WatchPage {

 


 

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }
  alert(){
    const actionSheet = this.actionSheetCtrl.create({
      
      buttons: [
        
        {
          icon: 'md-bookmark',
          text: 'Save post',
        
          // role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },

        {
          icon: 'md-help-circle',
          text: 'Find Support or Report Post',
        },

        
        {
          icon: 'notifications',
          text: 'Turn on notifications for this post',
        },
        
        {
          icon: 'link',
          text: 'Copy Link',
          handler: () => {
            console.log('Archive clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  watchlist(){
    this.navCtrl.push(WatchListPage);
  }

  search(){
    this.navCtrl.push(SearchPage);
  }
  }


