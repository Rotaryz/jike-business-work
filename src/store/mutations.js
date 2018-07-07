import * as TYPES from './mutation-types'

const mutations = {
  [TYPES.TYPE](state, argument) {
    state.argument = argument
  },
  [TYPES.TYPE1](state, argument1) {
    state.argument1 = argument1
  }
}

export default mutations
