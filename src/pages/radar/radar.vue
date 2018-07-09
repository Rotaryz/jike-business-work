<template>
  <div class="radar">
    <router-link to="/scroll-demo">测试动画</router-link>
    <textarea  class="input-item textarea-item" placeholder="请输入详细地址"  rows="1"  ref="address" v-model="address_detail"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'Radar',
    data() {
      return {
        address_detail: ''
      }
    },
    created() {
      this.$emit('tabChange', '雷达')
    },
    methods: {
      getHeight () {
        const el = this.$refs.address
        this.timer = setTimeout(() => {
          el.style.height = 'auto'
          el.style.height = (el.scrollHeight) + 'px'
        }, 20)
      }
    },
    watch: {
      address_detail(newVal) {
        this.getHeight()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  .radar
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 45px
    .input-item
      display: block
      width: 200px
      border: 1px solid #eee
</style>
