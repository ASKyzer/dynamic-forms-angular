import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxAdapterComponent } from './checkbox-adapter.component';

describe('CheckboxAdapterComponent', () => {
  let component: CheckboxAdapterComponent;
  let fixture: ComponentFixture<CheckboxAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxAdapterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
