import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  NO_ERRORS_SCHEMA,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-dropdown-builder-adapter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './dropdown-builder-adapter.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DropdownBuilderAdapterComponent implements OnInit, OnDestroy {
  @Input() contentConfig: any;
  @Input() parentForm: any;

  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (!this.parentForm.get(this.contentConfig.controlName)) {
      this.parentForm.addControl(
        this.contentConfig.controlName,
        this.fb.array([])
      );
      this.addOption();
      this.addOption();
    }

    this.subscription = this.options.valueChanges.subscribe(() => {
      this.parentForm.updateValueAndValidity();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get options(): FormArray {
    return this.parentForm.get(this.contentConfig.controlName) as FormArray;
  }

  createOption(): FormGroup {
    return this.fb.group({
      label: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  addOption() {
    this.options.push(this.createOption());
  }

  removeOption(index: number) {
    if (this.options.length > 2) {
      this.options.removeAt(index);
    }
  }
}
