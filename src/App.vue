<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  created() {
    console.log(process.env)
    console.log(888888)
    this.test(3443234)
    this.test1('123345')
    console.log(this.argument(), this.argument1())
  },
  methods: {
    ...mapGetters(['argument', 'argument1']),
    ...mapActions(['test', 'test1'])
  },
  watch: {
    '$route'(to) {
      let title = this.$route.meta.title
      document.title = title
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
