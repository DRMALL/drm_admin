

// import { newUser } from '../commons/apis'
// import request from 'superagent'
// import dispatch from './dispatch'
// import store from '../commons/store'
// import notification from 'antd/lib/notification'
// // import { browserHistory } from 'react-router'
// import resetLogin from './resetLogin'

// export default () => {
//   const { name, password, email, phone, company_name, address } = store.getState().user
//   const token = localStorage.getItem('token')
//   console.log('console.log()')
//   request
//   .post(`${newUser}?token=${token}`)
//   .send({ name, password, email, phone, company_name, address })
//   .then( res => {
//     if(res.body.code===201){
//       addSuccess()
//     }
//     else if(res.body.code===402) resetLogin()
//     else addFail(res)
//   } )
//   .catch( res => addFail(res) )
// }

// function addSuccess(){
//   notification.success({
//     message: '提示',
//     description: '新增用户成功'
//   })
//   dispatch('USER_NEW_INPUT_RESET')
//   // browserHistory.push('/user')
// }

// function addFail(res){
//   if(res.body.code===400) {
//     notification.error({
//       message: '提示',
//       description: '缺少数据,新增用户失败'
//     })
//   }
//   else {
//     notification.error({
//       message: '提示',
//       description: '网络错误，新增用户失败'
//     })
//     console.error(res)
//   }

// }




import { newUser } from '../commons/apis'
import Http from './Http'
import dispatch from './dispatch'
import store from '../commons/store'


export default () => {
  const { name, password, email, phone, company_name, address } = store.getState().user
  const data = { name, password, email, phone, company_name, address }
  Http(newUser, 'post', true, data)
  .then( res => dispatch('USER_NEW_INPUT_RESET') )
  .catch( res => console.error(res) )
}
