const plugin = require('tailwindcss/plugin');

const builder = plugin((context) => {
  const { theme, addUtilities, addVariant, e } = context;
  const prefix = context.addUserCss === undefined ? context.prefix : s => s;

  addUtilities({
    '.align-icon': {
      verticalAlign: '-0.125em'
    },
    '.border-t-0-imp': {
      borderTop: '0 !important'
    },
    '.cursor-auto-imp': {
      cursor: 'auto'
    },
    '.border-primary-500-imp': {
      borderColor: theme('colors.primary.500')
    },
    '.has-error': {
    }
  });

  const groups = theme('groups') || [];

  groups.forEach((group) => {
    addVariant(`group-${group}-hover`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `${prefix(`.group-${group}`)}:hover .${e(`group-${group}-hover${separator}${className}`)}`;
      });
    });
  });
}, {
  theme: {
    groups: ['container'],
    extend: {
      boxShadow: {
        mini: '1px 1px 0px 0px rgba(0,0,0,0.15)',
        box: '0px 0px 24px 0 rgba(0,0,0,0.04)',
        'box-strong': '0px 0px 10px 0 rgba(0,0,0,0.10)',
        'box-strong-dark': '0px 0px 10px 0 rgba(0,0,0,0.25)',
        'box-circle': '0px 0px 20px 0 rgba(0,0,0,0.08)'
      },
      borderWidth: {
        3: '3px'
      },
      lineHeight: {
        tighter: '1.125'
      },
      minHeight: {
        98: '24.5rem'
      },
      minWidth: {
        120: '30rem'
      },
      maxWidth: {
        5: '1.25rem',
        '100vw-194.5': 'calc(100vw - 48.625rem)'
      },
      maxHeight: {
        5: '1.25rem'
      },
      width: {
        1.75: '0.4375rem',
        76: '19rem',
        84: '21rem',
        85: '21.25rem',
        88: '22rem'
      },
      height: {
        1.75: '0.4375rem',
        '1em': '1em'
      },
      spacing: {
        '-85': '-21.25rem',
        '-76': '-19rem',
        '-1.5': '-0.375rem',
        '-0.75': '-0.1875rem',
        1.5: '0.375rem',
        2.25: '0.5625rem',
        2.5: '0.625rem',
        3.5: '0.875rem',
        4.5: '1.125rem',
        11.5: '2.875rem',
        12.5: '3.125rem',
        13: '3.25rem',
        14.5: '3.625rem',
        15: '3.75rem',
        26: '6.5rem',
        26.25: '6.5625rem',
        26.375: '6.59375rem',
        28: '7rem',
        '1/12': 'calc(1 / 12 * 100%)',
        'some key': {
          1.5: '0.375rem'
        }
      },
      fontSize: {
        xxs: '0.625rem',
        '0.5sm': '0.8125rem',
        '0.5md': '0.9375rem',
        '2lg': '1.1875rem',
        inherit: 'inherit'
      },
      zIndex: {
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        51: '51',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
        999: '999'
      },
      colors: {
        primary: {
          100: '#C6FFF6',
          200: '#8CFFED',
          300: '#61DAB9',
          400: '#39CDA4',
          500: '#17c495',
          600: '#13AF7D',
          700: '#0E8877',
          800: '#0C6B5E',
          900: '#063730'
        },
        gray: {
          50: '#fafbfc',
          75: '#F5F8FB',
          100: '#f1f5f9',
          150: '#ECF0F4',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          850: '#17202B',
          900: '#0f172a'
        },
        dark: {
          50: '#EFEFEF',
          100: '#DCDCDC',
          200: '#BDBDBD',
          300: '#A0A0A0',
          400: '#848484',
          500: '#737373',
          550: '#555555',
          600: '#393939',
          700: '#323232',
          750: '#292929',
          800: '#262626',
          900: '#191919',
          1000: '#121212'
        },
        code: {
          base: '#f8f8f2',
          comment: '#6272a4',
          purple: '#7c3aed',
          'light-purple': '#bd93f9',
          violet: '#2852d4',
          'light-violet': '#99b2ff',
          blue: '#21d8ff',
          teal: '#46ffe2',
          green: '#50fa7b',
          yellow: '#f1fa8c',
          orange: '#ffb86c',
          red: '#BE3030'
        }
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['group-container-hover']
    }
  }
});

module.exports = builder;
