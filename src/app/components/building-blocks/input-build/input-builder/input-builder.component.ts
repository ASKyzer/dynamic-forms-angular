import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { INPUT_BUILDER_CONFIG } from '../../../../constants/input-builder.constant';
import { FormVisibilityService } from '../../../../services/form-visibility.service';
import { AdapterSelectionComponent } from '../../../adapters/adapter-selection/adapter-selection.component';
@Component({
  selector: 'app-input-builder',
  standalone: true,
  imports: [AdapterSelectionComponent],
  templateUrl: './input-builder.component.html',
})
export class InputBuilderComponent {
  inputBuildForm: FormGroup = new FormGroup({});
  config: any = INPUT_BUILDER_CONFIG;

  constructor(public formVisibilityService: FormVisibilityService) {
    this.inputBuildForm.valueChanges.subscribe(() => {
      this.formVisibilityService.updateVisibility(
        this.config,
        this.inputBuildForm
      );
    });
    this.formVisibilityService.updateVisibility(
      this.config,
      this.inputBuildForm
    );
  }

  public getFormValues() {
    console.log(this.inputBuildForm.value);
    return this.inputBuildForm.getRawValue();
  }
}
