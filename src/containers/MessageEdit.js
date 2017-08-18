

import React, { Component } from 'react'
import Button from 'antd/lib/button'
import getMessageById from '../actions/getMessageById'
import MessageInput from '../components/MessageInput'
import editMessage from '../actions/editMessage'
import dispatch from '../actions/dispatch'

export default class MessageEdit extends Component {
  componentDidMount() {
    getMessageById(localStorage.getItem('messageId'))
    dispatch('MESSAGE_EDITOR_CAN_EDIT')
  }
  render() {
    const { published } = this.props.state.message
    return(
      <div>
        <div className='message-edit-title' >修改信息</div>
        <div className='message-edit-content' >
          <MessageInput  { ...this.props } />
          <div className='message-edit-button' >
            <Button data-type='false' onClick={ editMessage }
               disabled={ published } >保存</Button>
            <Button data-type='true' onClick={ editMessage } >发布</Button>
          </div>
        </div>
      </div>
      )
  }
}
