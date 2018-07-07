<template>
  <div class="slide-item" @touchstart="touchBegin" @touchend="touchEnd" @touchmove="touchMove">
    <div class="content">
      <div class="main-content">
        <span>123</span>
        <span>456</span>
      </div>
    </div>
    <div class="del-box" :style="styles">
      <div class="del-btn">分组</div>
    </div>
    <div class="del-box" :style="styles">
      <div class="del-btn" @click.capture="del">删除</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['styles', 'index', 'item'],
    data () {
      return {
      }
    },
    methods: {
      touchBegin(e) {
        this.$emit('touchBegin', e, this.index, this.item)
      },
      touchEnd(e) {
        this.$emit('touchEnd', e, this.index, this.item)
      },
      touchMove(e) {
        this.$emit('touchMove', e, this.index, this.item)
      },
      del() {
        this.$emit('del', this.item, this.index)
      }
    },
    computed: {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'

  .slide-item
    width: 100vw
    height: 60px
    background: white
    overflow: hidden
    display: flex
    .content
      flex: 1
      height: 60px
      justify-content: flex-end
      overflow: hidden
      position: relative
      .main-content
        width: 100vw
        height: 60px
        line-height: 60px
        white-space: nowrap
        background: #ccc
        position: absolute
        right: 0
        bottom: 0
        display: flex
        justify-content: space-between
    .del-box
      width: 0
      height: 60px
      background: red
      overflow: hidden
      position: relative
      &:last-child
        background: blue
      .del-btn
        width: 60px
        height: 60px
        line-height: 60px
        font-size: 20px
        color: white
        text-align: center
        position: absolute
        left: 0
        bottom: 0


</style>
