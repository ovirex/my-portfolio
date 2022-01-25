<template>
  <section class="section">
    <div class="container">
      <div class="row mb-4 align-items-center">
        <div class="col-md-6" data-aos="fade-up">
          <h2>Project Details</h2>
        </div>
      </div>
    </div>

    <div class="site-section pb-0">
      <div class="container">
        <div class="row align-items-stretch">
          <div class="col-md-8" data-aos="fade-up">
            <img
              :src="projectData.project_images"
              alt="Image"
              class="img-fluid"
            />
          </div>
          <div class="col-md-3 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <div class="sticky-content">
              <h3 class="h3">{{ projectData.title }}</h3>
              <p class="mb-4">
                <span class="text-muted">{{
                  projectData.project_tags.join(', ')
                }}</span>
              </p>

              <div class="mb-5">
                <nuxt-content :document="projectData"></nuxt-content>
              </div>

              <h4 class="h4 mb-3">What I did</h4>
              <ul class="list-unstyled list-line mb-5">
                <li v-for="(tech, index) in projectData.tech" :key="index">
                  {{ tech.text }}
                </li>
              </ul>

              <p v-if="projectData.hasOwnProperty('project_link')">
                <a
                  :href="projectData.project_link"
                  class="readmore"
                  target="_blank"
                  >Visit Project</a
                >
              </p>
              <p v-if="projectData.hasOwnProperty('project_repo')">
                <a
                  :href="projectData.project_repo"
                  class="readmore"
                  target="_blank"
                  >View Repository</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'WorkDetail',
  data() {
    return {
      projectData: {
        project_tags: [],
      },
    }
  },
  async fetch() {
    const projectID = this.$route.params.id

    try {
      const projectFetched = await this.$content('projects')
        .where({ id: projectID })
        .fetch()

      this.projectData = projectFetched[0]
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  },
}
</script>
