import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

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
  @Input() groupLabel!: string;
  @Input() groupName!: string;
  @Input() isDisabled = false;
  @Input() isGroup = false;
  @Input() isRequired = false;
  @Input() label!: string;
  @Input() margin = '4';
  @Input() option!: CheckboxOption;
  @Input() options!: CheckboxOption[];
  @Input() parentForm!: FormGroup;

  ngOnInit() {
    if (!this.control) {
      console.error('FormControl is required for InputFieldComponent');
    }
    if (!this.parentForm.get(this.controlName)) {
      this.parentForm.setControl(this.controlName, new FormArray([]));
    }
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.parentForm.get(
      this.controlName
    ) as FormArray;
    const value = e.target.value;

    if (e.target.checked) {
      // Add a new FormControl if it's not already in the array
      if (!checkArray.controls.some((control) => control.value === value)) {
        checkArray.push(new FormControl(value));
      }
    } else {
      // Remove the FormControl from the array
      const index = checkArray.controls.findIndex(
        (control) => control.value === value
      );
      if (index !== -1) {
        checkArray.removeAt(index);
      }
    }

    // Trigger change detection
    this.parentForm.updateValueAndValidity();
  }
}
