import { NgModule} from '@angular/core';
// Modulos
import {SharedModule} from '../shared/shared.module';
// Rutas Hijas
import {PAGES_ROUTES} from './pages.route';

import {PagesComponent} from './pages.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {FormsModule} from '@angular/forms';
// ng 2 charts
import { ChartsModule } from 'ng2-charts';


//temporal
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
import {GraficaCircularComponent} from '../components/grafica-circular/grafica-circular.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficaCircularComponent
    ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]

})
export class PagesModule { }


