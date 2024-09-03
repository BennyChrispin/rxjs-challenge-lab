import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsChallengeComponent } from './rxjs-challenge.component';

describe('RxjsChallengeComponent', () => {
  let component: RxjsChallengeComponent;
  let fixture: ComponentFixture<RxjsChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
