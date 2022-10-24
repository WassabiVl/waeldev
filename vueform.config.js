import en from '@vueform/vueform/locales/en';
import tailwind from '@vueform/vueform/themes/tailwind';
import builder from './vue/vueformBuilder/plugin';
import CustomElement from './vue/components/vueFormCustomElements/CustomElement';

export default {
  elements: [
    CustomElement
  ],
  theme: tailwind,
  locales: { en },
  locale: 'en',
  apiKey: 'zks0-ra3m-4sez-zuji-xso7',
  plugins: [
    builder
  ]
};
