import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string='';
  altura:number=0;
  resultado:number=0;

  constructor() {}

  verificar() {
    if(this.radioSelecionada == 'homem'){
      this.resultado = 72.7 * this.altura - 58;
    } else {
      this.resultado = 62.1 * this.altura - 44.7;
    }
  }
}
