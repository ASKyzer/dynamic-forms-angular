import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
  @Input() control!: FormControl;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() customErrorMessage: string = '';
  @Input() rows: number = 4;

  ngOnInit() {
    if (!this.control) {
      console.error('FormControl is required for InputFieldComponent');
    }
  }

  get errorMessage(): string {
    if (this.control.errors) {
      if (this.control.errors['required']) {
        return 'This field is required';
      }
      if (this.control.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (this.control.errors['minlength']) {
        return `Minimum length is ${this.control.errors['minlength'].requiredLength} characters`;
      }
      // Add more error types as needed
    }
    return '';
  }
}
