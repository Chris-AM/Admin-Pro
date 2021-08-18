import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';



@NgModule({
  schemas:[
    NO_ERRORS_SCHEMA
  ],
  declarations: [
    BreadcrumsComponent,
    SidebarComponent,
    HeaderComponent,
  ],exports:[
    BreadcrumsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
