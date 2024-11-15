export const OwnerUiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/name',
        },
        {
          type: 'Control',
          scope: '#/properties/firstname',
        },
      ],
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/emails',
          options: {
            detail: {
              type: 'VerticalLayout',
              elements: [
                {
                  type: 'Control',
                  scope: '#/properties/email',
                },
              ],
            },
          },
        },
      ],
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/addresses',
          options: {
            elementLabelProp: 'name',
            detail: {
              type: 'VerticalLayout',
              elements: [
                {
                  type: 'HorizontalLayout',
                  elements: [
                    {
                      type: 'Control',
                      scope: '#/properties/street',
                    },
                    {
                      type: 'Control',
                      scope: '#/properties/number',
                    },
                  ],
                },
                {
                  type: 'HorizontalLayout',
                  elements: [
                    {
                      type: 'Control',
                      scope: '#/properties/postalCode',
                    },
                    {
                      type: 'Control',
                      scope: '#/properties/city',
                    },
                  ],
                },
                {
                  type: 'Control',
                  scope: '#/properties/country',
                },
              ],
            },
          },
        },
      ],
    },
  ],
};
