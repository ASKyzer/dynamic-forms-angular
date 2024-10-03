import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAdapterComponent } from './dropdown-adapter.component';

describe('DropdownAdapterComponent', () => {
  let component: DropdownAdapterComponent;
  let fixture: ComponentFixture<DropdownAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownAdapterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
