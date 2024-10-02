import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputFieldComponent } from '../../input-field/input-field.component';

export interface InputAdapterContentConfig {
  label: string;
  type:
    | 'text'
    | 'email'
    | 'number'
    | 'tel'
    | 'textarea'
    | 'date'
    | 'password'
    | 'url';
  controlName: string;
  value: any;
  validation: any[];
  placeholder?: string;
  required?: boolean;
  customErrorMessage?: string;
  rows?: number;
}

const defaultContentConfig: InputAdapterContentConfig = {
  label: '',
  type: 'text',
  controlName: '',
  value: '',
  validation: [],
  placeholder: '',
  required: false,
  customErrorMessage: '',
  rows: 4,
};

@Component({
  selector: 'app-input-adapter',
  standalone: true,
  imports: [
    InputFieldComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    InputAdapterComponent,
  ],
  templateUrl: './input-adapter.component.html',
  styleUrl: './input-adapter.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class InputAdapterComponent {
  @Input() contentConfig: any;
  @Input() parentForm: FormGroup | any;

  ngOnInit() {
    if (!this.parentForm) {
      console.error('FormGroup is required for InputAdapterComponent');
    }
    this.contentConfig = { ...defaultContentConfig, ...this.contentConfig };

    this.parentForm?.addControl(
      this.contentConfig.controlName,
      new FormControl(this.contentConfig.value, this.getValidators())
    );
  }

  getValidators() {
    return this.contentConfig.validation.map((validation: any) => {
      switch (validation.type) {
        case 'required':
          return Validators.required;
        case 'email':
          return Validators.email;
        case 'minlength':
          return Validators.minLength(validation.value);
        case 'maxlength':
          return Validators.maxLength(validation.value);
        case 'pattern':
          return Validators.pattern(validation.value);
        case 'min':
          return Validators.min(validation.value);
        case 'max':
          return Validators.max(validation.value);
        case 'custom':
          return Validators.pattern(validation.value);
        default:
          return null;
      }
    });
  }
}
