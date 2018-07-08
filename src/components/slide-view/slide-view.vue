<template>
  <div class="slide-item" @touchstart="touchBegin" @touchend="touchEnd" @touchmove="touchMove">
    <div class="content">
      <div class="main-content">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="del-box" :style="styles">
      <div class="del-btn" @click.stop="grouping">分组</div>
    </div>
    <div class="del-box" :style="styles">
      <div class="del-btn" @click.stop="del">删除</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['index', 'showIdx'],
    data () {
      return {
        startX: '',
        endX: '',
        moveStart: '',
        styles: ''
      }
    },
    methods: {
      touchBegin(e) {
        if (this.showIdx !== this.index) {
          this.$emit('touchBegin', this.index)
        }
        this.startX = e.touches[0].clientX
        this.moveStart = this.startX
      },
      touchEnd(e) {
        this.endX = e.changedTouches[0].clientX
        if (this.endX === this.startX) return
        let differ
        if (this.show) {
          differ = this.endX - this.startX
          if (differ > 0) {
            this.styles = 'width: 0px; transition: all .3s'
            this.show = false
          } else {
            this.styles = 'width: 60px; transition: all .3s'
            this.show = true
          }
        } else {
          differ = (this.startX - this.endX) / 2
          if (differ <= 30) {
            this.styles = 'width: 0px; transition: all .3s'
            this.show = false
          } else {
            this.styles = 'width: 60px; transition: all .3s'
            this.show = true
          }
        }
      },
      touchMove(e) {
        let moveEnd = e.changedTouches[0].clientX
        if (moveEnd === this.moveStart) return
        let differ, width, endWidth, beginWidth
        if (this.show) {
          differ = (moveEnd - this.moveStart) * 2
          width = 60 - differ
          endWidth = 0
          beginWidth = 60
        } else {
          differ = (this.moveStart - moveEnd) / 2
          width = differ
          endWidth = 60
          beginWidth = 0
        }
        if (differ < 0) {
          this.styles = `width: ${beginWidth}px`
          this.moveStart = moveEnd
        } else if (differ > 60) {
          this.styles = `width: ${endWidth}px`
        } else {
          this.styles = `width: ${width}px`
        }
      },
      del() {
        this.$emit('del', this.index)
      },
      grouping() {
        this.$emit('grouping', this.index)
      },
      _itemInit() {
        this.styles = 'width: 0px; transition: all .3s'
        this.show = false
      }
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
