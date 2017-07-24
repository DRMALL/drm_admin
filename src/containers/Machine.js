

import React, { Component } from 'react'
import MachineHead from '../components/MachineHead'
import MachineTable from '../components/MachineTable'



export default class User extends Component {
  render() {
    return(
      <div className='user-container' >
        <MachineHead { ...this.props } />
        <MachineTable { ...this.props } />
      </div>
      )
  }
}
