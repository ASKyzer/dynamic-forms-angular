import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent implements OnInit {
  formConfig: any = { sections: [] };
  currentSection: any = null;
  currentRow: any = null;
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

  addSection() {
    this.currentSection = { title: '', rows: [] };
    // Show section title input
  }

  saveSectionTitle() {
    this.currentSection.title = this.builderForm.get('sectionTitle')?.value;
    this.formConfig.sections.push(this.currentSection);
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
    // Collect field data from form inputs
    const fieldData = {
      type: this.builderForm.get('fieldType')?.value,
      label: this.builderForm.get('fieldLabel')?.value,
      controlName: this.builderForm.get('fieldControlName')?.value,
      isRequired: this.builderForm.get('fieldRequired')?.value || false,
      placeholder: this.builderForm.get('fieldPlaceholder')?.value,
      errorMessage: this.builderForm.get('fieldErrorMessage')?.value,
      initialValue: this.builderForm.get('fieldInitialValue')?.value,
      // Add more properties as needed
    };

    console.log('🚀 ~ FormBuilderComponent ~ addField ~ fieldData:', fieldData);
    this.currentRow.fields.push({
      config: fieldData,
      adapterType: this.builderForm.get('adapterType')?.value,
    });
    this.showFieldAddedPrompt = true;
    this.resetFieldForm();
  }

  addAnotherField() {
    this.showFieldAddedPrompt = false;
    // The form is already reset, so we're ready for a new field
  }

  addNewRow() {
    this.showFieldAddedPrompt = false;
    this.addRow(); // Assuming you have an addRow method
  }

  resetFieldForm() {
    this.builderForm.patchValue({
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
