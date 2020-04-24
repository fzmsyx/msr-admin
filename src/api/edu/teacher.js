import request from '@/utils/request'
const api_name = '/eduservice/edu-teacher'
export default {

  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  removeById(teacherId) {
    return request({
      url: `${api_name}/${teacherId}`,
      method: 'delete'
    })
  },
  save(teacher) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: teacher
    })
  },
  // 通过ID查询
  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },
  updateById(teacher) {
    return request({
      url: `${api_name}/${teacher.id}`,
      method: 'put',
      data: teacher
    })
  },
  getList() {
    return request({
      url: `${api_name}/list`,
      method: 'get'
    })
  }
}
