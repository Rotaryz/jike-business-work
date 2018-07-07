<template>
  <article class="client-set-group">
    <div class="title">设置分组</div>
    <section class="content">
      <div v-if="dataArray.length"
           :class="['item',item.isCheck?'active':'']"
           v-for="(item,index) in dataArray"
           :key="index"
           @click="check(index)">
        {{item.name}}
      </div>
    </section>
  </article>
</template>

<script type="text/ecmascript-6">
  const listData = [
    {name: '近期成交', isCheck: false},
    {name: '5月成交', isCheck: false},
    {name: '6月成交', isCheck: false},
    {name: '7月成交', isCheck: false}
  ]
  export default {
    name: 'ClientSetGroup',
    data() {
      return {
        dataArray: listData,
        preId: -1
      }
    },
    methods: {
      check(index) {
        this.dataArray[index].isCheck = !this.dataArray[index].isCheck
        if (this.preId > -1 && this.preId !== index) {
          this.dataArray[this.preId].isCheck = false
        }
        this.preId = index
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "~common/stylus/mixin"

  .client-set-group
    min-height: 100vh
    background-color: $color-white-fff
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
          background: $color-56BA15 url("./icon-selectgroup@3x.png") no-repeat bottom right / 13px 15px
          color: $color-white-fff
          border-color: $color-56BA15
</style>
