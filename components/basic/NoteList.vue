<template>
  <ul :class="$style.list">
    <li :class="iconClassName">
      <SvgIcon :icon="icon" />
    </li>
    <li v-for="(item, index) in items" :key="index" :class="$style.item">
      <div :class="$style.header">
        <slot name="header" :item="item" />
      </div>
      <div :class="$style.detail">
        <slot name="detail" :item="item" />
      </div>
      <div :class="$style.text">
        <slot :item="item" />
      </div>
    </li>
  </ul>
</template>

<script>
import { SvgIcon } from '@/components/basic'

export default {
  name: 'NoteList',
  components: {
    SvgIcon
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    iconClassName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
@import '~/assets/scss/_variables.scss';

.list {
  width: calc(100% - 5rem);
  margin-left: auto;
  position: relative;
  padding-top: 3rem;

  &::before {
    content: '';
    width: 2px;
    height: calc(100% + 3rem);
    position: absolute;
    top: -1rem;
    left: -$educMarkerMargin + 3rem;
    background: linear-gradient(0, rgba(0, 0, 0, 0), $blue 8rem);
    z-index: 0;
  }
}

.item {
  width: 100%;
  position: relative;
  margin-bottom: 6rem;
  font-family: $fontFamily1;

  &::before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    border: 0.6rem solid $bgColor;
    position: absolute;
    top: 0;
    left: -$educMarkerMargin + 3rem - 0.4rem - 0.2rem - 0.6rem/2;
    background-color: $orange;
    z-index: 20;
  }
}

.header {
  font-size: $fontSize--h2;
  font-weight: bold;
  color: $textBlack;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.detail {
  display: flex;
  flex-flow: column nowrap;

  > * {
    display: block;
    font-size: $fontSize--small;
    font-weight: normal;
    color: $textGrey;
    text-transform: uppercase;
    margin-left: 2rem;

    &:not(:first-child) {
      margin-left: 2rem;
      margin-top: 0.5rem;

      &::before {
        display: none;
        color: $textGrey;
      }
    }
  }

  > a {
    text-decoration: underline;
  }
}

.text {
  margin-top: 2.5rem;
  font-family: $fontFamily1;
  font-size: $fontSize;
  font-weight: normal;
  color: $textBlack;
  text-align: justify;
  text-indent: 2rem;
}

@media only screen and (min-width: $screen-sm) {
  .list {
    width: calc(100% - 10rem);
    padding-top: 6rem;

    &::before {
      left: -$educMarkerMargin;
      height: calc(100% + 4rem);
      top: -2rem;
    }
  }

  .item::before {
    left: -$educMarkerMargin - 0.4rem - 0.2rem - 0.6rem/2;
  }
}

@media only screen and (min-width: $screen-md) {
  .text {
    padding-right: 2rem;
  }

  .detail {
    flex-flow: row nowrap;

    > * {
      display: block;
      font-size: $fontSize--small;
      font-weight: normal;
      color: $textGrey;
      text-transform: uppercase;
      margin-left: 2rem;

      &:not(:first-child) {
        margin-left: 0;
        margin-top: 0;

        &::before {
          display: inline-block;
          margin: 0 2rem;
          content: '/';
        }
      }
    }
  }
}

@media only screen and (min-width: $screen-lg) {
  .text {
    padding-right: 0;
  }
}
</style>
