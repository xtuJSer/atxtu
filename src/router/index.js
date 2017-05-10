import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/Index.vue'
import About from '../views/About.vue'
import Update from '../views/Update.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/update', component: Update },
    { path: '*', component: NotFound }
  ]
})
