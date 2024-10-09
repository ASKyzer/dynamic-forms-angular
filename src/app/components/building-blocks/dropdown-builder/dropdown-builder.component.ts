import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DROPDOWN_BUILDER_CONFIG } from '../../../constants/dropdown-builder.constant';
import { FormBuilderService } from '../../../services/form-builder.service';
import { InputBuilderComponent } from '../input-build/input-builder/input-builder.component';

@Component({
  selector: 'app-dropdown-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputBuilderComponent],
  templateUrl: './dropdown-builder.component.html',
})
export class DropdownBuilderComponent {
  @Output() addField = new EventEmitter<any>();
  config: any = DROPDOWN_BUILDER_CONFIG;

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
    return {
      label: field.label,
      controlName: field.controlName,
      options: field.options,
      isRequired: field.required,
    };
  }
}
