

import React, { Component } from 'react'
import UserArr from '../components/UserArr'
import MessageHeader from '../components/MessageHeader'



export default class Message extends Component {
  render() {
    return(
      <div className='user-container' >
        <MessageHeader { ...this.props } />
        <UserArr { ...this.props } />
      </div>
      )
  }
}
