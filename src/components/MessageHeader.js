

import React from 'react'
import { Link } from 'react-router'

const MessageHeader = () => (
  <div className='message-header-container' >
    <div className='message-header-left' >
      <div className='message-header-item message-header-select' >未发送</div>
      <div className='message-header-item message-header-noselect' >已发送</div>
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
