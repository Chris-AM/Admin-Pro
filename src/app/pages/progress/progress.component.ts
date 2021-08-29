import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  progress1: number = 0;
  progress2: number = 0;

  get getProgress1 (){

    return `${this.progress1}%`

  }

  get getProgress2 (){

    return `${this.progress2}%`

  }

 

}
