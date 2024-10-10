import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBuilderComponent } from './dropdown-builder.component';

describe('DropdownBuilderComponent', () => {
  let component: DropdownBuilderComponent;
  let fixture: ComponentFixture<DropdownBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
