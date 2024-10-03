import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderService } from '../../services/form-builder.service';
import { AdapterSelectionComponent } from '../adapters/adapter-selection/adapter-selection.component';
import { InputAdapterComponent } from '../adapters/input-adapter/input-adapter.component';
import { InputFieldComponent } from '../input-field/input-field.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    InputFieldComponent,
    ReactiveFormsModule,
    CommonModule,
    InputAdapterComponent,
    AdapterSelectionComponent,
  ],
  templateUrl: './form.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormComponent {
  @Input() config: any = this.formBuilderService.getFormConfig();
  form = this.fb.group({});
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private formBuilderService: FormBuilderService
  ) {}

  onSubmit() {
    this.formSubmitted = true;
    this.form.markAllAsTouched();

    if (this.form.valid) {
      console.log('Form is valid:', this.form.getRawValue());
    } else {
      const form = document.querySelector('form');
      const firstInvalidElement = form?.querySelector(':invalid');

      if (firstInvalidElement) {
        firstInvalidElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        (firstInvalidElement as HTMLElement)?.focus();
      }
      console.log('Form is invalid', this.form.getRawValue());
      console.log('Form controls', this.form.controls);
    }
  }
}
