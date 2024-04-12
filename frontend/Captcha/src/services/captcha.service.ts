import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  private apiUrl = 'https://localhost:7290/api/GoogleCaptcha/'; 

  constructor(private http: HttpClient) { }

  verifyRecaptcha(token: string) {
    return this.http.post(`${this.apiUrl}verify-recaptcha-v2?token=${token}`, {});
  }

  verifyv3Recaptcha(token: string) {
    return this.http.post(`${this.apiUrl}verify-recaptcha-v3?token=${token}`, {});
  }
}
