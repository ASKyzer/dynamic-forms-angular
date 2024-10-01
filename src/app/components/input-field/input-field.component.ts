import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() control: FormControl = new FormControl();
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() customErrorMessage: string = '';
  @Input() rows: number = 4;

  ngOnInit() {
    if (!this.control) {
      console.error('FormControl is required for InputFieldComponent');
    }
  }

  getErrors(): string[] {
    if (this.control.errors) {
      return Object.keys(this.control.errors).map((key) => {
        switch (key) {
          case 'required':
            return 'Required field.';
          case 'email':
            return 'Please enter a valid email address.';
          case 'minlength':
            return `${this.label} must be at least ${this.control.errors?.['minlength']?.requiredLength} characters.`;
          case 'maxlength':
            return `${this.label} must be at most ${this.control.errors?.['maxlength']?.requiredLength} characters.`;
          case 'pattern':
            return `Please enter a valid ${this.label.toLowerCase()}.`;
          case 'min':
            return `${this.label} must be at least ${this.control.errors?.['min']?.min}.`;
          case 'max':
            return `${this.label} must be at most ${this.control.errors?.['max']?.max}.`;
          case 'custom':
            return this.customErrorMessage;
          default:
            return `Invalid ${this.label.toLowerCase()}.`;
        }
      });
    }
    return [];
  }
}
