import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  private apiUrl = 'https://localhost:7290/api/GoogleCaptcha/verify-recaptcha-v2'; 

  constructor(private http: HttpClient) { }

  verifyRecaptcha(token: string) {
    return this.http.post(`${this.apiUrl}?token=${token}`, {});
  }
}
