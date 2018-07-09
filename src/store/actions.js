import * as TYPES from './mutation-types'

export const saveList = ({commit, state}, latelyList) => {
  commit(TYPES.SET_LATELY_LIST, latelyList)
}

export const setCurrent = ({commit, state}, current) => {
  commit(TYPES.SET_CURRENT, current)
}

export const setUnreadCount = ({commit, state}, id) => {
  commit(TYPES.SET_UNREAD_COUNT, id)
}

export const setDepartment = ({commit, state}, role) => {
  console.log()
  commit(TYPES.SET_SIGNSTURE, role)
}
