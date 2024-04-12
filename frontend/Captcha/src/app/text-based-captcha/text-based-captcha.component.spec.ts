import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBasedCaptchaComponent } from './text-based-captcha.component';

describe('TextBasedCaptchaComponent', () => {
  let component: TextBasedCaptchaComponent;
  let fixture: ComponentFixture<TextBasedCaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextBasedCaptchaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextBasedCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
