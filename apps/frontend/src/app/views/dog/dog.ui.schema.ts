export const DogUiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/name',
    },
    {
      type: 'Control',
      scope: '#/properties/age',
    },
    {
      type: 'Control',
      scope: '#/properties/totalTeeths',
    },
  ],
};
