export const FORM_CONFIG = {
  sections: [
    {
      title: 'Toggle Adapters',
      rows: [
        {
          fields: [
            {
              config: {
                controlName: 'additionalCoverages',
                label:
                  'Would you like to add additional coverages for family members?',
              },
              adapterType: 'toggle',
            },
          ],
        },
        {
          fields: [
            {
              conditions: {
                field: 'additionalCoverages',
                operator: '==',
                value: true,
              },
              adapterType: 'texts',
              config: {
                content: 'Choose at least one family members',
                type: 'p',
                margin: '0',
              },
            },
          ],
        },
        {
          fields: [
            {
              conditions: {
                field: 'additionalCoverages',
                operator: '==',
                value: true,
              },
              config: {
                controlName: 'familyMemberParents',
                option: {
                  label: 'Parents',
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
              conditions: {
                field: 'additionalCoverages',
                operator: '==',
                value: true,
              },
              config: {
                controlName: 'familyMembersSpouse',
                option: {
                  label: 'Spouse',
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
              conditions: {
                field: 'additionalCoverages',
                operator: '==',
                value: true,
              },
              config: {
                controlName: 'familyMembersChildren',
                option: {
                  label: 'Children',
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
              conditions: {
                field: 'additionalCoverages',
                operator: '==',
                value: true,
              },
              config: {
                controlName: 'familyMembersPets',
                option: {
                  label: 'Pets',
                  checked: false,
                },
                margin: '0',
              },
              adapterType: 'checkbox',
            },
          ],
        },
      ],
    },
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
              conditions: { field: 'gender', operator: '!=', value: 'other' },
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
                content:
                  'Multiple single checkboxes (with the first 3 with the property margin: "0")',
                type: 'p',
                margin: '0',
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
                content: 'Heading Large (h1)',
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
                content: 'Heading Medium (h2)',
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
                content: 'Heading Small (h3)',
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
                content: 'Paragraph (p)',
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
                listTitle: 'Unordered List (ul) title is optional',
                listItems: ['Item 1', 'Item 2', 'Item 3'],
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
                listTitle: 'Ordered List (ol) title is optional',
                listItems: ['Item 1', 'Item 2', 'Item 3'],
                type: 'ol',
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
                  'This is a blockquote. In reality, you might need to create wrapper components for these HTML elements or use a different approach to create the elements dynamically.',
                type: 'blockquote',
              },
              adapterType: 'texts',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                content: 'Font style bold',
                isBold: true,
                type: 'p',
                margin: '0',
              },
              adapterType: 'texts',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                content: 'Font style italic',
                isItalic: true,
                type: 'p',
                margin: '0',
              },
              adapterType: 'texts',
            },
          ],
        },
        {
          fields: [
            {
              config: {
                content: 'Font style underline',
                isUnderline: true,
                type: 'p',
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
                placeholder: 'Input type text.',
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
              conditions: { field: 'gender', operator: '!=', value: 'other' },
              config: {
                label: 'Last Name',
                type: 'text',
                controlName: 'lastName',
                placeholder: 'Input type text.',
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
                placeholder: 'Input type email.',
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
                placeholder: 'Input type password.',
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
                placeholder: 'Input type text. Example: 123456789',
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
                placeholder: 'Input type date.',
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
                label: 'Years employed',
                type: 'number',
                controlName: 'yearsEmployed',
                placeholder: 'Input type number.',
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
                placeholder: 'Input type url. Example: https://www.example.com',
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
                placeholder:
                  'Input type textarea. The default number of rows is 4.',
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
