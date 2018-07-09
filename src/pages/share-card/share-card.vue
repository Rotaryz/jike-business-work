<template>
  <div class="share-card">
    <scroll>
      <div class="share-box">
        <p class="peo-name">张三丰</p>
        <p class="peo-position">产品经理</p>
        <p class="buss-name">广州集客网络科技有限公司</p>
        <img class="qr-code" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531042875023&di=f0f23814097a0a3daaac716d3ef4b3bd&imgtype=0&src=http%3A%2F%2Fsrc.onlinedown.net%2Fimages%2Fxcs%2F10%2F2017-07-31_597ea6cf54190.jpg" alt="">
        <p class="tip">长按识别图中小程序码</p>
      </div>
    </scroll>
  </div>
</template>

<script>
  // import { ERR_OK } from 'api/config'
  import Scroll from 'components/scroll/scroll'

  export default {
    name: 'share-card',
    components: {
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  .share-card
    background :$color-text
    position: fixed
    background: share-card
    z-index: 10
    left: 0
    right: 0
    bottom: 0
    top: 0
    .share-box
      display :flex
      flex-direction: column
      align-items :center
      height: 108.8vw
      width: 92vw
      background :$color-white
      margin : 20px auto
      .qr-code
        margin-top: 29px
        width: 56.53%
      .buss-name
        margin-top: 15px
        font-family: $font-family-regular
        font-size: $font-size-medium
        color: $color-text-88
      .peo-name
        margin-top: 30px
        font-family: PingFangSC-Semibold
        font-size: $font-size-large-xx
        color: $color-text
      .peo-position
        font-family: $font-family-medium
        font-size: $font-size-medium
        color: $color-text
        margin-top: 10px
      .tip
        margin-top: 15px
        font-family: $font-family-regular
        font-size: $font-size-small
        color: $color-text-88
</style>