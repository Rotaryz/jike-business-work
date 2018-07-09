import * as TYPES from './mutation-types'

const mutations = {
  [TYPES.SET_TAB_MODE] (state, tabMode) {
    state.tabMode = tabMode
  },
  [TYPES.SET_SIGNSTURE] (state, department) {
    state.department = department
  }
}

export default mutations
