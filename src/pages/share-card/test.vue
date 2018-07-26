<template>
  <div class="qrcode-wrapper" ref="qrcode_wrapper">
    <div style="border: 1px solid transparent">
      <div class="qrcode_container">

        <div class="qrcode_back_img">
          <h3 v-if="cardInfo.company_profile != card_info.company_name" class="company_profile">{{cardInfo.company_profile}}</h3>
          <h3 class="company_name">{{card_info.company_name}}</h3>
          <span id="qrcode_headimg">
          <img
            :src=card_info.card_logo
            @click="scale_img(card_info.card_logo)"
            onerror="this.onerror=null;this.src='https://resource.aijiatui.com/ai-img/img/defaultlogo.png'" alt="">
        </span>
          <p id="qrcode_name">{{card_info.card_name}}</p>
          <p class="qrcode_role">{{card_info.role_name}}</p>
          <p v-if="card_info.card_show_tel" class="qrcode_phone">电话: {{card_info.card_show_tel}}</p>
          <p v-else class="qrcode_phone">电话: {{card_info.card_tel}}</p>
          <p class="qrcode_email">邮箱: {{card_info.email}}</p>
        </div>
        <div class="qrcode_box">
          < img :src=get_time_url(card_info.aqcode_url) alt="" v-show="card_info.aqcode_url !== ''">
          <div v-show="card_info.aqcode_url === ''" :class="{code_rotate: on_load_code}" @click="reload_qrcode">
            < img src="../../assets/imgs/refresh_code.png" alt="" style="width: 1.7rem;height: 1.7rem;margin-top: 1.3rem;">
          </div>

          <p v-show="card_info.aqcode_url !== ''">长按查看小程序名片</p>
          <p v-show="card_info.aqcode_url === ''">小程序二维码获取失败,点击重新获取</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { BASE_URL } from '@/assets/common/utils'
  import BScroll from 'better-scroll'
  import wx from "weixin-js-sdk";

  export default {
    computed: {
      ...mapGetters([
        'cardInfo'
      ])
    },
    data () {
      return {
        card_info: {},
        on_load_code: false,
      }
    },
    methods: {
      reload_qrcode: function () {
        this.on_load_code = true
        this.$http.get(BASE_URL + '/updateAqCode.rq')
          .then(res => {
            console.log(res)
            this.on_load_code = false
            if (this.card_info.card_id === this.cardInfo.card_id) {
              let obj = {
                key: 'aqcode_url',
                value: res.data.aqcode_url
              }
              this.updateCardInfo(obj)
              console.log(this.card_info)
            }
            this.card_info.aqcode_url = res.data.aqcode_url
          })
          .catch(e => {
            console.log(e)
            this.on_load_code = false
          })
      },
      get_time_url: function (url) {
//        if () {}
        return url + '?t=' + new Date().getTime()
      },
      scale_img: function (src) {
//        this.$router.push({path: '/head_img', name: 'head_img', params: {src: src}})
        wx.previewImage({
          current: src + '?imageMogr2/auto-orient', // 当前显示图片的http链接
          urls: [src] // 需要预览的图片http链接列表
        });
      },
      ...mapActions([
        'updateCardInfo'
      ])
    },
    created () {
      //qrcode-wrapper
      // this.$nextTick( () => {
      //     if (!this.qrcode_scroll) {
      //       this.qrcode_scroll = new BScroll(this.$refs.qrcode_wrapper, {
      //         bounce: true,
      //         click: true,
      //         startX: 0,
      //         startY: 0,
      //         pullUpLoad: {
      //           threshold: -110, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，
      //         }
      //       })
      //     } else {
      //       this.qrcode_scroll.refresh();
      //     }
      // })
      this.$http.post(BASE_URL + '/getJssdk.rq', {url: window.location.href})
        .then(res => {
          let jssdk = {
            appId: res.data.appId,
            signature: res.data.signature,
            nonceStr: res.data.nonceStr,
            timestamp: res.data.timestamp
          }

          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: jssdk.appId, // 必填，公众号的唯一标识
            timestamp: jssdk.timestamp, // 必填，生成签名的时间戳
            nonceStr: jssdk.nonceStr, // 必填，生成签名的随机串
            signature: jssdk.signature,// 必填，签名，见附录1
            jsApiList: [
              'previewImage',
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          })

          wx.ready(function () {
            // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
            wx.checkJsApi({
              jsApiList: [
                'previewImage',
              ],
              success: function (res) {
              },
              fail: function (res) {
              }
            });

          })
        })
        .catch(e => console.log(e))
    },
    activated () {
      let data = this.$route.params
      console.log(data)
      if (data.card_name === undefined) {
        this.card_info = this.cardInfo
        document.title = '我的名片'
      } else {
        this.card_info = data
        Object.assign(this.card_info, {email: this.card_info.card_email})
        document.title = this.card_info.card_name
      }
    }
  }
</script>

<style>
  /* .qrcode-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  } */
  .company_profile {
    width: 4.65rem;
    margin: 0.34rem 0 0 0.46rem;
    color: #000;
    font-size: 0.32rem;
    letter-spacing: 1.2px;
    display: inline-block;
    /* height: 0.9rem; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .qrcode_container {
    width: 6.74rem;
    /* height: 9.9rem; */
    margin: 0.76rem auto;
    background-color: #FFFFFF;
    border: 1px solid #f2f2f2;
    box-shadow: 0 17px 19px 0 rgba(0, 0, 0, 0.10);
    border-radius: 6px;
    overflow: hidden;
  }

  .company_name {
    font-size: 0.32rem;
    color: #A1A1A1;
    letter-spacing: 1.2px;
    width: 4.65rem;
    height: 0.9rem;
    margin: 0.42rem 0 0 0.46rem;
    display: inline-block;
  }

  #qrcode_headimg {
    display: inline-block;
    width: 1.14rem;
    height: 1.14rem;
    float: right;
    margin: 0.42rem 0.33rem 0 0;
    border-radius: 0.04rem;
    overflow: hidden;
  }

  #qrcode_headimg img {
    width: 100%;
    height: 100%;
  }

  #qrcode_name {
    font-family: PingFangSC-Medium;
    line-height: 0.67rem;
    margin: 0.38rem 0 0 0.42rem;
    font-size: 0.48rem;
    letter-spacing: 1.65px;
    font-weight: 700;
    max-width: 5rem;
  }

  .qrcode_phone, .qrcode_email {
    height: 0.4rem;
    min-width: 4rem;
    display: inline-block;
    margin: 0.04rem 0 0 0.42rem;
    font-size: 0.24rem;
    color: #a1a1a1;
    letter-spacing: 1.05px;
  }

  .qrcode_role {
    color: #4c4c4c;
    line-height: 0.33rem;
    margin: 0.04rem 0 0.36rem 0.42rem;
  }

  .qrcode_email {
    margin-bottom: 0.22rem;
  }

  .qrcode_box {
    text-align: center;
  }

  .qrcode_box img, .qrcode_box div {
    width: 4.3rem;
    height: 4.3rem;
    margin-top: 0.53rem;
  }

  .qrcode_box div {
    display: inline-block;
    text-align: center;
  }

  .qrcode_back_img {
    /* background-image: url("../../assets/imgs/card_background.png");
    background-size: cover; */
    background-color: #fff;
  }

  .qrcode_box p {
    font-size: 0.26rem;
    color: #8B8E92;
    text-align: center;
    margin-top: 0.3rem;
    margin-bottom: 0.8rem;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .code_rotate {
    animation: rotate 2s infinite;
  }
</style>


// WEBPACK FOOTER //
// src/components/me/myQRcode.vue