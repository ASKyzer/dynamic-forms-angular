import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdapterSelectionComponent } from '../../adapters/adapter-selection/adapter-selection.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-adapter-selector',
  standalone: true,
  imports: [AdapterSelectionComponent, ButtonComponent],
  templateUrl: './adapter-selector.component.html',
})
export class AdapterSelectorComponent {
  @Input() parentForm: FormGroup = new FormGroup({});
  @Output() buttonAction: EventEmitter<string> = new EventEmitter<string>();

  field: any = {
    adapterType: 'dropdown',
    config: {
      type: 'dropdown',
      controlName: 'adapterType',
      required: true,
      options: [
        { label: 'Input', value: 'input' },
        { label: 'Texts', value: 'texts' },
        { label: 'Checkbox', value: 'checkbox' },
        { label: 'Radio', value: 'radio' },
        { label: 'Dropdown', value: 'dropdown' },
        { label: 'Toggle', value: 'toggle' },
      ],
    },
  };

  chooseAdapter() {
    const adapterControl = this.parentForm.get(this.field.config.controlName);
    adapterControl?.markAsDirty();
    adapterControl?.markAsTouched();

    if (adapterControl?.valid) {
      this.buttonAction.emit(
        this.parentForm.get(this.field.config.controlName)?.value
      );
    }
  }
}
