<template>
  <div class="radar">
    <span class="msg-box" :class="newMsgShow ? 'show' : ''">
      <img src="./icon-news_up@3x.png" class="msg-arrow">
      <span class="msg-hint">6条信息</span>
    </span>
    <div class="container">
      <scroll ref="scroll"
              :data="list"
              :bcColor="'#f1f2f5'"
              :pullUpLoad="pullUpLoadObj"
              @pullingUp="onPullingUp">
        <div class="msgs-list">
          <div class="msgs-item" v-for="item in list" :key="item" @click="test">
            <img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJBB7iadHLcSzFWsjVIrdPr0NTNKibn9wJPfDV69Bav3QhNsPUxQKBDibTIqia1qc8UyVhUOgj7WSLj3w/132" class="msgs-left">
            <div class="msgs-right">
              <div class="msgs-container">
                <p class="msgs-p">杨过<span class="green">查看</span>了你的<span class="green">个人动态</span>，看来TA对你感兴趣</p>
              </div>
              <img src="./icon-pressed@2x.png" class="msgs-rt">
            </div>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import Scroll from 'components/scroll/scroll'
  export default {
    name: 'Radar',
    created() {
      this.$emit('tabChange', 1)
    },
    data() {
      return {
        newMsgShow: false,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: '加载更多',
        pullUpLoadNoMoreTxt: '没有更多了'
      }
    },
    methods: {
      test() {
        this.newMsgShow = !this.newMsgShow
      },
      onPullingUp() {
        console.log(77777)
      },
      rebuildScroll() {
        this.nextTick(() => {
          this.$refs.scroll.destroy()
          this.$refs.scroll.initScroll()
        })
      }
    },
    computed: {
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
      }
    },
    watch: {
      pullUpLoadObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      }
    },
    components: {
      Scroll
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  .radar
    width: 100vw
    height: 100vh
    background: $color-background
    display: flex
    flex-direction: column
    .container
      margin-bottom: 45px
      flex: 1
      overflow: hidden
      position: relative
    .msg-box
      min-width: 95px
      height: 30px
      background: $color-white
      border-radius: 15px 0 0 15px
      line-height: 30px
      font-size: 0
      position: fixed
      top: 15px
      right: 0
      z-index: 9
      transition: all .3s
      .msg-arrow
        width: 7px
        height: 8px
        padding-bottom: 1px
        margin-left: 12px
      .msg-hint
        font-size: $font-size-medium
        color: $color-text-56
        margin: 0 10px
    .show.msg-box
      right: -100%
    .msgs-list
      padding: 50px 15px 0
      .msgs-item
        margin-top: 15px
        width: 100%
        height: 55px
        background: $color-white
        border: 0.5px solid rgba(32,32,46,0.10)
        box-shadow: 0 4px 12px 0 rgba(43,43,145,0.04)
        border-radius: 2px
        display: flex
        justify-content: space-between
        align-items: center
        .msgs-left
          margin: 0 10px
          width: 40px
          height: 40px
          border: 0.5px solid rgba(32,32,46,0.10)
        .msgs-right
          flex: 1
          overflow: hidden
          margin-right: 13.5px
          height: 100%
          display: flex
          justify-content: space-between
          align-items: center
          .msgs-container
            flex: 1
            overflow: hidden
            height: 100%
            display: flex
            align-items: center
            .msgs-p
              line-height: 18px
              font-family: $font-family-meddle
              font-size: $font-size-medium
              .green
                color: $color-text-56
          .msgs-rt
            width: 7.5px
            height: 11.5px
            margin-left: 33px
</style>
