

import store from '../commons/store'
import Http from './Http'
import { browserHistory } from 'react-router'
// import MissWarn from '../utils/MissWarn'
import message from 'antd/lib/message'
import { machineAction } from '../commons/apis'
import getMachineArr from './getMachineArr'
import dispatch from './dispatch'
import editMachineLocation from './editMachineLocation'

export default () => {
  const { name, number, fileList, cc, pressure, combustible, description, address, Taddress, classify, remark } = store.getState().machine
  if(!name||!number||!(fileList[0])||!cc||!pressure||!combustible||!description||!address||!classify) {
    const str = !name ? '设备名称' : !number ? '设备编号' : !pressure ? '压力分类' : !combustible ? '燃料分类' : !cc ? '排量分类' : !classify ? '设备分类' : !address ? '设备所在地' : !description ? '设备描述' : !remark ? '设备备注' : '设备图片'
    message.warning(`请输入${str}后再次尝试`)
  }
    else {
      let imgArr = Array.from({ length: fileList.length })
      let images = imgArr.map((item, index) => {
        item = {}
        item.uid = '-'+ index
        item.url = fileList[index].response ? fileList[index].response.data.url : fileList[index].url
        item.status = 'done'
        return item
      })
      // let timeline = {}
      // timeline.line_time = moment(line_time).format('YYYY-MM-DD')
      // timeline.line_des = line_des
      // timeline.line_type = line_type



      // if(line_time&&line_des&&line_type) timelines.push(timeline)
      let datas = {name, number, images, cc, pressure, combustible, description,  classify, remark }
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
