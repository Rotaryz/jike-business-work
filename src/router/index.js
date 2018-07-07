import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('pages/hello-world/hello-world')
const eharts = () => import('pages/vue-echarts/vue-echarts')

Vue.use(Router)

const route = new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          component: Radar,
          meta: {
            title: '雷达'
          }
        },
        {
          path: '/news',
          component: News,
          meta: {
            title: '消息'
          }
        },
        {
          path: '/client',
          component: Client,
          meta: {
            title: '客户'
          }
        },
        {
          path: '/mine',
          component: Mine,
          meta: {
            title: '我的'
          }
        }
      ]
      component: HelloWorld
    },
    {
      path: '/echarts',
      component: eharts
    }
  ]
})

route.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default route
