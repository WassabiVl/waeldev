<template>
  <q-footer bordered class="bg-grey-4 text-primary">
    <q-tabs active-color="primary" class="text-black" indicator-color="transparent" no-caps>
      <q-route-tab exact replace :to="{name:'home'}" :label="t('footerhomepage')"/>
      <q-route-tab exact replace :to="{name:'imprint'}" :label="t('footerimprint')"/>
      <q-route-tab exact replace :to="{name:'agb'}" :label="t('footeragb')"/>
      <q-route-tab exact replace :to="{name:'privacy'}" :label="t('footerprivacy')"/>
    </q-tabs>
  </q-footer>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'FooterViewUser',
  setup () {
    const { t } = useI18n();
    return {
      t
    };
  }
});
</script>

<style scoped>

</style>
