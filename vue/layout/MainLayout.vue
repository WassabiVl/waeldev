<template>
  <q-layout class="shadow-2 rounded-borders" view="lHh lpr lFf">
    <header-view/>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <footer-view/>
  </q-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'MainLayout',
  components: {
    FooterView: defineAsyncComponent(() => import('../components/FooterView')),
    HeaderView: defineAsyncComponent(() => import('../components/HeaderView'))
  }

};
</script>

<style lang="scss">
@import '../styles/mainlayout.scss';

</style>
