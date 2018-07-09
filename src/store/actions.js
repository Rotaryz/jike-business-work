import * as TYPES from './mutation-types'

export const setSignature = ({commit, state}, role) => {
  console.log(role)
  commit(TYPES.SET_SIGNSTURE, role)
}