import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text = 'Please provide a text';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() customClass = '';
  @Input() theme: 'primary' | 'secondary' | 'tertiary' | 'quaternary' =
    'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() fullWidth = false;

  getThemeClass(): string {
    switch (this.theme) {
      case 'primary':
        return 'bg-primary-dark text-white hover:bg-primary-darker';
      case 'secondary':
        return 'bg-secondary-dark text-white hover:bg-secondary-darker';
      case 'tertiary':
        return 'bg-tertiary-dark text-white hover:bg-tertiary-darker';
      case 'quaternary':
        return 'bg-quaternary-dark text-white hover:bg-quaternary-darker';
      default:
        return 'bg-primary-dark text-white hover:bg-primary-darker';
    }
  }

  getSizeClass(): string {
    switch (this.size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-5 py-2.5 text-base';
    }
  }
}
