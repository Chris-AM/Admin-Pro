import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthRoutingModule } from './auth/auth.routing.module';

const routes: Routes = [
  

  

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule,
            AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
