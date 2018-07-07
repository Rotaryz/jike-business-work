<template>
  <div id="app">
    <router-view/>
    <slide-view v-for="(item, index) in list" :key="item.id" :styles="item.style" :index="index" :item="item" v-on:touchBegin="touchBegin" v-on:touchEnd="touchEnd" v-on:touchMove="touchMove" v-on:del="del"></slide-view>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  created() {
    console.log(process.env)
    console.log(888888)
    this.test(3443234)
    this.test1('123345')
    console.log(this.argument(), this.argument1())
  },
  methods: {
    ...mapGetters(['argument', 'argument1']),
    ...mapActions(['test', 'test1'])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
