import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router/index'

// import VueRellax from 'vue-rellax'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from 'aos';
import 'aos/dist/aos'

window.Vue = require('vue')

Vue.use(BootstrapVue)
Vue.use(VueRouter)
    // Vue.use(VueRellax)

Vue.config.productionTip = false

new Vue({
    created() {
        AOS.init
        console.log('Works!')
    },
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})