import {tabMode} from 'common/js/constants'

const state = {
  tabMode: tabMode.show,
  signature: '',
  currentMsg: {}, // 当前聊天对象
  latelyList: [] // 最近联系人列表
}

export default state
