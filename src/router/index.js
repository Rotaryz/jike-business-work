import Vue from 'vue'
import Router from 'vue-router'

const Oauth = () => import('pages/oauth/oauth')
const Radar = () => import('pages/radar/radar')
const News = () => import('pages/news/news')
const Chat = () => import('pages/chat-msg/chat-msg')
const Client = () => import('pages/client/client')
const Mine = () => import('pages/mine/mine')
const ScrollDemo = () => import('pages/scroll-demo/scroll-demo')
const Echarts = () => import('pages/vue-echarts/vue-echarts')
const Cdetail = () => import('pages/client-detail/client-detail')
const Cdata = () => import('pages/detail-data/detail-data')
const ClientTag = () => import('pages/client-tag/client-tag')
const ClientSetGroup = () => import('pages/client-set-group/client-set-group')
const ClientCreateGroup = () => import('pages/client-create-group/client-create-group')
const ClientAddUser = () => import('pages/client-add-user/client-add-user')
const ClientSearch = () => import('pages/client-search/client-search')
const ClientUserList = () => import('pages/client-user-list/client-user-list')
const EditCard = () => import('pages/edit-card/edit-card')
const ChangeAutograph = () => import('pages/change-autograph/change-autograph')
const ShareCard = () => import('pages/share-card/share-card')
const GoodsDetail = () => import('pages/goods-detail/goods-detail')
const GoodsList = () => import('pages/goods-list/goods-list')
const DynamicList = () => import('pages/dynamic-list/dynamic-list')
const EditDynamic = () => import('pages/edit-dynamic/edit-dynamic')

Vue.use(Router)

const route = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/oauth'
    },
    {
      path: '/oauth',
      component: Oauth
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
      },
      children: [
        // {
        //   path: 'client-user-list',
        //   component: ClientUserList,
        //   meta: {
        //     title: '客户列表'
        //   },
        //   children: [
        //     {
        //       path: 'client-add-user',
        //       component: ClientAddUser,
        //       meta: {
        //         title: '添加成员'
        //       }
        //     }
        //   ]
        // },
        // {
        //   path: 'client-detail',
        //   component: Cdetail,
        //   meta: {
        //     title: '客户详情'
        //   }
        // },
        // {
        //   path: 'client-set-group',
        //   component: ClientSetGroup,
        //   meta: {
        //     title: '设置分组'
        //   }
        // },
        // {
        //   path: 'client-create-group',
        //   component: ClientCreateGroup,
        //   meta: {
        //     title: '添加分组'
        //   }
        // }
      ]
    },
    {
      path: '/client-user-list',
      component: ClientUserList,
      meta: {
        title: '客户列表'
      },
      children: [
        {
          path: 'client-add-user',
          component: ClientAddUser,
          meta: {
            title: '添加成员'
          }
        },
        {
          path: 'client-create-group',
          component: ClientCreateGroup,
          meta: {
            title: '添加分组'
          }
        }
      ]
    },
    {
      path: '/client-detail',
      component: Cdetail,
      meta: {
        title: '客户详情'
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
      path: '/mine',
      component: Mine,
      meta: {
        title: '我的'
      }
    },
    {
      path: '/client-tag',
      component: ClientTag,
      meta: {
        title: '标签'
      }
    },
    {
      path: '/client-search',
      component: ClientSearch,
      meta: {
        title: '搜索'
      }
    },
    {
      path: '/chat',
      component: Chat,
      meta: {
        title: ''
      }
    },
    {
      path: '/editCard',
      component: EditCard,
      meta: {
        title: '编辑名片'
      }
    },
    {
      path: '/changeAutograph',
      component: ChangeAutograph,
      meta: {
        title: '修改签名'
      }
    },
    {
      path: '/shareCard',
      component: ShareCard,
      meta: {
        title: '分享名片'
      }
    },
    {
      path: '/goodsDetail',
      component: GoodsDetail,
      meta: {
        title: '产品详情'
      }
    },
    {
      path: '/goodList',
      component: GoodsList,
      meta: {
        title: '我的产品'
      }
    },
    {
      path: '/dynamicList',
      component: DynamicList,
      meta: {
        title: '动态'
      }
    },
    {
      path: '/editDynamic',
      component: EditDynamic,
      meta: {
        title: '发布动态'
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
      path: '/echarts',
      component: Echarts,
      meta: {
        title: ''
      }
    },
    {
      path: '/detail-data',
      component: Cdata,
      meta: {
        title: '客户資料'
      }
    }
  ]
})

route.beforeEach((to, from, next) => {
  document.title = to.meta ? to.meta.title : ''
  next()
})

export default route
