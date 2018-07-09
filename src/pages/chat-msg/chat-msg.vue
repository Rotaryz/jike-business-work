<template>
  <transition name="slide">
    <div class="chat">
      <div class="chat-container" ref="chat">
        <scroll ref="scroll"
                :data="list"
                :pullDownRefresh="pullDownRefreshObj"
                :startY="parseInt(startY)"
                @pullingDown="onPullingDown">
          <div class="chat-list" ref="list">
            <div class="chat-item" v-for="item in list" :key="item">
              <div class="chat-content">
                <img :src="currentMsg.avatar" class="avatar">
                <div class="chat-msg-box other" v-if="false">
                  <div class="arrow-box">
                    <div class="gray-arrow">
                      <div class="white-arrow"></div>
                    </div>
                  </div>
                  <div class="chat-msg-content other">盾根深蒂固当时给的当时给的时代光华好久好久打个盾根深蒂固当时给的当时给的时代光华好久好久打个盾根深蒂固当时给的当时给的时代光华</div>
                </div>
                <div class="chat-msg-goods">
                  <img src="https://picsum.photos/800/800/?image=888" class="goods-img">
                  <p class="goods-title">几号放假放大镜几号放假放大镜几号放假放大镜</p>
                </div>
              </div>
              <div class="chat-content mine">
                <div class="chat-msg-box mine">
                  <div class="chat-msg-content mine">jhdjfkdfhdjfjdjhfdjhfjdshfjksdhfjhdfjkhdfjhdfjdhfjkdhjfdhjfkhdjkfhdfjhdfhdhjfhdjhf</div>
                  <div class="arrow-box">
                    <div class="green-arrow"></div>
                  </div>
                </div>
                <img src="" class="avatar">
              </div>
            </div>
          </div>
        </scroll>
      </div>
      <div class="chat-input border-top-1px">
        <div class="input-container" ref="textBox">
          <textarea class="textarea" type="text" ref="inputTxt" v-model="inputMsg" rows="1"></textarea>
        </div>
        <div class="submit-btn">发送</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Scroll from 'components/scroll/scroll'
  import {ease} from 'common/js/ease'
  import {mapGetters} from 'vuex'
  export default {
    name: 'Chat',
    created() {
    },
    mounted() {
      this.textareaDom = this.$refs.inputTxt
      this.textBoxDom = this.$refs.textBox
      this.chatDom = this.$refs.chat
      this.listDom = this.$refs.list
      this.startY = this.chatDom.clientHeight - this.listDom.clientHeight - 30
      document.title = this.currentMsg.nickName
    },
    methods: {
      textHeight() {
        let timer = setTimeout(() => {
          this.textareaDom.style.height = 'auto'
          this.textareaDom.style.height = this.textareaDom.scrollHeight + 'px'
          this.textBoxDom.scrollTop = this.textareaDom.scrollHeight
          clearTimeout(timer)
        }, 20)
      },
      onPullingDown() {
        let heightBegin = this.listDom.clientHeight
        let timer1 = setTimeout(() => {
          this.list = [8, ...this.list]
          this.$refs.scroll.forceUpdate()
          let timer2 = setTimeout(() => {
            let heightEnd = this.listDom.clientHeight
            this.$refs.scroll.scrollTo(0, heightBegin - heightEnd, 10, ease[this.scrollToEasing])
            clearTimeout(timer2)
          }, 20)
          clearTimeout(timer1)
        }, 1000)
      },
      rebuildScroll() {
        this.nextTick(() => {
          this.$refs.scroll.destroy()
          this.$refs.scroll.initScroll()
        })
      }
    },
    data() {
      return {
        textareaDom: '',
        heightBoxDom: '',
        txtHeight: '36px',
        inputMsg: '',
        list: [1, 2, 3, 4],
        pullDownRefresh: true,
        pullDownRefreshThreshold: 10,
        pullDownRefreshStop: 20,
        startY: '',
        scrollToEasing: 'bounce',
        scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce']
      }
    },
    components: {
      Scroll
    },
    watch: {
      inputMsg() {
        this.textHeight()
      },
      pullDownRefreshObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      }
    },
    computed: {
      ...mapGetters([
        'currentMsg'
      ]),
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop),
          txt: ' '
        } : false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
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
    z-index: 10
    .chat-container
      flex: 1
      overflow-y: auto
      position: relative
      .chat-item
        padding: 0 15px
        margin-top: 15px
        .chat-content
          display: flex
          .avatar
            width: 45px
            height: 45px
          .chat-msg-box
            flex: 1
            overflow: hidden
            display: flex
            .chat-msg-content
              flex: 1
              overflow: hidden
              padding: 13px 15px
              border-radius: 8px
              line-height: 19px
              font-size: $font-size-medium
              font-family: $font-family-meddle
              word-wrap: break-word
              word-break: break-all
            .chat-msg-content.other
              background: $color-white
              border: 0.5px solid #D6DCE0
            .chat-msg-content.mine
              background: $color-green
          .other.chat-msg-box
            margin-right: 50px
            .arrow-box
              width: 10px
              height: 45px
              position: relative
              .gray-arrow
                width:0
                height:0
                border-width: 5px 6px 5px 0
                border-style: solid
                border-color: transparent #D6DCE0 transparent transparent/*透明 灰 透明 透明 */
                position: absolute
                right: 0
                top: 17.5px
                .white-arrow
                  width:0
                  height:0
                  border-width: 5px 6px 5px 0
                  border-style: solid
                  border-color: transparent #FFF transparent transparent/*透明 灰 透明 透明 */
                  position: absolute
                  left: 1px
                  top: -5px
          .mine.chat-msg-box
            margin-left: 50px
            justify-content: flex-end
            .arrow-box
              width: 10px
              height: 45px
              position: relative
              .green-arrow
                width:0
                height:0
                border-width: 5px 0 5px 6px
                border-style: solid
                border-color: transparent transparent transparent $color-green/*透明 灰 透明 透明 */
                position: absolute
                left: 0
                top: 17.5px
          .chat-msg-goods
            width: 200px
            height: 150px
            border: 0.5px solid rgba(0,0,0,0.10)
            border-radius: 8px
            background: $color-white
            margin-left: 6px
            overflow: hidden
            font-size: 0
            .goods-img
              width: 100%
              height: 120px
            .goods-title
              line-height: 30px
              font-size: $font-size-small
              font-family: $font-family-regular
              padding: 0 10px
              overflow: hidden
              text-overflow: ellipsis
              white-space: nowrap
        .chat-content.mine
          justify-content: flex-end

    .chat-input
      min-height: 38px
      background: $color-background-f9
      padding: 6px 15px
      display: flex
      align-items: flex-end
      .submit-btn
        width: 50px
        height: 36px
        border: 1px solid rgba(0,0,0,0.10)
        border-radius: 2px
        background: $color-white
        text-align: center
        line-height: 36px
        font-size: $font-size-medium
        font-family: $font-family-meddle
        margin-left: 5px
      .input-container
        flex: 1
        min-height: 28px
        border: 1px solid rgba(0,0,0,0.10)
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



</style>
