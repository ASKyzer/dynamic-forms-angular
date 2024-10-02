import { CommonModule } from '@angular/common';
import { Component, Input, Type } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxAdapterComponent } from '../checkbox-adapter/checkbox-adapter.component';
import { InputAdapterComponent } from '../input-adapter/input-adapter.component';
import { TextsAdapterComponent } from '../texts-adapter/texts-adapter.component';

@Component({
  selector: 'app-adapter-selection',
  templateUrl: './adapter-selection.component.html',
  styleUrls: ['./adapter-selection.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class AdapterSelectionComponent {
  @Input() adapterType: string;
  @Input() contentConfig: any;
  @Input() parentForm: FormGroup;

  constructor() {
    this.adapterType = '';
    this.contentConfig = {};
    this.parentForm = new FormGroup({});
  }

  getAdapterComponent(): Type<any> {
    switch (this.adapterType) {
      case 'input':
        return InputAdapterComponent;
      case 'texts':
        return TextsAdapterComponent;
      case 'checkbox':
        return CheckboxAdapterComponent;
      // Add cases for other adapter types
      default:
        throw new Error(`Unsupported adapter type: ${this.adapterType}`);
    }
  }

  getAdapterInputs(): Record<string, any> {
    return {
      contentConfig: this.contentConfig,
      parentForm: this.parentForm,
    };
  }
}
