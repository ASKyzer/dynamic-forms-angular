export const TEXT_BUILDER_CONFIG = {
  sections: [
    {
      rows: [
        {
          fields: [
            {
              adapterType: 'dropdown',
              config: {
                label: 'Text Type',
                controlName: 'textType',
                isRequired: true,
                options: [
                  { label: 'Heading Large', value: 'h1' },
                  { label: 'Heading Medium', value: 'h2' },
                  { label: 'Heading Small', value: 'h3' },
                  { label: 'Paragraph', value: 'p' },
                  { label: 'Blockquote', value: 'blockquote' },
                  { label: 'Line Break', value: 'line' },
                  { label: 'Unordered List', value: 'ul' },
                  { label: 'Ordered List', value: 'ol' },
                ],
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
              conditions: {
                or: [
                  { field: 'textType', operator: '==', value: 'h1' },
                  { field: 'textType', operator: '==', value: 'h2' },
                  { field: 'textType', operator: '==', value: 'h3' },
                  { field: 'textType', operator: '==', value: 'p' },
                  { field: 'textType', operator: '==', value: 'blockquote' },
                ],
              },
              config: {
                label: 'Content',
                controlName: 'content',
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
              conditions: {
                or: [
                  { field: 'textType', operator: '==', value: 'ul' },
                  { field: 'textType', operator: '==', value: 'ol' },
                ],
              },
              config: {
                label: 'List Title',
                controlName: 'listTitle',
                placeholder: 'Add a title for the list (optional)',
              },
            },
          ],
        },
        {
          fields: [
            {
              adapterType: 'input',
              conditions: {
                or: [
                  { field: 'textType', operator: '==', value: 'ul' },
                  { field: 'textType', operator: '==', value: 'ol' },
                ],
              },
              config: {
                label: 'List Items',
                controlName: 'listItems',
                placeholder:
                  'Add your list items separated by commas (item one, item two, item three)',
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
              adapterType: 'checkbox',
              conditions: {
                or: [
                  { field: 'textType', operator: '==', value: 'h1' },
                  { field: 'textType', operator: '==', value: 'h2' },
                  { field: 'textType', operator: '==', value: 'h3' },
                  { field: 'textType', operator: '==', value: 'p' },
                  { field: 'textType', operator: '==', value: 'blockquote' },
                  { field: 'textType', operator: '==', value: 'ul' },
                  { field: 'textType', operator: '==', value: 'ol' },
                ],
              },
              config: {
                label: 'Choose Font Style',
                controlName: 'fontStyle',
                isGroup: true,
                options: [
                  { label: 'Bold', value: 'bold' },
                  { label: 'Italic', value: 'italic' },
                  { label: 'Underline', value: 'underline' },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};
