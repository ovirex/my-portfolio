<template>
  <div class="row mb-5 align-items-center">
    <div class="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
      <h2>Hey, I'm Ovidio Pérez</h2>
      <p class="mb-0">
        Freelance Creative &amp; Professional Graphics Designer
      </p>
    </div>
    <div
      class="col-md-12 col-lg-6 text-start text-lg-end"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div id="filters" class="filters">
        <a href="#" data-filter="*" class="active">All</a>
        <a
          v-for="(tag, index) in options"
          :key="index"
          href="#"
          :data-filter="`.${tag.toLowerCase()}`"
          >{{ tag }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable vue/require-default-prop */
export default {
  name: 'PortfolioOptions',
  props: {
    options: {
      type: Array,
    },
  },
}
</script>
