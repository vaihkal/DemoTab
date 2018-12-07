import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  obj = {
    texto: "Otro texto"
  }

  constructor(public navCtrl: NavController) {

  }
  abrirMapa(){
    this.navCtrl.push(MapaPage,this.obj);
  }

}
