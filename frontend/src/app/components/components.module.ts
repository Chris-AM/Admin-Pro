import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IteratorComponent } from './iterator/iterator.component';
import { FormsModule } from '@angular/forms';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IteratorComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports:[
    IteratorComponent,
    DoughnutComponent
  ]
})
export class ComponentsModule { }
