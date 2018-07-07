import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('pages/index/index')
const Radar = () => import('pages/radar/radar')
const News = () => import('pages/news/news')
const Client = () => import('pages/client/client')
const Mine = () => import('pages/mine/mine')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      meta: {
        title: '赞播智销'
      },
      children: [
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
        }
      ]
    }
  ]
})
