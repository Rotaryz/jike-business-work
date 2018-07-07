import * as TYPES from './mutation-types'

export const test = function({commit, state}, argument) {
  commit(TYPES.TYPE, argument)
}

export const test1 = function({commit, state}, argument1) {
  commit(TYPES.TYPE1, argument1)
}
