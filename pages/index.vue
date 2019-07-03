<template>
  <div id="app" class="bodyWrapper">
    <component
      :is="componentNameGenerator(block)"
      v-for="(block, i) in blocks"
      :key="i"
      :text="componentContentByBlockName(block)"
    />

    <div class="section_wrapper">
      <footer class="footer">
        &copy; С.А. Самгин, 2017
      </footer>
    </div>

    <div class="scroll_progress"></div>
  </div>
</template>

<script>
import {
  TheAbout,
  TheEducation,
  TheHeader,
  TheHero,
  TheSkills,
  TheWorkExperience,
  TheWorks
} from '~/components'
// import customJS from './util/custom' // JS code from old realization TODO: separate to different file

export default {
  name: 'App',
  components: {
    TheAbout,
    TheEducation,
    TheHeader,
    TheHero,
    TheSkills,
    TheExperience: TheWorkExperience,
    TheWorks
  },
  computed: {
    blocks() {

      return Object.keys(this.$store.getters['client/getClientData'])
    }
  },
  fetch({ store, params }) {
    store.dispatch('client/clietnData')
  },
  mounted() {
    // customJS()
  },
  methods: {
    componentNameGenerator(blockName) {
      return `the-${blockName.toLowerCase()}`
    },
    componentContentByBlockName(blockName) {
      if (blockName === 'header') {
        return this.$store.getters['client/getClientData']
      }

      return this.$store.getters['client/getClientData'][blockName]
    }
  }
}
</script>
