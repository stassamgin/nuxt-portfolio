<template>
  <svg>
    <use v-bind="xlinkPath(icon)" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
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
