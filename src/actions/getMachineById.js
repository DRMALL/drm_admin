

import { machineAction } from '../commons/apis'
import dispatch from './dispatch'
import Http from './Http'
import moment from 'moment'

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
    result.timelines = result.timelines.map(item => {
      let str = moment(item.line_time).format('YYYYMMDD')
      let num =parseInt(str, 10)
      item.time = num
      return item
    })
    result.timelines = result.timelines.sort(function(a,b){
      return (a.time - b.time)
    })
    dispatch('MACHINE_GET_MACHINE_BY_ID', result)
  })
  .catch(res => console.error(res))
}
