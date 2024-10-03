import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { InputFieldComponent } from '../../components/input-field/input-field.component';
import { FORM_CONFIG } from '../../constants/example-form.constant';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'app-form-example',
  standalone: true,
  imports: [FormComponent, InputFieldComponent],
  template: `
    <div class="py-8 px-16 mx-auto max-w-[1200px]">
      <h1 class="text-4xl font-bold mb-4">Form Builder</h1>
      <p class="mb-4">
        This is a simple form builder that allows you to create forms with
        different types of input fields.
      </p>
      <app-form [config]="FORM_CONFIG"></app-form>
    </div>
  `,
})
export class FormPageComponent {
  FORM_CONFIG: any = null; // TODO: Get config from backend

  constructor(private formBuilderService: FormBuilderService) {
    this.FORM_CONFIG = this.formBuilderService.getFormConfig() || FORM_CONFIG;
  }
}
