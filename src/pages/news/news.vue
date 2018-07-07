<template>
  <div class="news">
    news
  </div>
</template>

<script>
  export default {
    name: 'News',
    created() {
      this.$emit('tabChange', '消息')
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

</style>
