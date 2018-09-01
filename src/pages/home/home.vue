<template>
  <div class="home" @touchmove.prevent>
    <ceiling ref="ceiling"></ceiling>
    <router-view @login="login"/>
    <tab></tab>
  </div>
</template>

<script>
  import Tab from 'components/tab/tab'
  import Ceiling from 'components/ceiling/ceiling'

  const COMPONENT_NAME = 'home'
  import storage from 'storage-controller'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {}
    },
    created() {
      let info = storage.get('info', {})
      if (!info.is_boss) {
        storage.remove('token')
        this.$router.replace('/oauth')
      }
      console.log(process.env)
    },
    methods: {
      login() {
        this.$refs.ceiling.login()
      }
    },
    components: {
      Tab,
      Ceiling
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
</style>
