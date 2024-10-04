import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleAdapterComponent } from './toggle-adapter.component';

describe('ToggleAdapterComponent', () => {
  let component: ToggleAdapterComponent;
  let fixture: ComponentFixture<ToggleAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleAdapterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
