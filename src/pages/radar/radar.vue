<template>
  <div class="radar">
    <div class="new-msg">
      <span class="msg-box">
        <img src="./icon-news_up@3x.png" class="msg-arrow">
        <span class="msg-hint">6条信息</span>
      </span>
    </div>
    <div class="msgs-list">
      <div class="msgs-item" v-for="item in [1, 2, 3, 4, 5, 6]" :key="item">
        <img src="" class="msgs-left">
        <div class="msgs-right">
          <div class="msgs-container">
            <p class="msgs-p">杨过<span class="green">查看</span>了你的<span class="green">个人动态</span>，看来TA对你感兴趣</p>
          </div>
          <img src="./icon-pressed@2x.png" class="msgs-rt">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Radar',
    created() {
      this.$emit('tabChange', 1)
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
  .radar
    width: 100vw
    height: 100%
    background: $color-background
    .new-msg
      padding-top: 15px
      width: 100%
      height: 30px
      display: flex
      justify-content: flex-end
      .msg-box
        min-width: 92.5px
        height: 30px
        background: $color-white
        border-radius: 15px 0 0 15px
        line-height: 30px
        font-size: 0
        .msg-arrow
          width: 7px
          height: 8px
          padding-bottom: 1px
          margin-left: 12px
        .msg-hint
          font-size: $font-size-medium
          color: $color-text-56
          margin: 0 10px
    .msgs-list
      padding: 0 15px
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
