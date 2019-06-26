import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {SettingsService} from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService ) {}

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {

    this.aplicarCheck(link);
    this._ajustes.aplicarTema( tema );
  }

  aplicarCheck(link: any) {
    // valida el selector
    // agrupa todos los elementos con la clase selector
    let selectores: any = document.getElementsByClassName('selector');
    // les remueve la clase working
    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    // le agrega la clase Working solo al elemento que tenga el hash en el html
    link.classList.add('working');
  }
  colocarCheck() {

    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    for ( let ref of selectores) {
    if (ref.getAttribute('data-theme') === tema) {
      ref.classList.add('working');
      break;
    }
    }
  }
}

// Barrer los elementos del selector y averiguar que tema coincide con el que esta seleccionado
