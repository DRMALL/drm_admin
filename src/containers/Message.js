

import React, { Component } from 'react'
import MessageTable from '../components/MessageTable'
import MessageHeader from '../components/MessageHeader'
import getMessageArr from '../actions/getMessageArr'



export default class Message extends Component {
  componentDidMount() {
    getMessageArr()
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
