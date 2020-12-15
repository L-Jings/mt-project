import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '@/views/layout/default.vue'
import blankPage from '@/views/layout/blank.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: '/index',
    component: defaultPage,
    children: [{
      path: 's/:name',
      name: 'goods',
      component: () => import('@/views/page/goodsList.vue')
    }, {
      path: '/index',
      name: 'index',
      component: () => import('@/views/page/index.vue')
    }, {
      path: '/changeCity',
      name: 'changeCity',
      component: () => import('@/views/page/changeCity.vue')
    }]
  },
  {
    path: '/blank',
    name: 'blank',
    component: blankPage,
    children: [{
      path: 'login',
      name: 'login',
      component: () => import('@/views/page/login.vue')
    }, {
      path: 'register',
      name: 'register',
      component: () => import('@/views/page/register.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
