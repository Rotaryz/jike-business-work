<template>
  <transition :name="slide">
    <div class="data-all">
      <scroll>
        <div class="info-con">
          <div class="info-top">
            <div class="info-img-box">
              <img :src="avatar" alt="">
            </div>
            <div class="info-text">{{name}}</div>
          </div>
          <div class="info-list info-line">
            <div class="info-left">个人二维码</div>
            <div class="info-right">
              <div class="info-btn" v-if="imgUrl.length === 0">添加</div>
              <div class="info-img" v-if="imgUrl.length !== 0">
                <img :src="imgUrl">
              </div>
              <input type="file" class="avatar-input" id="header-logo" @change="_fileChange($event)" accept="image/*">
            </div>
          </div>
          <div class="info-list">
            <div class="info-left">群二维码</div>
            <div class="info-right">
              <div class="info-btn" v-if="allImgUrl.length === 0">添加</div>
              <div class="info-img" v-if="allImgUrl.length !== 0">
                <img :src="allImgUrl">
              </div>
              <input type="file" class="avatar-input" id="header-alllogo" @change="_fileAllChange($event)" accept="image/*">
            </div>
          </div>
        </div>
      </scroll>
      <toast ref="toast"></toast>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'components/scroll/scroll'
  import {mapGetters} from 'vuex'
  import {ERR_OK} from 'common/js/config'
  import { UpLoad, Mine } from 'api'
  import Toast from 'components/toast/toast'

  export default {
    name: 'mine-info',
    data() {
      return {
        imgId: 0,
        imgUrl: '',
        allImgId: 0,
        allImgUrl: '',
        name: '',
        avatar: ''
      }
    },
    created() {
      this.getCodeData()
    },
    methods: {
      _fileChange(e) {
        if (e.target) {
          const file = e.target.files[0]
          const reader = new FileReader()
          reader.onload = async (event) => {
            this.imageBig = event.target.result
            let $Blob = this._getBlobBydataURI(this.imageBig, 'image/png')
            let formData = new FormData()
            formData.append('file', $Blob, 'file_' + Date.now() + '.png')
            UpLoad.upLoadImage(formData).then((res) => {
              if (res.error === ERR_OK) {
                this.imgUrl = res.data.url
                Mine.updatePersonalQrcode(res.data.id).then((res) => {
                  if (res.error === ERR_OK) {
                    this.$refs.toast.show('上传成功')
                  } else {
                    this.$refs.toast.show(res.message)
                  }
                })
                return false
              }
              this.loading = false
              this.$refs.toast.show(res.message)
            })
          }
          reader.readAsDataURL(file)
        }
      },
      _fileAllChange(e) {
        if (e.target) {
          const file = e.target.files[0]
          const reader = new FileReader()
          reader.onload = async (event) => {
            this.imageBig = event.target.result
            let $Blob = this._getBlobBydataURI(this.imageBig, 'image/png')
            let formData = new FormData()
            formData.append('file', $Blob, 'file_' + Date.now() + '.png')
            UpLoad.upLoadImage(formData).then((res) => {
              if (res.error === ERR_OK) {
                this.allImgUrl = res.data.url
                Mine.updateGroupQrcode(res.data.id).then((res) => {
                  if (res.error === ERR_OK) {
                    this.$refs.toast.show('上传成功')
                  } else {
                    this.$refs.toast.show(res.message)
                  }
                })
                return false
              }
              this.loading = false
              this.$refs.toast.show(res.message)
            })
          }
          reader.readAsDataURL(file)
        }
      },
      _getBlobBydataURI(dataURI, type) {
        let binary = atob(dataURI.split(',')[1])
        let array = []
        for (let i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i))
        }
        return new Blob([new Uint8Array(array)], {type: type})
      },
      getCodeData() {
        Mine.getCodeInfo().then((res) => {
          if (res.error === ERR_OK) {
            this.name = res.data.name
            this.allImgUrl = res.data.wx_group_image_url
            this.imgUrl = res.data.personal_qr_image_url
            this.avatar = res.data.image_url
          } else {
            this.$refs.toast.show(res.message)
          }
        })
      }
    },
    computed: {
      ...mapGetters(['ios']),
      slide() {
        return this.ios ? '' : 'slide'
      }
    },
    components: {
      Scroll,
      Toast
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  *
    box-sizing: border-box
    -moz-box-sizing: border-box
    -webkit-box-sizing: border-box

  .data-all
    fill-box()
    z-index: 70
  .info-con
    background: $color-white-fff
    padding: 10px 15px 0
    .info-top
      padding: 22px 15px
      margin-bottom: 17.5px
      layout(row)
      border-1px(#e5e5e5)
      box-shadow: 0 4px 12px 0 rgba(32,32,46,0.08)
      border-radius: 2px
      align-items: center
      .info-img-box
        width: 50px
        height: 50px
        margin-right: 10px
        img
          width: 100%
          height: 100%
          display: block
      .info-text
        font-family: $font-family-medium
        font-size: $font-size-16
        color: #374B63
    .info-list
      layout(row)
      height: 55px
      align-items: center
      justify-content: space-between
      .info-left
        font-family: $font-family-regular
        font-size: $font-size-14
        color: $color-20202E
      .info-right
        layout(row)
        height: 55px
        align-items: center
        position: relative
        .avatar-input
          position: absolute
          width: 100%
          height: 100%
          left: 0
          top: 0
          z-index: 14
          opacity: 0
        .info-btn
          width: 70px
          background: $color-56BA15
          color: $color-white-fff
          text-align: center
          height: 26px
          line-height: 26px
          border-radius: 2px
        .info-img
          width: 30px
          height: 30px
          img
            width: 100%
            height: 100%
            display: block
    .info-line
      border-bottom-1px(#e0e0e0)
  .z
    width: 100%

</style>
