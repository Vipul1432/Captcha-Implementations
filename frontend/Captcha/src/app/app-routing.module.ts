import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReCaptchav3Component } from './re-captchav3/re-captchav3.component';
import { TextBasedCaptchaComponent } from './text-based-captcha/text-based-captcha.component';
import { ReCaptchav2Component } from './re-captchav2/re-captchav2.component';

const routes: Routes = [
  { path: 'gcaptchav2', component: ReCaptchav2Component },
  { path: 'gcaptchav3', component: ReCaptchav3Component },
  { path: 'textBasedCaptcha', component: TextBasedCaptchaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
