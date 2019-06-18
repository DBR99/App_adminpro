import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-grafica-circular',
  templateUrl: './grafica-circular.component.html',
})
export class GraficaCircularComponent implements OnInit {
   @Input('chartLabels' )  DoughnutChartLabels: Label[] = [];
   @Input( 'chartData' )  DoughnutChartData: MultiDataSet = [];
   @Input('chartType')  DoughnutChartType: ChartType;

  constructor() {
    console.log(this.DoughnutChartLabels,this.DoughnutChartData,this.DoughnutChartType,"holaa");

    // tslint:disable-next-line:forin
    /*for (let grafico in this.graficos) {
      this.AsignarLeyenda.emit(this.graficos[grafico].leyenda);
      console.log(this.AsignarLeyenda);
    }*/
  }

  ngOnInit() {
  }
}
