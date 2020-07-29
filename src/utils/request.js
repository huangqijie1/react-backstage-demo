import axios from 'axios'
import history from './history'
import { notification } from 'antd';
const errorCode = {
  '000': '操作太频繁，请勿重复请求',
  '200': '操作成功',
  '401': '当前操作没有权限',
  '403': '当前操作没有权限',
  '404': '资源不存在',
  '417': '未绑定登录账号，请使用密码登录后绑定',
  '423': '演示环境不能操作，如需了解联系冷冷',
  '426': '用户名不存在或密码错误',
  '428': '验证码错误,请重新输入',
  '429': '请求过频繁',
  '479': '演示环境，没有权限操作',
  'default': '系统未知错误,请反馈给管理员'
}
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '',
  timeout: 120000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE'
  }
})

// 请求拦截
service.interceptors.request.use(config => {
  console.log('request---',config)
  const token = sessionStorage.getItem('HQJ_token')
  if (token) {
    config.headers['Authorization'] = 'HQJ' + token
  }
  return config
},error => Promise.reject(error))

// 响应拦截
service.interceptors.response.use(response => {
  console.log('response---',response)
  const message = response.data.msg || errorCode[response.status] || errorCode['default']
  if (response.status === 401) {
    notification.error({
      message: '登录过时'
    })
    history.push('/login')
    return
  }
  if (response.status !== 200 || response.data.code === 1) {
    notification.error({
      message: '错误',
      description: message
    })
    return Promise.reject(new Error(message))
  }
  return response.data
},error => Promise.reject(error))
export default service