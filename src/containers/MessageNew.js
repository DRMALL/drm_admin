

import React, { Component } from 'react'
import MessageInput from '../components/MessageInput'
import saveMessage from '../actions/saveMessage'
import Button from 'antd/lib/button'
import dispatch from '../actions/dispatch'


export default class MessageNew extends Component {
  componentDidMount() {
    dispatch('MESSAGE_NEW_MESSAGE_START')
  }
  render() {
    return (
      <div className='message-new-container' >
        <div className='message-new-title' >创建信息</div>
        <div className='message-new-content' >
          <MessageInput  { ...this.props } />
          <div className='message-new-button' >
            <Button data-type='false' onClick={ saveMessage } >保存</Button>
            <Button data-type='true' onClick={ saveMessage } >发布</Button>
          </div>
        </div>
      </div>
      )
  }
}



