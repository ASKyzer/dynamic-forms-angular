import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

export interface CheckboxOption {
  checked?: boolean;
  label: string;
  value: string;
}

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  @Input() control: FormControl = new FormControl();
  @Input() controlName!: string;
  @Input() errorMessage = 'Please select at least one option';
  @Input() isDisabled = false;
  @Input() isRequired = false;
  @Input() label!: string;
  @Input() margin = '4';
  @Input() option!: CheckboxOption;
  @Input() parentForm!: FormGroup;

  ngOnInit() {
    if (!this.control) {
      console.error('FormControl is required for InputFieldComponent');
    }
  }
}
