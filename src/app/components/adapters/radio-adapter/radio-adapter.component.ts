import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RadioComponent, RadioOption } from '../../radio/radio.component';

export interface RadioAdapterOption {
  controlName: string;
  errorMessage?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  label: string;
  margin?: string;
  options: RadioOption[];
  orientation?: string;
}

@Component({
  selector: 'app-radio-adapter',
  standalone: true,
  imports: [RadioComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './radio-adapter.component.html',
})
export class RadioAdapterComponent {
  @Input() contentConfig: any;
  @Input() parentForm: any;

  constructor() {}

  ngOnInit() {
    this.contentConfig.options.forEach((option: RadioOption) => {
      option.checked = this.contentConfig.value === option.value;
    });

    this.initializeForm();
  }

  initializeForm() {
    this.parentForm.addControl(
      this.contentConfig.controlName,
      new FormControl(
        this.contentConfig.value,
        this.contentConfig.isRequired ? Validators.required : null
      )
    );
  }
}
