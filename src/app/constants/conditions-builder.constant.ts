export const CONDITIONS_BUILDER_FIELDS_CONFIG = [
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
          label: 'Does the visibility of this field depend on another field?',
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
            'Enter the field control name, operator and value to compare against.',
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
          placeholder: 'Use camelCase',
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
        adapterType: 'dropdown',
        config: {
          controlName: 'operator0',
          label: 'Operator',
          isRequired: true,
          validation: [
            {
              type: 'required',
            },
          ],
          options: [
            { label: '==', value: '==' },
            { label: '!=', value: '!=' },
            { label: '>', value: '>' },
            { label: '<', value: '<' },
            { label: '>=', value: '>=' },
            { label: '<=', value: '<=' },
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
          placeholder: 'Value to compare against',
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
];
