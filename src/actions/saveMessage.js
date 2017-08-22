

import dispatch from './dispatch'
import { newMessage } from '../commons/apis'
import store from '../commons/store'
import Http from './Http'
import Modal from 'antd/lib/modal'
import { browserHistory } from 'react-router'
import notification from 'antd/lib/notification'
import getMessageArr from './getMessageArr'

export default e => {
  console.log(e.currentTarget.dataset.type)
  const { type } = e.currentTarget.dataset
  const { title, abstract, content, fileList } = store.getState().message
  if(!title||!abstract||!content||!fileList.length) tips(title, abstract, content)
  else {
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
    if(published) messagePublished(data)
    else  messageSave(data)
}

function tips(title, abstract, content){
  let str = !title ? '标题' :!content ? '内容' : !abstract ? '摘要' : '封面图'
  notification.warn({
    message: '提示',
    description: `请输入${str}`,
  })
}

function messageSave(data){
  dispatch('MESSAGE_SAVE_START')
  Http( newMessage, 'post', true, data )
  .then( res => dispatch('MESSAGE_SAVE_SUCCESS') )
  .catch( res => {
    dispatch('MESSAGE_SAVE_FAIL')
    console.error(res)
  } )
}

function messagePublished(data){
  dispatch('MESSAGE_SAVE_START')
  Http( newMessage, 'post', false, data )
  .then( res => {
    dispatch('MESSAGE_SAVE_SUCCESS')
    notification.success({
        message: '提示',
        description: '发布成功',
      })
    getMessageArr()
    dispatch('MESSAGE_SELECT_SEND_TRUE')
    browserHistory.push('/message')
  })
  .catch( res => {
    dispatch('MESSAGE_SAVE_FAIL')
    notification.error({
        message: '提示',
        description: '发布失败',
      })
    console.error(res)
  } )
}
