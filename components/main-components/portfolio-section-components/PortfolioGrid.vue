<template>
  <div
    id="portfolio-grid"
    class="row no-gutter"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <div
      v-for="(project, index) in projectsToShow"
      :key="index"
      class="item col-sm-6 col-md-4 col-lg-4 mb-4"
      :class="addProjectTagsToClass(project.project_tags)"
    >
      <NuxtLink :to="'works/' + project.id" class="item-wrap fancybox">
        <div class="work-info">
          <h3>{{ project.title }}</h3>
          <span>{{ project.project_tags.join(', ') }}</span>
        </div>
        <img class="img-fluid" :src="project.thumbnail" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioGrid',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    projectsToShow: {
      type: Array,
    },
  },
  methods: {
    addProjectTagsToClass(tagsArray) {
      return tagsArray.join(' ').toLowerCase()
    },
  },
}
</script>
