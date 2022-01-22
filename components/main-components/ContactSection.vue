<template>
  <section class="section pb-5">
    <div class="container">
      <div class="row mb-5 align-items-end">
        <div class="col-md-6" data-aos="fade-up">
          <h2>Contact</h2>
          <p class="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            necessitatibus incidunt ut officiis explicabo inventore.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
          <form
            role="form"
            class="php-email-form"
            @submit.prevent="submitContactForm"
          >
            <div class="row gy-3">
              <div class="col-md-6 form-group">
                <label for="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-6 form-group">
                <label for="name">Email</label>
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  name="email"
                  required
                />
              </div>
              <div class="col-md-12 form-group">
                <label for="name">Subject</label>
                <input
                  id="subject"
                  type="text"
                  class="form-control"
                  name="subject"
                  required
                />
              </div>
              <div class="col-md-12 form-group">
                <label for="name">Message</label>
                <textarea
                  class="form-control"
                  name="message"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>

              <div class="col-md-12 my-3">
                <div class="loading">Loading</div>
                <div class="error-message">
                  An error has occurred. Please try again later.
                </div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>

              <div class="col-md-6 mt-0 form-group">
                <input
                  type="submit"
                  class="readmore d-block w-100"
                  value="Send Message"
                />
              </div>
            </div>
          </form>
        </div>

        <div class="col-md-4 ml-auto order-2" data-aos="fade-up">
          <ul class="list-unstyled">
            <li class="mb-3">
              <strong class="d-block mb-1">Address</strong>
              <span
                >203 Fake St. Mountain View, San Francisco, California,
                USA</span
              >
            </li>
            <li class="mb-3">
              <strong class="d-block mb-1">Phone</strong>
              <span>+1 232 3235 324</span>
            </li>
            <li class="mb-3">
              <strong class="d-block mb-1">Email</strong>
              <span>youremail@domain.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
/* eslint-disable no-console */
export default {
  name: 'ContactSection',
  methods: {
    submitContactForm(event) {
      event.submitter.disabled = true

      const thisForm = event.target

      thisForm.querySelector('.loading').classList.add('d-block')

      const formData = new FormData(event.target)
      fetch('https://usebasin.com/f/166ae0a9c3e3', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })
        .then((response) => {
          if (response.status === 200) {
            thisForm.querySelector('.loading').classList.remove('d-block')
            thisForm.querySelector('.sent-message').classList.add('d-block')
            console.log('success')
          } else {
            thisForm.querySelector('.loading').classList.remove('d-block')
            thisForm.querySelector('.error-message').classList.add('d-block')
            console.log('fail')
          }
        })
        .catch((error) => console.error(error))
    },
  },
}
</script>
