import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAdapterComponent } from './input-adapter.component';

describe('InputAdapterComponent', () => {
  let component: InputAdapterComponent;
  let fixture: ComponentFixture<InputAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAdapterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
