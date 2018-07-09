<template>
  <div class="mine">
    <Scroll>
      <div class="ba-dark">
        <!--我的-->
      </div>
      <div class="mine-card">
        <div class="mine-card-bg">
          <div class="mind-card-left">
            <p class="buss-name">{{mine.department}}</p>
            <p class="peo-name">{{mine.name}}</p>
            <p class="peo-position">{{mine.position}}</p>
            <p class="peo-phone">{{mine.mobile}}</p>
          </div>
          <div class="mine-card-right">
            <div class="mine-header-box">
              <img class="mine-header" :src="mine.image_url">
            </div>
            <router-link tag="p" to="editCard" class="card">编辑名片</router-link>
          </div>
        </div>
      </div>
      <ul class="content-list">
        <router-link tag="li" :to="item.src" class="content-item" v-for="(item, index) in contentList" :key="index">
          <span class="text">{{item.title}}</span>
          <span class="icon"></span>
        </router-link>
      </ul>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from 'components/scroll/scroll'
  import { Business } from 'api'
  import { ERR_OK } from '../../common/js/config'

  const CONTENTLIST = [{title: '分享名片', src: 'shareCard'}, {title: '我的产品', src: 'goodList'}, {title: '我的动态', src: 'dynamicList'}, {title: '我的报表', src: ''}]

  export default {
    name: 'Mine',
    data () {
      return {
        contentList: CONTENTLIST,
        mine: {}
      }
    },
    created () {
      this.$emit('tabChange', '我的')
      this.getMine()
    },
    methods: {
      getMine () {
        Business.myBusinessCard().then((res) => {
          if (res.error === ERR_OK) {
            this.mine = res.data
            console.log(this.mine)
          }
        })
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
  .mine
    position: fixed
    background: $color-background
    z-index: 10
    left: 0
    right: 0
    bottom: 45px
    top: 0

  .ba-dark
    background-color: $color-text
    text-align: center
    color: $color-white
    width: 100vw
    font-size: $font-size-large
    font-family: $font-family-medium
    height: 105.5px

  .mine-card
    position: relative
    z-index: 100
    background-color: $color-white
    margin: -57px auto 0
    height: 50.67vw
    width: 92vw
    .mine-card-bg
      padding: 0 15px
      display: flex
      box-sizing: border-box
      justify-content: space-between
      background-size: cover
      bg-image('bg-my')
      height: 100%
      width: 100%
      .mine-card-right, .mind-card-left
        height: 100%
      .buss-name
        margin-top: 5.33vw
        font-family: $font-family-medium
        font-size: $font-size-medium
        color: $color-text
      .peo-name
        margin-top: 8.27vw
        font-family: PingFangSC-Semibold
        font-size: $font-size-large-xx
        color: $color-text
      .peo-position
        font-family: $font-family-regular
        font-size: $font-size-small
        color: $color-text-88
        margin-top: 2.67vw
      .peo-phone
        margin-top: 9.33vw
        font-family: $font-family-medium
        font-size: $font-size-medium
        color: $color-text
      .mine-header-box
        height: 60px
        width: 60px
        margin-top: 4vw
        overflow: hidden
        border-1px($color-row-line, 0)
        .mine-header
          width: 100%
      .card
        font-family: $font-family-medium
        font-size: $font-size-medium
        color: #56BA15
        text-decoration: underline
        margin-top: 18.93vw

  .content-list
    background-color: $color-white
    width: 92vw
    margin: 15px auto 0
    padding-left: 15px
    border-1px($color-row-line)
    .content-item
      font-family: $font-family-medium
      font-size: $font-size-medium
      color: $color-text
      height: 45px
      align-items: center
      display: flex
      padding-right: 15px
      box-sizing: border-box
      justify-content: space-between
      border-bottom-1px($color-row-line)
      &:last-child
        border-none()
      .icon
        icon-image('icon-pressed')
        width: 5px
        height: 10px
</style>
