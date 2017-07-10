

import Http from './Http'
import { userAction } from '../commons/apis'
import getUserArr from './getUserArr'


export default userId => {
  console.log(userId)
  Http(`${userAction}/${userId}`, 'del', true)
  .then(res => {
    getUserArr()
  } )
  .catch(res => console.error(res) )
}
