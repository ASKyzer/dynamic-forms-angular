import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBuilderComponent } from './radio-builder.component';

describe('RadioBuilderComponent', () => {
  let component: RadioBuilderComponent;
  let fixture: ComponentFixture<RadioBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
