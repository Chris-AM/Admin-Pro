import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-graphycs1',
  templateUrl: './graphycs1.component.html',
  styles: [
  ]
})
export class Graphycs1Component implements OnInit {

  
  public labels1: string[] = ['sample 1', 'sample 2', 'sample 3'];
  public data1 = [[350, 450, 100]];

  
  public labels2: string[] = ['sample 4', 'sample 5', 'sample 6'];
  public data2 = [[250, 450, 200]];

  
  public labels3: string[] = ['sample 7', 'sample 8', 'sample 9'];
  public data3 = [[150, 450, 300]];

  
  public labels4: string[] = ['sample 10', 'sample 11', 'sample 12'];
  public data4 = [[700, 100, 100]];

  get getFirstDoughnut (){
    return `${this.labels1} ${this.data1}`;
  }
  get getSecondDoughnut (){
    return `${this.labels2} ${this.data2}`;
  }
  get getThirdDoughnut (){
    return `${this.labels3} ${this.data3}`;
  }
  get getFourthDoughnut (){
    return `${this.labels4} ${this.data4}`;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
