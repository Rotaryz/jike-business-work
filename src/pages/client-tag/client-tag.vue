<template>
  <article class="client-tag">
    <div class="box">
      <section class="info-box" v-for="(item,index) in dataArray" :key="index" v-if="dataArray.length">
        <div class="title">{{item.name}}</div>
        <ul class="content">
          <li class="item-box" v-for="(dataItem,dataIndex) in item.data" :key="dataIndex" v-if="item.data">
            <div :id="dataItem.label_id" :class="['item',dataItem.isCheck?'active':'']" @click.prevent="check">{{dataItem.name}}</div>
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>

<script type="text/ecmascript-6">
  const tagInfo = [{
    name: `基本信息`,
    data: [{label_id: '1', name: '男', isCheck: 0}, {label_id: '2', name: '女', isCheck: 0}, {label_id: '3', name: '已婚', isCheck: 0}, {label_id: '4', name: '00后', isCheck: 0}, {label_id: '5', name: '90后', isCheck: 0}]
  }, {
    name: `关注点`,
    data: [{label_id: '11', name: '男1', isCheck: 0}, {label_id: '12', name: '女1', isCheck: 0}, {label_id: '13', name: '已婚1', isCheck: 0}, {label_id: '14', name: '00后1', isCheck: 0}, {label_id: '15', name: '90后1', isCheck: 0}]
  }]
  export default {
    name: 'ClientTag',
    data() {
      return {
        dataArray: tagInfo
      }
    },
    methods: {
      getData() {
        this.dataArray.map(item => {
          // let node = item.data.find(val => val.label_id === id)
          // node && (node.isCheck = 1)
        })
      },
      check(e) {
        let id = e.target.id
        this.dataArray.map(item => {
          let node = item.data.find(val => val.label_id === id)
          node && (node.isCheck = !node.isCheck)
        })
        console.log(this.dataArray)
      },
      _updateTag() {
        // todo
      }
    },
    computed: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "~common/stylus/mixin"

  .client-tag
    position: relative
    background-color: $color-white-fff
    min-height: 100vh
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
