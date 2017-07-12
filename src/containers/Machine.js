

import React, { Component } from 'react'
import MachineHead from '../components/MachineHead'



export default class User extends Component {
  render() {
    return(
      <div className='user-container' >
        <MachineHead { ...this.props } />
      </div>
      )
  }
}
