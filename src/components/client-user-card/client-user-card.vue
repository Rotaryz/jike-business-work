<template>
  <div class="client-user-card">
    <section class="container">
      <img class="user-icon" :src="userInfo.image_url" alt=""/>
      <article class="user-info">
        <section class="base-info">
          <div class="name">{{userInfo.name}}</div>
          <div class="last-time">AI预计成交率{{userInfo.conversion_rate}}%</div>
        </section>
        <div class="tags">{{userInfo.last_follow_day}}</div>
      </article>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      userInfo: Object
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .client-user-card
    flex: 1
    margin-left :15px
    .container
      layout(row, block, no-warp)
      align-items: center
      padding: 15px 0
      border-bottom: 0.5px solid $color-col-line
      height: 45px
      overflow: hidden
      .user-icon
        width: 45px
        height: 45px
        opacity: 0.8
        margin-right: 10px
      .user-info
        flex: 1
        layout()
        justify-content: space-around
        height: 100%
        .base-info
          box-sizing: border-box
          layout(row, block, nowrap)
          justify-content: space-between
          align-items: flex-start
          .name
            font-family: $font-family-regular
            font-size: $font-size-16
            color: $color-20202E
            letter-spacing: 0.6px
          .last-time
            padding-right: 15px
            font-family: $font-family-regular
            font-size: $font-size-12
            color: $color-888888
            no-wrap()
        .tags
          font-family: $font-family-meddle
          font-size: $font-size-12
          color: $color-56BA15

</style>
