import { Component, Input, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit {

  @Input('lables') doughnutChartLabels: Label[] = ['', '', ''];
  @Input('data') doughnutChartData: MultiDataSet = [[0, 0, 0],];
  @Input('title') title: string = 'no title'

  public colors: Color[] = [{
    backgroundColor: [
      '#6857E6',
      '#009FEE',
      '#F02059'
    ]
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
