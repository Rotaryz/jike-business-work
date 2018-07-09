import request from 'common/js/request'

export default {
  // 获取客户列表
  getGroupList(data, loading) {
    const url = `/api/employee/group`
    return request.get(url, data, loading)
  },
  // 新建分组
  createGroup(data, loading) {
    const url = `api/employee/group`
    return request.post(url, data, loading)
  }
}
