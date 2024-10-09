import { CONDITIONS_BUILDER_FIELDS_CONFIG } from './conditions-builder.constant';

export const RADIO_BUILDER_CONFIG = {
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
                placeholder: 'Add a label for the radio buttons (optional)',
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
              config: {
                controlName: 'orientation',
                label: 'Choose the orientation of the radio buttons',
                orientation: 'horizontal',
                isRequired: true,
                options: [
                  {
                    label: 'Horizontal',
                    value: 'horizontal',
                    checked: false,
                  },
                  {
                    label: 'Vertical',
                    value: 'vertical',
                    checked: false,
                  },
                ],
              },
              adapterType: 'radio',
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
              adapterType: 'texts',
              config: {
                type: 'p',
                content:
                  'Enter up to 5 options. If you need more than 5, it is recommended that the Dropdown adapter is used instead. You must enter at least 2 options',
              },
            },
          ],
        },
        {
          fields: [
            {
              adapterType: 'input',
              config: {
                label: 'Option One Label',
                controlName: 'optionLabelOne',
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
              config: {
                label: 'Option One Value',
                controlName: 'optionValueOne',
                isRequired: true,
                placeholder: 'Use camelCase',
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
                label: 'Option Two Label',
                controlName: 'optionLabelTwo',
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
              config: {
                label: 'Option Two Value',
                controlName: 'optionValueTwo',
                placeholder: 'Use camelCase',
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
                label: 'Option Three Label',
                controlName: 'optionLabelThree',
              },
            },
            {
              adapterType: 'input',
              config: {
                label: 'Option Three Value',
                controlName: 'optionValueThree',
                placeholder: 'Use camelCase',
              },
            },
          ],
        },
        {
          fields: [
            {
              adapterType: 'input',
              config: {
                label: 'Option Four Label',
                controlName: 'optionLabelFour',
              },
            },
            {
              adapterType: 'input',
              config: {
                label: 'Option Four Value',
                controlName: 'optionValueFour',
                placeholder: 'Use camelCase',
              },
            },
          ],
        },
        {
          fields: [
            {
              adapterType: 'input',
              config: {
                label: 'Option Five Label',
                controlName: 'optionLabelFive',
              },
            },
            {
              adapterType: 'input',
              config: {
                label: 'Option Five Value',
                controlName: 'optionValueFive',
                placeholder: 'Use camelCase',
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
