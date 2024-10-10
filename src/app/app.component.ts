import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent],
  template: `<router-outlet></router-outlet><app-modal></app-modal>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {}
