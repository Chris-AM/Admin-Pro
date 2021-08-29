import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphycs1Component } from './graphycs1/graphycs1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent , data: {title: 'Dashboard'}},
      { path: 'progress', component: ProgressComponent , data: {title: 'Progress'}},
      { path: 'graphycs1', component: Graphycs1Component , data: {title: 'Graphycs 1'}},
      { path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'}},
      { path: 'promises', component: PromisesComponent, data: {title: 'Promises'}},
      { path: 'rxjs', component: RxjsComponent, data: {title: 'RxJS'}},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
