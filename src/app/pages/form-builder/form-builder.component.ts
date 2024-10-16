import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { InputAdapterComponent } from '../../components/adapters/input-adapter/input-adapter.component';
import { AdapterSelectorComponent } from '../../components/building-blocks/adapter-selector/adapter-selector.component';
import { CheckboxBuilderComponent } from '../../components/building-blocks/checkbox-builder/checkbox-builder.component';
import { DropdownBuilderComponent } from '../../components/building-blocks/dropdown-builder/dropdown-builder.component';
import { InputBuilderComponent } from '../../components/building-blocks/input-build/input-builder/input-builder.component';
import { RadioBuilderComponent } from '../../components/building-blocks/radio-builder/radio-builder.component';
import { TextBuilderComponent } from '../../components/building-blocks/text-builder/text-builder.component';
import { ToggleBuilderComponent } from '../../components/building-blocks/toggle-builder/toggle-builder.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { FormPreviewComponent } from '../../components/form-preview/form-preview.component';
import { InputFieldComponent } from '../../components/input-field/input-field.component';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { FORM_SAVED_SUCCESS_MODAL_CONFIG } from '../../constants/modal/form-saved-success.constant';
import { JsonHighlightPipe } from '../../pipes/json-highlight.pipe';
import { FormBuilderService } from '../../services/form-builder.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdapterSelectorComponent,
    InputFieldComponent,
    CheckboxComponent,
    InputAdapterComponent,
    InputBuilderComponent,
    TextBuilderComponent,
    ToggleBuilderComponent,
    CheckboxBuilderComponent,
    RadioBuilderComponent,
    DropdownBuilderComponent,
    FormPreviewComponent,
    JsonHighlightPipe,
    ToggleComponent,
    ButtonComponent,
  ],
  templateUrl: './form-builder.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormBuilderComponent implements OnInit {
  @ViewChild(InputBuilderComponent) public inputBuildComponent:
    | InputBuilderComponent
    | undefined;
  formConfig: any = { sections: [] };
  currentSection: any = null;
  currentAdapter: any = null;
  currentRow: any = null;
  currentField: any = null;
  showForm = false;
  builderForm: FormGroup = new FormGroup({});
  showFieldAddedPrompt: boolean = false;
  showFormPreview: boolean = false;
  toggleForm: FormGroup = new FormGroup({});
  copiedSuccess: boolean = false;

  constructor(
    private fb: FormBuilder,
    private formBuilderService: FormBuilderService,
    private router: Router,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.formConfig = { sections: [] };
    this.builderForm = this.fb.group({
      adapterType: ['', Validators.required],
      sectionTitle: ['', Validators.required],
    });

    this.toggleForm = this.fb.group({
      showRawJson: [false],
    });
  }

  get showRawJsonControl(): FormControl {
    return this.toggleForm.get('showRawJson') as FormControl;
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  startForm() {
    this.showForm = true;
    this.addSection();
  }

  addAdapter(adapterType: string) {
    this.currentAdapter = this.builderForm.get('adapterType')?.value;
  }

  addConditions(conditions: any) {
    this.currentField.conditions = conditions;
  }

  addSection() {
    this.currentSection = { hasRequiredFields: false, title: '', rows: [] };
  }

  addNewSection() {
    this.showFieldAddedPrompt = false;
    this.currentSection = null;
    this.currentRow = null;
    this.currentField = null;
    this.currentAdapter = null;
    this.builderForm.reset();
    this.resetFieldForm();
    this.addSection();
  }

  saveSectionTitle() {
    const sectionTitleControl = this.builderForm.get('sectionTitle');

    sectionTitleControl?.markAsDirty();
    sectionTitleControl?.markAsTouched();

    if (!sectionTitleControl?.value) {
      sectionTitleControl?.setErrors({ required: true });
      return;
    }

    if (sectionTitleControl?.valid) {
      this.currentSection.title = sectionTitleControl?.value;
      this.formConfig.sections.push(this.currentSection);
      if (this.currentSection.title) {
        this.addRow();
      }
    }
  }

  addRow() {
    this.currentRow = {
      fields: [],
    };
    this.currentSection.rows.push(this.currentRow);
  }

  addField(formData: any) {
    this.currentField = {
      adapterType: this.builderForm.get('adapterType')?.value,
      config: formData.config,
      conditions: formData.conditions,
    };

    if (this.currentField.config.isRequired) {
      this.currentSection.hasRequiredFields = true;
    }

    this.currentRow.fields.push(this.currentField);
    this.showFieldAddedPrompt = true;
    this.changeAdapter();
  }

  addAnotherField() {
    this.showFieldAddedPrompt = false;
    this.resetFieldForm();
  }

  addNewRow() {
    this.showFieldAddedPrompt = false;
    this.currentRow = null;
    this.resetFieldForm();
    this.addRow();
  }

  changeAdapter() {
    this.currentAdapter = null;
    this.resetFieldForm();
  }

  resetFieldForm() {
    this.builderForm.reset();
    this.builderForm.markAsPristine();
  }

  saveForm() {
    this.formBuilderService.saveFormConfig(this.formConfig);
    this.modalService.openModal({
      title: 'Form Saved',
      modalConfig: FORM_SAVED_SUCCESS_MODAL_CONFIG,
      primaryButtonText: 'Continue',
      primaryAction: () => {
        this.router.navigate(['/form-example']);
        this.modalService.closeModal();
      },
      showCloseButton: true,
    });
  }

  previewForm() {
    this.showFormPreview = true;
  }

  closePreview() {
    this.showFormPreview = false;
    this.showRawJsonControl.setValue(false);
  }

  copyJsonToClipboard() {
    const jsonString = JSON.stringify(this.formConfig, null, 2);
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

  resetForm() {
    this.formConfig = { sections: [] };
    this.currentSection = null;
    this.currentRow = null;
    this.currentField = null;
    this.currentAdapter = null;
    this.showFieldAddedPrompt = false;
    this.showFormPreview = false;
    this.builderForm.reset();
    this.toggleForm.reset();

    this.addSection();
  }
}
