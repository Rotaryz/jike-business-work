import * as TYPES from './mutation-types'

const mutations = {
  [TYPES.SET_TAB_MODE](state, tabMode) {
    state.tabMode = tabMode
  }
}

export default mutations
