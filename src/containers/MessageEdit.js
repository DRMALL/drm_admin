

import React, { Component } from 'react'
import Button from 'antd/lib/button'
import getMessageById from '../actions/getMessageById'
import MessageInput from '../components/MessageInput'
import editMessage from '../actions/editMessage'

export default class MessageEdit extends Component {
  componentDidMount() {
    getMessageById(localStorage.getItem('messageId'))
  }
  render() {
    return(
      <div>
        <div className='message-edit-title' >修改信息</div>
        <div className='message-edit-content' >
          <MessageInput  { ...this.props } />
          <div className='message-edit-button' >
            <Button data-type='false' onClick={ editMessage } >保存</Button>
            <Button data-type='true' onClick={ editMessage } >群发</Button>
          </div>
        </div>
      </div>
      )
  }
}
