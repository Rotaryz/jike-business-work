<template>
  <div class="radar">
    <div class="new-msg">
      <span class="msg-box">
        <img src="./icon-news_up@3x.png" class="msg-arrow">
        <span>6条信息</span>
      </span>
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
        font-size: $font-size-medium
        .msg-arrow
          width: 7px
          height: 8px
          margin-left: 12px
</style>
