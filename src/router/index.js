import Vue from 'vue'
import Router from 'vue-router'

const Radar = () => import('pages/radar/radar')
const News = () => import('pages/news/news')
const Client = () => import('pages/client/client')
const Mine = () => import('pages/mine/mine')
const ScrollDemo = () => import('pages/scroll-demo/scroll-demo')

Vue.use(Router)

const route = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   component: App
    // },
    {
      path: '/radar',
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
    },
    {
      path: '/scroll-demo',
      component: ScrollDemo,
      meta: {
        title: '测试滚动'
      }
    }
  ]
})

route.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default route
