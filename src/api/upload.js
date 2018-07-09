import request from '../common/js/request'

export default {
  /**
   * 上传图片
   * @param data
   * @returns {*}
   */
  upLoadImage (data) {
    let url = 'api/merchant/images'
    return request.post(url, data)
  }
}