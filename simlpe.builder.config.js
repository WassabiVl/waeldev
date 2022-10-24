// https://github.com/vueform/builder#text
import {
  TypeField,
  NameField,
  InputTypeField,
  LabelField,
  InfoField,
  PlaceholderField,
  DescriptionField,
  DefaultField,
  SubmitField,
  AddonsField,
  BeforeField,
  BetweenField,
  AfterField,
  SizeField,
  ColumnsField,
  FieldNameField,
  ValidationField,
  ConditionsField,
  DisabledField,
  ReadonlyField,
  IdField,
  AutocompleteField,
  AttrsField
} from '@vueform/builder';

export default {
  label: 'custom selector',
  description: 'sample test',
  icon: 'https://domain.com/user-element-icon.svg',
  category: 'custom',
  schema: {
    type: 'simple'
  },
  sections: {
    properties: {
      name: 'properties',
      label: 'Properties',
      fields: {
        type: { type: TypeField },
        name: { type: NameField },
        inputType: { type: InputTypeField },
        label: { type: LabelField },
        tooltip: { type: InfoField },
        placeholder: { type: PlaceholderField },
        description: { type: DescriptionField }
      }
    },
    data: {
      name: 'data',
      label: 'Data',
      fields: {
        default: { type: DefaultField },
        submit: { type: SubmitField }
      }
    },
    decorators: {
      name: 'decorators',
      label: 'Decorators',
      fields: {
        addons: { type: AddonsField },
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
        readonly: { type: ReadonlyField },
        id: { type: IdField },
        autocomplete: { type: AutocompleteField },
        attrs: { type: AttrsField }
      }
    }
  },
  separators: {
    properties: [
      ['name', 'inputType'],
      ['label', 'tooltip'],
      ['placeholder'],
      ['description']
    ],
    decorators: [
      ['addons'],
      ['before', 'between', 'after']
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
      ['disabled', 'readonly', 'id', 'autocomplete'],
      ['attrs']
    ]
  }
};
