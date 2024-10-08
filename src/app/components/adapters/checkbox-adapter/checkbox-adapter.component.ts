import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  NO_ERRORS_SCHEMA,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  CheckboxComponent,
  CheckboxOption,
} from '../../checkbox/checkbox.component';

export interface CheckboxAdapterConfig {
  controlName: string;
  parentForm: FormGroup;
  contentConfig: any;
  errorMessage?: string;
  isRequired?: boolean;
  isGroup?: boolean;
  options?: CheckboxOption[];
  option?: CheckboxOption;
  margin?: string;
  label?: string;
  type?: string;
}

@Component({
  selector: 'app-checkbox-adapter',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './checkbox-adapter.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CheckboxAdapterComponent implements OnInit {
  @Input() contentConfig: any;
  @Input() parentForm: FormGroup | any;

  ngOnInit() {
    if (!this.parentForm) {
      console.error('FormGroup is required for InputAdapterComponent');
    }

    this.initializeFormControl();
  }

  atLeastOneCheckboxCheckedValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control instanceof FormArray) {
        const checked = control.controls.some(
          (checkbox) => checkbox.value === true
        );

        return checked || !this.contentConfig.isRequired
          ? null
          : { required: true };
      }
      // If it's not a FormArray, return null (no error)
      return null;
    };
  }

  getValidators() {
    return this.contentConfig.validation.map((validation: any) => {
      switch (validation.type) {
        case 'requiredTrue':
          return Validators.requiredTrue;
        default:
          return null;
      }
    });
  }

  initializeFormControl() {
    if (this.contentConfig.isGroup) {
      const formArray = this.getFormArray(this.contentConfig.options);
      this.parentForm.addControl(this.contentConfig.controlName, formArray);
      formArray.setValidators(this.atLeastOneCheckboxCheckedValidator());
      formArray.updateValueAndValidity();
    } else {
      this.parentForm.addControl(
        this.contentConfig.controlName,
        new FormControl(
          this.contentConfig.option.checked || false,
          this.contentConfig.isRequired ? Validators.requiredTrue : null
        )
      );
    }
  }

  getFormArray(options: CheckboxOption[]) {
    return new FormArray(
      options.map(
        (option: CheckboxOption) => new FormControl(option.checked || false)
      )
    );
  }
}
