import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
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
export class CheckboxComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() control: FormControl = new FormControl();
  @Input() groupName!: string;
  @Input() groupLabel!: string;
  @Input() options!: CheckboxOption[];
  @Input() option!: CheckboxOption;
  @Input() isRequired = false;
  @Input() isGroup = false;
  @Input() isDisabled = false;
  @Input() errorMessage = 'Please select at least one option';
  @Input() removeBottomMargin = false;
  @Input() margin = '4';

  ngOnInit() {
    if (!this.control) {
      console.error('FormControl is required for InputFieldComponent');
    }
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.parentForm.get(
      this.controlName
    ) as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: AbstractControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
