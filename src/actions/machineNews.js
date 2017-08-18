

import Http from './Http'
import { newMachine } from '../commons/apis'
import store from '../commons/store'
import MissWarn from '../utils/MissWarn'
import dispatch from './dispatch'
import resetMachineImg from './resetMachineImg'
import moment from 'moment'

export default ()=> {
  const { name, number, fileList, cc, pressure, combustible, description, address, line_time, line_des, line_type, classify } = store.getState().machine
  if(!name||!number||!(fileList[0])||!cc||!pressure||!combustible||!description||!address||!classify) MissWarn()
   else {
    let imagesArr = Array.from({length: fileList.length})
    let images = imagesArr.map((item, index) => {
      item = {}
      item.uid = '-'+ index
      item.url = fileList[index].response.data.url
      item.status = 'done'
      return item
    })
    let timelines = []
    if(line_time&&line_des&&line_type){
    timelines = [
      { line_time: moment(line_time).format('YYYY-MM-DD'), line_des, line_type }
    ]
    }
    let data = { name, number, images, cc, pressure, combustible, description, address, timelines, classify }
    Http(newMachine, 'post', true, data)
    .then(res => {
      resetMachineImg(fileList)
      dispatch('MACHINE_ADD_MACHINE_SUCCESS')
  })
    .catch(res => console.error(res))
  }
}
