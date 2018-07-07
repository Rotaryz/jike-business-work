<template>
  <div id="app">
    <router-view/>
    <slide-view v-for="(item, index) in list" :key="item.id" :showIdx.sync="showIdx" :index="index" :ref="'item' + index" v-on:touchBegin="touchBegin" v-on:del="del" v-on:grouping="grouping"></slide-view>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions, mapGetters } from 'vuex'
import SlideView from '@/components/slide-view/slide-view'
export default {
  name: 'App',
  data() {
    return {
      showIdx: -1,
      list: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 12},
        {id: 13},
        {id: 14},
        {id: 15}
      ]
    }
  },
  created() {
    console.log(888888)
    this.test(3443234)
    this.test1('123345')
    console.log(this.argument(), this.argument1())
  },
  methods: {
    ...mapGetters(['argument', 'argument1']),
    ...mapActions(['test', 'test1']),
    touchBegin(index) {
      let name = 'item' + this.showIdx
      if (this.showIdx !== -1) {
        this.$refs[name][0]._itemInit()
      }
      this.showIdx = index
    },
    del(idx) {
      console.log(idx)
      this.list.splice(idx, 1)
    },
    grouping(idx) {
      console.log(idx)
    }
  },
  components: {
    SlideView
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px

</style>
