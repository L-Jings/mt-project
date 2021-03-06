import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '@/views/layout/default.vue'
import blankPage from '@/views/layout/blank.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    component: defaultPage
  },
  {
    path: '/blank',
    name: 'blank',
    component: blankPage
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
