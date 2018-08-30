<template>
  <div class="new-group-msg">
    <scroll :data="list"
            :bcColor="'#f1f2f5'"
            ref="scroll"
            :pullUpLoad="pullUpLoadObj"
            :showNoMore="showNoMore"
            @pullingUp="onPullingUp">
      <div class="news-list">
        <div class="news-item" v-for="(item, index) in list" :key="index">
          <div class="item-time">
            <span class="time-box">{{item.created_at ? item.created_at : item.msgTimeStamp | timeFormat}}</span>
          </div>
          <div class="item-content">
            <div class="item-top border-bottom-1px">
              <div class="item-title">群发组：<text v-for="(item, index) in item.groups">{{item.name}}</text></div>
              <div class="item-text" v-html="item.html" v-if="item.type == 1"></div>
              <img class="item-img" @load="refushBox" v-if="item.type == 20" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535544923614&di=6423e2c5a4addd2dd1959dd1f5551423&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fbizhi%2Fiphone4%2F2011%2F0830%2F20110830054327194_3g.jpg"/>
            </div>
            <div class="item-down" @click="toChat(item.id)">再发一条</div>
          </div>
        </div>
      </div>
    </scroll>
    <div class="new-btn">新建群发</div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import Scroll from 'components/scroll/scroll'
  import { Im } from 'api'
  import {ERR_OK} from '../../common/js/config'
  import utils from 'common/js/utils'
  export default {
    name: 'NewGroupMsg',
    created() {
      console.log(ERR_OK)
      Im.getGroupMsgList({page: 1, limit: 30}).then(res => {
        if (res.error === ERR_OK) {
          this.list = res.data.map((item) => {
            if (item.type * 1 === 1) {
              item.html = utils.msgFaceToHtml(item.content)
            }
            return item
          })
          setTimeout(() => {
            this.$refs.scroll.forceUpdate()
          }, 20)
        }
      })
    },
    mounted() {
      setTimeout(() => {
        this.$refs.scroll.refresh()
      }, 20)
    },
    data() {
      return {
        list: [],
        page: 1,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: '加载更多',
        pullUpLoadNoMoreTxt: '没有更多了',
        pullDownRefresh: true,
        pullDownRefreshThreshold: 90,
        pullDownRefreshStop: 40,
        scrollToEasing: 'bounce',
        scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce'],
        showNoMore: false
      }
    },
    methods: {
      ...mapActions([
        'setCurrent',
        'setGroupItem'
      ]),
      chatMsg(item) {
        let currentMsg = {
          nickName: item.nickName,
          avatar: item.avatar,
          account: item.sessionId
        }
        this.setCurrent(currentMsg)
        let url = '/chat?id=' + item.sessionId
        this.$router.push(url)
      },
      onPullingUp() {
        if (this.showNoMore) return
        console.log(99999)
      },
      rebuildScroll() {
        this.nextTick(() => {
          this.$refs.scroll.destroy()
          this.$refs.scroll.initScroll()
        })
      },
      refushBox() {
        setTimeout(() => {
          this.$refs.scroll.refresh()
        }, 20)
      }
    },
    computed: {
      ...mapGetters([
        'groupItem'
      ]),
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
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
    watch: {
      pullUpLoadObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      }
    },
    components: {
      Scroll
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'

  .new-group-msg
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    z-index: 50
    background: $color-background
    .news-list
      padding: 0 15px 75px
      .news-item
        padding-top: 25px
        .item-time
          padding-bottom: 15px
          text-align: center
          .time-box
            display: inline-block
            padding: 4px 8px
            background: #D6D6D9
            border-radius: 2px
            font-family: $font-family-regular
            font-size: $font-size-12
            color: $color-white
            line-height: 14px
        .item-content
          background: $color-white
          border: 1px solid rgba(32,32,46,0.10)
          box-shadow: 0 4px 12px 0 rgba(43,43,145,0.07)
          border-radius: 2px
          .item-top
            padding: 12px 15px 15px
            font-size: 0
            .item-title
              white-space:normal
              word-break:break-all
              font-family: $font-family-regular
              font-size: $font-size-16
              color: $color-text
              line-height: 24px
            .item-text
              padding-top: 12px
              line-height: 21px
              font-family: $font-family-light
              font-size: $font-size-14
              color: $color-888888
            .item-img
              padding-top: 12px
              width: 100%
          .item-down
            width: 100%
            height: 40px
            line-height: 40px
            text-align: center
            font-family: $font-family-regular
            font-size: $font-size-14
            color: #56BA15


  .new-btn
    position: fixed
    left: 0
    bottom: 0
    right: 0
    height: 45px
    z-index: 55
    background: $color-text
    color: $color-white
    text-align: center
    line-height: 45px
    font-family: $font-family-medium
    font-size: $font-size-16
    letter-spacing: 0.3px

</style>
