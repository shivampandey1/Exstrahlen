import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '../components/first-page.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'first-page',
        component: firstPage
      }
    ]
})