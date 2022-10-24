import {
  TypeField,
  NameField,
  LabelField,
  InfoField,
  DescriptionField,
  TextField,
  BoolValueField,
  DefaultField_checkbox,
  SubmitField,
  BeforeField,
  BetweenField,
  AfterField,
  SizeField,
  ColumnsField,
  FieldNameField,
  ValidationField,
  ConditionsField,
  DisabledField,
  IdField
} from '@vueform/builder';

export default {
  label: 'Timer checkbox',
  description: 'set timer for elution',
  icon: 'https://domain.com/user-element-icon.svg',
  category: 'custom',
  schema: {
    type: 'timer'
  },
  sections: {
    properties: {
      name: 'properties',
      label: 'Properties',
      fields: {
        type: { type: TypeField },
        name: { type: NameField },
        label: { type: LabelField },
        tooltip: { type: InfoField },
        description: { type: DescriptionField }
      }
    },
    options: {
      name: 'options',
      label: 'Options',
      fields: {
        text: { type: TextField },
        boolValue: { type: BoolValueField }
      }
    },
    data: {
      name: 'data',
      label: 'Data',
      fields: {
        default: { type: DefaultField_checkbox },
        submit: { type: SubmitField }
      }
    },
    decorators: {
      name: 'decorators',
      label: 'Decorators',
      fields: {
        before: { type: BeforeField },
        between: { type: BetweenField },
        after: { type: AfterField }
      }
    },
    layout: {
      name: 'layout',
      label: 'Layout',
      fields: {
        size: { type: SizeField },
        columns: { type: ColumnsField }
      }
    },
    validation: {
      name: 'validation',
      label: 'Validation',
      fields: {
        fieldName: { type: FieldNameField },
        validation: { type: ValidationField }
      }
    },
    conditions: {
      name: 'conditions',
      label: 'Conditions',
      fields: {
        conditions: { type: ConditionsField }
      }
    },
    attributes: {
      name: 'attributes',
      label: 'Attributes',
      fields: {
        disabled: { type: DisabledField },
        id: { type: IdField }
      }
    }
  },
  separators: {
    properties: [
      ['type', 'name'],
      ['label', 'tooltip'],
      ['description']
    ],
    options: [
      ['text'],
      ['boolValue']
    ],
    layout: [
      ['size'],
      ['columns']
    ],
    validation: [
      ['fieldName'],
      ['validation']
    ],
    attributes: [
      ['disabled', 'id']
    ]
  }
};
