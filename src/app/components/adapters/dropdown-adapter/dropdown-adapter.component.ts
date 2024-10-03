import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownComponent } from '../../dropdown/dropdown.component';
@Component({
  selector: 'app-dropdown-adapter',
  standalone: true,
  imports: [DropdownComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './dropdown-adapter.component.html',
})
export class DropdownAdapterComponent {
  @Input() contentConfig: any;
  @Input() parentForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.parentForm.addControl(
      this.contentConfig.controlName,
      this.fb.control(''),
      this.contentConfig.isRequired ? Validators.required : null
    );
  }
}
