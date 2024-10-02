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
      const checkboxes = control as FormArray;
      const checked = checkboxes.controls.some((checkbox) => checkbox.value);

      return checked
        ? null
        : this.contentConfig.required
        ? { requireCheckbox: true }
        : null;
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
      this.parentForm?.addControl(this.contentConfig.controlName, formArray);
      formArray.setValidators(this.atLeastOneCheckboxCheckedValidator());
    } else {
      this.parentForm?.addControl(
        this.contentConfig.controlName,
        new FormControl(
          this.contentConfig.checked || false,
          this.contentConfig.required ? Validators.requiredTrue : null
        )
      );
    }
  }

  getFormArray(options: CheckboxOption[]) {
    return new FormArray<FormControl>(
      options.map(
        (option: CheckboxOption) => new FormControl(option.checked || false)
      )
    );
  }
}
