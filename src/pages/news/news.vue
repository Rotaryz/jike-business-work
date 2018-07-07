<template>
  <div class="news">
    <div class="news-list">
      <div class="news-item border-bottom-1px">
        <div class="news-left">
          <img src="" class="left-img">
          <span class="news-count">88</span>
        </div>
        <div class="news-right">
          <div class="right-top">
            <span class="top-name">Pony</span>
            <span class="top-time">2018/07/08</span>
          </div>
          <div class="right-down">
            疯狂砍价已上线，快速提升品牌曝光度了解一下就恢复积分兑换
          </div>
        </div>
      </div>
      <div class="news-item border-bottom-1px">
        <div class="news-left">
          <img src="" class="left-img">
          <span class="news-count">···</span>
        </div>
        <div class="news-right">
          <div class="right-top">
            <span class="top-name">Pony</span>
            <span class="top-time">2018/07/08</span>
          </div>
          <div class="right-down">
            你好，在吗？
          </div>
        </div>
      </div>
      <div class="news-item border-bottom-1px">
        <div class="news-left">
          <img src="" class="left-img">
          <span class="news-count">8</span>
        </div>
        <div class="news-right">
          <div class="right-top">
            <span class="top-name">Pony</span>
            <span class="top-time">2018/07/08</span>
          </div>
          <div class="right-down">
            疯狂砍价已上线，快速提升品牌曝光度了解一下就恢复积分兑换
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'News',
    created() {
      this.$emit('tabChange', 2)
    },
    data() {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'

  .news
    width: 100%
    height: 100%
    background: $color-white
    .news-list
      background: $color-white
      padding: 0 15px
      .news-item
        display: flex
        height: 75px
        align-items: center
        .news-left
          width: 45px
          height: 45px
          position: relative
          margin-right: 10px
          .left-img
            width: 100%
            height: 100%
          .news-count
            display: inline-block
            min-width: 7px
            height: 16px
            border-radius: 8px
            background: $color-red
            text-align: center
            line-height: 16px
            font-family: PingFangSC-Semibold
            font-size: $font-size-small-s
            color: $color-white
            position: absolute
            right: -6px
            top: -6px
            padding: 0 4.5px
        .news-right
          flex: 1
          overflow: hidden
          height: 100%
          display: flex
          flex-direction: column
          justify-content: center
          .right-top
            padding-bottom: 6px
            width: 100%
            display: flex
            justify-content: space-between
            align-items: center
            .top-name
              font-family: $font-family-meddle
              font-size: $font-size-medium-x
              letter-spacing: 0.6px
            .top-time
              font-family: $font-family-meddle
              font-size: $font-size-small
              color: $color-text-99
          .right-down
            width: 100%
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
            font-family: $font-family-meddle
            font-size: $font-size-small
            color: $color-text-88

</style>
