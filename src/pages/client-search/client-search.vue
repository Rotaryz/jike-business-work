<template>
  <transition name="slide">
    <article class="client-search">
      <section class="search-box">
        <div class="input-box">
          <img class="icon" src="./icon-search@3x.png" alt="">
          <input class="input" type="text" placeholder="请输客户姓名" v-model="userName">
        </div>
        <div class="cancel-btn" @click="cancelHandler">取消</div>
      </section>
      <ul class="user-list">
        <li class="user-box" v-for="(item,index) in dataArray" :key="index" @click="check(item)">
          <user-card :userInfo="item"></user-card>
          <!--<img class="user-icon" :src="item.icon" alt="">-->
          <!--<article class="user-info">-->
          <!--<section class="base-info">-->
          <!--<div class="name">{{item.name}}</div>-->
          <!--<div class="last-time">{{item.last}}</div>-->
          <!--</section>-->
          <!--<ul class="tags" v-if="item.tags">-->
          <!--<li class="tags-item" v-for="(tag,i) in item.tags" :key="i">{{tag}}</li>-->
          <!--</ul>-->
          <!--</article>-->
        </li>
      </ul>
    </article>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {Client} from 'api'
  import UserCard from 'components/client-user-card/client-user-card'

  export default {
    name: 'ClientSearch',
    data() {
      return {
        userName: '',
        dataArray: [],
        timeStamp: 0
      }
    },
    methods: {
      cancelHandler() {
        this.userName = ''
      },
      check(item) {
        const path = `/client-detail`
        this.$router.push({path, query: {id: item.id}})
      }
    },
    watch: {
      userName(curVal, oldVal) {
        if (curVal && Date.now() - this.timeStamp > 100) {
          const data = {name: curVal}
          Client.getCusomerList(data).then(res => {
            this.dataArray = res.data
            this.timeStamp = Date.now()
            console.log(res)
          })
        }
      }
    },
    components: {
      UserCard
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .client-search
    position: relative
    min-height: 100vh
    background-color: $color-white-fff
    z-index: 10
    .search-box
      height: 45px
      background-color: $color-F0F2F5
      layout(row, block, no-wrap)
      align-items: center
      .input-box
        flex: 1
        background-color: $color-white-fff
        layout(row, block, no-warp)
        height: 36px
        margin-left: 15px
        align-items: center
        .icon
          width: 12.8px
          height: 13.2px
          margin: 0 5px 0 15px
        .input
          flex: 1
          outline: none
          font-family: $font-family-meddle
          font-size: $font-size-14
          color: $color-20202E
          &::-webkit-input-placeholder
            font-family: $font-family-meddle
            font-size: $font-size-14
            color: $color-888888
          &:-moz-placeholder
            font-family: $font-family-meddle
            font-size: $font-size-14
            color: $color-888888
          &::-moz-placeholder
            font-family: $font-family-meddle
            font-size: $font-size-14
            color: $color-888888
          &:-ms-input-placeholder
            font-family: $font-family-meddle
            font-size: $font-size-14
            color: $color-888888
      .cancel-btn
        width: 60px
        height: 100%
        font-family: $font-family-meddle
        font-size: $font-size-14
        color: $color-56BA15
        layout()
        justify-content: center
        align-items: center
    .user-list
      position: relative
      padding-left: 15px
      .user-box
        layout(row, block, no-warp)
        align-items: center
        padding: 15px 0
        border-bottom: 0.5px solid $color-col-line
        height: 45px
        overflow: hidden
        .user-icon
          width: 45px
          height: 45px
          opacity: 0.8
          margin-right: 10px
        .user-info
          flex: 1
          layout()
          justify-content: space-around
          height: 100%
          .base-info
            box-sizing: border-box
            layout(row, block, nowrap)
            justify-content: space-between
            align-items: flex-start
            .name
              font-family: $font-family-regular
              font-size: $font-size-16
              color: $color-20202E
              letter-spacing: 0.6px
            .last-time
              padding-right: 15px
              font-family: $font-family-regular
              font-size: $font-size-12
              color: $color-888888
              no-wrap()
          .tags
            layout(row, block, nowrap)
            .tags-item
              font-family: $font-family-meddle
              font-size: $font-size-14
              color: $color-ccc
              padding: 3px 9px
              margin-right: 5px
              background-color: $color-F0F2F5
              no-wrap()
</style>
