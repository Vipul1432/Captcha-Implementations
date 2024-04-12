import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CaptchaService } from '../../services/captcha.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-re-captchav2',
  templateUrl: './re-captchav2.component.html',
  styleUrl: './re-captchav2.component.css'
})
export class ReCaptchav2Component {
  token: string | undefined;
  captchaSubscription: Subscription | undefined;

  constructor(private captchaService: CaptchaService) {
    this.token = undefined;
    this.captchaSubscription = undefined;
  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    this.captchaSubscription = this.captchaService.verifyRecaptcha(this.token!)
      .subscribe({
        next: () => {
          // Captcha verification successful
          console.log('Captcha verification successful');
        },
        error: (error) => {
          // Captcha verification failed
          console.error('Captcha verification failed', error);
        }
      });
  }

  ngOnDestroy() {
    if (this.captchaSubscription) {
      this.captchaSubscription.unsubscribe();
    }
  }
}
