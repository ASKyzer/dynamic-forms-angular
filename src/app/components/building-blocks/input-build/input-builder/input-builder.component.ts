import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { INPUT_BUILDER_CONFIG } from '../../../../constants/input-builder.constant';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { FormVisibilityService } from '../../../../services/form-visibility.service';
import { AdapterSelectionComponent } from '../../../adapters/adapter-selection/adapter-selection.component';
import { ButtonComponent } from '../../../button/button.component';

@Component({
  selector: 'app-input-builder',
  standalone: true,
  imports: [AdapterSelectionComponent, ButtonComponent],
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
    console.log(
      '🚀 ~ InputBuilderComponent ~ getFormValues ~ this.inputBuildForm.value:',
      this.inputBuildForm.value
    );
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

  formatConfig(config: any) {
    const conditions = config.fieldControlName0
      ? { conditions: this.formBuilderService.getConditions(config) }
      : {};

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
      ...conditions,
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

  clearForm() {
    this.inputBuildForm.reset();
  }
}
