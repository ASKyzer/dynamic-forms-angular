import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../components/input-field/input-field.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputFieldComponent, ReactiveFormsModule],
  template: `
    <form
      [formGroup]="form"
      class="max-w-md mx-auto border p-4 rounded-md shadow-md"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <app-input-field
          label="First Name"
          type="text"
          [control]="form.controls['firstName']"
          placeholder="Enter your first name"
          [required]="true"
        >
        </app-input-field>

        <app-input-field
          label="Last Name"
          type="text"
          [control]="form.controls['lastName']"
          placeholder="Enter your last name"
          [required]="true"
        >
        </app-input-field>
      </div>

      <app-input-field
        label="Email"
        type="email"
        [control]="form.controls['email']"
        placeholder="Enter your email"
        [required]="true"
      >
      </app-input-field>

      <app-input-field
        label="Message"
        type="textarea"
        [control]="form.controls['message']"
        placeholder="Enter your message"
        [required]="true"
      >
      </app-input-field>
    </form>
  `,
})
export class HomeComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}
}
