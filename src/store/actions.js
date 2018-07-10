import * as TYPES from './mutation-types'

export const setSignature = ({commit, state}, signature) => {
  commit(TYPES.SET_LATELY_LIST, signature)
}
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
  commit(TYPES.SET_SIGNSTURE, role)
}

export const setNewMsg = ({commit, state}, msg) => {
  commit(TYPES.SET_NEW_MSG, msg)
}

export const setCustomCount = ({commit, state}, type) => {
  commit(TYPES.SET_CUSTOM_COUNT, type)
}

export const addListCount = ({commit, state}, id) => {
  commit(TYPES.ADD_LIST_COUNT, id)
}

export const addListMsg = ({commit, state}, msg) => {
  commit(TYPES.ADD_LIST_MSG, msg)
}

export const setImInfo = ({commit, state}, imInfo) => {
  commit(TYPES.SET_IM_INFO, imInfo)
}

export const setNowChat = ({commit, state}, arr) => {
  commit(TYPES.SET_NOW_CHAT, arr)
}
