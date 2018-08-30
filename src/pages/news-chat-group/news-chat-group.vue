<template>
  <transition :name="slide">
    <div class="chat">
      <section class="chat-container" @click.stop="hideInput">
        <div class="group-wrapper">群发组：老客户组(12)，新客户组(8)，新客户组(8)，新客户组(8)，新客户组(8)，新客户组(8)，新客户组(8)</div>
      </section>
      <section class="chat-input border-top-1px">
        <div class="chat-input-box">
          <div class="face-box" @click.stop="showEmoji">
            <img src="../../../static/img/icon-emoji@2x.png" class="face-icon">
          </div>
          <div class="input-container" ref="textBox">
            <textarea class="textarea" type="text" ref="inputTxt" v-model="inputMsg" rows="1"></textarea>
          </div>
          <div class="addimg-box" v-if="!inputMsg" @click.stop="showMoreList">
            <img src="../../../static/img/icon-add_im@2x.png" class="addimg-icon">
          </div>
          <div class="submit-btn" @click="sendMsg" v-if="inputMsg">发送</div>
        </div>
        <div class="more-box">
          <div class="emoji-list" v-if="emojiShow">
            <div class="emoji-item" v-for="(item, index) in emojiList" :key="index" @click.stop="chioceEmoji(item)">
              <img :src="item.url" class="emoji-icon">
            </div>
          </div>
          <div class="addimg-list" v-if="mortListShow">
            <label class="addimg-item" :for="item.type == 1?'choose-pic':''" v-for="(item, index) in moreLists" :key="index" @click="nextWork(item)">
              <img :src="item.icon" class="item-icon">
              <p class="item-txt">{{item.txt}}</p>
              <input type="file" id="choose-pic" class="image-file" @change="_fileImage($event)" accept="image/*" v-if="item.type == 1">
            </label>
          </div>
        </div>
      </section>
      <toast ref="toast"></toast>
    </div>
  </transition>
</template>

<script>
  import Toast from 'components/toast/toast'
  import { mapActions, mapGetters } from 'vuex'
  // import webimHandler from 'common/js/webim_handler'
  import storage from 'storage-controller'
  // import { Im, UpLoad } from 'api'
  // import { ERR_OK, TIMELAG } from 'common/js/config'
  import utils from 'common/js/utils'
  import { emotionsFaceArr } from 'common/js/constants'

  const MORELIST = [
    {txt: '图片', icon: '../../../static/img/icon-pic-_im@2x.png', type: 1}
    // {txt: '发送商品', icon: '../../../static/img/icon-goods_im@2x.png', type: 2},
    // {txt: '发送活动', icon: '../../../static/img/icon-send_im@2x.png', type: 3}
  ]
  export default {
    name: 'Chat',
    data() {
      return {
        textareaDom: '',
        heightBoxDom: '',
        txtHeight: '36px',
        inputMsg: '',
        id: '',
        page: 1,
        noMore: false,
        moreLists: MORELIST,
        emojiList: emotionsFaceArr,
        emojiShow: false,
        mortListShow: false,
        allowSelectPic: true
      }
    },
    created() {
      // this.id = this.$route.query.id
      // if (this.exceptionHandle(!this.id)) return
      // let data = {
      //   'end_date': this.endDate,
      //   limit: 40,
      //   customer_im_account: this.id,
      //   employee_im_account: this.imInfo.im_account
      // }
      // Im.getMsgList(data).then((res) => {
      //   if (res.error === ERR_OK) {
      //     let list = res.data.reverse()
      //     this.setNowChat(list)
      //     let timer = setTimeout(() => {
      //       let startY
      //       if (this.listDom.clientHeight < this.chatDom.clientHeight) {
      //         startY = 20
      //       } else {
      //         startY = this.chatDom.clientHeight - this.listDom.clientHeight - 20
      //       }
      //       this.$refs.scroll && this.$refs.scroll.scrollTo(0, startY, 10, ease[this.scrollToEasing])
      //       clearTimeout(timer)
      //     }, 20)
      //   }
      // })
      // let url = location.href
      // Global.jssdkConfig({weixin: 'ai_radar', url, current_type: 'zantui'}).then((res) => {
      //   if (res.error === ERR_OK) {
      //     res = res.data
      //     wx.config({
      //       debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      //       appId: res.appid, // 必填，企业号的唯一标识，此处填写企业号corpid
      //       timestamp: res.timestamp, // 必填，生成签名的时间戳
      //       nonceStr: res.noncestr, // 必填，生成签名的随机串
      //       signature: res.signature, // 必填，签名，见附录1
      //       jsApiList: ['previewImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      //     })
      //   }
      // })
    },
    mounted() {
      this.textareaDom = this.$refs.inputTxt
      this.textBoxDom = this.$refs.textBox
      // this.chatDom = this.$refs.chat
      // this.listDom = this.$refs.list
      // if (this.exceptionHandle(!this.currentMsg.account)) return
      // document.title = this.currentMsg.nickName
      // webimHandler.getC2CMsgList(this.currentMsg.account) // 消息已读处理
      // this.setUnreadCount(this.currentMsg.account) // vuex
    },
    beforeDestroy() {
      // this.setCurrent({})
      // this.setNowChat([])
    },
    methods: {
      ...mapActions([
        // 'setUnreadCount',
        // 'setCurrent',
        // 'addListMsg',
        // 'setNowChat'
      ]),
      exceptionHandle(flag) {
        if (flag) {
          this.$refs.toast.show('网络异常, 请稍后重试')
          this.$router.go(-1)
          return true
        }
      },
      hideInput() {
        this.mortListShow = false
        this.emojiShow = false
      },
      chioceEmoji(item) {
        this.inputMsg = this.inputMsg + item.txt
      },
      showEmoji() {
        this.emojiShow = !this.emojiShow
        this.mortListShow = false
      },
      showMoreList() {
        this.mortListShow = !this.mortListShow
        this.emojiShow = false
      },
      textHeight() {
        let timer = setTimeout(() => {
          this.textareaDom.style.height = 'auto'
          this.textareaDom.style.height = this.textareaDom.scrollHeight + 'px'
          this.textBoxDom.scrollTop = this.textareaDom.scrollHeight
          clearTimeout(timer)
        }, 20)
      },
      _fileImage(e) {
        let file = e.target.files[0]
        let params = new FormData()
        params.append('file', file, file.name)
        this.hideInput()
        // UpLoad.upLoadImage(params).then((res) => {
        //   if (res.error === ERR_OK) {
        //     let data = {
        //       image_id: res.data.id,
        //       url: res.data.url
        //     }
        //     let desc = {log_type: 20}
        //     let ext = '20005'
        //     data = JSON.stringify(data)
        //     desc = JSON.stringify(desc)
        //     let opt = {
        //       data,
        //       desc,
        //       ext
        //     }
        //     let timeStamp = parseInt(Date.now() / 1000)
        //     let msg = {
        //       from_account_id: this.imInfo.im_account,
        //       avatar: this.userInfo.avatar,
        //       content: '',
        //       time: timeStamp,
        //       url: res.data.url,
        //       msgTimeStamp: timeStamp,
        //       nickName: this.userInfo.nickName,
        //       sessionId: this.userInfo.account,
        //       unreadMsgCount: 0,
        //       type: 20
        //     }
        //     if (this.nowChat.length) {
        //       let lastItem = this.nowChat[this.nowChat.length - 1]
        //       let lastTime = lastItem.created_at ? lastItem.created_at : lastItem.msgTimeStamp
        //       msg.is_showtime = timeStamp - lastTime > TIMELAG
        //     } else {
        //       msg.is_showtime = true
        //     }
        //     let list = [...this.nowChat, msg]
        //     this.setNowChat(list)
        //     let addMsg = {
        //       text: '[图片信息]',
        //       time: timeStamp,
        //       msgTimeStamp: timeStamp,
        //       fromAccount: this.id,
        //       sessionId: this.id,
        //       unreadMsgCount: 0,
        //       avatar: this.currentMsg.avatar,
        //       nickName: this.currentMsg.nickName
        //     }
        //     this.addListMsg(addMsg)
        //     this.mortListShow = false
        //     webimHandler.onSendCustomMsg(opt, this.id).then(res => {
        //     }, () => {
        //       this.$refs.toast.show('发送消息不能为空')
        //     })
        //   } else {
        //     this.$refs.toast.show('图片发送失败，请重新发送')
        //   }
        // })
      },
      nextWork(item) {
        let type = item.type * 1
        let url
        switch (type) {
          case 1:
            break
          case 2:
            url = this.$route.fullPath + '/select-goods?type=1'
            this.mortListShow = false
            this.$router.push({path: url})
            break
          case 3:
            url = this.$route.fullPath + '/select-goods?type=2'
            this.mortListShow = false
            this.$router.push({path: url})
            break
        }
      },
      sendMsg() {
        let value = this.inputMsg.trim()
        if (!value) {
          this.$refs.toast.show('发送消息不能为空')
          return
        }
        this.inputMsg = ''
        this.hideInput()
        console.log('todo', value)
        // let timeStamp = parseInt(Date.now() / 1000)
        // let msg = {
        //   from_account_id: this.imInfo.im_account,
        //   avatar: this.userInfo.avatar,
        //   content: value,
        //   time: timeStamp,
        //   msgTimeStamp: timeStamp,
        //   nickName: this.userInfo.nickName,
        //   sessionId: this.userInfo.account,
        //   unreadMsgCount: 0,
        //   type: 1
        // }
        // if (this.nowChat.length) {
        //   let lastItem = this.nowChat[this.nowChat.length - 1]
        //   let lastTime = lastItem.created_at ? lastItem.created_at : lastItem.msgTimeStamp
        //   msg.is_showtime = timeStamp - lastTime > TIMELAG
        // } else {
        //   msg.is_showtime = true
        // }
        // let list = [...this.nowChat, msg]
        // this.setNowChat(list)
        // let addMsg = {
        //   text: value,
        //   time: timeStamp,
        //   msgTimeStamp: timeStamp,
        //   fromAccount: this.id,
        //   sessionId: this.id,
        //   unreadMsgCount: 0,
        //   avatar: this.currentMsg.avatar,
        //   nickName: this.currentMsg.nickName
        // }
        // this.addListMsg(addMsg)
        // this.inputMsg = ''
        // this.hideInput()
        // this.$refs.scroll.forceUpdate()
        // if (this.listDom.clientHeight > this.chatDom.clientHeight) {
        //   let timer = setTimeout(() => {
        //     let startY = this.chatDom.clientHeight - this.listDom.clientHeight - 20
        //     this.$refs.scroll.scrollTo(0, startY, 300, ease[this.scrollToEasing])
        //     clearTimeout(timer)
        //   }, 20)
        // }
        // webimHandler.onSendMsg(value, this.id).then(res => {
        // }, () => {
        //   this.$refs.toast.show('网络异常, 请稍后重试')
        // })
      }
    },
    components: {
      Toast
    },
    watch: {
      inputMsg() {
        this.textHeight()
      }
    },
    filters: {
      timeFormat(val) {
        if (val) {
          let res = utils.radarTimeFormat(val)
          return res.time
        }
        return ''
      }
    },
    computed: {
      ...mapGetters([
        // 'currentMsg',
        // 'imInfo',
        // 'nowChat',
        'ios'
      ]),
      userInfo() {
        return storage.get('info')
      },
      slide() {
        return this.ios ? '' : 'slide'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  @import '~common/stylus/base'
  .chat
    width: 100vw
    height: 100vh
    position: fixed
    left: 0
    top: 0
    background: $color-background
    display: flex
    flex-direction: column
    justify-content: space-between
    z-index: 200
    .chat-container
      position: absolute
      top: 0
      bottom: 50px
      left: 0
      right: 0
      width: 100%
      overflow: hidden
      .group-wrapper
        background: $color-white-fff
        word-break: break-all
        font-family: $font-family-light
        font-size: $font-size-14
        color: $color-20202E
        letter-spacing: 0.3px
        line-height: 1.6
        padding: 15px
    .chat-input
      width: 100%
      box-sizing: border-box
      min-height: 38px
      background: $color-background-f9
      padding: 6px 0
      position: absolute
      left: 0
      right: 0
      bottom: 0
      z-index: 10
      .chat-input-box
        display: flex
        align-items: flex-end
        min-height: 38px
        .face-box
          width: 53px
          display: flex
          align-items: center
          .face-icon
            margin-left: 10px
            width: 28px
            height: 28px
            padding: 5px
        .addimg-box
          width: 53px
          display: flex
          align-items: center
          .addimg-icon
            margin-left: 5px
            width: 28px
            height: 28px
            padding: 5px
        .submit-btn
          width: 43px
          height: 36px
          margin: 0 5px
          border: 1px solid rgba(0, 0, 0, 0.10)
          border-radius: 2px
          background: $color-white
          text-align: center
          line-height: 36px
          font-size: $font-size-medium
          font-family: $font-family-regular
          box-sizing: border-box
        .input-container
          flex: 1
          overflow-x: hidden
          min-height: 28px
          border: 1px solid rgba(0, 0, 0, 0.10)
          background: $color-white
          max-height: 100px
          overflow-y: auto
          padding: 8px 10px 0
          .textarea
            width: 100%
            height: auto
            padding: 0
            margin: 0
            resize: none
            border: 0 none
            outline: none
            overflow-y: visible
            display: block
            font-size: $font-size-medium
      .more-box
        width: 100%
        .emoji-list
          display: flex
          flex-wrap: wrap
          padding: 6.666666vw 8vw 0
          .emoji-item
            width: 6.666666vw
            height: 6.666666vw
            margin-bottom: 6.666666vw
            &:not(:nth-child(7n))
              margin-right: 6.2vw
            .emoji-icon
              width: 6.666666vw
              height: 6.666666vw
        .addimg-list
          height: 140px
          padding: 25px 0 0 30px
          display: flex
          .addimg-item
            width: 48px
            height: 70px
            display: flex
            flex-direction: column
            justify-content: space-between
            font-size: 0
            margin-right: 44px
            position: relative
            .item-icon
              width: 48px
              height: 48px
            .item-txt
              font-size: $font-size-12
              font-family: $font-family-regular
              color: #828AA2
              text-align: center
            .image-file
              position: absolute
              left: 0
              top: 0
              opacity: 0
              width: 100%
              height: 100%
              z-index: 10

</style>
