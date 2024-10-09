import { CONDITIONS_BUILDER_FIELDS_CONFIG } from './conditions-builder.constant';

export const DROPDOWN_BUILDER_CONFIG = {
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
                isRequired: true,
                placeholder: 'Add a label for the radio buttons (optional)',
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
              adapterType: 'dropdown-builder',
              config: {
                controlName: 'options',
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
        ...CONDITIONS_BUILDER_FIELDS_CONFIG,
      ],
    },
  ],
};
