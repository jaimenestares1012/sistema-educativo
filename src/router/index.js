import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import prueba from '../views/prueba.vue'
import nuevo from '../views/nuevo.vue'
import detalles from '../views/detalles.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/prueba',
    name: 'prueba',
    component: prueba
  },
  {
    path: '/nuevo',
    name: 'nuevo',
    component: nuevo
  },
  {
    path: '/detalles',
    name: 'detalles',
    component: detalles
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
