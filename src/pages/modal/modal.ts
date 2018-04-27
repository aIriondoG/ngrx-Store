import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ADD_PERSON, DELETE_PERSON, RESET, REMOVE_HOUR, ADD_HOUR, ADD } from '../../app/Base/reductores';
interface AppState {
  horas: number;
  p: any;
  a:any;
}
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  p$: any;
  gente: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,private store: Store<AppState>) {
    this.p$ =  store.select('p').subscribe((people) => {
      this.gente = people[1];
      console.log("Modal: ");
      console.log(people[1].name);
    });
    //console.log(this.gente);
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }

}
