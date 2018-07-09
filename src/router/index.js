import Vue from 'vue'
import Router from 'vue-router'

const Radar = () => import('pages/radar/radar')
const News = () => import('pages/news/news')
const Chat = () => import('pages/chat-msg/chat-msg')
const Client = () => import('pages/client/client')
const Mine = () => import('pages/mine/mine')
const ScrollDemo = () => import('pages/scroll-demo/scroll-demo')

Vue.use(Router)

const route = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/radar'
    },
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
    },
    {
      path: '/chat',
      component: Chat,
      meta: {
        title: ''
      }
    }
  ]
})

route.beforeEach((to, from, next) => {
  document.title = to.meta ? to.meta.title : ''
  next()
})

export default route
