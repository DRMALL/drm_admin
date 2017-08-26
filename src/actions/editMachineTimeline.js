

import store from '../commons/store'
import Http from './Http'
import { browserHistory } from 'react-router'
import moment from 'moment'
// import MissWarn from '../utils/MissWarn'
import message from 'antd/lib/message'
import { machineAction } from '../commons/apis'
import getMachineArr from './getMachineArr'
import dispatch from './dispatch'

export default () => {
  const { line_time, line_des, line_type, timelines} = store.getState().machine
  if(!line_time||!line_des||!line_type) {
    const str = !line_time ? '时间' : !line_type ? '分类' : '描述'
    message.warning(`请输入${str}后再次尝试`)
  }
    else {
      let timeline = {}
      timeline.line_time = moment(line_time).format('YYYY-MM-DD')
      timeline.line_des = line_des
      timeline.line_type = line_type

      if(line_time&&line_des&&line_type) timelines.push(timeline)
      let datas = { timelines }
      let id = localStorage.getItem('machineId')

      return new Promise((resolve,reject) => {
      Http(`${machineAction}/${id}`, 'put', true, datas)
      .then(res => {
        dispatch('MACHINE_EDIT_MACHINE_SUCCESS')
        browserHistory.push('/machine')
        resolve()
        getMachineArr()
      })
      .catch(res => {
        console.error(res)
        reject()
      } )
      })

    }
}
