import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';


import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphycs1Component } from './graphycs1/graphycs1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';




@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  declarations: [
    DashboardComponent,
    Graphycs1Component,
    ProgressComponent,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    Graphycs1Component,
    ProgressComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ComponentsModule,

  ]
})
export class PagesModule { }
