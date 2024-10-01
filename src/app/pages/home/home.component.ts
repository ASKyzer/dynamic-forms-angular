import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../components/input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { InputAdapterComponent } from '../../components/adapters/input-adapter/input-adapter.component';
import { AdapterSelectionComponent } from '../../components/adapters/adapter-selection/adapter-selection.component';
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
  config = [
    {
      row: [
        {
          label: 'First Name',
          type: 'text',
          controlName: 'firstName',
          placeholder: 'Enter your first name',
          required: true,
          adapterType: 'input',
          columnSpan: '',
        },
        {
          label: 'Last Name',
          type: 'text',
          controlName: 'lastName',
          placeholder: 'Enter your last name',
          required: true,
          adapterType: 'input',
          columnSpan: '',
        },
        {
          label: 'Age',
          type: 'number',
          controlName: 'age',
          placeholder: 'Enter your age',
          required: true,
          adapterType: 'input',
          columnSpan: '',
        },
      ],
    },
    {
      row: [
        {
          label: 'Email',
          type: 'email',
          controlName: 'email',
          placeholder: 'Enter your email',
          required: true,
          adapterType: 'input',
          columnSpan: 'col-span-12, md:col-span-6',
        },
        {
          label: 'Password',
          type: 'password',
          controlName: 'password',
          placeholder: 'Enter your password',
          required: true,
          adapterType: 'input',
          columnSpan: 'col-span-12, md:col-span-4',
        },
      ],
    },
    {
      row: [
        {
          label: 'Phone',
          type: 'text',
          controlName: 'phone',
          placeholder: 'Enter your phone number',
          required: true,
          adapterType: 'input',
          columnSpan: '',
        },
        {
          label: 'Date of Birth',
          type: 'date',
          controlName: 'dateOfBirth',
          required: true,
          adapterType: 'input',
          columnSpan: '',
        },
      ],
    },
  ];

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

  ngOnInit(): void {
    console.log(this.form);
    console.log(this.config);
  }

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
