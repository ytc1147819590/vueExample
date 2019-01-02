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

// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.name === '应天宸') {
      next()
    } else {
      next({
        path: '/'
        // query: { id: '123' }
      })
    }
  } else {
    next()
  }
})

// * to: Route: 即将要进入的目标 路由对象 
// * from: Route: 当前导航正要离开的路由 
// * next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。 
// * next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。 
// * next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。 
// * next(‘/’) 或者 next({ path: ‘/’ }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
//
// 确保要调用 next 方法，否则钩子就不会被 resolved。
//
// 其中，to.meta中是我们自定义的数据，其中就包括我们刚刚定义的requireAuth字段。通过这个字段来判断该路由是否需要登录权限。需要的话，同时当前应用不存在token，则跳转到登录页面，进行登录。登录成功后跳转到目标路由。
//
//  
//
// 完成后，我们可以在登录页面。控制用户登录成功后,vuex的token状态改变就可以了

