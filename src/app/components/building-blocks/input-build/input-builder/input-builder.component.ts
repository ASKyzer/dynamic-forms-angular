import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { INPUT_BUILDER_CONFIG } from '../../../../constants/input-builder.constant';
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
  @Output() addField: EventEmitter<any> = new EventEmitter<any>();

  inputBuildForm: FormGroup = new FormGroup({});

  constructor(public formVisibilityService: FormVisibilityService) {
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
    if (this.inputBuildForm.valid) {
      this.addField.emit(
        this.isInput
          ? this.formatConfig(this.getFormValues())
          : this.getFormValues()
      );
    }
  }

  formatConfig(config: any) {
    return {
      controlName: config.controlName,
      label: config.label,
      type: config.fieldType,
      isRequired: config.requiredCheckbox,
      placeholder: config.placeholder,
      errorMessage: config.errorMessage,
      initialValue: config.initialValue,
      validation: this.configureValidation(config),
      ...(config.fieldType === 'textarea' ? { rows: config.rows || 4 } : {}),
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
