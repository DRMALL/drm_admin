

import { machineAction } from '../commons/apis'
import dispatch from './dispatch'
import Http from './Http'

export default id => {
  Http(`${machineAction}/${id}`, 'get', false)
  .then(res => {
    const result = res.body.data
    result.fileList = result.images.map((item, index) => {
      item.uid = '-'+index
      item.status= "done"
      return item
    })
    result.Taddress = result.address
    dispatch('MACHINE_GET_MACHINE_BY_ID', result)
  })
  .catch(res => console.error(res))
}
