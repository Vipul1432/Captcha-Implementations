import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { UserRegistrationModel } from '../models/UserRegistrationModel';
import { CaptchaService } from '../../services/captcha.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-re-captchav3',
  templateUrl: './re-captchav3.component.html',
  styleUrls: ['./re-captchav3.component.css']
})
export class ReCaptchav3Component implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  reCAPTCHAToken: string = "";
  tokenVisible: boolean = false;
  registrationInfo!: UserRegistrationModel;
  captchaSubscription: Subscription | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private recaptchaV3Service: ReCaptchaV3Service,
    private captchaService: CaptchaService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      UserName: [''],
      UserEmailId: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  onSubmit() {
    this.recaptchaV3Service.execute('importantAction').subscribe({
      next: (token: string) => {
        this.tokenVisible = true;
        this.captchaSubscription = this.captchaService.verifyv3Recaptcha(token)
          .subscribe({
            next: () => {
              // Captcha verification successful
              console.log('Captchav3 verification successful');
            },
            error: (error) => {
              // Captcha verification failed
              console.error('Captchav3 verification failed', error);
            }
          });
      },
      error: (error) => {
        console.error('Error while executing reCaptcha', error);
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the captcha subscription to avoid memory leaks
    if (this.captchaSubscription) {
      this.captchaSubscription.unsubscribe();
    }
  }
}
