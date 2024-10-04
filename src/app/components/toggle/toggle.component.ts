import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './toggle.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToggleComponent {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() value: boolean = false;
  @Input() control: FormControl = new FormControl();

  ngOnInit() {
    if (!this.control) {
      console.error('FormControl is required for InputFieldComponent');
    }
  }
}
