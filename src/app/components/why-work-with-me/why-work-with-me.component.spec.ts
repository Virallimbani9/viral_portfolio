import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWorkWithMeComponent } from './why-work-with-me.component';

describe('WhyWorkWithMeComponent', () => {
  let component: WhyWorkWithMeComponent;
  let fixture: ComponentFixture<WhyWorkWithMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyWorkWithMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWorkWithMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
