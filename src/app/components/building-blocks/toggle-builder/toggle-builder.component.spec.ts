import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleBuilderComponent } from './toggle-builder.component';

describe('ToggleBuilderComponent', () => {
  let component: ToggleBuilderComponent;
  let fixture: ComponentFixture<ToggleBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
