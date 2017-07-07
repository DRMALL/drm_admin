

import React, { Component } from 'react'
import UserArr from '../components/UserArr'
import UserHead from '../components/userHead'



export default class User extends Component {
  render() {
    return(
      <div className='user-container' >
        <UserHead { ...this.props }  />
        <UserArr { ...this.props } />
      </div>
      )
  }
}
