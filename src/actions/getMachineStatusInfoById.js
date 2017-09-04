

import { machineStatusInfo } from '../commons/apis'
import dispatch from './dispatch'
import Httpid from './Httpid'

export default number => {
  const token = localStorage.getItem('token')
  Httpid(`${machineStatusInfo}?number=${number}&token=${token}`, 'get', false)
  .then(res => {
    const result = res.body.data.data
    dispatch('MACHINE_GET_MACHINE_STATUS_INFO_BY_ID', result)
  })
  .catch(res => console.error(res))
}
