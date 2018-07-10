import * as TYPES from './mutation-types'

const mutations = {
  [TYPES.SET_TAB_MODE](state, tabMode) {
    state.tabMode = tabMode
  },
  [TYPES.SET_LATELY_LIST](state, latelyList) {
    state.latelyList = latelyList
  },
  [TYPES.SET_CURRENT](state, current) {
    state.currentMsg = current
  },
  [TYPES.SET_UNREAD_COUNT](state, id) {
    state.latelyList = state.latelyList.map((item) => {
      if (item.sessionId === id) {
        item.unreadMsgCount = 0
      }
      return item
    })
  },
  [TYPES.SET_SIGNSTURE](state, department) {
    state.department = department
  },
  [TYPES.SET_NEW_MSG](state, msg) {
    state.newMsg = msg
  },
  [TYPES.SET_CUSTOM_COUNT](state, type) {
    if (type === 'add') {
      state.customCount++
    } else if (type === 'clear') {
      state.customCount = 0
    }
  },
  [TYPES.ADD_LIST_COUNT](state, msg) {
    let hasArr = state.latelyList.filter((item) => {
      return item.sessionId === msg.fromAccount
    })
    if (hasArr.length) {
      if (state.currentMsg.nickName) {
        state.latelyList = state.latelyList.map((item) => {
          if (item.sessionId === msg.fromAccount) {
            item.unreadMsgCount = 0
          }
          return item
        })
      } else {
        state.latelyList = state.latelyList.map((item) => {
          if (item.sessionId === msg.fromAccount) {
            item.unreadMsgCount++
          }
          return item
        })
      }
    } else {
      let item = {
        type: 1,
        typeZn: '私聊',
        sessionId: msg.fromAccount,
        avatar: msg.avatar,
        nickName: msg.fromAccountNick,
        lastMsg: msg.text,
        msgTimeStamp: msg.time,
        msgSeq: msg.seq,
        msgRandom: msg.random, // 消息随机数
        unreadMsgCount: 1
      }
      state.latelyList.push(item)
    }
  },
  [TYPES.ADD_LIST_MSG](state, msg) {
    state.latelyList = state.latelyList.map((item) => {
      if (item.sessionId === msg.fromAccount) {
        item.lastMsg = msg.text
        item.msgTimeStamp = msg.time
      }
      return item
    })
  },
  [TYPES.SET_IM_INFO](state, imInfo) {
    state.imInfo = imInfo
  },
  [TYPES.SET_NOW_CHAT](state, arr) {
    state.nowChat = arr
  }
}

export default mutations
