

import dispatch from './dispatch'
import { newMessage } from '../commons/apis'
import store from '../commons/store'
import Http from './Http'
import Modal from 'antd/lib/modal'

export default e => {
  console.log(e.currentTarget.dataset.type)
  const { type } = e.currentTarget.dataset
  const { title } = store.getState().message
  let published = type==='true' ? true : false
  if(published){
    Modal.confirm({
      title: '提示',
      content: `确定群发信息 ${title}! 点击后不可取消`,
      onOk(){
        sendMessagexxxx(published)
      },
      onCancle(){
        console.log('取消')
      }
    })
  }
  else  sendMessagexxxx(published)
}

function sendMessagexxxx(published){
  dispatch('MESSAGE_CHANGE_EDITOR_STATUS')
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
