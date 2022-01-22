<template>
  <nav class="navbar navbar-light custom-navbar">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">MyPortfolio.</NuxtLink>
      <a
        href="#"
        class="burger"
        data-bs-toggle="collapse"
        data-bs-target="#main-navbar"
      >
        <span></span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarMenu',
  watch: {
    $route(to, from) {
      // this.hideNavbarOnRouteChange()
    },
  },
  methods: {
    hideNavbarOnRouteChange() {
      const isNavbarShowing = document
        .querySelector('#main-navbar')
        .classList.contains('show')

      if (isNavbarShowing) {
        const bootstrap = require('bootstrap')
        const myCollapse = document.querySelector('#main-navbar')
        // eslint-disable-next-line no-unused-vars
        const bsCollapse = new bootstrap.Collapse(myCollapse, {
          hide: true,
        })
      }
    },
  },
}
</script>
