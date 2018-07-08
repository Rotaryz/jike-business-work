<template>
  <div class="client">
    <router-link class="item" to="/client-tag">client-tag</router-link>
    <router-link class="item" to="/client-set-group">client-set-g</router-link>
    <router-link class="item" to="/client-create-group">client-c-g</router-link>
    <router-link class="item" to="/client-add-user">client-add-user</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Client',
    created() {
      this.$emit('tabChange', 3)
    },
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'

  .client
    layout()
    .item
      height: 50px
      marign: 10px 0
</style>
