import request from 'common/js/request'
import {baseUrl} from 'common/js/constants'

export default {
  clientGetGroupList(data, loading) {
    const url = `${baseUrl.api}/api/employee/group`
    console.log(url)
    return request.get(url, data, loading)
  }
}
