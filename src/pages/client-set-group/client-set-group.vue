<template>
  <article class="client-set-group">
    <div class="title">设置分组</div>
    <section class="content">
      <div v-if="dataArray.length"
           :class="['item',item.is_selecte?'active':'']"
           v-for="(item,index) in dataArray"
           :key="index"
           @click="check(item)">
        {{item.name}}
      </div>
    </section>
  </article>
</template>

<script type="text/ecmascript-6">
  import {Client} from 'api'

  export default {
    name: 'ClientSetGroup',
    data() {
      return {
        dataArray: [],
        customerId: 0
      }
    },
    beforeMount() {
      const customerInfo = this.$route.query.customerInfo
      const data = {customer_id: customerInfo.id}
      this.customerId = customerInfo.id
      Client.getSetGroupList(data).then(res => {
        if (res.data) {
          this.dataArray = res.data
        }
        console.log(this.dataArray)
      })
    },
    beforeDestroy() {
      let arr = []
      this.dataArray.filter(item => {
        item.is_selecte && arr.push({group_id: item.id})
      })
      const data = {
        customer_id: this.customerId,
        data: arr
      }
      Client.setGroup(data).then(res => {
        console.log(res, data)
      })
    },
    methods: {
      check(item) {
        item.is_selecte = !item.is_selecte
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .client-set-group
    position: relative
    min-height: 100vh
    background-color: $color-white-fff
    z-index: 10
    .title
      font-family: $font-family-regular
      font-size: $font-size-16
      color: $color-20202E
      padding: 15px
    .content
      margin: 0 75px 0 19px
      layout(row, block, wrap)
      .item
        padding: 8px 15px 8px 14px
        border: 1px solid $color-ccc
        margin: 0 10px 10px 0
        font-family: $font-family-meddle
        font-size: $font-size-14
        color: $color-888888
        &.active
          font-family: $font-family-regular
          background: $color-56BA15 url("icon-selectgroup@3x.png") no-repeat bottom right / 13px 15px
          color: $color-white-fff
          border-color: $color-56BA15
</style>
