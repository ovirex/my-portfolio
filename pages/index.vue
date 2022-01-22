<template>
  <portfolio-section></portfolio-section>
</template>

<script>
import PortfolioSection from '~/components/main-components/PortfolioSection.vue'
export default {
  name: 'IndexPage',
  components: {
    PortfolioSection,
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
