<template>
  <transition name="slide">
    <article class="client-tag">
      <scroll>
        <div class="box">
          <section class="info-box" v-for="(item,index) in dataArray" :key="index" v-if="dataArray.length">
            <div class="title">{{item.name}}</div>
            <ul class="content">
              <li class="item-box" v-for="(dataItem,dataIndex) in item.data" :key="dataIndex" v-if="item.data">
                <div :class="['item',dataItem.isCheck?'active':'']"
                     @click="check(dataItem)"
                >
                  {{dataItem.name}}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </scroll>
    </article>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {Client} from 'api'
  import Scroll from 'components/scroll/scroll'

  // const tagInfo = [{
  //   name: `基本信息`,
  //   data: [{label_id: '1', name: '男', isCheck: 0}, {label_id: '2', name: '女', isCheck: 0}, {label_id: '3', name: '已婚', isCheck: 0}, {label_id: '4', name: '00后', isCheck: 0}, {label_id: '5', name: '90后', isCheck: 0}]
  // }, {
  //   name: `关注点`,
  //   data: [{label_id: '11', name: '男1', isCheck: 0}, {label_id: '12', name: '女1', isCheck: 0}, {label_id: '13', name: '已婚1', isCheck: 0}, {label_id: '14', name: '00后1', isCheck: 0}, {label_id: '15', name: '90后1', isCheck: 0}]
  // }]
  export default {
    name: 'ClientTag',
    data() {
      return {
        dataArray: [],
        currentId: 0
      }
    },
    created() {
      // todo
      this.currentId = this.$route.query.customerId
      Client.getTagList().then(res => {
        if (res.data) {
          let dataArray = res.data
          // 获取员工标签列表
          Client.getCusomerTagList({customer_id: this.currentId}).then(tags => {
            console.log(tags)
            this.dataArray = dataArray.map((item)=> {
              item.data.forEach(it => {
                it.isCheck = false
              })
              return item
            })
          })
        }
      })
    },
    beforeDestroy() {
      let arr = []
      this.dataArray.map(item => {
        item.data.forEach(val => {
          val.isCheck && arr.push({
            label_id: val.label_id,
            name: val.name
          })
        })
      })
      console.log(arr)
      const data = {
        data: arr,
        customer_id: this.currentId
      }
      Client.updateTag(data).then(res => {
        console.log(res)
      })
    },
    methods: {
      check(it) {
        this.dataArray.map(item => {
          let node = item.data.find(val => val.label_id === it.label_id)
          node && (node.isCheck = !node.isCheck)
        })
      },
      _updateTag() {
        // todo
      }
    },
    computed: {},
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .client-tag
    fill-box()
    background-color: $color-white-fff
    z-index: 10
    .box
      position: relative
      .info-box
        position: relative
        layout()
        .title
          font-family: $font-family-regular
          font-size: $font-size-16
          color: $color-20202E
          margin: 15px 0 15px 15px
        .content
          layout(row, block, wrap)
          justify-content: flex-start
          .item-box
            width: 33.33%
            height: 30px
            box-sizing: border-box
            padding: 0 15px
            margin-bottom: 15px
            .item
              width: 100%
              height: 100%
              no-wrap()
              box-sizing: border-box
              padding: 5px
              layout()
              justify-content: center
              align-items: center
              background-color: $color-F0F2F5
              font-family: $font-family-meddle
              font-size: $font-size-14
              color: $color-888888
              margin-bottom: 15px
              border: 0.5px solid $color-E7E9EC
              &.active
                background-color: $color-56BA15-02
                color: $color-56BA15
                border-color: $color-56BA15-02

</style>
