import Home from '@/pages/Home'
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ana',
      name: 'Home',
      component: Home
    }
  ]
})
