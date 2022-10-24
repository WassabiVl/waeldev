<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 text-grey-8">
        {{ title }}
        <q-btn class="float-right text-capitalize text-indigo-8 shadow-3" icon="person" label="New"/>
      </div>
    </q-card-section>
    <q-card-section class="q-pa-none">
      <q-table :columns="columns" :rows="data" hide-bottom>
        <template v-slot:body-cell-Name="props">
          <q-td :props="props">
            <q-item style="max-width: 420px">
              <q-item-section avatar>
                <q-avatar>
                  <img :src="props.row.avatar" alt="avatar">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ props.row.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-td>
        </template>
        <template v-slot:body-cell-Action="props">
          <q-td :props="props">
            <q-btn dense flat icon="edit" size="sm"/>
            <q-btn class="q-ml-sm" dense flat icon="delete" size="sm"/>
          </q-td>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableActions',
  props: ['data', 'columns', 'title']
});
</script>

<style scoped>

</style>
