/**
 * Created by BigZ on 18/5/7.
 */
import axios from 'axios'

export function registry(dat) {


  // const url = 'http://mx.hello-wx.cc/parse/functions/transferOrderDetial'
  // const dat = {"orderNo":"42715256765161397967"}
  const url = 'http://mx.hello-wx.cc/parse/functions/registry'
  // const dat = {"mobileNumber":"18817231703","code":"8888","password":"1255115"}

  /*axios.post(url,{
   orderNo:"42715256765161397967"
   },{
   headers: {
   'Content-Type':'application/json',
   'X-Parse-Application-Id':'muxin_server_application_id',
   'X-Parse-REST-API-KEY':'muxin_server_reset_api_key'
   },
   }).then((res) => {
   data = res.data.result
   console.log(data);
   }).catch((err) => {
   console.log(err)
   })*/
  return axios.post(url, dat, {
    headers: {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'muxin_server_application_id',
      'X-Parse-REST-API-KEY': 'muxin_server_reset_api_key'
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function shopDetail(dat) {
  const url = 'http://mx.hello-wx.cc/parse/functions/shopDetail'
  return axios.post(url, dat, {
    headers: {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'muxin_server_application_id',
      'X-Parse-REST-API-KEY': 'muxin_server_reset_api_key'
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function carPoolDetial(dat) {
  const url = 'http://mx.hello-wx.cc/parse/functions/carPoolDetial'
  return axios.post(url, dat, {
    headers: {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'muxin_server_application_id',
      'X-Parse-REST-API-KEY': 'muxin_server_reset_api_key'
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function carPoolCommentList(dat) {
  const url = 'http://mx.hello-wx.cc/parse/functions/carPoolCommentList'
  return axios.post(url, dat, {
    headers: {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'muxin_server_application_id',
      'X-Parse-REST-API-KEY': 'muxin_server_reset_api_key'
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}


export function getUrl() {
  let str = location.href; //取得整个地址栏
  //移除微信分享链接自带参数
  str = str.replace('?from=singlemessage', '')
  str = str.replace('?from=groupmessage', '')
  str = str.replace('?from=timeline', '')
  window.location.href = str
  let theRequest = new Object();
  let num = str.indexOf("?")
  str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

  let arr = str.split("&"); //各个参数放到数组里
  for (let i = 0; i < arr.length; i++) {
    theRequest[arr[i].split("=")[0]] = unescape(arr[i].split("=")[1]);
  }
  return theRequest;
}


export function getSMSMsg(dat) {
  const url = 'http://mx.hello-wx.cc/parse/functions/sendSMSRegistryMsg'
  return axios.post(url, dat, {
    headers: {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'muxin_server_application_id',
      'X-Parse-REST-API-KEY': 'muxin_server_reset_api_key'
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}



