

import request from 'superagent'
import notification from 'antd/lib/notification'
import resetLogin from './resetLogin'

export default class HttpCalss {
  constructor(source) {
    this.source = source
    this.token = `token=${localStorage.getItem('token')}`
    this.tip = true
  }
  hideTip(){
    this.tip = false
    return this
  }
  get(){
  return new Promise((resolve, reject)=> {
    request
    .get(`${this.source}?${this.token}`)
    .then(res => {
      if(res.body.code===200){
        success(res, this.tip)
        resolve(res)
      }
      else if(res.body.code===402){
        fail(res)
        resetLogin()
        reject(res)
      }
      else {
        fail(res)
        reject(res)
      }
    })
    .catch(res => {
        fail(res)
        reject(res)
      })
  })
  }
}

// function handle(res, tip){
//   return new Promise((resolve, reject) => {
//       if(res.body.code===200||res.body.code===201){
//         success(res, tip)
//          resolve(res)
//       }
//       else if(res.body.code===402){
//         fail(res)
//         resetLogin()
//         reject(res)
//       }
//       else {
//         fail(res)
//         reject(res)
//       }
//   })
// }

function success(res, tip){
  if(tip){
    notification.success({
      message: '提示',
      description: res.body.message ? res.body.message : '获取数据成功!'
    })
  }
  else {
    // console.log()
  }
}

function fail(res){
  if(res.body){
    notification.error({
      message: '提示',
      description: res.body.message ? res.body.message : '获取数据失败!'
    })
  }
  else {
    notification.error({
      message: '提示',
      description: '获取数据失败!'
    })
  }
}
