import { Component, Input } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-form-preview',
  standalone: true,
  imports: [FormComponent],
  template: `<app-form
    [config]="FORM_CONFIG"
    [isFromFormBuilder]="isFromFormBuilder"
    [isPreview]="true"
  ></app-form>`,
})
export class FormPreviewComponent {
  @Input() FORM_CONFIG: any = null;
  @Input() isFromFormBuilder: boolean = false;
}
