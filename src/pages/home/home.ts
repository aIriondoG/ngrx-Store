import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
//Importaciones importantes
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ADD_PERSON, DELETE_PERSON, RESET, REMOVE_HOUR, ADD_HOUR, ADD } from '../../app/Base/reductores';
import { ModalPage } from '../modal/modal';
interface AppState {
  horas: number;
  p: any;
  a: any;

}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  horas$: any;
  p$: any;
  a$: any;
  people: any;
  mensaje = '';
  id: number = 1;
  constructor(private store: Store<AppState>, public modalCtrl: ModalController) {
    this.horas$ = store.select('horas');
    this.a$ = store.select('a');
    this.p$ = store.select('p').subscribe((people) => {
      this.people = people;
      if (this.people.id = null) {
        this.id = this.people.id;
      }

      console.log("--" + this.people.length);
      //sconsole.log(people);
    });
    //this.p$.unsubscribe();
    //console.log(this.personas$.name);
  }
  ver() {
    /*this.p$ = this.store.select('p').subscribe((people) => {
      this.people = people;
      //this.openModal(people);
      console.log("pipol: ");
      console.log(people);
    });
    this.p$.unsubscribe();*/
   // console.log(this.a$);
    this.store.select('a').subscribe((c) => {
      //this.people = people;
      console.log("array: "+c);
      //console.log(people);
    });
    //this.a$.unsubscribe();

  }
  arrar() {
    //let array=[{nombre: 'Nombre 1'},{nombre: 'Nombre 2'}];
    this.store.dispatch({ type: ADD, payload: this.mensaje });
  }
  anadir() {
    console.log("----");

    if (this.people.length == 0) {
      this.store.dispatch({ type: ADD_PERSON, payload: { id: this.id, name: this.mensaje } });
    } else {
      this.store.dispatch({ type: ADD_PERSON, payload: { id: this.id - 1, name: this.mensaje } });
    }
    this.id = this.id + 1;
  }
  increment() {
    this.store.dispatch({ type: ADD_HOUR });
  }
  decrement() {
    this.store.dispatch({ type: REMOVE_HOUR });
  }
  reset() {
    console.log(this.horas$);
    this.store.dispatch({ type: RESET });
  }
  openModal(datos) {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();

  }
}
