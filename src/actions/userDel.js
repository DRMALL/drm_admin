

import Http from './Http'
import { userAction } from '../commons/apis'
import getUserArr from './getUserArr'


export default e => {
  console.log(e.currentTarget.dataset)
  const { userId } = e.currentTarget.dataset
  Http(`${userAction}/${userId}`, 'del', true)
  .then(res => {
    getUserArr()
  } )
  .catch(res => console.error(res) )
}
