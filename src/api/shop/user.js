import request from '@/utils/request'

const api_name = '/shopservice/user'
export default {
  getUserAndAddressAndOrder() {
    return request({
      url: `${api_name}`,
      method: 'get'
    })
  }
}
