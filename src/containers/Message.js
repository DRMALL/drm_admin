

import React, { Component } from 'react'
import MessageTable from '../components/MessageTable'
import MessageHeader from '../components/MessageHeader'
import getMessageArr from '../actions/getMessageArr'
import getMessageUnpublished from '../actions/getMessageUnpublished'



export default class Message extends Component {
  componentDidMount() {
    //getMessageArr()
    getMessageUnpublished()
  }
  render() {
    return(
      <div className='user-container' >
        <MessageHeader { ...this.props } />
        <MessageTable { ...this.props } />
      </div>
      )
  }
}
