import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Game',
    name: 'Game',
    component: () => import('@/layout/game.vue'),
    redirect: '/startGame',
    children: [{
      path: '/startGame',
      name: 'startGame',
      component: () => import('@/components/gameOne/startGame.vue')
    }, {
      path: '/gameOne',
      name: 'gameOne',
      component: () => import('@/components/gameOne/gameOne.vue')
    }, {
      path: '/gameTwo',
      name: 'gameTwo',
      component: () => import('@/components/gameOne/gameTwo.vue')
    }, {
      path: '/gameThr',
      name: 'gameThr',
      component: () => import('@/components/gameOne/gameThr.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
