import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
// Servicio que permite que se mantengan los ajustes que realice el usuario
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // valores por defecto, para determinar un tema, si no se ha seleccionado

  // ajustes es una propiedad de tipo objeto dentro de la cual se definen los valores por defecto

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.cargarAjustes();
  }

 //  Esta función agrega al local storage los ajustes
  guardarAjustes() {
    // console.log('Guardado en el local storage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }
 // Esta funcion carga al objeto ajustes lo que se encuentra en el local storage,
  // cuando este contenga algo
  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
     // console.log('cargando del local storage');
      //
      this.aplicarTema( this.ajustes.tema);
    } else {
      // si no existen valores dentro del local storage entonces se definen los valores por defecto
     // console.log('usando valores por defecto');
      this.aplicarTema( this.ajustes.tema);
    }

  }
  aplicarTema(tema: string) {
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
}

 // para que funcione el cargar ajustes tan pronto cargue la pagina
 // se debe inyectar el servicio en app.component

  // Restringe la forma de realizar los ajustes, en especial el tipo
  // de informacion que se debe recibir

interface Ajustes {
  temaUrl: string;
  tema: string;

  }

