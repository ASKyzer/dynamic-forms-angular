export const FORM_CONFIG = [
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
          required: true,
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
];
