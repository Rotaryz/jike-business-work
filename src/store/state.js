import {tabMode} from 'common/js/constants'

const state = {
  tabMode: tabMode.show,
  signature: 'ah',
  currentMsg: {}, // 当前聊天对象
  latelyList: [], // 最近联系人列表
  newMsg: {}, // 最新消息
  customCount: 0,
  imInfo: {}
}

export default state
