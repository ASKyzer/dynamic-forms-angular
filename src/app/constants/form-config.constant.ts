export const FORM_CONFIG = [
  {
    sectionTitle: 'Checkbox Adapters',
    sectionContent: [
      {
        row: [
          {
            contentConfig: {
              label: 'Single checkbox',
              type: 'checkbox',
              controlName: 'terms',
              isRequired: true,
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
        row: [
          {
            contentConfig: {
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
        row: [
          {
            contentConfig: {
              content:
                'Multiple single checkboxes (with the first 3 with the property margin: "0")',
              type: 'p',
            },
            adapterType: 'texts',
          },
        ],
      },
      {
        row: [
          {
            contentConfig: {
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
        row: [
          {
            contentConfig: {
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
        row: [
          {
            contentConfig: {
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
        row: [
          {
            contentConfig: {
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
    sectionTitle: 'Texts Adapters',
    sectionContent: [
      {
        row: [
          {
            contentConfig: {
              content: 'Header 1 Large',
              isBold: true,
              type: 'h1',
            },
            adapterType: 'texts',
          },
        ],
      },
      {
        row: [
          {
            contentConfig: {
              content: 'Header 2 Medium',
              isBold: true,
              type: 'h2',
            },
            adapterType: 'texts',
          },
        ],
      },
      {
        row: [
          {
            contentConfig: {
              content: 'Header 3 Small',
              type: 'h3',
            },
            adapterType: 'texts',
          },
        ],
      },
      {
        row: [
          {
            contentConfig: {
              content: 'Paragraph example',
              type: 'p',
            },
            adapterType: 'texts',
          },
        ],
      },
      {
        row: [
          {
            contentConfig: {
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
        row: [
          {
            contentConfig: {
              type: 'line',
            },
            adapterType: 'texts',
          },
        ],
      },
      {
        row: [
          {
            contentConfig: {
              listItems: ['Item 1', 'Item 2', 'Item 3'],
              type: 'ol',
              isItalic: true,
            },
            adapterType: 'texts',
          },
        ],
      },
      {
        row: [
          {
            contentConfig: {
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
    sectionTitle: 'Input Adapters',
    sectionContent: [
      {
        row: [
          {
            contentConfig: {
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
            contentConfig: {
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
        row: [
          {
            contentConfig: {
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
        row: [
          {
            contentConfig: {
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
        row: [
          {
            contentConfig: {
              label: 'Phone',
              type: 'text',
              controlName: 'phone',
              placeholder: '123456789',
              isRequired: true,
              validation: [
                {
                  type: 'required',
                },
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
        row: [
          {
            contentConfig: {
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
        row: [
          {
            contentConfig: {
              label: 'Website',
              type: 'url',
              controlName: 'website',
              placeholder: 'https://example.com',
              validation: [
                {
                  type: 'required',
                },
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
        row: [
          {
            contentConfig: {
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
];
