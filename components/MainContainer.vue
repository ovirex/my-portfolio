<template>
  <Nuxt />
</template>
<script>
import AOS from 'aos'
export default {
  name: 'MainContainer',
  mounted() {
    this.$nextTick(function () {
      this.addAOSEffect()
    })
  },
  methods: {
    addAOSEffect() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      })
    },
  },
}
</script>
