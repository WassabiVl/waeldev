<template>

      <q-form
        class="q-gutter-md"
        @reset="onReset"
        @submit="onSubmit"
        style="background-color: white"
      >
        <q-input
          v-model="firstName"
          :rules="[ val => val && val.length > 0 || 'Please type something']"
          filled
          lazy-rules
          type="text"
          :label="t('registration.yourfirstname')"
        />
        <q-input
          v-model="lastName"
          :rules="[ val => val && val.length > 0 || 'Please type something']"
          filled
          lazy-rules
          type="text"
          :label="t('registration.yourlastname')"
        />
        <q-input
          v-model="email"
          :rules="[ val => val && val.length > 0 || 'Please type something']"
          filled
          lazy-rules
          type="email"
          :hint="t('registration.hintemail')"
          :label="t('registration.youremail')"
        />

        <q-input
          v-model="password"
          :rules="[ val => val && val.length > 0 || 'Please type something']"
          filled
          lazy-rules
          type="password"
          :label="t('registration.password')"
        />
        <q-checkbox
          v-if="!isAdmin"
          v-model="left2"
          :rules="[ val => val === true || 'Please agree to the terms']"
          checked-icon="task_alt"
          left-label
          unchecked-icon="highlight_off"
          :label="t('registration.agreeterms')"
          value="false"/>
        <div>
          <q-btn color="secondary" type="submit" :label="t('registration.submitbutton')"/>
          <q-btn class="q-ml-sm" color="primary" flat type="reset" :label="t('registration.resetbutton')"/>
        </div>
      </q-form>

</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { AuthStore } from '../store/AuthStore';

export default defineComponent({
  name: 'RegistrationComponent',
  props: ['isAdmin', 't'],
  setup (props) {
    const router = useRouter();
    const authStore = AuthStore();
    const loggedIn = computed(() => authStore.loggedIn);
    const $q = useQuasar();
    $q.loadingBar.setDefaults({
      color: 'secondary',
      size: '15px',
      position: 'bottom'
    });
    const loadingBar = $q.loadingBar;
    const email = ref(null);
    const password = ref(null);
    const left2 = ref(false);
    const firstName = ref(null);
    const lastName = ref(null);
    const onSubmit = function () {
      if (props.isAdmin === false && left2.value === false) {
        $q.notify({
          message: 'please agree to the terms to continue',
          color: 'red'
        });

        return;
      }
      loadingBar.start();

      return authStore.register(
        email.value, password.value, firstName.value, lastName.value
      ).then((r) => {
        loadingBar.stop();
        if (r.status === 'error') {
          $q.notify({
            message: r.message,
            color: 'red'
          });
          return;
        }
        $q.notify({
          message: 'success',
          color: 'green'
        });
        loadingBar.stop();
        if (props.isAdmin) {
          return router.go(0);
        }
        return router.push({ name: 'registerSuccess' });
      },
      (error) => {
        $q.notify({
          message: error,
          color: 'red'
        });
        loadingBar.stop();
      }
      );
    };
    const onReset = function () {
      email.value = null;
      password.value = null;
      firstName.value = null;
      lastName.value = null;
    };
    return {
      onReset,
      email,
      password,
      left2,
      firstName,
      lastName,
      onSubmit,
      loggedIn
    };
  }
});
</script>

<style scoped>

</style>
