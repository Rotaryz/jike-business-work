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

  export default {
    name: 'App',
    data() {
      return {}
    },
    created() {
    },
    methods: {},
    components: {
      Tab,
      Ceiling
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
