import { Routes } from '@angular/router';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { FormPageComponent } from './pages/form-example/form-example.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'form-example',
    component: FormPageComponent,
  },
  {
    path: 'form-builder',
    component: FormBuilderComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
