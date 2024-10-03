import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export interface DropdownOption {
  value: any;
  label: string;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit {
  @Input() parentForm: any;
  @Input() controlName: string = '';
  @Input() label: string = '';
  @Input() isRequired: boolean = false;
  @Input() options: DropdownOption[] = [];
  @Input() control: FormControl = new FormControl();
  @Input() errorMessage: string = 'Please select an option';

  isOpen: boolean = false;
  selectedOption: { value: any; label: string } | null = null;

  ngOnInit() {
    this.parentForm?.statusChanges.subscribe(() => {
      if (this.parentForm.touched) {
        this.control.markAsTouched();
        this.control.updateValueAndValidity();
      }
    });
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: { value: any; label: string }) {
    this.selectedOption = option;
    this.control.setValue(option.value);
    this.isOpen = false;
  }
}
