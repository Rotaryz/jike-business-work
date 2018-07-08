<template>
  <div class="box">
    <div class="client-top">
      <div class="cliten-box">
        <div class="cliten-con">
          <div class="cliten-img">
            <div class="detail-img-box">
              <div class="img"></div>
              <div class="label-right">
                <div class="label-name">往事随风</div>
                <div class="label-box">
                  <div class="label active">80后</div>
                  <div class="label active">在意价格</div>
                  <div class="label">添加标签</div>
                </div>
              </div>
            </div>
            <div class="detail-jump">
              <img class="jump-img" src="./icon-pressed@2x.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'client-detail'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  div
    box-sizing:border-box
    -moz-box-sizing:border-box
    -webkit-box-sizing:border-box
  .client-top
    background: #20202E
    height: 73px
    position: relative
    .cliten-box
      position: absolute
      padding: 0 15px
      left: 0
      top: 20px
      width: 100%
      .cliten-con
        background: #fff
        width: 100%
        padding: 15px
      .cliten-img
        layout(row)
        justify-content: space-between
        align-items: center
        .detail-img-box
          layout(row)
          .img
            position: relative
            height: 0
            width: 60px
            height: 60px
            background: #333
          .label-right
            margin-left: 10px
            .label-name
              font-size: $font-size-medium-x
              color: $color-text
              font-family: $font-family-meddle
              padding-top: 5px
              margin-bottom: 15px
            .label-box
              layout(row)
              .label
                width: 65px
                height: 20px
                line-height: 20px
                text-align: center
                font-size: $font-size-medium
                color: $color-text-88
                font-family: $font-family-meddle
                background: #F0F2F5
                margin-right: 5px
              .active
                background: rgba(86,186,21,0.2)
                color: #56BA15
        .detail-jump
          height: 45px
          width: 25px
          position: relative
          .jump-img
            width: 6px
            height: 12px
            position: absolute
            right: 0
            top: 0
            bottom: 0
            margin:  auto
  .zz
    width: 100px
</style>
