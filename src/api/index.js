// 将所有的接口请求都通过这个统一输出
import business from './business'
import upload from './upload'
import jwt from './jwt'

// 授权模块
export const Jwt = jwt

// 名片
export const Business = business

// 上传
export const UpLoad = upload
