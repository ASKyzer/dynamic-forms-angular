import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioAdapterComponent } from './radio-adapter.component';

describe('RadioAdapterComponent', () => {
  let component: RadioAdapterComponent;
  let fixture: ComponentFixture<RadioAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioAdapterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
