import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/view/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/day01',
      component: () => import('@/lianxi/day01')
    }, {
      path: '/day02',
      component: () => import('@/lianxi/day02')
    }
  ]
})
