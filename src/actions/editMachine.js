

import store from '../commons/store'
import Http from './Http'
import { browserHistory } from 'react-router'
import moment from 'moment'
import MissWarn from '../utils/MissWarn'
import { machineAction } from '../commons/apis'
import getMachineArr from './getMachineArr'
import dispatch from './dispatch'

export default () => {
  const { name, number, fileList, cc, pressure, combustible, description, address, times, timedes, timetype, timelines, Taddress } = store.getState().machine
  if(!name||!number||!(fileList[0])||!cc||!pressure||!combustible||!description||!address) MissWarn()
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
      timeline.time = moment(times).format('YYYY-MM-DD')
      timeline.timedes = timedes
      timeline.timetype = timetype

      let addressxx = (Taddress.split('-')[0]===address) ? Taddress : `${address}-${Taddress}`

      if(times&&timedes&&timetype) timelines.push(timeline)
      let datas = {name, number, images, cc, pressure, combustible, description, timelines }
       datas.address = addressxx
      let id = localStorage.getItem('machineId')

      Http(`${machineAction}/${id}`, 'put', true, datas)
      .then(res => {
        dispatch('MACHINE_EDIT_MACHINE_SUCCESS')
        browserHistory.push('/machine')
        getMachineArr()
      })
      .catch(res => console.error(res) )
    }
}
