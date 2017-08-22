

import Http from './Http'
import { newMachine } from '../commons/apis'
import store from '../commons/store'
// import MissWarn from '../utils/MissWarn'
import message from 'antd/lib/message'
import dispatch from './dispatch'
import resetMachineImg from './resetMachineImg'
import moment from 'moment'

export default ()=> {
  const { name, number, fileList, cc, pressure, combustible, description, address, line_time, line_des, line_type, classify } = store.getState().machine
  if(!name||!number||!(fileList[0])||!cc||!pressure||!combustible||!description||!address||!classify||!line_time||!line_des||!line_type) {
    const str = !name ? '设备名称' : !number ? '设备编号' : !pressure ? '压力分类' : !combustible ? '燃料分类' : !cc ? '排量分类' : !classify ? '设备分类' : !address ? '设备所在地' : !description ? '设备描述' : !(fileList[0]) ? '设备图片' : !line_time ? '日期' : !line_des ? '分类' : '描述'
    message.warning(`请输入${str}后再次尝试`)
  }
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
