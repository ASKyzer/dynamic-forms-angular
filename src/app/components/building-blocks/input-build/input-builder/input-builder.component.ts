import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdapterSelectionComponent } from '../../../adapters/adapter-selection/adapter-selection.component';
@Component({
  selector: 'app-input-builder',
  standalone: true,
  imports: [AdapterSelectionComponent],
  templateUrl: './input-builder.component.html',
})
export class InputBuilderComponent {
  // config: any = FORM_CONFIG;
  inputBuildForm: FormGroup = new FormGroup({});
  config: any = {
    sections: [
      {
        rows: [
          {
            fields: [
              {
                adapterType: 'dropdown',
                config: {
                  controlName: 'fieldType',
                  label: 'Field Type',
                  isRequired: true,
                  options: [
                    {
                      label: 'Text',
                      value: 'text',
                    },
                    {
                      label: 'Email',
                      value: 'email',
                    },
                    {
                      label: 'Number',
                      value: 'number',
                    },
                    {
                      label: 'Tel',
                      value: 'tel',
                    },
                    {
                      label: 'Textarea',
                      value: 'textarea',
                    },
                    {
                      label: 'Date',
                      value: 'date',
                    },
                    {
                      label: 'Password',
                      value: 'password',
                    },
                  ],
                  validation: [
                    {
                      type: 'required',
                    },
                  ],
                },
              },
            ],
          },
          {
            fields: [
              {
                adapterType: 'input',
                config: {
                  controlName: 'label',
                  label: 'Label',
                  isRequired: true,
                  placeholder: 'Enter label',
                  type: 'text',
                  validation: [
                    {
                      type: 'required',
                    },
                  ],
                },
              },
            ],
          },
          {
            fields: [
              {
                adapterType: 'input',
                config: {
                  controlName: 'controlName',
                  label: 'Control Name',
                  isRequired: true,
                  placeholder: 'Enter control name in camelCase',
                  type: 'text',
                  validation: [
                    {
                      type: 'required',
                    },
                  ],
                },
              },
            ],
          },
          {
            fields: [
              {
                adapterType: 'input',
                config: {
                  controlName: 'placeholder',
                  label: 'Placeholder',
                  placeholder: 'Enter placeholder (optional)',
                  type: 'text',
                },
              },
            ],
          },
          {
            fields: [
              {
                adapterType: 'input',
                config: {
                  controlName: 'errorMessage',
                  label: 'Error Message',
                  placeholder: 'Enter error message (optional)',
                  type: 'text',
                },
              },
            ],
          },
          {
            fields: [
              {
                adapterType: 'input',
                config: {
                  controlName: 'rows',
                  label: 'Textarea Rows',
                  placeholder:
                    'Enter number of rows if different from 4 (optional)',
                  type: 'number',
                },
              },
            ],
          },
          {
            fields: [
              {
                adapterType: 'texts',
                config: {
                  content: 'Add validation',
                  isBold: true,
                  type: 'p',
                },
              },
            ],
          },
          {
            fields: [
              {
                adapterType: 'checkbox',
                config: {
                  controlName: 'checkbox',
                  option: {
                    label: 'This field required',
                    value: 'true',
                  },
                },
              },
            ],
          },
          {
            fields: [
              {
                adapterType: 'checkbox',
                config: {
                  controlName: 'emailValidation',
                  option: {
                    label: 'This field need to be a valid email',
                    value: 'true',
                  },
                },
              },
            ],
          },
          {
            fields: [
              {
                adapterType: 'input',
                config: {
                  controlName: 'minLength',
                  type: 'number',
                  label: 'Min Length',
                  placeholder: 'Enter min length (optional)',
                },
              },
              {
                adapterType: 'input',
                config: {
                  controlName: 'maxLength',
                  type: 'number',
                  label: 'Max Length',
                  placeholder: 'Enter max length (optional)',
                },
              },
            ],
          },
          {
            fields: [
              {
                adapterType: 'input',
                config: {
                  controlName: 'min',
                  type: 'number',
                  label: 'Min',
                  placeholder: 'Enter min (optional)',
                },
              },
              {
                adapterType: 'input',
                config: {
                  controlName: 'max',
                  type: 'number',
                  label: 'Max',
                  placeholder: 'Enter max (optional)',
                },
              },
            ],
          },
          {
            fields: [
              {
                adapterType: 'input',
                config: {
                  controlName: 'pattern',
                  type: 'text',
                  label: 'Pattern',
                  placeholder: 'Enter pattern regex (optional)',
                },
              },
            ],
          },
        ],
      },
    ],
  };

  public getFormValues() {
    console.log(this.inputBuildForm.value);
    return this.inputBuildForm.getRawValue();
  }
}
