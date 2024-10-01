import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../input-field/input-field.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-adapter',
  standalone: true,
  imports: [
    InputFieldComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    InputAdapterComponent,
  ],
  templateUrl: './input-adapter.component.html',
  styleUrl: './input-adapter.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputAdapterComponent {
  @Input() contentConfig: any;
  @Input() parentGroup: any;

  ngOnInit() {
    if (!this.parentGroup) {
      console.error('FormGroup is required for InputAdapterComponent');
    }
  }
}
