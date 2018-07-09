import request from '../common/js/request'

export default {
  /**
   * 我的名片信息
   * @returns {*}
   */
  getClientDetail (id) {
    let url = `api/employee/employee-customer-flow/${id}`
    return request.get(url)
  },
  /**
   * 我的名片信息
   * @returns {*}
   */
  saveClientDetail (id, data) {
    let url = `api/employee/employee-customer/${id}`
    return request.get(url, data)
  }
}
