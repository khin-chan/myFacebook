import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { TabsPage } from '../pages/tabs/tabs';
import { SuperTabsPage } from '../pages/super-tabs/super-tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SuperTabsPage;

  constructor(platform: Platform,private statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      splashScreen.hide();
    });

    this.statusBar.overlaysWebView(true);
    // this.statusBar.backgroundColorByHexString('#ffffff');
  }
}
