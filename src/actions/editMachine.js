

import store from '../commons/store'
import Http from './Http'
import { browserHistory } from 'react-router'
import moment from 'moment'
import MissWarn from '../utils/MissWarn'
import { machineAction } from '../commons/apis'
import getMachineArr from './getMachineArr'
import dispatch from './dispatch'

export default () => {
  const { name, number, fileList, cc, pressure, combustible, description, address, times, timedes, timetype } = store.getState().machine
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
      let timelines = {}
      timelines.time = moment(times).format('YYYY-MM-DD')
      timelines.timedes = timedes
      timelines.timetype = timetype
      let data = {name, number, images, cc, pressure, combustible, description, address}
      let datas = {name, number, images, cc, pressure, combustible, description, address, timelines }
      let dataxx = (!times||!timedes||!timetype) ? data : datas
      let id = localStorage.getItem('machineId')

      Http(`${machineAction}/${id}`, 'put', true, dataxx)
      .then(res => {
        dispatch('MACHINE_EDIT_MACHINE_SUCCESS')
        browserHistory.push('/machine')
        getMachineArr()
      })
      .catch(res => console.error(res) )
    }
}
