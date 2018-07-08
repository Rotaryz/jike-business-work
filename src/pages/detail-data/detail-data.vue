<template>
  <div class="data-box">
    <div class="client-top">
      <div class="cliten-box">
        <div class="cliten-con">
          <div class="cliten-img">
            <div class="detail-img-box">
              <div class="img"></div>
              <div class="label-right">
                <div class="label-name">往事随风</div>
                <div class="add-text">
                  2018-06-01 通过扫码加入
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="client-padding"></div>
    <div class="data-con">
      <div class="data-top">
        <div class="data-list">
          <div class="left">姓名</div>
          <div class="right">
            <div class="name">往事</div>
          </div>
        </div>
        <div class="data-list">
          <div class="left">手机号码</div>
          <div class="right">
            <input type="number" placeholder="未完善" class="right-input">
          </div>
        </div>
        <div class="data-list">
          <div class="left">微信号</div>
          <div class="right">
            <input type="number" placeholder="未完善" class="right-input">
          </div>
        </div>
        <div class="data-list">
          <div class="left">性别</div>
          <div class="right">
            <input type="number" placeholder="未完善" class="right-input">
          </div>
        </div>
        <div class="data-list">
          <div class="left">年龄</div>
          <div class="right">
            <input type="number" placeholder="未完善" class="right-input">
          </div>
        </div>
        <div class="data-list">
          <div class="left">所在城市</div>
          <div class="right">
            <input type="number" placeholder="未完善" class="right-input">
          </div>
        </div>
        <div class="data-list">
          <div class="left">从事职业</div>
          <div class="right">
            <input type="number" placeholder="未完善" class="right-input">
          </div>
        </div>
        <div class="data-list">
          <div class="left">所属公司</div>
          <div class="right">
            <input type="number" placeholder="未完善" class="right-input">
          </div>
        </div>
        <div class="data-list">
          <div class="left">屏蔽消息</div>
          <div class="right">
            <div class="name">不屏蔽</div>
          </div>
        </div>
      </div>
      <div class="data-bottom">
        <div class="title">备注</div>
        <div class="textarea-number">128<span>/500</span></div>
        <textarea class="data-area" name="" id="" cols="30" rows="10" placeholder="请输入备注"></textarea>
      </div>
    </div>
    <div class="data-btn">保存</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'detail-data'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  *
    box-sizing: border-box
    -moz-box-sizing: border-box
    -webkit-box-sizing: border-box

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
        position: relative
        .cliten-img
          layout(row)
          justify-content: space-between
          align-items: center
          position: relative
          z-index: 1
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
              .add-text
                font-size: $font-size-small
                color: $color-text-88
                font-family: $font-family-meddle
  .client-padding
    width: 100%
    height: 0
    padding-bottom: 10%

  .data-con
    padding: 15px
    .data-top
      border: 0.5px solid rgba(32,32,46,.1)
      background: #fff
      padding-left: 15px
      .data-list
        layout(row)
        height: 45px
        border-bottom: 0.5px solid rgba(0,0,0,.1)
        align-items: center
        .left
          font-size: $font-size-medium
          color: $color-text-88
          font-family: $font-family-meddle
          width: 83px
        .name
          font-size: $font-size-medium
          color: #20202e
          font-family: $font-family-meddle
        .right
          flex: 1
          .right-input
            height: 44px
            line-height: 44px
            width: 90%
            border: none
            font-size: $font-size-medium
            color: #20202e
            font-family: $font-family-meddle
    .data-top:last-child
      border-bottom: 0
    .data-bottom
      margin-top: 10px
      border: 0.5px solid rgba(0,0,0,0.1)
      padding: 15px
      background: #fff
      position: relative
      .title
        font-size: $font-size-medium
        color: $color-text-88
        font-family: $font-family-meddle
      .data-area
        margin-top: 10px
        width: 100%
        border-color: rgba(0,0,0,0.1)
        padding: 10px 15px
        font-size: $font-size-medium
        color: #20202e
        font-family: $font-family-meddle
        height: 185px
      .textarea-number
        position: absolute
        bottom: 25px
        right: 25px
        font-size: $font-size-small
        span
          color: #ddd
  .data-btn
    position: fixed
    height: 45px
    line-height: 45px
    left: 0
    bottom: 0
  .zz
    width: 100px
</style>
