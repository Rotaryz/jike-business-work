import Vue from 'vue'
import Router from 'vue-router'

const Radar = () => import('pages/radar/radar')
const News = () => import('pages/news/news')
const Client = () => import('pages/client/client')
const Mine = () => import('pages/mine/mine')
const EditCard = () => import('pages/edit-card/edit-card')
const ScrollDemo = () => import('pages/scroll-demo/scroll-demo')
const ChangeAutograph = () => import('pages/change-autograph/change-autograph')
const ShareCard = () => import('pages/share-card/share-card')
const GoodsDetail = () => import('pages/goods-detail/goods-detail')
const GoodsList = () => import('pages/goods-list/goods-list')
const DynamicList = () => import('pages/dynamic-list/dynamic-list')
const EditDynamic = () => import('pages/edit-dynamic/edit-dynamic')
const Echarts = () => import('pages/vue-echarts/vue-echarts')
const Cdetail = () => import('pages/client-detail/client-detail')
const Cdata = () => import('pages/detail-data/detail-data')

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
      path: '/echarts',
      component: Echarts,
      meta: {
        title: ''
      }
    },
    {
      path: '/client-detail',
      component: Cdetail,
      meta: {
        title: '客户详情'
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
  document.title = to.meta.title
  next()
})

export default route
