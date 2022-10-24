<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        aria-label="Menu"
        dense
        flat
        icon="menu"
        round
        @click="toggleLeftDrawer"
      />
      <q-toolbar-title id="customerlayout">
        {{ t('user.toolbartitle') }}
      </q-toolbar-title>
      <q-space/>

      <div class="q-gutter-sm row items-center no-wrap">
        <log-out/>
        <local-switcher/>
        <q-btn v-if="$q.screen.gt.sm" :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'" color="white"
               dense flat
               round
               @click="$q.fullscreen.toggle()">
        </q-btn>

      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderUserView',
  props: ['t', 'toggleLeftDrawer'],

  components: {
    LocalSwitcher: defineAsyncComponent(() => import('./LocalSwitcher')),
    LogOut: defineAsyncComponent(() => import('./security/LogOut'))

  }
});
</script>

<style scoped>

</style>
