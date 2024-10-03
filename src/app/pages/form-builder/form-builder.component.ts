import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputAdapterComponent } from '../../components/adapters/input-adapter/input-adapter.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { AdapterSelectorComponent } from '../../components/form-building/adapter-selector/adapter-selector.component';
import { InputFieldComponent } from '../../components/input-field/input-field.component';
import { FormBuilderService } from '../../services/form-builder.service';

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
  ],
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent implements OnInit {
  formConfig: any = { sections: [] };
  currentSection: any = null;
  currentAdapter: any = null;
  currentRow: any = null;
  currentField: any = null;
  showForm = false;
  builderForm: FormGroup = new FormGroup({});
  showFieldAddedPrompt: boolean = false;

  constructor(
    private fb: FormBuilder,
    private formBuilderService: FormBuilderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.builderForm = this.fb.group({
      adapterType: [''],
      sectionTitle: [''],
      fieldType: [''],
      fieldLabel: [''],
      fieldControlName: [''],
      fieldRequired: [false],
      fieldPlaceholder: [''],
      fieldErrorMessage: [''],
      fieldInitialValue: [''],
      // Add more form controls as needed
    });
  }

  startForm() {
    this.showForm = true;
  }

  addAdapter(adapterType: string) {
    console.log(
      '🚀 ~ FormBuilderComponent ~ addAdapter ~ adapterType:',
      adapterType
    );
    this.currentAdapter = this.builderForm.get('adapterType')?.value;
    console.log(
      '🚀 ~ FormBuilderComponent ~ addAdapter ~  this.currentAdapter:',
      this.currentAdapter
    );
  }

  addSection() {
    this.currentSection = { title: '', rows: [] };
    // Show section title input
  }

  addNewSection() {
    this.resetFieldForm();
    this.showFieldAddedPrompt = false;
    this.currentSection = null;
    this.currentRow = null;
    this.currentField = null;
    this.currentAdapter = null;
    this.addSection();
  }

  saveSectionTitle() {
    this.currentSection.title = this.builderForm.get('sectionTitle')?.value;
    this.formConfig.sections.push(this.currentSection);
    if (this.currentSection.title) {
      this.addRow();
    }
    // Clear section title input and move to adding rows
  }

  addRow() {
    this.currentRow = {
      fields: [],
    };
    console.log(
      '🚀 ~ FormBuilderComponent ~ addRow ~ this.currentRow:',
      this.currentRow
    );
    this.currentSection.rows.push(this.currentRow);
    // Show options for number of fields (1, 2, or 3)
  }

  addField() {
    this.currentField = {
      adapterType: this.builderForm.get('adapterType')?.value,
      config: {
        type: this.builderForm.get('fieldType')?.value,
        label: this.builderForm.get('fieldLabel')?.value,
        controlName: this.builderForm.get('fieldControlName')?.value,
        isRequired: this.builderForm.get('fieldRequired')?.value || false,
        placeholder: this.builderForm.get('fieldPlaceholder')?.value,
        errorMessage: this.builderForm.get('fieldErrorMessage')?.value,
        initialValue: this.builderForm.get('fieldInitialValue')?.value,
        // Add more properties as needed
      },
    };

    console.log(
      '🚀 ~ FormBuilderComponent ~ addField ~ this.currentField:',
      this.currentField
    );
    this.currentRow.fields.push(this.currentField);
    this.showFieldAddedPrompt = true;
    this.changeAdapter();
  }

  addAnotherField() {
    this.showFieldAddedPrompt = false;
    // The form is already reset, so we're ready for a new field
  }

  addNewRow() {
    this.showFieldAddedPrompt = false;
    this.currentRow = null;
    this.addRow();
    // Assuming you have an addRow method
  }

  changeAdapter() {
    this.currentAdapter = null;
    this.resetFieldForm();
  }

  resetFieldForm() {
    this.builderForm.patchValue({
      adapterType: '',
      fieldType: '',
      fieldLabel: '',
      fieldControlName: '',
      fieldRequired: false,
      fieldPlaceholder: '',
      fieldErrorMessage: '',
      fieldInitialValue: '',
    });
  }

  saveForm() {
    this.formBuilderService.saveFormConfig(this.formConfig);
    // Navigate to form preview or edit page
  }

  viewForm() {
    // Save the current form configuration
    const formConfig = this.formBuilderService.getFormConfig();

    // Navigate to the form-example page
    this.router.navigate(['/form-example'], { state: { formConfig } });
  }
}
