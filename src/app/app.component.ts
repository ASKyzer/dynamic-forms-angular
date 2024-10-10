import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="mt-16">
      <router-outlet></router-outlet>
    </main>
    <app-modal></app-modal>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {}
