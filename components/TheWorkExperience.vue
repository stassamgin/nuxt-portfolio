<template>
  <div class="section_wrapper">
    <section class="workExp container">
      <h2 class="asideTitle">
        <span class="asideTitle__rotate asideTitle__rotate--workExp">
          {{ text.title }}
        </span>
      </h2>
      <div class="workExp__block">
        <div class="workExp__title">{{ text.title }}</div>
        <note-list
          :items="text.data"
          icon="work-exp"
          icon-class-name="workExp__icon"
        >
          <template #header="{item}">
            {{ item.startAt }} - {{ item.endAt }}
          </template>
          <template #detail="{item}">
            <p>{{ item.profession }}</p>
            <a
              v-if="item.organization.site"
              :href="item.organization.site"
              target="_blank"
            >
              {{ item.organization.name }}
            </a>
            <p v-else>{{ item.organization.name }}</p>
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
  name: 'TheWorkExperience',
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
