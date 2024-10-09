import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TOGGLE_BUILDER_CONFIG } from '../../../constants/toggle-builder.constant';
import { FormBuilderService } from '../../../services/form-builder.service';
import { InputBuilderComponent } from '../input-build/input-builder/input-builder.component';

@Component({
  selector: 'app-toggle-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputBuilderComponent],
  templateUrl: './toggle-builder.component.html',
})
export class ToggleBuilderComponent {
  @Output() addField = new EventEmitter<any>();
  textBuildForm: FormGroup = new FormGroup({});
  config: any = TOGGLE_BUILDER_CONFIG;

  constructor(private formBuilderService: FormBuilderService) {}

  public emitField(field: any) {
    const data = {
      config: {
        controlName: this.formBuilderService.removeAllWhitespace(
          field.controlName
        ),
        label: field.label,
      },
    };

    this.addField.emit(data);
  }
}
