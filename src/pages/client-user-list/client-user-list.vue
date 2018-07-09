<template>
  <transition name="slide">
    <article class="client-user-list">
      <search></search>
      <section class="add-user" @click="toAddUser">
        <img class="icon" src="./icon-add@3x.png" alt="">
        <div class="txt">添加成员</div>
      </section>
      <section class="total">共 {{dataArray.length}} 位</section>
      <transition name="slide">
        <div class="simple-scroll-demo">
          <div class="scroll-list-wrap">
            <scroll ref="scroll"
                    :data="dataArray"
                    :pullDownRefresh="pullDownRefreshObj"
                    :pullUpLoad="pullUpLoadObj"
                    :startY="parseInt(startY)"
                    @pullingDown="onPullingDown"
                    @pullingUp="onPullingUp"
                    @scroll="scroll">
              <!--<ul class="list-content">-->
              <!--<li @click="clickItem(item)" class="list-item" v-for="item in items">{{item}}</li>-->
              <!--</ul>-->
              <ul class="user-list">
                <li class="user-list-item" v-for="(item,index) in dataArray" :key="index" @click="check(item)">
                  <slide-view>
                    <user-card :userInfo="item" slot="content"></user-card>
                  </slide-view>
                </li>
              </ul>
            </scroll>
          </div>
        </div>
      </transition>
    </article>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Search from 'components/client-header-search/client-header-search'
  import SlideView from 'components/slide-view/slide-view'
  import Scroll from 'components/scroll/scroll'
  import {ease} from 'common/js/ease'
  import UserCard from 'components/client-user-card/client-user-card'
  import {Client} from 'api'

  // const listData = [{
  //   icon: 'http://lol.91danji.com/UploadFile/20141128/1417165228238101.jpg',
  //   name: '李木 ',
  //   status: '今天跟进',
  //   ai: 'AI预计成交率100%',
  //   isCheck: false
  // }, {
  //   icon: 'http://lol.91danji.com/UploadFile/20141128/1417165228238101.jpg',
  //   name: '李木 ',
  //   status: '今天跟进',
  //   ai: 'AI预计成交率100%',
  //   isCheck: false
  // }, {
  //   icon: 'http://lol.91danji.com/UploadFile/20141128/1417165228238101.jpg',
  //   name: '李木 ',
  //   status: '今天跟进',
  //   ai: 'AI预计成交率100%',
  //   isCheck: false
  // }]
  export default {
    name: '',
    data() {
      return {
        dataArray: [],
        currentGroupInfo: null,
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
      const groupInfo = this.$route.query.groupInfo
      document.title = groupInfo.name
      this.currentGroupInfo = groupInfo
      const data = {
        get_group_detail: groupInfo.id,
        group_id: 1
      }
      Client.getCusomerList(data).then(res => {
        if (res.data) {
          this.dataArray = res.data
        }
        console.log(res)
      })
    },
    mounted() {
    },
    methods: {
      toAddUser() {
        const path = `/client-add-user`
        this.$router.push({path, query: {groupInfo: this.currentGroupInfo}})
      },
      check(obj) {
        // todo
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
      UserCard
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
    min-height: 100vh
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
