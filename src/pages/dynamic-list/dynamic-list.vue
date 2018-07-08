<template>
  <div class="dynamic-list">
    <scroll>
      <div class="dynamic-item">
        <div class="find-item img-one">
          <div class="find-box">
            <div class="cainter">
              <div class="user">
                <!-- 头像-->
                <img class="header">
                <p class="nickname">姓名</p>
              </div>
              <!--{{comment?'':'special'}}-->
              <p class="words">写日志是否已成为我生活中的一部分，我享受其中的乐趣，
                我也愿意和大家分享我的点滴，只要你们不觉得乏味。回到工作，如果你的工作也像我写日志一样
                ，能成为你生活的一部分，并且你能享受其中的乐趣，我觉得这就是一份工作的价</p>
              <div class="one-box">
                <img class="img-one-item">
              </div>
            </div>
            <!--<div class="address">-->
            <!--<img class="add-icon">-->
            <!--地址-->
            <!--</div>-->
            <div class="information">
              <div class="time">
                2018-07-06 18:12
                <p class="del">删除</p>
              </div>
              <div class="share">
                <div class="share-item comment">
                  <img class="find-icon" src="./icon-comment@2x.png">
                  <div class="find-num">
                    评论
                  </div>
                </div>
                <!--{{find.is_like ? 'thumbs-up' : ''}}-->
                <div class="share-item">
                  <img class="find-icon" src="./icon-like@2x.png">
                  <div class="find-num">
                    赞
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="find-item img-two">
          <div class="find-box">
            <div class="cainter">
              <div class="user">
                <img class="header">
                <p class="nickname">姓名</p>
              </div>
              <p class="words">内容</p>
              <div class="img-item-two">
                <img class="two-item">
                <img class="two-item">
              </div>
            </div>
            <!--<div class="address">-->
            <!--<img class="add-icon">-->
            <!--地址-->
            <!--</div>-->
            <div class="information">
              <div class="time">
                2018-07-06 18:12
                <p class="del">删除</p>
              </div>
              <div class="share">
                <div class="share-item comment">
                  <img class="find-icon" src="./icon-comment@2x.png">
                  <div class="find-num">
                    评论
                  </div>
                </div>
                <!--{{find.is_like ? 'thumbs-up' : ''}} -->
                <div class="share-item ">
                  <img class="find-icon" src="./icon-like@2x.png">
                  <div class="find-num">
                    赞
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="find-item img-more">
          <div class="find-box">
            <div class="cainter">
              <div class="user">
                <img class="header">
                <p class="nickname">姓名</p>
              </div>
              <!--{{comment?'':'special'}}"-->
              <p class="words">内容</p>
              <div class="img-item-two">
                <img class="two-item">
                <img class="two-item">
                <img class="two-item">
                <img class="two-item">
                <img class="two-item">
                <img class="two-item">
                <img class="two-item">
                <img class="two-item">
                <img class="two-item">
              </div>
            </div>
            <!--<div class="address" >-->
            <!--<img class="add-icon">-->
            <!--地址-->
            <!--</div>-->
            <div class="information">
              <div class="time">
                2018-07-06 18:12
                <p class="del">删除</p>
              </div>
              <div class="share">
                <div class="share-item comment">
                  <img class="find-icon" src="./icon-comment@2x.png">
                  <div class="find-num">
                    评论
                  </div>
                </div>
                <!--{{find.is_like ? 'thumbs-up' : ''}} -->
                <div class="share-item">
                  <img class="find-icon" src="./icon-like@2x.png">
                  <div class="find-num">
                    赞
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
    <img class="new-dynamic" src="./Oval@2x.png">
  </div>
</template>

<script>
  // import { ERR_OK } from 'api/config'
  import Scroll from 'components/scroll/scroll'

  export default {
    name: 'dynamic-list',
    components: {
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  .dynamic-list
    position: fixed
    background: dynamic-list
    z-index: 10
    left: 0
    right: 0
    background: $color-background
    bottom: 0
    top: 0

  .find-item
    padding-top: 14px
    background: $color-white
    .find-box
      padding-bottom: 15px
      border-bottom-1px($color-col-line)
      margin-left: 60px
      padding-right: 21px
      .user
        display: flex
        align-items: center
        transform: translateX(-45px)
        .header
          height: 34px
          width: 34px
        .nickname
          transform: translateY(-25%)
          font-family: $font-family-regular
          color: $color-text
          font-size: $font-size-medium-x
          margin-left: 10px
      .words
        display: block
        width: 78.67vw
        font-family: $font-family-regular
        font-size: $font-size-medium
        line-height: 21px
        margin-bottom: 3.5px
        .p-more
          color: $color-del
          margin-left: 12px
      .words.special
        height: 21px
      .address
        font-size: $font-size-small
        color: $color-del
        margin-top: 8px
        .add-icon
          height: 13px
          width: @height
          margin-left: 3px
          transform: translateY(1.5px)
      .information
        height: 20px
        display: flex
        margin: 12px 0 0
        font-size: $font-size-small
        justify-content: space-between
        align-items: center
        .del
          color: #839FC0
          margin-left: 12px
        .find-num, .time
          color: $color-text-88
          display: flex
        .share
          display: flex
          .share-item
            display: flex
            align-items: center
            &:last-child
              margin-left: 19px
          .find-icon
            height: 16px
            width: 16px
        .find-num
          margin-left: 1px
          transform: translateY(2px)
        .thumbs-up
          .find-num
            color: $color-theme-tw

  .video
    .find-video
      width: 54vw
      height: 30.134vw
      position: relative
      .play-icon
        height: 41px
        width: 41px
        all-center()

  .img-one
    .img-one-item
      box-sizing: border-box
      border: 0.5px solid $color-background
      width: 34.134vw
      height: 46.4vw
    .one-box
      display: inline-block

  .img-two
    .img-item-two
      display: flex
      justify-content: space-between
      .two-item
        box-sizing: border-box
        height: 31.2vw
        width: 49%

  .img-more
    .img-item-two
      display: flex
      flex-wrap: wrap
      transform: translateX(-5PX)
      .two-item
        box-sizing: border-box
        height: 23.5vw
        width: @height
        margin-left: 1vw
        margin-top: 1vw

  .new-dynamic
    border-radius :50%
    position: absolute
    bottom: 66px
    right: 15px
    z-index: 100
    box-shadow: 0 8px 7px 0 rgba(211,211,215,0.29)
    width: 50px
    height: @width
</style>