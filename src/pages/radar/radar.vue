<template>
  <div class="radar">
    <router-link to="/scroll-demo">测试动画</router-link>
    <router-view></router-view>
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
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 45px

</style>
