

import React, { Component } from 'react'
import MessageInput from '../components/MessageInput'
import saveMessage from '../actions/saveMessage'
import dispatch from '../actions/dispatch'


export default class MessageNew extends Component {
  componentDidMount() {
    dispatch('MESSAGE_NEW_MESSAGE_START')
  }
  render() {
    return (
      <div className='message-new-container' >
        <div className='message-new-title'  style={{ color: 'rgba(0,0,0,0.8)' }} >创建信息</div>
        <div className='message-new-content' >
          <MessageInput  { ...this.props } />
          <div className='message-new-button' >
            <div className='machine-edit-btns'  data-type='false'
                 onClick={ saveMessage }   >保存</div>
            <div className='machine-edit-btn' data-type='true'
                 onClick={ saveMessage }>发布</div>
          </div>
        </div>
      </div>
      )
  }
}



