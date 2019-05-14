import { TweenMax } from 'gsap'

export default {
  methods: {
    leftShow(elem, duration = 0.5) {
      if (document.documentElement.clientWidth > 768) {
        TweenMax.from(elem, duration, { x: -70, opacity: 0 })
      }
    },

    rightShow(elem, duration = 0.5) {
      if (document.documentElement.clientWidth > 768) {
        TweenMax.from(elem, duration, { x: 70, opacity: 0 })
      }
    },

    topShow(elem, duration = 0.5) {
      if (document.documentElement.clientWidth > 768) {
        TweenMax.from(elem, duration, { y: -70, opacity: 0 })
      }
    },

    bottomShow(elem, duration = 0.5) {
      if (document.documentElement.clientWidth > 768) {
        TweenMax.from(elem, duration, { y: 70, opacity: 0 })
      }
    }
  }
}
