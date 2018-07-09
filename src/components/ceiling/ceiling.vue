<template>
  <div class="ceiling" :class="newMsgIn ? 'show' : ''">
    <img src="" class="ceiling-left">
    <div class="ceiling-right">
      <div class="content">
        <p class="msgs-p" v-if="false">杨过<span class="green">查看</span>了你的<span class="green">个人动态</span>，看来TA对你感兴趣</p>
        <p class="txt-p">疯狂砍价已上线，快速提升品牌曝光度了解一下就恢复积分兑换</p>
      </div>
      <div class="time">刚刚</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'
  import webimHandler from 'common/js/webim_handler'

  const COMPONENT_NAME = 'Ceiling'
  const Config = {
    sdkappid: 1400104514,
    accountType: 29987,
    accountMode: 0 // 帐号模式，0-表示独立模式，1-表示托管模式
  }
  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        glideShow: false,
        newMsgIn: false,
        timer: ''
      }
    },
    async created() {
      await this.sdkLogin()
      await this.getLatelyList()
    },
    methods: {
      ...mapActions([
        'saveList'
      ]),
      // IM登录
      async sdkLogin() {
        let loginInfo = {
          'sdkAppID': Config.sdkappid, // 用户所属应用id,必填
          'appIDAt3rd': Config.sdkappid, // 用户所属应用id，必填
          'accountType': Config.accountType, // 用户所属应用帐号类型，必填
          'identifier': 'philly', // 当前用户ID,必须是否字符串类型，选填
          'identifierNick': 'philly', // 当前用户昵称，选填
          'userSig': 'eJxlz19PgzAUh * F7PkXDtdG2AwYmXmBFQjYNKDO6m4aMdhxl0JW6PzF * dxWX2MTr58355Xw4CCG3nD * eV6tV - 94Zbo5KuOgSudg9*0OloOaV4RNd-0NxUKAFr6QRekTi*z7F2G6gFp0BCadCNdC2R8uH * o2PI78HPIwJ9nzi2QmsR7xLFixjr0WyZ71p5mTJhtlmp6TUEJlomQOOaJZm * VCUenozq2NI4mkTB8 * yylt4ud8XaxE * baXR3gMJmkV5cV2yw63Ypm0YpsmVNWlgI04fTTAOPRpElu6EHqDvxoBi4hP6Hf287Xw6X8FQXYk_' // 当前用户身份凭证，必须是字符串类型，选填
        }

        // 监听事件
        let listeners = {
          'onConnNotify': (resp) => {
            webimHandler.onConnNotify(resp)
          }, // 选填
          'onMsgNotify': async (msg) => {
            this.newMsgIn = false
            clearTimeout(this.timer)
            this.newMsgIn = true
            this.timer = setTimeout(() => {
              this.newMsgIn = false
            }, 5000)
            let res = await webimHandler.onMsgNotify(msg)
            console.log(res)
          }, // 监听新消息(私聊(包括普通消息和全员推送消息)，普通群(非直播聊天室)消息)事件，必填
          'onGroupSystemNotifys': (msg) => {
          } // 监听（多终端同步）群系统消息事件，必填
        }

        let options = {
          'isAccessFormalEnv': true, // 是否访问正式环境，默认访问正式，选填
          'isLogOn': false// 是否开启控制台打印日志,默认开启，选填
        }

        let avatar = ''
        await webimHandler.sdkLogin(loginInfo, listeners, options, avatar)
      },
      // 获取最近联系人
      async getLatelyList() {
        let res = await webimHandler.getRecentContact(50)
        let msgList = await webimHandler.initUnread(res)
        this.saveList(msgList)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'

  .ceiling
    height: 60px
    position: fixed
    left: 0
    right: 0
    top: -60px
    z-index: 999
    background: $color-white
    border: 0.5px solid rgba(32, 32, 46, 0.10)
    box-shadow: 0 2px 6px 0 rgba(43, 43, 145, 0.07)
    border-radius: 1px 1px 4px 4px
    display: flex
    align-items: center
    padding: 0 15px
    transition: all .5s
    .ceiling-left
      width: 40px
      height: 40px
      border: 0.5px solid rgba(32, 32, 46, 0.10)
      margin-right: 10px
    .ceiling-right
      flex: 1
      overflow: hidden
      display: flex
      align-items: center
      .time
        font-size: $font-size-small
        color: $color-text-88
        font-family: $font-family-meddle
        margin-left: 30px
      .content
        flex: 1
        overflow: hidden
        .msgs-p
          line-height: 18px
          font-family: $font-family-meddle
          font-size: $font-size-medium
          .green
            color: $color-text-56
        .txt-p
          width: 100%
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          font-size: $font-size-medium
          font-family: $font-family-meddle

  .show.ceiling
    top: 0

</style>
