import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputAdapterComponent } from '../../components/adapters/input-adapter/input-adapter.component';
import { AdapterSelectorComponent } from '../../components/building-blocks/adapter-selector/adapter-selector.component';
import { CheckboxBuilderComponent } from '../../components/building-blocks/checkbox-builder/checkbox-builder.component';
import { DropdownBuilderComponent } from '../../components/building-blocks/dropdown-builder/dropdown-builder.component';
import { InputBuilderComponent } from '../../components/building-blocks/input-build/input-builder/input-builder.component';
import { RadioBuilderComponent } from '../../components/building-blocks/radio-builder/radio-builder.component';
import { TextBuilderComponent } from '../../components/building-blocks/text-builder/text-builder.component';
import { ToggleBuilderComponent } from '../../components/building-blocks/toggle-builder/toggle-builder.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
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
    InputBuilderComponent,
    TextBuilderComponent,
    ToggleBuilderComponent,
    CheckboxBuilderComponent,
    RadioBuilderComponent,
    DropdownBuilderComponent,
  ],
  templateUrl: './form-builder.component.html',
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

  constructor(
    private fb: FormBuilder,
    private formBuilderService: FormBuilderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.builderForm = this.fb.group({
      adapterType: [''],
      sectionTitle: [''],
    });
  }

  startForm() {
    this.showForm = true;
  }

  addAdapter(adapterType: string) {
    this.currentAdapter = this.builderForm.get('adapterType')?.value;
  }

  addConditions(conditions: any) {
    this.currentField.conditions = conditions;
  }

  addSection() {
    this.currentSection = { title: '', rows: [] };
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
