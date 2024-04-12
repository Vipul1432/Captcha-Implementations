import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings,  RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../Environment/environment';
import { HttpClientModule } from '@angular/common/http';
import { CaptchaService } from '../services/captcha.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ReCaptchav3Component } from './re-captchav3/re-captchav3.component';
import { TextBasedCaptchaComponent } from './text-based-captcha/text-based-captcha.component';
import {NgxCaptchaModule} from  '@binssoft/ngx-captcha';
import { ReCaptchav2Component } from './re-captchav2/re-captchav2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReCaptchav3Component,
    TextBasedCaptchaComponent,
    ReCaptchav2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    RecaptchaV3Module,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers: [
    CaptchaService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey2,
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
