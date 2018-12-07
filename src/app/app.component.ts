import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { MapaPage } from '../pages/mapa/mapa';
import { CamaraPage } from '../pages/camara/camara';
import { SQLite } from '@ionic-native/sqlite';
import { MyDbServiceProvider } from '../providers/my-db-service/my-db-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MapaPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public sqlite: SQLite, public productService: MyDbServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.createDatabase();
    });
  }
  private createDatabase(){
    this.sqlite.create({
      name: 'mydb.db',
      location: 'default'
    })
    .then((db) => {
      this.productService.setDatabase(db);
      return this.productService.createTable();
    })
    .catch(error =>{
      console.error(error);
    });
  }
}
