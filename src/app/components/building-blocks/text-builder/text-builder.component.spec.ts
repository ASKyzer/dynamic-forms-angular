import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBuilderComponent } from './text-builder.component';

describe('TextBuilderComponent', () => {
  let component: TextBuilderComponent;
  let fixture: ComponentFixture<TextBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
