

import { machineExcle } from '../commons/apis'
import store from '../commons/store'
import Httpid from './Httpid'
import moment from 'moment'
import message from 'antd/lib/message'

export default () => {
  const { downloadTime } = store.getState().machine
    if(downloadTime&&downloadTime.length){
  const startTime = moment(downloadTime[0]).format('YYYY-MM-DD')
      , endTime = moment(downloadTime[1]).format('YYYY-MM-DD')
      , token = localStorage.getItem('token')

    Httpid(`${machineExcle}?startTime=${startTime}&endTime=${endTime}&token=${token}`, 'get', true)
    .then(res => console.log(res))
    .catch(res => console.error(res) )
  }
  else message.warning('请选择时间后，在导出文件')
}
