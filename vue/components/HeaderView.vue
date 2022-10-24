<template>
  <q-header bordered class="bg-grey-4 text-primary">
    <q-toolbar>
      <home-page />
      <q-toolbar-title class="text-center">
        <q-avatar>
          <img alt="profile" src="../assets/profile.svg">
        </q-avatar>
        {{ t('homepage.companylabel') }}
      </q-toolbar-title>

      <div class="q-gutter-sm row items-center no-wrap">
        <log-out/>
        <local-switcher/>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'HeaderView',
  components: {
    LocalSwitcher: defineAsyncComponent(() => import('../components/LocalSwitcher')),
    LogOut: defineAsyncComponent(() => import('../components/security/LogOut')),
    HomePage: defineAsyncComponent(() => import('../components/security/HomePage'))
  },
  setup () {
    const { t } = useI18n();
    return {
      t
    };
  }
});
</script>
