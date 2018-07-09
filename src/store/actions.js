import * as TYPES from './mutation-types'

export const setDepartment = ({commit, state}, role) => {
  console.log()
  commit(TYPES.SET_SIGNSTURE, role)
}