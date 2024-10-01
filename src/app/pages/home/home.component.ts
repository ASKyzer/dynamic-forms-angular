import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
          contentConfig: {
            label: 'First Name',
            type: 'text',
            controlName: 'firstName',
            required: true,
            validation: [
              {
                type: 'required',
              },
            ],
          },
          adapterType: 'input',
        },
        {
          contentConfig: {
            label: 'Last Name',
            type: 'text',
            controlName: 'lastName',
            required: true,
            validation: [
              {
                type: 'required',
              },
            ],
          },
          adapterType: 'input',
        },
      ],
    },
    {
      row: [
        {
          contentConfig: {
            label: 'Email',
            type: 'email',
            controlName: 'email',
            required: true,
            validation: [
              {
                type: 'required',
              },
              {
                type: 'email',
              },
            ],
          },
          adapterType: 'input',
        },
      ],
    },
    {
      row: [
        {
          contentConfig: {
            label: 'Password',
            type: 'password',
            controlName: 'password',
            required: true,
            validation: [
              {
                type: 'required',
              },
              {
                type: 'minlength',
                value: 8,
              },
            ],
          },
          adapterType: 'input',
        },
      ],
    },
    {
      row: [
        {
          contentConfig: {
            label: 'Phone',
            type: 'text',
            controlName: 'phone',
            placeholder: '123456789',
            required: true,
            validation: [
              {
                type: 'required',
              },
              {
                type: 'pattern',
                value: '^[0-9]{9}$',
              },
            ],
          },
          adapterType: 'input',
        },
      ],
    },
    {
      row: [
        {
          contentConfig: {
            label: 'Date of Birth',
            type: 'date',
            controlName: 'dateOfBirth',
            required: true,
            validation: [
              {
                type: 'required',
              },
            ],
          },
          adapterType: 'input',
        },
      ],
    },
    {
      row: [
        {
          contentConfig: {
            label: 'Website',
            type: 'url',
            controlName: 'website',
            placeholder: 'https://example.com',
            required: true,
            validation: [
              {
                type: 'required',
              },
              {
                type: 'pattern',
                value: '^https?://.+\\..+$',
              },
            ],
          },
          adapterType: 'input',
        },
      ],
    },
    {
      row: [
        {
          contentConfig: {
            label: 'Message',
            type: 'textarea',
            controlName: 'message',
            placeholder: 'Enter your message',
            required: true,
            validation: [
              {
                type: 'required',
              },
              {
                type: 'minlength',
                value: 10,
              },
            ],
          },
          adapterType: 'input',
        },
      ],
    },
  ];

  form = this.fb.group({});

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
