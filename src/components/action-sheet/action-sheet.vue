<template>
  <transition name="fade">
    <article class="action-sheet" v-if="isShow" @click="hidden">
      <div class="mask"></div>
      <transition name="slide">
        <section class="sheet-box" v-if="isShow" @click.stop>
          <ul class="content-box">
            <li class="content-item"
                :key="index"
                v-for="(item,index) in dataArray"
                v-if="dataArray.length"
                @click="change(index)"
            >
              <div class="item-box">
                <div class="left">{{item.name}}</div>
                <div class="right" v-if="item.isCheck"></div>
              </div>
            </li>
          </ul>
          <div class="place-holder"></div>
          <div class="btn" @click="hidden">取消</div>
        </section>
      </transition>
    </article>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      dataArray: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    beforeMount() {
    },
    methods: {
      show() {
        this.isShow = true
      },
      hidden() {
        this.isShow = false
      },
      change(index) {
        this.dataArray.map((item) => {
          item.isCheck = false
        })
        this.dataArray[index].isCheck = true
        this.isShow = false
        this.$emit('changeGroup')
      }
    },
    computed: {
      isCheckId() {
        this.preId = this.dataArray.some((item, index) => {
          return item.isCheck ? index : -1
        })
        console.log(this.preId)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .action-sheet
    fill-box()
    z-index: 100
    .mask
      fill-box()
      background-color: $color-20202E
      opacity: 0.8
    .sheet-box
      position: absolute
      bottom: 0
      left: 0
      right: 0
      background-color: $color-white-fff
      layout()
      .content-box
        flex: 1
        .content-item
          height: 45px
          border-bottom: 0.5px solid $color-col-line
          &:last-child
            border: none
          .item-box
            height: 100%
            layout(row)
            align-items: center
            justify-content: space-between
            padding: 0 15px
            .left
              font-family: $font-family-regular
              font-size: $font-size-14
              color: $color-20202E
            .right
              width: 20px
              height: 20px
              border-radius: 50%
              background: url("./icon-selected@3x.png") no-repeat center / 100%
      .place-holder
        height: 10px
        background-color: $color-F0F2F5
      .btn
        height: 45px
        line-height: 45px
        text-align: center
</style>
