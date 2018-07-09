<template>
  <div class="news">
    <div class="news-list">
      <div class="news-item border-bottom-1px" v-for="(item, index) in latelyList" :key="index" @click="chatMsg(item)">
        <div class="news-left">
          <img :src="item.avatar" class="left-img">
          <span class="news-count" v-show="item.unreadMsgCount">{{item.unreadMsgCount}}</span>
        </div>
        <div class="news-right">
          <div class="right-top">
            <span class="top-name">{{item.nickName}}</span>
            <span class="top-time">{{item.msgTimeStamp}}</span>
          </div>
          <div class="right-down">
            {{item.lastMsg}}
          </div>
        </div>
      </div>
      <div class="news-item border-bottom-1px" v-for="(item, index) in [1, 2]" :key="index">
        <div class="news-left">
          <img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJBB7iadHLcSzFWsjVIrdPr0NTNKibn9wJPfDV69Bav3QhNsPUxQKBDibTIqia1qc8UyVhUOgj7WSLj3w/132" class="left-img">
          <span class="news-count" v-show="item.unreadMsgCount">{{item.unreadMsgCount}}</span>
        </div>
        <div class="news-right">
          <div class="right-top">
            <span class="top-name">{{item.nickName}}21321</span>
            <span class="top-time">{{item.msgTimeStamp}}21212331</span>
          </div>
          <div class="right-down">
            {{item.lastMsg}}123
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'News',
    created() {
      this.$emit('tabChange', 2)
    },
    data() {
      return {
      }
    },
    methods: {
      ...mapActions([
        'setCurrent'
      ]),
      chatMsg(item) {
        let currentMsg = {
          nickName: item.nickName,
          avatar: item.avatar
        }
        this.setCurrent(currentMsg)
        this.$router.push('/chat')
      }
    },
    computed: {
      ...mapGetters([
        'latelyList'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'

  .news
    width: 100vw
    height: 100vh
    background: $color-white
    .news-list
      background: $color-white
      padding: 0 15px
      margin-bottom: 45px
      .news-item
        display: flex
        height: 75px
        align-items: center
        .news-left
          width: 45px
          height: 45px
          position: relative
          margin-right: 10px
          .left-img
            width: 100%
            height: 100%
          .news-count
            display: inline-block
            min-width: 7px
            height: 16px
            border-radius: 8px
            background: $color-red
            text-align: center
            line-height: 16px
            font-family: PingFangSC-Semibold
            font-size: $font-size-small-s
            color: $color-white
            position: absolute
            right: -6px
            top: -6px
            padding: 0 4.5px
        .news-right
          flex: 1
          overflow: hidden
          height: 100%
          display: flex
          flex-direction: column
          justify-content: center
          .right-top
            padding-bottom: 6px
            width: 100%
            display: flex
            justify-content: space-between
            align-items: center
            .top-name
              font-family: $font-family-meddle
              font-size: $font-size-medium-x
              letter-spacing: 0.6px
            .top-time
              font-family: $font-family-meddle
              font-size: $font-size-small
              color: $color-text-99
          .right-down
            width: 100%
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
            font-family: $font-family-meddle
            font-size: $font-size-small
            color: $color-text-88

</style>
