import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReCaptchav2Component } from './re-captchav2.component';

describe('ReCaptchav2Component', () => {
  let component: ReCaptchav2Component;
  let fixture: ComponentFixture<ReCaptchav2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReCaptchav2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReCaptchav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
