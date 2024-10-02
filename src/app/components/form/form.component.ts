import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
  @Input() config: any;
  form = this.fb.group({});
  formSubmitted = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.formSubmitted = true;
    this.form.markAllAsTouched();

    if (this.form.valid) {
      console.log('Form is valid:', this.form.getRawValue());
      // Handle form submission logic here
    } else {
      console.log('Form is invalid', this.form.getRawValue());
    }
  }
}
