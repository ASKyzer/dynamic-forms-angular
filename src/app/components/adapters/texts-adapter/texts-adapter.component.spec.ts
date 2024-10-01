import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsAdapterComponent } from './texts-adapter.component';

describe('TextsAdapterComponent', () => {
  let component: TextsAdapterComponent;
  let fixture: ComponentFixture<TextsAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextsAdapterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextsAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
