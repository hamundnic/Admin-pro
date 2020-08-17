import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


// ChildRoutes
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: '**', component: NopagefoundComponent},
  {path: '', redirectTo: '/dashboard' , pathMatch: 'full'}
]

@NgModule({
  
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule,
  AuthModule,
  AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
 