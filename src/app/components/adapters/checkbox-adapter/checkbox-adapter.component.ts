import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  NO_ERRORS_SCHEMA,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  initializeFormControl() {
    this.parentForm.addControl(
      this.contentConfig.controlName,
      new FormControl(
        this.contentConfig.option.checked || false,
        this.contentConfig.isRequired ? Validators.requiredTrue : null
      )
    );
  }
}
