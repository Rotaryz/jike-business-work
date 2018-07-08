<template>
  <div id="app">
    <router-view/>
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from 'components/tab/tab'

  export default {
    name: 'App',
    data() {
      return {}
    },
    created() {
    },
    methods: {},
    components: {
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
