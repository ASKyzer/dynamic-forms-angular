import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBuilderAdapterComponent } from './dropdown-builder-adapter.component';

describe('DropdownBuilderAdapterComponent', () => {
  let component: DropdownBuilderAdapterComponent;
  let fixture: ComponentFixture<DropdownBuilderAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownBuilderAdapterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownBuilderAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
