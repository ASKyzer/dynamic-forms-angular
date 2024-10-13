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
    <div class="py-8 px-2 mx-auto max-w-[1200px]">
      <h1 class="text-4xl font-bold mb-4">
        {{
          isFromFormBuilder ? 'Behold the form you just built!' : 'Example Form'
        }}
      </h1>
      <p class="mb-4">
        {{
          isFromFormBuilder
            ? 'Below is the form you just built. Click the button to submit the form.'
            : 'This form is an example of what you can build with the form builder. Each section is a different type of adapter and the various options that are available.'
        }}
      </p>
      <app-form [config]="FORM_CONFIG"></app-form>
    </div>
  `,
})
export class FormPageComponent {
  FORM_CONFIG: any = null; // TODO: Get config from backend
  isFromFormBuilder: boolean = false;

  constructor(private formBuilderService: FormBuilderService) {
    this.isFromFormBuilder = !!this.formBuilderService.getFormConfig();
    this.FORM_CONFIG = this.formBuilderService.getFormConfig() || FORM_CONFIG;
  }

  ngOnDestroy() {
    this.formBuilderService.saveFormConfig(null);
  }
}
