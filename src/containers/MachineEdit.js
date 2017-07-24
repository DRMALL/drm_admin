

import React, { Component } from 'react'
import getMachineById from '../actions/getMachineById'
import MachineInput from '../components/MachineInput'
import MachineRecord from '../components/MachineRecord'
import Button from 'antd/lib/button'
import editMachine from '../actions/editMachine'
import MachineTimeline from '../components/MachineTimeline'

export default class MachineEdit extends Component {
  componentDidMount() {
    getMachineById(localStorage.getItem('machineId'))
  }
  render() {
    const { number } = this.props.state.machine
    if(number)
    return(
      <div>
        <div className='machine-new-title' >修改设备</div>
        <div className='machine-edit-content' >
          <MachineInput { ...this.props } />
          <MachineRecord { ...this.props } />
          <Button onClick={ editMachine } >提交</Button>
          <MachineTimeline { ...this.props } />
        </div>
      </div>
      )
  else return <div>loading...</div>
  }
}
