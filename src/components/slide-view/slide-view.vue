<template>
  <div class="slide-item" @touchstart="touchBegin" @touchend="touchEnd" @touchmove="touchMove">
    <div class="content">
      <div class="main-content" :style="contentStyles">
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
    data() {
      return {
        startX: '',
        endX: '',
        moveStart: '',
        styles: '',
        contentStyles: ''
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
            this.styles = 'width: 160px; transition: all .3s'
            this.show = true
          }
        } else {
          differ = (this.startX - this.endX) / 2
          if (differ <= 30) {
            this.styles = 'width: 0px; transition: all .3s'
            this.show = false
          } else {
            this.styles = 'width: 160px; transition: all .3s'
            this.show = true
          }
        }
      },
      touchMove(e) {
        console.log(e)
        let moveEnd = e.changedTouches[0].clientX
        let moveY = e.changedTouches[0].clientY
        if (moveY >= moveEnd) return
        if (moveEnd === this.moveStart) return
        let differ, width, endWidth, beginWidth
        if (this.show) {
          differ = (moveEnd - this.moveStart) * 2
          width = 160 - differ
          endWidth = 0
          beginWidth = 160
        } else {
          differ = (this.moveStart - moveEnd) / 2
          width = differ
          endWidth = 160
          beginWidth = 0
        }
        if (differ < 0) {
          this.styles = `width: ${beginWidth}px`
          this.moveStart = moveEnd
        } else if (differ > 160) {
          this.styles = `width: ${endWidth}px`
          this.contentStyles = `transform :translate3d(${-endWidth}px,0,0)`
        } else {
          this.styles = `width: ${width}px`
          this.contentStyles = `transform :translate3d(${-width}px,0,0)`
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
  @import '~common/stylus/mixin'

  .slide-item
    width: 100%
    height: 100%
    background: white
    overflow: hidden
    display: flex
    .content
      width: 100%
      height: 100%
      justify-content: flex-end
      overflow: hidden
      position: relative
      .main-content
        width: 100%
        height: 100%
        white-space: nowrap
        position: absolute
        left: 0
        top: 0
        right: 0
        bottom: 0
        display: flex
        justify-content: space-between
        transform: translate3d(0, 0, 0)
    .del-box
      width: 0px
      height: 100%
      background: red
      overflow: hidden
      position: relative
      layout(row)
      &:last-child
        background: blue
      .del-btn
        flex: 1
        height: 100%
        font-size: 14px
        color: white
        layout()
        justify-content: center
        align-items: center


</style>
