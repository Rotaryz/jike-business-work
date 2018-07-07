<template>
  <div id="app">
    <router-view/>
    <!--<slide-view v-for="(item, index) in list" :key="item.id" :styles="item.style" :index="index" :item="item" v-on:touchBegin="touchBegin" v-on:touchEnd="touchEnd" v-on:touchMove="touchMove" v-on:del="del"></slide-view>-->
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions, mapGetters } from 'vuex'
import SlideView from '@/components/slide-view/slide-view'
export default {
  name: 'App',
  data() {
    return {
      startX: '',
      endX: '',
      moveStart: '',
      list: [
        {id: 1, style: 'width: 0'},
        {id: 2, style: 'width: 0'},
        {id: 3, style: 'width: 0'},
        {id: 4, style: 'width: 0'},
        {id: 5, style: 'width: 0'},
        {id: 6, style: 'width: 0'},
        {id: 7, style: 'width: 0'},
        {id: 8, style: 'width: 0'},
        {id: 9, style: 'width: 0'},
        {id: 10, style: 'width: 0'},
        {id: 11, style: 'width: 0'},
        {id: 12, style: 'width: 0'},
        {id: 13, style: 'width: 0'},
        {id: 14, style: 'width: 0'},
        {id: 15, style: 'width: 0'}
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
    touchBegin(e, index, item) {
      this.startX = e.touches[0].clientX
      this.moveStart = this.startX
      this.list = this._initList(this.list, index)
    },
    touchEnd(e, index, item) {
      this.endX = e.changedTouches[0].clientX
      let differ, res
      if (item.show) {
        differ = this.endX - this.startX
        if (differ > 0) {
          res = Object.assign({}, item, {style: 'width: 0px; transition: all .3s', show: false})
        } else {
          res = Object.assign({}, item, {style: 'width: 60px; transition: all .3s', show: false})
        }
      } else {
        differ = (this.startX - this.endX) / 2
        if (differ <= 30) {
          res = Object.assign({}, item, {style: 'width: 0px; transition: all .3s', show: false})
        } else {
          res = Object.assign({}, item, {style: 'width: 60px; transition: all .3s', show: true})
        }
      }
      this.$set(this.list, index, res)
    },
    touchMove(e, index, item) {
      let moveEnd = e.changedTouches[0].clientX
      let differ, width, endWidth, beginWidth
      if (item.show) {
        differ = (moveEnd - this.moveStart) * 2
        width = 60 - differ
        endWidth = 0
        beginWidth = 60
      } else {
        differ = (this.moveStart - moveEnd) / 2
        width = differ
        endWidth = 60
        beginWidth = 0
      }
      let res
      if (differ < 0) {
        res = Object.assign({}, item, {style: `width: ${beginWidth}px`})
        this.moveStart = moveEnd
      } else if (differ > 60) {
        res = Object.assign({}, item, {style: `width: ${endWidth}px`})
      } else {
        res = Object.assign({}, item, {style: `width: ${width}px`})
      }
      this.$set(this.list, index, res)
    },
    _initList(arr, idx) {
      let resArr = arr.map((item, index) => {
        if (index !== idx) {
          item.style = 'width: 0px; transition: all .3s'
        }
        return item
      })
      return resArr
    },
    del(item, idx) {
      console.log(item, idx)
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
