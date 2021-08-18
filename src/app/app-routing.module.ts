import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graphycs1Component } from './pages/graphycs1/graphycs1.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
 {path: 'dashboard', component: DashboardComponent},
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'progress', component: ProgressComponent},
 {path: 'graphycs1', component: Graphycs1Component},
 {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
 {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
