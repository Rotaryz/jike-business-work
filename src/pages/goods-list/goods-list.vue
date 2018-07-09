<template>
  <div class="goods-list">
    <div class="tab">
      <div class="tab-item">我的推荐</div>
      <div class="tab-item">全部产品</div>
      <span class="line"></span>
    </div>
    <scroll
      ref="scroll"
      @pullingDown="onPullingDown">
      <div class="goods-item">
        <div class="img-box">
          <img class="goods-image" src="./Snip20180707_10.png">
        </div>
        <div class="goods-content">
          <p class="goods-text">卡诗（KERASTASE）新双重菁纯修护液100ml</p>
          <p class="goods-time">发布日期：2018-06-02</p>
        </div>
        <div class="goods-use">
          <p class="tip">公司发布</p>
          <div class="btn">取消推荐</div>
          <!--btn-green-->
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  // import { ERR_OK } from 'api/config'
  import Scroll from 'components/scroll/scroll'

  export default {
    name: 'goods-list',
    methods: {
      onPullingDown () {
      }
    },
    components: {
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  .goods-list
    position: fixed
    background: goods-list
    z-index: 10
    left: 0
    right: 0
    background: $color-background
    bottom: 0
    top: 0

  .tab
    height: 45px
    line-height: 45px
    display: flex
    background: $color-white
    padding: 0 7vw
    box-sizing: border-box
    position: relative
    .tab-item
      text-align: center
      flex: 1
      font-family: $font-family-medium
      font-size: $font-size-medium
    .line
      height: 3px
      width: 30px
      bottom: 0
      left: 24vw // 24 67
      background: $color-text
      position: absolute

  .goods-item
    width: 92vw
    background: $color-white
    margin: 15px auto 0
    display :flex
    padding : 10px
    box-sizing :border-box
    font-family: $font-family-regular
    font-size: $font-size-small
    color :$color-text-88
    .img-box
      overflow :hidden
      height: 70px
      width: 70px
      .goods-image
        width: 100%
    .goods-content
      margin-left: 10px
      margin-right: 17px
      .goods-text
        line-height: 18px
        font-family: $font-family-medium
        font-size: $font-size-medium
        color :$color-text
        width: 45.07vw
      .goods-time
        position: absolute
        bottom: 15px
    .goods-use
      position: relative
      text-align :right
    .btn
      height: 22px
      line-height: 22px
      padding : 0 6px
      margin-top: 33px
      white-space :nowrap
      text-align :center
      border-1px($color-col-line)
    .btn-green
      background :$color-56
      color :$color-white
      border-none()
</style>