

import React, { Component } from 'react'
import MachineInput from '../components/MachineInput'
import Button from 'antd/lib/button'
import machineNews from '../actions/machineNews'
import dispatch from '../actions/dispatch'


export default class MachineNew extends Component {
  componentDidMount() {
    dispatch('MACHINE_NEW_MACHINE_RESET')
  }
  render() {
    return(
      <div>
        <div className='machine-new-title' >添加设备</div>
        <div className='machine-new-content' >
          <MachineInput { ...this.props } />
          <Button className='machine-new-button' onClick={ machineNews } >提交</Button>
        </div>
      </div>
      )
  }
}
