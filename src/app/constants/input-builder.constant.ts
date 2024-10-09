export const INPUT_BUILDER_CONFIG = {
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
                placeholder:
                  'Enter a custom error message, leave blank for default (optional)',
                type: 'text',
              },
            },
          ],
        },
        {
          fields: [
            {
              conditions: {
                field: 'fieldType',
                operator: '==',
                value: 'textarea',
              },
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
              adapterType: 'toggle',
              config: {
                label: 'Would you like to add validation?',
                controlName: 'validation',
                value: false,
              },
            },
          ],
        },
        {
          fields: [
            {
              conditions: {
                field: 'validation',
                operator: '==',
                value: true,
              },
              adapterType: 'texts',
              config: {
                content: 'Check all that apply',
                type: 'p',
              },
            },
          ],
        },
        {
          fields: [
            {
              conditions: {
                field: 'validation',
                operator: '==',
                value: true,
              },
              adapterType: 'checkbox',
              config: {
                controlName: 'requiredCheckbox',
                option: {
                  label: 'Required',
                  value: 'required',
                  checked: false,
                },
              },
            },
            {
              conditions: {
                field: 'validation',
                operator: '==',
                value: true,
              },
              adapterType: 'checkbox',
              config: {
                controlName: 'emailCheckbox',
                option: {
                  label: 'Email Pattern',
                  value: 'email',
                  checked: false,
                },
              },
            },
            {
              conditions: {
                field: 'validation',
                operator: '==',
                value: true,
              },
              adapterType: 'checkbox',
              config: {
                controlName: 'patternCheckbox',
                option: {
                  label: 'Custom Pattern',
                  value: 'pattern',
                  checked: false,
                },
              },
            },
          ],
        },

        {
          fields: [
            {
              conditions: {
                field: 'validation',
                operator: '==',
                value: true,
              },
              adapterType: 'checkbox',
              config: {
                controlName: 'minLengthCheckbox',
                option: {
                  label: 'Min Length',
                  value: 'minLength',
                  checked: false,
                },
              },
            },
            {
              conditions: {
                field: 'validation',
                operator: '==',
                value: true,
              },
              adapterType: 'checkbox',
              config: {
                controlName: 'maxLengthCheckbox',
                option: {
                  label: 'Max Length',
                  value: 'maxLength',
                  checked: false,
                },
              },
            },
            {
              conditions: {
                field: 'validation',
                operator: '==',
                value: true,
              },
              adapterType: 'checkbox',
              config: {
                controlName: 'minCheckbox',
                option: {
                  label: 'Min',
                  value: 'min',
                  checked: false,
                },
              },
            },
          ],
        },
        {
          fields: [
            {
              conditions: {
                field: 'validation',
                operator: '==',
                value: true,
              },
              adapterType: 'checkbox',
              config: {
                controlName: 'maxCheckbox',
                option: {
                  label: 'Max',
                  value: 'max',
                  checked: false,
                },
              },
            },
          ],
        },
        {
          fields: [
            {
              adapterType: 'input',
              conditions: {
                field: 'minLengthCheckbox',
                operator: '==',
                value: true,
              },
              config: {
                controlName: 'minLength',
                type: 'number',
                label: 'Min Length',
                placeholder: 'Enter min length (optional)',
                isRequired: true,
                validation: [
                  {
                    type: 'required',
                  },
                ],
              },
            },
            {
              adapterType: 'input',
              conditions: {
                field: 'maxLengthCheckbox',
                operator: '==',
                value: true,
              },
              config: {
                controlName: 'maxLength',
                type: 'number',
                label: 'Max Length',
                placeholder: 'Enter max length (optional)',
                isRequired: true,
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
              conditions: {
                field: 'minCheckbox',
                operator: '==',
                value: true,
              },
              config: {
                controlName: 'min',
                type: 'number',
                label: 'Min',
                placeholder: 'Enter min (optional)',
                isRequired: true,
                validation: [
                  {
                    type: 'required',
                  },
                ],
              },
            },
            {
              adapterType: 'input',
              conditions: {
                field: 'maxCheckbox',
                operator: '==',
                value: true,
              },
              config: {
                controlName: 'max',
                type: 'number',
                label: 'Max',
                placeholder: 'Enter max (optional)',
                isRequired: true,
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
              conditions: {
                field: 'patternCheckbox',
                operator: '==',
                value: true,
              },
              config: {
                controlName: 'pattern',
                type: 'text',
                label: 'Pattern',
                placeholder: 'Enter pattern regex (optional)',
                isRequired: true,
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
              adapterType: 'texts',
              config: {
                type: 'line',
              },
            },
          ],
        },
        {
          fields: [
            {
              adapterType: 'toggle',
              config: {
                label:
                  'Does the visibility of this field depend on another field?',
                controlName: 'visibility',
                value: false,
              },
            },
          ],
        },
        {
          fields: [
            {
              conditions: {
                field: 'visibility',
                operator: '==',
                value: true,
              },
              adapterType: 'texts',
              config: {
                type: 'p',
                content:
                  'Enter the field control name, operator and value to compare against. The operator must be a valid comparison operator i.e. ==, !=, >, <, >=, <=',
              },
            },
          ],
        },
        {
          fields: [
            {
              conditions: {
                field: 'visibility',
                operator: '==',
                value: true,
              },
              adapterType: 'input',
              config: {
                type: 'text',
                controlName: 'fieldControlName0',
                label: 'Field Control Name',
                isRequired: true,
                validation: [
                  {
                    type: 'required',
                  },
                ],
              },
            },
            {
              conditions: {
                field: 'visibility',
                operator: '==',
                value: true,
              },
              adapterType: 'input',
              config: {
                type: 'text',
                controlName: 'operator0',
                label: 'Operator',
                isRequired: true,
                validation: [
                  {
                    type: 'required',
                  },
                ],
              },
            },
            {
              conditions: {
                field: 'visibility',
                operator: '==',
                value: true,
              },
              adapterType: 'input',
              config: {
                type: 'text',
                controlName: 'value0',
                label: 'Value',
                isRequired: true,
                validation: [
                  {
                    type: 'required',
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};
