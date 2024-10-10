import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterSelectorComponent } from './adapter-selector.component';

describe('AdapterSelectorComponent', () => {
  let component: AdapterSelectorComponent;
  let fixture: ComponentFixture<AdapterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdapterSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdapterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
