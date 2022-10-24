<template>
  <q-card>
    <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg"/>

    <q-card-section class="absolute absolute-center text-center">
      <q-avatar class="shadow-10" size="100px">
        <img src="https://cdn.quasar.dev/img/avatar6.jpg">
      </q-avatar>
    </q-card-section>

    <q-card-section class="q-pt-none q-mt-xl">
      <div class="text-subtitle1">
        $・Italian, Cafe
      </div>
      <div class="text-caption text-grey">
        Small plates, salads & sandwiches in an intimate setting.
      </div>
    </q-card-section>

    <q-separator/>

    <q-card-actions>
      <q-btn flat icon="event" round/>
      <q-btn color="primary" flat>
        Reserve
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardCafe'
});
</script>

<style scoped>

</style>
