

import dispatch from './dispatch'
import { newMessage } from '../commons/apis'
import store from '../commons/store'
import Http from './Http'

export default e => {
  console.log(e.currentTarget.dataset.type)
  const { type } = e.currentTarget.dataset
  let published = type==='true' ? true : false
  const { title, abstract, content, fileList } = store.getState().message
  let imagesArr = Array.from({ length: fileList.length })
  let images = imagesArr.map((item, index) => {
    item = {}
    item.uid = '-' + index
    item.url = fileList[index].response.data.url
    item.status = 'done'
    return item
  })
  const data = { title, abstract, content, images, published }
  dispatch('MESSAGE_SAVE_START')
  Http( newMessage, 'post', true, data )
  .then( res => dispatch('MESSAGE_SAVE_SUCCESS') )
  .catch( res => {
    dispatch('MESSAGE_SAVE_FAIL')
    console.error(res)
  } )
}
