import createAxios from '@/utils/request'

const systemBaseUrl = import.meta.env.VITE_SYSTEM_BASE_URL

// 角色列表查询
export function queryRoleList(params = {}, option?: RequestOption) {
  return createAxios(option).post(`${systemBaseUrl}/api/system/role/query`, params)
}

// 保存系统角色
export function postSaveRole(params = {}, option?: RequestOption) {
  return createAxios(option).post(`${systemBaseUrl}/api/system/role/save`, params)
}

// 获取角色详情
export function getRoleById(id) {
  return createAxios().get(`${systemBaseUrl}/api/system/role/get/${id}`)
}

// 批量删除角色
export function delRoleByIds(ids, option?: RequestOption) {
  return createAxios(option).delete(`${systemBaseUrl}/api/system/role/del/${ids}`)
}
