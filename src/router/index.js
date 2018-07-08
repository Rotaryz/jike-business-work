import Vue from 'vue'
import Router from 'vue-router'

const Radar = () => import('pages/radar/radar')
const News = () => import('pages/news/news')
const Client = () => import('pages/client/client')
const Mine = () => import('pages/mine/mine')
const ScrollDemo = () => import('pages/scroll-demo/scroll-demo')
const ClientTag = () => import('pages/client-tag/client-tag')
const ClientSetGroup = () => import('pages/client-set-group/client-set-group')
const ClientCreateGroup = () => import('pages/client-create-group/client-create-group')
const ClientAddUser = () => import('pages/client-add-user/client-add-user')
const ClientSearch = () => import('pages/client-search/client-search')

Vue.use(Router)

const route = new Router({
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
    },
    {
      path: '/client-tag',
      component: ClientTag,
      meta: {
        title: '标签'
      }
    },
    {
      path: '/client-set-group',
      component: ClientSetGroup,
      meta: {
        title: '设置分组'
      }
    },
    {
      path: '/client-create-group',
      component: ClientCreateGroup,
      meta: {
        title: '添加分组'
      }
    },
    {
      path: '/client-add-user',
      component: ClientAddUser,
      meta: {
        title: '添加成员'
      }
    },
    {
      path: '/client-search',
      component: ClientSearch,
      meta: {
        title: '搜索'
      }
    }
  ]
})

route.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default route
