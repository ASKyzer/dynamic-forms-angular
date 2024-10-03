import { Injectable } from '@angular/core';
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
}
