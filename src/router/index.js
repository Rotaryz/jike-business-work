import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('pages/hello-world/hello-world')
const eharts = () => import('pages/vue-echarts/vue-echarts')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/echarts',
      component: eharts
    }
  ]
})
