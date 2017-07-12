
import notification from 'antd/lib/notification'
import request from 'superagent'
import resetLogin from './resetLogin'

export default (api, method, tip, data ) => {
  return new Promise((resolve, reject) => {

     if(method==='get'){
      request
      .get(api)
      .then(res =>{
        if(res.body.code===200){
          success(res, tip)
           resolve(res)
        }
        else if(res.body.code===402) resetLogin()
        else {
          fail(res)
          reject(res)
        }
      })
      .catch(res => {
        fail(res)
        reject(res)
      })
     }


     else if(method==='post') {
      request
      .post(api)
      .send(data)
      .then(res =>{
        if(res.body.code===201){
          success(res, tip)
          resolve(res)
        }
        else if(res.body.code===402) resetLogin()
        else {
          fail(res)
          reject(res)
        }
      })
      .catch(res => {
        fail(res)
        reject(res)
      })
     }

  })
}

function success(res, tip) {
  if(!tip) console.log('忽略')
  else {
    notification.success({
      message: '提示',
      description: res.body.message ? res.body.message : '获取数据成功!'
    })
  }

}

function fail(res) {
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
