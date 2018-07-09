import request from '../common/js/request'

export default {
  /**
   * 我的名片信息
   * @returns {*}
   */
  myBusinessCard () {
    let url = 'api/employee/my-business-card'
    return request.get(url)
  },
  /**
   * 我的名片信息
   * @returns {*}
   */
  updateMyBusiness () {
    let url = 'api/employee/update-my-business'
    return request.get(url)
  }
}