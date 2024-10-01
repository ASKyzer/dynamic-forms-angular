export const FORM_CONFIG = [
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
              required: true,
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
              required: true,
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
              required: true,
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
              required: true,
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
              required: true,
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
              required: true,
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
              required: true,
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
