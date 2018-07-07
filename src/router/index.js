import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('pages/hello-world/hello-world')
const ClientTag = () => import('pages/client-tag/client-tag')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/client-tag',
      component: ClientTag,
      meta: {
        title: '赞播智销'
      }
    }
  ]
})
