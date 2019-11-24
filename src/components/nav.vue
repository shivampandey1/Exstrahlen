<template>  
  <b-navbar ref="navbar" fixed class="navbar navbar-expand-sm">
    <router-link to='/'><b-navbar-brand :id="color" href="#"><strong>Exstrahlen</strong></b-navbar-brand></router-link>
    <b-navbar-toggle fixed target="nav-collapse"></b-navbar-toggle>
    <b-collapse v-if="scrolled" id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="margin"><router-link to='/'>About</router-link></b-nav-item>
        <b-button pill variant="outline-secondary" class="margin btn btn-outline"><b-nav-item><router-link to='/application'>Get Started</router-link></b-nav-item></b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      scrolled: true,
      height: ''
    }
  }, 
  props: ['color'],
  created () {
    window.addEventListener('scroll', this.docHeight)
    window.addEventListener('scroll', this.scroll)
  },
  methods: {
    scroll: function () {
      var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
      var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
      if (scrollTop < winheight) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 30px;
  background-color: transparent;
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 25;
}

.navbar-brand {
  font-size: 1.5rem;
  color: rgb(28, 47, 174) !important;
}

#white  {
  color: white !important;
}

.center {
  justify-content: center;
  transition: 1.5s;
}

.margin {
  margin: 10px;
}

.navbar-nav {
  align-items: center;
}

a {
  color: white !important;
}

a:hover {
  text-decoration: none;
}

.btn-outline {
  border-color: white !important;
}

.btn:hover {
  background-color: transparent !important;
  padding: auto 15px;
}
</style>