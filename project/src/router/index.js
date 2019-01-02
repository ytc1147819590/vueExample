import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/view/layout/Layout'
import store from '@/store/index'

Vue.use(Router)

export const routes = [
  {
    path: '/day01',
    name: '/day01',
    component: () => import('@/lianxi/day01')
  }, {
    path: '/day02',
    name: '/day02',
    component: () => import('@/lianxi/day02')
  }, {
    path: '/day03',
    name: '/day03',
    meta: {
      requireAuth: true
    },
    component: () => import('@/lianxi/day03')
  }, {
    path: '/user',
    name: '/user',
    component: () => import('@/lianxi/user')
  }
]

const router = new Router({
  routes
})

export default router

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user) {
      next()
    } else {
      next({
        path: '/',
        query: { id: '123' }
      })
    }
  } else {
    next()
  }
})

