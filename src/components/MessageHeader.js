

import React from 'react'
import { Link } from 'react-router'
import dispatch from '../actions/dispatch'

const MessageHeader = ({ state }) => (
  <div className='message-header-container' >
    <div className='message-header-left' >
      <div className={ state.message.messageSelect==='notsend' ? 'message-header-item message-header-select' : 'message-header-item message-header-noselect' }
           onClick={ messageSelect } data-id='未发送' >未发送</div>
      <div className={ state.message.messageSelect==='send' ? 'message-header-item message-header-select' : 'message-header-item message-header-noselect' }
           onClick={ messageSelect } data-id='已发送' >已发送</div>
    </div>
    <Link to='/message/new' className='message-header-right'  >
      <div className='message-header-icon' >
        <i className="iconfont icon-tianjiajiahaowubiankuang"  ></i>
      </div>
      <div className='message-header-text'  >创建信息</div>
    </Link>
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
