import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderService } from '../../services/form-builder.service';
import { FormVisibilityService } from '../../services/form-visibility.service';
import { AdapterSelectionComponent } from '../adapters/adapter-selection/adapter-selection.component';
import { InputAdapterComponent } from '../adapters/input-adapter/input-adapter.component';
import { InputFieldComponent } from '../input-field/input-field.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    InputFieldComponent,
    ReactiveFormsModule,
    CommonModule,
    InputAdapterComponent,
    AdapterSelectionComponent,
  ],
  templateUrl: './form.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormComponent {
  @Input() config: any = this.formBuilderService.getFormConfig();
  form = this.fb.group({});
  formSubmitted = false;
  validForm = false;
  fieldsWithConditions: any[] = [];

  constructor(
    private fb: FormBuilder,
    private formBuilderService: FormBuilderService,
    public formVisibilityService: FormVisibilityService
  ) {}

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.formVisibilityService.updateVisibility(this.config, this.form);
    });

    this.formVisibilityService.updateVisibility(this.config, this.form);
    this.fieldsWithConditions =
      this.formVisibilityService.findFieldsWithConditions(this.config.sections);

    setTimeout(() => {
      this.monitorConditionsChanges();
    }, 0);
  }

  monitorConditionsChanges() {
    this.fieldsWithConditions.forEach((field) => {
      this.form.get(field.conditions.field)?.valueChanges.subscribe((value) => {
        if (
          !this.evaluateCondition(
            value,
            field.conditions.operator,
            field.conditions.value
          )
        ) {
          this.form.get(field.config.controlName)?.setValue(null);
        }
      });
    });
  }

  private evaluateCondition(
    value: any,
    operator: string,
    comparisonValue: any
  ): boolean {
    switch (operator) {
      case '==':
        return value == comparisonValue;
      case '===':
        return value === comparisonValue;
      case '!=':
        return value != comparisonValue;
      case '!==':
        return value !== comparisonValue;
      case '>':
        return value > comparisonValue;
      case '>=':
        return value >= comparisonValue;
      case '<':
        return value < comparisonValue;
      case '<=':
        return value <= comparisonValue;
      default:
        return false;
    }
  }

  findAllControlNames(config: any): string[] {
    const controlNames: string[] = [];

    const traverse = (obj: any) => {
      if (Array.isArray(obj)) {
        obj.forEach((item) => traverse(item));
      } else if (typeof obj === 'object' && obj !== null) {
        if (obj.controlName) {
          controlNames.push(obj.controlName);
        }
        Object.values(obj).forEach((value) => traverse(value));
      }
    };

    traverse(config);
    return controlNames;
  }

  onSubmit() {
    this.formSubmitted = true;
    this.form.markAllAsTouched();

    if (this.checkFormValidity()) {
      console.log('Form is valid', this.form.getRawValue());
      this.validForm = true;
    } else {
      console.log('Form is invalid', this.form.getRawValue());
      const form = document.querySelector('form');
      const firstInvalidElement = form?.querySelector(':invalid');

      if (firstInvalidElement) {
        firstInvalidElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        (firstInvalidElement as HTMLElement)?.focus();
      }
      this.validForm = false;
    }

    setTimeout(() => {
      this.formSubmitted = false;
      this.validForm = false;
    }, 1000);
  }

  checkFormValidity() {
    const visibleControls = this.findAllControlNames(this.config).filter(
      (controlName) => {
        const visible = document.getElementById(controlName);
        return visible;
      }
    );

    return visibleControls.every((controlName) => {
      const control = this.form.get(controlName);
      return control?.valid;
    });
  }
}
