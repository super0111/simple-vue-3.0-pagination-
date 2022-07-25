import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "FAQ" */ '../views/Faq.vue')
  }, {
    path: '/insurance-buy',
    name: 'BuyCover',
    component: () => import('../views/BuyCover.vue')
  }, {
    path: '/insurances',
    name: 'Insurances',
    component: () => import('../views/Insurances.vue')
  }, {
    path: '/insurance-detail',
    name: 'InsuranceDetail',
    component: () => import('../views/InsuranceDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
