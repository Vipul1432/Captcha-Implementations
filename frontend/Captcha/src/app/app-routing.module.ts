import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReCaptchav3Component } from './re-captchav3/re-captchav3.component';

const routes: Routes = [
  { path: 'gcaptchav3', component: ReCaptchav3Component },
  //{ path: '', component: AppComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
