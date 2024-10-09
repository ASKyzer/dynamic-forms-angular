import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { INPUT_BUILDER_CONFIG } from '../../../../constants/input-builder.constant';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { FormVisibilityService } from '../../../../services/form-visibility.service';
import { AdapterSelectionComponent } from '../../../adapters/adapter-selection/adapter-selection.component';
@Component({
  selector: 'app-input-builder',
  standalone: true,
  imports: [AdapterSelectionComponent],
  templateUrl: './input-builder.component.html',
})
export class InputBuilderComponent {
  @Input() config: any = INPUT_BUILDER_CONFIG;
  @Input() isInput: boolean = false;
  @Output() addConditions: EventEmitter<any> = new EventEmitter<any>();
  @Output() addField: EventEmitter<any> = new EventEmitter<any>();

  inputBuildForm: FormGroup = new FormGroup({});

  constructor(
    public formVisibilityService: FormVisibilityService,
    private formBuilderService: FormBuilderService
  ) {
    this.inputBuildForm.valueChanges.subscribe(() => {
      this.formVisibilityService.updateVisibility(
        this.config,
        this.inputBuildForm
      );
    });
    this.formVisibilityService.updateVisibility(
      this.config,
      this.inputBuildForm
    );
  }

  public getFormValues() {
    console.log(this.inputBuildForm.value);
    return this.inputBuildForm.getRawValue();
  }

  onClick() {
    this.inputBuildForm.markAllAsTouched();
    if (
      this.formBuilderService.checkFormValidity(
        this.config,
        this.inputBuildForm
      )
    ) {
      this.addField.emit(
        this.isInput
          ? this.formatConfig(this.getFormValues())
          : this.getFormValues()
      );
    }
  }

  convertToBoolean(value: any) {
    if (!value) {
      return;
    }

    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else {
      return value;
    }
  }

  getConditions(config: any) {
    console.log(
      '🚀 ~ InputBuilderComponent ~ GET CONDITIONAAS ~ config:',
      config
    );
    const conditions =
      config.fieldControlName0 && config.operator0 && config.value0
        ? [
            {
              field: config.fieldControlName0,
              operator: config.operator0,
              value: this.convertToBoolean(config.value0),
            },
          ]
        : [];

    if (config.fieldControlName1 && config.operator1 && config.value1) {
      conditions.push({
        field: config.fieldControlName1,
        operator: config.operator1,
        value: this.convertToBoolean(config.value1),
      });
    }

    if (
      config.fieldControlName2 &&
      config.operator2 &&
      this.convertToBoolean(config.value2)
    ) {
      conditions.push({
        field: config.fieldControlName2,
        operator: config.operator2,
        value: this.convertToBoolean(config.value2),
      });
    }

    console.log(
      '🚀 ~ InputBuilderComponent ~ CONDITIONS IN GET CONDITIONS ~ conditions:',
      conditions
    );
    return conditions;
  }
  formatConfig(config: any) {
    return {
      config: {
        controlName: this.formBuilderService.removeAllWhitespace(
          config.controlName
        ),
        label: config.label,
        type: config.fieldType,
        isRequired: config.requiredCheckbox,
        placeholder: config.placeholder,
        errorMessage: config.errorMessage,
        initialValue: config.initialValue,
        validation: this.configureValidation(config),
        ...(config.fieldType === 'textarea' ? { rows: config.rows || 4 } : {}),
      },
      conditions: this.getConditions(config),
    };
  }

  configureValidation(config: any) {
    const validation: any = [];

    if (config.requiredCheckbox) {
      validation.push({ type: 'required' });
    }

    if (config.emailCheckbox) {
      validation.push({ type: 'email' });
    }

    if (config.minLengthCheckbox) {
      validation.push({ type: 'minlength', value: config.minLength });
    }

    if (config.maxLengthCheckbox) {
      validation.push({ type: 'maxlength', value: config.maxLength });
    }

    if (config.minCheckbox) {
      validation.push({ type: 'min', value: config.min });
    }

    if (config.maxCheckbox) {
      validation.push({ type: 'max', value: config.max });
    }

    if (config.patternCheckbox) {
      validation.push({ type: 'pattern', value: config.pattern });
    }

    return validation;
  }
}
