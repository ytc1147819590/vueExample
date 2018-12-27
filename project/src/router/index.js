import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/view/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
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
      component: () => import('@/lianxi/day03')
    }, {
      path: '/user',
      name: '/user',
      component: () => import('@/lianxi/user')
    }
  ]
})
