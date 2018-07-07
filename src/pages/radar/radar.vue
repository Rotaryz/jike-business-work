<template>
  <div class="radar">
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'Radar',
    created() {
      this.$emit('tabChange', '雷达')
    },
    data() {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  .radar
    width: 100vw
    height: 100%

</style>
