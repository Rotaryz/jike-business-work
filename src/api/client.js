import request from 'common/js/request'

export default {
  // 获取客户分组列表
  getGroupList(data, loading) {
    const url = `/api/employee/group`
    return request.get(url, data, loading)
  },
  // 新建分组
  createGroup(data, loading) {
    const url = `api/employee/group`
    return request.post(url, data, loading)
  },
  // 获取客户列表
  getCusomerList(data, loading) {
    const url = `/api/employee/employee-customer`
    return request.get(url, data, loading)
  }
}
