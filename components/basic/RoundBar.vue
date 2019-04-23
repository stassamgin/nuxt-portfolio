<template>
  <!--  <li-->
  <!--    :style="createCssVarLanguages(barData.percent)"-->
  <!--    class="skillBlockLanguage__item"-->
  <!--  >-->
  <!--    <span class="skillBlockLanguage__text">-->
  <!--      {{ barData.name }}-->
  <!--      <span class="skillBlockLanguage__descr">-->
  <!--        {{ barData.description }}-->
  <!--      </span>-->
  <!--    </span>-->
  <!--  </li>-->
  <li :class="$style.root">
    <svg
      :class="$style.svg"
      :height="+radius * 2"
      :width="+radius * 2"
      viewPort="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        :class="[$style.circle, $style.circleBg]"
        :stroke-dasharray="circumference + ' ' + circumference"
        :stroke-width="stroke"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
      ></circle>
      <circle
        :class="[$style.circle, $style.circleIndicate]"
        :stroke-dasharray="circumference + ' ' + circumference"
        :style="{ strokeDashoffset }"
        :stroke-width="stroke"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
      ></circle>
    </svg>
    <span :style="{ top: radius + 'px' }" :class="$style.text">
      {{ progress }}%
    </span>
    <h3 :class="$style.name">
      {{ barData.name }}
    </h3>
    <p :class="$style.description">
      {{ barData.description }}
    </p>
  </li>
</template>

<script>
export default {
  name: 'RoundBar',
  props: {
    barData: {
      type: Object,
      required: true
    },
    radius: {
      type: Number,
      default: 80
    },
    stroke: {
      type: Number,
      default: 8
    }
  },
  data() {
    const normalizedRadius = this.radius - this.stroke
    const circumference = normalizedRadius * 2 * Math.PI

    return {
      normalizedRadius,
      circumference,
      progress: parseInt(this.barData.percent)
    }
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - (this.progress / 100) * this.circumference
    }
  }
}
</script>

<style lang="scss" module>
@import '~/assets/scss/_variables.scss';

.root {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.svg {
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.35));
}

.circle {
  transition: stroke-dashoffset 1s linear;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  fill: transparent;
}

.circleBg {
  stroke: $grey;
}
.circleIndicate {
  stroke: $blue;
}

.text {
  position: absolute;
  left: calc(50% + 0.5rem);
  font-size: 3.2em;
  font-weight: bold;
  color: darken($grey, 10);
  transform: translate(-50%, -50%);
}

.name {
  margin-top: 1.75rem;
  display: block;
  text-align: center;
  font-size: $fontSize;
  font-weight: normal;
  text-transform: uppercase;
  color: $textBlack;
  letter-spacing: 1.75px;
}

.description {
  display: block;
  margin-top: 0.75rem;
  text-transform: none;
  text-align: center;
  font-size: $fontSize--small;
  color: $textGrey;
  letter-spacing: normal;
}
</style>
