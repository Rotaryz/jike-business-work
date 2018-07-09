<template>
  <div id="app">
    <router-view/>
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from 'components/tab/tab'
  import Oauth from 'common/js/oauth'
  import {Jwt} from 'api'

  const oauth = new Oauth()

  export default {
    name: 'App',
    data() {
      return {}
    },
    mounted() {
      this.applyOauth()
    },
    computed: {
      code() {
        return this.$route.query.code || ''
      }
    },
    methods: {
      applyOauth() {
        Jwt.employeeLogin(this.code).then((res) => {
          console.log(res)
        })
        console.log(this.code)
        console.log(oauth.oauthUri)
        // window.location.href = oauth.oauthUri
      }
    },
    components: {
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
