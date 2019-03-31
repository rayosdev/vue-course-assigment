import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Man from './views/Man'
import Start from './views/Start'
import Contact from './views/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/man',
      name: 'man',
      component: Man
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
