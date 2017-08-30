

import React, { Component } from 'react'
import MachineInput from '../components/MachineInput'
import machineNews from '../actions/machineNews'
import MachineRecord from '../components/MachineRecord'
import dispatch from '../actions/dispatch'
import getMachineCCKindArr from '../actions/getMachineCCKindArr'
import getMachineFuleKindArr from '../actions/getMachineFuleKindArr'
import getMachinePresureKindArr from '../actions/getMachinePresureKindArr'
import getMachineTimeKindArr from '../actions/getMachineTimeKindArr'


export default class MachineNew extends Component {
  componentDidMount() {
    dispatch('MACHINE_NEW_MACHINE_RESET')
    Promise.all([getMachineTimeKindArr(), getMachineCCKindArr(), getMachinePresureKindArr(), getMachineFuleKindArr()])
  }
  render() {
    return(
      <div>
        <div className='machine-new-title' >添加设备</div>
        <div className='machine-new-content' >
          <MachineInput { ...this.props } />
          <MachineRecord { ...this.props.state.machine } />
          <div style={{ display: 'flex', marginTop: 20 }} >
            <div className='machine-new-button machine-edit-btn' onClick={ machineNews }
                >提交</div>
          </div>
        </div>
      </div>
      )
  }
}
