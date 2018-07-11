export default class Oauth {
  constructor() {
    const uri = 'http://business-work.jkweixin.com/oauth'
    const redirectUri = encodeURIComponent(uri)
    this.oauthUri = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww80c31779e77cc4ba&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
  }
}
