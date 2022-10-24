<template>
  <q-page>
    <q-card class="bg-transparent no-shadow no-border">
      <q-card-section class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
          <!--          <div class="text-h6 float-left q-ml-md q-mt-sm">Pagination With Filters</div>-->
          <q-space/>
          <q-select v-model="type" :options="['All','Free','Paid']" class="float-right" dense label="Category"
                    outlined style="min-width: 200px"/>
        </div>
      </q-card-section>
      <q-card-section class="q-mx-sm">
        <div class="row q-col-gutter-lg">
          <div v-for="data in getData2" class="col-lg-3 col-sm-12 col-xs-12 col-md-3">
            <q-card class="text-white" style="background-color: #292845">
              <q-img :src="data.img">
                <template v-slot:loading>
                  <div class="text-subtitle1 text-white">
                    Loading...
                  </div>
                </template>
              </q-img>
              <q-separator></q-separator>
              <q-card-section class="text-h5 text-center">{{ data.title }}</q-card-section>
              <q-card-section class="text-justify">
                <div>{{ data.text }}</div>
              </q-card-section>
              <q-card-actions>
                <q-btn
                  class="bg-transparent text-capitalize"
                  color
                  flat
                  icon="remove_red_eye"
                  label="200 Views"
                />

                <q-space/>

                <q-btn class="bg-transparent" color flat icon="chat_bubble" label="56"/>
              </q-card-actions>

            </q-card>
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-pagination
          v-model="page"
          :input="true"
          :max="Math.ceil(getData().length/totalPages)"
          :min="currentPage"
          input-class="text-orange-10"
        >
        </q-pagination>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

const cards_data = [
  {
    img: 'https://placeimg.com/500/300/nature?t=' + Math.random(),
    type: 'free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Title 1'
  },
  {
    img: 'https://placeimg.com/500/300/nature?t=' + Math.random(),
    type: 'paid',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Title 2'
  },
  {
    img: 'https://placeimg.com/500/300/nature?t=' + Math.random(),
    type: 'free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Title 3'
  },
  {
    img: 'https://placeimg.com/500/300/nature?t=' + Math.random(),
    type: 'free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Title 4'
  },
  {
    img: 'https://placeimg.com/500/300/nature?t=' + Math.random(),
    type: 'paid',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Title 5'
  },
  {
    img: 'https://placeimg.com/500/300/nature?t=' + Math.random(),
    type: 'free',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Title 6'
  }
];

export default defineComponent({
  name: 'CardPagination',
  setup () {
    return {
      cards_data,
      type: ref('All'),
      page: ref(1),
      currentPage: ref(1),
      nextPage: ref(null),
      totalPages: ref(4)
    };
  },
  methods: {
    getData () {
      if (this.type == 'All') {
        return cards_data;
      } else {
        const self = this;
        return this.cards_data.filter(function (item) {
          return item.type.toLowerCase() == self.type.toLowerCase();
        });
      }
    }
  },
  computed: {
    getData2 () {
      return this.getData().slice((this.page - 1) * this.totalPages, (this.page - 1) * this.totalPages + this.totalPages);
    }
  }
});
</script>

<style scoped>

</style>
