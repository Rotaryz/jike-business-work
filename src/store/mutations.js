import * as TYPES from './mutation-types'

const mutations = {
  [TYPES.SET_TAB_MODE] (state, tabMode) {
    state.tabMode = tabMode
  },
  [TYPES.SET_SIGNSTURE] (state, signature) {
    state.signature = signature
  },
  [TYPES.SET_LATELY_LIST] (state, latelyList) {
    state.latelyList = latelyList
  },
  [TYPES.SET_CURRENT] (state, current) {
    state.currentMsg = current
  },
  [TYPES.SET_SIGNSTURE] (state, department) {
    state.department = department
  }
}

export default mutations
