vm = new Vue({
  el: '#root',
  data: {
    scrolled: false,
    navbar: false,
  },
  methods: {
    handleScroll() {
      if(window.pageYOffset > 0) {
        this.scrolled = true
        return
      }

      this.scrolled = false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
})