import * as TYPES from './mutation-types'

const mutations = {
  [TYPES.SET_TAB_MODE] (state, tabMode) {
    state.tabMode = tabMode
  },
  [TYPES.SET_SIGNSTURE] (state, signature) {
    state.signature = signature
  }
}

export default mutations
