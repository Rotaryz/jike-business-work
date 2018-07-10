<template>
  <transition name="slide">
    <article class="client-user-list">
      <search @toNav="toSearch"></search>
      <section class="add-user" @click="toAddUser">
        <img class="icon" src="./icon-add@3x.png" alt="">
        <div class="txt">添加成员</div>
      </section>
      <section class="total">共 {{dataArray.length}} 位</section>
      <div class="simple-scroll-demo">
        <div class="scroll-list-wrap">
          <scroll ref="scroll"
                  bcColor="#fff"
                  :data="dataArray"
                  :pullDownRefresh="pullDownRefreshObj"
                  :pullUpLoad="pullUpLoadObj"
                  :startY="parseInt(startY)"
                  @pullingDown="onPullingDown"
                  @pullingUp="onPullingUp"
                  @scroll="scroll">
            <ul class="user-list">
              <li class="user-list-item" v-for="(item,index) in dataArray" :key="index" @click="check(item)">
                <slide-view @grouping="groupingHandler" :item="item" @del="delHandler">
                  <user-card :userInfo="item" slot="content"></user-card>
                </slide-view>
              </li>
            </ul>
          </scroll>
        </div>
      </div>
      <confirm-msg ref="confirm" @confirm="msgConfirm" @cancel="msgCancel"></confirm-msg>
      <router-view @refresh="refresh"></router-view>
    </article>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Search from 'components/client-header-search/client-header-search'
  import SlideView from 'components/slide-view/slide-view'
  import Scroll from 'components/scroll/scroll'
  import {ease} from 'common/js/ease'
  import UserCard from 'components/client-user-card/client-user-card'
  import ConfirmMsg from 'components/confirm-msg/confirm-msg'
  import {Client} from 'api'

  export default {
    name: 'ClientUserList',
    data() {
      return {
        dataArray: [],
        currentGroupInfo: null,
        checkedItem: null,
        scrollbar: true,
        scrollbarFade: true,
        pullDownRefresh: true,
        pullDownRefreshThreshold: 90,
        pullDownRefreshStop: 40,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: '加载更多',
        pullUpLoadNoMoreTxt: '没有更多了',
        startY: 0,
        scrollToX: 0,
        scrollToY: -200,
        scrollToTime: 700,
        scrollToEasing: 'bounce',
        scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce'],
        items: [],
        itemIndex: 0
      }
    },
    created() {
      for (let i = 0; i < 20; i++) {
        this.items.push(i)
      }
    },
    beforeMount() {
      this.getTitle()
      this.getCusonerList()
    },
    beforeDestroy() {
      this.$emit('refresh')
    },
    mounted() {
    },
    methods: {
      refresh() {
        document.title = this.currentGroupInfo.name
        this.getCusonerList()
      },
      toSearch() {
        const path = `/client/client-user-list/client-search`
        this.$router.push({path})
      },
      getTitle() {
        const groupInfo = this.$route.query.groupInfo
        document.title = groupInfo.name
        groupInfo && (this.currentGroupInfo = groupInfo)
      },
      getCusonerList() {
        const data = {
          get_group_detail: 1,
          group_id: this.currentGroupInfo.id
        }
        Client.getCusomerList(data).then(res => {
          if (res.data) {
            this.dataArray = res.data
          }
        })
      },
      toAddUser() {
        const path = `/client/client-user-list/client-add-user`
        this.$router.push({path, query: {groupInfo: this.currentGroupInfo}})
      },
      check(item) {
        const path = `/client/client-user-list/client-detail`
        this.$router.push({path, query: {id: item.id}})
      },
      groupingHandler(index, item) {
        const path = `/client/client-user-list/client-set-group`
        this.$router.push({path, query: {customerInfo: item}})
      },
      delHandler(index, item) {
        this.checkedItem = item
        this.$refs.confirm.show()
      },
      msgConfirm() {
        const data = {
          group_id: this.currentGroupInfo.id,
          customer_id: this.checkedItem.id
        }
        Client.delCustomer(data).then(res => {
          const idx = this.dataArray.findIndex(val => val.id === this.checkedItem.id)
          this.dataArray.splice(idx, 1)
          console.log(res)
        })
      },
      msgCancel() {
        this.checkedItem = null
      },
      scroll(e) {
        console.log(e)
      },
      clickItem(item) {
        console.log(item)
      },
      scrollTo() {
        this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime, ease[this.scrollToEasing])
      },
      onPullingDown() {
        // 模拟更新数据
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // 如果有新数据
            this.items.unshift(1)
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 2000)
      },
      onPullingUp() {
        // 更新数据
        console.log('pulling up and load data')
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // 如果有新数据
            let newPage = []
            for (let i = 0; i < 10; i++) {
              newPage.push(i)
            }
            this.items = this.items.concat(newPage)
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 1500)
      },
      rebuildScroll() {
        this.nextTick(() => {
          this.$refs.scroll.destroy()
          this.$refs.scroll.initScroll()
        })
      }
    },
    watch: {
      scrollbarObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      pullDownRefreshObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      pullUpLoadObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      startY() {
        this.rebuildScroll()
      }
    },
    computed: {
      scrollbarObj: function () {
        return this.scrollbar ? {fade: this.scrollbarFade} : false
      },
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop)
        } : false
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
      }
    },
    components: {
      Search,
      Scroll,
      SlideView,
      UserCard,
      ConfirmMsg
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .client-user-list
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 10
    background-color: $color-white-fff
    layout()
    .add-user
      height: 49px
      layout(row)
      align-items: center
      .icon
        width: 22.5px
        height: 19px
        margin: 0 8px 0 15px
      .txt
        font-family: $font-family-regular
        font-size: $font-size-16
        color: $color-20202E
        letter-spacing: 0.6px
    .total
      height: 29px
      background-color: $color-F0F2F5
      line-height: 29px
      text-indent: 15px
      font-family: $font-family-regular
      font-size: $font-size-12
      color: $color-888888

  .simple-scroll-demo
    position: fixed
    left: 0
    top: 123px
    right: 0
    bottom: 0
    z-index: 10
    .scroll-list-wrap
      position relative
      height: 100%
      border: 1px solid rgba(0, 0, 0, .1)
      border-radius: 4px
      transform: rotate(0deg)
      overflow: hidden

  .user-list
    position: relative
    .user-list-item
      height: 76px
</style>
