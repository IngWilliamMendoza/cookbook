import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparenceDirectiveComponent } from './apparence-directive.component';

describe('ApparenceDirectiveComponent', () => {
  let component: ApparenceDirectiveComponent;
  let fixture: ComponentFixture<ApparenceDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApparenceDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApparenceDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
