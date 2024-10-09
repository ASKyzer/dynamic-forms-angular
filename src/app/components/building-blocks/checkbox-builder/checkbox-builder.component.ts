import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CHECKBOX_BUILDER_CONFIG } from '../../../constants/checkbox-builder.constant';
import { FormBuilderService } from '../../../services/form-builder.service';
import { InputBuilderComponent } from '../input-build/input-builder/input-builder.component';

@Component({
  selector: 'app-checkbox-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputBuilderComponent],
  templateUrl: './checkbox-builder.component.html',
})
export class CheckboxBuilderComponent {
  @Output() addField = new EventEmitter<any>();
  textBuildForm: FormGroup = new FormGroup({});
  config: any = CHECKBOX_BUILDER_CONFIG;

  constructor(private formBuilderService: FormBuilderService) {}

  public emitField(field: any) {
    const conditions = field.fieldControlName0
      ? { conditions: this.formBuilderService.getConditions(field) }
      : {};
    this.addField.emit({
      config: this.configureField(field),
      ...conditions,
    });
  }

  private configureField(field: any) {
    const label = field.label ? { label: field.label } : {};

    const removeMargin = field.removeMargin ? { margin: '0' } : {};
    return {
      ...label,
      controlName: field.controlName,
      option: {
        label: field.checkboxLabel,
        checked: false,
      },
      isRequired: field.required,
      ...removeMargin,
    };
  }
}
