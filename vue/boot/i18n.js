import { createI18n } from 'vue-i18n';
import messages from '../i18n';
import datetimeFormats from '../i18n/datetimeFormats';
import numberFormats from '../i18n/numberFormats';

const i18n = createI18n({
  locale: 'en',
  messages,
  datetimeFormats,
  numberFormats,
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true
});

export default i18n;
