<template>
  <section class="w-full flex justify-center items-center my-10">
    <form class="">
      <div class="form-group">
        <label class="text-gray-600 font-semibold text-lg">Phone Number</label>
        <div v-for="(input, index) in phoneNumbers"
             :key="`phoneInput-${index}`"
             class="input wrapper flex items-center">
          <q-input rounded outlined v-model="input.phone" label="Enter Phone Number" />
          <!--          Add Svg Icon-->
          <q-icon name="add_circle" size="lg" @click="addField" clickable/>

          <!--          Remove Svg Icon-->
          <q-icon name="remove_circle" size="lg" v-show="phoneNumbers.length > 1"
                  @click="removeField(index)"/>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'AddRemove',
  setup () {
    const phoneNumbers = ref([{ phone: '' }]);
    const addField = function () {
      phoneNumbers.value.push({ value: '' });
    };
    const removeField = function (index) {
      phoneNumbers.value.splice(index, 1);
    };
    return {
      phoneNumbers,
      addField,
      removeField
    };
  }
};
</script>

<style scoped>

</style>
