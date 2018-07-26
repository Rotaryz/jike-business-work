<template>
  <!--<transition :name="slide">-->

    <div class="share-card">
      <!--<img style="height: 100vhwidth: 100vwopacity: 0" :src="card.avatar">-->
      <div class="qrcode_box">
        <img :src="card.avatar">
        <!--<div v-show="card.qrcode === ''" >-->
        <!--< img src="../../assets/imgs/refresh_code.png" alt="" style="width: 1.7remheight: 1.7remmargin-top: 1.3rem">-->
        <!--</div>-->
      </div>
      <p v-show="card.qrcode !== ''">长按查看小程序名片</p>
      <p v-show="card.qrcode === ''">小程序二维码获取失败,点击重新获取</p>
    </div>

    <!--<div class="share-box">-->
    <!--<div class="share-con">-->
    <!--<img class="share-top" :src="card.avatar" alt="">-->
    <!--<div class="share-bottom">-->
    <!--<div class="name-profession">-->
    <!--<div class="name">{{card.name}}</div>-->
    <!--<div class="line" v-if="showPosition"></div>-->
    <!--<div class="name-profession">{{card.position}}</div>-->
    <!--</div>-->
    <!--<div class="buss-name">{{card.department}}</div>-->
    <!--<div class="code-padding"></div>-->
    <!--<div class="code-phone" v-if="showMobile">-->
    <!--<img src="./icon-telephone_ash@2x.png" alt="" class="img-phone">-->
    <!--<div class="text">{{card.business_card_mobile}}</div>-->
    <!--<img :src="card.qrcode" alt="" class="share-code">-->
    <!--</div>-->
    <!--</div>-->
    <!--&lt!&ndash<p class="peo-name">{{card.name}}</p>&ndash&gt-->
    <!--&lt!&ndash<p class="peo-position">{{card.position}}</p>&ndash&gt-->
    <!--&lt!&ndash<p class="buss-name">{{card.department}}</p>&ndash&gt-->
    <!--&lt!&ndash<img class="qr-code" :src="card.qrcode" alt="">&ndash&gt-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
  <!--</transition>-->
</template>

<script>
  // import { ERR_OK } from 'api/config'
  import Scroll from 'components/scroll/scroll'
  import { Business } from 'api'
  import { mapGetters } from 'vuex'

  export default {
    name: 'share-card',
    data () {
      return {
        card: {},
        showPosition: true,
        showMobile: true
      }
    },
    created () {
      Business.Myqrcode().then((res) => {
        this.card = res.data || {}
        if (this.card.position.length === 0) {
          this.showPosition = false
        }
        if (this.card.business_card_mobile.length === 0) {
          this.showMobile = false
        }
      })
    },
    computed: {
      ...mapGetters(['ios']),
      slide () {
        return this.ios ? '' : 'slide'
      }
    },
    components: {
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  .share-card
    height: 100vh
    background: $color-white
    .share-box
      display: flex
      flex-direction: column
      width: 305px
      margin: 0 auto
      padding-top: 20px
    .share-con
      background: $color-white-fff
      border-radius: 2px
      box-shadow: 0 2px 6px 0 rgba(43, 43, 145, 0.04)
      .share-top
        display: block
        width: 305px
        height: 305px
        border: 0px solid #fff
      .share-bottom
        padding: 20px
        position: relative
        .name-profession
          layout(row)
          align-items: flex-end
          .name
            font-family: 'PingFangSC-Semibold'
            font-size: $font-size-18
            color: $color-20202E
          .name-profession
            font-family: $font-family-regular
            font-size: $font-size-medium
            color: $color-text-88
          .line
            height: 16px
            width: 1px
            margin: 0 10px
            background: rgba(0, 0, 0, .1)

        .buss-name
          font-family: $font-family-regular
          font-size: $font-size-medium
          color: $color-20202E
          margin-top: 15px
        .code-padding
          padding-bottom: 147px
          width: 100%
        .code-phone
          layout(row)
          .img-phone
            display: block
            width: 14px
            height: 14px
            margin-right: 5px
          .text
            font-family: $font-family-regular
            font-size: $font-size-medium
            color: $color-text-88

  .qr-code
    width: 70vw

  .qrcode_box
    padding-top: 30px
    text-align: center
    img
      width: 4.3rem
      height: 4.3rem
      margin-top: 0.53rem

  .qrcode_box div
    display: inline-block
    text-align: center

  .qrcode_back_img /* background-image: url("../../assets/imgs/card_background.png")
    background-size: cover */
    background-color: #fff

  .qrcode_box p
    font-size: 0.26rem
    color: #8B8E92
    text-align: center
    margin-top: 0.3rem
    margin-bottom: 0.8rem

  @keyframes rotate
    from
      transform: rotate(0deg)

    to
      transform: rotate(360deg)

  .code_rotate
    animation: rotate 2s infinite

</style>
