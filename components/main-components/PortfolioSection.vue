<template>
  <section class="section site-portfolio">
    <div class="container">
      <portfolio-options :options="projectsTags"></portfolio-options>
      <portfolio-grid :projects-to-show="projects"></portfolio-grid>
    </div>
  </section>
</template>

<script>
import AOS from 'aos'
import PortfolioOptions from './portfolio-section-components/PortfolioOptions.vue'
import PortfolioGrid from './portfolio-section-components/PortfolioGrid.vue'
export default {
  name: 'PortfolioSection',
  components: {
    PortfolioOptions,
    PortfolioGrid,
  },
  data() {
    return {
      projects: [],
      projectsTags: [],
    }
  },
  async fetch() {
    try {
      const contentProjectsTags = await this.$content('projects_tags')
        .only(['tags_list'])
        .fetch()

      this.projectsTags = contentProjectsTags[0].tags_list.map((tagInfo) => {
        return tagInfo.tag
      })
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }

    try {
      const contentProjects = await this.$content('projects').fetch()

      this.projects = contentProjects
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.addIsotopeLayout()
    })
  },
  updated() {
    this.$nextTick(function () {
      this.addIsotopeLayout()
    })
  },
  methods: {
    addIsotopeLayout() {
      const Isotope = require('isotope-layout')
      const imagesLoaded = require('imagesloaded')

      const portfolioContainer = this.select('#portfolio-grid')
      if (portfolioContainer) {
        const portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.item',
        })

        const portfolioFilters = this.select('#filters a', true)

        this.on(
          'click',
          '#filters a',
          function (e) {
            e.preventDefault()
            portfolioFilters.forEach(function (el) {
              el.classList.remove('active')
            })
            this.classList.add('active')

            portfolioIsotope.arrange({
              filter: this.getAttribute('data-filter'),
            })
            portfolioIsotope.on('arrangeComplete', function () {
              AOS.refresh()
            })
          },
          true
        )

        imagesLoaded(portfolioContainer).on('progress', function () {
          portfolioIsotope.layout()
        })
      }
    },
    select(el, all = false) {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    },
    on(type, el, listener, all = false) {
      const selectEl = this.select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    },
  },
}
</script>
