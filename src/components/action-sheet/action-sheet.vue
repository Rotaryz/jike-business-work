<template>
  <article class="action-sheet">
    <div class="mask"></div>
  </article>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .action-sheet
    fill-box()
    z-index: 100
    .mask
      fill-box()
      background-color: $color-20202E
      opacity: 0.8
</style>
