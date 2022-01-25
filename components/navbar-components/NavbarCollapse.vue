<template>
  <div id="main-navbar" class="collapse navbar-collapse custom-navmenu">
    <div class="container py-2 py-md-5">
      <div class="row align-items-start">
        <div class="col-md-2">
          <ul class="custom-menu">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About Me</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/works">Works</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="col-md-6 d-none d-md-block mr-auto">
          <div class="tweet d-flex">
            <span class="bi bi-twitter text-white mt-2 mr-3"></span>
            <div>
              <p>
                <em
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam necessitatibus incidunt ut officiis explicabo
                  inventore. <br />
                  <a href="#">t.co/v82jsk</a></em
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-none d-md-block">
          <h3>Hire Me</h3>
          <p>
            If you like some of my projects. I would like to hear from you,
            let’s talk. Send me an email on the
            <NuxtLink to="/contact">contact page</NuxtLink>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarCollapse',
}
</script>
