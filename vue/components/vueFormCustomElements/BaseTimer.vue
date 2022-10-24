<template>
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          :stroke-dasharray="circleDasharray"
          class="base-timer__path-remaining"
          :class="remainingPathColor"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span class="base-timer__label">{{ formattedTimeLeft }}</span>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch, defineComponent } from 'vue';

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: 'green'
  },
  warning: {
    color: 'orange',
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: 'red',
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 1200;

export default defineComponent({
  name: 'BaseTimer',
  props: {
    timerStart: Boolean
  },
  setup (props) {
    const timePassed = ref(0);
    const timeLeft = computed(() => {
      return TIME_LIMIT - timePassed.value;
    });
    const timeFraction = computed(() => {
      const rawTimeFraction = timeLeft.value / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    });
    const circleDasharray = computed(() => {
      return `${(timeFraction.value * FULL_DASH_ARRAY).toFixed(0)} 283`;
    });
    const formattedTimeLeft = computed(() => {
      const timeLeft1 = timeLeft.value;
      const minutes = Math.floor(timeLeft1 / 60);
      let seconds = timeLeft1 % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    });
    const remainingPathColor = computed(() => {
      const { alert, warning, info } = COLOR_CODES;

      if (timeLeft.value <= alert.threshold) {
        return alert.color;
      } else if (timeLeft.value <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
    });
    const timerInterval = ref(null);
    // stops the interval when the timer reaches zero
    const onTimesUp = function () {
      clearInterval(timerInterval.value);
    };
    // function to start the timer, working from 1 second interval
    const startTimer = function () {
      timerInterval.value = setInterval(() => (timePassed.value += 1), 1000);
    };
    // onMounted(() => {
    //   startTimer();
    // });
    watch(timeLeft, newValue => {
      if (newValue === 0) {
        onTimesUp();
      }
    });
    watch(() => props.timerStart, (newValue, oldValue) => {
      console.log(oldValue);
      console.log(newValue);
      if (newValue === true) {
        startTimer();
      }
    });
    return {
      timePassed,
      timeLeft,
      timeFraction,
      circleDasharray,
      formattedTimeLeft,
      remainingPathColor,
      timerInterval,
      onTimesUp,
      startTimer
    };
  }

});
</script>

<style scoped lang="scss">
.base-timer {
  position: relative;
  width: 150px;
  height: 150px;

  &__svg {
    transform: scaleX(-1);
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }

  &__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: rgb(65, 184, 131);
    }

    &.orange {
      color: orange;
    }

    &.red {
      color: red;
    }
  }

  &__label {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
  }
}
</style>
