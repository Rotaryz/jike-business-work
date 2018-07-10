<template>
  <div class="client-detail">
    <div class="container">
      <scroll ref="scroll"
              :probeType="probeType"
              :bcColor="bcColor"
              :listenScroll="listenScroll"
              @scroll="scroll">
        <div class="client-top">
          <div class="cliten-box">
            <div class="cliten-con">
              <img class="cliten-con-bg" src="./bg-customer_details@2x.png" alt="">
              <div class="cliten-img">
                <div class="detail-img-box">
                  <div class="img">
                    <img :src="clientData.image_url" alt="">
                  </div>
                  <div class="label-right">
                    <div class="label-name">{{clientData.name}}</div>
                    <div class="label-box">
                      <div class="label active">80后</div>
                      <div class="label active">在意价格</div>
                      <div class="label">添加标签</div>
                    </div>
                  </div>
                </div>
                <div class="detail-jump" @click="jumpData">
                  <img class="jump-img" src="./icon-pressed@2x.png" alt="">
                </div>
              </div>
              <div class="cliten-bottom">
                <div class="bottom-number">
                  <div class="number-top">
                    <div class="number">{{clientData.conversion_rate}}</div>
                    <div class="icon">%</div>
                  </div>
                  <div class="number-bottom">
                    <div class="text">预计成交率</div>
                  </div>
                </div>
                <div class="bottom-number">
                  <div class="number-top" v-if="clientData.progress < 110">
                    <div class="number">{{clientData.progress}}</div>
                    <div class="icon">%</div>
                  </div>
                  <div class="number-top" v-if="clientData.progress === '无法签单' || clientData.progress === '成交'">
                    <div class="text">{{clientData.progress}}</div>
                  </div>
                  <div class="number-bottom" @click="showModel">
                    <div class="text">实际跟进阶段</div>
                    <div class="img-box">
                      <img class="img" src="./icon-switch@2x.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="client-padding"></div>
        <div class="client-box" v-if="!showBox">
          <div class="box-bg" :class="showMode ? 'submit-bg-active' : ''" @click="hideModel"></div>
          <div class="box-bottom" :class="showMode ? 'model-con-active' : ''">
            <div class="bottom-list" v-for="(item, index) in barList" :key="index" @click="selectBar(index, item)">
              <div class="left">{{item.text}}{{item.icon}}</div>
              <div class="right">
                <img v-if="barIndex === index" class="right-img" src="./icon-selected@2x.png" alt="">
              </div>
            </div>
            <div class="box-line"></div>
            <div class="btn" @click="hideModel">取消</div>
          </div>
        </div>
        <div class="select-tab">
          <div class="tab" v-for="(item, index) in tabList" v-bind:key="index" @click="switchTab(index)">{{item}}</div>
          <div class="line" :style="'transform:translate3d('+ (100 * menuIdx) + '%, 0, 0)'">
            <div class="chilen-line"></div>
          </div>
        </div>
        <div class="visitor-box" v-if="menuIdx * 1 === 0">
          <div class="box-list">
            <div class="time">2018年7月3日 12:00</div>
            <div class="item-list">
              <div class="left-img">
                <!--<img src="" alt="" class="img">-->
              </div>
              <div class="left-text">
                杨过<span>查看</span>了你的<span>个人动态</span>，看来TA对你感兴趣
              </div>
            </div>
            <div class="item-list">
              <div class="left-img">
                <!--<img src="" alt="" class="img">-->
              </div>
              <div class="left-text">
                杨过<span>查看</span>了你的<span>个人动态</span>，看来TA对你感兴趣
              </div>
            </div>
            <div class="item-list">
              <div class="left-img">
                <!--<img src="" alt="" class="img">-->
              </div>
              <div class="left-text">
                杨过<span>查看</span>了你的<span>个人动态</span>，看来TA对你感兴趣
              </div>
            </div>
          </div>
        </div>
        <div class="follow-box" v-if="menuIdx * 1 === 1">
          <img src="./icon-write@2x.png" alt="" class="add-jump" @click="toAddFlow">
          <div class="follow-line"></div>
          <div class="follow-list" v-for="(item, index) in flowList" :key="index">
            <div class="time">{{item.created_at}}</div>
            <div class="text">{{item.record}}</div>
            <div class="icon-log" v-if="index * 1 === 0"></div>
            <div class="icon-cri" v-if="index * 1 !== 0"></div>
            <div class="icon-img" v-if="index * 1 === 0">
              <img class="icon-small-img" src="./icon-address@2x.png" alt="">
            </div>
          </div>
        </div>
        <div class="ai-box" v-if="menuIdx * 1 === 2">
          <div class="pie-box">
            <div id="myPie"></div>
            <div class="title-box">
              <div class="title">客户兴趣占比</div>
              <div class="sub-title">(每小时更新)</div>
            </div>
            <div class="pie-list">
              <div class="list">
                <div class="icon one"></div>
                <div class="text">对我感兴趣</div>
              </div>
              <div class="list">
                <div class="icon two"></div>
                <div class="text">对产品感兴趣</div>
              </div>
              <div class="list">
                <div class="icon thr"></div>
                <div class="text">对公司感兴趣</div>
              </div>
            </div>
          </div>
          <div class="pie-box line-box">
            <div id="myLine"></div>
            <div class="title-box">
              <div class="title">近30日客户活跃度</div>
              <div class="sub-title">(每小时更新)</div>
            </div>
          </div>
          <div class="pie-box bar-box">
            <div id="myBar"></div>
            <div class="title-box">
              <div class="title">客户与我的互动</div>
              <div class="sub-title">(每天0点更新)</div>
            </div>
          </div>
        </div>
      </scroll>
    </div>
    <div class="bottom-box">
      <div class="box-btn" @click="phoneCall">
        <img src="./icon-telephone@2x.png" alt="" class="btn-img">
        <div class="text">打电话</div>
      </div>
      <div class="box-btn message-btn" @click="jumpMessage">
        <img src="./icon-news@2x.png" alt="" class="btn-img">
        <div class="text">发消息</div>
      </div>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>

<script type="text/ecmascript-6">
  import {ClientDetail} from 'api'
  import {ERR_OK} from '../../common/js/config'
  import Toast from 'components/toast/toast'
  import Scroll from 'components/scroll/scroll'

  export default {
    name: 'client-detail',
    data() {
      return {
        listenScroll: true,
        probeType: 3,
        bcColor: '#F0F2F5',
        barList: [
          {
            text: '20',
            icon: '%'
          },
          {
            text: '40',
            icon: '%'
          },
          {
            text: '80',
            icon: '%'
          },
          {
            text: '成交',
            icon: ''
          },
          {
            text: '无法签单',
            icon: ''
          }
        ],
        tabList: ['来访记录', '跟进记录', 'AI分析'],
        showMode: true,
        showBox: true,
        barIndex: null,
        menuIdx: 0,
        dataEcharts: false,
        clientData: {
          image_url: '',
          name: ''
        },
        flow: {
          progress: '',
          create_follow_record: true
        },
        flowPage: 1,
        flowList: [],
        noMore: false,
        id: '',
        flowId: '',
        actionPage: 1,
        actionList: [],
        noActionMore: false,
        mobile: ''
      }
    },
    created() {
      this.id = this.$route.query.id
      this.getClientId(1)
    },
    methods: {
      scroll(pos) {
        console.log(pos)
      },
      drawPie() {
        let myChart = this.$echarts.init(document.getElementById('myPie'))
        // 绘制图表
        myChart.setOption({
          // title: {
          //   text: '客户兴趣占比',
          //   subtext: '(每小时更新)',
          //   x: 'center'
          // },
          tooltip: {
            trigger: 'item',
            formatter: '{d}%'
          },
          color: ['#F9543C', '#23799D', '#8E3C68'],
          series: [
            {
              name: '访问222来源',
              type: 'pie',
              radius: '40%',
              center: ['50%', '55%'],
              data: [
                {value: 335, name: '对我感兴趣'},
                {value: 235, name: '对产品感兴趣'},
                {value: 148, name: '对公司感兴趣'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      },
      drawLine() {
        let myChart = this.$echarts.init(document.getElementById('myLine'))
        // 绘制图表
        myChart.setOption({
          // title: {
          //   text: '近30日客户活跃度',
          //   subtext: '(每小时更新)',
          //   x: 'center'
          // },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['10.11', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7', '10.8', '10.9', '10.10', '10.12', '10.13', '10.14', '10.15', '今天'],
            splitLine: {
              show: true,
              lineStyle: {
                color: '#ddd'
              }
            }
          },
          tooltip: {
            trigger: 'axis',
            formatter: '新用户数：{c}',
            axisPointer: {
              type: 'none'
            }
          },
          yAxis: {
            minInterval: 1,
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: '#ddd'
              }
            }
          },
          series: [{
            data: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
            type: 'line',
            showSymbol: false,
            itemStyle: {
              normal: {
                color: '#F9543C',
                borderWidth: 2,
                lineStyle: {
                  color: '#F9543C',
                  width: 3
                }
              }
            }
          }]
        })
      },
      drawBar() {
        let myChart = this.$echarts.init(document.getElementById('myBar'))
        // 绘制图表
        myChart.setOption({
          // title: {
          //   text: '客户与我的互动',
          //   subtext: '(每小时更新)',
          //   x: 'center'
          // },
          tooltip: {
            trigger: 'axis',
            formatter: '{b}数：{c}',
            axisPointer: {
              type: 'none'
            }
          },
          grid: {
            left: '0',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            minInterval: 1,
            type: 'value',
            boundaryGap: false,
            splitLine: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: '#20202E',
              fontSize: 14
            }
          },
          yAxis: {
            type: 'category',
            data: ['点赞', '转发', '拨打电话', '咨询'],
            axisLabel: {
              interval: 0,
              color: '#20202E',
              fontSize: 14
            }
          },
          series: [{
            data: [1, 2, 4, 1],
            type: 'bar',
            showSymbol: false,
            barWidth: 25,
            itemStyle: {
              normal: {
                color: '#F9543C',
                borderWidth: 2,
                lineStyle: {
                  color: '#F9543C',
                  width: 3
                }
              }
            }
          }]
        })
      },
      showModel() {
        this.showBox = false
        setTimeout(() => {
          this.showMode = false
        }, 100)
      },
      hideModel() {
        this.showMode = true
        setTimeout(() => {
          this.showBox = true
        }, 500)
      },
      selectBar(index, item) {
        this.barIndex = index
        this.flow.progress = item.text
        console.log(this.progress)
        setTimeout(() => {
          this.showMode = true
          ClientDetail.saveClientDetail(this.clientData.id, this.flow).then((res) => {
            if (res.error === ERR_OK) {
              this.getClientId(1)
            } else {
              this.$refs.toast.show(res.message)
            }
          })
        }, 800)
        setTimeout(() => {
          this.showBox = true
          this.barIndex = null
        }, 1500)
      },
      switchTab(index) {
        this.menuIdx = index
        if (index * 1 === 2) {
          setTimeout(() => {
            this.drawPie()
            this.drawLine()
            this.drawBar()
          }, 200)
        }
      },
      getClientId(id) {
        ClientDetail.getClientId(id).then((res) => {
          if (res.error === ERR_OK) {
            this.clientData = res.data
            this.id = res.data.id
            this.flowId = res.data.flow_id
            this.getNewFlowList(this.id, this.flowId)
            this.getNewActionList(this.id)
          }
        })
      },
      getNewFlowList(id, flowId) {
        ClientDetail.getFlowList(id, flowId, this.flowPage).then((res) => {
          if (res.error === ERR_OK) {
            this.flowList = res.data
            this._isAflowList(res)
          }
        })
      },
      getMoreFlowList(id, flowId) {
        if (this.noMore) return
        ClientDetail.getFlowList(id, flowId, this.flowPage).then((res) => {
          if (res.error === ERR_OK) {
            this.flowList.push(res.data)
            this._isAflowList(res)
          }
        })
      },
      _isAflowList (res) {
        this.flowPage++
        if (this.flowList.length >= res.meta.total * 1) {
          this.noMore = true
        }
      },
      _isActionList (res) {
        this.actionPage++
        if (this.actionList.length >= res.meta.total * 1) {
          this.noActionMore = true
        }
      },
      getNewActionList(id) {
        ClientDetail.getActionList(id, this.actionPage).then((res) => {
          if (res.error === ERR_OK) {
            this.actionList = res.data
            // this._isActionList(res)
          }
        })
      },
      getMoreActionList(id) {
        if (this.noActionMore) return
        ClientDetail.getFlowList(id, this.actionPage).then((res) => {
          if (res.error === ERR_OK) {
            this.actionList.push(res.data)
            this._isAflowList(res)
          }
        })
      },
      phoneCall() {
        window.location.href = `tel:${this.mobile}`
      },
      toAddFlow() {
        let id = this.id
        let flowId = this.flowId
        const path = `/addflow?id=${id}&flowid=${flowId}`
        this.$router.push({path})
      },
      jumpData() {
        let id = this.id
        let flowId = this.flowId
        const path = `/detail-data?id=${id}&flowid=${flowId}`
        this.$router.push({path})
      },
      jumpMessage() {
        let id = this.id
        const path = `/chat?id=${id}`
        this.$router.push({path})
      }
    },
    components: {
      Toast,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import '~common/stylus/mixin'
  div
    box-sizing: border-box
    -moz-box-sizing: border-box
    -webkit-box-sizing: border-box

  .client-detail
    fill-box()
    z-index: 50

  .container
    fill-box(absolute)
    bottom: 45px

  .client-top
    background: #20202E
    height: 73px
    position: relative
    .cliten-box
      position: absolute
      padding: 0 15px
      left: 0
      top: 20px
      width: 100%
      .cliten-con
        background: #fff
        width: 100%
        padding: 15px
        position: relative
        .cliten-con-bg
          position: absolute
          display: block
          width: 100%
          height: 100%
          left: 0px
          top: 0px
          z-index: 0
        .cliten-img
          layout(row)
          justify-content: space-between
          align-items: center
          padding-bottom: 15px
          border-bottom: 0.5px solid rgba(0, 0, 0, .1)
          position: relative
          z-index: 1
          .detail-img-box
            layout(row)
            .img
              position: relative
              height: 0
              width: 60px
              height: 60px
              background: #333
              img
                width: 60px
                height: 60px
                display: block
            .label-right
              margin-left: 10px
              .label-name
                font-size: $font-size-medium-x
                color: $color-text
                font-family: $font-family-meddle
                padding-top: 5px
                margin-bottom: 15px
              .label-box
                layout(row)
                .label
                  width: 65px
                  height: 20px
                  line-height: 20px
                  text-align: center
                  font-size: $font-size-medium
                  color: $color-text-88
                  font-family: $font-family-meddle
                  background: #F0F2F5
                  margin-right: 5px
                .active
                  background: rgba(86, 186, 21, 0.2)
                  color: #56BA15
          .detail-jump
            height: 45px
            width: 25px
            position: relative
            .jump-img
              width: 6px
              height: 12px
              position: absolute
              right: 0
              top: 0
              bottom: 0
              margin: auto
        .cliten-bottom
          position: relative
          z-index: 1
          layout(row)
          padding: 15px 0
          .bottom-number
            width: 50%
            .number-top
              justify-content: center
              layout(row)
              align-items: flex-end
              .number
                font-size: 40px
                color: $color-text
                font-family: DINCondensed-Bold
                line-height: 1
                height: 40px
              .text
                font-size: 24px
                height: 40px
                line-height: 43px
                color: $color-text
                font-family: DINCondensed-Bold
              .icon
                font-size: $font-size-small
                color: $color-text
                font-family: $font-family-light
                padding-bottom: 5px
            .number-bottom
              justify-content: center
              layout(row)
              margin-top: 6.5px
              align-items: center
              .text
                font-size: $font-size-medium
                color: $color-text
                font-family: $font-family-meddle
              .img-box
                width: 10px
                height: 10px
                margin-left: 5px
                .img
                  display: block
                  width: 10px
                  height: 10px

  .client-padding
    width: 100%
    height: 0
    padding-bottom: 39%

  .client-box
    position: fixed
    width: 100%
    height: 100%
    left: 0
    top: 0
    z-index: 11
    .box-bg
      width: 100%
      height: 100%
      background: rgba(32, 32, 46, .8)
      transition: all .8s
      -moz-transition: all .8s
      -webkit-transition: all .8s
      -o-transition: all .8s
      opacity: 1
    .submit-bg-active
      opacity: 0
    .box-bottom
      background: #fff
      bottom: 0
      left: 0
      width: 100%
      position: absolute
      transition: all .5s
      -moz-transition: all .5s
      -webkit-transition: all .5s
      -o-transition: all .5s
      .bottom-list
        layout(row)
        justify-content: space-between
        padding: 15px
        align-items: center
        border-bottom: 1px solid rgba(0, 0, 0, .1)
        .left
          font-size: $font-size-medium
          color: $color-text
          font-family: $font-family-meddle
        .right
          width: 20px
          height: 20px
          .right-img
            display: block
            width: 20px
            height: 20px
      .box-line
        width: 100%
        height: 10px
        background: #F0F2F5
      .btn
        font-size: $font-size-medium
        color: $color-text
        font-family: $font-family-meddle
        padding: 15px 0
        text-align: center
    .model-con-active
      bottom: -100%
      opacity: .3

  .select-tab
    layout(row)
    padding: 15px 0
    border-bottom: 1px solid rgba(0, 0, 0, .1)
    position: relative
    .tab
      flex: 1
      text-align: center
    .line
      position: absolute
      width: 33.33%
      height: 3px
      bottom: 0
      transition: all .3s
      .chilen-line
        height: 3px
        width: 30px
        background: #20202e
        margin: 0 auto

  .visitor-box
    padding: 0 15px
    .box-list
      padding-top: 25px
      .time
        font-size: $font-size-medium
        color: $color-text
        font-family: $font-family-meddle
      .item-list
        layout(row)
        margin-top: 15px
        background: #fff
        padding: 7.5px 40px 7.5px 10px
        align-items: center
        .left-img
          width: 40px
          height: 40px
          background: #333
          margin-right: 10px
          .img
            display: block
            width: 40px
            height: 40px
            background: #333
        .left-text
          flex: 1
          font-size: $font-size-medium
          color: $color-text
          font-family: $font-family-meddle
          span
            color: #56BA15

  .follow-box
    padding: 15px 15px 15px 35px
    position: relative
    overflow: hidden
    .follow-list
      background: #fff
      padding: 15px 10px
      margin-bottom: 15px
      position: relative
      .time
        font-size: $font-size-medium
        color: $color-text-88
        font-family: $font-family-regular
      .text
        margin-top: 10px
        font-size: $font-size-medium
        color: $color-text
        font-family: $font-family-meddle
        min-height: 10px
      .icon-cri
        position: absolute
        border: 1px solid #ccc
        background: #fff
        width: 10px
        height: 10px
        left: -21px
        top: 0
        bottom: 0
        border-radius: 50%
        margin: auto 0
      .icon-log
        position: absolute
        width: 20px
        height: 50%
        left: -21px
        top: 0
        background: #f0f2f5
      .icon-img
        position: absolute
        width: 10px
        height: 14px
        left: -21px
        top: 0
        bottom: 0
        margin: auto 0
        background: #f0f2f5
        .icon-small-img
          height: 14px
          left: -21px
    .follow-list:last-child
      margin-bottom: 0
    .follow-line
      width: 1px
      position: absolute
      height: 100%
      background: #CCCCCC
      top: 15px
      left: 18px

  .ai-box
    padding: 15px
    .pie-box
      position: relative
      background: linear-gradient(rgba(255, 255, 255, .1) 0%, #fff 100%)
      height: 305px
      margin-bottom: 10px
      #myPie
        width: 100%
        height: 305px
        margin: 20px auto
        padding: 20px
      #myLine
        width: 100%
        height: 300px
        margin: 20px auto
        padding: 35px 0px 0
      #myBar
        width: 100%
        height: 300px
        margin: 20px auto
        padding: 35px 20px 0
      .title-box
        position: absolute
        width: 100%
        text-align: center
        top: 30px
        left: 0
        .title
          font-size: $font-size-medium-x
          color: #202020
          font-family: $font-family-meddle
        .sub-title
          margin-top: 5px
          font-size: $font-size-small
          color: $color-text-88
          font-family: $font-family-meddle
      .pie-list
        layout(row)
        position: absolute
        width: 100%
        bottom: 25px
        left: 0
        .list
          flex: 1
          layout(row)
          align-items: center
          justify-content: center
          .icon
            background: #F9543C
            width: 7px
            height: 7px
            margin-right: 4px
            border-radius: 50%
          .two
            background: #23799D
          .thr
            background: #8E3C68
          .text
            line-height: 1
            font-size: $font-size-small
            color: #202020
            font-family: $font-family-regular

    .line-box
      height: 270px
      #myLine
        height: 270px

  .bottom-box
    layout(row)
    position: absolute
    left: 0
    bottom: 0
    height: 45px
    width: 100%
    z-index: 11
    .box-btn
      layout(row)
      background: #20202E
      width: 50%
      justify-content: center
      align-items: center
      .btn-img
        width: 15px
        height: 17px
        display: block
        margin-right: 4px
      .text
        font-size: $font-size-medium-x
        font-family: $font-family-meddle
        color: #fff
    .message-btn
      background: #56BA15
      .btn-img
        width: 18px
        padding-top: 2px

  .add-jump
    position: fixed
    z-index: 11
    width: 63px
    height: 66px
    right: 5px
    bottom: 10px

</style>
