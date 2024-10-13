import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">Welcome to Dynamic Form Builder</h1>

      <p class="mb-4">
        This site demonstrates the power of building forms dynamically using a
        user-friendly interface. Our form builder allows you to create complex
        forms without writing a single line of code!
      </p>

      <h2 class="text-2xl font-semibold mb-2">How it works:</h2>
      <ol class="list-decimal list-inside mb-4">
        <li>Use our intuitive Form Builder to design your form</li>
        <li>The builder generates the necessary configuration</li>
        <li>View the resulting form instantly!</li>
      </ol>

      <div class="flex space-x-4 mb-4">
        <a routerLink="/form-builder">
          <app-button text="Try the Form Builder" />
        </a>
        <a routerLink="/form-example">
          <app-button text="See an Example Form" theme="secondary" />
        </a>
      </div>

      <p class="text-sm text-gray-600">
        Start building your dynamic forms today and experience the ease of our
        form creation process! Below is a section of the form that you can
        build.
      </p>

      <img src="assets/images/personal-info.png" alt="Form Builder Demo" />
    </div>
  `,
  styles: [],
})
export class HomeComponent {}
