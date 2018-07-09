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
  }
}

export default mutations
