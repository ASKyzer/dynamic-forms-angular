export const FORM_CONFIG = {
  sections: [
    {
      hasRequiredFields: true,
      title: 'Dropdown Adapters',
      rows: [
        {
          fields: [
            {
              config: {
                controlName: 'gender',
                label: 'Gender',
                options: [
                  {
                    label: 'Male',
                    value: 'male',
                  },
                  {
                    label: 'Female',
                    value: 'female',
                  },
                  {
                    label: 'Other',
                    value: 'other',
                  },
                  {
                    label: 'Prefer not to say',
                    value: 'preferNotToSay',
                  },
                ],
              },
              adapterType: 'dropdown',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                controlName: 'pets',
                label: 'Pets',
                isRequired: true,
                errorMessage: 'Please select at least one pet',
                options: [
                  {
                    label: 'Dog',
                    value: 'dog',
                  },
                  {
                    label: 'Cat',
                    value: 'cat',
                  },
                  {
                    label: 'Bird',
                    value: 'bird',
                  },
                  {
                    label: 'Fish',
                    value: 'fish',
                  },
                  {
                    label: 'Rabbit',
                    value: 'rabbit',
                  },
                  {
                    label: 'Parrot',
                    value: 'parrot',
                  },
                  {
                    label: 'Hamster',
                    value: 'hamster',
                  },
                ],
              },
              adapterType: 'dropdown',
            },
          ],
        },
      ],
    },
    {
      hasRequiredFields: true,
      title: 'Radio Adapters',
      rows: [
        {
          fields: [
            {
              config: {
                controlName: 'timeOfTheDay',
                label: 'Time of the day',
                errorMessage: 'Please select a time of the day',
                orientation: 'horizontal',
                options: [
                  {
                    label: 'Morning',
                    value: 'morning',
                    checked: false,
                  },
                  {
                    label: 'Afternoon',
                    value: 'afternoon',
                    checked: false,
                  },
                  {
                    label: 'Evening',
                    value: 'evening',
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
              config: {
                controlName: 'season',
                label: 'Season',
                isRequired: true,
                options: [
                  {
                    label: 'Spring',
                    value: 'spring',
                    checked: false,
                  },
                  {
                    label: 'Summer',
                    value: 'summer',
                    checked: false,
                  },
                  {
                    label: 'Autumn',
                    value: 'autumn',
                    checked: false,
                  },
                  {
                    label: 'Winter',
                    value: 'winter',
                    checked: false,
                  },
                ],
              },
              adapterType: 'radio',
            },
          ],
        },
      ],
    },
    {
      hasRequiredFields: true,
      title: 'Checkbox Adapters',
      rows: [
        {
          fields: [
            {
              config: {
                label: 'Single checkbox',
                controlName: 'terms',
                isRequired: true,
                errorMessage:
                  'You must agree to the terms and conditions before submitting.',
                option: {
                  label:
                    'I agree to the terms and conditions and I certify that I have read and understood the terms and conditions.',
                  value: 'agreement',
                  checked: false,
                },
              },
              adapterType: 'checkbox',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                label: 'Group of checkboxes',
                type: 'checkbox',
                controlName: 'options',
                errorMessage: 'Please select at least one option',
                isGroup: true,
                isRequired: true,
                options: [
                  {
                    label: 'Option 1',
                    value: 'option1',
                    checked: false,
                  },
                  {
                    label: 'Option 2',
                    value: 'option2',
                    checked: false,
                  },
                  {
                    label: 'Option 3',
                    value: 'option3',
                    checked: false,
                  },
                ],
              },
              adapterType: 'checkbox',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                content:
                  'Multiple single checkboxes (with the first 3 with the property margin: "0")',
                type: 'p',
              },
              adapterType: 'texts',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                type: 'checkbox',
                controlName: 'single1',
                option: {
                  label: 'Single checkbox 1',
                  value: 'option1',
                  checked: false,
                },
                margin: '0',
              },
              adapterType: 'checkbox',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                type: 'checkbox',
                controlName: 'single2',
                option: {
                  label: 'Single checkbox 2',
                  value: 'option2',
                  checked: false,
                },
                margin: '0',
              },
              adapterType: 'checkbox',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                type: 'checkbox',
                controlName: 'single3',
                option: {
                  label: 'Single checkbox 3',
                  value: 'option3',
                  checked: false,
                },
                margin: '0',
              },
              adapterType: 'checkbox',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                type: 'checkbox',
                controlName: 'single4',
                option: {
                  label: 'Single checkbox 4',
                  value: 'option4',
                  checked: false,
                },
              },
              adapterType: 'checkbox',
            },
          ],
        },
      ],
    },
    {
      title: 'Texts Adapters',
      rows: [
        {
          fields: [
            {
              config: {
                content: 'Header 1 Large',
                isBold: true,
                type: 'h1',
              },
              adapterType: 'texts',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                content: 'Header 2 Medium',
                isBold: true,
                type: 'h2',
              },
              adapterType: 'texts',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                content: 'Header 3 Small',
                type: 'h3',
              },
              adapterType: 'texts',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                content: 'Paragraph example',
                type: 'p',
              },
              adapterType: 'texts',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                listTitle: 'List title',
                listItems: ['Item 1', 'Item 2', 'Item 3'],
                isBold: true,
                type: 'ul',
              },
              adapterType: 'texts',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                type: 'line',
              },
              adapterType: 'texts',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                listItems: ['Item 1', 'Item 2', 'Item 3'],
                type: 'ol',
                isItalic: true,
              },
              adapterType: 'texts',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                content:
                  'In reality, you might need to create wrapper components for these HTML elements or use a different approach to create the elements dynamically.',
                type: 'blockquote',
              },
              adapterType: 'texts',
            },
          ],
        },
      ],
    },
    {
      hasRequiredFields: true,
      title: 'Input Adapters',
      rows: [
        {
          fields: [
            {
              config: {
                label: 'First Name',
                type: 'text',
                controlName: 'firstName',
                isRequired: true,
                validation: [
                  {
                    type: 'required',
                  },
                ],
              },
              adapterType: 'input',
            },
            {
              config: {
                label: 'Last Name',
                type: 'text',
                controlName: 'lastName',
                isRequired: true,
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
                label: 'Email',
                type: 'email',
                controlName: 'email',
                isRequired: true,
                validation: [
                  {
                    type: 'required',
                  },
                  {
                    type: 'email',
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
                label: 'Password',
                type: 'password',
                controlName: 'password',
                isRequired: true,
                validation: [
                  {
                    type: 'required',
                  },
                  {
                    type: 'minlength',
                    value: 8,
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
                label: 'Phone',
                type: 'text',
                controlName: 'phone',
                placeholder: '123456789',
                validation: [
                  {
                    type: 'pattern',
                    value: '^[0-9]{9}$',
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
                label: 'Date of Birth',
                type: 'date',
                controlName: 'dateOfBirth',
                isRequired: true,
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
                label: 'Website',
                type: 'url',
                controlName: 'website',
                placeholder: 'https://example.com',
                validation: [
                  {
                    type: 'pattern',
                    value: '^https?://.+\\..+$',
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
                label: 'Message',
                type: 'textarea',
                controlName: 'message',
                placeholder: 'Enter your message',
                isRequired: true,
                validation: [
                  {
                    type: 'required',
                  },
                  {
                    type: 'minlength',
                    value: 10,
                  },
                ],
              },
              adapterType: 'input',
            },
          ],
        },
      ],
    },
  ],
};
