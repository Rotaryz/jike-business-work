import request from '../common/js/request'

export default {
  /**
   * 我的名片信息
   * @returns {*}
   */
  liveLogs () {
    let url = 'api/employee/live-logs'
    return request.post(url)
  }
}