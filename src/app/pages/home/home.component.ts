import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../components/input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { InputAdapterComponent } from '../../components/adapters/input-adapter/input-adapter.component';
import { AdapterSelectionComponent } from '../../components/adapters/adapter-selection/adapter-selection.component';
import { FORM_CONFIG } from '../../constants/form-config.constant';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InputFieldComponent,
    ReactiveFormsModule,
    CommonModule,
    InputAdapterComponent,
    AdapterSelectionComponent,
  ],
  templateUrl: './home.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  config = FORM_CONFIG;
  form = this.fb.group({});
  formSubmitted = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.formSubmitted = true;
    this.form.markAllAsTouched();

    if (this.form.valid) {
      console.log('Form is valid:', this.form.value);
      // Handle form submission logic here
    } else {
      console.log('Form is invalid');
    }
  }
}
