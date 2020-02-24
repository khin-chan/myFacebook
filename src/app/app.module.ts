import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { HomePage } from '../pages/home/home';
// import { TabsPage } from '../pages/tabs/tabs';
import { GroupPage } from '../pages/group/group';
import { WatchPage } from '../pages/watch/watch';
import { MenuPage } from '../pages/menu/menu';
import { SearchPage } from '../pages/search/search';
import { ProfilePage } from '../pages/profile/profile';
import { NotificationPage } from '../pages/notification/notification';
import { GeoLocationPage } from '../pages/geo-location/geo-location';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WatchListPage } from '../pages/watch-list/watch-list';
import { SuperTabsPage } from '../pages/super-tabs/super-tabs';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import {Geolocation} from "@ionic-native/geolocation";
import {BackgroundGeolocation} from "@ionic-native/background-geolocation";
import { LocationPage } from '../pages/location/location';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // TabsPage,
    SuperTabsPage,
    GroupPage,
    WatchPage,
    SearchPage,
    MenuPage,
    WatchListPage,
    ProfilePage,
    NotificationPage,
    LocationPage,
    QrcodePage,
    GeoLocationPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    NgxQRCodeModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // TabsPage,
    SuperTabsPage,
    GroupPage,
    WatchPage,
    SearchPage,
    MenuPage,
    WatchListPage,
    ProfilePage,
    NotificationPage,
    LocationPage,
    QrcodePage,
    GeoLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationTrackerProvider,
    BackgroundGeolocation,
    Geolocation,
    BarcodeScanner,
    
  ]
})
export class AppModule {}
