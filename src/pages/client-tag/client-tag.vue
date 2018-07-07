<template>
  <article class="client-tag">
    <div class="box">
      <section class="info-box" v-for="(item,index) in dataArray" :key="index" v-if="dataArray.length">
        <div class="title">{{item.title}}</div>
        <ul class="content" v-for="(dataItem,dataIndex) in item.data" :key="dataIndex">
          <li class="content-item">{{dataItem}}</li>
        </ul>
      </section>
    </div>
  </article>
</template>

<script type="text/ecmascript-6">
  const tagInfo = [{
    title: `基本信息`,
    data: ['男', '女', '已婚']
  }]

  export default {
    name: 'ClientTag',
    data() {
      return {
        dataArray: tagInfo
      }
    },
    methods: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "~common/stylus/mixin"

  .client-tag
    position: relative
    .box
      position: relative
      .info-box
        position: relative
        layout()
        .title
          font-family: $font-family-regular
          font-size: $font-size-16
          color: $color-20202E
        .content
          layout(row, block, wrap)
          .content-item
            width: 30%

</style>
