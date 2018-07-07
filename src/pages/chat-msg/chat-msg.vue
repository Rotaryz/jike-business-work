<template>
  <div class="chat">
    <div class="chat-container">
      <div class="chat-item">
        <div class="chat-content">
          <img src="" class="avatar">
          <div class="chat-msg-other"></div>
        </div>
        <div class="chat-content">
          <div class="chat-msg-mine"></div>
          <img src="" class="mine">
        </div>
      </div>
    </div>
    <div class="chat-input"></div>
  </div>
</template>

<script>
  export default {
    name: 'Chat',
    created() {
      document.title = '梅超风'
    },
    data() {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  .chat
    width: 100vw
    height: 100vh

</style>
