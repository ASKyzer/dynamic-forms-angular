import { CommonModule } from '@angular/common';
import { Component, Input, Optional, Self } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

export interface RadioOption {
  checked?: boolean;
  value: any;
  label: string;
}

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RadioComponent],
  templateUrl: './radio.component.html',
})
export class RadioComponent implements ControlValueAccessor {
  @Input() control: FormControl = new FormControl();
  @Input() controlName: string = '';
  @Input() errorMessage: string = '';
  @Input() isDisabled: boolean = false;
  @Input() isRequired: boolean = false;
  @Input() label: string = '';
  @Input() margin: string = '';
  @Input() options: RadioOption[] = [];
  @Input() orientation: string = '';
  @Input() parentForm: FormGroup = new FormGroup({});

  value: any;
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Implement if needed
  }

  onRadioChange(value: any): void {
    this.value = value;
    this.onChange(this.value);
    this.onTouched();
  }

  get isInvalid(): boolean {
    return (
      (this.ngControl?.invalid &&
        (this.ngControl?.touched || this.ngControl?.dirty)) ||
      false
    );
  }
}
