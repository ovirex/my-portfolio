<template>
  <section class="section">
    <div class="container">
      <div class="row mb-4 align-items-center">
        <div class="col-md-6" data-aos="fade-up">
          <h2>My Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            necessitatibus incidunt ut officiis explicabo inventore.
          </p>
        </div>
      </div>
    </div>

    <div class="site-section pb-0 services">
      <div class="container">
        <div class="row">
          <service-component></service-component>
          <service-component></service-component>
          <service-component></service-component>
          <div
            class="col-12 col-sm-6 col-md-6 col-lg-6 mb-5"
            data-aos="fade-up"
            data-aos-delay=""
          >
            <i class="bi bi-card-checklist"></i>
            <h4 class="h4 mb-2">Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo
              inventore.
            </p>
            <ul class="list-unstyled list-line">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
              <li>Non pariatur nisi</li>
              <li>Magnam soluta quod</li>
              <li>Lorem ipsum dolor</li>
              <li>Cumque quae aliquam</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ServiceComponent from './services-section-components/ServiceComponent.vue'
export default {
  name: 'ServicesSection',
  components: {
    ServiceComponent,
  },
}
</script>

