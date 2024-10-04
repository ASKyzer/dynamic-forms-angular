import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputBuilderComponent } from './input-builder.component';

describe('InputBuilderComponent', () => {
  let component: InputBuilderComponent;
  let fixture: ComponentFixture<InputBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
