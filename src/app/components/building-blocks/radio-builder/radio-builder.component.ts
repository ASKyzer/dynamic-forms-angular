import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RADIO_BUILDER_CONFIG } from '../../../constants/radio-builder.constant';
import { FormBuilderService } from '../../../services/form-builder.service';
import { InputBuilderComponent } from '../input-build/input-builder/input-builder.component';

@Component({
  selector: 'app-radio-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputBuilderComponent],
  templateUrl: './radio-builder.component.html',
})
export class RadioBuilderComponent {
  @Output() addField = new EventEmitter<any>();
  textBuildForm: FormGroup = new FormGroup({});
  config: any = RADIO_BUILDER_CONFIG;

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
    const options3 = field.optionLabelThree
      ? [
          {
            label: field.optionLabelThree,
            value: field.optionValueThree,
            checked: false,
          },
        ]
      : [];
    const options4 = field.optionLabelFour
      ? [
          {
            label: field.optionLabelFour,
            value: field.optionValueFour,
            checked: false,
          },
        ]
      : [];
    const options5 = field.optionLabelFive
      ? [
          {
            label: field.optionLabelFive,
            value: field.optionValueFive,
            checked: false,
          },
        ]
      : [];
    return {
      ...label,
      controlName: field.controlName,
      options: [
        {
          label: field.optionLabelOne,
          value: field.optionValueOne,
          checked: false,
        },
        {
          label: field.optionLabelTwo,
          value: field.optionValueTwo,
          checked: false,
        },
        ...options3,
        ...options4,
        ...options5,
      ],
      orientation: field.orientation,
      isRequired: field.required,
    };
  }
}
