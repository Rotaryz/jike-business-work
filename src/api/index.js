// 将所有的接口请求都通过这个统一输出
import business from './business'
import upload from './upload'
import client from './client'
import jwt from './jwt'
import im from './im'
import clientDetail from './clientDetail'

// 授权模块
export const Jwt = jwt

// 名片
export const Business = business

// 上传
export const UpLoad = upload

// 客户资料
export const ClientDetail = clientDetail

// 客户
export const Client = client

// 雷达消息im
export const Im = im
