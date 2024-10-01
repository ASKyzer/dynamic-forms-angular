import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { FORM_CONFIG } from '../../constants/form-config.constant';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  FORM_CONFIG: any = FORM_CONFIG; // TODO: Get config from backend
}
