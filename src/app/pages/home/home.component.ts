import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../components/input-field/input-field.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputFieldComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
    age: ['', [Validators.required, Validators.min(18), Validators.max(120)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    dateOfBirth: ['', [Validators.required]],
    website: ['', [Validators.pattern(/^https?:\/\/.+\..+$/)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

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
