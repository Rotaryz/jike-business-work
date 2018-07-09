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
  },
  // 获取设置分组的客户列表
  getSetGroupList(data, loading) {
    const url = `/api/employee/set-group`
    return request.get(url, data, loading)
  },
  // 在设置分组里面为用户更改组
  setGroup(data, loading) {
    const url = `/api/employee/set-group`
    return request.post(url, data, loading)
  },
  // 分组内删除用户
  delCustomer(data, loading) {
    const url = `/api/employee/group-customer`
    return request.delete(url, data, loading)
  }
}
