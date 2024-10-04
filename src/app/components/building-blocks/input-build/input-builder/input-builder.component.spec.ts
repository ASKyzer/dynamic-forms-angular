import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBuildComponent } from './input-builder.component';

describe('InputBuildComponent', () => {
  let component: InputBuildComponent;
  let fixture: ComponentFixture<InputBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBuildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
