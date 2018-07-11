const env = process.env

const DEV_URL = {
  api: 'https://business-api.jerryf.cn'
}

const TEST_URL = {
  api: 'https://admin-api.jkweixin.net'
}

const PROD_URL = {
  api: 'https://business-api.jerryf.cn'
}

export const BASE_URL = env.NODE_ENV === 'production' ? PROD_URL : env.NODE_ENV === 'test' ? TEST_URL : DEV_URL

export const ERR_OK = 0
