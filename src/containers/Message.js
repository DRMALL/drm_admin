

import React, { Component } from 'react'
import MessageTable from '../components/MessageTable'
import MessageHeader from '../components/MessageHeader'



export default class Message extends Component {
  render() {
    return(
      <div className='user-container' >
        <MessageHeader { ...this.props } />
        <MessageTable { ...this.props } />
      </div>
      )
  }
}
