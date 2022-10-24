import {
  TypeField,
  NameField,
  LabelField,
  InfoField,
  DescriptionField,
  BeforeField,
  BetweenField,
  AfterField,
  SizeField,
  ColumnsField,
  ConditionsField
} from '@vueform/builder';

export default {
  categories: [
    {
      label: 'Fields',
      key: 'fields'
    },
    {
      label: 'Static',
      key: 'static'
    },
    {
      label: 'Structure',
      key: 'structure'
    },
    {
      label: 'Custom',
      key: 'custom'
    }
  ],
  element: {
    types: {
      custom: {
        label: 'custom selector',
        description: 'sample test',
        icon: 'https://domain.com/user-element-icon.svg',
        category: 'custom',
        schema: {
          type: 'custom'
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
            label: 'custom options',
            fields: {
              // ... custom fields will come here
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
          conditions: {
            name: 'conditions',
            label: 'Conditions',
            fields: {
              conditions: { type: ConditionsField }
            }
          }
        }, // <- element type
        separators: {
          properties: [
            ['type', 'name'],
            ['label', 'info'],
            ['description']
          ],
          layout: [
            ['size'],
            ['columns']
          ]
        } // <- element type
      }
      // ...
    }
  }
};
