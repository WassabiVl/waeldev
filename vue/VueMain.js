import './styles/vueFormStyle.scss';
import { createApp } from 'vue';
import App from './App.vue';
import { loadFonts } from './plugins/webfontloader';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import { createPinia } from 'pinia';
import cors from 'cors';
import router from './routing/routing';
import i18n from './boot/i18n';
import Vueform from '@vueform/vueform/plugin';
import vueformConfig from './../vueform.config';
import vueformBuilderConfig from './../builder.config';
import vueFormBuilder from '@vueform/builder';

loadFonts();
const pinia = createPinia();
createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(pinia).use(cors).use(router).use(i18n)
  .use(Vueform, vueformConfig)
  .use(vueFormBuilder, vueformBuilderConfig)

  .mount('#app');
