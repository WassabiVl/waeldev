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
      user: {
        label: 'custom selector',
        description: 'sample test',
        icon: 'https://domain.com/user-element-icon.svg',
        category: 'custom',
        schema: {
          type: 'custom',
        },
        sections: 'text', // <- element type
        separators: 'text', // <- element type
      },
      // ...
    }
  }
}
