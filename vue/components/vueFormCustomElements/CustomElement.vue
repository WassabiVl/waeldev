<template>
  <ElementLayout>
    <template #element>
      <input
        v-model="model"
        :class="classes.input"
      />
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </ElementLayout>
</template>

<script>
import { ref } from 'vue'
import VueformElement from '@vueform/vueform/element'

export default VueformElement({
  name: 'CustomElement',
}, {
  setup(props, { element }) {
    const defaultClasses = ref({
      container: '', // added automatically to the element's outermost DOM in ElementLayout
      input: 'form-text-input',
      input_danger: 'has-errors',
      $input: (classes, { isDanger }) => ([
        classes.input,
        isDanger ? classes.input_danger : null,
      ])
    })

    return {
      defaultClasses,
    }
  }
})
</script>

<style lang="scss">
.form-text-input {
  border: 1px solid black;
  outline: none;
  width: 100%;

  &.has-errors {
    border: 1px solid red;
  }
}
</style>
