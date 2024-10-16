import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FORM_SUCCESS_MODAL_CONFIG } from '../../constants/modal/form-success.constant';
import { JsonHighlightPipe } from '../../pipes/json-highlight.pipe';
import { FormBuilderService } from '../../services/form-builder.service';
import { FormVisibilityService } from '../../services/form-visibility.service';
import { ModalService } from '../../services/modal.service';
import { AdapterSelectionComponent } from '../adapters/adapter-selection/adapter-selection.component';
import { InputAdapterComponent } from '../adapters/input-adapter/input-adapter.component';
import { ButtonComponent } from '../button/button.component';
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
    ButtonComponent,
    JsonHighlightPipe,
  ],
  templateUrl: './form.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormComponent {
  @Input() config: any = this.formBuilderService.getFormConfig();
  @Input() isFromFormBuilder: boolean = false;
  @Input() isPreview: boolean = false;

  copiedSuccess = false;
  form = this.fb.group({});
  formSubmitted = false;
  validForm = false;
  fieldsWithConditions: any[] = [];
  visibleIndex: number | null = null;
  jsonView = false;

  constructor(
    private fb: FormBuilder,
    private formBuilderService: FormBuilderService,
    public formVisibilityService: FormVisibilityService,
    private modalService: ModalService
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

  onSubmit() {
    this.formSubmitted = true;
    this.form.markAllAsTouched();

    if (this.formBuilderService.checkFormValidity(this.config, this.form)) {
      console.log('Form is valid', this.form.getRawValue());
      this.validForm = true;
      this.modalService.openModal({
        title: 'Form Submitted',
        modalConfig: FORM_SUCCESS_MODAL_CONFIG,
        primaryButtonText: 'Close',
        secondaryButtonText: 'Reset Form',
        primaryAction: () => {
          this.modalService.closeModal();
        },
        secondaryAction: () => {
          this.modalService.closeModal();
          this.resetForm();
        },
        showCloseButton: false,
      });
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

  resetForm() {
    this.form.reset();
    this.formSubmitted = false;
    this.validForm = false;
    this.formVisibilityService.updateVisibility(this.config, this.form);
  }

  showJson(section: any, index: number) {
    this.visibleIndex = this.visibleIndex === index ? null : index;
    console.log({
      sections: section,
      index,
    });
  }

  copyJsonToClipboard() {
    const jsonString = JSON.stringify(this.config, null, 2);
    navigator.clipboard
      .writeText(jsonString)
      .then(() => {
        this.copiedSuccess = true;
        setTimeout(() => {
          this.copiedSuccess = false;
        }, 500);
      })
      .catch((err) => {
        console.error('Failed to copy JSON: ', err);
      });
  }

  viewJson() {
    this.jsonView = true;
  }

  closeJson() {
    this.jsonView = false;
  }
}
