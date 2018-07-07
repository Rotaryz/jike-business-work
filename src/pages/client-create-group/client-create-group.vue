<template>
  <article class="client-create-group">
    <div class="title">设置分组</div>
    <section class="content">
      <input class="input" type="text" placeholder="请输入组名">
    </section>
    <footer class="btn">保存</footer>
  </article>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ClientSetGroup',
    data() {
      return {
        dataArray: [],
        preId: -1
      }
    },
    methods: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .client-create-group
    min-height: 100vh
    background-color: $color-white-fff
    .title
      font-family: $font-family-regular
      font-size: $font-size-16
      color: $color-20202E
      padding: 15px
    .content
      padding: 15px 0
      margin-left: 15px
      border-bottom: 0.5px solid $color-col-line
      .input
        width: 100%
        outline :none
    .btn
      height: 45px
      position: fixed
      bottom: 0
      left: 0
      right: 0
      line-height: 45px
      text-align: center
      background-color: $color-20202E
      font-family: $font-family-meddle
      font-size: $font-size-16
      color: $color-white-fff
      letter-spacing: 0.3px
      z-index: 2


</style>
