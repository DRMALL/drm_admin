

import Http from './Http'
import { userAction } from '../commons/apis'
import { browserHistory } from 'react-router'
// import dispatch from './dispatch'
import store from '../commons/store'

export default () => {
  const { name, password, email, phone, company_name, address } = store.getState().user
  const data = { name, password, email, phone, company_name, address }
  const userId = localStorage.getItem('userId')
  Http( `${userAction}/${userId}`, 'put', true, data )
  .then(res => browserHistory.push('/user'))
  .catch(res => console.error(res) )
}
