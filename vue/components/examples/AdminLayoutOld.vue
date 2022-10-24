<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          aria-label="Menu"
          dense
          flat
          icon="menu"
          round
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          {{ $t('user.toolbartitle') }}
        </q-toolbar-title>
        <q-space/>
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn v-if="$q.screen.gt.sm" :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'" color="white"
                 dense flat
                 round
                 @click="$q.fullscreen.toggle()">
          </q-btn>
          <!--
           <q-btn color="white" dense flat href="https://github.com/pratik227/quasar-admin" icon="fab fa-github" round
                  target="_blank" type="a">
           </q-btn>
           <q-btn dense flat href="https://github.com/sponsors/pratik227" icon="fas fa-heart" round style="color:#9d4182 !important;"
                  target="_blank" type="a">
           </q-btn>
           <q-btn color="white" dense flat icon="notifications" round>
             <q-badge color="red" floating text-color="white">
               5
             </q-badge>
             <q-menu
             >
               <q-list style="min-width: 100px">
                 <messages></messages>
                 <q-card class="text-center no-shadow no-border">
                   <q-btn class="text-indigo-8" dense flat label="View All"
                          style="max-width: 120px !important;"></q-btn>
                 </q-card>
               </q-list>
             </q-menu>
           </q-btn>
           -->
          <q-btn flat round>
            <q-avatar size="26px">
              <img alt="avatar" src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="bg-primary text-white"
      show-if-above
    >
      <q-list>
        <q-item active-class="q-item-no-link-highlighting" to="/home">
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Homepage</q-item-label>
          </q-item-section>
        </q-item>
        <q-item active-class="q-item-no-link-highlighting" to="/admin/Index">
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Customer Dashboard</q-item-label>
          </q-item-section>
        </q-item>

        <!--
        <q-item active-class="q-item-no-link-highlighting" to="/admin">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item active-class="q-item-no-link-highlighting" to="/admin/Dashboard2">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>CRM Dashboard</q-item-label>
          </q-item-section>
        </q-item>-->
        <q-item active-class="q-item-no-link-highlighting" to="/admin/vueForm">
          <q-item-section avatar>
            <q-icon name="vueForm"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Vue Form</q-item-label>
          </q-item-section>
        </q-item>
        <!--
        <q-expansion-item
            icon="pages"
            label="Pages"
        >
          <q-list class="q-pl-lg">
            <q-item active-class="q-item-no-link-highlighting" to="/admin/Lock">
              <q-item-section avatar>
                <q-icon name="lock"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Lock Screen</q-item-label>
              </q-item-section>
            </q-item>
            <q-item active-class="q-item-no-link-highlighting" to="/admin/Lock-2">
              <q-item-section avatar>
                <q-icon name="lock"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Lock Screen - 2</q-item-label>
              </q-item-section>
            </q-item>
            <q-item active-class="q-item-no-link-highlighting" to="/admin/Pricing">
              <q-item-section avatar>
                <q-icon name="list"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Pricing</q-item-label>
              </q-item-section>
            </q-item>
            <q-item-label class="text-weight-bolder text-white" header>Generic</q-item-label>
            <q-item active-class="q-item-no-link-highlighting" to="/admin/Profile">
              <q-item-section avatar>
                <q-icon name="person"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>User Profile</q-item-label>
              </q-item-section>
            </q-item>
            <q-item active-class="q-item-no-link-highlighting" to="/admin/Maintenance">
              <q-item-section avatar>
                <q-icon name="settings"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Maintenance</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
        <q-expansion-item
            icon="map"
            label="Maps"
        >
          <q-list class="q-pl-lg">
            <q-item active-class="q-item-no-link-highlighting" to="/admin/Map">
              <q-item-section avatar>
                <q-icon name="map"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Map</q-item-label>
              </q-item-section>
            </q-item>
            <q-item active-class="q-item-no-link-highlighting" to="/admin/MapMarker">
              <q-item-section avatar>
                <q-icon name="location_on"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Map Marker</q-item-label>
              </q-item-section>
            </q-item>
            <q-item active-class="q-item-no-link-highlighting" to="/admin/StreetView">
              <q-item-section avatar>
                <q-icon name="streetview"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Street View</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-item active-class="q-item-no-link-highlighting" to="/admin/Mail">
          <q-item-section avatar>
            <q-icon name="email"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Mail</q-item-label>
          </q-item-section>
        </q-item>

        <q-item active-class="q-item-no-link-highlighting" to="/admin/directory">
          <q-item-section avatar>
            <q-icon name="card_giftcard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Directory</q-item-label>
          </q-item-section>
        </q-item>

        <q-item active-class="q-item-no-link-highlighting" to="/admin/TreeTable">
          <q-item-section avatar>
            <q-icon name="list"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>TreeTable</q-item-label>
          </q-item-section>
        </q-item>
        <q-item active-class="q-item-no-link-highlighting" to="/admin/Charts">
          <q-item-section avatar>
            <q-icon name="insert_chart"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Charts</q-item-label>
          </q-item-section>
        </q-item>
        <q-item active-class="q-item-no-link-highlighting" to="/admin/Footer">
          <q-item-section avatar>
            <q-icon name="info"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Footer</q-item-label>
          </q-item-section>
        </q-item>
        <q-item active-class="q-item-no-link-highlighting" to="/admin/CardHeader">
          <q-item-section avatar>
            <q-icon name="card_giftcard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Card Header</q-item-label>
          </q-item-section>
        </q-item>
        <q-item active-class="q-item-no-link-highlighting" to="/admin/Cards">
          <q-item-section avatar>
            <q-icon name="card_giftcard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Cards</q-item-label>
          </q-item-section>
        </q-item>

        <q-item active-class="q-item-no-link-highlighting" to="/admin/Tables">
          <q-item-section avatar>
            <q-icon name="table_chart"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Tables</q-item-label>
          </q-item-section>
        </q-item>
        <q-item active-class="q-item-no-link-highlighting" to="/admin/Contact">
          <q-item-section avatar>
            <q-icon name="person"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Contact</q-item-label>
          </q-item-section>
        </q-item>

        <q-item active-class="q-item-no-link-highlighting" to="/admin/Checkout">
          <q-item-section avatar>
            <q-icon name="check_circle_outline"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Checkout</q-item-label>
          </q-item-section>
        </q-item>
-->
        <!--        not completed-->
        <q-item active-class="q-item-no-link-highlighting" to="/admin/Calendar">
          <q-item-section avatar>
            <q-icon name="date_range"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Calendar</q-item-label>
          </q-item-section>
        </q-item>

        <!--        not completed-->
        <!--        <q-item to="/admin/Taskboard" active-class="q-item-no-link-highlighting">-->
        <!--          <q-item-section avatar>-->
        <!--            <q-icon name="done"/>-->
        <!--          </q-item-section>-->
        <!--          <q-item-section>-->
        <!--            <q-item-label>Taskboard</q-item-label>-->
        <!--          </q-item-section>-->
        <!--        </q-item>-->

        <q-item active-class="q-item-no-link-highlighting" to="/admin/GeneratorList">
          <q-item-section avatar>
            <q-icon name="date_range"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Pagination</q-item-label>
          </q-item-section>
        </q-item>
        <!--
        <q-item active-class="q-item-no-link-highlighting" to="/admin/Ecommerce">
          <q-item-section avatar>
            <q-icon name="shopping_cart"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Product Catalogues</q-item-label>
          </q-item-section>
        </q-item>
        -->
        <q-expansion-item
          icon="menu_open"
          label="Menu Levels"
        >
          <q-item active-class="q-item-no-link-highlighting" class="q-ml-xl">
            <q-item-section>
              <q-item-label>Level 1</q-item-label>
            </q-item-section>
          </q-item>
          <q-expansion-item
            :header-inset-level="0.85"
            label="Level 2"
          >
            <q-item active-class="q-item-no-link-highlighting" class="q-ml-xl" style="margin-left: 55px  !important;">
              <q-item-section>
                <q-item-label>Level 2.1</q-item-label>
              </q-item-section>
            </q-item>
            <q-expansion-item
              :header-inset-level="1"
              label="Level 2.2"
            >
              <q-item active-class="q-item-no-link-highlighting" style="margin-left: 65px  !important;">
                <q-item-section>
                  <q-item-label>Level 2.2.1</q-item-label>
                </q-item-section>
              </q-item>
              <q-item active-class="q-item-no-link-highlighting" style="margin-left: 65px  !important;">
                <q-item-section>
                  <q-item-label>Level 2.2.2</q-item-label>
                </q-item-section>
              </q-item>
            </q-expansion-item>
          </q-expansion-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <Suspense>
        <router-view/>
      </Suspense>
    </q-page-container>

    <q-footer bordered class="bg-grey-4 text-primary">
      <q-tabs active-color="primary" class="text-black" indicator-color="transparent" no-caps>
        <q-route-tab exact replace to="/home/login" v-bind:label="$t('footerlogin')"/>
        <q-route-tab exact replace to="/home/register" v-bind:label="$t('footerregister')"/>
        <q-route-tab exact replace to="/home" v-bind:label="$t('footerhomepage')"/>
        <q-route-tab exact replace to="/admin" v-bind:label="$t('footeradminpanel')"/>
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
import EssentialLink from './EssentialLink.vue';
import Messages from '../layout/admin/Messages';

import '../styles/homepage.scss';

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    Messages
  },

  setup () {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
});
</script>
