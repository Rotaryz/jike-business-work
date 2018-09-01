// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.components.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
// import fastclick from 'fastclick'
import store from './store'
import echarts from 'echarts'
import AwesomePicker from 'vue-awesome-picker'
import AMap from 'vue-amap'
Vue.use(AwesomePicker)
Vue.prototype.$echarts = echarts
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: '8708f814279a65c9d685b4093c69c40b',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geocoder']
})

// fastclick.attach(document.body)

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
