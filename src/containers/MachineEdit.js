

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
          <Button onClick={ editMachine } className='machine-edit-button' >提交</Button>
          <div className='machine-edit-timeline' >
            <MachineTimeline timelines={ this.props.state.machine.timelines } />
          </div>
        </div>
      </div>
      )
  else return <div>loading...</div>
  }
}
