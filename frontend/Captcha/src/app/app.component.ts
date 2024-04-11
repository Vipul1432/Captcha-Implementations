import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CaptchaService } from '../services/captcha.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Captcha';

  token: string|undefined;

  constructor(private captchaService: CaptchaService) {
    this.token = undefined;
  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.log(`Token [${this.token}] generated`);
    this.captchaService.verifyRecaptcha(this.token!)
    .subscribe(
      () => {
        // Captcha verification successful
        console.log('Captcha verification successful');
      },
      (error) => {
        // Captcha verification failed
        console.error('Captcha verification failed', error);
      }
    );
  }
}
