<template>
  <q-footer bordered class="bg-grey-4 text-primary">
    <q-card-section class="col-12 row text-center q-pa-lg">
      <div class="col-12 q-col-gutter-x-lg">
        <router-link class="text-navlinks-footer text-weight-bold" to="">
          {{ t('footerhomepage') }}
        </router-link>
        <router-link class="text-navlinks-footer text-weight-bold" to="">
          {{ t('footerlogin') }}
        </router-link>
        <router-link class="text-navlinks-footer text-weight-bold" to="">
          {{ t('footerregister') }}
        </router-link>
        <router-link class="text-navlinks-footer text-weight-bold" to="">
          {{ t('footeradminpanel') }}
        </router-link>
        <router-link class="text-navlinks-footer text-weight-bold" to="">
          {{ t('footerimprint') }}
        </router-link>
        <router-link class="text-navlinks-footer text-weight-bold" to="">
          {{ t('footeragb') }}
        </router-link>
        <router-link class="text-navlinks-footer text-weight-bold" to="">
          {{ t('footerprivacy') }}
        </router-link>
      </div>
      <q-separator/>
      <div class="text-body1 col-12 q-mt-sm text-grey-8 text-weight-bold">
        © 2022 WINKGEN Medical Systems GmbH & Co. KG
      </div>
    </q-card-section>
  </q-footer>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'FooterView',
  setup () {
    const { t } = useI18n();
    return {
      t
    };
  }
});
</script>
