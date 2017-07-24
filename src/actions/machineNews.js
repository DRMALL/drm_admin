

import Http from './Http'
import { newMachine } from '../commons/apis'
import store from '../commons/store'
import MissWarn from '../utils/MissWarn'
import dispatch from './dispatch'
import resetMachineImg from './resetMachineImg'

export default ()=> {
  const { name, number, fileList, cc, pressure, combustible, description, address } = store.getState().machine
  if(!name||!number||!(fileList[0])||!cc||!pressure||!combustible||!description||!address) MissWarn()
   else {
    let imagesArr = Array.from({length: fileList.length})
    let images = imagesArr.map((item, index) => {
      item = {}
      item.uid = '-'+ index
      item.url = fileList[index].response.data.url
      item.status = 'done'
      return item
    })
    let data = {name, number, images, cc, pressure, combustible, description, address}
    Http(newMachine, 'post', true, data)
    .then(res => {
      resetMachineImg(fileList)
      dispatch('MACHINE_ADD_MACHINE_SUCCESS')
  })
    .catch(res => console.error(res))
  }
}
