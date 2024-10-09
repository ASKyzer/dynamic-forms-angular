import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  private formConfigSubject = new BehaviorSubject<any>(null);
  formConfig$ = this.formConfigSubject.asObservable();

  constructor() {}

  saveFormConfig(config: any) {
    console.log('🚀 ~ FormBuilderService ~ saveFormConfig ~ config:', config);
    this.formConfigSubject.next(config);
    // You can also save to localStorage or send to a backend API here
  }

  getFormConfig() {
    console.log(
      '🚀 ~ FormBuilderService ~ getFormConfig ~  this.formConfigSubject.value:',
      this.formConfigSubject.value
    );
    return this.formConfigSubject.value;
  }

  removeAllWhitespace(value: string): string {
    return value.trim().replace(/\s+/g, '');
  }

  checkFormValidity(config: any, form: FormGroup) {
    const visibleControls = this.findAllControlNames(config).filter(
      (controlName) => {
        const visible = document.getElementById(controlName);
        return visible;
      }
    );

    return visibleControls.every((controlName) => {
      const control = form.get(controlName);
      return control?.valid;
    });
  }

  findAllControlNames(config: any): string[] {
    const controlNames: string[] = [];

    const traverse = (obj: any) => {
      if (Array.isArray(obj)) {
        obj.forEach((item) => traverse(item));
      } else if (typeof obj === 'object' && obj !== null) {
        if (obj.controlName) {
          controlNames.push(obj.controlName);
        }
        Object.values(obj).forEach((value) => traverse(value));
      }
    };

    traverse(config);
    return controlNames;
  }
}
