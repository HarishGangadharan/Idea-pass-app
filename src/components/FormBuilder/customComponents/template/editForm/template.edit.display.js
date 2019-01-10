export default [
  {
    weight: 0,
    type: 'textfield',
    input: true,
    key: 'label',
    label: 'Label',
    placeholder: 'Field Label',
    tooltip: 'The label for this field that will appear next to it.',
    validate: {
      required: true
    }
  },
  {
    weight: 10,
    type: 'checkbox',
    label: 'Hide Label',
    tooltip: 'Hide the label of this component. This allows you to show the label in the form builder, but not when it is rendered.',
    key: 'hideLabel',
    input: true
  },
  {
    type: 'radio',
    inputType: 'radio',
    label: 'Relationship',
    key: 'relationship',
    weight: 20,
    values: [
      { label: 'One to one', value: 'oneToOne' },
      { label: 'One to many', value: 'oneToMany' },
      { label: 'Many to many', value: 'manyToMany' }
    ],
    inline: true,
    labelPosition: "left-bottom",
    labelWidth: 10,
    defaultValue: 'oneToOne'
  },
  {
    type: 'radio',
    inputType: 'radio',
    label: 'Mapping type',
    key: 'mappingType',
    weight: 30,
    values: [
      { label: 'Embedded', value: 'embedded' },
      { label: 'Linking', value: 'linking' }
    ],
    inline: true,
    labelPosition: "left-bottom",
    labelWidth: 20,
    defaultValue: 'embedded'
  }
];
