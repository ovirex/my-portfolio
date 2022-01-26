<template>
  <section class="section pb-5">
    <div class="container">
      <div class="row mb-5 align-items-end">
        <div class="col-md-6" data-aos="fade-up">
          <h2>About Me</h2>
          <p class="mb-0">
            Here I’m gonna tell you a little about me, the tech I’ve worked with
            and why hiring me would be the best decision of your life. 😉
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 ml-auto order-2" data-aos="fade-up">
          <h3 class="h3 mb-4">Skills</h3>
          <ul class="list-unstyled">
            <li
              v-for="(skill, index) in aboutInfo.skills"
              :key="index"
              class="mb-3"
            >
              <div class="d-flex mb-1">
                <strong>{{ skill.text }}</strong>
                <span class="ml-auto"></span>
              </div>
              <div class="progress custom-progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 100%"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-md-7 mb-5 mb-md-0" data-aos="fade-up">
          <p v-if="aboutInfo.hasOwnProperty('profile_pic')">
            <img :src="aboutInfo.profile_pic" alt="Image" class="img-fluid" />
          </p>
          <nuxt-content :document="aboutInfo"></nuxt-content>
          <p>
            <a
              v-for="(resume, index) in resumesToShow"
              :key="index"
              :href="resume.resume_pdf"
              class="readmore me-2"
              target="blank"
              >{{ resume.text }}</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      aboutInfo: {},
      resumesToShow: [],
    }
  },
  async fetch() {
    try {
      const resumes = await this.$content('resumes')
        .only(['resumes_list'])
        .fetch()
      this.resumesToShow = resumes[0].resumes_list
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }

    try {
      const contentAbout = await this.$content('about_info').fetch()

      this.aboutInfo = contentAbout[0]
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  },
}
</script>
