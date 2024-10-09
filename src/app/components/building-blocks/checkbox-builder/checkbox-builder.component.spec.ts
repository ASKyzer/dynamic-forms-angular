import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxBuilderComponent } from './checkbox-builder.component';

describe('CheckboxBuilderComponent', () => {
  let component: CheckboxBuilderComponent;
  let fixture: ComponentFixture<CheckboxBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
