

import React from 'react'
import dispatch from '../actions/dispatch'
import ContentLink from './ContentLink'

const MessageHeader = ({ state }) => (
  <div className='message-header-container' >
    <div className='message-header-left' >
      <div className={ 'message-header-item' + (state.message.messageSelect==='notsend' ? ' message-header-select' : ' message-header-noselect') }
           onClick={ messageSelect } data-id='未发送' >未发送</div>
      <div className={ state.message.messageSelect==='send' ? 'message-header-item message-header-select' : 'message-header-item message-header-noselect' }
           onClick={ messageSelect } data-id='已发送' >已发送</div>
    </div>
    <div className='message-header-link' >
      <ContentLink path='/message/new' tip='创建信息' />
    </div>
  </div>
  )

export default MessageHeader

function messageSelect(e){
  const { id } = e.currentTarget.dataset
  if(id==='未发送'){
    dispatch('MESSAGE_SELECT_SEND_FASLE')
  }
  else
  dispatch('MESSAGE_SELECT_SEND_TRUE')
}
