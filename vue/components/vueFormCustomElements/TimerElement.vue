<template>
  <ElementLayout>
    <template #element>
      <label for="scales">{{model}}</label>
      <input
        v-model="model"
        :class="classes.input"
        type="checkbox"
        name="Scales"
        :value="trueValue"
      />
      <base-timer :timer-start="model??false"/>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]>
      <slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/>
      </slot>
    </template>
  </ElementLayout>

</template>

<script>
import { ref, watch } from 'vue';
import VueformElement from '@vueform/vueform/element';

export default VueformElement({ name: 'TimerElement' }, {
  setup (props, { element }) {
    console.log(element);
    const trueValue= ref(0);
    watch(element.model, (newValue, oldValue) => {
      console.log('model changed from', oldValue, 'to', newValue);
    });

    const defaultClasses = ref({
      container: '', // added automatically to the element's outermost DOM in ElementLayout
      input: 'form-text-input',
      wrapper: 'form-input-wrapper',
      input_danger: 'has-errors',
      $input: (classes, { isDanger }) => ([
        classes.input,
        isDanger ? classes.input_danger : null
      ])
    });

    return {
      defaultClasses,
      trueValue

    };
  }
});
</script>

<style lang="scss">
.form-text-input {
  border: 1px solid black;
  outline: 1rem;
  width: 4rem;
  display: flex;
  height: 4rem;

  &.has-errors {
    border: 1px solid red;
  }
}

.form-gap-y-gutter {
  padding: 1rem;
}

</style>
