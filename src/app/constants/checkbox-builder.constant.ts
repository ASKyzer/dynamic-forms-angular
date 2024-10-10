import { CONDITIONS_BUILDER_FIELDS_CONFIG } from './conditions-builder.constant';

export const CHECKBOX_BUILDER_CONFIG = {
  sections: [
    {
      rows: [
        {
          fields: [
            {
              adapterType: 'input',
              config: {
                label: 'Label',
                controlName: 'label',
                placeholder: 'Add a label for the checkbox (optional)',
              },
            },
          ],
        },
        {
          fields: [
            {
              adapterType: 'input',
              config: {
                label: 'Control Name',
                controlName: 'controlName',
                placeholder: 'Add a control name in camelCase',
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
              config: {
                label: 'Checkbox Label',
                controlName: 'checkboxLabel',
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
                label: 'Is this field required?',
                controlName: 'required',
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
                label: 'Do you want to remove the bottom margin?',
                controlName: 'removeMargin',
              },
            },
          ],
        },
        ...CONDITIONS_BUILDER_FIELDS_CONFIG,
      ],
    },
  ],
};
