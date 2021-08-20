import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IteratorComponent } from './iterator/iterator.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IteratorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    IteratorComponent
  ]
})
export class ComponentsModule { }
