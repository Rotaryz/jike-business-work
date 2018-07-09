<template>
  <div class="edit-dynamic">
    <scroll>
      <div class="compile">
       <textarea class="words-span" placeholder="这一刻的想法…"></textarea>
        <!--:style="height: {{comHeight}}px"-->
        <div class="com-box">
          <div class="com-image">
            <img class="img-item" src="./Group3@2x.png">
              <div class="close">
                <div class="close-icon">
                  <img class="close-icon">
                </div>
              </div>
            <div class="img-add">
              <img class="add-img">
            </div>
          </div>
        </div>
        <!--style="bottom: {{height}}px"-->
      </div>
    </scroll>
    <div class="btn">
      <div class="btn-item btn-dark">取消</div>
      <div class="btn-item btn-green">发布</div>
    </div>
  </div>
</template>

<script>
  // import { ERR_OK } from 'api/config'
  import Scroll from 'components/scroll/scroll'

  export default {
    name: 'edit-dynamic',
    components: {
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  .edit-dynamic
    background: $color-background
    position: fixed
    background: edit-dynamic
    z-index: 10
    left: 0
    right: 0
    bottom: 45px
    top: 0
    .words-span
      height: 88px
      padding :22px 15px
      outline: none
      resize: none
      width: 100vw
      background :$color-background
      border: none
      box-sizing :border-box
      font-size: $font-size-medium-x
      color :$color-text
      &::-webkit-input-placeholder
        font-family: $font-family-regular
        font-size: $font-size-medium-x
        color: #CCCCCC
    .com-box
      height: 18.5vh
      overflow-y: auto
      padding: 0 4vw 0 2.4vw
    .com-words
      color: #CCCCCC
      font-size: $font-size-medium-x
    .words-text
      height: 19.467vw
      font-size: $font-size-medium-x
      color: $color-text
      width: 100%
      box-sizing: border-box
      padding: 10.5px 24px 0 15px

  .com-tab
    background: $color-white
    position: fixed
    width: 100%
    bottom: 0
    border-top: 0.5px solid $color-split-line
    border-bottom: 0.5px solid $color-split-line
    height: 8.6vh
    display: flex
    margin-top: 4.56vh
    .com-addrss
      z-index: 100
      position: absolute
      top: -36px
      left: 15px
      height: 29px
      max-width: 82%
      background: $color-background
      border-radius: 50px
      padding: 0 13px
      display: flex
      align-items: center
      justify-content: center
      font-size: $font-size-medium
      color: $color-text-tr
      .add-title
        no-wrap()
      .com-add-icons
        width: 16px
        height: @width
    .com-addrss-active
      color: $color-text
    .com-tab-item
      height: 100%
      flex: 2.5
      line-height: 49px
      border-right: 0.5px solid $color-split-line
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .com-tab-icon
        height: 22px
        width: @height
      .com-tab-item-title
        font-size: $font-size-small-s
        color: $color-text-tr
        margin-top: 5px
      &:last-child
        flex: 5
        color: $color-assist-pink
        opacity: 0.5
        border-right: none
        text-align: center
    .com-tab-item-active
      opacity: 1 !important

  .com-image, .com-video
    display: inline-block
    .img-item
      height: 29.6vw
      margin: 1.6vw 0 0 1.6vw
      width: @height
      position: relative
      .play
        all-center()
        width: 36.363%
        height: @width
      .close
        position: absolute
        top: 0
        right: 0
        width: 30px
        height: 30px
        z-index: 100
        .close-icon
          height: 16.5px
          width: 16.5px
          line-height: 16.5px
          text-align: center
          background: rgba(0, 0, 0, 0.20)
          color: $color-white
          font-size: $font-size-small-s
          position: absolute
          right: 0
          top: 0
          .close-icon
            cll-center()
            height: 16.5px
            width: 16.5px
    .img-add
      display: inline-block
      height: 29.6vw
      width: @height
      margin: 1.6vw 0 0 1.6vw
      position: relative
      .add-image
        height: 98%
        width: @height


  .btn
    position: relative
    z-index: 10
    display: flex
    height: 45px
    .btn-item
      font-family: $font-family-medium
      font-size: $font-size-medium
      color: $color-white
      line-height: 45px
      text-align: center
      flex: 1
    .btn-dark
      background :$color-text
    .btn-green
      background: $color-56
</style>