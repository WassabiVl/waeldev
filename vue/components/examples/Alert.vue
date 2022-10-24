<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog :alertStatus="alertStatus">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ message }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn v-close-popup color="primary" flat label="OK"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'AlertMessage',
  setup () {
    return {
      props: defineProps(['message', 'alertStatus'])
    };
  }

});
</script>

<style scoped>

</style>
