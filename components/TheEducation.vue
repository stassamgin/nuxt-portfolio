<template>
  <div class="section_wrapper">
    <section class="education container">
      <h2 class="asideTitle">
        <span class="asideTitle__rotate asideTitle__rotate--education">
          {{ text.title }}
        </span>
      </h2>
      <div class="education__block">
        <div class="education__title">{{ text.title }}</div>
        <note-list
          :items="text.data"
          icon="education"
          icon-class-name="education__icon"
        >
          <template #header="{item}">
            {{ item.name }}
          </template>
          <template #detail="{item}">
            <p>{{ item.specialty }}</p>
            <p>{{ item.degree }}</p>
            <p>{{ item.startAt }} - {{ item.endAt }}</p>
          </template>
          <template #default="{item}">
            {{ item.description }}
          </template>
        </note-list>
      </div>
    </section>
  </div>
</template>

<script>
import { NoteList } from '@/components/basic'

export default {
  name: 'TheEducation',
  components: {
    NoteList
  },
  props: {
    text: {
      type: Object,
      required: true
    }
  }
}
</script>
