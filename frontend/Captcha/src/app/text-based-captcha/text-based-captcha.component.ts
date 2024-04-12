import { Component, OnInit } from '@angular/core';
import { NgxCaptchaService } from '@binssoft/ngx-captcha';

@Component({
  selector: 'app-text-based-captcha',
  templateUrl: './text-based-captcha.component.html',
  styleUrl: './text-based-captcha.component.css'
})
export class TextBasedCaptchaComponent implements OnInit {
  captchaStatus:any = null;
  captchaConfig:any = {
     type: 1, // 1 or 2 or 3 or 4
     length:6,
     cssClass:'custom',
     back: {
       stroke:"#2F9688",
       solid:"#f2efd2"
     } ,
     font:{
      color:"#000000",
      size:"35px"
     }
   };
  
   constructor(private captchaService:NgxCaptchaService){}
   ngOnInit() {
        this.captchaService.captchStatus.subscribe((status)=>{
          this.captchaStatus= status;
          if (!status) {
            alert("Opps!\nCaptcha mismatch");
          } else{
            alert("Success!\nYou are right");
          }
        });
   }
}
