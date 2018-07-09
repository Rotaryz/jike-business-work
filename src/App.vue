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
  import Oauth from 'common/js/oauth'
  import {Jwt} from 'api'
  import storage from 'storage-controller'
  import {ERR_OK} from 'common/js/config'

  const NORMAL_ROUTE = '/radar'
  const COMPONENT_NAME = 'App'

  const oauth = new Oauth()

  export default {
    name: COMPONENT_NAME,
    data() {
      return {}
    },
    created() {
      this._checkAuthorize()
    },
    computed: {
      code() {
        return this.$route.query.code || ''
      },
      hasToken() {
        return storage.has('token')
      },
      beforeLoginRoute() {
        return storage.get('beforeLoginRoute')
      }
    },
    methods: {
      _checkAuthorize() {
        this.$router.replace(NORMAL_ROUTE)
        // if (this.code && !this.hasToken) {
        //   // 有code没有token -> 申请拿token
        //   this._applyOauth()
        // } else if (!this.hasToken && !this.code) {
        //   this._getCode()
        // } else {
        //   this.$router.replace(NORMAL_ROUTE)
        // }
      },
      _getCode() {
        window.location.href = oauth.oauthUri
      },
      _applyOauth() {
        Jwt.employeeLogin(this.code).then((res) => {
          if (res.error !== ERR_OK) {
            // todo '跳去系统异常页面'
            return
          }
          const {access_token: token, employee_info: info} = res.data
          storage.set('token', token)
          storage.set('info', info)
          this.$router.replace(this.beforeLoginRoute || NORMAL_ROUTE)
        })
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
