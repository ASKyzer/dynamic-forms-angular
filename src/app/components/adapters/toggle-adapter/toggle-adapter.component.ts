import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToggleComponent } from '../../toggle/toggle.component';

interface ToggleConfig {
  controlName: string;
  value: boolean;
  label: string;
}

@Component({
  selector: 'app-toggle-adapter',
  standalone: true,
  imports: [CommonModule, ToggleComponent, ReactiveFormsModule],
  templateUrl: './toggle-adapter.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToggleAdapterComponent {
  @Input() contentConfig: ToggleConfig = {
    controlName: '',
    value: false,
    label: '',
  };
  @Input() parentForm: any;

  ngOnInit() {
    this.parentForm?.addControl(
      this.contentConfig.controlName,
      new FormControl(this.contentConfig.value || false)
    );
  }
}
