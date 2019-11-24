import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '../components/first-page.vue'
import application from '../components/application.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'first-page',
        component: firstPage
      }, 
      {
        path: '/application',
        name: 'application',
        component: application
      }
    ]
})