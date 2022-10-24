<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 text-grey-8">
        Team Progress
      </div>
    </q-card-section>
    <q-separator color="white"/>
    <q-card-section class="q-pa-none">
      <q-table :columns="column" :rows="data3" class="" hide-bottom>
        <template v-slot:body-cell-Name="props">
          <q-td :props="props" style="max-width: 100px">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img :src="props.row.avatar">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ props.row.name }}</q-item-label>
                <q-item-label caption class="">{{ props.row.des }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-td>
        </template>
        <template v-slot:body-cell-Task="props">
          <q-td :props="props">
            <q-item>
              <q-item-section>
                <q-item-label>
                    <span class="text-blue">
                      <q-icon v-if="props.row.type=='error'" color="blue" name="bug_report" size="20px"></q-icon>
                      <q-icon v-if="props.row.type=='info'" color="blue" name="settings" size="20px"></q-icon>
                      <q-icon v-if="props.row.type=='success'" color="blue" name="flag" size="20px"></q-icon>
                      <q-icon v-if="props.row.type=='warning'" color="blue" name="fireplace" size="20px"></q-icon>
                      {{ props.row.issue }}
                    </span>
                  <q-chip v-if="props.row.type=='success'" :label="props.row.type"
                          class="float-right text-white text-capitalize"
                          color="positive"></q-chip>
                  <q-chip v-if="props.row.type=='info'" :label="props.row.type"
                          class="float-right text-white text-capitalize"
                          color="info"></q-chip>
                  <q-chip v-if="props.row.type=='warning'" :label="props.row.type"
                          class="float-right text-white text-capitalize"
                          color="warning"></q-chip>
                  <q-chip v-if="props.row.type=='error'" :label="props.row.type"
                          class="float-right text-white text-capitalize"
                          color="negative"></q-chip>
                </q-item-label>
                <q-item-label caption class="">
                  <q-linear-progress :color="getColor(props.row.Progress)" :value="props.row.Progress/100" dark
                  />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-td>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

const column = [
  { name: 'Name', label: 'Name', field: 'name', sortable: true, align: 'left' },
  { name: 'Task', label: 'Task', field: 'task', sortable: true, align: 'left' }
];

const data3 = [
  {
    name: 'Pratik Patel',
    des: 'Developer',
    Progress: 70,
    type: 'info',
    issue: '#125',
    avatar: 'https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4'

  },
  {
    name: 'Mayank Patel',
    des: 'Developer',
    Progress: 60,
    type: 'success',
    issue: '#1425',
    avatar: 'https://avatars2.githubusercontent.com/u/27857088?s=400&u=a898efbc753d93cf4c2070a7cf3b05544b50deea&v=4'
  },
  {
    name: 'Mayur Patel',
    des: 'Developer',
    Progress: 30,
    type: 'warning',
    issue: '#1475',
    avatar: 'https://avatars0.githubusercontent.com/u/55240045?s=400&u=cf9bffc2bd2d8e42ca6e5abf40ddd6c1a03ce2860&v=4'
  },
  {
    name: 'Jeff Galbraith',
    des: 'Developer',
    Progress: 100,
    type: 'success',
    issue: '#134',
    avatar: 'https://avatars1.githubusercontent.com/u/10262924?s=400&u=9f601b344d597ed76581e3a6a10f3c149cb5f6dc&v=4'
  }
];

export default defineComponent({
  name: 'TableProgress',
  setup () {
    return {
      column,
      data3,
      getColor (val) {
        if (val > 70 && val <= 100) {
          return 'green';
        } else if (val > 50 && val <= 70) {
          return 'blue';
        }
        return 'red';
      }
    };
  }

});
</script>

<style scoped>

</style>
