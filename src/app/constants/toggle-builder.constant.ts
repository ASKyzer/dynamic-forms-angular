import { CONDITIONS_BUILDER_FIELDS_CONFIG } from './conditions-builder.constant';

export const TOGGLE_BUILDER_CONFIG = {
  sections: [
    {
      rows: [
        {
          fields: [
            {
              config: {
                controlName: 'label',
                label: 'Label',
                isRequired: true,
                placeholder: 'Enter the toggle label or content',
                validation: [
                  {
                    type: 'required',
                  },
                ],
              },
              adapterType: 'input',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                controlName: 'controlName',
                label: 'Control Name',
                isRequired: true,
                placeholder: 'Enter the control name in camelCase',
                validation: [
                  {
                    type: 'required',
                  },
                ],
              },
              adapterType: 'input',
            },
          ],
        },
        ...CONDITIONS_BUILDER_FIELDS_CONFIG,
      ],
    },
  ],
};
