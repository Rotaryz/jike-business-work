<template>
  <div id="app">
    <ceiling></ceiling>
    <router-view/>
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from 'components/tab/tab'
  import Ceiling from 'components/ceiling/ceiling'
  import utils from 'common/js/utils'

  const COMPONENT_NAME = 'App'
  const platform = utils.getPlatform()
  console.log(platform)
  export default {
    name: COMPONENT_NAME,
    data() {
      return {}
    },
    components: {
      Tab,
      Ceiling
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
