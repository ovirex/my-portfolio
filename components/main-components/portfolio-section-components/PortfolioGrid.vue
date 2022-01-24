<template>
  <div
    id="portfolio-grid"
    class="row no-gutter"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
      <NuxtLink to="works/1" class="item-wrap fancybox">
        <div class="work-info">
          <h3>Boxed Water</h3>
          <span>Web</span>
        </div>
        <img class="img-fluid" src="~/assets/img/img_1.jpg" />
      </NuxtLink>
    </div>
    <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
      <NuxtLink to="works/1" class="item-wrap fancybox">
        <div class="work-info">
          <h3>Boxed Water</h3>
          <span>Web</span>
        </div>
        <img class="img-fluid" src="~/assets/img/img_1.jpg" />
      </NuxtLink>
    </div>
    <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
      <NuxtLink to="works/1" class="item-wrap fancybox">
        <div class="work-info">
          <h3>Boxed Water</h3>
          <span>Web</span>
        </div>
        <img class="img-fluid" src="~/assets/img/img_1.jpg" />
      </NuxtLink>
    </div>
    <div class="item wordpress col-sm-6 col-md-4 col-lg-4 mb-4">
      <NuxtLink to="works/1" class="item-wrap fancybox">
        <div class="work-info">
          <h3>Boxed Water</h3>
          <span>Web</span>
        </div>
        <img class="img-fluid" src="~/assets/img/img_1.jpg" />
      </NuxtLink>
    </div>
    <div class="item wordpress col-sm-6 col-md-4 col-lg-4 mb-4">
      <NuxtLink to="works/1" class="item-wrap fancybox">
        <div class="work-info">
          <h3>Boxed Water</h3>
          <span>Web</span>
        </div>
        <img class="img-fluid" src="~/assets/img/img_1.jpg" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioGrid',
}
</script>
