<template>
  <section class="section pb-5">
    <div class="container">
      <div class="row mb-5 align-items-end">
        <div class="col-md-6" data-aos="fade-up">
          <h2>About Me</h2>
          <p class="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            necessitatibus incidunt ut officiis explicabo inventore.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 ml-auto order-2" data-aos="fade-up">
          <h3 class="h3 mb-4">Skills</h3>
          <ul class="list-unstyled">
            <li class="mb-3">
              <div class="d-flex mb-1">
                <strong>WordPress</strong>
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
            <li class="mb-3">
              <div class="d-flex mb-1">
                <strong>Photoshop</strong>
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
            <li class="mb-3">
              <div class="d-flex mb-1">
                <strong>HTML5/CSS3</strong>
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
            <li class="mb-3">
              <div class="d-flex mb-1">
                <strong>Veu</strong>
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
            <li class="mb-3">
              <div class="d-flex mb-1">
                <strong>Angular</strong>
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
            <li class="mb-3">
              <div class="d-flex mb-1">
                <strong>React</strong>
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
          <p>
            <img
              src="~/assets/img/person_1_sq.jpg"
              alt="Image"
              class="img-fluid"
            />
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            dignissimos delectus minima reprehenderit molestias illo dolorem et,
            odio!
          </p>
          <p>
            Fuga fugit distinctio delectus iure vitae consequatur excepturi,
            mollitia, consectetur molestias sapiente rem consequuntur, illum
            adipisci, sed obcaecati!
          </p>
          <p>
            Ex, dolorem qui voluptas reprehenderit provident, ad ipsum iure a
            consequatur voluptatem incidunt nobis. Vitae reiciendis quae ex.
          </p>
          <p>
            Optio consectetur culpa nemo, fugit pariatur veniam voluptate
            laudantium rerum fuga dolor in maiores ea nisi voluptatibus. Minus?
          </p>
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
      resumesToShow: [],
    }
  },
  async fetch() {
    const resumes = await this.$content('resumes')
      .only(['resumes_list'])
      .fetch()

    this.resumesToShow = resumes[0].resumes_list
  },
}
</script>
