import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterSelectionComponent } from './adapter-selection.component';

describe('AdapterSelectionComponent', () => {
  let component: AdapterSelectionComponent;
  let fixture: ComponentFixture<AdapterSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdapterSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdapterSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
