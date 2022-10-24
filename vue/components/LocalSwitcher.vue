<template>
  <q-select v-model="locale" :options="options" exact filled replace :label="t('locale')"
            @update:model-value="val =>onChange(val)" class="locale-switcher">

  </q-select>
</template>

<script>
import { useI18n } from 'vue-i18n';
export default {
  name: 'LocalSwitcher',
  setup () {
    const { t, locale } = useI18n();
    const options = [
      {
        label: 'English',
        value: 'en',
        description: 'English',
        category: '1'
      },
      {
        label: 'Deutsch',
        value: 'de',
        description: 'Deutsch',
        category: '2'
      }];
    const onChange = function (val) {
      locale.value = val.value;
      document.querySelector('html').setAttribute('lang', val.value);
    };
    return {
      options,
      t,
      locale,
      onChange
    };
  }
};
</script>

<style>
.locale-switcher {
  width: 8rem;
  background-color: #f5f5f5;
  border-color: rgb(239, 125, 33);
  border-style: solid;
  border-width: 1px;
  border-bottom-width: 0;
}
</style>
