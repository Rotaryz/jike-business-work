<template>
  <div id="app" @touchmove.prevent>
    <ceiling></ceiling>
    <router-view/>
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import storage from 'storage-controller'
  import Tab from 'components/tab/tab'
  import Ceiling from 'components/ceiling/ceiling'
  const COMPONENT_NAME = 'App'
  const DEFAULT_ROUTE = '/radar'
  const OAUTH_ROUTE = '/oauth'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {}
    },
    created() {
      const token = storage.get('token', '')
      if (token) {
        this.$router.replace(DEFAULT_ROUTE)
      } else {
        this.$router.replace(OAUTH_ROUTE)
      }
    },
    components: {
      Tab,
      Ceiling
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
