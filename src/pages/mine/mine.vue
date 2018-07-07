<template>
  <div class="mine">
    mine
  </div>
</template>

<script>
  export default {
    name: 'Mine',
    created() {
      this.$emit('tabChange', 4)
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
