<template>
  <div class="client">
    <scroll>
      <search></search>
      <ul class="user-list-box" v-if="userListArr.length">
        <li class="user-list-item"
            v-if="userListArr.length"
            v-for="(item,index) in userListArr"
            :key="index"
            @click="toUserList(item)"
        >
          <div class="users-avatar">
            <img v-if="item.usersAvatar && item.usersAvatar.length"
                 v-for="(user,i) in item.usersAvatar"
                 class="avatar"
                 :key="i"
                 :src="user"
            />
          </div>
          <div class="item-name">{{item.name}}（{{item.number}}）</div>
        </li>
      </ul>
      <section class="user-list-box add-list" @click="toCreateGroup">
        <div class="user-list-item">
          <div class="users-avatar add-list"></div>
          <!--<img class="users-avatar" src="http://lol.91danji.com/UploadFile/20141128/1417165228238101.jpg"/>-->
          <div class="item-name">新建分组</div>
        </div>
      </section>
      <section class="status-bar" @click="checkGroup">
        <div class="left">
          <p>{{checkedGroup.name}}</p>
          <img class="icon" src="./icon-down@3x.png" alt=""/>
        </div>
        <div class="right">全部 53 位</div>
      </section>
      <div class="scroll-list-wrap">
        <!--<scroll ref="scroll"-->
        <!--:data="dataArray">-->
        <!--<ul class="list-content">-->
        <!--<li @click="clickItem(item)" class="list-item" v-for="item in items">{{item}}</li>-->
        <!--</ul>-->
        <ul class="user-list">
          <li class="user-list-item" v-for="(item,index) in dataArray" :key="index" @click="check(item)">
            <slide-view :useType="1" @grouping="groupingHandler">
              <user-card :userInfo="item" slot="content"></user-card>
            </slide-view>
          </li>
        </ul>
        <!--</scroll>-->
      </div>
    </scroll>
    <!--<router-link class="item" to="/client-tag">client-tag</router-link>-->
    <!--<router-link class="item" to="/client-set-group">client-set-g</router-link>-->
    <!--<router-link class="item" to="/client-create-group">client-c-g</router-link>-->
    <!--<router-link class="item" to="/client-add-user">client-add-user</router-link>-->
    <!--<router-link class="item" to="/client-search">client-search</router-link>-->
    <!--<router-link class="item" to="/client-user-list">client-user-list</router-link>-->
    <confirm-msg ref="confirm"></confirm-msg>
    <action-sheet ref="sheet" :dataArray="groupList"></action-sheet>
  </div>
</template>

<script>
  import Search from 'components/client-header-search/client-header-search'
  import SlideView from 'components/slide-view/slide-view'
  import Scroll from 'components/scroll/scroll'
  // import {ease} from 'common/js/ease'
  import UserCard from 'components/client-user-card/client-user-card'
  import ConfirmMsg from 'components/confirm-msg/confirm-msg'
  import {Client} from 'api'
  import ActionSheet from 'components/action-sheet/action-sheet'

  // const userListArr = [{
  //   usersAvatar: new Array(13).fill('http://lol.91danji.com/UploadFile/20141128/1417165228238101.jpg'),
  //   name: '近期可成交',
  //   people: 18
  // }, {
  //   usersAvatar: new Array(13).fill('http://lol.91danji.com/UploadFile/20141128/1417165228238101.jpg'),
  //   name: '5期可成交',
  //   people: 8
  // }]

  let listData = [{
    icon: 'http://lol.91danji.com/UploadFile/20141128/1417165228238101.jpg',
    name: '李木 ',
    status: '今天跟进',
    ai: 'AI预计成交率100%',
    isCheck: false
  }, {
    icon: 'http://lol.91danji.com/UploadFile/20141128/1417165228238101.jpg',
    name: '李木 ',
    status: '今天跟进',
    ai: 'AI预计成交率100%',
    isCheck: false
  }, {
    icon: 'http://lol.91danji.com/UploadFile/20141128/1417165228238101.jpg',
    name: '李木 ',
    status: '今天跟进',
    ai: 'AI预计成交率100%',
    isCheck: false
  }]

  const groupList = [{
    id: 0,
    name: '预计成交率',
    isCheck: true
  }, {
    id: 1,
    name: '最后跟进时间',
    isCheck: false
  }, {
    id: 2,
    name: '最后活跃时间',
    isCheck: false
  }, {
    id: 3,
    name: '最新加入时间',
    isCheck: false
  }]

  export default {
    name: 'Client',
    data() {
      return {
        groupList: groupList,
        userListArr: [],
        dataArray: listData.concat(listData).concat(listData)
      }
    },
    created() {
      this.$emit('tabChange', 3)
    },
    beforeMount() {
      Client.getGroupList().then(res => {
        if (res.data) {
          this.userListArr = res.data
        }
        console.log(res.data, '==')
      })
    },
    methods: {
      toUserList(item) {
        const path = `/client-user-list`
        this.$router.push({path, query: {title: item.name}})
      },
      toCreateGroup() {
        const path = `/client-create-group`
        this.$router.push({path})
      },
      check() {
        this.$refs.confirm.show()
      },
      groupingHandler() {
        const path = `/client-set-group`
        this.$router.push({path})
      },
      checkGroup() {
        this.$refs.sheet.show()
      }
    },
    watch: {
      cancel() {
        console.log(222)
      }
    },
    computed: {
      checkedGroup() {
        let node = this.groupList.find(val => val.isCheck)
        return node
      }
    },
    components: {
      Search,
      Scroll,
      SlideView,
      UserCard,
      ConfirmMsg,
      ActionSheet
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'

  .client
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 45px
    background-color: $color-white-fff
    .user-list-box
      background-color: $color-white-fff
      .user-list-item
        layout(row)
        height: 75px
        align-items: center
        margin-left: 15px
        border-bottom: 0.5px solid $color-col-line
        &.add-list
          border: none
        .users-avatar
          width: 45px
          height: 45px
          background-color: $color-f5f7f9
          margin-right: 10px
          overflow: hidden
          &.add-list
            opacity: 0.8
            background: $color-20202E url("./icon-newconstruction@3x.png") no-repeat center / 20px 20px
          .avatar
            float: left
            width: 15px
            height: 15px
            box-sizing: border-box
            border: 1px solid $color-white-fff

        .item-name
          font-family: $font-family-regular
          font-size: $font-size-16
          color: $color-20202E
          letter-spacing: 0.6px
    .status-bar
      height: 34px
      background-color: $color-F0F2F5
      layout(row)
      justify-content: space-between
      align-items: center
      padding: 0 15px
      .left
        font-family: $font-family-regular
        font-size: $font-size-14
        color: $color-20202E
        layout(row)
        align-items: center
        .icon
          margin-left: 5px
          width: 10px
          height: 5px
      .right
        font-family: $font-family-regular
        font-size: $font-size-12
        color: $color-888888
    .scroll-list-wrap
      position relative
      overflow: hidden

    .user-list
      position: relative
      .user-list-item
        height: 76px
</style>
