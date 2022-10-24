<template>
  <q-btn v-if="loggedIn" color="secondary" glossy icon="logout" round @click="logout"/>
</template>

<script>
import { AuthStore } from '../../store/AuthStore';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'LogOut',
  setup () {
    const router = useRouter();
    const authStore = AuthStore();
    const loggedIn = computed(() => {
      return authStore.loggedIn;
    });
    const logout = function () {
      authStore.logout().then(() => {
        return router.push({ name: 'home' });
      });
    };
    return {
      authStore,
      loggedIn,
      router,
      logout
    };
  }

};
</script>
