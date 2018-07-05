<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  created() {
    console.log(888888)
    this.test('123')
    console.log(this.argument())
  },
  methods: {
    ...mapGetters(['argument']),
    ...mapActions(['test'])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px

</style>
