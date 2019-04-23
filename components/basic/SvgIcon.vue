<template>
  <svg>
    <use v-bind="xlinkPath(icon)" />
  </svg>
</template>

<script>
export default {
  name: 'RoundBar',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  methods: {
    xlinkPath(icon) {
      return {
        'xlink:href': `#${icon}`
      }
    }
  }
}
</script>
