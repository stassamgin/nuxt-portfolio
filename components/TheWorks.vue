<template>
  <div class="section_wrapper">
    <section class="container" :class="text.blockId">
      <h2 class="asideTitle">
        <span class="asideTitle__rotate asideTitle__rotate--works">
          {{ text.title }}
        </span>
      </h2>
      <div class="works__block">
        <h3 class="works__title">{{ text.title }}</h3>
        <ul class="works__list">
          <li
            v-for="(item, index) in text.data"
            :key="index"
            class="works__item"
          >
            <img
              src="@/assets/image/uno1-min.jpg"
              :alt="item.name"
              class="works__img"
            />
            <div class="works__descr">
              <div :class="$style.linkBlock">
                <div v-if="item.image" :class="$style.link">
                  <a v-bind="{ href: imagePath(item.image) }" target="_blank">
                    <svg-icon icon="zoom" :class="$style.icon" />
                  </a>
                </div>
                <div v-if="item.workLink" :class="$style.link">
                  <a :href="item.workLink" target="_blank">
                    <svg-icon icon="link" :class="$style.icon" />
                  </a>
                </div>
                <div v-if="item.sourceLink" :class="$style.link">
                  <a :href="item.sourceLink" target="_blank">
                    <svg-icon icon="github" :class="$style.icon" />
                  </a>
                </div>
              </div>
              <p :class="$style.description">{{ item.description }}</p>
              <div :class="$style.tools">{{ showTools(item.tools) }}</div>
            </div>
            <div class="works__tools">{{ showTools(item.tools) }}</div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { SvgIcon } from '@/components/basic'

export default {
  name: 'TheWorks',
  components: {
    SvgIcon
  },
  props: {
    text: {
      type: Object,
      required: true
    }
  },
  methods: {
    imagePath(name) {
      return '@/assets/image/uno1-min.jpg'
    },

    showTools(toolsArray) {
      return toolsArray.join(', ')
    }
  }
}
</script>

<style lang="scss" module>
@import '~/assets/scss/_variables.scss';

.linkBlock {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
}

.link {
  font-family: $fontFamily1;
  font-size: $fontSize--small;
  color: $textBlack;
  z-index: 5;
  background-color: $bgColor;
  position: relative;

  &:first-child::before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    content: '';
    background-image: linear-gradient( -225deg, rgba(0,0,0,0) 50%, $bgColor 50%);
  }

  a {
    display: inline-block;
    transform: translateY(0.5rem);
    margin-right: 10px;
    overflow: hidden;

    svg {
      height: 24px;
      width: 24px;

      * {
        fill: $textBlack;
      }
    }

    &:hover svg * {
      fill: $blue;
    }
  }
}

.description {
  padding: 1.5rem 1.5rem 0;
  background-color: $bgColor;
}

.tools {
  background: $bgColor;
  color: darken($grey, 15);
  padding: 1rem 1.5rem;
}

.icon {
  height: 22px;
}
</style>
