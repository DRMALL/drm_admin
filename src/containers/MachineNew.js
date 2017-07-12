

import React, { Component } from 'react'
import MachineInput from '../components/MachineInput'


export default class MachineNew extends Component {
  render() {
    return(
      <div>
        <div className='machine-new-title' >添加设备</div>
        <div className='machine-new-content' >
          <MachineInput { ...this.props } />
        </div>
      </div>
      )
  }
}
