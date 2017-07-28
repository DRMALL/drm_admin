

import { messageEdit } from '../commons/apis'
import dispatch from './dispatch'
import Httpid from './Httpid'
import store from '../commons/store'
import { browserHistory } from 'react-router'
import getMessageArr from './getMessageArr'
import Modal from 'antd/lib/modal'
import MissWarn from '../utils/MissWarn'

export default e => {
  const published = e.currentTarget.dataset.type==='true' ? true : false
  const { title, abstract, content, fileList } = store.getState().message
  if(published) {
    if(!title||!abstract||!content||!fileList) MissWarn()
    else {
        Modal.confirm({
            title: '提示',
            content: `确定群发信息 ${title}! 点击后不可取消`,
            onOk(){
              editSavexxx(published)
            },
            onCancle(){
              console.log('取消')
            }
          })
        }
      }
    else editSavexxx(published)
}

function editSavexxx(published){
  const token = localStorage.getItem('token')
  const id = localStorage.getItem('messageId')
  const api = `${messageEdit}?id=${id}&token=${token}`
  const { title, abstract, content, fileList } = store.getState().message
  if(!title||!abstract||!content||!fileList) MissWarn()
  else{
    let imagesArr = Array.from({ length: fileList.length })
    let images = imagesArr.map((item, index) => {
      item = {}
      item.uid = '-' + index
      item.url = fileList[index].response ? fileList[index].response.data.url : fileList[index].url
      item.status = 'done'
      return item
    })
    const data = { title, abstract, content, images, published }
    dispatch('MESSAGE_EDIT_MESSAGE_START')
    Httpid( api, 'post', true, data )
    .then(res =>{
      getMessageArr()
     dispatch('MESSAGE_EDIT_MESSAGE_SUCCESS')
     browserHistory.push('/message')
   })
    .catch(res => {
      dispatch('MESSAGE_EDIT_MESSAGE_FAIL')
      console.error(res)
    } )
  }

}
