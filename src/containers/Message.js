

import React, { Component } from 'react'
import UserArr from '../components/UserArr'



export default class Message extends Component {
  render() {
    return(
      <div className='user-container' >
        <UserArr { ...this.props } />
      </div>
      )
  }
}
