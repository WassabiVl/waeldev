<template>
  <ElementLayout>
    <template #element>
      <div :class="classes.wrapper">
        <select v-model="day" :class="classes.day">
          <option v-for="day, i in days" :value="day" :key="i">
            {{ day }}
          </option>
        </select>
        <select v-model="month" :class="classes.month">
          <option v-for="month, i in months" :value="month[0]" :key="i">
            {{ month[1] }}
          </option>
        </select>
        <select v-model="year" :class="classes.year">
          <option v-for="year, i in years" :value="year" :key="i">
            {{ year }}
          </option>
        </select>
      </div>
    </template>
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </ElementLayout>
</template>

<script>
import VueformElement from '@vueform/vueform/element';
import { ref, computed } from 'vue';

export default VueformElement({
  name: 'BirthdayElement'
}, {
  setup (props, { element }) {
    const months = ref([
      ['01', 'January'],
      ['02', 'February'],
      ['03', 'March'],
      ['04', 'April'],
      ['05', 'May'],
      ['06', 'June'],
      ['07', 'July'],
      ['08', 'August'],
      ['09', 'September'],
      ['10', 'October'],
      ['11', 'November'],
      ['12', 'December']
    ]);
    const days = ref([...Array(31).keys()].map(i => i < 9 ? '0' + (i + 1) : String(i + 1)));
    const years = ref([...Array(100).keys()].map(i => (new Date().getFullYear()) - i));

    // Creating models for day, month, year from the element's model
    const datePart = (part) => {
      return {
        get: () => {
          return (element.model.value || '').split('-')[part] || null;
        },
        set: (value) => {
          const date = (element.model.value || '').split('-');
          date[part] = value;

          element.model.value = `${date[0] || '0000'}-${date[1] || '00'}-${date[2] || '00'}`;
        }
      };
    };

    const day = computed(datePart(2));
    const month = computed(datePart(1));
    const year = computed(datePart(0));

    return {
      day,
      month,
      year,
      months,
      days,
      years
    };
  },
  data () {
    return {
      defaultClasses: {
        container: '',
        wrapper: 'form-input-wrapper',
        input: 'form-text-input',
        day: 'day',
        month: 'month',
        year: 'year',
        $day: (classes) => ([
          classes.input,
          classes.day
        ]),
        $month: (classes) => ([
          classes.input,
          classes.month
        ]),
        $year: (classes) => ([
          classes.input,
          classes.year
        ])
      }
    };
  }
});
</script>

<style lang="scss">
.form-input-wrapper {
  width: 100%;
  display: flex;
  column-gap: 0.5rem;
}

.form-text-input {
  border: 1px solid #000000;
  padding: 0.25rem 0.5rem;
  appearance: auto;

  &.day {
    width: calc(3 / 12 * 100%);
  }

  &.month {
    width: calc(5 / 12 * 100%);
  }

  &.year {
    width: calc(4 / 12 * 100%);
  }
}
</style>
