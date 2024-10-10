import { Injectable } from '@angular/core';
import { FormBuilderService } from '../services/form-builder.service';

@Injectable({
  providedIn: 'root',
})
export class FormConfigProvider {
  constructor(private formBuilderService: FormBuilderService) {}

  getFormConfig() {
    return this.formBuilderService.getFormConfig() || { sections: [] };
  }
}
