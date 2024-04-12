import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReCaptchav3Component } from './re-captchav3.component';

describe('ReCaptchav3Component', () => {
  let component: ReCaptchav3Component;
  let fixture: ComponentFixture<ReCaptchav3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReCaptchav3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReCaptchav3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
