<template>
  <article class="client-search">
    <section class="search-box">
      <div class="input-box">
        <img class="icon" src="./icon-search@3x.png" alt="">
        <input class="input" type="text" placeholder="请输客户姓名" v-model="userName">
      </div>
      <div class="cancel-btn">取消</div>
    </section>
  </article>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ClientSearch',
    data() {
      return {
        userName: ''
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .client-search
    min-height: 100vh
    background-color: $color-white-fff
    .search-box
      height: 45px
      background-color: $color-F0F2F5
      layout(row, block, no-wrap)
      align-items: center
      .input-box
        background-color: $color-white-fff
        layout(row, block, no-warp)
        margin-left: 15px
        .icon
          width: 25.7px
          height: 26.4px

      .cancel-btn
        width: 60px
        height: 100%
        font-family: $font-family-meddle
        font-size: $font-size-14
        color: $color-56BA15
</style>
