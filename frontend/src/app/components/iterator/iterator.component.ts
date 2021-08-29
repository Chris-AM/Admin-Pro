import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-iterator',
  templateUrl: './iterator.component.html',
  styles: [
  ]
})
export class IteratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input('inputValue') progress: number = 0;
  @Input('bntClasses') btnClass: string = 'btn-primary';

  @Output() outPutValue: EventEmitter<number> = new EventEmitter();

  changeProgress(value: number){

    if(this.progress >= 100 && value >= 0){
      console.log(this.progress);
      this.outPutValue.emit(100)
      return this.progress = 100;
   
    }
    if(this.progress <= 0 && value < 0){
      console.log(this.progress);
      this.outPutValue.emit(0)
      return this.progress = 0;
   
    }
    console.log(this.progress);
    this.progress = this.progress + value;
    this.outPutValue.emit(this.progress);
  }

  onChange(newValue:number){
    if(newValue >=100){
      this.progress = 100
    }else if(newValue <=0 ){
      this.progress = 0
    }else{
      this.progress = newValue
    }
   this.outPutValue.emit(this.progress); 
  }
}
