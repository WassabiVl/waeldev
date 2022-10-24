<template>
  <q-card>
    <q-card-section class="text-center">
      <q-avatar class="shadow-10" size="100px">
        <img :src="avatar">
      </q-avatar>
    </q-card-section>

    <q-card-section class="q-pt-none text-center ">
      <div class="text-h6  text-grey-8">
        {{ name }}
      </div>
      <div class="text-caption text-grey-8">
        {{ des }}
      </div>
    </q-card-section>

    <q-card-actions align="center">
      <q-btn class="bg-indigo-7 text-white" flat icon="fab fa-facebook" round/>
      <q-btn class="bg-info text-white" flat icon="fab fa-twitter" round/>
      <q-btn class="bg-indigo-8 text-white" flat icon="fab fa-instagram" round/>
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardProfile',
  props: ['avatar', 'name', 'des']
});
</script>

<style scoped>

</style>
