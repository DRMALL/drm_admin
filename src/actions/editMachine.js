

import store from '../commons/store'
import Http from './Http'
import { browserHistory } from 'react-router'
import moment from 'moment'
import MissWarn from '../utils/MissWarn'
import { machineAction } from '../commons/apis'
import getMachineArr from './getMachineArr'
import dispatch from './dispatch'
import editMachineLocation from './editMachineLocation'

export default () => {
  const { name, number, fileList, cc, pressure, combustible, description, address, line_time, line_des, line_type, timelines, Taddress, classify } = store.getState().machine
  if(!name||!number||!(fileList[0])||!cc||!pressure||!combustible||!description||!address||!classify) MissWarn()
    else {
      let imgArr = Array.from({ length: fileList.length })
      let images = imgArr.map((item, index) => {
        item = {}
        item.uid = '-'+ index
        item.url = fileList[index].response ? fileList[index].response.data.url : fileList[index].url
        item.status = 'done'
        return item
      })
      let timeline = {}
      timeline.line_time = moment(line_time).format('YYYY-MM-DD')
      timeline.line_des = line_des
      timeline.line_type = line_type



      if(line_time&&line_des&&line_type) timelines.push(timeline)
      let datas = {name, number, images, cc, pressure, combustible, description, timelines, classify }
      let id = localStorage.getItem('machineId')

      if(Taddress !== address ) editMachineLocation(address)
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
