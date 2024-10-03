import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { FORM_CONFIG } from '../../constants/form-config.constant';

@Component({
  selector: 'app-form-example',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './form-example.component.html',
})
export class FormPageComponent {
  FORM_CONFIG: any = FORM_CONFIG; // TODO: Get config from backend
}
