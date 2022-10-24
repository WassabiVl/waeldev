<template>
  <q-btn v-if="loggedIn" color="secondary" glossy icon="dashboard" round @click="toHomePage"/>
</template>

<script>
import { AuthStore } from '../../store/AuthStore';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'HomePage',
  setup () {
    const router = useRouter();
    const authStore = AuthStore();
    const loggedIn = computed(() => {
      return authStore.loggedIn;
    });
    const toHomePage = function () {

    };
    return {
      authStore,
      loggedIn,
      router,
      toHomePage
    };
  }
};
</script>
